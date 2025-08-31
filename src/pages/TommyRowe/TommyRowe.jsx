import Header from "../../components/header";
import Dither from "../../components/dither";
import PageTransition from "../../components/PageTransition";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

export default function TommyRowe() {
    const devicePixelRatio =
        typeof window !== "undefined" ? window.devicePixelRatio : 1;

    return (
        <PageTransition>
            <div className="bg-black text-white min-h-screen relative flex flex-col items-center">
                <Header />
                {/* Hero Section */}
                <div className="relative w-full h-[600px] flex items-center justify-center">
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
                        <h1 className="text-3xl md:text-5xl font-bold text-center">
                            Tommy Rowe
                        </h1>
                        <div className="mt-4 text-lg md:text-2xl font-medium opacity-100 text-center">
                            Curriculum Vitae
                        </div>
                    </div>
                </div>
                {/* Personal Statement */}
                <div className="py-12 px-4 md:px-8 w-full flex flex-col items-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center">Personal Statement</h2>
                    <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-200 text-center">
                        I’m a software and electrical engineer with a passion for solving complex problems through practical, 
                        creative solutions. Currently, I’m a degree apprentice at Airbus Defence and Space, where I combine hands-on 
                        engineering with academic learning. This balance has shaped the way I approach challenges: breaking them down,
                        working collaboratively, and always keeping the bigger picture in mind. <br /><br />
                        Alongside my professional and academic journey, I’ve started and contributed to several businesses. 
                        Each venture has taught me something different — from resilience and adaptability to the importance
                        of listening to users and building technology that genuinely makes an impact. <br /><br />
                        What drives me most is curiosity. I enjoy experimenting with new ideas, bridging the gap between hardware
                        and software, and finding ways to turn concepts into working systems. Whether in aerospace, entrepreneurship, 
                        or personal projects, I’m motivated by the opportunity to keep learning and to build things that matter.
                    </p>
                </div>
                {/* Experience */}
                <div className="py-12 px-4 md:px-8 w-full flex flex-col items-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center">Experience</h2>
                    <div className="max-w-2xl w-full mx-auto flex flex-col items-center space-y-6">
                        <div className="w-full text-center">
                            <div className="font-bold text-lg text-white text-center">Co-Founder, Rckts & Co</div>
                            <div className="text-sm text-gray-400 mb-1 text-center">2025 – Present</div>
                            <p className="text-gray-300 text-center">
                                Leading product development, engineering, and strategy for a multi-project holdings company. Responsible for vision, technical architecture, and building platforms including MIDAS, MyPropertyPal, and RCKTS Launchpad.
                            </p>
                        </div>
                        <div className="w-full text-center">
                            <div className="font-bold text-lg text-white text-center">Co-Founder, MyPropertyPal</div>
                            <div className="text-sm text-gray-400 mb-1 text-center">2025 – Present</div>
                            <p className="text-gray-300 text-center">
                                Designed and built a property management SaaS platform for landlords and tenants. Focused on automation, secure data, and intuitive user experience.
                            </p>
                        </div>
                        <div className="w-full text-center">
                            <div className="font-bold text-lg text-white text-center">Co-Founder, MIDAS</div>
                            <div className="text-sm text-gray-400 mb-1 text-center">2023 – Present</div>
                            <p className="text-gray-300 text-center">
                                Created automated trading bots for DeFi, leveraging flashloans and arbitrage. Built robust backend systems and user dashboards.
                            </p>
                        </div>
                        <div className="w-full text-center">
                            <div className="font-bold text-lg text-white text-center">RF Engineer Apprentice, Airbus Defence and Space</div>
                            <div className="text-sm text-gray-400 mb-1 text-center">2022 – 2023</div>
                            <p className="text-gray-300 text-center">
                                Assisted in the design and development of RF test systems for space applications.
                            </p>
                        </div>
                        <div className="w-full text-center">
                            <div className="font-bold text-lg text-white text-center">Radiation Engineer Apprentice, Airbus Defence and Space</div>
                            <div className="text-sm text-gray-400 mb-1 text-center">2023 – 2024</div>
                            <p className="text-gray-300 text-center">
                                Ensured electrical components can survive extreme radiation exposure during their mission lifetime on a spacecraft.
                            </p>
                        </div>
                        <div className="w-full text-center">
                            <div className="font-bold text-lg text-white text-center">EEE Engineer Apprentice, Airbus Defence and Space</div>
                            <div className="text-sm text-gray-400 mb-1 text-center">2024 – Present</div>
                            <p className="text-gray-300 text-center">
                                Assisted in electrical parts selection and procurement for satellite systems. I also ensure the correct parts are used and justify discrepancies.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Education */}
                <div className="py-12 px-4 md:px-8 w-full flex flex-col items-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center">Education</h2>
                    <div className="max-w-2xl w-full mx-auto flex flex-col items-center space-y-6">
                        <div className="w-full text-center">
                            <div className="font-bold text-lg text-white text-center">BEng (Hons) Electrical and Electronic Engineering</div>
                            <div className="text-sm text-gray-400 mb-1 text-center">Solent Southampton University, 2022 - Present</div>
                            <p className="text-gray-300 text-center">
                                I am course representative for the apprentices at Solent Southampton University. This includes attending meetings with the university and being a voice for the apprentices on my course.
                            </p>
                        </div>
                        <div className="w-full text-center">
                            <div className="font-bold text-lg text-white text-center">Level 3 Extended National Diploma In Electrical and Electronic Engineering</div>
                            <div className="text-sm text-gray-400 mb-1 text-center">CEMAST, 2020 – 2022</div>
                            <p className="text-gray-300 text-center">
                                I was Student Vice President and STEM ambassador at CEMAST, Fareham college. This included many responabilities. including being a voice for the student body and promoting STEM subjects.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Projects */}
                <div className="py-12 px-4 md:px-8 w-full flex flex-col items-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center">Projects</h2>
                    <div className="max-w-2xl w-full mx-auto flex flex-col items-center space-y-6">
                        <div className="w-full text-center">
                            <div className="font-bold text-lg text-white text-center">Fusion Rockets</div>
                            <p className="text-gray-300 text-center">
                                I built a series of flight capable model rockets using a proportional integral derivative feedback loop, thrust vector control flight system, using ammonium perchlorate, aluminium powder and HPBT as solid state fuel, with a 2D gimbal TVC system. This involved hours of research and at least 1 police investigation.
                            </p>
                        </div>
                        <div className="w-full text-center">
                            <div className="font-bold text-lg text-white text-center">Peizo Electrical Nano Generators as a powersupply for cardiac implants</div>
                            <p className="text-gray-300 text-center">
                                I researched and developed piezoelectric nano-generators to power cardiac implants, focusing on energy efficiency and miniaturization.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Social Icons */}
                <div className="py-8 flex justify-center w-full gap-8">
                    <a
                        href="https://www.linkedin.com/in/tommy-rowe-3a720b338"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Tommy Rowe LinkedIn"
                        className="hover:text-blue-400 transition"
                    >
                        <FaLinkedin className="text-white text-4xl" />
                    </a>
                    <a
                        href="https://github.com/rubberduckies12"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Tommy Rowe GitHub"
                        className="hover:text-gray-400 transition"
                    >
                        <FaGithub className="text-white text-4xl" />
                    </a>
                    <a
                        href="https://www.facebook.com/tommy.rowe.1800/?_rdr"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Tommy Rowe Facebook"
                        className="hover:text-blue-600 transition"
                    >
                        <FaFacebook className="text-white text-4xl" />
                    </a>
                </div>
            </div>
        </PageTransition>
    );
}