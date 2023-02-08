import React, { useEffect, useState } from "react";
import styled from "styled-components";

export function SectionAbout() {
  const [offset, setOffset] = useState(0);
  const [marginTop, setMarginTop] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setOffset(window.pageYOffset);
    });
  }, []);

  useEffect(() => {
    setMarginTop(offset * -0.25);
  }, [offset]);

  return (
    <Section id="about">
      <Slogan
        style={{
          marginTop: marginTop,
        }}
      >
        2022 Gabriel Lima - Feito com ❤️ em React
      </Slogan>
    </Section>
  );
}

const Section = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  height: 100vh;
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  margin-top: 10px;
  text-align: center;
`;
