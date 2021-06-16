import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./screen/Home_screen";
import SingleBlog from "./screen/SingleBlogScreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/single-blogs/:id" exact component={SingleBlog}></Route>
      </Switch>
    </Router>
  );
}

export default App;
