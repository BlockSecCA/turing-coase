export interface SimParams {
  f: number
  k: number
  Du: number
  Dv: number
  stepsPerFrame: number
}

export interface Preset extends SimParams {
  label: string
  era: string
  desc: string
}

export interface ParamInfo {
  economic: string
  question: string
  low: string
  high: string
  examples: string
  lowLabel: string
  highLabel: string
}

export interface ClassificationResult {
  zone: string
  label: string
  color: string
}
