import React from 'react'
import Header from '../header/Header';
import SubHeader from '../header/SubHeader';
import {useSelector} from 'react-redux';

const MainRanking = () => {

    const ranking = useSelector((state) => state.game_reducer.ranking);

    return (
        <div>
            <Header />
            <SubHeader>Ranking de ganadores</SubHeader>
            Ranking
            <div>
                {ranking.map(character => (
                    <h1>{character.points}</h1>
                ))}
            </div>
        </div>
    )
}

export default MainRanking
