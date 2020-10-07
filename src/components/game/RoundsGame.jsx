import React from 'react';
import useGame from '../hooks/useGame';
import Header from '../header/Header';
import SubHeader from '../header/SubHeader';
import { useSelector, useDispatch } from 'react-redux';
import { colorBar } from '../utils/index';
import { rankingPlayers, cleanState } from '../../redux/actions/game-actions';

const RoundsGame = () => {
    const dispatch = useDispatch();
    const character1 = useSelector((state) => state.game_reducer.player1);
    const character2 = useSelector((state) => state.game_reducer.player2);
    const round = useSelector((state) => state.game_reducer.round);
    const pts = Math.round(Math.random() * (2000 - 1500) + 1500);

    const [
        ronda,
        setHealth1,
        health1,
        setHealth2,
        health2,
        ganadasP1,
        count,
        ganadasP2,
    ] = useGame(round, pts, character1, character2, rankingPlayers, cleanState);

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

    return (
        <>
            <Header />
            <SubHeader>Torneo marvel</SubHeader>
            <div className='container-battle'>
                <div className='battle-card'>
                    {/* columna 1 */}

                    {/* box 1 */}
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

                    {/* box 2 */}
                    <div className='box2 box-img-player'>
                        <div className='container-img-player'>
                            <img
                                className='img-player animation-battle color1'
                                src={character1.img}
                                alt='player 1'
                            />
                        </div>
                    </div>

                    {/* box 3 */}
                    <div className='box3 round-win'>
                        <p>rondas ganadas</p>
                        <span>{ganadasP1}</span>
                    </div>

                    {/* columna 2 */}
                    {/* box 4 */}
                    <div className='box4 name-round'>
                        <p>round {count}</p>
                    </div>
                    <div className='box5'></div>
                    {/* box 6 */}
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
                    {/* box 7 */}
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
                    {/* box 8 */}
                    <div className='box8 box-img-player'>
                        <div className='container-img-player'>
                            <img
                                className='img-player animation-battle color2'
                                src={character2.img}
                                alt='player 2'
                            />
                        </div>
                    </div>
                    {/* box 9 */}
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
