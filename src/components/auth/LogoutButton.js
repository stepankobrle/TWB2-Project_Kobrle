import React from 'react';
import {useAuth} from "./AuthProvider";

const LogoutButton = () => {
    const { authToken, currentUser, handleLogout } = useAuth();



    return (
        <button onClick={handleLogout} >
            Odhlásit se
        </button>
    );
};

// Styly pro tlačítko


export default LogoutButton;