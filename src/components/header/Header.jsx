import React from 'react';
import Logo from '../../assets/img/logo.PNG';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <header className='header'>
            <Link className='link-logo' to='/'><img className='logo' src={Logo} alt='logo marvel' /></Link>
            <div className='container-link'>
                <Link className='link' to='/character'>Superheroes</Link>
                <Link className='link' to='/series'>Series</Link>
                <Link className='link' to='/events'>Eventos</Link>
            </div>
        </header>
    );
};

export default header;
