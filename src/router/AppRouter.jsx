import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "../components/globalStyles/Global.Styled";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/login/Login";
import Details from "../pages/login/Login";
import Home from "../pages/login/Login";
import About from "../pages/login/Login";
import Navbar from "../components/navbar/Navbar";


const AppRouter = () => {

  return (
  
    <BrowserRouter>
    <GlobalStyles/>
    <Navbar/>
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path="login" element = {<Login/>}/>

      <Route path= "/about" element={<PrivateRouter/>}>
        <Route path= "" element={<About/>}/>
      </Route>

      <Route path= "/details" element={<PrivateRouter/>}>
        <Route path= "" element={<Details/>}/>
      </Route>

    </Routes>
  </BrowserRouter>

  )
  
};

export default AppRouter;