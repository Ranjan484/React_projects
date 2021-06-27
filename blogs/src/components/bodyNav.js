import { useState } from "react";

const BodyNav = ({ filterItems }) => {
  const [translate, setTranslate] = useState("navUnderline");

  const handleFilterItems = (category, translate) => {
    filterItems(category);
    setTranslate(translate);
  };
  return (
    <>
      <header className="header">
        <nav>
          <ul className="nav_links">
            <li>
              <a
                href="#"
                onClick={() => handleFilterItems("all", "all-navUnderline div")}
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() =>
                  handleFilterItems("admin", "admin-navUnderline div")
                }
              >
                Admins
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() =>
                  handleFilterItems("students", "students-navUnderline div")
                }
              >
                Students
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() =>
                  handleFilterItems("teachers", "teachers-navUnderline div")
                }
              >
                Teachers
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() =>
                  handleFilterItems("users", "users-navUnderline div")
                }
              >
                Users
              </a>
            </li>
          </ul>
          <div className="navUnderlineContainer">
            <div className={`navUnderline + ${translate}`}></div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default BodyNav;
