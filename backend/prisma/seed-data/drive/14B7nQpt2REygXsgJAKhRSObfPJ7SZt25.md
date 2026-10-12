# ROOM 1: Social Engineering and Human Vectors

**Path:** CompTIA Security+ (SY0-701) Hazırlığı
**Module:** 4 — Social Engineering and Password Attacks (Fəsil 4)
**Mənbə:** CompTIA Security+ Study Guide, 9th Ed. — "Social Engineering and Human Vectors" bölməsi
**Domain uyğunluğu:** 2.0 Threats, Vulnerabilities, and Mitigations (22%) — obyektiv 2.2
**Çətinlik:** Medium
**Təxmini vaxt:** 65 dəq (3 task-a bölünüb)

## Room haqqında

Module 3-də texniki malware növlərini öyrəndiniz. Amma çox vaxt ən güclü zəiflik texnologiyada yox, **insanda** olur. Bu room-da kitabın "Social Engineering" adlandırdığı — insanları manipulyasiya edərək istənilən hərəkəti etdirmə sənətini öyrənəcəksiniz. Kitab vurğulayır ki, social engineering texnikaları həm hücumçular, həm də etik pentester-lər tərəfindən istifadə oluna bilər — məqsəd fərqli olsa da, mexanizm eynidir. Bu room, sonrakı Room 2-də öyrənəcəyiniz Password Attacks-a da giriş rolunu oynayır, çünki real dünyada social engineering çox vaxt parol hücumlarından **əvvəl** gəlir.

## Öyrənmə nəticələri

- Social engineering-in yeddi əsas prinsipini (Authority, Intimidation, Consensus, Scarcity, Familiarity, Trust, Urgency) tanımaq
- Phishing ailəsindəki texnikaları (Phishing, Vishing, Smishing, Spear Phishing, Whaling) fərqləndirmək
- Misinformation və Disinformation arasındakı fərqi izah etmək
- Impersonation-a əsaslanan texnikaları (BEC, Pretexting, Brand Impersonation) tanımaq
- Typosquatting və Pharming arasındakı fərqi izah etmək

## Task 1 — Social Engineering Prinsipləri: Niyə İşləyir?

Kitab konkret texnikalara keçməzdən əvvəl, bu texnikaların **niyə uğurlu olduğunu** izah edən yeddi psixoloji prinsipi təqdim edir. Diqqət: imtahan sizdən hücumları bu prinsiplərə görə kateqoriyalaşdırmağı tələb etmir, amma bu prinsiplər hücumun niyə uğurlu ola biləcəyini və necə qarşısının alınacağını anlamaq üçün çox faydalı alətdir.

**Authority (Avtoritet)** — insanların əksəriyyəti, real olub-olmamasından asılı olmayaraq, məsul görünən şəxsə itaət edir. Social engineer menecer, dövlət məmuru və ya digər avtoritetli şəxs kimi görünə bilər.

**Intimidation (Qorxutma)** — hədəfi qorxudaraq/basqı altına alaraq istənilən hərəkəti etdirmək. Hədəf təhdid hiss edir və social engineer-in istədiyini edərək cavab verir.

**Consensus (Konsensus / "Sosial Sübut")** — insanların başqalarının etdiyini etmək istəməsindən istifadə edir. Məsələn, "şöbədəki hamı artıq bu linkə klikləyib" demək və ya saxta rəylər göstərmək.

**Scarcity (Qıtlıq)** — bir şeyin "sonuncu nüsxə" olduğunu göstərərək onu daha cəlbedici etmək.

**Familiarity (Tanışlıq)** — hədəfin şəxsi/təşkilatı bəyənməsinə əsaslanır.

**Trust (Etibar)** — Familiarity-yə bənzəyir, amma fərqi budur: Familiarity hədəfin nəyisə "normal, tanış" hesab etməsinə əsaslanır, Trust isə social engineer-in hədəflə **fəal əlaqə qurmasına** əsaslanır ki, istədiyi hərəkəti əldə etsin.

**Urgency (Təcililik)** — hərəkətin təxirə salınmadan, tez edilməli olduğu hissini yaratmaq.

Kitab vacib bir müşahidə edir: bu prinsiplərin hər biri hədəfi bir vəziyyətə **reaksiya verməyə** məcbur etdiyi üçün işləyir — bir çoxu hədəfi narahat/gərgin edir. Social engineering insan reaksiyalarına əsaslanır, biz isə aydın düşünmək əvəzinə reaksiya verəndə ən həssas oluruq.

**Real dünya nümunəsi (kitabdan):** Fərz edin ki, pentester zəng edib özünü yüksək rəhbərin köməkçisi kimi təqdim edir (Authority + mümkün Familiarity), sonra rəhbərin təcili ehtiyacı olduğunu israr edir (Urgency), sonra dərhal bir şey etməsə işini itirə biləcəyini bildirir (Intimidation). Yalnız bir prinsipdən istifadə etməkdənsə, bir neçə prinsipi birləşdirmək uğur ehtimalını əhəmiyyətli dərəcədə artırır.

| Prinsip | Necə işləyir |
|---|---|
| Authority | Məsul görünən şəxsə itaət |
| Intimidation | Qorxu/basqı |
| Consensus | "Hamı belə edir" |
| Scarcity | "Sonuncu fürsət" |
| Familiarity | Bəyənmə/tanışlıq |
| Trust | Fəal əlaqə qurma |
| Urgency | Tez hərəkət tələbi |

**Sual 1**
Yeddi social engineering prinsipini sadalayın.

**Sual 2**
Familiarity və Trust arasındakı fərqi izah edin.

**Sual 3**
Real dünya nümunəsindəki pentester zəngi hansı üç prinsipi birləşdirir?

## Task 2 — Phishing Ailəsi və Dezinformasiya

**Phishing** — çox vaxt credential-lar (istifadəçi adı/parol) və həssas şəxsi məlumat (kredit kartı) kimi məlumatın fırıldaqçılıqla əldə edilməsini təsvir edən geniş termindir. Ən çox email vasitəsilə həyata keçirilir, amma bir neçə variantı var:

- **Vishing** — səs/səsli poçt vasitəsilə phishing. Adətən qohum/dosta kömək bəhanəsi (pul köçürmə fırıldaqçılığına aparır), vergi fırıldaqları, hüquq-mühafizə hədələri ilə əlaqələndirilir.
- **Smishing** — SMS mətn mesajları vasitəsilə. Digər phishing formalarından fərqli olaraq, adətən istifadəçini linkə **klikləməyə** təhrik edir (saxta sayta yönləndirmək, telefonu yoluxdurmaq, hətta MFA SMS kodunu tələb etmək üçün).
- **Spear Phishing** — təşkilatdakı konkret şəxs/qrupu hədəf alır.
- **Whaling** — Spear Phishing-ə bənzəyir, amma xüsusilə **yüksək səviyyəli** işçiləri (CEO, CFO — "böyük balıqlar") hədəf alır, ona görə "whaling" adlanır.

**Əsas müdafiə:** digər social engineering texnikaları kimi, **awareness** (məlumatlandırma) ən effektiv müdafiələrdən biridir — işçiləri phishing-i tanımağa öyrətmək, dövri məşqlər aparmaq. Texniki müdafiələr də mövcuddur: reputasiya alətləri, açar söz/mətn nümunəsi uyğunlaşdırma vasitəsilə filtrasiya.

---

**Misinformation vs Disinformation** — bu iki termin tez-tez qarışdırılır, amma fərq vacibdir:

- **Misinformation** — **səhv** məlumatdır, adətən faktları yanlış anlamaqdan qaynaqlanır (qəsdən deyil).
- **Disinformation** — **qəsdən**, kimisə/nəyisə hədəfləyərək yayılan yanlış/dəqiq olmayan məlumatdır.

Kibermüharibə və ənənəvi müharibə getdikcə üst-üstə düşdüyü üçün, onlayn təsir kampaniyaları (əsasən sosial media, email üzərindən) hökumətlər və digər qruplar tərəfindən geniş istifadə olunur. 2016 və 2020-ci il ABŞ seçkilərini hədəf alan təsir kampaniyaları buna ən görünən nümunədir.

CISA-nın "MDM" (Misinformation, Disinformation, Malinformation) əleyhinə tövsiyə etdiyi beş addımlı **TRUST** modeli:

```
1. Tell your story (Öz hekayənizi danışın)
2. Ready your team (Komandanızı hazırlayın)
3. Understand and assess MDM (MDM-i anlayın və qiymətləndirin)
4. Strategize response (Cavab strategiyası qurun)
5. Track outcomes (Nəticələri izləyin)
```

Dezinformasiya kampaniyaları sürətlə yayıla bilər, mənbəsini müəyyənləşdirmək çətin ola bilər — təşkilatlar buna görə monitorinq aparmalı və TRUST modelinə bənzər hərəkətlərlə cavab verməyə hazır olmalıdır.

**Sual 1**
Vishing, Smishing və Whaling arasındakı fərqi izah edin.

**Sual 2**
Misinformation və Disinformation arasındakı əsas fərq nədir?

**Sual 3**
TRUST modelinin beş addımını sadalayın.

## Task 3 — Impersonation-a Əsaslanan Texnikalar

**Impersonation (Özünü Başqası Kimi Göstərmək)** — social engineer-in alətlər dəstindəki əsas vasitədir. Hədəfin impersonator-a inanmaq istəyini social engineering prinsipləri ilə birləşdirərək, hücumçunun istədiyi çıxış/məlumat/nəticəni əldə etməsinə imkan yaradır. **Identity fraud** (şəxsiyyət oğurluğu) — başqasının şəxsiyyətindən istifadə etməkdir, adətən maliyyə qazancı üçün, amma pentest zamanı da istifadə oluna bilər. Bəzən impersonation daha az spesifikdir — hücumçu konkret bir şəxsi təqlid etmək əvəzinə, sadəcə çatdırılma sürücüsü və ya xidmət provayderinin işçisi kimi görünə bilər.

**Business Email Compromise (BEC)** — zahirən qanuni email ünvanlarından istifadə edərək fırıldaqçılıq aparır. Ümumi nümunələr: hesab-faktura fırıldaqları, hədiyyə kartı fırıldaqları, məlumat oğurluğu, hesab kompromisı. Qanuni görünən email yaratmaq üçün istifadə olunan metodlar:

- Kompromis olmuş hesablardan istifadə
- Saxtalaşdırılmış (spoofed) email göndərmək
- Oxşar, saxta domenlərdən istifadə
- Malware və ya digər alətlərdən istifadə

BEC bəzən **EAC** (email account compromise) adlanır — bu, daha az spesifik termindir. Mitigasiya: MFA, awareness təlimi, müvafiq istifadə/davranış siyasətləri.

**Pretexting** — bir şəxsə yaxınlaşmağın səbəbini əsaslandırmaq üçün uydurma ssenaridən istifadə etmək prosesidir. Çox vaxt impersonation-u daha inandırıcı etmək üçün istifadə olunur. Diqqətli hədəf sual verərək və ya təsdiq tələb edərək pretexting/impersonation hücumlarını məğlub edə bilər — bir çox halda sadəcə **təsdiqləmə zəngi etmək** belə hücumu dayandıra bilər.

**Watering Hole Attacks** — hədəflərin tez-tez ziyarət etdiyi vebsaytlardan istifadə edərək onlara hücum edir. Bu saytlar heyvanlar üçün su hovuzu kimi işləyir — hücumçular qurbanların həmin sayta gələcəyini bilərək burada hücum təşkil edir. Hədəflərin hansı saytı istifadə etdiyini bildikdən sonra, hücumçular ya birbaşa saytı, ya da reklam şəbəkəsi kimi digər vasitələrlə malware yaymağa fokuslana bilər.

**Brand Impersonation (Marka Təqlidi)** — tanınan bir brendə aid görünən email-lərdən istifadə edən phishing formasıdır, brend tanınmasından, hətta brendin öz email şablonlarından istifadə edir. Adətən istifadəçiləri mövcud hesablarına (mağaza, bank) giriş etməyə təhrik etmək üçün istifadə olunur; ödəniş tələb edə, parol/həssas məlumat toplaya, yaxud sadəcə fayl/proqram işə salma təlimatı olan malware əlavə edə bilər.

**Typosquatting** — qanuni sayt URL-inə çox oxşar, kiçik yazı səhvləri olan URL-lərdən istifadə edir. İnsanların URL-i səhv yazacağını gözləyir, beləliklə reklam trafiki yaradır və ya oxşar (amma qanuni olmayan) məhsulların satışını təşviq edir. Kitabın qeydinə görə, typosquatting-in qarşısını almaq çətindir, amma təşkilatlar öz domenlərinin ən çox rast gəlinən yazı səhvlərini qeydiyyatdan keçirə bilər (məsələn, amason.com Amazon.com-a yönləndirilir).

**Pharming** — typosquatting-ə əlaqəli, amma fərqli texnikadır: host faylını (sistemin DNS axtarışında istinad etdiyi ilk yer) dəyişdirməyə, ya da sistemin DNS serverlərini dəyişdirən aktiv malware-ə əsaslanır. Uğurlu host-fayl əsaslı pharming hücumu qurbanı bilmədən oxşar (saxta) sayta yönləndirir.

| Texnika | Əsas mexanizm | Typosquatting-dən fərqi |
|---|---|---|
| Typosquatting | Oxşar/səhv yazılmış URL | — |
| Pharming | DNS/host fayl manipulyasiyası | İstifadəçi düzgün URL yazsa belə yönləndirilir |

**Sual 1**
Impersonation və Pretexting arasındakı əlaqəni izah edin.

**Sual 2**
BEC-in qanuni görünən email yaratmaq üçün istifadə etdiyi dörd metoddan ikisini sadalayın.

**Sual 3**
Watering Hole hücumu niyə bu adı daşıyır?

**Sual 4**
Typosquatting və Pharming arasındakı əsas fərq nədir?

## Yekun Yoxlama (Summary Quiz)

1. Yeddi social engineering prinsipindən dördünü sadalayın.
2. Phishing, Vishing və Smishing arasındakı fərqi izah edin.
3. Spear Phishing və Whaling arasındakı fərq nədir?
4. Misinformation və Disinformation arasındakı fərqi bir cümlə ilə izah edin.
5. Pretexting nədir və hansı digər texnika ilə çox birlikdə istifadə olunur?
6. Watering Hole və Typosquatting arasındakı fərqi izah edin.
7. Pharming host faylını necə istismar edir?

---
