import scope from "../../assets/image/“.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation} from 'swiper/modules';
import { CiUser } from "react-icons/ci"
const CackeSwiper = () => {
    const cacke = [
        {
         
         img:"../../assets/image/Rectangle 10.png"
         
           
        },
        {
         img:"../../assets/image/Rectangle 10.png"
         
         

        },
        {
         
         img:"../../assets/image/Rectangle 10.png"
         

        },
        {
         img:"../../assets/image/Rectangle 10.png"
         
         

        }
    ]
  return (
    <>
 <div className="cackeImg">
          <div className="container">
            <div className="cackeImg_box">
              <p className="cackeImg_title">Работы</p>
              <h3 className="cackeImg_txt">УЧЕНИКОВ</h3>
              <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              1200: {
                slidesPerView: 3, 
                spaceBetween: 30, 
              },
              1050: {
                slidesPerView: 3, 
                spaceBetween: 30, 
              },
              1000: {
                slidesPerView: 3, 
                spaceBetween: 30, 
              },
              750: {
                slidesPerView: 2, 
              }
            }}
            className="swiper"
          >
            {cacke.map((cacke, index) => (
              <SwiperSlide key={index}>
                <div className="cackeImg_card">
                  <div className="cackeImg_card_image">
                    <img src={cacke.img} alt="" />
                  </div>
                     
                </div>
              </SwiperSlide>
            ))}
          </Swiper>  
            </div>
          </div>
        </div>
    </>
  )
}

export default CackeSwiper