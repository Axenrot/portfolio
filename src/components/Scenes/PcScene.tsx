import { Canvas, useThree, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Screen } from "@/models/Screen";
import * as THREE from "three";
import { Phone } from "@/models/Phone";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ProjectsMenu from "@/components/ProjectsMenu";
import ProjectsDialog from "../ProjectsDialog";

extend({ OrbitControls });

const Controls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef<any>();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Check if the left mouse button is pressed
      const LEFT_MOUSE_BUTTON_VALUE = 1;
      if (event.buttons !== LEFT_MOUSE_BUTTON_VALUE) {
        const { clientX, clientY } = event;
        const mouseX = (clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(clientY / window.innerHeight) * 2 + 1;

        // Update the OrbitControls target based on mouse movement
        const targetX = mouseX * 2;
        const targetY = mouseY * 1;

        gsap.to(controlsRef.current.target, {
          x: targetX,
          y: targetY,
          z: 0,
          duration: 0.5,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <OrbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enablePan={false}
      minDistance={10}
      maxDistance={10}
      minAzimuthAngle={-0.3}
      maxAzimuthAngle={0.3}
      minPolarAngle={1}
      maxPolarAngle={1.8}
    />
  );
};

const PcScene = ({ index = 1 }) => {
  const [currentOption, setCurrentOption] = useState<string>("hubbi");
  const cameraPosition = new THREE.Vector3(-0.8, 1.3, 10);
  const dirLight = useRef<THREE.DirectionalLight>(null);

  return (
    <span className="relative h-[80vh] w-full flex flex-col">
      <ProjectsMenu
        currentOption={currentOption}
        setCurrentOption={(value) => setCurrentOption(value)}
      />
      {currentOption && <ProjectsDialog currentOption={currentOption} />}
      <Canvas camera={{ near: 0.01, far: 1000, position: cameraPosition }}>
        <ambientLight intensity={0.5} />
        <directionalLight ref={dirLight} intensity={2} position={[-4, 7, 10]} />

        <Controls />

        <Screen
          selectedOption={currentOption}
          scale={[0.1, 0.1, 0.1]}
          position={[-0.5, -1.5, 0]}
        />
        <Phone
          selectedOption={currentOption}
          position={[-4, -0.2, 2.7]}
          rotation={[1.2, Math.PI, 0]}
        />
      </Canvas>
    </span>
  );
};

export default PcScene;
