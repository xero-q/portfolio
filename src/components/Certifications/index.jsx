import React from "react";
import CertificationCard from "@/components/CertificationCard";
import { translations } from "@/lib/i18n";
import { useLocale } from "@/context/LocaleContext";

const certifications = [
  {
    title: "SQL (Advanced)",
    organization: "HackerRank",
    link: "https://www.hackerrank.com/certificates/72ebf9df290c",
    imgUrl: "/assets/certifications/sql-advanced.png"
  },
  {
    title: "SQL (Intermediate)",
    organization: "HackerRank",
    link: "https://www.hackerrank.com/certificates/e3b09fa32d06",
    imgUrl: "/assets/certifications/sql-intermediate.png"
  },
  {
    title: "Advanced React For Enterprise: React for senior engineers ",
    organization: "Udemy",
    link: "https://www.udemy.com/certificate/UC-57e9f70d-1cbc-4b43-a3a1-a3e4ee0540d0/",
    imgUrl: "/assets/certifications/react-senior-engineers.jpg"
  },
  {
    title: "EF SET English Certificate 69/100 (C1 Advanced)",
    organization: "EF Standard English Test (EF SET)",
    link: "https://www.efset.org/cert/fLgHZ1",
    imgUrl: "/assets/certifications/ef-set.jpg"
  },
  {
    title: "Advanced React",
    organization: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/certificate/NGM4CMMHBEFN",
    imgUrl: "/assets/certifications/advanced-react-coursera.jpg"
  },
  {
    title: "Server-side Development with NodeJS, Express and MongoDB",
    organization: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/certificate/9L7AFK8HX3F9",
    imgUrl: "/assets/certifications/server-side-nodejs.png"
  },
  {
    title: "Learn Cypress UI test automation with real-time scenarios",
    organization: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/certificate/VSN52XLXV798",
    imgUrl: "/assets/certifications/cypress.png"
  },
  {
    title: "Next.js & React - The Complete Guide (incl. Two Paths!)",
    organization: "Udemy",
    link: "https://www.udemy.com/certificate/UC-48964cd6-7018-43a4-8569-8612ff9f579f/",
    imgUrl: "/assets/certifications/nextjs-udemy.jpg"
  },
  {
    title: "Angular (Intermediate)",
    organization: "HackerRank",
    link: "https://www.hackerrank.com/certificates/62615ac44828",
    imgUrl: "/assets/certifications/angular-intermediate.jpg"
  },
  {
    title: "Angular (Basic)",
    organization: "HackerRank",
    link: "https://www.hackerrank.com/certificates/22197f798390",
    imgUrl: "/assets/certifications/angular-basic.jpg"
  }
];

const Certifications = () => {
  const { locale } = useLocale();
  const t = translations[locale];

  return (
    <div className="section-container">
      <h2 className="section-header">{t.certifications.header}</h2>
      <div className="section-body">
        {certifications.map((certification, index) => (
          <CertificationCard
            {...certification}
            issueDate={t.certifications.issued_dates[index]}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
