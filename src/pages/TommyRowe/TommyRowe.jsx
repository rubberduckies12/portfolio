import Header from "../../components/header";
import Dither from "../../components/dither";
import PageTransition from "../../components/PageTransition";
import { FaLinkedin, FaGithub, FaGlobe, FaReact, FaDatabase, FaJs, FaCuttlefish, FaMicrochip, FaDraftingCompass, FaCubes, FaBolt, FaBullhorn, FaUsers, FaShareAlt, FaProjectDiagram } from "react-icons/fa";
import TiltedCard from "../../components/tiltedCard";

export default function TommyRowe() {
    const devicePixelRatio =
        typeof window !== "undefined" ? window.devicePixelRatio : 1;

    // Gallery images and video from your public folder
    const galleryItems = [
        "/IMG_1101.jpg",
        "/IMG_1100.jpg",
        { src: "/IMG_1099.jpg", style: { objectPosition: "center 60%" } },
        "/IMG_1098.jpg",
        "/IMG_1097.jpg",
        "/IMG_1096.jpg",
        "/IMG_1095.jpg",
        "/IMG_1094.jpg",
        { video: "/e7d08a2c44d9402809580107d1b5d5a2.mov" }, // Video card
    ];

    // Skills cards data (with one-line descriptions)
    const skills = [
        {
            icon: <FaGlobe className="text-4xl text-white mb-4" />,
            title: "Web & App Design",
            desc: "Designing modern, responsive websites and mobile apps.",
        },
        {
            icon: <FaReact className="text-4xl text-white mb-4" />,
            title: "React Programming",
            desc: "Building interactive UIs with React and Next.js.",
        },
        {
            icon: <FaDatabase className="text-4xl text-white mb-4" />,
            title: "PSQL",
            desc: "Managing relational databases with PostgreSQL.",
        },
        {
            icon: <FaJs className="text-4xl text-white mb-4" />,
            title: "JavaScript",
            desc: "Developing dynamic web applications using JS.",
        },
        {
            icon: <FaCuttlefish className="text-4xl text-white mb-4" />,
            title: "C++",
            desc: "Efficient systems and hardware programming.",
        },
        {
            icon: <FaMicrochip className="text-4xl text-white mb-4" />,
            title: "Arduino",
            desc: "Prototyping and automation with microcontrollers.",
        },
        {
            icon: <FaBolt className="text-4xl text-white mb-4" />,
            title: "Electronic Design & Manufacture",
            desc: "Designing and producing custom electronics.",
        },
        {
            icon: <FaDraftingCompass className="text-4xl text-white mb-4" />,
            title: "CAD 2D & 3D",
            desc: "Creating precise models for engineering and design.",
        },
        {
            icon: <FaCubes className="text-4xl text-white mb-4" />,
            title: "Rapid Prototyping",
            desc: "Turning ideas into working prototypes quickly.",
        },
        {
            icon: <FaBullhorn className="text-4xl text-white mb-4" />,
            title: "Marketing",
            desc: "Promoting products and services effectively.",
        },
        {
            icon: <FaShareAlt className="text-4xl text-white mb-4" />,
            title: "Social Media Marketing",
            desc: "Growing brands and engagement on social platforms.",
        },
        {
            icon: <FaProjectDiagram className="text-4xl text-white mb-4" />,
            title: "Campaign Management",
            desc: "Planning and executing successful campaigns.",
        },
    ];

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
                {/* Projects Section (moved above Skills) */}
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
                                I researched and developed piezoelectric nano-generators to power cardiac implants, focusing on energy efficiency and miniaturisation.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Skills Section */}
                <div className="py-12 px-4 md:px-8 w-full flex flex-col items-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">Skills</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl w-full mx-auto justify-items-center">
                        {skills.map((skill, idx) => (
                            <div
                                key={idx}
                                className="bg-white/10 rounded-xl flex flex-col items-center justify-center w-[300px] h-[220px] p-8"
                            >
                                {skill.icon}
                                <div className="font-bold text-lg mb-2 text-white text-center">{skill.title}</div>
                                <div className="text-sm text-gray-300 text-center">{skill.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Gallery Section */}
                <div className="py-12 px-4 md:px-8 w-full flex flex-col items-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 max-w-4xl w-full mx-auto justify-items-center">
                        {galleryItems.map((item, idx) => {
                            // Render image cards
                            if (typeof item === "string") {
                                return (
                                    <div key={idx} className="flex justify-center items-center">
                                        <TiltedCard
                                            imageSrc={item}
                                            altText={`Gallery image ${idx + 1}`}
                                            containerHeight="300px"
                                            containerWidth="300px"
                                            imageHeight="300px"
                                            imageWidth="300px"
                                            scaleOnHover={1.1}
                                            rotateAmplitude={14}
                                            showMobileWarning={false}
                                            showTooltip={false}
                                            displayOverlayContent={false}
                                            className="rounded-xl"
                                        />
                                    </div>
                                );
                            }
                            // Render custom styled image
                            if (item.src) {
                                return (
                                    <div key={idx} className="flex justify-center items-center">
                                        <TiltedCard
                                            imageSrc={item.src}
                                            altText={`Gallery image ${idx + 1}`}
                                            containerHeight="300px"
                                            containerWidth="300px"
                                            imageHeight="300px"
                                            imageWidth="300px"
                                            scaleOnHover={1.1}
                                            rotateAmplitude={14}
                                            showMobileWarning={false}
                                            showTooltip={false}
                                            displayOverlayContent={false}
                                            className="rounded-xl"
                                            imageStyle={item.style}
                                        />
                                    </div>
                                );
                            }
                            // Render video card as TiltedCard
                            if (item.video) {
                                return (
                                    <div key={idx} className="flex justify-center items-center">
                                        <TiltedCard
                                            imageSrc={""}
                                            altText={`Gallery video ${idx + 1}`}
                                            containerHeight="300px"
                                            containerWidth="300px"
                                            imageHeight="295px"
                                            imageWidth="295px"
                                            scaleOnHover={1.1}
                                            rotateAmplitude={14}
                                            showMobileWarning={false}
                                            showTooltip={false}
                                            displayOverlayContent={true}
                                            overlayContent={
                                                <video
                                                    src={item.video}
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    className="rounded-xl object-cover"
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        maxWidth: "295px",
                                                        maxHeight: "295px",
                                                        aspectRatio: "1 / 1",
                                                        display: "block",
                                                    }}
                                                    width={295}
                                                    height={295}
                                                />
                                            }
                                            className="rounded-xl"
                                        />
                                    </div>
                                );
                            }
                            return null;
                        })}
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
                </div>
            </div>
        </PageTransition>
    );
}