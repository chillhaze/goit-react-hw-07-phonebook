import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 800px;
`;
export const List = styled.ul`
  padding: 20px 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  border: 1px solid teal;
  border-radius: 5px;
`;
export const ListItem = styled.li`
  position: relative;
  min-width: 160px;
  width: 22%;
  padding: 10px 15px;
  margin: 7px;

  color: rgb(111, 121, 124);
  font-size: 14px;
  line-height: 20px;

  background-color: #fff;
  border: 1px solid teal;
  border-radius: 5px;
  box-shadow: 1px 3px 10px -4px #050505;

  transition: transform 0.25s linear, -webkit-transform 0.25s linear;
  overflow: hidden;
`;
