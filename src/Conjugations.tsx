import React from 'react'
import { Text } from 'ink'
import chalk from 'chalk'

import { conjugationsMap, getVerbBaseAndEnding } from './utils.js'
import { type Verb } from './types.js'

const decorate = (base: string, conjugation: string) => base + chalk.bold(conjugation)

export const Conjugations = ({ verb }: { verb: Verb }) => {
  const [base, ending] = getVerbBaseAndEnding(verb)
  const { yo, tú, vos, usted, élElla, nosotros, ustedes, vosotros, ellosEllas } = conjugationsMap[ending]

  return <>
    <Text>Yo {decorate(base, yo)}</Text>
    <Text>Tú {decorate(base, tú)} / vos {decorate(base, vos)} / usted {decorate(base, usted)}</Text>
    <Text>El / ella {decorate(base, élElla)}</Text>
    <Text>Nostotros {decorate(base, nosotros)}</Text>
    <Text>Ustedes {decorate(base, ustedes)} / vosotros {vosotros}</Text>
    <Text>Ellos / ellas {decorate(base, ellosEllas)}</Text>
  </>
}

export default Conjugations
