import "../css/Root.scss"
import AboutMe from "./aboutMe/AboutMe";
import Education from "./education/Education";
import Spacer from "./header/spacer";
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
      <Spacer/>
    </div>
  )
}

export default Root;
