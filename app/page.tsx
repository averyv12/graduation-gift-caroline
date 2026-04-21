"use client";

import Link from "next/link";
import Image from "next/image";
import { homePeople } from "@/lib/personContent";
import type { CSSProperties } from "react";

// Varied dimensions to create an organic masonry feel
const TILE_DIMENSIONS = [
  { w: "280px", h: "350px" },
  { w: "320px", h: "240px" },
  { w: "250px", h: "300px" },
  { w: "300px", h: "300px" },
  { w: "220px", h: "320px" },
];

function getTileStyle(index: number): CSSProperties {
  const dim = TILE_DIMENSIONS[index % TILE_DIMENSIONS.length];
  // Alternating rotations for a "thrown on the table" look
  const rotations = [-3, 2, -1.5, 4, -2.5, 1.8];
  const rotate = rotations[index % rotations.length];
  
  return {
    width: dim.w,
    height: dim.h,
    transform: `rotate(${rotate}deg)`,
    position: "relative",
    transition: "transform 0.3s ease, z-index 0s",
    boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
    border: "8px solid white",
    borderRadius: "2px",
    flexShrink: 0,
    margin: "-10px", // Creates the overlapping effect
  };
}

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "4rem 2rem",
        backgroundColor: "#f4ead5", // Warm tan
        backgroundImage: "url('/textures/pagebackground.png')",
        backgroundRepeat: "repeat",
        overflowX: "hidden"
      }}
    >
      <header style={{ maxWidth: "800px", margin: "0 auto 4rem", textAlign: "center" }}>
        <h1 style={{
            fontWeight: "bold",
            color: "#1a1a1a",
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
            fontFamily: "Georgia, serif",
            lineHeight: 1.2
          }}>
          Congratulations! <br/> GT Class of 2026 🎓
        </h1>
        <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", marginTop: "1rem" }}>
          We are all so proud of you. Here are some of the people who are cheering you on.
        </p>
      </header>

      {/* Using Flexbox with wrap and negative margins creates 
          a much more organic "collage" than a strict CSS Grid.
      */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        maxWidth: "1400px",
        margin: "0 auto",
        perspective: "1000px" // Adds slight depth
      }}>
        {homePeople.map((person, index) => (
          <Link
            key={person.id}
            href={`/person/${person.id}`}
            style={getTileStyle(index)}
            className="collage-tile"
          >
            <Image
              src={person.image}
              alt={person.name}
              fill
              className="object-cover"
              sizes="300px"
              priority={index < 6}
            />
            {/* Added a small caption feel */}
            <div style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              background: "rgba(255,255,255,0.8)",
              padding: "2px 8px",
              fontSize: "0.75rem",
              fontFamily: "monospace"
            }}>
              {person.name}
            </div>
          </Link>
        ))}
      </div>

      <style jsx global>{`
        .collage-tile:hover {
          transform: rotate(0deg) scale(1.1) !important;
          z-index: 50;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          cursor: pointer;
        }
      `}</style>
    </main>
  );
}