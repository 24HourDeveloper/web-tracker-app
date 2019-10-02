import React from 'react';
import { Nav, Navbar, NavbarToggler, NavbarBrand, NavItem, NavLink, Collapse } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faShoePrints } from '@fortawesome/free-solid-svg-icons'

class NavBar extends React.Component{

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


  render(){
    return(
      <div>
      <Navbar style={{backgroundColor:'#3C5A99'}}  expand="md">
      <NavbarBrand style={{color:'#ffffff'}} href="/">Web Tracker</NavbarBrand>
      <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem >
            <NavLink style={{color:'#ffffff'}} href="/"><FontAwesomeIcon icon={faBell}/></NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={{color:'#ffffff'}} href="/"><FontAwesomeIcon icon={faShoePrints}/></NavLink>
          </NavItem>
        </Nav>
        </Collapse>
    </Navbar>
    </div>
    );
  }
}

export default NavBar;