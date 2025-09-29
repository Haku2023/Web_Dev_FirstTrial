import homeImage_helloween from "../assets/helloween-home.jpg";
import { useEffect, useRef } from "react";
import { particleEffect } from "../utils/home-text-animation";
import "./particle-text.css"; // Import the CSS file

function Home() {
  const helloween_text = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add a small delay to ensure proper rendering
    const timer = setTimeout(() => {
      if (helloween_text.current) {
        particleEffect(helloween_text.current, ["Happy", "Helloween!"]);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <img
        className="rounded-3xl"
        src={homeImage_helloween}
        alt="Water Image"
      />

      <div
        ref={helloween_text}
        className="particle-text absolute top-1/3 left-1/4 w-1/2  z-10 text-amber-950 text-5xl font-bold tracking-[2px] text-center whitespace-pre-wrap"
      />
    </div>
  );
}
export default Home;
