import styled from "styled-components";

const Card = styled.div`
  background: #f5f5f5;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  margin: 2rem auto;
  max-width: 600px;
  width: 100%;
  gap: 32px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }

  > div:first-child {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    max-width: 90%;
    gap: 20px;
  }
`;

const Titulo = styled.h3`
  color: #eb9b00; /* Laranja Alura, para destaque */
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Subtitulo = styled.h4`
  color: #0c5288ff; /* Azul escuro para sobriedade */
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const Descricao = styled.p`
  color: #474f5a;
  font-size: 15px;
  line-height: 1.5;
`;

const ImgLivro = styled.img`
  width: 150px;
  border-radius: 8px;
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const Botao = styled.button`
  background-color: #eb9b00;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 14px;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: #d48c00;
    transform: scale(1.02);
  }
`;
function CardRecomenda({ titulo, subtitulo, descricao, img }) {
  return (
    <Card>
      <div>
        <Titulo>{titulo}</Titulo>
        <Subtitulo>{subtitulo}</Subtitulo>
        <Descricao>{descricao}</Descricao>
      </div>
      <div>
        <ImgLivro src={img} alt="imagem livro" />
        <Botao style={{ marginTop: '10px' }}>Saiba mais</Botao>
      </div>
    </Card>
  );
}

export default CardRecomenda;
