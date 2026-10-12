# ROOM 3: Audit Hesabatı Hazırlamaq (Şablon)

**Path:** GRC Fundamentals
**Module:** Audit & Assessment
**Çətinlik:** Hard
**Təxmini vaxt:** 50 dəq (praktiki — şablon)

## Room haqqında

Room 1-də audit lifecycle-ını, Room 2-də isə Fieldwork mərhələsində sübut toplamağı öyrəndik — hətta TechNova-nın giriş idarəetməsi nəzarətini test edib bir tapıntı (finding) aşkar etdik: 10 hadisədən 2-si 4 saatlıq criteria-nı pozub, səbəb isə həftəsonu/tətil günlərinin sistemdə düzgün hesablanmaması idi.

İndi bu tapıntını **Reporting** mərhələsinə köçürmək vaxtıdır. Yaxşı toplanmış sübut, zəif yazılmış hesabatla öz dəyərini itirə bilər — idarəetmə (management) tapıntını başa düşməzsə və ya ciddiyə almazsa, heç bir dəyişiklik baş verməyəcək. Bu room-da bir audit hesabatının strukturunu və konkret bir "finding"-i necə yazmağı öyrənəcəksiniz.

## Öyrənmə nəticələri

- Bir Audit Hesabatının standart strukturunu tanımaq
- "5 C" modelini (Condition, Criteria, Cause, Effect, Recommendation) tətbiq edərək tapıntı yaza bilmək
- Risk səviyyəsi (High/Medium/Low) təyin etmə məntiqini başa düşmək
- Management Response konsepsiyasını izah edə bilmək
- Room 2-dəki test nəticələrinə əsaslanaraq tam bir audit finding yazmaq

## Task 1 — Audit Hesabatının Strukturu

Bir Audit Hesabatı, ölçüsündən asılı olmayaraq, aşağıdakı standart bölmələrdən ibarətdir:

```
┌────────────────────────────────────────────────────────────┐
│ 1. EXECUTIVE SUMMARY (İcraçı Xülasə)                          │
│    Bir səhifədə: nə audit olundu, əsas nəticə nədir?          │
├────────────────────────────────────────────────────────────┤
│ 2. BACKGROUND & OBJECTIVES (Kontekst və Məqsəd)                │
│    Niyə bu audit aparıldı, hansı sual cavablandırılır?         │
├────────────────────────────────────────────────────────────┤
│ 3. SCOPE & METHODOLOGY (Əhatə dairəsi və Metodologiya)         │
│    Nə yoxlanıldı, hansı üsullarla (Room 2-dəki test üsulları)  │
├────────────────────────────────────────────────────────────┤
│ 4. FINDINGS (Tapıntılar)                                       │
│    Hər tapıntı: Condition, Criteria, Cause, Effect,             │
│    Recommendation + Risk Rating                                 │
├────────────────────────────────────────────────────────────┤
│ 5. MANAGEMENT RESPONSE (İdarəetmənin Cavabı)                   │
│    Menecerlərin tapıntıya cavabı, düzəliş planı, tarix          │
├────────────────────────────────────────────────────────────┤
│ 6. OVERALL CONCLUSION (Ümumi Nəticə)                            │
│    Nəzarət mühiti ümumilikdə necə qiymətləndirilir?             │
└────────────────────────────────────────────────────────────┘
```

**Executive Summary** — Board və üst rəhbərlik çox vaxt yalnız bu hissəni oxuyur. Ona görə bir paraqrafda ən vacib nəticə (məsələn, "1 Yüksək, 2 Orta risk tapıntısı aşkar olundu") aydın yazılmalıdır. Texniki detala getmək lazım deyil.

**Background & Objectives** — Room 1-dəki Planning mərhələsindən gəlir: niyə bu sahə seçildi (məsələn, keçmiş insident), auditin məqsədi nə idi.

**Scope & Methodology** — Nə (hansı sistem, hansı dövr) və necə (hansı test üsulları — Inquiry/Observation/Inspection/Reperformance) yoxlanıldığı bildirilir. Bu, hesabatın **etibarlılığını** göstərir — oxucu "bu nəticə nə qədər etibarlıdır?" sualına cavab tapır.

**Findings** — Hesabatın "ürəyi". Hər tapıntı struktura malikdir (bunu Task 2-də ətraflı görəcəyik).

**Management Response** — Yaxşı audit hesabatı birtərəfli deyil — tapıntı ilə qarşılaşan menecer öz mövqeyini (razıdır/qismən razıdır/razı deyil) və düzəliş planını (nə vaxta qədər, kim həyata keçirəcək) yazır. Bu, hesabata hesabatlıq (accountability) qatır.

**Overall Conclusion** — Bütün tapıntıları ümumiləşdirərək, audit edilən sahənin ümumi nəzarət mühitinin (control environment) nə qədər güclü olduğuna dair yekun rəy verilir.

**Sual 1**
Altı standart bölməni sadalayın və hər birinin əsas funksiyasını yazın.

**Sual 2**
Niyə Executive Summary-də texniki detala getmək tövsiyə olunmur?

**Sual 3**
Management Response bölməsi hesabata nə əlavə edir? Bu bölmə olmasa nə itirilər?

## Task 2 — Tapıntı Yazmaq: "5 C" Modeli

Hər audit tapıntısı (finding) beş komponentdən ibarət olmalıdır — bu, "**5 C**" modeli adlanır:

```
CONDITION  →  "Nə tapdıq?" (faktiki vəziyyət)
CRITERIA   →  "Nə olmalı idi?" (standart/gözlənti)
CAUSE      →  "Niyə belə oldu?" (kök səbəb)
EFFECT     →  "Nəticədə nə risk/zərər yarana bilər?"
RECOMMENDATION → "Nə edilməlidir?"
```

Bu beş komponentin **hər biri** olmadan tapıntı natamam sayılır:

- Yalnız **Condition + Criteria** yazsanız → oxucu "bəs niyə?" sualını verir (Cause yoxdur)
- **Cause** olmadan → tövsiyə səthi qalır (simptomu, kök səbəbi yox, düzəldir)
- **Effect** olmadan → menecer "bu, həqiqətən vacibdirmi?" deyə düşünür, prioritetləşdirmir
- **Recommendation** olmadan → tapıntı sadəcə tənqiddir, konstruktiv həll təklifi yoxdur

**Nümunə (fərqli bir mövzu üzərində — patch management):**

```
CONDITION:
Test edilən 15 serverdən 4-də kritik təhlükəsizlik patch-ləri
son 90 gündə quraşdırılmayıb.

CRITERIA:
TechNova Patch Management Standard-ına görə, kritik (critical/
high severity) patch-lər aşkar olunduqdan sonra 14 gün ərzində
quraşdırılmalıdır.

CAUSE:
Patch quraşdırma prosesi manual həyata keçirilir və məsul
şəxsin işgüzar səfər/məzuniyyət dövründə əvəzedici təyin
olunmayıb, nəticədə proses gecikib.

EFFECT:
Bu serverlər məlum zəifliklərə (known vulnerabilities) açıq
qalır, bu da icazəsiz giriş və ya məlumat sızması riskini
artırır. Xüsusilə bu serverlərdən biri müştəri ödəniş
məlumatlarını emal etdiyi üçün risk daha yüksəkdir.

RECOMMENDATION:
1) Patch quraşdırma prosesi avtomatlaşdırılsın (mümkün olduğu
qədər), 2) Manual proseslər üçün əvəzedici mexanizm (backup
owner) təyin edilsin, 3) Aylıq patch statusu hesabatı CISO-ya
təqdim olunsun.
```

**Risk Rating (Risk Səviyyəsi):** Hər tapıntıya bir risk səviyyəsi verilir — bu, Effect-in ciddiliyi və Condition-un tezliyi/əhatə dairəsi əsasında müəyyən edilir:

| Səviyyə | Meyar | Nümunə |
|---|---|---|
| **High (Yüksək)** | Ciddi maliyyə/hüquqi/reputasiya zərəri, geniş əhatə, dərhal tədbir tələb edir | Müştəri məlumatlarının qorunmasız qalması |
| **Medium (Orta)** | Orta səviyyəli təsir, məhdud əhatə, qısa müddətdə düzəldilməlidir | Yuxarıdakı giriş idarəetməsi tapıntısı |
| **Low (Aşağı)** | Minimal təsir, prosesin təkmilləşdirilməsi xarakterli | Sənədləşmədə kiçik uyğunsuzluq |

**Vacib məntiq:** Risk Rating **subyektiv təxmin deyil** — Effect bölməsindəki konkret zərər təsviri ilə əsaslandırılmalıdır. Əgər auditor "High" deyirsə, Effect bölməsində bunu dəstəkləyən konkret izah olmalıdır (məsələn, "müştəri ödəniş məlumatlarını emal edir" kimi).

**Sual 1**
"5 C" modelinin beş komponentini sadalayın.

**Sual 2**
Cause olmadan yazılan bir tövsiyə niyə "səthi" sayılır? Nümunə ilə izah edin.

**Sual 3**
Risk Rating necə müəyyən edilir — hansı iki amilə əsaslanır?

## Task 3 — Praktiki Tapşırıq: Tam Audit Finding Yazın

İndi Room 2-də test etdiyiniz TechNova-nın giriş idarəetməsi nəzarəti üçün **tam bir audit finding** yazacaqsınız — "5 C" modelini və risk rating-i tətbiq edərək.

**Xatırlatma (Room 2-dən):**
- 10 hadisədən 2-si (№4 və №8) 4 saatlıq criteria-nı pozub
- Hər iki hal həftəsonu/tətil dövrü ilə üst-üstə düşür
- Root cause: sistemdə iş saatı hesablanmasının qeyri-standart günləri (həftəsonu/tətil) nəzərə almaması
- Gecikmə müddətləri: 68.9 saat və 137.5 saat (kriteriyanı əhəmiyyətli dərəcədə üstələyib)

**Sizin tapşırığınız:**

**Addım 1** — Condition yazın (konkret ədədlərlə: neçə/neçə, hansı faiz)

**Addım 2** — Criteria yazın (hansı standart/tələbə istinad edir)

**Addım 3** — Cause yazın (Room 2-dəki pattern analizini əsas götürün)

**Addım 4** — Effect yazın (bu boşluq nəticəsində hansı risk yaranır?)

**Addım 5** — Recommendation yazın (minimum 2 konkret addım)

**Addım 6** — Risk Rating təyin edin və əsaslandırın (High/Medium/Low)

**Addım 7** — Management Response üçün nümunə cavab yazın (menecerin tapıntıya necə cavab verəcəyini təsəvvür edin)

**Kömək üçün qismən nümunə (yalnız Condition və Criteria):**

```
CONDITION:
Test edilən 10 hadisədən 2-də (20%) işdən çıxan işçilərin
sistem girişi 4 iş saatlıq həddi əhəmiyyətli dərəcədə üstələyərək
bağlanıb (68.9 saat və 137.5 saat). Hər iki hal işdən çıxmanın
həftəsonu/tətil dövrünə düşdüyü hallarla üst-üstə düşür.

CRITERIA:
TechNova Access Control Standard, bölmə 4.2-yə görə, İT
departamenti HR bildirişindən sonra 4 iş saatı ərzində bütün
sistem girişlərini ləğv etməlidir.
```

**Öz-özünə keyfiyyət yoxlaması (Checklist):**

```
☐ Condition konkret ədədlərlə yazılıb (10-dan 2-si, 20%, saat
  fərqləri)
☐ Criteria konkret standarta (bölmə nömrəsi ilə) istinad edir
☐ Cause Room 2-dəki pattern-ə (həftəsonu/tətil) əsaslanır,
  spekulyativ deyil
☐ Effect konkret risk təsvir edir (təkcə "pis nəticə ola bilər"
  yox, nə cür zərər)
☐ Recommendation ən azı 2 konkret, icra oluna bilən addımdan
  ibarətdir
☐ Risk Rating seçimi Effect-dəki izahla üst-üstə düşür (High
  desəniz, Effect də ciddi olmalıdır)
☐ Management Response realist görünür (nə "hər şeyi tam qəbul
  edirik", nə "heç nə səhv deyil" — balanslaşdırılmış)
```

**Sual 1**
Bu tapıntı üçün hansı Risk Rating (High/Medium/Low) seçdiniz və niyə? (Room 2-dəki qismən effektivlik nəticəsini nəzərə alın)

**Sual 2**
Recommendation-da texniki (sistemin düzəldilməsi) və prosessual (əvəzedici mexanizm) tədbirləri ayrı-ayrı düşünmək niyə faydalıdır?

**Sual 3**
Yazdığınız Management Response-da menecer tapıntını tam qəbul etməyib, qismən razılaşıbsa (məsələn, "avtomatlaşdırma bahalıdır, əvəzinə manual yoxlama tezliyini artıracağıq" desə), bu, hesabatın dəyərini azaldırmı? Niyə?

## Yekun Yoxlama (Summary Quiz)

1. Audit hesabatının altı standart bölməsini sadalayın.
2. "5 C" modelinin beş komponentini və onların sırasını izah edin.
3. Risk Rating-in "subyektiv təxmin deyil" olması nə deməkdir?
4. Management Response bölməsinin hesabata gətirdiyi əsas dəyər nədir?
5. TechNova giriş idarəetməsi tapıntısında Cause və Effect arasındakı əlaqəni bir cümlə ilə izah edin.

---
