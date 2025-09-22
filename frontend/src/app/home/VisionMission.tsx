
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
                BSLC menjadi Unit Kegiatan Mahasiswa (UKM) bertaraf nasional
                pada tahun 2025 dan sebagai rekan belajar bagi binusian dan
                non-binusian dalam melakukan pengembangan diri di organisasi
                maupun lingkungan sekitar.
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
                  Berkontribusi dalam bidang pendidikan di BINUS University
                  dengan menciptakan suasana belajar yang menyenangkan
                </li>
                <li>
                  Menjadi wadah yang dapat membantu mahasiswa aktif BINUS
                  University untuk mengembangkan potensi-potensi yang ada dalam
                  diri baik softskill maupun hardskill
                </li>
                <li>
                  Bekerjasama dengan berbagai komunitas nasional dan
                  internasional untuk mengenalkan BSLC di luar BINUS University
                </li>
                <li>
                  Mengikuti dan mengadakan kompetisi bidang pendidikan bertaraf
                  nasional.
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
