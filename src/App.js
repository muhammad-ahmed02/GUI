import { Route, Switch, BrowserRouter } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import Error404 from "./components/Error404";

function App() {
  return (
    <>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route path="*" component={Error404}/>
    </>
  );
}

export default App;
