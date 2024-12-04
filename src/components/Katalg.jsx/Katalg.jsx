import { Link } from "react-router-dom"
import img from "../../assets/image/mainckake.png"
import dot from "../../assets/image/3....png"
import katalg from "../../assets/image/katalgimg.svg"
const Katalg = () => {
  return (
    <>
   <header>
  <div className="katalg">
    <div className="container">
      <div className="katalg_box">
        <div className="katalg_list">
          <h2 className="katalg_title">Видео-уроки</h2>
          <p className="katalg_texno">Технологические карты</p>
          <p className="katalg_txt">
            <img src={dot} alt="dot" />
            Более 30 авторских
          и проверенных рецептов тортов</p>
          <btn className="katalg_btn">
            <Link to="/catalog">
            <img src={katalg} alt="" />
            </Link>
            </btn>
        </div>
        <div className="katalg_img">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  </div>
  </header>
    </>
  )
}

export default Katalg