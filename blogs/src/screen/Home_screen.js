import BodyNav from "../components/bodyNav.Screen";
import BlogCardList from "../components/BlogCard";

import "./index.css";

const Home = () => {
  return (
    <>
      <div className="hero">
        <h6 className="hero-text">Achiever Group and research center blogs</h6>
        <div className="search-input">
          <input type="text" placeholder="Search blogs" />
          <i className="fa fa-search fa-2x" aria-hidden="true"></i>
        </div>
      </div>

      <BodyNav />
      <br />
      <hr></hr>
      <BlogCardList />
    </>
  );
};
export default Home;
