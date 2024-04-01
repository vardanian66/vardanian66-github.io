import './App.css';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';
import { VRButton, XR } from '@react-three/xr'
import Cube from './Cube';

function App() {
  return (
    <>
    <VRButton />
      <Canvas>
        <XR>
        <OrbitControls />
        <ambientLight />
        <mesh>
          <boxGeometry args={[2, 2, 2]}/>
          <meshStandardMaterial color={'mediumpurple'} />
        </mesh>
        </XR>
      </Canvas>
    </>
  );
}

export default App;
