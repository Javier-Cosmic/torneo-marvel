import React, { useEffect } from 'react';
import Header from '../header/Header';
import SubHeader from '../header/SubHeader';
import { useParams } from 'react-router-dom';
import { loadComic } from '../../redux/actions/api-actions';
import { useSelector, useDispatch } from 'react-redux';
import Comic from './Comic';
import ButtonBack from '../home/ButtonBack';

const MainComic = () => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const comic = useSelector((state) => state.api_reducer.comics);
    const loading = useSelector((state) => state.api_reducer.loading);

    useEffect(() => {
        dispatch(loadComic(id));

    }, [dispatch, id]);

    if (id.length < 7) {
        return (
            <>
                <Header />
                <SubHeader>Comics</SubHeader>
                <h1 className='title-error'>ID erroneo</h1>
            </>
        );
    }

    return (
        <>
            <Header />
            <SubHeader>Comics</SubHeader>
            {loading ? (
                <div className='container-flex'>
                    <p className='spinner'></p>
                </div>
            ) : (
                <div className='container'>
                    {comic.map((comic) => (
                        <Comic key={comic.id} comic={comic} />
                    ))}
                </div>
            )}
            <ButtonBack comic='comic'/>
        </>
    );
};

export default MainComic;
