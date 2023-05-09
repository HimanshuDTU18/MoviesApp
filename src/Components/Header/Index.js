import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

function HeaderComponents() {
  const navData = [
    {name:"Home",link:"/"},
    {name:"Movies",link:"/movies"},
    {name:"Tv series",link:"/series"},
    {name:"Contact Us",link:"/contact"},
    {name:"About",link:"/about"}
  ]
  return (
        <header className='header'>
        <Navbar bg="dark" expand ="lg">
          <Container>
            <Navbar.Brand>
              Movie App
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            {
                    navData.map((item)=>{
                      console.log(item.name)
                      return (
                      <Nav key={item.name}>
                        <Link to={item.link}>
                          {item.name}
                        </Link>
                        </Nav>
                      )
                    })
                  }
                </Nav>
              </Navbar.Collapse>
    
          </Container>
          </Navbar>
        </header>

  )
}

export default HeaderComponents