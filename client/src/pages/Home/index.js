import React from "react"
import { useSelector } from "react-redux"
import Header from "../../components/Header"
import About from "./About"
import Contact from "./Contact"
import Courses from "./Courses"

import Footer from "./Footer"
import Intro from "./Intro"
import LeftSider from "./LeftSider"
import Try from "./Try"
import Shape from "./Shape"

function Home() {
  const { portfolioData } = useSelector((state) => state.root)
  return (
    <div>
      <Header />
      <Shape />
      {portfolioData && (
        <div className='bg-primary px-40 sm:px-5'>
          <Intro />
          <About />
          <Courses />
          <Contact />
          <Footer />
          <LeftSider />
          <Try />
        </div>
      )}
    </div>
  )
}

export default Home
