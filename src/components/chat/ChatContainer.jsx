import { MessageList } from "./MessageList"
import { MessageInput } from "./MessageInput"

export const ChatContainer = () => {
    return (
        <div className="chat-container">
            <MessageList/>
            <MessageInput/>
        </div>
    )
}