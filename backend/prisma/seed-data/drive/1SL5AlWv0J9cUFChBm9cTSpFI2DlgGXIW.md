# ROOM 2: Governance Strukturları (Board, CISO, Komitələr)

**Path:** GRC Fundamentals
**Module:** Governance & Policy
**Çətinlik:** Medium
**Təxmini vaxt:** 35 dəq

## Room haqqında

Room 1-də öyrəndik ki, Policy sənədləri kim tərəfindən təsdiqlənir — amma "Board" və ya "CISO" dedikdə əslində kim nəzərdə tutulur, bu rollar bir-birindən nə ilə fərqlənir və qərar hansı ardıcıllıqla verilir? Bir təşkilatda təhlükəsizlik qərarları xaotik şəkildə yox, müəyyən bir strukturla verilir — bu struktura **governance** deyilir. Governance-i olmayan təşkilatda hər kəs öz təhlükəsizlik qərarını özü verir, məsuliyyət bulanıq olur və nəticədə boşluqlar yaranır.

Bu room-da təhlükəsizlik governance-inin əsas iştirakçılarını (Board, CISO, komitələr) və onların bir-biri ilə necə əlaqələndiyini öyrənəcəksiniz.

## Öyrənmə nəticələri

- Governance anlayışını və onun idarəçilikdən (management) fərqini izah edə bilmək
- Board, CISO, Risk Committee və Security Steering Committee-nin rol və məsuliyyətlərini fərqləndirmək
- "Three Lines of Defense" modelini izah edə bilmək
- Real ssenaridə qərarın hansı səviyyədə verilməli olduğunu müəyyən edə bilmək

## Task 1 — Governance Nədir?

**Governance** — qərarların kim tərəfindən, hansı prosesə əsasən və hansı məsuliyyətlə veriləcəyini müəyyən edən strukturdur. Diqqət edin: governance **qərarları özü vermir**, sadəcə **kimin, necə qərar verəcəyini** müəyyənləşdirir. Bu, "Management" (idarəçilik) ilə tez-tez qarışdırılır, amma onlar fərqli səviyyələrdir:

- **Governance** = "Kim qərar verməli, hansı prinsiplə?" (strateji, nəzarət səviyyəsi)
- **Management** = "Qərarı necə icra edirik?" (əməliyyat səviyyəsi)

Bir analogiya: bir gəminin kapitanı (Governance) hara getdiklərini və hansı prinsiplərlə hərəkət edəcəklərini müəyyənləşdirir; mühərrik otağındakı komanda (Management) isə gəminin faktiki işləməsini təmin edir. Kapitan mühərriki özü işlətmir, amma onun necə işləyəcəyinə dair qaydalar qoyur və nəticəyə cavabdehdir.

**Niyə governance vacibdir?** Governance-siz təşkilatda üç problem yaranır:

```
1. MƏSULİYYƏT BULANIQLIĞI
   "Bu qərarı kim verməli idi?" sualına aydın cavab yoxdur —
   fəlakət anında hər kəs bir-birini günahlandırır.

2. UYĞUNSUZLUQ
   Fərqli departamentlər eyni riskə fərqli cavab verir —
   biri şifrələməni məcburi edir, digəri etmir.

3. STRATEJİ-ƏMƏLİYYAT QOPUQLUĞU
   Board səviyyəsində qəbul edilən risk iştahı (risk appetite)
   əməliyyat səviyyəsinə heç vaxt çatmır, texniki komanda öz
   başına hərəkət edir.
```

Governance strukturu bu üç problemi aradan qaldırmaq üçün rolları aydın təyin edir və qərar axınını yuxarıdan aşağıya (strategiyadan icraya) və aşağıdan yuxarıya (hesabatlıqdan nəzarətə) təmin edir.

**Sual 1**
Governance ilə Management arasındakı əsas fərq nədir?

**Sual 2**
Governance-in olmaması nəticəsində yarana biləcək üç əsas problemi sadalayın.

**Sual 3**
Gəmi analogiyasında kapitan niyə "Governance", mühərrik otağı komandası isə niyə "Management" sayılır?

## Task 2 — Əsas Rollar: Board, CISO və Komitələr

Təhlükəsizlik governance-ində dörd əsas iştirakçı var, hər birinin fərqli səlahiyyət və məsuliyyət dairəsi var:

**BOARD OF DIRECTORS (İdarə Heyəti)**
- Ən yüksək nəzarət orqanıdır, təşkilatın bütün risklərinə (təkcə təhlükəsizlik yox) cavabdehdir
- Risk appetite-i (nə qədər risk qəbul edilə biləcəyini) təsdiqləyir
- Böyük büdcə tələb edən təhlükəsizlik investisiyalarını təsdiqləyir
- Ciddi insidentlər zamanı son hesabatlıq nöqtəsidir (məsələn, tənzimləyici orqanlar qarşısında)
- **Texniki detallarla məşğul olmur** — CISO-dan strateji səviyyədə hesabat alır

**CISO (Chief Information Security Officer)**
- Təhlükəsizlik proqramının baş icraçısıdır, Board-a (və ya CEO-ya) hesabat verir
- Policy-ləri hazırlayır və Board-a təsdiq üçün təqdim edir
- Risk qiymətləndirmələrini aparır və nəticələri Board-a çatdırır
- Təhlükəsizlik komandasını idarə edir, Standard və Procedure-ların yaradılmasına nəzarət edir
- Governance (strateji) ilə Management (əməliyyat) arasında körpü rolunu oynayır

**SECURITY STEERING COMMITTEE (Təhlükəsizlik İdarəetmə Komitəsi)**
- CISO, İT rəhbəri, Hüquq, HR və biznes bölmələrinin nümayəndələrindən ibarət kross-funksional qrupdur
- Təhlükəsizlik təşəbbüslərini biznes prioritetləri ilə uzlaşdırır (məsələn, yeni bir sistemin tətbiqi həm təhlükəsizlik, həm maliyyə, həm hüquqi tərəfləri əhatə edir)
- Adətən rüblük yığışır, orta səviyyəli qərarları (Standard-ların təsdiqi kimi) verir

**RISK COMMITTEE (Risk Komitəsi)**
- Bütün təşkilat səviyyəli riskləri (təkcə kibertəhlükəsizlik yox, maliyyə, əməliyyat, reputasiya riskləri də daxil) qiymətləndirir
- Adətən Board-un alt komitəsidir və birbaşa Board-a hesabat verir
- Risk registerini (risklərin siyahısı və prioritetləşdirilməsini) nəzərdən keçirir

Bu dörd səviyyə arasında məlumat axını iki istiqamətdə işləyir:

```
        BOARD OF DIRECTORS
        (Risk appetite təsdiqi, böyük büdcə qərarları)
              ↑ hesabat        ↓ istiqamət/təsdiq
        RISK COMMITTEE ←──────→ CISO
        (Təşkilat səviyyəli risk)  (Təhlükəsizlik proqramı)
                                    ↑ hesabat    ↓ icra istiqaməti
                          SECURITY STEERING COMMITTEE
                          (Biznes-texnika uzlaşdırması)
                                    ↑ hesabat    ↓ icra istiqaməti
                          TƏHLÜKƏSİZLİK KOMANDASI
                          (Standard/Procedure icrası)
```

**Vacib məntiq:** Nə qədər yuxarı gedirik, qərarlar bir o qədər **strateji və nadir** olur; nə qədər aşağı enirik, qərarlar bir o qədər **texniki və tez-tez** olur. Bir qərarın hansı səviyyədə veriləcəyini müəyyən edən əsas amil — **onun təsirinin genişliyi və maliyyə/hüquqi riskin böyüklüyüdür**. Məsələn, "hansı antivirus proqramını seçək" texniki komandanın işidir, amma "milyon dollarlıq yeni təhlükəsizlik platformasına investisiya edək" Board-un təsdiqini tələb edir.

**Sual 1**
CISO-nun governance (Board) ilə management (təhlükəsizlik komandası) arasında "körpü" rolunu oynaması nə deməkdir?

**Sual 2**
Security Steering Committee ilə Risk Committee arasındakı əsas fərq nədir?

**Sual 3**
Bir qərarın hansı səviyyədə veriləcəyini müəyyən edən əsas amil nədir?

## Task 3 — Praktiki Tapşırıq: Qərar Hansı Səviyyədə Verilməlidir?

TechNova MMC-də aşağıdakı dörd situasiya yaranıb. Sizin tapşırığınız hər situasiya üçün qərarın hansı səviyyədə (Board / CISO / Security Steering Committee / Risk Committee / Təhlükəsizlik komandası) veriləcəyini müəyyən etmək və səbəbini izah etməkdir.

```
Situasiya 1:
TechNova yeni bir bulud provayderinə keçmək istəyir — bu,
$2 milyon illik xərc və şirkətin bütün müştəri məlumatlarının
yeni infrastrukturda saxlanmasını nəzərdə tutur.

Situasiya 2:
Təhlükəsizlik komandası fərqli bir log monitorinq alətinə
keçmək istəyir, cari alətin lisenziya xərci bitib, alternativ
alət oxşar funksionallığa malikdir və büdcə fərqi minimaldır.

Situasiya 3:
Yeni marketinq kampaniyası üçün müştəri məlumatlarının üçüncü
tərəf analitika şirkəti ilə paylaşılması təklif olunur — bu,
həm hüquqi (KVKT/GDPR uyğunluğu), həm maliyyə, həm marketinq
maraqlarını əhatə edir.

Situasiya 4:
İllik risk qiymətləndirməsində aşkar olunub ki, TechNova-nın
əməliyyat riski (kibertəhlükəsizlik + tədarük zənciri + maliyyə
sabitliyi birlikdə) yüksəkdir və bu, təşkilatın ümumi risk
profilinə təsir edir.
```

**Kömək üçün nümunə həll (Situasiya 1 üzrə):**

```
Situasiya 1 → BOARD OF DIRECTORS

Səbəb: Bu qərar üç meyara görə Board səviyyəsinə aiddir:
(1) Böyük maliyyə həcmi ($2 milyon illik) — bu, adi əməliyyat
büdcəsindən kənardır və kapital qərarı sayılır; (2) Strateji
təsir — bütün müştəri məlumatlarının yeni infrastruktura
keçməsi uzunmüddətli risk profilini dəyişir; (3) Geri dönüşü
çətindir — bulud provayder dəyişikliyi illər sürən öhdəlik
yaradır. CISO bu qərarı hazırlaya və tövsiyə edə bilər, amma
son təsdiq Board-dan gəlməlidir.
```

**Öz-özünə keyfiyyət yoxlaması (Checklist):**

```
☐ Hər 4 situasiya üçün konkret səviyyə seçilib
☐ Hər seçim üçün ən azı bir konkret meyar göstərilib (maliyyə
  həcmi, strateji təsir, geri dönüş çətinliyi, kross-funksional
  təbiət və s.)
☐ "Bu qərarı kim texniki cəhətdən hazırlaya bilər, kim son
  təsdiqi verməlidir" fərqi nəzərə alınıb
☐ Kross-funksional (bir neçə departamenti əhatə edən)
  situasiyalar düzgün tanınıb
```

**Sual 1**
Situasiya 2 niyə Board yox, Təhlükəsizlik komandası (və ya ən çox CISO) səviyyəsində qərarlaşdırıla bilər?

**Sual 2**
Situasiya 3 niyə Security Steering Committee-yə uyğun gəlir? Hansı xüsusiyyəti onu kross-funksional edir?

**Sual 3**
Situasiya 4 niyə Risk Committee-nin işidir, təkcə CISO-nun deyil? (İpucu: risk növlərinin əhatə dairəsini düşünün)

## Yekun Yoxlama (Summary Quiz)

1. Governance ilə Management arasındakı fərqi bir cümlə ilə izah edin.
2. Board, CISO, Security Steering Committee və Risk Committee-nin əsas rolunu qısaca sadalayın.
3. Qərarın hansı səviyyədə veriləcəyini müəyyən edən əsas meyarlar hansılardır?
4. CISO-nun "körpü rolu" nə deməkdir və niyə vacibdir?
5. TechNova ssenarisindəki dörd situasiyadan hansı ən çox kross-funksional komitə tələb edir və niyə?

---
