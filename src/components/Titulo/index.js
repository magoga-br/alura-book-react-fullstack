import styled from "styled-components";

export const Titulo = styled.h2`
  background-color: #f5f5f5;
  width: 100%;
  padding: 30px 0;
  color: ${props => props.cor || "#000"};
  font-size: ${props => props.fontSize || "24px"};
  text-align: ${props => props.textAlign || "center"};
  margin: 0;
  text-transform: uppercase;
`;
