import { FaFacebookF, FaYoutube, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#3a3a3a] text-white text-sm pt-10 pb-4 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <div className="font-bold mb-3">ABOUT ITG</div>
          <ul className="space-y-2 text-slate-300">
            <li>Our Story</li>
            <li>Partners</li>
            <li>Clients</li>
            <li>Careers</li>
            <li>News</li>
          </ul>
        </div>

        <div>
          <div className="font-bold mb-3">PRODUCTS</div>
          <ul className="space-y-2 text-slate-300">
            <li>EduWave K-12</li>
            <li>EduWave Higher-Ed</li>
            <li>WaveGRP</li>
            <li>WaveERP</li>
          </ul>
        </div>

        <div>
          <div className="font-bold mb-3">CONTACT US</div>
          <ul className="space-y-2 text-slate-300">
            <li>General Info Email</li>
            <li>Sales &amp; Marketing</li>
            <li>Office Locations</li>
          </ul>
        </div>

        <div>
          <div className="font-bold mb-3">SOCIAL MEDIA</div>
          <div className="flex gap-2">
            <div className="h-7 w-7 rounded-full border border-white flex items-center justify-center">
              <FaFacebookF size={12} />
            </div>
            <div className="h-7 w-7 rounded-full border border-white flex items-center justify-center">
              <FaYoutube size={12} />
            </div>
            <div className="h-7 w-7 rounded-full border border-white flex items-center justify-center">
              <FaInstagram size={12} />
            </div>
            <div className="h-7 w-7 rounded-full border border-white flex items-center justify-center">
              <FaXTwitter size={12} />
            </div>
            <div className="h-7 w-7 rounded-full border border-white flex items-center justify-center">
              <FaLinkedinIn size={12} />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-slate-600 mt-6 pt-4 text-slate-300">
        © 2026 Integrated Technology Group (ITG). All rights reserved.
      </div>
    </footer>
  );
}