import React from 'react';
import Header from '../header/Header';
import SubHeader from '../header/SubHeader';
import { useSelector } from 'react-redux';
import Character from './Character';

const MainCharacter = () => {
    const character = useSelector((state) => state.api_reducer.characters);
    const loading = useSelector((state) => state.api_reducer.loading);

    return (
        <>
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
        </>
    );
};

export default MainCharacter;
