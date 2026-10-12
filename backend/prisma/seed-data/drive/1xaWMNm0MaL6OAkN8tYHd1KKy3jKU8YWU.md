# ROOM 1: Daxili Audit Prosesi

**Path:** GRC Fundamentals
**Module:** Audit & Assessment
**Çətinlik:** Medium
**Təxmini vaxt:** 35 dəq

## Room haqqında

İndiyə qədər öyrəndiklərimiz (policy, governance, BIA, risk) bir təşkilatın **nəyi necə etməli olduğunu** müəyyənləşdirir. Amma bir sual həmişə qalır: **bunlar həqiqətən icra olunurmu?** Sənəddə "parollar 12 simvol olmalıdır" yazılması ilə real sistemdə bunun tətbiq olunması eyni şey deyil. Bu boşluğu aşkar edən proses — **Audit**-dir.

Bu room-da daxili audit-in nə olduğunu, xarici audit-dən fərqini və audit prosesinin mərhələlərini öyrənəcəksiniz. Bu, Module-un qalan iki room-u (Control Testing və Hesabat Hazırlama) üçün konseptual əsasdır.

## Öyrənmə nəticələri

- Audit-in Assessment-dən fərqini izah edə bilmək
- Daxili audit-in xarici audit-dən fərqini müəyyən edə bilmək
- Risk-əsaslı audit yanaşmasının məntiqini izah edə bilmək
- Audit lifecycle-ının dörd mərhələsini təsvir edə bilmək
- Real ssenari əsasında sadə bir audit əhatə dairəsi (scope) hazırlaya bilmək

## Task 1 — Audit Nədir və Assessment-dən Nə ilə Fərqlənir?

**Audit** — müəyyən edilmiş meyarlara (policy, standard, qanunvericilik) əsasən, bir sistemin, prosesin və ya nəzarətin **faktiki vəziyyətini** müstəqil və obyektiv şəkildə yoxlayan prosesdir. Audit-in əsas sualı: **"Nə deyildiyi ilə nə edildiyi eynidirmi?"**

Bu, çox vaxt **Assessment** (qiymətləndirmə) ilə qarışdırılır, amma fərq vacibdir:

| | Audit | Assessment |
|---|---|---|
| Məqsəd | Uyğunluğu (compliance) yoxlamaq | Riski/vəziyyəti anlamaq, yaxşılaşdırma tapmaq |
| Ton | Rəsmi, sübuta əsaslanan | Daha çevik, məsləhətçi |
| Nəticə | Uyğun / Uyğun deyil (formal tapıntı) | Tövsiyələr, prioritetləşdirilmiş risklər |
| Müstəqillik | Yüksək (auditor icra prosesindən ayrıdır) | Bəzən eyni komanda öz işini qiymətləndirə bilər |
| Nümunə | "Bu sistemdə MFA aktivdirmi? Sübut göstər" | "Bizim təhlükəsizlik yetkinliyimiz hansı səviyyədədir?" |

Sadə desək: **Assessment "necəyik?" sualına, Audit isə "dediyimizi edirikmi, sübutu var mı?" sualına cavab verir.**

**Daxili Audit (Internal Audit) vs Xarici Audit (External Audit):**

```
DAXİLİ AUDİT                          XARİCİ AUDİT
─────────────                         ────────────
• Təşkilatın öz işçisi/komandası      • Müstəqil, kənar şirkət
  tərəfindən aparılır                   tərəfindən aparılır
• Board/Audit Committee-yə hesabat    • Tənzimləyiciyə, səhmdarlara,
  verir                                 müqavilə tərəfinə hesabat verir
• Tez-tez (rüblük/illik) aparıla      • Adətən illik və ya müqavilə
  bilər                                 tələbinə görə
• Daha geniş əhatə (proseslərin      • Konkret standart/qanunvericiliyə
  effektivliyi də daxil)               uyğunluğa fokuslanır (məs. SOC 2,
                                        ISO 27001, PCI-DSS)
• Məqsəd: problemi əvvəlcədən         • Məqsəd: rəsmi təsdiq/sertifikat
  tapıb düzəltmək                       vermək
```

**Vacib məntiq:** Daxili audit bir növ "məşq oyunu"dur — xarici audit və ya real insidentdən **əvvəl** problemləri tapıb düzəltmək imkanı verir. Yaxşı işləyən təşkilatlarda daxili audit tapıntıları xarici audit tapıntılarından **çox olur**, çünki daxili audit daha tez-tez və daha dərin aparılır — bu, əslində müsbət işarədir, yox əksinə.

**Risk-əsaslı audit yanaşması:** Bir təşkilatda hər şeyi hər il audit etmək mümkün deyil (vaxt və resurs məhduddur). Ona görə audit planı **risk-əsaslı** qurulur — ən yüksək risk daşıyan sahələr daha tez-tez və daha dərin audit olunur, aşağı riskli sahələr isə seyrək yoxlanılır. Bu, "audit universe" (audit ediləcək bütün mümkün sahələrin siyahısı) yaradıb, hər birini risk səviyyəsinə görə prioritetləşdirməklə edilir.

**Sual 1**
Audit ilə Assessment arasındakı əsas fərqi bir cümlə ilə ifadə edin.

**Sual 2**
Daxili audit tapıntılarının çox olması niyə pis əlamət deyil, əksinə yaxşı əlamət ola bilər?

**Sual 3**
Risk-əsaslı audit yanaşması nə üçün lazımdır?

## Task 2 — Audit Lifecycle: Dörd Mərhələ

Hər daxili audit, mövzusundan asılı olmayaraq, eyni dörd mərhələdən keçir:

```
┌───────────┐    ┌───────────┐    ┌───────────┐    ┌───────────┐
│ PLANNING  │───▶│ FIELDWORK │───▶│ REPORTING │───▶│ FOLLOW-UP │
│ (Planlaşd.)│    │ (Sahə işi)│    │ (Hesabat) │    │ (İzləmə)  │
└───────────┘    └───────────┘    └───────────┘    └───────────┘
```

**1. PLANNING (Planlaşdırma)**
Audit-in əhatə dairəsi (scope), məqsədi (objectives) və meyarları (criteria) müəyyən edilir. Bu mərhələdə auditor soruşur: "Nəyi, niyə, hansı standartla müqayisə edərək audit edirik?" Risk qiymətləndirməsi bu mərhələdə aparılır ki, ən vacib sahələrə fokuslanılsın. Nəticə: **Audit Planı** sənədi (scope, timeline, resurslar).

**2. FIELDWORK (Sahə işi)**
Faktiki sübut toplanır — sənəd baxışı, müsahibələr, sistem yoxlaması, nümunə testləri (bu, Room 2-nin mövzusudur). Auditor burada "deyilən" ilə "olan"ı müqayisə edir. Nəticə: **Tapıntılar (Findings)** və toplanmış sübutlar (evidence).

**3. REPORTING (Hesabat)**
Tapıntılar strukturlaşdırılmış formada yazılır, risk səviyyəsinə görə prioritetləşdirilir və tövsiyələr verilir (bu, Room 3-ün mövzusudur). Hesabat idarəetməyə (management) təqdim olunur, onlar cavab (management response) yazır. Nəticə: **Audit Hesabatı**.

**4. FOLLOW-UP (İzləmə)**
Verilmiş tövsiyələrin faktiki icra olunub-olunmadığı yoxlanılır. Bu mərhələ çox vaxt unudulur, amma ən vacib mərhələlərdən biridir — çünki hesabat yazılıb, amma tövsiyə icra olunmasa, audit-in praktiki dəyəri sıfıra enir. Nəticə: **Follow-up Statusu** (Bağlı / Davam edir / Gecikib).

**Diqqət:** Bu dörd mərhələ xətti (linear) görünsə də, real həyatda tsiklikdir — Follow-up mərhələsindəki tapıntılar növbəti ilin Planning mərhələsinə (risk qiymətləndirməsinə) təsir edir.

**Sual 1**
Audit lifecycle-ının dörd mərhələsini sadalayın və hər birinin əsas çıxışını (nəticəsini) yazın.

**Sual 2**
Follow-up mərhələsi niyə "unudulan, amma ən vacib" mərhələ hesab olunur?

**Sual 3**
Planning mərhələsində auditor əsasən hansı üç sualı cavablandırmalıdır?

## Task 3 — Praktiki Tapşırıq: Audit Əhatə Dairəsi (Scope) Hazırlayın

TechNova MMC-nin Audit Committee-si bu il daxili audit planına **"İstifadəçi Giriş İdarəetməsi" (User Access Management)** sahəsini daxil etməyə qərar verib, çünki keçən il bir işdən çıxan işçinin hesabı vaxtında bağlanmayıb və 3 həftə aktiv qalıb.

**Sizin tapşırığınız:** Bu audit üçün Planning mərhələsinin əsas elementlərini (scope, objectives, criteria) hazırlamaqdır.

```
Kontekst:
- TechNova-da 250 işçi var, Active Directory vasitəsilə giriş
  idarə olunur
- Room 3 (Module 2) və Room 3 (Module 4)-də tanış olduğumuz
  TechNova ssenarisi davam edir
- Şirkətin Access Control Standard-ı mövcuddur (parol siyasəti,
  giriş təsdiqi prosesi daxildir)
- Keçmiş insident: işdən çıxan işçinin hesabı 3 həftə aktiv qalıb
```

**Addım 1 — Audit Objective (Məqsəd) yazın** ("Bu audit-in məqsədi nədir?")

**Addım 2 — Scope (Əhatə dairəsi) müəyyən edin** (hansı sistemlər, hansı dövr, kimlər daxildir/xaricdir?)

**Addım 3 — Criteria (Meyar) müəyyən edin** (nəyə qarşı müqayisə edəcəksiniz? — bu, adətən mövcud Standard/Policy-dir)

**Addım 4 — 3 konkret sual yazın** ki, fieldwork mərhələsində auditor bunlara cavab axtarsın

**Kömək üçün nümunə struktur:**

```
AUDIT OBJECTIVE:
İstifadəçi giriş idarəetməsi prosesinin TechNova-nın Access
Control Standard-ına uyğun işlədiyini və işdən çıxan işçilərin
girişinin vaxtında ləğv edildiyini müəyyən etmək.

SCOPE:
- Sistem: Active Directory və ona bağlı əsas biznes sistemləri
- Dövr: son 12 ay (1 il ərzində işdən çıxan bütün işçilər)
- Daxildir: tam ştat və müvəqqəti işçilərin hesabları
- Xaricdir: podratçı hesabları (ayrı audit dairəsində nəzərdən
  keçiriləcək)

CRITERIA:
TechNova Access Control Standard, bölmə 4.2: "İşçi işdən çıxdıqda,
HR departamenti 24 saat ərzində İT-yə bildiriş verməli, İT isə
bildirişdən sonra 4 iş saatı ərzində bütün sistem girişlərini
ləğv etməlidir."

FIELDWORK SUALLARI:
1. Son 12 ayda işdən çıxan bütün işçilərin siyahısı HR-dan
   götürülüb Active Directory ilə tutuşdurulubmu?
2. Hər bir işdən çıxma hadisəsi üçün bildirişdən hesab
   bağlanmasına qədər keçən vaxt Standard-dakı 4 saatlıq
   həddə uyğundurmu?
3. Uyğunsuzluq aşkar olunan hallarda, səbəb (proses boşluğu,
   insan səhvi, sistem problemi) nədir?
```

**Öz-özünə keyfiyyət yoxlaması (Checklist):**

```
☐ Objective konkret və ölçülə bilən şəkildə yazılıb
☐ Scope-da həm "daxildir", həm "xaricdir" hissəsi var
☐ Scope-da vaxt dövrü konkret göstərilib
☐ Criteria konkret bir sənədə/standarta istinad edir (ümumi
  "yaxşı təcrübə" yox)
☐ Fieldwork sualları ölçülə bilən, sübutla cavablana bilən
  formada yazılıb (bəli/xeyr və ya konkret ədəd tələb edən)
```

**Sual 1**
Niyə Scope-da "podratçı hesabları xaricdir" deyə aydın qeyd etmək vacibdir?

**Sual 2**
Criteria bölməsində konkret bir Standard-a istinad etmək niyə vacibdir, ümumi "yaxşı təcrübəyə uyğun olmalıdır" ifadəsi kifayət etmir?

**Sual 3**
Fieldwork sualı "İstifadəçi girişləri düzgün idarə olunurmu?" niyə zəif sualdır (yuxarıdakı nümunə suallarla müqayisədə)?

## Yekun Yoxlama (Summary Quiz)

1. Audit ilə Assessment arasındakı fərqi izah edin.
2. Daxili audit ilə xarici audit-in üç fərqini sadalayın.
3. Audit lifecycle-ının dörd mərhələsini və hər birinin nəticəsini yazın.
4. Risk-əsaslı audit yanaşması nə deməkdir və niyə istifadə olunur?
5. TechNova ssenarisində Criteria kimi hansı sənədə istinad edildi və niyə bu vacibdir?

---
