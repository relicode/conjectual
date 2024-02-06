import type * as types from './types.js'

export const verbEndings = ['ar', 'er', 'ir'] as const

export const anyVerbEnding = `(${verbEndings.join('|')})`

export const toLowerEs = (text: string) => text.toLocaleLowerCase(new Intl.Locale('es-ES').toString())

const matchesRegExp = (re: RegExp, s?: string) => typeof s === 'string' && re.test(s)
const isVerbEndingSrc = `^${anyVerbEnding}$`
const isVerbSrc = `[a-zA-Z ]+${anyVerbEnding}$`
const isVerbEndingRegExp = new RegExp(isVerbEndingSrc)
const isVerbRegExp = new RegExp(isVerbSrc)
export const isVerbEnding = (s?: string): s is types.VerbEnding => matchesRegExp(isVerbEndingRegExp, s)

export const isVerb = (s?: string): s is types.Verb => matchesRegExp(isVerbRegExp, s)

export const getVerbBaseAndEnding = (verb: types.Verb): [string, types.VerbEnding] => {
  const split = verb.split('')
  const endingSplit = split.splice(-2)
  const [base, ending] = [split, endingSplit].map((s) => s.join(''))
  if (!base) throw new Error(`Invalid verb base in word ${verb}: ${base}`)
  if (!isVerbEnding(ending)) throw new Error(`Invalid verb ending in word ${verb}: ${ending}`)
  return [base, ending]
}

export const conjugationsMap: { [ K in types.VerbEnding ]: types.Pronouns } = {
  ar: {
    yo: 'o',
    tú: 'as',
    vos: 'ás',
    usted: 'a',
    élElla: 'a',
    nosotros: 'amos',
    ustedes: 'an',
    vosotros: 'áis',
    ellosEllas: 'an',
  } as const,
  er: {
    yo: 'o',
    tú: 'es',
    vos: 'és',
    usted: 'e',
    élElla: 'e',
    nosotros: 'emos',
    ustedes: 'en',
    vosotros: 'éis',
    ellosEllas: 'en',
  } as const,
  ir: {
    yo: 'o',
    tú: 'es',
    vos: 'ís',
    usted: 'e',
    élElla: 'e',
    nosotros: 'imos',
    ustedes: 'en',
    vosotros: 'ís',
    ellosEllas: 'en',
  } as const,
} as const
