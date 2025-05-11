import React from "react";
import CertificationCard from "@/components/CertificationCard";

const certifications = [
  {
    title: "Advanced React For Enterprise: React for senior engineers ",
    organization: "Udemy",
    issueDate: "Dec 2023",
    link: "https://www.udemy.com/certificate/UC-57e9f70d-1cbc-4b43-a3a1-a3e4ee0540d0/",
    imgUrl: "/assets/certifications/react-senior-engineers.jpg"
  },
  {
    title: "EF SET English Certificate 69/100 (C1 Advanced)",
    organization: "EF Standard English Test (EF SET)",
    issueDate: "Dec 2023",
    link: "https://www.efset.org/cert/fLgHZ1",
    imgUrl: "/assets/certifications/ef-set.jpg"
  },
  {
    title: "Advanced React",
    organization: "Coursera",
    issueDate: "Sep 2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/NGM4CMMHBEFN",
    imgUrl: "/assets/certifications/advanced-react-coursera.jpg"
  },
  {
    title: "Server-side Development with NodeJS, Express and MongoDB",
    organization: "Coursera",
    issueDate: "Apr 2022",
    link: "https://www.coursera.org/account/accomplishments/certificate/9L7AFK8HX3F9",
    imgUrl: "/assets/certifications/server-side-nodejs.png"
  },
  {
    title: "Learn Cypress UI test automation with real-time scenarios",
    organization: "Coursera",
    issueDate: "Apr 2022",
    link: "https://www.coursera.org/account/accomplishments/certificate/VSN52XLXV798",
    imgUrl: "/assets/certifications/cypress.png"
  },
  {
    title: "Next.js & React - The Complete Guide (incl. Two Paths!)",
    organization: "Udemy",
    issueDate: "Oct 2021",
    link: "https://www.udemy.com/certificate/UC-48964cd6-7018-43a4-8569-8612ff9f579f/",
    imgUrl: "/assets/certifications/nextjs-udemy.jpg"
  }
];

const Certifications = () => {
  return (
    <div className="section-container">
      <h2 className="section-header">Certifications</h2>
      <div className="section-body">
        {certifications.map((certification, index) => (
          <CertificationCard {...certification} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
