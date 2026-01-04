import Image from "next/image";
import Link from "next/link";
import { LuInstagram, LuFacebook, LuTwitter } from "react-icons/lu";

const ARTICLE_PATH = "/assets/article-assets/";

export default function ArticleOne() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <Image
          src={ARTICLE_PATH + "article-hero-1.png"} // Change per page
          alt="Article 4 Hero"
          fill
          className="object-cover"
          priority
        />
        
        <section className="absolute xl:bottom-0 sm:top-0 md:bottom-0 flex flex-col items-center justify-end w-full">
          <div className="w-[90%] sm:w-[85%] lg:w-[80%] bg-white p-4 sm:p-6 lg:p-8 xl:p-25 rounded-none">
            <header className="flex flex-col">
              <h6 className="text-[#3C3C3C] text-sm sm:text-md mb-2 sm:mb-4">Category for 4</h6>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#000] leading-tight">
                Title for Article 4: Unique Content Here
              </h1>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-3 sm:mt-4">
                <h6 className="text-[#3C3C3C] text-sm sm:text-md">Date 4</h6>
                <h6 className="text-[#3C3C3C] text-sm sm:text-md">Author 4</h6>
              </div>
            </header>
          </div>
        </section>
      </div>
      
      {/* Article Content Section */}
      <section className="relative z-10 flex flex-col justify-start w-[90%] sm:w-[85%] lg:w-[80%] bg-white px-4 sm:px-6 lg:px-8 xl:px-25 rounded-none mx-auto">
        <p className="text-sm sm:text-md leading-relaxed text-[#3c3c3c] mt-6 lg:mt-0">
          This is the specific content for Article 4. You can add as many 
          paragraphs or custom sections as you want here.
        </p>

        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[532px] mt-6">
          <Image src={ARTICLE_PATH + 'unique-section-img-1.png'} alt='Section' fill className="object-cover"/>
        </div>

        {/* Add as many unique sections as this specific article needs */}
      </section>

      {/* Share Section - Stays consistent across pages */}
      <section className="my-12 sm:my-16 lg:my-20 gap-3 sm:gap-4 flex flex-col items-center px-4">
        <h3 className="font-regular text-xl sm:text-2xl text-center">Share to your friends</h3>
        <div className="flex flex-row gap-4 sm:gap-6">
          <Link href={""} className="hover:opacity-70 transition-opacity"><LuInstagram size={28}/></Link>
          <Link href={""} className="hover:opacity-70 transition-opacity"><LuFacebook size={28}/></Link>
          <Link href={""} className="hover:opacity-70 transition-opacity"><LuTwitter size={28}/></Link>
        </div>
      </section>
    </main>
  );
}