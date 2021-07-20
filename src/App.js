import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ShowBlog from './components/ShowBlog';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/blogs/:id" component={ShowBlog}/>
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/signup" component={Signup} />
      </Switch>
    </main>
  )
}

export default App;
