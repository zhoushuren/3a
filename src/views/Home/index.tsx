import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@pancakeswap/wagmi'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import { useTranslation } from '@pancakeswap/localization'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { ChainId } from '@pancakeswap/sdk'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
import MultipleBanner from './components/Banners/MultipleBanner'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC<React.PropsWithChildren> = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()
  const { chainId } = useActiveChainId()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  const { t } = useTranslation()

  return (
    <>
      <PageMeta />
      <style jsx global>{`
        #home-1 .page-bg {
          //background:  linear-gradient(109.51deg, rgba(97, 211, 97, 0.19) 6.33%, rgba(97, 211, 177, 0.09) 91.34%);;
          background: #E3F8F3;
        }
        [data-theme='dark'] #home-1 .page-bg {
          //background: linear-gradient(109.51deg, #181E31 6.33%, #363266 91.34%);
           background: #192852;
        }
        #home-2 .page-bg {
          //background: linear-gradient(180deg, rgba(255, 255, 255, 0) 18.52%, rgba(180, 196, 255, 0.4) 100%);
          background: #E3F8F3;
        }
        [data-theme='dark'] #home-2 .page-bg {
          //background: linear-gradient(180deg, #28274D 18.52%, rgba(180, 196, 255, 0.4) 100%);
           background: #192852;
        }
        #home-3 .page-bg {
          background: linear-gradient(180deg, #6fb6f1 0%, #eaf2f6 100%);
        }
        [data-theme='dark'] #home-3 .page-bg {
          //background:  linear-gradient(100.25deg, #00100B 3.49%, #C0FFEC 3.49%, #DBE4FF 98.57%);
           background: #192852;
        }
        #home-4 .inner-wedge svg {
          //fill: #d8cbed;
        }
        [data-theme='dark'] #home-4 .inner-wedge svg {
          //fill: #201335;
           background: #192852;
        }
      `}</style>
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        containerProps={{
          id: 'home-1',
        }}
        index={2}
        hasCurvedDivider={false}
      >
        <MultipleBanner />
        <Hero />
      </StyledHeroSection>
        <PageSection
            innerProps={{ style: { margin: '0', width: '100%' } }}
            // background={
            //     theme.isDark
            //         ? 'linear-gradient(180deg, rgba(255, 255, 255, 0) 18.52%, rgba(180, 196, 255, 0.4) 100%)'
            //         : 'linear-gradient(180deg, rgba(255, 255, 255, 0) 18.52%, rgba(180, 196, 255, 0.4) 100%)'
            // }
            containerProps={{
                id: 'home-2',
            }}
            index={2}
            hasCurvedDivider={false}
        >
            <MetricsSection />
        </PageSection>

        <PageSection
            innerProps={{ style: HomeSectionContainerStyles }}
            background={theme.colors.gradientCardHeader}
            index={2}
            containerProps={{
                id: 'home-2',
            }}
            hasCurvedDivider={false}
        >
            <OuterWedgeWrapper>
                {/*<InnerWedgeWrapper width="150%" top fill={theme.colors.background}>*/}
                {/*    <InnerWedgeWrapper width="150%" top>*/}
                {/*        <WedgeTopRight />*/}
                {/*    </InnerWedgeWrapper>*/}
            </OuterWedgeWrapper>
            <SalesSection {...earnSectionData(t)} />

        </PageSection>
        <PageSection
            innerProps={{ style: HomeSectionContainerStyles }}
            // background={theme.colors.background}
            index={2}
            hasCurvedDivider={false}
            containerProps={{
                id: 'home-2',
            }}
        >
            <SalesSection {...cakeSectionData(t)} />
            {/*<CakeDataRow />*/}
        </PageSection>
    </>
  )
}

export default Home
