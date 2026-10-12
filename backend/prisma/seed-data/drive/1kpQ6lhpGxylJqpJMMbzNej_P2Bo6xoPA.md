# ROOM 3: Security Policy Yazmaq (Case Study)

**Path:** GRC Fundamentals
**Module:** Governance & Policy
**Çətinlik:** Medium
**Təxmini vaxt:** 60 dəq (praktiki — sənəd hazırlama)

## Room haqqında

Room 1 və Room 2-də sənəd iyerarxiyasını və governance strukturunu nəzəri şəkildə öyrəndik. İndi vaxtı gəldi ki, nəzəriyyəni əməli tətbiq edək: **əvvəldən sona qədər real bir Security Policy sənədi yazmaq**. Bu, GRC sahəsində işləyən mütəxəssislərin ən çox rastlaşdığı praktiki tapşırıqlardan biridir — istər yeni bir sahə üçün ilk dəfə policy yazasınız, istərsə köhnə bir sənədi yeniləyəsiniz.

Bu room-da siz **TechNova MMC** adlı fərz edilən bir şirkət üçün işləyəcəksiniz — bu ssenari sonrakı modullarda da istifadə olunacaq, ona görə şirkəti yaxşı tanımaq faydalı olacaq.

**TechNova MMC haqqında:** Orta ölçülü fintech şirkətidir (≈250 işçi), onlayn ödəniş həlləri təqdim edir, müştəri məlumatları (maliyyə və şəxsi) saxlayır, həm ofisdən, həm uzaqdan işləyən komandaya malikdir və maliyyə sektoru tənzimləyicilərinə hesabat verməli olur.

## Öyrənmə nəticələri

- Bir Security Policy sənədinin standart strukturunu (komponentlərini) tanımaq
- Yaxşı yazılmış policy ilə zəif yazılmış policy arasındakı fərqi ayırd edə bilmək
- Real ssenari əsasında tam funksional bir Acceptable Use Policy (AUP) yazmaq
- Yazılmış policy-ni keyfiyyət meyarlarına görə özü-özünü qiymətləndirə bilmək

## Task 1 — Policy Sənədinin Standart Komponentləri

Yaxşı yazılmış hər Security Policy sənədi, mövzusundan asılı olmayaraq, təxminən eyni struktur skeletinə malikdir. Bu struktur təsadüfi deyil — hər komponent müəyyən bir suala cavab verir və onun olmaması sənədi icra edilə bilməz edir.

```
┌──────────────────────────────────────────────────────────┐
│ 1. PURPOSE (Məqsəd)                                       │
│    Bu policy niyə mövcuddur? Hansı riski azaldır?         │
├──────────────────────────────────────────────────────────┤
│ 2. SCOPE (Əhatə dairəsi)                                   │
│    Kimə/nəyə aiddir? Kimə aid deyil?                       │
├──────────────────────────────────────────────────────────┤
│ 3. POLICY STATEMENT (Əsas öhdəlik/qaydalar)                │
│    Konkret olaraq nə tələb olunur/qadağandır?              │
├──────────────────────────────────────────────────────────┤
│ 4. ROLES & RESPONSIBILITIES (Rollar və məsuliyyətlər)      │
│    Kim nəyə cavabdehdir?                                   │
├──────────────────────────────────────────────────────────┤
│ 5. COMPLIANCE & ENFORCEMENT (Uyğunluq və icra)              │
│    Əməl edilməzsə nə baş verir?                             │
├──────────────────────────────────────────────────────────┤
│ 6. EXCEPTIONS (İstisnalar)                                  │
│    Qaydadan kənara çıxmaq mümkündürmü, necə?                │
├──────────────────────────────────────────────────────────┤
│ 7. REVIEW & OWNERSHIP (Nəzərdən keçirmə və sahiblik)        │
│    Sənəd kimə məxsusdur, nə vaxt yenilənir?                 │
└──────────────────────────────────────────────────────────┘
```

Hər komponenti ətraflı görək:

**1. Purpose** — Bir-iki cümlə ilə niyə bu sənədin mövcud olduğunu izah edir. Yaxşı Purpose bölməsi konkret riskə istinad edir ("icazəsiz giriş riskini azaltmaq üçün"), ümumi ifadələrdən ("təhlükəsizliyi təmin etmək üçün") qaçır.

**2. Scope** — Kimlər (bütün işçilər? podratçılar? yalnız İT?), hansı sistemlər (bütün sistemlər? yalnız istehsal mühiti?) əhatə olunur. Scope-un aydın olmaması ən çox rast gəlinən policy zəifliyidir — "kim aid deyil" sualı çox vaxt unudulur.

**3. Policy Statement** — Sənədin "ürəyi"dir. Burada konkret tələblər, qadağalar və gözləntilər yazılır. Diqqət: Room 1-də öyrəndiyimiz kimi, burada həddindən artıq texniki detala (məsələn, "parol 12 simvol olmalıdır") getmək əvəzinə, mücərrəd səviyyədə qalıb detalı Standard sənədinə yönləndirmək daha düzgündür.

**4. Roles & Responsibilities** — "Kim nəyə cavabdehdir?" sualını cavablandırır. Məsələn: "İşçilər... etməlidir", "Menecerlər... təmin etməlidir", "İT departamenti... həyata keçirməlidir". Bu bölmə olmadan policy icra oluna bilməz, çünki heç kim öz vəzifəsini bilmir.

**5. Compliance & Enforcement** — Əməl edilməməsinin nəticələrini bildirir (xəbərdarlıq, intizam tədbiri, iş münasibətlərinin xitamı). Bu bölmə policy-ni "tövsiyə"dən "məcburi qayda"ya çevirir.

**6. Exceptions** — Real həyatda hər qaydaya 100% əməl etmək mümkün olmaya bilər (məsələn, xüsusi bir layihə üçün müvəqqəti istisna lazım ola bilər). Yaxşı policy bunu əvvəlcədən nəzərdə tutur və istisna prosesini (kim təsdiqləyir, necə sənədləşdirilir) müəyyən edir — əks halda insanlar sadəcə qaydanı gizli şəkildə pozurlar.

**7. Review & Ownership** — Sənədin "sahibi" kimdir (adətən CISO və ya müəyyən rol) və nə tezlikdə (illik, 2 illik) nəzərdən keçiriləcək. Sahibsiz və tarixsiz policy-lər köhnəlir və istifadədən düşür.

**Ümumi səhvlər:**

| Səhv | Niyə problemlidir |
|---|---|
| Scope-u dəqiq göstərməmək | Kimin əməl etməli olduğu bəlli olmur |
| Purpose-u ümumi yazmaq | Sənəd "niyə" sualını cavablandırmır, işçilər ciddiyə almır |
| Texniki detalı Policy-yə salmaq | Kiçik dəyişiklik üçün Board təsdiqi tələb olunur (bax Room 1) |
| Enforcement bölməsini buraxmaq | Sənəd faktiki "tövsiyə" səviyyəsinə düşür, məcburi olmur |
| Owner/Review tarixini yazmamaq | Sənəd köhnəlir, heç kim yeniləməyə cavabdeh olmur |

**Sual 1**
Yeddi standart komponenti sadalayın və hər birinin cavab verdiyi sualı yazın.

**Sual 2**
"Exceptions" bölməsi niyə vacibdir? Bu bölmə olmasa nə baş verə bilər?

**Sual 3**
Ən çox rast gəlinən policy zəifliklərindən üçünü seçib izah edin.

## Task 2 — Nümunə Policy-ni Tənqidi Təhlil Etmək

Aşağıda TechNova MMC-nin köhnə, zəif yazılmış bir "Remote Work Security Policy" parçası verilib. Bunu Task 1-dəki komponentlərlə müqayisə edərək zəifliklərini tapın.

```
REMOTE WORK SECURITY POLICY (KÖHNƏ VERSİYA)

İşçilər evdən işləyərkən təhlükəsizliyə diqqət etməlidirlər.
Şirkət kompüterlərindən düzgün istifadə olunmalıdır. Açıq
Wi-Fi-dan istifadə etmək məsləhət deyil. Əməl edilməzsə,
müvafiq tədbirlər görülə bilər. Bu sənəd İT departamenti
tərəfindən hazırlanıb.
```

Bu parçanı təhlil etsək:

- **Purpose yoxdur** — sənəd niyə mövcuddur, hansı riski azaldır, deyilmir.
- **Scope qeyri-müəyyəndir** — "işçilər" kimlərdir? Yalnız tam ştat, yoxsa podratçılar da? Hansı sistemlərə aiddir?
- **Policy Statement çox mücərrəddir** — "diqqətli olmalıdırlar", "düzgün istifadə olunmalıdır" kimi ifadələr ölçülə bilən deyil, heç bir konkret tələb yoxdur.
- **"Məsləhət deyil" ifadəsi** — bu, Guideline dilidir (Room 1-i xatırlayın), Policy-də məcburi dil ("qadağandır", "tələb olunur") istifadə olunmalıdır.
- **Roles & Responsibilities yoxdur** — kim nəyə cavabdehdir, deyilmir.
- **Enforcement qeyri-müəyyəndir** — "müvafiq tədbirlər" nə deməkdir? Konkret olmalıdır.
- **Owner/Review tarixi yoxdur** — sənədin nə vaxt yeniləndiyi, kim tərəfindən sahiblənildiyi bəlli deyil (yalnız "İT departamenti hazırlayıb" yazılıb, bu, sahiblik deyil, müəlliflikdir).

Bu, real təşkilatlarda çox rast gəlinən bir problemdir: sənəd "yazılıb", amma icra edilə bilməz, çünki heç bir konkret öhdəlik və ya ölçü yoxdur. Auditor bu cür sənədi görəndə "policy mövcuddur, amma effektiv deyil" nəticəsinə gəlir.

**Sual 1**
Yuxarıdakı köhnə policy-də Task 1-dəki yeddi komponentdən hansıları tamamilə yoxdur?

**Sual 2**
"Məsləhət deyil" ifadəsi niyə Policy dilinə uyğun deyil? Bunun əvəzinə hansı dil istifadə olunmalıdır?

**Sual 3**
Auditor belə bir sənədi görəndə niyə "mövcuddur, amma effektiv deyil" nəticəsinə gəlir?

## Task 3 — Praktiki Tapşırıq: Acceptable Use Policy (AUP) Yazın

İndi TechNova MMC üçün **tam funksional bir Acceptable Use Policy (Qəbul Edilə Bilən İstifadə Siyasəti)** yazacaqsınız. Bu sənəd işçilərin şirkət IT resurslarından (kompüter, e-poçt, internet, daxili sistemlər) necə istifadə edə biləcəyini tənzimləyir.

**Ssenari təfərrüatları:**

```
- TechNova MMC-də 250 işçi var, həm ofisdən, həm uzaqdan işləyirlər
- İşçilərə şirkət noutbuku, e-poçt hesabı və daxili sistemlərə
  giriş verilir
- Şirkət maliyyə sektoru tənzimləyicisinə hesabat verməlidir
  (bu, sənədin "niyə" sualına cavab ola bilər)
- Keçmişdə bir insident olub: işçi şəxsi USB-dən naməlum fayl
  şirkət kompüterinə köçürüb, bu, kiçik bir zərərli proqram
  yoluxmasına səbəb olub
```

**Addım 1 — Purpose yazın** (bu sənəd niyə mövcuddur, hansı riski azaldır?)

**Addım 2 — Scope təyin edin** (kimə aiddir, kimə aid deyil?)

**Addım 3 — Policy Statement yazın** (minimum 4 konkret qayda/tələb — icazə verilən və qadağan olunan fəaliyyətlər daxil olmaqla)

**Addım 4 — Roles & Responsibilities yazın** (ən azı 2 rol: işçilər və İT/Təhlükəsizlik departamenti üçün)

**Addım 5 — Compliance & Enforcement yazın** (əməl edilməzsə nə baş verəcək?)

**Addım 6 — Exceptions bölməsini yazın** (istisna necə tələb oluna bilər?)

**Addım 7 — Review & Ownership yazın** (sənədin sahibi kim, nə vaxt yenilənəcək?)

**Kömək üçün nümunə həll (yalnız Purpose və Scope bölmələri üzrə):**

```
1. PURPOSE

Bu Siyasət TechNova MMC-nin İT resurslarının (kompüterlər,
e-poçt, daxili sistemlər, internet girişi) məsuliyyətli və
təhlükəsiz şəkildə istifadə olunmasını təmin etmək üçün
hazırlanmışdır. Məqsəd, icazəsiz giriş, zərərli proqram
yoluxması və məlumat sızması risklərini azaltmaq, eyni zamanda
şirkətin maliyyə tənzimləyicisi qarşısındakı uyğunluq
öhdəliklərini yerinə yetirməkdir.

2. SCOPE

Bu Siyasət aşağıdakılara aiddir:
- Bütün tam ştat və yarım ştat işçilər
- Podratçılar və müvəqqəti işçilər (şirkət sistemlərinə giriş
  imkanı olduğu müddətcə)
- Şirkətə məxsus bütün noutbuk, masaüstü kompüter, mobil
  cihazlar və daxili sistemlər

Bu Siyasət aşağıdakılara aid DEYİL:
- İşçilərin tamamilə şəxsi cihazları (əgər onlar şirkət
  sistemlərinə qoşulmursa)
- Müştərilər və üçüncü tərəf tərəfdaşlar (onlar üçün ayrıca
  müqavilə şərtləri tətbiq olunur)
```

**Öz-özünə keyfiyyət yoxlaması (Checklist):**

```
☐ Purpose konkret riskə istinad edir (ümumi ifadə deyil)
☐ Scope həm "kimə aiddir", həm "kimə aid deyil" hissəsini əhatə edir
☐ Policy Statement-də minimum 4 konkret qayda var (mücərrəd
  ifadələr deyil)
☐ Ən azı bir qayda ssenaridəki USB insidentinə istinad edir
  və ya onu önləyəcək xarakterdədir
☐ Roles & Responsibilities-də ən azı 2 fərqli rol var
☐ Enforcement bölməsi konkretdir ("müvafiq tədbirlər" kimi
  qeyri-müəyyən ifadə YOXDUR)
☐ Exceptions bölməsi kim təsdiqləyəcəyini göstərir
☐ Review & Ownership bölməsində sahib rolu və konkret müddət
  (məs. "illik") var
☐ Sənəddə "tövsiyə olunur" kimi Guideline dili YOXDUR — məcburi
  dil istifadə olunub ("tələb olunur", "qadağandır")
```

**Sual 1**
Yazdığınız Policy Statement-də USB/zərərli proqram insidentini önləyəcək hansı konkret qaydanı daxil etdiniz?

**Sual 2**
Roles & Responsibilities bölmənizdə işçi ilə İT departamentinin məsuliyyəti arasındakı fərq nədir?

**Sual 3**
Yazdığınız sənədi Task 2-dəki "köhnə versiya" ilə müqayisə edin — hansı 2 konkret fərq sənədinizi daha icra edilə bilən edir?

## Yekun Yoxlama (Summary Quiz)

1. Bir Security Policy sənədinin yeddi standart komponentini sadalayın.
2. "Purpose" bölməsinin yaxşı yazılması üçün nəyə diqqət edilməlidir?
3. Niyə Policy Statement-də çox texniki detala getmək tövsiyə olunmur?
4. Exceptions bölməsi olmayan policy-nin real həyatda hansı riski var?
5. Auditor bir policy sənədini "effektiv deyil" adlandıranda, adətən hansı komponentlərin çatışmazlığından danışır?

---
