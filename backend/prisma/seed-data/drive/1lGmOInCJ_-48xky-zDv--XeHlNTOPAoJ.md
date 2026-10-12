# ROOM 1: Vulnerability Management

**Path:** CompTIA Security+ (SY0-701) Hazırlığı
**Module:** 5 — Security Assessment and Testing (Fəsil 5)
**Mənbə:** CompTIA Security+ Study Guide, 9th Ed. — "Vulnerability Management" bölməsi
**Domain uyğunluğu:** 4.0 Security Operations (28%) — obyektiv 4.3
**Çətinlik:** Medium
**Təxmini vaxt:** 45 dəq

## Room haqqında

İndiyə qədər hücumçuları (Module 2), onların istifadə etdiyi malware-i (Module 3) və insan-yönümlü texnikaları (Module 4) öyrəndiniz. İndi tərəfi dəyişirik: bir müdafiəçi kimi, öz sistemlərinizdəki zəiflikləri **necə tapırsınız**? Bu room-da kitab bunu Vulnerability Management proqramının tikinti daşları — skan hədəflərinin müəyyənləşdirilməsi, tezlik, konfiqurasiya, credentialed/agent-based skanlama və SCAP standartı — üzərindən izah edir.

## Öyrənmə nəticələri

- Skan hədəflərini və tezliyini müəyyənləşdirən amilləri sadalamaq
- Credentialed vs Non-credentialed və Agent-based skan yanaşmalarını fərqləndirmək
- Skan perspektivlərini (external, internal, agent-based) və onlara təsir edən nəzarətləri izah etmək
- SCAP-ın komponentlərini (CCE, CPE, CVE, CVSS) tanımaq
- False Positive/Negative anlayışlarını dəqiq izah etmək

## Task 1 — Skan Hədəfləri, Tezlik və Konfiqurasiya

Texniki mühitlərimiz mürəkkəbdir — server, endpoint, şəbəkə cihazı, hər biri milyonlarla sətir kod işlədir. Nə qədər səy göstərsək də, zəifliklərin mövcud olması və yenilərinin daim yaranması qaçılmazdır. **Vulnerability Management** proqramları bu zəiflikləri müəyyənləşdirmək, prioritetləşdirmək və düzəltmək üçün mərkəzi rol oynayır.

**Skan Hədəflərinin Müəyyənləşdirilməsi** — təşkilat hansı sistemlərin skan olunacağına qərar verərkən bir neçə sual verir:

- Sistemdə saxlanılan/işlənən məlumatın təsnifatı nədir?
- Sistem internetə/ictimai şəbəkəyə açıqdırmı?
- Sistem hansı servisləri təklif edir?
- Sistem production, test, yoxsa development sistemidir?

Təşkilatlar həmçinin avtomatlaşdırılmış texnikalardan istifadə edərək şəbəkədəki qoşulmuş sistemləri (əvvəllər tanınan və ya naməlum) axtarır və **asset inventarı** qurur. Bu inventar, sistemin kritik/qeyri-kritik olduğunu müəyyənləşdirməyə kömək edir, bu da öz növbəsində skan növü, tezliyi və düzəltmə prioritetini istiqamətləndirir.

**Skan Tezliyinə Təsir Edən Amillər:**

| Amil | Təsir |
|---|---|
| Risk Appetite | Risk-dən qaçan təşkilat daha tez-tez skan edir |
| Tənzimləyici tələblər | PCI DSS/FISMA kimi standartlar minimum tezlik tələb edə bilər |
| Texniki məhdudiyyətlər | Skan sistemi günə məhdud sayda skan apara bilər |
| Biznes məhdudiyyətləri | Yüksək fəallıq dövründə resurs-tələb edən skan qaçınılır |
| Lisenziya məhdudiyyətləri | Skanerin bant genişliyi/eyni vaxtda skan sayı məhdud ola bilər |

Kitab tövsiyə edir: kiçikdən başlayıb tədricən genişləndirmək daha ağıllıdır ki, skan infrastrukturu və ya müəssisə sistemləri həddindən artıq yüklənməsin.

**Skan Sensitivlik Səviyyələri:** Administratorlar adətən yeni skan konfiqurasiyasını **şablon** ilə başlayır (satıcı tərəfindən təqdim olunan və ya xüsusi hazırlanmış). Hər **plug-in** konkret bir zəiflik üçün yoxlama aparır — bunlar OS/tətbiq/cihaza görə ailələrə qruplaşdırılır. Lazımsız plug-in-ləri deaktiv etmək skanı sürətləndirir və yalançı-müsbət nəticələri azaldır (məsələn, Amazon Linux istifadə etməyən təşkilat həmin OS-ə aid yoxlamaları söndürə bilər).

**Intrusive plug-in-lər** — production sistemdə fəaliyyəti poza, hətta məzmuna zərər verə bilən testlər aparır. Bu, çətin balansdır: administratorlar zəiflikləri tapmaq istəyir, amma şəbəkəni pozmaq istəmir. Həll yolu — production-un surəti olan **test mühitində** əvvəlcə skan aparmaq, problemləri həm test, həm production-da düzəltdikdən sonra production-a keçmək.

**Sual 1**
Skan hədəflərini müəyyənləşdirərkən verilən dörd sualdan ikisini sadalayın.

**Sual 2**
Skan tezliyinə təsir edən beş amildən üçünü sadalayın.

**Sual 3**
Intrusive plug-in-lərin yaratdığı balans problemini və həll yolunu izah edin.

## Task 2 — Credentialed, Agent-Based Skanlama və Skan Perspektivi

Sadə şəbəkə skanı sistemi **məsafədən** araşdırır — bu, hücumçunun başqa şəbəkə nöqtəsindən görəcəyi mənzərəni realistik təqdim edir. Amma yol üzərindəki firewall, IPS və digər nəzarətlər skan nəticələrinə təsir edərək qeyri-dəqiq mənzərə yarada bilər. Bir çox zəifliyi yalnız uzaqdan skanla təsdiqləmək çətindir — bu, **false positive** yaradaraq administratorun vaxtını ala bilər.

**Credentialed Scanning** — administrator skanerə hədəf serverə qoşulmaq və konfiqurasiya məlumatını əldə etmək üçün credential verir. Bu, skanın dəqiqliyini artırır — məsələn, OS yeniləməsi ilə düzəldilə bilən potensial problem aşkarlansa, credentialed skan yeniləmənin artıq quraşdırılıb-qurulmadığını yoxlaya bilər.

> **Kitabın Exam Note-u:** Credentialed skanlar adətən yalnız hədəf serverdən məlumat əldə edir, serverin özündə dəyişiklik etmir. Ona görə administratorlar **least privilege** prinsipini tətbiq edərək skanerə **read-only** hesab verməlidir — bu, credentialed çıxışla bağlı insident riskini azaldır. İmtahanda credentialed və non-credentialed skanlama arasındakı fərqi mütləq bilməlisiniz!

**Agent-Based Scanning** — hər hədəf serverdə kiçik proqram agentləri quraşdırılır. Bu agentlər server konfiqurasiyasını skan edir ("inside-out" baxış təmin edir), sonra nəticəni mərkəzi platformaya bildirir. Sistem administratorları adətən performans/stabillik narahatlığı ilə agent quraşdırmağa ehtiyatla yanaşır — kiçik pilot yerləşdirmə ilə başlamaq tövsiyə olunur.

**Skan Perspektivi:** hərtərəfli proqramlar müxtəlif şəbəkə nöqtələrindən skan aparma imkanı verir:

- **External scan** — internetdən aparılır, xarici hücumçunun görəcəyini göstərir
- **Internal scan** — korporativ şəbəkədən aparılır, zərərli insayderin görəcəyini göstərir
- **Datacenter/agent-based** — ən dəqiq mənzərəni verir, digər nəzarətlərin (firewall, seqmentasiya, IDS/IPS) blokladığı zəiflikləri də göstərir

Kitabın nümunəsi: PCI DSS həm daxili skan (təşkilatın özü apara bilər), həm xarici skan (Approved Scanning Vendor — ASV tərəfindən aparılmalı) tələb edir — bu, fərqli perspektivlərdən skanlamanın praktiki nümunəsidir.

**Skaner Baxımı:** skan proqramının özü də zəifliyə malik ola bilər (hətta Nessus kimi tanınmış alətlər NVD-də qeydə alınıb!) — ona görə skaner proqramının özünün mütəmadi patch olunması vacibdir, eyni zamanda **plug-in feed**-lərin (üstünlük verilən — gündəlik) yenilənməsi.

**Sual 1**
Credentialed scanning niyə non-credentialed-dən daha dəqiqdir?

**Sual 2**
"Read-only" hesabın credentialed skan üçün tövsiyə olunmasının səbəbi hansı prinsipə əsaslanır?

**Sual 3**
External, Internal və Agent-based skan perspektivləri arasındakı fərqi izah edin.

## Task 3 — SCAP və False Positive/Negative

**Security Content Automation Protocol (SCAP)** — NIST tərəfindən idarə olunan, təhlükəsizliklə bağlı məlumatın standartlaşdırılmış şəkildə çatdırılması üçün icma səyidir. Bu standartlaşdırma, təhlükəsizlik komponentləri arasındakı avtomatlaşdırılmış qarşılıqlı əlaqə üçün vacibdir. SCAP dörd əsas standartdan ibarətdir:

| Standart | Nə üçün |
|---|---|
| **CCE** (Common Configuration Enumeration) | Sistem konfiqurasiya məsələləri üçün standart nomenklatura |
| **CPE** (Common Platform Enumeration) | Məhsul adı/versiyalarını təsvir etmək üçün standart nomenklatura |
| **CVE** (Common Vulnerabilities and Exposures) | Təhlükəsizliklə bağlı proqram nasazlıqları üçün standart nomenklatura |
| **CVSS** (Common Vulnerability Scoring System) | Zəifliyin ciddiliyini ölçmək/təsvir etmək üçün standartlaşdırılmış yanaşma (Room 2-də dərindən öyrəniləcək) |

---

**False Positive və False Negative** — skanerlər faydalı alətdir, amma səhvsiz deyil. Kitab bunu dəqiq terminologiya ilə izah edir:

- Skaner zəiflik bildirirsə — bu, **positive report**-dur. Doğrudursa **true positive**, yanlışdırsa **false positive**.
- Skaner zəifliyin olmadığını bildirirsə — bu, **negative report**-dur. Doğrudursa **true negative**, yanlışdırsa **false negative**.

> **Kitabın Exam Note-u:** İmtahana hazırlaşarkən false positive və false negative mövzusuna fokuslanın. Skan hesabatlarında baş verə biləcək səhv növlərini anlamalı və ssenarilərdə bunları müəyyənləşdirməyə hazır olmalısınız.

| | Zəiflik VAR deyilir | Zəiflik YOXDUR deyilir |
|---|---|---|
| **Həqiqətən doğrudur** | True Positive ✅ | True Negative ✅ |
| **Həqiqətən yanlışdır** | False Positive ❌ (vaxt itkisi) | False Negative ❌ (**təhlükəli** — real zəiflik gözdən qaçır) |

Analitiklər hər bildirilən zəifliyi təsdiqləməlidir — bəzən sadəcə patch-in olub-olmadığını yoxlamaq (sadə), bəzən isə real exploit cəhdini simulyasiya edən mürəkkəb manual proses tələb olunur (məsələn, SQL injection zəifliyini yoxlamaq üçün faktiki hücum cəhdi və backend-i yoxlamaq). Bu prosesdə verilənlər bazası administratorları, sistem mühəndisləri, şəbəkə texniki mütəxəssisləri kimi sahə ekspertlərinin biliyi vacibdir.

**Digər Mənbələrlə Uzlaşdırma:** skan nəticələri vakuum daxilində qiymətləndirilməməlidir — log baxışları, SIEM sistemləri (Module 4-də ətraflı öyrəniləcək) və konfiqurasiya idarəetmə sistemləri skan hesabatını real mühitlə uzlaşdırmaqda çox faydalıdır.

**Sual 1**
SCAP-ın dörd komponentini və hər birinin funksiyasını sadalayın.

**Sual 2**
False Positive və False Negative arasındakı fərq nədir — hansı daha təhlükəlidir və niyə?

**Sual 3**
SQL injection zəifliyini təsdiqləmək niyə sadə patch yoxlamasından daha mürəkkəbdir?

## Yekun Yoxlama (Summary Quiz)

1. Skan tezliyinə təsir edən amillərdən üçünü sadalayın.
2. Credentialed scanning-in əsas üstünlüyü nədir?
3. Agent-based scanning-in "inside-out" adlandırılmasının səbəbi nədir?
4. External və Internal skan perspektivləri nəyi simulyasiya edir?
5. SCAP-ın dörd komponentini sadalayın.
6. False Positive və False Negative arasındakı fərqi izah edin.

---
