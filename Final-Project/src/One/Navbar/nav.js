import React from 'react';
//import { NavLink } from 'react-router-dom';
import{Nav,
       NavLink,
       Bars, 
       NavMenu, 
       NavBtn, 
       NavBtnLink} from './NavbarElements';
const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavLink to="/">
                    <h1>Sasquatch</h1>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        Services
                    </NavLink>
                    <NavLink to="/contact-us" activeStyle>
                        ToDo
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </div>

        

        
    )
}

export default Navbar;
