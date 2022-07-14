import { Select } from "@material-ui/core"


const Header = ({setQuery, setMeal, mealTypes, getData}) => {
  return ( <HeaderContainer>
  <MainHeader>Recipe App</MainHeader>
    <FormContainer>
      <FoodInput 
      type="text" 
      placeholder="search" 
      onChange={(e)=> setQuery(e.target.value)}
      />
      <Button type="submit">SEARCH</Button>
      <Select
      name="mealTypes"
      id="mealTypes"
      onChange={(e)=> setMeal(e.target.value)}>
        {mealTypes.map((meal,index)=>(
          <option key ={index} value ={meal.toLowerCase()}>
            {meal}
          </option>
        ))}
      </Select>
    </FormContainer>
  </HeaderContainer>
  )
}

export default Header