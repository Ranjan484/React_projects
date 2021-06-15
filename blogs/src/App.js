import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./screen/Home_screen";
import SingleBlog from "./screen/SingleBlogScreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/single-blogs/:id" component={SingleBlog} exact></Route>
      </Switch>
    </Router>
  );
}

export default App;
