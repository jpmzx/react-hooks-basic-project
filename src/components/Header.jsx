import React, { useState , useContext} from "react";
import ThemeContext from '../context/ThemeContext';
import {Nav, Navbar, NavDropdown, Button} from 'react-bootstrap';

const Header = () => {
  const {theme, setTheme} = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme === 'light' ? false : true);
  const handleClick = () => {
    setTheme(!darkMode ? 'dark' : 'light');
    setDarkMode(!darkMode);
  };

  // const HeaderClasses = theme ? 'dark' : 'light'

  return (
    <div className="main">
      <Navbar bg={theme} expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="outline-success" onClick={handleClick}>{!darkMode ? "DarkMode" : "LightMode"}</Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
