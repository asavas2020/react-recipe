import axios from "axios"
import { useState } from "react";
import Cards from "../../components/cards/Cards"
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards"


const APP_ID = REACT_APP_APP_ID
const APP_KEY = REACT_APP_APP_KEY

const Home = () => {
  const mealTypes=["Breakfast","Lunch","Dinner","Snack","Teatime"];
  const [query, setQuery] = useState("egg");
  const [meal, setMeal] = useState("dinner");
  const [recipe, setRecipe] = useState("")

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`


  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios.get(url);
        setRecipe(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('Please Enter your meal');
    }
  };

  console.log(recipe);
  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />
      {!recipe && (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}

      {recipe?.length === 0 && (
        <HeaderText>The Food can not be found</HeaderText>
      )}

      {recipe?.length > 0 && <Cards recipes={recipes} />}
    </div>
  );
};

export default Home;