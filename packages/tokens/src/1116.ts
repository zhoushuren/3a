import {ChainId, Token, WETH9} from '@pancakeswap/sdk'
import {CAKE} from "./common";

export const arbTokens = {
    wcore: WETH9[ChainId.ARB],
    usdc: new Token(
        ChainId.ARB,
        '0x3fca6743e2fb55759fee767f3a68b2c06d699dc4',
        6,
        'USDC',
        'Binance-Peg USD Coin',
        'https://www.centre.io/usdc',
    ),
    test: new Token(
        ChainId.ARB,
        '0x79ebF30D84b66955Cf2F16f2fb7b5d3D22403Abd',
        18,
        'Test',
        'Test Token',
        'https://bdollar.fi/',
    ),
    usdt: new Token(
        ChainId.ARB,
        '0x9ebab27608bd64aff36f027049aecc69102a0d1e',
        6,
        'USDT',
        'USDT Token',
        'https://bdollar.fi/',
    ),
    btc: new Token(
        ChainId.ARB,
        '0xe4610f0194a82f23c82b07415330fc4ee9282b5b',
        8,
        'BTC',
        'BTC Token',
        'https://bdollar.fi/',
    ),
}
