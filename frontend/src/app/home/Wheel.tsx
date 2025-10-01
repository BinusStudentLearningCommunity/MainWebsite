'use client';

import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'], 
});

const wheelSvgPath = '/wheel.svg';
const dewawebLogoPath = '/logo_dewaweb.svg';

const Wheel = () => {
  return (
    <>
      <style jsx global>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-1920px);
          }
        }

        .animate-scroll {
          display: flex;
          /* Atur durasi animasi di sini (misal: 60s untuk lebih lambat) */
          animation: scroll 10s linear infinite;
        }
      `}</style>

      <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
        
        <div
          className="relative w-full flex"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
          }}
        >
          <div className="flex animate-scroll">
            <Image
              src={wheelSvgPath}
              alt="Kumpulan logo dan gambar layanan"
              width={1920} 
              height={150}
              className="flex-shrink-0" 
              priority
            />
            <Image
              src={wheelSvgPath}
              alt=""
              width={1920} 
              height={150}
              className="flex-shrink-0"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="container mx-auto mt-16 px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
          
            <p className={`${poppins.className} text-2xl md:text-3xl text-slate-700`}>
              Supported by
            </p>

            <Image 
              src={dewawebLogoPath}
              alt="Logo Dewaweb" 
              width={160} 
              height={45}
              className="w-auto" 
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Wheel;