import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

// components
import Register from './components/Register';
import Login from './components/Login';
import Error404 from './components/Error404';
import Navbar from './components/Navbar';
import DropMenu from './components/DropMenu';

// Pages
import Home from './pages/Home';
import Blog from './pages/blog/blog';

function App() {
  const isDesktop = useMediaQuery('(min-width:780px)');

  return (
    <BrowserRouter>
      {isDesktop ? <Navbar /> : <DropMenu />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/blog" component={Blog} />
        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
