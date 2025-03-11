"use client"
import React, { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div id="about" className="flex items-center justify-center">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src="./Chidera-studio.jpg" alt="" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title text-center">About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              maiores eaque, libero, exercitationem autem accusantium temporibus
              dolorum architecto atque natus ipsum tenetur culpa harum vero
              excepturi corporis fuga sapiente commodi.
            </p>
            <div className="tab-titles">
              <p
                className={`tab-links ${
                  activeTab === "skills" ? "active-link" : ""
                }`}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </p>
              <p
                className={`tab-links ${
                  activeTab === "experience" ? "active-link" : ""
                }`}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </p>
              <p
                className={`tab-links ${
                  activeTab === "education" ? "active-link" : ""
                }`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </p>
            </div>
            <div
              className={`tab-contents ${
                activeTab === "skills" ? "active-tab" : ""
              }`}
              id="skills"
            >
              <ul>
                <li>
                  <span>Frontend Engineering</span>
                  <br />
                  <p className="text-[14px]">
                    I create Visual Appealing and Pixel-Perfect Interfaces using
                    frameworks like Next.js, React.js, Tailwind.css, Bootstrap,
                    e.t.c
                  </p>
                </li>
                <li>
                  <span>Blockchain Engineering Engineering</span>
                  <br />
                  <p className="text-[14px]">
                    I develop and optimize blockchain applications, specializing
                    in Solana. I build smart contracts using Rust and Anchor,
                    integrate blockchain solutions with web applications, and
                    ensure secure, efficient on-chain interactions.
                  </p>
                </li>
                <li>
                  <span>Backend Engineering </span>
                  <br />
                  <p className="text-[14px]">
                    I create Scalable Backend Applications using Frameworks and
                    languages like Rust, Actix-web, Typescript, Javascript,
                    Node.js, Nest.js, Express.js
                  </p>
                  solana
                </li>
              </ul>
            </div>
            <div
              className={`tab-contents ${
                activeTab === "experience" ? "active-tab" : ""
              }`}
              id="experience"
            >
              <ul>
                <li>
                  <span className="font-semibold">
                    Fullstack Engineer - Charisol
                  </span>
                  <br />
                  <p className="text-[14px]">
                    Designed and developed web and mobile interfaces, ensuring
                    seamless user experiences and efficient system performance.
                  </p>
                </li>
                <li>
                  <span>Backend Engineer - Ijeoma Ltd</span>
                  <br />
                  <p className="text-[14px]">
                    Engineered scalable backend solutions, optimizing data flow
                    and system reliability for high-performance applications.
                  </p>
                </li>
                <li>
                  <span>Backend Engineer - Creedlance</span>
                  <br />
                  <p className="text-[14px]">
                    Specialized in data processing and API integrations,
                    translating complex requirements into well-structured
                    backend architectures.
                  </p>
                </li>
                <li>
                  <span>Fullstack Engineer - Binnox</span>
                  <br />
                  <p className="text-[14px]">
                    Led the design and development of fullstack solutions,
                    combining analytical skills with clear communication to
                    bridge technical and business needs effectively.
                  </p>
                </li>
              </ul>
            </div>
            <div
              className={`tab-contents ${
                activeTab === "education" ? "active-tab" : ""
              }`}
              id="education"
            >
              <ul>
                <li>
                  <span>
                    Electrical and Electronics Engineering(B.ENG) - FUTO
                  </span>
                  <br />
                  2019-2025
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
