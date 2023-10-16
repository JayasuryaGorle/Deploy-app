import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import GetMovies from './components/GetMovies';
import About from './components/About';
import SignUp from './components/SignUp';
import Login from './components/Login';
import EditProfile from './components/EditProfile'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<About/>}></Route>
      <Route path='/Signup' element={<SignUp/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/GetMovies' element={<GetMovies/>}></Route>
      <Route path='/EditProfile' element={<EditProfile/>}></Route>
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
