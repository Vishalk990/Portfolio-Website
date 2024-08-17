"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Discuss IT",
    description: "A community-driven web app focused on resolving doubts related to academics and other categories",
    image: "/images/projects/DiscussIT-landing-page.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Vishalk990/Discuss-IT",
    previewUrl: "https://discuss-it-two.vercel.app/",
  },
  {
    id: 2,
    title: "Next-Gen-InterView",
    description: "An AI-powered interview simulation platform using Next.js, Clerk, Drizzle ORM, NeonDB, PostgreSQL,Shadcn, and TailwindCSS",
    image: "/images/projects/AI-Interviewer-landing-page.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Vishalk990/AI-Interviewer-built-with-NextJs",
    previewUrl: "https://next-gen-interview.vercel.app/",
  },
  {
    id: 4,
    title: "Sync-Crowd",
    description: "A synthetic data generation platform",
    image: "/images/projects/SyncCrowd-landing-page.png",
    tag: ["All"],
    gitUrl: "https://github.com/Vishalk990/Sync-Crowd",
    previewUrl: "https://sync-crowd.vercel.app/",
  },
  {
    id: 5,
    title: "Movies-Flix",
    description: "a Movies Recommender web app",
    image: "/images/projects/Movies-flix-landing-page.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Vishalk990/Movies-Flix",
    previewUrl: "https://movies-flixgpt.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;