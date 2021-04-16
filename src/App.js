import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ShowBlog from './components/ShowBlog';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/showblogs/:id" component={ShowBlog}/>
      </Switch>
    </main>
  )
}

export default App;
