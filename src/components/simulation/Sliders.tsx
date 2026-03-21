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
    <div className="space-y-1">
      {SLIDER_CONFIG.map(({ key, min, max, step }) => {
        const info = PARAM_INFO[key]
        const value = params[key as keyof typeof params]
        const expanded = expandedParam === key

        return (
          <div key={key} className="bg-gray-900 rounded border border-gray-800 px-2.5 py-1.5 overflow-hidden">
            {/* Header row: label + slider + value */}
            <div className="flex items-center gap-2 min-w-0">
              <button
                onClick={() => setExpandedParam(expanded ? null : key)}
                className="flex items-center gap-1 flex-shrink-0"
              >
                <svg
                  className={`w-2.5 h-2.5 text-gray-600 transition-transform ${expanded ? 'rotate-90' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-xs font-medium text-gray-300 whitespace-nowrap">{info.economic}</span>
              </button>
              <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onUpdate(key, parseFloat(e.target.value))}
                className="flex-1 min-w-0 h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <span className="text-xs text-gray-500 font-mono flex-shrink-0">{value.toFixed(3)}</span>
            </div>
            {/* Inline range labels */}
            <div className="flex justify-between pl-5 pr-12 -mt-0.5">
              <span className="text-gray-600" style={{ fontSize: '8px' }}>{info.lowLabel}</span>
              <span className="text-gray-600" style={{ fontSize: '8px' }}>{info.highLabel}</span>
            </div>
            {/* Expandable detail */}
            {expanded && (
              <div className="mt-1.5 pt-1.5 border-t border-gray-800 pl-5">
                <div className="text-xs text-gray-500 mb-1.5">{info.question}</div>
                <div className="space-y-1">
                  <div className="flex gap-1.5 items-start">
                    <div className="flex-shrink-0 w-0.5 h-3 rounded-full bg-gray-700 mt-0.5" />
                    <div style={{ fontSize: '11px' }} className="text-gray-500">
                      <span className="text-gray-400">Low:</span> {info.low}
                    </div>
                  </div>
                  <div className="flex gap-1.5 items-start">
                    <div className="flex-shrink-0 w-0.5 h-3 rounded-full bg-amber-700 mt-0.5" />
                    <div style={{ fontSize: '11px' }} className="text-gray-500">
                      <span className="text-gray-400">High:</span> {info.high}
                    </div>
                  </div>
                  <div style={{ fontSize: '10px' }} className="text-gray-600 italic">{info.examples}</div>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
