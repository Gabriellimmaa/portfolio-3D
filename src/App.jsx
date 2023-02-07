import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Earth } from "./components/earth";
import { TopSection } from "./components/topSection";
import { Astronaut } from "./components/astronaut";
import { Terrain } from "./components/terrain";
import { ProjectsSection } from "./components/projectsSection";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {

  return (
    <CanvasContainer>
      <div style={{
        position: 'absolute',
        width: '100%'
      }}>
        <TopSection />
        <ProjectsSection />
      </div>
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
      <Canvas style={{
        position: "absolute",
        zIndex: 2,
        top: 0,
        right: 0,
      }}>
        <Suspense fallback={null}>
          <Astronaut />
        </Suspense>
      </Canvas>
      <Canvas style={{
        position: "fixed",
        zIndex: -1,
        bottom: 0,
      }}>
        <Suspense fallback={null}>
          <Terrain />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;
