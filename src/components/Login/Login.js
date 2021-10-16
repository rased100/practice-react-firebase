import { GithubAuthProvider } from '@firebase/auth';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { handleGoogleSignIn, handleGithubSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    // console.log('rased', redirect_uri)

    const handleGoogleSignInTwo = () => {
        handleGoogleSignIn()
            .then((result) => {
                history.push(redirect_uri);
            })
            .catch(error => {
                // setError(error.message);
                console.log(error.message);
            })
    }

    const handleGithubSignInTwo = () => {
        handleGithubSignIn()
            .then((result) => {
                history.push(redirect_uri);
            })
            .catch((error) => {
            });
    }

    return (
        <div className="m-5">
            <h2>This is Log-in</h2><br />
            <input type="email" placeholder="Your email" /><br />
            <input type="password" placeholder="Your password" /><br />
            <input type="submit" value="Submit" /><br /><br />
            <div>-----or-----</div><br />
            <Button onClick={handleGoogleSignInTwo}>Sign in with Google</Button><br /><br />
            <Button onClick={handleGithubSignInTwo}>Sign in with Git-hub</Button>
        </div>
    );
};

export default Login;