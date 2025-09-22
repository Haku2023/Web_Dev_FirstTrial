import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  translate_opacity_1,
  translate_opacity_2,
  // fuyofuyo_1,
  // fuyofuyo_2,
  //verticalRotate,
} from "../utils/opacity-translate";

function Nav() {
  const [message, setMessage] = useState("");

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
    <div
      ref={head_div}
      className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-blue-900 rounded-3xl px-4 py-8 m-0 "
    >
      <h1 className="text-blackfont-serif text-cyan-100 font-bold">
        Hello There, Welcome to The Haku's HomePage!
      </h1>
      <h2 className="text-black">message from backend: {message}</h2>
      <nav className=" flex h-16 flex-row m-4 justify-between ">
        <Link
          ref={posts_btn_1}
          className="bg-amber-300  m-3 py-2 px-4 rounded-4xl font-bold text-black"
          to="/about"
        >
          About
        </Link>

        <Link
          ref={posts_btn_2}
          className="bg-amber-300 m-3 py-2 px-4  rounded-4xl font-bold text-black"
          to="/posts"
        >
          {/* <span ref={text_btn_2} className="hidden"> */}
          <span ref={text_btn_2}>Posts</span>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
