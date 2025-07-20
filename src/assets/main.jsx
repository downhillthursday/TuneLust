import { useEffect, useState } from 'react';
import AlbumCarousel from "../components/albumCarousel.jsx";
import SearchBar from '../components/searchBar.jsx';
import GenreRow from '../data/genreData.jsx';
import MoodCarousel from '../components/moodCarousel.jsx';
const lines = [
  "Lost in the noise?",
  "We tuned the static just for you",
  "Welcome to TuneLust"
];

export default function Main() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    if (charCount < lines[lineIndex].length) {
      const timer = setTimeout(() => {
        setCharCount(prev => prev + 1);
      }, 40);
      return () => clearTimeout(timer);
    } else {
      const nextLineTimer = setTimeout(() => {
        setLineIndex(prev => prev + 1);
        setCharCount(0);
      }, 600);
      return () => clearTimeout(nextLineTimer);
    }
  }, [charCount, lineIndex]);

  const textSizes = ["text-6xl", "text-4xl", "text-3xl"];

  return (
    <section className="w-screen relative">
  {/* Background Image */}
  <img
    src="/images/download.jpeg"
    alt="background"
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  />

  {/* Content & Search Container */}
  <div className="z-10 relative flex flex-col items-center justify-start pt-[10%] px-4 md:px-16 w-full">
    {/* Content Row */}
    <div className="w-full flex flex-col md:flex-row items-center justify-between max-w-6xl">
      {/* Left Text Block */}
      <div className="w-full md:w-1/2 text-left font-semibold leading-snug text-white opacity-90 overflow-x-auto whitespace-nowrap">
        {lines.slice(0, lineIndex + 1).map((line, idx) => (
          <p
            key={idx}
            className={`mb-4 ${textSizes[idx] || "text-3xl"} whitespace-nowrap`}
          >
            {idx === lineIndex
              ? line.slice(0, charCount).split('').map((char, cIdx) => (
                  <span
                    key={cIdx}
                    className="inline-block opacity-0 animate-letterFade"
                    style={{
                      animationDelay: `${cIdx * 0.03}s`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))
              : line.split('').map((char, cIdx) => (
                  <span key={cIdx} className="inline-block opacity-100">
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
          </p>
        ))}
      </div>

      {/* Right Carousel */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <AlbumCarousel />
      </div>
    </div>

    {/* Search Bar just below */}
    <div className="w-full mt-5 flex justify-center">
      <SearchBar />
    </div>

    
  </div>

  <div className="relative z-10 mt-10 px-6">
  <GenreRow />
  <MoodCarousel />
</div>


</section>

  );
}
