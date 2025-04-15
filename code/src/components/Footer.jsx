export default function Footer() {
  return (
    <footer className="border-t border-zinc-700 py-6 text-center text-zinc-500 text-sm">
      <p>
        &copy; {new Date().getFullYear()} Damian Toromanovic. All rights
        reserved.
      </p>
    </footer>
  );
}
