export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#f1f5f9] dark:bg-[#0f172a] text-zinc-800 dark:text-zinc-200 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
          Contact
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Have a question or want to work together? Let’s connect!
        </p>
      </div>

      <div className="max-w-3xl mx-auto grid gap-6">
        <div className="text-center space-y-2 text-sm">
          <p>
            📍 Based in: <strong>Germany</strong>
          </p>
          <p>
            📧 E-mail:{" "}
            <a
              href="mailto:damian@example.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              d.toromanovic@web.de
            </a>
          </p>
        </div>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <input
            type="text"
            placeholder="Name"
            className="col-span-1 sm:col-span-2 px-4 py-3 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="col-span-1 sm:col-span-2 px-4 py-3 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            rows="5"
            placeholder="Message"
            className="col-span-1 sm:col-span-2 px-4 py-3 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>

          <button
            type="submit"
            className="col-span-1 sm:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
