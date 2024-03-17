"use client";

import { useEffect, useRef } from "react";

import revealProps from "./revealProps";

import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

// https://revealjs.com/react/
export default function RevealWrapper({ children }) {
  const deckDivRef = useRef(null); // reference to deck container div
  const deckRef = useRef(null); // reference to deck reveal instance

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return;

    // This will be executed in the browser (client-side).
    const clientSideInitialization = async () => {
      // load modules only in browser
      const Reveal = await (await import("reveal.js")).default;
      const Markdown = await (await import("reveal.js/plugin/markdown/markdown.esm")).default;

      deckRef.current = new Reveal(deckDivRef.current, {
        ...revealProps,
        plugins: [Markdown]
      })

      deckRef.current.initialize().then(() => {
        // good place for event handlers and plugin setups
      });
    }
    clientSideInitialization();

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, [deckDivRef, deckRef]);

  return (
    // The presentation is sized based on the width and height of
    // the parent element. Make sure the parent is not 0-height.
    <div className="reveal" ref={deckDivRef}>
      {children}
    </div>
  );
}
