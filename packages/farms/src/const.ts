import { FixedNumber, BigNumber } from '@ethersproject/bignumber'

export const FIXED_ZERO = FixedNumber.from(0)
export const FIXED_ONE = FixedNumber.from(1)
export const FIXED_TWO = FixedNumber.from(2)

export const BIG_TEN = BigNumber.from(10)

export const FIXED_TEN_IN_POWER_18 = FixedNumber.from(BIG_TEN.pow(18))

export const masterChefAddresses = {
  97: '0xB4A466911556e39210a6bB2FaECBB59E4eB7E43d',
  56: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
  42161: '0x0Cd96E6Df3AB6303DF77F09fA8C9FCB099BB864D',
  1116: '0x1b9115F60C85cD009A73C04A799df160230a7805',
}

export const nonBSCVaultAddresses = {
  5: '0x8CB958bBdb45597cc918147469eb650A9397aBDA',
}
