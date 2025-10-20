"use client";
import useInView from "@/hooks/useInView";

export default function AnimatedSection({ children, direction = "up", delay = 0 }) {
  const { ref, isInView } = useInView(0.2);

  const directionClasses = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "-translate-x-10",
    right: "translate-x-10",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isInView
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${directionClasses[direction]}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
