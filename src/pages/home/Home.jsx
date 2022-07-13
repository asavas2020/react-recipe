import axios from "axios"
import { useEffect, useState } from "react";

const APP_ID = "6128d0b9"
const APP_KEY = "44670ca855dadffdcb127e78b9e53980"	

const Home = () => {
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState("")

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`


  const getData =async () =>{
    const data = await axios.get(url);
    console.log(data)
  };
  getData()
  
  useEffect(() => {
    getData();   

  }, [])
  

  return (
    <div>Home</div>
  )
}

export default Home