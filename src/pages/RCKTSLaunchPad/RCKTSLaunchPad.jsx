import Dither from "../../components/dither";
import Header from "../../components/header";
import PageTransition from "../../components/PageTransition";
import { FaRocket, FaUsers, FaRobot, FaChalkboardTeacher, FaProjectDiagram, FaChartLine } from "react-icons/fa";

export default function RCKTSLaunchPad() {
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
                            src="/RCKTSLPWB.png"
                            alt="RCKTS Launchpad Logo"
                            className="w-52 h-52 object-cover mb-6"
                            style={{ filter: "grayscale(0.3)" }}
                        />
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                            RCKTS Launchpad
                        </h1>
                        <div className="mt-2 text-lg md:text-2xl font-medium opacity-90 text-center">
                            Launch Ideas, Teams & Companies — Instantly
                        </div>
                    </div>
                </div>

                {/* Concept Section */}
                <div className="py-16 px-4 md:px-8 flex flex-col items-center text-center">
                    <p className="text-lg md:text-xl max-w-3xl mx-auto text-white mb-8">
                        RCKTS Launchpad is a next-generation platform for launching ideas, teams, and companies — instantly.<br /><br />
                        Imagine posting an idea and, within hours, having world-class experts from across the globe bidding to join your venture for a share of the upside. No starting capital. No barriers. Just a clear path from concept to execution.<br /><br />
                        RCKTS combines the best of Zapier + Fiverr + Kickstarter + Upwork + Masterclass + AI copilots into one integrated ecosystem — where anyone, anywhere, can start building.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full mb-12">
                        <div className="bg-white/10 rounded-xl p-8 flex flex-col items-center">
                            <FaRobot className="text-5xl text-white mb-4" />
                            <div className="font-bold text-xl mb-2 text-white">AI-Guided Onboarding</div>
                            <p className="text-white text-center text-base">
                                New users are mapped for skills, knowledge gaps, and working style. Micro-learning projects help users level up fast — learning by doing.
                            </p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-8 flex flex-col items-center">
                            <FaChalkboardTeacher className="text-5xl text-white mb-4" />
                            <div className="font-bold text-xl mb-2 text-white">Skill Acceleration</div>
                            <p className="text-white text-center text-base">
                                Performance is tracked live. AI suggests challenges, connects users to mentors, and designs personalized growth paths.
                            </p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-8 flex flex-col items-center">
                            <FaUsers className="text-5xl text-white mb-4" />
                            <div className="font-bold text-xl mb-2 text-white">Strike Team Formation</div>
                            <p className="text-white text-center text-base">
                                Every project is matched with a “Balanced Squad” — elite veterans plus rising talent across tech, science, and marketing.
                            </p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-8 flex flex-col items-center">
                            <FaProjectDiagram className="text-5xl text-white mb-4" />
                            <div className="font-bold text-xl mb-2 text-white">Zero-Frictions Ops</div>
                            <p className="text-white text-center text-base">
                                Built-in CRMs, HR tools, dev platforms, and funding rails mean ideas move straight into execution.
                            </p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-8 flex flex-col items-center">
                            <FaRocket className="text-5xl text-white mb-4" />
                            <div className="font-bold text-xl mb-2 text-white">Why It Matters</div>
                            <p className="text-white text-center text-base">
                                RCKTS Launchpad is more than a platform — it’s a new model for work and entrepreneurship. Talent scarcity disappears. Ideas attract talent, talent attracts ideas.
                            </p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-8 flex flex-col items-center">
                            <FaChartLine className="text-5xl text-white mb-4" />
                            <div className="font-bold text-xl mb-2 text-white">The Impact</div>
                            <p className="text-white text-center text-base">
                                Within a decade, RCKTS could launch thousands of companies, flood industries with next-gen operators, and become the default infrastructure for entrepreneurship.
                            </p>
                        </div>
                    </div>
                    <div className="max-w-3xl mx-auto text-white text-center text-lg md:text-xl">
                        RCKTS isn’t just accelerating startups. It’s redesigning how people learn, work, and create — unlocking human potential at scale.<br /><br />
                        Users earn based on contribution, not job titles. Capital, skills, and projects circulate inside one self-sustaining ecosystem.
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}