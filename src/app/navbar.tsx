import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="w-screen fixed top-0 bg-white flex items-center px-4 py-2 z-50">
            <Image 
                src="/cognivio-eagle.svg"
                alt="Cognivio logo"
                width={24}
                height={24}
                className="mr-3"
            />
            <p className="font-ethnocentric bg-white! text-gold ">COGNIVIO</p>
        </nav>
    );
}