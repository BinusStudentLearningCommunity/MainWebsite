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
    role: "Chairman of BSLC",
    instagram: "https://www.instagram.com/snw.77",
    linkedin: "https://www.linkedin.com/in/stanley-nathanael-wijaya",
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
    role: "General Secretary of BSLC",
    instagram: "https://www.instagram.com/nikkymandolang/",
    linkedin: "https://www.linkedin.com/in/nikky-shalomita-mandolang-925270218/",
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
    role: "General Treasurer of BSLC",
    instagram: "https://www.instagram.com/starburnedshana/",
    linkedin: "https://linkedin.com/",
    size: "md",
  },
];

export const regionalPresident: Person[] = [
  {
    //kurang ig
    id: "1",
    name: "Cindy",
    photo: "/assets/structure-img/Cindy.png",
    nameParts: [{ text: "Cindy", color: "green" }],
    role: "BSLC Kemanggisan Regional President",
    instagram: "https://instagram.com/",
    linkedin: "https://www.linkedin.com/in/seecindy/",
    size: "md",
  },
  {
    //kurang foto
    id: "2",
    name: "Hino Kaila Tomomi",
    photo: "/assets/structure-img/Hino.png",
    nameParts: [
      { text: "Hino ", color: "black" },
      { text: "Kaila ", color: "green" },
      { text: "Tomomi ", color: "black" },
    ],
    role: "BSLC Alam Sutera Regional President",
    instagram: "https://www.instagram.com/tomomikaila/",
    linkedin: "https://www.linkedin.com/in/hino-kaila-tomomi/",
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
    role: "General Manager of Marketing",
    instagram: "https://www.instagram.com/nauraapn",
    linkedin: "https://www.linkedin.com/in/nauraapn/",
    size: "lg",
  },
  {
    //kureng ig, linkedin
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
    //kurang ig, linkedin
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
    role: "General Manager of Learning",
    instagram: "https://www.instagram.com/sweetlyvlnc",
    linkedin: "https://www.linkedin.com/in/sweetlyvlnc",
    size: "lg",
  },
  {
    id: "2",
    name: "Flarene Salim",
    photo: "/assets/structure-img/Flarene.png",
    nameParts: [
      { text: "Flarence ", color: "green" },
      { text: "Salim", color: "black" },
    ],
    role: "Manager Mentoring Alam Sutera",
    instagram: "https://www.instagram.com/flareneee.s",
    linkedin: "https://www.linkedin.com/in/flarene-salim",
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
    instagram: "https://www.instagram.com/zefanya_gabriel",
    linkedin: "https://www.linkedin.com/in/zefanya-halim",
    size: "sm",
  },
  {
    //kurang ig, linkedin
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
    //kurang ig, linkedin
    id: "1",
    name: "Syalista Galuh Nadira",
    photo: "/assets/structure-img/Syta.png",
    nameParts: [
      { text: "Syalista ", color: "green" },
      { text: "Galuh Nadira", color: "black" },
    ],
    role: "General Manager of Human Capital",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    size: "lg",
  },
  {
    id: "2",
    name: "Yelly Yau",
    photo: "/assets/structure-img/Yelly.png",
    nameParts: [
      { text: "Yelly ", color: "green" },
      { text: "Yau", color: "black" },
    ],
    role: "Manager Creative and Research",
    instagram: "https://instagram.com/Yellyy_yau/",
    linkedin: "https://www.linkedin.com/in/yelly-yau-b54290298",
    size: "sm",
  },
  {
    id: "3",
    name: "Vellycia Hengky Saputra",
    photo: "/assets/structure-img/Vellycia.png",
    nameParts: [
      { text: "Vellycia ", color: "green" },
      { text: "Hengky Saputra", color: "black" },
    ],
    role: "Manager Engagement",
    instagram: "https://www.instagram.com/vellyciahs",
    linkedin: "www.linkedin.com/in/vellycia-saputra-211v/",
    size: "sm",
  },
];

export const InformationTechnology: Person[] = [
  {
    id: "1",
    name: "Jason Christian Budhihartono",
    photo: "/assets/structure-img/Jason.png",
    nameParts: [
      { text: "Jason ", color: "green" },
      { text: "Christian Budhihartono", color: "black" },
    ],
    role: "General Manager of IT",
    instagram: "https://instagram.com/jasonchristian5651/",
    linkedin: "https://www.linkedin.com/in/jasonchristianb/",
    size: "lg",
  },
  {
    id: "2",
    name: "Kelson Vincien",
    photo: "/assets/structure-img/Kelson.png",
    nameParts: [
      { text: "Kelson ", color: "green" },
      { text: "Vincien", color: "black" },
    ],
    role: "Manager IT Development",
    instagram: "https://instagram.com/kelson_vincien",
    linkedin: "https://www.linkedin.com/in/kelson-vincien",
    size: "sm",
  },
  {
    id: "3",
    name: "Stefani Gifta Ganda",
    photo: "/assets/structure-img/Gifta.png",
    nameParts: [
      { text: "Stefani", color: "black" },
      { text: "Gifta ", color: "green" },
      { text: "Ganda", color: "black" },
    ],
    role: "Manager IT Support",
    instagram: "https://www.instagram.com/stefanigifta",
    linkedin: "https://id.linkedin.com/in/stefani-gifta-ganda-4858b21b8",
    size: "sm",
  },
];
