import img from "../../assets/image/mainckake.png"
import dot from "../../assets/image/3....png"
import katalg from "../../assets/image/katalgimg.svg"
import CatalogCard from "./CatalogCard"
import cocolate from "../../assets/image/chocolate.png"
import cocolate1 from "../../assets/image/absolute11.svg"
import cocolate2 from "../../assets/image/absolite2.svg"
import cocolate3 from "../../assets/image/absolute3.svg"
import cocolate4 from "../../assets/image/absolute4.svg"
import cocolate5 from "../../assets/image/absolute5.svg"
import cocolate6 from "../../assets/image/absolute6.svg"
import cocolate7 from "../../assets/image/abcolute7.svg"
import img1 from "../../assets/image/discount-btn.png"
import Studens from "../training/Studens"
import Recipe from "../recipe/Recipe"
import CackeSwiper from "../training/CackeSwiper"
const Katalg = () => {
    const scrollToQuestion = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
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
          <btn className="katalg_btn" onClick={()=> scrollToQuestion("catalg")}>
            <img src={katalg} alt="" />
            </btn>
        </div>
        <div className="katalg_img">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  </div>
  </header>
  <CatalogCard/>
  <section>
    <div className='discount' id="discountt">
        <div className="container">
            <div className="discount_box">
                <ul className="discount_list">
                    <li className="discount_item">
                      <p className="discount_item_txt">
                      Вы можете купить все рецепты со скидкой 
                      30% за <span>39 000 сум</span>
                      </p>
                      <a href="/form" className="discount_btn">
                        <img src={img1} alt="" />
                      </a>
                    </li>
                    <li className="discount_item_images">
                        <img className="discount_item_img" src={cocolate} alt="" />
                        <img className="discount_item_img1" src={cocolate1} alt="" />
                        <img className="discount_item_img2" src={cocolate2} alt="" />
                        <img className="discount_item_img3" src={cocolate3} alt="" />
                        <img className="discount_item_img4" src={cocolate4} alt="" />
                        <img className="discount_item_img5" src={cocolate5} alt="" />
                        <img className="discount_item_img6" src={cocolate6} alt="" />
                        <img className="discount_item_img7" src={cocolate7} alt="" />
                    </li>
                    <li className="discount_item">
                      <p className="discount_item_txt">
                      Или вы можете купить все рецепты тортов со скидкой 30% за <span>19 990</span>
                      </p>
                      <a href="/form" className="discount_btn">
                        <img src={img1} alt="" />
                      </a>
                    </li>
                </ul>
            </div>
            
        </div>
     </div>
   <Studens/>
   <Recipe/>
   <CackeSwiper/>
    </section>
    </>
  )
}

export default Katalg