import Image from "next/image";
import Link from "next/link";
import { LuInstagram, LuFacebook, LuTwitter } from "react-icons/lu";

const ARTICLE_PATH = "/assets/article-assets/article-3/";

export default function ArticleOne() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <Image
          src={ARTICLE_PATH + "7.jpg"} // Change per page
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
                BSLC DAYS 2025: “Impulse to Insight: Breaking Down Overconsumerism in the Digital Era”
              </h1>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-3 sm:mt-4">
                <h6 className="text-[#3C3C3C] text-sm sm:text-md">5 November 2025</h6>
              </div>
            </header>
          </div>
        </section>
      </div>
      
      {/* Article Content Section */}
      <section className="relative z-10 flex flex-col justify-start w-[90%] sm:w-[85%] lg:w-[80%] bg-white px-4 sm:px-6 lg:px-8 xl:px-25 rounded-none mx-auto">
        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-0">
          Pada hari Jumat, 31 Oktober 2025 telah terselenggara acara Talkshow BSLC Days 2025 yang berjudul “Impulse to Insight: Breaking Down Overconsumerism in the Digital Era”. Acara ini berlangsung dengan menghadirkan dua narasumber luar biasa, yaitu Dr. Adi Teguh Suprapto, S.E., M.M., dan Erviana Yuliani, M.Psi., Psikolog. Acara ini berlangsung secara Hybrid, yaitu di BINUS Bekasi Ruang 508 dan diselenggarakan juga melalui Zoom Meeting untuk menjangkau lebih banyak peserta. Para pembicara siap berbagi wawasan yang mendalam dengan tujuan memberikan ruang diskusi interaktif bagi peserta tentang fenomena overconsumerism di era digital serta dampaknya terhadap kesehatan mental dan kondisi keuangan serta kesejahteraan hidup masyarakat, khususnya mahasiswa gen Z. 
        </p>

        {/* <h3 className="font-semibold text-xl sm:text-2xl text-left mt-6 sm:mt-8 lg:mt-6">Pembukaan dan Kata Sambutan</h3> */}

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6">
          <Image src={ARTICLE_PATH + '1.jpg'} alt='Section' fill className="object-cover"/>
        </div>
        <p className="italic text-md sm:text-md leading-relaxed text-[#3c3c3c] mt-2 lg:mt-0 text-center">
          BSLC Days 2025
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-6">
          Acara dibuka oleh dua MC BSLC yang energik, yaitu Fajar Aldhi Winata dan Risya Putri Berlianto, yang memimpin jalannya acara dengan penuh semangat. Aldhi dan Risya membuka acara Talkshow BSLC Days 2025 dengan memperkenalkan judul acara yang akan dibahas dan juga memandu jalannya acara, dengan membacakan doa pembuka dengan hikmat agar acara dapat berjalan dengan lancar dari awal hingga akhir. Selanjutnya, penyampaian kata sambutan oleh Ketua Umum BSLC 2025/2026, yang diwakilkan oleh PIC Region Bekasi, Ameera Kayyisha Salma, dengan mengucapkan terima kasih kepada para pembicara dan peserta yang hadir, serta menyampaikan terkait tema yang dibawakan yang tentunya dekat dan relate dengan mahasiswa sekarang. Lalu, penyampaian kata sambutan oleh Project Manager BSLC Days 2025, yaitu Dessi Nailahusna Verianti, yang juga memberikan ucapan terima kasih kepada para pembicara, peserta, dan panitia atas terselenggaranya acara, serta memberikan harapan semoga acara dapat memberikan ilmu dan insight baru yang tentunya bisa mengubah cara pandang kita terhadap fenomena overconsumerism ini. 
        </p>

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6">
          <Image src={ARTICLE_PATH + '2.jpg'} alt='Section' fill className="object-cover"/>
        </div>
        <p className="italic text-md sm:text-md leading-relaxed text-[#3c3c3c] mt-2 lg:mt-0 text-center">
          Kata sambutan oleh Ameera Kayyisha Salma, PIC Region Bekasi
        </p>

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6">
          <Image src={ARTICLE_PATH + '3.jpg'} alt='Section' fill className="object-cover"/>
        </div>
        <p className="italic text-md sm:text-md leading-relaxed text-[#3c3c3c] mt-2 lg:mt-0 text-center">
          Kata sambutan oleh Dessi Nailahusna Verianti, Project Manager BSLC Days 2025
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-6">
          Setelah penyampaian sambutan oleh PIC Region Bekasi dan Project Manager BSLC Days 2025, MC memperkenalkan kedua pembicara pada acara Talkshow BSLC Days 2025 yang sangat inspiratif. Pembicara pertama kami yaitu Pak Adi Teguh Suprapto, S.E., M.M., beliau merupakan faculty member di BINUS University, khususnya di School of Business Management. Beliau memiliki latar belakang kuat di bidang keuangan dan manajemen, dengan pengalaman profesional yang luas di berbagai perusahaan nasional sebelum berkarir di dunia akademik. Pembicara kedua kami yaitu Kak Erviana Yuliani, M.Psi., Psikolog., beliau seorang Psikolog Klinis yang saat ini aktif berpraktik di Gestalt Consulting dan P2JAPSI. Beliau juga dikenal sebagai aktivis media sosial yang kerap memberikan edukasi seputar kesehatan mental, serta turut mendirikan lembaga yang berfokus pada peningkatan kesadaran masyarakat terhadap isu kesehatan mental.
        </p>

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6">
          <Image src={ARTICLE_PATH + '4.jpg'} alt='Section' fill className="object-cover"/>
        </div>
        <p className="italic text-md sm:text-md leading-relaxed text-[#3c3c3c] mt-2 lg:mt-0 text-center">
          Perkenalan pembicara BSLC Days 2025,  Pak Adi dan Kak Vivi
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-6">
          Setelah memperkenalkan kedua pembicara, tibalah di sesi inti acara, yaitu kegiatan talkshow yang membahas topik seputar fenomena overconsumerism yang berjudul “Impulse to Insight: Breaking Down Overconsumerism in the Digital Era”.  Pada sesi ini, para pembicara menjelaskan dan berdiskusi bersama bagaimana pandangan mereka terkait dengan fenomena konsumsi berlebihan ini, yang di mana pastinya sudah banyak sekali dialami dan ditemui di masyarakat sekarang, terutama mahasiswa generasi Z. Pak Adi membahas bagaimana perkembangan ekonomi digital dan strategi pemasaran modern mendorong pola konsumsi masyarakat menjadi semakin impulsif. Beliau juga menjelaskan bagaimana mahasiswa sebagai bagian dari generasi digital perlu memiliki literasi finansial dan kemampuan mengelola pengeluaran agar lebih bijak dalam berbelanja. Berikutnya, Kak Vivi juga memaparkan terkait perspektif psikologis dari perilaku konsumtif ini. Beliau menjelaskan bagaimana FOMO (Fear of Missing Out), media sosial, dan kebutuhan emosional dapat memicu perilaku overconsumerism. Kak Vivi juga mengajak peserta untuk mengenali pola pikir konsumtif yang tidak sehat dan menggantinya dengan pendekatan mindful consumption, yaitu gaya hidup yang lebih sadar, terarah, dan selaras dengan nilai diri.
        </p>

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6">
          <Image src={ARTICLE_PATH + '6.jpg'} alt='Section' fill className="object-cover"/>
        </div>
        <p className="italic text-md sm:text-md leading-relaxed text-[#3c3c3c] mt-2 lg:mt-0 text-center">
          Sesi Talkshow
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-6">
          Setelah sesi talkshow dan diskusi bersama para pembicara, selanjutnya membuka sesi tanya jawab terbuka, baik untuk peserta maupun panitia yang hadir, dengan memberikan kesempatan untuk bertanya lebih mendalam terkait topik yang dibahas. 
        </p>

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6">
          <Image src={ARTICLE_PATH + '7.jpg'} alt='Section' fill className="object-cover"/>
        </div>
        <p className="italic text-md sm:text-md leading-relaxed text-[#3c3c3c] mt-2 lg:mt-0 text-center">
          Sesi QnA
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-6">
          Diskusi pada talkshow BSLC Days 2025 berjalan dengan sangat interaktif, banyak peserta dan juga panitia yang antusias mengajukan pertanyaan, mulai dari pengalaman pribadi soal belanja impulsif hingga cara mengontrol diri dalam menghadapi tren digital. Kedua pembicara memberikan penjelasan yang aplikatif dan mudah dipahami, menjadikan suasana talkshow tidak hanya informatif, tetapi juga reflektif. Sebagai bentuk apresiasi, panitia menyerahkan plakat kepada kedua pembicara atas kontribusi dan ilmu yang telah dibagikan. 
        </p>

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6">
          <Image src={ARTICLE_PATH + '8.jpg'} alt='Section' fill className="object-cover"/>
        </div>
        <p className="italic text-md sm:text-md leading-relaxed text-[#3c3c3c] mt-2 lg:mt-0 text-center">
          Pemberian plakat kepada Pak Adi dan Kak Vivi
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-6">
          Selanjutnya, acara kemudian ditutup dengan sesi dokumentasi dan foto bersama seluruh peserta, pembicara, serta panitia. Dengan berakhirnya acara ini, talkshow “Impulse to Insight: Breaking Down Overconsumerism in the Digital Era” diharapkan dapat menumbuhkan kesadaran baru bagi mahasiswa untuk lebih bijak dalam mengelola konsumsi di dunia digital. Melalui pemahaman yang diberikan oleh para pembicara, peserta diharapkan mampu bertransformasi dari perilaku impulsif menuju pola hidup yang lebih sadar, sehat, dan berkelanjutan, sejalan dengan semangat BSLC dalam menumbuhkan generasi pembelajar yang kritis dan berdaya. Kami panitia mengucapkan terima kasih yang sebesar-besarnya kepada para peserta yang sudah hadir dan berpartisipasi aktif dalam acara ini, serta kepada para pembicara, yaitu Pak Adi dan Kak Vivi, yang telah memberikan insight dan wawasan baru agar kami mahasiswa bisa lebih bijak dalam menghadapi perilaku konsumtif ini. BSLC, Learning is Fun!
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