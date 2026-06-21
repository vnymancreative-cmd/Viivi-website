export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Coming Soon
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8">
          Something amazing is on the way. Stay tuned!
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="mailto:contact@viivi.com"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
