# ROOM 3 (Faza 3): Audit Hesabatı & Təqdimat

**Path:** GRC Fundamentals
**Module:** Capstone
**Çətinlik:** Hard
**Təxmini vaxt:** 60 dəq (praktiki — audit hesabatı və təqdimat)

## Room haqqında

Bu, Capstone-un son fazasıdır və fərqli bir perspektiv tələb edir: indiyə qədər siz TechNova-nın GRC komandası kimi işlədiniz (sənədləşdirdiniz, analiz etdiniz, plan qurdunuz). İndi Module 6-dan öyrəndiyiniz auditor "papağını" taxın — Faza 1 və Faza 2-də **özünüzün yazdığı** materialı tənqidi gözlə nəzərdən keçirəcək, control testing aparacaq və formal audit hesabatı hazırlayacaqsınız. Bu, real GRC dövriyyəsinin (sənədləşdir → tətbiq et → yoxla) son həlqəsidir və path-in ən çətin, ən inteqrativ tapşırığıdır.

## Öyrənmə nəticələri

- Öz əvvəlki işini obyektiv, auditor məntiqi ilə yenidən qiymətləndirmək
- Module 6-dakı Control Testing metodologiyasını Faza 1-2-nin konkret nəticələrinə tətbiq etmək
- Formal Audit Hesabatı şablonunu tam doldurmaq
- Tapıntıları rəhbərliyə (CEO-ya) təqdim ediləcək formatda ifadə etmək

## Addım 1 — Rol Dəyişikliyi: Auditor Perspektivi

Əvvəl bir sual: niyə eyni şəxs (siz) həm sənədi yazıb, həm onu audit edə bilər? Real təcrübədə bu, "independence" (müstəqillik) prinsipini pozur — Module 6, Room 1-də öyrəndiyiniz Daxili Audit Prosesindən xatırlayın ki, auditor icraçıdan müstəqil olmalıdır. Bu Capstone tapşırığında biz bunu bilərək pozuruq, çünki məqsəd öyrənmədir — amma məşq zamanı özünüzə "kənar auditor kimi, güman kimi indi bu şirkəti ilk dəfə görürəm" sualını verməyiniz tövsiyə olunur. Bu zehni məsafə, real auditlərdə niyə müstəqillik tələb olunduğunu daha dərindən hiss etdirəcək.

**Auditor kimi ilk addımınız:** Faza 1-dəki Policy və Risk Register-i, Faza 2-dəki Gap Analysis və Treatment Planını yenidən açın və hər birini bu sualla oxuyun: *"Bu sənəd sübut (evidence) kimi məni qane edirmi, yoxsa boşluqlar var?"*

## Addım 2 — Control Testing Aparın

Module 6, Room 2-dən xatırlayın: Control Testing, bir nəzarətin (control) həqiqətən deyildiyi kimi işləyib-işləmədiyini yoxlamaqdır — "sənəddə yazılıb" ilə "praktikada tətbiq olunur" arasındakı fərqi üzə çıxarmaq.

Faza 1-2-dəki materiala 3 control test tətbiq edin:

**Test 1 — Policy Enforcement Testi**
```
Nəzarət iddiası: "Bütün korporativ noutbuklar tam disk
şifrələməsi ilə konfiqurasiya olunmalıdır" (Faza 1 Policy-dən)

Test sualı: Bu tələbin YOXLANILMASI üçün hansı sübut lazımdır?
(Məsələn: IT şöbəsindən şifrələmə statusu hesabatı,
nümunə cihazların fiziki yoxlanması)

Sizin nəticəniz: Ssenaridə belə bir yoxlama mexanizmi
YOXDUR — Policy yazılıb, amma icrasını təsdiqləyən sübut
prosesi (kim, nə vaxt yoxlayır) müəyyən edilməyib.

Tapıntı statusu: BOŞLUQ (Policy mövcuddur, amma nəzarət
sübutu yoxdur)
```

**Test 2 — Risk Register Aktuallığı Testi**
```
Nəzarət iddiası: Risk Register TechNova-nın real risklərini
əks etdirir (Faza 1-dən)

Test sualı: Risk Register nə tezlikdə yenilənir? Kim
məsuliyyət daşıyır (RACI-dən)?

Sizin nəticəniz: [Faza 1-dəki öz işinizi yoxlayın —
RACI-də bu funksiya təyin edilibmi?]

Tapıntı statusu: [özünüz müəyyən edin]
```

**Test 3 — Sizin Seçiminiz**
Faza 2-dəki Treatment Planından bir fəaliyyət seçin (məsələn, "İnsident Cavab Prosedürü yazılacaq") və eyni məntiqlə test edin: bu, tamamlanıbmı, yoxsa hələ "planlaşdırılıb" mərhələsindədirmi? Planlaşdırılmış, amma icra edilməmiş fəaliyyət avtomatik olaraq açıq tapıntı sayılır.

## Addım 3 — Formal Audit Hesabatı Yazın

Module 6, Room 3-dəki şablonu istifadə edərək tam audit hesabatı hazırlayın.

**Audit Hesabatı Skeleti:**

```
1. İCMAL (Executive Summary)
   - 3-4 cümlədə ümumi nəticə: TechNova-nın GRC yetkinliyi
     hansı səviyyədədir?

2. AUDİTİN ƏHATƏ DAİRƏSİ VƏ METODOLOGİYA
   - Nə yoxlanıldı (Policy, Risk Register, Gap Analysis,
     Treatment Planı)
   - Necə yoxlanıldı (sənəd baxışı + 3 control testi)

3. TAPINTILAR (Findings)
   Hər tapıntı üçün:
   - Təsvir
   - Ciddiyyət (Kritik/Yüksək/Orta/Aşağı)
   - Sübut
   - Tövsiyə

4. ÜMUMİ RİSK MÜLAHİZƏSİ
   - Ən böyük açıq risk nədir və niyə

5. TÖVSİYƏ OLUNAN NÖVBƏTİ ADDIMLAR
   - Prioritetləşdirilmiş, vaxt çərçivəli siyahı
```

**Minimum tələblər:**
- İcmal bölməsi TechNova-nın Avropa müştərisi kontekstinə istinad etməlidir (auditin biznes əhəmiyyətini göstərmək üçün)
- Ən azı 3 tapıntı (Addım 2-dəki 3 testdən) daxil edilməli, hər biri ciddiyyət səviyyəsi ilə
- Tapıntılar arasında ən azı biri "Kritik" və ya "Yüksək" olmalıdır, əsaslandırılmalıdır

**Kömək — nümunə tapıntı yazısı:**

```
TAPINTI #1
Təsvir: Information Security Policy-də tam disk şifrələməsi
tələb olunur, amma bu tələbin icrasını yoxlayan formal proses
mövcud deyil.
Ciddiyyət: Yüksək
Sübut: Faza 1 Policy sənədinə istinad; icra sübutu tələb
olunan sənəd/jurnal mövcud deyil.
Tövsiyə: IT şöbəsi rüblük olaraq bütün korporativ cihazların
şifrələmə statusunu yoxlamalı və nəticəni sənədləşdirməlidir.
Bu, əvvəlki noutbuk oğurluğu insidentinin təkrarlanma riskini
birbaşa azaldır.
```

## Addım 4 — Rəhbərliyə Təqdimat Üçün Qısa Format

Auditor işinin son addımı CEO-ya (ya da Board-a) 5 dəqiqəlik şifahi təqdimat üçün hazırlıqdır. Module 2, Room 2-dən xatırlayın: CISO-nun (və ya auditorun) əsas bacarığı texniki tapıntını biznes dilinə tərcümə etməkdir.

Öz audit hesabatınızdan **3 cümləlik** bir "lift pitch" yazın — CEO-nun 3 cümlədən çox dinləmə səbri olmadığını fərz edin:

```
Nümunə struktur:
Cümlə 1: Ümumi vəziyyət (neçə tapıntı, ən böyük risk nə idi)
Cümlə 2: Biznes təsiri (Avropa müştərisi kontekstində nə deməkdir)
Cümlə 3: Tövsiyə olunan ilk addım (prioritet #1)
```

## Öz-özünə Qiymətləndirmə Rubriki (Bütün Capstone üçün)

| Meyar | Zəif (1) | Qənaətbəxş (2) | Güclü (3) |
|---|---|---|---|
| **Control Testing** | Yalnız sənəd oxunub, test aparılmayıb | Testlər aparılıb, amma sübut anlayışı zəifdir | "Sənəddə yazılıb" ilə "sübut var" fərqi aydın göstərilib |
| **Tapıntıların keyfiyyəti** | Ümumi, ciddiyyətsiz | Ciddiyyət var, əsaslandırma zəifdir | Hər tapıntı konkret sübuda və ciddiyyət səviyyəsinə bağlıdır |
| **Biznes dilinə tərcümə** | Yalnız texniki dil | Qismən biznes konteksti var | CEO/Board səviyyəsində başa düşülən, Avropa müştərisi kontekstinə bağlı |
| **Uçdan-uca əlaqə** | Fazalar bir-birindən təcrid olunub | Qismən istinad edilib | Faza 1→2→3 aydın, izlənilə bilən zəncir təşkil edir |

## Yekun Yoxlama (Bütün Capstone-u əhatə edir)

1. Sizin ən "Kritik" və ya "Yüksək" ciddiyyətli tapıntınız nə idi və hansı sübuda əsaslanırdı?
2. "Sənəddə yazılıb" ilə "praktikada sübut var" arasındakı fərqi öz Test 1 nəticənizlə izah edin.
3. 3 cümləlik CEO təqdimatınızı yazın (Addım 4-dən).
4. Bütün Capstone boyu (Faza 1→2→3) ən çox nəyi çətin tapdınız — sənədləşmə, analiz, yoxsa audit mərhələsi? Niyə?
5. Əgər TechNova-nın rəhbəri sizə desə "bu tapıntıların hamısını indi düzəldə bilmərik, yalnız birini seçin" — hansını seçərdiniz və niyə?

---

## QİYMƏTLƏNDİRMƏ QEYDLƏRİ (yalnız content creator/instruktor üçün)

**Addım 1-2 (Auditor perspektivi, Control Testing):**
- Əsas keyfiyyət göstəricisi: tələbə öz əvvəlki işini tənqidi qiymətləndirə bilirmi, yoxsa avtomatik olaraq "hər şey qaydasındadır" deyirmi? Real auditorluq bacarığı elə budur — öz işinə qərəzsiz baxa bilmək.
- Test 1 (Policy Enforcement) demək olar ki, həmişə "BOŞLUQ" tapıntısı ilə nəticələnməlidir, çünki ssenari heç bir yoxlama mexanizmi təmin etmir — əgər tələbə "hər şey qaydasındadır" deyirsə, bu, Control Testing-in mahiyyətini anlamadığını göstərir.

**Addım 3 (Audit Hesabatı):**
- İcmal bölməsinin Avropa müştərisi kontekstinə istinad etməsi mütləqdir — bu, auditin "niyə vacib olduğunu" göstərir, sırf akademik məşq olmadığını sübut edir.
- Ən azı bir "Kritik/Yüksək" tapıntı tələbi ilə məqsəd budur ki, tələbə hər şeyi "Aşağı" ciddiyyətə endirib münaqişədən qaçmasın — real auditor bəzən narahatedici xəbər çatdırmalı olur.

**Addım 4 (CEO təqdimatı):**
- 3 cümlə məhdudiyyəti qəsdəndir — Module 2, Room 2-dəki "texniki riski biznes dilinə tərcümə etmək" bacarığını sınayır. Yaxşı cavabda texniki jargon (məsələn, "control gap", "RACI") olmamalıdır, sadə, təsirli dil olmalıdır.

**Ümumi Capstone qiymətləndirmə fəlsəfəsi:**
Bütün üç fazanın birlikdə qiymətləndirilməsində ən vacib meyar **uçdan-uca izlənilə bilən zəncirdir**: Faza 1-dəki bir insident → Faza 1-dəki risk → Faza 2-dəki boşluq → Faza 2-dəki treatment fəaliyyəti → Faza 3-dəki tapıntı (əgər fəaliyyət icra olunmayıbsa) formasında bir "hekayə xətti" izlənilə bilməlidir. Fazalar bir-birindən təcrid olunmuş, əlaqəsiz sənədlər toplusu kimi görünürsə, bu, Capstone-un əsas məqsədinin (inteqrasiya) əldə olunmadığını göstərir və aşağı qiymətləndirilməlidir, hətta hər fazanın öz-özlüyündə texniki cəhətdən düzgün olduğu hallarda belə.
