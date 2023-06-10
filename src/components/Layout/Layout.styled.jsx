import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  padding: 10px;
  z-index: 2;
  background-color: rgba(32, 6, 98, 0.9);
`;

export const Nav = styled.nav`
  display: flex;
  align-items: baseline;
  gap: 30px;
`;

export const StyledLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;

  &.active {
    color: #9d28b4;
    font-weight: 500;
  }
`;
