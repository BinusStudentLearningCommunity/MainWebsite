"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-footer text-white py-10 px-6 sm:px-10 md:px-20 lg:px-28">
      <div className="flex flex-col-reverse md:flex-row md:justify-between items-center gap-8 md:gap-0 mb-7">
        <div className="text-center md:text-left">
          <p className="text-base font-regular">Contact Us</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <a href="#"><Image src="/assets/social-media-logo/youtube.svg" alt="YouTube" width={25} height={25} /></a>
            <a href="#"><Image src="/assets/social-media-logo/x.svg" alt="X" width={25} height={25} /></a>
            <a href="#"><Image src="/assets/social-media-logo/linkedln.svg" alt="LinkedIn" width={25} height={25} /></a>
            <a href="#"><Image src="/assets/social-media-logo/facebook.svg" alt="Facebook" width={25} height={25} /></a>
            <a href="#"><Image src="/assets/social-media-logo/instagram.svg" alt="Instagram" width={25} height={25} /></a>
            <a href="#"><Image src="/assets/social-media-logo/email.svg" alt="Email" width={25} height={25} /></a>
          </div>
        </div>

        <div className="flex justify-center pl-10 md:justify-end w-full md:w-auto">
          <Image src="/assets/BSLC Logo (White).svg" alt="Logo" width={120} height={124} />
        </div>
      </div>

      <div className="text-center text-base font-regular">
        <p>Copyright © 2025 BINUS Student Learning Community. All rights reserved.</p>
      </div>
    </footer>
  );
}
