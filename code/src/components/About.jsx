import Services from "./Services";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-24 px-6 text-zinc-200 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto space-y-20">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-yellow-500">About Me</h2>
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

        <div className="bg-zinc-900 p-6 md:p-8 rounded-xl shadow space-y-6 border border-zinc-700">
          <h3 className="text-2xl font-semibold text-yellow-500">
            What I Offer
          </h3>
          <Services />
        </div>
      </div>
    </section>
  );
}
