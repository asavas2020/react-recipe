import Login from "../src/pages/login/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AppRouter from "./router/AppRouter";
import Details from "./pages/details/Details";
import About from "./pages/about/About";
import Home from "./pages/home/Home";



function App() {
  return(

  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path = "/" element={<Login/>}/>
      <Route path= "/home" element={<AppRouter/>}>
        <Route path= "/home" element={<Home/>}/>
      </Route>
      <Route path="about" element = {<About/>}/>

      <Route path= "/details" element={<AppRouter/>}>
        <Route path= "/details" element={<Details/>}/>
      </Route>

    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
