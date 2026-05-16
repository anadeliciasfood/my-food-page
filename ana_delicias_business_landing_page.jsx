export default function AnaDeliciasLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-yellow-950 text-gray-800">
      <section className="relative overflow-hidden px-6 py-20 text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-sm">
            Ana Delicias
          </h1>
          <p className="mt-4 text-2xl md:text-3xl font-semibold text-gray-200">
            Authentic Dominican Flavor Made With Love 🇩🇴
          </p>
          <p className="mt-6 text-lg max-w-2xl mx-auto leading-relaxed text-gray-300">
            Bringing a little piece of the Caribbean to the Netherlands with delicious empanadas,
            wings, street food, tropical drinks, and homemade Dominican recipes.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-2xl bg-yellow-500 px-8 py-4 text-lg font-semibold text-white shadow-2xl border border-yellow-500/20 hover:scale-105 transition-transform">
              COMING SOON
            </button>
            <button className="rounded-2xl border-2 border-yellow-400 px-8 py-4 text-lg font-semibold text-yellow-400 hover:bg-yellow-100 transition">
              Follow Us
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          What We’ll Serve 🍽️
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Empanadas',
              text: 'Golden crispy Dominican empanadas full of flavor.'
            },
            {
              title: 'Wings',
              text: 'Juicy wings with homemade sauces and Caribbean spices.'
            },
            {
              title: 'Street Food',
              text: 'Authentic Dominican street food made fresh.'
            },
            {
              title: 'Tropical Drinks',
              text: 'Refreshing tropical flavors that feel like summer.'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-gray-900 p-6 shadow-2xl border border-yellow-500/20 hover:-translate-y-1 transition-transform"
            >
              <div className="text-5xl mb-4 text-center">
                {index === 0 && '🥟'}
                {index === 1 && '🍗'}
                {index === 2 && '🍔'}
                {index === 3 && '🍹'}
              </div>
              <h3 className="text-2xl font-bold text-center text-yellow-400">
                {item.title}
              </h3>
              <p className="mt-3 text-center text-gray-300 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-yellow-500 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            A Little Piece of the Caribbean in the Netherlands 🌴
          </h2>

          <p className="mt-6 text-lg md:text-xl leading-relaxed text-yellow-100">
            Located near Spijkenisse & Rotterdam. Homemade Dominican food prepared with passion,
            love, and authentic island flavor.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-lg font-semibold">
            <div className="rounded-2xl bg-gray-900/20 px-6 py-4 backdrop-blur-sm">
              📍 Spijkenisse
            </div>
            <div className="rounded-2xl bg-gray-900/20 px-6 py-4 backdrop-blur-sm">
              🇳🇱 Rotterdam Area
            </div>
            <div className="rounded-2xl bg-gray-900/20 px-6 py-4 backdrop-blur-sm">
              ❤️ Made With Love
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-400">
          Follow Ana Delicias ✨
        </h2>

        <p className="mt-4 text-lg text-gray-300">
          Stay tuned for our launch, special menus, and Caribbean flavors.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-gray-900 shadow-2xl border border-yellow-500/20 p-6">
            <div className="text-5xl">📸</div>
            <h3 className="mt-4 text-2xl font-bold">Instagram</h3>
            <p className="mt-2 text-gray-300">@anaddelicias</p>
          </div>

          <div className="rounded-3xl bg-gray-900 shadow-2xl border border-yellow-500/20 p-6">
            <div className="text-5xl">🎵</div>
            <h3 className="mt-4 text-2xl font-bold">TikTok</h3>
            <p className="mt-2 text-gray-300">Ana D’licias</p>
          </div>

          <div className="rounded-3xl bg-gray-900 shadow-2xl border border-yellow-500/20 p-6">
            <div className="text-5xl">💬</div>
            <h3 className="mt-4 text-2xl font-bold">WhatsApp Orders</h3>
            <p className="mt-2 text-gray-300">Coming Soon</p>
          </div>
        </div>
      </section>

      <footer className="bg-black text-yellow-100 text-center py-8">
        <p className="text-lg font-medium">Ana Delicias © 2026</p>
        <p className="mt-2 text-sm text-gray-400">
          Homemade Dominican food • Spijkenisse • Rotterdam
        </p>
      </footer>
    </div>
  )
}
