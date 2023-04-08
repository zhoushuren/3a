import { ChainId, Token } from '@pancakeswap/sdk'

const mapping = {
  [ChainId.BSC]: 'smartchain',
  [ChainId.ETHEREUM]: 'ethereum',
  [ChainId.ARB]: 'arbitrum',
}

const getTokenLogoURL = (token?: Token) => {
  if (token && mapping[token.chainId]) {
    // console.log(token)
    return `https://assets-cdn.trustwallet.com/blockchains/${mapping[token.chainId]}/assets/${token.address}/logo.png`
    // return ``
    if (token.address === "0x0449c37bcac6333620520A40c85F29BDbCe40C94") {
      return `https://pipeswap.io/logo/${token.address}/logo.png`
    }
  }
  return null
}

export default getTokenLogoURL
