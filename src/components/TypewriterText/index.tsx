"use client";

import React from "react";
import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?:number;
  onComplete:()=>void;
}

export default function TypewriterText({ text, speed = 100, onComplete }: TypewriterTextProps) {
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setShowCursor(false);
      if (onComplete) onComplete();
    }
  }, [index, text, speed, onComplete]);

  return (
    <h1
      className={`typewriter text-center w-full", ${
        showCursor ? "with-cursor" : ""
      }`}
    >
      {text.slice(0, index)}
    </h1>
  );
}
