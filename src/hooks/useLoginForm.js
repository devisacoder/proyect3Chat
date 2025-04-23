import { useState } from "react"
import { useRegisterUser } from "./useRegisterUser"

export const useLoginForm = () => {
    const [name, setName] = useState("")
    const register = useRegisterUser()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name) return 

        register(
            name, 
            () => {
                console.log('Usuario registrado y logueado');
            }, 
            () => {
                console.error('Error al registrar usuario');
            }
        );
    };

    return {
        name,
        setName,
        handleSubmit,
    };
}