"use client";

import { useState } from "react";
import { BookOpen, Users } from "lucide-react";
import { TeacherConsole } from "./teacher-console";
import { TeacherContentManager } from "./teacher-content-manager";
import type { MyProfile, ClassSummary, ClassDetail, PathTreeNode, RoomSummary } from "@/lib/api/types";

export function TeacherWorkspace({ profile, classes, details, paths, rooms }: {
  profile: MyProfile; classes: ClassSummary[]; details: ClassDetail[]; paths: PathTreeNode[]; rooms: RoomSummary[];
}) {
  const [tab, setTab] = useState<"classes" | "content">("classes");
  return <>
    <nav aria-label="Müəllim iş sahəsi" className="mx-auto flex max-w-[1440px] flex-wrap gap-3 px-4 py-5 sm:px-6 lg:px-10">
      <button type="button" aria-pressed={tab === "classes"} onClick={() => setTab("classes")} className={tab === "classes" ? "primary-action" : "secondary-action"}><Users className="size-4" /> Siniflərim ({classes.length})</button>
      <button type="button" aria-pressed={tab === "content"} onClick={() => setTab("content")} className={tab === "content" ? "primary-action" : "secondary-action"}><BookOpen className="size-4" /> Room və modul idarəçiliyi</button>
    </nav>
    <div hidden={tab !== "classes"}><TeacherConsole profile={profile} initialDetails={details} initialClasses={classes} /></div>
    <div hidden={tab !== "content"} className="mx-auto max-w-[1440px] px-4 pb-10 sm:px-6 lg:px-10"><TeacherContentManager initialPaths={paths} initialRooms={rooms} /></div>
  </>;
}
