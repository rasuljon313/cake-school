import { TbDownload } from "react-icons/tb"
import pdf from "../../assets/image/pdf4.png"
const Pdf = () => {
  return (
    <>
  <div className="pdf">
    <div className="container">
        <div className="pdf_box">
            <div className="pdf_card">
                <div className="pdf_info">
                    <h3 className="pdf_info_title">Рецепт</h3>
                    <p className="pdf_info_txt">для скачивания</p>
                    <p className="pdf_info_download" ><span><TbDownload /></span>Скачать рецепт</p>
                    <img className="pdf_info_img" src={pdf} alt="pdf" />
                </div>
            </div>
            <div className="pdf_card"></div>
        </div>
    </div>
  </div>
    </>
  )
}

export default Pdf