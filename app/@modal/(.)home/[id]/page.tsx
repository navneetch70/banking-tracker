// app/@modal/photos/[id]/page.tsx
"use client";

import HStack from "@/app/components/ui/HStack";
import SidebarWrapper from "@/app/components/ui/sidebar-wrapper";
import UpdateComposer from "@/app/components/ui/UpdateComposer";
import VStack from "@/app/components/ui/VStack";
import {
  Avatar,
  AvatarGroup,
  Button,
  Divider,
  EditableHeading,
  EditableText,
  Icon,
  IconButton,
  Tab,
  TabList,
  Text,
} from "@vibe/core";
import { Add, CloseMedium, Email, Feedback, Home, Menu } from "@vibe/icons";
import { useRouter } from "next/navigation";

export default function TaskDetailSidebar({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const close = () => router.back();
  return (
    <SidebarWrapper>
      <VStack
        width="100%"
        height="100%"
        style={{
          background: "#181c34",
          padding: "10px",
          boxShadow: "inset -5px -20px 20px 0 #292f4c",
        }}
      >
        <IconButton
          ariaLabel="Add"
          icon={CloseMedium}
          id="overview-icon-button"
          onClick={function Xs() {}}
        />
        <HStack width="100%">
          <HStack width="100%">
            <EditableText
              ariaLabel="Multiline editable text"
              type="text1"
              weight="normal"
              multiline
              value={`Unexpected "Authorization Token" Screen When Opening Shared Hubstack Link`}
            />
          </HStack>
          <HStack height="100%">
            <AvatarGroup id="multiple-avatars-group" max={2} size="small">
              <Avatar
                id="multiple-avatar-1"
                type="img"
                src={""}
                ariaLabel="Julia Martinez"
              />
            </AvatarGroup>
            <Divider direction="vertical" />
            <IconButton
              ariaLabel="Menu"
              icon={Menu}
              id="overview-icon-button"
              onClick={function Xs() {}}
            />
          </HStack>
        </HStack>
        <HStack width="100%">
          <HStack width="100%" height="100%">
            <Tab
              // icon={Home}
              id="overview-tab-first"
              stretchedUnderline={true}
              active={true}
            >
              <Icon icon={Home} iconSize={"14px"} />
              <Text style={{ fontSize: "12px" }}>Updates</Text>
            </Tab>
            <Divider direction="vertical" />
            <Tab id="overview-tab-second" stretchedUnderline={true}>
              Files
            </Tab>
            <Divider direction="vertical" />
            <Tab id="overview-tab-third" stretchedUnderline={true}>
              Activity Log
            </Tab>
            <Divider direction="vertical" />
            <Tab id="overview-tab-third" stretchedUnderline={true}>
              Info Boxes
            </Tab>
            <Divider direction="vertical" />
            <Tab id="overview-tab-third" stretchedUnderline={true}>
              Item Card
            </Tab>
            <Divider direction="vertical" />
            <Tab icon={Add} stretchedUnderline={true}></Tab>
          </HStack>
        </HStack>
        <HStack width="100%" style={{ marginTop: "-14px" }}>
          <Divider />
        </HStack>
        <HStack>
          <Button
            id="icons-left"
            size="small"
            kind="secondary"
            leftIcon={Email}
            ariaLabel="Open calendar on the left icon button"
          >
            Update via email
          </Button>
          <Divider />
          <Button
            size="small"
            kind="secondary"
            id="icons-left"
            leftIcon={Feedback}
            ariaLabel="Open calendar on the left icon button"
          >
            Give feedback
          </Button>
        </HStack>
        <HStack width="100%">
          <UpdateComposer />
        </HStack>
      </VStack>
    </SidebarWrapper>
  );
}
