"use client";
import { Burger, Container, Group, Text, Button } from "@mantine/core";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

import { NAVITEMS } from "@/utils/constants";

interface ToggleProps {
  opened: boolean;
  toggle: () => void;

  scrollTo: (key: string) => void;
}

export default function Header({ scrollTo, opened, toggle }: ToggleProps) {
  const [activeSection, setActiveSection] = useState("Impact");
  return (
    <Container size="1440" h="100%" bg={"white"}>
      <Group h="100%" w="100%" justify="space-between" align="center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/segsalerty.svg"
            className=""
            width={140}
            height={140}
            alt="Logo"
          />
        </motion.div>

        <Group visibleFrom="md" gap="md">
          {NAVITEMS.map((item, index) => {
            const isActive = activeSection === item.key;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.1 * index,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <Text
                  style={{
                    textDecoration: "none",
                    fontWeight: isActive ? 700 : 400,
                    fontSize: "18px",
                    borderBottom: isActive
                      ? `2px solid var(--deep-teal)`
                      : "none",
                    cursor: "pointer",
                    color: isActive ? "var(--deep-teal)" : "var(--black)",
                  }}
                  onClick={() => {
                    scrollTo(item.key);
                    setActiveSection(item.key);
                  }}
                >
                  {item.label}
                </Text>
              </motion.div>
            );
          })}
        </Group>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            component="a"
            href="https://t.me/+jh9aL-fYeB04Mjlk"
            target="_blank"
            rel="noopener noreferrer"
            visibleFrom="md"
            style={{
              borderRadius: "10px",
              color: "white",
              background: "var(--dark-green)",
              height: "48px",
              padding: "16px 24px",
            }}
            variant="filled"
            rightSection={
              <Image src="/Ellipse.svg" width={20} height={18} alt="Logo" />
            }
          >
            Join Our Community
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
        </motion.div>
      </Group>
    </Container>
  );
}
