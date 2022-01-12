import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './stylesheets/NavbarElements';

const Navbar = () => {
return (
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/components/About/AboutTodoContainer' activeStyle>
			About
		</NavLink>
		<NavLink to='/components/Model/ModelTodoContainer' activeStyle>
			Model
		</NavLink>
		<NavLink to='/components/ReachUs/ReachUsTodoContainer' activeStyle>
			Reach Us
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/components/Donate/DonateTodoContainer'>Donate</NavBtnLink>
		</NavBtn>
	</Nav>
);
};

export default Navbar;
