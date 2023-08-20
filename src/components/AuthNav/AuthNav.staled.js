import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SNavLink = styled(NavLink)`
  font-family: 'Muli';
  font-weight: 600;
  font-size: 30px;
  color: #38b2ac;
  margin-right: 30px;
  text-decoration: none;
  &.active {
    color: #1a202c;

    font-weight: 700;
    transform: scale(1.1);
    background-color: #b2f5ea;

    border-radius: 2rem;
    display: inline-block;

    padding: 10px 20px;
  }
`;
