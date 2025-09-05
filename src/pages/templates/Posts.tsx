import { Link } from "react-router-dom";

export default function Posts() {
  return (
    <div>
      <h1 className="text-black">hello posts</h1>
      <div className="m-4 flex flex-wrap justify-center">
        <Link
          className="rounded-3xl bg-amber-600 p-4 m-4 text-white font-bold"
          to="/posts/post-1"
        >
          post 1 - tanjiro thinking
        </Link>
        <Link
          className="rounded-3xl bg-amber-600 p-4 m-4 text-white font-bold"
          to="/posts/post-2"
        >
          post 2 - gradient learning
        </Link>
        <Link
          className="rounded-3xl bg-amber-600 p-4 m-4 text-white font-bold"
          to="/posts/post_gemini"
        >
          Self Introduction (Gemini)
        </Link>
        <Link
          className="rounded-3xl bg-amber-600 p-4 m-4 text-white font-bold"
          to="/posts/post_gpt"
        >
          post by chatgpt AI
        </Link>
        <Link
          className="rounded-3xl bg-amber-600 p-4 m-4 text-white font-bold"
          to="/posts/post_claude"
        >
          post by claude AI
        </Link>
      </div>
    </div>
  );
  // return <h2>Hello, here is Posts!</h2>;
}
