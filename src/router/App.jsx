
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "../pages/Form";
import Catalog from "../pages/Catalog";
import HomeLayout from "../pages/HomeLayout";
import Mainpage from "../pages/Mainpage";
import Tellform from "../pages/Tellform";
import Cabinatepage from "../pages/Cabinatepage";
import Id from "../pages/ID";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<Mainpage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/cabinate" element={<Cabinatepage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<Id />} />
          <Route path="/tell" element={<Tellform />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;


