import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { TeacherWorkspace } from "@/components/teacher/teacher-workspace";
import { apiFetch } from "@/lib/api/server";
import { requireProfile } from "@/lib/api/viewer";
import type { ClassSummary, ClassDetail, PathTreeNode, RoomSummary } from "@/lib/api/types";
import { homePathFor } from "@/lib/auth/home-path";

export const metadata: Metadata = {
  title: "Müəllim paneli",
  robots: { index: false, follow: false },
};

export default async function TeacherPage() {
  const profile = await requireProfile("/teacher");

  if (profile.role !== "TEACHER" || profile.accountStatus !== "ACTIVE") {
    redirect(homePathFor(profile));
  }

  const [classes, paths, rooms] = await Promise.all([
    apiFetch<ClassSummary[]>("/classes"),
    apiFetch<PathTreeNode[]>("/paths"),
    apiFetch<RoomSummary[]>("/rooms"),
  ]);
  const details = await Promise.all(classes.map((item) => apiFetch<ClassDetail>(`/classes/${item.id}`)));

  return (
    <main className="flex-1">
      <TeacherWorkspace profile={profile} classes={classes} details={details} paths={paths} rooms={rooms} />
    </main>
  );
}
