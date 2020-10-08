import React, {useEffect} from 'react';
import Header from '../header/Header';
import SubHeader from '../header/SubHeader';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {loadSerie} from '../../redux/actions/api-actions';
import Series from './Series';
import ButtonBack from '../home/ButtonBack';

const MainSeries = () => {
    const {id} = useParams();

    const dispatch = useDispatch();
    const serie = useSelector((state) => state.api_reducer.series);
    const loading = useSelector((state) => state.api_reducer.loading);

    useEffect(() => {
        dispatch(loadSerie(id))

    }, [dispatch, id])

    if (id.length < 7) {
        return (
            <>
                <Header />
                <SubHeader>Series</SubHeader>
                <h1 className='title-error'>ID erroneo</h1>
            </>
        );
    }

    return (
        <>
            <Header />
            <SubHeader>Series</SubHeader>
            {loading ? (
                <div className='container-flex'>
                    <p className='spinner'></p>
                </div>
            ) : (
                <div className='container'>
                    {serie.map((serie) => (
                        <Series key={serie.id} serie={serie} />
                    ))}
                </div>
            )}
            <ButtonBack comic='comic'/>
        </>
    )
}

export default MainSeries;
