import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {login} from '../features/userSlice'
import './login.css'

const Login = () => {
    const [state, setState] = useState({
        name:'',
        email:'',
        password:''
    });

    const{name,email,password}=state;
    const handleChange =name =>e =>{
        e.preventDefault();
        setState({...state,[name]:e.target.value});
    }
    const dispatch =useDispatch();

    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(login
            ({
            name:name,
            email:email,
            password:password,
            loggedin:false
        })
        )
    }
    return (
        <div className="login" onSubmit={(e)=>{handleSubmit(e)}}>
            <form className="login_form">
                <h1>login Here 😍</h1>
                <input type="text" placeholder="Name" className="form_items" value={name} onChange={handleChange('name')}/>
                <input type="email" placeholder="email" className="form_items" value={email} onChange={handleChange('email')}/>
                <input type="password" placeholder="password" className="form_items" value={password} onChange={handleChange('password')}/>
                <button type="submit" className="submit_btn">Submit</button>
            </form>
        </div>
    );
}

export default Login;
