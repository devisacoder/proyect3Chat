import './App.css'
import { SocketProvider } from './context/SocketContext'
import { UserProvider } from './context/UserContext'
import { AppContainer } from './AppContainer'

function App() {
  return (
    <SocketProvider>
      <UserProvider>
        <AppContainer />
      </UserProvider>
    </SocketProvider>
  )
}

export default App
