# ROOM 3: Risk Appetite, Tolerance & KRI

**Path:** GRC Fundamentals
**Module:** Risk Management
**Çətinlik:** Medium
**Təxmini vaxt:** 35 dəq

## Room haqqında

Room 1-də riskləri necə tanımağı, Room 2-də isə onları necə ölçməyi (qualitativ/kvantitativ, ALE) öyrəndiniz. İndi bir addım da irəli gedirik: bir riskin rəqəmi əlinizdə olanda, "bu rəqəm bizim üçün qəbuledilənidirmi?" sualına necə cavab tapmaq olar? Bu room-da təşkilatın "nə qədər risk qəbul edə biləcəyini" formal şəkildə müəyyən edən üç anlayışı — Risk Appetite, Risk Tolerance və KRI (Key Risk Indicator) — öyrənəcəksiniz. Bu, Risk Register qurmazdan (Room 4) əvvəl bilməli olduğunuz həlledici kontekstdir.

## Öyrənmə nəticələri

- Risk Appetite və Risk Tolerance arasındakı fərqi izah edə bilmək
- Risk Appetite Statement-in necə formalaşdırıldığını bilmək
- KRI-nin nə olduğunu və KPI-dan necə fərqləndiyini izah etmək
- Real ssenaridə konkret bir riskin appetite/tolerance daxilində olub-olmadığına qərar vermək

## Task 1 — Risk Appetite vs Risk Tolerance: Nə Qədər Risk Qəbul Edilə Bilər?

Hər təşkilat riskə fərqli münasibət bəsləyir — bir startap sürətli böyümə üçün yüksək risk qəbul edə bilər, bir bank isə maksimum konservativ ola bilər. Bu münasibəti təsadüfə buraxmaq əvəzinə, GRC proqramları onu formal şəkildə sənədləşdirir. Burada iki əsas anlayış var və onlar tez-tez qarışdırılır.

**Risk Appetite** — təşkilatın öz məqsədlərinə çatmaq üçün *könüllü olaraq* qəbul etməyə hazır olduğu ümumi risk səviyyəsidir. Bu, strateji, geniş bəyanatdır — Board səviyyəsində müəyyən edilir (xatırlayın, Room 2-də Governance-dan: strateji qərarlar Board-a aiddir).

**Risk Tolerance** — Appetite-in daxilində, konkret bir risk növü üçün *icazə verilən sapma dərəcəsi*dir. Bu, daha dar və ölçülə bilən hədddir.

Bunu bir sürücülük analogiyası ilə izah edək: Risk Appetite — "mən təhlükəsiz, amma məqsədəuyğun sürətlə sürmək istəyirəm" kimi ümumi münasibətdir. Risk Tolerance isə konkret rəqəmdir — "yol nişanında icazə verilən sürətdən maksimum 10 km/saat çox sürə bilərəm, bundan artıq qəbuledilməzdir." Appetite münasibəti təsvir edir, Tolerance isə sərhədi rəqəmləşdirir.

| Xüsusiyyət | Risk Appetite | Risk Tolerance |
|---|---|---|
| Səviyyə | Strateji, ümumi | Taktiki, konkret |
| Kim müəyyən edir | Board / İcraçı Rəhbərlik | Risk Committee / CISO |
| Format | Keyfiyyət bəyanatı | Ölçülə bilən hədd (rəqəm, faiz) |
| Nümunə | "Müştəri məlumatının təhlükəsizliyi ilə bağlı minimal risk qəbul edirik" | "İllik 99.9%-dən az uptime qəbuledilməzdir; 99.5%-ə qədər sapma icazəlidir" |
| Dəyişmə tezliyi | Nadir (illik baxış) | Bir qədər daha tez-tez |

Praktiki nümunə: Bir bank Appetite bəyanatında deyir ki, "əməliyyat riskinə münasibətdə konservativik." Bu, çox geniş bir istiqamətdir. Tolerance isə bunu konkretləşdirir: "sistem downtime-ı ildə 4 saatdan çox olmamalıdır" — indi bu, ölçülə bilən, monitorinqi mümkün olan bir hədddir. Əgər downtime 5 saata çatarsa, Tolerance pozulub və bu, dərhal eskalasiya tələb edir.

**Sual 1**
Risk Appetite və Risk Tolerance arasındakı əsas fərq nədir?

**Sual 2**
Sürücülük analogiyasında Tolerance-a uyğun gələn element nədir?

**Sual 3**
Niyə Risk Appetite Board səviyyəsində, Tolerance isə daha aşağı səviyyədə müəyyən edilir?

## Task 2 — Risk Appetite Statement: Necə Yazılır?

Risk Appetite mücərrəd qalmamalıdır — sənədləşdirilməli və konkret risk kateqoriyalarına bölünməlidir. Bu, Module 2-də öyrəndiyiniz Policy strukturuna bənzəyir: yüksək səviyyəli prinsip, amma icra oluna bilən formada.

Tipik Risk Appetite Statement-in strukturu belədir:

```
1. ÜMUMİ BƏYANAT
   Təşkilatın riskə ümumi münasibəti (konservativ / balanslaşdırılmış / aqressiv)

2. RİSK KATEQORİYALARI ÜZRƏ AYRILMA
   Hər risk növü üçün ayrıca appetite səviyyəsi:
   - Strateji risk
   - Maliyyə riski
   - Əməliyyat riski
   - Uyğunluq (compliance) riski
   - Reputasiya riski
   - Kibertəhlükəsizlik riski

3. QƏBULEDİLMƏZ RİSKLƏR (Zero Tolerance sahələri)
   Heç bir halda qəbul edilməyən risk növləri

4. TƏSDİQ VƏ BAXIŞ
   Kim təsdiqləyib, nə vaxt yenilənir
```

Diqqətəlayiq məqam: bir təşkilatın **bütün** risk növlərinə eyni appetite-i olmur. Məsələn, bir texnologiya şirkəti innovasiya riskinə (yeni məhsul sınamaq) yüksək appetite göstərə bilər, amma məlumat təhlükəsizliyi riskinə qarşı çox aşağı appetite saxlaya bilər. Bu differensasiya vacibdir — "bütün risklərə eyni cür yanaşırıq" real təcrübədə nadir hallarda işləyir.

**Nümunə — Kibertəhlükəsizlik risk kateqoriyası üçün Appetite bəyanatı:**

```
Kibertəhlükəsizlik Riski: AŞAĞI APPETITE

Təşkilat müştəri və işçi məlumatlarının məxfiliyini qorumağı
prioritet sayır. Məlumat itkisi və ya icazəsiz giriş riski
yaradan fəaliyyətlərə yalnız güclü kompensasiyaedici nəzarətlər
mövcud olduqda icazə verilir. Kritik sistemlərə münasibətdə
sıfır-tolerantlıq siyasəti tətbiq olunur.
```

Bu bəyanat hələ "rəqəm" vermir (bu, Tolerance-ın işidir), amma istiqaməti aydın göstərir — bu bəyanatı oxuyan hər hansı bir menecer bilir ki, "kibertəhlükəsizlik məsələsində riskli qərar qəbul etməzdən əvvəl əlavə təsdiq lazımdır."

**Sual 1**
Risk Appetite Statement-in dörd əsas bölməsini sadalayın.

**Sual 2**
Niyə bir təşkilat müxtəlif risk kateqoriyalarına fərqli appetite səviyyəsi göstərə bilər? Nümunə ilə izah edin.

**Sual 3**
"Zero Tolerance sahələri" bölməsi nə üçün lazımdır?

## Task 3 — KRI: Riskin Nəbzini Tutmaq

Appetite və Tolerance müəyyən edildikdən sonra sual yaranır: bunlara riayət olunduğunu necə **davamlı** izləyirik? Cavab — Key Risk Indicator (KRI). KRI, bir riskin artıb-artmadığını erkən xəbərdar edən ölçülə bilən metrikdir.

KRI-ni tez-tez KPI (Key Performance Indicator) ilə qarışdırırlar, amma məqsədləri fərqlidir:

| | KPI | KRI |
|---|---|---|
| Sual | Nə qədər yaxşı işləyirik? | Nə qədər risk altındayıq? |
| İstiqamət | Performans | Təhlükə siqnalı |
| Nümunə | "Aylıq satış həcmi" | "Uğursuz giriş cəhdlərinin sayı" |
| Trend "yaxşı" | Yuxarı gedir | Aşağı qalır (yüksəlsə, xəbərdarlıqdır) |

KRI-ni bir avtomobilin idarə paneli kimi düşünə bilərsiniz: sürətölçən (KPI-a bənzər — "nə qədər sürətlə gedirik") sizə performansı göstərir, amma motor temperaturu göstəricisi (KRI-a bənzər) sizə problemin yaxınlaşdığını əvvəlcədən xəbərdar edir. Motor temperaturu qırmızı zonaya keçəndə, hələ motor partlamayıb — amma partlama riski artıq yüksəkdir. Məhz bu erkən xəbərdarlıq KRI-nin dəyəridir.

**Yaxşı KRI-nin xüsusiyyətləri:**

- **Ölçülə bilər** — konkret rəqəm və ya faizlə ifadə olunur
- **Vaxtında toplanır** — real-time və ya tez-tez yenilənir (aylıq KRI çox gecikə bilər bəzi risklər üçün)
- **Threshold-a bağlıdır** — "yaşıl/sarı/qırmızı" zonalar əvvəlcədən müəyyən edilib (bu, Tolerance ilə birbaşa əlaqəlidir)
- **Fəaliyyətə səbəb olur** — KRI qırmızı zonaya keçəndə, kimsə (RACI-dən xatırlayın — Accountable rol) hərəkətə keçməlidir

**Nümunə KRI dəsti (kibertəhlükəsizlik riski üçün):**

| KRI | Yaşıl | Sarı | Qırmızı |
|---|---|---|---|
| Aylıq uğursuz giriş cəhdləri (istifadəçi başına) | <5 | 5-15 | >15 |
| Yenilənməmiş kritik patch-lərin sayı | 0 | 1-3 | >3 |
| Phishing simulyasiyasında "klikləyən" işçi faizi | <5% | 5-15% | >15% |
| Orta insident aşkarlama vaxtı (saat) | <4 | 4-24 | >24 |

Bu cədvəl Task 1-dəki Tolerance konseptini canlı formada göstərir — hər KRI-nin "qırmızı" həddi əslində həmin riskin Tolerance sərhədidir. KRI qırmızı zonaya keçəndə, bu, artıq "gözləyib görək" məsələsi deyil — əvvəlcədən müəyyənləşdirilmiş eskalasiya prosesi işə düşməlidir.

**Sual 1**
KRI və KPI arasındakı əsas fərq nədir?

**Sual 2**
Avtomobil analogiyasında "motor temperaturu göstəricisi" hansı konsepti təmsil edir və niyə?

**Sual 3**
Yaxşı KRI-nin dörd xüsusiyyətini sadalayın.

## Yekun Yoxlama (Summary Quiz)

1. Risk Appetite və Risk Tolerance arasındakı fərqi bir cümlə ilə izah edin.
2. Risk Appetite Statement-in dörd bölməsini sadalayın.
3. KRI-nin KPI-dan fərqini izah edin.
4. Bir KRI-nin "qırmızı zonaya" keçməsi nə deməkdir və bu zaman nə baş verməlidir?
5. Niyə bir təşkilat bütün risk kateqoriyalarına eyni appetite səviyyəsini tətbiq etməməlidir?

---
