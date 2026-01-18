
"use client";

import { Poppins, Tangerine } from "next/font/google";
import Image from "next/image";

const visionIconPath = "/icon2.svg";
const missionIconPath = "/icon1.svg";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const tangerine = Tangerine({
  subsets: ["latin"],
  weight: ["700"],
});

const VisionMission = () => {
  return (
    <section
      id="vision-mission"
      className="bg-white py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 z-0 transform -translate-y-1/4 translate-x-1/4 lg:translate-x-1/3">
        <Image
          src={visionIconPath}
          alt="Vision Icon Background"
          width={600}
          height={600}
          className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] opacity-100 mr-60"
        />
      </div>

      <div className="absolute bottom-0 left-0 z-0 transform translate-y-1/4 -translate-x-1/4 lg:-translate-x-1/3">
        <Image
          src={missionIconPath}
          alt="Mission Icon Background"
          width={600}
          height={600}
          className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] opacity-100 ml-70"
        />
      </div>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl space-y-24 md:space-y-32 relative z-10">
        <div className="flex justify-end">
          <div className="w-full md:w-3/5 lg:w-1/2">
            <div className="p-4 md:p-8 text-center md:text-right">
              {" "}
              <h3
                className={`text-4xl md:text-5xl font-bold text-gray-800 leading-tight ${poppins.className}`}
              >
                <span className={`text-[#19A89D] ${tangerine.className}`}>
                  Our
                </span>{" "}
                Vision
              </h3>
              <p
                className={`mt-4 text-base md:text-lg text-gray-700 ${poppins.className}`}
              >
                Menjadi komunitas belajar yang unggul dan kolaboratif
untuk menghasilkan generasi berprestasi melalui
pengembangan akademik, keterampilan, dan
kepemimpinan yang berdampak bagi masyarakat.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="w-full md:w-3/5 lg:w-1/2">
            <div className="p-4 md:p-8 text-center md:text-left">
              <h3
                className={`text-4xl md:text-5xl font-bold text-gray-800 leading-tight ${poppins.className}`}
              >
                <span className={`text-[#19A89D] ${tangerine.className}`}>
                  Our
                </span>{" "}
                Mission
              </h3>
              <ul
                className={`mt-4 space-y-3 text-base md:text-lg text-gray-700 list-disc list-inside ${poppins.className}`}
              >
                <li>
                  Menyediakan program pembelajaran yang
menyenangkan, suportif, dan inklusif di lingkungan
kampus untuk mendukung akademik mahasiswa BINUS.
                </li>
                <li>
                  Mengembangkan ekosistem organisasi yang adaptif,
profesional, dan berintegritas.
                </li>
                <li>
                  Mendorong pertumbuhan soft skill dan employability
melalui pengalaman belajar kolaboratif dan berdampak.
                </li>
                <li>
                  Memberikan kontribusi nyata di lingkungan sosial
melalui program edukasi dan pemberdayaan
masyarakat.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
