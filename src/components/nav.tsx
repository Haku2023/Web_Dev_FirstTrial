import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  translate_opacity_1,
  translate_opacity_2,
} from "../utils/opacity-translate";

function Nav() {
  const [message, setMessage] = useState("");

  const posts_btn_1 = useRef<HTMLAnchorElement>(null);
  const posts_btn_2 = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (posts_btn_1.current) {
      translate_opacity_1(posts_btn_1.current, 5);
    }
  }, [translate_opacity_1]);
  useEffect(() => {
    if (posts_btn_2.current) {
      translate_opacity_2(posts_btn_2.current, 5);
    }
  }, [translate_opacity_2]);
  useEffect(() => {
    async function fetchMessage() {
      const response = await fetch("/api/hello");
      const data = await response.json();
      setMessage(data.message);
    }
    fetchMessage();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-700 to-amber-600 rounded-3xl px-4 py-8 m-0 ">
      <h1 className="text-blackfont-serif text-cyan-100 font-bold">
        Hello There, Welcome to The Haku's HomePage!
      </h1>
      <h2 className="text-black">message from backend: {message}</h2>
      <nav className="h-16 flex-row m-4">
        <Link
          ref={posts_btn_1}
          className="bg-amber-300  inline-block m-3 p-4 rounded-4xl text-black"
          to="/about"
        >
          About
        </Link>
        <Link
          ref={posts_btn_2}
          className="bg-amber-300  inline-block m-3 p-4 rounded-2xl text-black"
          to="/posts"
        >
          Posts
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
