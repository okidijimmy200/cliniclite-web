import logo from "./assets/logo-2.png";
import mobi from "./assets/mobi.jpeg";

import "./App.css";

export default function App() {
  return (
    <div className="font-sans text-gray-800 bg-white">

      {/* HERO */}
      <section
        className="py-20 px-6 text-center"
        style={{ backgroundColor: "#6DBE45" }}
      >
        <img
          src={logo}
          alt="Cliniclite Logo"
          className="mx-auto mb-6 h-20"
        />

        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Your Entire Drugshop. Organized in One App.
        </h1>

        <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
          Cliniclite helps drugshops and small clinics manage stock, treatments,
          reports and offline syncing — fast, simple and reliable.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() =>
                window.open(
                  "https://expo.dev/accounts/okidijimmyjones/projects/cliniclite/builds/03e51c3a-2370-4c0c-8f93-1bab07392d69",
                  "_blank"
                )
              }
              className="bg-white text-green-600 px-6 py-3 rounded-lg shadow font-semibold"
            >
              Download App
            </button>

          <a
            href="https://wa.me/256788926713"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-white text-white px-6 py-3 rounded-lg">
              WhatsApp Us
            </button>
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-green-700">
          Built for Mobile. Perfect for Drugshops.
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          {/* Features List */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-700">
              What Cliniclite Does
            </h3>

            <ul className="space-y-3 text-gray-700 text-base md:text-lg">
              <li>📦 Stock — Track everything you buy and sell</li>
              <li>💊 Treatments — Record cases in seconds</li>
              <li>📊 Reports — Daily, weekly, monthly summaries</li>
              <li>🔄 Offline Sync — Works even with zero internet</li>
              <li>🧾 NDA Inspection Ready — Instant records</li>
            </ul>
          </div>

          {/* App Screenshot */}
          <div className="bg-white shadow rounded-xl p-6 text-center flex justify-center">
            <img
              src={mobi}
              alt="Cliniclite App Screenshot"
              className="rounded-xl shadow-lg w-full max-w-xs md:max-w-sm mx-auto"
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-green-700">
          How Cliniclite Works
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          
          <div>
            <h3 className="font-semibold text-lg md:text-xl mb-2 text-green-700">
              1. Record Treatments
            </h3>
            <p className="text-gray-600">Enter symptoms and drugs in under 1 minute.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg md:text-xl mb-2 text-green-700">
              2. Stock Auto-Updates
            </h3>
            <p className="text-gray-600">
              Every treatment updates your inventory instantly.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg md:text-xl mb-2 text-green-700">
              3. Reports Auto-Generate
            </h3>
            <p className="text-gray-600">
              Inspection and sales reports on demand.
            </p>
          </div>

        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="py-16 md:py-20 px-4 md:px-6 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-green-700">
          Success Stories
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">

          <div className="bg-white shadow p-6 rounded-xl">
            <h3 className="font-semibold mb-2 text-green-700">
              Rita – Drugshop Owner
            </h3>
            <p className="text-gray-600">
              “Cliniclite balanced my stock. NDA inspections are now easy.”
            </p>
          </div>

          <div className="bg-white shadow p-6 rounded-xl">
            <h3 className="font-semibold mb-2 text-green-700">
              Michael – Clinic Assistant
            </h3>
            <p className="text-gray-600">
              “Offline mode is a lifesaver in low network areas.”
            </p>
          </div>

          <div className="bg-white shadow p-6 rounded-xl">
            <h3 className="font-semibold mb-2 text-green-700">
              Sarah – New Owner
            </h3>
            <p className="text-gray-600">
              “Reports help me finally understand my business.”
            </p>
          </div>

        </div>
      </section>

      {/* LOCATION */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-green-700">
          Our Location
        </h2>

        <p className="text-gray-600 text-center mb-8">
          Innovation Village Gulu, Princess Oliya Road, Gulu, Uganda.
        </p>

        <div className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Cliniclite Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15906.4749578934!2d32.29611!3d2.77885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771a7ca3b0559ff%3A0xe658af4943c2306b!2sThe%20Innovation%20Village%20Gulu!5e0!3m2!1sen!2sug!4v1701206900000"
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />


        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 md:py-20 px-4 md:px-6 text-center"
        style={{ backgroundColor: "#6DBE45" }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          Start Using Cliniclite Today
        </h2>

        <p className="text-white/90 max-w-xl mx-auto mb-8">
          Join drugshops already using Cliniclite to simplify their daily work.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/256788926713"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-green-700 px-6 py-3 rounded-lg shadow">
              WhatsApp: 0788926713
            </button>
          </a>

          <button
            onClick={() => window.open(
              "https://expo.dev/accounts/okidijimmyjones/projects/cliniclite/builds/03e51c3a-2370-4c0c-8f93-1bab07392d69", 
              "_blank"
            )}
            className="border border-white text-white px-6 py-3 rounded-lg"
          >
            Download App
          </button>

        </div>
      </section>
    </div>
  );
}
