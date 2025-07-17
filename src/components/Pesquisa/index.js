import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa";

const PesquisaContainer = styled.section`
  color: #fff;
  text-align: center;
  padding-top: 85px;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    padding: 40px 1rem;
  }
`;
const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-shadow: 0px 0px 20px #000000;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;
const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;
const ResultadoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0 30px 0;
  flex-wrap: wrap;
  gap: 20px;
`;
const Resultado = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.3s ease;

  p {
    font-weight: bold;
  }

  &:hover {
    transform: translateY(-3px);
    cursor: pointer;
  }
`;

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={(evento) => {
          const textoDigitado = evento.target.value;
          const resultadoPesquisa = livros.filter((livro) =>
            livro.nome.includes(textoDigitado)
          );
          setLivrosPesquisados(resultadoPesquisa);
          console.log(resultadoPesquisa);
        }}
      />
      <ResultadoContainer>
        {livrosPesquisados.map((livro) => (
          <Resultado key={livro.id}>
            <p>{livro.nome}</p>
            <img src={livro.src} alt={livro.nome} />
          </Resultado>
        ))}
      </ResultadoContainer>
    </PesquisaContainer>
  );
}

export default Pesquisa;
