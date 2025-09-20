// src/app/home/page.tsx

import mainImage from './mainImage.svg';
import ExploreRoles from '@/components/ExploreRoles';
import section3Image from './section3.svg';
import AboutUs from './AboutUs';
import Image from 'next/image';
import History from './History'; 
export default function Home() {
  return (
    <main>
      <div className="relative">
        <section id="home">
          <Image
            src={mainImage}
            alt="Home"
            className="w-full h-auto"
            priority 
          />
        </section>

        <AboutUs />
        
      </div>

      <section id="services" className="bg-slate-200">
        <Image
          src={section3Image} 
          alt="Services"
          className="w-full h-auto"
        />
      </section>

      <section
        id="about"
        className="bg-slate-100 flex flex-col justify-center items-center text-center px-4"
        style={{ paddingTop: '2rem', paddingBottom: '2rem' }}
      >
        <ExploreRoles/>
      </section>

      <section id="history">
        <History />
      </section>
    </main>
  );
}