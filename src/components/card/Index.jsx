import React from "react";
import {
  FaFile,
  FaFileSignature,
  FaGithubAlt,
  FaLinkedin,
} from "react-icons/fa";
import styled from "styled-components";

export function Card({
  title,
  description,
  image,
  date,
  technologies,
  awards,
  linkedin,
  github,
}) {
  return (
    <div className="swiper row m-0 p-0 h-100">
      <img className="" src={image} alt="Launcher Alliance" />
      <div className="swiper-container">
        <h1 className="">{title}</h1>
        <p className="">
          {description}
          <br />
          {awards && (
            <>
              <br />
              {awards.map((award) => {
                return (
                  <>
                    <b>🏆 {award.title}</b> {award.description}
                    <br />
                  </>
                );
              })}
            </>
          )}
          <br />
          <b>Tecnologias:</b> {technologies}
        </p>
        <label className="space-between">
          <span>{date}</span>
          <div>
            {github && (
              <a href={github} rel="noreferrer" target="_blank">
                <FaGithubAlt />
              </a>
            )}
            {linkedin && (
              <a href={linkedin} rel="noreferrer" target="_blank">
                <FaLinkedin />
              </a>
            )}
          </div>
        </label>
      </div>
    </div>
  );
}
