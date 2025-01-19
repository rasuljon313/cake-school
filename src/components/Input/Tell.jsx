import { useState } from "react";
import axios from "axios";
import formi from "../../assets/image/Subtract.png";
import toast from "react-hot-toast";
import logo from "../../assets/image/Group 420.svg"
const Tell = () => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "", 
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

    const { name, phone } = formState;

    if (!name || !phone) {
      toast.error("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    const token = "7224593125:AAG1qPC99h1sk1iqE-A23LMkhGSTmq_FTi4";
    const chatId = 5531572292;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const messageContent = `Name: ${name}, Phone: +998${phone}`;

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
      <div className="tell">
        <div className="container">
          <div className="tell_box">
          <a href="/"><img className="logo" src={logo} alt="" /></a>
            <div className="tell_form">
              <img className="img" src={formi} alt="formi" />
              <div className="tell_card">
                <h3 className="tell_title">Чат для кондитеров </h3>
                <p className="tell_support">Напишите нам, мы сами свяжемся с вами.</p>
                <form id="myinput" onSubmit={send} className="tell_form">
                  <p>Ваше имя *</p>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Введите ваше имя"
                    required
                  />
                  <p>Ваш телефон *</p>
                  <input
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                    type="text"
                    placeholder="+998"
                  />
                  <button
                    type="submit"
                    disabled={!formState.name || !formState.phone}
                    aria-label="send"
                    className="tell_form_btn"
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

export default Tell;
