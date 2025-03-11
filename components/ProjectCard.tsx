import React from "react";

import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

import { Badge } from "./Badge";
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div
      className={
        "overflow-hidden transition-all duration-300 hover:shadow-lg bg-[#fff] rounded-lg"
      }
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-10">
        <h3 className="text-lg font-semibold my-4 text-primary pl-4 text-[15px]">{title}</h3>
        <p className="text-muted-foreground mb-4 text-sm line-clamp-3 text-wrap text-[13px] p-5">
          {description}
        </p>
        <div className="flex gap-1.5 ml-4">
          {tags.map((tag) => (
            <div key={tag} className="px-5 inline-flex items-center py-0.5 font-semibold border bg-[#F1F5F9] text-[#00FF89] rounded-full text-xs">
              {tag}
            </div>
          ))}
        </div>
      </div>
      {(liveUrl || githubUrl) && (
        <div className="p-4 pt-0 flex gap-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent transition-colors"
              aria-label="GitHub Repository"
            >
              <FaGithub size={20} />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent transition-colors"
              aria-label="Live Demo"
            >
              <FiExternalLink size={20} />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
