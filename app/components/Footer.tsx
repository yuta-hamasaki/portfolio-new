import Link from 'next/link'
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-4 text-center h-20">
      <div className="font-bold text-lg">
        <Link href=" https://forms.gle/omsC1Zm3tUs9B317A"><p>Contact Me</p></Link>
      </div>
      <p className="text-gray-700 text-sm mt-2">
        @2024. Yuta Hamasaki
      </p>
    </footer>
  );
};

export default Footer;