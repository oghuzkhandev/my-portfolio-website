"use client";
import { useId } from "react";

export const SparklesCore = (props: {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}) => {
  const id = useId();
  return (
    <div className={props.className}>
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id={`sparkle-${id}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
      <div className="absolute inset-0">
        {Array.from({ length: props.particleDensity || 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${
                Math.random() * (props.maxSize || 3) + (props.minSize || 1)
              }px`,
              height: `${
                Math.random() * (props.maxSize || 3) + (props.minSize || 1)
              }px`,
              backgroundColor: props.particleColor || "#ffffff",
              borderRadius: "50%",
              filter: `url(#sparkle-${id})`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
