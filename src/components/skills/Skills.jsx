import { useState } from "react";

function Skills(props) {
  return (
    <section className="skills">
      <div className="title">Skills & Licenses</div>
      <div className="skill-content">
        <SkillContent
          classname="language"
          images={{ java: "Familiar", python: "Used" }}
          rowsize={"1"}
        />
        <SkillContent
          classname="frontend"
          images={{
            html_css_js: "Familiar",
            sass: "Used",
            react: "Used",
            jquery: "Used",
          }}
          rowsize={"2"}
        />
        <SkillContent
          classname="backend"
          images={{
            servlet_jsp: "Used",
            spring: "Familiar",
            springBoot: "Used",
            mybatis: "Used"
          }}
          rowsize={"2"}
        />
        <SkillContent
          classname="database"
          images={{
            oracle: "Used" ,
            postgres:"Used"
        }}
          rowsize={"1"}
        />
        <SkillContentWithText
          classname="licences"
          images={{"qnet":["2022년 9월 취득","정보처리기사"]}}
          rowsize={"1"}
        />
        <SkillContent
          classname="version-control"
          images={{"git":"Used", "github_long":"Familiar"}}
          rowsize={"1"}
        />
      </div>
    </section>
  );
}

// image : map of img_name : "description"

function SkillContent({ classname, images, rowsize }) {
  const imageRoot = process.env.PUBLIC_URL;
  const [imgData, setImgData] = useState([]);
  if (imgData.length === 0) {
    const iArr = [];
    for (let key in images) {
      iArr.push(
        <div className="img-wrapper" key={key}>
          <img src={`${imageRoot}/img/${key}.png`} alt={key} />
          <div className="img-text">{images[key]}</div>
        </div>
      );
    }
    setImgData(iArr);
  }
  return (
    <div
      className={"skill-item " + classname}
      style={{ gridRow: "span " + rowsize }}
    >
      <h3>
        <span
          dangerouslySetInnerHTML={{
            __html: classname.toUpperCase().replace("-", "<br>"),
          }}
        ></span>
      </h3>
      {imgData}
    </div>
  );
}

/**
 * @param {String} classname - 이 블럭의 클레스명 명시. 블럭의 이름으로도 활용
 * @param {Object[]} images - import한 image를 명시. 아래 innerText와 순서 일치할것
 * @param {String[]} innerText - 이미지 순서에 맞게 추가텍스트 명시. 텍스트는 이미지 아래에 추가됨
 * @returns
 */
function SkillContentWithText({ classname, images}) {
  const imageRoot = process.env.PUBLIC_URL;
  const [imgData, setImgData] = useState([]);
  if (imgData.length === 0) {
    const iArr = [];
    for (let key in images) {
      iArr.push(
        <div className="img-wrapper" key={key}>
          <img src={`${imageRoot}/img/${key}.png`} alt={key} />
          <div className="img-text">{images[key][0]}</div>
          <div className="inner-text">{images[key][1]}</div>
        </div>
      );
    }
    setImgData(iArr);
  }
  return (
    <div className={"skill-item " + classname}>
      <h3>
        <span>{classname.toUpperCase()}</span>
      </h3>
      {imgData}
    </div>
  );
}

export default Skills;
