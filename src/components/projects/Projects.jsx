function Projects(props) {
  return (
    <section className="projects">
      <div className="title">Projects</div>
      <div className="project-item-wrapper">
        <ProjectItem
          title={"창작자의 노트북"}
          image={"creators-notebook"}
          duration={"2023.04~2023.07"}
          devCount={"1"}
          backend={"Java 17, Spring boot(3.0), JPA, Postgresql"}
          frontend={"React, React Router, React Redux"}
          github={"https://github.com/inputTitleHere/CreatorsNotebook"}
        >
          + 기획, 설계, 개발, 배포까지 수행한 개인 프로젝트입니다. <br />
          + 웹툰, 웹소설, 만화 등 창작자분들의 설정관리를 돕기 위한 웹 서비스를
          제공하고자 제작했습니다.
          <br />
          + Spring boot 기반의 백엔드, React 기반의 프론트엔드, AWS의 EC2 및
          RDS(Postgresql)를 이용한 간단한 배포까지 수행하였습니다.
          <br />
          + 배포 주소는 다음과 같습니다. <br />
          <a
            href="https://www.creators-notebook.com"
            target={"_blank"}
            rel={"noreferrer"}
          >
            {"https://www.creators-notebook.com"}
          </a>
          <br />
          <h4>[담당역할]</h4>
          + 1인 개발로 기획, 설계, 개발, 배포 전과정 수행
        </ProjectItem>

        <ProjectItem
          title={"포트폴리오"}
          image={"portfolio"}
          duration={"2022.10~2022.10 (1주)"}
          devCount="1"
          frontend={"React, Sass"}
          github="https://github.com/inputTitleHere/portfolio"
        >
          <strong>포트폴리오 작성</strong>을 위해 진행한 개인 프로젝트로 지금
          보고계신 페이지를 제작하였습니다. <br />
          <strong>React</strong>와 <strong>Sass</strong>를 이용하여
          제작하였습니다. <br />
          포트폴리오의 배포는 <strong>깃헙 페이지(github pages)</strong>를
          이용하여 배포하였습니다.
          <br />
          <br />
          <h4>[담당역할]</h4>
          + 페이지 제작 및 내용 삽입 <br />+ 반응형 웹으로 제작.
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
          <strong>Spring Framework</strong>를 활용한 MVC 패턴의 웹사이트입니다.{" "}
          <br />
          프런트엔드의 <strong>React</strong> 라이브러리를 독학하여 담당 파트에
          적용하였으며, 데이터 스크래핑 용도로 <strong>Python</strong>의{" "}
          <strong>Selenium</strong> 라이브러리 또한 프로젝트를 위해 학습하여
          사용하였습니다. <br />
          <br />
          <br />
          <h4>[담당역할]</h4>
          + 팀장으로써 오류 해결, 구현의 방향성 및 팁 제시 <br />
          + 메인페이지 React으로 개발
          <br />
          + 회원가입창. 회원가입시 인증번호를 이메일로 전송 및 프런트단에서
          인증번호 확인 기능. <br />
          + 마이페이지 (알림확인, 찜한 가게 및 나의 모임 확인, 회원정보 수정 등)
          기능 개발 + 특정 기능에 알림 생성 기능 추가. <br />+ Python Selenium을
          활용한 웹 스크래핑 코드 작성
        </ProjectItem>
        {/* ---------------------------------------------- */}
        {/*
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
        */}
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
      <h2 className="title">
        <span>{title}</span>
      </h2>
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
