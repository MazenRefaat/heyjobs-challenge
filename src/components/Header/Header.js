import React from 'react';
import logo from '../../assets/images/logo_full.png'
import { StyledHeader, StyledLogo } from './Styles';
import { Link } from 'react-router-dom';

/**
* Header
* @description component to wrap logo accross application routes
* @returns Header component
*/
const Header = () => (
    <StyledHeader>
        <div>
            <Link to='/'>
                <StyledLogo className='logo' src={logo} title="HeyJobs" alt="HeyJobs"/>
            </Link>
        </div>
    </StyledHeader>
)

export default Header;