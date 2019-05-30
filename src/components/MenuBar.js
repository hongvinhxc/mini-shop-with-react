import React from 'react';
import classNames from 'classnames'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Shop from '../routes/Shop'
import Cart from '../routes/Cart'

export default class MenuBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar color="primary" dark expand="md">
            <Link className="navbar-brand" color="dark" to='/'>
             Herry Vinh
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className={classNames({ 'w-100': !this.state.isOpen })} navbar>
                <NavItem>
                  <Link className="nav-link text-light" to='/shop/'>Shop
                  </Link>
                </NavItem>
                <NavItem className={classNames({ "ml-auto": !this.state.isOpen })} >
                  <Link className="nav-link text-light" to='/cart/'>
                   Cart
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Route path="/shop/" exact component={Shop} />
          <Route path="/cart/" exact component={Cart} />
        </div>
      </Router>
    );
  }
}