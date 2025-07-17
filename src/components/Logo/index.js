import logo from "../../images/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 2rem;
  gap: 0.5rem;
  justify-self: start;
  cursor: pointer;
  width: 100%;
`;
const LogoImage = styled.img``;

const LogoText = styled.p`
  font-size: 2rem;
  color: #fff;
`;

function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={logo} alt="logo" />
      <LogoText>
        <strong>Alura</strong>Books
      </LogoText>
    </LogoContainer>
  );
}

export default Logo;
