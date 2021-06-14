import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './NavBar';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <Switch>
            <Route path="/articles" component={ArticleListPage} exact />
            <Route path="/article/:id" component={ArticlePage} />
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
