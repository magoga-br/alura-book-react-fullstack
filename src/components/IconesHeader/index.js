import perfil from "../../images/perfil.svg";
import sacola from "../../images/sacola.svg";
import styled from "styled-components";

const IconesUl = styled.ul`
  display: flex;
  justify-self: end;
  gap: 2.5rem;
  width: 100%;
  max-width: 90px;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;
const Icone = styled.li`
  width: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    cursor: pointer;
  }
`;

const icones = [perfil, sacola];

function IconesHeader() {
  return (
    <IconesUl>
      {icones.map((icone) => (
        <Icone key={icone}>
          <img src={icone} alt="Icone" />
        </Icone>
      ))}
    </IconesUl>
  );
}

export default IconesHeader;
