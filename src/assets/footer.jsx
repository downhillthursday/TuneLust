export default function Footer() {
  return (
    <footer
      className="h-[17vh] w-full bg-cover bg-center relative text-white"
      style={{
        backgroundImage: "url('/images/footerImage.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 h-full flex justify-between items-center px-8">
        {/* Left: Description */}
        <div className="max-w-sm">
          <h2 className="text-2xl font-bold">TuneLust</h2>
          <p className="text-sm mt-2">
            Where sound meets soul. Discover, vibe, and explore music across
            genres, moods, and boundaries.
          </p>
        </div>

        {/* Center: Socials or Anything Relevant */}
        <div className="flex flex-col items-center">
          <p className="mb-2 font-semibold">Follow us</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" aria-label="Spotify">
              <i className="fab fa-spotify text-xl"></i>
            </a>
          </div>
        </div>

        {/* Right: Contact */}
        <div className="text-right">
          <p className="font-semibold">Contact Us</p>
          <p className="text-sm">support@tunelust.com</p>
          <p className="text-sm">+91-9560517303</p>
        </div>
      </div>
    </footer>
  );
}
