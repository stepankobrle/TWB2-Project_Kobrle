import { User } from "../types/user";
import users from '../data/users.json' ; // Načtení JSON souboru

const testUser: User = users[0]; // Použití prvního uživatele z JSONu

export async function getUser() {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulace latence

    const authToken = generateAuthToken();

    return [200, { authToken, user: testUser }] as const;
}





export async function login(email: string, password: string) {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulace latence

    // Najít uživatele podle e-mailu (simulace přihlášení)
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
        throw new Error('Uživatel neexistuje');
    }

    const authToken = generateAuthToken();

    return [200, { authToken, user }] as const;
}

function generateAuthToken() {
    return Math.random().toString(36).substring(2);
}