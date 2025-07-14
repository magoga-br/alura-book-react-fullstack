import styled from "styled-components";

const Input = styled.input`
  background: transparent;
  border-image: linear-gradient(-45deg, #23d5ab, #23a6d5, #e73c7e, #ee7752);
  border-image-slice: 1;
  width: 300px;
  padding: 16px;
  color: #fff;
  font-size: 1rem;
  outline: none;

  &::placeholder {
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
  }
`;

export default Input;
