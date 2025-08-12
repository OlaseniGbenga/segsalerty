"use client";
import { Burger, Container, Group, Text, Button } from "@mantine/core";

import Image from "next/image";
import React from "react";

import { NAVITEMS } from "@/utils/constants";

interface ToggleProps {
  opened: boolean;
  toggle: () => void;
  pathname: string;
}

export default function Header({ opened, toggle, pathname }: ToggleProps) {
  return (
    <Container size="2000" h="100%" bg={"white"}>
      <Group h="100%" w="100%" justify="space-between" align="center">
        <Image
          src="/segsalerty.svg"
          className=""
          width={140}
          height={140}
          alt="Logo"
        />
        <Group visibleFrom="sm" gap="md">
          {NAVITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Text
                style={{
                  textDecoration: "none",
                  fontWeight: isActive ? 700 : 400,
                  fontSize: "18px",

                  borderBottom: isActive
                    ? `2px solid var(--deep-teal)`
                    : "none",
                }}
                key={item.label}
                component="a"
                href={item.href}
              >
                {item.label}
              </Text>
            );
          })}
        </Group>

        <Button
          visibleFrom="sm"
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

        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </Group>
    </Container>
  );
}
