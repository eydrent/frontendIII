import React, {useContext, useState} from 'react';
import {Button, Input, LoginForm, LoginPageWrapper, LoginTitle} from './Login.styled';
import {login} from '../../../services/api';
import {AppContext} from '../../../store/context';
import {useLocation, useNavigate} from 'react-router-dom';

export const LoginPage = () => {
    const {state, dispatch} = useContext(AppContext);
    const {isAuthenticated} = state;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await login(username, password);
            console.log(data);
            if (data) {
                dispatch({type: 'IS_AUTHENTICATED', payload: true});
                console.log(isAuthenticated, 'isAuthenticated');
                // Redirect the user to the previous page after a successful login
                navigate(location.state?.from || '/');
            } else {
                setError('Invalid username or password');
            }
        } catch (err) {
            setError('An error occurred during login');
        }
    };

    if (isAuthenticated) {
        return null;
    }

    return (
        <LoginPageWrapper>
            <LoginTitle>Login</LoginTitle>
            <LoginForm onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit">Login</Button>
            </LoginForm>
            {error && <p>{error}</p>}
        </LoginPageWrapper>
    );
};
