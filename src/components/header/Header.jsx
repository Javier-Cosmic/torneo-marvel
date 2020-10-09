import React from 'react';
import { useDispatch } from 'react-redux';
import Logo from '../../assets/img/logo.png';
import { NavLink } from 'react-router-dom';
import { cleanState } from '../../redux/actions/game-actions'

const Header = () => {
    const dispatch = useDispatch()

    const clean = () => {
        dispatch(cleanState());
    };

    return (
        <div className='header'>
            <NavLink onClick={clean} className='link-logo' to='/'>
                <img className='logo' src={Logo} alt='logo marvel' />
            </NavLink>
            <div className='container-link'>
                <NavLink
                    onClick={clean}
                    activeClassName='link-active'
                    className='link'
                    to='/ranking'
                >
                    Ranking
                </NavLink>
                <NavLink
                    onClick={clean}
                    activeClassName='link-active'
                    className='link'
                    to='/character'
                >
                    Superhéroes
                </NavLink>
            </div>
        </div>
    );
};

export default Header;
