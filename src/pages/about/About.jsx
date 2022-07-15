import {Container, Text, Img } from "./About.styled"
import codingSvg from "../../assets/coding.svg"


const About = () => {
  return (
    <Container wrap="wrap">
        <Img src={codingSvg} />
        <span>About Full-Stack Developer</span>
        <span>A.SAVAS</span>
        <Text>
            <h3>Hi I'm A.SAVAS</h3>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
            <h5>Lorem ipsum dolor sit amet consectetur.</h5>
            <a href="mailto:gknsvsdata@gmail.com">Send email</a>
            <p>: gknsvsdata@gmail.com</p> 
        </Text>
    </Container>
  )
}

export default About