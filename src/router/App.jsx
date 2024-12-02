import About from "../components/about/About"
import Header from "../components/header/Header"
import Nav from "../components/nav/Nav"
import Question from "../components/question/Question"
import Training from "../components/training/Training"

const App = () => {
  return (
    <>
      <Nav/>
     <Header/>
     <About/>
     <Training/>
     <Question/>
    </>
  )
}

export default App