import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import { UserContext } from "../context/UserContext";

export const useRegisterUser = () => {  
    const socket = useContext(SocketContext);
    const { setUserName } = useContext(UserContext)

    return(name, onSuccess, onError) => {
        socket.emit('register user', {name}, (response) => {
            if(response.status === 'ok') {
                setUserName(name)
                onSuccess?.()
            } else {
                onError?.()
            }
        })
    }
}