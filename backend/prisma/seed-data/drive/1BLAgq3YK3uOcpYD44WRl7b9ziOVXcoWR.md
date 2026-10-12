# ROOM 1: BCP vs DRP — Fərqlər və Əlaqə

**Path:** GRC Fundamentals
**Module:** Business Continuity & Resilience
**Çətinlik:** Medium
**Təxmini vaxt:** 30 dəq

## Room haqqında

Module 3-də risk idarəetməsini öyrəndiniz — risk identifikasiyası, qiymətləndirmə, appetite/tolerance. Amma nə qədər yaxşı risk idarə etsəniz də, bəzi hadisələr (server otağında yanğın, təbii fəlakət, böyük kiberhücum) baş verə bilər. Bu zaman sual dəyişir: "riski necə azaldaq" yox, "fəlakət baş verəndə necə ayaqda qalaq və necə bərpa olaq". Bu room-da bu sualın iki tərəfini — Business Continuity Plan (BCP) və Disaster Recovery Plan (DRP) — bir-birindən ayırmağı və onların necə əlaqəli işlədiyini öyrənəcəksiniz.

## Öyrənmə nəticələri

- BCP və DRP-nin fərqli məqsədlərini izah edə bilmək
- BCP-nin DRP-ni öz daxilinə necə aldığını (əhatə dairəsi baxımından) başa düşmək
- Fəlakət həyat dövrünün (before/during/after) hansı mərhələsində hansı planın işə düşdüyünü bilmək
- Real ssenaridə hansı hadisənin BCP, hansının DRP tələb etdiyini müəyyən etmək

## Task 1 — BCP və DRP: İki Fərqli Sual

Bu iki termin tez-tez sinonim kimi işlədilir, amma onlar fərqli suallara cavab verir və fərqli əhatə dairəsinə malikdir.

**Disaster Recovery Plan (DRP)** — "texniki sistemlərimizi (server, məlumat bazası, şəbəkə) fəlakətdən sonra necə bərpa edirik?" sualına cavab verir. Fokusu dardır və əsasən **IT infrastrukturuna** yönəlib.

**Business Continuity Plan (BCP)** — "təşkilat bir fəlakət zamanı öz kritik funksiyalarını (təkcə IT deyil — maliyyə əməliyyatları, müştəri xidməti, istehsal) necə davam etdirir?" sualına cavab verir. Fokusu genişdir və **bütün biznesi** əhatə edir.

Bunu bir xəstəxana analogiyası ilə görək: DRP — konkret bir orqanın (məsələn, ürəyin) əməliyyatdan sonra necə bərpa olunacağına dair tibbi protokoldur — dar, texniki, spesifik. BCP isə bütün xəstənin sağ qalması üçün ümumi strategiyadır — nəfəs, qan dövranı, orqanların əlaqəli işləməsi. Ürək əməliyyatı (DRP) uğurlu ola bilər, amma xəstə (biznes) yenə də başqa səbəbdən itirilə bilər, əgər ümumi strategiya (BCP) yoxdursa.

| Xüsusiyyət | DRP | BCP |
|---|---|---|
| Əsas sual | Sistemləri necə bərpa edirik? | Biznesi necə davam etdiririk? |
| Əhatə dairəsi | IT infrastrukturu, məlumat, tətbiqlər | Bütün təşkilat (IT, İnsan Resursları, Əməliyyat, Kommunikasiya) |
| Tipik sahib | IT/Infrastruktur komandası | Risk/GRC komandası, İcraçı Rəhbərlik |
| Fokus zamanı | Fəlakətdən dərhal sonra (texniki bərpa) | Fəlakət boyu və sonra (bütün biznes fəaliyyəti) |
| Nümunə fəaliyyət | "Backup-dan məlumat bazasını bərpa et" | "Zədələnmiş ofis əvəzinə alternativ məkanda işi davam etdir, müştərilərə məlumat ver" |

**Vacib əlaqə:** DRP, BCP-nin bir **alt-komponentidir**, əvəzedicisi deyil. BCP çətiri altına DRP, kommunikasiya planı, alternativ iş yeri planı, təchizat zənciri davamlılığı və işçi təhlükəsizliyi planı kimi bir neçə komponent daxildir. DRP olmadan BCP natamamdır (sistemlər bərpa olunmayanda biznes davam edə bilməz), amma DRP tək başına da kifayət deyil (sistemlər işləsə belə, ofis yoxdursa, işçilər gələ bilmirsə, biznes yenə də dayana bilər).

**Sual 1**
DRP və BCP-nin əsas sualları arasındakı fərq nədir?

**Sual 2**
Xəstəxana analogiyasında "bütün xəstənin sağ qalması" hansı plana uyğun gəlir?

**Sual 3**
Niyə DRP BCP-nin əvəzedicisi yox, alt-komponentidir?

## Task 2 — BCP-nin Komponentləri: DRP Harada Yerləşir?

BCP-ni bir çətir kimi düşünsək, onun altında bir neçə komponent var və DRP bunlardan yalnız biridir. Bu komponentlərin hər biri fərqli bir sual həll edir:

| BCP Komponenti | Həll etdiyi sual |
|---|---|
| **Disaster Recovery Plan (DRP)** | IT sistemləri necə bərpa olunur? |
| **Kommunikasiya Planı** | İşçilərə, müştərilərə, tənzimləyicilərə necə məlumat verilir? |
| **Alternativ İş Yeri Planı** | Əsas ofis istifadəyə yararsızdırsa, iş haradan davam edir? |
| **Təchizat Zənciri Davamlılığı** | Əsas təchizatçı fəaliyyət göstərə bilmirsə, alternativ mənbə varmı? |
| **İşçi Təhlükəsizliyi/Rifahı Planı** | İşçilərin fiziki təhlükəsizliyi necə təmin olunur, psixoloji dəstək varmı? |
| **Kritik Funksiyaların Prioritetləşdirilməsi** | Məhdud resurslarla hansı funksiyalar əvvəl bərpa olunmalıdır? |

Bu komponentlərin bir-biri ilə necə işlədiyini bir ssenaridə görək: bir bankın mərkəzi ofisi güclü zəlzələdən zərər çəkir.

- **DRP** işə düşür: məlumat mərkəzi backup sistemlərə keçir, onlayn bankçılıq xidməti bərpa olunur
- **Kommunikasiya Planı** işə düşür: müştərilərə SMS/email ilə "xidmətlər müvəqqəti kəsilib, bərpa işləri gedir" məlumatı göndərilir, tənzimləyici (Mərkəzi Bank) bildiriş alır
- **Alternativ İş Yeri Planı** işə düşür: kritik əməliyyat işçiləri əvvəlcədən müəyyən edilmiş ehtiyat ofisə köçürülür
- **İşçi Təhlükəsizliyi Planı** işə düşür: zədələnmiş binada olan işçilər üçün təxliyə protokolu, sonradan psixoloji dəstək

Diqqət edin ki, bu dörd komponent **paralel** işləyir, ardıcıl deyil — DRP texniki sistemləri bərpa edərkən, eyni zamanda Kommunikasiya Planı fəallaşır. Real fəlakət zamanı bu paralellik kritikdir, çünki yalnız sistemləri bərpa edib müştəriyə heç nə deməmək (kommunikasiya olmadan) reputasiya baxımından demək olar ki, texniki fəlakət qədər zərərli ola bilər.

**Sual 1**
BCP-nin altı komponentini sadalayın.

**Sual 2**
Zəlzələ ssenarisində hansı komponentlər paralel işə düşür?

**Sual 3**
Niyə yalnız DRP-ni yaxşı icra edib Kommunikasiya Planını nəzərə almamaq riskli ola bilər?

## Task 3 — Hansı Hadisə Hansı Planı İşə Salır?

Praktikada bir çox hadisə həm DRP, həm BCP elementlərini eyni anda tələb edir, amma bəzi hadisələr daha çox bir tərəfə "ağırlıq" verir. Bu fərqləndirməni bacarmaq, kriz zamanı düzgün komandanı, düzgün prosedura yönləndirmək üçün vacibdir.

| Hadisə | Əsasən DRP tələb edir? | Əsasən BCP (geniş) tələb edir? | Səbəb |
|---|---|---|---|
| Ransomware hücumu, məlumat bazası şifrələnib | ✅ Əsas fokus | Əlavə olaraq bəli | Problem texnikidir — bərpa məlumat bazasının restore edilməsidir; kommunikasiya da lazımdır, amma ofis/işçi məsələsi yoxdur |
| Ofis binasında yanğın | Qismən | ✅ Əsas fokus | Fiziki infrastruktur məhv olub — işçilər harada işləyəcək, müştəriyə necə xidmət ediləcək daha geniş sualdır |
| Əsas bulud provayderinin (AWS/Azure) böyük kəsintisi | ✅ Əsas fokus | Qismən | Texniki asılılıq problemi — DRP-də ehtiyat provayder/region planı olmalıdır |
| Pandemiya (işçilər evdən çıxa bilmir) | ❌ Minimal | ✅ Əsas fokus | Sistemlər işləyir, amma insan resursu əlçatan deyil — uzaqdan iş, kommunikasiya, insan resursları planları önə çıxır |
| Əsas təchizatçının müflisləşməsi | ❌ Yox | ✅ Əsas fokus | Tamamilə əməliyyat/təchizat zənciri məsələsidir, IT sistemlərinə aid deyil |

Bu cədvəldən çıxan əsas nəticə: DRP "server otağı" səviyyəsində düşünür, BCP isə "bütün təşkilat" səviyyəsində. Real GRC təcrübəsində hər iki plan ayrıca sənədləşdirilir, amma birlikdə test edilir (məsələn, illik "tabletop exercise" — masaüstü simulyasiya təlimi hər iki planı eyni ssenaridə sınayır).

Praktiki məsləhət: bir hadisəni təhlil edərkən özünüzə sual verin — "Bu hadisə yalnız texnologiyaya təsir edir, yoxsa insanlara/proseslərə/fiziki məkana da?" Cavab yalnız "texnologiya"-dırsa, güman ki, DRP əsas alətinizdir. Cavab genişdirsə, BCP-nin digər komponentləri də işə düşməlidir.

**Sual 1**
Ransomware hücumu niyə əsasən DRP tələb edir, BCP-nin digər komponentləri niyə minimal işə düşür?

**Sual 2**
Pandemiya ssenarisində DRP niyə "minimal" rol oynayır?

**Sual 3**
"Tabletop exercise" nədir və niyə hər iki planı birlikdə sınamaq vacibdir?

## Yekun Yoxlama (Summary Quiz)

1. DRP və BCP-nin əsas sualları arasındakı fərqi izah edin.
2. BCP-nin altı komponentindən dördünü sadalayın.
3. Niyə DRP BCP-nin alt-komponentidir, paralel/müstəqil sənəd deyil?
4. Ofis binasında yanğın hadisəsi niyə əsasən BCP (geniş mənada) tələb edir?
5. Bir ransomware hücumu zamanı hansı komponentlər (DRP-dən başqa) yenə də işə düşməlidir və niyə?

---
