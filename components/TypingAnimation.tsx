"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function TypingAnimation() {
  const [text] = useTypewriter({
    words: ["Blockchain Developer.", "Software Engineer.", "Tech Content Creator."],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <h1 className="text-[20px] font-bold">
      I'm a <span className="">{text}</span>
      <Cursor />
    </h1>
  );
}
