# ROOM 2: Control Testing

**Path:** GRC Fundamentals
**Module:** Audit & Assessment
**Çətinlik:** Medium-Hard
**Təxmini vaxt:** 45 dəq (praktiki)

## Room haqqında

Room 1-də audit lifecycle-ının Fieldwork mərhələsində "sübut toplanır" dedik — amma bu, dəqiq olaraq necə edilir? Sadəcə kiməsə "bunu edirsinizmi?" deyə soruşmaq kifayət edirmi? Cavab: xeyr. Auditor-un fikri, hətta ən dürüst insandan alınsa belə, **sübut** sayılmır — çünki insanlar səhv edə, unuda və ya vəziyyəti fərqli görə bilərlər. Bu problemi həll edən yanaşma **Control Testing**-dir.

Bu room-da nəzarətlərin (control) növlərini, onları test etmə üsullarını və toplanan sübutun keyfiyyətini necə qiymətləndirməyi öyrənəcək, sonra TechNova MMC-nin real nəzarətini test edəcəksiniz.

## Öyrənmə nəticələri

- Nəzarət növlərini (preventive, detective, corrective) fərqləndirə bilmək
- Dörd əsas test üsulunu (inquiry, observation, inspection, reperformance) izah edə bilmək
- Sübutun keyfiyyət iyerarxiyasını başa düşmək
- Nümunə (sample) seçimi məntiqini tətbiq edə bilmək
- Real test nəticələrinə əsasən "nəzarət effektivdir/deyil" nəticəsi çıxara bilmək

## Task 1 — Nəzarət Növləri (Control Types)

Nəzarətlər (control) — riski azaltmaq üçün qurulan tədbirlərdir. Onları zaman baxımından üç növə ayırmaq olar:

```
   RİSK YARANMAZDAN ƏVVƏL         RİSK BAŞ VERƏNDƏ            RİSK BAŞ VERDİKDƏN SONRA
   ┌──────────────────┐          ┌──────────────────┐        ┌──────────────────┐
   │   PREVENTIVE      │         │   DETECTIVE        │       │   CORRECTIVE       │
   │  (Qarşısıalıcı)   │────────▶│  (Aşkaredici)      │──────▶│  (Düzəldici)       │
   └──────────────────┘          └──────────────────┘        └──────────────────┘
   Riskin baş verməsinin          Riskin baş verdiyini         Baş vermiş problemi
   qarşısını alır                 aşkar edir                   düzəldir/zərəri azaldır
```

**Preventive Control** — Riskin baş verməsinin qarşısını əvvəlcədən alır.
> Nümunə: MFA (çoxfaktorlu autentifikasiya), giriş icazələri (permissions), firewall qaydaları.

**Detective Control** — Risk artıq baş veribsə, bunu aşkar edir.
> Nümunə: Log monitorinq sistemi, anomaliya bildirişləri, illik audit-in özü.

**Corrective Control** — Baş vermiş problemi düzəldir və ya zərəri minimuma endirir.
> Nümunə: İnsident cavab planı (incident response), backup-dan bərpa prosesi, zərərli proqramın karantinə alınması.

**Vacib məntiq:** Yaxşı təhlükəsizlik proqramı bu üç növü **birlikdə** istifadə edir — yalnız Preventive-ə güvənmək təhlükəlidir, çünki heç bir preventive control 100% effektiv deyil (bax: "defense in depth" prinsipi). Auditor bir sahəni yoxlayanda, təkcə "preventive control varmı?" yox, "əgər bu control keçilərsə, bunu aşkar edən (detective) nəzarət varmı?" sualını da verir.

**Praktiki misal — TechNova-nın giriş idarəetməsi (Room 1-dəki ssenari):**

| Nəzarət növü | Konkret nümunə |
|---|---|
| Preventive | HR bildirişi əsasında hesabın avtomatik deaktivasiyası prosesi |
| Detective | Aylıq "aktiv hesablar vs aktiv işçilər" tutuşdurma hesabatı |
| Corrective | Uyğunsuzluq aşkar olunanda hesabın dərhal manual bağlanması prosesi |

**Sual 1**
Üç nəzarət növünü sadalayın və hər birinin nə vaxt işə düşdüyünü izah edin.

**Sual 2**
Niyə yalnız Preventive control-lara güvənmək riskli hesab olunur?

**Sual 3**
TechNova-nın giriş idarəetməsi nümunəsində Detective control konkret olaraq nəyi aşkar edir?

## Task 2 — Test Üsulları və Sübutun Keyfiyyəti

Auditor bir nəzarətin faktiki işlədiyini yoxlamaq üçün dörd əsas üsuldan istifadə edir. Bunlar **sübut gücünə görə** aşağıdan yuxarıya sıralanır:

```
ZƏİF SÜBUT                                          GÜCLÜ SÜBUT
    │                                                      │
    ▼                                                      ▼
┌──────────┐   ┌─────────────┐   ┌─────────────┐   ┌─────────────────┐
│ INQUIRY   │──▶│ OBSERVATION  │──▶│ INSPECTION   │──▶│ REPERFORMANCE    │
│ (Sorğu)   │   │ (Müşahidə)   │   │ (Yoxlama)    │   │ (Yenidən icra)   │
└──────────┘   └─────────────┘   └─────────────┘   └─────────────────┘
```

**1. Inquiry (Sorğu)** — İşçidən prosesi necə etdiyini soruşmaq. **Ən zəif sübutdur**, çünki yalnız sözə əsaslanır, sübut sənədi yoxdur. Tək başına heç vaxt kifayət etmir, digər üsullarla dəstəklənməlidir.

> Nümunə: "İşdən çıxan işçinin hesabını necə bağlayırsınız?" — İT işçisi prosesi izah edir.

**2. Observation (Müşahidə)** — Auditor prosesin icra olunmasını canlı izləyir. Sorğudan güclüdür, amma yalnız **müşahidə anında** doğrudur — insanlar auditor izlədiyini bilərkən fərqli davrana bilər (bu, "Hawthorne effekti" adlanır).

> Nümunə: Auditor İT işçisinin bir hesabı canlı olaraq necə bağladığını izləyir.

**3. Inspection (Sənəd/sistem yoxlanması)** — Konkret sənəd, log və ya sistem qeydini yoxlamaq. Güclü sübutdur, çünki obyektivdir və geriyə dönük yoxlanıla bilər.

> Nümunə: Active Directory-dəki hesab bağlanma tarixini HR-ın işdən çıxma tarixi ilə müqayisə etmək (log/sənəd əsasında).

**4. Reperformance (Yenidən icra)** — Auditor prosesi özü təkrar həyata keçirir və eyni nəticəni alıb-almadığını yoxlayır. **Ən güclü sübutdur**, çünki auditor şəxsən nəticəni doğrulayır, heç bir vasitəçiyə etibar etmir.

> Nümunə: Auditor özü bir test hesabı yaradıb, sonra onu deaktiv edərək, prosesin sənədləşdirildiyi kimi işlədiyini yoxlayır.

**Hansı üsulu nə vaxt seçmək?** Bu, riskin səviyyəsindən asılıdır — yüksək riskli sahələrdə (məsələn, maliyyə tranzaksiyaları, kritik giriş nəzarəti) auditor Inspection və ya Reperformance kimi güclü sübut tələb edir; aşağı riskli, rəsmi sahələrdə Inquiry və Observation kifayət edə bilər.

**Sample (Nümunə) seçimi:** Auditor adətən **bütün** hadisələri (məsələn, bütün işdən çıxan işçiləri) yoxlaya bilmir, ona görə təsadüfi və ya risk-əsaslı nümunə seçir. Vacib qayda: nümunə **populyasiyanı təmsil etməlidir** — yalnız "asan tapılan" və ya "problemsiz göründüyü bilinən" hadisələri seçmək (bu, "cherry-picking" adlanır) sübutun etibarlılığını sıfırlayır.

**Sual 1**
Dörd test üsulunu ən zəifdən ən güclüyə doğru sıralayın və hər birini bir cümlə ilə təsvir edin.

**Sual 2**
"Hawthorne effekti" nədir və Observation üsulunun etibarlılığına necə təsir edir?

**Sual 3**
"Cherry-picking" nə deməkdir və niyə sample seçimində bundan qaçınmaq lazımdır?

## Task 3 — Praktiki Tapşırıq: TechNova-nın Giriş İdarəetməsi Nəzarətini Test Edin

Room 1-dəki audit planına əsasən, siz artıq Fieldwork mərhələsindəsiniz. Aşağıda son 12 ayda TechNova-dan işdən çıxan **10 işçinin** nümunəsi (sample) və onların hesab bağlanma məlumatları verilib. Criteria (meyar) xatırladaq: **HR bildirişindən sonra 4 iş saatı ərzində hesab bağlanmalıdır.**

```
№  | İşdən çıxma tarixi | HR bildirişi vaxtı | Hesab bağlanma vaxtı | Fərq (saat)
───┼────────────────────┼─────────────────────┼───────────────────────┼─────────────
1  | 14 Yan, 17:00       | 14 Yan, 17:10        | 14 Yan, 18:45          | 1.6 saat  ✓
2  | 22 Yan, 09:00       | 22 Yan, 09:15        | 22 Yan, 11:00          | 1.75 saat ✓
3  | 03 Fev, 16:00       | 04 Fev, 10:00        | 04 Fev, 12:30          | 2.5 saat  ✓
4  | 11 Fev, 12:00       | 11 Fev, 12:05        | 15 Fev, 09:00          | 68.9 saat ✗
5  | 19 Mar, 14:00       | 19 Mar, 14:20        | 19 Mar, 17:30          | 3.17 saat ✓
6  | 02 Apr, 10:00       | 02 Apr, 10:10        | 02 Apr, 15:00          | 4.83 saat ✗
7  | 15 May, 11:00       | 15 May, 11:05        | 15 May, 13:00          | 1.92 saat ✓
8  | 28 May, 15:00       | 28 May, 15:30        | 04 İyun, 09:00         | 137.5 saat ✗
9  | 09 İyun, 09:00      | 09 İyun, 09:10       | 09 İyun, 11:45         | 2.58 saat ✓
10 | 20 İyul, 13:00      | 20 İyul, 13:15       | 20 İyul, 16:00         | 2.75 saat ✓
```

**Sizin tapşırığınız:**

**Addım 1** — Hər bir hadisə üçün Criteria-ya (4 saat) uyğun olub-olmadığını təyin edin (yuxarıda ✓/✗ ilə işarələnib, siz bunun məntiqini izah edin)

**Addım 2** — Uyğunsuzluq faizini hesablayın (neçə/10 hadisə criteria-nı pozub?)

**Addım 3** — Uyğunsuzluqların (№4 və №8) ümumi xüsusiyyətini axtarın (pattern analizi) — bu, "root cause" tapmağa kömək edir

**Addım 4** — Bu nəticələrə əsasən nəzarətin **effektiv** olub-olmadığı barədə qərar (conclusion) yazın

**Kömək üçün nümunə həll strukturu:**

```
NƏTİCƏLƏRİN TƏHLİLİ:

Uyğunsuzluq faizi: 2/10 = 20% (Hadisə #4 və #8)

Pattern müşahidəsi:
- Hadisə #4: işdən çıxma Cümə günü (11 Fev, 12:00) baş verib,
  hesab bağlanması növbəti Bazar ertəsi/Çərşənbə axşamına
  düşüb — bu, HƏFTƏSONU/İŞ GÜNÜ FASİLƏSİ ilə bağlı ola bilər.
- Hadisə #8: eyni şəkildə, işdən çıxma 28 May, sonrakı bağlanma
  4 İyun-da — arada uzun fasilə var, mümkün ki, bayram/tətil
  dövrü.

Ehtimal olunan səbəb (Root Cause):
Proses "4 iş saatı" tələbini nəzərdə tutur, amma sistemdə iş
saatı hesablanması düzgün konfiqurasiya olunmayıb — həftəsonu/
bayram günləri "saat sayılmaya" daxil edilmir, nəticədə real
gecikmə criteria-nı üstələyir.

QƏRAR (Conclusion):
Nəzarət QİSMƏN EFFEKTİVDİR. Normal iş günlərində proses
criteria-ya uyğun işləyir (8/10 hadisə), amma həftəsonu/tətil
kimi qeyri-standart vaxtlarda sistemli boşluq mövcuddur. Bu,
Room 3-də yazılacaq audit hesabatına "Orta" risk səviyyəli
tapıntı kimi daxil edilməlidir, çünki bu boşluq nəticəsində
işdən çıxan işçinin girişi bir neçə gün açıq qala bilər.
```

**Öz-özünə keyfiyyət yoxlaması (Checklist):**

```
☐ Uyğunsuzluq faizi düzgün hesablanıb (2/10 = 20%)
☐ Pattern (ortaq xüsusiyyət) tapılıb, təsadüfi sayılmayıb
☐ Root cause fərziyyəsi məlumatlara əsaslanır (spekulyasiya
  deyil, cədvəldəki tarixlərə istinad edir)
☐ Yekun qərar "Effektiv / Qismən Effektiv / Effektiv deyil"
  formatında aydın verilib
☐ Qərar həddindən artıq sərt (bir istisnaya görə "tamamilə
  effektiv deyil" demək) və ya həddindən artıq yumşaq
  (20%-i görməzdən gəlmək) deyil
```

**Sual 1**
Niyə 2/10 uyğunsuzluq faizini görüb dərhal "nəzarət tamamilə effektiv deyil" nəticəsinə gəlmək düzgün deyil?

**Sual 2**
Pattern analizi (həftəsonu/tətil əlaqəsi) niyə sadəcə "20% xəta var" deməkdən daha dəyərlidir?

**Sual 3**
Bu tapıntı üçün hansı test üsulu istifadə olunub (Inquiry/Observation/Inspection/Reperformance)? Niyə?

## Yekun Yoxlama (Summary Quiz)

1. Üç nəzarət növünü (Preventive/Detective/Corrective) sadalayın və hər birinə bir nümunə verin.
2. Dörd test üsulunu sübut gücünə görə sıralayın.
3. Reperformance niyə ən güclü sübut sayılır?
4. "Cherry-picking" sample seçimində niyə problemlidir?
5. TechNova nümunəsində aşkar olunan tapıntının root cause-u nə idi və bu, hansı risk səviyyəsinə uyğun gəlir?

---
