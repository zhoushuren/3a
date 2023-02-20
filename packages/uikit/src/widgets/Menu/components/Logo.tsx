import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import Flex from "../../../components/Box/Flex";
import { LogoIcon, LogoWithTextIcon } from "../../../components/Svg";
import { MenuContext } from "../context";

interface Props {
  isDark: boolean;
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); }
  50% { transform:  scaleY(0.1); }
`;

const StyledLink = styled("a")`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.lg} {
      display: none;
    }
  }
  .desktop-icon {
    width: 160px;
    display: none;
    ${({ theme }) => theme.mediaQueries.lg} {
      display: block;
    }
  }
  .eye {
    animation-delay: 20ms;
  }
  &:hover {
    .eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const Logo: React.FC<React.PropsWithChildren<Props>> = ({ isDark, href }) => {
  const { linkComponent } = useContext(MenuContext);
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      {/* <LogoIcon className="mobile-icon" /> */}
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAAAoCAMAAADaFKhYAAACPVBMVEUAAAD//////9+AzMz/////+KX/////////9KP/+s+qWiP/+sz/lXf/PQDVrpf///9+z8D/mHb/+8vRpor/9KP///8Ppo3/96H/////+tL/+sn////6/f3/PAD/+sv/j0n/+8j/+8r/340Ppo3/PAD/jmsOpY1wzL5yzLynsZnMn4HOn4H/h2r/jWr/xJn/9cT/+cj/+8r/+cj/jGn/PQD/9aH/+sb////6/f3/iGP/+s//+tH//////M9rx7n/+cT/+cj/hF7/+8//g13/+cP//MYPpo3/9qP/+cP///8Ppo3/+cIaoIX/+sH/nlXJm3vLm3v/9qL/+8v/+b6arJL/flb/9qJGi2im39X/+b7/PQD7PwH7ek9VwrH/cEz/d0z/uYT/87j/+r7/+b3/dkv/+bzrRAj/7Zr/9qL/+bv///////z/////9qL/9qH7bT7/+Lb/+9VEuqZEvKi9f1b/////ZDP6/f3///83taC4dkm/hFz7Xi3/ViH/963/SyD/VB7/VSD/ViD/p2f/8Kb/96z/+a7//7UpsJn/96z/96ogrJX/TBP/VB7/96j/Rw4MqI8Ppo0PqZBqelBrelCc2s+nWyanWyepXCapXCeqWiWrWyWsWyW3e1C5eE3NThbOTxbWYC75PwL6PwL6/f3/MgD/PQD/PgD/PgH/QQX/ShH/m1H/r5f/taD/7pr/9qH/9qL/9qP/96H/96L/96r/+KP/+LT/+b3/+qT/+tL//OH//OT//6r///z///8GOqQLAAAAkHRSTlMABQgKHSUlJy8wMzc6P0JDRUVFSEhJU1xjZmhoaWprdHR0eXt7fH19fX19fX19fX19fYGDhYWQkpOYmpqam6Cjo6irra2trq6yt7i4vL7CxcXFxcnKysvMzMzNz8/Q0NDQ0NDR0tbX19fX29zf4uXm6Orr6+vr7/Dw9PT29vn5+vr6+vr6+vr6+/v8/f39/f5qmhumAAAAAWJLR0S+pNyDwwAAAjxJREFUWMNjYBgFwxwoQ4DY4HPZRAhwG3UZ8SA8PNzHy8tLbfC5bNasWVyDMweMumw4uEw2CgLS0tKigZTs4HGZyTIUYDLqsuHtMo1JU5fsAwFRqAA7iLNm1XK4phVgYWM4f+nqdVvXr19fBxb2WL9+x5Zd/Oim2uxDBnt37gFqsB8iLpP3QwHyaAYwCwjYTZpanpVVsW+fBBsbI8JlvU2NELBy2QpBQR6Yy3qAIvXNLW2t69e3CglxEnBZThYEZBe2t7a2mqGoMN2AAkzRDBAA1vKTplowMJiDTWJDuCwUpqQB5KBamMscoaJM60GggIDLWPCksyHqMg0Nu4kTu4sjZBgYpD09S4ERKipKN5exioiIBEJclQtksmI22opgPE+wYXRzGQi4Q1yWgb05SQ2X7R6kLtu8cZskutFB20HAyRoMrGwdXKUGwmXr129QRDc6FTV9b1gfTC2XrSXJZesV0I3O3IQC1pPjso7YEP8AEKieBwIMDHxAcu7Cmngo6F+2wtnZEuayMqBIXEJiUvL69X0uLka4XQYW9nWBAzJic+KEKTPnzIYDBgZhIDljweJlRNdOuF3GjSf1c4iLi4dBXJYHZHJgc9nk6bMQAOgyIDlt/iJauwxvSQt2WKW6ppY2CFShuCxfFw5UkVyWAuTr6OkbGhgYyNHaZfAcUILishh0k1BzABwMQ5cppaMAJRq5rKsVGXjDXNaJImxGfMuRei5DBZEwl6EC++HgsgEFvCoogHd0jHMUUAkAAAYok7qL9emRAAAAAElFTkSuQmCC" alt="" />
 

      {/* <LogoWithTextIcon className="desktop-icon" isDark={isDark} /> */}
    </>
  );

  return (
    <Flex>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink href={href} as={linkComponent} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
