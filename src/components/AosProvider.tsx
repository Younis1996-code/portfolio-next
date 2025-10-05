"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "aos/dist/aos.css";

export default function AOSProvider({ children }: { children: React.ReactNode }) {
const pathname = usePathname();

  useEffect(() => {
  import("aos").then((AOS) => {
    AOS.default.init({
    });
    setTimeout(() => {
      AOS.default.refresh();
    }, 500);
  });
}, [pathname]);

  return <>{children}</>;
}