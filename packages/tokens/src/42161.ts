import {ChainId, Token, WETH9} from '@pancakeswap/sdk'
import {CAKE} from "./common";

export const arbTokens = {
    weth: WETH9[ChainId.ARB],
    usdc: new Token(
        ChainId.ARB,
        '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
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
    apple: new Token(
        ChainId.ARB,
        '0xB3D943D13D30bde4Bb4F3b01A4067E8EB1285098',
        18,
        'APPLE',
        'APPLE Token',
        'https://bdollar.fi/',
    ),
    usdt: new Token(
        ChainId.ARB,
        '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
        6,
        'USDT',
        'USDT Token',
        'https://bdollar.fi/',
    ),
}
