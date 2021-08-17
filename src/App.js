import React from 'react'
import SideBar from './Components/Headers/manager/SideBar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Pages from './Components/Pages';

function App() {
  return (
      <Router>
        <div className="App">
          <SideBar />
          <Pages />
        </div>
      </Router>
  );
}

export default App;
