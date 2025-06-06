import Hero from "./components/Hero";
import SummaryCard from "./components/SummaryCard";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen w-full bg-my-background text-zinc-200 transition-colors duration-300 ">
      <div className=" mx-auto px-4 py-12 grid grid-cols-1 3xl:grid-cols-10 gap-6 ">
        <div className="lg:px-20  xl:px-24 3xl:px-4 3xl:col-span-2 3xl:col-start-2">
          <Hero />
        </div>

        <div className="lg:px-20 xl:px-24 3xl:col-span-6 3xl:px-12 ">
          <SummaryCard />
        </div>
      </div>

      <Footer />
    </main>
  );
}
