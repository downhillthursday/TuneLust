import { useEffect, useState } from "react";

const albums = [
  "/carouselImages/album1.jpg",
  "/carouselImages/album2.jpg",
  "/carouselImages/album3.jpg",
  "/carouselImages/album4.jpg",
  "/carouselImages/album5.jpg",
  "/carouselImages/album6.jpg",
  "/carouselImages/album7.jpg",
  "/carouselImages/album8.jpg",
];


export default function AlbumCarousel() {
  const [index, setIndex] = useState(0);

  // Loop every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % albums.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Helper to get correct image from index
  const getImage = (offset) => {
    const len = albums.length;
    return albums[(index + offset + len) % len];
  };

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
      {/* Left Image */}
      <img
        src={getImage(-1)}
        alt="prev"
        className="absolute left-1/4 transform -translate-x-1/2 w-48 h-48 object-cover rounded-xl opacity-50 scale-90 transition-all duration-700"
      />

      {/* Center Image */}
      <img
        src={getImage(0)}
        alt="current"
        className="relative z-10 w-64 h-64 object-cover rounded-2xl shadow-xl transition-all duration-700"
      />

      {/* Right Image */}
      <img
        src={getImage(1)}
        alt="next"
        className="absolute right-1/4 transform translate-x-1/2 w-48 h-48 object-cover rounded-xl opacity-50 scale-90 transition-all duration-700"
      />
    </div>
  );
}
