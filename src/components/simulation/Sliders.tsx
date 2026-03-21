import { useState } from 'react'
import { PARAM_INFO } from './constants'

interface SlidersProps {
  params: { f: number; k: number; Du: number; Dv: number }
  onUpdate: (key: string, value: number) => void
}

const SLIDER_CONFIG: { key: string; min: number; max: number; step: number }[] = [
  { key: 'f', min: 0.01, max: 0.06, step: 0.001 },
  { key: 'k', min: 0.03, max: 0.075, step: 0.001 },
  { key: 'Du', min: 0.05, max: 0.35, step: 0.005 },
  { key: 'Dv', min: 0.02, max: 0.15, step: 0.005 },
]

export function Sliders({ params, onUpdate }: SlidersProps) {
  const [expandedParam, setExpandedParam] = useState<string | null>(null)

  return (
    <div className="space-y-2">
      {SLIDER_CONFIG.map(({ key, min, max, step }) => {
        const info = PARAM_INFO[key]
        const value = params[key as keyof typeof params]
        const expanded = expandedParam === key

        return (
          <div key={key} className="bg-gray-900 rounded-lg border border-gray-800 p-3">
            <button
              onClick={() => setExpandedParam(expanded ? null : key)}
              className="w-full text-left flex justify-between items-start gap-2"
            >
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-gray-200">{info.economic}</div>
                <div className="text-xs text-gray-500 mt-0.5">{info.question}</div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-xs text-gray-500 font-mono">{value.toFixed(3)}</span>
                <svg
                  className={`w-3 h-3 text-gray-600 transition-transform ${expanded ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            <div className="mt-2.5">
              <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onUpdate(key, parseFloat(e.target.value))}
                className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <div className="flex justify-between mt-1">
                <span className="text-gray-600" style={{ fontSize: '9px' }}>{info.lowLabel}</span>
                <span className="text-gray-600" style={{ fontSize: '9px' }}>{info.highLabel}</span>
              </div>
            </div>
            {expanded && (
              <div className="mt-3 pt-3 border-t border-gray-800 space-y-2">
                <div className="flex gap-2">
                  <div className="flex-shrink-0 w-1 rounded-full bg-gray-700" />
                  <div className="text-xs text-gray-500">
                    <span className="text-gray-400 font-medium">Low:</span> {info.low}
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-shrink-0 w-1 rounded-full bg-amber-700" />
                  <div className="text-xs text-gray-500">
                    <span className="text-gray-400 font-medium">High:</span> {info.high}
                  </div>
                </div>
                <div className="text-xs text-gray-600 italic mt-1">{info.examples}</div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
