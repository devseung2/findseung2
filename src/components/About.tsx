import React from "react";
import "../App.scss";
import "../css/About.scss";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleCarry,
  faRunning,
  faChild
} from "@fortawesome/free-solid-svg-icons";
import { faBlogger, faGithub } from "@fortawesome/free-brands-svg-icons";

function About(): JSX.Element {
  return (
    <div id="about" className="padding-top-btm-4e">
      <div>
        <p className="menu-name font-color-pink">ABOUT</p>
      </div>
      <Container>
        <Row>
          {/* keywords */}
          <Col xs={12} sm={4} md={4}>
            <FontAwesomeIcon icon={faChild} className="icon-size" />
            <p className="font-bold-700 font-1H padding-top-1e font-color-lightgray">
              긍정
            </p>
            <p className="font-color-lightgray padding-btm-1e">
              항상 긍정적으로 생각합니다.
            </p>
          </Col>
          <Col xs={12} sm={4} md={4}>
            <FontAwesomeIcon icon={faRunning} className="icon-size" />
            <p className="font-bold-700 font-1H padding-top-1e font-color-lightgray">
              끈기
            </p>
            <p className="font-color-lightgray padding-btm-1e">
              쉽게 포기하지 않습니다.
            </p>
          </Col>
          <Col xs={12} sm={4} md={4}>
            <FontAwesomeIcon icon={faPeopleCarry} className="icon-size" />
            <p className="font-bold-700 font-1H padding-top-1e font-color-lightgray">
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
            <div>
              <p className="font-bold-900 font-1H font-color-bl padding-top-2e">
                Profile
              </p>
            </div>
            <img src="./img/profile.png" alt="프로필 사진" id="profile-img" />
            <div>
              <p className="font-bold-700 font-1H font-color-lightgray">
                석현승
              </p>
              <p className="font-bold-700 font-color-lightgray">1991.12.02</p>
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
            <div className="padding-top-btm-5e">
              <div>
                <p className="font-bold-900 font-1H font-color-bl">Education</p>
              </div>
              <div>
                <p className="font-color-lightgray font-bold-700">
                  경북대학교 컴퓨터학부 대학원(석사)
                </p>
                <p className="font-color-lightgray font-bold-700">
                  2018.03 - 2020.02
                </p>
              </div>
            </div>
            <div>
              <div>
                <p className="font-bold-900 font-1H font-color-bl">Career</p>
              </div>
              <div>
                <p className="font-color-lightgray font-bold-700">
                  금융 IT회사 개발자
                </p>
                <p className="font-color-lightgray font-bold-700">
                  2016.08.01 - 2017.03.31(8개월)
                </p>
                <p className="font-color-lightgray font-bold-700">
                  ORACLE, SPRING
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
