# ROOM 1: Malicious Code

**Path:** CompTIA Security+ (SY0-701) Hazırlığı
**Module:** 3 — Malicious Code (Fəsil 3)
**Mənbə:** CompTIA Security+ Study Guide, 9th Ed. — "Malware" bölməsi
**Domain uyğunluğu:** 2.0 Threats, Vulnerabilities, and Mitigations (22%) — obyektiv 2.4
**Çətinlik:** Medium
**Təxmini vaxt:** 75 dəq (kitabın bu bölməsi geniş olduğu üçün 4 task-a bölünüb)

## Room haqqında

Module 2-də threat actor-ları (kim), motivasiyalarını (niyə) və threat vector-ları (necə çatır) öyrəndiniz. İndi sual budur: hədəfə çatan hücumçu **konkret olaraq nə** işə salır? Bu room-da kitabın SY0-701 üçün xüsusi vurğuladığı doqquz malware növünü — Ransomware, Trojan, Worm, Spyware, Bloatware, Virus, Keylogger, Logic Bomb, Rootkit — öyrənəcəksiniz. Kitab birbaşa xəbərdarlıq edir: imtahanda sizə indikatorlar (IoC) veriləcək və siz bunlardan hansı malware növü olduğunu müəyyən etməli olacaqsınız — ona görə hər növün **fərqləndirici xüsusiyyətini** dəqiq bilmək vacibdir.

## Öyrənmə nəticələri

- Doqquz əsas malware növünü fərqləndirici xüsusiyyətlərinə görə tanımaq
- Hər malware növünün tipik IoC-lərini (Indicator of Compromise) sadalamaq
- Worm və Virus arasındakı, Spyware və Bloatware arasındakı əsas fərqləri izah etmək
- Malware analiz texnikalarını (sandbox, VirusTotal, manual kod analizi) tanımaq

## Task 1 — Ransomware, Trojan və Bot/Botnet

**Ransomware** — kompüteri ələ keçirib fidyə (ödəniş) tələb edən malware-dir. Ən çox yayılmış forması **crypto malware**-dir — faylları şifrələyib fidyə ödənənə qədər girov saxlayır. Digər variantlar: qurbanı qanunsuz proqram/pornoqrafiyaya görə hüquq-mühafizə orqanlarına şikayət etməklə hədələmək, yaxud sərt diskdəki həssas məlumatı/şəkilləri ifşa etməklə hədələmək. Ransomware hücumlarının böyük hissəsi phishing kampaniyaları vasitəsilə çatdırılır, amma RDP (Remote Desktop Protocol) və ya zəif servislərə birbaşa hücum da geniş yayılıb.

**Ransomware-in tipik IoC-ləri:** C&C trafiki, sistemi nəzarətdə saxlamaq üçün qanuni alətlərin qeyri-normal istifadəsi, digər sistemlərə "lateral movement" cəhdləri, faylların şifrələnməsi, istifadəçiyə fidyə tələbi bildirişi, böyük fayl transferləri (data exfiltration).

**Ən vacib müdafiə** — ayrı, təsirlənməyəcək yerdə saxlanılan effektiv backup sistemidir. Kitab vurğulayır: bəzi hallarda fidyə ödəmək faylların qaytarılmasına səbəb olub, digər hallarda hücumçular sadəcə daha çox pul tələb edib — ona görə təşkilat əvvəlcədən öz reaksiya strategiyasını müəyyənləşdirməlidir.

---

**Trojan (Troya Atı)** — qanuni proqram təminatı kimi maskalanmış malware-dir. "Troya atı" adlanmasının səbəbi — istifadəçinin özünün, bilmədən, onu işə salmasına əsaslanmasıdır. Kitabın nümunəsi: Triada Trojan-ı, WhatsApp-ın "təkmilləşdirilmiş" versiyası kimi paylanır — işə salınanda cihaz ID-si, abunəçi ID-si, hardware ünvanı kimi məlumatları toplayıb uzaq serverə qeydiyyatdan keçirir, sonra əlavə zərərli kod yüklənir.

**RAT (Remote Access Trojan)** — hücumçuya sistemə uzaqdan çıxış təmin edən Trojan növüdür. Çətinlik burasındadır ki, bəzi **qanuni** uzaqdan dəstək alətləri də RAT kimi istifadə oluna bilər — bu, "qanuni alət" ilə "zərərli RAT" arasında fərq qoymağı çətinləşdirir; antimalware alətləri bəzən yalançı-müsbət (false positive) verə bilər, amma bu aşkarlamanı söndürmək RAT-ların gözdən qaçmasına səbəb ola bilər.

**Trojan-ın tipik IoC-ləri:** konkret malware tətbiqi/fayl üçün imzalar, C&C sisteminin hostname/IP ünvanları, hədəf cihazda yaradılan qovluq/fayllar.

---

**Bots, Botnets və Command and Control (C&C)** — bir çox malware növü hücumçulara ona nə etməli olduğunu deməyə imkan verən komanda-nəzarət (C&C) texnikalarından istifadə edir. Mərkəzi komanda altındakı sistem qrupları **botnet**, fərdi sistemlər isə **bot** adlanır. C&C getdikcə şifrələnmiş HTTP bağlantılarından istifadə edir (müşahidədən qaçmaq üçün tez-tez dəyişən uzaq host-lara qoşularaq), amma IRC (port 6667) kimi köhnə texnikalar da hələ populyardır. Müdafiəçi kimi, naməlum host-lara "əl uzadan" sistemin botnet-in hissəsi ola biləcəyini necə aşkarlamağı bilmək vacibdir.

| Növ | Fərqləndirici xüsusiyyət | Əsas IoC |
|---|---|---|
| Ransomware | Fidyə tələb edir, faylları şifrələyir | Fayl şifrələnməsi, fidyə bildirişi |
| Trojan | Qanuni proqram kimi maskalanır | C&C hostname/IP, yeni fayl/qovluqlar |
| RAT | Uzaqdan tam nəzarət verir | Qanuni alətə bənzəyir — çətin aşkarlanır |

**Sual 1**
Crypto malware nədir və Ransomware-in hansı formasıdır?

**Sual 2**
Trojan niyə "Troya atı" adlanır — hansı prinsipə əsaslanır?

**Sual 3**
Botnet və bot arasındakı fərq nədir?

## Task 2 — Worms və Viruses: Özünü Yayan Malware

**Worm** — Trojan-dan fərqli olaraq, **istifadəçi qarşılıqlı əlaqəsi tələb etmədən özünü yayır**. Worm-lar adətən zəif servislərə hücumla yayılmaqla əlaqələndirilir, amma email əlavələri, şəbəkə fayl paylaşımları, zəif IoT cihazları/telefonlar vasitəsilə də yayıla bilər. Worm-lar həmçinin **özünü quraşdırır** — istifadəçinin klik etməsini tələb etmir, bu da onları xüsusilə təhlükəli edir.

**Stuxnet (2010)** — kibersilah kimi işlədilən ilk worm nümunəsi sayılır. İran nüvə proqramını hədəf almışdı, air-gapped (fiziki cəhətdən şəbəkəyə bağlı olmayan) kompüterləri keçmək üçün özünü flash-lara köçürürdü. Etibarlı rəqəmsal sertifikatdan istifadə etmək, İran nüvə proqramında istifadə olunduğu bilinən konkret ICS (Industrial Control System) sistemlərini axtarmaq, sentrifuqalara zərər verərkən nəzarətçilərə saxta monitorinq datası göndərmək kimi qabaqcıl texnikalardan istifadə edirdi ki, zərər çox gec aşkarlansın.

**Raspberry Robin** — müasir worm nümunəsi, ransomware-öncəsi fəaliyyətin bir hissəsi kimi istifadə olunur. İlkin yayılması yoluxmuş USB sürücülər (LNK fayl vasitəsilə) idi, işə düşəndən sonra Windows-un öz alətlərindən istifadə edərək davamlılıq (persistence) əldə edir ki, reboot-dan sonra da sağ qalsın.

**Worm mitigasiyası** əsasən şəbəkə-səviyyəli nəzarətlərdən (firewall, IPS, seqmentasiya) başlayır — kompromis olmuş cihazlar digər zəif cihazlarla əlaqə saxlaya bilmirsə, infeksiya yayıla bilmir. Patching və servisləri konfiqurasiya edərək attack surface-i azaltmaq da vacibdir.

---

**Virus** — worm-lardan fərqli olaraq, virus **özünü avtomatik yaymır** — bir və ya bir neçə infeksiya mexanizmi (thumb drive-a köçürmə, şəbəkə paylaşımı) tələb edir. Virus adətən **trigger** (icra şərtini müəyyən edən) və **payload** (virusun etdiyi hərəkət) komponentlərindən ibarətdir.

Virus növləri:
- **Memory-resident** — sistem işlədiyi müddətdə yaddaşda qalır
- **Non-memory-resident** — icra olur, yayılır, sonra bağlanır
- **Boot sector** — diskin/media-nın boot sektorunda yerləşir
- **Macro** — söz emalı proqramlarındakı makroslardan/koddan istifadə edərək yayılır
- **Email** — email əlavəsi kimi, yaxud email client-lərindəki zəifliklərdən istifadə edərək yayılır

**Fileless virus** — spam email və zərərli veb-saytlar vasitəsilə yayılır, brauzer plugin-lərindəki zəifliklərdən istifadə edir. Sistemə uğurla daxil olandan sonra özünü **birbaşa yaddaşa** yeridir — heç vaxt lokal fayl saxlama tələb etmir (yeganə saxlanılan iz, davamlılıq texnikasının özüdür — məsələn, Registry qeydi). Bu, fileless virus-u ənənəvi antivirus üçün xüsusilə çətin aşkarlanan edir, çünki skan ediləcək "fayl" yoxdur.

| | Worm | Virus |
|---|---|---|
| Yayılma | Özü, istifadəçi qarşılıqlı əlaqəsi olmadan | İnfeksiya mexanizmi tələb edir (thumb drive və s.) |
| Sürət | Çox sürətli (avtomatik) | Nisbətən yavaş (mexanizmə bağlı) |
| Nümunə | Stuxnet, Raspberry Robin | Fileless virus, macro virus |

**Sual 1**
Worm və Virus arasındakı əsas fərq nədir?

**Sual 2**
Stuxnet-in air-gapped sistemləri necə keçdiyini izah edin.

**Sual 3**
Fileless virus niyə ənənəvi antivirus üçün xüsusilə çətin aşkarlanandır?

## Task 3 — Spyware, Bloatware və Keyloggers: Məlumat Toplayan Malware

**Spyware** — fərd, təşkilat və ya sistem barədə məlumat əldə etmək üçün dizayn edilmiş malware-dir. Bəzi spyware nisbətən zərərsizdir (brauzer vərdişlərini izləyir), amma bəziləri həssas məlumatı hədəf alır, veb-kameraya uzaqdan çıxış verir. Spyware **şəxsiyyət oğurluğu, fırıldaqçılıq, reklam/trafik yönləndirmə, DRM monitorinqi** və **stalkerware** (münasibətlərdə partnyoru qanunsuz izləmək üçün istifadə olunan spyware növü) ilə əlaqələndirilir.

Vacib nüans: spyware başqa malware növlərinin (Trojan, worm, virus) yayılma metodlarından istifadə edə bilər — onu spyware kimi təyin edən **davranışı yox, niyyəti/məqsədidir** (məlumat toplamaq). NSO Group-un Pegasus alətı kommersiyalaşdırılmış spyware nümunəsidir.

**Bloatware** — digər malware kateqoriyalarından fərqli olaraq, adətən **qəsdən zərərli deyil**. İstehsalçılar və ya proqram paketləri tərəfindən quraşdırılan istənilməyən tətbiqlərdir. Zəif yazılmış ola bilər, sistem/istifadə barədə məlumat "evə göndərə" bilər, yaxud istismar oluna bilən zəiflik daşıya bilər — beləliklə əlavə attack surface yaradır.

**Kitabın Exam Note-u — Spyware vs Bloatware fərqi (imtahanda tez-tez qarışdırılır):** İstehsalçıların quraşdırdığı bloatware-də tez-tez "evə zəng etmə" funksionallığı olduğu üçün, ikisini ayırmaq çətin ola bilər. Əsas fərqləndirici — **spyware-in birinci niyyəti** istifadəçi, onun sistem istifadəsi və konfiqurasiyası barədə məlumat toplamaqdır, **bloatware isə sadəcə istənilməyən proqramdır** (niyyət yoxdur).

---

**Keyloggers** — klaviaturadan klaviş vuruşlarını tutan proqramlardır (bəziləri siçan hərəkətini, toxunma ekranı girişini, kart sürüşdürmələrini də tuta bilər). Kernel-dən, API/skriptlər vasitəsilə, hətta birbaşa yaddaşdan məlumat tuta bilər. Məqsəd — istifadəçi girişini toplayıb hücumçu tərəfindən analiz/istifadə etməkdir.

Keylogger-lərin əksəriyyəti parolları əldə etməyə yönəldiyi üçün, **çoxfaktorlu autentifikasiya (MFA)** istifadəsi keylogger-in özünü məğlub etməsə də, onun təsirini məhdudlaşdıra bilər. Software keylogger-lərdən əlavə, **hardware keylogger-lər** də mövcuddur və ucuzdur — kitab müəllifləri kollec kampuslarında tələbələrin müəllimlərinin credential-larını əldə etmək (bəzən uğurla, qiymətlərini dəyişmək üçün) cəhdlərinə şahid olduqlarını qeyd edir.

| | Spyware | Bloatware | Keylogger |
|---|---|---|---|
| Niyyət | Məlumat toplamaq (məqsədli) | Yoxdur (sadəcə istənilməyən) | Klaviş vuruşlarını tutmaq |
| Əsas müdafiə | Antimalware, awareness | Silinmə/təmiz OS image | Patching, MFA |

**Sual 1**
Spyware-i digər malware növlərindən fərqləndirən əsas meyar nədir (davranış, yoxsa niyyət)?

**Sual 2**
Bloatware niyə "zərərli" kateqoriyaya daxil edilmir, amma yenə də risk yaradır?

**Sual 3**
MFA niyə keylogger-i "məğlub etmir", amma onun təsirini "məhdudlaşdırır"? Fərqi izah edin.

## Task 4 — Logic Bombs, Rootkits və Malware Analizi

**Logic Bomb** — digər malware növlərindən fərqli olaraq, **müstəqil proqram deyil**. Əvəzinə, başqa proqramların daxilinə yerləşdirilmiş, müəyyən şərtlər ödəndikdə aktivləşən funksiya/koddur. Digər malware növləri də öz funksiyalarının bir hissəsi kimi bu tip koddan istifadə edə bilər. Digər malware növlərinə nisbətən nadir olsa da, uğurla aktivləşdikdə ciddi təsir yarada bilər.

Logic bomb kod daxilində olduğu üçün, onun IoC-ləri daha az rast gəlinir — aşkarlama proqramın kodunun/məntiqinin analizini tələb edir, ona görə mitigasiya prosesləri də əsasən **kod baxışına (code review)** fokuslanır.

---

**Rootkits** — hücumçulara sistemə arxa qapı (backdoor) vasitəsilə çıxış imkanı vermək üçün xüsusi dizayn edilmiş malware-dir. Müasir rootkit-lərin çoxu özünü aşkarlanmadan gizlətmək qabiliyyətinə malikdir — fayl sistemi driver-lərini "hook" edərək istifadəçilərin rootkit fayllarını görməsinin qarşısını almaqdan tutmuş, diskin Master Boot Record (MBR)-ində başlanğıc koduna yoluxaraq tam disk şifrələmə sistemlərinə qarşı hücuma imkan verməyə qədər.

**Rootkit aşkarlanması çətindir**, çünki bu malware ilə yoluxmuş sistemə etibar edilə bilməz. Ən yaxşı üsul — şübhəli sistemi **etibarlı** bir sistem/cihazdan test etməkdir (məsələn, diski çıxarıb başqa sistemə qoşmaq — beləliklə yoluxmuş OS işləmir və rootkit özünü gizlədə bilmir). Bu mümkün olmadıqda, rootkit aşkarlama alətləri tipik davranış/imzalara baxır; bütövlük yoxlaması (integrity checking) və gözlənilən nəticələrə qarşı data validasiyası da faydalıdır.

Rootkit aşkarlandıqdan sonra silinməsi çətin ola bilər — ən çox tövsiyə olunan yanaşma sistemi **yenidən qurmaq və ya etibarlı backup-dan bərpa etmək**dir. Virtual maşınlar, konteynerlər, sistem imicləri getdikcə populyarlaşdığı üçün bu bərpa prosesi sadələşib, çox vaxt rootkit-i tam təmizləməyə çalışmaqdan daha sürətli olur.

> **Qeyd:** Bəzi rootkit-lər **qəsdən** quraşdırılır — DRM sistemlərinin, oyunlardakı hiyləyə-qarşı (anti-cheat) alətlərin və ya surət qorunması mexanizmlərini məğlub etmək üçün alətlərin bir hissəsi kimi. Bunlar texniki olaraq rootkit sayılsa da, siz adətən zərərli aktorlar tərəfindən istifadə olunan alətlərə fokuslanacaqsınız.

**Rootkit-in tipik IoC-ləri:** fayl hash-ları/imzaları, C&C domenləri/IP ünvanları, davranış-əsaslı müəyyənləşdirmə (servis yaradılması, konfiqurasiya dəyişiklikləri, fayl çıxışı), portların açılması və ya reverse proxy tunellərinin yaradılması.

---

**Malware Analizi Texnikaları** — kitab təhlükəsizlik analitikinin şübhəli kodun zərərli olub-olmadığını müəyyənləşdirmək üçün istifadə edə biləcəyi əsas alətləri sadalayır:

- **Online analiz alətləri** (VirusTotal kimi) — malware-in tanınan alət olub-olmadığını yoxlayır, çoxsaylı AV alətinin onu necə identifikasiya etdiyini göstərir
- **Sandbox alətləri** — malware davranışını qorunmuş mühitdə analiz etmək üçün
- **Manual kod analizi** — xüsusilə skript və interpretasiya olunan kodlarla (Python, Perl) geniş yayılıb
- **Strings kimi alətlər** — analiz üçün faydalı ola biləcək bərpa oluna bilən artefaktları axtarmaq üçün

**Sual 1**
Logic Bomb digər malware növlərindən struktur baxımından necə fərqlənir?

**Sual 2**
Rootkit-i aşkarlamağın "ən yaxşı üsulu" kitaba görə nədir və niyə?

**Sual 3**
Rootkit silindikdən sonra niyə çox vaxt "sistem sıfırlama/yenidən qurma" tövsiyə olunur, sadəcə antimalware ilə təmizləmə yox?

## Yekun Yoxlama (Summary Quiz)

1. Doqquz malware növünü sadalayın.
2. Ransomware-in ən çox yayılmış forması hansıdır və necə işləyir?
3. Trojan və Worm arasındakı əsas fərq nədir?
4. Virus-un iki əsas komponentini (trigger, payload) izah edin.
5. Spyware-i Bloatware-dən fərqləndirən əsas meyar nədir?
6. Logic Bomb niyə "müstəqil proqram" sayılmır?
7. Rootkit-in ən effektiv aşkarlanma üsulu nədir?
8. Malware analizi üçün istifadə olunan dörd texnikadan ikisini sadalayın.

---
