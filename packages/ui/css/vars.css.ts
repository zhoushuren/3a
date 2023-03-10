import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css'
import deepmerge from 'deepmerge'
import { Mode, tokens } from '../tokens'
import type { Theme } from './types'


// console.log(tokens,'aaaaaaaaaaaaaaaaaaaaaa')
tokens.colors.light.cardBorder = '#AC5288'
tokens.colors.light.primary = '#E26288'
tokens.colors.light.secondary = '#999999'
tokens.colors.light.background = 'white'
tokens.colors.light.text = '#FFFFFF'
tokens.colors.dark.backgroundAlt = 'rgb(255, 255, 255)'
tokens.colors.light.backgroundAlt2 = 'rgb(255, 255, 255)'
tokens.colors.light.textMenu = 'black'
tokens.colors.light.tertiary = 'transparent'
tokens.colors.light.textSubtle = '#999999'
tokens.colors.dark.input = '#F2F2F2'
tokens.colors.light.gradientBubblegum = 'linear-gradient(-426deg, #AC5288 -79%, rgb(45 114 210 / -7%) 81%);'


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
