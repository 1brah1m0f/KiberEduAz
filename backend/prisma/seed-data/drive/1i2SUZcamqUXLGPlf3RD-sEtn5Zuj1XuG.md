# ROOM 1 (Faza 1): Governance & Risk Sənədləşməsi

**Path:** GRC Fundamentals
**Module:** Capstone
**Çətinlik:** Hard
**Təxmini vaxt:** 45 dəq (praktiki — sənəd hazırlama)

## Room haqqında

Bu, Capstone-un birinci fazasıdır — Module 1-6-da öyrəndiyiniz hər şeyi bir vahid ssenaridə tətbiq etməyə başlayırsınız. Sizə tanış olan TechNova MMC (Module 2, Room 3-dən) indi daha real, "boşluqlu" formada təqdim olunur — heç bir formal governance strukturu, heç bir risk register, natamam sənədləşmə. Sizin işiniz iki əsas deliverable hazırlamaqdır: bir Policy layihəsi və bir Risk Register. Bu faza, Faza 2 və Faza 3-ün əsasını təşkil edir — burada yazdıqlarınız sonrakı fazalarda "yoxlanılacaq" material olacaq.

## Öyrənmə nəticələri

- Module 2 (Policy skeleti, RACI) və Module 3 (risk bəyanatı, appetite/tolerance, register) materialını inteqrasiya edilmiş formada tətbiq etmək
- Real, natamam bir ssenaridən konkret, icra oluna bilən sənədlər çıxarmaq
- Öz işini qiymətləndirmə rubriki əsasında yoxlamaq
- Sonrakı fazalar (Gap Analysis, Audit) üçün etibarlı əsas yaratmaq

## Genişləndirilmiş Ssenari: TechNova MMC — İndiki Vəziyyət

```
Şirkət: TechNova MMC
Sahə: IT xidmətləri (bulud infrastrukturu, proqram inkişafı)
İşçi sayı: 80 (60 tam ştat, 15 podratçı, 5 uzaqdan işləyən)
Müştərilər: Yerli KOB-lar + 3 Avropa müştərisi (GDPR aidiyyatlı)

MÖVCUD VƏZİYYƏT (boşluqlar):
- Heç bir formal Security Policy yoxdur (Module 2, Room 3-də
  başladığınız AUP layihəsi hələ təsdiqlənməyib)
- Risk Register mövcud deyil — risklər haqqında yalnız
  qeyri-formal danışıqlar olub
- Governance strukturu qeyri-müəyyəndir: CEO həm strateji,
  həm əməliyyat qərarlarını tək verir, ayrıca CISO yoxdur
  (IT meneceri qismən bu funksiyanı daşıyır)
- Son 6 ayda iki kiçik insident olub: (1) bir işçinin noutbuku
  oğurlanıb (şifrələnməmiş), (2) podratçı şəxsi USB ilə müştəri
  məlumatını daşıyıb
- Rəhbərlik yeni Avropa müştərisi ilə müqavilə imzalamaq
  istəyir, amma müştəri "sizin təhlükəsizlik sənədləşməniz
  varmı?" sualını verib
```

Bu ssenari sizə tanış elementləri (Module 2-dəki AUP işi, Module 4-dəki TechNova) birləşdirir və üstünə real təzyiq amili (Avropa müştərisinin tələbi) əlavə edir — bu, real GRC işində tez-tez rast gəlinən "biznes təzyiqi compliance-ı sürətləndirir" dinamikasıdır.

## Tapşırıq 1 — Governance Strukturunu Təklif Edin

Əvvəlcə TechNova üçün minimal, amma funksional governance strukturu təklif edin (Module 2, Room 2-dən RACI konseptini tətbiq edərək).

**Tələb olunur:**
- Kim CISO rolunu daşımalıdır (mövcud işçilərdən, yoxsa yeni vəzifə?)
- Sadə bir RACI cədvəli: "Policy təsdiqi" və "İnsident cavabı" fəaliyyətləri üçün, minimum 3 rol ilə (CEO, CISO/IT Meneceri, İşçilər)

**Şablon:**

```
GOVERNANCE TƏKLİFİ

Təklif olunan struktur:
CEO → [sizin təklifiniz] → Əməliyyat komandaları

RACI (nümunə format):
| Fəaliyyət          | CEO | CISO | İşçilər |
|--------------------|-----|------|---------|
| Policy təsdiqi      |     |      |         |
| İnsident cavabı      |     |      |         |
```

## Tapşırıq 2 — Policy Layihəsi Yazın

Module 2, Room 3-dəki skeleti (Sənəd Məlumatları → Məqsəd → Əhatə → Bəyanatlar → Rol/Məsuliyyət → Enforcement → İstinadlar → Təsdiq) istifadə edərək, **Information Security Policy** (AUP-dan daha geniş, ümumi təhlükəsizlik Policy-si) yazın.

**Minimum tələb olunan elementlər:**
- Son 2 insidentə (oğurlanmış noutbuk, USB ilə məlumat daşınması) birbaşa aid olan ən azı 2 Siyasət Bəyanatı
- Avropa müştərisinin GDPR aidiyyatlı narahatlığına toxunan bir bəyanat

**Kömək — insidentlərdən Policy bəyanatına necə keçilir (nümunə):**

```
İnsident: Şifrələnməmiş noutbuk oğurlanıb
   ↓
Bundan çıxan Policy Bəyanatı:
"Bütün korporativ noutbuklar tam disk şifrələməsi (full-disk
encryption) ilə konfiqurasiya olunmalıdır. Şifrələnməmiş
cihazların korporativ şəbəkəyə və ya məlumatlara girişi
qadağandır."
```

Bu nümunədəki məntiqi öz iki bəyanatınız üçün təkrarlayın: **konkret insident → ümumiləşdirilmiş, gələcəyə yönəlmiş qayda**.

## Tapşırıq 3 — Risk Register Qurun

Module 3-dəki bütün material (Room 1: risk bəyanatı formatı, Room 3: appetite/tolerance) istifadə edərək, TechNova üçün **minimum 3 risk** daxil olan Risk Register yaradın.

**Tələb olunan risklər (minimum bunlardan seçin, əlavə edə bilərsiniz):**
1. Şifrələnməmiş cihaz riski (birinci insidentdən)
2. Podratçı/üçüncü tərəf məlumat daşınması riski (ikinci insidentdən)
3. GDPR uyğunsuzluğu riski (Avropa müştərisi kontekstindən)

**Risk Register şablonu:**

| # | Risk Bəyanatı (Threat+Vuln+Asset+Impact formatında) | Ehtimal (1-5) | Təsir (1-5) | Risk Xalı | Appetite-ə uyğundurmu? |
|---|---|---|---|---|---|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |

Hər risk üçün Module 3, Room 1-dəki tam formatı istifadə edin: *"[Threat] [Vulnerability]-dan istifadə edərək [Asset]-ə təsir edərsə, nəticədə [Impact] yarana bilər."*

"Appetite-ə uyğundurmu?" sütununda qısaca qeyd edin — TechNova-nın kibertəhlükəsizlik/compliance riskinə (yeni Avropa müştərisi kontekstində) münasibətini aşağı appetite kimi fərz edə bilərsiniz (Module 3, Room 3-dəki Nümunə A-ya bənzər).

## Öz-özünə Qiymətləndirmə Rubriki

Fazanı bitirdikdən sonra öz işinizi bu rubrik əsasında qiymətləndirin (Faza 3-də bu meyarlar yenidən, auditor perspektivindən istifadə olunacaq):

| Meyar | Zəif (1) | Qənaətbəxş (2) | Güclü (3) |
|---|---|---|---|
| **Governance strukturu** | Rollar müəyyən edilməyib | Rollar var, amma RACI natamamdır | Aydın rollar + tam RACI, ssenariyə uyğunlaşdırılıb |
| **Policy bəyanatları** | Ümumi, insidentlərlə əlaqəsizdir | İnsidentlərə aiddir, amma ölçülə bilən deyil | Konkret, ölçülə bilən, birbaşa insidentdən çıxarılıb |
| **Risk bəyanatları** | Format natamamdır (element çatışmır) | Bütün elementlər var, amma ümumidir | Spesifik, TechNova-ya xas, tam format |
| **Appetite əlaqəsi** | Qeyd olunmayıb | Səthi qeyd olunub | Hər risk üçün əsaslandırılmış qiymətləndirmə |

## Yekun Yoxlama (Bu fazanın nəticələrini yoxlayan suallar)

1. Sizin təklif etdiyiniz governance strukturunda CISO rolunu kim daşıyır və niyə bu seçimi etdiniz?
2. Yazdığınız iki Policy bəyanatından biri hansı insidentə əsaslanır və konkret olaraq nəyi qadağan/tələb edir?
3. Risk Register-inizdəki ən yüksək xallı riski seçin — niyə bu risk digərlərindən yüksəkdir?
4. GDPR-a aid yazdığınız risk bəyanatı Module 5, Room 4-dəki (Azərbaycan tənzimləmə) materialla necə əlaqələnir?
5. Öz işinizi rubrik üzrə qiymətləndirin — hansı sahədə özünüzü "Zəif" yox, "Qənaətbəxş" səviyyəsində gördünüz və niyə?

---

## QİYMƏTLƏNDİRMƏ QEYDLƏRİ (yalnız content creator/instruktor üçün)

Bu, Capstone olduğu üçün "tək düzgün cavab" yoxdur — aşağıdakılar qəbul edilə bilən cavabların keyfiyyət meyarlarıdır, sabit cavab açarı deyil.

**Tapşırıq 1 (Governance):**
- Qəbuledilən: mövcud IT meneceri CISO funksiyasını əlavə öhdəlik kimi daşıyır (kiçik şirkət real təcrübəsinə uyğundur) VƏ YA yeni CISO vəzifəsi təklif olunur (daha güclü cavab, amma büdcə reallığını qeyd etməlidir)
- RACI-də "Accountable" sütununda hər sətirdə yalnız BİR rolun olması mütləq yoxlanmalıdır (Module 2-dəki əsas qayda)

**Tapşırıq 2 (Policy):**
- Hər bir bəyanat ölçülə bilən olmalıdır ("təhlükəsiz istifadə edin" YOX qəbul edilməli, "tam disk şifrələməsi tələb olunur" kimi konkret formalar QƏBUL edilməlidir)
- GDPR bəyanatı konkret olmalıdır (məsələn, "Avropa İttifaqı vətəndaşlarının məlumatları GDPR tələblərinə uyğun işlənməlidir, transsərhəd ötürmə üçün müvafiq hüquqi əsas mövcud olmalıdır")

**Tapşırıq 3 (Risk Register):**
- Hər risk bəyanatı Module 3, Room 1-dəki tam formatı (Threat+Vuln+Asset+Impact) əks etdirməlidir
- Ehtimal/Təsir qiymətləri əsaslandırılmalıdır (ixtiyari rəqəm olmamalıdır) — məsələn, "podratçı riski" üçün yüksək ehtimal, çünki artıq bir dəfə baş verib (tarixi məlumat, Module 3 Room 1-dən)
- GDPR riski Appetite sütununda "aşağı appetite-ə uyğun deyil, dərhal treatment tələb edir" kimi ifadə olunmalıdır, çünki Avropa müştərisi ilə müqavilə bundan asılıdır

**Ümumi qiymətləndirmə fəlsəfəsi:** Bu fazada məqsəd "mükəmməl sənəd" deyil, **düzgün strukturun və məntiqi zəncirin** nümayiş etdirilməsidir (insident → risk → policy → governance əlaqəsi aydın olmalıdır). Faza 2 və Faza 3-də bu material üzərində davam ediləcək, ona görə instruktor bu mərhələdə konstruktiv, istiqamətləndirici rəy verməlidir — sərt qiymətləndirmə Faza 3-ə (audit) saxlanmalıdır.
