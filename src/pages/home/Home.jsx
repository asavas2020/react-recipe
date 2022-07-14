import axios from "axios"
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards"


const APP_ID = "6128d0b9"
const APP_KEY = "44670ca855dadffdcb127e78b9e53980"	

const Home = () => {
  const mealTypes=["Breakfast","Lunch","Dinner","Snack","Teatime"];
  const [query, setQuery] = useState("egg");
  const [meal, setMeal] = useState("dinner");
  const [recipe, setRecipe] = useState("")

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`


  const getData = async () =>{
    const {data} = await axios.get(url);
   setRecipe(data.hits)
  };
  
  return (
    <div>
      <Header setQuery={setQuery} setMeal={setMeal} mealTypes={mealTypes} getData={getData}/>
      <Cards/>
    </div>
  )
}

export default Home