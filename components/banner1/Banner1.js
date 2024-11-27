import { Assets } from "../../public/Assests"
import Image from "next/image"
import Button from "../button/Button"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, useProgress, Stage, Bounds, useScroll } from "@react-three/drei"
import { Suspense, useState } from "react"
import { LaptopModel2 } from "../laptop3dModel/LaptopModel2"
import { PerformanceMonitor } from "@react-three/drei"
// import { GLTFLoader } from "three/examples/jsm/Addons.js"
import { EffectComposer, BrightnessContrast } from '@react-three/postprocessing';



export default function Banner1() {
    const [ddpr, setDdpr] = useState(0.5)
    return (
        <>

            <div className="sm:hidden flex flex-col justify-center items-center pt-20 bg-customRadialBanner1Mobile">
                <p className="text-3xl font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">AB PADHEGA BHARAT</p>
                <p className="text-sm text-white">A tech-forward & affordable laptop for students</p>
                <div className="mt-4 w-full flex  flex-col justify-center items-center h-80 bg-bgImage bg-no-repeat bg-cover">

                    {/* <div className="mt-4 ml-4 relative">
                        <div className="absolute top-12 left-12 ml-5 w-60 ">
                            <Image
                                src={Assets.mobileLaptopPiBook}
                                width={210}
                                height={210}
                            />
                        </div>
                        <Image
                            src={Assets.mobileLaptop}

                        />
                    </div> */}
                    <div className="w-80 h-96">
                        <Canvas className=" w-full h-full z-10" camera={{ fov: 38 }}  >
                            {/* <PerformanceMonitor onIncline={() => setDdpr(1.3)} onDecline={() => setDdpr(0.8)} > */}
                            <pointLight color="white" intensity={1} position={[10, 10, 10]} />
                            {/* <Suspense fallback={null}> */}
                            {/* <Stage adjustCamera={false} intensity={2} shadows={false} > */}
                            {/* <Bounds fit clip> */}
                            <LaptopModel2 scale={[0.59, 0.59, 0.59]} position={[0, -0.85, 0]} />
                            {/* </Bounds> */}
                            {/* </Stage> */}
                            {/* </Suspense> */}
                            <Environment preset="city" shadows={true} intensity={0.75} />
                            <OrbitControls target={[0, 0, 0]} enableZoom={false} enableRotate={true} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />

                            {/* </PerformanceMonitor> */}
                        </Canvas>
                        {/* <Canvas id={"abcd"} className=" z-10" dpr={1} camera={{ fov: 38 }}  >
                            <PerformanceMonitor onIncline={() => setDdpr(1.3)} onDecline={() => setDdpr(0.8)} >
                                <pointLight color="white" intensity={1} position={[10, 10, 10]} />
                                <Suspense fallback={null}>
                                    <Stage adjustCamera={false} intensity={2} shadows={false} >
                                        <Bounds fit clip>
                                            <LaptopModel2 position={[0, -1, 0]} scale={[0.35, 0.35, 0.35]} />
                                        </Bounds>
                                    </Stage>
                                </Suspense>
                                <OrbitControls target={[0, 0, 0]} enableZoom={false} enableRotate={true} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />

                            </PerformanceMonitor>
                        </Canvas> */}
                    </div>

                </div>
                <span className="py-3 px-8 mt-8 mb-2 rounded-md text-sm bg-blue-500 text-white hover:cursor-pointer">Buy Now</span>
            </div>



            <div className="sm:flex hidden flex-row justify-evenly items-center py-12 px-8 bg-customRadialBanner1">
                <div className="absolute w-full h-500 z-0 bg-customRadialBanner1-2"></div>
                <div className="flex flex-col z-10 justify-between">
                    <p className="sm:text-7xl md:text-8xl lg:text-9xl  font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">PiBook</p>
                    <p className="sm:text-lg  md:text-xl text-white my-4 md:w-72 lg:w-96">A tech-forward & affordable laptop for students across Bharat to learn& upskill</p>
                    <div className="mt-8">
                        <span className="py-3 px-8 rounded-3xl text-sm bg-blue-500 text-white hover:cursor-pointer">Get it Now</span>
                    </div>
                </div>
                <div className="w-[650px] h-500 flex flex-col justify-center items-center relative bg-bgImage">
                    <div className="sm:w-80 sm:h-80 sm:mb-28 sm:ml-12 md:w-[370px]  md:h-[350px] lg:w-[520px] lg:h-[550px]  lg:mt-12">
                        {/* <Image
                            src={Assets.Banner1laptop}
                            className="sm:w-[600px] sm:h-[500px] lg:w-[600px] lg:h-[600px] z-0"
                        /> */}
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
                        <Canvas className=" w-full h-full z-10" camera={{ fov: 38 }}  >
                            {/* <PerformanceMonitor onIncline={() => setDdpr(1.3)} onDecline={() => setDdpr(0.8)} > */}
                            <pointLight color="white" intensity={1} position={[10, 10, 10]} />
                            {/* <Suspense fallback={null}> */}
                            {/* <Stage adjustCamera={false} intensity={2} shadows={false} > */}
                            {/* <Bounds fit clip> */}
                            <LaptopModel2 scale={[0.6, 0.6, 0.6]} position={[0, -0.85, 0]} />
                            {/* </Bounds> */}
                            {/* </Stage> */}
                            {/* </Suspense> */}
                            <Environment preset="city" shadows={true} intensity={0.75} />
                            <OrbitControls target={[0, 0, 0]} enableZoom={false} enableRotate={true} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />

                            {/* </PerformanceMonitor> */}
                        </Canvas>
                    </div>
                    <div className="absolute z-0 right-0 top-4">
                        <Image
                            src={Assets.pwVector}
                            width={70}
                            height={70}
                        />
                    </div>
                    <div className="absolute right-0 top-60 bg-no-repeat">
                        <Image
                            src={Assets.scale}
                            width={30}
                            height={30}
                        />
                    </div>
                    <div className="absolute right-10 top-[500px]">
                        <Image
                            src={Assets.puzzle}
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