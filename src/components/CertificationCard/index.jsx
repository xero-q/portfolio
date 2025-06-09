import React, { useState } from "react";
import Image from "next/image";
import ImageModal from "@/components/ImageModal";
import { translations } from "@/lib/i18n";
import { useLocale } from "@/context/LocaleContext";
import styles from "./certification-card.module.css";

const CertificationCard = ({
  title,
  organization,
  issueDate,
  link,
  imgUrl
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { locale } = useLocale();
  const t = translations[locale];

  return (
    <>
      <div
        className={`bg-gradient-to-br from-indigo-100 to-green-50 shadow-xl rounded-2xl p-6 flex flex-col items-center text-center ${styles.hoverScale}`}
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src={imgUrl}
          alt={title}
          width={90}
          height={90}
          className="object-contain mb-4 cursor-pointer min-h-[83px]"
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-1 min-h-[84px]">
          {title}
        </h3>
        <p className="text-gray-800 text-sm mb-2">{organization}</p>
        <p className="text-gray-800 text-xs mb-4">
          {t.certifications.issued}: {issueDate}
        </p>
        <a
          href={link}
          target="_blank"
          className="text-blue-400 font-semibold hover:underline text-sm"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {t.certifications.view} →
        </a>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        imageUrl={imgUrl}
        alt={title}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default CertificationCard;
