# ROOM 3: Implementing Security Controls

**Path:** CompTIA Security+ (SY0-701) Hazırlığı
**Module:** 1 — Today's Security Professional (Fəsil 1)
**Mənbə:** CompTIA Security+ Study Guide, 9th Ed. — "Implementing Security Controls" bölməsi
**Domain uyğunluğu:** 1.0 General Security Concepts (12%) — obyektiv 1.1
**Çətinlik:** Easy→Medium
**Təxmini vaxt:** 40 dəq

## Room haqqında

Room 1-2-də kibertəhlükəsizliyin məqsədlərini (CIA) və təhdid/təsir modellərini (DAD, Breach Impact) öyrəndiniz. İndi sual budur: bu məqsədlərə çatmaq üçün konkret olaraq **nə** qururuq? Cavab — Security Controls (təhlükəsizlik nəzarətləri). Bu room-da CompTIA-nın özünəməxsus nəzarət təsnifat sistemini — dörd Kateqoriya (necə hərəkət edir) və altı Tip (nəyə nail olur) — öyrənəcəksiniz. Bu, imtahanda ən çox sınanan mövzulardan biridir.

## Öyrənmə nəticələri

- Gap Analysis konseptini və onun nəzarət qiymətləndirməsindəki rolunu izah etmək
- Dörd Security Control Kateqoriyasını (Technical, Operational, Managerial, Physical) fərqləndirmək
- Altı Security Control Tipini (Preventive, Deterrent, Detective, Corrective, Compensating, Directive) fərqləndirmək
- Compensating Control konseptini real nümunə (PCI DSS) ilə izah etmək
- Real ssenaridə bir nəzarəti həm Kateqoriya, həm Tip üzrə düzgün təsnif etmək

## Task 1 — Gap Analysis: Nəzarətin Kifayət Etdiyini Necə Bilirik?

Təşkilat öz risk mühitini təhlil edəndən sonra, texniki və biznes liderləri məlumatın CIA-sını qorumaq üçün lazım olan qorunma səviyyəsini müəyyən edirlər. Bunlar **control objectives** (nəzarət obyektivləri) adlanır — arzu olunan təhlükəsizlik vəziyyətinin bəyanatlarıdır, amma özləri heç bir fəaliyyəti həyata keçirmir. **Security Controls** isə bu obyektivləri həqiqətən yerinə yetirən konkret tədbirlərdir.

**Gap Analysis** — kibertəhlükəsizlik mütəxəssisinin nəzarət obyektivlərini nəzərdən keçirib, mövcud nəzarətlərin bu obyektivlərə həqiqətən nail olub-olmadığını yoxlaması prosesidir. Əgər nəzarət obyektivi ilə real nəzarət arasında uyğunsuzluq varsa, bu, bir **gap** (boşluq) sayılır.

Bunu bir tikinti analoji ilə görək: control objective — memarın çertyojudur ("bu divar odadavamlı olmalıdır"). Security control — faktiki tikilən divardır. Gap Analysis isə inspektorun gəlib divarı yoxlamasıdır — "çertyojda deyilən materialdan tikilibmi, yoxsa ucuz alternativ istifadə olunub?" Əgər fərq varsa, bu, gap-dir və düzəldilməlidir.

Tapılan boşluqlar potensial risk kimi qəbul edilməli və resurs/vaxt imkan verdikcə aradan qaldırılmalıdır (bu proses, remediation, Module 5-də — Security Assessment and Testing — ətraflı işlənəcək).

**Sual 1**
Control objective ilə security control arasındakı fərq nədir?

**Sual 2**
Gap Analysis nə edir və nəticəsində nə tapılır?

**Sual 3**
Tikinti analogiyasında "inspektor" hansı rolu təmsil edir?

## Task 2 — Security Control Kateqoriyaları: Necə Hərəkət Edir?

CompTIA nəzarətləri onların **hərəkət mexanizminə** görə dörd kateqoriyaya bölür. Diqqət: bu təsnifat CompTIA-ya məxsusdur — əgər başqa sertifikat üçün oxşar (amma fərqli adlanan) təsnifat öyrənmisinizsə, bunları qarışdırmayın, imtahanda dəqiq CompTIA terminologiyası tələb olunur.

**Technical (Texniki) nəzarətlər** — rəqəmsal sahədə CIA-nı təmin edir. Nümunələr: firewall qaydaları, giriş nəzarəti siyahıları (ACL), müdaxilənin qarşısını alma sistemləri (IPS), şifrələmə.

**Operational (Əməliyyat) nəzarətləri** — texnologiyanı təhlükəsiz idarə etmək üçün qurduğumuz proseslər. Nümunələr: istifadəçi giriş icazələrinin dövri yoxlanması, log monitorinqi, zəiflik idarəetməsi.

**Managerial (İdarəetmə) nəzarətləri** — risk idarəetmə prosesinin mexanikasına fokuslanan prosedur mexanizmləri. Nümunələr: dövri risk qiymətləndirmələri, təhlükəsizlik planlaşdırma tədbirləri, dəyişiklik idarəetməsi/satınalma/layihə idarəetməsi proseslərinə təhlükəsizliyin inteqrasiyası.

**Physical (Fiziki) nəzarətlər** — fiziki dünyaya təsir edən nəzarətlər. Nümunələr: hasarlar, perimetr işıqlandırması, qıfıllar, yanğınsöndürmə sistemləri, oğru siqnalizasiyası.

| Kateqoriya | Sahə | Nümunələr |
|---|---|---|
| Technical | Rəqəmsal/sistem | Firewall, ACL, şifrələmə, IPS |
| Operational | Proseslər (texnologiyanı idarə edən) | Giriş icazəsi baxışı, log monitorinqi |
| Managerial | Risk idarəetmə mexanikası | Risk qiymətləndirmə, planlaşdırma |
| Physical | Fiziki dünya | Hasar, qıfıl, yanğınsöndürmə |

**Vacib nüans:** Bir control objective çox vaxt **bir neçə kateqoriyanın kombinasiyasını** tələb edir. Kitabın nümunəsi: "data mərkəzinə icazəsiz girişin qarşısını almaq" məqsədinə çatmaq üçün təşkilat həm biometrik qıfıllar (Physical), həm icazəli girişlərin müntəzəm nəzərdən keçirilməsi (Operational), həm dövri risk qiymətləndirmələri (Managerial) tətbiq edə bilər. Tək kateqoriya nadir hallarda kifayət edir.

**Sual 1**
Dörd Security Control Kateqoriyasını sadalayın və hər birinə bir nümunə verin.

**Sual 2**
"Log monitorinqi" hansı kateqoriyaya aiddir və niyə?

**Sual 3**
Niyə bir control objective çox vaxt bir neçə kateqoriyanın kombinasiyasını tələb edir? Kitabın data mərkəzi nümunəsi ilə izah edin.

## Task 3 — Security Control Tipləri: Nəyə Nail Olur?

Kateqoriyalardan fərqli olaraq (necə hərəkət edir), CompTIA nəzarətləri **arzu olunan effektə** görə də təsnif edir — altı tip var:

**Preventive (Qarşısını alan)** — problemin baş verməsinin qarşısını əvvəlcədən alır. Nümunə: firewall, şifrələmə.

**Deterrent (Çəkindirici)** — hücumçunun cəhd etməsinin qarşısını (psixoloji/görünüş baxımından) alır. Nümunə: aqressiv keşik iti, tikanlı məftil hasarı.

**Detective (Aşkarlayıcı)** — artıq baş vermiş təhlükəsizlik hadisələrini müəyyən edir. Nümunə: müdaxilənin aşkarlanması sistemi (IDS).

**Corrective (Düzəldici)** — artıq baş vermiş problemi aradan qaldırır. Nümunə: ransomware hücumundan sonra backup-dan bərpa etmək.

**Compensating (Kompensasiyaedici)** — təhlükəsizlik siyasətinə edilən istisnalarla bağlı riski azaltmaq üçün qurulan nəzarətlər (Task 4-də dərindən işlənəcək).

**Directive (İstiqamətləndirici)** — işçilərə və digərlərinə təhlükəsizlik obyektivlərinə necə nail olacaqlarını bildirir. Nümunə: siyasətlər və prosedurlar (GRC path-dəki Policy/Procedure konseptlərini xatırlayın).

| Tip | Nə vaxt işə düşür | Nümunə |
|---|---|---|
| Preventive | Problem baş verməzdən əvvəl | Firewall, şifrələmə |
| Deterrent | Cəhddən əvvəl (psixoloji) | Keşik iti, tikanlı məftil |
| Detective | Problem baş verdikdən sonra (aşkarlama) | IDS |
| Corrective | Problem baş verdikdən sonra (düzəltmə) | Backup-dan bərpa |
| Compensating | Standart nəzarət mümkün olmayanda | Alternativ, izolə edilmiş şəbəkə |
| Directive | Davamlı (istiqamətləndirmə) | Siyasət, prosedur |

**Preventive vs Deterrent fərqi (tez-tez qarışdırılır):** Preventive nəzarət hücumu **texniki olaraq mümkünsüz** edir (firewall paketi blokla), Deterrent isə hücumçunu **cəhd etməkdən çəkindirir**, amma texniki olaraq maneə olmaya bilər (bir tabelo "Bu sahə kameralarla izlənilir" yazır — hücumçunu ruhdan salır, amma fiziki olaraq onu dayandırmır).

**Detective vs Corrective fərqi:** hər ikisi problem baş verdikdən **sonra** işləyir, amma Detective yalnız "bu baş verib" deyir (aşkarlayır), Corrective isə problemi həll edir (düzəldir). IDS sizə "hücum var" deyir (Detective) — bu, hücumu dayandırmır. Backup-dan bərpa isə artıq zədələnmiş sistemi əvvəlki vəziyyətinə qaytarır (Corrective).

**Sual 1**
Altı Security Control Tipini sadalayın.

**Sual 2**
Preventive və Deterrent nəzarətlər arasındakı fərqi bir nümunə ilə izah edin.

**Sual 3**
IDS (Intrusion Detection System) hansı tipə aiddir və niyə bu, "problemi həll edir" demək deyil?

## Task 4 — Compensating Controls: Dərin Baxış

Kitab Compensating Control-lara xüsusi diqqət ayırır, çünki bu konsept praktiki GRC işində çox vaxt yanlış başa düşülür.

**Compensating control** — təşkilat orijinal tələbə (standart nəzarətə) tam əməl edə bilmədikdə, riskin əvəzini ödəmək üçün istifadə olunan alternativ nəzarətdir.

Kitab PCI DSS-in (Payment Card Industry Data Security Standard) bu sahədə ən formal prosesə malik olduğunu qeyd edir — PCI DSS compensating control-un qəbul edilməsi üçün üç meyar qoyur:

```
1. Nəzarət orijinal tələbin MƏQSƏDİNƏ və SƏRTLİYİNƏ uyğun olmalıdır
2. Nəzarət orijinal tələbin qarşısını almaq istədiyi riski
   KİFAYƏT QƏDƏR kompensasiya edən müdafiə səviyyəsi təmin etməlidir
3. Nəzarət digər PCI DSS tələblərindən "ARTIQ VƏ ƏLAVƏ" olmalıdır
```

**Praktiki nümunə (kitabdan):** Bir təşkilat müəyyən bir maşında köhnəlmiş əməliyyat sistemi işlətməli olur, çünki biznes üçün zəruri proqram təminatı yalnız həmin OS versiyasında işləyir. Əksər təhlükəsizlik siyasətləri köhnəlmiş OS-in istifadəsini qadağan edir (çünki bilinən zəifliklərə həssasdır). Təşkilat bu sistemi digər sistemlərlə minimal/heç bir əlaqəsi olmayan **izolə edilmiş şəbəkədə** saxlamağı compensating control kimi seçə bilər.

Bu nümunənin göstərdiyi ümumi məntiq: compensating control, hər tələb olunan nəzarəti hər şəraitdə tətbiq etməyin **mümkün olmadığı** reallığı ilə riski mümkün qədər idarə etmək **istəyi** arasında balans yaradır. Bir çox təşkilat (PCI DSS-ə tabe olmasa belə) bu strategiyanı istifadə edir.

Vacib əlavə qeyd: compensating control adətən **müvəqqəti istisnaya** cavab kimi qəbul edilir — təşkilat paralel olaraq orijinal tələbin hərfi mənasına və niyyətinə tam uyğunluğu bərpa edəcək **remediation planı** hazırlamalıdır. Yəni compensating control "əbədi həll" yox, "keçid dövrü həlli" kimi düşünülməlidir.

**Sual 1**
Compensating control nədir və nə vaxt istifadə olunur?

**Sual 2**
PCI DSS-in compensating control üçün qoyduğu üç meyarı sadalayın.

**Sual 3**
Köhnəlmiş OS nümunəsində izolə edilmiş şəbəkə niyə "əbədi həll" deyil, "keçid dövrü həlli" kimi düşünülməlidir?

## Yekun Yoxlama (Summary Quiz)

1. Gap Analysis nə edir?
2. Dörd Security Control Kateqoriyasını sadalayın.
3. Altı Security Control Tipini sadalayın.
4. Preventive və Corrective nəzarətlər arasındakı əsas fərq nədir?
5. Compensating control-un PCI DSS üzrə üç qəbul meyarını yazın.
6. Data mərkəzinə girişi qorumaq üçün istifadə olunan "biometrik qıfıl" hansı Kateqoriyaya, "dövri risk qiymətləndirməsi" isə hansı Kateqoriyaya aiddir?

---
