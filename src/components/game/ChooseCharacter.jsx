import React from 'react';
import Header from '../header/Header';
import SubHeader from '../header/SubHeader';
import { useDispatch, useSelector } from 'react-redux';
import { getPlayer1, getPlayer2 } from '../../redux/actions/game-actions';

const ChooseCharacter = ({ history }) => {
    const dispatch = useDispatch();
    const character1 = useSelector((state) => state.game_reducer.player1);
    const character2 = useSelector((state) => state.game_reducer.player2);
    const characters = useSelector((state) => state.api_reducer.characters);

    const randomCharacter = () => {
        const res = characters.map((character) => {
            const { id, name, thumbnail } = character;
            return {
                id: id,
                name: name,
                img: thumbnail.path + '.' + thumbnail.extension,
            };
        });
        const numrandom = Math.floor(Math.random() * (100 - 0) + 0);
        const choosed = res.find(
            (item, index, arr) => arr.indexOf(item) === numrandom
        );
        return choosed;
    };

    const chooseCharacter1 = () => {
        dispatch(getPlayer1(randomCharacter()));
    };
    
    const chooseCharacter2 = () => {
        dispatch(getPlayer2(randomCharacter()));
    };
    
    const goRounds = () => {
        history.push('/choose/rounds');
    }

    return (
        <>
            <Header />
            <SubHeader>Torneo marvel</SubHeader>
            <div className='container-game'>
                <section className='game game-choose'>
                    <h1 className='title-game'>Selecciona los personajes</h1>
                    <div className='choose-character'>
                        {character1 ? (
                            <div className='container-img-player animation-player'>
                                <img
                                    className='img-player'
                                    src={character1.img}
                                    alt=''
                                />
                                <div className='limit-title'><h3 className='title-name'>{character1.name}</h3></div>
                            </div>
                        ) : (
                            <p className='incognit'>¿</p>
                        )}
                        <div className='container-vs'><span className='vs'>v / s</span></div>
                        {character2 ? (
                            <div className='container-img-player animation-player'>
                                <img
                                    className='img-player'
                                    src={character2.img}
                                    alt=''
                                />
                                <div className='limit-title'><h3 className='title-name'>{character2.name}</h3></div>
                            </div>
                        ) : (
                            <p className='incognit'>?</p>
                        )}
                    </div>
                    <div className='choose-button'>
                        {!character1 ? (
                            <div className='button-left'>
                                <button className='btn-ale' onClick={chooseCharacter1}>
                                    aleatorio
                                </button>
                            </div>
                        ) : null}
                        {!character2 ? (
                            <div className='button-right'>
                                <button className='btn-ale' onClick={chooseCharacter2}>
                                    aleatorio
                                </button>
                            </div>
                        ) : null}
                    </div>
                    {character1 && character2 ? (
                        <button type='button' onClick={goRounds} className='button btn-start animation-btn'>iniciar batalla</button>
                    ) : null}
                </section>
            </div>
        </>
    );
};

export default ChooseCharacter;
