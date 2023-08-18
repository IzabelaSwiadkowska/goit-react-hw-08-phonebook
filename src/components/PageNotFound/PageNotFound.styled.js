import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Paragraph = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 96px;
  font-weight: 700;
  color: #4fd1c5;
  text-align: center;
`;
export const BtnLink = styled(Link)`
  padding: 20px 40px;
  background-color: #4fd1c5;
  border: 1px solid #4fd1c5;
  border-radius: 10px;
  color: black;
  font-size: 20px;
  height: 30px;
  width: 150px;
  &:hover {
    background-color: #319795;
    color: #fff;
  }
`;
