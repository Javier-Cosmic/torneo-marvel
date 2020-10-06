import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import SubHeader from '../header/SubHeader';
import { useSelector, useDispatch } from 'react-redux';
import {rankingPlayers, cleanState} from '../../redux/actions/game-actions';

const RoundsGame = () => {
    const dispatch = useDispatch();
    const character1 = useSelector((state) => state.game_reducer.player1);
    const character2 = useSelector((state) => state.game_reducer.player2);
    const round = useSelector((state) => state.game_reducer.round);
    const pts = Math.round(Math.random() * (2000 - 1500) + 1500);

    const [ronda, setRonda] = useState(round);
    const [ganadasP1, setGanadasP1] = useState(0);
    const [ganadasP2, setGanadasP2] = useState(0);

    const knock = () => {
        if (ronda > 0) {
            setRonda(ronda - 1);

            const random = Math.round(Math.random());

            if (random === 0) {
                setGanadasP1(ganadasP1 + 1);

            } else if (random === 1) {
                setGanadasP2(ganadasP2 + 1);
            }
        }
    };

    useEffect(() => {

        if (ronda <= 0) {
            console.log('el juego se ha acabado');

            if (ganadasP1 > ganadasP2) {
                let newCharacter = character1;
                newCharacter = { ...newCharacter, points: pts };

                dispatch(rankingPlayers(newCharacter))
                dispatch(cleanState())

                console.log('el ganador fue 1: ', newCharacter);
            } else {
                let newCharacter = character2;
                newCharacter = { ...newCharacter, points: pts };

                dispatch(rankingPlayers(newCharacter))
                dispatch(cleanState())
                
                console.log('el ganador fue 2: ', newCharacter);
            }

        }

    }, [ronda])

    return (
        <div>
            <Header />
            <SubHeader>Rounds {ronda}</SubHeader>
            Round 1
            <div>
                <h1>player 1</h1>
                {ganadasP1}
            </div>
            <div>
                <h1>player 2</h1>
                {ganadasP2}
            </div>
            <button onClick={knock}>golpe</button>
        </div>
    );
};

export default RoundsGame;
