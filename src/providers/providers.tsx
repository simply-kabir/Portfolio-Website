"use client";

import ScrollProvider from "./scroll-provider";
import LenisProvider from "./lenisprovider";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LenisProvider>
      <ScrollProvider>
        {children}
      </ScrollProvider>
    </LenisProvider>
  );
}