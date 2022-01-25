import './App.css';
import HomePage from './pages/HomePage'
import ArticlePage from './pages/ArticlePage';
import ArticlesList from './pages/ArticlesList';
import AboutPage from './pages/AboutPage';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React , {Component} from 'react';
import NavBar from './NavBar';

class App extends Component {
  render () {
    return (
      <div className="App">
        <BrowserRouter>
        <NavBar />
          <Routes>
              <Route path="/" element={ <HomePage/>} exact />
              <Route path="article/:name" element={ <ArticlePage/>} />
              <Route path="articles-list" element={<ArticlesList/>} />
              <Route path="about" element={<AboutPage/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
