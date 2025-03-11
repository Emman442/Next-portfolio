import React from "react";
import ProjectCard from "./ProjectCard";
export default function Portfolio() {
  const portfolios: any = [
    {
      title: "Muzingo",
      image: "/muzingo.png",
      description: " An Online game where users guess the artists of the song playing in the background and win prizes",
      liveUrl: "https://binnox.app",
      className: "",
      tags: ["React.js", "Next.js", "MongoDB", "Node.js"],
      githubUrl: "https://github.com/Emman442",
    },
    {
      title: "Binnox App",
      image: "/quixent.png",
      description: " An Online restaurant where people order food",
      liveUrl: "https://quixent.vercent.app",
      tags: ["MongoDB", "Jira" , "Node.js"],
      githubUrl: "https://github.com/Emman442",
    },
    {
      title: "Ijemove Backend.",
      image: "/ije.png",
      description: "A Logistics Company focused on Logistics of People, Goods and Services from one place to another.",
      liveUrl: "https://ijemove.com",
      className: "",
      tags: ["React.js", "Next.js", "MongoDB", "Node.js"],
      githubUrl: "https://github.com/Emman442",
    },
    {
      title: "Binnox App",
      image: "/muzingo.png",
      description: " An Online restaurant where people order food",
      liveUrl: "https://binnox.app",
      className: "",
      tags: ["React.js", "Next.js", "MongoDB", "Node.js"],
      githubUrl: "https://github.com/Emman442",
    },
    {
      title: "Binnox App",
      image: "/muzingo.png",
      description: " An Online restaurant where people order food",
      liveUrl: "https://binnox.app",
      className: "",
      tags: ["React.js", "Next.js", "MongoDB", "Node.js"],
      githubUrl: "https://github.com/Emman442",
    },
    {
      title: "Fastrash",
      image: "/fastrash.png",
      description: " An Online restaurant where people order food",
      liveUrl: "https://fastrash.vercel.app",
      className: "",
      tags: ["React.js", "Next.js", "MongoDB", "Node.js"],
      githubUrl: "https://github.com/Emman442",
    },
  ];
  return (
    <div className="flex items-center justify-center bg-[#262626]">
      <div id="portfolio" className="w-[90%] mx-auto">
        <div className="container">
          <h1 className=" text-center text-[60px] my-10 font-bold text-white">
            My Projects <span className="port"> & Portfolios</span>
          </h1>
          <div className="grid grid-cols-3 gap-3">
            {portfolios.map((i: any) => (
              <ProjectCard
                tags={i.tags}
                key={i.title}
                title={i.title}
                githubUrl={i.githubUrl}
                image={i.image}
                liveUrl={i.liveUrl}
                description={i.description}
              />
            ))}
          </div>
        </div>
        <button className="see">
          <a href="https://github.com/Emman442">See more...</a>
        </button>
      </div>
    </div>
  );
}
