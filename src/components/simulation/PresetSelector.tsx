import { PRESETS } from './constants'

interface PresetSelectorProps {
  activePreset: string | null
  onSelect: (key: string) => void
}

export function PresetSelector({ activePreset, onSelect }: PresetSelectorProps) {
  const presetInfo = activePreset ? PRESETS[activePreset] : null

  return (
    <div>
      <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
        Historical Regimes
      </h2>
      <div className="grid grid-cols-2 gap-1.5">
        {Object.entries(PRESETS).map(([key, preset]) => (
          <button
            key={key}
            onClick={() => onSelect(key)}
            className={`px-2.5 py-2 text-left rounded border transition-all ${
              activePreset === key
                ? 'bg-amber-950 border-amber-700'
                : 'bg-gray-900 border-gray-800 hover:border-gray-600'
            }`}
          >
            <div
              className={`text-xs font-medium ${
                activePreset === key ? 'text-amber-200' : 'text-gray-300'
              }`}
            >
              {preset.label}
            </div>
            <div
              className={`text-xs mt-0.5 ${
                activePreset === key ? 'text-amber-400/60' : 'text-gray-600'
              }`}
              style={{ fontSize: '10px' }}
            >
              {preset.era}
            </div>
          </button>
        ))}
      </div>
      {presetInfo && (
        <p className="mt-2.5 text-xs text-gray-500 leading-relaxed bg-gray-900/50 rounded p-2.5 border border-gray-800/50">
          {presetInfo.desc}
        </p>
      )}
    </div>
  )
}
