function Projects(props) {
  return (
    <section className="projects">
      <div className="title">Projects</div>
      <div className="project-item-wrapper">
        <ProjectItem
          title={"ZoomIn : 줌인"}
          image={"zoomin"}
          duration={"2022.07 ~ 2022.07 (2주)"}
          devCount="5 (팀장 역할)"
          backend={"JSP, Servlet, Oracle DB"}
          github="https://github.com/inputTitleHere/zoomin"
        >
          <h4>[핵심 기능]</h4>
          구인자, 구직자 구분된 회원 가입 및 권한 관리. <br />
          구인자의 경우 채용 게시판 작성 기능, 구직자의 경우 채용 게시글에 지원 및 이력서, 회사 리뷰, 연봉 리뷰에 대한 작성 기능을 보유합니다. <br />
          
          <hr />
          <strong>JSP</strong>, <strong>Servlet</strong> 및 <strong>JDBC</strong>의 용법 등 백엔드의 기초 및 <strong>MVC패턴</strong>, <strong>비동기 통신</strong> 을 연습할 수 있었습니다. <br />

          처음으로 수행한 웹 프로젝트로 <strong>팀장</strong>이자 한명의 <strong>팀 구성원</strong>으로 진행하였습니다.
          서로다른 팀원들과 협업 과정을 경험할 수 있었으며 이를 통해 소통의 방식을 개선할 수 있었습니다.
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
  return (
    <div className="project-item">
      <h2 className="title">{title}</h2>
      <div className="img">
        <img src={`/img/proj_img/${image}.png`} alt="" />
      </div>
      <ul>
        <li className="github">
            <a href={github} target={'_blank'} rel={'noreferrer'}>{github}</a>
        </li>
        <li className="dev-duration">
          <span>개발기간 : </span>
          {duration}
        </li>
        <li className="dev-count">
          <span>개발인원 : </span>
          {devCount}
        </li>
        {frontend && <li className="speck"><span>Frontend : </span>{frontend}</li>}
        {backend && <li className="speck"><span>Backend : </span>{backend}</li>}
      </ul>
      <hr />
      <div className="info">{children}</div>
    </div>
  );
}

export default Projects;
