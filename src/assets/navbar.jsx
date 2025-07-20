import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`z-50 fixed top-0 left-0 w-full h-[5rem] flex items-center justify-center 
        transition-colors duration-300
        ${scrolled
          ? "bg-[#761963] opacity-96 rounded-b-xl shadow-[0_10px_30px_rgba(0,0,0,0.85)]"
          : "bg-transparent shadow-xl"}
      `}
    >
      <h1 className="text-[#ed5278] font-[nave,sans-serif] not-italic font-black">
        TuneLust
      </h1>
    </div>
  );
}
