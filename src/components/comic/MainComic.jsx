import React, {useEffect} from 'react'
import Header from '../header/Header';
import {useParams} from 'react-router-dom';
import {loadComic} from '../../redux/actions/api-actions';
import {useSelector, useDispatch} from 'react-redux';
import Comic from './Comic';

const MainComic = () => {
    const {id} = useParams();

    const dispatch = useDispatch();
    const comic = useSelector((state) => state.api_reducer.comics);
    const loading = useSelector((state) => state.api_reducer.loading);

    useEffect(() => {
        const loadingComic = () => {
            dispatch(loadComic(id));
        }

        loadingComic();

    }, [dispatch])

    return (
        <div>
            <Header />

            {loading ? <h1>cargando...</h1>
            
                : <>
                    {comic.map(comic => (
                <Comic 
                    key={comic.id}
                    comic={comic}
                />
            ) )}
                </>
            }
            
        </div>
    )
}

export default MainComic