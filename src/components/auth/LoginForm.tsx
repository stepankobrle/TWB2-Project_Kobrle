import React, { useState } from "react";
import { Link, useNavigate, Location } from "react-router-dom";
import { useAuth } from './AuthProvider';

const LoginForm =  () => {
    const {authToken, currentUser, handleLogin, handleLogout} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Získání funkce navigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await handleLogin(email, password);

            // Přesměrování na základě role
            if (currentUser?.role === 'admin') {
                navigate('/admin'); // Přesměrování na /admin pro adminy
            } else {
                navigate('/account'); // Přesměrování na / pro běžné uživatele
            }
        } catch (err) {
            setError('Neplatné přihlašovací údaje');
        }
    };


    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Přihlášení</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Heslo"
                        value={password}
                        onChange={handlePasswordChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
                    >
                        Přihlásit
                    </button>
                </form>
                <div className="mt-4 flex justify-between">
                    <Link
                        to="/forgot-password" // Nahraďte správnou cestou
                        className="text-blue-500 hover:text-blue-600 text-sm"
                    >
                        Zapomenuté heslo?
                    </Link>
                    <Link
                        to="/register" // Nahraďte správnou cestou
                        className="text-blue-500 hover:text-blue-600 text-sm"
                    >
                        Registrace
                    </Link>
                </div>
            </div>
        </div>
    );

};

export default LoginForm;
