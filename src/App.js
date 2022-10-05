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
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route path='*' component={Error404} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
