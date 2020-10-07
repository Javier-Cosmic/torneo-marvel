import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import SubHeader from '../header/SubHeader';
import { useSelector, useDispatch } from 'react-redux';
import {colorAura, colorBar, colorRandom} from '../utils/index';
import {
    rankingPlayers,
    cleanState
} from '../../redux/actions/game-actions';

const RoundsGame = () => {
    const dispatch = useDispatch();
    const character1 = useSelector((state) => state.game_reducer.player1);
    const character2 = useSelector((state) => state.game_reducer.player2);
    const round = useSelector((state) => state.game_reducer.round);
    const pts = Math.round(Math.random() * (2000 - 1500) + 1500);

    const [ronda, setRonda] = useState(round);
    const [count, setCount] = useState(1);
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
            setCount(count + 1);
            console.log('jugador muerto player 1');
            setHealth1(100);
            setGanadasP2(ganadasP2 + 1);
            return;
        } else if (health2 <= 0) {
            setRonda(ronda - 1);
            setCount(count + 1);
            setRonda(ronda - 1);
            setCount(count + 1);
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
    }, [
        ronda,
        health1,
        health2,
    ]);


    return (
        <>
            <Header />
            <SubHeader>Torneo marvel</SubHeader>
            <div className='container-battle'>
                <div className='battle-card'>
                    {/* columna 1 */}
                    <div className='box1 health-player'>
                        <div className='health-bar p1'>
                            <div
                                className='bar'
                                style={{
                                    width: health1 + '%',
                                    backgroundColor: colorBar(health1),
                                }}
                            >
                                <p className='number1'>{health1}</p>
                            </div>
                        </div>
                        <div className='limit-nameplayer'>
                            <p className='name-player'>{character1.name}</p>
                        </div>
                    </div>

                    <div className='box2 box-img-player'>
                        <div className='container-img-player'>
                            <img
                                className='img-player animation-battle color1'
                                src={character1.img}
                                alt='player 1'
                            />
                        </div>
                    </div>

                    <div className='box3 round-win'>
                        <p>rondas ganadas</p>
                        <span>{ganadasP1}</span>
                    </div>

                    {/* columna 2 */}
                    <div className='box4 name-round'>
                        <p >round {count}</p>
                    </div>
                    <div className='box5'></div>
                    <div className='box6 div-flex'>
                        <button
                            type='button'
                            className='button'
                            onClick={knock}
                        >
                            pelear
                        </button>
                    </div>

                    {/* columna 3 */}
                    <div className='box7 health-player'>
                        <div className='health-bar p2'>
                            <div
                                className='bar'
                                style={{
                                    width: health2 + '%',
                                    backgroundColor: colorBar(health2),
                                }}
                            >
                                <p className='number2'>{health2}</p>
                            </div>
                        </div>
                        <div className='limit-nameplayer'>
                            <p className='name-player'>{character2.name}</p>
                        </div>
                    </div>

                    <div className='box8 box-img-player'>
                        <div className='container-img-player'>
                            <img
                                className='img-player animation-battle color2'
                                src={character2.img}
                                alt='player 2'
                            />
                        </div>
                    </div>

                    <div className='box9 round-win'>
                        <p>rondas ganadas</p>
                        <span>{ganadasP2}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RoundsGame;
