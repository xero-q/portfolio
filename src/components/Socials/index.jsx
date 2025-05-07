import React from "react";
import Image from "next/image";

const Socials = () => {
  return (
    <div className="flex justify-center gap-3 mt-6 mb-4 items-center fade-in">
      <a
        href="https://www.linkedin.com/in/anibal-sanchez-numa/"
        target="_blank"
        aria-label="LinkedIn"
        className="hover:text-blue-600 transition"
      >
        <Image
          src="/assets/logos/linkedin.png"
          width={30}
          height={25}
          alt="LinkedIn"
          className="hover:scale-110"
        />
      </a>
      <a
        href="https://github.com/xero-q"
        target="_blank"
        aria-label="GitHub"
        className="hover:text-black transition"
      >
        <Image
          src="/assets/logos/github.png"
          width={30}
          height={29}
          alt="Github"
          className="invert hover:scale-110"
        />
      </a>
    </div>
  );
};

export default Socials;
