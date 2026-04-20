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

  // Function for arrow buttons (optional but nice for desktop)
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
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
        padding: "1rem", // Reduced for mobile
      }}
    >
      <main style={{ maxWidth: "1200px", margin: "0 auto", color: "black" }}>
        
        {/* NAME */}
        <h1 style={{
          textAlign: "center",
          fontSize: "clamp(2rem, 8vw, 3.5rem)", // Responsive font size
          fontWeight: "bold",
          margin: "1.5rem 0",
          fontFamily: "Georgia, serif",
        }}>
          {person.name}
        </h1>

        {/* MESSAGE BOX */}
        <div className="message-box" style={{
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

        {/* MODERN CAROUSEL */}
        <div style={{ position: "relative", maxWidth: "1000px", margin: "0 auto" }}>
          
          {/* Desktop Arrows (Hidden on small screens via CSS later) */}
          <div className="carousel-nav" style={{
            display: "flex", 
            justifyContent: "space-between", 
            position: "absolute", 
            top: "50%", 
            width: "100%", 
            zIndex: 10,
            pointerEvents: "none"
          }}>
            <button onClick={() => scroll("left")} style={{ pointerEvents: "auto", background: "white", border: "2px solid black", borderRadius: "50%", width: "40px", height: "40px", cursor: "pointer", marginLeft: "-20px" }}>←</button>
            <button onClick={() => scroll("right")} style={{ pointerEvents: "auto", background: "white", border: "2px solid black", borderRadius: "50%", width: "40px", height: "40px", cursor: "pointer", marginRight: "-20px" }}>→</button>
          </div>

          <div 
            ref={scrollRef}
            className="carousel-viewport" // Uses the CSS we added to globals.css
            style={{
              display: "flex",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              gap: "1rem",
              padding: "1rem 0",
              scrollbarWidth: "none", // Firefox
            }}
          >
            {person.images.map((img: string, index: number) => (
              <div
                key={index}
                className="carousel-item" // Handled by our globals.css media queries
                style={{
                  flex: "0 0 100%", // Mobile default
                  scrollSnapAlign: "center",
                  position: "relative",
                  height: "400px",
                  backgroundColor: "rgba(0,0,0,0.03)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid rgba(0,0,0,0.1)"
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

        {/* VIDEO (More responsive width) */}
        {person.video && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
            <video controls style={{ width: "100%", maxWidth: "600px", borderRadius: "12px", border: "2px solid black" }}>
              <source src={person.video} type="video/mp4" />
            </video>
          </div>
        )}

        {/* BACK BUTTON */}
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

      {/* Inline style for the 2-image desktop rule */}
      <style jsx>{`
        @media (min-width: 768px) {
          .carousel-item {
            flex: 0 0 calc(50% - 0.5rem) !important;
          }
        }
        .carousel-viewport::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}