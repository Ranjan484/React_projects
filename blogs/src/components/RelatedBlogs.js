import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import SilderData from "../data/silder";
import { Link } from "react-router-dom";

function RelatedBlogCardList() {
  const [cards, setCards] = useState(SilderData);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = cards.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, cards]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h3>Related Blog Post</h3>
      </div>
      <div className="section-center">
        {cards.map((card, cardIndex) => {
          const { id, banner_img, title, card_text, views, comments, likes } =
            card;

          let position = "nextSlide";
          if (cardIndex === index) {
            position = "activeSlide";
          }
          if (
            cardIndex === index - 1 ||
            (index === 0 && cardIndex === cards.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <main className="sb-container-items" className={position}>
              <div className="sb-top-container">
                <ul>
                  <li className="first-top-container">
                    <i className="fa fa-eye" aria-hidden="true"></i>
                    {views}
                  </li>
                  <li className="second-top-container">
                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                    {likes}
                  </li>
                  <li className="third-top-container">
                    <i className="fa fa-comment-o" aria-hidden="true"></i>
                    {comments}
                  </li>
                </ul>
                <img src={banner_img} className="sb-img" />
              </div>
              <div>
                <h2 className="sb-card-title">{title}</h2>
              </div>
              <p className="sb-card-text">{card_text}</p>
              <button type="button" className="btn">
                <Link to={`/single-blogs/${id}`}>Read</Link>
              </button>
            </main>
          );
        })}
      </div>
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>
    </section>
  );
}

export default RelatedBlogCardList;
