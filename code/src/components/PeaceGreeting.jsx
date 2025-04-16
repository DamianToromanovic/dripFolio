import { useRef, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function PeaceGreeting() {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const containerRef = useRef(null);
  const { isDark } = useContext(ThemeContext);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const leftEye = leftEyeRef.current;
    const rightEye = rightEyeRef.current;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = x / rect.width;
    const percentY = y / rect.height;

    const maxOffsetX = 6;
    const maxOffsetY = 4;

    const moveX = (percentX - 0.5) * 2 * maxOffsetX;
    const moveY = (percentY - 0.5) * 2 * maxOffsetY;

    leftEye.style.transform = `translate(${moveX}px, ${moveY}px)`;
    rightEye.style.transform = `translate(${moveX}px, ${moveY}px)`;
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="hidden md:block absolute bottom-4 left-4 w-24 pointer-events-none"
    >
      <img
        src={isDark ? "/assets/meForDark.png" : "/assets/meForLight.png"}
        alt="Peace Greeting"
        className="w-full h-auto object-cover"
      />
      <div
        ref={leftEyeRef}
        className="absolute bg-black w-[5px] h-[5px] rounded-full transition-transform duration-100"
        style={{ top: "38%", left: "31%" }}
      />
      <div
        ref={rightEyeRef}
        className="absolute bg-black w-[5px] h-[5px] rounded-full transition-transform duration-100"
        style={{ top: "38%", left: "57%" }}
      />
    </div>
  );
}
