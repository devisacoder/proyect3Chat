import { useLoginForm } from "../../hooks/useLoginForm"
import { LoginForm } from "./LoginForm"

export const LoginController = () => {
    const { name, setName, handleSubmit } = useLoginForm()

    return(
        <LoginForm
            name={name}
            setName={setName}
            handleSubmit={handleSubmit}
        />
    )
}