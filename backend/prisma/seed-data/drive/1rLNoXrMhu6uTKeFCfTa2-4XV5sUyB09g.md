# ROOM 2: BIA (Business Impact Analysis) — Praktiki

**Path:** GRC Fundamentals
**Module:** Business Continuity & Resilience
**Çətinlik:** Medium
**Təxmini vaxt:** 40 dəq (praktiki — RTO/RPO hesablama)

## Room haqqında

Room 1-də BCP və DRP-nin nə olduğunu və necə əlaqəli işlədiyini öyrəndiniz. Amma bir sual hələ cavabsız qalır: hansı sistem, hansı funksiya nə qədər tez bərpa olunmalıdır? Hamısı eyni prioritetə malik deyil — mühasibatlıq sistemi 3 gün gözləyə bilər, amma onlayn ödəniş sistemi 1 saat da dayana bilməz. Bu room-da bu sualı cavablandıran alət — Business Impact Analysis (BIA) — ilə tanış olacaqsınız və iki əsas metrik olan RTO və RPO-nu praktiki hesablayacaqsınız.

## Öyrənmə nəticələri

- BIA-nın məqsədini və prosesini izah edə bilmək
- RTO (Recovery Time Objective) və RPO (Recovery Point Objective) anlayışlarını dəqiq fərqləndirmək
- Kritiklik səviyyəsinə görə funksiyaları prioritetləşdirmək
- Real ssenari əsasında konkret sistemlər üçün RTO/RPO hesablamaq və əsaslandırmaq

## Task 1 — BIA Nədir və Niyə Lazımdır?

Business Impact Analysis — bir fəlakət zamanı hər bir biznes funksiyasının/sisteminin dayanmasının nə qədər zərər yaradacağını, zamanla necə artacağını sistemli şəkildə qiymətləndirən prosesdir. BIA-nın əsas sualı budur: **"Bu sistem/funksiya X saat/gün dayansa, nə itiririk?"**

BIA-nı Room 1-dəki Kritik Funksiyaların Prioritetləşdirilməsi komponentinin "necə" hissəsi kimi düşünə bilərsiniz — BIA olmadan "bu funksiya kritikdir" demək subyektiv təxmindir, BIA ilə isə bu, ölçülə bilən analizə əsaslanır.

Bir analogiya: təsəvvür edin ki, evinizdə yanğın başlayıb və yalnız 3 əşya götürə bilərsiniz. Sənədləriniz, ailə albomunuz və noutbukunuz arasında seçim etməlisiniz — bu seçim təsadüfi olmamalıdır, hər əşyanın "itirilsə nə qədər zərər verəcəyi" barədə sürətli daxili hesablama aparırsınız. BIA məhz bunu təşkilat səviyyəsində, əvvəlcədən, sakit şəraitdə edir — kriz anında deyil.

**BIA prosesinin addımları:**

```
1. FUNKSİYALARI SİYAHIYA ALMAQ
   Bütün biznes funksiyaları/sistemləri müəyyən edilir
   (məs. ödəniş sistemi, mühasibatlıq, müştəri dəstəyi, e-poçt)

2. TƏSİRİ ZAMANLA ÖLÇMƏK
   Hər funksiya üçün "1 saat, 4 saat, 1 gün, 3 gün dayansa
   nə baş verər?" sualı verilir — maliyyə, hüquqi, reputasiya
   təsiri qiymətləndirilir

3. ASILILIQLARI XƏRİTƏLƏNDİRMƏK
   Bu funksiya hansı digər sistemlərdən/resurslardan asılıdır?
   (məs. Ödəniş sistemi → məlumat bazası → şəbəkə → elektrik)

4. RTO/RPO TƏYİN ETMƏK
   Hər funksiya üçün konkret bərpa hədəfləri müəyyənləşdirilir

5. PRİORİTETLƏŞDİRMƏ SIRASI YARATMAQ
   Məhdud resurslarla hansı sistem əvvəl bərpa olunmalıdır
```

Diqqət edin: BIA-nın 2-ci addımı (Təsiri Zamanla Ölçmək) BIA-nın "ürəyidir". Burada vacib məntiq budur ki, **təsir xətti deyil, artandır** — 1 saatlıq kəsinti minimal zərər verə bilər, amma eyni sistemin 3 gün dayanması qat-qat böyük (bəzən qeyri-xətti) zərərə səbəb ola bilər, çünki müştərilər rəqiblərə keçir, tənzimləyici cərimələr aktivləşir, reputasiya zədəsi dərinləşir.

| Zaman | Ödəniş Sisteminin Dayanması — Təsir |
|---|---|
| 15 dəqiqə | Minimal — bir neçə müştəri şikayəti |
| 1 saat | Orta — sosial mediada narazılıq, dəstək xəttinə yük |
| 4 saat | Ciddi — media diqqəti, bəzi müştərilər rəqibə keçir |
| 24 saat | Kritik — tənzimləyici bildiriş tələb olunur, böyük maliyyə itkisi, mümkün lisenziya araşdırması |

**Sual 1**
BIA-nın əsas sualı nədir?

**Sual 2**
BIA prosesinin beş addımını sadalayın.

**Sual 3**
"Təsir xətti deyil, artandır" ifadəsi nə deməkdir? Ödəniş sistemi cədvəlindən nümunə verin.

## Task 2 — RTO və RPO: İki Fərqli Ölçü

BIA prosesinin nəticəsində hər sistem üçün iki əsas metrik təyin edilir və bunlar tez-tez qarışdırılır, çünki hər ikisi zamanla bağlıdır, amma tamamilə fərqli sualları cavablandırırlar.

**RTO (Recovery Time Objective)** — "Sistem nə qədər müddətdə YENIDƏN İŞLƏMƏLİDİR?" sualına cavab verir. Bu, **dayanma müddətinin** maksimum qəbuledilən həddidir.

**RPO (Recovery Point Objective)** — "Nə qədər MƏLUMAT İTKİSİ qəbuledilir?" sualına cavab verir. Bu, son backup ilə fəlakət anı arasındakı **maksimum vaxt fərqidir**.

Bu ikisinin fərqini bir zaman xətti ilə vizuallaşdıraq:

```
        Son Backup          FƏLAKƏT           Sistem Bərpa Olunur
            |                   |                      |
            |<----- RPO ------->|<------- RTO --------->|
            |    (məlumat        |    (dayanma müddəti)  |
            |    itkisi həddi)   |                       |
     ───────●───────────────────●──────────────────────●──────> zaman
```

RPO **geriyə** baxır (son nə vaxt backup alınıb, o andan fəlakətə qədər olan məlumat itə bilər), RTO isə **irəliyə** baxır (fəlakətdən sistemin bərpasına qədər keçən vaxt). Bu, çox vacib fərqdir — bir sistem sürətli RTO-ya (tez bərpa olunur), amma zəif RPO-ya (çox məlumat itirir) malik ola bilər, və ya əksinə.

Bir bank analoji ilə bunu izah edək: RPO — "son dəfə çek dəftərinizi nə vaxt yoxlamısınız" (bu andan indiyə qədər olan əməliyyatları xatırlamırsınızsa, itirmiş sayılırsınız). RTO — "bankın yenidən açılmasına nə qədər gözləməli olduğunuz" (xidmətin bərpası). Bunlar əlaqəlidir, amma müstəqil ölçülərdir.

| | RTO | RPO |
|---|---|---|
| Sual | Nə qədər sürətlə bərpa oluruq? | Nə qədər məlumat itirə bilərik? |
| İstiqamət | İrəli (fəlakətdən bərpaya) | Geri (son backup-dan fəlakətə) |
| Təsir etdiyi qərar | Bərpa infrastrukturu, ehtiyat sistemlər | Backup tezliyi, replikasiya strategiyası |
| Kiçik ədəd nə deməkdir | Sürətli bərpa tələb olunur (bahalı) | Az məlumat itkisi icazəlidir (tez-tez backup) |

**RTO/RPO seçiminin maliyyə təsiri:** Kiçik RTO (məsələn, 15 dəqiqə) əldə etmək üçün real-time failover sistemi lazımdır — bu, çox bahalıdır. Kiçik RPO (məsələn, 5 dəqiqə) əldə etmək üçün tez-tez, demək olar ki, davamlı backup/replikasiya lazımdır — bu da resurs tələb edir. Ona görə RTO/RPO təyin edərkən yalnız "nə qədər az itki istəyirik" yox, "bunun üçün nə qədər ödəməyə hazırıq" sualı da nəzərə alınmalıdır — bu, Module 3-dəki Risk Appetite konsepti ilə birbaşa bağlıdır: aşağı RTO/RPO = aşağı risk appetite = yüksək investisiya.

**Sual 1**
RTO və RPO-nun əsas sualları arasındakı fərq nədir?

**Sual 2**
Bank analogiyasında RPO-ya uyğun gələn element nədir?

**Sual 3**
Niyə çox kiçik RTO/RPO əldə etmək baha başa gəlir?

## Task 3 — Praktiki Tapşırıq: RTO/RPO Hesablayın

İndi TechNova MMC ssenarisinə (Module 2, Room 3-dən tanış) qayıdaq və onun üçün BIA aparıb konkret RTO/RPO dəyərləri təyin edəcəyik.

**Ssenari:** TechNova MMC-nin dörd əsas sistemi var. Sizin tapşırığınız hər biri üçün BIA əsasında RTO və RPO təyin etmək və əsaslandırmaqdır.

```
Sistem 1: Müştəri Ödəniş Portalı
  - Gündə orta hesabla 500 əməliyyat işlənir
  - Dayanarsa: dərhal gəlir itkisi, müştəri etimadı zərəri

Sistem 2: Daxili Mühasibatlıq Sistemi
  - Yalnız iş saatlarında istifadə olunur
  - Dayanarsa: mühasibatlıq işi gecikir, amma xarici təsir yoxdur

Sistem 3: Marketinq Veb-saytı (statik məlumat)
  - Əsasən məlumat xarakterlidir, tranzaksiya aparmır
  - Dayanarsa: reputasiya baxımından kiçik narahatlıq

Sistem 4: HR Sənədləşmə Sistemi (işçi məlumatları)
  - Gündəlik istifadə tələb olunmur, amma məlumat çox həssasdır
  - Dayanarsa: birbaşa təsir minimal, amma məlumat itkisi ciddi
    hüquqi problemdir
```

**Addım 1 — Hər sistem üçün kritiklik səviyyəsini müəyyən edin** (BIA Task 1-dəki "təsir zamanla necə artır" məntiqini tətbiq edərək)

**Addım 2 — RTO təyin edin** (nə qədər tez bərpa olunmalıdır?)

**Addım 3 — RPO təyin edin** (nə qədər məlumat itkisi icazəlidir?)

**Addım 4 — Əsaslandırın** (niyə bu ədədi seçdiniz?)

Kömək üçün nümunə həll (Sistem 1 üzrə):

```
Sistem 1: Müştəri Ödəniş Portalı

Kritiklik: YÜKSƏK
Səbəb: Birbaşa gəlirə təsir edir, hər dəqiqə dayanma real
maliyyə itkisi deməkdir, müştəri etimadına təsir sürətli artır.

RTO: 30 dəqiqə
Əsaslandırma: Bu sistem gəlir generasiya edir; 30 dəqiqədən
çox dayanma qəbuledilməzdir, çünki rəqiblərə keçid riski
yüksəkdir (Task 1 cədvəlindəki "1 saat = orta təsir" həddindən
əvvəl bərpa hədəflənir).

RPO: 5 dəqiqə
Əsaslandırma: Maliyyə əməliyyatları həssasdır — 5 dəqiqədən
çox məlumat itkisi (tranzaksiya tarixçəsi) həm maliyyə, həm
hüquqi problem yaradar; bu, real-time replikasiya tələb edir.
```

**Öz-özünə keyfiyyət yoxlaması (Checklist):**

```
☐ Hər 4 sistem üçün kritiklik səviyyəsi (Yüksək/Orta/Aşağı)
  müəyyən edilib
☐ Hər sistemin RTO-su konkret rəqəmlə ifadə olunub (dəqiqə/
  saat/gün)
☐ Hər sistemin RPO-su konkret rəqəmlə ifadə olunub
☐ Yüksək kritiklik sistemlərinin RTO/RPO-su aşağı kritiklik
  sistemlərindən mütləq kiçikdir (məntiqi ardıcıllıq qorunub)
☐ Hər ədəd üçün "niyə bu ədəd" əsaslandırması yazılıb,
  təsadüfi seçilməyib
```

**Sual 1**
Sistem 2 (Mühasibatlıq) üçün öz RTO/RPO təklifinizi yazın və əsaslandırın.

**Sual 2**
Sistem 4 (HR Sənədləşmə) niyə "aşağı RTO, amma sərt RPO" tələb edə bilər? (İpucu: aşağı istifadə tezliyi ilə yüksək məlumat həssaslığı arasındakı fərqi düşünün)

**Sual 3**
Niyə Sistem 3-ün (Marketinq Veb-saytı) RTO/RPO-su Sistem 1-dən əhəmiyyətli dərəcədə fərqli olmalıdır?

## Yekun Yoxlama (Summary Quiz)

1. BIA-nın əsas sualını və beş addımlı prosesini qısaca izah edin.
2. RTO və RPO arasındakı fərqi bir cümlə ilə ifadə edin.
3. Zaman xəttində RPO "geriyə", RTO "irəliyə" baxır — bunu izah edin.
4. Niyə çox aşağı RTO/RPO həmişə "ən yaxşı seçim" deyil?
5. Dörd sistemli TechNova ssenarisində hansı sistemin ən sərt (kiçik) RTO/RPO-ya ehtiyacı var və niyə?

---
