import Link from "next/link";

export default function Footer({ onOpenMenu }) {
    return (
        <footer className="w-full bg-black text-white py-8 flex flex-col items-center justify-center">
            <div className="text-lg font-semibold text-center mb-2">
                a RCKTS company
            </div>
            <div className="text-sm text-gray-400 text-center">
                Website designed, programmed and launched by Tommy Rowe
            </div>
        </footer>
    );
}