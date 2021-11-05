import { Route } from "react-router";
import Register from "./components/Register";

function App() {
  return <Route exact path="/register" component={Register} />;
}

export default App;
