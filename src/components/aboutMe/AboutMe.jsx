function AboutMe(props) {
  return (
    <section className="about-me">
      <div className="title">About Me</div>
      <div className="bio-wrapper">
        <BioItem img="human.png" title="이름" info="백승윤" />
        <BioItem img="calendar.png" title="생년" info="1997년" />
        <BioItem img="address.png" title="주소" info="서울특별시 송파구" />
        <BioItem img="phone.png" title="전화번호" info="010-6655-1793" />
        <BioItem img="email.png" title="이메일" info="seanbryan97@naver.com" />
        <BioItem
          img="github.png"
          title="깃허브"
          info="https://github.com/inputTitleHere"
        />
      </div>
    </section>
  );
}

function BioItem({ img, title, info }) {
  const imageRoot = process.env.PUBLIC_URL+"/img/icons/";
  const infoSection = info.startsWith("https") ? (
    <div className="bio-info">
      <a href={info}>{info}</a>
    </div>
  ) : (
    <div className="bio-info">{info}</div>
  );

  return (
    <table className="bio-item">
      <tbody>
        <tr>
          <td rowSpan="2">
            <img src={`${imageRoot}${img}`} alt="" />
          </td>
          <td className="td-title">
            <div className="bio-title">{title}</div>
          </td>
        </tr>
        <tr>
          <td className="td-info">{infoSection}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default AboutMe;
