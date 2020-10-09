import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import SubHeader from '../header/SubHeader';
import { useSelector } from 'react-redux';
import Ranking from './Ranking';
import MainFight from './MainFight';

const MainRanking = () => {
    const ranking = useSelector((state) => state.game_reducer.ranking);

    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState([]);

    const onChange = (e) => {
        setSearch(e.target.value.toLowerCase())
    };

    useEffect(() => {
        const filterId = ranking.filter((item) =>
            item.name.toLowerCase().includes(search)
        );
        setFilter(filterId);
    }, [search, ranking]);

    if (ranking.length === 0) {
        return (
            <>
                <Header />
                <SubHeader>Ranking de ganadores</SubHeader>
                <h1 className='title-error'>no hay datos</h1>
            </>
        );
    }

    return (
        <>
            <Header />
            <SubHeader>Ranking de ganadores</SubHeader>
            <div className='container-ranking'>
                <div className='container-table'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>
                                    <input
                                        type='text'
                                        onChange={onChange}
                                        name='search'
                                        value={search}
                                        className='input-search'
                                        placeholder='filtrar por nombre'
                                    />
                                </th>
                                <th>nombre</th>
                                <th>
                                    puntos
                                    <i className='fas fa-trophy icon'></i>
                                </th>
                            </tr>
                        </thead>
                        {filter.map((character, index) => (
                            <Ranking
                                key={character.id}
                                character={character}
                                index={index}
                            />
                        ))}
                    </table>
                </div>
            </div>
            <MainFight />
        </>
    );
};

export default MainRanking;
