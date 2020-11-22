import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';

// import { Link } from 'react-router-dom';

export class NavigationBar extends Component {
  render() {
    return (
      <div>
    <Nav activeKey="../App.jsx">
      <Nav.Item>
        <Nav.Link href="../App.jsx"><img src="../components/Images/Vectors/LogoHorizontal.png" width="30" height="30" alt=""></img></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
    </Nav>
      </div>
    )
  }
}

export default NavigationBar
