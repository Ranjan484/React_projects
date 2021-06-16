import CardInfos from "../data/cardInfo";
import BodyNav from "../components/bodyNav.Screen";
import { Link } from "react-router-dom";
// import "../index.css";

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

const BlogCard = (props) => {
  const { id, banner_img, title, card_text, views, comments, likes } = props;

  return (
    <article className="container-items">
      <div className="top-container">
        <ul>
          <li className="first-top-container">
            <i className="fa fa-eye" aria-hidden="true"></i>
            {views}
          </li>
          <li className="second-top-container">
            <i class="fa fa-heart-o" aria-hidden="true"></i>
            {likes}
          </li>
          <li className="third-top-container">
            <i className="fa fa-comment-o" aria-hidden="true"></i>
            {comments}
          </li>
        </ul>
        <img src={banner_img} className="img" />
      </div>
      <h2>{title}</h2>
      <p className="card-text">{card_text}</p>
      <button type="button" className="btn">
        <Link to={`/single-blogs/${id}`}>Read</Link>
      </button>
    </article>
  );
};

function BlogCardList() {
  const newList = CardInfos.map((card) => {
    return <BlogCard key={card.id} {...card} />;
  });

  return (
    <>
      <div className="container">{newList}</div>
    </>
  );
}
