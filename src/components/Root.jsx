import "../css/Root.scss"
import AboutMe from "./aboutMe/AboutMe";
import Title from "./title/Title";


function Root(props){


  return(
    <div className="root-wrapper">
      <Title/>
      <AboutMe/>
    </div>
  )
}

export default Root;
