import React from 'react'
import { FaHeart } from 'react-icons/fa6';

export default function Footer() {
    const date= new Date();
    const year = date.getFullYear()

  return (
    <div className="copyright flex items-center justify-center gap-2 text-white" >
      copyright &copy; {year} Made By Emmanuel Ndema
      <FaHeart color="#00FF89" />
    </div>
  );
}
