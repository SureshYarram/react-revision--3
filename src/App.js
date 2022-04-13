import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import { Signup } from './Components/Signup';
import { Login } from './Components/Login';
import { PrivateRoute } from './AllRoutes/PrivateRoute';
import { Home } from './Components/Home';
import { useSelector } from 'react-redux';

function App() {

  const {isAuth} = useSelector((store)=>store.login)
  return (
    <div className="App">
      
      <Routes>
          <Route path="/dashboard" element={<PrivateRoute isAuth={isAuth}>
            <Home/>
          </PrivateRoute>}/>
        <Route path="/signup" element = {<Signup/>}/>
        <Route path="/login" element = {<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
