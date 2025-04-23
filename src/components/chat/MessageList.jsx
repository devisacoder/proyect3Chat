import React from 'react'
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { Message } from "./Message"
import { useChatMessges } from "../../hooks/useChatMessages"

export const MessageList = () => {
    const messages = useChatMessges() 
    const { username } = useContext(UserContext)

    return (
        <ul className='ul-message'>
            {messages.map((msg, index) => (
                <li
                    key={index}
                    className={
                        msg.user === username 
                        ? 'message-me' 
                        : 'message-other'
                    }
                >
                    <Message user={msg.user} text={msg.text}/>
                </li>
            ))}
        </ul>
    )
}