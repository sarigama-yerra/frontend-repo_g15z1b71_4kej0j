import Hero from './components/Hero';
import Services from './components/Services';
import Tiers from './components/Tiers';
import Value from './components/Value';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Services />
      <Tiers />
      <Value />
      <footer id="contact" className="border-t border-white/10 bg-black/90 py-10 text-center text-white/60">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-sm">
            Built for creators, NGOs, and brands in Somaliland. Contact: hello@m2creative.so
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
