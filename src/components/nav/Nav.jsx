import { NavLink } from "react-router-dom";
import logo from "../../assets/image/1.svg";
import { CgMenu } from "react-icons/cg";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
const Nav = () => {
  const scrollToQuestion = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleLinkClick = (callback) => {
    toggleMenu();
    if (callback) callback();
  };
  const [active, setActive] = useState(false)
  const toggleMenu = () => {
    setActive(prevActive => !prevActive);
    
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
    <NavLink
      to="/form"
      className="nav_link"
      aria-labelledby="reviews-label"
    >
      Техподдержка
    </NavLink>
  </li>
</ul>
<button className="nav_btn_active" onClick={toggleMenu} aria-label="Toggle Menu">
      <CgMenu className="nav_btn_active_icon" />
    </button>

    <div className={`${"nav_menu"} ${active ? "active" : ""}`} style={{ zIndex: active ? 1 : -1 }}>
      <ul className="nav_menu_list">
        <li className="nav_menu_item">
          <NavLink  to="/catalog"
      onClick={() => handleLinkClick(() => scrollToQuestion('discountt'))}  className="nav_menu_link">Акции</NavLink>
        </li>
        <li className="nav_menu_item">
        <NavLink
              to="/"
              onClick={() => handleLinkClick(() => scrollToQuestion('reviews'))}
        className="nav_menu_link">Отзывы</NavLink>
        </li>
        <li className="nav_menu_item">
          <NavLink to="/form" className="nav_menu_link" onClick={toggleMenu}>Техподдержка</NavLink>
        </li>
      </ul>
      <button><IoIosClose className="nav_menu_close" onClick={toggleMenu} /></button>
    </div>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;





