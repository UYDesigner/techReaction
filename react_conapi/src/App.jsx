import { Login } from "./Components/Login"
import { Profile } from "./Components/Profile"
import { UserProvider } from "./Context/UserContext"

function App() {
  return (
    <UserProvider>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '20px' }}>
        <Login />
        <Profile />
      </div>
    </UserProvider>
  );
}

export default App;
