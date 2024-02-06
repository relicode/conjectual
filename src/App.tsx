import React, { useState } from 'react'
import { Box, type BoxProps, useApp } from 'ink'
import { TextInput } from '@inkjs/ui'

import Conjugations from './Conjugations.js'
import { isVerb, toLowerEs } from './utils.js'
import suggestions from './suggestions.js'

const deriveStyles = (
  isValidVerb: boolean,
  isConfirmedVerb: boolean,
): [BoxProps['borderColor'], BoxProps['borderStyle']] => {
  if (!isValidVerb) return ['red', 'single']
  if (isConfirmedVerb) return ['green', 'double']
  return ['yellow', 'round']
}

export default function App () {
  const [textInput, setTextInput] = useState('')
  const app = useApp()
  const isValidVerb = isVerb(textInput)
  const isConfirmedVerb = isValidVerb && suggestions.includes(textInput)
  const [borderColor, borderStyle] = deriveStyles(isValidVerb, isConfirmedVerb)

  return <>
    <Box
      borderColor={borderColor}
      borderStyle={borderStyle} width={48}
    >
      <TextInput
        placeholder="Enter a verb..."
        onChange={(text) => {
          const lowered = toLowerEs(text)
          if (lowered.includes('exit')) app.exit()
          setTextInput(lowered)
        }}
        suggestions={suggestions}
      />
    </Box>
    <Box height={6} flexDirection="column">
      {isValidVerb && <Conjugations verb={textInput} />}
    </Box>
  </>
}
