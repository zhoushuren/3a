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
      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMzIiBoZWlnaHQ9IjQxIiB2aWV3Qm94PSIwIDAgMTMzIDQxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNjMuMzA1NiAzMC42NjU3QzYzLjMyMjYgMzAuNjgyOSA2My4zMzExIDMwLjcxNzEgNjMuMzMxMSAzMC43Njg2QzYzLjMzMTEgMzAuODM3MSA2My4zMDU2IDMwLjg5NzEgNjMuMjU0NCAzMC45NDg2QzYzLjIyMDMgMzAuOTgyOSA2My4xNjkyIDMxIDYzLjEwMSAzMUg1OS4yNjU1QzU5LjE5NzMgMzEgNTkuMTM3NiAzMC45NTcxIDU5LjA4NjUgMzAuODcxNEw1My44MTkgMTcuNzU3MUM1My44MDE5IDE3LjY1NDMgNTMuNzMzOCAxNy42MDI5IDUzLjYxNDQgMTcuNjAyOUM1My41MjkyIDE3LjYwMjkgNTMuNDYxIDE3LjY1NDMgNTMuNDA5OSAxNy43NTcxTDQ4LjA5MTIgMzAuODcxNEM0OC4wNTcyIDMwLjk1NzEgNDcuOTk3NSAzMSA0Ny45MTIzIDMxSDQ0LjIzMDFDNDQuMTQ0OSAzMSA0NC4wNzY3IDMwLjk2NTcgNDQuMDI1NiAzMC44OTcxQzQzLjk5MTUgMzAuODI4NiA0My45OTE1IDMwLjc1MTQgNDQuMDI1NiAzMC42NjU3TDUxLjU5NDQgMTMuMTAyOUM1MS42Mjg1IDEzLjAzNDMgNTEuNjg4MSAxMyA1MS43NzM0IDEzSDU1LjY4NTZDNTUuNzcwOSAxMyA1NS44MzA1IDEzLjAzNDMgNTUuODY0NiAxMy4xMDI5TDYzLjMwNTYgMzAuNjY1N1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik03NC4xOTY5IDEzQzc2LjQ4MTIgMTMgNzguMjQ1NSAxMy41NDg2IDc5LjQ5IDE0LjY0NTdDODAuNzM0NCAxNS43MjU3IDgxLjM1NjYgMTcuMjYgODEuMzU2NiAxOS4yNDg2QzgxLjM1NjYgMjEuMzQgODAuNzI1OSAyMi45Njg2IDc5LjQ2NDQgMjQuMTM0M0M3OC4yMiAyNS4yODI5IDc2LjQ2NDIgMjUuODU3MSA3NC4xOTY5IDI1Ljg1NzFINzAuNjQyNlYzMUg2Ni42MDI1VjEzSDc0LjE5NjlaTTczLjk5MjQgMjIuNDYyOUM3NS4xMzQ1IDIyLjQ2MjkgNzYuMDAzOSAyMi4yMDU3IDc2LjYwMDUgMjEuNjkxNEM3Ny4yMTQyIDIxLjE2IDc3LjUyMTEgMjAuMzg4NiA3Ny41MjExIDE5LjM3NzFDNzcuNTIxMSAxOC4zODI5IDc3LjIxNDIgMTcuNjM3MSA3Ni42MDA1IDE3LjE0Qzc2LjAwMzkgMTYuNjI1NyA3NS4xMzQ1IDE2LjM2ODYgNzMuOTkyNCAxNi4zNjg2SDcwLjY0MjZWMjIuNDYyOUg3My45OTI0WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTkyLjcyNTQgMTNDOTUuMDA5NyAxMyA5Ni43NzQgMTMuNTQ4NiA5OC4wMTg0IDE0LjY0NTdDOTkuMjYyOSAxNS43MjU3IDk5Ljg4NTEgMTcuMjYgOTkuODg1MSAxOS4yNDg2Qzk5Ljg4NTEgMjEuMzQgOTkuMjU0MyAyMi45Njg2IDk3Ljk5MjkgMjQuMTM0M0M5Ni43NDg1IDI1LjI4MjkgOTQuOTkyNiAyNS44NTcxIDkyLjcyNTQgMjUuODU3MUg4OS4xNzExVjMxSDg1LjEzMVYxM0g5Mi43MjU0Wk05Mi41MjA4IDIyLjQ2MjlDOTMuNjYzIDIyLjQ2MjkgOTQuNTMyNCAyMi4yMDU3IDk1LjEyOSAyMS42OTE0Qzk1Ljc0MjcgMjEuMTYgOTYuMDQ5NSAyMC4zODg2IDk2LjA0OTUgMTkuMzc3MUM5Ni4wNDk1IDE4LjM4MjkgOTUuNzQyNyAxNy42MzcxIDk1LjEyOSAxNy4xNEM5NC41MzI0IDE2LjYyNTcgOTMuNjYzIDE2LjM2ODYgOTIuNTIwOCAxNi4zNjg2SDg5LjE3MTFWMjIuNDYyOUg5Mi41MjA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTEwMy44NjQgMzFDMTAzLjgxMyAzMSAxMDMuNzYyIDMwLjk4MjkgMTAzLjcxMSAzMC45NDg2QzEwMy42NzcgMzAuODk3MSAxMDMuNjU5IDMwLjg0NTcgMTAzLjY1OSAzMC43OTQzVjEzLjIwNTdDMTAzLjY1OSAxMy4xNTQzIDEwMy42NzcgMTMuMTExNCAxMDMuNzExIDEzLjA3NzFDMTAzLjc2MiAxMy4wMjU3IDEwMy44MTMgMTMgMTAzLjg2NCAxM0gxMDcuNDk1QzEwNy41NDYgMTMgMTA3LjU4OSAxMy4wMjU3IDEwNy42MjMgMTMuMDc3MUMxMDcuNjc0IDEzLjExMTQgMTA3LjcgMTMuMTU0MyAxMDcuNyAxMy4yMDU3VjI3LjQ1MTRIMTE1LjE2NkMxMTUuMjE3IDI3LjQ1MTQgMTE1LjI2IDI3LjQ3NzEgMTE1LjI5NCAyNy41Mjg2QzExNS4zNDUgMjcuNTYyOSAxMTUuMzcxIDI3LjYwNTcgMTE1LjM3MSAyNy42NTcxVjMwLjc5NDNDMTE1LjM3MSAzMC44NDU3IDExNS4zNDUgMzAuODk3MSAxMTUuMjk0IDMwLjk0ODZDMTE1LjI2IDMwLjk4MjkgMTE1LjIxNyAzMSAxMTUuMTY2IDMxSDEwMy44NjRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTE5LjQ3MyAzMUMxMTkuMzg4IDMxIDExOS4zMTEgMzAuOTc0MyAxMTkuMjQzIDMwLjkyMjlDMTE5LjE5MiAzMC44NTQzIDExOS4xNjYgMzAuNzc3MSAxMTkuMTY2IDMwLjY5MTRWMjcuOTRDMTE5LjE2NiAyNy44NTQzIDExOS4xOTIgMjcuNzg1NyAxMTkuMjQzIDI3LjczNDNDMTE5LjMxMSAyNy42NjU3IDExOS4zODggMjcuNjMxNCAxMTkuNDczIDI3LjYzMTRIMTMyLjY5M0MxMzIuNzc4IDI3LjYzMTQgMTMyLjg0NyAyNy42NjU3IDEzMi44OTggMjcuNzM0M0MxMzIuOTY2IDI3Ljc4NTcgMTMzIDI3Ljg1NDMgMTMzIDI3Ljk0VjMwLjY5MTRDMTMzIDMwLjc3NzEgMTMyLjk2NiAzMC44NTQzIDEzMi44OTggMzAuOTIyOUMxMzIuODQ3IDMwLjk3NDMgMTMyLjc3OCAzMSAxMzIuNjkzIDMxSDExOS40NzNaTTExOS4xNjYgMjAuNTg1N0MxMTkuMTY2IDIwLjUgMTE5LjE5MiAyMC40MzE0IDExOS4yNDMgMjAuMzhDMTE5LjMxMSAyMC4zMTE0IDExOS4zODggMjAuMjc3MSAxMTkuNDczIDIwLjI3NzFIMTMyLjU5MUMxMzIuNjc2IDIwLjI3NzEgMTMyLjc0NCAyMC4zMTE0IDEzMi43OTUgMjAuMzhDMTMyLjg2NCAyMC40MzE0IDEzMi44OTggMjAuNSAxMzIuODk4IDIwLjU4NTdWMjMuMzM3MUMxMzIuODk4IDIzLjQyMjkgMTMyLjg2NCAyMy41IDEzMi43OTUgMjMuNTY4NkMxMzIuNzQ0IDIzLjYyIDEzMi42NzYgMjMuNjQ1NyAxMzIuNTkxIDIzLjY0NTdIMTE5LjQ3M0MxMTkuMzg4IDIzLjY0NTcgMTE5LjMxMSAyMy42MiAxMTkuMjQzIDIzLjU2ODZDMTE5LjE5MiAyMy41IDExOS4xNjYgMjMuNDIyOSAxMTkuMTY2IDIzLjMzNzFWMjAuNTg1N1pNMTE5LjE2NiAxMy4zMDg2QzExOS4xNjYgMTMuMjIyOSAxMTkuMTkyIDEzLjE1NDMgMTE5LjI0MyAxMy4xMDI5QzExOS4zMTEgMTMuMDM0MyAxMTkuMzg4IDEzIDExOS40NzMgMTNIMTMyLjU5MUMxMzIuNjc2IDEzIDEzMi43NDQgMTMuMDM0MyAxMzIuNzk1IDEzLjEwMjlDMTMyLjg2NCAxMy4xNTQzIDEzMi44OTggMTMuMjIyOSAxMzIuODk4IDEzLjMwODZWMTYuMDZDMTMyLjg5OCAxNi4xNDU3IDEzMi44NjQgMTYuMjIyOSAxMzIuNzk1IDE2LjI5MTRDMTMyLjc0NCAxNi4zNDI5IDEzMi42NzYgMTYuMzY4NiAxMzIuNTkxIDE2LjM2ODZIMTE5LjQ3M0MxMTkuMzg4IDE2LjM2ODYgMTE5LjMxMSAxNi4zNDI5IDExOS4yNDMgMTYuMjkxNEMxMTkuMTkyIDE2LjIyMjkgMTE5LjE2NiAxNi4xNDU3IDExOS4xNjYgMTYuMDZWMTMuMzA4NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOS42MzI3OCAzNS41NTg1QzcuNzk2OTUgMzQuMzY3OSA2LjI2MTk4IDMyLjc2ODEgNS4xNDgzNCAzMC44ODQ2QzQuMDM0NyAyOS4wMDExIDMuMzcyNjcgMjYuODg1MSAzLjIxNDIxIDI0LjcwMjhDMy4wNTU3NSAyMi41MjA0IDMuNDA1MTYgMjAuMzMxIDQuMjM1MDMgMTguMzA2NEM1LjA2NDkgMTYuMjgxOCA2LjM1MjY1IDE0LjQ3NyA3Ljk5NzIzIDEzLjAzMzdDOS42NDE4MSAxMS41OTA0IDExLjU5ODUgMTAuNTQ3OCAxMy43MTM3IDkuOTg3OEMxNS44Mjg5IDkuNDI3NzggMTguMDQ1MSA5LjM2NTUzIDIwLjE4ODUgOS44MDU5NUMyMi4zMzE4IDEwLjI0NjQgMjQuMzQzOSAxMS4xNzc1IDI2LjA2NjkgMTIuNTI2MkMyNy43ODk5IDEzLjg3NDkgMjkuMTc2OSAxNS42MDQ2IDMwLjExOTEgMTcuNTc5NEwyOS4yMzEgMTguMDAzMUMyOC4zNTQzIDE2LjE2NTUgMjcuMDYzNiAxNC41NTYgMjUuNDYwNCAxMy4zMDFDMjMuODU3MSAxMi4wNDYgMjEuOTg0OCAxMS4xNzk2IDE5Ljk5MDQgMTAuNzY5OEMxNy45OTYgMTAuMzU5OSAxNS45MzM4IDEwLjQxNzkgMTMuOTY1NSAxMC45MzlDMTEuOTk3MyAxMS40NjAxIDEwLjE3NjYgMTIuNDMwMiA4LjY0NjI2IDEzLjc3MzJDNy4xMTU5NSAxNS4xMTYzIDUuOTE3NjggMTYuNzk1NiA1LjE0NTQ3IDE4LjY3OTZDNC4zNzMyNiAyMC41NjM1IDQuMDQ4MTMgMjIuNjAwOCA0LjE5NTU4IDI0LjYzMTVDNC4zNDMwMyAyNi42NjIyIDQuOTU5MDYgMjguNjMxMSA1Ljk5NTMyIDMwLjM4MzhDNy4wMzE1OSAzMi4xMzY0IDguNDU5ODkgMzMuNjI1IDEwLjE2ODIgMzQuNzMyOUw5LjYzMjc4IDM1LjU1ODVaTTguODE4MTUgMTUuMTUxNkMxMC43ODc1IDEzLjE4MjMgMTMuMzc4NyAxMS45NTY3IDE2LjE1MDQgMTEuNjgzN0MxOC45MjIxIDExLjQxMDcgMjEuNzAyNiAxMi4xMDcyIDI0LjAxODMgMTMuNjU0NUMyNi4zMzQgMTUuMjAxOCAyOC4wNDE2IDE3LjUwNDIgMjguODUgMjAuMTY5M0MyOS42NTg1IDIyLjgzNDUgMjkuNTE3OCAyNS42OTc1IDI4LjQ1MiAyOC4yNzA2QzI3LjM4NjIgMzAuODQzNiAyNS40NjEyIDMyLjk2NzUgMjMuMDA1IDM0LjI4MDRDMjAuNTQ4OCAzNS41OTMzIDE3LjcxMzQgMzYuMDEzOSAxNC45ODE4IDM1LjQ3MDVDMTIuMjUwMyAzNC45MjcyIDkuNzkxNjMgMzMuNDUzNSA4LjAyNDggMzEuMzAwN0M2LjI1Nzk3IDI5LjE0NzggNS4yOTIyOSAyNi40NDg5IDUuMjkyMjkgMjMuNjYzOEw3Ljk5MDIxIDIzLjY2MzhDNy45OTAyMSAyNS44MjQ3IDguNzM5NDcgMjcuOTE4NyAxMC4xMTAzIDI5LjU4OTFDMTEuNDgxMiAzMS4yNTk1IDEzLjM4ODggMzIuNDAyOSAxNS41MDgyIDMyLjgyNDRDMTcuNjI3NSAzMy4yNDYgMTkuODI3NSAzMi45MTk3IDIxLjczMzIgMzEuOTAxQzIzLjYzOSAzMC44ODI0IDI1LjEzMjUgMjkuMjM0NSAyNS45NTk1IDI3LjIzODFDMjYuNzg2NCAyNS4yNDE3IDI2Ljg5NTUgMjMuMDIwMyAyNi4yNjgzIDIwLjk1MjVDMjUuNjQxIDE4Ljg4NDcgMjQuMzE2MSAxNy4wOTgzIDIyLjUxOTQgMTUuODk3OEMyMC43MjI3IDE0LjY5NzIgMTguNTY1MyAxNC4xNTY4IDE2LjQxNDggMTQuMzY4NkMxNC4yNjQ0IDE0LjU4MDUgMTIuMjUzOCAxNS41MzE0IDEwLjcyNTkgMTcuMDU5M0w4LjgxODE1IDE1LjE1MTZaTTI5Ljg3ODUgMzAuMjU1M0MzMC44MjgxIDI4LjQ0NTIgMzEuMzc0NCAyNi40NTA5IDMxLjQ4MDIgMjQuNDA5NkwzMC40OTc1IDI0LjM1ODdDMzAuMzk5MSAyNi4yNTgyIDI5Ljg5MDcgMjguMTEzOSAyOS4wMDcyIDI5Ljc5ODNDMjguMTIzNyAzMS40ODI2IDI2Ljg4NiAzMi45NTU4IDI1LjM3OTEgMzQuMTE2NUMyMy44NzIzIDM1LjI3NzEgMjIuMTMyIDM2LjA5NzggMjAuMjc4IDM2LjUyMjJDMTguNDIzOSAzNi45NDY2IDE2LjQ5OTkgMzYuOTY0NSAxNC42MzgyIDM2LjU3NDhMMTQuNDM2NiAzNy41Mzc5QzE2LjQzNzMgMzcuOTU2NyAxOC41MDQ5IDM3LjkzNzQgMjAuNDk3NSAzNy40ODE0QzIyLjQ5IDM3LjAyNTMgMjQuMzYwMiAzNi4xNDMzIDI1Ljk3OTYgMzQuODk2QzI3LjU5ODkgMzMuNjQ4NiAyOC45MjkgMzIuMDY1NSAyOS44Nzg1IDMwLjI1NTNaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNTM5XzExNzcpIi8+CjxwYXRoIGQ9Ik0xNS4wNjExIDEuODY4MDFMMjEuMzk4NyA0Ljk1MjYzTDE2LjgzOCA4LjY4ODc3TDE1LjA2MTEgMS44NjgwMVoiIGZpbGw9IiNENUY4QUEiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl81MzlfMTE3NyIgeDE9IjIzLjczNzkiIHkxPSI1NC41MDcxIiB4Mj0iMC4yMzM2MzYiIHkyPSI0NS4yMzkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZERkY4QiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2M0UzRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K" alt="" />
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
