

// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'
// import { useFrame } from '@react-three/fiber'
// import { useEffect } from 'react'


// export function LaptopModel(props) {
//     const { nodes, materials } = useGLTF('/laptopmodel.glb')
//     const modelRef = useRef()
//     useEffect(() => {
//         if (modelRef.current) {
//           modelRef.current.rotation.x = Math.PI / 6; // Rotate downwards by 30 degrees
//         //   modelRef.current.rotation.y = Math.PI / 9
//         }
//       }, []);
//     // useFrame(() => {
//     //     if (modelRef.current) {
//     //         modelRef.current.rotation.x += 0.001; // Adjust the value for speed
//     //     }
//     // });

//     return (
//         <group ref={modelRef} position={[0,-3,0]} scale={[2.1,2.1,2.1]} rotation={[0,0,0]}
//             {...props} dispose={null}>
//             <group position={[0, 0.114, -1.357]} rotation={[-1.92, 0, 0]}>
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Camera_Glass.geometry}
//                     material={materials['Camera glass']}
//                     position={[0, 0.066, 2.712]}
//                     rotation={[Math.PI / 2, 0, 0]}
//                     scale={[2.361, 2.361, 1]}
//                 />
//                 <group rotation={[Math.PI / 2, 0, 0]}>
//                     <mesh
//                         castShadow
//                         receiveShadow
//                         geometry={nodes.Cube020.geometry}
//                         material={materials.Screen}
//                     />
//                     <mesh
//                         castShadow
//                         receiveShadow
//                         geometry={nodes.Cube020_1.geometry}
//                         material={materials['Screen Glass']}
//                     />
//                 </group>
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Display_frame.geometry}
//                     material={materials.Body}
//                     rotation={[Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Display_top.geometry}
//                     material={materials.Body}
//                     rotation={[Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Hinge.geometry}
//                     material={materials.Body}
//                     rotation={[Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Lens_1.geometry}
//                     material={materials['Camera lens']}
//                     position={[0, 0.069, 2.712]}
//                     rotation={[Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Lens_2.geometry}
//                     material={materials['Camera lens']}
//                     position={[0, 0.069, 2.712]}
//                     rotation={[Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Lens_3.geometry}
//                     material={materials['Camera lens']}
//                     position={[0, 0.074, 2.712]}
//                     rotation={[Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Lens_4.geometry}
//                     material={materials['Camera lens']}
//                     position={[0, 0.079, 2.712]}
//                     rotation={[Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Lens_5.geometry}
//                     material={materials['Camera lens']}
//                     position={[0, 0.088, 2.712]}
//                     rotation={[Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Lens_back_Cover.geometry}
//                     material={materials.Body}
//                     position={[0, -1.357, -0.114]}
//                     rotation={[Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Lens_Front_Cover.geometry}
//                     material={materials.Body}
//                     position={[0, -1.357, -0.114]}
//                     rotation={[Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Lens_Mid_rim.geometry}
//                     material={materials.Body}
//                     position={[0, -1.357, -0.114]}
//                     rotation={[Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Screen_pad.geometry}
//                     material={materials.Body}
//                     position={[0, 0.076, 1.503]}
//                     rotation={[Math.PI / 2, 0, 0]}
//                 />
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.TOP_Pi_Logo.geometry}
//                     material={materials.Logo}
//                     position={[-0.002, 0.159, 1.402]}
//                     rotation={[Math.PI / 2, 0, 0]}
//                 />
//             </group>
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Base.geometry}
//                 material={materials.Body}
//                 position={[0, 0.072, 0.117]}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Pads.geometry}
//                 material={materials.Body}
//                 position={[-1.748, 0.006, -1.162]}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.ScreW.geometry}
//                 material={materials.Screws}
//                 position={[0, 0.075, 0.041]}
//                 scale={0.888}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.LED.geometry}
//                 material={materials['LED Lights']}
//                 position={[-1.207, 0.158, -1.214]}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.keypad_base.geometry}
//                 material={materials.Body}
//                 position={[0, 0.168, 0.045]}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys016.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys017.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys018.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys019.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys001.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys002.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys003.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys004.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys005.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys006.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys007.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys008.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys009.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys010.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys011.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys012.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys013.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys014.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys015.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys020.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys021.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys022.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys023.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys024.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys025.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys026.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys027.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys028.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys029.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys030.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys031.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys032.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys033.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys034.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys035.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys036.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys037.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys038.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys039.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys040.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys041.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys042.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys043.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys044.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys045.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys046.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys047.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys048.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys049.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys050.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys051.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys052.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys053.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys054.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys055.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys056.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys057.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys058.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys059.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys060.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys061.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys062.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys063.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys064.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys065.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys066.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys067.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys068.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys069.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys070.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys071.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys072.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys073.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys074.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys075.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys076.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys077.geometry}
//                 material={materials['Key pad']}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Keys078.geometry}
//                 material={materials['Key pad']}
//             />
//             <group position={[-2.044, 0.077, -0.322]}>
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Mesh001.geometry}
//                     material={materials.Ports_Steel}
//                 />
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Mesh001_1.geometry}
//                     material={materials.Ports_Plastic}
//                 />
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Mesh001_2.geometry}
//                     material={materials.Ports_Gold}
//                 />
//             </group>
//             <group position={[0, 0.081, -1.077]}>
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Mesh003.geometry}
//                     material={materials.Ports_Steel}
//                 />
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Mesh003_1.geometry}
//                     material={materials.Ports_Plastic}
//                 />
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Mesh003_2.geometry}
//                     material={materials.Ports_Gold}
//                 />
//             </group>
//             <group position={[2.015, 0.077, -0.558]} scale={0.992}>
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Mesh002.geometry}
//                     material={materials.Ports_Steel}
//                 />
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Mesh002_1.geometry}
//                     material={materials.Ports_Gold}
//                 />
//             </group>
//             <group position={[2.008, 0.086, -0.255]} scale={1.022}>
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Mesh004.geometry}
//                     material={materials.Ports_Steel}
//                 />
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Mesh004_1.geometry}
//                     material={materials.Ports_Gold}
//                 />
//             </group>
//             <group position={[-2.104, 0.107, -0.568]}>
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Mesh006.geometry}
//                     material={materials.Ports_Steel}
//                 />
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Mesh006_1.geometry}
//                     material={materials.Ports_Plastic}
//                 />
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Mesh006_2.geometry}
//                     material={materials.Ports_Gold}
//                 />
//             </group>
//             <group position={[1.994, 0.083, -0.805]}>
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Plane015.geometry}
//                     material={materials.Ports_Steel}
//                 />
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Plane015_1.geometry}
//                     material={materials.Ports_Gold}
//                 />
//             </group>
//         </group>
//     )
// }
// function animate(time) {

//     mesh.rotation.x = time / 2000;
//     mesh.rotation.y = time / 1000;

//     renderer.render(LaptopModel, camera);

// }
// useGLTF.preload('/laptopmodel.glb')


