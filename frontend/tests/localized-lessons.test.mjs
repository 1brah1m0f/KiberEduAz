import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { LOCAL_ROOM_CATALOG } from "../src/lib/content/catalog.ts";
import { parseLocalMarkdown } from "../src/lib/content/markdown-parser.ts";
import { localizeRoomLessons } from "../src/lib/content/localized-lessons.ts";
import { checkLocalChoice } from "../src/lib/content/local-choice.ts";

for (const definition of LOCAL_ROOM_CATALOG) {
  test(`${definition.slug}: every task has Azerbaijani content and valid answer choices`, async () => {
    const source = await readFile(new URL(`../src/data/${definition.sourceFile}`, import.meta.url), "utf8");
    const original = parseLocalMarkdown(definition, source);
    const room = localizeRoomLessons(original);
    assert.deepEqual(room.tasks.map(t => t.id), original.tasks.map(t => t.id));
    for (const [index, task] of room.tasks.entries()) {
      assert.match(task.markdown, /[əƏıİğĞşŞçÇöÖüÜ]/);
      assert.doesNotMatch(task.markdown, /^## (Table of Contents|Introduction|Review Questions|Common Mistakes)$/m);
      assert.ok(task.markdown.length > 300);
      const choices = task.questions.filter(q => q.options?.length);
      assert.ok(choices.length >= 1, task.id);
      for (const q of choices) {
        assert.equal(q.options.length, 4);
        assert.equal(new Set(q.options).size, 4);
        assert.ok(q.correctIndex >= 0 && q.correctIndex < 4);
        assert.ok(q.explanation.length > 20);
      }
      const codeBlocks = [...original.tasks[index].markdown.matchAll(/```[\s\S]*?```/g)].map(m => m[0]);
      for (const code of codeBlocks) assert.ok(task.markdown.includes(code), `${task.id}: preserve commands and code examples`);
    }
  });
}

test("multiple-choice validation rejects missing, invalid and wrong choices", () => {
  const q = { id: "q", prompt: "Sual", format: null, points: 10, options: ["A", "B", "C", "D"], correctIndex: 2 };
  assert.equal(checkLocalChoice(q, undefined), "missing");
  assert.equal(checkLocalChoice(q, -1), "missing");
  assert.equal(checkLocalChoice(q, 4), "missing");
  assert.equal(checkLocalChoice(q, 0.5), "missing");
  assert.equal(checkLocalChoice(q, 0), "wrong");
  assert.equal(checkLocalChoice(q, 2), "correct");
});
