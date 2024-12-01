import cake1 from "../../assets/image/cake1.svg"
import table1 from "../../assets/image/table1.png"
import cake2 from "../../assets/image/cake2.svg"
import table2 from "../../assets/image/table2.png"
import cake3 from "../../assets/image/cake3.svg"
import table3 from "../../assets/image/table3.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation} from 'swiper/modules';
const Training = () => {
    const students = [
        {
            name:"Насиба",
            years:"25 лет, Студентка ",
            txt:"Здравствуйте! Спасибо большое за ваши рецепты! Даже новичок по ним сможет приготовить! Самые вкусные торты у вас!"

        },
        {
            name:"Насиба",
            years:"25 лет, Студентка ",
            txt:"Здравствуйте! Спасибо большое за ваши рецепты! Даже новичок по ним сможет приготовить! Самые вкусные торты у вас!"

        },
        {
            name:"Насиба",
            years:"25 лет, Студентка ",
            txt:"Здравствуйте! Спасибо большое за ваши рецепты! Даже новичок по ним сможет приготовить! Самые вкусные торты у вас!"

        },
        {
            name:"Насиба",
            years:"25 лет, Студентка ",
            txt:"Здравствуйте! Спасибо большое за ваши рецепты! Даже новичок по ним сможет приготовить! Самые вкусные торты у вас!"

        }
    ]
  return (
    <>
      <section>
        <div className="training">
          <div className="container">
            <div className="training_box">
              <h3 className="training_title">ОБУЧЕНИЕ</h3>
              <p className="training_txt">может быть таким</p>
              <ul className="training_list">
                <li className="training_item">
                  <div className="training_item_txt">
                    Видео-уроки и технологичесике карты <span>для приготовления тортов</span>
                  </div>
                 <div className="training_item_imgs">
                <img src={table1} className="training_item_table" alt="" />
                 <img src={cake1} className="training_item_cake" alt="" />
                 </div>
                </li>
                <li className="training_item">
                <div className="training_item_txt">
                  Авторский курс от <span>Matu school</span> для кондитеров
                  </div>
                 <div className="training_item_imgs">
                <img src={table2}className="training_item_table" alt="" />
                 <img src={cake2}  className="training_item_cake" alt="" />
                 </div>
                </li>
                <li className="training_item">
                <div className="training_item_txt">
                  Гайд по турецким продуктом <span>для приготовления изысканных десертов</span>
                  </div>
                 <div className="training_item_imgs">
                <img src={table3} className="training_item_table" alt="" />
                 <img src={cake3} className="training_item_cake" alt="" />
                 </div>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
        <div className="students">
          <div className="container">
            <div className="students_box">
              <h3 className="students_title">Ученики</h3>
              <p className="students_txt">довольные результатом обучения</p>
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
            {students.map((students, index) => (
              <SwiperSlide key={index}>
                <div className="studens_card">
                  <div className="studens_card_image">
                    <img src={students.image} alt={students.name} />
                    <div className="studens-card_details">
                    <h3>{students.name}</h3>
                    <p className="studens_card_role">{students.years}</p>
                    </div>
                  </div>
                  <div className="studens_card_content">
                      <p>{students.txt}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>  
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Training;
