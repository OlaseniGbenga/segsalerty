"use client";
import { Box, Image } from "@mantine/core";

const logos = [
  "testimonials/Review1.png",
  "testimonials/Review2.png",
  "testimonials/Review3.png",
];

const Testimonial = () => {
  return (
    <>
      <div className=" mb-8 flex flex-col gap-6 bg py-8">
        <Box className="scroll-wrapper  ">
          <Box className="scroll-track  items-center">
            {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
              <Box
                key={i}
                w={411}
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

export default Testimonial;
