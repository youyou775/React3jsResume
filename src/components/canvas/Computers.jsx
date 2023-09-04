import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useHelper } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { PointLight, PointLightHelper, SpotLightHelper } from "three";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./imac/scene.gltf");
  //camera
  const cameraRef = useRef();
  const {
    camera,
    gl: { domElement },
  } = useThree();

  useEffect(() => {
    // camera.position.set(-1.77, 0.8, -4.16);
    // camera.rotation.set(-2.97, -0.45, -3.06);
    // cameraRef.current = camera;
    // console.log("Camera", cameraRef.current.position);
  }, [camera]);

  useFrame((state) => {
    // console.log(state.camera.position);
    // console.log(state.camera.rotation);
  }, []);
  //lights
  const pointLight = useRef();
  // useHelper(pointLight, PointLightHelper, 0.1, "green");

  const spotLight = useRef();
  // useHelper(spotLight, SpotLightHelper, 0.1, "red");

  return (
    <>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        ref={cameraRef}
        // target={[0, 0, 0]}
        args={[camera, domElement]}
        onUpdate={() => {
          // console.log(cameraRef.current?.position);
        }}
      />
      <mesh>
        <hemisphereLight intensity={1} groundColor="black" />
        <pointLight intensity={1} position={[1.2, -0.5, -2]} ref={pointLight} />
        <spotLight
          position={[0, -0.35, -2]}
          angle={0.5}
          penumbra={1}
          intensity={60}
          castShadow
          shadow-mapSize={1024}
          distance={2.5}
          ref={spotLight}
        />
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.75 : 1}
          position={isMobile ? [0, -0.4, 0] : [0, -0.75, 0]}
          rotation={[0, 0, 0]}
        />
        <ambientLight intensity={3} />

        {/* <axesHelper args={[5]} />
        <PointLightHelper light={pointLight} /> */}
      </mesh>
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{
        position: [-1.77, 0.8, -4.16],
        rotation: [-2.97, -0.45, -3.06],
        fov: 25,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* <ambientLight intensity={1} /> */}
      <Suspense fallback={<CanvasLoader />}>
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload />
    </Canvas>
  );
};
export default ComputersCanvas;
