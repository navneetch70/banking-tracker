"use client";

import {
  Avatar,
  Button,
  Divider,
  Flex,
  Icon,
  ListItem,
  ListItemIcon,
  MenuItemButton,
  Menu,
  TabList,
  Tab,
  IconButton,
  Heading,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Label,
  ExpandCollapse,
  EditableText,
  EditableHeading,
} from "@vibe/core";
import HStack from "./HStack";
import VStack from "./VStack";
import {
  Add,
  Favorite,
  Filter,
  Hide,
  Integrations,
  Menu as MenuIcon,
  NavigationChevronDown,
  NavigationChevronUp,
  Person,
  Robot,
  Sort,
  Switcher,
  Table,
  Update,
  Search,
  AddSmall,
  Invite,
  Form,
  MoveArrowDown,
  MoveArrowUp,
} from "@vibe/icons";
import StickyTable from "./StickyTable";
import { useEffect, useRef, useState } from "react";

export default function WorkspaceContent() {
  const ToolbarAction = ({ icon, label }: { icon: any; label: string }) => (
    <Button
      kind="tertiary"
      size="small"
      leftIcon={icon}
      ariaLabel={label}
      style={{ gap: 6, color: "#fff" }}
    >
      {label}
    </Button>
  );

  const [isOpen, setIsOpen] = useState(true);
  const [title, setTitle] = useState("This heading is an editable heading");

  return (
    <VStack width="100%" height="100%">
      <HStack
        style={{
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <HStack>
          <Heading>HEADING</Heading>
        </HStack>
        <HStack style={{ gap: "14px" }}>
          <ToolbarAction icon={Favorite} label="Sidekick" />
          <ToolbarAction icon={Integrations} label="Integerate" />
          <ToolbarAction icon={Robot} label="Automate" />
          <Icon icon={Update} iconSize={26} />
          <Avatar
            id="text-small"
            size="small"
            type="text"
            text="RM"
            backgroundColor="lipstick"
            ariaLabel="Ron Meir"
          />
          <Icon icon={MenuIcon} iconSize={26} />
        </HStack>
      </HStack>

      {/* <HStack style={{ color: "#fff" }}>
         <TabList>
          <Tab icon={Table}>Main Table</Tab>
          <Tab icon={Form}>Form</Tab>
          <IconButton
            ariaLabel="Add"
            icon={AddSmall}
            id="overview-icon-button"
            onClick={function Xs() {}}
          />
        </TabList>
      </HStack> */}

      <Divider />

      <HStack width="100%" justify="space-between">
        {/* LEFT SIDE ACTIONS */}
        <HStack align="center" gap="8px">
          {/* New item primary button */}
          <Button
            kind="primary"
            size="small"
            ariaLabel="New item"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            New item
            <Icon
              icon={NavigationChevronDown}
              iconSize={14}
              style={{ marginLeft: 4 }}
            />
          </Button>

          <Button
            kind="tertiary"
            size="small"
            ariaLabel="Search"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "#fff",
            }}
          >
            <Icon icon={Search} iconSize={18} />
            Search
          </Button>
          <ToolbarAction icon={Person} label="Person" />
          <ToolbarAction icon={Filter} label="Filter" />
          <ToolbarAction icon={Sort} label="Sort" />
          <ToolbarAction icon={Hide} label="Hide" />
          <ToolbarAction icon={Switcher} label="Group by" />
          <ToolbarAction icon={MenuIcon} label="More" />
        </HStack>

        {/* RIGHT SIDE CIRCLE BUTTON (scroll up / collapse etc.) */}
        <Button
          kind="secondary"
          size="small"
          ariaLabel="Scroll to top"
          style={{
            width: 32,
            height: 32,
            minWidth: 32,
            borderRadius: "999px",
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255,255,255,0.06)",
            border: "none",
            color: "#fff",
          }}
        >
          <Icon icon={NavigationChevronUp} iconSize={16} />
        </Button>
      </HStack>

      <VStack width="100%">
        {/* Header row */}
        <HStack
          style={{
            width: "100%",
            alignItems: "center",
            padding: "8px 0",
          }}
        >
          {/* Editable heading – NOT clickable for collapse */}

          {/* Separate button JUST for expand/collapse */}
          <Button
            kind="tertiary"
            size="small"
            onClick={() => setIsOpen((prev) => !prev)}
            ariaLabel={isOpen ? "Collapse section" : "Expand section"}
            style={{
              minWidth: "auto",
              padding: 4,
              //   color: "#589bfd",
            }}
          >
            <Icon
              icon={isOpen ? NavigationChevronUp : NavigationChevronDown}
              iconSize={18}
            />
          </Button>
          <EditableHeading
            value={title}
            onChange={setTitle}
            ariaLabel="Editable section heading"
            className="text-edit"
          />
        </HStack>

        {/* Collapsible content */}
        {isOpen && <StickyTable isOpen={isOpen} key={`table-${isOpen}`} />}
      </VStack>
    </VStack>
  );
}
