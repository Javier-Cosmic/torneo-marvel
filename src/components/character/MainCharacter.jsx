import React, {useEffect} from 'react'
import Header from '../header/Header';
import {useSelector, useDispatch} from 'react-redux';
import {loadCharacter} from '../../redux/actions/api-actions';

const MainCharacter = () => {
    const dispatch = useDispatch();
    const character = useSelector((state) => state.api_reducer.character);

    useEffect(() => {

        const loadingCharacter = () => {

            dispatch(loadCharacter());
        }

        loadingCharacter()

    }, [])

    return (
        <div>
            <Header />
            <h1>Personajes</h1>
        </div>
    )
}

export default MainCharacter