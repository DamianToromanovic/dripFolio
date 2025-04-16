export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-white dark:bg-[#0f172a] text-zinc-800 dark:text-zinc-200 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
          Projects
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          A few of the projects I’ve worked on recently.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
          <img
            src="/assets/project1.jpg"
            alt="Project 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 space-y-2">
            <h3 className="text-xl font-semibold">Project Title</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Short project description about what it does and tech used.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://demo-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/username/project"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
