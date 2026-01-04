import Image from "next/image";
import Link from "next/link";
import { LuInstagram, LuFacebook, LuTwitter } from "react-icons/lu";

const ARTICLE_PATH = "/assets/article-assets/article-4/";

export default function ArticleOne() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <Image
          src={ARTICLE_PATH + "1.jpg"} // Change per page
          alt="Article 4 Hero"
          fill
          className="object-cover"
          priority
        />
        
        <section className="absolute xl:bottom-0 sm:top-0 md:bottom-0 flex flex-col items-center justify-end w-full">
          <div className="w-[90%] sm:w-[85%] lg:w-[80%] bg-white p-4 sm:p-6 lg:p-8 xl:p-25 rounded-none">
            <header className="flex flex-col">
              <h6 className="text-[#3C3C3C] text-sm sm:text-md mb-2 sm:mb-4">Galleries</h6>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#000] leading-tight">
                BSLC SkillCraft 2025: “Explore the Colors Within – Expressing the Heart Through the Canvas – Explore Yourself Through Art”
              </h1>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-3 sm:mt-4">
                <h6 className="text-[#3C3C3C] text-sm sm:text-md">4 October 2025</h6>
              </div>
            </header>
          </div>
        </section>
      </div>
      
      {/* Article Content Section */}
      <section className="relative z-10 flex flex-col justify-start w-[90%] sm:w-[85%] lg:w-[80%] bg-white px-4 sm:px-6 lg:px-8 xl:px-25 rounded-none mx-auto">
        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-0">
          Pada Jumat, 26 September 2025, BSLC kembali menyelenggarakan program pengembangan diri berjudul “BSLC SkillCraft 2025: Explore the Colors Within – Expressing the Heart Through the Canvas” di Kampus BINUS @Bekasi, Ruang 406. Acara ini menghadirkan pengalaman unik bagi mahasiswa untuk mengekspresikan diri melalui seni melukis sebagai media refleksi dan penerimaan diri. Dengan mengusung tema warna dan ekspresi, kegiatan ini dirancang untuk menjadi wadah sehat, aman, dan kreatif bagi mahasiswa dalam menyalurkan emosi sekaligus meningkatkan kesadaran akan pentingnya kesehatan mental.
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-0">
          BSLC SkillCraft 2025 diikuti oleh sekitar 31 peserta yang antusias menuangkan perasaan dan pikiran ke dalam sapuan kuas di atas kanvas. Tidak hanya sebatas workshop melukis, acara ini diperkaya dengan materi reflektif yang dipandu oleh narasumber, Psikolog Dr. Ambar Restika Suryandaru, S.Psi., M.Psi., yang memberikan wawasan mengenai ekspresi diri, kesadaran emosional, serta pentingnya penerimaan terhadap diri sendiri.
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-0">
          Acara dimulai dengan pembukaan oleh MC, doa bersama, serta kata sambutan dari Ketua Umum BSLC 2025, Stanley Nathanael Wijaya, dan Project Manager BSLC SkillCraft 2025, Eka Risma Kurnia Sari dan juga Dr. Ambar Restika Suryandaru selaku pembicara. Ketiganya menyampaikan apresiasi atas antusiasme peserta dan panitia, serta menekankan pentingnya menjaga keseimbangan antara prestasi akademik dengan kesehatan mental mahasiswa.
        </p>

        {/* <h3 className="font-semibold text-xl sm:text-2xl text-left mt-6 sm:mt-8 lg:mt-6">Pembukaan dan Kata Sambutan</h3> */}

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6">
          <Image src={ARTICLE_PATH + '1.jpg'} alt='Section' fill className="object-cover"/>
        </div>
        <p className="italic text-md sm:text-md leading-relaxed text-[#3c3c3c] mt-2 lg:mt-0 text-center">
          Kata sambutan Project Manager
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-6">
          Sesi utama dimulai dengan pemaparan materi Self-Expression & Acceptance oleh Dr. Ambar Restika Suryandaru. Peserta diajak memahami bagaimana seni dapat menjadi medium non-verbal untuk menyalurkan emosi, membangun self-awareness, dan mempraktikkan self-compassion. Setelah sesi materi, peserta diberikan kesempatan bertanya dalam sesi Q&A yang berlangsung hangat dan penuh antusiasme.
        </p>

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6">
          <Image src={ARTICLE_PATH + '2.jpg'} alt='Section' fill className="object-cover"/>
        </div>
        <p className="italic text-md sm:text-md leading-relaxed text-[#3c3c3c] mt-2 lg:mt-0 text-center">
          Materi “Explore Yourself Through Art”
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-6">
          Setelah sesi materi, acara berlanjut ke workshop utama “Explore Yourself Through Art”. Setiap peserta menerima kanvas, cat, dan kuas untuk menuangkan perasaan terdalam mereka ke dalam bentuk warna dan simbol. Dengan bimbingan narasumber, peserta bebas berekspresi tanpa dituntut hasil sempurna. Suasana penuh keheningan kreatif, tawa, dan perbincangan reflektif mewarnai ruangan.
        </p>

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6">
          <Image src={ARTICLE_PATH + '3.png'} alt='Section' fill className="object-cover"/>
        </div>
        <p className="italic text-md sm:text-md leading-relaxed text-[#3c3c3c] mt-2 lg:mt-0 text-center">
          Sesi melukis
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-6">
          Selesai melukis, peserta diajak merefleksikan hasil karyanya. Mereka berbagi cerita tentang makna warna, simbol, serta pengalaman batin yang dirasakan selama proses melukis. Sesi refleksi ini menjadi momen berharga di mana peserta belajar menerima, memahami, dan mengapresiasi dirinya sendiri.
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-6">
          Acara ditutup dengan penyerahan sertifikat kepada pembicara, sesi dokumentasi bersama, dan doa penutup. Panitia juga mengarahkan peserta untuk mengisi exit ticket sebagai bentuk evaluasi kegiatan.
        </p>

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6">
          <Image src={ARTICLE_PATH + '4.jpg'} alt='Section' fill className="object-cover"/>
        </div>
        <p className="italic text-md sm:text-md leading-relaxed text-[#3c3c3c] mt-2 lg:mt-0 text-center">
          Foto bersama penutupan acara
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-6">
          BSLC SkillCraft 2025 berjalan lancar dari awal hingga akhir, meninggalkan kesan mendalam bagi peserta. Selain menghasilkan karya seni yang indah, acara ini menghadirkan pengalaman reflektif yang memperkuat kesadaran emosional, mendorong keberanian berekspresi, serta menumbuhkan empati. Dengan terselenggaranya BSLC SkillCraft, BSLC semakin meneguhkan komitmennya untuk menyediakan ruang belajar yang inklusif, kreatif, dan menyenangkan bagi seluruh mahasiswa.
        </p>

        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-6">
          Kami mengucapkan terima kasih kepada seluruh peserta, panitia, serta narasumber yang telah berkontribusi dalam menyukseskan acara ini. Sampai bertemu di kegiatan BSLC selanjutnya! BSLC, Learning Is Fun!
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