import Dither from "../../components/dither";
import Header from "../../components/header";
import PageTransition from "../../components/PageTransition";
import { FaRobot, FaBolt, FaChartBar, FaCubes } from "react-icons/fa";

export default function MIDAS() {
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
                        <img
                            src="/MIDAS-DEFIWB.png"
                            alt="MIDAS Logo"
                            className="w-52 h-52 object-cover mb-6"
                            style={{ filter: "grayscale(0.3)" }}
                        />
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                            MIDAS — Modular Intelligence Designed to Automate Smart Contracts
                        </h1>
                        <div className="mt-2 text-lg md:text-2xl font-medium opacity-90 text-center">
                            Blockchain, AI & Financial Engineering
                        </div>
                    </div>
                </div>

                {/* Description Section */}
                <div className="py-16 px-4 md:px-8 flex flex-col items-center text-center">
                    <p className="text-lg md:text-xl max-w-3xl mx-auto text-white mb-8">
                        MIDAS is built at the intersection of blockchain, AI, and financial engineering. We design advanced systems that make markets more efficient by automating complex processes across crypto and traditional finance.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full mb-12">
                        <div className="bg-white/10 rounded-xl p-8 flex flex-col items-center">
                            <FaBolt className="text-5xl text-white mb-4" />
                            <div className="font-bold text-xl mb-2 text-white">Crypto Arbitrage at Scale</div>
                            <p className="text-white text-center text-base">
                                Using flash loans, tri-arb, and cross-chain strategies to uncover and capture opportunities in real time.
                            </p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-8 flex flex-col items-center">
                            <FaRobot className="text-5xl text-white mb-4" />
                            <div className="font-bold text-xl mb-2 text-white">AI-Powered Stock Trading</div>
                            <p className="text-white text-center text-base">
                                Machine learning models that adapt to fast-moving markets, automating strategies with speed and precision.
                            </p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-8 flex flex-col items-center">
                            <FaCubes className="text-5xl text-white mb-4" />
                            <div className="font-bold text-xl mb-2 text-white">Smart Contract Automation</div>
                            <p className="text-white text-center text-base">
                                Modular frameworks that let intelligent agents interact seamlessly with blockchain infrastructure.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-3xl mx-auto text-white text-center text-lg md:text-xl">
                        At its core, MIDAS is about building autonomous financial intelligence — systems that don’t just follow rules, but learn, evolve, and execute with agility.<br /><br />
                        We’re not chasing hype; we’re engineering the tools that will shape the next era of decentralized and data-driven finance.
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}