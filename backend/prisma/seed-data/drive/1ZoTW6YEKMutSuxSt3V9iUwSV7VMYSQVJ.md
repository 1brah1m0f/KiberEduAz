# ROOM 2 (Faza 2): Compliance Gap Analysis & Treatment Planı

**Path:** GRC Fundamentals
**Module:** Capstone
**Çətinlik:** Hard
**Təxmini vaxt:** 45 dəq (praktiki — analiz və planlaşdırma)

## Room haqqında

Faza 1-də TechNova üçün Policy və Risk Register hazırladınız. İndi sual budur: bu sənədlər TechNova-nı hansısa tanınmış framework-ə (Module 5-dən) nə qədər yaxınlaşdırır? Bu fazada Module 5-dəki Gap Analysis bacarığınızı, Module 3-dəki Treatment Strategiyalarını və Module 4-dəki BCP/DR biliyinizi birləşdirərək TechNova üçün tam bir Gap Analysis və Treatment Planı hazırlayacaqsınız. Bu, Avropa müştərisinin "təhlükəsizlik sənədləşməniz varmı?" sualına konkret cavab verəcək sənəddir.

## Öyrənmə nəticələri

- Framework seçimini biznes kontekstinə əsaslanaraq əsaslandırmaq
- Real (natamam) vəziyyəti framework tələbləri ilə müqayisə edərək Gap Analysis aparmaq
- Hər boşluq üçün uyğun Risk Treatment strategiyası seçmək
- BCP/DR boşluqlarını ümumi compliance mənzərəsinə inteqrasiya etmək

## Addım 1 — Framework Seçimi və Əsaslandırma

TechNova üçün hansı framework ən uyğundur? Module 5-də öyrəndiyiniz seçimlərə (ISO 27001, NIST CSF, SOC 2) qayıdın.

**Qərar vermək üçün TechNova kontekstini nəzərdən keçirin:**
- Avropa müştərisi var → GDPR aidiyyatlıdır, amma GDPR öz-özlüyündə texniki framework deyil
- Müştəri "təhlükəsizlik sənədləşməniz varmı?" soruşur → formal, tanınan bir sertifikat/attestasiya faydalı olardı
- Kiçik-orta ölçülü şirkət (80 işçi) → tam ISO 27001 sertifikatlaşdırması bahalı və uzun ola bilər

**Qərar cədvəli (özünüz doldurun):**

| Framework | Uyğunluq TechNova-ya | Üstünlük | Çətinlik |
|---|---|---|---|
| ISO 27001 | | | |
| NIST CSF | | | |
| SOC 2 | | | |

Seçiminizi bir paraqrafda əsaslandırın — "hansı framework, niyə, hansı alternativlərə üstünlük təşkil edir" formatında.

*Fikirləşdirici sual: bəlkə TechNova-ya ideal cavab "tam sertifikatlaşdırma" deyil, "framework-ün əsas nəzarətlərini könüllü tətbiq edib, sənədləşdirmə ilə müştəriyə etimad vermək"dir? Bu, real dünyada kiçik şirkətlərin tez-tez izlədiyi yoldur — Module 5, Room 5-dəki Gap Analysis bacarığı məhz bu qərarı dəstəkləmək üçündür.*

## Addım 2 — Gap Analysis Aparın

Seçdiyiniz framework-ün əsas domenlərindən (kateqoriyalarından) 5-ini seçin və TechNova-nın Faza 1-dəki vəziyyətini (Policy, Risk Register, Governance) bu domenlərlə müqayisə edin.

**Gap Analysis Cədvəli:**

| Domen | Framework tələbi (qısaca) | TechNova-nın hazırkı vəziyyəti | Boşluq (Var/Qismən/Yox) |
|---|---|---|---|
| Access Control | | | |
| Asset Management | | | |
| Incident Response | | | |
| Business Continuity | | | |
| Third-Party/Vendor Risk | | | |

**Kömək — nümunə sətir (Incident Response üzrə necə doldurulur):**

```
Domen: Incident Response
Framework tələbi: Sənədləşdirilmiş insident cavab planı,
rollar müəyyən edilib, bildiriş prosedurları mövcuddur.
TechNova-nın vəziyyəti: Faza 1-də iki insident (noutbuk, USB)
qeyri-formal həll edilib, sənədləşdirilmiş proses yoxdur.
Boşluq: VAR (tam boşluq) — formal İnsident Cavab Prosedürü
hazırlanmalıdır.
```

Diqqət edin: "Third-Party/Vendor Risk" domenində TechNova-nın podratçı insidenti (Faza 1-dən) birbaşa əlaqəlidir — bu, Module 3, Room 1-dəki "risk identifikasiyası mənbələri"ndən biri olan "tarixi insident jurnalı"nın praktiki tətbiqidir.

## Addım 3 — BCP/DR Boşluğunu Qiymətləndirin

Module 4-dəki material əsasında sürətli bir qiymətləndirmə aparın: TechNova-nın hazırda **heç bir** DRP/BCP sənədi yoxdur (ssenaridə qeyd olunmayıb = mövcud deyil).

- TechNova-nın ən kritik sistemi (fərz edin: müştəri layihələrinin saxlandığı bulud infrastrukturu) üçün təxmini RTO/RPO təklif edin (Module 4, Room 2-dəki metodologiyanı tətbiq edərək)
- Bu boşluğu yuxarıdakı Gap Analysis cədvəlinə "Business Continuity" sətri kimi əlavə edin (artıq edilibsə, indi RTO/RPO detalını əlavə edin)

## Addım 4 — Treatment Planı Yazın

Module 3, Room-larından xatırlayın: hər risk/boşluq üçün Treatment strategiyası seçilməlidir (Qəbul, Azaltma, Transfer, Qaçınma — bu anlayışlar Room 4-də ətraflı işlənəcək, burada əsas məntiqi tətbiq edin: **boşluğu necə bağlayacağıq?**).

**Treatment Planı Cədvəli:**

| Boşluq (Addım 2-dən) | Treatment Strategiyası | Konkret Fəaliyyət | Prioritet (Yüksək/Orta/Aşağı) | Təxmini Müddət |
|---|---|---|---|---|
| Incident Response prosesi yoxdur | Azaltma | Formal İR proseduru yazmaq, komanda təyin etmək | Yüksək | 1 ay |
| BCP/DRP yoxdur | Azaltma | Kritik sistemlər üçün BIA aparmaq, DRP yazmaq | Yüksək | 2 ay |
| ... | | | | |

Minimum 4 boşluq üçün tam sətir doldurun. Prioritet təyin edərkən Faza 1-dəki Risk Register-inizdəki risk xallarına istinad edin — yüksək risk xallı sahələr yüksək prioritet almalıdır (bu, iki fazanın bir-birinə bağlı olduğunu göstərir).

## Öz-özünə Qiymətləndirmə Rubriki

| Meyar | Zəif (1) | Qənaətbəxş (2) | Güclü (3) |
|---|---|---|---|
| **Framework seçimi** | Əsaslandırma yoxdur | Ümumi əsaslandırma | TechNova-nın konkret kontekstinə (ölçü, müştəri profili) əsaslanıb |
| **Gap Analysis** | Domenlər səthi təsvir olunub | Boşluqlar müəyyən edilib, amma Faza 1 ilə əlaqə yoxdur | Boşluqlar Faza 1-dəki konkret faktlarla (insidentlər, Risk Register) əsaslandırılıb |
| **BCP/DR qiymətləndirməsi** | RTO/RPO yoxdur | RTO/RPO var, amma əsaslandırılmayıb | Module 4 metodologiyası düzgün tətbiq olunub |
| **Treatment Planı** | Fəaliyyətlər ümumidir | Konkret, amma prioritetsiz | Prioritetlər Risk Register xallarına bağlanıb |

## Yekun Yoxlama

1. Hansı framework-ü seçdiniz və TechNova-nın hansı iki xüsusiyyəti bu seçimi ən çox əsaslandırdı?
2. Gap Analysis cədvəlinizdə ən böyük boşluq hansı domendə idi? Niyə?
3. Kritik sisteminiz üçün təklif etdiyiniz RTO/RPO nə idi və bu ədədləri necə əsaslandırdınız?
4. Treatment Planınızda ən yüksək prioritetli fəaliyyət hansıdır və bu, Faza 1-dəki hansı risklə bağlıdır?
5. Əgər TechNova büdcəni yarıya endirsə, Treatment Planınızdan hansı fəaliyyəti ilk növbədə saxlayardınız və niyə?

---

## QİYMƏTLƏNDİRMƏ QEYDLƏRİ (yalnız content creator/instruktor üçün)

**Addım 1 (Framework seçimi):**
- Yaxşı cavablar adətən ISO 27001-i seçir (GDPR-uyğun Avropa müştərisi kontekstində beynəlxalq tanınma əsas arqumentdir) VƏ YA NIST CSF-i seçir (daha çevik, sertifikatsız da tətbiq oluna bilər, kiçik şirkət üçün daha az bahalı) — hər ikisi məntiqli, əsas odur ki, əsaslandırma TechNova-nın konkret vəziyyətinə (80 işçi, məhdud büdcə, Avropa müştərisi) istinad etsin, ümumi framework tərifini təkrarlamasın.
- "Tam sertifikatlaşdırma yox, könüllü nəzarət tətbiqi" tövsiyəsini görən tələbələr daha yüksək bal almalıdır — bu, real dünya praktikasını əks etdirir.

**Addım 2 (Gap Analysis):**
- Ən vacib keyfiyyət meyarı: boşluqların Faza 1-dəki konkret faktlarla (2 insident, formal Policy-nin hələ təsdiqlənməməsi, Risk Register-in yeni olması) əsaslandırılmasıdır — mücərrəd "bizdə access control zəifdir" kimi ifadələr aşağı bal almalıdır.
- Third-Party/Vendor Risk domenində podratçı insidenti ilə əlaqə mütləq qurulmalıdır.

**Addım 3 (BCP/DR):**
- RTO/RPO ədədləri əsaslandırılmalıdır (Module 4, Room 2-dəki metodologiya: "bu sistem dayansa nə itiririk" sualı aydın cavablanmalıdır) — məsələn, "müştəri layihələri saxlanılan bulud infrastrukturu" üçün RTO bir neçə saat, RPO isə 1 saatdan az təklif edilə bilər, çünki müştəri işi birbaşa asılıdır.

**Addım 4 (Treatment Planı):**
- Prioritetlərin Risk Register-in xallarına (Faza 1) bağlı olması əsas tələbdir — bu, iki fazanın süni deyil, üzvi şəkildə bağlı olduğunu sübut edir.
- "Büdcə yarıya enərsə" sualına yaxşı cavab, ən yüksək risk xallı və ən çox biznes təzyiqi olan (Avropa müştərisi ilə bağlı) fəaliyyəti saxlamalıdır — bu, tələbənin prioritetləşdirmə məntiqini praktiki ssenaridə sınayır.

**Ümumi qiymətləndirmə fəlsəfəsi:** Bu fazada əsas fokus fazaların bir-biri ilə **əlaqəliliyidir** — instruktor Faza 1-dəki Risk Register və Policy-yə Faza 2-dəki Gap Analysis və Treatment Planının nə dərəcədə istinad etdiyini yoxlamalıdır. Ayrı-ayrı, bir-birindən təcrid olunmuş sənədlər (hər faza sanki fərqli şirkət üçün yazılıb kimi) aşağı qiymətləndirilməlidir.
