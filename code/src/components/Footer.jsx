export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-700 py-6 text-center text-sm text-zinc-600 dark:text-zinc-400 bg-white dark:bg-[#0f172a] transition-colors duration-500">
      <p>
        &copy; {new Date().getFullYear()} Damian Toromanovic. All rights
        reserved.
      </p>
    </footer>
  );
}
