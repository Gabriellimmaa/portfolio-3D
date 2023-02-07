import React, { useRef, Suspense, useEffect, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export function Astronaut(props) {
  const model = useLoader(GLTFLoader, '/Astronaut.glb')
  let mixer
  if (model.animations.length) {
      mixer = new THREE.AnimationMixer(model.scene);
      model.animations.forEach(clip => {
          const action = mixer.clipAction(clip)
          action.play();
      });
  }

  useFrame((state, delta) => {
      mixer?.update(delta)
  })

  const [rotation, setRotation] = useState([1.3,-1,1]);
  const [ position, setPosition ] = useState([0,-5.5,-5]);
  const [ offset, setOffset ] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setOffset(window.pageYOffset);
    });
  }, []);

  useEffect(() => {
    setRotation([1.3 + offset * 0.0001,-1,1]);
    setPosition([0.4 + offset * -0.01,-5.5,-5]);
  }, [offset]);


  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.2} />
      <mesh rotation={rotation}>
        <Suspense fallback={null}>
          <primitive object={model.scene} position={position} rotation={[-0.5,0,0]} />
        </Suspense>
        {/* <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.3}
        /> */}
      </mesh>
    </>
  );
}
