import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('toont de titel en uitleg van het spel', () => {
    const markup = renderToStaticMarkup(<App />)

    expect(markup).toContain('Wie zit goed?')
    expect(markup).toContain('Voorspel wie het juiste antwoord weet.')
  })
})