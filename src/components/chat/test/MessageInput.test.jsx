import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useSendMessage } from "../../../hooks/useSendMessage";
import { SocketContext } from "../../../context/SocketContext";
import { UserContext } from "../../../context/UserContext";
import { MessageInput } from "../MessageInput" 

// Mockeamos el hook useSendMessage
jest.mock("../../../hooks/useSendMessage")

// Mockeamos el contexto de UserContext y SocketContext
const mockSendMessage = jest.fn()

const renderWithContext = ( component ) => {
    return render(
        <SocketContext.Provider value={{ emit: jest.fn() }}>
            <UserContext.Provider value={{ username: "Juanito"}}>
                {component}
            </UserContext.Provider>
        </SocketContext.Provider>
    );
};

describe("MessageInput", () => {
    beforeEach(() =>{
        // Reiniciamos las funciones mockeadas antes de cada test
        mockSendMessage.mockClear()
        useSendMessage.mockReturnValue(mockSendMessage)
    });

    test('debe enviar el mensaje correctamente', () => {
        renderWithContext(<MessageInput />);

        // Simulamos que el input tenga texto
        const input = screen.getByPlaceholderText("Escribe un mensaje...");
        fireEvent.change(input, { target: { value: "Hola, ¿cómo estás?"} });

        // Simulamos el envío del formulario
        const button = screen.getByText("Enviar");
        fireEvent.click(button);

        // Aseguramos que el mensaje fue enviado
        expect(mockSendMessage).toHaveBeenCalledTimes(1);
        expect(mockSendMessage).toHaveBeenCalledWith("Hola, ¿cómo estás?", expect.any(Function))
    })

    test("no debe enviar el mensaje si esta vacio", () => {
        renderWithContext(<MessageInput />)

        // Deja el input vacío y simula enviar
        const button = screen.getByText("Enviar")
        fireEvent.click(button)

        // Verificamos que la función mockeada no haya sido llamada
        expect(mockSendMessage).toHaveBeenCalledTimes(0)
    })

    test("debe manejar un error al envair el mensaje", () => {
        renderWithContext(<MessageInput />);

        // Simulamos que el input tenga texto
        const input = screen.getByPlaceholderText("Escribe un mensaje...");
        fireEvent.change(input, { target: { value: "Hola, ¿cómo estás?"} });

        // Simulamos un error en el envío
        mockSendMessage.mockImplementationOnce((text, onError) => onError());
    
        // Simulamos el envío del formulario
        const button = screen.getByText("Enviar");
        fireEvent.click(button);

        // Verificamos que se haya llamado a la función con error
        expect(mockSendMessage).toHaveBeenCalledTimes(1);
        expect(mockSendMessage).toHaveBeenCalledWith("Hola, ¿cómo estás?", expect.any(Function))
    })
})