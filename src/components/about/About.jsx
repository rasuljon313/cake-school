import svg1 from "../../assets/image/Mask group.svg";
import svg2 from "../../assets/image/second.svg";
import svg3 from "../../assets/image/third.svg";
import svg4 from "../../assets/image/four.svg";
const About = () => {
  return (
    <>
      <main>
        <div className="about">
          <div className="container">
            <div className="about_box">
              <div className="about_topLayout">
                <h2 className="about_topLayout_title">Мои уроки</h2>
                <p className="about_topLayout_txt">для вас, если вы:</p>
                <ul className="about_list">
                  <li className="about_item">
                    <div className="about_item_img"> 
                      <img src={svg1} alt="" />
                      <p>Любитель</p>
                    </div>
                    <p className="about_item_txt"> 
                      Хотите <span>научится готовить </span>вкусные и красивые <span>торты </span>для себя
                      и близких
                    </p>
                  </li>
                  <li className="about_item">
                    <div className="about_item_img">
                      <img src={svg2} alt="" />
                      <p>Новичок</p>
                    </div>
                    <p className="about_item_txt"> 
                    Очень хотите начать, но <span>сомневаетесь, что сможете</span> так же, как и другие кондитеры
                    </p>
                  </li>
                  <li className="about_item">
                    <div className="about_item_img">
                      <img src={svg3} alt="" />
                      <p>Опытный</p>
                    </div>
                    <p className="about_item_txt"> 
                    Вы уже опытный кондитер и хотите <span>расширить свой ассортимент</span>
                    </p>
                  </li>
                  <li className="about_item">
                    <div className="about_item_img">
                      <img src={svg4} alt="" />
                      <p>Ученик</p>
                    </div>
                    <p className="about_item_txt"> 
                    Хотите <span>освоить</span> новый вид деятельности 
                    и начать на <span>этом зарабатывать</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="about_bottomLayout"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
