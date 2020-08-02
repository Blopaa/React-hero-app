import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = ({ history }) => {

    

    const {dispatch } = useContext(AuthContext);
    const [{userName}, handleInputchange] = useForm({
        userName: ''
    })

    const handleLogin = () => {
       
        const lastPath = localStorage.getItem('lastPath') || '/'
            console.log(userName);
            dispatch({
                type: types.login,
                payload: {
                    name: userName
                }
            })

            history.replace(lastPath)
    }

    return (
        <div className="container mt-5">
            <h1>Login screen</h1>
            <hr/>

             <form onSubmit={handleLogin}>
            <input
              value={userName}
              name="userName"
              onChange={handleInputchange}
              type="text"
              placeholder="write your name"
              className="form-control"
              autoComplete="off"
            />
            <button
              type="submit"
              className="btn mt-1 btn-block btn-outline-primary"
            >
              Login
            </button>
          </form>

        </div>
    )
}
