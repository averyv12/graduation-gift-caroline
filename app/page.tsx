import Link from "next/link";
import Image from "next/image";
import { homePeople } from "@/lib/personContent";
import type { CSSProperties } from "react";

/**
 * 12-column grid with square cells (see globals.css `grid-auto-rows: 8.33cqw`).
 * Wider, less tall tiles: mostly landscape + square; a few gently tall.
 */
const TILE_SHAPES: { c: number; r: number }[] = [
  { c: 5, r: 3 },
  { c: 4, r: 3 },
  { c: 6, r: 3 },
  { c: 4, r: 4 },
  { c: 3, r: 3 },
  { c: 5, r: 4 },
  { c: 4, r: 2 },
  { c: 5, r: 3 },
  { c: 3, r: 4 },
  { c: 6, r: 4 },
  { c: 4, r: 3 },
  { c: 5, r: 2 },
  { c: 4, r: 4 },
];

function tileGridStyle(index: number): CSSProperties {
  const { c, r } = TILE_SHAPES[index % TILE_SHAPES.length];
  return {
    gridColumn: `span ${c}`,
    gridRow: `span ${r}`,
  };
}

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "2rem 1rem 3rem",
        backgroundColor: "tan",
        backgroundImage: "url('/textures/pagebackground.png')",
        backgroundRepeat: "repeat",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          color: "black",
          fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
          fontFamily: "Georgia, serif",
          marginBottom: "0.25rem",
          textShadow: "1px 1px 0 rgba(255,255,255,0.4)",
        }}
      >
        Congratulations! GT Class of 2026 🎓 We all are so proud of you!
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#333",
          fontFamily: "Georgia, serif",
          fontSize: "0.95rem",
          marginBottom: "1rem",
          opacity: 0.9,
        }}
      >
        Here is a little look into your relationships and the people who are cheering you on.
      </p>

      <div className="home-collage-board">
        {homePeople.map((person, index) => (
          <Link
            key={person.id}
            href={`/person/${person.id}`}
            className="home-collage-tile"
            style={tileGridStyle(index)}
          >
            <Image
              src={person.image}
              alt={person.name}
              fill
              sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 200px"
              className="object-cover"
              style={{ objectPosition: "center center" }}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
