import { BrowserRouter } from "react-router-dom";

import './App.css';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Navigation from './components/Navbar';
import MenuList from './components/MenuList';
import MenuForm from './components/MenuForm';

import 'bootswatch/dist/lux/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={MenuList}/>
          <Route exact path="/new-menu" component={MenuForm}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
