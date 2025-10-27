"use client";

import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import ElasticLine from "@/fancy/components/physics/elastic-line";

export default function BlogOverviewPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="text-4xl font-bold">
          Blog
        </TextAnimate>
      </header>

      <section className="mb-12">
        <TextAnimate
          animation="slideUp"
          by="word"
          className="text-center text-lg">
          Aktuelle Artikel und News
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
          <p className="text-center text-default-500">
            Noch keine Blog-Artikel vorhanden.
          </p>
        </div>
      </section>
    </div>
  );
}
