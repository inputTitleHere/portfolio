function Title(props) {
  const imageRoot = process.env.PUBLIC_URL;
  return (
    <section
      className="title"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.8)),url(${imageRoot}/img/laptop.jpg)`,
      }}
    >
      <div className="radial-wrapper">
        <div id="my-img-wrapper">
          <img src={`${imageRoot}/img/me.jpg`} alt="이미지없음" />
        </div>
      </div>
      <div className="introduction-wrapper">
        <div className="header">
          [ 백승윤 ]
          <br />
          <span className="eng-name">[ BAIK SEUNGYOON ]</span>
        </div>
        <hr />
        <div className="introduction">
          <strong>안녕하세요!</strong> <br />
          <strong>새로운 지식, 새로운 기술</strong>을 배우기를 좋아하는 웹 개발자{" "}
          <strong>백승윤</strong>입니다!
          <br />
        </div>
      </div>
    </section>
  );
}

export default Title;
