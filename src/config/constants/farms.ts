import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'POOLT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc6217d07c83284b321aa172b43b68dec42a0469f',
    },
    tokenSymbol: 'POOLT',
    tokenAddresses: {
      97: '',
      56: '0x2b3aa086d2804a302fbc58d0e62de9c73146f6b1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isCoreFarm: true,
  },
  {
    pid: 1,
    lpSymbol: 'POOLT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xc1db5c89ce7023c6076304f16b41df6d3039e5b8',
    },
    tokenSymbol: 'POOLT',
    tokenAddresses: {
      97: '',
      56: '0x2b3aa086d2804a302fbc58d0e62de9c73146f6b1',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    isCoreFarm: true,
  },
  {
    pid: 2,
    lpSymbol: 'POOLT-CAKE LP',
    lpAddresses: {
      97: '',
      56: '0xb5a397a9aa670f1b5e7f29466e7f2b2f3bca579a',
    },
    tokenSymbol: 'POOLT',
    tokenAddresses: {
      97: '',
      56: '0x2b3aa086d2804a302fbc58d0e62de9c73146f6b1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isCoreFarm: true,
  },
  {
    pid: 3,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },


  {
    pid: 4,
    lpSymbol: 'BUSD-CAKE LP',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 6,
    lpSymbol: 'BUSD-USDT LP',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0x2b3aa086d2804a302fbc58d0e62de9c73146f6b1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    lpSymbol: 'BUSD-DAI LP',
    lpAddresses: {
      97: '',
      56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0x2b3aa086d2804a302fbc58d0e62de9c73146f6b1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    lpSymbol: 'USDT-DAI LP',
    lpAddresses: {
      97: '',
      56: '0xb3c4217AB2b265bF8c69718D280E3708b5E50577',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 9,
    lpSymbol: 'BUSD-ETH LP',
    lpAddresses: {
      97: '',
      56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0x2b3aa086d2804a302fbc58d0e62de9c73146f6b1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 10,
    lpSymbol: 'BUSD-BTCB LP',
    lpAddresses: {
      97: '',
      56: '0xb8875e207EE8096a929D543C9981C9586992eAcb',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0x2b3aa086d2804a302fbc58d0e62de9c73146f6b1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 11,
    lpSymbol: 'BUSD-DOT LP',
    lpAddresses: {
      97: '',
      56: '0x54c1ec2f543966953f2f7564692606ea7d5a184e',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0x2b3aa086d2804a302fbc58d0e62de9c73146f6b1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 12,
    lpSymbol: 'BNB-BTCB LP',
    lpAddresses: {
      97: '',
      56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 13,
    lpSymbol: 'BNB-ETH LP',
    lpAddresses: {
      97: '',
      56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 14,
    lpSymbol: 'BNB-DOT LP',
    lpAddresses: {
      97: '',
      56: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 15,
    poolToken: true,
    lpSymbol: 'POOLT',
    lpAddresses: {
      97: '',
      56: '0xc6217d07c83284b321aa172b43b68dec42a0469f',
    },
    tokenSymbol: 'POOLT',
    tokenAddresses: {
      97: '',
      56: '0x2b3aa086d2804a302fbc58d0e62de9c73146f6b1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isCoreFarm: true,
  },
  {
    pid: 16,
    lpSymbol: 'EGG-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc6217d07c83284b321aa172b43b68dec42a0469f',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0x2b3aa086d2804a302fbc58d0e62de9c73146f6b1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isCommunityFarm: true,
  },

  {
    pid: 18,
    poolToken: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 19,
    poolToken: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 20,
    poolToken: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 21,
    poolToken: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0xb8875e207ee8096a929d543c9981c9586992eacb',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 22,
    poolToken: true,
    lpSymbol: 'DOT',
    lpAddresses: {
      97: '',
      56: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 23,
    poolToken: true,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 24,
    poolToken: true,
    lpSymbol: 'DAI',
    lpAddresses: {
      97: '',
      56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 25,
    poolToken: true,
    lpSymbol: 'USDC',
    lpAddresses: {
      97: '',
      56: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 26,
    poolToken: true,
    bscToken: true,
    lpSymbol: 'BAKE',
    lpAddresses: {
      97: '',
      56: '0xE2D1B285d83efb935134F644d00FB7c943e84B5B',
    },
    tokenSymbol: 'BAKE',
    tokenAddresses: {
      97: '',
      56: '0xe02df9e3e622debdd69fb838bb799e3f168902c5',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isCommunityFarm: true,
  },
  {
    pid: 27,
    poolToken: true,
    bscToken: true,
    lpSymbol: 'EGG',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isCommunityFarm: true,
  },
  {
    pid: 28,
    poolToken: true,
    bscToken: true,
    lpSymbol: 'VIKING',
    lpAddresses: {
      97: '',
      56: '0x9B989A7B8963f4b08eC094710e2966FB3c7F6C43',
    },
    tokenSymbol: 'VIKING',
    tokenAddresses: {
      97: '',
      56: '0x896eDE222D3f7f3414e136a2791BDB08AAa25Ce0',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isCommunityFarm: true,
  },
  {
    pid: 29,
    poolToken: true,
    bscToken: true,
    lpSymbol: 'BEEFY',
    lpAddresses: {
      97: '',
      56: '0xd3F004E303114423f122c78AFDeD4AcfE97675B1',
    },
    tokenSymbol: 'BEEFY',
    tokenAddresses: {
      97: '',
      56: '0xca3f508b8e4dd382ee878a314789373d80a5190a',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isCommunityFarm: true,
  },
  {
    pid: 30,
    poolToken: true,
    bscToken: true,
    lpSymbol: 'BUNNY',
    lpAddresses: {
      97: '',
      56: '0xEC7A69A3A5ee177C84855C86cc926cA0BA6275cc',
    },
    tokenSymbol: 'BUNNY',
    tokenAddresses: {
      97: '',
      56: '0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isCommunityFarm: true,
  },

]

export default farms
