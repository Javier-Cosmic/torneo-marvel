import React from 'react';
import { Link } from 'react-router-dom';
import { cleanState } from '../../redux/actions/game-actions';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../header/Header';
import SubHeader from '../header/SubHeader';

const Winner = () => {
    const dispatch = useDispatch();
    const winner = useSelector((state) => state.game_reducer.winner);

    const clean = () => {
        dispatch(cleanState());
    };

    return (
        <>
            <Header />
            <SubHeader>Torneo marvel</SubHeader>
            <div className='container-battle'>
                <div className='game winner'>
                    <h1 className='title-winner'>ganador de la batalla</h1>
                    <img
                        className='img-player'
                        src={winner.img}
                        alt={winner.name}
                    />
                    <div className='text-winner'>
                        <h1>{winner.name}</h1>
                        <h2>puntos: {winner.points}</h2>
                    </div>
                    <div className='flex-between'>
                        <button className='button btn-size' onClick={clean}>
                            Volver a jugar
                        </button>
                        <Link
                            className='link-comic btn-winner'
                            onClick={clean}
                            to='/ranking'
                        >
                            Ver ranking
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Winner;
