import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Footer from './components/Footer.jsx';

const navbarInstance = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Chata v Krpáčove</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <LinkContainer to="gallery">
          <NavItem>Galéria</NavItem>
        </LinkContainer>
        <LinkContainer to="location">
          <NavItem>Poloha</NavItem>
        </LinkContainer>
        <LinkContainer to="calendar">
          <NavItem>Obsadenosť</NavItem>
        </LinkContainer>
        <LinkContainer to="prices">
          <NavItem>Cenník</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default class App extends React.Component {
  render() {
    return (
      <div>
        {navbarInstance}
        <Grid>
          <Row>
            <Col md={12} sm={12} xs={12}>
              {this.props.children}
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12} xs={12}>
              <Footer/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
