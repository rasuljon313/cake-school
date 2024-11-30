import svg1 from "../../assets/image/Mask group.svg"
const About = () => {
  return (
    <>
      <main>
        <div className="abotu">
          <div className="container">
            <div className="about_box">
              <div className="about_topLayout">
                <h2 className="about_topLayout_title">Мои уроки</h2>
                <p className="about_topLayout_txt">для вас, если вы:</p>
                <ul className="about_list">
                  <li className="about_item">
                    <span>
                      <img src={svg1} alt="" />
                      <p>Любитель</p>
                      </span>
                  </li>
                  <li className="about_item"></li>
                  <li className="about_item"></li>
                  <li className="about_item"></li>
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
