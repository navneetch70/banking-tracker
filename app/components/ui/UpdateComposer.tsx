"use client";

import { useState } from "react";
import {
  Clickable,
  Text,
  TextArea,
  Button,
  IconButton,
  Divider,
  SplitButton,
} from "@vibe/core";
import HStack from "./HStack";
import VStack from "./VStack";
import {
  AlignRight,
  Attach,
  Bold,
  Bullets,
  Completed,
  Edit,
  Emoji,
  Gif,
  Italic,
  Link,
  Mention,
  MinusSmall,
  Numbers,
  Switch,
  Table,
  TextFormatting,
  Underline,
} from "@vibe/icons";

interface UpdateComposerProps {
  onSubmit?: (value: string) => void;
}

export default function UpdateComposer({ onSubmit }: UpdateComposerProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onSubmit?.(trimmed);
    setValue("");
    setIsExpanded(false);
  };

  const commonContainerStyle: React.CSSProperties = {
    borderRadius: 8,
    border: "1px solid var(--ui-border-color)",
    backgroundColor: "var(--primary-background-color)",
    gap: "0",
  };

  return (
    <div style={{ width: "100%" }}>
      {isExpanded ? (
        <VStack style={commonContainerStyle}>
          {/* Top toolbar */}
          <HStack style={{ padding: 4 }}>
            <HStack gap="4px">
              <IconButton
                ariaLabel="Bold"
                icon={Bold}
                kind="tertiary"
                size="xs"
              />
              <IconButton
                ariaLabel="Italic"
                icon={Italic}
                kind="tertiary"
                size="xs"
              />
              <IconButton
                ariaLabel="Underline"
                icon={Underline}
                kind="tertiary"
                size="xs"
              />
              <IconButton
                ariaLabel="Link"
                icon={TextFormatting}
                kind="tertiary"
                size="xs"
              />
              <IconButton
                ariaLabel="Numbered list"
                icon={Numbers}
                kind="tertiary"
                size="xs"
              />
              <IconButton
                ariaLabel="Numbered list"
                icon={Bullets}
                kind="tertiary"
                size="xs"
              />
              <IconButton
                ariaLabel="Numbered list"
                icon={Table}
                kind="tertiary"
                size="xs"
              />
              <IconButton
                ariaLabel="Numbered list"
                icon={Link}
                kind="tertiary"
                size="xs"
              />
              <IconButton
                ariaLabel="Numbered list"
                icon={AlignRight}
                kind="tertiary"
                size="xs"
              />
              <IconButton
                ariaLabel="Numbered list"
                icon={MinusSmall}
                kind="tertiary"
                size="xs"
              />
              <IconButton
                ariaLabel="Numbered list"
                icon={Switch}
                kind="tertiary"
                size="xs"
              />
              <IconButton
                ariaLabel="Numbered list"
                icon={Completed}
                kind="tertiary"
                size="xs"
              />
            </HStack>
          </HStack>

          <Divider withoutMargin />

          {/* Text area */}
          <HStack width="100%">
            <TextArea
              placeholder="Write an update and mention others with @"
              value={value}
              onChange={(e: any) => setValue(e.target.value)}
              style={{
                border: "none",
                outline: "none",
                boxShadow: "none",
                background: "transparent",
              }}
            />
          </HStack>

          <Divider withoutMargin />

          {/* Bottom icons + button */}
          <HStack
            width="100%"
            style={{ justifyContent: "space-between", padding: 4 }}
          >
            <HStack gap="4px">
              <IconButton
                ariaLabel="Mention"
                icon={Mention}
                kind="tertiary"
                size="xs"
              />
              <IconButton
                ariaLabel="Mention"
                icon={Attach}
                kind="tertiary"
                size="xs"
              />
              <IconButton
                ariaLabel="GIF"
                icon={Gif}
                kind="tertiary"
                size="xs"
              />
              <IconButton
                ariaLabel="Emoji"
                icon={Emoji}
                kind="tertiary"
                size="xs"
              />
              <IconButton
                ariaLabel="More"
                icon={Edit}
                kind="tertiary"
                size="xs"
              />
            </HStack>

            <SplitButton
              ariaLabel="Overview split button"
              id="overview-split-button"
              onClick={function Xs() {}}
              onSecondaryDialogDidHide={function Xs() {}}
              onSecondaryDialogDidShow={function Xs() {}}
              size="xs"
            >
              Update
            </SplitButton>
          </HStack>
        </VStack>
      ) : (
        // Collapsed state – looks like the xs “Write an update…” row
        <Clickable
          onClick={() => setIsExpanded(true)}
          style={{
            ...commonContainerStyle,
            padding: "10px 12px",
            cursor: "text",
          }}
        >
          <VStack justify="space-between">
            <Text>Write an update and mention others with @</Text>

            <HStack gap="4px">
              <IconButton
                ariaLabel="Mention"
                icon={Mention}
                kind="tertiary"
                size="xs"
              />
              <IconButton
                ariaLabel="Mention"
                icon={Attach}
                kind="tertiary"
                size="xs"
              />
              <IconButton
                ariaLabel="GIF"
                icon={Gif}
                kind="tertiary"
                size="xs"
              />
              <IconButton
                ariaLabel="Emoji"
                icon={Emoji}
                kind="tertiary"
                size="xs"
              />
              <IconButton
                ariaLabel="More"
                icon={Edit}
                kind="tertiary"
                size="xs"
              />
            </HStack>
          </VStack>
        </Clickable>
      )}
    </div>
  );
}
