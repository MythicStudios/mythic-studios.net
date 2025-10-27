"use client";

import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { ArrowLeft, ExternalLink, Users, Calendar, Tag } from "lucide-react";
import ElasticLine from "@/fancy/components/physics/elastic-line";

const project = {
  id: "mythicisland",
  title: "Mythic Island",
  category: "Minecraft Server",
  tagline: "Dein Abenteuer beginnt hier",
  description: "Ein Minecraft Server mit einzigartigen Features, spannenden Abenteuern und einer lebendigen Gemeinschaft.",
  longDescription: `Mythic Island ist mehr als nur ein Minecraft-Server – es ist eine lebendige,
  atmende Welt voller Abenteuer, Herausforderungen und unvergesslicher Momente. Seit unserer
  Gründung haben wir uns darauf konzentriert, eine einzigartige Spielerfahrung zu schaffen,
  die sowohl neue Spieler als auch erfahrene Veteranen begeistert.

  Unser Server kombiniert klassische Minecraft-Elemente mit innovativen Custom-Features,
  die du nirgendwo anders findest. Von unserem einzigartigen Skill-System über epische
  Boss-Kämpfe bis hin zu einer florierenden Wirtschaft – bei uns wird es nie langweilig.`,
  features: [
    {
      title: "Boss-Events",
      description: "Fordere mächtige Bosse heraus und erkunde gefährliche Dungeons. Teamwork wird belohnt mit seltenen Items und exklusiven Belohnungen."
    },
    {
      title: "Wirtschaft",
      description: "Handele mit anderen Spielern, eröffne eigene Shops und baue dein Wirtschaftsimperium auf."
    },
    {
      title: "Regelmäßige Events",
      description: "Nimm an Community-Events teil und gewinne exklusive Preise und Titel."
    }
  ],
  discordServerId: "1319744932899713164",
  status: "Live",
  links: [
    { label: "Discord beitreten", url: "https://discord.gg/xJHQpyYg" },
    { label: "Jetzt spielen", url: "https://discord.gg/xJHQpyYg" }
  ],
  technologies: ["Minecraft", "Java", "Paper", "Custom Plugins"],
  team: ["Entwickler Team", "Build Team", "Moderatoren"],
  timeline: "Seit 2025"
};

export default function ProjectDetailPage() {


  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Link href="/projects" className="inline-flex items-center gap-2 text-default-600 hover:text-primary transition-colors mb-8">
        <ArrowLeft size={20} />
        <span>Zurück zu Projekten</span>
      </Link>
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-widest">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-full bg-success/20 text-success text-xs font-semibold">
            {project.status}
          </span>
        </div>

        <TextAnimate
          animation="blurInUp"
          by="word"
          className="text-5xl md:text-6xl font-bold mb-4">
          {project.title}
        </TextAnimate>

        <TextAnimate
          animation="slideUp"
          by="word"
          className="text-xl md:text-2xl text-default-600 mb-6">
          {project.tagline}
        </TextAnimate>

        <div className="w-full flex justify-start mb-8">
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

        <p className="text-lg leading-relaxed text-default-700 mb-6">
          {project.description}
        </p>

        {project.links && (
          <div className="flex flex-wrap gap-4">
            {project.links.map((link, index) => (
              <Link key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                <Button
                  color={index === 0 ? "primary" : "default"}
                  size="lg"
                  endContent={<ExternalLink size={18} />}
                  className="font-semibold">
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Über das Projekt</h2>
        <Card className="p-6">
          <CardBody>
            <div className="prose prose-lg max-w-none text-default-700">
              {project.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </CardBody>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Features & Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardBody>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-default-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {project.technologies && (
          <Card className="p-6">
            <CardBody>
              <div className="flex items-center gap-2 mb-4">
                <Tag className="text-primary" size={24} />
                <h3 className="text-xl font-semibold">Technologien</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-default-100 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </CardBody>
          </Card>
        )}

        {project.team && (
          <Card className="p-6">
            <CardBody>
              <div className="flex items-center gap-2 mb-4">
                <Users className="text-primary" size={24} />
                <h3 className="text-xl font-semibold">Team</h3>
              </div>
              <ul className="space-y-2">
                {project.team.map((member, index) => (
                  <li key={index} className="text-default-600">• {member}</li>
                ))}
              </ul>
            </CardBody>
          </Card>
        )}

        {project.timeline && (
          <Card className="p-6">
            <CardBody>
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="text-primary" size={24} />
                <h3 className="text-xl font-semibold">Timeline</h3>
              </div>
              <p className="text-default-600">{project.timeline}</p>
            </CardBody>
          </Card>
        )}
      </div>

      <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardBody className="text-center">
          <h2 className="text-3xl font-bold mb-4">Bereit für dein Abenteuer?</h2>
          <p className="text-lg text-default-600 mb-6">
            Werde Teil unserer Community und erlebe Minecraft wie nie zuvor!
          </p>
          {project.links && (
            <div className="flex flex-wrap gap-4 justify-center">
              {project.links.map((link, index) => (
                <Link key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                  <Button
                    color="primary"
                    size="lg"
                    variant={index === 0 ? "solid" : "bordered"}
                    endContent={<ExternalLink size={18} />}
                    className="font-semibold">
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
