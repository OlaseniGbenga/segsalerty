import React from "react";
import { cn } from "@/utils/util";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <p
      className={cn(
        "font-bold text-[14px] py-[16px] px-[24px] bg-darknavyblue rounded-[10px] text-white",
        className
      )}
    >
      {children}
    </p>
  );
}
