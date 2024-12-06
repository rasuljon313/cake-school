import { NavLink } from "react-router-dom";
import logo from "../../assets/image/1.svg";
import ownerimg from "../../assets/image/779c1af5-no-bg-HD (carve 4.png";
import katalg from "../../assets/image/katalgimg.svg";
const Cabinate = () => {
  return (
    <>
      <header>
        <div className="cabinate">
          <div className="container">
            <div className="cabinate_box">
              <nav className="cabinate_nav_box">
                <ul className="cabinate_nav_list">
                  <li className="cabinate_nav_item">
                    <NavLink to="/">
                      <div className="cabinate_nav_logo">
                        <img src={logo} alt="cabinate_nav-logo" />
                        <p>Онлайн школа для кондитеров</p>
                      </div>
                    </NavLink>
                  </li>
                  <li className="cabinate_nav_item">
                    <p className="cabinate_nav_item_txt">Личный кабинет</p>
                  </li>
                </ul>
              </nav>
              <div className="cabinate_card">
                <h3 className="cabinate_title">мое почтение !</h3>
                <p className="cabinate_txt">
                  На этой странице вы найдете материалы урока. Готовьте с
                  удовольствием !
                </p>
                <btn className="cabinate_btn">
                  <a href="/catalog">
                    <img src={katalg} alt="catalog" />
                  </a>
                </btn>
              </div>
              <div className="cabinate_img">
                <img className="cabinate_owner" src={ownerimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Cabinate;
