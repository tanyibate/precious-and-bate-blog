import React from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

function Header() {
  return (
    <section className="w-full fixed top-0 left-0 z-50 px-6">
      <div className="mx-auto w-full py-8 max-w-screen-xl flex items-center justify-between">
        <Image src={logo} alt="logo" />
        <div className="flex space-x-16 text-white">
          <div className="text-lg">Home</div>
          <div className="text-lg">Articles</div>
          <div className="text-lg">About</div>
          <div className="text-lg">Contact</div>
        </div>
      </div>
    </section>
  );
}

export default Header;
