# ROOM 1: Cybersecurity Objectives

**Path:** CompTIA Security+ (SY0-701) Hazırlığı
**Module:** 1 — Today's Security Professional (Fəsil 1)
**Mənbə:** CompTIA Security+ Study Guide, 9th Ed. — "Cybersecurity Objectives" bölməsi
**Domain uyğunluğu:** 1.0 General Security Concepts (12%) — obyektiv 1.2
**Çətinlik:** Easy
**Təxmini vaxt:** 35 dəq

## Room haqqında

Path-in ilk texniki mövzusuna xoş gəlmisiniz. Çox adam kibertəhlükəsizliyi eşidəndə ilk növbədə "hakerlərin məlumat oğurlaması"nı təsəvvür edir. Bu, düzgündür, amma natamamdır — kitab vurğulayır ki, kibertəhlükəsizliyin əslində **üç** tamamlayıcı məqsədi var, təkcə biri yox. Bu room-da bu üç məqsədi (CIA Triadı) və onlara əlavə olunan dördüncü vacib konsepti (Non-repudiation) öyrənəcəksiniz — bu, path boyu daim geri qayıdacağınız fundamental çərçivədir.

## Öyrənmə nəticələri

- CIA Triadının üç elementini dəqiq tərif etmək və bir-birindən fərqləndirmək
- Hər elementə aid konkret nəzarət mexanizmi nümunələri vermək
- Non-repudiation konseptini CIA-dan ayrı, əlavə məqsəd kimi izah etmək
- Real bir hadisəni CIA/Non-repudiation çərçivəsi ilə təhlil etmək

## Task 1 — CIA Triadı: Üç Tamamlayıcı Məqsəd

Kibertəhlükəsizlik analitikləri işlərini təsvir edərkən daim bu üç termini istifadə edirlər — kitab bunu "CIA Triadı" adlandırır (Mərkəzi Kəşfiyyat İdarəsi ilə əlaqəsi yoxdur, sadəcə üç sözün baş hərfləridir).

**Confidentiality (Məxfilik)** — icazəsiz şəxslərin həssas məlumata çıxışının qarşısını almaq. Firewall, giriş nəzarəti siyahıları (ACL) və şifrələmə bu məqsədə xidmət edən əsas nəzarətlərdir. Hücumçular məxfiliyi pozanda, məqsədləri adətən **icazəsiz ifşa** (unauthorized disclosure) əldə etməkdir.

**Integrity (Bütövlük)** — məlumat və ya sistemlərdə icazəsiz dəyişikliyin (qəsdən və ya təsadüfən) olmamasını təmin etmək. Hashing və bütövlük monitorinq həlləri bu məqsədə xidmət edir. Diqqət edin: təhdid təkcə hücumçudan gəlmir — məsələn, elektrik gərginliyinin kəskin dəyişməsi məlumatın korlanmasına səbəb ola bilər, bu da bütövlük pozuntusudur, baxmayaraq ki, heç kim qəsdən bunu etməyib.

**Availability (Əlçatanlıq)** — məlumat və sistemlərin qanuni istifadəçilərin ehtiyacına vaxtında cavab verə bilməsini təmin etmək. Fault tolerance, klasterləmə və backup-lar bu məqsədə xidmət edir. Bu da, Integrity kimi, həm hücumçudan (məsələn, DDoS hücumu), həm də təbii səbəbdən (məsələn, data mərkəzini məhv edən yanğın) təhlükə ala bilər.

Bu üç elementin **tamamlayıcı** olduğuna diqqət edin — heç biri təkbaşına kifayət deyil. Bir sistem tam məxfi ola bilər (heç kim ona çıxış əldə edə bilmir), amma bu, faydasızdır, əgər qanuni istifadəçilər də ona çıxış əldə edə bilmirsə (Availability pozulub). Eynilə, bir sistem tam əlçatan ola bilər, amma məlumatı hər kəs dəyişə bilirsə (Integrity yoxdur), bu da təhlükəlidir.

| Element | Sual | Nümunə nəzarət | Pozulma nümunəsi |
|---|---|---|---|
| Confidentiality | Kim görə bilər? | Şifrələmə, ACL, Firewall | Verilənlər bazasının sızması |
| Integrity | Dəyişdirilə bilərmi? | Hashing, bütövlük monitorinqi | Maliyyə qeydlərinin saxtalaşdırılması |
| Availability | Nə vaxt əlçatandır? | Fault tolerance, backup, klasterləmə | DDoS hücumu, server nasazlığı |

**Sual 1**
CIA Triadının üç elementini və hər birinin əsas sualını yazın.

**Sual 2**
Elektrik gərginliyinin kəskin dəyişməsi nəticəsində məlumat korlanması hansı CIA elementinin pozulmasıdır və niyə bu, "hücum" sayılmır?

**Sual 3**
Niyə tam məxfi, amma əlçatan olmayan bir sistem faydasız sayıla bilər?

## Task 2 — Non-repudiation: Dördüncü Element (CIA-dan Kənarda)

CIA Triadına aid olmasa da, kitab Non-repudiation-u kibertəhlükəsizliyin vacib əlavə məqsədi kimi qeyd edir.

**Non-repudiation** — hər hansı bir fəaliyyəti (məsələn, mesaj göndərmək) həyata keçirən şəxsin sonradan bunu **inkar edə bilməməsi**ni təmin edir. Rəqəmsal imza bunun klassik nümunəsidir — o, istənilən marağı olan tərəfə mesajın həqiqətən iddia edilən göndərəndən gəldiyini təsdiqləməyə imkan verir.

Bunu real həyat analogiyası ilə görək: əl ilə imzalanmış müqavilə düşünün. Əgər siz müqaviləni imzalamısınızsa, sonradan "mən bunu imzalamamışam" deyə bilməzsiniz — imza sübutdur. Rəqəmsal dünyada bu funksiyanı rəqəmsal imzalar yerinə yetirir (bunu Module 7-də, Cryptography fəslində dərindən öyrənəcəksiniz).

Non-repudiation-un niyə CIA-dan ayrı sayıldığını anlamaq üçün fərqi görək:

| | CIA elementi | Non-repudiation |
|---|---|---|
| Fokus | Məlumatın vəziyyəti (kim görür, dəyişdirilib, əlçatandır) | Fəaliyyətin mənbəyi/sahibi |
| Sual | Məlumat qorunubmu? | Bu fəaliyyəti kim etdi, o bunu inkar edə bilərmi? |
| Nümunə | Şifrələnmiş fayl (Confidentiality) | İmzalanmış email (Non-repudiation) |

Praktiki əhəmiyyət: fərz edin ki, bir maliyyə əməliyyatı sistemi həm Confidentiality (yalnız icazəli şəxslər görə bilir), həm Integrity (heç kim əməliyyatı dəyişə bilmir) təmin edir, amma Non-repudiation yoxdur. Bu halda, bir istifadəçi əməliyyat edib sonra "mən bunu etməmişəm" deyə bilər və sistem bunu təkzib edə bilmir — bu, hüquqi/maliyyə mübahisələrində ciddi problemdir.

**Sual 1**
Non-repudiation nə deməkdir və niyə CIA Triadının bir hissəsi sayılmır?

**Sual 2**
Rəqəmsal imza hansı funksiyanı yerinə yetirir?

**Sual 3**
Confidentiality və Integrity mövcud olduğu halda, Non-repudiation-un olmaması hansı praktiki problemi yarada bilər?

## Task 3 — Real Ssenaridə Tətbiq

Bu framework-ün gücünü real bir ssenaridə görək. Fərz edin ki, bir universitetin tələbə qiymət sistemi hücuma məruz qalıb. Sistemdən üç fərqli hadisə xəbər verilir:

```
Hadisə A: Naməlum şəxs bütün tələbələrin qiymətlərini yükləyib
öz Telegram kanalında paylaşıb.

Hadisə B: Bir tələbə öz uğursuz imtahan nəticəsini sistem
daxilindən "keçdi" statusuna dəyişdirib.

Hadisə C: Sistem 3 gün ərzində işləmir, tələbələr qiymətlərinə
baxa bilmirlər, çünki server nasazlaşıb.
```

Hər hadisəni CIA elementi ilə əlaqələndirək:

| Hadisə | Pozulan CIA elementi | Səbəb |
|---|---|---|
| A — Qiymətlərin ifşası | Confidentiality | İcazəsiz şəxs həssas məlumata çıxış əldə edib və onu paylaşıb |
| B — Qiymətin dəyişdirilməsi | Integrity | Sistemdəki məlumat icazəsiz şəkildə dəyişdirilib |
| C — Server nasazlığı | Availability | Qanuni istifadəçilər (tələbələr) sistemə çıxış əldə edə bilmirlər |

Bu, kitabın vurğuladığı vacib bir bacarıqdır: istənilən təhlükəsizlik hadisəsini CIA çərçivəsi ilə sürətlə təsnifləşdirə bilmək — bu, sonrakı bölmələrdə (Data Breach Risks) öyrənəcəyiniz "təsir təhlili"nin ilk addımıdır.

**Sual 1**
Yuxarıdakı üç hadisədən hansı Non-repudiation ilə əlaqəli ola bilər — əgər Hadisə B-də tələbə "mən bunu etməmişəm" desəydi, sistem bunu necə sübut edə bilərdi?

**Sual 2**
Öz nümunənizi yaradın: bir hadisə təsvir edin ki, o, eyni anda İKİ CIA elementini poza bilsin.

## Yekun Yoxlama (Summary Quiz)

1. CIA Triadının üç elementini sadalayın və hər birinə bir nümunə nəzarət mexanizmi verin.
2. Non-repudiation nədir və CIA-dan necə fərqlənir?
3. Bir DDoS hücumu hansı CIA elementini pozur?
4. Niyə üç CIA elementi "tamamlayıcı" adlandırılır?
5. Rəqəmsal imza hansı problemi həll edir?

---
