const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer">
          <div className="conteiner">
            <div className="footer_box">
              <ul className="footer_list">
                <li className="footer_item">
                  <h3 className="footer_title">Остались Вопросы ?</h3>
                  <p className="footer_txt">
                    Напишите нам в техподдержку и мы свяжемся с вами в ближайшее
                    время и ответим на ваши вопросы
                  </p>
                  <button className="footer_btn">техподдержка</button>
                </li>
                <li className="footer_item">
                  <h3 className="footer_title">Чат для кондитеров</h3>
                  <p className="footer_txt">
                    Присоединяйтесь в наш ТГ канал, там мы делимся: рецептами,
                    советами, общаемся и обмениваемся опытом
                  </p>
                  <button className="footer_btn">присоединиться</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
