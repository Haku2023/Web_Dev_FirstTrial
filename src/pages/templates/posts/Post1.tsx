import p1_tajiro from "../../../assets/post1_tanjiro.jpg";
export default function Post1() {
  return (
    <div className="bg-blue-100 rounded-4xl">
      <div className="flex justify-center items-center w-full aspect-video bg-gradient-to-b from-purple-900/40 from-30% to-purple-200/40 rounded-3xl ">
        <blockquote className="font-[stick] text-black font-bold text-2xl px-3">
          <span>踏ん張れ、噛みつけ、もう少しだ、全身の力じゃ無いとだめ!</span>
          <span>長距離ではしれないのは肺の容量がまだ足りないだ！</span>
        </blockquote>
        <img src={p1_tajiro} alt="pumpkin" className="w-1/2 mr-2" />
        <span className="text-base  font-bold lg:text-2xl font-[Butcherman]"></span>
      </div>
    </div>
  );
}
