import { useParams } from "react-router-dom";
import { obj } from "./Date";

const CatalgId = () => {
  const { id } = useParams();
  const obg = obj.find(item => item.id === parseInt(id));

  if (!obg) {
    return <p>Mahsulot topilmadi</p>;
  }

  return (
    <div>
      <div className="id">
        <div className="container">
          <div className="id_box">
            <img src={obg.image} alt={`Image for ${obg.title}`} />
           <div className="id_card">
           <h4>{obg.title}</h4>
            <p>{obg.description}</p>
            <p>Price: {obg.price}$</p>
            <div className="id_btns">
              <button><a href="/form">+</a></button>
              <button><a href="/catalog">-</a></button>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalgId;



