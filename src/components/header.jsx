import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [businessOpen, setBusinessOpen] = useState(false);
    const [peopleOpen, setPeopleOpen] = useState(false);
    const router = useRouter();
    const currentPath = router.pathname;

    // Auto scroll to top when menu opens
    useEffect(() => {
        if (open) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [open]);

    // Close dropdowns when menu closes
    const closeMenu = () => {
        setOpen(false);
        setBusinessOpen(false);
        setPeopleOpen(false);
    };

    return (
        <header className="sticky top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-transparent">
            {/* Hamburger Icon */}
            <button
                className={`flex flex-col justify-center items-center w-10 h-10 focus:outline-none transition-transform duration-500 hover:rotate-180`}
                onClick={() => setOpen(!open)}
                aria-label="Open menu"
            >
                <span className="block w-8 h-1 bg-white rounded mb-1"></span>
                <span className="block w-8 h-1 bg-white rounded mb-1"></span>
                <span className="block w-8 h-1 bg-white rounded"></span>
            </button>

            {/* Overlay Menu */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center z-50 transition-all duration-500 ${
                    open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
                }`}
                style={{
                    backdropFilter: open ? "blur(8px)" : "blur(0px)",
                }}
            >
                <button
                    className="absolute top-6 right-6 text-white text-3xl"
                    onClick={closeMenu}
                    aria-label="Close menu"
                >
                    &times;
                </button>
                <nav className="w-full max-w-md mx-auto mt-32 flex flex-col gap-6 px-4 items-center">
                    {/* Main Links */}
                    <button
                        className={`w-full text-2xl font-bold py-2 rounded transition-colors text-center ${
                            currentPath === "/" 
                                ? "text-white underline underline-offset-4 decoration-white" 
                                : "text-white hover:underline hover:underline-offset-4 hover:decoration-white"
                        }`}
                        onClick={() => { closeMenu(); router.push("/"); }}
                    >
                        Home
                    </button>
                    <button
                        className={`w-full text-2xl font-bold py-2 rounded transition-colors text-center ${
                            currentPath === "/about" 
                                ? "text-white underline underline-offset-4 decoration-white" 
                                : "text-white hover:underline hover:underline-offset-4 hover:decoration-white"
                        }`}
                        onClick={() => { closeMenu(); router.push("/about"); }}
                    >
                        About
                    </button>
                    {/* Businesses Dropdown */}
                    <div className="w-full flex flex-col items-center">
                        <button
                            className={`w-full text-2xl font-bold py-2 rounded flex items-center justify-center transition-colors text-white`}
                            onClick={() => {
                                setBusinessOpen(!businessOpen);
                                setPeopleOpen(false);
                            }}
                        >
                            <span
                                className={`${
                                    businessOpen ? "underline underline-offset-4 decoration-white" : ""
                                }`}
                            >
                                Businesses & Solutions
                            </span>
                            <span
                                className={`ml-2 transition-transform duration-300 ${businessOpen ? "rotate-180" : "rotate-0"}`}
                            >
                                ▴
                            </span>
                        </button>
                        {businessOpen && (
                            <div className="w-full flex justify-center">
                                <div className="bg-black bg-opacity-95 rounded-xl shadow-lg flex flex-col min-w-[180px] z-20 mt-2 items-center">
                                    <button
                                        className={`text-lg font-bold text-white px-6 py-3 text-center bg-transparent hover:underline hover:underline-offset-4 hover:decoration-white transition-colors ${
                                            currentPath === "/MyPropertyPal" 
                                                ? "underline underline-offset-4 decoration-white" 
                                                : ""
                                        }`}
                                        onClick={() => {
                                            closeMenu();
                                            router.push("/MyPropertyPal");
                                        }}
                                    >
                                        MyPropertyPal
                                    </button>
                                    <button
                                        className={`text-lg font-bold text-white px-6 py-3 text-center bg-transparent hover:underline hover:underline-offset-4 hover:decoration-white transition-colors ${
                                            currentPath === "/MIDAS" 
                                                ? "underline underline-offset-4 decoration-white" 
                                                : ""
                                        }`}
                                        onClick={() => {
                                            closeMenu();
                                            router.push("/MIDAS");
                                        }}
                                    >
                                        MIDAS
                                    </button>
                                    <button
                                        className={`text-lg font-bold text-white px-6 py-3 text-center bg-transparent hover:underline hover:underline-offset-4 hover:decoration-white transition-colors ${
                                            currentPath === "/RCKTSLaunchPad" 
                                                ? "underline underline-offset-4 decoration-white" 
                                                : ""
                                        }`}
                                        onClick={() => {
                                            closeMenu();
                                            router.push("/RCKTSLaunchPad");
                                        }}
                                    >
                                        RCKTS Launchpad
                                    </button>
                                    {/* Add more businesses here */}
                                </div>
                            </div>
                        )}
                    </div>
                    {/* People Dropdown */}
                    <div className="w-full flex flex-col items-center">
                        <button
                            className={`w-full text-2xl font-bold py-2 rounded flex items-center justify-center transition-colors text-white`}
                            onClick={() => {
                                setPeopleOpen(!peopleOpen);
                                setBusinessOpen(false);
                            }}
                        >
                            <span
                                className={`${
                                    peopleOpen ? "underline underline-offset-4 decoration-white" : ""
                                }`}
                            >
                                People & Founders
                            </span>
                            <span
                                className={`ml-1 transition-transform duration-300 ${peopleOpen ? "rotate-180" : "rotate-0"}`}
                            >
                                ▴
                            </span>
                        </button>
                        {peopleOpen && (
                            <div className="w-full flex justify-center">
                                <div className="bg-black bg-opacity-95 rounded-xl shadow-lg flex flex-col min-w-[180px] z-20 mt-2 items-center">
                                    <button
                                        className={`text-lg font-bold text-white px-6 py-3 text-center bg-transparent hover:underline hover:underline-offset-4 hover:decoration-white transition-colors ${
                                            currentPath === "/TommyRowe" 
                                                ? "underline underline-offset-4 decoration-white" 
                                                : ""
                                        }`}
                                        onClick={() => {
                                            closeMenu();
                                            router.push("/TommyRowe");
                                        }}
                                    >
                                        Tommy Rowe
                                    </button>
                                    {/* Add more people here */}
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
                {/* Page indicator */}
                <div
                    className="absolute top-20 left-1/2 transform -translate-x-1/2 text-white text-lg opacity-70 whitespace-nowrap w-max text-center"
                    style={{
                        maxWidth: "90vw",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    {currentPath === "/" && "You are on Home"}
                    {currentPath === "/about" && "You are on About"}
                    {currentPath === "/MyPropertyPal" && "You are on MyPropertyPal"}
                    {currentPath === "/TommyRowe" && "You are on Tommy Rowe"}
                    {currentPath === "/MIDAS" && "You are on MIDAS"}
                    {currentPath === "/RCKTSLaunchPad" && "You are on RCKTS Launchpad"}
                </div>
            </div>
        </header>
    );
}