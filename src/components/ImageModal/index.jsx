// components/ImageModal.js
import React from "react";

export default function ImageModal({ isOpen, onClose, imageUrl, alt = "" }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative">
        <img
          src={imageUrl}
          alt={alt}
          className="max-w-full max-h-screen rounded-lg"
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-4xl font-bold cursor-pointer"
        >
          ×
        </button>
      </div>
    </div>
  );
}
