import React from 'react'
import { render, screen } from '@testing-library/react'
import * as useChatMessagesModule from '../../../hooks/useChatMessages'
import { UserContext } from '../../../context/UserContext'
import { MessageList } from '../MessageList'

jest.mock("../../../hooks/useChatMessages")

test('debe mostrar los mensajes con el nombre de usuario correto', () => {
    useChatMessagesModule.useChatMessges.mockReturnValue([
        { user: "Juanito", text: "¡Hola!" },
        { user: "Maria", text: "¡Hola, ¿cómo estás?" },    
    ])
    
    render(
        <UserContext.Provider value={{ username: "Juanito" }}>
            <MessageList />
        </UserContext.Provider>
    )

    const message1 = screen.getByText("¡Hola!")
    const message2 = screen.getByText("¡Hola, ¿cómo estás?")

    expect(message1).toBeInTheDocument()
    expect(message2).toBeInTheDocument()

    const message1User = message1.closest('li')
    const message2User = message2.closest('li')

    expect(message1User).toHaveClass('message-me')
    expect(message2User).toHaveClass('message-other')
})
