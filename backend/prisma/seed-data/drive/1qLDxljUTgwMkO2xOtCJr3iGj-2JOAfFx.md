# ROOM 1: AI Governance və EU AI Act Əsasları

**Path:** GRC Fundamentals
**Module:** Bonus / İrəliləyiş Mövzular
**Çətinlik:** Elective
**Təxmini vaxt:** 30 dəq

## Room haqqında

İndiyə qədər öyrəndiyimiz governance, policy və audit prinsipləri istənilən texnologiyaya tətbiq oluna bilər — amma Süni İntellekt (AI) sistemləri fərqli bir çətinlik yaradır: onların qərarları çox vaxt "qara qutu" kimidir, sürətlə inkişaf edir və artıq bir çox ölkədə xüsusi qanunvericiliyə tabedir. Bunların ən əhəmiyyətlisi **EU AI Act**-dir — dünyada AI-a həsr olunmuş ilk hərtərəfli qanunvericilik.

Bu room-da AI Governance-in nə demək olduğunu və EU AI Act-in risk-əsaslı strukturunu öyrənəcək, sonra TechNova MMC-nin yeni bir AI sistemini bu struktura görə təsnif edəcəksiniz.

**Diqqət:** Bu mövzu sürətlə dəyişir — aşağıdakı tarixlər 2026-cı ilin ortasında qəbul edilmiş **AI Omnibus** dəyişikliklərini əks etdirir. Real layihələrdə həmişə ən son rəsmi mənbəni (Avropa Komissiyasının AI Act Service Desk saytı) yoxlayın.

## Öyrənmə nəticələri

- AI Governance-in adi IT Governance-dən nə ilə fərqləndiyini izah edə bilmək
- EU AI Act-in risk-əsaslı piramidasını (Unacceptable/High/Limited/Minimal) təsvir edə bilmək
- EU AI Act-in əsas tətbiq tarixlərini və 2026-cı il Omnibus dəyişikliklərinin məntiqini izah edə bilmək
- Real bir AI sistemini risk kateqoriyasına görə təsnif edə bilmək

## Task 1 — AI Governance Nədir?

**AI Governance** — bir təşkilatın AI sistemlərini məsuliyyətli, təhlükəsiz və qanunvericiliyə uyğun şəkildə inkişaf etdirməsini, tətbiq etməsini və istifadə etməsini təmin edən struktur və proseslərdir. Room 2-də (Module 2) öyrəndiyimiz Governance prinsipləri (kim qərar verir, hansı prinsiplə) burada da tətbiq olunur, amma AI üç əlavə çətinlik gətirir:

```
1. QƏRARIN İZAHI ÇƏTİNDİR ("Black Box" problemi)
   Ənənəvi proqram təminatında qayda insan tərəfindən yazılır
   və izlənilə bilər. AI modeli isə məlumatdan öyrənir — nəyə
   görə konkret qərar verdiyini izah etmək bəzən mümkün olmur.

2. DAVRANIŞ ZAMANLA DƏYİŞİR ("Model Drift")
   Bir AI sistemi işə salınanda yaxşı işləyə bilər, amma real
   dünya məlumatı dəyişdikcə (yeni müştəri davranışı, yeni
   fırıldaqçılıq üsulu) modelin dəqiqliyi zamanla aşağı düşə bilər.

3. QANUNVERİCİLİK SÜRƏTLƏ DƏYİŞİR
   EU AI Act, ABŞ-da ştat səviyyəli qanunlar, sənaye-spesifik
   tələblər (məsələn, maliyyə sektorunda) paralel inkişaf edir —
   uyğunluq statik deyil, davamlı izləmə tələb edir.
```

Bu səbəbdən AI Governance-in əsas vəzifəsi bir sual ətrafında qurulur: **"Bu AI sistemi nə qədər riskli, və bu riskə uyğun səviyyədə nəzarət varmı?"** — bu, məhz EU AI Act-in də əsas məntiqidir.

**Sual 1**
AI Governance-i adi IT Governance-dən fərqləndirən üç çətinliyi sadalayın.

**Sual 2**
"Black Box" problemi nə deməkdir və niyə audit üçün çətinlik yaradır?

**Sual 3**
"Model Drift" nədir? Bir nümunə ilə izah edin.

## Task 2 — EU AI Act: Risk-Əsaslı Piramida

EU AI Act (Avropa İttifaqının Süni İntellekt Aktı) 2024-cü ilin avqustunda qüvvəyə minib və AI sistemlərini **risk səviyyəsinə görə** dörd kateqoriyaya bölür — nə qədər yüksək risk, bir o qədər ciddi tələblər:

```
        ┌─────────────────────────┐
        │  UNACCEPTABLE RISK       │  ◄── TAM QADAĞANDIR
        │  (Qəbuledilməz risk)     │
        └─────────────────────────┘
        ┌─────────────────────────┐
        │  HIGH RISK                │  ◄── Ciddi tələblər (risk
        │  (Yüksək risk)            │       idarəetməsi, sənədləşmə,
        │                            │       insan nəzarəti, audit)
        └─────────────────────────┘
        ┌─────────────────────────┐
        │  LIMITED RISK              │  ◄── Şəffaflıq tələbi
        │  (Məhdud risk)             │       (istifadəçiyə bildirmək)
        └─────────────────────────┘
        ┌─────────────────────────┐
        │  MINIMAL RISK               │  ◄── Əlavə tələb yoxdur
        │  (Minimal risk)             │       (könüllü davranış kodeksi)
        └─────────────────────────┘
```

**Unacceptable Risk (Qadağan olunub):** Sosial reytinq sistemləri (dövlət tərəfindən vətəndaşları "davranışına görə" xallandırmaq), insanların şüuraltı davranışını manipulyasiya edən sistemlər, real-vaxt biometrik tanınma (ictimai yerlərdə, məhdud istisnalarla) kimi tətbiqlər tamamilə qadağandır.

**High Risk (Yüksək risk):** Bura insanların həyatına, hüquqlarına və ya imkanlarına ciddi təsir edə biləcək sistemlər daxildir — məsələn, işə qəbulda namizəd skrininqi, kredit qərarları, tibbi diaqnostika köməkçiləri, tənzimlənən infrastrukturun idarə olunması. Bu sistemlər üçün tələblər: risk idarəetmə sistemi, keyfiyyətli məlumat idarəetməsi, texniki sənədləşmə, insan nəzarəti (human oversight), dəqiqlik və kibertəhlükəsizlik tələbləri, uyğunluq qiymətləndirilməsi.

**Limited Risk (Məhdud risk):** Məsələn, chatbot-lar və ya deepfake yaradan sistemlər. Əsas tələb — **şəffaflıq**: istifadəçi bunun AI ilə danışdığını və ya gördüyü məzmunun AI tərəfindən yaradıldığını bilməlidir.

**Minimal Risk:** Spam filtrləri, AI-əsaslı video oyun köməkçiləri kimi sistemlər — əlavə hüquqi tələb yoxdur, amma könüllü davranış kodeksləri tövsiyə olunur.

**Əsas tarixlər (2026-cı ilin Omnibus dəyişikliklərindən sonra):**

```
Avqust 2024  → Akt qüvvəyə minib (entry into force)
Fevral 2025  → Qadağan olunan praktikalar + AI savadlılığı tələbləri
                tətbiq olunmağa başlayıb
Avqust 2025  → GPAI (General-Purpose AI) modelləri üçün öhdəliklər
                və idarəetmə strukturları tələb olunur
Avqust 2026  → Şəffaflıq qaydaları (Limited Risk), sandbox-lar
                işə düşür; icra (enforcement) başlayır
Dekabr 2027  → Yüksək riskli sistemlər (Annex III — biometrika,
                işə qəbul, kredit, təhsil və s.) üçün tam uyğunluq
                (əvvəlki tarix Avqust 2026 idi, Omnibus bunu
                gecikdirdi)
Avqust 2028  → Tənzimlənmiş məhsullara (Annex I — məsələn, tibbi
                cihazlar, avtomobillər) daxil olan AI sistemləri
                üçün tam uyğunluq
```

**Niyə Omnibus tarixləri dəyişdi?** 2025-ci ilin sonunda Avropa Komissiyası sənaye tərəfindən bildirilən narahatlığa cavab olaraq ("standartlar hələ hazır deyil, biznes hazırlaşmağa vaxt lazımdır") tətbiq müddətlərini uzatmağı təklif etdi. Bu, Room 2-də (Module 2) öyrəndiyimiz kimi, qanunvericiliyin özü də zaman-zaman "əməli tətbiq olunma qabiliyyətinə" görə yenidən nəzərdən keçirilə bilər — bu, GRC mütəxəssisinin daim aktual məlumatı izləməli olduğunu göstərir.

**Sual 1**
Dörd risk kateqoriyasını sadalayın və hər birinə bir nümunə verin.

**Sual 2**
Limited Risk kateqoriyasında əsas tələb nədir və bu, High Risk-dən nə ilə fərqlənir?

**Sual 3**
2026-cı il Omnibus dəyişikliyi nəyi dəyişdi və niyə?

## Task 3 — Praktiki Tapşırıq: AI Sistemini Təsnif Edin

TechNova MMC yeni bir layihəyə başlayır: **"FraudGuard AI"** — bu, müştəri ödəniş əməliyyatlarını real-vaxtda təhlil edərək, fırıldaqçılıq ehtimalı yüksək olan əməliyyatları avtomatik olaraq bloklayan (və ya insan nəzarətçisinə göndərən) bir sistemdir.

**Sistem haqqında əlavə təfərrüatlar:**

```
- Sistem hər əməliyyata 0-100 arası "risk balı" verir
- 90-dan yuxarı bal alan əməliyyatlar avtomatik bloklanır
  (müştəriyə bildiriş göndərilir, insan araşdırması sonradan)
- 50-90 arası bal alan əməliyyatlar insan nəzarətçisinə
  yoxlama üçün göndərilir
- Sistem müştərinin maliyyə vəziyyətinə birbaşa təsir edir
  (bloklanmış əməliyyat = müştərinin pulu müvəqqəti dondurulur)
- Sistem "kredit qərarı" vermir, yalnız əməliyyat səviyyəsində
  fırıldaqçılıq ehtimalını qiymətləndirir
```

**Sizin tapşırığınız:**

**Addım 1** — Bu sistemin hansı risk kateqoriyasına (Unacceptable/High/Limited/Minimal) aid olduğunu müəyyən edin

**Addım 2** — Qərarınızı əsaslandırın (hansı xüsusiyyət bu kateqoriyaya gətirir?)

**Addım 3** — Bu kateqoriyaya uyğun olaraq TechNova-nın hansı konkret tədbirləri görməli olduğunu sadalayın (minimum 3)

**Addım 4** — Bu tapşırığı Module 2-də öyrəndiyimiz governance strukturu ilə əlaqələndirin: bu sistemin təsdiqi hansı səviyyədə (CISO? Board? Risk Committee?) verilməlidir?

**Kömək üçün nümunə həll strukturu:**

```
RİSK KATEQORİYASI: High Risk

Əsaslandırma:
Sistem birbaşa müştərinin maliyyə əməliyyatlarına təsir edir
(əməliyyatın bloklanması = pulun müvəqqəti dondurulması), bu,
insanların maliyyə imkanlarına ciddi təsir edən qərar sayılır.
Bu, EU AI Act-in "maliyyə xidmətlərinə giriş və qiymətləndirmə"
kateqoriyasına (Annex III-də sadalanan sahələrdən biri) uyğun
gəlir. Unacceptable deyil, çünki sistem manipulyasiya və ya
sosial reytinq məqsədi daşımır. Limited Risk-dən fərqli olaraq,
sistem yalnız məlumat vermir — birbaşa qərar (bloklama) verir
və real maliyyə nəticəsi yaradır.

TƏLƏB OLUNAN TƏDBİRLƏR:
1. Risk idarəetmə sistemi qurulmalı — modelin nəticələri
   müntəzəm izlənilməli (bax: Model Drift, Task 1)
2. İnsan nəzarəti (human oversight) təmin edilməli — 90+ balı
   avtomatik bloklasa da, insan araşdırması icbari olmalıdır
   (artıq nəzərdə tutulub, amma sənədləşdirilməlidir)
3. Texniki sənədləşmə hazırlanmalı — modelin necə təlim
   olunduğu, hansı məlumatla, hansı dəqiqliklə işlədiyi
   sənədləşdirilməli
4. Müştəriyə bildiriş prosesi aydın olmalı — bloklanma səbəbi
   və etiraz mexanizmi mövcud olmalı

GOVERNANCE SƏVİYYƏSİ:
Bu, Module 2 Room 2-də öyrəndiyimiz kimi, həm CISO (texniki risk
idarəetməsi), həm Risk Committee (təşkilat səviyyəli maliyyə/
hüquqi risk) səviyyəsində nəzərdən keçirilməlidir, çünki sistem
həm texniki, həm hüquqi/reputasiya riski daşıyır. Yekun təsdiq,
xüsusilə yüksək riskli AI sistemi olduğu üçün, Board-a da
məlumat verilməlidir.
```

**Öz-özünə keyfiyyət yoxlaması (Checklist):**

```
☐ Risk kateqoriyası seçilib və konkret sistem xüsusiyyətinə
  istinadla əsaslandırılıb
☐ Digər kateqoriyaların niyə uyğun olmadığı da qısaca izah
  olunub (məs. niyə Limited Risk yox)
☐ Minimum 3 konkret tədbir sadalanıb (ümumi "diqqətli olmaq"
  yox)
☐ Governance səviyyəsi Module 2-dəki rollarla (CISO/Board/
  Risk Committee) əlaqələndirilib
```

**Sual 1**
Niyə bu sistem "kredit qərarı vermir" olmasına baxmayaraq, yenə də High Risk sayıla bilər?

**Sual 2**
İnsan nəzarəti (human oversight) tələbi bu konkret sistemdə necə görünür?

**Sual 3**
Əgər TechNova sistemi elə dizayn etsə ki, o, heç bir avtomatik bloklama etməsin, yalnız insan nəzarətçisinə tövsiyə versin — bu, risk kateqoriyasını dəyişərdimi? Niyə?

## Yekun Yoxlama (Summary Quiz)

1. AI Governance-i adi Governance-dən fərqləndirən əsas çətinlikləri sadalayın.
2. EU AI Act-in dörd risk kateqoriyasını sadalayın.
3. High Risk sistemlər üçün hansı əsas tələblər var?
4. 2026-cı il Omnibus dəyişikliyinin əsas nəticəsi nə oldu?
5. FraudGuard AI nümunəsində sistemi High Risk edən əsas amil nə idi?

---
