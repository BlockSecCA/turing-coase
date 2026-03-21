import { useRef } from 'react'
import { WIDTH, HEIGHT } from './constants'
import { useSimulation } from './useSimulation'
import { SimCanvas } from './SimCanvas'
import { ParameterMap } from './ParameterMap'
import { Sliders } from './Sliders'
import { PresetSelector } from './PresetSelector'
import { ReadingGuide } from './ReadingGuide'
import { ThingsToTry } from './ThingsToTry'

export function SimulationPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const {
    running, setRunning,
    step,
    params,
    activePreset,
    applyPreset,
    updateParam,
    reset,
  } = useSimulation(canvasRef)

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 p-4 md:p-6 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-100 mb-1 tracking-tight">
          Economic Morphogenesis
        </h1>
        <p className="text-sm text-gray-500 mb-1">
          Why do firms form? The same reason spots form on animal skin.
        </p>
        <p className="text-xs text-gray-600 mb-5 max-w-xl leading-relaxed">
          Two forces compete: coordination gain (locally reinforcing) and organizational
          overhead (spreading further). When their ranges differ enough, bounded structures
          emerge spontaneously. These structures are firms.
        </p>

        <div className="flex flex-col xl:flex-row gap-6">
          {/* Left: simulation + parameter map */}
          <div className="flex-shrink-0">
            <div className="flex gap-3">
              {/* Main simulation */}
              <SimCanvas
                ref={canvasRef}
                step={step}
                running={running}
                onToggleRunning={() => setRunning(!running)}
                onReset={reset}
              />

              {/* Parameter space map */}
              <div className="flex-shrink-0 hidden md:block">
                <div
                  className="text-xs text-gray-500 font-semibold mb-1.5 uppercase tracking-wider"
                  style={{ fontSize: '10px' }}
                >
                  Parameter Space
                </div>
                <ParameterMap f={params.f} k={params.k} Du={params.Du} Dv={params.Dv} />
                <p
                  className="text-xs text-gray-600 mt-2 max-w-[220px] leading-relaxed"
                  style={{ fontSize: '10px' }}
                >
                  The yellow dot is your current position. Small dots mark the presets.
                  Moving sliders moves you through this space. Crossing a color boundary means
                  a regime transition — the pattern type changes, often abruptly.
                </p>
              </div>
            </div>

            {/* Reading guide + ratio */}
            <ReadingGuide params={params} />
          </div>

          {/* Right: presets + parameters */}
          <div className="flex-1 min-w-0 space-y-5">
            <PresetSelector activePreset={activePreset} onSelect={applyPreset} />

            <div>
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Economic Forces
              </h2>
              <p className="text-xs text-gray-600 mb-3">
                Drag sliders to change economic conditions. Watch the parameter map to see
                when you cross a regime boundary.
              </p>
              <Sliders params={params} onUpdate={updateParam} />
            </div>

            <ThingsToTry />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 border-t border-gray-800 pt-6 max-w-2xl">
          <h2 className="text-sm font-semibold text-gray-400 mb-2">The Correspondence</h2>
          <div className="text-xs text-gray-500 leading-relaxed space-y-2">
            <p>
              In 1952, Alan Turing showed that two interacting chemicals with different diffusion
              rates spontaneously produce stable, bounded patterns on a uniform substrate —
              explaining how spots form on skin without a blueprint.
            </p>
            <p>
              In 1937, Ronald Coase asked why firms exist at all. His answer: coordination costs and
              transaction costs scale differently with scope. The firm's boundary is where they cross.
            </p>
            <p>
              These are the same answer. The simulation treats an economy as a Turing system.
              The patterns that form are firms. The pattern regime — spots, stripes, labyrinths,
              or monopolistic condensation — is determined by the institutional and technological
              substrate through which these forces propagate.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
