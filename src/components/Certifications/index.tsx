import React from "react";
import CertificationCard from "@/components/CertificationCard";
import certifications from "@/data/certifications.json";

const Certifications = ({ t }) => {
  return (
    <div className="section-container">
      <h2 className="section-header">{t.certifications.header}</h2>
      <div className="section-body">
        {certifications.map((certification, index) => (
          <CertificationCard
            {...certification}
            t={t}
            issueDate={t.certifications.issued_dates[index]}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
