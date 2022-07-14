import { useNavigate } from "react-router-dom"
import CardStyled, {Header, Card, MainContainer, Image, Button} from "./Cards.styled"

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