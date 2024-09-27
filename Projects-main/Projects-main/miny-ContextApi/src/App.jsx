import './App.css';
import UserContextProvider from './Contextt/UesrContextProvider';
import Login from './components/Login';
import User from './components/user';

function App() {
  return (
    <UserContextProvider>
      <h1>Ankit Jangid</h1>
      <Login />
     <User/>
    </UserContextProvider>
  );
}

export default App;
