import { Badge } from "@/component/ui/badge";
import { Button } from "@mantine/core";
import Image from "next/image";
import Testimonial from "../ui/testimonials";

const Section7 = () => {
  return (
    <div className="flex flex-col bg-[url('/BACKGROUND.png')] bg-cover py-[80px]">
      <section className="flex  flex-col gap-[80px] pb-[80px] pt-[20px] px-[20px] md:px-[60px] ">
        <div className="flex flex-col gap-[20px]">
          <Badge className="self-center">WHAT OUR COMMUNITY IS SAYING</Badge>
          <p className="font-normal text-[17px] text-center">
            Real stories from real people — growing, building, and leading
            through SEGSALERTY.{" "}
          </p>
        </div>
      </section>
      <Testimonial />

      <Button
        visibleFrom="sm"
        style={{
          borderRadius: "10px",
          color: "white",
          background: "var(--dark-green)",
          height: "48px",
          padding: "16px 24px",
          alignSelf: "center",
        }}
        variant="filled"
        rightSection={
          <Image src="/Ellipse.svg" width={20} height={18} alt="Ellipse" />
        }
      >
        Join Our Community
      </Button>
    </div>
  );
};

export default Section7;
