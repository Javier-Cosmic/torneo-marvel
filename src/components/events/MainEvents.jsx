import React, {useEffect} from 'react';
import Header from '../header/Header';
import SubHeader from '../header/SubHeader';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {loadEvent} from '../../redux/actions/api-actions';
import ButtonBack from '../home/ButtonBack';
import Events from './Events';

const MainEvents = () => {
    const {id} = useParams()

    const dispatch = useDispatch();
    const event = useSelector((state) => state.api_reducer.events);
    const loading = useSelector((state) => state.api_reducer.loading);

    useEffect(() => {
        dispatch(loadEvent(id))

    }, [dispatch, id])

    if (id.length < 7) {
        return (
            <>
                <Header />
                <SubHeader>Eventos</SubHeader>
                <h1 className='title-error'>ID erroneo</h1>
            </>
        );
    }

    return (
        <>
            <Header />
            <SubHeader>Eventos</SubHeader>
            {loading ? (
                <div className='container-flex'>
                    <p className='spinner'></p>
                </div>
            ) : (
                <div className='container'>
                    {event.map((event) => (
                        <Events key={event.id} event={event} />
                    ))}
                </div>
            )}
            <ButtonBack comic='comic'/>
        </>
    )
}

export default MainEvents;