import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./screen/Home_screen";
import SingleBlog from "./screen/SingleBlogScreen";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/single-blogs/:id" exact component={SingleBlog}></Route>
      </Switch>
    </Router>
  );
}

export default App;
