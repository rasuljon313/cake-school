import scope from "../../assets/image/“.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation} from 'swiper/modules';
import { CiUser } from "react-icons/ci"
const Studens = () => {
    const studentss = [
        {
            name:"Насиба",
            old:"25 лет, Студентка ",
            txt:"Здравствуйте! Спасибо большое за ваши рецепты! Даже новичок по ним сможет приготовить! Самые вкусные торты у вас!"
           
        },
        {
            name:"Насиба",
            old:"25 лет, Студентка ",
            txt:"Здравствуйте! Спасибо большое за ваши рецепты! Даже новичок по ним сможет приготовить! Самые вкусные торты у вас!"

        },
        {
            name:"Насиба",
            old:"25 лет, Студентка ",
            txt:"Здравствуйте! Спасибо большое за ваши рецепты! Даже новичок по ним сможет приготовить! Самые вкусные торты у вас!"

        },
        {
            name:"Насиба",
            old:"25 лет, Студентка ",
            txt:"Здравствуйте! Спасибо большое за ваши рецепты! Даже новичок по ним сможет приготовить! Самые вкусные торты у вас!"

        }
    ]
  return (
    <>
 <div className="studentss">
          <div className="container">
            <div className="studentss_box">
              <h3 className="studentss_title">Ученики</h3>
              <p className="studentss_txt">довольные результатом обучения</p>
              <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              1200: {
                slidesPerView: 1, 
                spaceBetween: 30, 
              },
              1050: {
                slidesPerView: 1, 
                spaceBetween: 30, 
              },
              1000: {
                slidesPerView: 1, 
                spaceBetween: 30, 
              },
              750: {
                slidesPerView: 1, 
              }
            }}
            className="swiper"
          >
            {studentss.map((studentss, index) => (
              <SwiperSlide key={index}>
                <div className="studentss_card">
                  <div className="studentss_card_image">
                    <CiUser className="studentss_card_img"  />
                    <img src={scope} alt="" />
                    <div className="studentss_card_info">
                    <h3>{studentss.name}</h3>
                    <p className="studentss_card_old">{studentss.old}</p>
                    </div>
                  </div>
                      <p className="studentss_card_txt">{studentss.txt}</p>
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

export default Studens