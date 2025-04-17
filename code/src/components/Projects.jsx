export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6  text-zinc-200 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-yellow-500 mb-3">Projects</h2>
        <p className="text-zinc-400 max-w-xl mx-auto">
          A few of the projects I’ve worked on recently.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-zinc-900 rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-zinc-700">
          <img
            src="/assets/project1.jpg"
            alt="Project 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-6 space-y-3">
            <h3 className="text-xl font-semibold text-yellow-400">
              CRM System
            </h3>
            <p className="text-sm text-zinc-400">
              A custom-built CRM with contact management, filtering, and local
              storage.
            </p>
            <div className="flex gap-4 pt-1">
              <a
                href="https://demo-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 text-sm font-medium hover:underline"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/username/project"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 text-sm font-medium hover:underline"
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
