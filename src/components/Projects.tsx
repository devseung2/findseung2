import React from "react";
import "../App.scss";
import "../css/Projects.scss";
import Grid from "@material-ui/core/Grid";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function Projects(): JSX.Element {
  return (
    <div id="projects" className="padding-top-btm-4e">
      <div>
        <p className="menu-name font-color-pink">PROJECTS</p>
      </div>
      <Grid container spacing={2}>
        {/* 프로젝트 1번 블로그페이지 */}
        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={12} md={5}>
          <Carousel>
            <div>
              <img src="/img/blogpage.png" alt="블로그페이지 사진1" />
            </div>
            <div>
              <img src="/img/blogpage2.png" alt="블로그페이지 사진2" />
            </div>
            <div>
              <img src="/img/blogpage3.png" alt="블로그페이지 사진3" />
            </div>
            <div>
              <img src="/img/blogpage4.png" alt="블로그페이지 사진4" />
            </div>
          </Carousel>
        </Grid>
        <Grid item xs={12} md={5}>
          <div>
            <p className="font-bold-900 font-2">블로그페이지</p>
            <p className="font-color-lightgray font-bold">
              풀스택으로 개발한 블로그 체험단 서비스입니다.
            </p>
            <div className="padding-top-btm-1e">
              <p className="font-bold">2017.11.01 - 2018.01.31(3개월)</p>
              <p className="font-bold">
                HTML5, CSS3, Bootstrap, JavaScript(jQuery), Node.js, MYSQL
              </p>
              <p className="font-bold">
                다양한 <span className="font-bold-900">Open API</span>{" "}
                사용(네이버 아이디 로그인, 다음 Map API 등)
              </p>
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
        </Grid>
        <Grid item xs={12} md={1}></Grid>
      </Grid>

      {/* <div className="line"></div> */}

      <Grid container spacing={2} className="padding-top-7e">
        {/* 프로젝트 2번 포트폴리오 */}
        <Grid item xs={12} md={1}></Grid>

        <Grid item xs={12} md={5}>
          <Carousel>
            <div>
              <img src="/img/portfolio.png" alt="포트폴리오 사진1" />
            </div>
            <div>
              <img src="/img/portfolio2.png" alt="포트폴리오 사진2" />
            </div>
            <div>
              <img src="/img/portfolio3.png" alt="포트폴리오 사진3" />
            </div>
            <div>
              <img src="/img/portfolio4.png" alt="포트폴리오 사진4" />
            </div>
          </Carousel>
        </Grid>
        <Grid item xs={12} md={5}>
          <div>
            <p className="font-bold-900 font-2">포트폴리오 웹 사이트</p>
            <p className="font-color-lightgray font-bold">
              React로 SPA를 개발한 포트폴리오 사이트입니다.
            </p>
            <div className="padding-top-btm-1e">
              <p className="font-bold">2020.01.11 - 2020.01.24(2주)</p>
              <p className="font-bold">React, TypeScript, SCSS, Material-ui</p>
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
        </Grid>
        <Grid item xs={12} md={1}></Grid>
      </Grid>
    </div>
  );
}

export default Projects;
