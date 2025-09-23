// import myVideo from "../assets/my-video2.mp4"; // Place video in src/assets/
import homeImage from "../assets/home.jpg";
function Home() {
  return (
    /* <div className="video-container">
      <video autoPlay loop muted>
        <source src={myVideo} type="video/mp4" /> This browser does not support
        the video tag.
      </video>
    </div> */
    <img className="rounded-3xl" src={homeImage} alt="Water Image" />
  );
}

export default Home;
