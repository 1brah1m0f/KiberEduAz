# ROOM 4: GRC Alətləri Landşaftı

**Path:** GRC Fundamentals
**Module:** Bonus / İrəliləyiş Mövzular
**Çətinlik:** Elective
**Təxmini vaxt:** 30 dəq (yeni)

## Room haqqında

Kursun əvvəlindən bəri öyrəndiyimiz hər şeyi — Policy sənədləri (Module 2), BIA/RTO/RPO (Module 4), Audit prosesi və Control Testing (Module 6) — real təşkilatlar çox vaxt Excel cədvəllərində deyil, **xüsusi GRC proqram təminatlarında** idarə edir. Bu room-da bazarda mövcud olan əsas GRC alətləri kateqoriyalarını, onların fərqlərini və bir təşkilat üçün düzgün alət seçmə meyarlarını öyrənəcəksiniz.

**Diqqət:** Bu, məhsul landşaftıdır və sürətlə dəyişir — konkret alətlərin funksionallığı, qiyməti dəyişə bilər. Məqsəd konkret bir alətin təbliğatı deyil, **kateqoriyaları və seçim məntiqini** anlamaqdır.

## Öyrənmə nəticələri

- GRC alətlərinin əsas kateqoriyalarını fərqləndirə bilmək
- Enterprise (Archer, ServiceNow) və agile/yüngül alətlər (LogicGate, Vanta, Drata) arasındakı fərqi izah edə bilmək
- Açıq-mənbə (open-source) GRC alternativlərinin nə vaxt məntiqli olduğunu başa düşmək
- Alət seçimi üçün əsas meyarları real ssenariyə tətbiq edə bilmək

## Task 1 — GRC Alətlərinin Əsas Kateqoriyaları

GRC bazarını dörd əsas kateqoriyaya bölmək olar:

```
┌─────────────────────────────────────────────────────────────┐
│ 1. ENTERPRISE / LEGACY GRC PLATFORMALARI                        │
│    Nümunə: RSA Archer, ServiceNow GRC/IRM, IBM OpenPages,      │
│    MetricStream                                                  │
│    Xüsusiyyət: Çox geniş funksionallıq, dərin konfiqurasiya,   │
│    böyük təşkilatlar üçün, tətbiqi uzun və bahalı (aylar,      │
│    ixtisaslaşmış heyət tələb edir)                               │
├─────────────────────────────────────────────────────────────┤
│ 2. AGILE / KONFİQURASİYA-YÖNÜMLÜ GRC PLATFORMALARI              │
│    Nümunə: LogicGate, Riskonnect, Onspring                      │
│    Xüsusiyyət: Enterprise platformalara nisbətən daha sürətli   │
│    tətbiq, "no-code" iş axını qurma, orta ölçülü/böyüyən        │
│    təşkilatlar üçün uyğun                                        │
├─────────────────────────────────────────────────────────────┤
│ 3. COMPLIANCE AUTOMATION PLATFORMALARI                            │
│    Nümunə: Vanta, Drata, Secureframe                            │
│    Xüsusiyyət: Əsasən SOC 2/ISO 27001 kimi konkret sertifikat  │
│    məqsədilə, bulud sistemləri ilə avtomatik inteqrasiya        │
│    (Module 8, Room 3-dəki CCM prinsipinə bənzər), start-up/     │
│    orta ölçülü şirkətlər üçün sürətli qurulum                    │
├─────────────────────────────────────────────────────────────┤
│ 4. AÇIQ-MƏNBƏ (OPEN-SOURCE) ALTERNATİVLƏR                        │
│    Nümunə: Eramba, CISO Assistant                                │
│    Xüsusiyyət: Pulsuz/aşağı xərcli, öz infrastrukturunda         │
│    (self-hosted) işlədilə bilər, texniki heyət tələb edir,      │
│    kiçik büdcəli və ya məlumat suverenliyi vacib olan            │
│    təşkilatlar üçün                                                │
└─────────────────────────────────────────────────────────────┘
```

**Vacib məntiq:** "Ən yaxşı" alət deyə bir şey yoxdur — yalnız **konkret təşkilat üçün ən uyğun** alət var. Bir kateqoriyanın gücü digərinin zəifliyi ola bilər: Enterprise platformalar çox güclüdür, amma kiçik komanda üçün "artıq ağırlıq"dır; Compliance Automation alətləri sürətlidir, amma dərin, çoxfunksiyalı risk idarəetməsi tələb edən böyük bank üçün kifayət etməyə bilər.

**Sual 1**
Dörd GRC alət kateqoriyasını sadalayın və hər birindən bir nümunə verin.

**Sual 2**
Enterprise platformaların əsas güclü və zəif tərəfi nədir?

**Sual 3**
Açıq-mənbə alətlər hansı tip təşkilat üçün xüsusilə məntiqli ola bilər?

## Task 2 — Alət Seçimi Meyarları

Bir GRC aləti seçərkən nəzərə alınmalı əsas meyarlar bunlardır:

**1. Təşkilatın ölçüsü və yetkinliyi** — Kiçik, hələ formalaşan GRC proqramı üçün ağır enterprise platforma mənasızdır (istifadə olunmayan funksionallıq üçün pul xərcləmək); əksinə, böyük, mürəkkəb risk mühitinə malik bank üçün yüngül compliance automation aləti kifayət etməyə bilər.

**2. Əsas məqsəd** — Əgər əsas hədəf konkret sertifikat (SOC 2, ISO 27001) əldə etməkdirsə, Compliance Automation platforması sürətli yol ola bilər. Əgər hədəf geniş, çoxfunksiyalı risk idarəetməsi (əməliyyat riski, üçüncü tərəf riski, audit idarəetməsi birlikdə) qurmaqdırsa, Enterprise/Agile platforma daha uyğundur.

**3. Mövcud texnologiya stack-i ilə inteqrasiya** — Module 8, Room 3-dəki (CCM) kimi, alət mövcud sistemlərlə (bulud provayderləri, identity provayderləri, ticketing sistemləri) nə qədər asan inteqrasiya oluna bilir? Artıq bir ITSM platforması (məsələn ServiceNow) istifadə edən təşkilat üçün eyni ekosistemdə GRC modulunu əlavə etmək inteqrasiya baxımından üstünlük verə bilər.

**4. Büdcə və implementasiya vaxtı** — Enterprise platformalar adətən yüksək lisenziya xərci və uzun (aylarla) implementasiya tələb edir, ixtisaslaşmış konsultant lazım ola bilər; agile və compliance automation alətləri adətən daha sürətli (həftələr) işə düşür.

**5. Məlumat suverenliyi/nəzarət tələbləri** — Bəzi sənayelər (dövlət, maliyyə) və ya ölkələr məlumatın öz infrastrukturunda saxlanmasını tələb edə bilər — bu hallarda açıq-mənbə, self-hosted alətlər üstünlük qazanır.

**Qərar ağacı (sadələşdirilmiş):**

```
Sual 1: Əsas məqsəd konkret sertifikatdırmı (SOC 2/ISO 27001)?
  → BƏLİ: Compliance Automation platformasına bax
  → XEYR: Sual 2-yə keç

Sual 2: Təşkilat böyükdür, çoxfunksiyalı risk idarəetməsi lazımdır?
  → BƏLİ, böyük büdcə var: Enterprise platformaya bax
  → BƏLİ, amma büdcə/vaxt məhduddur: Agile platformaya bax
  → XEYR (kiçik/orta, sadə ehtiyac): Sual 3-ə keç

Sual 3: Məlumat suverenliyi/büdcə kritik məhdudiyyətdirmi?
  → BƏLİ: Açıq-mənbə alternativə bax
  → XEYR: Agile və ya Compliance Automation arasında seç
```

**Sual 1**
Beş əsas seçim meyarını sadalayın.

**Sual 2**
Niyə "ən güclü/ən bahalı alət həmişə ən yaxşı seçimdir" fikri səhvdir?

**Sual 3**
Mövcud texnologiya stack-i ilə inteqrasiya niyə vacib bir meyardır?

## Task 3 — Praktiki Tapşırıq: TechNova üçün Alət Tövsiyəsi

TechNova MMC-nin CISO-su (Module 2, Room 2-dəki governance strukturunu xatırlayın) sizdən GRC aləti seçimi üçün ilkin tövsiyə hazırlamağınızı xahiş edib.

**TechNova-nın vəziyyəti:**

```
- 250 işçi, orta ölçülü fintech şirkət
- Hazırda əsasən Excel cədvəllərində risk register və audit
  tapıntılarını izləyir — bu, artıq idarəolunmaz hala gəlib
- Yaxın hədəf: 6 ay ərzində SOC 2 Type II sertifikatını əldə
  etmək (əsas müştəri tələbidir)
- Orta müddətli hədəf (1-2 il): daxili audit (Module 6), risk
  idarəetməsi (Module 3) və üçüncü tərəf təhlükəsizlik
  qiymətləndirmələrini vahid platformada birləşdirmək
- Büdcə məhduddur — böyük ilkin investisiya (məsələn,
  altı-rəqəmli enterprise lisenziya) hazırda mümkün deyil
- Maliyyə sektorunda fəaliyyət göstərdiyi üçün məlumatların
  harada saxlanacağına həssasdır, amma hələlik özəl
  infrastruktur tələbi yoxdur
```

**Sizin tapşırığınız:**

**Addım 1** — Task 2-dəki qərar ağacını TechNova-nın vəziyyətinə tətbiq edin

**Addım 2** — Qısamüddətli (0-6 ay) və orta müddətli (1-2 il) üçün ayrı-ayrı tövsiyə verin — bunlar eyni alət ola, ya da olmaya bilər

**Addım 3** — Tövsiyənizi əsaslandırın (hansı meyarlar bu qərara gətirdi?)

**Kömək üçün nümunə həll strukturu:**

```
QISAMÜDDƏTLİ TÖVSİYƏ (0-6 ay): Compliance Automation Platforması

Əsaslandırma:
Qərar ağacının 1-ci sualına cavab "BƏLİ"dir — əsas hədəf konkret
sertifikatdır (SOC 2 Type II). Compliance Automation platformaları
məhz bu ssenari üçün optimallaşdırılıb: bulud sistemləri ilə
avtomatik inteqrasiya vasitəsilə sübut (evidence) toplanmasını
sürətləndirir (Module 8, Room 3-dəki CCM prinsipinə bənzər),
implementasiya həftələrlə (aylarla deyil) başa çatır və büdcə
enterprise platformalardan aşağıdır. Bu, TechNova-nın 6 aylıq
hədəfinə və məhdud büdcəsinə uyğun gəlir.

ORTA MÜDDƏTLİ TÖVSİYƏ (1-2 il): Agile GRC Platformasına Keçidi
Nəzərdən Keçirin

Əsaslandırma:
Orta müddətdə TechNova-nın hədəfi genişlənir — təkcə sertifikat
yox, daxili audit, risk idarəetməsi və üçüncü tərəf
qiymətləndirmələrini əhatə edən vahid platforma. Bu, Compliance
Automation alətlərinin əsas güclü tərəfindən (dar, sertifikat-
yönümlü fokus) kənara çıxır. Agile platforma (Enterprise yox,
çünki büdcə və komanda ölçüsü hələ tam enterprise səviyyəsinə
uyğun olmaya bilər) daha geniş funksionallıq təklif edərkən,
implementasiya sürəti və xərci enterprise platformalardan aşağı
qalır.

QEYD: Açıq-mənbə alternativ bu mərhələdə tövsiyə edilmir, çünki
TechNova-nın hazırda özəl infrastruktur/self-hosted tələbi yoxdur
və məhdud texniki heyət resursu bu cür alətin idarə olunmasını
çətinləşdirə bilər.
```

**Öz-özünə keyfiyyət yoxlaması (Checklist):**

```
☐ Qərar ağacı addım-addım TechNova-nın konkret məlumatlarına
  tətbiq edilib
☐ Qısamüddətli və orta müddətli tövsiyələr aydın ayrılıb
☐ Hər tövsiyə üçün ən azı 2 konkret meyara (büdcə, vaxt,
  funksionallıq həcmi və s.) istinad edilib
☐ Açıq-mənbə seçiminin niyə (hazırda) uyğun olmadığı izah
  edilib
```

**Sual 1**
Niyə TechNova üçün ilkin mərhələdə Enterprise platforma (Archer, ServiceNow GRC) tövsiyə edilmir?

**Sual 2**
Orta müddətli tövsiyədə niyə yenidən Enterprise deyil, Agile platforma seçildi?

**Sual 3**
Əgər TechNova gələcəkdə 1000+ işçiyə böyüsə və Avropa bankları ilə tənzimləyici səviyyəli əməkdaşlığa girsə, bu, alət seçimi tövsiyəsini necə dəyişdirərdi?

## Yekun Yoxlama (Summary Quiz)

1. Dörd GRC alət kateqoriyasını sadalayın.
2. Alət seçimində əsas beş meyarı sadalayın.
3. Compliance Automation platformaları hansı ssenaridə xüsusilə güclüdür?
4. Açıq-mənbə GRC alətləri hansı şəraitdə tövsiyə olunur?
5. TechNova ssenarisində qısamüddətli və orta müddətli tövsiyələr niyə fərqli idi?

---
