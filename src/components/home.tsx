import homeImage_helloween from "../assets/helloween-home.jpg";
import { useEffect, useRef, useState } from "react";
import { particleEffect } from "../utils/home-text-animation";
import "./particle-text.css"; // Import the CSS file

function Home() {
  const helloween_text = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Add a small delay to ensure proper rendering
    //
    const img = new Image();
    const timer = setTimeout(() => {
      img.src = homeImage_helloween;
      img.onload = () => {
        setImageLoaded(true);
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Add a small delay to ensure proper rendering
      if (imageLoaded && helloween_text.current) {
        particleEffect(helloween_text.current, ["Happy", "Helloween!"]);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [imageLoaded]);

  return (
    <div className="relative flex justify-center items-center w-full aspect-square bg-radial from-cookie rounded-3xl from-30% to-helloween_cookie_outer">
      {imageLoaded ? (
        <>
          <img
            className="rounded-3xl w-full"
            src={homeImage_helloween}
            alt="Helloween"
          />
          <div
            ref={helloween_text}
            className="particle-text absolute top-1/3 left-1/4 w-1/2  z-10 text-amber-950 text-5xl font-bold tracking-[2px] text-center whitespace-pre-wrap"
          />
        </>
      ) : (
        <div className="font-[Spicy_Rice] text-4xl lg:text-9xl text-amber-950 text-center ">
          Loading...
        </div>
      )}
    </div>
  );
}
export default Home;
