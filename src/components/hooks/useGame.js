import { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { saveWinner, saveFights } from '../../redux/actions/game-actions';
import { date } from '../utils/index';

const useGame = (
    round,
    pts,
    character1,
    character2,
    rankingPlayers,
    history
) => {
    const dispatch = useDispatch();

    const [ronda, setRonda] = useState(round);
    const [count, setCount] = useState(1);
    const [ganadasP1, setGanadasP1] = useState(0);
    const [ganadasP2, setGanadasP2] = useState(0);
    const [health1, setHealth1] = useState(100);
    const [health2, setHealth2] = useState(100);


    useEffect(() => {
        if (health1 <= 0) {
            setRonda(ronda - 1);
            setCount(count + 1);

            setHealth1(100);
            setGanadasP2(ganadasP2 + 1);
            return;
            
        } else if (health2 <= 0) {
            setRonda(ronda - 1);
            setCount(count + 1);

            setHealth2(100);
            setGanadasP1(ganadasP1 + 1);
            return;
        }

        if (ronda <= 0) {
            let newCharacter;
            
            if (ganadasP1 > ganadasP2) {
                newCharacter = character1;
                newCharacter = { ...newCharacter, points: pts };
                
                dispatch(rankingPlayers(newCharacter));
                
                dispatch(saveWinner(newCharacter));
                history.push('/choose/winner');

            } else {
                newCharacter = character2;
                newCharacter = { ...newCharacter, points: pts };

                dispatch(rankingPlayers(newCharacter));
                
                dispatch(saveWinner(newCharacter));
                history.push('/choose/winner');
            }


            const fight = {
                date: date(), p1: character1.name, p2: character2.name, win: newCharacter.name
            }
            dispatch(saveFights(fight))
        }
    }, [ronda, health1, health2]);

    return [
        ronda,
        setHealth1,
        health1,
        setHealth2,
        health2,
        ganadasP1,
        count,
        ganadasP2,
    ];
};

export default useGame;
