import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './stylesheets/NavbarElements';
import {NavDropdown} from 'react-bootstrap';
import { NavbarBrand } from 'react-bootstrap';
import {TodoContainer} from  ".//TodoContainer";
import logo from './/RoboRecoveryLogo2.jpg';

{/* <NavDropdown title="Reach Us" id="collasible-nav-dropdown">
			<NavLink to='/components/ReachUs/ReachUsTodoContainer' activeStyle>
				Reach Us
			</NavLink>
			<NavLink to='/components/Teachers/TeachersTodoContainer' activeStyle>
				Teachers and Kits
			</NavLink>
		</NavDropdown> */}

const brandStyle = {
	
	// marginLeft:'320px',
	paddingTop:15,
	marginLeft:20
  };

const Navbar = () => {
return (
	
	<Nav>
		<Bars />
		<NavbarBrand title = "navbarimage" href = '/'>
			<img src={logo} style={brandStyle}></img>
		</NavbarBrand>

		<NavMenu>
		<NavLink to='/components/About/AboutTodoContainer' activeStyle>
			About
		</NavLink>
		<NavLink to='/components/CoreTenets/CoreTenetsTodoContainer' activeStyle>
			Core Tenets
		</NavLink>
		<NavLink to='/components/ReachUs/ReachUsTodoContainer' activeStyle>
			Reach Us
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/components/Donate/DonateTodoContainer'>Donate Robotics Kits</NavBtnLink>
		</NavBtn>
	</Nav>
);
};

export default Navbar;
