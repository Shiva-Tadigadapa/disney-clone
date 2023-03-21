// import { Router } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Recomended from './components/Recomended';
import Detail from './components/Detail';
import './App.css';
import NewDetail from './components/newDetail';
import Search from './components/Search';

function App() {
  return (
    <div className="App"> 
      <Router>
    <Header />
        <Routes>
           <Route  path='/' element={<Login />}>
           </Route>
           <Route  path='/home' element={<Home />}/>
           <Route  path='/detail/:id/:type' element={<NewDetail />} />
           <Route  path='/search/:name' element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
