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
                                            {`Чтобы начать печь сладости, какие инструменты и оборудование нужны?`}
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
                                            {`Как проводится уроки по приготовлению сладких блюд?`}
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
                                            {`Как можно добавить новые вкусы в сладости?`}
                                        </p>
                                    </div>
                                    <button className={`question_item_btn ${activ === 3 ? "activ" : ""}`} onClick={() => toggleActive(3)}>
                                        {activ === 3 ? `-` : `+`}
                                    </button>
                                </li>
                                <li className="question_item">
                                    <div className="question_item_box">
                                        <p className="question_item_txt">Ниже мы собрали часто задаваемые вопросы и ответили на них</p>
                                        <p className={`question_item_txt1 ${activ === 4 ? "activ" : ""}`}>
                                            {`Какие сладости наиболее подходят для учеников?`}
                                        </p>
                                    </div>
                                    <button className={`question_item_btn ${activ === 4 ? "activ" : ""}`} onClick={() => toggleActive(4)}>
                                        {activ === 4 ? `-` : `+`}
                                    </button>
                                </li>
                                <li className="question_item">
                                    <div className="question_item_box">
                                        <p className="question_item_txt">Ниже мы собрали часто задаваемые вопросы и ответили на них</p>
                                        <p className={`question_item_txt1 ${activ === 5 ? "activ" : ""}`}>
                                            {`Какими профессиональными возможностями могут обладать ученики после этого курса?`}
                                        </p>
                                    </div>
                                    <button className={`question_item_btn ${activ === 5 ? "activ" : ""}`} onClick={() => toggleActive(5)}>
                                        {activ === 5 ? `-` : `+`}
                                    </button>
                                </li>
                                <li className="question_item">
                                    <div className="question_item_box">
                                        <p className="question_item_txt">Ниже мы собрали часто задаваемые вопросы и ответили на них</p>
                                        <p className={`question_item_txt1 ${activ === 6 ? "activ" : ""}`}>
                                            {`Какие новые навыки ученики приобретают на уроках по выпечке?`}
                                        </p>
                                    </div>
                                    <button className={`question_item_btn ${activ === 6 ? "activ" : ""}`} onClick={() => toggleActive(6)}>
                                        {activ === 6 ? `-` : `+`}
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
