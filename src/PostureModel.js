import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Model = ({ origin = [0, 0, 0] }) => {
  const { scene } = useGLTF("/fit1-Part.gltf");

  
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.geometry.computeBoundingBox();
        const box = child.geometry.boundingBox;
        const center = box.getCenter(new THREE.Vector3());

        // Shift the model so that the desired origin is at [0, 0, 0]
        scene.position.set(origin[0] - center.x, origin[1] - center.y, origin[2] - center.z);
      }
    });
  }, [scene, origin]);

  return <primitive object={scene} 
  scale={[1.5, 1.5, 1.5]}  />;
};

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [0, 5, 10], fov: 50 }}
      style={{ height: "800px", width: "800px" }}
    >
      <ambientLight intensity={5} />
      <directionalLight position={[2, 5, 2]} intensity={4.5} />
      <directionalLight position={[-2, -5, -2]} intensity={4.5} />
      <Model url = "fit1-Part.gltf" origin={[0, 0, 0]} /> {/* Set the model's origin here */}

      <OrbitControls
        enablePan={false}
        minDistance={1}
        maxDistance={5}
        enableZoom={true}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2} // Lock vertical rotation
        minPolarAngle={Math.PI / 2} // Lock vertical rotation
        target={[0, 0, 0]} // Ensure OrbitControls target is the origin
      />
    </Canvas>
  );
};

export default Scene;
