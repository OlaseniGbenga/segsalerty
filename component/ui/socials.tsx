"use client";
import { Box, Image } from "@mantine/core";

const img = [
  "socials/socials1.png",
  "socials/socials2.png",
  "socials/socials3.png",
  "socials/socials4.png",
];

const Socials = () => {
  return (
    <>
      <div className=" mb-8 flex flex-col gap-6 bg py-8">
        <Box className="scroll-wrapper  ">
          <Box className="scroll-track  items-center">
            {[...img, ...img, ...img, ...img, ...img].map((logo, i) => (
              <Box key={i} mx="xl" style={{ flexShrink: 0 }}>
                <Image src={logo} alt={`Image ${i}`} w={400} h={600} />
              </Box>
            ))}
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Socials;
