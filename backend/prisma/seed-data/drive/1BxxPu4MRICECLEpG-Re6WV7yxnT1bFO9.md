# ROOM 4: Azərbaycanda GRC Tənzimləmə Mühiti

**Path:** GRC Fundamentals
**Module:** Compliance & Framework-lər
**Çətinlik:** Medium
**Təxmini vaxt:** 40 dəq

> **Qeyd:** Bu room Azərbaycanın hüquqi/tənzimləmə mühitini əhatə edir — sürətlə dəyişən bir sahədir (2023-2027 Strategiyası, yeni Mərkəzi Bank tələbləri, 2026-cı ildə yaradılan Milli Kibertəhlükəsizlik Agentliyi kimi). Room-un məzmunu 2026-cı ilin ortasına aid məlumata əsaslanır; kursu tədris edərkən qanunvericilikdə yeniləmə olub-olmadığını yoxlamaq tövsiyə olunur.

## Room haqqında

İndiyə qədər ISO 27001, NIST CSF, SOC 2, GDPR kimi beynəlxalq framework-ləri öyrəndiniz (Room 1-3). Amma Azərbaycanda fəaliyyət göstərən bir təşkilat üçün GRC proqramı yalnız beynəlxalq standartlarla məhdudlaşmır — yerli qanunvericiliyə uyğunluq da məcburidir. Bu room-da Azərbaycanın əsas kibertəhlükəsizlik və məlumat qorunması hüquqi çərçivəsini, əsas tənzimləyici orqanları və maliyyə sektoru üçün xüsusi tələbləri öyrənəcəksiniz. Məqsəd — real Azərbaycan təşkilatında compliance proqramı qurarkən "hansı qanuni tələblərə baxmalıyam?" sualına cavab tapa bilməkdir.

## Öyrənmə nəticələri

- Azərbaycanın əsas informasiya təhlükəsizliyi/kibertəhlükəsizlik hüquqi çərçivəsini sadalamaq
- "Fərdi məlumatlar haqqında" Qanunun əsas tələblərini və GDPR ilə oxşar/fərqli tərəflərini izah etmək
- Milli kibertəhlükəsizlik institusional strukturunu (Milli Kibertəhlükəsizlik Agentliyi, CERT.AZ, DTX) tanımaq
- Maliyyə sektoru üçün Mərkəzi Bankın tələblərini digər sektorlardan fərqləndirmək
- Real ssenaridə hansı Azərbaycan qanununun/orqanının aidiyyatlı olduğuna qərar vermək

## Task 1 — Hüquqi Landşaft: Kim Nəyi Tənzimləyir?

Azərbaycanda kibertəhlükəsizlik və məlumat qorunması sahəsi tək bir qanunla deyil, bir neçə qanun və strategiyanın birləşməsi ilə tənzimlənir. Bunu bir "qatlı torta" kimi düşünə bilərsiniz — hər qat fərqli sahəni əhatə edir, amma birlikdə tam mənzərəni yaradır.

| Sənəd/Qurum | Nəyi tənzimləyir | Səviyyə |
|---|---|---|
| **"Fərdi məlumatlar haqqında" Qanun** (2010) | Şəxsi məlumatların toplanması, işlənməsi, mühafizəsi | Qanun |
| **"İnformasiya, informasiyalaşdırma və informasiyanın mühafizəsi haqqında" Qanun** (1998, yenilənib) | Ümumi informasiya təhlükəsizliyi, kibertəhlükəsizlik anlayışları, CERT statusu | Qanun |
| **"Azərbaycan Respublikasının informasiya təhlükəsizliyi və kibertəhlükəsizliyə dair 2023-2027-ci illər üçün Strategiyası"** | Milli səviyyədə strateji istiqamətlər | Strategiya (Prezident Sərəncamı, 2023) |
| **Mərkəzi Bankın tələbləri** | Maliyyə bazarlarında nəzarət olunan subyektlər (banklar və s.) | Sektor-spesifik Qayda |
| **Milli Kibertəhlükəsizlik Agentliyi / CERT.AZ** | Kibertəhlükəsizlik tənzimləməsi, insidentlərin koordinasiyası | İcra orqanı |

Diqqət edin: bu strukturda ümumi qanun (bütün sahələrə aid) və sektor-spesifik tələb (yalnız müəyyən sahəyə aid) bir yerdə mövcuddur — dəqiq GRC Fundamentals-ın Module 2-də öyrəndiyiniz Policy→Standard iyerarxiyasına bənzər məntiq: milli strategiya "niyə" səviyyəsindədir, sektor qaydaları isə "nə" səviyyəsində konkret tələblər qoyur.

Bir mühüm dinamika: bu sahə aktiv inkişafdadır. Məsələn, 2026-cı ilin iyun ayında əvvəlki Elektron Təhlükəsizlik Xidməti əsasında yeni "Milli Kibertəhlükəsizlik Agentliyi" yaradılıb — bu, institusional strukturun hələ də formalaşmaqda olduğunu göstərir. GRC mütəxəssisi üçün bu o deməkdir ki, yerli tənzimləmə sahəsini "bir dəfə öyrənib unutmaq" olmaz — mütəmadi izləmə tələb olunur.

**Sual 1**
Azərbaycanın kibertəhlükəsizlik hüquqi çərçivəsində ümumi qanun ilə sektor-spesifik qaydanın fərqi nədir?

**Sual 2**
Niyə GRC mütəxəssisi Azərbaycan tənzimləmə mühitini "bir dəfəlik" deyil, davamlı izləməlidir?

**Sual 3**
Milli Strategiya (2023-2027) hansı səviyyəyə aiddir — Policy, yoxsa Standard? Nəyə əsaslanaraq?

## Task 2 — Fərdi Məlumatların Qorunması: Yerli Qanun və GDPR Müqayisəsi

"Fərdi məlumatlar haqqında" Qanun 2010-cu ildən qüvvədədir və Azərbaycanda şəxsi məlumatların işlənməsi üçün əsas hüquqi bazadır. Onun bəzi əsas prinsipləri Room 3-də öyrəndiyiniz GDPR-a bənzəyir, amma fərqlər də var — bu fərqləri bilmək beynəlxalq şirkətlə yerli şirkət üçün compliance proqramı qurarkən vacibdir.

**Qanunun əsas struktur elementləri:**

- Fərdi məlumatlar toplandığı andan mühafizə olunur və **konfidensial** və **açıq** kateqoriyalara bölünür
- Fərdi məlumatların **mülkiyyətçisi** (sahib) və **operatoru** (işləyən tərəf) anlayışları müəyyən edilib — bu, GDPR-dakı "data controller" və "data processor" anlayışlarına bənzəyir
- Fərdi məlumatların **informasiya sistemləri** müvafiq dövlət orqanında (hazırda Rəqəmsal İnkişaf və Nəqliyyat Nazirliyi) **dövlət qeydiyyatından keçməlidir** — bu, GDPR-da olmayan, Azərbaycana məxsus əlavə addımdır
- Məlumat subyektinin hüquqları: öz məlumatlarının mövcudluğu barədə bilmək, məzmunu ilə tanış olmaq, düzəliş/silinmə tələb etmək

| Element | Azərbaycan Qanunu | GDPR (müqayisə üçün) |
|---|---|---|
| Əsas kateqoriyalar | Konfidensial / Açıq | Fərdi məlumat / Xüsusi kateqoriya |
| Nəzarətçi anlayışı | Mülkiyyətçi / Operator | Controller / Processor |
| Sistem qeydiyyatı | Mütləq (dövlət qeydiyyatı tələb olunur) | Yoxdur (əvəzinə DPO və qeydiyyat jurnalı) |
| Transsərhəd ötürmə | Ayrıca tənzimlənir | Adequacy qərarı / SCC mexanizmi |
| Cərimə mexanizmi | İnzibati Xətalar Məcəlləsi əsasında | Qlobal dövriyyənin faizi (4%-ə qədər) |

Bu müqayisədən çıxan praktiki nəticə: Azərbaycanda fəaliyyət göstərən, amma Avropa müştəriləri də olan bir şirkət (məsələn, sizin əvvəlki layihələrinizdən — TechNova MMC formatında bir IT şirkəti) **hər iki** çərçivəyə əməl etməli ola bilər — yəni GRC proqramı "ya-ya" deyil, "həm-həm" məntiqi ilə qurulmalıdır.

**Sual 1**
Fərdi Məlumatlar Qanununda "mülkiyyətçi" və "operator" anlayışları GDPR-da hansı terminlərə uyğun gəlir?

**Sual 2**
Azərbaycan qanununda olan, GDPR-da olmayan əlavə tələb nədir?

**Sual 3**
Beynəlxalq müştəriləri olan Azərbaycan şirkəti üçün "həm-həm" məntiqi nə deməkdir və praktiki olaraq nəyə gətirib çıxarır?

## Task 3 — Maliyyə Sektoru: Mərkəzi Bankın Xüsusi Tələbləri

Bütün sektorlar eyni qaydalarla tənzimlənmir — maliyyə sektoru xüsusi diqqət mərkəzindədir, çünki burada həm məlumat həssaslığı, həm sistemik risk (bir bankın kompromisi bütün maliyyə sisteminə təsir edə bilər) yüksəkdir. Bu, Module 1-də öyrəndiyiniz "yüksək təsirli sistemlər daha ciddi nəzarət tələb edir" prinsipinin praktiki tətbiqidir.

Mərkəzi Bankın tənzimləmə yanaşması zaman keçdikcə təkmilləşib:

```
2014 → "Banklarda informasiya sistemlərinin təhlükəsizliyinə dair Qaydalar"
        (ilkin, əsas texniki tələblər)

2021/22 → "Banklarda informasiya təhlükəsizliyinin idarə edilməsi Qaydası"
        (ISO/IEC 2700X standartlarına uyğunlaşdırılmış, daha geniş ISMS yanaşması)

2023-2026 → "Maliyyə bazarları üzrə kibertəhlükəsizlik Strategiyası"
        (5 strateji prioritet, FinCERT yaradılması planı daxil)

2025 → "Maliyyə bazarlarında fəaliyyətinə nəzarət edilən subyektlərdə
        informasiya təhlükəsizliyinin təmin edilməsinə dair Tələblər"
        (əvəzləyici, daha geniş əhatəli sənəd — təkcə banklar yox,
        bütün nəzarət olunan maliyyə subyektləri)
```

Bu təkamül xətti sizə tanış bir şey göstərir: tənzimləyici sənədlər də özləri bir sənəd iyerarxiyası kimi inkişaf edir — hər yeni versiya əvvəlkini ləğv edir və genişləndirir (Module 2-dəki Policy versiyalaşdırma prinsipinə bənzəyir).

**Əsas tələb istiqamətləri** (2025 Tələblər sənədindən, konseptual xülasə):

- ISO/IEC 2700X seriyasına uyğun İnformasiya Təhlükəsizliyinin İdarəetmə Sistemi (ISMS) qurulması
- İnsan resursları təhlükəsizliyi, aktiv idarəetməsi, girişə nəzarət kimi standart domenlər
- Kriptoqrafiya və fiziki/perimetr təhlükəsizliyi tələbləri
- İnsident bildirişi mexanizmi — Mərkəzi Banka müəyyən müddət ərzində hesabat

Diqqətəlayiq məqam: bu tələblər ümumi ISO 27001 struktur elementlərini əks etdirir, amma Mərkəzi Bank tərəfindən **məcburi** edilib (banklar üçün ISO 27001 sertifikatı könüllüdür, amma bu Qaydaya uyğunluq məcburidir). Bu, Room 1-dəki "Standard məcburidir" prinsipinin canlı nümunəsidir — beynəlxalq best-practice yerli tənzimləyici tərəfindən qanuni tələbə çevrilib.

Bundan əlavə, Milli səviyyədə fəaliyyət göstərən **Milli Kibertəhlükəsizlik Agentliyi** (əvvəlki Elektron Təhlükəsizlik Xidməti əsasında 2026-cı ildə yaradılıb) kritik informasiya infrastrukturu (Kİİ) subyektləri üçün əlavə koordinasiya və nəzarət funksiyası daşıyır — bank sektorunun bir hissəsi bu kateqoriyaya da düşə bilər.

**Sual 1**
Mərkəzi Bankın tənzimləmə sənədlərinin təkamül xəttini (2014 → 2025) qısaca təsvir edin.

**Sual 2**
Niyə ISO 27001 banklar üçün "könüllü sertifikat" olmaqdan çıxıb, praktiki olaraq məcburi tələbə çevrilib?

**Sual 3**
Milli Kibertəhlükəsizlik Agentliyi ilə Mərkəzi Bankın tələbləri arasında hansı münasibət ola bilər (üst-üstə düşmə sahəsi)?

## Yekun Yoxlama (Summary Quiz)

1. Azərbaycanın kibertəhlükəsizlik hüquqi çərçivəsinin üç əsas qatını (qanun, strategiya, sektor-qaydası) sadalayın.
2. "Fərdi məlumatlar haqqında" Qanunda sistem qeydiyyatı tələbi GDPR-dan necə fərqlənir?
3. Mərkəzi Bankın 2025-ci il Tələbləri hansı əvvəlki sənədi əvəz edib?
4. Niyə maliyyə sektoru digər sektorlardan daha ciddi tənzimləməyə məruz qalır?
5. Azərbaycanda fəaliyyət göstərən beynəlxalq bir şirkət üçün compliance proqramı qurarkən minimum hansı üç sualı verməlisiniz (bu room-un materialına əsasən)?

---
