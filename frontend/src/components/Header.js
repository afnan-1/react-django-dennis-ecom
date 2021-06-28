import React from "react";
import { Navbar, Nav, Container, Row, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";
import SearchBox from './SearchBox'
import { useHistory } from "react-router";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const history = useHistory()
  const logoutHandler = () => {
    dispatch(logout());
  };
  const summer=()=>{
    history.push(`/?keyword=summer&page=1`)
  }
  const winter=()=>{
    history.push(`/?keyword=winter&page=1`)
  }
  const clothes=()=>{
    history.push(`/?keyword=clothes&page=1`)
  }
  const electronics=()=>{
    history.push(`/?keyword=electronics&page=1`)
  }
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <LinkContainer to="/">
          <Navbar.Brand>Pakistan Store</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <SearchBox />
          <Nav className="ml-auto">
            <LinkContainer to="/cart">
              <Nav.Link>
                <i className="fas fa-shopping-cart"></i>Cart
              </Nav.Link>
            </LinkContainer>
            
              <Nav.Link onClick={summer}>
                Summer
              </Nav.Link>
              <Nav.Link onClick={winter}>
                Winter
              </Nav.Link>
              <Nav.Link onClick={electronics}>
                Electronics
              </Nav.Link>
              <Nav.Link onClick={clothes}>
                Clothes
              </Nav.Link>
           
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="username">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user"></i>Login
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
