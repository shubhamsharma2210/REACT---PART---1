
import './App.css'
import Login from './components/Login'
import Profile from './components/Porfile'
import UserContextProvider from './context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
    <h1>This is shubham sharma to learn Context APi by Hitesh sir</h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
