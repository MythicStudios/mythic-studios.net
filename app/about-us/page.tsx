"use client";

import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Card, CardBody, CardHeader } from "@heroui/card";
import ElasticLine from "@/fancy/components/physics/elastic-line";

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <header className="mb-8 text-center">
        <title>About Us</title>
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="text-4xl font-bold">
          About Us
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

        <Card className="w-full mb-8 p-6">
          <CardBody className="space-y-4">
            <p className="text-lg text-center leading-relaxed">
              Wir sind ein engagiertes und motiviertes Team, das sich leidenschaftlich für Qualität und Innovation einsetzt.
            </p>
          </CardBody>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <CardHeader className="flex flex-col items-start px-0 pt-0">
              <h3 className="text-xl font-bold mb-4">Unsere Stärken</h3>
            </CardHeader>
            <CardBody className="px-0 space-y-3 text-sm">
              <div>
                <p className="font-semibold">Kreativität</p>
                <p className="text-default-500">Innovative Ideen und Lösungen</p>
              </div>
              <div>
                <p className="font-semibold">Qualität</p>
                <p className="text-default-500">Höchste Standards in allem, was wir tun</p>
              </div>
              <div>
                <p className="font-semibold">Teamfähigkeit</p>
                <p className="text-default-500">Zusammenarbeit und gegenseitige Unterstützung</p>
              </div>
              <div>
                <p className="font-semibold">Zuverlässigkeit</p>
                <p className="text-default-500">Wir halten, was wir versprechen</p>
              </div>
              <div>
                <p className="font-semibold">Kontinuierliche Verbesserung</p>
                <p className="text-default-500">Ständiges Lernen und Optimierung</p>
              </div>
            </CardBody>
          </Card>

          <Card className="p-6">
            <CardHeader className="flex flex-col items-start px-0 pt-0">
              <h3 className="text-xl font-bold mb-4">Gemeinschaft</h3>
            </CardHeader>
            <CardBody className="px-0 space-y-3 text-sm">
              <p className="text-base leading-relaxed">
                Wir bauen eine offene und unterstützende Umgebung auf, in der jeder willkommen ist.
              </p>
              <p className="text-base leading-relaxed">
                Zusammenarbeit, gegenseitiges Vertrauen und ein gemeinsames Ziel treiben uns voran.
              </p>
            </CardBody>
          </Card>
        </div>

        <Card className="w-full p-6 mb-8">
          <CardHeader className="flex flex-col items-start px-0 pt-0">
            <h3 className="text-xl font-bold mb-4">Vision</h3>
          </CardHeader>
          <CardBody className="px-0 space-y-3">
            <p className="text-base leading-relaxed">
              Unser Ziel ist es, nachhaltige und beeindruckende Ergebnisse zu schaffen. Wir hören auf euer Feedback und Ideen – sie sind der Schlüssel zu unserer kontinuierlichen Verbesserung.
            </p>
            <p className="text-lg font-semibold text-primary mt-4">
              Schließ dich unserem Team an und sei Teil einer Bewegung, die etwas Bedeutsames schafft.
            </p>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}
