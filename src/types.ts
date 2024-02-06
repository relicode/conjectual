import { type verbEndings } from './utils.js'

export type VerbEnding = (typeof verbEndings)[number]

export type Verb = `${string}${VerbEnding}`

export type Pronouns = Readonly<{
  yo: string
  tú: string
  vos: string
  usted: string
  élElla: string
  nosotros: string
  ustedes: string
  vosotros: string
  ellosEllas: string
}>
