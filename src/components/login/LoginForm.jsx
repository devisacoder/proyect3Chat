import React from "react";

export const LoginForm = ({ name, setName, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} role="form">
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
            />
            <button type="submit">Login</button>
        </form>
    )
}