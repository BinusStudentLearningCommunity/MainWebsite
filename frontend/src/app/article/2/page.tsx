import Image from "next/image";
import Link from "next/link";
import { LuInstagram, LuFacebook, LuTwitter } from "react-icons/lu";

const ARTICLE_PATH = "/assets/article-assets/article-2/";

export default function ArticleOne() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <Image
          src={ARTICLE_PATH + "8.png"} // Change per page
          alt="Article 2 Hero"
          fill
          className="object-cover"
          priority
        />
        
        <section className="absolute xl:bottom-0 sm:top-0 md:bottom-0 flex flex-col items-center justify-end w-full">
          <div className="w-[90%] sm:w-[85%] lg:w-[80%] bg-white p-4 sm:p-6 lg:p-8 xl:p-25 rounded-none">
            <header className="flex flex-col">
              <h6 className="text-[#3C3C3C] text-sm sm:text-md mb-2 sm:mb-4">Galleries</h6>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#000] leading-tight">
               BSLC Birthday Party 2025: “Ride the Fun: The Seventeenth Fest”
              </h1>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-3 sm:mt-4">
                <h6 className="text-[#3C3C3C] text-sm sm:text-md">13 December 2025</h6>
              </div>
            </header>
          </div>
        </section>
      </div>
      
      {/* Article Content Section */}
      <section className="relative z-10 flex flex-col justify-start w-[90%] sm:w-[85%] lg:w-[80%] bg-white px-4 sm:px-6 lg:px-8 xl:px-25 rounded-none mx-auto">
        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-0">
          Pada tanggal 30 November 2025, BINUS Student Learning Community (BSLC) menyelenggarakan perayaan Ulang Tahun ke-17 yang meriah. Acara ini diadakan sebagai bentuk perayaan atas hari jadi BSLC yang jatuh pada tanggal 28 Oktober, dan dihadiri oleh seluruh panitia pelaksana, para alumni, serta anggota aktif. Tahun ini, BSLC mengusung tema “Ride the Fun: The Seventeenth Fest“. Tema ini merefleksikan dedikasi BSLC dalam mendukung kemajuan ilmu pengetahuan dan mempererat ikatan persaudaraan antar anggotanya. Selama tujuh belas tahun perjalanannya, BSLC telah berperan sebagai pusat pembelajaran yang tidak hanya menekankan pada aspek akademik, tetapi juga pengembangan keterampilan lunak (soft skill) dan keterampilan teknis (hard skill) para anggotanya.
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-0">
          Rangkaian acara diawali dengan sesi pembukaan yang dipandu oleh MC, kemudian berlanjut ke penyampaian sambutan resmi dari Ketua Umum BSLC 2025, Stanley Nathanael Wijaya.
        </p>

        {/* <h3 className="font-semibold text-xl sm:text-2xl text-left mt-6 sm:mt-8 lg:mt-6">Pembukaan dan Kata Sambutan</h3> */}

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6">
          <Image src={ARTICLE_PATH + '1.png'} alt='Section' fill className="object-cover"/>
        </div>
        <p className="italic text-md sm:text-md leading-relaxed text-[#3c3c3c] mt-2 lg:mt-0 text-center">
          Kata sambutan dari Ketua Umum BSLC Periode 2025/2026 (Stanley Nathanael Wijaya)
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-6">
          Setelah mendengar arahan dari Ketua Umum BSLC 2024/2025, Stanley Nathanael Wijaya, acara berlanjut ke sambutan dari Project Manager Natalie Agustinus untuk memberikan apresiasi atas persiapan perayaan ini.
        </p>

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6">
          <Image src={ARTICLE_PATH + '2.png'} alt='Section' fill className="object-cover"/>
        </div>
        <p className="italic text-md sm:text-md leading-relaxed text-[#3c3c3c] mt-2 lg:mt-0 text-center">
          Kata sambutan dari Project Manager acara (Natalie Agustinus)
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-6">
          Sesi sambutan ini kemudian dilanjutkan dengan Sesi Sharing yang dipandu oleh MC.
        </p>

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6">
          <Image src={ARTICLE_PATH + '3.png'} alt='Section' fill className="object-cover"/>
        </div>
        <p className="italic text-md sm:text-md leading-relaxed text-[#3c3c3c] mt-2 lg:mt-0 text-center">
          Sharing Session BSLC
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-6">
          Untuk memeriahkan suasana dan meningkatkan keakraban, acara memasuki sesi permainan yang interaktif. Sesi games ini diawali dengan Persiapan Games 1 , di mana PIC menjelaskan tata tertib dan membagi peserta ke dalam kelompok. Permainan pertama yang dimainkan adalah “Spy Among Us” , dipandu oleh MC dan PIC Games.
        </p>

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6">
          <Image src={ARTICLE_PATH + '4.png'} alt='Section' fill className="object-cover"/>
        </div>
        <p className="italic text-md sm:text-md leading-relaxed text-[#3c3c3c] mt-2 lg:mt-0 text-center">
          Games 1 : “Spy Among Us”
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-6">
          Keseruan berlanjut dengan Games 2, yaitu “Word Association Game” , yang juga didahului dengan sesi persiapan dan pembagian kelompok baru.
        </p>

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6">
          <Image src={ARTICLE_PATH + '5.png'} alt='Section' fill className="object-cover"/>
        </div>
        <p className="italic text-md sm:text-md leading-relaxed text-[#3c3c3c] mt-2 lg:mt-0 text-center">
          Games 2 : “Word Association Game”
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-6">
          Sebagai penutup sesi games, peserta memainkan Games 3 yang bertajuk “Colorblind Game” , setelah melewati tahapan persiapan dan pembentukan kelompok
        </p>

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6">
          <Image src={ARTICLE_PATH + '6.png'} alt='Section' fill className="object-cover"/>
        </div>
        <p className="italic text-md sm:text-md leading-relaxed text-[#3c3c3c] mt-2 lg:mt-0 text-center">
          Games 3 : “Colorblind Game”
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-6">
          Puncak perayaan ulang tahun ditandai dengan tiup lilin dan pemotongan kue ulang tahun BSLC. Para peserta berkumpul untuk momen spesial ini. 
        </p>

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6">
          <Image src={ARTICLE_PATH + '7.jpg'} alt='Section' fill className="object-cover"/>
        </div>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-6">
          Setelah itu, seluruh peserta menikmati waktu makan bersama dalam format Potluck dengan aturan huruf depan nama.
        </p>

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6">
          <Image src={ARTICLE_PATH + '8.png'} alt='Section' fill className="object-cover"/>
        </div>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-6">
          Rangkaian acara yang penuh keceriaan, mulai dari sambutan hingga permainan interaktif dan pemotongan kue , mengakhiri perayaan ulang tahun ke-17 BSLC di M2CD Binus Syahdan. Suksesnya acara ini menjadi penanda bahwa BSLC, yang kini telah menginjak usia 17 tahun, siap melanjutkan perjalanannya dalam menciptakan Wonderland of Learning yang penuh dengan pertumbuhan dan persahabatan.
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