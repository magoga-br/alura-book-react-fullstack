import Header from "./components/Header";
import Pesquisa from "./components/Pesquisa";
import UltimosLancamentos from "./components/UltimosLancamentos";
import CardRecomenda from "./components/CardRecomenda";
import imagemLivro from "./images/livro2.png";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
      <CardRecomenda
        titulo="Recomendados"
        subtitulo={"Angular 11"}
        descricao={"Aprenda a criar aplicações com Angular 11"}
        img={imagemLivro}
      />
    </AppContainer>
  );
}

export default App;
