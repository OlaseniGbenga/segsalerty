"use client";

import Image from "next/image";
import { Button, Divider } from "@mantine/core";

export default function Footer() {
  return (
    <footer className="bg-white p-[24px] text-white">
      <div className="rounded-[20px] py-[56px] px-[40px] bg-darknavyblue flex  flex-col gap-[64px]">
        <div className="flex flex-col items-center text-center">
          <p className="font-medium text-[12px]">
            Ready to level up your tech game?
          </p>
          <p className="text-[32px] font-bold">
            {" "}
            Join a community that&apos;s <br /> building, growing, and
            <br /> giving back.
          </p>{" "}
          <Button
            style={{
              borderRadius: "10px",
              color: "white",
              background: "var(--dark-green)",
              marginTop: "32px",
            }}
            variant="fill"
            rightSection={
              <Image src="/Ellipse.svg" width={20} height={18} alt="Logo" />
            }
          >
            Join Our Community
          </Button>
        </div>
        <Divider />
        <div className="flex items-center justify-between flex-col md:flex-row gap-[20px]">
          <Image
            src="/segsalerty-white.svg"
            className="fill-white"
            width={140}
            height={140}
            alt="Logo"
          />
          <p className="text-[14px] font-normal">
            © 2025 SEGSALERTY. All rights reserved.
          </p>
          <div className="flex gap-[24px] items-center">
            <Image
              src="/Fb.svg"
              className="fill-white"
              width={24}
              height={24}
              alt="Facebook icon"
            />
            <Image
              src="/Tw.svg"
              className="fill-white"
              width={24}
              height={24}
              alt="Twitter Icon"
            />
            <Image
              src="/Ig.svg"
              className="fill-white"
              width={24}
              height={24}
              alt="Logo"
            />
            <Image
              src="/Ln.svg"
              className="fill-white "
              width={24}
              height={24}
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
