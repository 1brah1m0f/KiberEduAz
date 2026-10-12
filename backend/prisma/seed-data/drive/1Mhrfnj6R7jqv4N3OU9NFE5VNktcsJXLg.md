# ROOM 3: Continuous Controls Monitoring (CCM)

**Path:** GRC Fundamentals
**Module:** Bonus / İrəliləyiş Mövzular
**Çətinlik:** Elective
**Təxmini vaxt:** 30 dəq

## Room haqqında

Module 6-da audit prosesini öyrənəndə diqqət etdiniz ki, Room 2-dəki (Module 6) nümunə test yalnız **10 hadisəlik nümunə (sample)** üzərində, **il bir dəfə** aparılırdı. Bu, ənənəvi audit-in təbiətidir — "point-in-time" (müəyyən vaxt nöqtəsində) bir görüntü çəkir. Amma bir sual yaranır: əgər problem may ayında yaranıb, oktyabrda düzəlibsə, illik audit (dekabrda aparılan) bunu heç görməyə bilər. Bu boşluğu aradan qaldıran yanaşma **Continuous Controls Monitoring (CCM)**-dir.

Bu room-da CCM-in nə olduğunu, ənənəvi audit-dən necə fərqləndiyini və TechNova-nın hansı nəzarətləri CCM-ə uyğun namizəd olduğunu öyrənəcəksiniz.

## Öyrənmə nəticələri

- CCM-in ənənəvi (point-in-time) audit-dən fərqini izah edə bilmək
- CCM-in necə işlədiyini (məlumat mənbələri, exception-based yanaşma) təsvir edə bilmək
- Hansı nəzarətlərin CCM-ə uyğun, hansılarının uyğun olmadığını müəyyən edə bilmək
- Real ssenaridə CCM tətbiqi üçün namizəd nəzarətləri seçə bilmək

## Task 1 — Point-in-Time Audit vs Continuous Monitoring

Ənənəvi audit modelini bir metafora ilə düşünək: bu, ilin müəyyən günündə çəkilən bir **fotoşəkil**dir — o an üçün doğrudur, amma şəkil çəkiləndən sonra baş verənləri göstərmir. CCM isə **canlı video** kimidir — davamlı olaraq izləyir və dəyişiklikləri real-vaxta yaxın aşkar edir.

```
ƏNƏNƏVİ AUDIT (Point-in-Time)          CCM (Continuous)
──────────────────────────             ──────────────────
Tezlik: İllik/rüblük                   Tezlik: Davamlı (gündəlik/
                                         real-vaxta yaxın)

Metod: Manual sample testi             Metod: Avtomatlaşdırılmış,
(Module 6, Room 2-dəki                  bütün populyasiyanı
10 hadisəlik nümunə kimi)               əhatə edən yoxlama

Aşkarlama: Problem baş verəndən        Aşkarlama: Problem baş
aylar sonra tapıla bilər                verdikdən qısa müddət
                                         sonra bildiriş gəlir

Əhatə: Nümunə (məs. 10/hamısı)         Əhatə: 100% (bütün
                                         tranzaksiyalar/hadisələr)

Resurs: Auditor-un vaxtı ilə           Resurs: İlkin qurulum
məhdud                                  bahalı, sonra aşağı
                                         əməliyyat xərci
```

**Vacib məntiq:** CCM audit-i **əvəz etmir**, ona **əlavə edir**. Audit hələ də strateji baxış, risk qiymətləndirməsi və müstəqil təsdiqləmə (assurance) verir; CCM isə gündəlik "gözətçi" rolunu oynayır. Yaxşı GRC proqramında hər ikisi birlikdə işləyir: CCM problemi tez tapır, audit isə bu problemin kök səbəbini, sistemin ümumi effektivliyini daha dərindən araşdırır.

**Sual 1**
Point-in-time audit ilə CCM arasındakı fərqi "fotoşəkil vs canlı video" metaforası ilə izah edin.

**Sual 2**
CCM audit-i tamamilə əvəz edirmi? Niyə?

**Sual 3**
CCM-in ilkin qurulumu niyə "bahalı", sonrakı istifadəsi isə niyə "aşağı xərcli" hesab olunur?

## Task 2 — CCM Necə İşləyir?

CCM-in işləmə məntiqi üç addımdan ibarətdir:

```
1. MƏLUMAT MƏNBƏYİNƏ QOŞULMA
   Sistem (məs. Active Directory, maliyyə sistemi, log
   platforması) ilə avtomatik inteqrasiya qurulur

2. QAYDA/HƏDD MÜƏYYƏNLƏŞDİRMƏ
   "Normal" vəziyyət təyin edilir (məs. "hesab bağlanması
   4 saat ərzində olmalıdır") — bu, Room 1-dəki (Module 6)
   Criteria konseptinin avtomatlaşdırılmış formasıdır

3. EXCEPTION-BASED BİLDİRİŞ
   Sistem yalnız QAYDANI POZAN hallar (exceptions) barədə
   bildiriş göndərir — auditor min hadisəni əl ilə yoxlamır,
   yalnız sistemin işarələdiyi anomaliyalara baxır
```

**"Exception-based" yanaşmanın gücü:** Ənənəvi auditda auditor 1000 hadisədən 10-nu (1%) təsadüfi seçib yoxlayır. CCM-də isə sistem bütün 1000 hadisəni avtomatik yoxlayır, amma auditor-un diqqətinə yalnız **qaydanı pozan** hadisələri (məsələn, 12-sini) çıxarır. Bu, həm əhatəni 1%-dən 100%-ə çıxarır, həm də auditor-un vaxtını daha səmərəli istifadə edir — çünki insan diqqəti yalnız real problemlərə yönəlir.

**CCM-ə uyğun (yaxşı namizəd) nəzarətlərin xüsusiyyətləri:**

```
✓ Yüksək tezlikli, təkrarlanan proses (məs. gündəlik yüzlərlə
  tranzaksiya)
✓ Rəqəmsal sistemdə baş verir (log/məlumat mövcuddur)
✓ Aydın, ölçülə bilən qayda var (məs. "4 saat ərzində",
  "iki səviyyəli təsdiq")
✓ Yüksək risk daşıyır (uyğunsuzluğun tez aşkarlanması vacibdir)
```

**CCM-ə uyğun OLMAYAN nəzarətlərin xüsusiyyətləri:**

```
✗ Subyektiv qiymətləndirmə tələb edir (məs. "işçinin davranışı
  peşəkardırmı?")
✗ Nadir hallarda baş verir (məs. ildə 1-2 dəfə olan strateji
  qərar)
✗ Rəqəmsal iz buraxmır (məs. şifahi razılaşma, fiziki müşahidə)
✗ Aydın ədədi hədd yoxdur (məs. "təhlükəsizlik mədəniyyəti
  güclüdürmü?")
```

**Sual 1**
CCM-in üç addımlı işləmə məntiqini sadalayın.

**Sual 2**
"Exception-based" yanaşma niyə auditor-un vaxtını daha səmərəli istifadə etməyə kömək edir?

**Sual 3**
CCM-ə uyğun olmayan bir nəzarət nümunəsi verin və niyə uyğun olmadığını izah edin.

## Task 3 — Praktiki Tapşırıq: TechNova üçün CCM Namizədlərini Seçin

TechNova MMC-nin daxili audit komandası CCM proqramını işə salmaq istəyir, amma büdcə məhdud olduğu üçün əvvəlcə yalnız 2 nəzarəti CCM-ə keçirə bilər. Aşağıda 5 namizəd nəzarət verilib.

```
Namizəd A: İstifadəçi Giriş İdarəetməsi
(Module 6-dan tanış — HR bildirişindən sonra 4 saat ərzində
hesab bağlanması)
- Aylıq ~15-20 işdən çıxma hadisəsi
- Active Directory log-larında tam iz var

Namizəd B: Board İclaslarının Keyfiyyəti
- İldə 4 dəfə Board iclası keçirilir
- Qiymətləndirmə meyarı: "müzakirələr strateji səviyyədə
  keyfiyyətlidirmi?"

Namizəd C: Kritik Patch-lərin Vaxtında Quraşdırılması
(Module 6, Room 3-dəki patch management nümunəsindən tanış)
- Gündə onlarla server, patch sistemi loglar saxlayır
- Aydın qayda: 14 gün ərzində quraşdırılmalı

Namizəd D: Podratçılarla Müqavilə Danışıqları Prosesi
- İldə 3-4 yeni podratçı müqaviləsi
- Hər müqavilə fərqli, hüquqi komanda tərəfindən fərdi
  qiymətləndirilir

Namizəd E: Maliyyə Tranzaksiyalarında İki Səviyyəli Təsdiq
- Gündə yüzlərlə ödəniş tranzaksiyası
- Aydın qayda: $10,000-dan yuxarı hər tranzaksiya 2 fərqli
  şəxs tərəfindən təsdiqlənməlidir, sistemdə iz saxlanılır
```

**Sizin tapşırığınız:**

**Addım 1** — Hər namizədi Task 2-dəki dörd meyara (tezlik, rəqəmsal iz, aydın qayda, risk səviyyəsi) görə qiymətləndirin

**Addım 2** — Ən uyğun 2 namizədi seçin

**Addım 3** — Seçilməyən namizədlər üçün alternativ yanaşma təklif edin (məsələn, ənənəvi illik audit davam etməlidir)

**Kömək üçün nümunə həll (Namizəd B üzrə):**

```
NAMİZƏD B: Board İclaslarının Keyfiyyəti

Qiymətləndirmə:
✗ Tezlik: Aşağı (ildə cəmi 4 dəfə) — CCM-in gücü yüksək
  tezlikli proseslərdə göstərilir, burada əlavə dəyər azdır
✗ Rəqəmsal iz: Məhdud — iclas protokolları var, amma
  "keyfiyyət" özü rəqəmsal ölçülə bilməz
✗ Aydın qayda: Yoxdur — "strateji səviyyədə keyfiyyətli
  müzakirə" subyektiv qiymətləndirmədir, ədədi hədd təyin
  etmək mümkün deyil
△ Risk səviyyəsi: Yüksək (strateji qərarların keyfiyyəti
  vacibdir), amma bu, CCM-in həll edə biləcəyi risk növü
  deyil

NƏTİCƏ: CCM-ə UYĞUN DEYİL. Bu, ənənəvi keyfiyyətli
qiymətləndirmə (məsələn, Board effektivliyi sorğusu, xarici
governance konsultantının rəyi) tələb edən sahədir —
avtomatlaşdırıla bilməz.
```

**Öz-özünə keyfiyyət yoxlaması (Checklist):**

```
☐ Hər 5 namizəd 4 meyara görə ayrı-ayrı qiymətləndirilib
☐ Seçilən 2 namizəd üçün bütün/əksər meyarlar müsbətdir
☐ Seçilməyən namizədlər üçün konkret səbəb göstərilib (hansı
  meyar uyğun gəlmir)
☐ Seçilməyənlər üçün real alternativ təklif edilib (sadəcə
  "audit edilməsin" deyil)
```

**Sual 1**
Namizəd A və E niyə ən güclü CCM namizədləridir? Ortaq xüsusiyyətlərini müqayisə edin.

**Sual 2**
Namizəd D (podratçı müqavilələri) niyə CCM-ə uyğun deyil, amma yenə də vacib bir nəzarətdir?

**Sual 3**
Əgər TechNova gələcəkdə büdcəni artırıb 3-cü namizədi əlavə etmək istəsə, Namizəd C ilə hansı digər namizəd arasında seçim etməli və niyə?

## Yekun Yoxlama (Summary Quiz)

1. Point-in-time audit ilə CCM arasındakı əsas fərqi izah edin.
2. CCM-in üç addımlı işləmə məntiqini sadalayın.
3. "Exception-based" yanaşma nə deməkdir?
4. CCM-ə uyğun nəzarətin dörd xüsusiyyətini sadalayın.
5. TechNova ssenarisində hansı iki namizəd seçildi və niyə?

---
