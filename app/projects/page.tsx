"use client";

import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";
import ElasticLine from "@/fancy/components/physics/elastic-line";

const projects = [
  {
    id: "mythicisland",
    title: "Mythic Island",
    category: "Minecraft Server",
    description: "Ein Minecraft Server mit einzigartigen Features, spannenden Abenteuern und einer lebendigen Gemeinschaft.",
    features: [
      "RPG SMP",
      "Boss Events",
      "Wirtschaft",
      "Survival",
      "Regelmäßige Events"
    ],
    status: "In Progress",
    link: "/project/mythicisland"
  }
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <title>Projects</title>
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="text-4xl font-bold">
          Projects
        </TextAnimate>
      </header>

      <section className="mb-12">
        <TextAnimate
          animation="slideUp"
          by="word"
          className="text-center text-lg">
          Unsere aktiven Projekte
        </TextAnimate>

        <div className="w-full flex justify-center mt-6">
          <ElasticLine
            releaseThreshold={50}
            strokeWidth={2}
            animateInTransition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: 0.15,
            }}
          />
        </div>

        <div className="grid grid-cols-1 gap-8 mt-6 max-w-2xl mx-auto">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="w-full p-6 text-lg">
              <CardHeader className="flex flex-col items-start gap-2 pb-4">
                <div className="flex items-center justify-between w-full">
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-widest">
                      {project.category}
                    </p>
                    <p className="text-2xl font-bold mt-1">{project.title}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                    {project.status}
                  </span>
                </div>
              </CardHeader>

              <CardBody className="space-y-4">
                <p className="text-base leading-relaxed text-default-600">
                  {project.description}
                </p>

                <div>
                  <p className="text-sm font-semibold mb-2">Features:</p>
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-sm text-default-500 flex items-center gap-2">
                        <span className="text-primary">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardBody>

              <CardFooter className="flex gap-2 items-center justify-start pt-4">
                <Link
                  href={project.link}
                  className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
                  Mehr erfahren →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
