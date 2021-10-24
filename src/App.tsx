import React from 'react'
import { Switch, Route } from "react-router-dom"
import { routes } from './routes'

const App = () => {
  return (
    <div className="container">
      <Switch>
        {routes.map(route => (
          <Route
            key={route.name}
            path={route.path}
            exact={route.isExact}
            component={route.component} />
        ))}
      </Switch>
    </div>
  );
}

export default App;
