function Projects(props) {
  return (
    <section className="projects">
      <div className="title">Projects</div>
      <div className="project-item-wrapper">
      <ProjectItem
          title={"포트폴리오"}
          image={"portfolio"}
          duration={"2022.10~2022.10 (1주)"}
          devCount="1"
          frontend={"React, Sass"}
          github="https://github.com/inputTitleHere/portfolio"
        >
          <strong>포트폴리오 작성</strong>을 위해 진행한 개인 프로젝트로 지금 보고계신 페이지를 제작하였습니다. <br />
          <strong>React</strong>와 <strong>Sass</strong>를 이용하여 제작하였습니다. <br />
          특히 반복적인 컴포넌트의 처리가 쉬운 React의 기능에 많은 편리함을 느낄 수 있었습니다. <br />
          화면 크기에 따라 표현 방식이 다른 <strong>미디어 쿼리 및 CSS의 Grid 속성</strong>을 새로이 학습하였습니다. <br />

          포트폴리오는 <strong>깃헙 페이지</strong>를 이용하여 배포하였습니다.
          <br /><br />
          <h4>[담당역할]</h4>
          + 페이지 제작 및 내용 삽입 <br />
          + 반응형 웹으로 제작.


        </ProjectItem>

        <ProjectItem
          title={"같이먹을래"}
          image={"eatwith"}
          duration={"2022.09~2022.09 (4주)"}
          devCount="4 (팀장)"
          backend={"Spring Framework, Mybatis, Oracle DB"}
          frontend={"Javascript, React, Sass, jQuery"}
          github="https://github.com/inputTitleHere/final-project-eatwith"
        >
          <strong>Spring Framework</strong>를 활용한 MVC 패턴의 웹사이트입니다. <br />
          프런트엔드의 <strong>React</strong> 라이브러리를 독학하여 담당 파트에 적용하였으며, 데이터 스크래핑 용도로 <strong>Python</strong>의 <strong>Selenium</strong> 라이브러리 또한 프로젝트를 위해 학습하여 사용하였습니다. <br />
          이를 통해 프로젝트에 적용할 신규 기술을 얼마든지 학습하여 적용할 수 있다는 자신감을 얻을 수 있었습니다.
          <br /><br />
          <h4>[담당역할]</h4>
          + 팀장으로써 오류 해결, 구현의 방향성 및 팁 제시 <br />
          + 메인페이지 React으로 개발<br />
          + 회원가입창. 회원가입시 인증번호를 이메일로 전송 및 프런트단에서 인증번호 확인 기능. <br />
          + 마이페이지 (알림확인, 찜한 가게 및 나의 모임 확인, 회원정보 수정 등) 기능 개발
          + 특정 기능에 알림 생성 기능 추가.
        </ProjectItem>
        {/* ---------------------------------------------- */}
        <ProjectItem
          title={"ZoomIn : 줌인"}
          image={"zoomin"}
          duration={"2022.07 ~ 2022.07 (2주)"}
          devCount="5 (팀장)"
          backend={"JSP, Servlet, Oracle DB"}
          frontend={"Javascript, jQuery"}
          github="https://github.com/inputTitleHere/zoomin"
        >
          <strong>JSP</strong>, <strong>Servlet</strong> 및{" "}
          <strong>JDBC</strong>의 용법 등 백엔드의 기초 및{" "}
          <strong>MVC패턴</strong>, <strong>비동기 통신</strong> 을 연습할 수
          있었습니다. <br />
          처음으로 수행한 웹 프로젝트로 <strong>팀장</strong>이자 한명의{" "}
          <strong>팀 구성원</strong>으로 진행하였습니다. 서로다른 팀원들과 협업
          과정을 경험할 수 있었으며 이를 통해 소통의 방식을 개선할 수
          있었습니다.
          <br /><br />
          <h4>[담당 역할]</h4>
          + 팀장으로써 팀원들 오류 해결 및 구현 방향성 제시 + 구인자 계정의
          채용글 등록, 수정, 삭제 등 CRUD 기능 개발. <br />
          + 지원 분야별 이력서 조회 및 업로드한 채용게시글에 지원한 이력서 조회
          기능. <br />
          + 회사별 메인페이지의 소개, 리뷰 데이터, 채용 데이터 표시 및 페이징
          기능 개발.
        </ProjectItem>
      </div>
    </section>
  );
}

function ProjectItem({
  title,
  image,
  duration,
  devCount,
  frontend,
  backend,
  github,
  children,
}) {
  const imageRoot = process.env.PUBLIC_URL;
  return (
    <div className="project-item">
      <h2 className="title"><span>{title}</span></h2>
      <div className="left">
        <img src={`${imageRoot}/img/proj_img/${image}.png`} alt={image} />
        <ul>
          <li className="github">
            <a href={github} target={"_blank"} rel={"noreferrer"}>
              {github}
            </a>
          </li>
          <li className="dev-duration">
            <span>개발기간 : </span>
            {duration}
          </li>
          <li className="dev-count">
            <span>개발인원 : </span>
            {devCount}
          </li>
          {frontend && (
            <li className="speck">
              <span>Frontend : </span>
              {frontend}
            </li>
          )}
          {backend && (
            <li className="speck">
              <span>Backend : </span>
              {backend}
            </li>
          )}
        </ul>
      </div>
      <hr />
      <div className="right">
        <div className="info">{children}</div>
      </div>
    </div>
  );
}

export default Projects;
