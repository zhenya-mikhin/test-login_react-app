import React from 'react'
import { Switch, Route } from "react-router-dom"
import { Home } from './pages/Home/Home'
import { Profile } from './pages/Profile/Profile'

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
