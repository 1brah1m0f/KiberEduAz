# ROOM 1: Exploring Cybersecurity Threats

**Path:** CompTIA Security+ (SY0-701) Hazırlığı
**Module:** 2 — Cybersecurity Threat Landscape (Fəsil 2)
**Mənbə:** CompTIA Security+ Study Guide, 9th Ed. — "Exploring Cybersecurity Threats" bölməsi
**Domain uyğunluğu:** 2.0 Threats, Vulnerabilities, and Mitigations (22%) — obyektiv 2.1, 2.2
**Çətinlik:** Easy→Medium
**Təxmini vaxt:** 70 dəq (kitabın bu bölməsi geniş olduğu üçün 4 task-a bölünüb)

## Room haqqında

Module 1-də kibertəhlükəsizliyin **məqsədlərini** (CIA) və bu məqsədlər pozulanda yaranan **təsiri** (Breach Impact) öyrəndiniz. İndi sual budur: bu pozuntuları kim, niyə və necə edir? Bu room-da hücumçuların (threat actor) təsnifatını, ən çox rast gəlinən növlərini, motivasiyalarını və onların təşkilata çatmaq üçün istifadə etdiyi yolları (threat vector) öyrənəcəksiniz. Kitab bunu "düşməni tanımaq" kimi təqdim edir — effektiv müdafiə qurmazdan əvvəl kimdən müdafiə olunduğunuzu bilməlisiniz.

## Öyrənmə nəticələri

- Threat actor-ları təsnif etmək üçün istifadə olunan dörd atributu (internal/external, sophistication, resources, motivation) tətbiq etmək
- "Hat" terminologiyasını (white/black/gray) və əsas threat actor növlərini (unskilled, hacktivist, organized crime, nation-state/APT, insider, shadow IT, competitor) fərqləndirmək
- Hücumçu motivasiyalarının doqquz kateqoriyasını tanımaq
- Threat vector və attack surface anlayışlarını fərqləndirmək, əsas vector növlərini sadalamaq

## Task 1 — Threat Actor-ları Necə Təsnif Edirik?

Kitab konkret hücumçu növlərinə keçməzdən əvvəl, onları fərqləndirən dörd atributu təqdim edir. Bu atributlar imtahanda birbaşa sınana bilər, çünki hər sual sonda bu siyahıdan birinə bağlanır.

**Internal vs External** — Ən çox təhlükəni xarici rəqiblər, cinayətkarlar və maraqlı şəxslər kimi düşünürük, amma ən təhlükəli təhdidlərin bəziləri öz təşkilatımızın içindən gəlir (insider threat, Task 2-də).

**Level of Sophistication/Capability** — Hücumçular kibertəhlükəsizlik bacarığı baxımından böyük fərqlərə malikdir — başqalarından götürdüyü kodu işə salan sadə hücumçudan tutmuş, öz tədqiqat laboratoriyasında kəşf etdiyi, təhlükəsizlik cəmiyyətinə hələ məlum olmayan zəiflikləri istismar edən Advanced Persistent Threat (APT) aktoruna qədər.

**Resources/Funding** — Yüksək təşkil olunmuş, mütəşəkkil cinayət və ya milli hökumətlər tərəfindən maliyyələşən hücumçuların demək olar ki, sonsuz resursları ola bilər, halbuki az təşkil olunmuş hücumçular sadəcə öz boş vaxtlarında işləyən həvəskarlar ola bilər.

**Intent/Motivation** — Hücumçular motivasiya baxımından da fərqlənir. Sadə bacarıqlı olmayan hücumçu sadəcə hücumun həyəcanı üçün ola bilər, rəqiblər isə yüksək hədəflənmiş korporativ casusluqla məşğul ola bilər.

**Praktiki tövsiyə:** kitab media-da eşitdiyiniz real hücum xəbərlərini bu dörd atributla təhlil etməyi tövsiyə edir. Məsələn, qurbandan ödəniş tələb edən bir ransomware hücumu, korporativ casusluqla məşğul olan rəqibdən çox, maliyyə qazancı axtaran mütəşəkkil cinayətlə əlaqəli olma ehtimalı daha yüksəkdir.

### "Papaq" Terminologiyası

Kibertəhlükəsizlik icması hücumçuların motivasiyasını təsvir etmək üçün rəngli "papaq" jarqonundan istifadə edir — bu, köhnə Qərb (Western) filmlərindən gəlir, burada "yaxşı adamlar" ağ, "pis adamlar" qara papaq geyinirdi.

| Papaq | Termin | Təsvir |
|---|---|---|
| **White-hat** | Authorized attacker | İcazə ilə hərəkət edir, zəiflikləri düzəltmək məqsədilə axtarır (işçi/pentest podratçısı) |
| **Black-hat** | Unauthorized attacker | Zərərli niyyətlə, nəzarətləri məğlub etmək və CIA-nı pozmaq üçün |
| **Gray-hat** | Semi-authorized attacker | İcazəsiz hərəkət edir, amma hədəfi zəifliklər barədə məlumatlandırmaq niyyətindədir |

Vacib xəbərdarlıq: yaxşı niyyət gray-hat hackinq-i qanuni və ya etik etmir — gray-hat hücumçuların istifadə etdiyi texnikalar hələ də cinayət hesab oluna və cəzalandırıla bilər.

**Sual 1**
Threat actor-ları təsnif etmək üçün istifadə olunan dörd atributu sadalayın.

**Sual 2**
Ransomware hücumu niyə adətən korporativ casusluqdan çox mütəşəkkil cinayətlə əlaqələndirilir? Hansı atributa (motivasiya) əsaslanır?

**Sual 3**
Gray-hat hacker kimdir və niyə "yaxşı niyyət" onun hərəkətlərini avtomatik qanuni etmir?

## Task 2 — Threat Actor Növləri

Kitab imtahan obyektivlərinə uyğun yeddi əsas threat actor növünü təqdim edir.

**Unskilled Attackers (Script Kiddie)** — Hacking texnikalarından istifadə edən, amma məhdud bacarığa malik hücumçular üçün işlədilən kiçildici termin. Çox vaxt internetdən endirdikləri avtomatlaşdırılmış alətlərə demək olar ki, tam etibar edirlər və hücumlarının necə işlədiyi barədə az bilikləri var. Aşağı bacarıq səviyyəsinə baxmayaraq, real təhlükədirlər — birincisi, sadə hakinq alətləri internetdə pulsuz mövcuddur (istənilən kəs DoS hücumunu avtomatlaşdıra, virus yarada bilər), ikincisi, bu hücumçular saysızdırlar və hədəf seçimində diqqətsizdirlər — çox vaxt kimə hücum etdiklərini belə bilmirlər, sadəcə zəif qurbanlar axtarırlar.

**Hacktivists** — Hansısa aktivist məqsədə çatmaq üçün hacking texnikalarından istifadə edir. Onların müəyyənedici xüsusiyyəti — hərəkətləri qanunu pozsa belə, özlərini "böyük xeyir" tərəfindən motivasiya olunmuş hesab etmələridir. Buna görə caydırıcı tədbirlər onları digər hücumçular qədər çəkindirmir — bəziləri tutulmağı öz məqsədləri üçün fədakarlıq/şərəf nişanı sayır. Ən tanınan hacktivist qrupu Anonymous-dur. Bəzi işçilər/whistleblower-lar da (məsələn, Edward Snowden) daxili hacktivist sayıla bilər.

**Organized Crime** — Pul qazanılan hər yerdə mütəşəkkil cinayət də mövcuddur, kibercinayət istisna deyil. Onların ortaq xüsusiyyəti — motivasiya sırf qanunsuz maliyyə qazancıdır, siyasi məsələlərlə maraqlanmırlar və diqqəti öz üzərinə çəkməkdən çəkinirlər. Adətən orta-yüksək bacarıq səviyyəsinə malikdirlər və hacktivistlərdən daha çox resursa sahibdirlər.

**Nation-State Attackers / APT** — Advanced Persistent Threat (APT) termini həm texnikanın **advanced** (qabaqcıl, sadəcə internetdən endirilən alətlər deyil), həm də hücumun **persistent** (uzun müddət, bəzən illərlə davam edən) olduğunu bildirir. Yüksək bacarıqlı, əhəmiyyətli resurslara malik hücumçulardır — bir dövlətin işçi qüvvəsi, vaxtı və pulu davamlı, mürəkkəb hücumları maliyyələşdirməyə kifayət edir. Motivasiya siyasi (ənənəvi casusluq — hədəfin müdafiə qabiliyyəti barədə məlumat toplamaq) və ya iqtisadi (əqli mülkiyyət oğurluğu) ola bilər.

> **Zero-Day Hücumları:** APT hücumçuları çox vaxt öz zəiflik araşdırmalarını aparır ki, digər hücumçulara/kibertəhlükəsizlik komandalarına məlum olmayan zəiflikləri tapsınlar. Onlar tapdıqları zəifliyi ifşa etmir, sonrakı istifadə üçün saxlayırlar. Bu zəifliklərdən istifadə edən hücumlar **zero-day hücumları** adlanır — xüsusilə təhlükəlidir, çünki məhsul istehsalçılarına məlum deyil, ona görə heç bir patch mövcud deyil. Stuxnet (ABŞ və İsrail hökumətlərinə aid edilir, İranın uran zənginləşdirmə obyektinin nəzarət şəbəkələrini kompromis edib) bu növün ən tanınan nümunəsidir.

**Insider Threat** — İşçi, podratçı, satıcı və ya sistemlərə icazəli çıxışı olan istənilən şəxsin bu çıxışdan təşkilata qarşı hücum üçün istifadə etməsi. Adətən konfidensial məlumatı ifşa etməyə yönəlib, amma insayder məlumatı dəyişdirməyə və ya biznes proseslərini pozmağa da cəhd edə bilər. İnsayder istənilən bacarıq səviyyəsində ola bilər. Davranış qiymətləndirmələri insayder hücumları müəyyən etməkdə güclü alətdir — kibertəhlükəsizlik komandaları İnsan Resursları ilə işləməlidir ki, qeyri-adi davranış göstərən insayderləri müəyyənləşdirib vəziyyət kəskinləşməzdən əvvəl müdaxilə etsin.

**Shadow IT** — Bəzən işçilər öz məqsədlərinə çatmaq üçün təşkilat tərəfindən təsdiqlənməmiş texnologiya xidmətləri satın alırlar (məsələn, iş faylını şəxsi Dropbox hesabı ilə sinxronlaşdırmaq) — bu, zərərli niyyətlə edilmir, əksinə, məhsuldarlığı artırmaq cəhdidir. Amma bu, həssas məlumatı təşkilatın nəzarətindən kənar satıcıların əlinə verdiyi üçün risk yaradır. Shadow IT-in mövcudluğu, korporativ IT komandasının biznes ehtiyaclarını qarşılamadığının göstəricisidir — shadow IT istifadəçiləri ilə məsləhətləşmək çox vaxt həm biznes ehtiyacını, həm təhlükəsizlik tələbini ödəyən qəbuledilən alternativlər tapmağa kömək edir.

**Competitors** — Rəqiblər, sizin təşkilatınızdan həssas məlumatı oğurlayıb öz biznes üstünlüklərinə çevirmək üçün korporativ casusluqla məşğul ola bilər (müştəri məlumatının oğurlanması, məxfi proqram təminatının oğurlanması, məhsul inkişaf planlarının aşkarlanması). Bəzən narazı insayderdən istifadə edir, bəzən isə dark web-də satılan insayder məlumatını satın alırlar.

**Sual 1**
Yeddi threat actor növünü sadalayın.

**Sual 2**
APT termini nəyi bildirir (hər hərfi izah edin) və Stuxnet nümunəsi bunu necə əks etdirir?

**Sual 3**
Shadow IT-in mövcudluğu təşkilat üçün hansı əlavə siqnalı verir — sadəcə təhlükəsizlik riski, yoxsa daha geniş bir problem?

## Task 3 — Hücumçu Motivasiyaları

Kitab hücumçuların hərəkətlərinin arxasındakı əsas motivasiyaları doqquz kateqoriyaya bölür:

| Motivasiya | Təsvir |
|---|---|
| **Data exfiltration** | Həssas/məxfi məlumatı (müştəri datası, əqli mülkiyyət) əldə etmək istəyi |
| **Espionage** | Digər təşkilatlardan sirli məlumat oğurlamaq (dövlətlərarası və ya korporativ) |
| **Service disruption** | Kritik sistem/şəbəkələri (bank, səhiyyə) dayandırmaq/pozmaq |
| **Blackmail** | Həssas məlumatı ifşa etmə/əlavə hücum hədəsi ilə pul/güzəşt tələb etmək |
| **Financial gain** | Oğurluq/fırıldaqla pul qazanmaq (mütəşəkkil cinayətin əsas motivasiyası) |
| **Philosophical/political belief** | İdeoloji/siyasi səbəb (hacktivistlərin əsas motivasiyası) |
| **Ethical (white-hat)** | Zəiflikləri ifşa edib təhlükəsizliyi yaxşılaşdırmaq (icazə ilə) |
| **Revenge** | Şəxs/təşkilatdan qisas almaq, utandırmaq |
| **Disruption/chaos** | Sadəcə xaos yaratmaq, normal əməliyyatı pozmaq istəyi |

Bunlara əlavə olaraq, **müharibə** də kibertəhlükəsizlik hücumlarının motivasiyası ola bilər — hərbi bölmələr və mülki qruplar hərbi əməliyyatları pozmaq və silahlı münaqişənin nəticəsini dəyişdirmək üçün hacking istifadə edə bilər.

Motivasiyanı anlamaq, təşkilatın nəyin hədəf ola biləcəyini və özünü necə müdafiə edəcəyini müəyyənləşdirməyə kömək edir — kitab vurğulayır ki, bu, Task 2-dəki threat actor növləri ilə əl-ələ işləyir (məsələn, hacktivist → philosophical/political; organized crime → financial gain).

**Sual 1**
Doqquz motivasiya kateqoriyasından beşini sadalayın.

**Sual 2**
"Ethical" motivasiya digər səkkiz kateqoriyadan nə ilə fərqlənir?

**Sual 3**
Bir nation-state APT hücumunun motivasiyası, adətən hansı iki kateqoriyaya uyğun gəlir?

## Task 4 — Threat Vectors və Attack Surface

Threat actor-ların təşkilatın məlumat/sistemlərinə çatmaq üçün müəyyən vasitəyə ehtiyacı var. Əvvəlcə **attack surface** (hücum səthi) — hücumçunun istismar edə biləcəyi zəifliyi olan sistem, tətbiq və ya xidmət — kəşf edilməlidir. Sonra, həmin zəifliklərdən birini **threat vector** (təhdid vektoru) — hücumçuların çıxış əldə etmək üçün istifadə etdiyi vasitə — vasitəsilə istismar edərək çıxış əldə edilir. Təhlükəsizlik mütəxəssislərinin məqsədlərindən biri effektiv təhlükəsizlik tədbirləri və risk azaltma strategiyaları vasitəsilə attack surface-in ölçüsünü və mürəkkəbliyini azaltmaqdır.

Kitab əsas threat vector kateqoriyalarını təqdim edir:

**Message-Based** — Email ən çox istismar olunan vektorlardan biridir (phishing, spam). Bu hücumlar icrası asandır və eyni anda çoxlu istifadəçiyə qarşı işə salına bilər — hücumçu üçün üstünlük budur ki, geniş hücumu başlatmaq üçün yalnız **bir dəfə** uğur qazanmaq kifayətdir. İstifadəçilərin 99.9%-i phishing mesajını görməzdən gəlsə belə, hücumçuya yalnız bir istifadəçinin giriş məlumatları lazımdır. SMS/instant messaging (smishing) və səsli zənglər (vishing) də bu kateqoriyaya aiddir.

**Wired Networks** — Cəsarətli hücumçular təşkilatın fiziki obyektinə daxil olub, məsələn, foyedəki qorunmasız şəbəkə rozetkasına gizlicə qoşularaq birbaşa şəbəkə çıxışı əldə edə bilər. Fiziki toxunuş əldə edən hücumçu, həmin cihazı kompromis edib zərərli məqsədlərlə istifadə edə bilər deyə fərz olunmalıdır.

**Wireless Networks** — Daha da asan yoldur — hücumçu fiziki binaya girmək məcburiyyətində deyil, avtomobil dayanacağından oturub şəbəkəyə qoşula bilər. Qorunmasız/zəif qorunan wireless şəbəkələr ciddi risk yaradır.

**Systems** — Fərdi sistemlər öz konfiqurasiyasına/quraşdırılmış proqram təminatına görə threat vector rolunu oynaya bilər (açıq portlar, default credential-lar, patch olunmamış proqram, dəstəklənməyən legacy sistemlər).

**Files and Images** — Fərdi fayllar (şəkillər daxil) zərərli kod daşıya bilər — hücumçu istifadəçini bu faylı açmağa aldadır.

**Removable Devices** — USB flash-lar kimi çıxarıla bilən medialar. Klassik nümunə: hücumçu ucuz USB-ləri avtomobil dayanacağında/hava limanında qəsdən "itirir", kimsə maraqla onu tapıb kompüterinə taxanda, cihaz sakitcə kompüteri kompromis edib hücumçunun nəzarətinə keçirir.

**Cloud** — Hücumçular populyar bulud xidmətlərini səhv giriş nəzarəti, təhlükəsizlik zəiflikləri və ya təsadüfən dərc edilmiş API açarları/parollar üçün rutin skan edir.

**Supply Chain** — Ən mürəkkəb vektorlardan biri. Mürəkkəb hücumçular təchizat zəncirinə (hardware/software/xidmət provayderləri) müdaxilə edə bilər — hücumçu istehsalçı səviyyəsində və ya çatdırılma zamanı cihaza müdaxilə edərək backdoor əlavə edə bilər ki, müştəri onu şəbəkəsinə qoşanda hücumçuya nəzarət versin. Software provayderlər də hədəf ola bilər — rəsmi yeniləmə mexanizmi vasitəsilə backdoor yerləşdirilə bilər. Managed Service Provider-lərə (MSP) sızan hücumçular, MSP-nin öz müştərilərinin sistemlərinə olan çıxışından istifadə edə bilər.

| Vector | Nümunə | Əsas müdafiə istiqaməti |
|---|---|---|
| Message-Based | Phishing email | İstifadəçi təlimi, email filtrasiyası |
| Wired Networks | Foyedəki açıq rozetka | Fiziki təhlükəsizlik, port təhlükəsizliyi (Module 9) |
| Wireless | Zəif qorunan Wi-Fi | Güclü şifrələmə (Module 13) |
| Systems | Patch olunmamış OS | Hardening (Module 11) |
| Files/Images | Zərərli əlavə | Anti-malware, sandbox |
| Removable Devices | "İtirilmiş" USB | Cihaz nəzarəti siyasəti (Module 11) |
| Cloud | Açıq S3 bucket | Konfiqurasiya auditi (Module 10) |
| Supply Chain | Backdoor-lu hardware | Vendor idarəetməsi (GRC path Module 5) |

**Sual 1**
Attack surface və threat vector arasındakı fərq nədir?

**Sual 2**
Message-based hücumların hücumçu üçün əsas üstünlüyü nədir — niyə 99.9% uğursuzluq hücumçunu narahat etmir?

**Sual 3**
Supply chain hücumu niyə xüsusilə təhlükəlidir və aşkar etmək çətindir?

## Yekun Yoxlama (Summary Quiz)

1. Threat actor-ları təsnif etmək üçün istifadə olunan dörd atributu sadalayın.
2. White-hat, black-hat və gray-hat arasındakı fərqi izah edin.
3. Zero-day hücumu nədir və niyə xüsusilə təhlükəlidir?
4. Insider threat və Shadow IT arasındakı fərq nədir?
5. Doqquz motivasiya kateqoriyasından üçünü sadalayın.
6. Removable Device vector-un klassik nümunəsini təsvir edin.
7. Supply chain hücumunda MSP-nin (Managed Service Provider) roluna necə hücum edilə bilər?

---
