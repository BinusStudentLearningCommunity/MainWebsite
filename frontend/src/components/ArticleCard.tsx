import Link from 'next/link';

interface ArticleCardProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  href: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  date,
  imageUrl,
  href,
}) => {
  return (
    <Link href={href} className="group w-[75%]">
      <div className="relative flex h-[400px] w-[95%] sm:w-full bg-white rounded-sm m-3 flex-col overflow-hidden shadow">
        {/* image */}
        <img
          alt={title}
          src={imageUrl}
          className="h-[60%] w-full object-cover rounded-t-xl group-hover:blur-xs transition-all"
        />

        {/* text */}
        <div className="flex w-full flex-col h-[40%] justify-between px-4 py-2 group-hover:blur-xs transition-all">
          <div className="flex flex-col overflow-hidden">
            <p className="text-left font-poppins-bold text-black truncate">
              {title}
            </p>
            <p className="text-left font-poppins text-black text-sm line-clamp-2">
              {description}
            </p>
          </div>
          <p className="font-poppins text-black justify-end text-xs text-right">
            {date}
          </p>
        </div>

        {/* overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-black font-poppins-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity z-10">
          Read More
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
