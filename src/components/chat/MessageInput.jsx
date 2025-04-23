import React from "react";
import { useState } from "react"
import { useSendMessage } from "../../hooks/useSendMessage"

export const MessageInput = () => {
    const [ text, setText ] = useState('')
    const sendMessage = useSendMessage()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim()) {
            sendMessage(text, () => 
            console.error('Error al enviar mensaje'));
            setText('');
        }
    }


    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Escribe un mensaje..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Enviar</button>
        </form>
    )
}