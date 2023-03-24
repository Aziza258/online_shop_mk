import React from 'react'
import Login from './Login';
import LogOut from './LogOut';
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'


const ListNavbar = () => {


    const [user] = useAuthState(auth)


    return (
        <div>
            {user ? <LogOut /> : <Login />}
        </div>
    )
}

export default ListNavbar