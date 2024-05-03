import React, { useEffect } from "react"
import About from "./Components/About"
import Cards from "./Components/Cards"
import Eyes from "./Components/Eyes"
import Featured from "./Components/Featured"
import Footer from "./Components/Footer"
import LandingPage from "./Components/LandingPage"
import Marquee from "./Components/Marquee"

import Navbar from "./Components/Navbar"
import locomotiveScroll from "locomotive-scroll"





function App(){
  const scrollRef = React.createRef();
  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true
        // Add other options as needed
    });
}, []);

  return (
    <>
       <div ref={scrollRef} className=" scroll w-full min-h-screen bg-zinc-900 text-white">
           <Navbar/>
           <LandingPage/>
            <Marquee/>
            <About/>
            <Eyes/>
            <Featured/>
            <Cards/>
            <Footer/>
       </div>
    </>
  )
}

export default App
