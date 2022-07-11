import Container, {H3, H5, H4, Span1, Span2, Text, P } from "./About.styled"
import IMG from "../../assets/coding.svg"



const About = () => {
  return (
    <Container>
        <IMG src={IMG} />
        <Span1>About Full-Stack Developer</Span1>
        <Span2>A.SAVAS</Span2>
        <Text>
            <H3>Hi I'm A. SAVAS</H3>
            <H4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</H4>
            <H5>Lorem ipsum dolor sit amet consectetur.</H5>
            <a href="mailto:gknsvsdata@gmail.com">Send email</a>
            <P>: gknsvsdata@gmail.com</P> 
        </Text>
    </Container>
  )
}

export default About