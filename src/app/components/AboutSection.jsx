"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li className="my-2">React.js</li>
        <li className="my-2">C++</li>
        <li className="my-2">MongoDB</li>
        <li className="my-2">JavaScript</li>
        <li className="my-2">Node.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className="my-2">MCA at Christ University (2023 - 2025)</li>
        <li className="my-2">BCA at Cotton Univeristy (2020 - 2023)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li className="my-2">
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/1OWhc0eOw9mL5FhTzHqxS-9sjsIWvaelo/view?usp=sharing"
            className="flex items-center hover:text-blue-500"
          >
            Namaste React
            <ExternalLink className="ml-3 h-4 w-4" />
          </Link>
        </li>
        <li className="my-2">
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/17-iIXsJLTfyeW-p7dLWP1xAUcCXO_hl_/view?usp=sharing"
            className="flex items-center hover:text-blue-500"
          >
            Namaste JavaScript
            <ExternalLink className="ml-3 h-4 w-4" />
          </Link>
        </li>
        <li className="my-2">
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/1IrgaITTd4tQT0Ux-xhCjBJ0cDdQ0ugwF/view?usp=sharing"
            className="flex items-center hover:text-blue-500"
          >
            AWS Cloud Foundations
            <ExternalLink className="ml-3 h-4 w-4" />
          </Link>
        </li>
        <li className="my-2">
          <Link
            target="_blank"
            href="https://www.hackerrank.com/certificates/269147c502c3"
            className="flex items-center hover:text-blue-500"
          >
            Hackerank Problem Solving Basic(Certificate)
            <ExternalLink className="ml-3 h-4 w-4" />
          </Link>
        </li>
        <li className="my-2">
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/1KaLh8QZ_ztjCzlC2aS5jxn9jr14TPE5y/view?usp=sharing"
            className="flex items-center hover:text-blue-500"
          >
            Indian CP Summer Camp
            <ExternalLink className="ml-3 h-4 w-4" />
          </Link>
        </li>
      </ul>
    ),
  },
  {
    title: "Coding Profile Links",
    id: "coding",
    content: (
      <ul className="list-disc pl-2">
        <li className="my-2">Codeforces</li>
        <li className="my-2">LeetCode</li>
        <li className="my-2">GFG</li>
        <li className="my-2">HackerRank</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white mt-3" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/dp.jpg"
          alt="about-image"
          width={500}
          height={500}
          className="rounded-xl"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-md">
            Hi, I&apos;m Vishal Kalita currently pursuing Masters of Computer
            Applications. I&apos;m currently learning Full Stack Development and
            have a keen interest in Data Structures and Algorithms.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("coding")}
              active={tab === "coding"}
            >
              {" "}
              Coding Profiles{" "}
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
