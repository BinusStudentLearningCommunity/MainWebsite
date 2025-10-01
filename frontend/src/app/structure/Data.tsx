export interface NamePart {
  text: string;
  color: "green" | "black";
}

export interface Person {
  id: string;
  name: string;
  photo: string;
  nameParts: NamePart[];
  role: string;
  instagram: string;
  linkedin: string;
  size: "sm" | "md" | "lg" | "xl";
}

export const executiveCommittee: Person[] = [
  {
    id: "1",
    name: "Stanley Nathanael Wijaya",
    photo: "/assets/structure-img/Stanley.png",
    nameParts: [
      { text: "Stanley ", color: "green" },
      { text: "Nathanael Wijaya", color: "black" },
    ],
    role: "Chairman of BSLC / Region",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    size: "xl",
  },
  {
    id: "2",
    name: "Nikky Shalomita Mandolang",
    photo: "/assets/structure-img/Nikky.png",
    nameParts: [
      { text: "Nikky ", color: "green" },
      { text: "Shalomita Mandolang", color: "black" },
    ],
    role: "General Secretary",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    size: "md",
  },
  {
    id: "3",
    name: "Shana Grace Sitompul",
    photo: "/assets/structure-img/Shana.png",
    nameParts: [
      { text: "Shana ", color: "green" },
      { text: "Grace Sitompul", color: "black" },
    ],
    role: "General Treasurer / Region",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    size: "md",
  },
];

export const regionalPresident: Person[] = [
  {
    id: "1",
    name: "Cindy",
    photo: "/assets/structure-img/Cindy.png",
    nameParts: [{ text: "Cindy", color: "green" }],
    role: "BSLC Kemanggisan / Region",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    size: "md",
  },
  {
    id: "2",
    name: "Hino Kaila Tomomi",
    photo: "/assets/structure-img/Hino.png",
    nameParts: [
      { text: "Hino ", color: "black" },
      { text: "Kaila ", color: "green" },
      { text: "Tomomi ", color: "black" },
    ],
    role: "BSLC Alam Sutera / Region",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    size: "md",
  },
];

export const Marketing: Person[] = [
  {
    id: "1",
    name: "Naura Puan Nisa",
    photo: "/assets/structure-img/Naura.png",
    nameParts: [
      { text: "Naura ", color: "green" },
      { text: "Puan Nisa", color: "black" },
    ],
    role: "General Manager",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    size: "lg",
  },
  {
    id: "2",
    name: "Aurelia Natasya",
    photo: "/assets/structure-img/Aurelia.png",
    nameParts: [
      { text: "Aurelia ", color: "green" },
      { text: "Natasya", color: "black" },
    ],
    role: "Manager Design",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    size: "sm",
  },
  {
    id: "3",
    name: "Ameera Kayyisha",
    photo: "/assets/structure-img/Ameera.png",
    nameParts: [
      { text: "Ameera ", color: "green" },
      { text: "Kayyisha", color: "black" },
    ],
    role: "Manager Business Development",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    size: "sm",
  },
];

export const Learning: Person[] = [
  {
    id: "1",
    name: "Sweetly Valencia Ramban",
    photo: "/assets/structure-img/Sweetly.png",
    nameParts: [
      { text: "Sweetly ", color: "green" },
      { text: "Valencia Ramban", color: "black" },
    ],
    role: "General Manager",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    size: "lg",
  },
  {
    id: "2",
    name: "Flarence Salim",
    photo: "/assets/structure-img/Flarence.png",
    nameParts: [
      { text: "Flarence ", color: "green" },
      { text: "Salim", color: "black" },
    ],
    role: "Manager Mentoring Alam Sutera",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    size: "sm",
  },
  {
    id: "3",
    name: "Zefanya Gabriel",
    photo: "/assets/structure-img/Zefanya.png",
    nameParts: [
      { text: "Zefanya ", color: "green" },
      { text: "Gabriel", color: "black" },
    ],
    role: "Manager Mentoring Kemanggisan",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    size: "sm",
  },
  {
    id: "4",
    name: "Bianca Kevia",
    photo: "/assets/structure-img/Bianca.png",
    nameParts: [
      { text: "Bianca ", color: "green" },
      { text: "Kevia", color: "black" },
    ],
    role: "Manager People Development",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    size: "sm",
  },
];

export const HumanCapital: Person[] = [
  {
    id: "1",
    name: "Naura Puan Nisa",
    photo: "/assets/structure-img/Naura.png",
    nameParts: [
      { text: "Naura ", color: "green" },
      { text: "Puan Nisa", color: "black" },
    ],
    role: "General Manager",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    size: "lg",
  },
  {
    id: "2",
    name: "Aurelia Natasya",
    photo: "/assets/structure-img/Aurelia.png",
    nameParts: [
      { text: "Aurelia ", color: "green" },
      { text: "Natasya", color: "black" },
    ],
    role: "Manager Design",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    size: "sm",
  },
  {
    id: "3",
    name: "Ameera Kayyisha",
    photo: "/assets/structure-img/Ameera.png",
    nameParts: [
      { text: "Ameera ", color: "green" },
      { text: "Kayyisha", color: "black" },
    ],
    role: "Manager Business Development",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    size: "sm",
  },
];

export const InformationTechnology: Person[] = [
  {
    id: "1",
    name: "Jason Christian",
    photo: "/assets/structure-img/Jason.png",
    nameParts: [
      { text: "Jason ", color: "green" },
      { text: "Christian", color: "black" },
    ],
    role: "General Manager / Region",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    size: "lg",
  },
  {
    id: "2",
    name: "Ameera Kayyisha",
    photo: "/assets/structure-img/Ameera.png",
    nameParts: [
      { text: "Ameera ", color: "green" },
      { text: "Kayyisha", color: "black" },
    ],
    role: "Manager IT Development / Region",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    size: "sm",
  },
  {
    id: "3",
    name: "Aurelia Natasya",
    photo: "/assets/structure-img/Aurelia.png",
    nameParts: [
      { text: "Aurelia ", color: "green" },
      { text: "Natasya", color: "black" },
    ],
    role: "Manager IT Support / Region",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    size: "sm",
  },
];
