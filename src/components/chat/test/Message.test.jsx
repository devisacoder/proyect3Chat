import React from "react"
import { render,screen } from "@testing-library/react"
import { Message } from "../Message"

test('debe mostrar el nombre de usuario en el mensaje', () => {
    render(<Message user="Juanito" text="Hola, ¿cómo estás?" />)
    const message = screen.getByText(/Juanito:/)
    expect(message).toBeInTheDocument()
})