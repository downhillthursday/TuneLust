import { useState } from "react";

const moods = [
  "Headbang", "Dance", "Happy", "Romantic",
  "Drive", "Drunk", "Make Out", "Sleep",
  "Angry", "Sad", "Mellow", "Psychedelic",
  "Study", "Dark", "Camping", "Ethereal"
];

export default function MoodCarousel() {
  const [showAll, setShowAll] = useState(false);

  const visibleMoods = moods.slice(0, 8);
  const hiddenMoods = moods.slice(8);

  const moodCardStyle =
    "relative w-full sm:w-[48%] md:w-[33%] lg:w-[10%] aspect-[3/4] rounded-2xl shadow-lg overflow-hidden flex items-center justify-center text-white text-lg font-semibold bg-gradient-to-br from-pink-600 to-purple-700 group transition-transform duration-300 hover:scale-105";

  return (
    <div className="w-full px-6 mt-10 mb-16">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold text-white opacity-85">Set the Mood</h2>
        <p
          onClick={() => setShowAll(!showAll)}
          className="text-sm text-pink-400 hover:text-pink-300 cursor-pointer"
        >
          {showAll ? "Show Less" : "Show All"}
        </p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {visibleMoods.map((mood, index) => (
          <div key={index} className={`${moodCardStyle} animate-fade-in`}>
            <span>{mood}</span>
          </div>
        ))}
      </div>

      {showAll && (
        <div className="mt-4 flex flex-wrap gap-6 justify-center animate-fade-in">
          {hiddenMoods.map((mood, index) => (
            <div key={index} className={moodCardStyle}>
              <span>{mood}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
