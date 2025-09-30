import { Link } from "react-router-dom";
import homeImage_helloween from "../../assets/helloween-home.jpg";

export default function Posts() {
  const linkedClassName =
    "rounded-3xl  p-4 mx-2 text-black font-bold text-[clamp(1rem,4vw,4rem)] font-[Rubik_Wet_Paint] hover:text-purple-600";

  return (
    <div className="flex flex-col justify-center items-center  w-full ">
      <img
        className=" rounded-3xl w-full z-0 "
        src={homeImage_helloween}
        alt="Helloween"
      />
      <div className="absolute m-4 flex flex-col  justify-center items-start z-10">
        <Link className={linkedClassName} to="/posts/post1_thinkingway1">
          tanjiro thinking way
        </Link>
        <Link className={linkedClassName} to="/posts/post-2">
          gradient learning method(*)
        </Link>
        <Link className={linkedClassName} to="/posts/post_gemini">
          Self Introduction Again (Gemini)
        </Link>
        <Link className={linkedClassName} to="/posts/post_gpt">
          (GPT)
        </Link>
        <Link className={linkedClassName} to="/posts/post_claude">
          (Claude)
        </Link>
      </div>
    </div>
  );
  // return <h2>Hello, here is Posts!</h2>;
}
