import svg1 from "../../assets/image/Mask group.svg";
import svg2 from "../../assets/image/second.svg";
import svg3 from "../../assets/image/third.svg";
import svg4 from "../../assets/image/four.svg";
import right from "../../assets/image/right.svg";
import left from "../../assets/image/left.svg";
import ownerimg from "../../assets/image/779c1af5-no-bg-HD (carve 4.png"
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
                      <img src={svg1} alt="img1" />
                      <p>Любитель</p>
                    </div>
                    <p className="about_item_txt">
                      Хотите <span>научится готовить </span>вкусные и красивые{" "}
                      <span>торты </span>для себя и близких
                    </p>
                  </li>
                  <li className="about_item">
                    <div className="about_item_img">
                      <img src={svg2} alt="img2" />
                      <p>Новичок</p>
                    </div>
                    <p className="about_item_txt">
                      Очень хотите начать, но{" "}
                      <span>сомневаетесь, что сможете</span> так же, как и
                      другие кондитеры
                    </p>
                  </li>
                  <li className="about_item">
                    <div className="about_item_img">
                      <img src={svg3} alt="img3" />
                      <p>Опытный</p>
                    </div>
                    <p className="about_item_txt">
                      Вы уже опытный кондитер и хотите{" "}
                      <span>расширить свой ассортимент</span>
                    </p>
                  </li>
                  <li className="about_item">
                    <div className="about_item_img">
                      <img src={svg4} alt="img4" />
                      <p>Ученик</p>
                    </div>
                    <p className="about_item_txt">
                      Хотите <span>освоить</span> новый вид деятельности и
                      начать на <span>этом зарабатывать</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="about_bottomLayout">
                <div className="about_bottomLayout_cards">
                <div className="about_bottomLayout_card">
                    <p className="about_bottomLayout_owner"><span><img src={left} alt="" /></span>Основатель школы <span><img src={right} alt="" /></span></p>
                    <h2 className="about_bottomLayout_name">Матлюба Шадиева</h2>
                    <p className="about_bottomLayout_txt">
                      Приветствую, меня зовут Матлюба, я спикер и основатель
                      онлайн-школы для кондитеров!
                    </p>
                    <ul className="about_bottomLayout_list">
                      <li className="about_bottomLayout_item"><span>12 лет</span> опыта</li>
                      <li className="about_bottomLayout_item"><span>400+</span> учеников</li>
                      <li className="about_bottomLayout_item"><span>800+</span> работ</li>
                    </ul>
                  </div>
                  <img className="about_bottomLayout_cards_img" src={ownerimg} alt="ownerimg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;