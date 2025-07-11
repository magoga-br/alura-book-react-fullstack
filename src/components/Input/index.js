import styled from "styled-components";

const Input = styled.input`
  background: transparent;
  width: 200px;
  padding: 16px 100px;
  border: 2px solid #fff;
  border-radius: 16px;
  color: #fff;
  font-size: 1rem;
  border-image: 
  border-image-slice: 1;
  outline: none;

  &::placeholder {
    color: #fff;
    font-size: 1rem;
  }
`;

export default Input;
