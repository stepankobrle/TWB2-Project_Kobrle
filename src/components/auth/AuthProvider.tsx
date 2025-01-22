// Importování potřebných modulů a typů
import React from 'react'; // Import Reactu
import { getUser, login } from '../../api/auth'; // Funkce pro získání uživatele a přihlášení
import { User } from '../../types/user'; // Typ pro uživatele
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie'; // Import knihovny pro práci s cookies

// Definice typu pro kontext autentizace
type AuthContext = {
    authToken?: string | null; // Token pro autentizaci
    currentUser?: User | null; // Aktuální přihlášený uživatel
    handleLogin: (email: string, password: string) => Promise<void>; // Funkce pro přihlášení
    handleLogout: () => Promise<void>; // Funkce pro odhlášení
};

// Vytvoření kontextu pro autentizaci
const AuthContext = createContext<AuthContext | undefined>(undefined);

// Typ pro props komponenty AuthProvider
type AuthProviderProps = PropsWithChildren;

// Hlavní komponenta AuthProvider, která obaluje celou aplikaci a poskytuje autentizační data
export default function AuthProvider({ children }: AuthProviderProps) {
    const [authToken, setAuthToken] = useState<string | null>(null);
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    // Efekt, který se spustí při prvním renderování komponenty
    useEffect(() => {
        const savedToken = Cookies.get('authToken');
        const savedUser = Cookies.get('currentUser');

        if (savedToken && savedUser) {
            setAuthToken(savedToken);
            setCurrentUser(JSON.parse(savedUser));
        } else {
            // Pokud nejsou údaje v cookies, načtěte je z API
            async function fetchUser() {
                try {
                    const response = await getUser();
                    const { authToken, user } = response[1];

                    setAuthToken(authToken);
                    setCurrentUser(user);

                    Cookies.set('authToken', authToken, { expires: 7 }); // Uložení tokenu do cookies na 7 dní
                    Cookies.set('currentUser', JSON.stringify(user), { expires: 7 }); // Uložení uživatele do cookies na 7 dní
                } catch {
                    setAuthToken(null);
                    setCurrentUser(null);
                }
            }

            fetchUser();
        }
    }, []);




    // Funkce pro přihlášení
    async function handleLogin(email: string, password: string) {
        try {
            const response = await login(email, password);

            if (response && response[1]) {
                const { authToken, user } = response[1];

                setAuthToken(authToken);
                setCurrentUser(user);

                Cookies.set('authToken', authToken, { expires: 7 }); // Uložení tokenu do cookies na 7 dní
                Cookies.set('currentUser', JSON.stringify(user), { expires: 7 }); // Uložení uživatele do cookies na 7 dní

            } else {
                throw new Error('Neplatná odpověď z API');
            }
        } catch (err) {
            setAuthToken(null);
            setCurrentUser(null);
            throw err;
        }
    }




    // Funkce pro odhlášení
    async function handleLogout() {
        // Nastavení tokenu a uživatele na null
        setAuthToken(null);
        setCurrentUser(null);

        // Odstranění údajů z cookies
        Cookies.remove('authToken');
        Cookies.remove('currentUser');
    }

    // Vrácení provideru s hodnotami, které budou sdíleny v kontextu
    return (
        <AuthContext.Provider
            value={{
                authToken,
                currentUser,
                handleLogin,
                handleLogout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}





// Vlastní hook pro použití autentizačního kontextu
export function useAuth() {
    const context = useContext(AuthContext);

    // Kontrola, zda je hook používán uvnitř AuthProvideru
    if (context === undefined) {
        throw new Error('useAuth must be used inside of a AuthProvider');
    }

    return context;
}