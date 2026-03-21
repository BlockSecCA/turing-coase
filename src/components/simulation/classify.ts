import type { ClassificationResult } from './types'

export function classifyRegime(f: number, k: number, Du: number, Dv: number): ClassificationResult {
  const dRatio = Du / Dv
  const stdRatio = 2.0
  const kAdj = k - (dRatio - stdRatio) * 0.008

  if (f < 0.015) return { zone: 'empty', label: 'No pattern', color: '#1a1a2e' }

  const delta = kAdj - f

  if (f >= 0.01 && f <= 0.045) {
    if (delta > 0.038) return { zone: 'empty', label: 'No pattern', color: '#1a1a2e' }
    if (delta < 0.012) return { zone: 'fill', label: 'Total fill', color: '#7f1d1d' }

    if (f < 0.022) {
      if (delta > 0.028) return { zone: 'spots_sparse', label: 'Few spots', color: '#1e3a5f' }
      return { zone: 'worms', label: 'Worms / chains', color: '#4a2545' }
    }

    if (f < 0.032) {
      if (delta > 0.032) return { zone: 'spots', label: 'Spots', color: '#1e3a5f' }
      if (delta > 0.025) return { zone: 'spots_stripes', label: 'Spots + stripes', color: '#2d4a3e' }
      if (delta > 0.018) return { zone: 'stripes', label: 'Stripes / labyrinths', color: '#4a2545' }
      return { zone: 'chaos', label: 'Unstable / chaotic', color: '#5c2a0e' }
    }

    if (f < 0.042) {
      if (delta > 0.032) return { zone: 'spots_fine', label: 'Fine spots', color: '#1e3a5f' }
      if (delta > 0.025) return { zone: 'spots', label: 'Spots', color: '#1e3a5f' }
      if (delta > 0.018) return { zone: 'mitosis', label: 'Mitosis / splitting', color: '#3a4a1e' }
      return { zone: 'chaos', label: 'Unstable', color: '#5c2a0e' }
    }

    if (delta > 0.025) return { zone: 'spots_fine', label: 'Fine spots', color: '#1e3a5f' }
    return { zone: 'chaos', label: 'Unstable', color: '#5c2a0e' }
  }

  if (f > 0.045) {
    if (delta > 0.025) return { zone: 'spots_fine', label: 'Fine spots', color: '#1e3a5f' }
    return { zone: 'empty', label: 'No pattern', color: '#1a1a2e' }
  }

  return { zone: 'unknown', label: 'Unknown', color: '#111' }
}
