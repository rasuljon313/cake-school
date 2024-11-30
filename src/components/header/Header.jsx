import img from "../../assets/image/IMG_7557 копия 3 2.png"
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
          <btn className="header_btn">Каталог уроков</btn>
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