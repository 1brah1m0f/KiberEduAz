import content from "@/data/lessons.az.json";
import type { LocalQuestion, LocalRoomDetail } from "./types";

type LessonContent = { title: string; markdown: string; questions: LocalQuestion[] };
const lessons: Record<string, LessonContent> = content;

export function localizeRoomLessons(room: LocalRoomDetail): LocalRoomDetail {
  return { ...room, tasks: room.tasks.map((task) => {
    const lesson = lessons[task.id];
    return lesson ? { ...task, ...lesson } : task;
  }) };
}

