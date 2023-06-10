import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Nav, StyledLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </Nav>
        </Container>
      </Header>
      <main>
        <Container padding>
          <Suspense fallback={<div>Wait</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default Layout;
