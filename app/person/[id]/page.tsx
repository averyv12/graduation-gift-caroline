"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { personContent } from "@/lib/personContent";

export default function PersonPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params); // <-- unwrap the promise
  const { id } = resolvedParams;
  const person = personContent[id.toLowerCase()];

  const [startIndex, setStartIndex] = useState(0);

  if (!person) {
    return <p>Person not found</p>;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "tan",
        backgroundImage: "url('/textures/pagebackground.png')",
        backgroundRepeat: "repeat",
        padding: "2rem",
      }}
    >
      <main
        style={{
          padding: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          color: "black",
        }}
      >
        {/* NAME */}
        <h1
          style={{
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            fontFamily: "Georgia, serif",
          }}
        >
          {person.name}
        </h1>

        {/* MESSAGE BOX */}
        <div
          style={{
            backgroundColor: "white",
            backgroundImage: "url('/textures/messagebackground.png')",
            backgroundRepeat: "repeat",
            border: "2px solid black",
            padding: "1.5rem",
            marginTop: "1.5rem",
            borderRadius: "8px",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            boxShadow: "4px 4px 0 rgba(0,0,0,0.3)",
            fontWeight: 600,
            fontFamily: "Georgia, serif",
            lineHeight: "1.6",
          }}
        >
          {person.note.split("\n").map((line: string, index: number) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
        </div>
        {/*<h2
          style={{
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            marginTop: "3rem",      // adds extra space above
            fontFamily: "Georgia, serif",
          }}
        >
          Our Memories Together!
        </h2>*/}

        {/* IMAGE CAROUSEL BOX */}
        <div
          style={{
            backgroundColor: "white",
            backgroundImage: "url('/textures/messagebackground.png')",
            backgroundRepeat: "repeat",
            border: "2px solid black",
            borderRadius: "8px",
            padding: "1.5rem",
            marginTop: "2rem",
            maxWidth: "1080px",
            marginLeft: "auto",
            marginRight: "auto",
            boxShadow: "4px 4px 0 rgba(0,0,0,0.3)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            {/* LEFT ARROW */}
            <button
              onClick={() =>
                setStartIndex((prev) => Math.max(prev - 1, 0))
              }
              disabled={startIndex === 0}
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                cursor: startIndex === 0 ? "default" : "pointer",
                opacity: startIndex === 0 ? 0.3 : 1,
              }}
            >
              ←
            </button>

            {/* IMAGES — fixed slots + contain so mixed aspect ratios don’t jump or crop */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "stretch",
                minHeight: 360,
              }}
            >
              {person.images
                .slice(startIndex, startIndex + 2)
                .map((img: string, index: number) => (
                  <div
                    key={`${startIndex}-${index}-${img}`}
                    style={{
                      position: "relative",
                      width: "min(440px, calc(50vw - 4rem))",
                      height: 360,
                      flexShrink: 0,
                      borderRadius: 12,
                      overflow: "hidden",
                      backgroundColor: "rgba(0,0,0,0.06)",
                    }}
                  >
                    <Image
                      src={img}
                      alt={`${person.name} — photo ${startIndex + index + 1}`}
                      fill
                      sizes="(max-width: 640px) 45vw, 440px"
                      style={{
                        objectFit: "contain",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                ))}
            </div>

            {/* RIGHT ARROW */}
            <button
              onClick={() =>
                setStartIndex((prev) =>
                  Math.min(prev + 1, person.images.length - 2)
                )
              }
              disabled={startIndex >= person.images.length - 2}
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                cursor:
                  startIndex >= person.images.length - 2
                    ? "default"
                    : "pointer",
                opacity:
                  startIndex >= person.images.length - 2 ? 0.3 : 1,
              }}
            >
              →
            </button>
          </div>
        </div>

        {/* VIDEO */}
        {person.video && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <video
              controls
              style={{
                width: "50%",
                maxWidth: "600px",
                borderRadius: "12px",
              }}
            >
              <source src={person.video} type="video/mp4" />
            </video>
          </div>
        )}

        {/* BACK BUTTON */}
        <div style={{ textAlign: "center" }}>
          <Link href="/">
            <button style={{ marginTop: "2rem", fontWeight: "bold" }}>
              ← Back
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
