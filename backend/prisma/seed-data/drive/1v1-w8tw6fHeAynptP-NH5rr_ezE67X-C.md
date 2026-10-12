# ROOM 1: Policy vs Standard vs Procedure

**Path:** GRC Fundamentals
**Module:** Governance & Policy
**Çətinlik:** Easy
**Təxmini vaxt:** 25 dəq

## Room haqqında

Hər təşkilatda təhlükəsizliklə bağlı yazılı sənədlər olur — amma bu sənədlərin hamısı eyni səviyyədə deyil. "Policy", "Standard", "Procedure" və "Guideline" sözləri gündəlik dildə çox vaxt bir-birinin əvəzinə işlədilir, halbuki hər birinin fərqli məqsədi, fərqli müəllifi və fərqli dəyişmə tezliyi var. Bu qarışıqlıq real təşkilatlarda ciddi problemlərə səbəb olur: məsələn, bir texniki dəyişiklik üçün Board-un təsdiqini gözləmək (əslində bu, procedure səviyyəsində qərardır) və ya əksinə, strateji bir qərarı IT komandasının öz başına dəyişməsi (əslində bu, policy səviyyəsində qərardır).

Bu room-da siz sənəd iyerarxiyasının məntiqini öyrənəcək və real sənəd parçalarını düzgün kateqoriyaya ayırmağı öyrənəcəksiniz.

## Öyrənmə nəticələri

- Policy, Standard, Procedure və Guideline anlayışlarını dəqiq tərif edə bilmək
- Bu dörd sənəd növünün iyerarxiyasını və bir-biri ilə əlaqəsini izah edə bilmək
- Hər sənəd növünün kim tərəfindən yazıldığını və təsdiqləndiyini müəyyən edə bilmək
- Real sənəd parçalarını düzgün kateqoriyaya təsnif edə bilmək

## Task 1 — Dörd Səviyyəli İyerarxiya

Təhlükəsizlik sənədləşməsi bir piramida kimi düşünülə bilər — yuxarıdan aşağıya doğru mücərrədlikdən konkretliyə keçilir:

```
                    ┌─────────────────┐
                    │     POLICY      │   NƏ və NİYƏ (strateji)
                    └─────────────────┘
                            │
                    ┌─────────────────┐
                    │    STANDARD      │   NƏ QƏDƏR (ölçülə bilən tələb)
                    └─────────────────┘
                            │
                    ┌─────────────────┐
                    │    PROCEDURE     │   NECƏ (addım-addım)
                    └─────────────────┘
                            │
                    ┌─────────────────┐
                    │    GUIDELINE     │   TÖVSİYƏ (məcburi deyil)
                    └─────────────────┘
```

**POLICY (Siyasət)** — Təşkilatın bir mövzuda yüksək səviyyəli niyyətini və öhdəliyini bildirir. Sual: **"Nə edirik və niyə?"** Policy adətən 1-2 səhifədir, texniki detal içermir, illərlə dəyişmir və Board və ya üst rəhbərlik tərəfindən təsdiqlənir.

> Nümunə: *"TechNova MMC bütün müştəri məlumatlarını sənaye standartlarına uyğun şəkildə qorumağı öhdəsinə götürür."*

**STANDARD (Standart)** — Policy-ni icra etmək üçün konkret, ölçülə bilən tələblər müəyyən edir. Sual: **"Nə qədər / hansı səviyyədə?"** Standard daha texnikidir, adətən İT/Təhlükəsizlik rəhbərliyi tərəfindən təsdiqlənir və mütəmadi (1-2 ildə bir) yenilənir.

> Nümunə: *"Bütün istifadəçi parolları minimum 12 simvol olmalı, böyük/kiçik hərf, rəqəm və simvol tərkibinə malik olmalıdır."*

**PROCEDURE (Prosedur)** — Standardı yerinə yetirmək üçün konkret, addım-addım təlimatdır. Sual: **"Necə edirik?"** Procedure ən tez-tez yenilənən sənəddir (texnologiya dəyişdikcə), çünki konkret alət və sistemlərə bağlıdır.

> Nümunə: *"Yeni işçi üçün hesab yaratmaq: 1) HR sistemində işçini qeydə al, 2) Active Directory-də hesab yarat, 3) Standart parol siyasətinə uyğun müvəqqəti parol təyin et, 4) İşçiyə ilk giriş zamanı parolu dəyişdirməyi tələb et."*

**GUIDELINE (Təlimat/Tövsiyə)** — Məcburi olmayan, amma faydalı olan tövsiyələrdir. Sual: **"Nə tövsiyə olunur?"** Guideline-lar ən çevik sənədlərdir, situasiyaya görə fərqli tətbiq oluna bilər.

> Nümunə: *"Uzaqdan işləyərkən açıq Wi-Fi şəbəkələrindən istifadə etməməyiniz tövsiyə olunur."*

**Vacib məntiq:** Piramidada yuxarıdan aşağıya doğru getdikcə sənəd **daha çevik, daha texniki və daha tez-tez dəyişən** olur, amma **məcburiliyi** (Guideline istisna olmaqla) azalmır — sadəcə detal səviyyəsi artır. Policy dəyişəndə, adətən altındakı Standard və Procedure-lar da yenidən nəzərdən keçirilməlidir, amma əksinə deyil — bir Procedure dəyişməsi Policy-ni dəyişdirmir.

| | Policy | Standard | Procedure | Guideline |
|---|---|---|---|---|
| Sual | Nə/Niyə? | Nə qədər? | Necə? | Nə tövsiyə olunur? |
| Məcburilik | Məcburi | Məcburi | Məcburi | İxtiyari |
| Kim təsdiqləyir | Board / Üst rəhbərlik | CISO / İT rəhbərliyi | Departament rəhbəri | Komanda / İşçi qrupu |
| Dəyişmə tezliyi | Nadir (illərlə) | Vaxtaşırı (1-2 il) | Tez-tez (texnologiyaya görə) | İstənilən vaxt |
| Detal səviyyəsi | Aşağı (mücərrəd) | Orta | Yüksək (konkret) | Dəyişkən |

**Sual 1**
Piramidanın dörd səviyyəsini yuxarıdan aşağıya sadalayın və hər birinin cavab verdiyi əsas sualı yazın.

**Sual 2**
Policy niyə Board tərəfindən, Procedure isə niyə departament səviyyəsində təsdiqlənir? Fərqin səbəbini izah edin.

**Sual 3**
Bir Procedure-un dəyişməsi avtomatik olaraq Policy-ni dəyişdirirmi? Niyə?

## Task 2 — Fərqləri Praktiki Nümunələrlə Anlamaq

Eyni mövzu (parol təhlükəsizliyi) üzərindən dörd səviyyəni birlikdə görək:

```
POLICY:
"TechNova MMC bütün sistemlərə giriş üçün güclü autentifikasiya
tələb edir ki, icazəsiz girişin qarşısı alınsın."

    ↓ Bu niyyəti necə icra edirik?

STANDARD:
"Parollar minimum 12 simvol, mürəkkəb tərkibli olmalı, 90 gündə
bir dəyişdirilməli və əvvəlki 5 paroldan fərqli olmalıdır.
Kritik sistemlərdə çoxfaktorlu autentifikasiya (MFA) məcburidir."

    ↓ Bunu texniki olaraq necə tətbiq edirik?

PROCEDURE:
"Active Directory Group Policy-də parol siyasətini tənzimləmək
üçün: 1) Group Policy Management Console-u aç, 2) Default Domain
Policy-ni redaktə et, 3) Password Policy bölməsində minimum
uzunluğu 12 təyin et... [addımlar davam edir]"

    ↓ Əlavə tövsiyə nədir?

GUIDELINE:
"İstifadəçilərə parol meneceri istifadə etmək və heç vaxt eyni
parolu bir neçə sistemdə istifadə etməmək tövsiyə olunur."
```

Diqqət edin ki, hər səviyyə özündən yuxarıdakı səviyyəni **konkretləşdirir**, amma heç vaxt ona **ziddiyyət təşkil etmir**. Əgər Procedure Standardla ziddiyyət təşkil edirsə (məsələn, Standard 12 simvol tələb edir, amma Procedure-da 8 simvol yazılıbsa), bu, sənədləşmə uyğunsuzluğudur və audit zamanı problem yaradır.

**Ümumi səhv:** Bəzi təşkilatlar Policy sənədlərinin içinə texniki detalları da yazır (məsələn, "parollar 12 simvol olmalıdır" cümləsini birbaşa Policy-yə salırlar). Bu, problemlidir, çünki texniki tələb dəyişəndə (məsələn, 12-dən 14 simvola keçəndə) Board-un yenidən təsdiqindən keçmək lazım gəlir — bu, lazımsız bürokratiya yaradır. Düzgün yanaşma budur ki, Policy mücərrəd öhdəlik saxlasın, konkret ədədlər isə Standard səviyyəsində qalsın.

**Sual 1**
Yuxarıdakı nümunədə Standard-ın Policy-dən fərqi konkret olaraq nədir?

**Sual 2**
Niyə texniki detalları (məs. "12 simvol") birbaşa Policy sənədinə yazmaq problemli sayılır?

**Sual 3**
Procedure Standardla ziddiyyət təşkil etsə, bu nə deməkdir və niyə problemlidir?

## Task 3 — Praktiki Tapşırıq: Sənədləri Təsnif Edin

TechNova MMC-nin təhlükəsizlik komandası müxtəlif sənəd parçaları hazırlayıb, amma onları düzgün kateqoriyaya ayırmayıb. Sizin tapşırığınız hər parçanı **Policy / Standard / Procedure / Guideline** kimi təsnif etmək və səbəbini izah etməkdir.

```
Parça A:
"Şirkət bütün işçilərinin məlumat təhlükəsizliyi öhdəliklərini
anlamasını və bu öhdəliklərə əməl etməsini tələb edir. Bu
öhdəliklərə əməl etməmək intizam tədbirlərinə səbəb ola bilər."

Parça B:
"Server otağına giriş üçün: 1) Təhlükəsizlik masasında qeydiyyatdan
keç, 2) Müvəqqəti kart al, 3) Biometrik oxuyucuda barmaq izini
təsdiqlə, 4) Otaqda tək qalma, həmişə refakator ilə."

Parça C:
"Bütün server otaqlarına giriş yalnız biometrik autentifikasiya
və fiziki kart vasitəsilə, iki faktorlu təsdiqlə həyata keçirilməlidir.
Giriş jurnalı minimum 12 ay saxlanmalıdır."

Parça D:
"İclas otaqlarında noutbukunuzu tək qoymamağınız və ekranı
kilidləmədən masanızdan uzaqlaşmamağınız tövsiyə olunur."
```

**Kömək üçün nümunə həll (Parça A üzrə):**

```
Parça A → POLICY

Səbəb: Bu, konkret ədəd və ya addım təlimatı yoxdur — ümumi
öhdəlik və gözlənti bildirir ("bütün işçilər... anlamalı və əməl
etməli"). "Niyə" sualına cavab verir (təhlükəsizlik mədəniyyəti
yaratmaq) və məcburiliyini "intizam tədbirləri" ilə bağlayır ki,
bu da yüksək səviyyəli sənədlərə xas xüsusiyyətdir. Belə bir
bəyanat Board səviyyəsində təsdiqlənməlidir, çünki bütün şirkəti
əhatə edən davranış standartını müəyyən edir.
```

**Öz-özünə keyfiyyət yoxlaması (Checklist):**

```
☐ Hər 4 parça üçün kateqoriya seçilib (Policy/Standard/
  Procedure/Guideline)
☐ Hər seçim üçün konkret mətn dəlili göstərilib (hansı söz/
  ifadə bu qərara gətirdi)
☐ "Məcburiyyət dərəcəsi" nəzərə alınıb (məcburi/tövsiyə)
☐ "Detal səviyyəsi" nəzərə alınıb (mücərrəd/konkret/addım-addım)
```

**Sual 1**
Parça B və Parça C eyni mövzuya (server otağına giriş) aiddir. Hansı biri Standard, hansı biri Procedure-dur? Fərqi izah edin.

**Sual 2**
Parça D-ni niyə Guideline kimi təsnif etdiniz (yoxsa etmədiniz)? Mətndəki hansı söz bu qərara təsir etdi?

**Sual 3**
Əgər Parça C-dəki "12 ay" tələbi "24 ay"-a dəyişsə, bu, Parça A-nı (Policy-ni) dəyişdirməyə ehtiyac yaradarmı? Niyə?

## Yekun Yoxlama (Summary Quiz)

1. Sənəd iyerarxiyasının dörd səviyyəsini və hər birinin əsas sualını sadalayın.
2. Policy ilə Standard arasındakı əsas fərq nədir?
3. Niyə Procedure ən tez-tez yenilənən sənəd növüdür?
4. Guideline-ı digər üç sənəd növündən fərqləndirən əsas xüsusiyyət nədir?
5. Real sənədlərdə texniki detalların Policy səviyyəsinə yazılması niyə problemli hesab olunur?

---
