// import { BrowserRouter, Route, Router } from "react-router-dom"
// import Form from "../pages/Form"
// import Cabinate from "../pages/Cabinate"
// import CackeId from "../pages/CackeId"
// import Catalog from "../pages/Catalog"
// import HomeLayout from "../pages/HomeLayout"

// const App = () => {
//   return (
//     <>

// <BrowserRouter>
//   <Router>
//     <Route  path="/" element={<HomeLayout/>}>
//       <Route path='/form' element={<Form />} />
//       <Route path='/cabinate' element={<Cabinate/>} />
//       <Route path='/cacke/:id' element={<CackeId />} />
//       <Route path='/catalog' element={<Catalog/>} />
//     </Route>
//   </Router>
// </BrowserRouter>
//     </>
//   )
// }

// export default App
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "../pages/Form";
import Cabinate from "../pages/Cabinate";
import CackeId from "../pages/CackeId";
import Catalog from "../pages/Catalog";
import HomeLayout from "../pages/HomeLayout";
import Mainpage from "../pages/Mainpage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<Mainpage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/cabinate" element={<Cabinate />} />
          <Route path="/cacke/:id" element={<CackeId />} />
          <Route path="/catalog" element={<Catalog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
