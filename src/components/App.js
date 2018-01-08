import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ExampleComponent from './ExampleComponent';
import PageNotFound from './PageNotFound';

export default function App() {
  return (
    <div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/example" component={ExampleComponent} />
        <Route component={PageNotFound} />
      </Switch>

      <div />
    </div>
  );
}
