import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

bootstrapUtils.addStyle(Navbar,'menu');


const MenuBar =({Name, LinkName1, LinkName2, LinkName3, LinkName4, Link1, Link2, Link3, Link4})=>(
<div>
  <style type="text/css">
  {`
    .navbar {
      border-radius: 0px;
    }

    .navbar > .container .navbar-brand, .navbar > .container-fluid .navbar-brand{
      margin-left: -50px;
    }
  `}
  </style>
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Nav pullLeft>
        <Navbar.Brand>
          <a href="/">{Name}</a>
        </Navbar.Brand>
      </Nav>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to={Link1}>
          <NavItem>{LinkName1}</NavItem>
        </LinkContainer>
        <LinkContainer to={Link2}>
          <NavItem>{LinkName2}</NavItem>
        </LinkContainer>
        <LinkContainer to={Link3}>
          <NavItem>{LinkName3}</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        <LinkContainer to={Link4}>
          <NavItem>{LinkName4}</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</div>
);


export default MenuBar;
