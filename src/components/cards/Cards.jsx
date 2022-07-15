import { useNavigate } from "react-router-dom"
import {Header, Card, MainContainer, Image, Button} from "./Cards.styled"
import defaultImage from "../../assets/default-image.jpg"

const Cards = ({recipe}) => {
  const navigate = useNavigate();
  return (
   <MainContainer wrap="wrap">
    {recipe.map(({recipe}, index)=>(
      <Card>
        <Header>{recipe.label}</Header>
        <Image src={recipe.image || defaultImage} />
        <Button onClick={() => navigate("detail", {state: recipe})} >View More</Button>
    </Card>
    ))}
    
   </MainContainer>
  )
}

export default Cards