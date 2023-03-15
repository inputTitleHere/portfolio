// import github from "../../img/github.png";

function Education(props) {
  const imageRoot = process.env.PUBLIC_URL;
  return (
    <section className="education">
      <div className="title">Education</div>
      <div className="edu-item-wrapper">
        <div className="edu-item">
          <h4>유성고등학교</h4>
          <ul>
            <li>
              졸업 <span>(2013~2016)</span>
            </li>
          </ul>
        </div>
        <div className="edu-item">
          <h4>충남대학교 </h4>
          <ul>
            <li>
              자연과학대학 : 생화학과 졸업 <span>(2016~2022)</span> | 학점 : 4.21/4.5
            </li>
            <li>
              4학년 졸업과제로 Python을 여름방학중에 독학하여 특정 유전자의 발현량과 mRNA들의
              Alternative Splicing에 대한 상관관계를 분석하는 프로그램을 제작하였습니다.
            </li>
            <li>
              처음으로 프로그래밍을 접하게 되었으며 프로그래밍의 기초와 언어의 사용법에 대해 학습할
              수 있었습니다.
            </li>
            <li>Language : Python | Development Tool : VS Code</li>
            {/* 프로젝트 깃헙은 아래 Projects 섹션에 만들자. */}
            <li>
              GitHub :{" "}
              <a
                href="https://github.com/inputTitleHere/LFG_Bioinformatics.git"
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={`${imageRoot}/img/github.png`} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="edu-item">
          <h4>KH정보교육원</h4>
          <h5>C, C++, 자료구조, 알고리즘 강의</h5>
          <ul>
            <li>
              수강 <span>(2022.01~2022.02)</span>
            </li>
            <li>
              2달동안 C, C++언어 및 C언어로 진행되는 자료구조와 알고리즘 수업을 수강하였습니다.{" "}
            </li>
            <li>
              자료구조와 알고리즘은 [뇌를 자극하는 알고리즘] 교재를 사용하였으며, C언어로
              진행하였습니다.
            </li>
          </ul>
          <h5>자바기반 공공데이터 융합 개발자 양성과정</h5>
          <ul>
            <li>
              수료 <span>(2022.02~2022.09)</span>
            </li>
            {/* <li>하기 내용을 학습 또는 독학하였습니다.</li> */}
            <li>
              순수 Java 앱 / HTML, CSS, Javascript 홈페이지 / JSP, Servlet / Spring Framework
              프로젝트 등 진행
            </li>
            <li>
              BackEnd
              <ul>
                <li>Java, JSP, Servlet, MyBatis, Spring Framework, Apache Tomcat</li>
              </ul>
            </li>
            <li>
              Database
              <ul>
                <li>Oracle DB, SQL</li>
              </ul>
            </li>
            <li>
              Frontend
              <ul>
                <li>HTML, CSS(SASS), Javascript(Jquery, React) </li>
              </ul>
            </li>
            <li>
              Tools
              <ul>
                <li>Eclipse, STS, VS Code, Maven, Git & GitHub</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="edu-item">
          <h4>삼성 청년 SW 아카데미 (SSAFY) 9기</h4>
          <ul>
            <li>1학기 진행중 <span>(2023.01 ~ )</span></li>
            <li>비전공 코스 입과 → 전공 코스로 전환</li>
            <li>
              알고리즘
              <ul>
                <li>모의 SW 역량시험 A+ 달성 <span>(2023.03.10)</span> </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Education;
