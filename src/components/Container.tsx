import type { ReactNode } from "react";

function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`px-[4.1025%] md:px-[5.5555%] xl:px-[8.4375%] ${className}`}
    >
      {children}
    </section>
  );
}

export default Container;
