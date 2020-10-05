import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../header/Header';
import SubHeader from '../header/SubHeader';
import MainGame from '../game/MainGame';
import { loadCharacter } from '../../redux/actions/api-actions';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const loadingCharacter = () => {
            dispatch(loadCharacter());
        };
        loadingCharacter();
    }, [dispatch]);

    return (
        <div>
            <Header />
            <SubHeader>Torneo marvel</SubHeader>
            <MainGame />
        </div>
    );
};

export default Home;
