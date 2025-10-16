import p1_tajiro from "../../../assets/post1_tanjiro.jpg";
export default function Post1() {
  return (
    <div className="bg-blue-100 rounded-4xl">
      <div className="flex justify-center items-center w-full aspect-video bg-gradient-to-b from-purple-900/40 from-30% to-purple-200/40 rounded-3xl ">
        <blockquote className=" text-black font-bold text-xl px-3 w-3/4">
          <p>
            It's like when I run a long way - halfway through, my lungs start to
            struggle, and I feel like I can't go on. I start thinking, "Why is
            there still so much left?" But what If I changed my mindset and
            thought, "This feeling of struggle means my lungs are still weak - I
            just need more practice to make them stronger!"{" "}
          </p>
        </blockquote>

        <div className="flex flex-col justify-center items-start">
          <img src={p1_tajiro} alt="pumpkin" className="w-full mr-2" />
          <p>"踏ん張れ、噛みつけ、もう少しだ、全身の力を使わないとダメ!"</p>
          <p>"長距を走れないのは,まだ肺の容量が足りないからだ！"</p>
        </div>
        <span className="text-base  font-bold lg:text-2xl font-[Butcherman]"></span>
      </div>
    </div>
  );
}
