import React from 'react'
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

const ProtectedRoute = ({ component: Component, ...props}) => {

    const round = useSelector((state) => state.game_reducer.round);

    return (
        <Route {...props}
            render={
                props => round === 0
                ? <Redirect to='/' />
                : <Component {...props} />
            }
            
        />
    )
}

export default ProtectedRoute
