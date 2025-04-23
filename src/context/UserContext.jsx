import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [ username, setUserName ] = useState('')

    const loggedIn = username !== '';

    return <UserContext.Provider value={{ username, setUserName, loggedIn }}> {children} </UserContext.Provider>
}