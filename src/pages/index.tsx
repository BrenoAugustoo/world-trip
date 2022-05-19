import { Flex, Heading } from "@chakra-ui/react"
import { Banner } from "../components/Banner"
import { Caracteristicas } from "../components/Caracteristicas"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Slider } from "../components/Slider"

const Home = () => {
  return ( 
    <Flex direction="column"> 
      <Header/>
      <Banner/>
      <Caracteristicas/>
      <Separator/>

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa? <br/> Então escolha seu continente
      </Heading>

      <Slider/>
    </Flex>
  )
}

export default Home
