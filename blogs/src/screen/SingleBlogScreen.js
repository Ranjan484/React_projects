import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import CardInfos from "../data/cardInfo";
import RelatedBlogCardList from "../components/RelatedBlogs";
import "./singleBlog.css";
import CommentList from "./Comments";

const SingleBlog = ({ match }) => {
  const blog = CardInfos.find((card) => card.id === parseInt(match.params.id));
  return (
    <>
      <header>
        <img src={blog.banner_img} alt="blog banner" className="banner-img" />
        <p className="auther">
          {" "}
          {blog.auther}/{new Date().getFullYear()}/{new Date().getMonth()}/
          {new Date().getDate()}
        </p>
        <h2 className="banner-heading">"{blog.title}"</h2>
      </header>
      <div>
        <p className="paragraph">
          We’re living in the era of technology, and technological growth is
          nowhere near stopping. While one of the paths to becoming a programmer
          is to earn a computer science degree, you can still become one without
          a degree.
          <strong style={{ background: "#34d399" }}>
            {" "}
            Many programming jobs don’t require a computer science or an IT
            degree; instead, they’re interested in your coding abilities.{" "}
          </strong>{" "}
          This means that even though a degree would be useful and open several
          doors for you, it isn’t a must.
        </p>
        <p className="paragraph">
          <div className="sb-highlight">
            {/* <RiDoubleQuotesL /> */}
            However, if you were to get a software development or cybersecurity
            diploma, it would certainly look good in the eyes of the hiring
            manager. The same goes for a certificate too; if your CV has
            relevant certificate programs in it, such as network security
            management for example, that along with your skills will leave a
            good impression.
            {/* <RiDoubleQuotesR /> */}
          </div>
        </p>
        <div>
          <img src={blog.body_img} alt="sec-img" className="body-img" />
        </div>
        <h2 className="blog-heading">Computer in every sector</h2>
        <p className="paragraph">
          However, there are other options other than a degree, that could
          potentially help you land a job. For instance,{" "}
          <strong style={{ background: "#34d399" }}>
            if you were to get a software development or cybersecurity diploma,
            it would certainly look good in the eyes of the hiring manager
          </strong>
          . The same goes for a certificate too; if your CV has relevant
          certificate programs in it, such as network security management for
          example, that along with your skills will leave a good impression.
        </p>

        <p className="paragraph">
          The following points will show the use of computer in differents
          sectors
        </p>
        <ul className="list-container">
          <li>
            As we all are student at some points we all know the use of computer
            in education the most.
          </li>
          <li>
            We know how addicted we are at social media and internet. So it aslo
            use in communication.
          </li>
          <li>
            The aim of building the computer was to help in sciencetific
            reasearch.
          </li>
          <li>
            Computer is also use in medical science and reasearch also widely.
          </li>
          <li>One of the most depended sector of computer is busines </li>
        </ul>
        <h2 className="blog-heading">Less programmer available </h2>
        <p className="paragraph">
          Programming is a skill that comes with numerous benefits. Some of the
          advantages that come withIn the world of programming, it is often said
          that coding is all about solving problems, and computer programs
          should solve problems for us.
          <strong style={{ background: "#34d399" }}>
            {" "}
            Learning programming is more or less coding and determining how to
            tackle the issues that arise during coding and finding solutions for
            them
          </strong>
          . The more you get to solve these problems, the more practical it
          becomes. You might even start applying this problem-solving mindset in
          different aspects of your professional life and not only while coding.
        </p>

        <p className="paragraph">
          knowing code are a guaranteed job, getting to create interesting
          applications, developing problem-solving skills, and sometimes even
          the opportunity to work from home. We hope we convinced you to start
          learning to code.
          <strong style={{ textDecoration: "italic" }}> Happy coding!</strong>
        </p>
        <ul className="blog-icons">
          <li>
            <i className="fa fa-heart-o" aria-hidden="false"></i>
          </li>
          <li>
            <i class="fa fa-commenting-o" aria-hidden="false"></i>
          </li>
          <li>
            <i className="fa fa-share" aria-hidden="true"></i>
          </li>
        </ul>
      </div>
      <RelatedBlogCardList />

      <footer>
        <CommentList />
        <div>blogs req</div>
      </footer>
    </>
  );
};
export default SingleBlog;
