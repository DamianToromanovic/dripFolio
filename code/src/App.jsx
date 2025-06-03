import Hero from "./components/Hero";
import SummaryCard from "./components/SummaryCard";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen w-full bg-zinc-950 text-zinc-200 transition-colors duration-300">
      <div className=" mx-auto px-4 py-12 grid grid-cols-1 2xl:grid-cols-4 gap-6">
        <div className="lg:px-10 xl:px-14  2xl:px-4">
          <Hero />
        </div>

        <div className="lg:px-10 xl:px-14 2xl:col-span-3 2xl:px-4">
          <SummaryCard />
        </div>
      </div>

      <Footer />
    </main>
  );
}
