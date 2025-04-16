export default function About() {
  return (
    <section className="relative min-h-screen max-w-4xl mx-auto py-24 px-6 bg-[#f1f5f9] dark:bg-[#0f172a] text-zinc-800 dark:text-zinc-200 transition-colors duration-500">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center">
        About Me
      </h2>

      <div className="space-y-8 mb-20">
        <h3 className="text-2xl font-bold mb-4">📖 My Journey</h3>
        <div className="border-l-4 border-blue-500 pl-6">
          <p>
            🤾 I'm Damian – a former{" "}
            <strong>professional handball player</strong> who traded the court
            for code.
          </p>
        </div>
        <div className="border-l-4 border-blue-500 pl-6">
          <p>
            💡 I followed my curiosity for tech and turned it into a passion.
            Since then, I've been fully committed to growing as a developer and
            learning the modern web.
          </p>
        </div>
      </div>

      <div className="space-y-8 mb-20">
        <h3 className="text-2xl font-bold mb-4">🧠 Mindset & Vision</h3>
        <div className="border-l-4 border-blue-500 pl-6">
          <p>
            🚀 I bring <strong>discipline, focus, and team spirit</strong> from
            sports into development. My favorite part? Turning ideas into useful
            and beautiful apps.
          </p>
        </div>
        <div className="border-l-4 border-blue-500 pl-6">
          <p>
            🎯 I'm currently deepening my fullstack skills with the MERN stack
            and building real-world projects like this portfolio.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-6">🧰 Tech Stack & Tools</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-left text-base border-l-4 border-blue-500 pl-6">
          <li>💻 HTML, CSS, JavaScript (ES6+)</li>
          <li>⚛️ React & React Router</li>
          <li>🎨 Tailwind CSS</li>
          <li>🗃️ Zustand, useReducer, Context API</li>
          <li>🧠 Node.js & Express</li>
          <li>🍃 MongoDB & Mongoose</li>
          <li>🔐 REST APIs, CRUD, Auth</li>
          <li>🧪 Git & GitHub</li>
          <li>🧰 Vite, VS Code, Postman</li>
          <li>☁️ Netlify, Vercel, Render</li>
          <li>📱 Responsive Design</li>
        </div>
      </div>
    </section>
  );
}
