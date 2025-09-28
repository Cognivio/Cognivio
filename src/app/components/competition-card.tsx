export default function CompetitionCard({ 
  title, 
  category, 
  rank, 
  totalParticipants,
  className = "" 
}: {
  title: string;
  category: string;
  rank: string;
  totalParticipants: number;
  className?: string;
}) {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ${className}`}>
      {/* Title */}
      <h3 className="font-montserrat font-bold text-gray-900 mb-2 leading-tight">
        {title}
      </h3>
      
      {/* Category */}
      <p className="font-montserrat text-gray-600 mb-4">
        {category}
      </p>
      
      {/* Rank with star icon */}
      <div className="flex items-center gap-2">
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          className="text-gray-600"
        >
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
        <span className="font-montserrat text-gray-700 font-medium">
          Rank {rank}/{totalParticipants}
        </span>
      </div>
    </div>
  );
}