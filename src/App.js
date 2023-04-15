import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Form from "./components/Forms";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
