import { Route } from "react-router";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Route exact path="/register" component={Register} />,
      <Route exact path="/login" component={Login} />
    </>
  );
}

export default App;
