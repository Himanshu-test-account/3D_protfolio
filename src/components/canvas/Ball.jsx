// Import necessary React and Three.js related dependencies
import React, { Suspense } from "react"; // Suspense for handling loading states
import { Canvas } from "@react-three/fiber"; // Main container for Three.js scenes
import {
  Decal,         // For applying 2D images onto 3D surfaces
  Float,         // Creates a floating animation effect
  OrbitControls, // Enables camera movement around the object
  Preload,       // For preloading assets
  useTexture,    // Hook to load textures efficiently
} from "@react-three/drei";

import CanvasLoader from "../Loader"; // Custom loading component

/**
 * Ball Component - Creates a 3D floating ball with an image decal
 * @param {Object} props - Contains the image URL for the decal
 */
const Ball = (props) => {
  // Load the image texture for the decal
  // useTexture returns an array of loaded textures
  const [decal] = useTexture([props.imgUrl]);

  return (
    // Float component creates a smooth floating animation
    <Float 
      speed={1.75}           // Speed of the floating animation
      rotationIntensity={1}  // How much the object rotates while floating
      floatIntensity={2}     // How far the object moves up and down
    >
      {/* Add ambient light for overall scene illumination */}
      <ambientLight intensity={0.25} />
      
      {/* Add directional light for specific lighting direction */}
      <directionalLight position={[0, 0, 0.05]} />

      {/* Create the main 3D mesh object */}
      <mesh 
        castShadow        // This object will cast shadows
        receiveShadow     // This object can receive shadows
        scale={2.75}      // Size of the ball
      >
        {/* Create an icosahedron (20-sided) geometry */}
        <icosahedronGeometry args={[1, 1]} /> {/* args: [radius, detail] */}

        {/* Define the material properties for the ball */}
        <meshStandardMaterial
          color="#fff8eb"           // Base color of the material
          polygonOffset            // Enable polygon offset to prevent z-fighting
          polygonOffsetFactor={-5} // Amount of offset
          flatShading              // Use flat shading for a faceted look
        />

        {/* Apply the decal (image) onto the ball */}
        <Decal
          position={[0, 0, 1]}     // Position of the decal on the ball
          rotation={[2 * Math.PI, 0, 6.25]}  // Rotation of the decal
          scale={1}                // Size of the decal
          map={decal}             // The texture to use for the decal
          flatShading             // Match the ball's shading style
        />
      </mesh>
    </Float>
  );
};

/**
 * BallCanvas Component - Wrapper for the 3D scene
 * @param {Object} props
 * @param {string} props.icon - URL of the image to display on the ball
 */
const BallCanvas = ({ icon }) => {
  return (
    // Canvas is the container for all Three.js elements
    <Canvas 
      frameloop="demand"    // Only render when needed (better performance)
      gl={{ preserveDrawingBuffer: true }}  // Enable screenshot capability
    >
      {/* Suspense provides a loading state while content loads */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls allows the user to rotate the camera around the ball */}
        <OrbitControls enableZoom={false} />
        
        {/* Render the 3D ball with the specified image */}
        <Ball imgUrl={icon} />
      </Suspense>

      {/* Preload all assets for better performance */}
      <Preload all />
    </Canvas>
  );
};

// Export the component for use in other parts of the application
export default BallCanvas;