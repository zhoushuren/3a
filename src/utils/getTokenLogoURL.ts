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
    // if(token.address === "0xCf27765d4D6dc1d5Fc51362C06E1f3f3e788BC2F") {
    //   return 'https://assets-cdn.trustwallet.com/blockchains/arbitrum/assets/0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9/logo.png'
    // }
  }
  return null
}

export default getTokenLogoURL
