import { vars } from "@pancakeswap/ui/css/vars.css";
import React from "react";
import { Box, Flex } from "../Box";
import { Link } from "../Link";
import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledList,
  StyledListItem,
  StyledSocialLinks,
  StyledText,
  StyledToolsContainer,
} from "./styles";

import { Button } from "../Button";
import CakePrice from "../CakePrice/CakePrice";
import LangSelector from "../LangSelector/LangSelector";
import { ArrowForwardIcon, LogoWithTextIcon } from "../Svg";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { FooterProps } from "./types";

const MenuItem: React.FC<React.PropsWithChildren<FooterProps>> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  ...props
}) => {
  return (
    <StyledFooter data-theme="dark" p={["40px 16px", null, "56px 40px 32px 40px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        <StyledIconMobileContainer display={["block", null, "none"]}>
          <LogoWithTextIcon isDark width="130px" />
        </StyledIconMobileContainer>
        {/*<Flex*/}
        {/*  order={[2, null, 1]}*/}
        {/*  flexDirection={["column", null, "row"]}*/}
        {/*  justifyContent="space-between"*/}
        {/*  alignItems="flex-start"*/}
        {/*  mb={["42px", null, "36px"]}*/}
        {/*>*/}
        {/*  {items?.map((item) => (*/}
        {/*    <StyledList key={item.label}>*/}
        {/*      <StyledListItem>{item.label}</StyledListItem>*/}
        {/*      {item.items?.map(({ label, href, isHighlighted = false }) => (*/}
        {/*        <StyledListItem key={label}>*/}
        {/*          {href ? (*/}
        {/*            <Link*/}
        {/*              data-theme="dark"*/}
        {/*              href={href}*/}
        {/*              target="_blank"*/}
        {/*              rel="noreferrer noopener"*/}
        {/*              color={isHighlighted ? vars.colors.warning : "text"}*/}
        {/*              bold={false}*/}
        {/*            >*/}
        {/*              {label}*/}
        {/*            </Link>*/}
        {/*          ) : (*/}
        {/*            <StyledText>{label}</StyledText>*/}
        {/*          )}*/}
        {/*        </StyledListItem>*/}
        {/*      ))}*/}
        {/*    </StyledList>*/}
        {/*  ))}*/}
        {/*  <Box display={["none", null, "block"]}>*/}
        {/*    <LogoWithTextIcon isDark width="160px" />*/}
        {/*  </Box>*/}
        {/*</Flex>*/}
        <div style={{display:'flex'}}>
          <a href="" style={{marginRight:'32px'}}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQUSURBVHgBtVi7ctpAFF0JbNOZfEFE4xk/Q7qkw11KMn7RmXyBcZUS+IJAly52hx8zxl8AfIGdwh46lC5d5A6/c46s1YgdgVYyvjOL9qW75969L2GIhFQsFrOZTCaLrsXx4+Ojc39/b7fbbUckICPO5lKpVMCBRcMwHLR/T09PN8/PzzbX8Mym0+n3mMtxHVOXx8fHbV3eWkB2dnb28MgDxOHp6WlX553Nzc2CaZoFdAcAdBi1fyKQra2tPKSr3N3d1aByWyQgaNGClmqJeVAL29vbFTElAq9abH5Qa4WqFVOmjY2NonfN0cSNfEG8EVHAMM2kggPeJ6z/Mwzyp4hBdOXV1dXSwsKC0+/3J7rv9fW1vbi4+Gl5eXmI/l85P2KsQHoACy+LGABmZ2epakrImEI3PkA8qUcZpnqWDwQeUgaDro5lhwFQCYC6qVSq3mq1umHrnjcVAabBsekjMgwrCgQBQJIqQAwwrI0D4fEr4KAOBOwwEKrrAGjjkZdj10Y84+zz/sYBWFtb+w4JWxh+QcsITaKA0E55aWmpsLKycnN1ddWXa7AVB/MWz3U1ggPyYREzjgY0ABXwOIOG/LDPMzHvemiaP8wTKoAoG0hCtBvxIlAQoOtlaR6KgS0XPCPqCC+rTgsAWn1MnnKIwZyZmbEAZCBnmRe8bh3NFq8EAH7rJycn68jMrmfiUEvZQ41kTdhHFln1JrDwAe0cblVDy4HRfgJANlqZAKgFAqCWIfAvXPlFMH3gfBsgLTOEyUhkBKMG0vm6eNFQFPHdfQqgpH7amw2Bv3IAQFX1RQKx6WJyAv0e2m5wE32eGgKgHIaHYwDUkepzMkBJ8mzQYh/S80Hj928AQZTrjjkcDllt+Z4BZmTkwG3P1Pv0AJUDgIIAamqZyCvhVQSmzig4DveTHsBZLDHdEM9agYzkoixm0N3VzR1B8krKH54mmhSOICmYygdgG7ClimsjahwJSg5mBqTqMLBRzcqBlgqAId1z/56qqTBhZBxxNSKteFw9ynUamCchbaUXiDU0wn3M7TF60mWhwW86GiRw7J8/Ojo6NyUA1UCDxHW6IoMSgQAE4w7jjxt5cc+8eyFjhu41Yn+BINj33ReH/FaNUyUcwhoih71NDB0w6snPCRkzhCZ51+oHUh8I48Xc3FxVhwk04HoWNHKBxlSuE2NGCNdZDcaakYAGCZs6lTaNmUGOAQoa+Rj0OB2i4dMTJ256qwpeEmsf7c8KbnyLSp5ekujbhioUU6KoD7aJn5ze50X19va2/ppPThomuk141qVIAkQScwaDGQy0O64qDwHA4rksXv4VaETtj/W3BO2G9S1TAkAN8PyDpxuiITWBzmPuHdfR2nHiSiwgQWLeYXUn89TDw4ONh5P0j5r/oLmMmPjiN5EAAAAASUVORK5CYII=" alt="" /></a>
          <a href="" style={{marginRight:'32px'}}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPTSURBVHgBtVjJUeNAFG0LsdxGRDAiA5GBiWBEsRYXTAR4IrAcASYDuLEdNBGgiQARgUUEiBs7857o1rRl7ZhfJffe//21u90RLcl1XWtpaclC1Wb77e0tfnl5iXzfj0UL6jSZvLu72wVDt9PpxPju39/fHz4+PiKOobRM0/yJvhWOoyu8uLjw6+5dC8jOzs4hCgcgTq+uroI6azY3N7uGYXRRHQPQadX8UiBbW1sOpOs/Pz97UHkkWhC0aENLXus9qIXt7e2+mBFhL6/xflBrn6oVM6aNjQ1XmrmaOJELxDcRBczTzISPSHv24FyemBHt7e05r6+vv1DtI7LCy8vLNWocvhegHqp5pr6ITgUQPfFFYo5ZXFzcx34uQHRVP5gndUTeCFo5QbU3BQQR0qNniy+Qlmf2mVdQToyjL1B1hHbivBB8NAEEi+w24UXpFxYWDsHEhQYcjbnKsJY2/VZVzs7OIgBxUmD8oXNik0A0IEoPLV4DxD2aHgCkm1JyfGsq66bMDONab4PniYrORCNzc3NOHQeVzryPah/llOrFpxaG2M/HOJnaGcZ3eptZGsLQNIEpJbCKmOuOh69bNA+g/KenpwMehHkgCFKPEm1dYkKTjNCIshOqHE+jCIwPpHSOBDElGEO3YH1MDOb8/LwNJmORI30Jc7X5MY5+niExHI8mG+WBkJL/LdiDGrFM2NNCrD+wE453gwG7BoAQ3291EjMboz0qW4M9b/L6wT8iTzPDYIgFzIJFKT5xRtg6ZQpNDLDOExUE/7ktG2f4RswhbIDBCaJnHYltGf6xjq5TyTwJSfSvqgQkQRyh8EQ1RUU5Cqal/8Xm4+NjDJNM2FVe93z5JfcS3eOlLx0BXE/UIMwr1AZMY0PAwJBMrbKNsiDg4Nd1QZB4wIlikMzosSEblqhJyBOOnkXrECIwLAGZmF4B8etehGhT0ZAQlblAmKtUNCVAGIZMXKIG4bzIAqm6qYdFTwzmqvPz8z8pEBIdCva3RQUBsAISY80Bo4yl+H/aZucXacNGMVbtFAgvK4iEgagmS4JYY7izgyU0tYpqlJ2s30F0QnoY6M8MQx+Eqo6rbto82iWICUl5v8DGK6gOM/OnQpdJEL42MW8ql/M+iSKs+5DKI972YJJEuxJcSrz7MHfoibGQqJXvuMkzSlq9bahCMSOqerCVHrP0bNh4gANr+JUnJx0T1eO8i1EtIIqkzW1ERgCnDOqsoRn4RhKf/wpU+kOjvyWkozk8EgBqjPIOZZI/IDWB/kDfMseZrZs4fCMgOsnDz1bnFNJ4hCJu+0fNPzj1aKd4k1aBAAAAAElFTkSuQmCC" alt="" /></a>
          <a href="" style={{marginRight:'32px'}}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOXSURBVHgBtVjbddpAEF1k/PiLUkHkCoIrCK4gyvHzz7gCOxWAK4jdAfz5xbFcgeUKIBWwriDyH29yr7IiC5ZWQsA9R2e1r9Hd2ZnZWRVETriua+/s7Nh4dVgfjUbBYDCQnucFIgcKiww+PT0t44NuoVAI8PwZj8fvk8lEsg+lXSwWv6Btl/1oat/f33tZZWcicnJycoGiBBKNx8dHP8ucw8PDsmVZZbx2QKiRNt5I5OjoqITVXfb7/RpULkUOQIsOtFTLLYNaOD4+vhQrAmTVFpYHtV5StWLFODg4cNU2p4MDOUGsCVxgnGYsvcL9hPV/bjabma19UdDYYTOh/entRb1Co4KFV0ROUJPwlAsYeBlVurAPI/0ZGSndv9vtSpC5hlbqaKpEc6deA4YVBCRft2wMftIFmYCxVRS1uD5ouY7CAUEHC91VpOhNLurXrE+3hoNiPuhubW29IIo6wgCuNImEkl2hfI4B4TO23d7eShTT7QmJUKVg588wQAhXrw7ItEyuh7kVkQ6HRKDhV21ePfLOkMjGxkZpPmKqMyM6N0jqF8h01OpnANV/FemQILGva53fhKZCDy0qQXbC5Bs8Va3OfX0BIYk5zxDiR2dNGjDOj7M1dS4Ji1uAikyY7OFpx3TR8BiYnlC28JREfgTkYG1ublJoZ75XEWyJFQGy3uLasVBqxLZgHzZO1ff5AbQRqnPJ1U4x7wwR8H2J9MGxTJNB5EqsCMPhsG3qJxGpfPwDaNUgcy7+e08uQH49KXNDEKUJBBZCLrMt2yCHK2H0kyIner1eomaxNQ5TTEsxTSTCQSgYzByRA0obMqkfGmdEDyxVSSSijHZf5NseadKGIvovjiginikRenh4aONU3cNrIyGuxAKecm7SBqN0FCJCIirUnpmE8pACmbrIqBkaeVqiDaLlu7u7Z74XtYm/ecpquYPDEjHGBoFvPLI5EYRFChj+f1CLpkEqDZgG0mkcYbKyvb1dnWNco+og+FolOyZQU1c42PbSSBBYYFW/ZswsT10fylGyEjEHke/UiIo3jvbhMPqifIV3eVlveUyiQLhhTLjWlcFHYO6T+VrBgevI5Oklue42Kg9dCdIubEYXUPZRZVBa5spJw8TrjcmIM13CmeHTUOHGPuKJn2UOt0Hlsm3d+JciEoF2w/yWRwJIdVC+oQw9Basm0U+8oLGf0Trrn4OFiehgBsfsLjqnkG9IFEHeHzV/AXxLMUHBkfolAAAAAElFTkSuQmCC" alt="" /></a>
          <a href="" style={{marginRight:'32px'}}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARHSURBVHgBrVi7UttAFF0LA04V5QuilDDDxGU6RJkKZ3h2OF8A/gLbXwD+AuwO85gRXUrTpcM0tIguXUTHm5xjVp6r9VqW7dwZz0r7uHv2vvbIOTWhlEolt1AouHj0+P7y8hI9PT2FQRBEagLJjTN5e3vbx4alXC4X4ff39fX17u3tLeQYWjefz39G3xeOo6t7fHwcZNWdCcjW1tYumiJAtE5PTztZ1qyvr/uO4/h4vAGg1qj5qUA2NjaKON3e4+NjDSYP1QQCK3qwUm1iHbTC5ubmnvpPAl21NH1Wi8CsXNC1uYFBOjc3t4uY8GEtT+lghUTo68IdwcPDw7nt9GtrayXGUbvdbowEQks8Pz/fnp2dJQKNJkaMHGJzX2UQgGoii+omIB07RcTNgex3zM2g4JMJguDg58usICiYW4blLk130MrQ1Yu/oUAYVEBak31QVAU4onfV+MI1+9RhgDlgEliBAGGZkS0HddrW1PQyEKhwT6IvHz8w8KQ/47TTr3TVVTzG4oX5u7YdMdbB2IXRTYtUEehBvMfR0VEIIMUEEEYzNu3IlRqEq5V7JycnP+Q4LPh1SMxU4N5u/AKrHmI9H93Z2dlDtCtijyaDl3HTc83MzExRpiqtgWYnfseGRaDfV8mT1y0gugDcB8EDYl5Z6PGZ/vE790Rfic+OVuoa1ihZNkn0UQndYMxJpqTjDAQ4MikRK/peUg4R4iWUg9hgVdmQYK48EaRlrLvCuKdSBHOWja6IOh34zQOQGwNl0aaE1748EQoWgzjSa5porOsM3Z4BjOtdB/HhomLeGfPTakY/WzT36JVr3sxyLEU8+YL9Q5R9z1Hji4vA7Qcyas8B7xgoC4dZMosQSGiai31pi2Qm0Cpw0YqoOaMkweCwljEaOff392RbrrFRmKaJacj8l2DQLKsMQuvJd7jGI8V0tBLX2OhCjTgJ5vTvD14PyvD9MMG6cwMYK3pkrSP0u0VHi2UZcxtaoS9u0B2VUaA7MIC91xENJDBNbRSreswfUDn3hHnLrMKi1Cf4B+Y2pR6muHGfkVxd8rl317BK4nS8B/qL4Luf5CBKu41UTwCjMvLZHcz5LPrMeb0ih8bHLwJzS1wLWOvHtKPP0EgPwcwCiZh9KNOJO2YKqUhWpm/35Zjh9+sIycr8/PwAgUFTV9NL3aSGKIBV+ZlhMrSGSWBoOvRXlJE1GYVrKjbWRz4r+2bky/X19Z+FhYVvi4uLBTyHov/30tJSm3xWZbhPKAxSbPYd/PeX7Cc1gLs/mP3WzwlaBaYLTRJN0QR7lVRBl/Q49ZnarNIXTH/bNzCzBOsGGHyqMFBN0juNjPpgS/3k1KevMu2m+eRkYOKxIdnbWEBiYQnnxQjfdlBdO1nWaDeU1fu/AiNdMdbfEgw08lteCQB1g/YWbS8WcGoC/ciA5jirddZ/DsYGIoX0juwuvqdQDEM00aR/1PwDVayaO8U82PMAAAAASUVORK5CYII=" alt="" /></a>
          <a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ8SURBVHgBvVg7UhtBEB2tBIUj1ifwEvKpQpwAkTmzqvhmwAnMDSRldmQUOhLKEJ+qJXOGyMgsAig70nICVhl/+T0xoxo1K2m1puiq1ex8uudNd093r1IqIeXzeXdiYsLFq8f+09NT+PDwEPi+H6oElBpl8cbGRg4b5lOpVIjn5vn5udVutwPOoXUzmcwnjE1xHkONg4MDP67sWEDW19e/oskCRPXo6Kgeh2dlZSXnOE4Or00Aqg5bPxDI6upqFqfbub+/L0LlgUpA0KIHLRUTy6AW1tbWdtQbEWQVB8mL1AjUSoZGPzNoR6WpPGjM6wiCz+C52N/fr/fZSy0vL+fpR7VarTwUCDXx+Ph4fXx8/MrRLGfdRNfts18Ix/Vxg0pRptC+k4Xf7PYFou25hUVFe5waGB8fL+B1VFPtwjdK8kpT4zhM/fDwsGHGHHsBnUqCIDiA+J0ABGmHvDiIZw/C5Lu8BPZYFwhuyBY9W4IAuFOlg1ZC4kFOJRiYp8d5u0DodNKm8IeKAQG7U40lPIEaQlyLp6x5OmDGxsYq9ho4dYAma/pp/tCb0fy5uroKzAQ1ZKsP799htm+Xl5flmZmZawzx+QmNVbFhLZ1On6P9i3U12H4bsn7Nzc19wJrP5qCzs7Mt8J8bmdPT0yFkedw300GTTmelb4CxIE7ZdThstKdiEHkgxx6izO5tYXjAgdmvO5qh5ypqDXkCmKtGpAgel9dXrOkc0OHVRCewJ6GhvBAQwJFjJzBD4NlDE4qNN8WykBgcOBGjY9OegYbmRf8kSZ5g/ABvVQDJCdkE6mZweheRtCUWZ4XMhkpOkrfHXNg/ABjPUe9Pkb5GIIFJXBZJu47sqBavN2geOYk+Gjq3t7dhxEY9QKC6LyohgXdRDPWYCqbxWGI6OiFJIGd2hw4mr10cYraWzol+QwBlRA8j4wii5Z4UitxQGQUMQUBOJWLKF8A62u+EPbOBXQghId2oF02VWCCD4Qf7eK8DlI9Nzuw0TmJpiblFzOWlJjQFiOBTNljIm0ShdOIYADLQQFhJvxbwHpo+NwAz0/i83IWa1XM5FU1FsUeOIPjuWEIu7FTNmoGn5zscqqL72xxjZo2qzBGP+sYb8tk8LDHQdANpT0ZCmVgBwm17sVWPsGgqqSEEk7YjhpkiluzoDDNWmKVNX1ZoZbtYYc0Amy+plxqEhcwNBJyibar49AoE+Ausae1FPUDofACj7NtBMBC0QHOg62r7eyoGkYe8Ngid2Vsyd0V+TlArqM4CWcmbjyUmRYBeiOKFxljfnrGSl58j+kq/quAHEittqlC9EQ37YBv4yUkN4GSFu7u70v98ckK7PFBZxp3YQAzp+tWD49YHfckJADTDlnr5V2CoKUb6W4KOxvqWgQugmmiv0XZCND8/8T6JsY86sPlx/zkYGYhNLO9Y3Zk8hWAWoAmT/lHzDyccm6uwHMfKAAAAAElFTkSuQmCC" alt="" /></a>
        </div>
        {/* <StyledSocialLinks order={[2]} pb={["42px", null, "32px"]} mb={["0", null, "32px"]} /> */}
        <StyledToolsContainer
          data-theme="dark"
          order={[1, null, 3]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
        >
          <Flex order={[2, null, 1]} alignItems="center">
            {/* <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} /> */}
            {/* <LangSelector
              currentLang={currentLang}
              langs={langs}
              setLang={setLang}
              color="textSubtle"
              dropdownPosition="top-right"
            /> */}
          </Flex>
          {/*<Flex order={[1, null, 2]} mb={["24px", null, "0"]} justifyContent="space-between" alignItems="center">*/}
          {/*  <Box mr="20px">*/}
          {/*    <CakePrice cakePriceUsd={cakePriceUsd} color="textSubtle" />*/}
          {/*  </Box>*/}
          {/*  <Button*/}
          {/*    data-theme="light"*/}
          {/*    as="a"*/}
          {/*    href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56"*/}
          {/*    target="_blank"*/}
          {/*    scale="sm"*/}
          {/*    endIcon={<ArrowForwardIcon color="backgroundAlt" />}*/}
          {/*  >*/}
          {/*    {buyCakeLabel}*/}
          {/*  </Button>*/}
          {/*</Flex>*/}
        </StyledToolsContainer>
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
