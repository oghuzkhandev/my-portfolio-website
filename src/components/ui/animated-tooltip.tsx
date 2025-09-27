"use client";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const AnimatedTooltip = ({
  items,
  className,
}: {
  items: {
    id: number;
    name: string;
    designation?: string;
    image?: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className={cn("flex flex-wrap gap-6 justify-center", className)}>
      {items.map((item) => (
        <div
          className="relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 left-1/8 -translate-x-1/2 
                           flex flex-col items-center 
                           rounded-md bg-background/90 backdrop-blur-sm 
                           z-50 shadow-xl px-4 py-2 border border-border"
              >
                <div className="font-bold text-foreground relative z-30 text-base">
                  {item.name}
                </div>
                {item.designation && (
                  <div className="text-muted-foreground text-xs">
                    {item.designation}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
          <div
            onMouseMove={handleMouseMove}
            className="h-14 w-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 
                       border-2 border-primary/50 flex items-center justify-center 
                       text-sm font-semibold"
          >
            {item.image ? (
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              <span className="text-primary">
                {item.name.substring(0, 2).toUpperCase()}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
