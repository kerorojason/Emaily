import React, { Component } from "react";
import { connect } from "react-redux";
import Payments from "./Payments";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";

class Header extends Component {
  renderContent2() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Nav.Link href="/auth/google">Login With Google</Nav.Link>;
      default:
        return [
          <Nav.Link key="1" className="nav-item nav-link text-warning pl-3">
            <Payments />
          </Nav.Link>,
          <Navbar.Text key="2" className="pl-4 my-auto">
            Credits: {this.props.auth.credits}
          </Navbar.Text>,
          <Nav.Link key="3" className="pl-4 my-auto" href="/api/logout">
            Logout
          </Nav.Link>
        ];
    }
  }

  render() {
    return (
      <Navbar
        collapseOnSelect
        bg="dark"
        variant="dark"
        expand="md"
        className="mb-4"
      >
        <Container>
          <LinkContainer to={this.props.auth ? "/surveys" : "/"}>
            <Navbar.Brand>Emaily</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">{this.renderContent()}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

// 連接 component 和 redux store
// function mapStateToProps(state){
//   return {auth:state.auth}
// }

// es6 refactor
// 每當mapStateToProps的參數(第一個參數：state)改變，就會呼叫一次
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
