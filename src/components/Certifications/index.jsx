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
  }
];

const Certifications = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {certifications.map((certification, index) => (
          <CertificationCard {...certification} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
