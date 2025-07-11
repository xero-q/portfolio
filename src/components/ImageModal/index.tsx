// components/ImageModal.js
import React, { useEffect, useRef } from "react";

export default function ImageModal({ isOpen, onClose, imageUrl, alt = "" }) {
  const modalRef = useRef();

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Click outside to close
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
      onClick={handleClickOutside}
    >
      <div ref={modalRef} className="relative">
        <img
          src={imageUrl}
          alt={alt}
          className="max-w-full max-h-screen rounded-lg"
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 font-bold bg-black/50 text-white text-2xl rounded-full p-2 cursor-pointer size-10 flex justify-center items-center"
        >
          X
        </button>
      </div>
    </div>
  );
}
