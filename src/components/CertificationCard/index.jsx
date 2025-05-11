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
    <div className="bg-gray-300 shadow-xl rounded-2xl p-6 flex flex-col items-center text-center">
      <Image
        src={imgUrl}
        alt={title}
        width={100}
        height={100}
        className="w-24 h-24 object-contain mb-4 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      />
      <h3 className="text-xl font-bold text-blue-500 mb-1 min-h-[84px]">
        {title}
      </h3>
      <p className="text-gray-800 text-sm mb-2">{organization}</p>
      <p className="text-gray-800 text-xs mb-4">Issued: {issueDate}</p>
      <a
        href={link}
        target="_blank"
        className="text-blue-500 font-semibold hover:underline text-sm"
      >
        View Credential →
      </a>
      <ImageModal
        isOpen={isModalOpen}
        imageUrl={imgUrl}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default CertificationCard;
