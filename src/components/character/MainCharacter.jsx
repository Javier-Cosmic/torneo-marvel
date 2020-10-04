import React, { useEffect } from 'react';
import Header from '../header/Header';
import SubHeader from '../header/SubHeader';
import { useSelector, useDispatch } from 'react-redux';
import { loadCharacter } from '../../redux/actions/api-actions';
import Character from './Character';

const MainCharacter = () => {
    const dispatch = useDispatch();
    const character = useSelector((state) => state.api_reducer.characters);
    const loading = useSelector((state) => state.api_reducer.loading);

    useEffect(() => {
        const loadingCharacter = () => {
            dispatch(loadCharacter());
        };
        loadingCharacter();
    }, [dispatch]);

    return (
        <div>
            <Header />
            <SubHeader>Personajes</SubHeader>
            {loading ? (
                <div className='container-flex'>
                    <p className='spinner'></p>
                </div>
            ) : (
                <div className='container'>
                    {character.map((character) => (
                        <Character key={character.id} character={character} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MainCharacter;
