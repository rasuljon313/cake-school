import logo from "../../assets/image/1.svg"
const Nav = () => {
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
                        <li className="nav_item">Акции</li>
                        <li className="nav_item">Отзывы</li>
                        <li className="nav_item">Техподдержка</li>
                    </ul>
                    <button className="nav_btn">
                    Личный кабинет
                    </button>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Nav