import { useContext } from "react"
import { SocketContext } from "../context/SocketContext"
import { UserContext } from "../context/UserContext"

export const useSendMessage = () => {
    const socket = useContext(SocketContext)
    const { username } = useContext(UserContext)

    return (text, onError) => {
        socket.emit('chat message', { name: username, text }, (response) => {
            if(response.status !== 'ok') {
                onError?.()
            }
        })
    }
}