import { Link, NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const LinkStyled = styled(Link)`
  display: inline-block;
  margin-top: 8px;
  margin-bottom: 16px;
  padding: 8px;

  background-color: #4e4ebc;
  color: white;

  border-radius: 6px;

  transition: background-color 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98),
    color 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  :hover,
  :focus {
    background-color: #299cb9;
    color: #0f0707;
  }
`;

export const ExtraInfo = styled.p`
  margin-top: 24px;
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: 700;
  color: #0c0606;
  text-transform: uppercase;
`;

export const LinkList = styled.ul`
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 12px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 24px;
  color: #4e4ebc;

  transition: transform 0.3s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  :hover,
  :focus {
    transform: scale(1.03);
  }

  &.active {
    color: #299cb9;
    font-size: 28px;
  }
`;
