import cake1 from "../../assets/image/cake1.svg"
import table1 from "../../assets/image/table1.png"
import cake2 from "../../assets/image/cake2.svg"
import table2 from "../../assets/image/table2.png"
import cake3 from "../../assets/image/cake3.svg"
import table3 from "../../assets/image/table3.png"
const Training = () => {
  return (
    <>
      <section>
        <div className="training">
          <div className="container">
            <div className="training_box">
              <h3 className="training_title">ОБУЧЕНИЕ</h3>
              <p className="training_txt">может быть таким</p>
              <ul className="training_list">
                <li className="training_item">
                  <div className="training_item_txt">
                    Видео-уроки и технологичесике карты <span>для приготовления тортов</span>
                  </div>
                 <div className="training_item_imgs">
                <img src={table1} className="training_item_table" alt="" />
                 <img src={cake1} className="training_item_cake" alt="" />
                 </div>
                </li>
                <li className="training_item">
                <div className="training_item_txt">
                  Авторский курс от <span>Matu school</span> для кондитеров
                  </div>
                 <div className="training_item_imgs">
                <img src={table2}className="training_item_table" alt="" />
                 <img src={cake2}  className="training_item_cake" alt="" />
                 </div>
                </li>
                <li className="training_item">
                <div className="training_item_txt">
                  Гайд по турецким продуктом <span>для приготовления изысканных десертов</span>
                  </div>
                 <div className="training_item_imgs">
                <img src={table3} className="training_item_table" alt="" />
                 <img src={cake3} className="training_item_cake" alt="" />
                 </div>
                </li>         
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Training;

