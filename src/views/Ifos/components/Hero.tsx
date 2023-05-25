import styled from 'styled-components'
import { Box, Heading, Text, Button, Flex, useMatchBreakpoints } from '@pancakeswap/uikit'
import Container from 'components/Layout/Container'
import { useTranslation } from '@pancakeswap/localization'
import { useRouter } from 'next/router'

const StyledHero = styled(Box)`
  // background-image: url('/images/ifos/assets/ifo-banner-${({ theme }) => (theme.isDark ? 'dark' : 'light')}.png');
  // background-position: top, center;
  // background-repeat: no-repeat;
  // background-size: auto 100%;
  position:relative;
`

const StyledHeading = styled(Heading)`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: #61D361;

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 32px;
  }
`

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.tertiary};
  //color: ${({ theme }) => theme.colors.primary};
  padding: 4px 13px;
  height: auto;
  text-transform: uppercase;
  align-self: flex-start;
  font-size: 12px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  border-radius: 8px;
  margin-left: 8px;
`

const DesktopButton = styled(Button)`
  align-self: flex-end;
  // background: ${({ theme }) => theme.colors.primary};
  background: linear-gradient(275.76deg, #2ED573 44.33%, #7BED9F 98.56%);
  box-shadow: 0px 10px 10px rgba(46, 213, 115, 0.15);
  border-radius: 30px;
`

const StyledSubTitle = styled(Text)`
  font-size: 14px;
  //color: ${({ theme }) => theme.colors.textSubtle};
  color: #788094;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 20px;
  }
`

const Hero = () => {
  const router = useRouter()
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()

  const handleClick = () => {
    const howToElem = document.getElementById('ifo-how-to')
    if (howToElem != null) {
      howToElem.scrollIntoView()
    } else {
      router.push('/ifo#ifo-how-to')
    }
  }

  return (
    <Box mb="8px">
      <StyledHero py={['16px', '16px', '32px']} minHeight={['212px', '212px', '197px']}>
        <div style={{position:'absolute',textAlign:'center',height:'100%',width:'100%'}}><img style={{height:'100%',opacity: '0.5'}} src="/images/ifos/assets/ifo-banner-light.png" alt="" /></div>
        <Container style={{position:'relative',zIndex:'1'}}>
          <Flex
            justifyContent="space-between"
            flexDirection={['column', 'column', 'column', 'row']}
            style={{ gap: '4px' }}
          >
            <Box>
              <StyledHeading as="h1" mb={['12px', '12px', '16px']}>
                {t('IFO: Initial Farm Offerings')}
              </StyledHeading>
              <StyledSubTitle bold>
                {t('Buy new tokens launching on ARB')}
                {isMobile && <StyledButton onClick={handleClick}>{t('How does it work?')}</StyledButton>}
              </StyledSubTitle>
            </Box>
            {!isMobile && (
              <DesktopButton onClick={handleClick} variant="subtle">
                {t('How does it work?')}
              </DesktopButton>
            )}
          </Flex>
        </Container>
      </StyledHero>
    </Box>
  )
}

export default Hero
