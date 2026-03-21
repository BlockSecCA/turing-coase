import { forwardRef } from 'react'
import { WIDTH, HEIGHT } from './constants'

interface SimCanvasProps {
  step: number
  running: boolean
  onToggleRunning: () => void
  onReset: () => void
}

export const SimCanvas = forwardRef<HTMLCanvasElement, SimCanvasProps>(
  function SimCanvas({ step, running, onToggleRunning, onReset }, ref) {
    return (
      <div>
        <canvas
          ref={ref}
          width={WIDTH}
          height={HEIGHT}
          className="rounded-lg border border-gray-800"
          style={{ imageRendering: 'pixelated' }}
        />
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-gray-600">
            Step: {step.toLocaleString()}
          </span>
          <div className="flex gap-2">
            <button
              onClick={onToggleRunning}
              className="px-3 py-1 text-xs rounded bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-colors"
            >
              {running ? 'Pause' : 'Resume'}
            </button>
            <button
              onClick={onReset}
              className="px-3 py-1 text-xs rounded bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  },
)
