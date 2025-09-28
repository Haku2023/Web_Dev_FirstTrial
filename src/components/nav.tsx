import { Link } from "react-router-dom";
import pumpkin from "../assets/pumpkin.png";
import witches from "../assets/witches.png";
import { useState, useEffect, useRef } from "react";
import {
  translate_opacity_1,
  translate_opacity_2,
  // fuyofuyo_1,
  // fuyofuyo_2,
  //verticalRotate,
} from "../utils/opacity-translate";

function Nav() {
  //const [message, setMessage] = useState("");
  const [, setMessage] = useState("");

  const posts_btn_1 = useRef<HTMLAnchorElement>(null);
  const posts_btn_2 = useRef<HTMLAnchorElement>(null);
  const text_btn_2 = useRef<HTMLAnchorElement>(null);
  const head_div = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (posts_btn_1.current) {
      translate_opacity_1(posts_btn_1.current, 5);
    }
  }, []);
  useEffect(() => {
    if (posts_btn_2.current) {
      translate_opacity_2(posts_btn_2.current, 5);
    }
  }, []);

  useEffect(() => {
    async function fetchMessage() {
      const response = await fetch("/api/hello");
      const data = await response.json();
      setMessage(data.message);
    }
    fetchMessage();
  }, []);
  return (
    <Link to="/">
      <div
        ref={head_div}
        className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-700 to-blue-900 rounded-3xl px-4 py-4 m-0 "
        // className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-blue-900 rounded-3xl px-4 py-4 m-0 "
      >
        <h1 className="font-[Spicy_Rice] text-blackfont-serif  text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-50 to-orange-400">
          Hello There, Welcome to The Haku's HomePage!
        </h1>
        {/* <h2 className="text-black">message from backend: {message}</h2> */}
        <nav className=" flex  flex-row mt-2 justify-between ">
          <Link
            ref={posts_btn_1}
            className="flex justify-center items-center bg-amber-200  mx-3 py-2 px-4 rounded-4xl hover:bg-amber-700 hover:text-amber-50 text-black"
            to="/about"
          >
            <img src={pumpkin} alt="pumpkin" className="max-h-6.5 mr-2" />
            <span className="text-base  font-bold lg:text-2xl font-[Butcherman]">
              About
            </span>
          </Link>

          <Link
            ref={posts_btn_2}
            className="flex justify-center items-center bg-amber-200 mx-3 py-2 px-4  rounded-4xl hover:bg-amber-700 hover:text-amber-50  text-black "
            to="/posts"
          >
            <img src={witches} alt="witches" className="max-h-6.5 mr-2" />
            {/* <span ref={text_btn_2} className="hidden"> */}
            <span
              className="text-base font-bold lg:text-2xl font-[Butcherman]"
              ref={text_btn_2}
            >
              Posts
            </span>
          </Link>
        </nav>
      </div>
    </Link>
  );
}

export default Nav;
