import styled from "styled-components";
import Button from "../Button/Button";

const MenuButton = styled(Button)`
  color: ${({ textSubtle }) => textSubtle};
  padding: 0 8px;
  border-radius: 8px;
`;
MenuButton.defaultProps = {
  variant: "text",
  size: "sm",
};

export default MenuButton;
