import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {getRound} from '../../redux/actions/game-actions';

const GameMain = () => {

    const dispatch = useDispatch();

    const [round, setRound] = useState(1);
    const [alert, setAlert] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const handleRound = (e) => {
        setRound(e.target.value);
    }

    const submitRound = () => {

        if (!Number(round) <= 0) {
            dispatch(getRound(Number(round)));
            setRedirect(true);
            setAlert(false);
        }else{
            setAlert(true);
            return
        }
    }

    return (
        <main className='container-game'>
            <div className='game'>
                <h1>Numero de batallas</h1>
                <input type='number' name='round' value={round} onChange={handleRound}/>
                <button onClick={submitRound}>Jugar</button>
                {alert && <h1>Debes ingresar un numero valido</h1>}
            </div>
            {redirect && <Redirect to='/choose' />}
        </main>
    );
};

export default GameMain;
