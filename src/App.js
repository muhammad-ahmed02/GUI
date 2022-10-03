import { Route, Switch, BrowserRouter } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./pages/Home/Home"

const Error404 = () => <h1>Error 404 - Content not found</h1>

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
