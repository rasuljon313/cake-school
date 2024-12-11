import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation} from 'swiper/modules';
import cacke1 from "../../assets/image/111.jpeg"
import cacke2 from "../../assets/image/222.jpeg"
import cacke3 from "../../assets/image/22222.jpeg"
import cacke4 from "../../assets/image/33333.jpeg"
import cacke5 from "../../assets/image/4444.jpeg"
import cacke6 from "../../assets/image/555.jpeg"
// import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
import { HiArrowSmallLeft, HiArrowSmallRight } from 'react-icons/hi2';
const CackeSwiper = () => {
    const cacke = [
        {
         img:cacke1         
        },
        {
         img:cacke2
        },
        {
         
         img:cacke3
        },
        {
         img:cacke4
        },
        {
         img:cacke5
        },
        {
         img:cacke6
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
  navigation={{
    prevEl: '.swiper-button-prev_p',
    nextEl: '.swiper-button-next_n',
  }}
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
  <div className="swiper-button-prev swiper-button-prev_p"><HiArrowSmallLeft /></div>
  <div className="swiper-button-next swiper-button-next_n"><HiArrowSmallRight /></div>
</Swiper>
            </div>
          </div>
        </div>
    </>
  )
}

export default CackeSwiper