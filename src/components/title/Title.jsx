import me from "../../img/me.jpg"


function Title(props){

  return(
    <section className="title">
      <div className="radial-wrapper">
        <div id="my-img-wrapper">
          <img src={me} alt="이미지없음" />
        </div>
      </div>
      <div className="introduction-wrapper">
        <div className="header">
          [ 백승윤 ]
          <br />
          <span className="eng-name">
            [ BAIK SEUNGYOON ]
          </span>
        </div>
        <hr />
        <div className="introduction">
          <strong>안녕하세요!</strong> <br />
          <strong>새로운 지식, 새로운 기술</strong>을 배우기를 좋아하는 웹 개발자 <strong>백승윤</strong>입니다! <br />
        </div>
      </div>
    </section>
  )
}

export default Title;

