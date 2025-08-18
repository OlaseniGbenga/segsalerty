"use client";
import { Box, Image } from "@mantine/core";

const logos = ["socials/socials1.png"];

const Socials = () => {
  return (
    <>
      <div className=" mb-8 flex flex-col gap-6 bg py-8">
        <Box className="scroll-wrapper  ">
          <Box className="scroll-track  items-center">
            {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
              <Box
                key={i}
                w={375}
                mx="xl"
                className="logo-item"
                style={{ flexShrink: 0 }}
              >
                <Image src={logo} alt={`Logo ${i}`} fit="contain" />
              </Box>
            ))}
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Socials;
