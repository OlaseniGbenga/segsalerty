"use client";

import Hero from "@/component/sections/hero";
import { useRef } from "react";
import { BasicAppShell } from "@/component/layout/AppShell";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";


const Section2 = dynamic(() => import("@/component/sections/section2"), { ssr: false });
const Section3 = dynamic(() => import("@/component/sections/section3"), { ssr: false });
const Section4 = dynamic(() => import("@/component/sections/section4"), { ssr: false });
const Section5 = dynamic(() => import("@/component/sections/section5"), { ssr: false });
const Section6 = dynamic(() => import("@/component/sections/section6"), { ssr: false });
const Section7 = dynamic(() => import("@/component/sections/section7"), { ssr: false });
const Section8 = dynamic(() => import("@/component/sections/section8"), { ssr: false });

export default function Home() {
  const refs = {
    Impact: useRef<HTMLDivElement>(null),
    About: useRef<HTMLDivElement>(null),
    Programs: useRef<HTMLDivElement>(null),
    SupportUs: useRef<HTMLDivElement>(null),
  };

  const scrollTo = (key: string) => {
    refs[key as keyof typeof refs]?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <BasicAppShell scrollTo={scrollTo}>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          opacity: { duration: 0.2 },
          y: { type: "spring", stiffness: 100 },
          scale: { type: "spring", damping: 5 },
        }}
      >
        <Hero />
      </motion.div>

      <Section2 ref={refs.Impact} />
      <Section3 ref={refs.About} />
      <Section4 ref={refs.Programs} />
      <Section5 ref={refs.SupportUs} />
      <Section6 />
      <Section7 />
      <Section8 />
    </BasicAppShell>
  );
}
