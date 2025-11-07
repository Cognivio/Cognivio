import Image from "next/image";

export default function WorkCard({
  title,
  description,
  imageSrc,
  imageAlt = "Card image",
  className = "",
}: {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 min-w-64 w-64 ${className}`}
    >
      {/* Image placeholder or actual image */}
      <div className="bg-gray-200 rounded-xl h-48 mb-4 flex items-center justify-center overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={200}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-400">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21,15 16,10 5,21" />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div>
        <h3 className="font-montserrat font-semibold text-xl text-gray-900 mb-2">
          {title}
        </h3>
        <p className="font-montserrat text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
