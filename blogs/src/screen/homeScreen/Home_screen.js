import BodyNav from "../../components/bodyNav";
import BlogCardList from "../../components/BlogCard";
import "./index.css";
import { useState } from "react";
import CardInfos from "../../data/cardInfo";

const Home = () => {
  const [cards, setCards] = useState(CardInfos);
  const [search, setSearch] = useState([]);

  const filterItems = (category) => {
    if (category === "all") {
      setCards(CardInfos);
    } else {
      const newlist = CardInfos.filter((item) => item.category === category);
      setCards(newlist);
    }
  };

  const handleSearch = () => {
    if (search) {
      filterItems(search);
      setSearch("");
    }
  };
  return (
    <>
      <div className="hero">
        <h6 className="hero-text">Achiever Group and research center blogs</h6>
        <div className="search-input">
          <input
            type="text"
            placeholder="Search blogs"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <i
            className="fa fa-search fa-2x"
            aria-hidden="true"
            onClick={handleSearch}
          ></i>
        </div>
      </div>

      <BodyNav filterItems={filterItems} />
      <br />
      <hr></hr>
      <BlogCardList cards={cards} />
    </>
  );
};
export default Home;
