import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "../components/globalStyles/Global.Styled";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/login/Login";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Register from "../pages/register/Register";
import Navbar from "../components/navbar/Navbar";



const AppRouter = () => {

  return (
  
    <BrowserRouter>
    <GlobalStyles/>
    <Navbar/>
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path="login" element = {<Login/>}/>
      <Route path="register" element = {<Register/>}/>

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