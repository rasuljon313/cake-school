import { TbDownload } from "react-icons/tb";
import pdf from "../../assets/image/pdf4.png";
import toster from "react-hot-toast";
import img1 from "../../assets/image/Rectangle 428.svg";
import img2 from "../../assets/image/34.png"
const Pdf = () => {
  const a = () => {
    toster.error("Вы не купили курс.");
  };
  return (
    <>
      <div className="pdf">
        <div className="container">
          <div className="pdf_box">
            <div className="pdf_card1">
              <div className="pdf_info">
                <h3 className="pdf_info_title">Рецепт</h3>
                <p className="pdf_info_txt">для скачивания</p>
                <p className="pdf_info_download" onClick={a}>
                  <span>
                    <TbDownload />
                  </span>
                  Скачать рецепт
                </p>
                <img className="pdf_info_img" src={pdf} alt="pdf" />
              </div>
            </div>
            <div className="pdf_card2">
              <div className="pdf_card2_texts">
                <p className="pdf_title">Дарим промокод</p>
                <h3 className="pdf_name">{`НА СКИДКУ!`}</h3>
                <p className="pdf_txt">{`По промокоду Present для 
вас доступна скидка 10% 
на следующую покупку рецепту`}</p>
     <a href="/form">
     <img className="pdf_btnimg" src={img2} alt="btn" />
     </a>
              </div>
              <div className="pdf_card2_img">
                <img className="pdf_img1" src={img1} alt="cake" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pdf;
