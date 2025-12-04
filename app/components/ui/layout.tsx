"use client";

import { ReactNode } from "react";
import VStack from "./VStack";
import HStack from "./HStack";
import SideNavingation from "./side-nav";
import WorkspaceContent from "./WorkspaceContent";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HStack width="100%" height="100vh" gap="none">
      {/* LEFT NAVIGATION */}
      <SideNavingation />
      {/* RIGHT CONTENT AREA */}
      <VStack
        align="flex-start"
        gap="16px"
        width="100%"
        height="100%"
        style={{
          padding: "24px 32px",
          backgroundColor: "#181c34",
          overflowY: "auto",
          position: "relative",
        }}
      >
        {children}
      </VStack>
    </HStack>
  );
}
