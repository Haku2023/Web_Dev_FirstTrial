import selfImg from "../../assets/self.jpg";
export default function About() {
  return (
    <div className="bg-gradient-to-b from-profile-up/80 to-profile-down/80 rounded-4xl">
      <main className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-6">
          <article>
            <header className="mb-8">
              <div className="flex flex-col items-center text-gray-500">
                <img
                  className="aspect-auto rounded-full mr-4"
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
                Hi there, my name is <strong>Haku,</strong> came from China,
                Study at Kyoto University as a Doctor now.
              </p>
              <p>
                I've been Japan 5 years, have a lot of fun here, Japanese are so
                friendly. My friends and students in Lab are also nice.
                まじついてますぜ.
              </p>
              <hr className="border-black my-2" />

              <h2 className="font-extrabold">What is This Site for </h2>
              <p>
                I hope to make it myself homePage, also, I'd like to share my
                daily thoughts here.
              </p>
              <ul className="text-left">
                <blockquote className="border-l-4 border-l-indigo-500 pl-3 bg-indigo-50/20 rounded">
                  <li>
                    <p>
                      <strong>Programming: </strong> I have taste the sweet of
                      the programming nowdays,{" "}
                      <em>fortran, bash, python, typescript, c#, lua, C</em> All
                      Language let me talk with computer not so awkward.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Natural Language: </strong> Talking with pc has no
                      relation with emotion. Maybe sometimes the Fully Control
                      satisify some part of the heart. But no more than talking
                      with people. Since the Programming Language almost written
                      by EN, it is portable and light. Japanese and Chinese have
                      Kanji, which can contain a lot of emotion and meaning
                      there, I love them so much!
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Gym, Refresh, Thinking:</strong>I would say I
                      haven't gone Gym 7 days, I always do things to the
                      midnight which makes me wake late, leading to the low
                      energy and tired for exercise. But that should be
                      modified, right? I feel that as the age goes up, it will
                      be too hard to change a bad habbit, but there should be a
                      reason. I'd like to think and think, until I find that
                      reason.
                    </p>
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

            <div className="mt-12">
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
                  AI
                </span>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
