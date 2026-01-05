'use client';
import ArticleCard from '@/components/ArticleCard';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const recentArticles = [
  {
    title: "BSLC Benchmarking 2025",
    description: "“Engage & Innovate: Redefining Student Organizations”",
    date: "15 December 2025",
    imageUrl: "/assets/article-assets/article-1/1.png",
    href: "/article/1",
  },
  {
    title: "BSLC Birthday Party 2025",
    description: "“Ride the Fun: The Seventeenth Fest“",
    date: "13 December 2025",
    imageUrl: "/assets/article-assets/article-2/8.png",
    href: "/article/2",
  },
  {
    title: "BSLC DAYS 2025",
    description: "“Impulse to Insight: Breaking Down Overconsumerism in the Digital Era”",
    date: "5 November 2025",
    imageUrl: "/assets/article-assets/article-3/6.jpg",
    href: "/article/3",
  },
  {
    title: "BSLC SkillCraft 2025",
    description: "“Explore the Colors Within - Expressing the Heart Through the Canvas - Explore Yourself Through Art”",
    date: "4 October 2025",
    imageUrl: "/assets/article-assets/article-4/1.jpg",
    href: "/article/4",
  },
];

export default function events() {
  const [currIndex, setCurrIndex] = useState(0);

  const slides = [
    {
      title: 'BSLC Class',
      image: '/assets/events-img/1.jpg',
      desc: 'BSLC Class merupakan sebuah kegiatan berupa workshop, pelatihan, dan seminar yang bertujuan sebagai wadah bagi para binusian untuk menambah pengetahuan atau wawasan baru terkait bidang-bidang di keilmuan tertentu baik soft-skill maupun hard-skill.',
    },
    {
      title: 'Internal Gathering',
      image: '/assets/events-img/2.jpg',
      desc: 'Internal Gathering merupakan program kerja yang terdiri dari games, sharing session, serta sesi hiburan lainnya (nonton bareng atau karaoke). Tujuan diselenggarakannya program kerja ini adalah sebagai sarana pendekatan bagi para anggota BSLC sehingga dapat menguatkan rasa kekeluargaan dan solidaritas antar member.',
    },
    {
      title: 'Pengabdian Kepada Masyarakat (PKM)',
      image: '/assets/events-img/3.jpg',
      desc: 'Pengabdian Kepada Masyarakat (PKM) merupakan program kemanusiaan yang diadakan BSLC dengan target peserta merupakan anak-anak Indonesia yang kurang mampu mengenyam pendidikan. Kegiatan ini bertujuan untuk meningkatkan rasa empati dan simpati sosial bagi anggota BSLC (Nindya) terhadap lingkungan sekitarnya.',
    },
    {
      title: 'Welcoming Party',
      image: '/assets/events-img/4.jpeg',
      desc: 'Welcoming Party adalah program untuk menyambut para member baru BSLC sehingga dapat lebih mengenal BSLC serta dapat aktif berpartisipasi di dalamnya. Program ini dilangsungkan dengan pemaparan materi mengenai BSLC dan program kerja yang telah berjalan selama 1 tahun kepengurusan, dilanjutkan dengan sesi sharing, kemudian games yang dapat membangun kekompakkan.',
    },
    {
      title: 'BSLC Competition',
      image: '/assets/events-img/5.png',
      desc: 'BSLC Competition adalah sebuah program kerja yang bertujuan untuk menciptakan sebuah kompetisi pendidikan di tingkat nasional. Program ini diharapkan mampu meningkatkan kemampuan berpikir kritis mahasiswa/i di Indonesia.',
    },
    {
      title: 'Career Preparation',
      image: '/assets/events-img/6.png',
      desc: 'Career Preparation adalah program kerja yang terdiri dari sesi seminar dan workshop mengenai CV, Interview, LinkedIn, dan program persiapan kerja lainnya. Diselenggarakannya program kerja ini adalah untuk menjadi wadah yang dapat membantu mahasiswa dalam mempersiapkan kebutuhan dunia kerja setelah lulus.',
    },
    {
      title: 'Birthday Party',
      image: '/assets/events-img/7.png',
      desc: 'Birthday Party BSLC adalah kegiatan tahunan yang dilakukan untuk merayakan hari ulang tahun BSLC pada tanggal 28 Oktober. Dalam Birthday Party ini, anggota BSLC (Nindya) diajak makan bersama serta bermain games untuk semakin mempererat hubungan para Nindya. Event ini sangat asyik dilakukan secara offline.',
    },
    {
      title: 'Benchmarking',
      image: '/assets/events-img/8.jpeg',
      desc: 'Benchmarking adalah program studi banding dan sesi sharing antara BSLC dan organisasi partner. Tujuan diselenggarakannya program kerja ini adalah sebagai sarana bagi BSLC untuk bisa mengevaluasi kinerja dengan belajar dari organisasi dari BINUS maupun universitas lain, serta untuk menjalin kerjasama dengan unit kemahasiswaan di luar BINUS.',
    },
    {
      title: 'Company Visit',
      image: '/assets/events-img/9.jpeg',
      desc: 'Company Visit adalah program kunjungan BSLC ke perusahaan di kawasan Jabodetabek. Pada program ini perusahaan akan memaparkan materi mengenai posisi dan pekerjaan yang terdapat di perusahaan, serta proses kerja atau perusahaan tersebut. Program ini bertujuan untuk memberikan gambaran dan pengalaman mengenai dunia kerja kepada para anggota BSLC (Nindya). Harapannya, acara ini dapat berguna untuk masa depan para Nindya yang hadir.',
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

        {/* Recent Articles Section */}
        <div className="min-h-screen text-white p-6 sm:p-10">
          <p className="w-full text-2xl sm:text-3xl p-4 sm:p-8">
            Recent Articles
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-6">
            {recentArticles.map((article, idx) => ( 
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full sm:w-[48%] flex justify-center"
              >
                <ArticleCard
                  title={article.title}
                  description={article.description}
                  date={article.date}
                  imageUrl={article.imageUrl}
                  href={article.href}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
