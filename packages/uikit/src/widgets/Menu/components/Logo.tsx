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
      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMzIiBoZWlnaHQ9IjQxIiB2aWV3Qm94PSIwIDAgMTMzIDQxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNjYuMzM1MiAzMy4xNTUyVjIxLjg4NzVDNjYuMzM1MiAyMS41NTIgNjYuNDUxNCAyMS4yNjggNjYuNjgzNyAyMS4wMzU3QzY2LjkxNiAyMC44MDM0IDY3LjIgMjAuNjg3MiA2Ny41MzU1IDIwLjY4NzJINzEuNjc4NkM3My4yNTMzIDIwLjY4NzIgNzQuNTA1MiAyMS4xMDAyIDc1LjQzNDUgMjEuOTI2M0M3Ni4zNjM4IDIyLjc1MjMgNzYuODI4NSAyMy44NDk0IDc2LjgyODUgMjUuMjE3NVYyNS4yNTYyQzc2LjgyODUgMjYuNzE0NyA3Ni4zMTIyIDI3Ljg1MDUgNzUuMjc5NiAyOC42NjM2Qzc0LjI2IDI5LjQ3NjggNzIuOTY5MyAyOS44ODMzIDcxLjQwNzYgMjkuODgzM0g2OC43MTY1VjMzLjE1NTJDNjguNzE2NSAzMy40OTA4IDY4LjYwMDMgMzMuNzc0NyA2OC4zNjggMzQuMDA3MUM2OC4xNDg2IDM0LjIyNjUgNjcuODcxMSAzNC4zMzYyIDY3LjUzNTUgMzQuMzM2MkM2Ny4yIDM0LjMzNjIgNjYuOTE2IDM0LjIyNjUgNjYuNjgzNyAzNC4wMDcxQzY2LjQ1MTQgMzMuNzc0NyA2Ni4zMzUyIDMzLjQ5MDggNjYuMzM1MiAzMy4xNTUyWk02OC43MTY1IDI3LjczNDNINzEuNDg1QzcyLjM3NTYgMjcuNzM0MyA3My4wODU1IDI3LjUwODUgNzMuNjE0NyAyNy4wNTY3Qzc0LjE0MzggMjYuNjA1IDc0LjQwODQgMjYuMDI0MiA3NC40MDg0IDI1LjMxNDNWMjUuMjc1NkM3NC40MDg0IDI0LjUwMTIgNzQuMTQzOCAyMy45MDc1IDczLjYxNDcgMjMuNDk0NEM3My4wOTg0IDIzLjA2ODUgNzIuMzg4NSAyMi44NTU2IDcxLjQ4NSAyMi44NTU2SDY4LjcxNjVWMjcuNzM0M1pNNzkuNDAyOCAzMy4xNTUyVjIxLjc3MTRDNzkuNDAyOCAyMS40MzU4IDc5LjUxODkgMjEuMTU4MyA3OS43NTEyIDIwLjkzODlDNzkuOTgzNiAyMC43MDY2IDgwLjI2NzUgMjAuNTkwNCA4MC42MDMxIDIwLjU5MDRDODAuOTI1OCAyMC41OTA0IDgxLjIwMzMgMjAuNzA2NiA4MS40MzU2IDIwLjkzODlDODEuNjY3OSAyMS4xNTgzIDgxLjc4NDEgMjEuNDM1OCA4MS43ODQxIDIxLjc3MTRWMzMuMTU1MkM4MS43ODQxIDMzLjQ5MDggODEuNjY3OSAzMy43NzQ3IDgxLjQzNTYgMzQuMDA3MUM4MS4yMDMzIDM0LjIyNjUgODAuOTI1OCAzNC4zMzYyIDgwLjYwMzEgMzQuMzM2MkM4MC4yNjc1IDM0LjMzNjIgNzkuOTgzNiAzNC4yMjY1IDc5Ljc1MTIgMzQuMDA3MUM3OS41MTg5IDMzLjc3NDcgNzkuNDAyOCAzMy40OTA4IDc5LjQwMjggMzMuMTU1MlpNODUuNDExOSAzMy4xNTUyVjIxLjg4NzVDODUuNDExOSAyMS41NTIgODUuNTI4IDIxLjI2OCA4NS43NjAzIDIxLjAzNTdDODUuOTkyNyAyMC44MDM0IDg2LjI3NjYgMjAuNjg3MiA4Ni42MTIyIDIwLjY4NzJIOTAuNzU1M0M5Mi4zMjk5IDIwLjY4NzIgOTMuNTgxOSAyMS4xMDAyIDk0LjUxMTIgMjEuOTI2M0M5NS40NDA1IDIyLjc1MjMgOTUuOTA1MSAyMy44NDk0IDk1LjkwNTEgMjUuMjE3NVYyNS4yNTYyQzk1LjkwNTEgMjYuNzE0NyA5NS4zODg4IDI3Ljg1MDUgOTQuMzU2MyAyOC42NjM2QzkzLjMzNjcgMjkuNDc2OCA5Mi4wNDYgMjkuODgzMyA5MC40ODQyIDI5Ljg4MzNIODcuNzkzMlYzMy4xNTUyQzg3Ljc5MzIgMzMuNDkwOCA4Ny42NzcgMzMuNzc0NyA4Ny40NDQ3IDM0LjAwNzFDODcuMjI1MyAzNC4yMjY1IDg2Ljk0NzggMzQuMzM2MiA4Ni42MTIyIDM0LjMzNjJDODYuMjc2NiAzNC4zMzYyIDg1Ljk5MjcgMzQuMjI2NSA4NS43NjAzIDM0LjAwNzFDODUuNTI4IDMzLjc3NDcgODUuNDExOSAzMy40OTA4IDg1LjQxMTkgMzMuMTU1MlpNODcuNzkzMiAyNy43MzQzSDkwLjU2MTdDOTEuNDUyMyAyNy43MzQzIDkyLjE2MjEgMjcuNTA4NSA5Mi42OTEzIDI3LjA1NjdDOTMuMjIwNSAyNi42MDUgOTMuNDg1MSAyNi4wMjQyIDkzLjQ4NTEgMjUuMzE0M1YyNS4yNzU2QzkzLjQ4NTEgMjQuNTAxMiA5My4yMjA1IDIzLjkwNzUgOTIuNjkxMyAyMy40OTQ0QzkyLjE3NSAyMy4wNjg1IDkxLjQ2NTIgMjIuODU1NiA5MC41NjE3IDIyLjg1NTZIODcuNzkzMlYyNy43MzQzWk05OS41NDQyIDM0LjIzOTRDOTkuMjA4NyAzNC4yMzk0IDk4LjkyNDcgMzQuMTIzMiA5OC42OTI0IDMzLjg5MDlDOTguNDYwMSAzMy42NTg2IDk4LjM0MzkgMzMuMzc0NiA5OC4zNDM5IDMzLjAzOVYyMS44ODc1Qzk4LjM0MzkgMjEuNTUyIDk4LjQ2MDEgMjEuMjY4IDk4LjY5MjQgMjEuMDM1N0M5OC45MjQ3IDIwLjgwMzQgOTkuMjA4NyAyMC42ODcyIDk5LjU0NDIgMjAuNjg3MkgxMDcuNDI0QzEwNy43MjEgMjAuNjg3MiAxMDcuOTcyIDIwLjc5MDUgMTA4LjE3OSAyMC45OTdDMTA4LjM4NSAyMS4yMDM1IDEwOC40ODkgMjEuNDU1MiAxMDguNDg5IDIxLjc1MkMxMDguNDg5IDIyLjA0ODkgMTA4LjM4NSAyMi4zMDA2IDEwOC4xNzkgMjIuNTA3MUMxMDcuOTcyIDIyLjcxMzYgMTA3LjcyMSAyMi44MTY4IDEwNy40MjQgMjIuODE2OEgxMDAuNzI1VjI2LjM0MDRIMTA2LjU1M0MxMDYuODUgMjYuMzQwNCAxMDcuMTAxIDI2LjQ1MDEgMTA3LjMwOCAyNi42Njk1QzEwNy41MTQgMjYuODc2IDEwNy42MTcgMjcuMTI3NyAxMDcuNjE3IDI3LjQyNDZDMTA3LjYxNyAyNy43MDg1IDEwNy41MTQgMjcuOTUzOCAxMDcuMzA4IDI4LjE2MDNDMTA3LjEwMSAyOC4zNjY4IDEwNi44NSAyOC40NyAxMDYuNTUzIDI4LjQ3SDEwMC43MjVWMzIuMTA5OEgxMDcuNTIxQzEwNy44MDUgMzIuMTA5OCAxMDguMDUgMzIuMjEzIDEwOC4yNTYgMzIuNDE5NUMxMDguNDc2IDMyLjYyNiAxMDguNTg1IDMyLjg3NzcgMTA4LjU4NSAzMy4xNzQ2QzEwOC41ODUgMzMuNDcxNCAxMDguNDgyIDMzLjcyMzEgMTA4LjI3NiAzMy45Mjk2QzEwOC4wNjkgMzQuMTM2MSAxMDcuODE4IDM0LjIzOTQgMTA3LjUyMSAzNC4yMzk0SDk5LjU0NDJaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYyLjUzNDMgMTEuNzQ1Mkg2MS42NTAzVjEyLjE0NjRDNjEuNDM5MSAxMi4xMzU4IDYxLjIxOTQgMTIuMTI4NCA2MC45OTY1IDEyLjEyMkM2MC45NTk0IDEyLjEyMDkgNjAuOTIyMiAxMi4xMTk5IDYwLjg4NTEgMTIuMTE5OUM2MC42OTYyIDEyLjExNDYgNjAuNTA0MSAxMi4xMTI0IDYwLjMwODggMTIuMTEwM0M2MC4yNzI3IDEyLjExMDMgNjAuMjM4OCAxMi4xMTAzIDYwLjIwMzcgMTIuMTA5M0M1OS45NzEzIDEyLjEwOTMgNTkuNzM2OCAxMi4xMTAzIDU5LjQ5OCAxMi4xMTU2QzU5LjQ5NjkgMTIuMTE1NiA1OS40OTU5IDEyLjExNTYgNTkuNDk0OCAxMi4xMTU2QzU5LjI2ODcgMTIuMTIwOSA1OS4wNDA2IDEyLjEyOTQgNTguODEyNCAxMi4xNDExQzU4Ljc2NDYgMTIuMTQzMiA1OC43MTc5IDEyLjE0NjQgNTguNjcwMiAxMi4xNDg1QzU4LjQ2IDEyLjE2MDIgNTguMjQ4OCAxMi4xNzUxIDU4LjAzODcgMTIuMTkyQzU4LjAxMzIgMTIuMTk0MiA1Ny45ODc3IDEyLjE5NjMgNTcuOTYyMyAxMi4xOTg0QzU3LjcyNDUgMTIuMjE5NiA1Ny40ODY4IDEyLjI0NTEgNTcuMjUxMiAxMi4yNzQ4QzU3LjIxOTQgMTIuMjc5MSA1Ny4xODc1IDEyLjI4NDQgNTcuMTU1NyAxMi4yODg2QzU2Ljk1NTEgMTIuMzE1MiA1Ni43NTc3IDEyLjM0NTkgNTYuNTYxNCAxMi4zNzg4QzU2LjUxMTUgMTIuMzg3MyA1Ni40NjI3IDEyLjM5NTggNTYuNDEzOCAxMi40MDQzQzU1LjM4MTIgMTIuNTkzMiA1NC40MTk3IDEyLjg5MTQgNTMuNjQyOCAxMy4zNDA0QzUzLjI3NzcgMTMuNTUxNiA1Mi45NTQgMTMuNzk0NiA1Mi42ODM0IDE0LjA3OEM1Mi42Njk2IDE0LjA5MjggNTIuNjU2OSAxNC4xMDk4IDUyLjY0MiAxNC4xMjQ3QzUyLjUzNDggMTQuMjQwMyA1Mi40MzgyIDE0LjM2MzUgNTIuMzUwMSAxNC40OTI5QzUyLjMyNDcgMTQuNTI5IDUyLjMwMDMgMTQuNTY0IDUyLjI3NjkgMTQuNjAxMkM1Mi4xODI1IDE0Ljc1MyA1Mi4wOTY1IDE0LjkxIDUyLjAyODYgMTUuMDc4OEM1MC4zMDcxIDE5LjQwMjUgNTAuNjE3IDI2LjgzMDUgNDcuMjUxNyAyNi45MTk3QzQ2LjIzNiAyNi45NDcyIDQ1LjYyMzcgMjYuNTg0MyA0NS4yNTc1IDI2LjA2OTZDNDUuMjE0IDI2LjAwOTEgNDUuMTc1OCAyNS45NDQzIDQ1LjEzODYgMjUuODc5NkM0NS4xMjM4IDI1Ljg1MiA0NS4xMDc5IDI1LjgyNDQgNDUuMDk0MSAyNS43OTY4QzQ0Ljk4MDUgMjUuNTc1IDQ0LjkwMDkgMjUuMzM1MSA0NC44NDg5IDI1LjA5MUM0NC44NDY4IDI1LjA3NzIgNDQuODQyNSAyNS4wNjQ1IDQ0Ljg0MDQgMjUuMDUwN0M0NC44MjM0IDI0Ljk2NTggNDQuODA4NiAyNC44ODIgNDQuNzk2OSAyNC43OTcxQzQ0Ljc5NjkgMjQuNzk3MSA0NC43OTY5IDI0Ljc5NiA0NC43OTY5IDI0Ljc5NDlDNDQuNzc4OSAyNC42NTggNDQuNzY4MiAyNC41MjMyIDQ0Ljc2MjkgMjQuMzg5NUg0Ni4yNjI2VjIwLjQwOTdINDUuMjAxM0gyM1YyMy4wNjI5VjI0LjM4OTVIMjQuODU0MUMyNC44NTQxIDI0LjM5NTkgMjQuODU0MSAyNC40MDMzIDI0Ljg1NDEgMjQuNDEwN0MyNC44NTUxIDI0LjUyMjIgMjQuODU4MyAyNC42Mzc5IDI0Ljg2MjYgMjQuNzU5OUMyNC44NjM2IDI0LjgxNCAyNC44NjY4IDI0Ljg2ODIgMjQuODY4OSAyNC45MjQ0QzI0Ljg3NDIgMjUuMDQ4NiAyNC44ODE3IDI1LjE3ODEgMjQuODkwMiAyNS4zMTE4QzI0Ljg5NDQgMjUuMzY3IDI0Ljg5NjUgMjUuNDIgMjQuOTAwOCAyNS40NzczQzI0LjkwMDggMjUuNDc5NSAyNC45MDA4IDI1LjQ4MTYgMjQuOTAwOCAyNS40ODM3QzI0LjkwNzEgMjUuNTY0NCAyNC45MTQ2IDI1LjY0NjEgMjQuOTIwOSAyNS43Mjg5QzI0LjkyNzMgMjUuNzk2OCAyNC45MzI2IDI1Ljg2NTggMjQuOTQgMjUuOTM1OEMyNC45NDc1IDI2LjAxNjUgMjQuOTU0OSAyNi4wOTcxIDI0Ljk2NDUgMjYuMTc5OUMyNC45NzUxIDI2LjI3MzMgMjQuOTg1NyAyNi4zNjc4IDI0Ljk5ODQgMjYuNDYzM0MyNS4wMTEyIDI2LjU2NTIgMjUuMDI1IDI2LjY2ODEgMjUuMDM5OCAyNi43NzMyQzI1LjA1NTcgMjYuODg2NyAyNS4wNzI3IDI3LjAwMDMgMjUuMDkwOCAyNy4xMTZDMjUuMTAyNCAyNy4xODcxIDI1LjExNDEgMjcuMjU4MiAyNS4xMjY4IDI3LjMzMDRDMjUuMTQ1OSAyNy40NDE4IDI1LjE2NjEgMjcuNTUzMiAyNS4xODg0IDI3LjY2NjhDMjUuMjAxMSAyNy43MzI2IDI1LjIxMjggMjcuNzk3MyAyNS4yMjY2IDI3Ljg2MzFDMjUuMjYxNiAyOC4wMzQgMjUuMjk5OCAyOC4yMDcgMjUuMzQxMiAyOC4zODExQzI1LjM1MjkgMjguNDMwOSAyNS4zNjY3IDI4LjQ4MDggMjUuMzc4NCAyOC41Mjk2QzI1LjQxMzQgMjguNjY3NiAyNS40NDk1IDI4LjgwNTYgMjUuNDg4NyAyOC45NDQ2QzI1LjUwNTcgMjkuMDA3MiAyNS41MjM4IDI5LjA2ODggMjUuNTQxOCAyOS4xMzAzQzI1LjU4NjQgMjkuMjg0MiAyNS42MzUyIDI5LjQzODEgMjUuNjg1MSAyOS41OTQxQzI1LjY5NjggMjkuNjI4MSAyNS43MDYzIDI5LjY2MzEgMjUuNzE5IDI5LjY5ODFDMjUuNzgyNyAyOS44ODQ5IDI1Ljg1MDYgMzAuMDcxNyAyNS45MjI4IDMwLjI1ODVDMjUuOTQxOSAzMC4zMDg0IDI1Ljk2MzEgMzAuMzU4MiAyNS45ODIyIDMwLjQwOTJDMjYuMDQxNyAzMC41NTY3IDI2LjEwMzIgMzAuNzAzMiAyNi4xNjkgMzAuODUwN0MyNi4xOTEzIDMwLjkwMDYgMjYuMjEyNSAzMC45NTE1IDI2LjIzNTkgMzEuMDAxNEMyNi4zMjQgMzEuMTkxNCAyNi40MTUzIDMxLjM4MDMgMjYuNTE0IDMxLjU2ODFDMjYuNTE5MyAzMS41Nzg3IDI2LjUyNTYgMzEuNTg5NCAyNi41MzA5IDMxLjZDMjYuNjI0MyAzMS43NzYxIDI2LjcyNDEgMzEuOTUwMiAyNi44MjcgMzIuMTIzMkMyNi44NTU3IDMyLjE3MDkgMjYuODg1NCAzMi4yMTc2IDI2LjkxNDEgMzIuMjY1NEMyNy4wMDc1IDMyLjQxNzIgMjcuMTA3MiAzMi41NjY4IDI3LjIwOTEgMzIuNzE1NEMyNy4yMzI0IDMyLjc0OTMgMjcuMjUzNyAzMi43ODMzIDI3LjI3ODEgMzIuODE2MkMyNy40MDQ0IDMyLjk5NDUgMjcuNTM3IDMzLjE2OTYgMjcuNjc4MiAzMy4zNDI2QzI3LjcwMzcgMzMuMzc0NSAyNy43MzEzIDMzLjQwNTIgMjcuNzU3OCAzMy40MzcxQzI3Ljg3NTYgMzMuNTc4MiAyNy45OTc2IDMzLjcxNjIgMjguMTI1IDMzLjg1MkMyOC4xNjQzIDMzLjg5NDUgMjguMjAzNSAzMy45MzY5IDI4LjI0MzkgMzMuOTc4M0MyOC4zOTQ2IDM0LjEzMzMgMjguNTUwNiAzNC4yODYxIDI4LjcxNTEgMzQuNDMzNkMyOC43MjE0IDM0LjQ0IDI4LjcyODkgMzQuNDQ2NCAyOC43MzUyIDM0LjQ1MjdDMjguOTA3MiAzNC42MDY2IDI5LjA4ODcgMzQuNzU0MSAyOS4yNzY1IDM0Ljg5NzRDMjkuMzIzMiAzNC45MzM1IDI5LjM3MSAzNC45Njc1IDI5LjQxODcgMzUuMDAyNUMyOS41NzA1IDM1LjExMzkgMjkuNzI3NiAzNS4yMjIyIDI5Ljg4OTkgMzUuMzI3MkMyOS45Mzg4IDM1LjM1OTEgMjkuOTg2NSAzNS4zOTA5IDMwLjAzNjQgMzUuNDIxN0MzMC4yNDMzIDM1LjU1MDEgMzAuNDU3NyAzNS42NzQzIDMwLjY4MTcgMzUuNzlDMzAuNzEwMyAzNS44MDQ4IDMwLjc0MTEgMzUuODE4NiAzMC43NzA4IDM1LjgzMzVDMzAuOTY4MiAzNS45MzMyIDMxLjE3MiAzNi4wMjY2IDMxLjM4MTEgMzYuMTE1OEMzMS40NDc5IDM2LjE0NDQgMzEuNTE1OCAzNi4xNzIgMzEuNTg0OCAzNi4xOTk2QzMxLjc4NzUgMzYuMjgwMyAzMS45OTY2IDM2LjM1NjcgMzIuMjEyMSAzNi40Mjc4QzMyLjI2MDkgMzYuNDQzNyAzMi4zMDY1IDM2LjQ2MTggMzIuMzU2NCAzNi40NzY2QzMyLjYxODUgMzYuNTU5NCAzMi44ODkyIDM2LjYzMjYgMzMuMTY5MyAzNi42OTk1QzMzLjIzNzMgMzYuNzE2NSAzMy4zMDg0IDM2LjcyOTIgMzMuMzc3NCAzNi43NDUxQzMzLjYwMDIgMzYuNzkzOSAzMy44Mjk1IDM2LjgzODUgMzQuMDY1MSAzNi44NzY3QzM0LjE1MSAzNi44OTA1IDM0LjIzNTkgMzYuOTA1NCAzNC4zMjMgMzYuOTE4MUMzNC42Mjk3IDM2Ljk2MTYgMzQuOTQyOCAzNy4wMDA5IDM1LjI2ODYgMzcuMDI2NEM1NC43NDk3IDM4LjU2MSA1My41NjQzIDIyLjg3NTEgNTQuNzczMSAxNy45NjQ0QzU1LjUwMTEgMTUuMDA0NSA1OC45OTA3IDE0LjI4ODEgNjEuNjQ5MiAxNC4xODYyVjE0LjkyMzhINjcuMjIxVjE0LjEyNzhWMTEuNzQ1Mkg2Mi41MzQzWiIgZmlsbD0iI0ZGODc3QiIvPgo8cGF0aCBkPSJNNDQuODkyOSAyMS42NTk5QzQ0Ljg5MjkgMjEuNjU5OSA0My44ODM2IDI1LjgxNDkgNDcuMjQ5IDI1LjcyNDdDNTAuNjE0NCAyNS42MzQ1IDUwLjMwNTUgMTguMjA3NSA1Mi4wMjcgMTMuODgzOEM1My43NDg0IDkuNTU5IDY0LjY3MDIgMTEuMjI2MyA2NC42NzAyIDExLjIyNjNMNjQuNzkxMiAxMy4xMjI4QzY0Ljc5MTIgMTMuMTIyOCA1NS45ODAzIDExLjg2MSA1NC43NzI1IDE2Ljc3MDVDNTMuNTY0OCAyMS42ODAxIDU0Ljc0OTIgMzcuMzY3MSAzNS4yNjggMzUuODMyNEMyMy42MTYxIDM0LjkxNDQgMjQuODkxNyAyMS44MjMzIDI0Ljg5MTcgMjEuODIzM0MyNS4yNDQxIDIxLjgzNCA0NC44OTI5IDIxLjY1OTkgNDQuODkyOSAyMS42NTk5WiIgZmlsbD0iIzYwMUUxNiIvPgo8cGF0aCBvcGFjaXR5PSIwLjUiIGQ9Ik00NC44OTMgMjEuNjU5OUM0NC44OTMgMjEuNjU5OSAyNS4yNDQyIDIxLjgzNSAyNC44OTE4IDIxLjgyNDRDMjQuODkxOCAyMS44MjQ0IDI0Ljc2NzcgMjMuMDk2OSAyNC45NTAyIDI0Ljg3NDZINDUuMjU0OUM0NC40MDU5IDIzLjY4MTcgNDQuODkzIDIxLjY1OTkgNDQuODkzIDIxLjY1OTlaIiBmaWxsPSIjNjAxRTE2Ii8+CjxwYXRoIG9wYWNpdHk9IjAuNSIgZD0iTTY0Ljc5MjMgMTMuMTIyOUw2NC42NzEzIDExLjIyNjRDNjQuNjcxMyAxMS4yMjY0IDU5LjUzMzYgMTAuNDQzMiA1NS43NTAxIDExLjM0NTNDNTcuMDIzNiAxMS42ODcgNTcuNTc2NSAxMi40NTIyIDU1LjQ1ODIgMTMuMjg4NUM1Mi4wOTcxIDE0LjYxNTEgNTIuMzYyNCAyMC45ODI5IDUyLjE4NjIgMjIuNjY0QzUyLjAwOSAyNC4zNDQgNTAuOTQ3NyAzMy4zNjUgMzkuMjczNCAzMy44OTU3QzI1LjAzODMgMzQuNTQzMSAyNS4yOTk0IDI0LjA3ODcgMjUuMzg4NSAyMy42MzYxQzI1LjM4ODUgMjMuNjM2MSAyNS4xODkgMjMuODY1NCAyNC45MDE0IDI0LjI4MTRDMjUuMTczMSAyOC4xMTggMjYuODI5NyAzNS4xNjcxIDM1LjI3MDIgMzUuODMxNUM1NC43NTAzIDM3LjM2NzIgNTMuNTY1OSAyMS42ODAyIDU0Ljc3MzcgMTYuNzcwNkM1NS45ODE0IDExLjg2MTEgNjQuNzkyMyAxMy4xMjI5IDY0Ljc5MjMgMTMuMTIyOVoiIGZpbGw9IiM2MDFFMTYiLz4KPHBhdGggb3BhY2l0eT0iMC41IiBkPSJNNTMuNjQyNSAxMi4xNDMzQzUyLjkwMDcgMTIuNTcyMSA1Mi4zMjU1IDEzLjEzNjcgNTIuMDI4MyAxMy44ODI4QzUwLjMwNjkgMTguMjA2NSA1MC42MTU3IDI1LjYzMzQgNDcuMjUwMyAyNS43MjM3QzQzLjg4NSAyNS44MTM5IDQ0Ljg5NDMgMjEuNjU4OSA0NC44OTQzIDIxLjY1ODlDNDQuODk0MyAyMS42NTg5IDQzLjQyMDEgMjEuNjcyNyA0MS4yNzk1IDIxLjY5MDdDNDAuNDc1IDIyLjU2NjMgMzkuOTgwNSAyMy4xMDQ0IDM5Ljk4MDUgMjMuMTA0NEw0MC4zMzM5IDIzLjE5MjVDNDAuMTU2NiAyMy41NDU5IDQwLjUxMTEgMjguNDEwOSA0Ni4wODI5IDI4LjE0NTVDNTEuNjU0NyAyNy44ODAyIDUxLjIxMjIgMTkuNjU1MiA1MS44MzIgMTcuODg2QzUyLjMwODUgMTYuNTI5NiA1MS45MDA5IDEzLjkyMzEgNTMuNjQyNSAxMi4xNDMzWiIgZmlsbD0iIzYwMUUxNiIvPgo8cGF0aCBkPSJNNDUuMTk5MSAxOC4xNDM2VjE5Ljg5MjZIMjNWMjIuMTIzNEg0Ni4yNjA0VjE4LjE0MzZINDUuMTk5MVoiIGZpbGw9IiM1OUZFQzUiLz4KPHBhdGggZD0iTTI2LjM1OTQgMjUuMzE2QzI2LjM1OTQgMjUuMzE2IDI4LjEyODYgMzQuNjkxNSA0Mi42MzMzIDMyLjQ3OThDNDIuNjMzMyAzMi40Nzk4IDM0LjMyMDIgMzEuNDE4NSAzMy4zNDY5IDI1LjMxNkgyNi4zNTk0WiIgZmlsbD0iIzYwMUUxNiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUyLjgzMyAxMy43Mjc5QzUzLjI4NjIgMTMuMTM2NyA1My45MTQ1IDEyLjgzNjQgNTQuMzYzNCAxMi43MzAzQzU0LjU4ODQgMTIuNjcxOSA1NC43ODQ3IDEyLjY3OTMgNTQuOTA4OSAxMi42Njk4QzU1LjAzNDEgMTIuNjY4NyA1NS4xMDUyIDEyLjY2ODcgNTUuMTA1MiAxMi42Njg3QzU1LjEwNTIgMTIuNjY4NyA1NS4wNSAxMi43MTU0IDU0Ljk1MTMgMTIuNzk2MUM1NC44NTU4IDEyLjg4MSA1NC43MDgzIDEyLjk3MDEgNTQuNTUzNCAxMy4xMTM0QzU0LjIzNzEgMTMuMzk1NyA1My44NzA5IDEzLjc4NDEgNTMuNTE4NiAxNC4yMzg0QzUzLjE4IDE0LjcwNDMgNTIuOTE3OSAxNS4xNzEyIDUyLjczMDEgMTUuNTUyMkM1Mi42Mzc3IDE1Ljc0MTIgNTIuNTg4OSAxNS45MDc4IDUyLjUzMzcgMTYuMDIzNUM1Mi40ODE3IDE2LjE0MDIgNTIuNDUzMSAxNi4yMDYgNTIuNDUzMSAxNi4yMDZDNTIuNDUzMSAxNi4yMDYgNTIuNDM0IDE2LjEzODEgNTIuNDAxMSAxNi4wMTZDNTIuMzc1NiAxNS44OTI5IDUyLjMxODMgMTUuNzA3MiA1Mi4zMDk4IDE1LjQ3NDhDNTIuMjkwNyAxNS4wMTg0IDUyLjM5MjYgMTQuMzMwNyA1Mi44MzMgMTMuNzI3OVoiIGZpbGw9IiM2MDFFMTYiLz4KPHBhdGggZD0iTTMzLjA3NTYgOC42NDQ1M0MzMy4yNDggOC41MDQ5MSAzMy40MjU5IDguMzcyNjUgMzMuNjAyMyA4LjI0MTY5QzM0Ljc5NzQgNy4zNTUyIDM1LjY2MDggNi43MTQ2MSAzMy45OTIzIDMuODAzMjRDMzMuOTg2MyAzLjc5MjgyIDMzLjk4MzEgMy43ODE3MSAzMy45Nzc5IDMuNzcxMTFDMzMuOTY4NCAzLjc1MTUzIDMzLjk1ODUgMy43MzIxNiAzMy45NTE0IDMuNzExNkMzMy45NDU3IDMuNjk1MTggMzMuOTQyNiAzLjY3ODUxIDMzLjkzODUgMy42NjE4NEMzMy45MzQ0IDMuNjQ0ODEgMzMuOTI5NiAzLjYyODA5IDMzLjkyNzEgMy42MTA2OUMzMy45MjQ2IDMuNTkyODEgMzMuOTI0NiAzLjU3NSAzMy45MjM5IDMuNTU3MDdDMzMuOTIzMyAzLjU0MDIxIDMzLjkyMTggMy41MjM0OCAzMy45MjI3IDMuNTA2NDlDMzMuOTIzOCAzLjQ4Nzk4IDMzLjkyNzMgMy40NzAwMiAzMy45MzAzIDMuNDUxNzlDMzMuOTMyOCAzLjQzNTY4IDMzLjkzNDQgMy40MTk2NiAzMy45Mzg1IDMuNDAzNjlDMzMuOTQ0MSAzLjM4MTgxIDMzLjk1MjUgMy4zNjA5OSAzMy45NjA4IDMuMzM5OTJDMzMuOTY0OSAzLjMyOTU2IDMzLjk2NyAzLjMxODgzIDMzLjk3MTggMy4zMDg1NUMzMy45NzI0IDMuMzA3MTggMzMuOTczNCAzLjMwNjA3IDMzLjk3NDEgMy4zMDQ2N0MzMy45ODQ4IDMuMjgyMDMgMzMuOTk4NyAzLjI2MDk5IDM0LjAxMjcgMy4yMzk5OEMzNC4wMTg0IDMuMjMxMjcgMzQuMDIzIDMuMjIxNDggMzQuMDI5MiAzLjIxMzIyQzM0LjA0MDcgMy4xOTc3NyAzNC4wNTUxIDMuMTg0MjggMzQuMDY4NSAzLjE3MDA2QzM0LjA3OTMgMy4xNTg1NSAzNC4wODkgMy4xNDU4NyAzNC4xMDA3IDMuMTM1NDNDMzQuMTExMiAzLjEyNjA0IDM0LjEyMzggMy4xMTg2MiAzNC4xMzUxIDMuMTEwMDVDMzQuMTUyIDMuMDk3MjkgMzQuMTY4NCAzLjA4Mzg4IDM0LjE4NjUgMy4wNzMyOEMzNC4xODgzIDMuMDcyMjUgMzQuMTg5NyAzLjA3MDggMzQuMTkxNCAzLjA2OTc3QzM0LjIwNTMgMy4wNjE3OSAzNC4yMjAxIDMuMDU3MTggMzQuMjM0NCAzLjA1MDU5QzM0LjI1IDMuMDQzNDIgMzQuMjY1MSAzLjAzNTI3IDM0LjI4MTQgMy4wMjk2NEMzNC4zMDE3IDMuMDIyNDYgMzQuMzIyNSAzLjAxODI1IDM0LjM0MzMgMy4wMTM2N0MzNC4zNTYyIDMuMDEwODEgMzQuMzY4OSAzLjAwNjk1IDM0LjM4MiAzLjAwNTAzQzM0LjQwMzcgMy4wMDE4OCAzNC40MjUzIDMuMDAxNTYgMzQuNDQ3IDMuMDAxMUMzNC40NjAyIDMuMDAwODMgMzQuNDczMSAyLjk5OTUzIDM0LjQ4NjMgMy4wMDAxOEMzNC41MDgzIDMuMDAxMzcgMzQuNTI5OSAzLjAwNTMgMzQuNTUxNSAzLjAwOTExQzM0LjU2NDMgMy4wMTEzNSAzNC41NzcgMy4wMTI0NSAzNC41ODk3IDMuMDE1NjZDMzQuNjE0NyAzLjAyMTk1IDM0LjYzODcgMy4wMzEyOCAzNC42NjI1IDMuMDQxMDVDMzQuNjcwMyAzLjA0NDI2IDM0LjY3ODQgMy4wNDU3MSAzNC42ODYxIDMuMDQ5M0MzNC42ODggMy4wNTAyMiAzNC42ODk3IDMuMDUxMTMgMzQuNjkxNiAzLjA1MjA1QzM0LjY5NDYgMy4wNTM0NSAzNC42OTc1IDMuMDU0OTQgMzQuNzAwNSAzLjA1NjQ1QzM3LjAxMjMgNC4xNDExNCAzNy43MDc4IDUuNTQ1MyAzNy44ODMzIDYuNTMzMDVDMzguMTA1IDcuNzgyNDggMzcuNjI1OCA5LjE0NDIzIDM2LjYwMTMgMTAuMTc1M0MzNi41MTg5IDEwLjI1ODIgMzYuNDMxOCAxMC4zNDQzIDM2LjM0MTggMTAuNDMzNUMzNS40NzEzIDExLjI5MzggMzQuMzg4IDEyLjM2NDUgMzQuNDIyNCAxMy42NDEyQzM0LjQ0NTIgMTQuNDkwNCAzNC45Nzk4IDE1LjM4NDggMzYuMDEwOCAxNi4yOTk2QzM2LjAxNDYgMTYuMzAzIDM2LjAxNzMgMTYuMzA3MSAzNi4wMjEgMTYuMzEwNkMzNi4wMzYgMTYuMzI0NiAzNi4wNDkyIDE2LjM0IDM2LjA2MjQgMTYuMzU1NUMzNi4wNzI0IDE2LjM2NzMgMzYuMDgyOCAxNi4zNzg4IDM2LjA5MTYgMTYuMzkxM0MzNi4xMDIzIDE2LjQwNjMgMzYuMTExMSAxNi40MjIzIDM2LjEyMDIgMTYuNDM4NEMzNi4xMjg0IDE2LjQ1MjkgMzYuMTM3IDE2LjQ2NzEgMzYuMTQzNyAxNi40ODIyQzM2LjE1MDkgMTYuNDk4MyAzNi4xNTYgMTYuNTE0OSAzNi4xNjE3IDE2LjUzMTdDMzYuMTY3IDE2LjU0NzYgMzYuMTcyOCAxNi41NjMyIDM2LjE3NjYgMTYuNTc5NUMzNi4xODA3IDE2LjU5NyAzNi4xODI1IDE2LjYxNDcgMzYuMTg0OSAxNi42MzI1QzM2LjE4NyAxNi42NDg4IDM2LjE4OTcgMTYuNjY0OSAzNi4xOTAzIDE2LjY4MTRDMzYuMTkwOSAxNi42OTg4IDM2LjE4OTUgMTYuNzE2MiAzNi4xODg0IDE2LjczMzhDMzYuMTg3NCAxNi43NTE0IDM2LjE4NjYgMTYuNzY4OCAzNi4xODM5IDE2Ljc4NjNDMzYuMTgxNCAxNi44MDE4IDM2LjE3NyAxNi44MTcxIDM2LjE3MzEgMTYuODMyNkMzNi4xNjgyIDE2Ljg1MjEgMzYuMTYzMiAxNi44NzE0IDM2LjE1NiAxNi44OTAzQzM2LjE1NDMgMTYuODk1MSAzNi4xNTM3IDE2LjkgMzYuMTUxOCAxNi45MDQ3QzM2LjE0OTQgMTYuOTEwNSAzNi4xNDUgMTYuOTE0NiAzNi4xNDI1IDE2LjkyMDNDMzYuMTI1NSAxNi45NTgyIDM2LjEwNDIgMTYuOTk0MyAzNi4wNzc4IDE3LjAyODRDMzYuMDcyMyAxNy4wMzU1IDM2LjA2NzkgMTcuMDQzNCAzNi4wNjIxIDE3LjA1MDFDMzYuMDYgMTcuMDUyNyAzNi4wNTg1IDE3LjA1NTcgMzYuMDU2MyAxNy4wNTgzQzM2LjAyNjUgMTcuMDkxOCAzNS45OTMgMTcuMTE5NSAzNS45NTc3IDE3LjE0MzdDMzUuOTQ4MyAxNy4xNTAxIDM1LjkzODMgMTcuMTU0NiAzNS45Mjg3IDE3LjE2MDRDMzUuODk2OSAxNy4xNzk0IDM1Ljg2NDEgMTcuMTk0OSAzNS44Mjk3IDE3LjIwNjdDMzUuODE3IDE3LjIxMTIgMzUuODA0NyAxNy4yMTU1IDM1Ljc5MTYgMTcuMjE5QzM1Ljc0ODQgMTcuMjMwNCAzNS43MDQ1IDE3LjIzOCAzNS42NTk5IDE3LjIzODVDMzUuNjU3OCAxNy4yMzg1IDM1LjY1NTkgMTcuMjM5NCAzNS42NTM5IDE3LjIzOTRDMzUuNjQzMyAxNy4yMzk0IDM1LjYzMjQgMTcuMjM2OSAzNS42MjE3IDE3LjIzNjNDMzUuNTk5OCAxNy4yMzQ5IDM1LjU3NzkgMTcuMjMzOSAzNS41NTYzIDE3LjIyOTlDMzUuNTQ1OSAxNy4yMjggMzUuNTM1OCAxNy4yMjQxIDM1LjUyNTUgMTcuMjIxNUMzNS41MDI3IDE3LjIxNTkgMzUuNDggMTcuMjEgMzUuNDU3OCAxNy4yMDEyQzM1LjQ1NTYgMTcuMjAwNCAzNS40NTMzIDE3LjIwMDEgMzUuNDUxMSAxNy4xOTkyQzMyLjE3NDEgMTUuODYyMiAzMS4yNzI0IDE0LjEzNzUgMzEuMDkzMiAxMi45MjY0QzMwLjg3MTcgMTEuNDMxNSAzMS42MTI4IDkuODMwNyAzMy4wNzU2IDguNjQ0NTNaTTMyLjE1NjYgMTIuNzY4OUMzMi4yNzU2IDEzLjU3MzMgMzIuNzg2OSAxNC4zMjIxIDMzLjY1NDggMTQuOTg4OEMzMy40NjMxIDE0LjU1MDkgMzMuMzU5NiAxNC4xMTA4IDMzLjM0NzcgMTMuNjcwM0MzMy4zMDA4IDExLjkyNzUgMzQuNjIxOCAxMC42MjIyIDM1LjU4NjMgOS42Njg3N0MzNS42NzM5IDkuNTgyMTYgMzUuNzU4NyA5LjQ5ODQ2IDM1LjgzODcgOS40MTc4OEMzNi42MTcxIDguNjM0NTUgMzYuOTg1NSA3LjYyNjI3IDM2LjgyNDkgNi43MjA5QzM2LjcxMDkgNi4wNzk0NSAzNi4zMzU3IDUuNDg0OTMgMzUuNzI0MiA0Ljk1ODgyQzM2LjUwMDIgNy4xNjcxOSAzNS41NSA4LjEzNTE5IDM0LjI0MjkgOS4xMDUwNkMzNC4wNzg2IDkuMjI2NTUgMzMuOTEzIDkuMzQ5MzkgMzMuNzUyNyA5LjQ3OTU1QzMyLjU4OCAxMC40MjM4IDMxLjk5MTIgMTEuNjUzNSAzMi4xNTY2IDEyLjc2ODlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" alt="" />
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
