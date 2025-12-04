"use client";

import { useState } from "react";
import { Heading, Text, Button, Icon, Dropdown, MenuItem } from "@vibe/core";
import {
  Board,
  Favorite,
  Home,
  Menu,
  MyWeek,
  NavigationChevronDown,
  NavigationChevronRight,
  Search,
  Switcher,
} from "@vibe/icons";
import VStack from "./VStack";
import HStack from "./HStack";

interface WorkspaceOption {
  value: string;
  label: string;
}

const workspaceOptions: WorkspaceOption[] = [
  { value: "chevrolet-tech", label: "Chevrolet - Technology Team" },
  { value: "community-funds", label: "Community Action Funds" },
  { value: "chevrolet-hub", label: "Chevrolet Hub" },
  { value: "caf-ios", label: "2025 - CAF iOS/Android App Management" },
  { value: "caf-web", label: "2025 - CAF Web App Management" },
  { value: "caf-admin", label: "2025 - CAF Admin Management" },
  { value: "caf-org", label: "CAF Org Set Up - 2025/2026" },
];

export default function SideNavingation() {
  const [selected, setSelected] = useState<WorkspaceOption | null>(
    workspaceOptions[0]
  );

  const [open, setOpen] = useState(true);

  const toggle = () => setOpen(!open);

  const favoriteItems = [
    "Design System Board",
    "Dev Tasks Sprint 2025",
    "Product Roadmap 2026",
  ];

  return (
    <VStack
      width="500px"
      height="100%"
      gap="16px"
      style={{
        padding: "16px 12px",
        backgroundColor: "#1d213a",
        color: "#fff",
        boxShadow: "inset -5px -20px 20px 0 #292f4c",
      }}
    >
      <HStack
        hover="#282c49"
        width="100%"
        align="center"
        gap="8px"
        onClick={toggle}
        style={{
          padding: "4px 0 4px 8px",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        {/* Label */}
        <Text
          style={{
            fontSize: "12px",
            color: "#ffffff",
            fontWeight: 500,
          }}
        >
          Favorites
        </Text>
        {/* Arrow */}
        <Icon
          icon={open ? NavigationChevronDown : NavigationChevronRight}
          iconSize={10}
          style={{ color: "#aaa" }}
        />
      </HStack>

      {/* COLLAPSE CONTENT */}
      {open && (
        <VStack
          align="flex-start"
          style={{ paddingLeft: "8px", width: "100%" }}
        >
          {favoriteItems.map((item) => (
            <HStack
              key={item}
              align="center"
              gap="8px"
              style={{
                cursor: "pointer",
                width: "100%",
              }}
            >
              <Icon icon={Board} iconSize={14} style={{ color: "#888" }} />
              <Text style={{ color: "#c5c7db", fontSize: "13px" }}>{item}</Text>
              <Icon
                icon={Favorite}
                iconSize={14}
                style={{
                  color: "#888",
                  marginLeft: "auto",
                  marginRight: "6px",
                }}
              />
            </HStack>
          ))}{" "}
        </VStack>
      )}

      {/* App / logo area */}
      <HStack
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
          paddingLeft: "8px",
        }}
      >
        <Heading style={{ fontSize: "14px", color: "#fff" }}>
          Workspaces
        </Heading>
        <HStack
          style={{
            alignItems: "center",
            display: "flex",
            marginRight: "6px",
          }}
        >
          <Icon
            id="colored-icon"
            iconType="svg"
            icon={Menu}
            iconLabel="my bolt svg icon"
            iconSize={16}
          />
          <Icon
            id="colored-icon"
            iconType="svg"
            icon={Search}
            iconLabel="my bolt svg icon"
            iconSize={16}
          />
        </HStack>
      </HStack>

      {/*  */}

      <HStack style={{ width: "100%", display: "flex", paddingLeft: "8px" }}>
        {/* Avatar circle with first letter */}
        <VStack
          width="30px"
          height="23px"
          align="center"
          justify="center"
          style={{
            borderRadius: "50%",
            backgroundColor: "#a16666ff",
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          C
        </VStack>

        {/* Dropdown with current workspace */}
        <HStack
          style={{
            width: "100%",
            // border: "1px solid white",
          }}
        >
          <div style={{ width: "100%" }}>
            <Dropdown
              value={selected}
              options={workspaceOptions}
              onChange={(opt: any) => setSelected(opt)}
              clearable={false}
              id="sizes-small"
              size="small"
            />
          </div>
        </HStack>

        {/* + button */}
        <Button
          kind="primary"
          size="small"
          ariaLabel="Add workspace"
          onClick={() => console.log("Add workspace")}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
          }}
        >
          +
        </Button>
      </HStack>

      {/*  */}

      {/* List of boards under selected workspace */}
      <VStack
        gap="10px"
        align="flex-start"
        style={{ marginTop: 8, paddingLeft: "8px", overflowY: "scroll" }}
      >
        {workspaceOptions.slice(1).map((item) => (
          <HStack key={item.value} gap="10px" align="center">
            <Icon
              id="colored-icon"
              iconType="svg"
              icon={Board}
              iconLabel="my bolt svg icon"
              iconSize={16}
            />
            <Text
              style={{
                fontSize: 13,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                opacity: 1,
                color: "#838595",
              }}
            >
              {item.label}
            </Text>
          </HStack>
        ))}
      </VStack>
      {/*  */}

      {/* bottom */}
      <VStack
        gap={0}
        style={{
          width: "100%",
          marginTop: "auto",
          color: "#9699a6",
        }}
      >
        <MenuItem
          aria-label="item"
          title={
            <HStack style={{ color: "#9699a6" }}>
              <Icon icon={Home} iconSize={14} />
              <Text style={{ color: " #9699a6", fontSize: "12px" }}>Home</Text>
            </HStack>
          }
        />
        <MenuItem
          aria-label="my work"
          title={
            <HStack style={{ color: "#9699a6" }}>
              <Icon icon={MyWeek} iconSize={14} />
              <Text style={{ color: " #9699a6", fontSize: "12px" }}>
                My Work
              </Text>
            </HStack>
          }
        />
        <MenuItem
          aria-label="more"
          title={
            <HStack style={{ color: "#9699a6" }}>
              <Icon icon={Switcher} iconSize={14} />
              <Text style={{ color: " #9699a6", fontSize: "12px" }}>More</Text>
            </HStack>
          }
        />
      </VStack>
    </VStack>
  );
}
