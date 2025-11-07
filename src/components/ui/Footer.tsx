import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-honey w-screen px-12 py-16">
      <div className="max-w-md mx-auto text-center">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/brand/cognivio-grayscale.svg"
            alt="Cognivio logo"
            width={60}
            height={60}
            className="mx-auto mb-4"
          />
          <h2 className="font-ethnocentric text-white text-xl">COGNIVIO</h2>
        </div>

        {/* Tagline */}
        <p className="font-montserrat text-gray-900 mb-6">
          Transforming Data into Intelligent Solutions
        </p>

        {/* Location */}
        <div className="font-montserrat text-gray-900 mb-8 leading-relaxed">
          <p>Malang City,</p>
          <p>East Java,</p>
          <p>Indonesia</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-12">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/company/cognivio-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/social-media/linkedin.png"
              alt="LinkedIn"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Cognivio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/social-media/github.png"
              alt="GitHub"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </a>

          {/* Hugging Face */}
          <a
            href="https://huggingface.co/Cognivio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/social-media/huggingface.png"
              alt="Hugging Face"
              width={32}
              height={32}
              className="w-8 h-8"
            />
          </a>
        </div>

        {/* Services Section */}
        <div className="mb-8">
          <h3 className="font-montserrat font-bold text-white text-lg mb-3">
            Services
          </h3>
          <p className="font-montserrat text-gray-900">Our services</p>
        </div>

        {/* About Section */}
        <div className="mb-8">
          <h3 className="font-montserrat font-bold text-white text-lg mb-3">
            About
          </h3>
          <p className="font-montserrat text-gray-900">About us</p>
        </div>

        {/* Pages Section */}
        <div className="mb-8">
          <h3 className="font-montserrat font-bold text-white text-lg mb-3">
            Pages
          </h3>
          <div className="font-montserrat text-gray-900">
            <p>Blogs</p>
            <p>Projects</p>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-montserrat font-bold text-white text-lg mb-3">
            Contact Us
          </h3>
          <div className="font-montserrat text-gray-900">
            <p>contact@cognivio.org</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
