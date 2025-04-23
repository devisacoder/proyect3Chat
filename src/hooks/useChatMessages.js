import { useContext } from "react"
import { SocketContext } from "../context/SocketContext"
import { useState } from "react"
import { useEffect } from "react"

export const useChatMessges = () => {
    const socket = useContext(SocketContext)
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const handle = (msg) => {
            setMessages((perv) => [...perv, msg])
        }

        socket.on('chat message', handle)

        return() => socket.off('chat message', handle)

    }, [ socket ])

    
    return messages

}