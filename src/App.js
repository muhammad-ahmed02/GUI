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
    </>
  );
}

export default App;
