import { Assets } from "../../public/Assests"
import Image from "next/image"
import Button from "../button/Button"
import useWindowDimensions from "../../Dimensions"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, useProgress, Stage, Bounds, useScroll } from "@react-three/drei"
import { Suspense, useState } from "react"
import { LaptopModel2 } from "../laptop3dModel/LaptopModel2"
import { PerformanceMonitor } from "@react-three/drei"
// import { GLTFLoader } from "three/examples/jsm/Addons.js"
import { EffectComposer, BrightnessContrast } from '@react-three/postprocessing';



export default function Banner1() {
    const { width } = useWindowDimensions()
    const [ddpr, setDdpr] = useState(0.5)
    return (
        <>
            
                <div className="sm:hidden flex flex-col justify-center items-center pt-20 bg-customRadialBanner1Mobile">
                    <p className="text-3xl font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">AB PADHEGA BHARAT</p>
                    <p className="text-sm text-white">A tech-forward & affordable laptop for students</p>
                    <div className="mt-4 relative">
                        <div className="absolute top-14 left-14 pl-3 w-56 ">
                            <Image
                                src={Assets.mobileLaptopPiBook}
                            />
                        </div>
                        <Image
                            src={Assets.mobileLaptop} />
                    </div>
                    <span className="py-3 px-8 mt-8 mb-2 rounded-md text-sm bg-blue-500 text-white hover:cursor-pointer">Buy Now</span>
                </div>

                

                <div className="sm:flex hidden flex-row justify-evenly items-center py-12 bg-customRadialBanner1">
                    <div className="absolute w-full h-500 z-0 bg-customRadialBanner1-2"></div>
                    <div className="flex flex-col z-10 justify-between">
                        <p className="text-9xl font-bold bg-gradient-to-r from-textGradientLeft to-textGradientRight inline-block text-transparent bg-clip-text">PiBook</p>
                        <p className="text-2xl text-white my-4">A tech-forward & affordable laptop<br /> for students across Bharat to learn<br /> & upskill</p>
                        <div className="mt-8">
                            <span className="py-3 px-8 rounded-3xl text-sm bg-blue-500 text-white hover:cursor-pointer">Get it Now</span>
                        </div>
                    </div>
                    <div className="w-[650px] h-500 relative bg-bgImage">
                        <div className="z-50">
                            <Image
                                src={Assets.Banner1laptop}
                            />
                        </div>
                        <div className="absolute z-0 right-0 top-4">
                            <Image
                                src={Assets.pwVector}
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="absolute right-0 top-60 bg-no-repeat">
                            <Image
                                src={Assets.scale}
                                width={30}
                                height={30}
                            />
                        </div>
                        <div className="absolute right-20 top-[500px]">
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

                        {/* <Canvas id={"abcd"} dpr={1} style={{ 'height': '100%' }} camera={{ fov: 38 }}  >
                            <PerformanceMonitor onIncline={() => setDdpr(1.3)} onDecline={() => setDdpr(0.8)} >
                                <pointLight color="white" intensity={1} position={[10, 10, 10]} />
                                <Suspense fallback={null}>
                                    <Stage adjustCamera={false} intensity={2} shadows={false} >
                                        <Bounds fit clip>
                                            <LaptopModel2 />
                                        </Bounds>
                                    </Stage>
                                </Suspense>
                                <OrbitControls target={[0, 0, 0]} enableZoom={false} enableRotate={true} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />

                            </PerformanceMonitor>
                        </Canvas> */}
                    </div>

                </div>
            



        </>
    )
}