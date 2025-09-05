export default function Post_Gpt() {
  return (
    <div>
      <header className="">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">My Blog</h1>
          <h2 className="text-2xl text-purple-700">Center</h2>
          <nav>
            <a href="#" className="text-gray-700 hover:text-blue-600 mx-2">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 mx-2">
              Posts
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 mx-2">
              About
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 max-w-3xl">
        <article className="bg-purple-200 rounded-lg shadow p-6">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">
            Understanding Tailwind CSS
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Published on August 26, 2025 • 5 min read
          </p>

          <p className="mb-4 text-black">
            Tailwind CSS is a utility-first CSS framework that allows you to
            build modern and responsive designs quickly. Instead of writing
            custom CSS, you apply pre-defined classes directly in your HTML.
          </p>

          <p className="mb-4 text-black">
            It’s highly customizable and works well with any JavaScript
            framework like React, Vue, or Svelte. Developers love it because it
            speeds up prototyping and ensures consistency across projects.
          </p>

          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600 my-6">
            “Tailwind CSS gives you the building blocks you need to quickly
            build modern websites — without leaving your HTML.”
          </blockquote>

          <p className="mb-4 text-black">
            With responsive utility classes, you can easily adapt layouts for
            different screen sizes. For example,{" "}
            <code className="bg-gray-100 px-4  rounded">md:grid-cols-3</code>{" "}
            creates a three-column layout on medium screens and larger.
          </p>
        </article>
      </main>
    </div>
  );
}
