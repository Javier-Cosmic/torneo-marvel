import React from 'react';
import Header from '../header/Header';
import SubHeader from '../header/SubHeader';
import MainGame from '../game/MainGame';

const home = () => {
    return (
        <div>
            <Header />
            <SubHeader>Torneo marvel</SubHeader>
            <MainGame />
        </div>
    )
}

export default home;
