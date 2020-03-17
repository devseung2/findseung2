import React from "react";
import "../App.scss";
import { Container, Row, Col, UncontrolledCarousel } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const carousel_blogpage = [
  {
    src: "./img/blogpage.png"
  },
  {
    src: "./img/blogpage2.png"
  },
  {
    src: "./img/blogpage3.png"
  },
  {
    src: "./img/blogpage4.png"
  }
];

const carousel_portfolio = [
  {
    src: "./img/portfolio.png"
  },
  {
    src: "./img/portfolio2.png"
  },
  {
    src: "./img/portfolio3.png"
  },
  {
    src: "./img/portfolio4.png"
  }
];

function Projects(): JSX.Element {
  return (
    <div id="projects" className="padding-top-btm-4e">
      <div>
        <p className="menu-name font-color-pink">PROJECTS</p>
      </div>
      <Container>
        <Row>
          {/* 프로젝트 1번 포트폴리오 */}
          <Col xs={12} sm={12} md={6}>
            <div>
              <p className="font-bold-900 font-2">포트폴리오 웹 사이트</p>
              <p className="font-color-lightgray font-bold">
                React로 SPA를 개발한 포트폴리오 사이트입니다.
              </p>
              <div className="padding-top-btm-1e">
                <p className="font-bold">2020.01.11 - 2020.01.24(2주)</p>
                <p className="font-bold">React, SCSS, Reactstrap</p>
              </div>
              <div>
                <p className="font-bold">기획/디자인/개발</p>
              </div>
              <div className="padding-top-1e">
                <a
                  href="http://devseung2.github.io/findseung2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="icon-size-2e icon-color"
                  />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} className="padding-btm-1e">
            <UncontrolledCarousel items={carousel_portfolio} />
          </Col>
        </Row>
        
        <div className="bottom-line"></div>

        {/* 프로젝트 2번 블로그페이지 */}
        <Row>
          <Col xs={12} sm={12} md={6} className="padding-btm-1e">
            <UncontrolledCarousel items={carousel_blogpage} />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div>
              <p className="font-bold-900 font-2">블로그페이지</p>
              <p className="font-color-lightgray font-bold">
                풀스택으로 개발한 블로그 체험단 서비스입니다.
              </p>
              <div className="padding-top-btm-1e">
                <p className="font-bold">2017.11.01 - 2018.01.31(3개월)</p>
                <p className="font-bold">HTML5, CSS3, Bootstrap</p>
                <p className="font-bold">JavaScript(jQuery), Node.js, MYSQL</p>
              </div>
              <div>
                <p className="font-bold">기획/디자인/개발</p>
              </div>
              <div className="padding-top-1e">
                <a
                  href="http://www.blogpage.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="icon-size-2e icon-color"
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Projects;
