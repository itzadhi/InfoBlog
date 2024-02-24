import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Link to='/'>
            <Navbar.Brand>Blog</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
