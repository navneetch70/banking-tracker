"use client";

import Layout from "../../components/ui/layout";
import WorkspaceContent from "../../components/ui/WorkspaceContent";
import TaskDetailSidebar from "../../@modal/(.)home/[id]/page";

export default function TaskPage({ params }: { params: { id: string } }) {
  return (
    <Layout>
      <WorkspaceContent />
      <TaskDetailSidebar params={params} />
    </Layout>
  );
}
