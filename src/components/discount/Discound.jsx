import cocolate from "../../assets/image/chocolate.png"
import cocolate1 from "../../assets/image/absolute11.svg"
import cocolate2 from "../../assets/image/absolite2.svg"
import cocolate3 from "../../assets/image/absolute3.svg"
import cocolate4 from "../../assets/image/absolute4.svg"
import cocolate5 from "../../assets/image/absolute5.svg"
import cocolate6 from "../../assets/image/absolute6.svg"
import cocolate7 from "../../assets/image/abcolute7.svg"
import img1 from "../../assets/image/discount-btn.png"
const Discound = () => {
  return (
    <>

     <div className="discount">
        <div className="container">
            <div className="discount_box">
                <ul className="discount_list">
                    <li className="discount_item">
                      <p className="discount_item_txt">
                      Вы можете купить все рецепты со скидкой 
                      30% за <span>39 000 сум</span>
                      </p>
                      <div className="discount_btn">
                        <img src={img1} alt="" />
                      </div>
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
                      <div className="discount_btn">
                        <img src={img1} alt="" />
                      </div>
                    </li>
                </ul>
            </div>
        </div>
     </div>

    </>
  )
}

export default Discound;