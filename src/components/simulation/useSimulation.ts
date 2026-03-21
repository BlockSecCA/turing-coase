import { useState, useRef, useEffect, useCallback } from 'react'
import type { SimParams } from './types'
import { GRID, WIDTH, HEIGHT, CELL, PALETTE, PRESETS } from './constants'

interface SimState {
  u: Float64Array
  v: Float64Array
  nextU: Float64Array
  nextV: Float64Array
  step: number
}

function createGrid(): { u: Float64Array; v: Float64Array } {
  const u = new Float64Array(GRID * GRID)
  const v = new Float64Array(GRID * GRID)
  u.fill(1.0)
  v.fill(0.0)
  for (let i = 0; i < 20; i++) {
    const cx = Math.floor(Math.random() * GRID * 0.6 + GRID * 0.2)
    const cy = Math.floor(Math.random() * GRID * 0.6 + GRID * 0.2)
    const r = Math.floor(Math.random() * 6 + 3)
    for (let dy = -r; dy <= r; dy++) {
      for (let dx = -r; dx <= r; dx++) {
        if (dx * dx + dy * dy <= r * r) {
          const x = (cx + dx + GRID) % GRID
          const y = (cy + dy + GRID) % GRID
          const idx = y * GRID + x
          u[idx] = 0.5 + Math.random() * 0.1
          v[idx] = 0.25 + Math.random() * 0.1
        }
      }
    }
  }
  return { u, v }
}

function simulate(
  u: Float64Array, v: Float64Array,
  nextU: Float64Array, nextV: Float64Array,
  params: SimParams,
) {
  const { f, k, Du, Dv } = params
  for (let y = 0; y < GRID; y++) {
    for (let x = 0; x < GRID; x++) {
      const idx = y * GRID + x
      const left = y * GRID + ((x - 1 + GRID) % GRID)
      const right = y * GRID + ((x + 1) % GRID)
      const up = ((y - 1 + GRID) % GRID) * GRID + x
      const down = ((y + 1) % GRID) * GRID + x
      const lapU = u[left] + u[right] + u[up] + u[down] - 4 * u[idx]
      const lapV = v[left] + v[right] + v[up] + v[down] - 4 * v[idx]
      const uvv = u[idx] * v[idx] * v[idx]
      nextU[idx] = u[idx] + (Du * lapU - uvv + f * (1.0 - u[idx]))
      nextV[idx] = v[idx] + (Dv * lapV + uvv - (f + k) * v[idx])
      if (nextU[idx] < 0) nextU[idx] = 0
      if (nextV[idx] < 0) nextV[idx] = 0
      if (nextU[idx] > 1) nextU[idx] = 1
      if (nextV[idx] > 1) nextV[idx] = 1
    }
  }
}

function renderToCanvas(
  ctx: CanvasRenderingContext2D,
  v: Float64Array,
  imageData: ImageData,
) {
  const data = imageData.data
  for (let y = 0; y < GRID; y++) {
    for (let x = 0; x < GRID; x++) {
      const val = Math.floor(Math.min(255, Math.max(0, v[y * GRID + x] * 512)))
      const [r, g, b] = PALETTE[val]
      for (let dy = 0; dy < CELL; dy++) {
        for (let dx = 0; dx < CELL; dx++) {
          const px = (y * CELL + dy) * WIDTH + (x * CELL + dx)
          data[px * 4] = r
          data[px * 4 + 1] = g
          data[px * 4 + 2] = b
          data[px * 4 + 3] = 255
        }
      }
    }
  }
  ctx.putImageData(imageData, 0, 0)
}

export function useSimulation(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  const simRef = useRef<SimState | null>(null)
  const animRef = useRef<number>(0)
  const paramsRef = useRef<SimParams>({ ...PRESETS.artisan })
  const imageDataRef = useRef<ImageData | null>(null)

  const [running, setRunning] = useState(true)
  const [step, setStep] = useState(0)
  const [params, setParams] = useState<SimParams>({ ...PRESETS.artisan })
  const [activePreset, setActivePreset] = useState<string | null>('artisan')

  const initSim = useCallback(() => {
    const grid = createGrid()
    simRef.current = {
      u: grid.u,
      v: grid.v,
      nextU: new Float64Array(GRID * GRID),
      nextV: new Float64Array(GRID * GRID),
      step: 0,
    }
    setStep(0)
  }, [])

  // Initialize simulation and imageData
  useEffect(() => {
    initSim()
    const canvas = canvasRef.current
    if (canvas) {
      imageDataRef.current = canvas.getContext('2d')!.createImageData(WIDTH, HEIGHT)
    }
  }, [initSim, canvasRef])

  // Animation loop
  useEffect(() => {
    if (!running) {
      if (animRef.current) cancelAnimationFrame(animRef.current)
      return
    }
    const loop = () => {
      const sim = simRef.current
      const canvas = canvasRef.current
      if (!sim || !canvas) return
      const ctx = canvas.getContext('2d')!
      const p = paramsRef.current
      for (let i = 0; i < p.stepsPerFrame; i++) {
        simulate(sim.u, sim.v, sim.nextU, sim.nextV, p)
        ;[sim.u, sim.nextU] = [sim.nextU, sim.u]
        ;[sim.v, sim.nextV] = [sim.nextV, sim.v]
        sim.step++
      }
      renderToCanvas(ctx, sim.v, imageDataRef.current!)
      setStep(sim.step)
      animRef.current = requestAnimationFrame(loop)
    }
    animRef.current = requestAnimationFrame(loop)
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [running, canvasRef])

  // Pause when tab is not visible
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden && running) {
        if (animRef.current) cancelAnimationFrame(animRef.current)
      }
    }
    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [running])

  const applyPreset = useCallback((key: string) => {
    const p = PRESETS[key]
    const newParams: SimParams = { f: p.f, k: p.k, Du: p.Du, Dv: p.Dv, stepsPerFrame: p.stepsPerFrame }
    paramsRef.current = newParams
    setParams(newParams)
    setActivePreset(key)
    initSim()
    setRunning(true)
  }, [initSim])

  const updateParam = useCallback((key: string, val: number) => {
    paramsRef.current = { ...paramsRef.current, [key]: val }
    setParams(prev => ({ ...prev, [key]: val }))
    setActivePreset(null)
  }, [])

  const reset = useCallback(() => {
    initSim()
    setRunning(true)
  }, [initSim])

  return {
    running, setRunning,
    step,
    params,
    activePreset,
    applyPreset,
    updateParam,
    reset,
  }
}
