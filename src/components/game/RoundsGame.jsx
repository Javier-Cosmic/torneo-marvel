import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import SubHeader from '../header/SubHeader';
import { useSelector, useDispatch } from 'react-redux';
import { rankingPlayers, cleanState } from '../../redux/actions/game-actions';

const RoundsGame = () => {
    const dispatch = useDispatch();
    const character1 = useSelector((state) => state.game_reducer.player1);
    const character2 = useSelector((state) => state.game_reducer.player2);
    const round = useSelector((state) => state.game_reducer.round);
    const pts = Math.round(Math.random() * (2000 - 1500) + 1500);

    const [ronda, setRonda] = useState(round);
    const [ganadasP1, setGanadasP1] = useState(0);
    const [ganadasP2, setGanadasP2] = useState(0);
    const [health1, setHealth1] = useState(100);
    const [health2, setHealth2] = useState(100);

    const knock = () => {
        if (ronda > 0) {
            const random = Math.round(Math.random());

            if (random === 0) {
                setHealth1(health1 - 20);
                console.log('salud player 1 ', health1);
            } else if (random === 1) {
                setHealth2(health2 - 20);
                console.log('salud player 2 ', health2);
            }
        }
    };

    useEffect(() => {
        if (health1 <= 0) {
            setRonda(ronda - 1);
            console.log('jugador muerto player 1');
            setHealth1(100);
            setGanadasP2(ganadasP2 + 1);
            return;
        } else if (health2 <= 0) {
            setRonda(ronda - 1);
            console.log('jugador muerto player 2');
            setHealth2(100);
            setGanadasP1(ganadasP1 + 1);
            return;
        }

        if (ronda <= 0) {
            console.log('el juego se ha acabado');
            let newCharacter;

            if (ganadasP1 > ganadasP2) {
                newCharacter = character1;
                newCharacter = { ...newCharacter, points: pts };

                dispatch(rankingPlayers(newCharacter));
                dispatch(cleanState());

                console.log('el ganador fue 1: ', newCharacter);
            } else {
                newCharacter = character2;
                newCharacter = { ...newCharacter, points: pts };

                dispatch(rankingPlayers(newCharacter));
                dispatch(cleanState());

                console.log('el ganador fue 2: ', newCharacter);
            }
        }
    }, [ronda, health1, health2]);

    const colorBar = (health) => {
        switch (health) {
            case 40:
                return 'yellow'
            case 20:
                return 'red'
            default:
                return 'green';
        }
    }

    return (
        <div>
            <Header />
            <SubHeader>Rounds N°{ronda}</SubHeader>
            Round 1
            <div>
                <h1>player 1</h1>
                {ganadasP1}
                <p>
                    vida:
                    <span
                        style={{
                            width: health1+'px',
                            background: colorBar(health1),
                            display: 'block',
                            transition: 'width 1s, background 1s'
                        }}
                    >
                        {health1}
                    </span>
                </p>
            </div>
            <div>
                <h1>player 2</h1>
                {ganadasP2}
                <p>
                    vida:
                    <span
                        style={{
                            width: health2,
                            background: colorBar(health2),
                            display: 'block',
                            transition: 'width 1s, background 1s'
                        }}
                    >
                        {health2}
                    </span>
                </p>
            </div>
            <button onClick={knock}>golpe</button>
        </div>
    );
};

export default RoundsGame;
