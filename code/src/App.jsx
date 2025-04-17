import Hero from "./components/Hero";
import SummaryCard from "./components/SummaryCard";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen w-full bg-zinc-950 text-zinc-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="xl:sticky xl:top-12 h-fit">
          <Hero />
        </div>

        <div>
          <SummaryCard />
        </div>
      </div>

      <Footer />
    </main>
  );
}
