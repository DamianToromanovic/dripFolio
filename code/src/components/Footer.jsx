export default function Footer() {
  return (
    <footer className=" py-6 text-center text-sm bg-[#f1f5f9] dark:bg-[#0f172a] text-zinc-600 dark:text-zinc-400 transition-colors duration-500">
      <p>
        &copy; {new Date().getFullYear()} Damian Toromanovic. All rights
        reserved.
      </p>
    </footer>
  );
}
