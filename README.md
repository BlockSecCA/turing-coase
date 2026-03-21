# Economic Morphogenesis

Interactive Gray-Scott reaction-diffusion simulator exploring why firms form, the same reason spots form on animal skin.

**[Launch the simulation](https://blocksecca.github.io/turing-coase/)**

**[Read the full essay on pub.blocksec.ca](https://pub.blocksec.ca)** *(link TBD once published)*

## What It Does

The simulation runs a [Gray-Scott model](https://groups.csail.mit.edu/mac/projects/amorphous/GrayScott/) with economic labels on the parameters. Two chemicals (coordination gain and organizational overhead) interact and diffuse at different rates on a 200x200 grid. The patterns that emerge are "firms."

Six historical presets map to different economic eras:

| Preset | Era | Morphology |
|--------|-----|------------|
| Barter | Pre-institutional | No pattern (no firms) |
| Artisan | Guilds, local trade | Many small spots |
| Industrial | Railroads, corporate law | Large spots, supply chains |
| Vertically Integrated | Mid-20th century | Elongated connected structures |
| Platform / Digital | Internet, APIs | Large territories with internal structure |
| Winner-Take-All | Global platforms | Few dominant spots |

Four sliders let you change economic conditions in real time:

- **New Opportunity Rate** (feed rate `f`)
- **Organizational Decay** (kill rate `k`)
- **Coordination Range** (activator diffusion `Du`)
- **Overhead Reach** (inhibitor diffusion `Dv`)

A parameter-space map shows where you are in the f-k plane and which pattern regime you are in.

## Tech Stack

- React 18 + TypeScript
- Vite (build to `docs/` for GitHub Pages)
- Tailwind CSS v3
- Canvas 2D (simulation rendering + parameter map)
- No external dependencies beyond React

## Project Structure

```
src/components/simulation/
  constants.ts        # Presets, grid size, palette, parameter ranges
  types.ts            # TypeScript types
  classify.ts         # Parameter-space regime classification
  useSimulation.ts    # Gray-Scott computation hook
  SimCanvas.tsx       # Canvas renderer
  ParameterMap.tsx    # f-k parameter space visualization
  Sliders.tsx         # Economic-labeled parameter controls
  PresetSelector.tsx  # Historical era preset buttons
  ReadingGuide.tsx    # Legend and coordination/overhead ratio
  ThingsToTry.tsx     # Guided experiments panel
  SimulationPage.tsx  # Page layout composing all components
```

## Running Locally

```bash
npm install
npm run dev
```

## Building

```bash
npm run build    # outputs to docs/
```

## License

Code: [MIT](LICENSE)
