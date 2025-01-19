import { useState } from "react";

const Question = () => {
    const [activ, setActiv] = useState(null);

    const toggleActive = (questionNumber) => {
        setActiv(activ === questionNumber ? null : questionNumber);
    };

    // Updated questions and answers
    const questions = [
        {
            question: "Предоставляются ли учебные материалы?",
            answer: "Да, для каждого занятия предоставляются рецепты и материалы. Также доступны видеокурсы и письменные пособия."
        },
        {
            question: "Где можно приобрести специальные инструменты для украшения тортов?",
            answer: "Мы предоставляем список необходимых инструментов для каждого занятия. Обычно их можно найти в местных магазинах или заказать онлайн."
        },
        {
            question: "Как долго длится курс?",
            answer: "Длительность курса зависит от уровня. Начальные курсы обычно длятся 1-2 недели, более продвинутые курсы могут длиться до месяца."
        },
        {
            question: "Есть ли возможность учиться онлайн?",
            answer: "Да, у нас есть онлайн-курсы. Занятия проходят через специальные платформы и могут быть как в прямом эфире, так и записанные."
        },
        {
            question: "Какие кремы лучше использовать для тортов?",
            answer: "Крем зависит от типа торта. Например, для легких тортов подойдёт крем на основе сливок, а для более сложных — жирный крем."
        }
    ];

    return (
        <section>
            <div className="question" id="reviews">
                <div className="container">
                    <div className="question_box">
                        <h3 className="question_title">ОТВЕТЫ</h3>
                        <p className="question_txt">на часто задаваемые вопросы</p>
                        <ul className="question_list">
                            {questions.map((item, index) => (
                                <li className="question_item" key={index} onClick={() => toggleActive(index + 1)}>
                                    <div className="question_item_box">
                                        <p className="question_item_txt">{item.question}</p>
                                        <p
                                            className={`question_item_txt1 ${activ === index + 1 ? "activ" : ""}`}
                                        >
                                            {activ === index + 1 ? item.answer : ""}
                                        </p>
                                    </div>
                                    <button
                                        className={`question_item_btn ${activ === index + 1 ? "activ" : ""}`}
                                    >
                                        {activ === index + 1 ? "-" : "+"}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Question;


