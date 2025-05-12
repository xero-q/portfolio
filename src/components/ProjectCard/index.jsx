import React, { useState } from "react";
import Image from "next/image";
import ImageModal from "@/components/ImageModal";
import { translations } from "@/lib/i18n";
import { useLocale } from "@/context/LocaleContext";

const ProjectCard = ({ description, link, imgUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { locale } = useLocale();
  const t = translations[locale];

  return (
    <div className="bg-gradient-to-br from-green-50 to-indigo-100 shadow-xl rounded-2xl p-6 flex flex-col items-center text-center">
      <Image
        src={imgUrl}
        alt={description}
        width={300}
        height={300}
        className="object-contain mb-4 cursor-pointer min-h-[150px]"
        onClick={() => setIsModalOpen(true)}
      />
      <h3 className="text-gray-800 text-xl font-semibold mb-1 min-h-[84px]">
        {description}
      </h3>
      <a
        href={link}
        target="_blank"
        className="text-blue-400 font-semibold hover:underline text-sm"
      >
        {t.projects.view} →
      </a>
      <ImageModal
        isOpen={isModalOpen}
        imageUrl={imgUrl}
        alt={description}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ProjectCard;
