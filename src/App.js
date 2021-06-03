import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Componenst/Login'
import Logout from './Componenst/Logout'
import { selectUser } from './features/userSlice';
const App = () => {
    const user =useSelector(selectUser);
    return (
        <div>
            {
                user?<Logout/>:<Login/>
            }
     
        </div>
    );
}

export default App;

