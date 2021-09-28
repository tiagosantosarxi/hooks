import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer } from '../../store'

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name}</span> :
                    <span className="text">Sem Utilizador</span>}

                <span className="text">
                    {state.number}
                </span>
                <div>
                    <button className="btn" onClick={() => dispatch({ type: 'login', payload: 'Tiago' })}>Login</button>
                    <button className="btn" onClick={() => dispatch({ type: 'numberAdd2' })}>+2</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
