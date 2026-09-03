"use client";

import { Leaf } from "lucide-react";

import {
  RespireKidsAccent,
  RespireKidsHero,
} from "@/components/ui/respire-kids-hero";

export default function RespireKidsHeroDemo() {
  return (
    <RespireKidsHero
      image="/respire-kids/hero-respire-kids-1774.jpg"
      sources={[
        { src: "/respire-kids/hero-respire-kids-900.jpg", width: 900 },
        { src: "/respire-kids/hero-respire-kids-1774.jpg", width: 1774 },
      ]}
      imageAlt="Un bébé au teint mat sourit, une trace de crème sur la joue, entouré des soins Respire Kids"
      focus="50% 50%"
      mobileFocus="49% 42%"
      scrim={0.86}
      eyebrow="Nouveau · Respire Kids"
      title={
        <>
          L&apos;essentiel pour ton{" "}
          <RespireKidsAccent>bébé</RespireKidsAccent>
        </>
      }
      subtitle="100% naturel. Zéro ingrédient inutile. Un soin qui grandit avec ton enfant."
      ctaLabel="Prendre soin de mon enfant"
      ctaHref="#lancement"
      ctaIcon={<Leaf aria-hidden="true" size={16} strokeWidth={2} />}
      note="Testé sous contrôle pédiatrique · Fabriqué en France"
    />
  );
}
