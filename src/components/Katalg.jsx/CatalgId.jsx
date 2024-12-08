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
            <h4>{obg.title}</h4>
            <p>{obg.description}</p>
            <p>Price: {obg.price}$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalgId;



