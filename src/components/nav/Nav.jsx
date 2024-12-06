import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/image/1.svg";
import kabinet from "../../assets/image/kabinet.svg"
const Nav = () => {
  const scrollToQuestion = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav>
        <div className="nav">
          <div className="container">
            <div className="nav_box">
            <NavLink to="/">
              <div className="nav_logo">
              
              <img src={logo} alt="nav-logo" />
              <p>Онлайн школа для кондитеров</p>
                  
              </div>
              </NavLink>
              <ul className="nav_list">
  <li className="nav_item">
    <NavLink
    to="/catalog"
      onClick={() => scrollToQuestion('discountt')}
      className="nav_link"
    >
      Акции
    </NavLink>
  </li>
  <li className="nav_item">
    <NavLink
      to="/"
      onClick={() => scrollToQuestion('reviews')}
      className="nav_link"
      aria-labelledby="reviews-label"
    >
      Отзывы
    </NavLink>
  </li>
  <li className="nav_item">
    <Link to="/form">Техподдержка</Link>
  </li>
</ul>
              <button className="nav_btn" aria-label="Личный кабинет">
                <NavLink to="/cabinate">
                <img src={kabinet} alt="кабинет" />
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;





