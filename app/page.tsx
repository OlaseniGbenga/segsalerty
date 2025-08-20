"use client";
import Hero from "@/component/sections/hero";
import Section2 from "@/component/sections/section2";
import Section3 from "@/component/sections/section3";
import Section4 from "@/component/sections/section4";
import Section5 from "@/component/sections/section5";
import Section6 from "@/component/sections/section6";
import Section7 from "@/component/sections/section7";
import Section8 from "@/component/sections/section8";
import { useRef } from "react";
import { BasicAppShell } from "@/component/layout/AppShell";
import { motion } from "framer-motion";

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
    <>
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
    </>
  );
}
//https://www.figma.com/design/jYLhtMYidPyTMQFPhuNep6/SEGSALERTY?node-id=183-818&t=uSN6N0F18SRIBmk9-0
