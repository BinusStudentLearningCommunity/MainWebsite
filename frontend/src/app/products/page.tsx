"use client";

import Image from "next/image";
import Link from "next/link";

export default function Products() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow">
        {/* E-Learning Section */}
        <section className="py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12">
              {/* Text Content */}
              <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold"
                  style={{ color: "#19A89D" }}
                >
                  E-Learning
                </h2>
                <p className="text-base md:text-lg font-semibold leading-relaxed text-gray-700">
                  E-Learning merupakan{" "}
                  <strong>kumpulan rangkuman dan soal-soal latihan</strong> yang
                  dapat digunakan oleh para Binusian sebagai materi tambahan
                  untuk dipelajari. E-Learning akan{" "}
                  <strong>diupdate setiap menjelang UTS dan UAS</strong>. Dengan adanya rangkuman dan catatan soal-soal ini diharapkan Binusian dapat terbantu menyiapkan dirinya sebelum UTS dan UAS, sehingga dapat memperoleh hasil yang memuaskan dalam ujian.
                </p>
                <Link
                  href="https://elearning.bslc.or.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white border-2 py-2 md:py-3 px-6 md:px-8 rounded-lg transition-colors duration-200 font-medium text-base md:text-lg hover:bg-teal-600 hover:text-white"
                  style={{
                    borderColor: "#19A89D",
                    color: "#19A89D",
                  }}
                >
                  View Materials
                </Link>
              </div>
              
              {/* Image - Paksa muncul di SEMUA ukuran termasuk mobile kecil */}
              <div className="w-full lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0">
                <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px]">
                  <div className="relative w-full pb-[100%]">
                    <Image
                      src="/assets/girl-studying.svg"
                      alt="Girl studying illustration"
                      fill
                      className="absolute inset-0 object-contain"
                      priority
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 400px, 450px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Responsi Section */}
        <section className="py-8 md:py-12 lg:py-16 px-4 md:px-6 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-6 md:gap-8 lg:gap-12">
              {/* Text Content */}
              <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold"
                  style={{ color: "#19A89D" }}
                >
                  Responsi
                </h2>
                <p className="text-base md:text-lg font-semibold leading-relaxed text-gray-700">
                  Responsi merupakan kegiatan pembelajaran yang diajarkan oleh
                  sesama mahasiswa atau dosen. Kegiatan ini membahas kisi-kisi
                  atau latihan soal untuk persiapan UTS dan UAS. 
                  Dengan adanya responsi ini diharapkan Binusian dapat terbantu menyiapkan dirinya sebelum UTS dan UAS, sehingga dapat memperoleh hasil yang memuaskan dalam ujian.
                </p>
                <Link
                  href="https://chat.whatsapp.com/HJAckP7xhbLJxnYWqyKyXk?mode=wwt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center bg-white border-2 py-2 md:py-3 px-6 md:px-8 rounded-lg transition-colors duration-200 font-medium text-base md:text-lg hover:bg-teal-600 hover:text-white"
                  style={{
                    borderColor: "#19A89D",
                    color: "#19A89D",
                  }}
                >
                  Join Responsi
                </Link>
              </div>
              
              {/* Image - Paksa muncul di SEMUA ukuran termasuk mobile kecil */}
              <div className="w-full lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0">
                <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px]">
                  <div className="relative w-full pb-[100%]">
                    <Image
                      src="/assets/girl-studying.svg"
                      alt="Girl studying illustration"
                      fill
                      className="absolute inset-0 object-contain"
                      priority
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 400px, 450px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Background Image Section - FIXED AGAR TIDAK TERPOTONG */}
          <div className="w-full mx-auto sm:max-w-full">
            <div className="relative w-full shadow-lg bg-white">
              {/* Container dengan height yang pas */}
              <div className="relative w-full">
                {/* Padding bottom trick untuk maintain aspect ratio */}
                <div className="relative w-full h-[235px] sm:h-[100px] md:h-[430px] lg:h-[570px] xl:h-[795px]">
                  {/* Background Image dengan object-contain agar tidak terpotong */}
                  <div className="absolute inset-0">
                    <Image
                      src="/assets/bslc-bg.svg"
                      alt="BSLC Background"
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="100vw"
                    />
                  </div>
                  
                  {/* Overlay Konten - Centered dan responsif */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pb-28 md:pb-48">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-3 md:mb-4 lg:mb-6 text-gray-800 leading-tight">
                      <span className="font-normal">Start</span>{" "}
                      <span className="font-extrabold">exciting</span>
                      <br />
                      <span className="font-extrabold">study</span>{" "}
                      <span className="font-normal">journeys</span>
                    </h1>

                    <a
                      href="https://discord.com/invite/5e37zmu4aA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-semibold px-5 md:px-7 lg:px-8 py-2.5 md:py-3 text-xs sm:text-sm md:text-base rounded-lg border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 mt-2 md:mt-3 lg:mt-4"
                    >
                      CONNECT ON DISCORD!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </main>
    </div>
  );
}