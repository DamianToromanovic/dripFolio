export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6  text-zinc-200 transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-yellow-500 mb-2">Contact</h2>
        <p className="text-zinc-400">
          Have a question or want to work together? Let’s connect!
        </p>
      </div>

      <div className="max-w-3xl mx-auto grid gap-6">
        <div className="text-center space-y-2 text-sm">
          <p>
            📍 Based in: <span className="text-zinc-300">Germany</span>
          </p>
          <p>
            📧 E-mail:{" "}
            <a
              href="mailto:d.toromanovic@web.de"
              className="text-yellow-500 hover:underline"
            >
              d.toromanovic@web.de
            </a>
          </p>
        </div>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <input
            type="text"
            placeholder="Name"
            className="col-span-1 sm:col-span-2 px-4 py-3 rounded-md bg-zinc-900 text-zinc-200 border border-zinc-700 outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="col-span-1 sm:col-span-2 px-4 py-3 rounded-md bg-zinc-900 text-zinc-200 border border-zinc-700 outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <textarea
            rows="5"
            placeholder="Message"
            className="col-span-1 sm:col-span-2 px-4 py-3 rounded-md bg-zinc-900 text-zinc-200 border border-zinc-700 outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
          ></textarea>

          <button
            type="submit"
            className="col-span-1 sm:col-span-2 bg-yellow-500 hover:bg-yellow-600 text-zinc-900 py-3 rounded-md font-semibold transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
