<<<<<<< HEAD
import { Route } from "react-router";
import Register from "./components/Register";
import Login from "./components/Login";
import Error404 from "./components/Error404";
import Blog from "./pages/blog/blog";
function App() {
  return (
    <>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/blog" component={Blog} />
      <Route path="*" component={Error404}/>
=======
import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Register from './components/Register'
import Login from './components/Login'
import Error404 from './components/Error404'
import Home from './pages/Home'

function App () {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route path="*" component={Error404}/>
        </Switch>
      </BrowserRouter>
>>>>>>> upstream/main
    </>
  )
}

export default App
