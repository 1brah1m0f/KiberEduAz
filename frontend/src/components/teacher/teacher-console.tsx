"use client";

import { FormEvent, useState } from "react";
import { toast } from "sonner";
import {
  Activity,
  GraduationCap,
  Loader2,
  Plus,
  Radar,
  Trash2,
  Users,
} from "lucide-react";
import { CyberHeroShell } from "@/components/hero/cyber-hero-shell";
import { ProgressiveDisclosure } from "@/components/ui/progressive-disclosure";
import { apiRequest } from "@/lib/api/client";
import { toUserErrorMessage } from "@/lib/errors/user-error";
import type {
  ClassDetail,
  ClassSummary,
  MyProfile,
} from "@/lib/api/types";
import { getProgressiveListState } from "@/lib/ui/progressive-list";

type Props = {
  profile: MyProfile;
  initialDetails: ClassDetail[];
  initialClasses: ClassSummary[];
};

export function TeacherConsole({ profile, initialDetails, initialClasses }: Props) {
  const [details, setDetails] = useState(initialDetails);
  const [classes, setClasses] = useState(initialClasses);
  const [activeClassId, setActiveClassId] = useState(initialClasses[0]?.id ?? "");
  const [classDetail, setClassDetail] = useState<ClassDetail | null>(initialDetails[0] ?? null);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [loadingClassId, setLoadingClassId] = useState<string | null>(null);
  const [classesExpanded, setClassesExpanded] = useState(false);
  const [studentsExpanded, setStudentsExpanded] = useState(false);

  async function refreshClasses() {
    const next = await apiRequest<ClassSummary[]>("/classes");
    setClasses(next);
  }

  async function loadClass(id: string): Promise<boolean> {
    if (!id) return false;
    setActiveClassId(id);
    setStudentsExpanded(false);
    setLoadingClassId(id);
    setError(null);

    try {
      const detail = await apiRequest<ClassDetail>(`/classes/${id}`);
      setClassDetail(detail);
      setDetails((current) => [...current.filter((item) => item.id !== detail.id), detail]);
      return true;
    } catch (cause) {
      const message = toUserErrorMessage(cause, "Sinif məlumatları yüklənə bilmədi");
      setClassDetail(null);
      setError(message);
      toast.error(message);
      return false;
    } finally {
      setLoadingClassId(null);
    }
  }

  async function createClass(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError(null);
    setMessage(null);

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    try {
      const created = await apiRequest<ClassSummary>("/classes", {
        method: "POST",
        body: JSON.stringify({
          name: String(form.get("name")).trim(),
          academicYear: String(form.get("academicYear") || "") || undefined,
        }),
      });
      formElement.reset();
      await refreshClasses();
      const classLoaded = await loadClass(created.id);
      setMessage(
        classLoaded
          ? "Sinif yaradıldı."
          : "Sinif yaradıldı, amma məlumatları indi göstərmək mümkün olmadı.",
      );
      toast.success("Sinif yaradıldı", {
        description: classLoaded ? undefined : "Məlumatları indi göstərmək mümkün olmadı.",
      });
    } catch (cause) {
      const message = toUserErrorMessage(cause, "Sinif yaradıla bilmədi");
      setError(message);
      toast.error(message);
    } finally {
      setBusy(false);
    }
  }

  async function addStudent(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!activeClassId) return;

    setBusy(true);
    setError(null);
    setMessage(null);

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    try {
      const detail = await apiRequest<ClassDetail>(`/classes/${activeClassId}/members`, {
        method: "POST",
        body: JSON.stringify({ email: String(form.get("email")).trim() }),
      });
      formElement.reset();
      setClassDetail(detail);
      setDetails((current) => [...current.filter((item) => item.id !== detail.id), detail]);
      await refreshClasses();
      setMessage("Şagird sinfə əlavə olundu.");
      toast.success("Şagird sinfə əlavə olundu");
    } catch (cause) {
      const message = toUserErrorMessage(cause, "Şagird sinfə əlavə edilə bilmədi");
      setError(message);
      toast.error(message);
    } finally {
      setBusy(false);
    }
  }

  async function removeStudent(profileId: string) {
    if (!activeClassId) return;
    setBusy(true);
    setError(null);
    setMessage(null);

    try {
      const detail = await apiRequest<ClassDetail>(
        `/classes/${activeClassId}/members/${profileId}`,
        { method: "DELETE" },
      );
      setClassDetail(detail);
      setDetails((current) => [...current.filter((item) => item.id !== detail.id), detail]);
      await refreshClasses();
      setMessage("Şagird sinifdən silindi.");
      toast.success("Şagird sinifdən silindi");
    } catch (cause) {
      const message = toUserErrorMessage(cause, "Şagird sinifdən silinə bilmədi");
      setError(message);
      toast.error(message);
    } finally {
      setBusy(false);
    }
  }

  const classList = getProgressiveListState(classes, classesExpanded);
  const students = [...(classDetail?.students ?? [])].sort(
    (a, b) => (b.stats?.totalPoints ?? 0) - (a.stats?.totalPoints ?? 0) || a.id.localeCompare(b.id),
  );
  const studentList = getProgressiveListState(students, studentsExpanded);
  const allStudents = [...new Map(details.flatMap((item) => item.students).map((student) => [student.id, student])).values()];
  const activeStudents = allStudents.filter((student) => (student.stats?.roomsCompleted ?? 0) > 0).length;
  const selectedPoints = students.reduce((sum, student) => sum + (student.stats?.totalPoints ?? 0), 0);

  return (
    <div className="space-y-10 pb-10">
      <CyberHeroShell ariaLabelledby="teacher-hero-heading">
        <div className="mx-auto grid min-h-[inherit] max-w-[1440px] gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10 lg:py-20">
          <header className="max-w-2xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-black/35 px-3 py-1.5 text-[11px] font-semibold text-emerald-100 backdrop-blur-md">
              <Radar className="size-3.5" aria-hidden="true" /> Müəllim idarəetmə mərkəzi
            </p>
            <h1
              id="teacher-hero-heading"
              className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.055em] text-white drop-shadow-[0_8px_28px_rgba(0,0,0,.45)] sm:text-5xl lg:text-[60px]"
            >
              Salam,
              <br />
              <span className="text-gradient">{profile.fullName ?? profile.email}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Siniflərinin cari vəziyyətini izlə, şagirdlərin irəliləyişini müqayisə et və sinif sıralamasına bax.
            </p>
          </header>

          <div className="cyber-hero-panel p-5 sm:p-6">
            <div className="relative flex items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
              <div>
                <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-300">
                  <Activity className="size-3.5" aria-hidden="true" /> Tədris göstəriciləri
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white">Sinif əməliyyatları</h2>
              </div>
              <span className="grid size-11 place-items-center rounded-2xl border border-red-300/20 bg-red-300/[0.08] text-red-200">
                <GraduationCap className="size-5" aria-hidden="true" />
              </span>
            </div>
            <div className="relative mt-5 grid gap-3 sm:grid-cols-3">
              <Stat label="Siniflər" value={classes.length} />
              <Stat label="Şagirdlər" value={allStudents.length} />
              <Stat label="Otaq bitirən şagirdlər" value={activeStudents} />
            </div>
            <p className="relative mt-5 flex items-center gap-2 border-t border-white/[0.08] pt-4 text-[11px] text-slate-500">
              <i className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.9)]" />
              Məlumatlar hesabınızla sinxronlaşdırılır
            </p>
          </div>
        </div>
      </CyberHeroShell>

      <div className="mx-auto max-w-[1440px] space-y-10 px-4 sm:px-6 lg:px-10">

      {(message || error) && (
        <p
          className={`rounded-xl border px-4 py-3 text-sm ${
            error
              ? "border-rose-300/20 bg-rose-300/[0.07] text-rose-100"
              : "border-emerald-300/20 bg-emerald-300/[0.07] text-emerald-100"
          }`}
          role="status"
        >
          {error ?? message}
        </p>
      )}

      <div className="grid gap-8 xl:grid-cols-[340px_minmax(0,1fr)]">
        <Panel title="Siniflər" icon={<Users className="size-4" />}>
          <form onSubmit={createClass} className="mb-4 space-y-3 border-b border-white/[0.06] pb-4">
            <input aria-label="Sinif adı" name="name" required placeholder="11A · Kiber klub" className="panel-input" />
            <input aria-label="Tədris ili" name="academicYear" placeholder="2026/2027" className="panel-input" />
            <button type="submit" disabled={busy} className="secondary-action w-full justify-center">
              <Plus className="size-4" /> Sinif yarat
            </button>
          </form>
          <div className="space-y-1">
            {classList.visibleItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => void loadClass(item.id)}
                disabled={loadingClassId !== null}
                className={`flex w-full items-center justify-between rounded-xl border px-3 py-2.5 text-left text-sm ${
                  activeClassId === item.id
                    ? "border-emerald-300/25 bg-emerald-300/[0.07] text-emerald-100"
                    : "border-transparent text-slate-400 hover:bg-white/[0.03]"
                }`}
              >
                <span><span className="block font-semibold">{item.name}</span><span className="mt-1 block text-xs text-slate-500">{item._count.memberships} şagird · {item.academicYear ?? "Tədris ili qeyd edilməyib"}</span><span className="mt-1 block text-xs text-slate-400">{details.find((detail) => detail.id === item.id)?.students.reduce((sum, student) => sum + (student.stats?.roomsCompleted ?? 0), 0) ?? 0} tamamlanmış otaq</span></span>
                <span className="font-mono text-[10px]">
                  {loadingClassId === item.id ? (
                    <Loader2 className="size-3.5 animate-spin" aria-label="Sinif yüklənir" />
                  ) : (
                    item._count.memberships
                  )}
                </span>
              </button>
            ))}
          </div>
          {classList.canToggle && (
            <ProgressiveDisclosure
              expanded={classesExpanded}
              hiddenCount={classList.hiddenCount}
              onToggle={() => setClassesExpanded((current) => !current)}
              className="w-full"
            />
          )}
        </Panel>

        <Panel title={classDetail ? `${classDetail.name} · Şagird sıralaması` : "Sinifin cari vəziyyəti"} icon={<Users className="size-4" />}>
          {!activeClassId ? (
            <p className="text-sm text-slate-500">Əvvəlcə sinif yarat və ya seç.</p>
          ) : (
            <>
              <p className="mb-4 text-sm text-slate-400">{students.length} şagird · {selectedPoints.toLocaleString("az-AZ")} ümumi XP · Sıralama XP-yə görədir; bərabər XP eyni yeri tutur.</p>
              <button type="button" disabled={loadingClassId !== null} onClick={() => void loadClass(activeClassId)} className="secondary-action mb-4">{loadingClassId ? "Yüklənir…" : "Vəziyyəti yenilə"}</button>
              <form onSubmit={addStudent} className="mb-5 flex flex-col gap-3 sm:flex-row">
                <input
                  aria-label="Şagirdin e-poçtu"
                  name="email"
                  type="email"
                  required
                  placeholder="sagird@mekteb.edu.az"
                  className="panel-input flex-1"
                />
                <button type="submit" disabled={busy || loadingClassId !== null} className="primary-action shrink-0">
                  Əlavə et
                </button>
              </form>
              <div className="divide-y divide-white/[0.06]">
                {loadingClassId && <p role="status" className="py-3 text-sm text-slate-400">Sinif məlumatları yüklənir…</p>}
                {!loadingClassId && students.length === 0 && (
                  <p className="py-3 text-sm text-slate-500">
                    Sinif boşdur. Artıq qeydiyyatdan keçmiş şagirdin emailini yaz.
                  </p>
                )}
                {!loadingClassId && studentList.visibleItems.map((student) => (
                  <div key={student.id} className="flex items-center justify-between gap-3 py-3">
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-emerald-300">#{1 + students.filter((other) => (other.stats?.totalPoints ?? 0) > (student.stats?.totalPoints ?? 0)).length}</p>
                      <p className="break-words text-sm font-semibold text-slate-100">
                        {student.fullName ?? student.email}
                      </p>
                      <p className="break-all text-[11px] text-slate-600">{student.email}</p>
                      <p className="mt-1 text-xs text-slate-400">{(student.stats?.totalPoints ?? 0).toLocaleString("az-AZ")} XP · {student.stats?.roomsCompleted ?? 0} tamamlanmış otaq</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => void removeStudent(student.id)}
                      className="grid size-9 place-items-center rounded-lg border border-white/[0.08] text-slate-500 hover:border-rose-300/30 hover:text-rose-300"
                      disabled={busy}
                      aria-label={`${student.fullName ?? student.email} — sinifdən sil`}
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                ))}
              </div>
              {studentList.canToggle && (
                <ProgressiveDisclosure
                  expanded={studentsExpanded}
                  hiddenCount={studentList.hiddenCount}
                  onToggle={() => setStudentsExpanded((current) => !current)}
                />
              )}
            </>
          )}
        </Panel>
      </div>
      </div>
    </div>
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

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <article className="teacher-hero-stat">
      <p className="text-[11px] leading-4 text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{String(value).padStart(2, "0")}</p>
    </article>
  );
}
