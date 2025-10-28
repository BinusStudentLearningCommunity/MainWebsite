'use client';
import ArticleCard from '@/components/ArticleCard';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function events() {
  const [currIndex, setCurrIndex] = useState(0);

  const slides = [
    {
      title: 'Outing Nindya',
      image: '/assets/OutingNindya.svg',
      desc: 'Outing nindya adalah kegiatan yang ditujukan untuk meningkatkan kualitas Nindya BSLC setelah menjalani enam bulan kepengurusan di BSLC. Selain itu Outing Nindya juga memiliki tujuan untuk meningkatkan softskill para Nindya yang selama ini telah diterapkan dalam kepengurusan dan juga mempererat kekompakan seluruh Nindya BSLC.',
    },
    {
      title: 'Outing Nindya',
      image: '/assets/article.svg',
      desc: 'Outing nindya adalah kegiatan yang ditujukan untuk meningkatkan kualitas Nindya BSLC setelah menjalani enam bulan kepengurusan di BSLC. Selain itu Outing Nindya juga memiliki tujuan untuk meningkatkan softskill para Nindya yang selama ini telah diterapkan dalam kepengurusan dan juga mempererat kekompakan seluruh Nindya BSLC.',
    },
    {
      title: 'Outing Nindya',
      image: '/assets/OutingNindya.svg',
      desc: 'Outing nindya adalah kegiatan yang ditujukan untuk meningkatkan kualitas Nindya BSLC setelah menjalani enam bulan kepengurusan di BSLC. Selain itu Outing Nindya juga memiliki tujuan untuk meningkatkan softskill para Nindya yang selama ini telah diterapkan dalam kepengurusan dan juga mempererat kekompakan seluruh Nindya BSLC.',
    },
    {
      title: 'Outing Nindya',
      image: '/assets/article.svg',
      desc: 'Outing nindya adalah kegiatan yang ditujukan untuk meningkatkan kualitas Nindya BSLC setelah menjalani enam bulan kepengurusan di BSLC. Selain itu Outing Nindya juga memiliki tujuan untuk meningkatkan softskill para Nindya yang selama ini telah diterapkan dalam kepengurusan dan juga mempererat kekompakan seluruh Nindya BSLC.',
    },
    {
      title: 'Outing Nindya',
      image: '/assets/OutingNindya.svg',
      desc: 'Outing nindya adalah kegiatan yang ditujukan untuk meningkatkan kualitas Nindya BSLC setelah menjalani enam bulan kepengurusan di BSLC. Selain itu Outing Nindya juga memiliki tujuan untuk meningkatkan softskill para Nindya yang selama ini telah diterapkan dalam kepengurusan dan juga mempererat kekompakan seluruh Nindya BSLC.',
    },
    {
      title: 'Outing Nindya',
      image: '/assets/article.svg',
      desc: 'Outing nindya adalah kegiatan yang ditujukan untuk meningkatkan kualitas Nindya BSLC setelah menjalani enam bulan kepengurusan di BSLC. Selain itu Outing Nindya juga memiliki tujuan untuk meningkatkan softskill para Nindya yang selama ini telah diterapkan dalam kepengurusan dan juga mempererat kekompakan seluruh Nindya BSLC.',
    },
    {
      title: 'Outing Nindya',
      image: '/assets/OutingNindya.svg',
      desc: 'Outing nindya adalah kegiatan yang ditujukan untuk meningkatkan kualitas Nindya BSLC setelah menjalani enam bulan kepengurusan di BSLC. Selain itu Outing Nindya juga memiliki tujuan untuk meningkatkan softskill para Nindya yang selama ini telah diterapkan dalam kepengurusan dan juga mempererat kekompakan seluruh Nindya BSLC.',
    },
    {
      title: 'Outing Nindya',
      image: '/assets/article.svg',
      desc: 'Outing nindya adalah kegiatan yang ditujukan untuk meningkatkan kualitas Nindya BSLC setelah menjalani enam bulan kepengurusan di BSLC. Selain itu Outing Nindya juga memiliki tujuan untuk meningkatkan softskill para Nindya yang selama ini telah diterapkan dalam kepengurusan dan juga mempererat kekompakan seluruh Nindya BSLC.',
    },
    {
      title: 'Outing Nindya',
      image: '/assets/article.svg',
      desc: 'Outing nindya adalah kegiatan yang ditujukan untuk meningkatkan kualitas Nindya BSLC setelah menjalani enam bulan kepengurusan di BSLC. Selain itu Outing Nindya juga memiliki tujuan untuk meningkatkan softskill para Nindya yang selama ini telah diterapkan dalam kepengurusan dan juga mempererat kekompakan seluruh Nindya BSLC.',
    },
  ];

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current); // clear previous
    intervalRef.current = setInterval(() => {
      setCurrIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000); // 5 seconds
  };

  const handleNavClick = (index: number) => {
    setCurrIndex(index); // go to clicked slide
    startInterval(); // reset timer
  };

  useEffect(() => {
    startInterval(); // start timer on mount

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current); // cleanup
    };
  }, [slides.length]);

  return (
    <main className="flex pt-10 min-h-screen flex-col">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full px-4 sm:px-8 lg:px-16 py-8">
          <div className="flex flex-1 max-h-[500px] justify-center align-middle mb-6 lg:mb-0">
            <img
              src="/assets/article.svg"
              alt="Latest Article"
              className="w-full max-w-[400px] sm:max-w-[500px] h-auto object-contain"
            />
          </div>

          {/* Text */}
          <div className="flex flex-1 flex-col p-4 lg:p-8 text-center lg:text-left">
            <p className="w-full font-tangerine text-2xl sm:text-3xl text-aqua py-3">
              Latest Article
            </p>

            <p className="w-full font-poppins font-bold text-2xl sm:text-3xl md:text-4xl py-5">
              BSLC LDK CP 2025: “Growing Leadership Skills for a Successful
              Organization”
            </p>

            <p className="w-full font-poppins text-xs sm:text-sm md:text-base pb-6">
              17 June 2025
            </p>

            <div className="flex justify-center lg:justify-start">
              <button className="bg-[var(--white)] text-aqua border px-3 py-2 rounded-full hover:bg-[var(--aqua-hover)] hover:text-white w-fit transition-all duration-400 cursor-pointer hover:shadow-[0_0_10px_var(--aqua-hover)]">
                <Link href="/article">Read More →</Link>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="flex min-h-screen rounded-t-4xl bg-dark-green mt-16 flex-col pt-10">
        {/* carousel part */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center align-middle w-full flex-col max-h-screen">
            <p className="font-tangerine text-white text-3xl">Our Programs</p>

            {/* navigation buttons */}
            <div className="flex w-full justify-center p-5">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(index)}
                  className="cursor-pointer"
                >
                  <img
                    src={
                      index === currIndex
                        ? '/assets/klik=Default.svg'
                        : '/assets/klik.svg'
                    }
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 m-1.5"
                  />
                </button>
              ))}
            </div>

            {/* carousel container */}
            <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden">
              <img
                src={slides[currIndex].image}
                alt="carousel slide"
                className="h-full w-full object-cover rounded-2xl sm:rounded-3xl md:rounded-4xl"
              />

              <div className="absolute inset-0 flex items-center justify-end md:pr-10 z-20 rounded-2xl sm:rounded-3xl md:rounded-4xl">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent rounded-2xl sm:rounded-3xl md:rounded-4xl"></div>

                {/* Text container */}
                <div className="relative flex flex-col items-end text-right space-y-2 z-30 w-4/5 sm:w-3/5 md:w-2/5 px-4 sm:px-6 md:px-0">
                  <p className="text-cyan font-poppins-bold text-xl sm:text-2xl md:text-4xl">
                    {slides[currIndex].title}
                  </p>
                  <p className="text-cyan font-poppins text-sm sm:text-base md:text-lg">
                    {slides[currIndex].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recent Articles */}
        <div className="min-h-screen text-white p-6 sm:p-10">
          <p className="w-full text-2xl sm:text-3xl p-4 sm:p-8">
            Recent Articles
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-6">
            {[...Array(4)].map((_, idx) => ( //sementara pake Array, kalo mau tambahin bisa pake list
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full sm:w-[48%] flex justify-center"
              >
                <ArticleCard
                  title="Title of the Article"
                  description="Description of the article Lorem ipsum..."
                  date="31 February 2025"
                  imageUrl="/file.svg"
                  href="/article"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
