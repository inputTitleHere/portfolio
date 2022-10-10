

function Skills(props){
  return(
  <section className="skills">
    <div className="title">Skills & Licenses</div>
    <div className="skill-content">
      <SkillContent classname="language" images={["java","python"]} rowsize={"1"}/>
      <SkillContent classname="frontend" images={["html_css_js","sass","react","jquery"]} rowsize={"2"} />
      <SkillContent classname="backend" images={["servlet_jsp","spring","mybatis"]} rowsize={"2"}/>
      <SkillContent classname="database" images={["oracle"]} rowsize={"1"}/>
      <SkillContentWithText classname="licences" images={["qnet"]} innerText={["정보처리기사"]} rowsize={"1"}/>
      <SkillContent classname="version-control" images={["git","github_long"]} rowsize={"1"}/>
    </div>
  </section>
  )
}

function SkillContent({classname,images, rowsize}){

  return(
    <div className={"skill-item "+ classname} style={{gridRow:'span '+ rowsize}}>
      <h3><span dangerouslySetInnerHTML={{__html:classname.toUpperCase().replace("-","<br>")}}></span></h3>
      {
        images.map((item,key)=>{
          return <img src={`./img/${item}.png`} alt="" key={key}/>
        })
      }
    </div>
  )
}

/**
 * @param {String} classname - 이 블럭의 클레스명 명시. 블럭의 이름으로도 활용
 * @param {Object[]} images - import한 image를 명시. 아래 innerText와 순서 일치할것
 * @param {String[]} innerText - 이미지 순서에 맞게 추가텍스트 명시. 텍스트는 이미지 아래에 추가됨
 * @returns 
 */
function SkillContentWithText({classname,images,innerText}){

  const imageWithText = images.map((item, key)=>{
    return <div key={key}>
      <img src={`./img/${item}.png`} alt=""/>
      <div className="inner-text">
        {innerText[key]}
      </div>
    </div>
  })

  return(
    <div className={"skill-item "+classname}>
      <h3><span>{classname.toUpperCase()}</span></h3>
      {imageWithText}
    </div>
  )
}


export default Skills;