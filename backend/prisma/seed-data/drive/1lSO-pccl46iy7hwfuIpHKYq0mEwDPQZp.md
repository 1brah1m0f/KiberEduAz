# ROOM 2: Password Attacks

**Path:** CompTIA Security+ (SY0-701) Hazırlığı
**Module:** 4 — Social Engineering and Password Attacks (Fəsil 4)
**Mənbə:** CompTIA Security+ Study Guide, 9th Ed. — "Password Attacks" bölməsi
**Domain uyğunluğu:** 2.0 Threats, Vulnerabilities, and Mitigations (22%) — obyektiv 2.4
**Çətinlik:** Medium
**Təxmini vaxt:** 40 dəq

## Room haqqında

Room 1-də social engineering-in insanları necə manipulyasiya edərək parol/məlumat əldə etdiyini gördünüz. Amma parollar həmişə insan xətası vasitəsilə əldə edilmir — bəzən birbaşa **texniki** hücuma məruz qalır. Bu room-da SY0-701-in fokuslandığı iki əsas parol hücumunu (Brute-Force və Password Spraying), həmçinin konteksti tam başa düşmək üçün Dictionary Attacks və Rainbow Table-ları öyrənəcəksiniz. Kitab vacib bir fərqi vurğulayır: **online** vs **offline** hücumlar — bu fərq, hansı hücum növünün praktiki olaraq mümkün olduğunu müəyyənləşdirir.

## Öyrənmə nəticələri

- Brute-Force və Password Spraying arasındakı fərqi izah etmək
- Dictionary Attack-in Brute-Force-un bir forması olduğunu başa düşmək
- Online və Offline parol hücumları arasındakı fərqi izah etmək
- Rainbow Table-ların necə işlədiyini və hashing ilə əlaqəsini izah etmək
- Salt və Pepper konseptlərinin rainbow table hücumlarına qarşı necə müdafiə etdiyini izah etmək

## Task 1 — Brute-Force və Password Spraying: İki Əsas Hücum

Kitab qeyd edir ki, SY0-701 imtahan konturu yalnız **iki** parol hücumuna fokuslanır: Spraying və Brute Force. (Dictionary Attack və Rainbow Table-lar da kontekst üçün öyrədilir, amma imtahanda bilavasitə görünməyəcək — buna baxmayaraq, bunları bilmək real dünya praktikası üçün vacibdir.)

**Brute-Force Attack** — işləyən parolu tapana qədər müxtəlif parolları sınayan hücumdur. Real brute-force metodları sadəcə siyahıdan parol sınamaqdan daha mürəkkəb ola bilər — çox vaxt bunlara daxildir:

- Ümumi parolları ehtiva edən söz siyahıları (word lists)
- Xüsusi olaraq hədəfin istifadə etmə ehtimalına görə seçilmiş sözlər
- Mürəkkəblik qaydalarını nəzərə almaq üçün modifikasiya qaydaları

Kitab vurğulayır: giriş nə qədər "zərif" və ya düşünülmüş olsa da, son nəticədə brute-force sadəcə **uğur qazanana qədər müxtəlif variantları sınamaq** prosesidir.

**Password Spraying** — Brute-Force-un bir formasıdır, amma **əks** strategiya istifadə edir: tək bir parol (və ya kiçik parol dəsti) çoxlu hesaba qarşı sınanır. Bu yanaşma xüsusilə effektivdir, əgər hədəfin konkret default parol və ya parol dəsti istifadə etdiyi məlumdursa. Kitabın nümunəsi: idman komandasının fan vebsaytına hücum edirsinizsə, tərəfdarların çığırtıları, tanınmış oyunçuların adları və komandaya aid digər ümumi terminlər password spraying üçün yaxşı namizəd ola bilər.

**Fərq niyə vacibdir:** Brute-Force **bir hesaba** çoxlu parol sınayır (dərinlik), Password Spraying isə **çoxlu hesaba** az sayda parol sınayır (genişlik). Bu fərq praktiki əhəmiyyət daşıyır — bir çox sistem müəyyən sayda uğursuz giriş cəhdindən sonra hesabı kilidləyir (account lockout). Ənənəvi Brute-Force bu müdafiəyə tez rast gəlir (bir hesaba çox cəhd = tez kilidlənmə), Password Spraying isə hər hesaba yalnız 1-2 cəhd etdiyi üçün, bu müdafiəni daha asan keçə bilər.

| | Brute-Force | Password Spraying |
|---|---|---|
| Strategiya | Çoxlu parol → BİR hesab | Az sayda parol → ÇOXLU hesab |
| Account Lockout-a qarşı həssaslıq | Yüksək (tez aşkarlanır) | Aşağı (hər hesaba az cəhd) |
| Effektiv olduğu şərait | Zəif/proqnozlaşdırıla bilən tək parol | Ümumi/default parol istifadəsi geniş yayılıb |

**Dictionary Attack** — daha bir Brute-Force forması, cəhdlər üçün söz siyahısından istifadə edir. Ümumi mövcud brute-force lüğətləri (dictionaries) var, John the Ripper kimi alətlərin öz daxili söz siyahıları var. Bir çox pentester öz kəşfiyyat/recon prosesinin hissəsi kimi xüsusi lüğətlər qurur (məsələn, hədəf haqqında toplanan ictimai məlumatlardan söz çıxarmaqla).

**Sual 1**
Brute-Force və Password Spraying arasındakı əsas strateji fərq nədir?

**Sual 2**
Niyə Password Spraying account lockout müdafiəsini daha asan keçə bilir?

**Sual 3**
Dictionary Attack hansı hücum kateqoriyasının bir formasıdır?

## Task 2 — Online vs Offline Hücumlar və Rainbow Tables

Hansı parol hücum mexanizmindən asılı olmayaraq, kitab vacib bir fərqləndirici amili vurğulayır: hücum **online** (canlı sistemə qarşı, müdafiə mexanizmləri işə düşə bilər) yoxsa **offline** (kompromis olmuş/ələ keçirilmiş parol anbarına qarşı) aparılır.

**Online hücumlar** — canlı sistemə qarşı aparılır. Sistem account lockout, rate limiting, CAPTCHA kimi müdafiə mexanizmlərinə malik ola bilər — bunlar hücumu ləngidə və ya dayandıra bilər.

**Offline hücumlar** — hücumçu artıq hash-lənmiş parol faylını əldə edibsə (kompromis olunmuş sistemdən), bu fayl üzərində məhdudiyyətsiz vaxt/hesablama gücü ilə işləyə bilər — heç bir account lockout mexanizmi müdaxilə etmir, çünki hücum artıq "canlı" sistemə qarşı deyil.

Offline kontekstdə **Rainbow Table** xüsusilə faydalı alət olur — Brute-Force-dan **əhəmiyyətli dərəcədə sürətli** işləyir. Rainbow Table — ələ keçirilmiş parol faylı ilə **eyni hashing metodologiyası** istifadə edilərək əvvəlcədən hesablanmış hash-ların asanlıqla axtarıla bilən verilənlər bazasıdır. Məsələn, MD5 ilə hash-lənmiş parol dəsti ələ keçirilibsə, əvvəlcədən hazırlanmış MD5 rainbow table sadəcə axtarış aparmağa imkan verir.

**Hashing-i xatırlayaq (Module 1-dən):** hash — girişi alıb unikal, təkrarlanan çıxış yaradan birtərəfli kriptoqrafik funksiyadır. Heç iki giriş eyni hash yaratmamalıdır və hash geri çevrilə bilməməlidir ki, orijinal giriş ondan çıxarıla bilməsin (hash toqquşmaları (collisions) baş verir, bu da yeni hashing alqoritmlərinin dizayn edilməsinə səbəb olur).

**Vacib nüans:** Rainbow Table hash-ları "sındırmır" — onlar hesablama gücündən istifadə edərək bir verilənlər bazası yaradır, burada hash-lar və onları yaradan dəyərlər axtarıla bilər. Siz yenə də hash-i **geri çevirmirsiniz**, amma hansı düz mətnin (plain text) həmin hash-ı yaratdığını tapa bilirsiniz.

**Password Crackers (John the Ripper)** — kitab John the Ripper-i (populyar açıq-mənbə parol sındırma aləti) nümunə göstərir. Bu alətlər ələ keçirilmiş parol faylına qarşı brute-force və dictionary hücumları sınayır, müxtəlif ümumi parol saxlama formatlarını dəstəkləyir. Belə alətlər həmçinin **parol qiymətləndirmə** aləti kimi də istifadə oluna bilər — bəzi təşkilatlar öz parol anbarlarında zəif/asan sındırıla bilən parolları dövri yoxlamaq üçün password cracker istifadə edir (baxmayaraq ki, MFA və parol mürəkkəblik tələbləri bu qiymətləndirmə prosesini əvəz etmə tendensiyasındadır).

| | Online Hücum | Offline Hücum |
|---|---|---|
| Hədəf | Canlı sistem | Ələ keçirilmiş parol faylı |
| Müdafiə maneəsi | Account lockout, rate limiting, CAPTCHA | Yoxdur (hücumçunun öz nəzarətindədir) |
| Effektiv alət | Password Spraying (lockout-u minimuma endirmək üçün) | Rainbow Table (sürətli axtarış) |

**Sual 1**
Online və Offline parol hücumları arasındakı əsas fərq nədir?

**Sual 2**
Rainbow Table nədir və niyə Brute-Force-dan sürətlidir?

**Sual 3**
"Rainbow Table hash-ı sındırmır" ifadəsi nə deməkdir — əvəzinə nə edir?

## Task 3 — Parolların Qorunması: Salt, Pepper və Best Practices

Rainbow Table hücumlarına qarşı ən effektiv müdafiə, parolların **necə saxlanıldığını** dəyişdirməkdir.

**Salt** — parol hash-lənməzdən əvvəl əlavə edilən əlavə (adətən təsadüfi) məlumatdır. Hər parol üçün fərqli salt istifadə etməklə, eyni parolun (məsələn, "password123") iki fərqli istifadəçi tərəfindən istifadə edilməsi halında belə, onların hash dəyərləri **fərqli** olur — bu, əvvəlcədən hazırlanmış rainbow table-ların işə yaramasının qarşısını alır, çünki hücumçu artıq hər unikal salt üçün ayrıca table hazırlamalı olar (praktiki olaraq mümkünsüz).

**Pepper** — Salt-a bənzər əlavə məlumatdır, fərqi ondadır ki, adətən **tətbiq səviyyəsində** sabit qalır (verilənlər bazasında hər parolla saxlanılmır, tətbiq kodunda/konfiqurasiyasında gizli saxlanılır). Bu, hücumçu verilənlər bazasını ələ keçirsə belə, pepper-i bilmədən hash-ları sındıra bilməməsini təmin edir.

**Kitabın vurğuladığı ən vacib best practice:** parol saxlamanın ən yaxşı təcrübəsi **şifrələməyə əsaslanmır** — parolların ümumiyyətlə saxlanılmamasına, əvəzinə girişdə parolu yoxlamaq üçün yaxşı qurulmuş parol hash-ından istifadə olunmasına əsaslanır. Yəni sistem heç vaxt sizin real parolunuzu "harada isə" saxlamır — yalnız onun hash-ini saxlayır, giriş zamanı təqdim etdiyiniz parolu eyni funksiya ilə hash-ləyib saxlanılan hash ilə müqayisə edir.

Bu, Module 1, Room 4-də öyrəndiyiniz **Obfuscation** (Hashing, Tokenization, Masking) mövzusunun praktiki tətbiqidir — parol saxlama, hashing-in ən klassik istifadə sahəsidir.

**Sual 1**
Salt nədir və rainbow table hücumuna qarşı necə müdafiə edir?

**Sual 2**
Pepper Salt-dan necə fərqlənir (saxlanma yeri baxımından)?

**Sual 3**
Parol saxlamanın ən yaxşı təcrübəsi niyə "şifrələmə" deyil, "hashing"-ə əsaslanır?

## Yekun Yoxlama (Summary Quiz)

1. Brute-Force və Password Spraying arasındakı fərqi izah edin.
2. SY0-701 imtahanının fokuslandığı iki parol hücumu hansılardır?
3. Online və Offline hücum arasındakı fərq nədir?
4. Rainbow Table nədir?
5. Salt nə edir və niyə rainbow table hücumlarını çətinləşdirir?
6. Parol saxlamanın ən yaxşı təcrübəsi nədir?

---
