// app/@modal/photos/[id]/page.tsx
"use client";

import VStack from "@/app/components/ui/VStack";
import { Text } from "@vibe/core";
import { useRouter } from "next/navigation";
import React from "react";

export default function SidebarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VStack
      width="40%"
      height="100vh"
      style={{
        zIndex: 1000,
        position: "fixed",
        right: 0,
        top: 0,
      }}
    >
      {children}
    </VStack>
  );
}
