import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'
import * as THREE from 'three';


export function LaptopModel2(props) {
  const { nodes, materials } = useGLTF(
    '/laptopmodel2.glb'
  )
  // let nodes, materials, scene;

  // try {
  //   // Load the model
  //   ({ nodes, materials, scene } = useGLTF('/laptopmodel2.glb'));
  // } catch (err) {
  //   console.error('Error loading 3D model:', err);
  //   setError(err);
  //   console.log(err,"err")
  // }

  const modelRef = useRef()
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.x = Math.PI / 6; // Rotate downwards by 30 degrees
      //   modelRef.current.rotation.y = Math.PI / 9
    }
  }, []);

  return (
    <group ref={modelRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base.geometry}
        material={materials.Body}
        position={[0, 0.072, 0.117]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ScreW.geometry}
        material={materials.Screws}
        position={[0, 0.075, 0.041]}
        scale={0.888}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LED.geometry}
        material={materials['LED Lights']}
        position={[-1.207, 0.158, -1.214]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Keys016.geometry}
        material={materials['Key pad']}
      />
      <group position={[-2.044, 0.077, -0.322]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001.geometry}
          material={materials.Ports_Plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_1.geometry}
          material={materials.Ports_Steel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_2.geometry}
          material={materials.Ports_Gold}
        />
      </group>
      <group position={[0, 0.081, -1.077]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003.geometry}
          material={materials.Ports_Steel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_1.geometry}
          material={materials.Ports_Plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_2.geometry}
          material={materials.Ports_Gold}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Camera_Glass.geometry}
        material={materials['Camera glass']}
        position={[0, 2.64, -2.347]}
        rotation={[-Math.PI / 9, 0, 0]}
        scale={[2.361, 2.361, 1]}
      />
      <group position={[0, 0.114, -1.357]} rotation={[-Math.PI / 9, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={materials.Screen}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020_1.geometry}
          material={materials['Screen Glass']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lens_1.geometry}
        material={materials['Camera lens']}
        position={[0, 2.639, -2.35]}
        rotation={[-Math.PI / 9, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TOP_Pi_Logo.geometry}
        material={materials.Logo}
        position={[-0.002, 1.378, -1.986]}
        rotation={[-Math.PI / 9, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/laptopmodel2.glb')



