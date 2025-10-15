"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  onClick?: () => void;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function TransitionLink({
  children,
  href,
  className,
  onClick,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    const body = document.querySelector("body");
    body?.classList.add(
  "opacity-0",
  "bg-[#141414]",
  "translate-y-[-40px]",
  "blur-[12px]",
  "transition-[opacity,background,transform,filter]",
  "duration-400",
  "ease-in-out"
);

    await sleep(400);

    router.push(href);
    onClick?.();

    await sleep(400);

    body?.classList.remove(
  "opacity-0",
  "bg-[#141414]",
  "translate-y-[-40px]",
  "blur-[12px]",
  "transition-[opacity,background,transform,filter]",
  "duration-400",
  "ease-in-out"
);
    
  };

  return (
    <Link href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  );
}
