import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, image, text, job } = people[index];

  const checkFunc = (number) => {
    if (number < 0) {
      return people.length - 1;
    }
    if (number > people.length - 1) {
      return 0;
    }
    return number;
  };

  const randomNum = () => {
    let num = Math.floor(Math.random() * people.length);
    if (num === index) {
      num = index + 1;
    }
    setIndex(checkFunc(num));
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="auther">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button
          className="prev-btn"
          onClick={() =>
            index >= 1 ? setIndex(index - 1) : setIndex(people.length - 1)
          }
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={() =>
            index <= people.length - 2 ? setIndex(index + 1) : setIndex(0)
          }
        >
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomNum}>
        suprise me
      </button>
    </article>
  );
};

export default Review;
