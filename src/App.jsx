import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

import NavState from './context/navState';
import Header from './components/Header/Header';

import MainPage from './page/MainPage/MainPage';
import AboutPage from './page/AboutPage/AboutPage';
import ServicesPage from './page/ServicesPage/ServicesPage';
import ContactsPage from './page/ContactsPage/ContactsPage';


import './assets/style/App.scss';

function App() {

  return (
    <div className="App">
        <Router>
            <NavState>
                <Header/>
            </NavState>
            <Routes>
                <Route path='/' exact={true} element={<MainPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/services' element={<ServicesPage/>}/>
                <Route path='/contacts' element={<ContactsPage/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App
