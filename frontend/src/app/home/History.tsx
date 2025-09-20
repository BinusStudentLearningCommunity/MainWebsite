'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Poppins, Tangerine } from 'next/font/google';

// --- Import SVG Files ---
import growthSvg from './growth.svg';
import solutionSvg from './solution.svg';

// --- Konfigurasi Font ---
// Menambahkan '300' untuk font weight 'light'
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'], // light, regular, semibold, bold
});

// Memuat font Tangerine dengan ketebalan bold (700)
const tangerine = Tangerine({
  subsets: ['latin'],
  weight: ['700'],
});


// Tipe data untuk tahun agar lebih aman
type Year = '2007' | '2012' | '2014';

// Data konten untuk setiap tahun, agar mudah dikelola
const historyContent = {
  '2007': {
    content: (
      <>
        Saat itu, jumlah anggota mencapai lebih dari <strong>100 mahasiswa</strong>, sementara tim penggerak (Nindya) masih berjumlah kurang dari <strong>20 orang</strong>, namun semangat mereka menjadi pondasi kuat bagi program mentoring.
      </>
    ),
  },
  '2012': {
    content: (
      <>
        Seiring lahirnya Binus Online Learning, BLC beradaptasi dengan perubahan besar di dunia pendidikan. Nama komunitas resmi <strong>diperbarui menjadi Binus Student Learning Community (BSLC)</strong> untuk mencerminkan dukungan yang lebih luas, menjangkau mahasiswa baik di kelas tatap muka maupun pembelajaran online.
      </>
    ),
  },
  '2014': {
    content: (
      <>
        Konten untuk tahun 2014. Anda bisa menambahkan deskripsi yang sesuai di sini. BSLC terus berinovasi untuk memberikan dampak yang lebih besar bagi komunitas mahasiswa.
      </>
    ),
  },
};

const History = () => {
  const [activeYear, setActiveYear] = useState<Year>('2007');
  const years: Year[] = ['2007', '2012', '2014'];

  return (
    // Terapkan font Poppins ke seluruh section
    <section className={`relative w-full text-center py-16 md:py-24 px-4 overflow-hidden bg-white ${poppins.className}`}>
      {/* Elemen Dekoratif menggunakan SVG */}
      <Image
        src={solutionSvg}
        alt="Decorative background element"
        className="absolute top-1/4 right-[5%] translate-x-1/4 w-1/4 max-w-xm transform rotate-12 hidden lg:block select-none z-0"
        aria-hidden="true"
      />
      <Image
        src={growthSvg}
        alt="Decorative background element"
        className="absolute bottom-1/4 left-[5%] -translate-x-1/5 w-1/4 max-w-xm transform -rotate-12 hidden lg:block select-none z-0"
        aria-hidden="true"
      />

      <div className="container max-w-4xl mx-auto relative z-10">
        <header>
          {/* Terapkan font Tangerine ke subtitle History */}
          <h3 className={`text-5xl text-[#19A89D] italic ${tangerine.className}`}>
            History
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-2">
            Where Journey of Growth Began
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-slate-600 leading-relaxed">
            Semua berawal dari visi sederhana: membantu mahasiswa Binus meraih kelulusan tanpa harus mengandalkan bimbel mahal. Dari sana, lahirlah BLC. Dengan berkembangnya Binus, BLC bertransformasi menjadi BSLC, dan hadir Nindya sebagai penggerak utama kegiatan mentoring.
          </p>
        </header>

        <main className="mt-16">
          <div className="relative max-w-lg mx-auto flex justify-between items-start">
            <div className="absolute top-[38px] left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-slate-200 -z-10"></div>
            
            {years.map((year) => (
              <div key={year} className="flex flex-col items-center gap-4">
                <button
                  onClick={() => setActiveYear(year)}
                  // Mengubah font menjadi Poppins Light (font-light)
                  className={`text-2xl md:text-3xl font-light transition-colors duration-300 ${
                    activeYear === year ? 'text-[#19A89D]' : 'text-slate-300 hover:text-[#19A89D]'
                  }`}
                >
                  {year}
                </button>
                <svg className="w-6 h-6 bg-white p-1" viewBox="0 0 24 24" aria-hidden="true">
                  <circle
                    cx="12" cy="12" r="10" strokeWidth="2" fill="none"
                    className={`transition-all duration-300 ${
                      activeYear === year ? 'stroke-[#19A89D]' : 'stroke-slate-300'
                    }`}
                  ></circle>
                  <circle
                    cx="12" cy="12" r="5"
                    className={`transition-all duration-300 ${
                      activeYear === year ? 'fill-[#19A89D]' : 'fill-slate-300'
                    }`}
                  ></circle>
                </svg>
              </div>
            ))}
          </div>

          <div className="mt-8 min-h-[120px]">
            <p className="max-w-xl mx-auto text-slate-700 leading-loose">
              {historyContent[activeYear].content}
            </p>
          </div>
        </main>
      </div>
    </section>
  );
};

export default History;

