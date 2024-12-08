
// const CatalogCard = () => {
//   const obj = [
//         {
//           id:1,
//             title: 'УРОК ПО ПРИГОТОВЛЕНИЮ КАПКЕЙКОВ',
//             description: 'Самые вкусные капкейки с подробным процессом приготовления от и до в одном сборнике! Варианты приготовления капкейков на любой вкус и бюджет.',
//             image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=600&h=400&fit=crop',
//             price: '19,990'
//           },
//           {
//             id:2,
//             title: 'ШОКОЛАДНЫЙ ТОРТ',
//             description: 'Классический шоколадный торт с нежным кремом и богатым вкусом какао.',
//             image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop',
//             price: '24,990'
//           },
//           {
//             id:3,
//             title: 'ВАНИЛЬНЫЕ КЕКСЫ',
//             description: 'Воздушные ванильные кексы с нежной текстурой и ароматным вкусом.',
//             image: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=600&h=400&fit=crop',
//             price: '15,990'
//           },
//           { 
//             id:4,
//             title: 'ФРУКТОВЫЙ ТОРТ',
//             description: 'Легкий бисквитный торт со свежими фруктами и йогуртовым кремом.',
//             image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=400&fit=crop',
//             price: '27,990'
//           },
//           {
//             id:5,
//             title: 'МЕДОВЫЙ ТОРТ',
//             description: 'Традиционный медовый торт с нежными коржами и сметанным кремом.',
//             image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&h=400&fit=crop',
//             price: '23,990'
//           },
//           {
//             id:6,
//             title: 'ЛИМОННЫЙ ПИРОГ',
//             description: 'Освежающий лимонный пирог с воздушной меренгой.',
//             image: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=600&h=400&fit=crop',
//             price: '21,990'
//           },
//           {
//             id:7,
//             title: 'КЛУБНИЧНЫЕ ТАРТАЛЕТКИ',
//             description: 'Хрустящие тарталетки со свежей клубникой и заварным кремом.',
//             image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop',
//             price: '18,990'
//           },
//           {
//             id:8,
//             title: 'ТИРАМИСУ',
//             description: 'Классический итальянский десерт с кофейным вкусом и маскарпоне.',
//             image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=400&fit=crop',
//             price: '26,990'
//           },
//           {
//             id:9,
//             title: 'ЭКЛЕРЫ',
//             description: 'Воздушные эклеры с нежным кремом и шоколадной глазурью.',
//             image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?w=600&h=400&fit=crop',
//             price: '20,990'
//           }
//     ];
//     return (
//         <>
//             <main>
//                 <div className="catalg" id="catalg">
//                     <div className="container">
//                         <div className="catalg_box">
//                             <h3 className="catalg_title">Каталог</h3>
//                             <p className="catalg_txt">уроков</p>
//                             <ul className="catalg_list">
//                                 {obj.map((item, index) => (
//                                     <li key={index} className="catalg_item">
//                                         <div className="catalg_card">
//                                             <img src={item.image} alt={`Image for ${item.name}`} className="catalg_card_img" />
//                                             <div className="catalg_card_texts">
//                                             <h4 className="catalg_card_title">{item.title}</h4>
//                                             <p className="catalg_card_text">{item.description}</p>
//                                             <p className="catalg_card_price">{item.price}$</p>
//                                             </div>
//                                         </div>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </>
//     );
// }

// export default CatalogCard;
import { Link } from "react-router-dom";

const CatalogCard = () => {
  const obj = [
    {
      id: 1,
      title: 'УРОК ПО ПРИГОТОВЛЕНИЮ КАПКЕЙКОВ',
      description: 'Самые вкусные капкейки с подробным процессом приготовления от и до в одном сборнике! Варианты приготовления капкейков на любой вкус и бюджет.',
      image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=600&h=400&fit=crop',
      price: '19,990'
    },
    {
                    id:2,
                    title: 'ШОКОЛАДНЫЙ ТОРТ',
                    description: 'Классический шоколадный торт с нежным кремом и богатым вкусом какао.',
                    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop',
                    price: '24,990'
                  },
                  {
                    id:3,
                    title: 'ВАНИЛЬНЫЕ КЕКСЫ',
                    description: 'Воздушные ванильные кексы с нежной текстурой и ароматным вкусом.',
                    image: 'https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=600&h=400&fit=crop',
                    price: '15,990'
                  },
                  { 
                    id:4,
                    title: 'ФРУКТОВЫЙ ТОРТ',
                    description: 'Легкий бисквитный торт со свежими фруктами и йогуртовым кремом.',
                    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=400&fit=crop',
                    price: '27,990'
                  },
                  {
                    id:5,
                    title: 'МЕДОВЫЙ ТОРТ',
                    description: 'Традиционный медовый торт с нежными коржами и сметанным кремом.',
                    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&h=400&fit=crop',
                    price: '23,990'
                  },
                  {
                    id:6,
                    title: 'ЛИМОННЫЙ ПИРОГ',
                    description: 'Освежающий лимонный пирог с воздушной меренгой.',
                    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=600&h=400&fit=crop',
                    price: '21,990'
                  },
                  {
                    id:7,
                    title: 'КЛУБНИЧНЫЕ ТАРТАЛЕТКИ',
                    description: 'Хрустящие тарталетки со свежей клубникой и заварным кремом.',
                    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop',
                    price: '18,990'
                  },
                  {
                    id:8,
                    title: 'ТИРАМИСУ',
                    description: 'Классический итальянский десерт с кофейным вкусом и маскарпоне.',
                    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=400&fit=crop',
                    price: '26,990'
                  },
                  {
                    id:9,
                    title: 'ЭКЛЕРЫ',
                    description: 'Воздушные эклеры с нежным кремом и шоколадной глазурью.',
                    image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?w=600&h=400&fit=crop',
                    price: '20,990'
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
                    <Link to={`/catalog/${item.id}`} className="catalg_card_link">
                      <div className="catalg_card">
                        <img src={item.image} alt={`Image for ${item.title}`} className="catalg_card_img" />
                        <div className="catalg_card_texts">
                          <h4 className="catalg_card_title">{item.title}</h4>
                          <p className="catalg_card_text">{item.description}</p>
                          <p className="catalg_card_price">{item.price}$</p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CatalogCard;

