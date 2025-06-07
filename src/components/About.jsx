import Services from "./Services";
import Techstack from "./Techstack";

export default function About() {
  return (
    <section className=" py-6 px-6 text-xl">
      <h1 className="text-2xl sm:text-4xl font-bold mb-8 ">About Me</h1>

      <p className="mb-4">
        I’m Damian, a{" "}
        <span className="font-bold">passionate fullstack developer</span> with a
        <span className="font-bold"> unique background</span> in professional
        sports. I bring <span className="font-bold">discipline</span>, a{" "}
        <span className="font-bold">team-first mindset</span>, and{" "}
        <span className="font-bold">relentless curiosity</span> into every
        project I build.
      </p>

      <p className="mb-12">
        I love building modern web applications with a focus on clean code,
        great user experience, and scalability. While I enjoy exploring new
        technologies, my favorite stack is the{" "}
        <span className="font-bold">MERN stack</span>.
      </p>

      <h2 className="text-3xl font-bold mb-8 ">What i offer</h2>

      <Services />
      <h2 className="text-3xl font-bold mb-8 mt-12">My Tech Stack</h2>
      <Techstack />
    </section>
  );
}
