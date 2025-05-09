import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:items-start w-full fade-in lg:max-w-[650px] border border-gray-600 p-4 rounded-2xl shadow-[0_0_20px_rgba(100,100,100,0.4)] lg:border-none lg:shadow-none lg:p-0">
      <h2 className="text-3xl font-bold mb-5">About me</h2>
      <div className="font-extrabold text-center lg:text-left md:max-w-[700px] lg:max-w-[900px]">
        I graduated with a degree in Computer Engineering in 2012 and completed
        a Master’s in Applied Informatics in 2014. I began my career as a web
        developer and as a professor of Mathematics and Statistics, roles I held
        until 2019, when I transitioned to working full-time as a software
        developer. I have developed software using PHP, .NET,
        JavaScript/TypeScript, and Python, leveraging libraries and frameworks
        such as Angular, React.js, Next.js, NestJS, ASP.NET, Django, FastAPI,
        Yii2, and Laravel. I have experience with various database management
        systems, including PostgreSQL, MySQL, MongoDB, Redis and SQLite, as well
        as cloud providers like AWS and Google Cloud. Additionally, I have
        experience in Machine Learning using scikit-learn and PyTorch, working
        on regression and classification tasks.{" "}
      </div>
    </div>
  );
};

export default AboutMe;
