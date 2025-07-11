import styled from "styled-components";

const Opcoes = styled.ul`
  display: flex;
`;

const Opcao = styled.li`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 120px;
  height: 100%;
  padding: 0 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((opcao) => (
        <Opcao key={opcao}>
          <p>{opcao}</p>
        </Opcao>
      ))}
    </Opcoes>
  );
}

export default OpcoesHeader;
