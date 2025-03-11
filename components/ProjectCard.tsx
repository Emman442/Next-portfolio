import React from "react";
import { Card, CardContent, CardFooter } from "@/components/Card";
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
    <Card
      className={
        "overflow-hidden group transition-all duration-300 hover:shadow-lg border-border/60"
      }
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
        <p className="text-muted-foreground mb-4 text-sm line-clamp-3 text-wrap">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      {(liveUrl || githubUrl) && (
        <CardFooter className="p-4 pt-0 flex gap-2">
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
              <FiExternalLink size={20}/>
            </a>
          )}
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;
