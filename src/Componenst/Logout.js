import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {logout,login, selectUser} from '../features/userSlice'
import './login.css'

const Logout = () => {
    const user=useSelector(selectUser)
    const dispatch =useDispatch();
    const logoutUser=(e)=>{
        e.preventDefault();
        console.log(dispatch(login()));
        dispatch(logout())

    }
    return (
        <div className="login_form">
            <h1 className="logout_name">Welcome <span>{user.name}</span></h1>
            <button onClick={logoutUser} className="logout_btn">logout</button>
        </div>
    );
}

export default Logout;
