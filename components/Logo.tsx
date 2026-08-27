// src/components/Logo.tsx
import React from "react";

export default function Logo({
  className = "w-8 h-8",
}: {
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="16 8"
        strokeLinecap="round"
        className="text-amber-500"
      />
      <circle
        cx="12"
        cy="12"
        r="7"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="12 6"
        strokeLinecap="round"
        transform="rotate(45 12 12)"
        className="text-amber-500"
      />
      <polygon
        points="10 8 16 12 10 16 10 8"
        fill="currentColor"
        className="text-amber-500"
      />
    </svg>
  );
}
