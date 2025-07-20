import { useState, useEffect } from "react";

const genres = [
  { name: "Rock", artist: "Jimi Hendrix" },
  { name: "Metal", artist: "Black Sabbath" },
  { name: "Hip Hop", artist: "Kanye West" },
  { name: "Pop", artist: "Justin Bieber" },
  { name: "RnB", artist: "The Weeknd" },
  { name: "Country", artist: "Chris Stapleton" },
  { name: "Jazz", artist: "Miles Davis" },
  { name: "Reggae", artist: "Bob Marley" },
//   { name: "Electronic", artist: "Daft Punk" },
//   { name: "Classical", artist: "Ludwig van Beethoven" },
 ];

async function fetchWikiImage(artist) {
  const response = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages&titles=${encodeURIComponent(
      artist
    )}&pithumbsize=600`
  );
  const data = await response.json();
  const pages = data.query.pages;
  const page = Object.values(pages)[0];
  return page.thumbnail?.source || null;
}

export default function GenreRow() {
  const [genreImages, setGenreImages] = useState({});

  useEffect(() => {
    genres.forEach(async (genre) => {
      if (!genreImages[genre.artist]) {
        const imgUrl = await fetchWikiImage(genre.artist);
        setGenreImages((prev) => ({ ...prev, [genre.artist]: imgUrl }));
      }
    });
  }, []);

  return (
    <div className="w-full px-6 mt-10">
      <h2 className="text-3xl font-bold mb-6">Discover New Genres</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {genres.map((genre, index) => (
          <div
            key={index}
            className="relative w-full sm:w-[48%] md:w-[33%] lg:w-[10%] aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group transition-transform duration-300"
          >
            {genreImages[genre.artist] ? (
              <img
                src={genreImages[genre.artist]}
                alt={genre.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 animate-pulse" />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4">
              <div>
                <p className="text-white text-2xl md:text-2xl font-semibold font-sans opacity-60">
                  {genre.name}
                </p>
              </div>
              <div className="text-right">
                <p className="text-white text-[0.6rem] italic">
                  {genre.artist}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
