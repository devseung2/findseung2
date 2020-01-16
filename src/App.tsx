import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// 스크롤 관련 이벤트
document.addEventListener("scroll", () => {
  const currentScroll: number = window.scrollY;
  const headerBtn: NodeListOf<Element> = document.querySelectorAll(
    ".MuiButtonBase-root"
  );
  const activeClass: Element = document.getElementsByClassName(
    "Mui-selected"
  )[0];

  // page : HOME
  if (currentScroll < 500) {
    if (activeClass) {
      activeClass.setAttribute("aria-selected", "false");
      activeClass.classList.remove("Mui-selected");
    }
    headerBtn[0].classList.add("Mui-selected");
    headerBtn[0].setAttribute("aria-selected", "true");
  }
  // page : ABOUT
  else if (currentScroll < 1500) {
    if (activeClass) {
      activeClass.setAttribute("aria-selected", "false");
      activeClass.classList.remove("Mui-selected");
    }
    headerBtn[1].classList.add("Mui-selected");
    headerBtn[1].setAttribute("aria-selected", "true");
  }
  // page : SKILLS
  else if (currentScroll < 2100) {
    if (activeClass) {
      activeClass.setAttribute("aria-selected", "false");
      activeClass.classList.remove("Mui-selected");
    }
    headerBtn[2].classList.add("Mui-selected");
    headerBtn[2].setAttribute("aria-selected", "true");
  }
  // page : PROJECTS
  else if (currentScroll < 3300) {
    if (activeClass) {
      activeClass.setAttribute("aria-selected", "false");
      activeClass.classList.remove("Mui-selected");
    }
    headerBtn[3].classList.add("Mui-selected");
    headerBtn[3].setAttribute("aria-selected", "true");
  }
  // page : CONTACT
  else {
    if (activeClass) {
      activeClass.setAttribute("aria-selected", "false");
      activeClass.classList.remove("Mui-selected");
    }
    headerBtn[4].classList.add("Mui-selected");
    headerBtn[4].setAttribute("aria-selected", "true");
  }
});

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
