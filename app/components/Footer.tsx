import Link from 'next/link'
import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-green-100 py-4 h-auto">
      <div className="font-bold text-lg">
        <Link href=" https://forms.gle/omsC1Zm3tUs9B317A"><p>Yuta Hamasaki</p></Link>
      </div>
      <p className="text-gray-700 text-sm mt-28 b-0 text-center">
        @2024. Yuta Hamasaki
      </p>
    </footer>
  );
};

export default Footer;