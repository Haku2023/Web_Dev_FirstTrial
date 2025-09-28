import "./App.css";
import {
  // HashRouter as Router,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { About, Posts, Post1, Post2, Gpt, Claude, Gemini } from "./pages";
import { Footer, Nav, Home } from "./components";

function App() {
  return (
    <div className="flex bg-none flex-col justify-center lg:max-w-3/4  items-stretch h-auto">
      <Router basename="/Web_Dev_FirstTrial">
        <Nav />
        {/* <Heros /> */}
        <div className="bg-white mt-4 rounded-4xl shadow-lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="posts/post-1" element={<Post1 />}></Route>
            <Route path="posts/post-2" element={<Post2 />}></Route>
            <Route path="posts/post_claude" element={<Claude />}></Route>
            <Route path="posts/post_gpt" element={<Gpt />}></Route>
            <Route path="posts/post_gemini" element={<Gemini />}></Route>
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
