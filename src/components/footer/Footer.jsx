import btn1 from "../../assets/image/btn1.png"
import btn2 from "../../assets/image/btn2.png"
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="container">
            <div className="footer_box">
              <ul className="footer_list">
                <li className="footer_item">
                  <h3 className="footer_title">Остались Вопросы ?</h3>
                  <p className="footer_txt">
                    Напишите нам в техподдержку и мы свяжемся с вами в ближайшее
                    время и ответим на ваши вопросы
                  </p>
                  <button aria-label="техподдержка"  className="footer_btn">
                    <a href="/form"><img src={btn1} alt="техподдержка" /></a>
                  </button>
                </li>
                <li className="footer_item">
                  <h3 className="footer_title">Чат для кондитеров</h3>
                  <p className="footer_txt">
                    Присоединяйтесь в наш ТГ канал, там мы делимся: рецептами,
                    советами, общаемся и обмениваемся опытом
                  </p>
                  <button aria-label="присоединиться" className="footer_btn">
                   <a href="/tell"> <img src={btn2} alt="присоединиться" /></a>
                    </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
