'use client';

import { Poppins, Syne } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'], 
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['600'], 
});

const inputStyle = `w-full bg-transparent border-b border-gray-500 text-white placeholder-gray-400 focus:border-[#19A89D] focus:outline-none transition duration-300 py-3 ${poppins.className}`;

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="relative bg-[#0F2D2A] text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at top right, rgba(0, 0, 0, 0.9) 0%, transparent 50%)'
      }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center z-10">
        
        <div className="text-center md:text-left">
          <h2 className={`text-5xl md:text-7xl font-semibold text-[#19A89D] leading-tight ${syne.className}`}>
            Get in
            <br />
            Touch <span aria-hidden="true" className="ml-2">→</span>
          </h2>
          <p className={`mt-4 text-lg text-white ${poppins.className}`}>
            Let's Build Something Together
          </p>
        </div>

        <form className="w-full">
          <div className="flex flex-col md:flex-row gap-x-8 gap-y-10">
            <div className="flex-1 flex flex-col gap-10">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input type="text" id="name" name="name" placeholder="Input Your Name" className={inputStyle} />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input type="email" id="email" name="email" placeholder="Input Your Email" className={inputStyle} />
              </div>
              <div>
                <label htmlFor="subject" className="sr-only">Email Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Input Email Subject" className={inputStyle} />
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex-grow">
                <label htmlFor="body" className="sr-only">Email Body</label>
                <textarea id="body" name="body" rows={8} placeholder="Input Email Body" className={`${inputStyle} h-full`}></textarea>
              </div>
              <div className="text-right mt-8">
                <button 
                  type="submit" 
                  className={`border border-[#19A89D] text-[#19A89D] py-3 px-10 hover:bg-[#19A89D] hover:text-[#0F2D2A] transition duration-300 ${poppins.className} font-semibold`}
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </form>

      </div>
    </section>
  );
};

export default Contact;