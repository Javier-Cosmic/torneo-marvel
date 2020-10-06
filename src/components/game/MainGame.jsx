import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getRound } from '../../redux/actions/game-actions';

const GameMain = () => {
    const dispatch = useDispatch();

    const [round, setRound] = useState(1);
    const [alert, setAlert] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const handleRound = (e) => {
        setRound(e.target.value);
    };

    const submitRound = () => {
        if (!Number(round) <= 0) {
            dispatch(getRound(Number(round)));
            setRedirect(true);
            setAlert(false);
        } else {
            setAlert(true);
            return;
        }
    };

    return (
        <main className='container-game'>
            <form className='game game-start'>
                <h1 className='title-game'>Ingresa el N° de peleas</h1>
                <div className='container-input'>
                    <input
                        className='input-round'
                        type='number'
                        name='round'
                        value={round}
                        onChange={handleRound}
                    />
                    <button type='submit' className='btn-game margin-btn' onClick={submitRound}>Jugar</button>
                </div>
                {alert && <p className='msg-error'>Debes ingresar un número valido</p>}
            </form>
            {redirect && <Redirect to='/choose' />}
        </main>
    );
};

export default GameMain;
