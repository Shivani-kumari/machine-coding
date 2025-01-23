import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import App from './App';
import Timer from './stop-watch/Timer';
import Loader from './stop-watch/Loader/Loader';
import Card from './responsiveLayout/Card';
import SearchResult from './search-result/SearchResult';

export default function AppRouter() {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/timer">Timer</Link></li>
                    <li><Link to="/loader">Loader</Link></li>
                    <li><Link to="/responsiveLayout">Responsive Layout</Link></li>
                    <li><Link to="/searchResult">Search Results</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/timer" element={<Timer />} />
                <Route path="/loader" element={<Loader />} />
                <Route path='/responsiveLayout' element={<Card/>}/>
                <Route path='/searchResult' element={<SearchResult/>}/>
            </Routes>
        </Router>
    );
}
