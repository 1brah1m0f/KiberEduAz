import type { LocalQuestion } from "./types";

export function checkLocalChoice(question: LocalQuestion, selection: number | undefined): "missing" | "wrong" | "correct" {
  if (!question.options?.length || selection === undefined || !Number.isInteger(selection) || selection < 0 || selection >= question.options.length) return "missing";
  return selection === question.correctIndex ? "correct" : "wrong";
}
