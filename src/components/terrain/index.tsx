import React, { useRef, Suspense, useEffect, useState } from "react";
import { Euler, useFrame, useLoader, Vector3 } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Terrain() {
  const model = useLoader(GLTFLoader, "/Terrain.glb");

  const [position, setPosition] = useState<Vector3>([0, -15, -5]);
  const [rotation, setRotation] = useState<Euler>([-0.5, 0.5, 0]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", () => {
      setOffset(window.pageYOffset);
    });
  }, []);

  useEffect(() => {
    if (offset < 400) {
      setPosition([0, -15 + offset * 0.03, -5]);
      setRotation([-0.5 + offset * 0.0005, 0.5, 0]);
    } else {
      const aux = -1.2 + offset * -0.01;
      if (aux > -12.3) {
        setPosition([0, -15 + 420 * 0.03, -1.2 + offset * -0.01]);
      }
    }
  }, [offset]);

  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight color="#f6f3ea" position={[2, 0, 10]} intensity={1.2} />
      <mesh position={position} rotation={rotation}>
        <Suspense fallback={null}>
          <primitive object={model.scene} />
        </Suspense>
      </mesh>
    </>
  );
}
