"use client";

import { useState } from "react";
import {
  Table,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Label,
  Tooltip,
  Text,
} from "@vibe/core";
import { useRouter } from "next/navigation";

type Column = {
  title: string;
  field: keyof RowItem;
  id: string;
};

type RowItem = {
  id: number;
  projectName: string;
  status: "Done" | "Working on it" | "Stuck";
  description: string;
  createdOn: string;
  emailsSent: number;
  owner: string;
  priority: string;
  category: string;
  dueDate: string;
  comments: string;
};

const stickyColumns: Column[] = [
  { title: "Project", field: "projectName", id: "1" },
  { title: "Status", field: "status", id: "2" },
  { title: "Description", field: "description", id: "3" },
  { title: "Created on", field: "createdOn", id: "4" },
  { title: "Emails sent", field: "emailsSent", id: "5" },
  { title: "Owner", field: "owner", id: "6" },
  { title: "Priority", field: "priority", id: "7" },
  { title: "Category", field: "category", id: "8" },
  { title: "Due date", field: "dueDate", id: "9" },
  { title: "Comments", field: "comments", id: "10" },
];

const initialTableData: RowItem[] = [
  {
    id: 1,
    projectName: "Landing Page Revamp",
    status: "Working on it",
    description: "Update hero section",
    createdOn: "2025-11-20",
    emailsSent: 12,
    owner: "Navneet",
    priority: "High",
    category: "Design",
    dueDate: "2025-12-05",
    comments: "Need new assets",
  },
  {
    id: 2,
    projectName: "Onboarding Flow",
    status: "Done",
    description: "Improve conversion",
    createdOn: "2025-11-10",
    emailsSent: 5,
    owner: "Arnav",
    priority: "Medium",
    category: "Product",
    dueDate: "2025-11-30",
    comments: "A/B test finished",
  },
  {
    id: 3,
    projectName: "Onboarding Flow",
    status: "Done",
    description: "Improve conversion",
    createdOn: "2025-11-10",
    emailsSent: 5,
    owner: "Arnav",
    priority: "Medium",
    category: "Product",
    dueDate: "2025-11-30",
    comments: "A/B test finished",
  },
  {
    id: 4,
    projectName: "Onboarding Flow",
    status: "Done",
    description: "Improve conversion",
    createdOn: "2025-11-10",
    emailsSent: 5,
    owner: "Arnav",
    priority: "Medium",
    category: "Product",
    dueDate: "2025-11-30",
    comments: "A/B test finished",
  },
  {
    id: 5,
    projectName: "Onboarding Flow",
    status: "Done",
    description: "Improve conversion",
    createdOn: "2025-11-10",
    emailsSent: 5,
    owner: "Arnav",
    priority: "Medium",
    category: "Product",
    dueDate: "2025-11-30",
    comments: "A/B test finished",
  },
  {
    id: 6,
    projectName: "Onboarding Flow",
    status: "Done",
    description: "Improve conversion",
    createdOn: "2025-11-10",
    emailsSent: 5,
    owner: "Arnav",
    priority: "Medium",
    category: "Product",
    dueDate: "2025-11-30",
    comments: "A/B test finished",
  },
  {
    id: 7,
    projectName: "Onboarding Flow",
    status: "Done",
    description: "Improve conversion",
    createdOn: "2025-11-10",
    emailsSent: 5,
    owner: "Arnav",
    priority: "Medium",
    category: "Product",
    dueDate: "2025-11-30",
    comments: "A/B test finished",
  },
];

const statusColumnToLabelColor: Record<RowItem["status"], any> = {
  "Working on it": "positive",
  Done: "primary",
  Stuck: "negative",
};

const allStatuses: RowItem["status"][] = ["Working on it", "Done", "Stuck"];

export default function StickyTable({ isOpen }: { isOpen?: boolean }) {
  const [rows, setRows] = useState<RowItem[]>(initialTableData);

  const handleChangeStatus = (rowId: number, newStatus: RowItem["status"]) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === rowId ? { ...row, status: newStatus } : row
      )
    );
  };

  const router = useRouter();

  return (
    <Table
      errorState={<h1 style={{ textAlign: "center" }}>Error State</h1>}
      emptyState={<h1 style={{ textAlign: "center" }}>Empty State</h1>}
      columns={stickyColumns}
    >
      <TableHeader>
        {stickyColumns.map((headerCell, index) => (
          <TableHeaderCell
            sticky={index === 0}
            key={index}
            title={headerCell.title}
          />
        ))}
      </TableHeader>

      <TableBody>
        {rows.map((rowItem) => (
          <TableRow key={rowItem.id} className="clickable-row">
            <TableCell sticky>
              <div
                onClick={() => router.push(`/home/${rowItem.id}`)}
                style={{ cursor: "pointer" }}
              >
                <Text>{rowItem.projectName}</Text>
              </div>
            </TableCell>

            {/* STATUS CELL WITH TOOLTIP */}
            <TableCell className="tooltip-table-cell">
              <Tooltip
                key={`tooltip-${rowItem.id}-${isOpen}`}
                content={
                  <div
                    style={{
                      display: "flex-wrap",
                      flexDirection: "column",
                      gap: 4,
                      padding: 3,
                    }}
                  >
                    {allStatuses.map((status) => (
                      <div
                        key={status}
                        onClick={(e) => {
                          e.stopPropagation(); // don't trigger row click
                          handleChangeStatus(rowItem.id, status);
                        }}
                        style={{
                          padding: "4px 6px",
                          borderRadius: 6,
                          cursor: "pointer",
                          background:
                            rowItem.status === status
                              ? "rgba(255,255,255,0.08)"
                              : "transparent",
                          display: "inline-flex",
                        }}
                      >
                        <Label
                          text={status}
                          color={statusColumnToLabelColor[status]}
                        />
                      </div>
                    ))}
                  </div>
                }
              >
                {/* trigger: current status label */}
                <div
                  style={{
                    display: "inline-flex",
                    cursor: "pointer",
                  }}
                  onClick={(e) => e.stopPropagation()} // open tooltip only, no row nav
                >
                  <Label
                    text={rowItem.status}
                    color={statusColumnToLabelColor[rowItem.status]}
                  />
                </div>
              </Tooltip>
            </TableCell>

            <TableCell>{rowItem.description}</TableCell>
            <TableCell>{rowItem.createdOn}</TableCell>
            <TableCell>{rowItem.emailsSent}</TableCell>
            <TableCell>{rowItem.owner}</TableCell>
            <TableCell>{rowItem.priority}</TableCell>
            <TableCell>{rowItem.category}</TableCell>
            <TableCell>{rowItem.dueDate}</TableCell>
            <TableCell>{rowItem.comments}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
