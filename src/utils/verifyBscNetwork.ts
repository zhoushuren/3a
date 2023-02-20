import { ChainId } from '@pancakeswap/sdk'

export const verifyBscNetwork = (chainId: number) => {
  return chainId === ChainId.ARB || chainId === ChainId.BSC_TESTNET
}
