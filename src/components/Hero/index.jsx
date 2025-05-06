import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-5">
      <Image
        src="/assets/me.jpg"
        alt="Aníbal Sánchez"
        width={220}
        height={220}
        className="rounded-4xl shadow-2xs mb-2"
      />
      <div className="text-2xl">Hi, I'm Aníbal Sánchez</div>
      <div className="text-2xl">Software/ML Engineer</div>
    </div>
  );
};

export default Hero;
