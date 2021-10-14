import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { handleGoogleSignIn } = useAuth();
    return (
        <div className="m-5">
            <h2>This is Log-in</h2><br />
            <input type="email" placeholder="Your email" /><br />
            <input type="password" placeholder="Your password" /><br />
            <input type="submit" value="Submit" /><br /><br />
            <div>-----or-----</div><br />
            <Button onClick={handleGoogleSignIn}>Sign in with Google</Button>
        </div>
    );
};

export default Login;