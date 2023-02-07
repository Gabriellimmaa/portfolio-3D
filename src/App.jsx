import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./components/earth";
import { SectionTop } from "./components/sectionTop";
import { Astronaut } from "./components/astronaut";
import { Terrain } from "./components/terrain";
import { SectionAbout } from "./components/sectionAbout";
import { SectionProjects } from "./components/sectionProjects";
import { Stars, useProgress } from "@react-three/drei";

function App() {
  const { progress } = useProgress();
  console.log(progress);

  return (
    <>
      {progress !== 100 && (
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "30px",
            fontWeight: "700",
            zIndex: 9999999,
          }}
        >
          CARREGANDO
        </div>
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
