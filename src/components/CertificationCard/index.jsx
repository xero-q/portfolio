import React, { useState } from "react";
import Image from "next/image";
import ImageModal from "@/components/ImageModal";

const CertificationCard = ({
  title,
  organization,
  issueDate,
  link,
  imgUrl
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-indigo-100 to-green-50 shadow-xl rounded-2xl p-6 flex flex-col items-center text-center">
      <Image
        src={imgUrl}
        alt={title}
        width={90}
        height={90}
        className="object-contain mb-4 cursor-pointer min-h-[83px]"
        onClick={() => setIsModalOpen(true)}
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-1 min-h-[84px]">
        {title}
      </h3>
      <p className="text-gray-800 text-sm mb-2">{organization}</p>
      <p className="text-gray-800 text-xs mb-4">Issued: {issueDate}</p>
      <a
        href={link}
        target="_blank"
        className="text-blue-400 font-semibold hover:underline text-sm"
      >
        View Credential →
      </a>
      <ImageModal
        isOpen={isModalOpen}
        imageUrl={imgUrl}
        alt={title}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default CertificationCard;
