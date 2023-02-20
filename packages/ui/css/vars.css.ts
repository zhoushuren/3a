import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css'
import deepmerge from 'deepmerge'
import { Mode, tokens } from '../tokens'
import type { Theme } from './types'


console.log(tokens,'aaaaaaaaaaaaaaaaaaaaaa')
tokens.colors.light.cardBorder = '#42C18E'
tokens.colors.light.primary = '#0FA68D'
tokens.colors.light.secondary = '#999999'
tokens.colors.light.background = 'white'
tokens.colors.light.text = '#0FA68D'
tokens.colors.dark.backgroundAlt = 'rgb(255, 255, 255)'
tokens.colors.light.backgroundAlt2 = 'rgb(255, 255, 255)'
tokens.colors.light.textMenu = 'black'
tokens.colors.dark.input = '#F2F2F2'
tokens.colors.light.gradientBubblegum = 'linear-gradient(-426deg, #42c18e -79%, rgb(45 114 210 / -7%) 81%);'


const getVarName = (_value: string | null, path: string[]) => path.join('-')

const baseTokens: Omit<Theme, 'colors'> = tokens
const baseVars = createGlobalThemeContract(baseTokens, getVarName)
createGlobalTheme(':root', baseVars, baseTokens)

const makeColorScheme = (mode: Mode = 'light') => {
  const colors = tokens.colors[mode]

  return {
    colors,
  }
}

const modeTokens = makeColorScheme('light')
const modeVars = createGlobalThemeContract(modeTokens, getVarName)
createGlobalTheme('[data-theme="light"]', modeVars, modeTokens)
createGlobalTheme('[data-theme="dark"]', modeVars, makeColorScheme('dark'))

type BaseVars = typeof baseVars
type ModeVars = typeof modeVars
type Vars = BaseVars & ModeVars
export const vars = deepmerge(baseVars, modeVars) as Vars
