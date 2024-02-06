#!/usr/bin/env node
import React from 'react'
import { render } from 'ink'
import meow from 'meow'

import App from './App.js'

meow(
  `
  Usag
    $ conjectual
`,
  {
    importMeta: import.meta,
    flags: {
      name: {
        type: 'string',
      },
    },
  },
)

render(<App />)
