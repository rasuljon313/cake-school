import { useState } from "react";
import axios from "axios";
import formi from "../../assets/image/Subtract.png";
import toast from "react-hot-toast";
import logo from "../../assets/image/Group 420.svg"
const Input = () => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "", 
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/[^0-9]/g, '');
      if (numericValue.length <= 12) { 
        setFormState({
          ...formState,
          [name]: numericValue,
        });
      }
    } else if (name === "name") {
      const alphabeticValue = value.replace(/[^a-zA-Z\s]/g, ''); 
      setFormState({
        ...formState,
        [name]: alphabeticValue,
      });
    } else {
      setFormState({
        ...formState,
        [name]: value,
      });
    }
  };

  const send = (event) => {
    event.preventDefault();

    const { name, phone, message } = formState;

    if (!name || !phone || !message) {
      toast.error("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    const token = "7224593125:AAG1qPC99h1sk1iqE-A23LMkhGSTmq_FTi4";
    const chatId = 5531572292;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const messageContent = `Name: ${name}, Phone: +998${phone}, Message: ${message}`;

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chatId,
        text: messageContent,
      },
    })
      .then(() => {
        setFormState({
          name: "",
          phone: "",
          message: "",
        });
        toast.success("Yuborildi");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        toast.error("Xatolik yuz berdi, qayta urinib ko'ring.");
      });
  };

  return (
    <>
      <div className="input">
        <div className="container">
          <div className="input_box">
            <a href="/"><img className="input_box_logo" src={logo} alt="" /></a>
            <div className="input_form">
              <img className="input_box_img" src={formi} alt="formi" />
              <div className="input_card">
                <h3 className="input_title">Напишите нам</h3>
                <p className="input_support">Режим работы тех.поддержки</p>
                <p className="input_time">Пн-Сб с 9:00 до 19:00</p>
                <p className="input_txt">
                  Время ответа в течениие <span>24 часов</span> с момента обращения
                </p>
                <form id="myinput" onSubmit={send} className="input_form">
                  <p className="input_user_txt">Ваше имя *</p>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Введите ваше имя"
                    required
                  />
                  <p className="input_user_txt">Ваш телефон *</p>
                  <input
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                    type="text"
                    placeholder="Введите ваш телефон"
                  />
                  <p className="input_user_txt">Текст сообщения *</p>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Оставьте свое сообщение"
                    rows="5"
                    cols="40"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    disabled={!formState.name || !formState.phone || !formState.message}
                    aria-label="send"
                    className="input_form_btn"
                  >
                    Отправить
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;

