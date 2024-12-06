import img1 from "../../assets/image/Rectangle 424.svg";
import img2 from "../../assets/image/Untitled 2.png"
const CackeVideo = () => {
  return (
    <>
      <main>
        <div className="aboutCackes">
          <div className="container">
            <div className="aboutCackes_box">
              <div className="aboutCackes_card1">
                <div className="aboutCackes_card1_texts">
                  <p className="aboutCackes_title">бисквитный торт</p>
                  <h3 className="aboutCackes_name">{`Красный бархат с клубникой`}</h3>
                  <p className="aboutCackes_txt">{`Яркий, насыщенный, безумно вкусный торт с клубникой`}</p>
                </div>
                <div className="aboutCackes_card1_img">
                <img className="aboutCackes_img1" src={img1} alt="cake" />
                </div>
              </div>
              <div className="aboutCackes_card2">
                <img className="aboutCackes_img2" src={img2} alt="" />
                <ul className="aboutCackes_card2_texts">
                    <h3 className="aboutCackes_card2_sostav">Состав торта:</h3>
                    <li className="aboutCackes_card2_text"><span>1. </span>Бисквит красный бархат</li>
                    <li className="aboutCackes_card2_text"><span>2. </span>Прослойка из клубничного муса</li>
                    <li className="aboutCackes_card2_text"><span>3.</span>Клубничный кули</li>
                    <li className="aboutCackes_card2_text"><span>4.</span>Кремчиз на масле</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="video">
          <div className="container">
            <div className="video_box">
              <ul className="video_list">
                <li className="video_item">
                  <a href="https://www.youtube.com/watch?v=h5s2eGfxs7Q">
                    <img src={img1} alt="Video thumbnail of the cake" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CackeVideo;

