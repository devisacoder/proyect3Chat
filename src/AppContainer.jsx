import { useContext } from "react"
import { UserContext } from "./context/UserContext"
import { ChatContainer } from "./components/chat/ChatContainer"
import { LoginController } from "./components/login/LoginController"

export const AppContainer = () => {
    const { loggedIn } = useContext(UserContext)

    return(
        <>
            {loggedIn ? <ChatContainer /> : <LoginController />}
        </>
    )

}