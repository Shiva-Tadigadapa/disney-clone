// import { Router } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Recomended from './components/Recomended';
import Detail from './components/Detail';
import './App.css';

function App() {
  return (
    <div className="App"> 
      <Router>
    <Header />
        <Routes>
           <Route exact path='/' element={<Login />}>
           </Route>
           <Route exact path='/home' element={<Home />}/>
           <Route exact path='/detail/:id' element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
