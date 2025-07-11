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
    </div>
  );
};

export default AboutMe;
