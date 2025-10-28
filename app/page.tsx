"use client";

import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import Link from "next/link";
import { Button } from "@heroui/button";
import ElasticLine from "@/fancy/components/physics/elastic-line";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 py-14 px-4 sm:px-6 min-h-screen flex flex-col items-center justify-center gap-2">
        <div className="flex flex-col items-center justify-center gap-8">
          <TextAnimate
            animation="blurInUp"
            by="character"
            className="text-6xl md:text-7xl font-bold text-center">
            Mythic Studios
          </TextAnimate>

          <div className="flex gap-4">
            <Button
              as={Link}
              href="/projects"
              variant="bordered"
              size="lg">
              Projects →
            </Button>
            <Button
              color="primary"
              variant="shadow"
              size="lg"
              as={Link}
              href="/about">
              About Us
            </Button>
          </div>
        </div>
        <div className="relative w-full max-w-4xl">
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
      </div>
    </div>
  );
}
