import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import BoardViews from './components/BoardViews'
import BoardRegister from './components/BoardRegister'
import BoardContent from './components/BoardContent'
import Counter from './components/Counter'

function App() {


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <BoardViews />
          </Route>
          <Route path="/content/:boardId">
            <BoardContent />
          </Route>
          <Route path="/register">
            <BoardRegister />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
