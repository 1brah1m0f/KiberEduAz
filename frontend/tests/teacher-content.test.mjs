import assert from "node:assert/strict";
import { test } from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { TeacherContentManager } from "../src/components/teacher/teacher-content-manager.tsx";

test("teachers retain content creation and editing with visible admin approval status", () => {
  const html = renderToStaticMarkup(createElement(TeacherContentManager, {
    initialPaths: [{ id: "path", title: "Blue Team", modules: [{ id: "module", title: "SOC" }] }],
    initialRooms: [
      { id: "draft", slug: "draft-room", title: "Yeni otaq", path: "Blue Team", module: "SOC", status: "DRAFT", taskCount: 2 },
      { id: "published", slug: "published-room", title: "Təsdiqlənmiş otaq", path: "Blue Team", module: "SOC", status: "PUBLISHED", taskCount: 3 },
    ],
  }));
  assert.match(html, /Modul əlavə et/);
  assert.match(html, /Room yarat \(admin təsdiqi lazımdır\)/);
  assert.match(html, /yalnız admin təsdiqindən sonra yayımlanır/);
  assert.match(html, /Gözləmədə/);
  assert.match(html, /Açıq/);
  assert.match(html, /href="\/teacher\/rooms\/draft"/);
  assert.match(html, /href="\/teacher\/rooms\/published"/);
});

test("teachers see a meaningful empty room state", () => {
  const html = renderToStaticMarkup(createElement(TeacherContentManager, { initialPaths: [], initialRooms: [] }));
  assert.match(html, /Hələ Room yoxdur/);
});
