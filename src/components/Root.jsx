import "../css/Root.scss"
import AboutMe from "./aboutMe/AboutMe";
import Footer from "./common/Footer";
import Education from "./education/Education";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Title from "./title/Title";


function Root(props){


  return(
    <div className="root-wrapper">
      <Title/>
      <div className="aboutme-wrapper">
        <AboutMe/>
      </div>
      <div className="education-wrapper">
        <Education/>
      </div>
      <div className="skills-wrapper">
        <Skills/>
      </div>
      <div className="projects-wrapper">
        <Projects/>
      </div>
      <Footer/>
    </div>
  )
}

export default Root;
