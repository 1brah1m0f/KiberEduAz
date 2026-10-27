"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { toast } from "sonner";
import { BookPlus, Check, Loader2, Plus } from "lucide-react";
import { ProgressiveDisclosure } from "@/components/ui/progressive-disclosure";
import { apiRequest } from "@/lib/api/client";
import { toUserErrorMessage } from "@/lib/errors/user-error";
import type { PathTreeNode, RoomSummary } from "@/lib/api/types";
import { getProgressiveListState } from "@/lib/ui/progressive-list";

function slugify(value: string): string {
  return value
    .toLocaleLowerCase("az")
    .replace(/[əıöüğşçİ]/g, (char) =>
      ({ ə: "e", ı: "i", ö: "o", ü: "u", ğ: "g", ş: "s", ç: "c", İ: "i" })[char] ?? char,
    )
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

export function TeacherContentManager({ initialPaths, initialRooms }: { initialPaths: PathTreeNode[]; initialRooms: RoomSummary[] }) {
  const [paths, setPaths] = useState(initialPaths);
  const [rooms, setRooms] = useState(initialRooms);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [roomsExpanded, setRoomsExpanded] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const modules = useMemo(
    () =>
      paths.flatMap((path) =>
        path.modules.map((module) => ({
          ...module,
          pathTitle: path.title,
          pathId: path.id,
        })),
      ),
    [paths],
  );

  async function refreshPaths() {
    const next = await apiRequest<PathTreeNode[]>("/paths");
    setPaths(next);
  }

  async function refreshRooms() {
    const next = await apiRequest<RoomSummary[]>("/rooms");
    setRooms(next);
  }

  async function createModule(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError(null);
    setMessage(null);

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const pathId = String(form.get("pathId"));
    const title = String(form.get("title")).trim();

    try {
      await apiRequest("/modules", {
        method: "POST",
        body: JSON.stringify({
          pathId,
          title,
          slug: slugify(title) || `modul-${Date.now()}`,
          description: String(form.get("description") ?? ""),
          status: "DRAFT",
        }),
      });
      formElement.reset();
      await refreshPaths();
      setMessage("Modul yaradıldı.");
      toast.success("Modul yaradıldı");
    } catch (cause) {
      const message = toUserErrorMessage(cause, "Modul yaradıla bilmədi");
      setError(message);
      toast.error(message);
    } finally {
      setBusy(false);
    }
  }

  async function createRoom(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError(null);
    setMessage(null);

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const title = String(form.get("title")).trim();
    const moduleId = String(form.get("moduleId"));

    try {
      await apiRequest("/rooms", {
        method: "POST",
        body: JSON.stringify({
          moduleId,
          title,
          slug: slugify(title) || `room-${Date.now()}`,
          shortTitle: title,
          description: String(form.get("description") ?? ""),
          category: String(form.get("category") || "Ümumi"),
          type: String(form.get("type") || "WALKTHROUGH"),
          difficulty: String(form.get("difficulty") || "BEGINNER"),
          durationLabel: String(form.get("durationLabel") || "30 dəq"),
          points: Number(form.get("points") || 100),
          accent: "GREEN",
          objectives: [],
        }),
      });
      formElement.reset();
      await refreshRooms();
      // A new room is an empty shell; the next step is the content editor,
      // which is one click away in the list below.
      setMessage(
        'Room yaradıldı (DRAFT). İndi aşağıdakı siyahıdan "Məzmunu redaktə et" ilə task və sual əlavə et — boş Room dərc oluna bilməz.',
      );
      toast.success("Room yaradıldı", {
        description: "Növbəti addım: məzmunu doldur, sonra admin təsdiqi.",
      });
    } catch (cause) {
      const message = toUserErrorMessage(cause, "Room yaradıla bilmədi");
      setError(message);
      toast.error(message);
    } finally {
      setBusy(false);
    }
  }


  const roomList = getProgressiveListState(rooms.filter((room) => (statusFilter === "ALL" || room.status === statusFilter) && `${room.title} ${room.path} ${room.module}`.toLocaleLowerCase("az").includes(query.toLocaleLowerCase("az"))), roomsExpanded);
  return (
    <section className="space-y-6" aria-labelledby="teacher-content-heading">
      <header>
        <h2 id="teacher-content-heading" className="text-2xl font-semibold text-white">Təlim məzmununu idarə et</h2>
        <p className="mt-2 text-sm text-slate-400">Modul və Room yarat, tapşırıqları hazırla. Room yalnız admin təsdiqindən sonra yayımlanır.</p>
      </header>
      {(error || message) && <p role={error ? "alert" : "status"} className="text-sm text-slate-300">{error ?? message}</p>}
      <div className="grid gap-8 xl:grid-cols-2">
        <Panel title="Modul yarat" icon={<BookPlus className="size-4" />}>
          <form onSubmit={createModule} className="space-y-3">
            <label className="block text-xs text-slate-400">
              Path
              <select name="pathId" required className="panel-input mt-1.5">
                {paths.map((path) => (
                  <option key={path.id} value={path.id}>
                    {path.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-xs text-slate-400">
              Modul adı
              <input name="title" required className="panel-input mt-1.5" placeholder="Linux əsasları" />
            </label>
            <label className="block text-xs text-slate-400">
              Qısa təsvir
              <input name="description" className="panel-input mt-1.5" placeholder="Fayl sistemi və icazələr" />
            </label>
            <button type="submit" disabled={busy || paths.length === 0} className="primary-action">
              {busy ? <Loader2 className="size-4 animate-spin" /> : <Plus className="size-4" />}
              Modul əlavə et
            </button>
          </form>
        </Panel>

        <Panel title="Room yarat" icon={<Plus className="size-4" />}>
          <form onSubmit={createRoom} className="space-y-3">
            <label className="block text-xs text-slate-400">
              Modul
              <select name="moduleId" required className="panel-input mt-1.5">
                {modules.map((module) => (
                  <option key={module.id} value={module.id}>
                    {module.pathTitle} · {module.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-xs text-slate-400">
              Room adı
              <input name="title" required className="panel-input mt-1.5" placeholder="Pentestinqə giriş" />
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label className="block text-xs text-slate-400">
                Tip
                <select name="type" className="panel-input mt-1.5">
                  <option value="WALKTHROUGH">Walkthrough</option>
                  <option value="CHALLENGE">Challenge</option>
                  <option value="ANALYSIS">Analysis</option>
                </select>
              </label>
              <label className="block text-xs text-slate-400">
                Çətinlik
                <select name="difficulty" className="panel-input mt-1.5">
                  <option value="BEGINNER">Başlanğıc</option>
                  <option value="INTERMEDIATE">Orta</option>
                  <option value="ADVANCED">Çətin</option>
                </select>
              </label>
            </div>
            <label className="block text-xs text-slate-400">
              Təsvir
              <input name="description" className="panel-input mt-1.5" />
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label className="block text-xs text-slate-400">
                Müddət
                <input name="durationLabel" className="panel-input mt-1.5" placeholder="45 dəq" />
              </label>
              <label className="block text-xs text-slate-400">
                Xal
                <input name="points" type="number" min={0} defaultValue={100} className="panel-input mt-1.5" />
              </label>
            </div>
            <button type="submit" disabled={busy || modules.length === 0} className="primary-action">
              {busy ? <Loader2 className="size-4 animate-spin" /> : <Plus className="size-4" />}
              Room yarat (admin təsdiqi lazımdır)
            </button>
          </form>
        </Panel>
      </div>

      <Panel title="Mövcud Room-lar" icon={<Check className="size-4" />}>
        <div className="mb-5 flex flex-col gap-3 sm:flex-row">
          <input aria-label="Room axtar" placeholder="Ad, modul və ya istiqamət üzrə axtar…" value={query} onChange={(event) => { setQuery(event.target.value); setRoomsExpanded(false); }} className="panel-input flex-1" />
          <select aria-label="Room statusu" value={statusFilter} onChange={(event) => { setStatusFilter(event.target.value); setRoomsExpanded(false); }} className="panel-input sm:!w-auto"><option value="ALL">Bütün Room-lar ({rooms.length})</option><option value="DRAFT">Təsdiq gözləyənlər</option><option value="PUBLISHED">Yayımlanmış</option><option value="ARCHIVED">Arxiv</option></select>
        </div>
        {rooms.length > 0 && roomList.visibleItems.length === 0 && <p role="status" className="py-4 text-sm text-slate-400">Axtarışa uyğun Room tapılmadı.</p>}
        <div className="divide-y divide-white/[0.06]">
          {rooms.length === 0 && <p className="py-4 text-sm text-slate-500">Hələ Room yoxdur.</p>}
          {roomList.visibleItems.map((room) => (
            <div key={room.id} className="flex flex-wrap items-center justify-between gap-3 py-3">
              <div>
                <p className="text-sm font-semibold text-slate-100">{room.title}</p>
                <p className="text-[11px] text-slate-600">
                  {room.path} · {room.module} · {room.taskCount} task
                </p>
              </div>
              <div className="flex items-center gap-2">
                <StatusPill status={room.status} />
                <Link
                  href={`/teacher/rooms/${room.id}`}
                  className="rounded-lg border border-emerald-300/25 px-2.5 py-1.5 text-xs font-semibold text-emerald-300 transition-colors hover:border-emerald-300/50 hover:bg-emerald-300/[0.07]"
                >
                  Məzmunu redaktə et
                </Link>
                <Link
                  href={`/rooms/${room.slug}`}
                  className="text-xs font-semibold text-slate-400 hover:text-slate-200 hover:underline"
                >
                  Bax
                </Link>
              </div>
            </div>
          ))}
        </div>
        {roomList.canToggle && (
          <ProgressiveDisclosure
            expanded={roomsExpanded}
            hiddenCount={roomList.hiddenCount}
            onToggle={() => setRoomsExpanded((current) => !current)}
          />
        )}
      </Panel>


    </section>
  );
}

function Panel({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-red-300/10 bg-[#1a1d20] p-5 sm:p-6">
      <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-200">
        <span className="grid size-8 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-emerald-300">
          {icon}
        </span>
        {title}
      </div>
      {children}
    </section>
  );
}

function StatusPill({ status }: { status: string }) {
  const map: Record<string, string> = {
    DRAFT: "border-amber-300/25 bg-amber-300/10 text-amber-200",
    PUBLISHED: "border-emerald-300/25 bg-emerald-300/10 text-emerald-200",
    ARCHIVED: "border-white/10 bg-white/[0.04] text-slate-400",
  };

  return (
    <span className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${map[status] ?? map.ARCHIVED}`}>
      {status === "DRAFT" ? "Gözləmədə" : status === "PUBLISHED" ? "Açıq" : status}
    </span>
  );
}
