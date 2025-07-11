import Input from "../Input";
import styled from "styled-components";

const PesquisaContainer = styled.section`
  color: #fff;
  text-align: center;
  padding: 85px 0;
  width: 100%;
  height: 270px;
`;
const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-shadow: 0px 0px 20px #000000;
`;
const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

function Pesquisa() {
  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
      <Input type="text" placeholder="Escreva sua próxima leitura" />
    </PesquisaContainer>
  );
}

export default Pesquisa;
