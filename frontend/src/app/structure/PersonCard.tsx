import Image from "next/image";
import { NamePart, Person } from "./Data";

interface PersonCardProps {
  person: Person;
}

export const PersonCard: React.FC<PersonCardProps> = ({ person }) => {
  const sizeClasses = {
    sm: "w-[191px] h-[217px]",
    md: "w-[250px] h-[270px]",
    lg: "w-[265px] h-[304px]",
    xl: "w-[295px] h-[343px]",
  };

  const getColorClass = (color: NamePart["color"]) => {
    return color === "green" ? "text-aqua font-tangerine" : "text-[#424242] font-bold";
  };

  return (
    <figure className="flex flex-col items-center">
      {/* Photo*/}
      <div className={`relative mb-4 overflow-hidden rounded-lg ${sizeClasses[person.size]}`}>
        <Image src={person.photo} alt={`${person.name} - ${person.role}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 200px" />
      </div>

      {/* Name Parts */}
      <div className="text-center mb-2 text-xl">
        {person.nameParts.map((part, index) => (
          <span key={index} className={`${getColorClass(part.color)} `}>
            {part.text}
          </span>
        ))}
      </div>

      {/* Role */}
      <p className="text-center text-sm font-semibold mb-2 max-w-41 ">{person.role}</p>

      {/* Social Links */}
      <div className="text-aqua flex items-center justify-center space-x-1 text-sm">
        <a href={person.instagram} className="underline" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <span className="mx-1">|</span>
        <a href={person.linkedin} className="underline" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </figure>
  );
};
