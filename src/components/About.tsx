  import React from "react";
import "../App.scss";
import "../css/About.scss";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleCarry,
  faRunning,
  faChild,
  faCode, 
  faCalendarAlt,
  faUniversity,
  faBuilding
} from "@fortawesome/free-solid-svg-icons";
import { faBlogger, faGithub } from "@fortawesome/free-brands-svg-icons";

function About(): JSX.Element {
  return (
    <div id="about" className="padding-top-btm-5e">
      <div>
        <p className="menu-name font-color-pink">ABOUT</p>
      </div>
      <Container>
        <Row>
          {/* keywords */}
          <Col xs={12} sm={4} md={4} className="padding-top-btm-1e">
            <FontAwesomeIcon icon={faChild} className="icon-size" />
            <p className="font-bold-700 font-1H padding-top-1e">
              긍정
            </p>
            <p className="font-color-lightgray padding-btm-1e">
              항상 긍정적으로 생각합니다.
            </p>
          </Col>
          <Col xs={12} sm={4} md={4} className="padding-top-btm-1e">
            <FontAwesomeIcon icon={faRunning} className="icon-size" />
            <p className="font-bold-700 font-1H padding-top-1e">
              끈기
            </p>
            <p className="font-color-lightgray padding-btm-1e">
              쉽게 포기하지 않습니다.
            </p>
          </Col>
          <Col xs={12} sm={4} md={4} className="padding-top-btm-1e">
            <FontAwesomeIcon icon={faPeopleCarry} className="icon-size" />
            <p className="font-bold-700 font-1H padding-top-1e">
              {/* <span className="keyword-yellow">협력</span> */}
              협력
            </p>
            <p className="font-color-lightgray padding-btm-1e">
              서로 협력하며 일하는 것을 좋아합니다.
            </p>
          </Col>
        </Row>
        {/* profile */}
        <Row>
          <Col xs={12} sm={6} md={6}>
            <div className="padding-top-2e">
              <p className="font-bold-900 font-1H font-color-bl padding-top-2e">
                PROFILE
              </p>
            </div>
            <img src="./img/profile.png" alt="프로필 사진" id="profile-img" />
            <div>
              <p className="font-bold-700 font-1H font-color-lightgray">
                <span className="padding-left-right-05e">석현승</span>
              </p>
            </div>
            <div className="padding-top-btm-1e">
              <span className="padding-left-right-1e">
                <a
                  href="https://blog.naver.com/dev_seung2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faBlogger}
                    className="icon-size-2He icon-color"
                  />
                </a>
              </span>
              <span className="padding-left-right-1e">
                <a
                  href="https://github.com/devseung2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="icon-size-2He icon-color"
                  />
                </a>
              </span>
            </div>
          </Col>
          {/* education, career */}
          <Col xs={12} sm={6} md={6}>
            <div className="padding-top-btm-2e">
              <div>
                <p className="font-bold-900 font-1H font-color-bl">EDUCATION</p>
              </div>
              <div>
                <p className="font-color-lightgray font-bold-700">
                  <FontAwesomeIcon
                    icon={faUniversity}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">경북대학교 컴퓨터학부 대학원 (석사)</span>
                </p>
                <p className="font-color-lightgray font-bold-700">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">2018.03 - 2020.02</span>
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className="font-bold-900 font-1H font-color-bl">CAREER</p>
              </div>
              <div>
                <p className="font-color-lightgray font-bold-700">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">스타트업 - 풀스택 개발자</span>
                </p>
                <p className="font-color-lightgray font-bold-700">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">2017.11 - 2018.02 (4개월)</span>
                </p>
                <p className="font-color-lightgray font-bold-700">
                  <FontAwesomeIcon
                    icon={faCode}
                    className="icon-size-1e icon-color"
                  />
                  <span className="keyword-yellow margin-left-1e margin-right-03e">HTML5</span> 
                  <span className="keyword-yellow margin-left-right-03e">CSS3</span> 
                  <span className="keyword-yellow margin-left-right-03e">Bootstrap</span>
                </p>
                <p className="font-color-lightgray font-bold-700">
                  <span className="keyword-yellow">JavaScript(jQuery)</span> 
                  <span className="keyword-yellow margin-left-right-03e">Node.js</span> 
                  <span className="keyword-yellow margin-left-right-03e">MYSQL</span>
                </p>
              </div>
              <div className="bottom-line-small"></div>
              <div>
                <p className="font-color-lightgray font-bold-700">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">금융 IT회사 - 개발자</span>
                </p>
                <p className="font-color-lightgray font-bold-700">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">2016.08 - 2017.03 (8개월)</span>
                </p>
                <p className="font-color-lightgray font-bold-700">
                  <FontAwesomeIcon
                    icon={faCode}
                    className="icon-size-1e icon-color"
                  />
                  <span className="keyword-yellow margin-left-1e margin-right-03e">ORACLE</span> 
                  <span className="keyword-yellow margin-left-right-03e">SPRING</span> 
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
