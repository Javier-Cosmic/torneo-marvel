import React from 'react';
import Logo from '../../assets/img/logo.PNG';
import { NavLink, Link } from 'react-router-dom';

const header = () => {
    return (
        <header className='header'>
            <Link className='link-logo' to='/'>
                <img className='logo' src={Logo} alt='logo marvel' />
            </Link>
            <div className='container-link'>
                <NavLink
                    activeClassName='link-active'
                    className='link'
                    to='/ranking'
                >
                    Ranking
                </NavLink>
                <NavLink
                    activeClassName='link-active'
                    className='link'
                    to='/character'
                >
                    Superhéroes
                </NavLink>
            </div>
        </header>
    );
};

export default header;
