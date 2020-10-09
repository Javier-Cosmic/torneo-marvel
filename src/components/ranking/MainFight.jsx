import React from 'react';
import { useSelector } from 'react-redux';
import Fight from './Fight';

const FightsDay = () => {
    const fight = useSelector((state) => state.game_reducer.fights);

    return (
        <>
            <h1 className='title-fight'>Peleas de la jornada</h1>
            <div className='container-ranking'>
                <div className='container-table-fight'>
                    <table className='table-fight'>
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Personaje 1</th>
                                <th>Personaje 2</th>
                                <th>Ganador</th>
                            </tr>
                        </thead>
                        {fight.map((item, i) => (
                            <Fight key={i} fight={item} />
                        ))}
                    </table>
                </div>
            </div>
        </>
    );
};

export default FightsDay;
