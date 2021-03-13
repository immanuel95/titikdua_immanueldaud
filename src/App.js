import React, { useRef } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Events from "./components/Events";
import Room from "./components/Room";
import Activities from "./components/Activities";
import Bar from "./components/Bar";
import Kitchen from "./components/Kitchen";
import Weddings from "./components/Weddings";
import PrivateEvents from "./components/PrivateEvents";
import Footer from "./components/Footer";

const scrollToRef = ref =>
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: "smooth"
  });

const App = () => {
  const myRef = useRef(null);

  //renders
  return (
    <>
      <Header scrollToRef={() => scrollToRef(myRef)} />
      <About myRef={myRef} />
      <Events />
      <Room />
      <Activities />
      <Bar />
      <Kitchen />
      <Weddings />
      <PrivateEvents />
      <Footer />
    </>
  );
};

export default App;
