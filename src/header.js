import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Headers.css'

function Header() {
  return (
    <div>

<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.postimg.cc/CL8ZCC8B/logo-removebg-preview.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <b className='mt-1 fs-4 '>A Thought For Food</b>
          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header