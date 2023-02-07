import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import {
  FaFile,
  FaFileSignature,
  FaGithubAlt,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillFileText } from "react-icons/ai";

export function SectionTop() {
  return (
    <TopSectionContainer>
      <Logo>Gabriel Lima</Logo>
      <Slogan>Desenvolvedor Frontend</Slogan>
      <Divider />
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <Link href="https://github.com/gabriellimmaa" target="_blank">
          <FaGithubAlt />
        </Link>

        <Link
          href="https://www.linkedin.com/in/gabriel-lima-5263681aa/"
          target="_blank"
        >
          <FaLinkedinIn />
        </Link>

        <Link href="mailto:gabriellimamoraes@gmail.com" target="_blank">
          <MdEmail />
        </Link>

        <Link href="curriculo-ptbr.pdf" target="_blank">
          <AiFillFileText />
        </Link>
      </div>

      {/* <MadeBy>
        <u>Made By:</u> Islem Maboud
      </MadeBy> */}
    </TopSectionContainer>
  );
}

const TopSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 13%;
  height: 60vh;
  z-index: 1;
`;

const Logo = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 800;
  font-size: 80px;
  text-align: center;
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  margin-top: 10px;
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
