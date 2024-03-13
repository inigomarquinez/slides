"use client";

import { useEffect, useRef } from "react";
// import Reveal from "reveal.js";

import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

function App() {
  const deckDivRef = useRef(null); // reference to deck container div
  const deckRef = useRef(null); // reference to deck reveal instance

  useEffect(() => {
    // This will be executed in the browser (client-side).
    const clientSideInitialization = async () => {
      // load modules in browser
      const Reveal = await (await import("reveal.js")).default
      const Markdown = await (await import("reveal.js/plugin/markdown/markdown.esm")).default
      const deck = new Reveal({
        plugins: [Markdown]
      })
      deck.initialize()
    }
    clientSideInitialization()
  })


  // useEffect(() => {
  //   // Prevents double initialization in strict mode
  //   if (deckRef.current) return;

  //   deckRef.current = new Reveal(deckDivRef.current, {
  //     transition: "slide",
  //     // other config options
  //   });

  //   deckRef.current.initialize().then(() => {
  //     // good place for event handlers and plugin setups
  //   });

  //   return () => {
  //     try {
  //       if (deckRef.current) {
  //         deckRef.current.destroy();
  //         deckRef.current = null;
  //       }
  //     } catch (e) {
  //       console.warn("Reveal.js destroy call failed.");
  //     }
  //   };
  // }, [deckDivRef, deckRef]);

  return (
    // Your presentation is sized based on the width and height of
    // our parent element. Make sure the parent is not 0-height.
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section>Slide 1</section>
        <section>
          <section>Slide 2</section>
          <section>Slide 3</section>
        </section>
      </div>
    </div>
  );
}

export default App;