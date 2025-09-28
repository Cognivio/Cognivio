import Image from "next/image";

export default function Mission() {
    return (
        <div className="flex flex-col justify-between bg-cream min-h-screen h-screen w-screen px-12 py-24 relative overflow-hidden">
            {/* Title */}
            <h2 className="font-bold text-3xl text-center text-gray-900 z-20">Our Mission</h2>

            {/* Background decoration */}
            <div className="absolute flex items-center justify-center pointer-events-none -left-40 top-20 z-0">
                <Image
                    src="/decoration/circle-triangle.png"
                    alt="Circle triangle decoration"
                    width={400}
                    height={400}
                    className="opacity-50"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 z-10 w-fit absolute bottom-20 right-6 mb-4 mr-4 z-10">
                {[
                    "Mission 1",
                    "Mission 2", 
                    "Mission 3"
                ].map((text, index) => (
                    <div 
                        key={index} 
                        className="text-white bg-gold rounded-2xl px-6 py-4 font-montserrat font-medium shadow-lg"
                    >
                        {index + 1}. {text}
                    </div>
                ))}
            </div>
        </div>
    );
}