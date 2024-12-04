// import { NavLink } from "react-router-dom"
// import logo from "../../assets/image/1.svg"
// const Nav = () => {
//   return (
//     <>
//     <header>
//         <div className="nav">
//             <div className="container">
//                 <div className="nav_box">
//                     <div className="nav_logo">
//                         <img src={logo} alt="nav-logo" />
//                     <p>Онлайн школа для кондитеров</p> 
//                     </div>
//                     <ul className="nav_list">
//                         <li className="nav_item"> <NavLink to="/" >Акции</NavLink></li>
//                         <li className="nav_item"> <NavLink to="/" >Отзывы</NavLink></li>
//                         <li className="nav_item"> <NavLink to="/form" >Техподдержка</NavLink></li>
//                     </ul>
//                     <button className="nav_btn">
//                     Личный кабинет
//                     </button>
//                 </div>
//             </div>
//         </div>
//     </header>
//     </>
//   )
// }

// export default Nav

// default vatiant






import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/image/1.svg";

const Nav = () => {
  const scrollToQuestion = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header>
        <div className="nav">
          <div className="container">
            <div className="nav_box">
              <div className="nav_logo">
                <img src={logo} alt="nav-logo" />
                <p>Онлайн школа для кондитеров</p>
              </div>
              <ul className="nav_list">
              <li className="nav_item">
              <li className="nav_item">
              <NavLink
                    to="/catalog"
                    onClick={() => scrollToQuestion('discount')}
                    className="nav_link"
                  >
                    Акции
                  </NavLink>

                </li>
              </li>
                <li className="nav_item">
                <NavLink
                    to="/"
                    onClick={() => scrollToQuestion('reviews')}
                    className="nav_link"
                  >
                    Отзывы
                  </NavLink>
                </li>
                <li className="nav_item">
                  <Link to="/form">Техподдержка</Link>
                </li>
              </ul>
              <button className="nav_btn">
                Личный кабинет
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;

// otziv ishlashi




