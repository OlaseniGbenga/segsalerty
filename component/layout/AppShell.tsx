"use client";

import { useDisclosure } from "@mantine/hooks";
import { AppShell, Box, Button, Stack, useMantineTheme } from "@mantine/core";
import { usePathname } from "next/navigation";

import { NAVITEMS } from "@/utils/constants";
import Footer from "./footer";
import Header from "./header";
import Image from "next/image";

export function BasicAppShell({
  scrollTo,
  children,
}: Readonly<{
  children: React.ReactNode;
  scrollTo: (key: string) => void;
}>) {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname();
  const theme = useMantineTheme();
  return (
    <Box
      style={{
        maxWidth: "1440px",
        margin: "0 auto",
        boxShadow: "0 0 0 1px rgba(0,0,0,0.1)",
      }}
    >
      <AppShell
        header={{ height: { base: 60, sm: "auto" } }} 
        navbar={{
          width: 200,
          breakpoint: "sm",
          collapsed: { mobile: !opened, desktop: true },
        }}
      >
        <AppShell.Header
          style={{
            border: 0,
          }}
          className=""
          pb={"20px"}
          pt={"20px"}
          px={{ base: 16, sm: 20, md: 40 }}
        >
          <Header
            scrollTo={scrollTo}
            pathname={pathname}
            opened={opened}
            toggle={toggle}
          />
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <Stack>
            {NAVITEMS.map((item) => (
              <Box
                key={item.label}
                component="button"
                onClick={() => {
                  scrollTo(item.key);
                  toggle();
                }}
                py="sm"
                px="md"
                style={{
                  background: "none",
                  border: "none",
                  textAlign: "left",
                  cursor: "pointer",
                  color: theme.colors["green-primary"]?.[0] ?? "black",
                }}
              >
                {item.label}
              </Box>
            ))}
            <Button
             
              style={{
                borderRadius: "10px",
                color: "white",
                background: "var(--dark-green)",
                height: "48px",
                padding: "16px 24px",
                alignSelf:"start"
              }}
              variant="filled"
              rightSection={
                <Image src="/Ellipse.svg" width={20} height={18} alt="Logo" />
              }
            >
              Join Our Community
            </Button>
          
          </Stack>
        </AppShell.Navbar>
        <AppShell.Main>{children}</AppShell.Main>
        <Footer />
      </AppShell>
    </Box>
  );
}
