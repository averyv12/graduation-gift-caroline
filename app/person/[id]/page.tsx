"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useRef } from "react";
import { personContent } from "@/lib/personContent";

export default function PersonPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  const person = personContent[id.toLowerCase()];
  
  const scrollRef = useRef<HTMLDivElement>(null);

  if (!person) return <p>Person not found</p>;

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scroll by 50% of the container width on desktop, 100% on mobile
      const scrollAmount = window.innerWidth > 768 ? clientWidth * 0.5 : clientWidth;
      const scrollTo = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "tan",
        backgroundImage: "url('/textures/pagebackground.png')",
        backgroundRepeat: "repeat",
        padding: "1rem",
      }}
    >
      <main style={{ maxWidth: "1200px", margin: "0 auto", color: "black" }}>
        
        <h1 style={{
          textAlign: "center",
          fontSize: "clamp(2rem, 8vw, 3.5rem)",
          fontWeight: "bold",
          margin: "1.5rem 0",
          fontFamily: "Georgia, serif",
        }}>
          {person.name}
        </h1>

        <div style={{
          backgroundColor: "white",
          backgroundImage: "url('/textures/messagebackground.png')",
          border: "2px solid black",
          padding: "1.5rem",
          borderRadius: "8px",
          maxWidth: "600px",
          margin: "0 auto 2rem",
          boxShadow: "4px 4px 0 rgba(0,0,0,0.3)",
          fontWeight: 600,
          fontFamily: "Georgia, serif",
          lineHeight: "1.6",
        }}>
          {person.note.split("\n").map((line: string, index: number) => (
            <span key={index}>{line}<br /></span>
          ))}
        </div>

        {/* CAROUSEL CONTAINER */}
        <div style={{ 
          position: "relative", 
          maxWidth: "1000px", 
          margin: "0 auto",
          backgroundColor: "white",
          backgroundImage: "url('/textures/messagebackground.png')",
          border: "2px solid black",
          borderRadius: "8px",
          padding: "1rem",
          boxShadow: "4px 4px 0 rgba(0,0,0,0.3)",
        }}>
          
          {/* NAV BUTTONS - Hidden on Mobile via CSS below */}
          <button className="nav-btn left" onClick={() => scroll("left")}>←</button>
          <button className="nav-btn right" onClick={() => scroll("right")}>→</button>

          <div 
            ref={scrollRef}
            className="carousel-viewport"
            style={{
              display: "flex",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              gap: "1rem",
              scrollbarWidth: "none",
              padding: "0.5rem"
            }}
          >
            {person.images.map((img: string, index: number) => (
              <div
                key={index}
                className="carousel-item"
                style={{
                  flex: "0 0 100%", // Mobile: 1 image
                  scrollSnapAlign: "center",
                  position: "relative",
                  height: "360px", // Fixed height to prevent "jumping"
                  backgroundColor: "rgba(0,0,0,0.05)",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={img}
                  alt={`${person.name} photo`}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            ))}
          </div>
        </div>

        {person.video && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
            <video controls style={{ width: "100%", maxWidth: "600px", borderRadius: "12px", border: "2px solid black" }}>
              <source src={person.video} type="video/mp4" />
            </video>
          </div>
        )}

        <div style={{ textAlign: "center", paddingBottom: "4rem" }}>
          <Link href="/">
            <button style={{ 
              marginTop: "2rem", 
              fontWeight: "bold", 
              padding: "0.5rem 2rem", 
              cursor: "pointer",
              backgroundColor: "white",
              border: "2px solid black",
              boxShadow: "2px 2px 0 black"
            }}>
              ← Back to All
            </button>
          </Link>
        </div>
      </main>

      <style jsx>{`
        .carousel-viewport::-webkit-scrollbar { display: none; }
        
        .nav-btn {
          display: none; /* Hide on mobile */
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          border: 2px solid black;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          cursor: pointer;
          z-index: 10;
          font-weight: bold;
          box-shadow: 2px 2px 0 black;
        }

        .nav-btn:active { transform: translateY(-48%); boxShadow: 1px 1px 0 black; }

        @media (min-width: 768px) {
          .nav-btn { display: block; }
          .left { left: -20px; }
          .right { right: -20px; }
          
          .carousel-item {
            flex: 0 0 calc(50% - 0.5rem) !important; /* Web: 2 images */
          }
        }
      `}</style>
    </div>
  );
}