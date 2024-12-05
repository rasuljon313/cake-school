// import { useState } from "react";

// const Question = () => {
//     const [activ, setActiv] = useState(null);
//     const a = (questionNumber) => {
//         if (activ === questionNumber) {
//             setActiv(null);
//           } else {
//             setActiv(questionNumber); 
//           }
//      setActiv(true)
//      console.log(activ);
//     }
//     return (
//       <>
//         <section>
//           <div className="question" id="reviews">
//             <div className="container">
//               <div className="question_box">
//                 <h3 className="question_title">ОТВЕТЫ</h3>
//                 <p className="question_txt">на часто задаваемые вопросы</p>
//                 <ul className="question_list">
//                   <li className="question_item">
//                     <div className="question_item_box">
//                     <p className="question_item_txt">Ниже мы собрали часто задаваемые вопросы и ответили на них</p>
//                     <p className={`question_item_txt1 ${activ === 1 ? "activ" : ""}`}>{`Shirinlik pishirishni boshlash uchun qanday asbob-uskunalar kerak?`}</p>
//                     </div>
//                     <button className={`question_item_btn ${activ === 1 ? "" : "activ"}`} onClick={()=> a(1)}>
//                     {activ === 1 ? `-` : `+`}
//                     </button>
//                   </li>
//                   <li className="question_item">
//                   <div className="question_item_box">
//                     <p className="question_item_txt1">Ниже мы собрали часто задаваемые вопросы и ответили на них</p>
//                     <p className="question_item_txt2">{`Shirinlik pishirish darslari qanday tartibda o'qitiladi?`}</p>
//                     </div>
//                     <button className="question_item_btn" onClick={()=> a}>
//                       +
//                     </button>
//                   </li>
//                   <li className="question_item">
//                   <div className="question_item_box">
//                     <p className="question_item_txt1">Ниже мы собрали часто задаваемые вопросы и ответили на них</p>
//                     <p className="question_item_txt2">{`Qanday qilib shirinliklarga yangi ta'mlar qo'shish mumkin?`}</p>
//                     </div>
//                     <button className="question_item_btn" onClick={()=> a}>
//                       +
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>
//       </>
//     );
//   };
  
//   export default Question;
  
import { useState } from "react";

const Question = () => {
    const [activ, setActiv] = useState(null);

    const toggleActive = (questionNumber) => {
        if (activ === questionNumber) {
            setActiv(null);
        } else {
            setActiv(questionNumber);
        }
    };

    return (
        <>
            <section>
                <div className="question" id="reviews">
                    <div className="container">
                        <div className="question_box">
                            <h3 className="question_title">ОТВЕТЫ</h3>
                            <p className="question_txt">на часто задаваемые вопросы</p>
                            <ul className="question_list">
                                <li className="question_item">
                                    <div className="question_item_box">
                                        <p className="question_item_txt">Ниже мы собрали часто задаваемые вопросы и ответили на них</p>
                                        <p className={`question_item_txt1 ${activ === 1 ? "activ" : ""}`}>
                                            {`Shirinlik pishirishni boshlash uchun qanday asbob-uskunalar kerak?`}
                                        </p>
                                    </div>
                                    <button className={`question_item_btn ${activ === 1 ? "activ" : ""}`} onClick={() => toggleActive(1)}>
                                        {activ === 1 ? `-` : `+`}
                                    </button>
                                </li>
                                <li className="question_item">
                                    <div className="question_item_box">
                                        <p className="question_item_txt">Ниже мы собрали часто задаваемые вопросы и ответили на них</p>
                                        <p className={`question_item_txt1 ${activ === 2 ? "activ" : ""}`}>
                                            {`Shirinlik pishirish darslari qanday tartibda o'qitiladi?`}
                                        </p>
                                    </div>
                                    <button className={`question_item_btn ${activ === 2 ? "activ" : ""}`} onClick={() => toggleActive(2)}>
                                        {activ === 2 ? `-` : `+`}
                                    </button>
                                </li>
                                <li className="question_item">
                                    <div className="question_item_box">
                                        <p className="question_item_txt">Ниже мы собрали часто задаваемые вопросы и ответили на них</p>
                                        <p className={`question_item_txt1 ${activ === 3 ? "activ" : ""}`}>
                                            {`Qanday qilib shirinliklarga yangi ta'mlar qo'shish mumkin?`}
                                        </p>
                                    </div>
                                    <button className={`question_item_btn ${activ === 3 ? "activ" : ""}`} onClick={() => toggleActive(3)}>
                                        {activ === 3 ? `-` : `+`}
                                    </button>
                                </li>
                                <li className="question_item">
                                    <div className="question_item_box">
                                        <p className="question_item_txt">Ниже мы собрали часто задаваемые вопросы и ответили на них</p>
                                        <p className={`question_item_txt1 ${activ === 3 ? "activ" : ""}`}>
                                            {`O'quvchilar uchun qaysi shirinliklar eng mos keladi?`}
                                        </p>
                                    </div>
                                    <button className={`question_item_btn ${activ === 3 ? "activ" : ""}`} onClick={() => toggleActive(3)}>
                                        {activ === 3 ? `-` : `+`}
                                    </button>
                                </li>
                                <li className="question_item">
                                    <div className="question_item_box">
                                        <p className="question_item_txt">Ниже мы собрали часто задаваемые вопросы и ответили на них</p>
                                        <p className={`question_item_txt1 ${activ === 3 ? "activ" : ""}`}>
                                            {`Bu dasturdan keyin o'quvchilar qanday professional imkoniyatlarga ega bo'lishi mumkin?`}
                                        </p>
                                    </div>
                                    <button className={`question_item_btn ${activ === 3 ? "activ" : ""}`} onClick={() => toggleActive(3)}>
                                        {activ === 3 ? `-` : `+`}
                                    </button>
                                </li>
                                <li className="question_item">
                                    <div className="question_item_box">
                                        <p className="question_item_txt">Ниже мы собрали часто задаваемые вопросы и ответили на них</p>
                                        <p className={`question_item_txt1 ${activ === 3 ? "activ" : ""}`}>
                                            {`Pishirish darslari orqali o'quvchilarga qanday yangi ko'nikmalar o'rgatiladi?`}
                                        </p>
                                    </div>
                                    <button className={`question_item_btn ${activ === 3 ? "activ" : ""}`} onClick={() => toggleActive(3)}>
                                        {activ === 3 ? `-` : `+`}
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Question;
