import formi from "../../assets/image/Subtract.png";
import img from "../../assets/image/formbmbtn.png"
const Input = () => {
  return (
    <>
      <form>
        <div className="input">
          <div className="container">
            <div className="input_box">
              <div className="input_form">
                <img src={formi} alt="formi" />
              <div className="input_card">
                <h3 className="input_title">Напишите нам</h3>
                <p className="input_support">Режим работы тех.поддержки</p>
                <p className="input_time">Пн-Сб с 9:00 до 19:00</p>
                <p className="input_txt">Время ответа в течениие <span>24 часов</span> с момента обращения</p>
                <div className="input_form">
                    <p>Ваше имя  *</p>
                    <input type="text" placeholder="Введите ваше имя" />
                    <p>Ваш телефон  *</p>
                    <input type="text" placeholder="Введите ваш телефон" />
                    <p>Текст сообщения *</p>
                    <textarea placeholder="Оставьте свое сообщение" rows="5" cols="40"></textarea>
                    <button aria-label="send" className="input_form_btn" >
                        <img src={img} alt="btn" />
                    </button>
                </div>
              </div></div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Input;
