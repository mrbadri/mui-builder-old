import React from 'react'

import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { describe, it } from '@jest/globals'

import { HyperLink } from '../src'

describe('HyperLink component renders', () => {
  it('renders successfully', () => {
    render(<HyperLink />)
  })
})
