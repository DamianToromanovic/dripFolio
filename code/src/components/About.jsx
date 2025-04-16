export default function About() {
  // const birthDay =
  return (
    <section
      id="about"
      className="min-h-screen py-24 px-6 bg-white dark:bg-[#0f172a] text-zinc-800 dark:text-zinc-200 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">
            About Me
          </h2>
          <p>
            I’m Damian – a passionate fullstack developer focused on building
            modern, scalable, and maintainable web apps.
          </p>
          <p>
            I transitioned into development after a career in professional
            sports, bringing the same discipline and drive into the tech world.
          </p>
          <p>
            I enjoy working with React, Tailwind, Node.js and MongoDB – and love
            solving real-world problems with clean code.
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm sm:text-base">
            <div className="font-medium">Name:</div>
            <div>Damian Toromanovic</div>

            <div className="font-medium">Age:</div>
            <div>27</div>

            <div className="font-medium">Location:</div>
            <div>Germany</div>

            <div className="font-medium">E-mail:</div>
            <div className="text-blue-600 dark:text-blue-400">
              d.toromanovic@web.de
            </div>

            <div className="font-medium">Available:</div>
            <div>Yes</div>
          </div>
        </div>
      </div>
    </section>
  );
}
