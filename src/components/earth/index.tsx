import React, { useRef, Suspense, useEffect, useState } from "react";
import { useFrame, useLoader, Vector3 } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Earth() {
  const model = useLoader(GLTFLoader, "/Planet.glb");
  let mixer: THREE.AnimationMixer;
  if (model.animations.length) {
    mixer = new THREE.AnimationMixer(model.scene);
    model.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta);
  });

  const [position, setPosition] = useState<Vector3>([-4, 0, -1]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setOffset(window.pageYOffset);
    });
  }, []);

  useEffect(() => {
    setPosition([-5, 0, -1 + offset * -0.01]);
  }, [offset]);

  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight color="#f6f3ea" position={[2, 0, 10]} intensity={1.2} />
      <mesh position={position}>
        <Suspense fallback={null}>
          <primitive object={model.scene} rotation={[0.3, -0.1, -0.4]} />
        </Suspense>
      </mesh>
    </>
  );
}
