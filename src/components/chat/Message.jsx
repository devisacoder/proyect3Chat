import React from 'react';

export const Message = ({ user, text }) => {
    return (
        <div>
            <strong>{user}:</strong> {text}
        </div>
    )
}