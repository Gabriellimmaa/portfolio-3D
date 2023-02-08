import React from "react";
import styled from "styled-components";
import "../../styles/projectsSection.css";
import "../../styles/animation.css";
import LauncherAlliance from "../../assets/images/projetos/launcher-alliance.png";
import OnMaps from "../../assets/images/projetos/onmaps.png";
import BRRPSite from "../../assets/images/projetos/brrp-site.png";
import BRRPBot from "../../assets/images/projetos/brrp-bot.png";
import PlataformaVideo from "../../assets/images/projetos/video-plataform.png";
import ActteensWpp from "../../assets/images/projetos/accttens-wpp.png";
import ActteensSite from "../../assets/images/projetos/actteens.png";
import Santander from "../../assets/images/projetos/santander.png";
import TurismoBandeirantes from "../../assets/images/projetos/turismo-bandeirantes.png";
import Agrolugue from "../../assets/images/projetos/agrolugue.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectCoverflow, Pagination } from "swiper";
import { Card } from "../card/Index";

export function SectionProjects() {
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
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "3fr 5fr 4fr",
                marginTop: "auto",
              }}
            >
              <span className="grid-cols-3"></span>
              <div className="grid-cols-6 d-flex justify-content-center align-items-center">
                <div className="smoke"></div>
                <div className="handle"></div>
                <div className="cup"></div>
              </div>
              <span className="grid-cols-3"></span>
            </div>
            <span className="grid-cols-3"></span>
            <h5
              className="grid-cols-12 text-center"
              style={{
                color: "black",
                textAlign: "center",
                marginBottom: "auto",
              }}
            >
              Pegue o café e espere um pouco, estou desenvolvendo mais um
              projeto.
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Card
            title="OnMaps"
            description="O site consiste no mapeamento do campus da UENP tanto com a área interna e externa do campus, com todas
            as salas e tudo mais"
            technologies="JS, TS, React JS, MapBox, GoogleMaps, HTML, CSS"
            awards={[
              {
                title: "1º HandsOn 2020",
              },
              {
                title: "3º GeniusCon Hackathon 2020",
              },
            ]}
            date="20/05/2020 - 10/08/2020"
            github="https://github.com/Gabriellimmaa/remapeando-o-campus"
            image={OnMaps}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Card
            title="Turismo Bandeirantes"
            description=" O projeto foi desenvolvido voltado ao publico turístico da região, no site e no aplicativo podemos obter algumas informações da cidade"
            technologies="React, React Native, Typescript, Node, Express"
            awards={[
              {
                title: "1º FrontHackathon 2022",
              },
            ]}
            date="18/08/2022 - 01/10/2022"
            github="https://github.com/Gabriellimmaa/turismo-bandeirantes"
            linkedin="https://www.linkedin.com/posts/gabriel-lima-5263681aa_turismo-pr-uenp-activity-6981333667029626880-7CCi?utm_source=share&utm_medium=member_desktop"
            image={TurismoBandeirantes}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Card
            title="Agrolugue"
            description="A solução é um site de locação de máquinas agrícolas e prestação de serviços para o setor agrícola, onde o usuário pode alugar máquinas e contratar serviços de forma rápida e fácil."
            technologies="React, Typescript, TailwindCSS"
            awards={[
              {
                title: "1º GeniusCon Hackathon 2022",
              },
            ]}
            date="06/10/2022"
            github="https://github.com/Gabriellimmaa/agrolugue-geniuscon-2022"
            linkedin="https://www.linkedin.com/posts/gabriel-lima-5263681aa_geniuscon-sebraepr-sebrae-activity-6984272253249064960-EfP-?utm_source=share&utm_medium=member_desktop"
            image={Agrolugue}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Card
            title="Dev Week Santander"
            description="Projeto desenvolvido na dev week santander 2020, com intuito de trabalhar com api rest"
            technologies="Angular, JS, TS, HTML, CSS, NodeJS"
            date="20/05/2020 - 10/08/2020"
            image={Santander}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Card
            title="Site ACTTEENS - Universidade sem fronteiras"
            description="Fui designado para desenvolver um site para o projeto universidade sem fronteiras da Universidade
            Estadual do Norte
            do Paraná (UENP)"
            technologies="HTML, CSS, JS, PHP, MongoDB"
            date="01/03/2022 - 01/03/2023"
            github="https://github.com/Gabriellimmaa/actteensprogram-website"
            image={ActteensSite}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Card
            title="Automação Whatsapp Web - Universidade sem fronteiras"
            description="Automação para whatsapp web. Ele envia mensagens de texto ou arquivos para uma planilha de números no
            excel"
            technologies="Python, Selenium, Pandas"
            date="01/03/2022 - 01/03/2023"
            github="https://github.com/Gabriellimmaa/actteensprogram-automatizacao"
            image={ActteensWpp}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Card
            title="Launcher Alliance"
            description="Software privado voltado para aplicações na plataforma discord.
            O projeto teve +360 vendas, porém veio a ser desativado por
            ferir algumas diretrizes"
            technologies=".NET, C#, Python, MongoDB"
            date="03/06/2019 - 05/02/2022"
            image={LauncherAlliance}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Card
            title="Plataforma de curso - video"
            description="Uma plataforma para upload de cursos e videos bem completa para uso"
            technologies="React, Vine, Typescript, GraphQL, GraphCMS, TailwindCSS"
            date="10/06/2022 - 28/06/2022"
            github="https://github.com/Gabriellimmaa/ignite-lab-react-js"
            image={PlataformaVideo}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Card
            title="Brasil Roleplay CHATBOT - Freelance"
            description="ChatBot para servidor discord com mais de 80 comandos, utilizado por mais de 17.700 usuários"
            technologies="Python, Discord.py, MongoDB"
            date="20/05/2020"
            image={BRRPBot}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Card
            title="Brasil Roleplay SITE - Freelance"
            description="Esse site tem autenticação com o discord e integração com um chatbot, tem um painel administrativo
            dentre mais funções para o usuário"
            technologies="PHP, HTML, CSS, JS, MongoDB"
            date="10/12/2021"
            image={BRRPSite}
          />
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
  text-align: center;
  margin: 0 0 30px 0;
  color: #fff;
  font-weight: 300;
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
