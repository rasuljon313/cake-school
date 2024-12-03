import About from "../components/about/About"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Question from "../components/question/Question"
import Training from "../components/training/Training"

const Mainpage = () => {
  return (
    <>
    <Header/>
     <About/>
     <Training/>
     <Question/>
     <Footer/> 
    </>
  )
}

export default Mainpage