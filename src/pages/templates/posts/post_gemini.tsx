import selfImg from "../../../assets/self.jpg";
export default function Post_Gemini() {
  return (
    <div>
      <main className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-6">
          <article>
            <header className="mb-8">
              <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4">
                In Shirahama, Ocean and the sea are awesome!
              </h1>
              <div className="flex flex-col items-center text-gray-500">
                <img
                  className="aspect-auto rounded-full mr-4"
                  src={selfImg}
                  alt="Haku"
                />
                <div>
                  <p className="font-semibold">Haku</p>
                  <time dateTime="2025-08-26">August 26, 2025</time>
                </div>
              </div>
            </header>

            <hr className="border-black" />
            <figure className="mb-8">
              <figcaption className="text-center text-sm text-gray-500 mt-2">
                An abstract image representing modern design principles.
              </figcaption>
            </figure>

            <div className="text-black prose prose-lg max-w-none">
              <p>
                In a digital world cluttered with information, simplicity isn't
                just a design choice; it's a necessity. A simple design helps
                users focus on what's important: the content. It improves
                readability, reduces cognitive load, and creates a more
                enjoyable user experience.
              </p>

              <h2>Why Less is More</h2>
              <p>
                The principle of "less is more" suggests that by removing
                unnecessary elements, the remaining ones gain more significance.
                This applies directly to web design:
              </p>
              <ul>
                <li>
                  <strong>Faster Load Times:</strong> Fewer elements mean
                  smaller file sizes and quicker loading.
                </li>
                <li>
                  <strong>Easier Navigation:</strong> A clean layout makes it
                  intuitive for users to find what they're looking for.
                </li>
                <li>
                  <strong>Enhanced Focus:</strong> Without distractions, the
                  core message of your site stands out.
                </li>
              </ul>

              <blockquote>
                "Simplicity is the ultimate sophistication."
                <cite>- Leonardo da Vinci</cite>
              </blockquote>

              <h2>Implementing Simplicity</h2>
              <p>
                Start by focusing on typography, whitespace, and a limited color
                palette. A well-chosen font can do wonders for readability.
                Ample whitespace (or negative space) gives your content room to
                breathe and guides the user's eye. A consistent and simple color
                scheme reinforces your brand without overwhelming the senses.
              </p>

              <p>
                By embracing these principles, you can create a web page that is
                not only beautiful but also highly effective and user-friendly.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">TAGS</h3>
              <div className="flex flex-wrap gap-10">
                <span className="bg-blue-100 text-blue-800 text-xl font-medium px-3 py-1 rounded-4xl">
                  Web Design
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                  UI/UX
                </span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">
                  Simplicity
                </span>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
