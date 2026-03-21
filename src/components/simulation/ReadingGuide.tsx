import { PALETTE } from './constants'

interface ReadingGuideProps {
  params: { Du: number; Dv: number }
}

export function ReadingGuide({ params }: ReadingGuideProps) {
  const ratio = params.Du / params.Dv

  let regimeLabel: string
  let regimeColor: string
  if (ratio < 1.5) {
    regimeLabel = 'Overhead dominates \u2014 firms stay small'
    regimeColor = 'text-gray-400'
  } else if (ratio < 2.5) {
    regimeLabel = 'Balanced \u2014 classical Coasean boundaries'
    regimeColor = 'text-amber-400'
  } else if (ratio < 3.5) {
    regimeLabel = 'Coordination reaching further \u2014 larger structures'
    regimeColor = 'text-orange-400'
  } else {
    regimeLabel = 'Non-local coordination \u2014 platform/monopoly territory'
    regimeColor = 'text-red-400'
  }

  return (
    <div className="flex gap-3 mt-3">
      <div className="flex-1 bg-gray-900 rounded-lg border border-gray-800 p-3">
        <div className="space-y-1.5 text-xs text-gray-400 leading-relaxed">
          <div className="flex items-start gap-2">
            <div
              className="w-3 h-3 rounded-sm mt-0.5 flex-shrink-0"
              style={{ background: `rgb(${PALETTE[200].join(',')})` }}
            />
            <span>
              <span className="text-gray-300">Bright</span> = inside a firm
            </span>
          </div>
          <div className="flex items-start gap-2">
            <div
              className="w-3 h-3 rounded-sm mt-0.5 flex-shrink-0"
              style={{ background: `rgb(${PALETTE[20].join(',')})` }}
            />
            <span>
              <span className="text-gray-300">Dark</span> = the market
            </span>
          </div>
          <div className="flex items-start gap-2">
            <div
              className="w-3 h-3 rounded-sm mt-0.5 flex-shrink-0 border border-gray-600"
              style={{ background: `rgb(${PALETTE[100].join(',')})` }}
            />
            <span>
              <span className="text-gray-300">Edges</span> = firm boundary
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-gray-900 rounded-lg border border-gray-800 p-3">
        <div className="text-xs text-gray-500 mb-1">Coordination / Overhead ratio</div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${Math.min(100, (ratio / 5) * 100)}%`,
                background:
                  ratio < 1.5 ? '#6b7280' : ratio < 2.5 ? '#d97706' : ratio < 3.5 ? '#ea580c' : '#dc2626',
              }}
            />
          </div>
          <span className="text-xs font-mono text-gray-500">{ratio.toFixed(1)}x</span>
        </div>
        <div className={`text-xs mt-1 ${regimeColor}`}>{regimeLabel}</div>
      </div>
    </div>
  )
}
