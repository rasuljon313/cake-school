
const CatalogCard = () => {
    const obj = [
        {
            img: {}, 
            name: "Kurs 1",
            txt: "Bu kurs haqida qisqacha ma'lumot."
        },
        {
            img: {},
            name: "Kurs 2",
            txt: "Bu kurs haqida qisqacha ma'lumot."
        },
        {
            img: {},
            name: "Kurs 3",
            txt: "Bu kurs haqida qisqacha ma'lumot."
        },
        {
            img: {},
            name: "Kurs 4",
            txt: "Bu kurs haqida qisqacha ma'lumot."
        },
        {
            img: {},
            name: "Kurs 5",
            txt: "Bu kurs haqida qisqacha ma'lumot."
        }
    ];

    return (
        <>
            <main>
                <div className="catalg" id="catalg">
                    <div className="container">
                        <div className="catalg_box">
                            <h3 className="catalg_title">Каталог</h3>
                            <p className="catalg_txt">уроков</p>
                            <ul className="catalg_list">
                                {obj.map((item, index) => (
                                    <li key={index} className="catalg_item">
                                        <div className="catalg_card">
                                            <img src={item.img} alt={`Image for ${item.name}`} className="catalg_card_img" />
                                            <h4 className="catalg_card_title">{item.name}</h4>
                                            <p className="catalg_card_text">{item.txt}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default CatalogCard;
