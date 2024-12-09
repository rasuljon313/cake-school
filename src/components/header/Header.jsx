import img from "../../assets/image/IMG_7557 копия 3 2.png"
import katalg from "../../assets/image/katalgimg.svg"
import katalgA from "../../assets/image/header_btn.svg"
const Header = () => {
  return (
    <>
  <header>
  <div className="header">
    <div className="container">
      <div className="header_box">
        <div className="header_list">
          <h2 className="header_title">MATU SCHOOL</h2>
          <p className="header_txt">Научись готовить самые <span>вкусные, натуральные</span> и разнообразные десерты!</p>
          <btn className="header_btn">
          <a href="/catalog">
            <img src={katalg} alt="catalog" />
            </a>
            </btn>
          <btn className="header_btn active">
          <a href="/catalog">
            <img src={katalgA} alt="catalog" />
            </a>
            </btn>
        </div>
        <div className="header_img">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  </div>
  </header>
    </>
  )
}

export default Header