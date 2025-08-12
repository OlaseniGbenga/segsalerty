"use client";

import { useDisclosure } from "@mantine/hooks";
import { AppShell, Box, Stack, useMantineTheme } from "@mantine/core";
import { usePathname } from "next/navigation";

import { NAVITEMS } from "@/utils/constants";
import Footer from "./footer";
import Header from "./header";

export function BasicAppShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname();
  const theme = useMantineTheme();
  return (
    <Box
      style={{
        maxWidth: "2000px",
        margin: "0 auto",
        boxShadow: "0 0 0 1px rgba(0,0,0,0.1)",
      }}
    >
      <AppShell
      
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
           pb={"20px"} pt={"20px"}

          px={{ base: 16, sm: 20, md: 40 }}
        >
          <Header pathname={pathname} opened={opened} toggle={toggle} />
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <Stack>
            {NAVITEMS.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Box
                  key={item.label}
                  component="a"
                  href={item.href}
                  onClick={toggle}
                  py="sm"
                  px="md"
                  style={{
                    textDecoration: "none",
                    color: isActive
                      ? theme.colors["green-primary"][0]
                      : "black",
                  }}
                >
                  {item.label}
                </Box>
              );
            })}
          </Stack>
        </AppShell.Navbar>
        <AppShell.Main>{children}</AppShell.Main>
        <Footer />
      </AppShell>
    </Box>
  );
}
