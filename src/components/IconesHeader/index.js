import perfil from "../../images/perfil.svg";
import sacola from "../../images/sacola.svg";
import styled from "styled-components";

const IconesUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  cursor: pointer;
`;
const Icone = styled.li`
  width: 1.5rem;
`;

const icones = [perfil, sacola];

function IconesHeader() {
  return (
    <IconesUl>
      {icones.map((icone) => (
        <Icone>
          <img src={icone} alt="Icone" />
        </Icone>
      ))}
    </IconesUl>
  );
}

export default IconesHeader;
