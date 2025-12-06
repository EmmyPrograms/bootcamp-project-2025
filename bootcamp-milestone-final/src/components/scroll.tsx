"use client";

import React from "react";

interface ScrollProps {
  children: React.ReactNode;
  className?: string;
}

export default function Scroll({ children, className = "" }: ScrollProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-500 ease-out
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
