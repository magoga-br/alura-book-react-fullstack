import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import IconesHeader from "../IconesHeader";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background: transparent;
  border-bottom: 1px solid #fff;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 24px 8rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 24px 2rem;
    grid-template-columns: 1fr 1fr;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}

export default Header;
