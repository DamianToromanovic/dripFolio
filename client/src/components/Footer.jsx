export default function Footer() {
  return (
    <footer className="border-t border-zinc-700 py-6 text-center text-sm text-zinc-400 bg-zinc-950 transition-colors duration-500">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-yellow-500 font-medium">Damian Toromanovic</span>.
        All rights reserved.
      </p>
    </footer>
  );
}
