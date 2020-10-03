import React, { useEffect } from 'react';
import Header from '../header/Header';
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
        const loadingComic = () => {
            dispatch(loadComic(id));
        };

        loadingComic();
    }, [dispatch, id]);

    if (id.length < 7) {
        return (
            <>
                <Header />
                <h1 className='title-error'>No existe el ID</h1>
            </>
        );
    }

    return (
        <div>
            <Header />
            <h1 className='title-header'>Comics</h1>
            {loading ? (
                <div className='container-flex'>
                    <p className='spinner'></p>
                </div>
            ) : (
                <div className='container'>
                    {comic.map((comic) => (
                        <Comic key={comic.id} comic={comic} id={id} />
                    ))}
                </div>
            )}
            <ButtonBack />
        </div>
    );
};

export default MainComic;
