import React, {useEffect} from 'react';
import Header from '../header/Header';
import SubHeader from '../header/SubHeader';
import {useDispatch, useSelector} from 'react-redux';
import { loadCharacter } from '../../redux/actions/api-actions';

const ChooseCharacter = () => {

    const dispatch = useDispatch();
    const character1 = useSelector((state) => state.game_reducer.player1); 
    const character2 = useSelector((state) => state.game_reducer.player2);
    const characters = useSelector((state) => state.api_reducer.characters); 

    const chooseCharacter = () => {
        console.log(characters)
    }

    useEffect(() => {
        const loadingCharacter = () => {
            dispatch(loadCharacter());
        };
        loadingCharacter();

    }, [dispatch]);

    return (
        <>
            <Header />
            <SubHeader>Torneo marvel</SubHeader>
            <div className='container-game'>
                <div className='game'>
                    <h1>Selecciona los personajes</h1>
                    <section className='choose-character'>
                        <p>¿</p>
                        <span>vs</span>
                        <p>?</p>
                    </section>
                    <div className='choose-button'>
                        <button onClick={chooseCharacter}>aleatorio</button>
                        <button onClick={chooseCharacter}>aleatorio</button>
                    </div>
                    <button>iniciar batalla</button>
                </div>
            </div>
        </>
    );
};

export default ChooseCharacter;
