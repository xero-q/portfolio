import React from "react";

const AboutMe = ({ t }) => {
  return (
    <div className="flex flex-col items-center justify-center lg:items-start w-full fade-in lg:max-w-[650px] border border-gray-600 p-4 rounded-2xl shadow-[0_0_20px_rgba(100,100,100,0.4)] lg:border-none lg:shadow-none lg:p-0">
      <h2 className="text-3xl font-semibold mb-5">{t.aboutme.header}</h2>
      <div className="font-semibold text-center lg:text-left mb-5">
        {t.aboutme.body}
      </div>
      <h3 className="text-2xl font-semibold mb-5">
        {t.aboutme.education.header}
      </h3>
      <div className="font-semibold text-center lg:text-left">
        <p>{t.aboutme.education.university}</p>
        <p className="mb-2">
          <i>{t.aboutme.education.degree}</i> (2012)
        </p>
        <p>{t.aboutme.education.university}</p>
        <p>
          <i>{t.aboutme.education.master}</i> (2014)
        </p>{" "}
      </div>
      <div className="mt-5 w-full flex justify-center lg:justify-start">
        <a
          href="/assets/cv/CV Aníbal Sánchez Numa (EN 2025-12-28).pdf"
          download
          className="text-center inline-flex items-center text-gray-300 font-semibold fade-in w-fit px-3 py-2 rounded-2xl bg-gradient-to-br from-gray-600 to-blue-900 shadow-[0_0_20px_rgba(100,100,100,0.4)]"
        >
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>{t.aboutme.downloadCV}</span>
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
