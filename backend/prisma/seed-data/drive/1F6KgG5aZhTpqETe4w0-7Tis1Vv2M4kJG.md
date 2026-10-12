# ROOM 2: Data Breach Risks

**Path:** CompTIA Security+ (SY0-701) Hazırlığı
**Module:** 1 — Today's Security Professional (Fəsil 1)
**Mənbə:** CompTIA Security+ Study Guide, 9th Ed. — "Data Breach Risks" bölməsi
**Domain uyğunluğu:** 1.0 General Security Concepts (12%)
**Çətinlik:** Easy
**Təxmini vaxt:** 30 dəq

## Room haqqında

Room 1-də CIA Triadını (Confidentiality, Integrity, Availability) öyrəndiniz — bunlar kibertəhlükəsizliyin **məqsədləridir**. İndi sual budur: bu məqsədlər pozulanda (yəni bir təhlükəsizlik insidenti/breach baş verəndə), bunun konkret **təhdid növü** və **biznes təsiri** nədir? Bu room-da kitabın təqdim etdiyi iki tamamlayıcı çərçivəni — DAD Triadı (CIA-nın "əks üzü") və Breach Impact kateqoriyalarını (maliyyə, reputasiya, strateji, əməliyyat, uyğunluq) öyrənəcəksiniz.

## Öyrənmə nəticələri

- DAD Triadının (Disclosure, Alteration, Denial) CIA ilə necə güzgü münasibətində olduğunu izah etmək
- DAD Triadını real ssenaridə risk təhlili aləti kimi tətbiq etmək
- Breach-in beş təsir kateqoriyasını (Financial, Reputational, Strategic, Operational, Compliance) fərqləndirmək
- Real bir insidentdə niyə risklərin çox vaxt bir neçə kateqoriyanı eyni anda kəsdiyini izah etmək

## Task 1 — DAD Triadı: CIA-nın Əks Üzü

Kitab CIA Triadına paralel bir model təqdim edir: **DAD Triadı** — Disclosure, Alteration, Denial. Bu, kibertəhlükəsizliyin üç əsas **təhdidini** təsvir edir və hər biri CIA-nın bir elementinin birbaşa pozulmasına uyğun gəlir.

**Disclosure (İfşa)** — həssas məlumatın icazəsiz şəxslərə açılması, yəni məlumat itkisi. Confidentiality-nin pozulmasıdır. Hücumçular məlumatı sistemdən çıxarıb aparanda, buna **data exfiltration** deyilir. İfşa təsadüfən də baş verə bilər — məsələn, admin giriş nəzarətini səhv konfiqurasiya edəndə və ya işçi cihazını itirəndə.

**Alteration (Dəyişdirmə)** — məlumatın icazəsiz modifikasiyası, Integrity-nin pozulmasıdır. Hücumçular maliyyə qazancı üçün qeydləri dəyişə bilər (məsələn, hesaba saxta əməliyyat əlavə etmək). Alteration təbii səbəbdən də ("bit flip" — gərginlik dalğasının məlumatı korlaması) və ya təsadüfi insan xətasından da (yazı səhvi) baş verə bilər.

**Denial (İnkar/Rədd)** — qanuni istifadəçinin öz məlumatına icazəli çıxışının pozulması, Availability-nin pozulmasıdır. Bu, qəsdli ola bilər (DDoS hücumu) və ya təsadüfi (kritik server nasazlığı, təbii fəlakət).

| CIA elementi | Uyğun DAD təhdidi | Nümunə |
|---|---|---|
| Confidentiality | Disclosure | Verilənlər bazası sızması |
| Integrity | Alteration | Maliyyə qeydinin saxtalaşdırılması |
| Availability | Denial | DDoS hücumu |

**DAD-ın praktiki gücü:** kitab DAD Triadını risk qiymətləndirməsində sürətli başlanğıc nöqtəsi kimi tövsiyə edir. Məsələn, bir təşkilatın veb-saytını qiymətləndirərkən özünüzə üç sual verə bilərsiniz: (1) Sayt icazəsiz ifşa halında zərər verəcək həssas məlumat saxlayırmı? (2) Hücumçu saytdakı məlumatı dəyişdirsə, bu maliyyə/reputasiya/əməliyyat zərəri yaradarmı? (3) Sayt biznes üçün kritik funksiya yerinə yetirirmi ki, onun dayandırılması ciddi zərər versin?

Bunu bir tibbi analoji ilə görək: CIA — həkimin "sağlamlıq hədəfləri"dir (ürək sağlam işləsin, orqanlar zədəsiz olsun, bədən funksional olsun). DAD isə eyni bədənin məruz qala biləcəyi "xəstəlik növləridir" (infeksiya = disclosure, zədə = alteration, iflic = denial) — hər xəstəlik konkret bir sağlamlıq hədəfini hədəfə alır.

**Sual 1**
DAD Triadının üç elementini və hər birinin uyğun gəldiyi CIA elementini yazın.

**Sual 2**
"Data exfiltration" termini DAD-ın hansı elementinə aiddir və nə deməkdir?

**Sual 3**
DAD Triadını istifadə edərək bir veb-saytı qiymətləndirərkən verilə biləcək üç sualı yazın.

## Task 2 — Breach Impact: Beş Risk Kateqoriyası

Bir insident baş verəndə, onun təsirini necə ölçmək olar? Kitab bunu biznesin ümumi risk kateqoriyalarına uyğun beş qrupa bölür: Financial, Reputational, Strategic, Operational, Compliance.

**Financial Risk (Maliyyə Riski)** — insidentin təşkilata birbaşa pul zərəri. Bu, **birbaşa** (datacenter-in fiziki bərpası, kriminalistika xidmətinin ödənişi) və ya **dolayı** (bir işçi məhsul planları olan noutbuku itirir — noutbukun özü bir neçə min manat dəyərindədir, amma rəqib firmalar həmin planlara çatıb bazara daha tez çıxsa, gəlir itkisi qat-qat böyük ola bilər) ola bilər.

**Reputational Risk (Reputasiya Riski)** — mənfi ictimai reaksiya nəticəsində müştəri, işçi, təchizatçı etimadının itirilməsi. Kitab vurğulayır ki, bunu ölçmək çətindir — maraqlı tərəflər "artıq sizinlə iş görməyəcəyik" demirlər, amma qərarları dolayı yolla dəyişə bilər.

**Identity Theft (Şəxsiyyət Oğurluğu)** — bu, ayrıca kateqoriya deyil, amma kitab xüsusi vurğulayır: breach təşkilatın divarlarından kənara — müştərilərə, işçilərə — yayıla bilər. Sosial sığorta nömrələri, bank/kart məlumatları, sürücülük vəsiqəsi, pasport data kimi PII (Personally Identifiable Information) elementləri xüsusi qorunmalıdır, çünki onlar şəxsiyyət oğurluğu üçün ən çox istifadə olunur.

**Strategic Risk (Strateji Risk)** — təşkilatın əsas məqsədlərinə çatmaq qabiliyyətinin azalması. Yuxarıdakı noutbuk nümunəsinə qayıdaq: əgər planların ehtiyat nüsxəsi yoxdursa, məhsulun bazara çıxması gecikə bilər; əgər rəqib bu planlara çatıbsa, rəqib bazara daha tez çıxıb "ilk hərəkət edən" üstünlüyünü ala bilər.

**Operational Risk (Əməliyyat Riski)** — təşkilatın gündəlik funksiyalarını yerinə yetirmə qabiliyyətinə təsir. Strateji riskdən fərqi — kitab bunu təsirin **dərəcəsi** ilə ayırır: əgər risk təşkilatın mövcudluğunu/biznes planını təhdid edirsə, bu strategikdir; yalnız səmərəsizlik/gecikmə yaradırsa, bu əməliyyat riskidir.

**Compliance Risk (Uyğunluq Riski)** — breach təşkilatı hüquqi/tənzimləyici tələblərlə ziddiyyətə salır. Kitab konkret nümunə verir: ABŞ-da HIPAA qanunu səhiyyə təşkilatlarının pasiyent məlumatının (PHI) CIA-sını qorumasını tələb edir; pasiyent qeydləri itirilsə, bu, HIPAA pozuntusudur və Səhiyyə Nazirliyi tərəfindən sanksiya/cərimə ilə nəticələnə bilər.

| Kateqoriya | Əsas sual | Nümunə |
|---|---|---|
| Financial | Nə qədər pul itiririk? | Kriminalistika xərcləri, itirilmiş gəlir |
| Reputational | Etimad necə zədələnir? | Media işıqlandırması, müştəri itkisi |
| Strategic | Əsas məqsədlərə çatmaq çətinləşirmi? | Rəqib məhsul planlarına çatır |
| Operational | Gündəlik iş axını pozulurmu? | Manual iş-axınına keçid, gecikmələr |
| Compliance | Qanun/tənzimləmə pozulurmu? | HIPAA/GDPR sanksiyaları |

**Vacib prinsip — risklər kateqoriyaları kəsir:** Kitab qəti vurğulayır ki, bir riski **yalnız bir** kateqoriyaya sığdırmağa çalışmamalısınız. Real breach-lər adətən bir neçə kateqoriyanı eyni anda kəsir. Məsələn, müştəri PII-sinin sızması: media işıqlandırması reputasiya zərəri yaradır → bu, müştəri itkisi ilə maliyyə zərərinə çevrilir → tənzimləyici cərimə əlavə maliyyə zərəri yaradır (compliance riskindən) → müştərilərə şəxsiyyət qorunma xidməti təklif etmək əlavə birbaşa xərcdir.

**Sual 1**
Beş Breach Impact kateqoriyasını sadalayın.

**Sual 2**
Strategic Risk və Operational Risk arasındakı fərqi necə ayırd etmək olar?

**Sual 3**
Niyə bir riski yalnız bir kateqoriyaya "sıxışdırmaq" səhv yanaşmadır? Nümunə ilə izah edin.

## Yekun Yoxlama (Summary Quiz)

1. DAD Triadının üç elementini və CIA ilə uyğunluğunu yazın.
2. "Data exfiltration" nə deməkdir?
3. Beş Breach Impact kateqoriyasını sadalayın.
4. PII nədir və niyə xüsusi qorunmalıdır?
5. Bir müştəri PII sızması hadisəsində ən azı üç fərqli risk kateqoriyasının necə iştirak edə biləcəyini izah edin.

---
