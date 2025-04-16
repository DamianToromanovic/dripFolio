import PeaceGreeting from "../components/PeaceGreeting";

export default function About() {
  return (
    <section className=" relative max-w-3xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>

      <p className="mb-4 text-lg text-zinc-300">
        I'm Damian – a former professional handball player who traded the court
        for code.
      </p>

      <p className="mb-4 text-lg text-zinc-300">
        After years of high-level sports, I decided to follow my long-standing
        interest in tech and dedicated myself fully to becoming a developer.
        What started as curiosity quickly became a passion.
      </p>

      <p className="mb-4 text-lg text-zinc-300">
        Today, I bring the same discipline, focus, and teamwork from sports into
        development. I love clean, maintainable code, and building useful things
        with React, Tailwind, and JavaScript.
      </p>

      <p className="text-lg text-zinc-300">
        I'm currently leveling up my fullstack skills and working on real-world
        projects like this portfolio.
      </p>
      <PeaceGreeting />
    </section>
  );
}
