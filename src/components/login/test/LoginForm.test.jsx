import React from "react";
import { render, screen, fireEvent } from "@testing-library/react"
import { LoginForm } from "../LoginForm"
import { useState } from "react";


//1. Test: que renderice correctamente
test("debe renderizar el input y el boton", () => {
    render(<LoginForm name="" setName={() => {}} handleSubmit={() => {}}/>);

    expect(screen.getByPlaceholderText("Tu nombre")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument()
})


//2. Test: que actualice el nombre cuando se escribe
test("debe llamar a setName cuando el usuario escribe", () => {
    const mockSetName = jest.fn()

    render(<LoginForm name="" setName={mockSetName} handleSubmit={() => {}}/>)

    const input = screen.getByPlaceholderText("Tu nombre")
    fireEvent.change(input, { target: { value: "Isabel"}})

    expect(mockSetName).toHaveBeenCalledWith("Isabel")
})


//3. Test: que llame a handleSubmit al enviar el formulario
test("debe llamar a handleSubmit al enviar el formulario", () => {
    const mockHandleSubmit = jest.fn()

    render(<LoginForm name ="Isabel" setName={() => {}} handleSubmit={mockHandleSubmit} />)

    const form = screen.getByRole("form") || screen.getByRole("textbox").closest("form")
    fireEvent.submit(form)

    expect(mockHandleSubmit).toHaveBeenCalled()
})


// Este es un ejemplo más completo con useState incluido (simulando el comportamiento real):
test("flujo completo: escribir nomre y enviar el formulario", () => {
    const mockHandleSubmit = jest.fn()

    const Wrapper = () => {
        const [name, setName] = useState("")

        return(
            <LoginForm 
                name={name}
                setName={setName}
                handleSubmit={mockHandleSubmit}
            />
        );
    };

    render(<Wrapper />)

    fireEvent.change(screen.getByPlaceholderText("Tu nombre"), {
        target: { value: "Isabel"}
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i}));

    expect(mockHandleSubmit).toHaveBeenCalled()
})