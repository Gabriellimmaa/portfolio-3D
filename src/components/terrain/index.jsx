import React, { useRef, Suspense, useEffect, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export function Terrain(props) {
  const model = useLoader(GLTFLoader, '/Terrain.glb')

  const [position, setPosition] = useState([0,-15,-10]);
  const [rotation, setRotation] = useState([-0.5,0.5,0]);
  const [ offset, setOffset ] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setOffset(window.pageYOffset);
    });
  }, []);

  useEffect(() => {
    setPosition([0,-15 + offset * 0.03,-10]);
    setRotation([-0.5 + offset * 0.0005,0.5,0])
  }, [offset]);

  
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight color="#f6f3ea" position={[2, 0, 10]} intensity={1.2} />
      <mesh position={position} rotation={rotation}>
        <Suspense fallback={null}>
          <primitive object={model.scene}/>
        </Suspense>
      </mesh>
    </>
  );
}
