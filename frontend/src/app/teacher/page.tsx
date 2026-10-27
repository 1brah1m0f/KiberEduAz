import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { TeacherContentManager } from "@/components/teacher/teacher-content-manager";
import { TeacherConsole } from "@/components/teacher/teacher-console";
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
      <TeacherConsole
        profile={profile}
        initialDetails={details}
        initialClasses={classes}
      />
      <div className="mx-auto max-w-[1440px] px-4 pb-10 sm:px-6 lg:px-10">
        <TeacherContentManager initialPaths={paths} initialRooms={rooms} />
      </div>
    </main>
  );
}
