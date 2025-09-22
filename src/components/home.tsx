import myVideo from "../assets/my-video2.mp4"; // Place video in src/assets/
function Home() {
  return (
    <div className="video-container">
      <video autoPlay loop muted>
        <source src={myVideo} type="video/mp4" /> This browser does not support
        the video tag.
      </video>
    </div>
  );
}

export default Home;
