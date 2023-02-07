import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import "../../styles/projectsSection.css";
import "../../styles/animation.css";
import LauncherAlliance from "../../assets/images/projetos/launcher-alliance.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

export function ProjectsSection() {
  return (
    <section id="projetos">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        loop={true}
        modules={[EffectCoverflow, Pagination]}
        className="swiper mySwiper"
      >
        <SwiperSlide className="swiper-slide">
          <div className="swiper row m-0 p-0 h-100">
            <span className="col-12"></span>
            <span className="col-3"></span>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <div className="smoke"></div>
              <div className="handle"></div>
              <div className="cup"></div>
            </div>
            <span className="col-3"></span>
            <h5
              className="col-12 text-center"
              style={{
                color: "black",
              }}
            >
              Pegue o café e espere um pouco, estou desenvolvendo mais um
              projeto.
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div class="swiper row m-0 p-0 h-100">
            <img
              class="col-12 m-0 p-0"
              src={LauncherAlliance}
              alt="Launcher Alliance"
            />
            <h1 class="col-12">Launcher Alliance</h1>
            <p class="col-12 m-0">
              Software privado voltado para aplicações na plataforma discord. O
              projeto teve +360 vendas, porém veio a ser desativado por ferir
              algumas diretrizes
              <br />
              <br />
              <b>Tecnologias:</b> .NET, C#, Python, MongoDB
            </p>
            <span class="col-3"></span>
            <span class="col-3"></span>
            <label class="col-12">03/06/2019 - 05/02/2022</label>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

const TopSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 13%;
  z-index: 1;
`;

const Logo = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 800;
  font-size: 80px;
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  margin-top: 10px;
`;

const Paragraph = styled.p`
  margin: 0;
  margin-top: 3em;
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
  max-width: 30%;
  text-align: center;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
  outline: none;
  color: #fff;
  background-color: transparent;
  font-size: 30px;
  transition: all 0.3s ease-in-out;
  border: 2px solid transparent;
  z-index: 99999;

  &:hover {
    background-color: rgb(219, 219, 219, 0.5);
    border: 2px solid #fff;
    cursor: pointer;
  }
`;

const Divider = styled.div`
  background-color: #fff;
  height: 2px;
  width: 30%;
  margin: 2em 0;
`;
