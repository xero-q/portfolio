import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:items-start w-full fade-in lg:max-w-[650px] border border-gray-600 p-4 rounded-2xl shadow-[0_0_20px_rgba(100,100,100,0.4)] lg:border-none lg:shadow-none lg:p-0">
      <h2 className="text-3xl font-bold mb-5">About me</h2>
      <div className="font-extrabold text-center lg:text-left mb-5">
        I'm a developer with more than 11 years of experience working on web
        apps and sites, bots and AI/ML. I have developed software using PHP,
        .NET, JavaScript/TypeScript and Python, leveraging libraries and
        frameworks such as Angular, React.js, Next.js, NestJS, ASP.NET, Django,
        FastAPI, Yii2, and Laravel. I have experience with various database
        management systems, including PostgreSQL, MySQL, MongoDB, Redis and
        SQLite, as well as cloud providers like AWS and Google Cloud.
        Additionally, I have experience in Machine Learning using scikit-learn
        and PyTorch, working on regression and classification tasks.{" "}
      </div>
      <h3 className="text-2xl font-bold mb-5">Education</h3>
      <div className="font-extrabold text-center lg:text-left">
        <p>University of Ciego de Avila, Cuba</p>
        <p className="mb-2">
          <i>Computer Engineer</i> (2012)
        </p>
        <p>University of Ciego de Avila, Cuba</p>
        <p>
          <i>Master's in Applied Informatics</i> (2014)
        </p>{" "}
      </div>
    </div>
  );
};

export default AboutMe;
