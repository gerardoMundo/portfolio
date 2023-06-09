/* eslint-disable react/no-unknown-property */
import { useRef } from "react";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const Model3D = () => {
  const planet = "./stylized_planet/scene.gltf";

  const model3D = useGLTF(planet);

  const meshRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    meshRef.current.rotation.y = -elapsedTime * 0.3;
  });

  return (
    <mesh ref={meshRef}>
      <primitive object={model3D.scene} scale={10} />
    </mesh>
  );
};
