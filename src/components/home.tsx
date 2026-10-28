import homeImage_helloween from "../assets/helloween-home.jpg";
import { useEffect, useRef, useState } from "react";
import { particleEffect } from "../utils/home-text-animation";
import "./particle-text.css"; // Import the CSS file

function Home() {
  const helloween_text = useRef<HTMLHeadingElement>(null);
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
    // const timer = setTimeout(() => {
    // Add a small delay to ensure proper rendering
    if (imageLoaded && helloween_text.current) {
      particleEffect(helloween_text.current, ["Projects"]);
    }
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
          <div className="absolute inset-0 z-20 grid place-items-center">
            <section className="w-full max-w-5xl p-6 -translate-y-80 ">
              <h2
                ref={helloween_text}
                className="relative particle-text mb-6 text-center text-5xl font-bold text-amber-950"
              >
                Tiny Hubs
              </h2>
              <div className="grid w-full max-w-5xl grid-cols-1 gap-6 p-6 md:grid-cols-2 translate-x-4">
                <article className="flex flex-col rounded-2xl bg-white/90 p-6 shadow-lg">
                  <h2 className="text-2xl font-bold text-amber-950">
                    1D CFD Simulation (Fortran/Python)
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-stone-700">
                    visualize the difference between Cip and Upwind methods in
                    1D fluid dynamics simulations at different CFL numbers.
                  </p>

                  <a
                    href="https://haku2023.github.io/Seminar_Taisui/P3_4cases.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto pt-6 font-semibold text-amber-800 hover:underline"
                  >
                    Explore the project →
                  </a>
                  <a
                    href="https://github.com/Haku2023/Seminar_Taisui/tree/main/src"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" font-semibold text-amber-800 hover:underline"
                  >
                    source codes →
                  </a>
                </article>
                <article className="flex flex-col rounded-2xl bg-white/90 p-6 shadow-lg">
                  <h2 className="text-2xl font-bold text-amber-950">
                    Docs for Cmake(Visual Studio) and Zsh(Cygwin)
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-stone-700">
                    A simple CMake project to demonstrate the usage of CMake for
                    several different programming languages used on Visual
                    Studio. The Zsh setting on Cygwin is also provided to
                    enhance the development environment.
                  </p>

                  <a
                    href="https://github.com/Haku2023/KyotoUniversity_Lab-Taisui_Documents"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto pt-6 font-semibold text-amber-800 hover:underline"
                  >
                    Explore the project →
                  </a>
                </article>
                <article className="flex flex-col rounded-2xl bg-white/90 p-6 shadow-lg">
                  <h2 className="text-2xl font-bold text-amber-950">
                    Topographic Visualization(Python/Dash)
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-stone-700">
                    read specific csv file to visualize the topographic data,
                    and provide the 2D/3D visualization methods.(python/dash)
                  </p>

                  <a
                    href="https://github.com/Haku2023/chikei-visualization-taisui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto pt-6 font-semibold text-amber-800 hover:underline"
                  >
                    Explore the project →
                  </a>
                </article>
                <article className="flex flex-col rounded-2xl bg-white/90 p-6 shadow-lg">
                  <h2 className="text-2xl font-bold text-amber-950">
                    Animation Tool(Python)
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-stone-700">
                    Create MP4 animations from JPG image sequences using either
                    a desktop app(easy to manipulate) or a batch script for
                    multiple simulation cases.
                  </p>

                  <a
                    href="https://github.com/Haku2023/Animation_Tool"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto pt-6 font-semibold text-amber-800 hover:underline"
                  >
                    Explore the project →
                  </a>
                </article>
              </div>
            </section>
          </div>
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
