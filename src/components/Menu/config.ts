import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pooltoken.finance',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pooltoken.finance/#/pool',
      },
    ],
  },
  {
    label: 'Base farms',
    icon: 'FarmIcon',
    href: '/base-farms',
  },
  {
    label: 'BSC pools',
    icon: 'BscIcon',
    href: '/bsc-pools',
  },
  {
    label: 'Base Pools',
    icon: 'PoolIcon',
    href: '/base-pools',
  },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: '/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: '/profile',
  //     },
  //   ],
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://pooltoken.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/pooltoken',
      },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://pooltoken.finance',
      },
      {
        label: 'Blog',
        href: 'https://pooltoken.finance',
      },
    ],
  },
]

export default config
