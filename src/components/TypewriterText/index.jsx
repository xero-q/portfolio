"use client";

import { useEffect, useState } from "react";

export default function TypewriterText({ text, speed = 100, onComplete }) {
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
    <div className={`typewriter ", ${showCursor ? "with-cursor" : ""}`}>
      {text.slice(0, index)}
    </div>
  );
}
