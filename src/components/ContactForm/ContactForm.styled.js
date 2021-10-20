import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto 20px;
  padding: 20px 10px;

  max-width: 800px;

  background-color: #fff;
  border: 1px solid teal;
  border-radius: 5px;
  box-shadow: 1px 3px 10px -4px #050505;
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Label = styled.label`
  color: rgb(111, 121, 124);
  font-size: 15px;
  line-height: 20px;

  &:not(last-child) {
    margin-bottom: 10px;
  }
`;
export const Input = styled.input`
  display: block;
  padding: 5px 5px;

  border-color: teal;
  border-radius: 5px;

  &:focus,
  &:focus-visible,
  &:active {
    display: block;
    padding: 5px 5px;

    border-color: red;
    outline-color: red;
  }
`;
export const Btn = styled.button`
  display: inline-block;
  padding: 10px 30px;
  width: 180px;

  margin-top: 40px;

  border: 0.1em solid #353434;

  border-radius: 5px;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #fff;
  background-color: teal;
  text-align: center;
  transition: all 0.3s;
  cursor: pointer;

  &:focus,
  &:focus-visible,
  &:active {
    color: #000000;
    background-color: #92f9f952;
    box-shadow: 1px 3px 10px -4px #050505;
  }
`;
