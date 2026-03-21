import type { Preset, ParamInfo } from './types'

export const GRID = 200
export const CELL = 3
export const WIDTH = GRID * CELL
export const HEIGHT = GRID * CELL

export const PRESETS: Record<string, Preset> = {
  barter: {
    label: 'Barter / Pre-institutional',
    era: 'Before money, before law',
    desc: 'Thin institutional skin. Almost no medium for either coordination or overhead to propagate. No persistent organizational structure forms.',
    f: 0.01, k: 0.045, Du: 0.16, Dv: 0.08, stepsPerFrame: 8,
  },
  artisan: {
    label: 'Artisan / Early Market',
    era: 'Guilds, local trade, early contract law',
    desc: 'Moderate institutional thickness. Coordination works locally through personal trust. Many small, well-separated firms of similar size.',
    f: 0.035, k: 0.065, Du: 0.16, Dv: 0.08, stepsPerFrame: 8,
  },
  industrial: {
    label: 'Industrial / Chandlerian',
    era: 'Railroads, telegraph, corporate law',
    desc: 'Thick institutional skin. Accounting and management science let overhead propagate efficiently. Large firms and emerging supply-chain structures.',
    f: 0.025, k: 0.06, Du: 0.16, Dv: 0.08, stepsPerFrame: 8,
  },
  labyrinth: {
    label: 'Vertically Integrated',
    era: 'Mid-20th century conglomerates',
    desc: 'Strong sequential dependencies. Coordination flows along production chains. Elongated, connected structures rather than isolated spots.',
    f: 0.029, k: 0.057, Du: 0.16, Dv: 0.08, stepsPerFrame: 8,
  },
  platform: {
    label: 'Platform / Digital',
    era: 'Internet, APIs, cloud infrastructure',
    desc: 'Digital lubrication extends coordination range. Overhead remains partly local. Large territories with sharp boundaries and internal ecosystem structure.',
    f: 0.029, k: 0.057, Du: 0.21, Dv: 0.07, stepsPerFrame: 8,
  },
  monopoly: {
    label: 'Winner-Take-All',
    era: 'Global digital platforms',
    desc: 'Extreme coordination range. Pattern condenses into very few dominant structures. The substrate cannot support many spots at this scale.',
    f: 0.022, k: 0.051, Du: 0.24, Dv: 0.06, stepsPerFrame: 8,
  },
}

export const PARAM_INFO: Record<string, ParamInfo> = {
  f: {
    economic: 'New Opportunity Rate',
    question: 'How quickly do new exchange opportunities appear?',
    low: 'Stagnant economy, few new transactions to organize',
    high: 'Fertile economy, abundant opportunities constantly emerging',
    examples: 'Low: subsistence agriculture. High: booming trade hub.',
    lowLabel: 'Stagnant', highLabel: 'Fertile',
  },
  k: {
    economic: 'Organizational Decay',
    question: 'How quickly do firms lose coherence?',
    low: 'Durable: strong institutional memory, corporate personhood',
    high: 'Fragile: high turnover, weak institutions, rapid displacement',
    examples: 'Low: established corporation. High: informal market stalls.',
    lowLabel: 'Durable firms', highLabel: 'Fragile firms',
  },
  Du: {
    economic: 'Coordination Range',
    question: 'How far can coordination benefit reach?',
    low: 'Local only, requires proximity, tacit knowledge, personal trust',
    high: 'Non-local, works across distance via technology and standards',
    examples: 'Low: artisan workshop. High: API-connected platform.',
    lowLabel: 'Local only', highLabel: 'Non-local',
  },
  Dv: {
    economic: 'Overhead Reach',
    question: 'How far does management cost propagate?',
    low: 'Contained, each unit mostly self-governing',
    high: 'Pervasive, every new activity burdens the whole org',
    examples: 'Low: loosely coupled franchise. High: centralized corporation.',
    lowLabel: 'Contained', highLabel: 'Pervasive',
  },
}

// Color palette for simulation rendering
export const PALETTE: [number, number, number][] = []
for (let i = 0; i < 256; i++) {
  const t = i / 255
  const r = Math.floor(Math.min(255, t * 2.2 * 180 + 15))
  const g = Math.floor(Math.min(255, t * 1.1 * 120 + 15))
  const b = Math.floor(Math.min(255, (1 - t) * 0.3 * 80 + t * 60 + 25))
  PALETTE.push([r, g, b])
}

// Parameter space map dimensions and ranges
export const MAP_W = 220
export const MAP_H = 180
export const F_MIN = 0.008
export const F_MAX = 0.055
export const K_MIN = 0.03
export const K_MAX = 0.075
