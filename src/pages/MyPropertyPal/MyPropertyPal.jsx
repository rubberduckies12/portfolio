import Dither from "../../components/dither";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Header from "../../components/header";
import PageTransition from "../../components/PageTransition";
import { FaHome, FaComments, FaChartBar } from "react-icons/fa";

function TiltCardWrapper({ children }) {
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

export default function MyPropertyPal() {
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
                            src="/LogoBB.png"
                            alt="MyPropertyPal Logo"
                            className="w-52 h-52 object-cover mb-6"
                            style={{ filter: "grayscale(0.3)" }}
                        />
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                            MyPropertyPal — Effortless Property Management
                        </h1>
                        <div className="mt-2 text-lg md:text-2xl font-medium opacity-90 text-center">
                            Automation, Communication & Modern Dashboards
                        </div>
                        <div className="mt-6 flex flex-col md:flex-row gap-4">
                            <a
                                href="https://www.mypropertypal.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 border border-white rounded-lg text-sm md:text-base transition duration-200 hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg flex items-center justify-center"
                            >
                                Go To MyPropertyPal
                            </a>
                        </div>
                    </div>
                </div>

                {/* Description Section */}
                <div className="py-16 px-4 md:px-8 flex flex-col items-center text-center">
                    <p className="text-lg md:text-xl max-w-3xl mx-auto text-white mb-8">
                        MyPropertyPal makes property management effortless. It automates routine tasks, improves communication, and provides a central modern dashboard for all your property needs.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full mb-12">
                        <div className="bg-white/10 rounded-xl p-8 flex flex-col items-center">
                            <FaHome className="text-5xl text-white mb-4" />
                            <div className="font-bold text-xl mb-2 text-white">Automated Management</div>
                            <p className="text-white text-center text-base">
                                Streamline rent collection, reminders, and maintenance requests with smart automation.
                            </p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-8 flex flex-col items-center">
                            <FaComments className="text-5xl text-white mb-4" />
                            <div className="font-bold text-xl mb-2 text-white">Effortless Communication</div>
                            <p className="text-white text-center text-base">
                                Centralize messaging between landlords and tenants for faster, clearer resolutions.
                            </p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-8 flex flex-col items-center">
                            <FaChartBar className="text-5xl text-white mb-4" />
                            <div className="font-bold text-xl mb-2 text-white">Modern Dashboards</div>
                            <p className="text-white text-center text-base">
                                Visualize your portfolio, track finances, and manage properties from a single dashboard.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-3xl mx-auto text-white text-center text-lg md:text-xl">
                        MyPropertyPal is designed for landlords, tenants, and property managers who want to save time, reduce stress, and focus on what matters most. <br /><br />
                        We believe property management should be simple, transparent, and accessible—so you can grow your portfolio with confidence.
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}