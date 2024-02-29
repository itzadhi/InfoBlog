import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect bg='dark' expand='lg' variant='dark'>
        <Container>
          <Navbar.Brand className='fs-4'>
            <Link to='/' className='text-decoration-none text-light'>
              User Records
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Link to='/add'>
              <button className='btn btn-outline-success'>Add</button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
