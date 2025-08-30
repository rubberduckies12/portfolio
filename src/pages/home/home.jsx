import Header from "../../components/header";
import Dither from "../../components/dither";
import TiltedCard from "../../components/tiltedCard";
import PageTransition from "../../components/PageTransition";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRouter } from "next/router";
import { FaCode, FaRocket, FaChartLine, FaBullhorn, FaPaintBrush, FaCogs, FaMoneyBillWave, FaBuilding, FaSatellite } from "react-icons/fa";

function TiltCardWrapper({ children }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useMotionValue(0), { stiffness: 100, damping: 20 });
    const rotateY = useSpring(useMotionValue(0), { stiffness: 100, damping: 20 });

    function handleMouseMove(e) {
        const rect = e.currentTarget.getBoundingClientRect();
        const px = e.clientX - rect.left;
        const py = e.clientY - rect.top;
        const xPct = px / rect.width - 0.5;
        const yPct = py / rect.height - 0.5;
        rotateX.set(-yPct * 32);
        rotateY.set(xPct * 32);
    }

    function handleMouseLeave() {
        rotateX.set(0);
        rotateY.set(0);
    }

    return (
        <motion.div
            className="bg-white/10 rounded-xl shadow-lg flex flex-col items-center p-4"
            style={{
                perspective: 1000,
                rotateX,
                rotateY,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </motion.div>
    );
}

export default function Home() {
    const router = useRouter();
    const devicePixelRatio =
        typeof window !== "undefined" ? window.devicePixelRatio : 1;

    return (
        <PageTransition>
            <div className="bg-black text-white min-h-screen relative">
                <Header />
                {/* Hero Section */}
                <div className="relative w-full h-[600px]">
                    <Dither
                        waveColor={[0.3, 0.3, 0.3]}
                        disableAnimation={false}
                        enableMouseInteraction={true}
                        mouseRadius={0.3}
                        colorNum={4}
                        waveAmplitude={0.3}
                        waveFrequency={3}
                        waveSpeed={0.05}
                        dpr={devicePixelRatio}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                        {/* RCKTS Logo above title */}
                        <img
                            src="/RCKTS.png"
                            alt="RCKTS Logo"
                            className="w-40 h-40 object-cover mb-6"
                            style={{ filter: "grayscale(0.3)" }}
                        />
                        <h1 className="text-3xl md:text-5xl font-bold">
                            Rckts & Co
                        </h1>
                        <div className="mt-4 text-lg md:text-2xl font-medium opacity-90 text-center max-w-2xl mx-auto">
                            Investors in peoples dreams and ideas
                        </div>
                        <div className="mt-6 flex flex-col md:flex-row gap-4">
                            <button
                                className="px-6 py-3 border border-white rounded-lg text-sm md:text-base transition duration-200 hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg"
                                onClick={() => router.push("/about")}
                            >
                                Learn More About Us
                            </button>
                        </div>
                    </div>
                </div>

                {/* Businesses & Solutions Section */}
                <div className="py-16 px-4 md:px-8 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold mb-8">Businesses & Solutions</h2>
                    <p className="text-sm md:text-lg mb-12">
                        Explore our key businesses that blend innovation and impact. Solving problems across various industries.
                    </p>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <TiltCardWrapper>
                                <div
                                    className="relative w-full h-[300px] flex items-end justify-center rounded-xl overflow-hidden cursor-pointer"
                                    onClick={() => router.push("/MyPropertyPal")}
                                >
                                    <img
                                        src="/LogoBB.png"
                                        alt="MyPropertyPal"
                                        className="absolute inset-0 w-full h-full object-cover"
                                        style={{ filter: "grayscale(0.3)" }}
                                    />
                                    <div className="relative z-10 w-full text-center pb-6">
                                    </div>
                                </div>
                            </TiltCardWrapper>
                            <TiltCardWrapper>
                                <div
                                    className="w-full h-full cursor-pointer"
                                    onClick={() => router.push("/MIDAS")}
                                >
                                    <TiltedCard
                                        imageSrc="/MIDAS-DEFIWB.png"
                                        altText="MIDAS"
                                        captionText="MIDAS"
                                        containerHeight="300px"
                                        containerWidth="300px"
                                        imageHeight="300px"
                                        imageWidth="300px"
                                        rotateAmplitude={12}
                                        scaleOnHover={1.1}
                                        showMobileWarning={false}
                                        showTooltip={true}
                                        displayOverlayContent={true}
                                        className="bg-white/10"
                                    />
                                </div>
                            </TiltCardWrapper>
                            <TiltCardWrapper>
                                <div
                                    className="w-full h-full cursor-pointer"
                                    onClick={() => router.push("/RCKTSLaunchPad")}
                                >
                                    <TiltedCard
                                        imageSrc="/RCKTSLPWB.png"
                                        altText="RCKTS LaunchPad"
                                        captionText="RCKTS LaunchPad"
                                        containerHeight="300px"
                                        containerWidth="300px"
                                        imageHeight="300px"
                                        imageWidth="300px"
                                        rotateAmplitude={12}
                                        scaleOnHover={1.1}
                                        showMobileWarning={false}
                                        showTooltip={true}
                                        displayOverlayContent={true}
                                        className="bg-white/10"
                                    />
                                </div>
                            </TiltCardWrapper>
                        </div>
                    </div>
                </div>

                {/* Expertise Section */}
                <div className="py-16 px-4 md:px-8 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold mb-8">Expertise & Background</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center">
                            <FaCode className="text-4xl text-white mb-4" />
                            <div className="font-bold text-lg mb-2">Full Stack Development</div>
                            <p className="text-gray-300 text-center text-base">
                                Building robust web and mobile applications from frontend to backend, using modern frameworks and cloud infrastructure.
                            </p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center">
                            <FaRocket className="text-4xl text-white mb-4" />
                            <div className="font-bold text-lg mb-2">Blockchain Development</div>
                            <p className="text-gray-300 text-center text-base">
                                Creating secure, scalable blockchain solutions and smart contracts for DeFi, NFTs, and enterprise use.
                            </p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center">
                            <FaChartLine className="text-4xl text-white mb-4" />
                            <div className="font-bold text-lg mb-2">Financial Software</div>
                            <p className="text-gray-300 text-center text-base">
                                Developing automated trading bots, analytics platforms, and financial management tools for modern markets.
                            </p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center">
                            <FaBullhorn className="text-4xl text-white mb-4" />
                            <div className="font-bold text-lg mb-2">Marketing Solutions</div>
                            <p className="text-gray-300 text-center text-base">
                                Crafting digital marketing strategies, automation, and branding to help businesses grow and engage audiences.
                            </p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center">
                            <FaPaintBrush className="text-4xl text-white mb-4" />
                            <div className="font-bold text-lg mb-2">Graphic Design</div>
                            <p className="text-gray-300 text-center text-base">
                                Designing visually compelling graphics, UI/UX, and brand identities for web, print, and digital products.
                            </p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center">
                            <FaCogs className="text-4xl text-white mb-4" />
                            <div className="font-bold text-lg mb-2">Engineering Solutions</div>
                            <p className="text-gray-300 text-center text-base">
                                Delivering practical engineering solutions in electronics, automation, and systems integration.
                            </p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center">
                            <FaMoneyBillWave className="text-4xl text-white mb-4" />
                            <div className="font-bold text-lg mb-2">Business Efficiency</div>
                            <p className="text-gray-300 text-center text-base">
                                Streamlining operations, automating workflows, and optimizing processes for maximum business efficiency.
                            </p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center">
                            <FaBuilding className="text-4xl text-white mb-4" />
                            <div className="font-bold text-lg mb-2">Properties & Portfolio Management</div>
                            <p className="text-gray-300 text-center text-base">
                                Managing property portfolios, automating landlord tasks, and building tools for real estate professionals.
                            </p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center">
                            <FaSatellite className="text-4xl text-white mb-4" />
                            <div className="font-bold text-lg mb-2">Aerospace & Space Engineering</div>
                            <p className="text-gray-300 text-center text-base">
                                Innovating in aerospace, satellite systems, and space engineering with hands-on experience and research.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}