import {ChainId, Token, WETH9} from '@pancakeswap/sdk'

export const arbTokens = {
    weth: WETH9[ChainId.ARB],
    usdc: new Token(
        ChainId.ARB,
        '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
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
    cake: new Token(
        ChainId.ARB,
        '0xF1245dE151E71742e6F309c4205BE149D86a13dE',
        18,
        'Cake',
        'Cake Token',
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
