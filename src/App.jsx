
import React from "react";
import NavigationBar from "./components/Navigation.jsx";
import LandingSection from "./containers/LandingSection.jsx";
import ProjectSection from "./containers/ProjectSection.jsx";
import SkillsSection from "./containers/SkillsSection.jsx";

function App() {
  return (
    <>
      <NavigationBar />
      <LandingSection />
      <ProjectSection />
      <SkillsSection/>
    </>


  )
}

export default App
