import { useRef, useEffect } from 'react'
import { MAP_W, MAP_H, F_MIN, F_MAX, K_MIN, K_MAX, PRESETS } from './constants'
import { classifyRegime } from './classify'

interface ParameterMapProps {
  f: number
  k: number
  Du: number
  Dv: number
}

export function ParameterMap({ f, k, Du, Dv }: ParameterMapProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const imgData = ctx.createImageData(MAP_W, MAP_H)
    const data = imgData.data

    for (let py = 0; py < MAP_H; py++) {
      for (let px = 0; px < MAP_W; px++) {
        const fVal = F_MIN + (px / (MAP_W - 1)) * (F_MAX - F_MIN)
        const kVal = K_MIN + (1 - py / (MAP_H - 1)) * (K_MAX - K_MIN)
        const regime = classifyRegime(fVal, kVal, Du, Dv)

        const hex = regime.color
        const r = parseInt(hex.slice(1, 3), 16)
        const g = parseInt(hex.slice(3, 5), 16)
        const b = parseInt(hex.slice(5, 7), 16)

        const idx = (py * MAP_W + px) * 4
        data[idx] = r
        data[idx + 1] = g
        data[idx + 2] = b
        data[idx + 3] = 255
      }
    }

    ctx.putImageData(imgData, 0, 0)

    // Draw preset markers
    Object.values(PRESETS).forEach((p) => {
      const px = ((p.f - F_MIN) / (F_MAX - F_MIN)) * MAP_W
      const py = (1 - (p.k - K_MIN) / (K_MAX - K_MIN)) * MAP_H
      ctx.beginPath()
      ctx.arc(px, py, 3, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255,255,255,0.3)'
      ctx.fill()
      ctx.strokeStyle = 'rgba(255,255,255,0.5)'
      ctx.lineWidth = 0.5
      ctx.stroke()
    })

    // Draw current position
    const cx = ((f - F_MIN) / (F_MAX - F_MIN)) * MAP_W
    const cy = (1 - (k - K_MIN) / (K_MAX - K_MIN)) * MAP_H

    // Crosshair
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.4)'
    ctx.lineWidth = 0.5
    ctx.setLineDash([3, 3])
    ctx.beginPath()
    ctx.moveTo(cx, 0); ctx.lineTo(cx, MAP_H)
    ctx.moveTo(0, cy); ctx.lineTo(MAP_W, cy)
    ctx.stroke()
    ctx.setLineDash([])

    // Dot
    ctx.beginPath()
    ctx.arc(cx, cy, 6, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(251, 191, 36, 0.9)'
    ctx.fill()
    ctx.strokeStyle = '#000'
    ctx.lineWidth = 1.5
    ctx.stroke()
  }, [f, k, Du, Dv])

  const regime = classifyRegime(f, k, Du, Dv)

  return (
    <div>
      {/* Canvas with Y-axis label alongside */}
      <div className="flex gap-1">
        <div className="flex flex-col justify-between py-1" style={{ fontSize: '8px' }}>
          <span className="text-gray-600 -rotate-90 origin-center whitespace-nowrap">Durable</span>
          <span className="text-gray-500 -rotate-90 origin-center whitespace-nowrap" style={{ fontSize: '7px' }}>Org. Decay</span>
          <span className="text-gray-600 -rotate-90 origin-center whitespace-nowrap">Fragile</span>
        </div>
        <canvas
          ref={canvasRef}
          width={MAP_W}
          height={MAP_H}
          className="rounded border border-gray-800"
          style={{ imageRendering: 'auto', width: MAP_W, height: MAP_H }}
        />
      </div>
      {/* X-axis label */}
      <div className="flex justify-between mt-1 ml-4">
        <span style={{ fontSize: '8px' }} className="text-gray-600">Stagnant</span>
        <span style={{ fontSize: '7px' }} className="text-gray-500">New Opportunity Rate</span>
        <span style={{ fontSize: '8px' }} className="text-gray-600">Fertile</span>
      </div>
      <div className="mt-2 flex items-center gap-2">
        <div
          className="w-3 h-3 rounded-sm"
          style={{ background: regime.color, border: '1px solid rgba(255,255,255,0.1)' }}
        />
        <span className="text-xs text-gray-400">
          Current zone: <span className="text-gray-300">{regime.label}</span>
        </span>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-0.5" style={{ fontSize: '9px' }}>
        {[
          { color: '#1e3a5f', label: 'Spots (firms)' },
          { color: '#4a2545', label: 'Stripes (chains)' },
          { color: '#3a4a1e', label: 'Mitosis (splitting)' },
          { color: '#5c2a0e', label: 'Unstable (transition)' },
          { color: '#7f1d1d', label: 'Total fill (monopoly)' },
          { color: '#1a1a2e', label: 'No pattern (no firms)' },
        ].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-sm" style={{ background: color }} />
            <span className="text-gray-600">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
