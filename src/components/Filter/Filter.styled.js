import styled from '@emotion/styled';

export const Container = styled.div`
  justify-content: center;
  text-align: center;
  padding: 20px 10px;
`;
export const Title = styled.h2`
  color: rgb(111, 121, 124);
`;
export const Input = styled.input`
  margin: 0 auto;
  display: block;
  padding: 5px 5px;

  border-color: teal;
  border-radius: 5px;

  &:focus,
  &:focus-visible,
  &:focus {
    display: block;
    padding: 5px 5px;

    border-color: red;
    outline-color: red;
  }
`;
