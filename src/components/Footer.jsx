export default function Footer() {
  return (
    <footer className=" py-6 text-center text-sm  bg-zinc-950 transition-colors duration-500 ">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-my-gold font-medium">Damian Toromanovic</span>.
        All rights reserved.
      </p>
    </footer>
  );
}
