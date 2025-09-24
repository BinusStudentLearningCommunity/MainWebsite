import Image from "next/image";
import Link from "next/link";
import { LuInstagram, LuFacebook, LuTwitter } from "react-icons/lu";

const ARTICLE_PATH = "/assets/article-assets/";

export default function Article() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <Image
          src={ARTICLE_PATH + "article-hero-1.png"}
          alt="Full background"
          fill
          className="object-cover"
          priority
        />
        
        <section className="absolute xl:bottom-0 sm:top-0 md:bottom-0 flex flex-col items-center justify-end w-full">
          <div className="w-[90%] sm:w-[85%] lg:w-[80%] bg-white p-4 sm:p-6 lg:p-8 xl:p-25 rounded-none">
            <header className="flex flex-col">
              <h6 className="text-[#3C3C3C] text-sm sm:text-md mb-2 sm:mb-4">Categories</h6>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#000] leading-tight">
                BSLC LDK CP 2025: <br />
                Growing Leadership Skills for a Successful Organization
              </h1>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-3 sm:mt-4">
                <h6 className="text-[#3C3C3C] text-sm sm:text-md">17 June 2025</h6>
                <h6 className="text-[#3C3C3C] text-sm sm:text-md">Silverius Calvin</h6>
              </div>
            </header>
          </div>
        </section>
      </div>
      
      {/* Article Content Section (below hero) */}
      <section className="relative z-10 flex flex-col justify-start w-[90%] sm:w-[85%] lg:w-[80%] bg-white px-4 sm:px-6 lg:px-8 xl:px-25 rounded-none mx-auto">
            
        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-0">
          Pada bulan Juni 2025, BSLC menyelenggarakan Latihan Dasar Kepemimpinan Calon Pengurus (LDK CP) yang rutin diadakan setiap tahunnya. 
          LDK CP tahun ini mengusung tema "Growing Leadership Skills for a Successful Organization". Tema ini bertujuan untuk membekali calon pengurus BSLC 
          dengan keterampilan kepemimpinan yang esensial dan pola pikir strategis yang diperlukan untuk memimpin secara efektif dan memastikan kesuksesan organisasi di lingkungan yang dinamis.
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-4 sm:mt-6">
          LDK CP 2025 berfokus pada penyampaian materi, sesi tanya jawab, dan berbagi pengalaman antara pengurus dengan aktivis yang bertujuan untuk memastikan bahwa calon pengurus BSLC di masa depan siap untuk peran mereka. 
          LDK CP 2025 juga menggabungkan elemen interaktif seperti ice breaking games dan sharing session untuk menguji pemahaman peserta dan mempererat hubungan antar aktivis dan pengurus BSLC.
        </p>

        <h3 className="font-semibold text-xl sm:text-2xl text-left mt-6 sm:mt-8 lg:mt-10">Pembukaan dan Kata Sambutan</h3>
        
        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-4 sm:mt-6 lg:mt-10">
          Acara dibuka dengan sambutan dari Ketua Umum BSLC 2025, 
          Stanley Nathanael Wijaya, yang menyampaikan pentingnya 
          meningkatkan kemampuan kepemimpinan untuk memastikan 
          keberlanjutan dan kesuksesan organisasi di masa depan. 
          Ia menekankan bahwa kepemimpinan yang efektif tidak hanya 
          mengarah pada pencapaian tujuan organisasi, tetapi 
          juga mampu menciptakan dampak positif bagi masyarakat luas.
        </p>

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6 sm:mt-8 lg:mt-10">
          <Image src={ARTICLE_PATH+'article-section-1.png'} alt='Section Image 1' fill className="object-cover"/>
        </div>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 sm:mt-8 lg:mt-10">
          Kemudian, Project Manager LDK CP 2025, Sweetly, memberikan sambutan dan menekankan pentingnya acara ini dalam meningkatkan keterampilan praktis bagi peserta agar mereka dapat memimpin dengan lebih baik dalam berbagai konteks organisasi.
        </p>

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6 sm:mt-8 lg:mt-10">
          <Image src={ARTICLE_PATH+'article-section-2.png'} alt='Section Image 2' fill className="object-cover"/>
        </div>

        <h3 className="font-semibold text-xl sm:text-2xl text-left mt-6 sm:mt-8 lg:mt-10">
          BSLC LDK CP 2025 Sesi 1: "Strategic Management"        
        </h3>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-4 sm:mt-6 lg:mt-10">
          Sesi pertama yang dibawakan oleh Hino Kaila Tomomi, BSLC Alam Sutera President 2025, 
          berfokus pada strategic management, organizational agility, dan strategic roadmap. 
          Manajemen strategis didefinisikan sebagai proses berkelanjutan 
          untuk menentukan arah masa depan organisasi, melibatkan perencanaan, 
          implementasi, dan evaluasi keputusan untuk mencapai tujuan jangka panjang dan keunggulan kompetitif berkelanjutan. 
          Sedangkan organizational agility merupakan kemampuan organisasi untuk merespons dengan cepat dan efektif terhadap perubahan lingkungan. 
          Selain itu, pemaparan langkah-langkah pembuatan strategic roadmap juga diharapkan dapat meningkatkan kemampuan perencanaan dan mendorong kolaborasi serta tanggung jawab bersama.
        </p>

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6 sm:mt-8 lg:mt-10">
          <Image src={ARTICLE_PATH+'article-section-3.png'} alt='Section Image 3' fill className="object-cover"/>
        </div>

        <h3 className="font-semibold text-xl sm:text-2xl text-left mt-6 sm:mt-8 lg:mt-10">
          BSLC LDK CP 2025 Sesi 2: "Regeneration" 
        </h3>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-4 sm:mt-6 lg:mt-10">
        Pada sesi kedua, yang dibawakan oleh Stanley Nathanael Wijaya, Chairman of BSLC 2025, 
        berfokus pada regenerasi. Regenerasi didefinisikan sebagai proses terstruktur dan 
        berkelanjutan dalam menyiapkan, membimbing, dan melibatkan anggota baru untuk melanjutkan 
        estafet kepemimpinan organisasi. Ini mencakup transfer nilai, visi, budaya, serta kompetensi 
        strategis dan operasional organisasi. Selain itu, pemaparan mengenai tantangan regenerasi dan 
        praktik regenerasi di BSLC diharapkan dapat membantu mengatasi kendala seperti kurangnya minat 
        generasi baru dan kekosongan kepemimpinan.

        </p>

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6 sm:mt-8 lg:mt-10">
          <Image src={ARTICLE_PATH+'article-section-4.png'} alt='Section Image 4' fill className="object-cover"/>
        </div>

        <h3 className="font-semibold text-xl sm:text-2xl text-left mt-6 sm:mt-8 lg:mt-10 text-[#000]">
          Penutupan
        </h3>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-4 sm:mt-6 lg:mt-10 mb-6 sm:mb-8 lg:mb-0">
        Acara LDK CP 2025 ditutup dengan ucapan terima kasih kepada semua pembicara, peserta, 
        dan panitia yang telah berpartisipasi aktif sepanjang acara. Dengan keterampilan 
        kepemimpinan yang baru diperoleh, diharapkan peserta dapat membawa perubahan positif bagi 
        organisasi dan masyarakat di masa depan.

        </p>
      </section>

      <section className="my-12 sm:my-16 lg:my-20 gap-3 sm:gap-4 flex flex-col items-center px-4">
        <h3 className="font-regular text-xl sm:text-2xl text-center">Share to your friends</h3>
        <div className="flex flex-row gap-4 sm:gap-6">
          <Link href={""} className="hover:opacity-70 transition-opacity">
            <LuInstagram size={28} className="sm:w-8 sm:h-8"/>
          </Link>

          <Link href={""} className="hover:opacity-70 transition-opacity">
            <LuFacebook size={28} className="sm:w-8 sm:h-8"/>
          </Link>

          <Link href={""} className="hover:opacity-70 transition-opacity">
            <LuTwitter size={28} className="sm:w-8 sm:h-8"/>
          </Link>
        </div>
      </section>
    </main>
  );
}