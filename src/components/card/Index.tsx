import React from "react";
import {
  FaGithubAlt,
  FaLinkedin,
} from "react-icons/fa";

type TProps = {
  title: string;
  description: string;
  image: string;
  date: string;
  technologies: string;
  awards?: {
    title: string;
    description?: string;
  }[];
  linkedin?: string;
  github?: string;
};

export function Card({
  title,
  description,
  image,
  date,
  technologies,
  awards,
  linkedin,
  github,
}: TProps) {
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
              {awards.map((award, _index) => {
                return (
                  <div key={_index}>
                    <b>🏆 {award.title}</b> {award.description}
                    <br />
                  </div>
                );
              })}
            </>
          )}
          <br />
          <b>Tecnologias:</b> {technologies}
        </p>
        <label className="space-between">
          <span>{date}</span>
          <div style={{ display: "flex", gap: 5 }}>
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
