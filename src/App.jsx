export default function EGYCarWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-black via-zinc-900 to-black">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1400')] bg-cover bg-center"></div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-widest mb-4 text-yellow-400">
            EGYCAR
          </h1>

          <p className="text-xl md:text-2xl text-zinc-300 mb-6">
            Luxury Cars • Premium Experience
          </p>

          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-8">
            سيارات فاخرة بأفضل جودة وتصميم احترافي يناسب عشاق القوة والفخامة
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-2xl text-lg font-bold transition-all shadow-2xl">
              Explore Cars
            </button>

            <button className="border border-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-2xl text-lg font-bold transition-all">
              اكتشف الآن
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 md:px-20 bg-zinc-950">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 text-yellow-400">
              About EGYCAR
            </h2>

            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              EGYCAR هو عالم السيارات الفاخرة، حيث نقدم أفضل التصاميم وأقوى السيارات لعشاق السرعة والأناقة.
            </p>

            <p className="text-zinc-400 leading-relaxed">
              Our mission is to deliver a premium automotive experience with modern style, elite performance, and unforgettable luxury.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-zinc-800">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200"
              alt="Luxury Car"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Cars Section */}
      <section className="py-24 px-6 md:px-20 bg-black">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-yellow-400 mb-4">
            Featured Cars
          </h2>

          <p className="text-zinc-400 text-lg">
            أقوى السيارات المختارة بعناية
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Lamborghini',
              image:
                'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1200',
            },
            {
              name: 'Ferrari',
              image:
                'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1200',
            },
            {
              name: 'BMW M4',
              image:
                'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200',
            },
          ].map((car, index) => (
            <div
              key={index}
              className="bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-800 hover:border-yellow-400 transition-all hover:scale-105 duration-300 shadow-xl"
            >
              <img
                src={car.image}
                alt={car.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-3xl font-bold mb-3 text-white">
                  {car.name}
                </h3>

                <p className="text-zinc-400 mb-6">
                  Premium luxury performance car.
                </p>

                <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black py-3 rounded-xl font-bold transition-all">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-24 px-6 text-center bg-zinc-950">
        <div className="max-w-2xl mx-auto">
          <div className="text-8xl mb-6">🦅</div>

          <h2 className="text-5xl font-bold text-yellow-400 mb-4">
            Eagle Power
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed">
            شعار النسر يرمز للقوة والسرعة والسيطرة — نفس روح EGYCAR.
          </p>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-24 px-6 md:px-20 bg-black text-center">
        <h2 className="text-5xl font-bold text-yellow-400 mb-8">
          Follow Us
        </h2>

        <div className="flex flex-wrap justify-center gap-6 text-lg">
          <a
            href="https://instagram.com/eslam__fat7i"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-700 hover:border-yellow-400 px-8 py-4 rounded-2xl transition-all hover:bg-yellow-400 hover:text-black"
          >
            Instagram
          </a>

          <a
            href="https://tiktok.com/@eslam__fat7i"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-700 hover:border-yellow-400 px-8 py-4 rounded-2xl transition-all hover:bg-yellow-400 hover:text-black"
          >
            TikTok
          </a>

          <a
            href="#"
            className="border border-zinc-700 hover:border-yellow-400 px-8 py-4 rounded-2xl transition-all hover:bg-yellow-400 hover:text-black"
          >
            Facebook
          </a>

          <a
            href="#"
            className="border border-zinc-700 hover:border-yellow-400 px-8 py-4 rounded-2xl transition-all hover:bg-yellow-400 hover:text-black"
          >
            YouTube
          </a>
        </div>

        <div className="mt-10 text-zinc-400 text-lg space-y-2">
          <p>Instagram & TikTok: @eslam__fat7i</p>
          <p>WhatsApp: 01067178137</p>
        </div>
      </section>

      {/* Login Section */}
      <section className="py-24 px-6 md:px-20 bg-zinc-950">
        <div className="max-w-2xl mx-auto bg-black border border-zinc-800 rounded-3xl p-10 shadow-2xl">
          <h2 className="text-5xl font-bold text-yellow-400 text-center mb-8">
            Login / تسجيل الدخول
          </h2>

          <div className="space-y-6">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 text-white outline-none focus:border-yellow-400 transition-all"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 text-white outline-none focus:border-yellow-400 transition-all"
            />

            <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black py-4 rounded-2xl font-bold text-lg transition-all shadow-xl">
              Login
            </button>

            <p className="text-center text-zinc-500">
              ليس لديك حساب؟ إنشاء حساب جديد
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500 bg-black">
        <p>© 2026 EGYCAR — All Rights Reserved</p>
      </footer>
    </div>
  )
}
