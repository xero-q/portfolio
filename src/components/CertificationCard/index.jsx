import React from "react";
import Image from "next/image";

const CertificationCard = ({
  title,
  organization,
  issueDate,
  link,
  imgUrl
}) => {
  return (
    <div className="bg-gray-300 shadow-xl rounded-2xl p-6 flex flex-col items-center text-center">
      <Image
        src={imgUrl}
        alt={title}
        width={100}
        height={100}
        className="w-24 h-24 object-contain mb-4"
      />
      <h3 className="text-xl font-bold text-blue-500 mb-1">{title}</h3>
      <p className="text-gray-800 text-sm mb-2">{organization}</p>
      <p className="text-gray-800 text-xs mb-4">Issued: {issueDate}</p>
      <a
        href={link}
        target="_blank"
        className="text-blue-500 font-semibold hover:underline text-sm"
      >
        View Credential →
      </a>
    </div>
  );
};

export default CertificationCard;
