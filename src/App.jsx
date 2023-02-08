import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import { Earth } from "./components/earth";
import { SectionTop } from "./components/sectionTop";
import { Astronaut } from "./components/astronaut";
import { Terrain } from "./components/terrain";
import { SectionAbout } from "./components/sectionAbout";
import { SectionProjects } from "./components/sectionProjects";
import { Stars, useProgress } from "@react-three/drei";
import "./styles/loading.css";

function App() {
  const { progress } = useProgress();

  return (
    <>
      {progress !== 100 && (
        <LoadingContainer className="background">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          Carregando
        </LoadingContainer>
      )}

      <CanvasContainer>
        <div
          style={{
            position: "absolute",
            width: "100%",
          }}
        >
          <SectionTop />
          <SectionProjects />
          <SectionAbout />
        </div>
        <Canvas>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
        <Canvas
          style={{
            position: "absolute",
            zIndex: 2,
            top: 0,
            right: 0,
          }}
          className="floating"
        >
          <Suspense fallback={null}>
            <Astronaut />
          </Suspense>
        </Canvas>
        <Canvas
          style={{
            position: "fixed",
            zIndex: -1,
            bottom: 0,
          }}
          className="background"
        >
          <Stars />
          <Suspense fallback={null}>
            <Terrain />
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </>
  );
}

export default App;

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const LoadingContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  z-index: 9999999;
`;
