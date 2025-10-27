"use client";

import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Card, CardBody } from "@heroui/card";
import ElasticLine from "@/fancy/components/physics/elastic-line";
import Link from "next/link";
import Image from "next/image";

export default function PartnersPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <header className="mb-8 text-center">
        <title>Partners</title>
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="text-4xl font-bold">
          Partners
        </TextAnimate>
      </header>

      <section className="mb-12 w-full max-w-4xl">
        <div className="w-full flex justify-center mb-8">
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

        <Card className="w-full mb-8 p-8">
          <CardBody className="space-y-8">
            <div className="flex justify-center mb-6">
              <Image
                src="/skrime-logo-primary.png"
                alt="Skrime Logo"
                width={300}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <p className="text-xl leading-relaxed font-medium">
                Dein Partner für kostengünstige Web-Hosting Produkte sowie shared als auch dediz
              </p>
            </div>
            <div className="flex justify-center mt-6">
              <Link
                href="https://skrime.eu/a/mythicstudios"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-xl font-semibold">
                Besuche skrime.eu →
              </Link>
            </div>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}
