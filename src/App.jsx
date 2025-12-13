import React from "react";
import NavigationBar from "./components/Navigation.jsx";
import LandingSection from "./containers/LandingSection.jsx";
import ProjectSection from "./containers/ProjectSection.jsx";
import SkillsSection from "./containers/SkillsSection.jsx";
import CertificationSection from "./containers/CertificationSection.jsx";
import ContactSection from "./containers/ContactSection.jsx";
import FooterSection from "./containers/FooterSection.jsx";
function App() {
  return (
    <>
      <NavigationBar />
      <LandingSection />
      <ProjectSection />
      <SkillsSection/>
      <CertificationSection/>
      <ContactSection/>
      <FooterSection />
    </>


  )
}

export default App
