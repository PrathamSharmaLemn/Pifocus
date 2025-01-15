import { Assets } from "../../public/Assests"
import Image from "next/image"
import Button from "../button/Button"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, useProgress, Stage, Bounds, useScroll } from "@react-three/drei"
import { Suspense, useState } from "react"
import { LaptopModel2 } from "../laptop3dModel/LaptopModel2"
import { PerformanceMonitor } from "@react-three/drei"
import ModalForm from "../modal/ModalForm"
// import { GLTFLoader } from "three/examples/jsm/Addons.js"
// import { EffectComposer, BrightnessContrast } from '@react-three/postprocessing';
import Link from "next/link"

export default function Banner1({setOpenModal}) {
    const [ddpr, setDdpr] = useState(0.5)
    
    return (
        <>

            <div className="sm:hidden pt-96 flex flex-col justify-center items-center bg-customRadialBanner1Mobile">
                <p className="text-3xl font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">AB PADHEGA BHARAT</p>
                <p className="text-sm text-white">A tech-forward & affordable laptop for students</p>
                <div className="mt-4 w-full flex  flex-col justify-center items-center h-80 bg-bgImage bg-no-repeat bg-cover">

                    <div className="mt-4 ml-0 flex relative justify-center items-center">
                        <img
                            src={"/Laptop Hero.png"}
                            width={400}
                            height={400}
                        />
                        <div className="absolute top-16">
                        {/* <div> */}
                            <img
                                // src={Assets.mobileLaptopPiBook}
                                src="/Pi book (1) 2.svg"
                                width={210}
                                height={210}
                            />
                        </div>

                    </div>

                </div>
                {/* <span onClick={()=>setOpenModal(true)} className="py-3 px-8 mt-8 mb-2 rounded-md text-sm bg-blue-500 text-white hover:cursor-pointer">Pre-Order</span> */}

            </div>




            <div className="sm:flex  hidden flex-row justify-evenly items-center py-12 px-8 bg-customRadialBanner1">
                <div className="absolute w-full h-500 z-0 bg-customRadialBanner1-2"></div>
                <div className="flex flex-col z-10 justify-between">
                    <p className="sm:text-7xl md:text-8xl lg:text-9xl  font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">PiBook</p>
                    <p className="sm:text-lg  md:text-xl text-white my-4 md:w-72 lg:w-96">A tech-forward & affordable laptop for students across Bharat to learn & upskill</p>
                    <div className="mt-8">
                        {/* <Link href="/preorder" className="py-3 px-8 rounded-3xl text-sm bg-blue-500 text-white hover:cursor-pointer">Pre - Book</Link> */}

                    </div>
                    {/* <div className="mt-8">
                        <span className="py-3 px-8 rounded-3xl text-sm bg-blue-500 text-white hover:cursor-pointer">Get it Now</span>
                    </div> */}
                </div>
                <div className="w-[650px] h-500 flex flex-col justify-center items-center relative bg-bgImage">
                    <div className="sm:w-80 sm:h-80 sm:mb-28 sm:ml-12 md:w-[370px]  md:h-[350px] lg:w-[520px] lg:h-[550px]  lg:mt-12">
                        <img
                            src={"/Performance 1.png"}
                            className="sm:w-[800px] sm:h-[370px] lg:w-[700px] lg:h-[510px] z-0"
                        />
                        {/* <Canvas
                            className="h-full w-full border-2"
                            // style={{'height':'100%'}}
                            // gl={{
                            //     antialias: true,
                            //     alpha:true
                            // }}  
                            shadows orthographic camera={{ fov: 38 }}>
                            <ambientLight intensity={-0.9} />

                            <Suspense fallback={<div>Loading.....</div>} />
                            <Environment preset="night" shadows={false} intensity={-0.75} />
                            <OrbitControls target={[0, 0, 0]} enableZoom={false} enableRotate={true} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                            <EffectComposer>
                                <BrightnessContrast brightness={0.3} contrast={0.6} />
                            </EffectComposer>
                            <LaptopModel2 scale={[100, 100, 100]} position={[0,-100,0]} />
                        </Canvas> */}
                        {/* <Canvas className=" w-full h-full z-10" camera={{ fov: 38 }}  >
                            <PerformanceMonitor onIncline={() => setDdpr(1.3)} onDecline={() => setDdpr(0.8)} >
                                <pointLight color="white" intensity={1} position={[10, 10, 10]} />
                                <Suspense fallback={null}>
                                    <LaptopModel2 scale={[0.6, 0.6, 0.6]} position={[0, -0.86, 0]} />
                                </Suspense>
                                <Environment preset="city" shadows={true} intensity={0.75} />
                                <OrbitControls target={[0, 0, 0]} enableZoom={false} enableRotate={true} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                            </PerformanceMonitor>
                        </Canvas> */}
                    </div>
                    <div className="absolute z-0 right-0 top-4">
                        <img
                            // src={Assets.pwVector}
                            src="/pw_logo 1.svg"
                            width={70}
                            height={70}
                        />
                    </div>
                    <div className="absolute right-0 top-60 bg-no-repeat">
                        <img
                            // src={Assets.scale}
                            src="/scale.svg"
                            width={30}
                            height={30}
                        />
                    </div>
                    <div className="absolute right-10 top-[500px]">
                        <img
                            // src={Assets.puzzle}
                            src="/puzzle.svg"
                            width={40}
                            height={40}
                        />
                    </div>

                    {/* <Canvas
                            className="h-full w-full "
                            gl={{
                                antialias: true,
                                alpha:true
                            }}  
                            shadows orthographic camera={{ fov: 30 }}>
                            <ambientLight intensity={-0.9} />
                            
                            <Suspense fallback={<div>Loading.....</div>} />
                            <Environment preset="night"  shadows={false} intensity={-0.75} />
                            <OrbitControls target={[0, 0, 0]} enableZoom={false} enableRotate={true} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                            <EffectComposer>
                                <BrightnessContrast brightness={0.3} contrast={0.6} />  
                            </EffectComposer>
                            <LaptopModel2 />
                        </Canvas> */}


                </div>

            </div>




        </>
    )
}