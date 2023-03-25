// import { Router } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import WatchList from './components/WatchList';
import './App.css';
import NewDetail from './components/newDetail';
import Search from './components/Search';
import SeasonTvDetails from './components/SeasonTvDetails';
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
            <Route  path='/watchList' element={<WatchList />} />
            <Route  path='/detail/:id/:type/Season/:Sno' element={<SeasonTvDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
