import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header-bg">
            <NavLink to="/home" className="header" activeClassName="active">Home</NavLink>
            <NavLink to="/private" className="header" activeClassName="active">Private</NavLink>

            {user?.email || user?.photoURL ?
                <span>
                    <span className="text-white"><span>User: {user.displayName}{<img width='40px' src={user?.photoURL} />}</span></span>
                    < NavLink to="/" className="header mx-5" activeClassName="active"><button className="btn btn-danger" onClick={logOut}>Log-uot</button></NavLink>
                </span>
                :
                <NavLink to="/login" className="header" activeClassName="active">Log-in</NavLink>
            }


        </div >
    );
};

export default Header;


