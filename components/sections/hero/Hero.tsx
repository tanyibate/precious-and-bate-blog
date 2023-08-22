import React from "react";
import Image from "next/image";
import hero from "@/assets/images/hero.jpg";

export default function Hero() {
  return (
    <div className="w-screen relative">
      <Image src={hero} alt="" className="w-full z-0" />
      <div className="z-10 bg-black opacity-70 w-full h-full  absolute top-0 left-0"></div>
      <div className="z-20  w-full h-full flex items-center justify-center px-6 absolute top-0 left-0">
        <div className="max-w-screen-xl">
          <div className="text-9xl text-white font-bold font-gilroy">
            Levi Jeans, Laughter, and{" "}
            <span className="text-azure">Grainy Couples Shoot</span>
          </div>
        </div>
      </div>
    </div>
  );
}
