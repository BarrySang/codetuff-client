import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ShowBlog from './components/ShowBlog';
import Login from './components/authentication/Login';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/blogs/:id" component={ShowBlog}/>
        <Route path="/login" component={Login} />
      </Switch>
    </main>
  )
}

export default App;
