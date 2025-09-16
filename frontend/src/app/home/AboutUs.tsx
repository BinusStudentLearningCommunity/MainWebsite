// src/app/home/AboutUs.tsx

import { Tangerine } from 'next/font/google';

const tangerine = Tangerine({
  subsets: ['latin'],
  weight: '700',
});

const AboutUs = () => {
  return (
    <div
      className="
        absolute bottom-0 left-1/2 z-10 w-9/12 max-w-6xl
        -translate-x-1/2 rounded-[15px] bg-[#19A89D]
        text-center text-white shadow-xl
        transition-all duration-300 ease-in-out
        md:rounded-[30px] md:w-11/12
        translate-y-1/4 md:translate-y-1/3 lg:translate-y-1/2
        px-4 py-3 
        md:px-6 md:py-8
        lg:py-10"
    >
      <h2 className="font-bold leading-none text-[clamp(0.1rem,1.8vw,2.5rem)]">
        About{' '}
        <span className={tangerine.className}>
          Us
        </span>
      </h2>
      
      <p className="mt-2 px-2 leading-snug text-[clamp(0.1rem,1.2vw,0.875rem)]">
        <strong className="font-bold">BINUS Student Learning Community (BSLC)</strong> adalah sebuah unit kegiatan
        kemahasiswaan yang berfokus pada bidang penalaran. Sejak pendiriannya
        di tahun 2008, BSLC terus berkembang sebagai <strong className="font-bold">rekan belajar bagi para Binusian </strong>
        dalam menciptakan suasana belajar yang menyenangkan salah satunya melalui program mentoring. Sebagai sebuah komunitas belajar,
        BSLC juga berperan untuk meningkatkan soft skill dan hard skill mahasiswa terutama di bidang Academic, Employability, dan Organizational.
      </p>
    </div>
  );
};

export default AboutUs;