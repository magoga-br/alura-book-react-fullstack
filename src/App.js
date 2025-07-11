import Header from "./components/Header";
import Pesquisa from "./components/Pesquisa";
import styled from "styled-components";

const AppContainer = styled.div`
  background-image: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
    </AppContainer>
  );
}

export default App;
