import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/UserContext';


export const Login = () => {
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({userName, password})
    }
    return (
        <div>
            <h1>Login</h1>
            <div className="btn">
                <input type="text" value={userName} placeholder='username' onChange={(e) => setUserName(e.target.value)} />
                <input type="password" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <input type="button" value="Submit" onClick={handleSubmit} />
            </div>
        </div>
    )
}
