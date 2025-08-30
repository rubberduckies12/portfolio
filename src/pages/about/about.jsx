import Header from "../../components/header";
import Dither from "../../components/dither";
import PageTransition from "../../components/PageTransition";
import TiltedCard from "../../components/tiltedCard";
import { useRouter } from "next/router";
import { FaUserAstronaut, FaUserTie } from "react-icons/fa";

export default function About() {
    const devicePixelRatio =
        typeof window !== "undefined" ? window.devicePixelRatio : 1;
    const router = useRouter();

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
                        <h1 className="text-3xl md:text-5xl font-bold">
                            About Rckts & Co
                        </h1>
                    </div>
                </div>
                {/* About Section */}
                <div className="py-16 px-4 md:px-8 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold mb-8">Who We Are</h2>
                    <p className="text-sm md:text-lg max-w-2xl mx-auto">
                        At its core, <strong>Rckts & Co</strong> is a holdings company built on one simple idea: 
                        to empower anyone with a dream to bring it to life. <br /><br />

                        Our journey began with <strong>MIDAS</strong>, a company creating automated trading bots for DeFi environments. 
                        These bots harness the power of flashloans and arbitrage, unlocking incredible earning potential with minimal investment and near-zero risk. <br /><br />

                        From there, we launched <strong>MyPropertyPal</strong> — a property management platform designed to simplify the landlord-tenant relationship and 
                        streamline the day-to-day challenges of property ownership. This project proved our ability to build real-world platforms 
                        while giving its founders firsthand knowledge of property management before investing in their own portfolios. <br /><br />

                        That’s when <strong>RCKTS</strong> truly began to take shape. We realised we had more ideas than one lifetime could build — 
                        so we envisioned a system that allows anyone to turn their vision into reality with the resources of an S&P 500 company. 
                        This became <strong>RCKTS Launchpad</strong>: a platform where thousands of experts across industries come together, 
                        collaborating for equity (not upfront cash) to transform bold ideas into thriving businesses. <br /><br />

                        Our mission is to unite dreamers, investors, advisors, and builders from every background — removing barriers and creating opportunities 
                        for people everywhere to work, contribute, and build the future together. 
                    </p>
                </div>
                {/* Founders Section */}
                <div className="py-16 px-4 md:px-8 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold mb-8">Meet Our Founders</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-8">
                        <div className="bg-white/10 rounded-2xl shadow-xl flex flex-col items-center p-8 w-full max-w-sm mx-auto sm:mx-0 sm:w-[340px] h-auto">
                            <div className="w-20 h-20 rounded-full bg-transparent flex items-center justify-center mb-6">
                                <FaUserTie className="text-6xl text-white" />
                            </div>
                            <div className="text-xl font-bold text-white mb-1">Chris Thomson</div>
                            <div className="text-sm text-white mb-1">The Strategist</div>
                            <div className="text-sm text-white mb-3">Co-Founder & COO</div>
                            <p className="text-white text-center text-base px-2">
                                Chris is in charge of our day-day operations. He ensures we deliver and execute on our projects efficiently. He keeps our customers and users happy and manages finances. He is is behind the idea of MyPropertyPal.
                            </p>
                        </div>
                        <div
                            className="bg-white/10 rounded-2xl shadow-xl flex flex-col items-center p-8 w-full max-w-sm mx-auto sm:mx-0 sm:w-[340px] h-auto cursor-pointer transition hover:scale-105"
                            onClick={() => router.push("/TommyRowe")}
                        >
                            <div className="w-20 h-20 rounded-full bg-transparent flex items-center justify-center mb-6">
                                <FaUserAstronaut className="text-6xl text-white" />
                            </div>
                            <div className="text-xl font-bold text-white mb-1">Tommy Rowe</div>
                            <div className="text-sm text-white mb-1">The Builder</div>
                            <div className="text-sm text-white mb-3">Co-Founder & CEO</div>
                            <p className="text-white text-center text-base px-2">
                                Tommy builds. Clean UI/UX, features that work, databases that protect, engineering that scales. He is behind the idea of MIDAS, RCKTS and RCKTS Launchpad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}