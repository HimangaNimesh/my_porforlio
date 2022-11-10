import React from "react";
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import Experience from "./components/experience/Experience"
import Projects from "./components/projects/Projects"
import Contacts from "./components/contacts/Contacts"
import Footer from "./components/footer/Footer"
import About from "./components/about/About"



function App() {
  return (
    <div className="App">
     <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Projects/>
      <Contacts/>
      <Footer/>
     </>
    </div>
  );
}

export default App;
