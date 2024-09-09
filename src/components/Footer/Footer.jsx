import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 flea justify-center px-[16px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] w-[100%]">
        <div>
          <h2 className="text-lg font-semibold mb-4">NewTec haqida</h2>
          <p className="text-sm">
            NewTec – raqamli muvaffaqiyatingiz uchun xizmat ko‘rsatuvchi kompaniya. Biz domenlar, xosting, veb-sayt yaratish va ilovalar ishlab chiqish bo‘yicha to‘liq xizmatlar spektrini taqdim etamiz.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Foydali havolalar</h2>
          <ul className="text-sm">
            <li className="mb-2">
              <a href="/services" className="hover:underline">Xizmatlar</a>
            </li>
            <li className="mb-2">
              <a href="/pricing" className="hover:underline">Tariflar va Narxlar</a>
            </li>
            <li className="mb-2">
              <a href="/about" className="hover:underline">Kompaniya haqida</a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="hover:underline">Kontaktlar</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Biz bilan bog‘laning</h2>
          <p className="text-sm mb-4">info@newtec.com</p>
          <p className="text-sm mb-4">+998 71 123 45 67</p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook/>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter/>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin/>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; 2024 NewTec. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
};

export default Footer;
