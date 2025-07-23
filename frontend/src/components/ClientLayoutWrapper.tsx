"use client";
import { Providers } from "@/app/providers";

export default function ClientLayoutWrapper({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  // you can use state, context, etc. here
  return (
    <>
      <Providers>{children}</Providers>
    </>
  );
}
