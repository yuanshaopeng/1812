//项目入口
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './assets/css/App.css';
import NewsList from './comonent/home';
import Opt from './view/opt';
import UiComp from './view/UiComp';
import R3 from "./comonent/Router3"
//无状态组件 
function App() {
  return (
    <div className="App">
        <Router>
          <Route path="/xx"  component={NewsList}></Route>
          <Route path="/opt/:id" component={Opt}></Route>
          <Route path="/" exact={true} component={UiComp}></Route>
        </Router>
    </div>
  );
}

export default App;
