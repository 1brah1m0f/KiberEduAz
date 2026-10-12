# ROOM 2: Threat Data and Intelligence

**Path:** CompTIA Security+ (SY0-701) Hazırlığı
**Module:** 2 — Cybersecurity Threat Landscape (Fəsil 2)
**Mənbə:** CompTIA Security+ Study Guide, 9th Ed. — "Threat Data and Intelligence" bölməsi
**Domain uyğunluğu:** 2.0 Threats, Vulnerabilities, and Mitigations (22%) — obyektiv 2.2
**Çətinlik:** Medium
**Təxmini vaxt:** 50 dəq

## Room haqqında

Room 1-də kim hücum edir, niyə edir və necə çatır sualına cavab tapdınız. İndi sual budur: **kibertəhlükəsizlik komandası bu haqda necə xəbərdar olur?** Bu room-da threat intelligence (təhdid kəşfiyyatı) proqramının necə qurulduğunu — mənbələrdən (OSINT, closed-source), etibarlılıq qiymətləndirməsindən, standart formatlardan (STIX/TAXII) tutmuş, kollektiv məlumat mübadiləsi təşkilatlarına (ISAC) qədər — öyrənəcəksiniz.

## Öyrənmə nəticələri

- Threat intelligence-in məqsədini və əsas komponentlərini (IoC, TTP, CVE) izah etmək
- OSINT və closed-source (proprietary) intelligence mənbələrini fərqləndirmək
- Threat intelligence-in etibarlılıq (confidence) şkalasını tətbiq etmək
- STIX/TAXII-nin nə üçün lazım olduğunu izah etmək
- ISAC-ların rolunu təşkilati kontekstdə başa düşmək

## Task 1 — Threat Intelligence Nədir və Nədən İbarətdir?

**Threat Intelligence** — kibertəhlükəsizlik mütəxəssislərinin təhdid mühitindəki dəyişiklikləri öyrənmək üçün istifadə etdiyi fəaliyyət və resurslar toplusudur. Threat intelligence proqramı qurmaq hər təşkilatın kibertəhlükəsizlik yanaşmasının vacib hissəsidir — cari təhdidlərlə tanış olmasanız, təşkilatınızı onlardan qorumaq üçün uyğun müdafiə qura bilməzsiniz. Threat intelligence məlumatı proqnozlaşdırıcı təhlil üçün də istifadə oluna bilər ki, təşkilata ehtimal olunan riskləri müəyyənləşdirsin.

Threat feed-lər (mənbədən asılı olmayaraq) təşkilatınızın istifadə edə biləcəyi formada təhdidlər barədə güncəl detal təqdim etmək üçün nəzərdə tutulub. Adətən bunları ehtiva edir:

- **Texniki detallar** — IP ünvanları, hostname/domain-lər, email ünvanları, URL-lər, fayl hash-ları, fayl yolları, CVE (Common Vulnerabilities and Exposures) qeyd nömrələri
- **Kontekstual məlumat** — təşkilatınızı niyə hədəf/zəif edə biləcəyi, threat actor təsviri, motivasiya və metodologiya detalları

**Vulnerability databases** — threat intelligence proqramının vacib hissəsidir. Zəiflik hesabatları təşkilatın müdafiə səylərinə istiqamət verir, həm də tədqiqatçıların kəşf etdiyi istismar növləri barədə dəyərli fikir təqdim edir.

**Indicators of Compromise (IoC)** — threat intelligence mənbələrinin təqdim edə biləcəyi digər vacib element — hücumun baş verdiyini göstərən əlamətlərdir (fayl imzaları, log nümunələri, hücumçuların qoyduğu digər sübutlar). IoC-lər fayl və kod repozitoriyalarında da tapıla bilər.

**Sual 1**
Threat intelligence nədir və niyə hər təşkilat üçün vacibdir?

**Sual 2**
Threat feed-lərdə ehtiva olunan texniki detallardan üçünü sadalayın.

**Sual 3**
Indicator of Compromise (IoC) nə deməkdir?

## Task 2 — Mənbələr: OSINT, Closed-Source və Dark Web

Threat intelligence mənbələri geniş spektrdə dəyişir — açıq mənbələrdən (public) kommersiya (proprietary) xidmətlərinə qədər.

**Open Source Intelligence (OSINT)** — ictimaiyyətə açıq mənbələrdən əldə edilən threat intelligence. Bir çox təşkilat açıq threat information paylaşımının nə qədər faydalı olduğunu anlayıb, indi çətinlik çox vaxt hansı mənbələrin istifadə ediləcəyinə qərar vermək, onların etibarlı/güncəl olduğunu təmin etmək və onlardan yaxşı istifadə etməkdir. OSINT mənbələrinə misal: hökumət təhlükəsizlik agentliklərinin (CISA kimi) məlumat paylaşım proqramları, sənaye üzrə İnformasiya Paylaşımı və Təhlil Təşkilatları, satıcı təhlükəsizlik bloqları (Microsoft, Cisco), açıq resurslar (SANS Internet Storm Center).

**Closed-Source (Proprietary) Intelligence** — kommersiya təhlükəsizlik satıcıları, hökumət təşkilatları və digər təhlükəsizlik-mərkəzli təşkilatlar öz məlumat toplama və araşdırmalarını aparır, xüsusi alət/analiz modelləri istifadə edərək threat feed-lərini toplayır, kuratorluq edir və saxlayır.

**Dark Web** — standart internet bağlantıları üzərindən işləyən, amma anonim kommunikasiya təmin etmək üçün çoxqatlı şifrələmə istifadə edən şəbəkə. Hakerlər tez-tez məlumat paylaşmaq və hücumlar zamanı oğurlanan credential-ları/məlumatı satmaq üçün dark web saytlarından istifadə edir. Threat intelligence komandaları dark web-lə tanış olmalı və öz təşkilatına/müştərilərinə aid credential-ları tapmaq üçün dark web bazarlarını axtarmalıdır — credential-ların dark web bazarlarında qəflətən görünməsi, uğurlu hücumun baş verdiyini göstərə bilər və əlavə araşdırma tələb edir. Dark web-ə Tor brauzeri vasitəsilə çıxış əldə edilə bilər.

| Mənbə növü | Xüsusiyyət | Nümunə |
|---|---|---|
| OSINT | Pulsuz/açıq, çoxsaylı, keyfiyyət dəyişkən | Hökumət feed-ləri, satıcı bloqları |
| Closed-Source | Kommersiya, kuratorlaşdırılmış, ödənişli | Xüsusi satıcı threat feed xidmətləri |
| Dark Web | Anonim, çox vaxt qeyri-qanuni fəaliyyət mərkəzi | Oğurlanmış credential bazarları |

**Etibarlılıq (Confidence) Şkalası:** Threat intelligence mütəxəssisləri qiymətləndirmələrinin etibarlılığını rəqəmsal/təsviri şkala ilə ifadə edirlər. Bir yayılmış yanaşma altı səviyyədən ibarətdir:

| Səviyyə | Diapazon | Təsvir |
|---|---|---|
| Confirmed | 90-100 | Müstəqil mənbələr/birbaşa analiz təhdidin real olduğunu sübut edir |
| Probable | 70-89 | Məntiqi nəticəyə əsaslanır, amma birbaşa təsdiq etmir |
| Possible | 50-69 | Bəzi məlumat razılaşır, amma qiymətləndirmə təsdiqlənməyib |
| Doubtful | 30-49 | Mümkündür, amma ən ehtimallı seçim deyil, ya da mövcud məlumatla nə sübut, nə də təkzib olunur |
| Improbable | 2-29 | Mümkündür, amma məntiqi deyil, ya da mövcud məlumatla təkzib olunur |
| Discredited | 1 | Qiymətləndirmənin qeyri-dəqiq/yanlış olduğu təsdiqlənib |

Təşkilatlar fərqli şkala da istifadə edə bilər (1-5, 1-10, Yüksək/Orta/Aşağı) — məqsəd threat intelligence istifadəçilərinə qiymətləndirmənin və onun əsasında duran məlumatın keyfiyyətini sürətlə qiymətləndirməyə imkan verməkdir.

**Vacib praktiki qeyd:** tək bir threat feed istifadə etmək sizi qaranlıqda saxlaya bilər! Bir çox təşkilat ən güncəl məlumatı əldə etmək üçün çoxsaylı threat feed istifadə edir. Feed-lərin birləşdirilməsi çətin ola bilər, çünki onlar eyni format/təsnifat modelini istifadə etməyə bilər — bunu artıq çoxsaylı feed-i birləşdirən mənbələr tapmaqla və ya STIX kimi eyni təsvir çərçivəsini istifadə edən feed-ləri tapmaqla həll etmək olar (Task 3-də).

**Sual 1**
OSINT və Closed-Source Intelligence arasındakı fərq nədir?

**Sual 2**
Dark web-də bir təşkilatın credential-larının qəflətən görünməsi nəyə işarə edə bilər?

**Sual 3**
Etibarlılıq şkalasında "Probable" (70-89) ilə "Confirmed" (90-100) arasındakı əsas fərq nədir?

## Task 3 — Standartlaşdırma (STIX/TAXII) və Məlumat Mübadiləsi Təşkilatları

Hər hansı miqyasda threat information idarə etmək standartlaşdırma və alət tələb edir ki, məlumat avtomatlaşdırılmış üsullarla işlənə və istifadə edilə bilsin. Buna görə strukturlaşdırılmış marka dilləri (structured markup languages) mövcuddur.

**STIX (Structured Threat Information eXpression)** — əvvəlcə ABŞ Vətən Təhlükəsizliyi Departamenti tərəfindən sponsorlaşdırılan XML dilidir. Hazırkı versiyası (STIX 2.1) hücum nümunələri, şəxsiyyətlər, malware, threat actor-lar və alətlər kimi 18 STIX Domain Object müəyyən edir. Bu obyektlər bir-biri ilə iki STIX Relationship Object növündən biri (relationship və ya sighting) vasitəsilə əlaqələndirilir. STIX hazırda OASIS (Organization for the Advancement of Structured Information Standards) tərəfindən idarə olunur.

**TAXII (Trusted Automated eXchange of Intelligence Information)** — STIX-in yoldaşı protokoludur, kibertəhdid məlumatının HTTPS vasitəsilə tətbiq qatında ötürülməsinə imkan verir. TAXII xüsusi olaraq STIX məlumat mübadiləsini dəstəkləmək üçün dizayn edilib.

Bu iki standartın praktiki dəyəri: müxtəlif satıcıların/təşkilatların threat feed-ləri fərqli, uyğunsuz formatlarda olarsa, avtomatlaşdırma mümkün olmaz — hər inteqrasiya üçün əl ilə çevirmə lazım gələr. STIX/TAXII ümumi "dil" təqdim edərək, müxtəlif mənbələrdən gələn məlumatın avtomatik alətlər/sistemlər tərəfindən sistemli işlənməsinə imkan verir.

**Information Sharing Organizations (ISAC-lar):** Threat intelligence satıcılarına/resurslarına əlavə olaraq, threat information paylaşmaq üçün kollektiv icmalar yaradılıb. ABŞ-da **Information Sharing and Analysis Centers (ISAC)** adlanan təşkilatlar kritik infrastruktur sahiblərinə/operatorlarına threat information paylaşmaqda kömək edir və üzvlərinə alət/dəstək təqdim edir. ISAC konsepti 1998-ci ildə Prezident Qərarı Direktivi-63 (PDD-63) çərçivəsində təqdim olunub, kritik infrastruktur sektorlarından təhdid/zəifliklər barədə məlumat paylaşan təşkilatlar qurmalarını tələb edib. ISAC-lar etimad modeli əsasında işləyir, fiziki və kiber təhdidlər barədə dərin məlumat paylaşımına imkan verir; əksəriyyəti 24/7 işləyir və üzvlərinə insident cavabı və təhdid təhlili təqdim edir.

Bundan əlavə, kibertəhlükəsizlik mütəxəssisləri öz araşdırmalarını da davam etdirməlidir — satıcı təhlükəsizlik saytları, RFC sənədləri (internet protokollarının texniki spesifikasiyaları), peşəkar konfranslar, tanınmış təhlükəsizlik mütəxəssislərinin sosial media hesabları kimi mənbələr vasitəsilə. Bu araşdırma zamanı xüsusi diqqət yetirilməli olan bir termin — **TTP (Tactics, Techniques, and Procedures)** — hücumçuların necə fəaliyyət göstərdiyini təsvir edir; hücumçuların işləmə tərzini öyrənmək, öz threat intelligence proqramınızı təkmilləşdirməyə imkan verir.

**Sual 1**
STIX və TAXII arasındakı əlaqə nədir — hər biri nəyə xidmət edir?

**Sual 2**
ISAC nədir və hansı prinsipə (model) əsasən işləyir?

**Sual 3**
TTP nə deməkdir və threat intelligence proqramı üçün niyə faydalıdır?

## Yekun Yoxlama (Summary Quiz)

1. Threat intelligence-in əsas məqsədini bir cümlə ilə izah edin.
2. IoC nə deməkdir və nümunə verin.
3. OSINT və Closed-Source Intelligence arasındakı fərq nədir.
4. Etibarlılıq şkalasında altı səviyyədən üçünü sadalayın.
5. STIX nədir və nə üçün istifadə olunur?
6. ISAC-ın məqsədini izah edin.
7. Niyə tək bir threat feed-ə güvənmək risklidir?

---
