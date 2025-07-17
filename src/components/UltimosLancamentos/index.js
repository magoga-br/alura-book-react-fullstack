import { livros } from "./dadosUltimosLancamentos";
import { Titulo } from "../Titulo";
import styled from "styled-components";

const UltimosLancamentosContainer = styled.section`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
  gap: 10px;

  img {
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      cursor: pointer;
    }
  }
`;
function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor="#EB9B00" fontSize="32px" textAlign="center">
        Últimos Lançamentos
      </Titulo>
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <img key={livro.Id} src={livro.src} alt={livro.nome} />
        ))}
      </NovosLivrosContainer>
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
