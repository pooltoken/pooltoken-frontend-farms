import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout, WarningIcon } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import EarnAssetCard from './components/EarnAssetCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/pan-bg-mobile.svg');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Warning = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  text-align: center;
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          {TranslateString(576, 'PoolToken Finance')}
        </Heading>
        <Text>
          {TranslateString(578, 'Use your BSC yield farming tokens to earn POOLT! Stake and earn in one place!')}
        </Text>
      </Hero>
      <Warning>
        <WarningIcon width="48px" height="48px" />
        <Heading>
          {TranslateString(
            10004,
            'Beware of market manipulators, only use our site if you know what you are doing and understand the risks associated with DeFi!',
          )}
        </Heading>
      </Warning>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard />
        </Cards>
        <Cards>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
        <Cards>
          <EarnAssetCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
