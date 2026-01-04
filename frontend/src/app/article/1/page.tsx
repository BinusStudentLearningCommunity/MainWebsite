import Image from "next/image";
import Link from "next/link";
import { LuInstagram, LuFacebook, LuTwitter } from "react-icons/lu";

const ARTICLE_PATH = "/assets/article-assets/article-1/";

export default function ArticleOne() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <Image
          src={ARTICLE_PATH + "1.png"} // Change per page
          alt="Article 1 Hero"
          fill
          className="object-cover"
          priority
        />
        
        <section className="absolute xl:bottom-0 sm:top-0 md:bottom-0 flex flex-col items-center justify-end w-full">
          <div className="w-[90%] sm:w-[85%] lg:w-[80%] bg-white p-4 sm:p-6 lg:p-8 xl:p-25 rounded-none">
            <header className="flex flex-col">
              <h6 className="text-[#3C3C3C] text-sm sm:text-md mb-2 sm:mb-4">Galleries</h6>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#000] leading-tight">
                BSLC Benchmarking 2025 : “Engage & Innovate: Redefining Student Organizations”
              </h1>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-3 sm:mt-4">
                <h6 className="text-[#3C3C3C] text-sm sm:text-md">15 December 2025</h6>
              </div>
            </header>
          </div>
        </section>
      </div>
      
      {/* Article Content Section */}
      <section className="relative z-10 flex flex-col justify-start w-[90%] sm:w-[85%] lg:w-[80%] bg-white px-4 sm:px-6 lg:px-8 xl:px-25 rounded-none mx-auto">
        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-0">
          Benchmarking menjadi salah satu program strategis BSLC di tahun 2025 sebagai bagian dari upaya untuk memperkuat kualitas organisasi dan memperluas wawasan para anggotanya. Dengan mengusung tema “Engage & Innovate: Redefining Student Organizations”, kegiatan ini dirancang sebagai ruang untuk berdialog, bertukar pengalaman, dan belajar dari pendekatan organisasi lain dalam menghadapi tantangan serta mengembangkan inovasi baru. Pada tahun ini, BSLC berkolaborasi dengan Service Learning Community (SLC) dari Universitas Pelita Harapan (UPH), sebuah organisasi yang dikenal dengan fokusnya pada pengembangan karakter mahasiswa melalui program berbasis pelayanan masyarakat. Pertemuan ini memberikan kesempatan bagi kedua organisasi untuk saling mengenal lebih dekat dan memperdalam pemahaman mengenai manajemen organisasi yang efektif.
        </p>

        {/* <h3 className="font-semibold text-xl sm:text-2xl text-left mt-6 sm:mt-8 lg:mt-6">Pembukaan dan Kata Sambutan</h3> */}

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6">
          <Image src={ARTICLE_PATH + '2.png'} alt='Section' fill className="object-cover"/>
        </div>
        <p className="italic text-md sm:text-md leading-relaxed text-[#3c3c3c] mt-2 lg:mt-0 text-center">
          Kata sambutan SLC
        </p>

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6">
          <Image src={ARTICLE_PATH + '3.png'} alt='Section' fill className="object-cover"/>
        </div>
        <p className="italic text-md sm:text-md leading-relaxed text-[#3c3c3c] mt-2 lg:mt-0 text-center">
          Kata sambutan SLC
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-6">
          Acara Benchmarking 2025 diselenggarakan secara langsung pada Rabu, 26 November 2025 di Universitas Pelita Harapan. Suasana hangat terasa sejak awal ketika dua MC, yaitu Keilla Thalita Alea dan Christabelle Graciella Gunawan, membuka acara dan menyambut seluruh peserta. Setelah doa pembuka, rangkaian acara dilanjutkan dengan kata sambutan dari Stanley Nathanael Wijaya selaku Ketua Umum BSLC, Nikita Novena Natsir selaku Ketua Umum SLC UPH, serta Project Manager Benchmarking 2025. Melalui sambutan tersebut, masing-masing perwakilan menyampaikan tujuan kegiatan serta harapan agar Benchmarking ini dapat menjadi wadah pembelajaran yang bermanfaat untuk kedua organisasi.
        </p>

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6">
          <Image src={ARTICLE_PATH + '4.png'} alt='Section' fill className="object-cover"/>
        </div>
        <p className="italic text-md sm:text-md leading-relaxed text-[#3c3c3c] mt-2 lg:mt-0 text-center">
          Materi BSLC
        </p>

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6">
          <Image src={ARTICLE_PATH + '5.png'} alt='Section' fill className="object-cover"/>
        </div>
        <p className="italic text-md sm:text-md leading-relaxed text-[#3c3c3c] mt-2 lg:mt-0 text-center">
          Materi SLC
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-6">
          Setelah sesi pembukaan, kegiatan berlanjut dengan presentasi dari BSLC dan SLC. Kedua organisasi memaparkan profil, struktur divisi, visi dan misi, serta program kerja yang telah dijalankan maupun yang sedang dikembangkan. Melalui sesi ini, peserta dapat memahami bagaimana masing-masing organisasi mengelola anggotanya, membangun budaya kerja, dan menjalankan kegiatan yang berdampak. Pertukaran informasi ini membuka perspektif baru mengenai strategi organisasi dan memberi peluang bagi kedua belah pihak untuk mengadaptasi pendekatan yang relevan.
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-6">
          Kegiatan kemudian dilanjutkan dengan sesi Focus Group Discussion (FGD) yang memberikan kesempatan kepada peserta untuk berdiskusi dalam kelompok kecil. Pada sesi ini, peserta membahas pengalaman organisasi, tantangan yang dihadapi, dan ide-ide inovatif yang dapat diterapkan untuk meningkatkan efektivitas program kerja. Diskusi berjalan dengan interaktif dan penuh antusiasme, menghasilkan berbagai insight baru yang memperkaya pemahaman peserta terhadap dinamika organisasi masing-masing. Setelah FGD, tiap kelompok menyampaikan presentasi singkat berisi rangkuman hasil diskusi sebagai bentuk refleksi bersama.
        </p>

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6">
          <Image src={ARTICLE_PATH + '6.png'} alt='Section' fill className="object-cover"/>
        </div>
        <p className="italic text-md sm:text-md leading-relaxed text-[#3c3c3c] mt-2 lg:mt-0 text-center">
          Sesi bermain games
        </p>

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6">
          <Image src={ARTICLE_PATH + '7.png'} alt='Section' fill className="object-cover"/>
        </div>
        <p className="italic text-md sm:text-md leading-relaxed text-[#3c3c3c] mt-2 lg:mt-0 text-center">
          Sharing session
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-6">
          Untuk menciptakan suasana yang lebih akrab dan menyegarkan setelah sesi diskusi intensif, panitia menyiapkan sesi games yang melibatkan seluruh peserta. Games ini tidak hanya menjadi sarana hiburan, tetapi juga berfungsi mempererat interaksi serta membangun kedekatan antar anggota BSLC dan SLC. Keceriaan dalam sesi ini menjadi penutup yang menyenangkan sebelum memasuki bagian akhir acara.
        </p>

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6">
          <Image src={ARTICLE_PATH + '8.png'} alt='Section' fill className="object-cover"/>
        </div>
        <p className="italic text-md sm:text-md leading-relaxed text-[#3c3c3c] mt-2 lg:mt-0 text-center">
          Penyerahan plakat
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-6">
          Menjelang penutupan, panitia menyelenggarakan sesi penyerahan plakat dan sertifikat sebagai bentuk apresiasi terhadap kerja sama antara BSLC dan SLC. Momen ini menjadi simbol komitmen kedua organisasi untuk terus menjalin hubungan baik dan membuka peluang kolaborasi di masa mendatang. Acara ditutup dengan sesi foto bersama sebagai dokumentasi dan kenang-kenangan atas seluruh rangkaian kegiatan Benchmarking 2025.
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-6">
          Dengan terselenggaranya Benchmarking tahun ini, BSLC berharap wawasan baru, praktik terbaik, dan pengalaman berharga yang diperoleh dapat menjadi dorongan bagi kedua organisasi untuk terus berkembang, berinovasi, dan memberikan kontribusi positif di lingkungan kampus masing-masing. Benchmarking 2025 bukan hanya kegiatan pertukaran informasi, tetapi juga langkah penting dalam membangun relasi dan memperkuat komunitas pembelajaran antarmahasiswa.
        </p>



        {/* Add as many unique sections as this specific article needs */}
      </section>

      {/* Share Section - Stays consistent across pages */}
      <section className="my-12 sm:my-16 lg:my-20 gap-3 sm:gap-4 flex flex-col items-center px-4">
        <h3 className="font-regular text-xl sm:text-2xl text-center">Share to your friends</h3>
        <div className="flex flex-row gap-4 sm:gap-6">
          <Link href={"https://www.instagram.com/bslc_binus/"} className="hover:opacity-70 transition-opacity" target="_blank"><LuInstagram size={28}/></Link>
          <Link href={"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fstudent-activity.binus.ac.id%2Fbslc%2Fgallery%2Fbslc-skillcraft-2025-explore-the-colors-within-expressing-the-heart-through-the-canvas-explore-yourself-through-art%2F"} className="hover:opacity-70 transition-opacity" target="_blank"><LuFacebook size={28}/></Link>
          <Link href={"https://twitter.com/intent/tweet?url=https%3A%2F%2Fstudent-activity.binus.ac.id%2Fbslc%2Fgallery%2Fbslc-skillcraft-2025-explore-the-colors-within-expressing-the-heart-through-the-canvas-explore-yourself-through-art%2F"} className="hover:opacity-70 transition-opacity" target="_blank"><LuTwitter size={28}/></Link>
        </div>
      </section>
    </main>
  );
}