import selfImg from "../../assets/self.jpg";
export default function About() {
  return (
    <div className="bg-gradient-to-b from-profile-up/80 to-profile-down/80 rounded-4xl">
      <main className="py-2 md:py-2">
        <div className="max-w-4xl mx-auto px-6">
          <article>
            <header className="mb-8">
              <div className="flex flex-col items-center text-gray-500">
                <img
                  className="w-80 aspect-[3/4] rounded-full mr-1"
                  src={selfImg}
                  alt="Haku"
                />
                <div className="flex flex-col ">
                  <h3 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4">
                    Ocean and Sky are Awesome!
                  </h3>
                  <p className="font-semibold self-end">Haku</p>
                  <p className="font-semibold self-end">baihdong@gmail.com</p>
                  <time className="self-end" dateTime="2025-08-07">
                    August 07, 2025
                  </time>
                </div>
              </div>
            </header>

            <figcaption className="text-center text-sm text-gray-500 mt-2">
              Shirahama, lucky to get the chance to have a two-days holiday in
              <strong>海の家</strong> host by <strong>Kyoto University</strong>
            </figcaption>
            <hr className="border-black my-2" />

            <div className="flex flex-col text-black ">
              <p>
                Hi there, my name is <strong>Haku,</strong> from China, while
                working as a CFD engineer in Osaka, I'm still going to get the
                PHD degree from Kyoto University.
              </p>
              <p>
                I've been Japan 6 years, have a lot of fun here, I love Japanese
                culture, 関西弁もおもろい！
              </p>
              <hr className="border-black my-2" />
              <ul className="text-left">
                <blockquote className="border-l-4 border-l-indigo-500 pl-3 bg-indigo-50/20 rounded">
                  <li>
                    <p>
                      <strong>Programming Path: </strong> I mainly used Fortran
                      for computational Fluid Dynamics(CFD) in the lab, where I
                      also found that use the shell script(from bash to zsh)
                      made my work easier. I usd Python to visualize results,
                      and I'm learning C++ and TypeScript to explore more
                      aspects of programming. It makes me that C++ uses the{" "}
                      <code>auto</code> keyword to let the compiler infer types,
                      while the Typescript adds types and interfaces to
                      JavaScript to make the code more explicit and structrued.
                    </p>
                    <li>
                      <p>
                        <strong>Thoughts on AI: </strong> In today's AI era, I
                        fell that the way we learn is changing. Learning theory
                        before putting it into practice may still be the best
                        foundation, but exploring a variety of examples and
                        learning unknow with AI can also be an effective way to
                        learn. I'm also learning to use AI more effectively. At
                        first, I only used ChatGPT through its web interface for
                        conversations. Then I discovered Claude Code, Codex
                        which lets me work with an AI assistant in the terminal
                        and edit files through natual-language instructions.
                        Later, I found CodeCOmpanion in Neovim, which brings AI
                        assistance directly into my everyday coding workflow.
                      </p>
                      <p>
                        <strong>A Life Changer: </strong>
                        When I first encountered Vim in the lab, I struggled
                        even with basic editing. Then a friend encouraged me to
                        learn it to improve my editing productivity and
                        recommended this{" "}
                        <a
                          href="https://missing.csail.mit.edu/2020/editors/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          introduction to Vim
                        </a>
                        , which completely changed how I saw text editors.
                        Navigating a file using only the keyboard felt amazing.
                        Later, after discovering{" "}
                        <cite>
                          Building Your Mouseless Development Environment
                        </cite>
                        , I switched from Vim to Neovim, which took my coding
                        experience to another level. Reading{" "}
                        <cite>Zsh Shell Engineering</cite> helped me appreciate
                        the power of Zsh and taught me how to organize my shell
                        configuration into modules and customize it to suit my
                        workflow. My current setup is WezTerm, Zsh, Neovim, and
                        CodeCompanion, and I can see myself using it for the
                        next five years. Recently, with help from CodeCompanion,
                        I configured debugging in Neovim using the Debug Adapter
                        Protocol (DAP). Now I can use Neovim for debugging as
                        well.
                      </p>
                    </li>
                  </li>
                </blockquote>
              </ul>

              <hr className="border-black my-2" />
              <blockquote>
                "Simplicity is the ultimate sophistication."
                <cite>- Leonardo da Vinci</cite>
              </blockquote>

              <h2>Implementing Simplicity</h2>
              <p></p>

              <p></p>
            </div>

            <div className="mt-4">
              <div className="flex flex-wrap gap-10">
                <span className="bg-blue-100 text-blue-800 text-xl font-medium px-3 py-1 rounded-4xl">
                  Web Design
                </span>
                <span className="bg-green-100 text-green-800 text-xl font-medium px-3 py-1 rounded-full">
                  System Design
                </span>
                <span className="bg-yellow-100 text-yellow-800 text-xl font-medium px-3 py-1 rounded-full">
                  CFD
                </span>
                <span className="bg-red-100 text-yellow-800 text-xl font-medium px-3 py-1 rounded-full">
                  Data Analysis
                </span>
                <span className="bg-purple-100 text-yellow-800 text-xl font-medium px-3 py-1 rounded-full">
                  AI Assistant
                </span>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
