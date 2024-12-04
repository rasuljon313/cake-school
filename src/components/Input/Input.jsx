import formi from "../../assets/image/Subtract.png";
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
                    <input type="text" placeholder="Введите ваше имя" />
                    <input type="text" placeholder="Введите ваш телефон" />
                    <input type="text" placeholder="Оставьте свое сообщение" />
                    <button>
                        btn
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
