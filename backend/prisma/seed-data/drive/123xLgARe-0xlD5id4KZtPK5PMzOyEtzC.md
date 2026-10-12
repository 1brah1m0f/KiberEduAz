# ROOM 4: Data Protection

**Path:** CompTIA Security+ (SY0-701) Hazırlığı
**Module:** 1 — Today's Security Professional (Fəsil 1)
**Mənbə:** CompTIA Security+ Study Guide, 9th Ed. — "Data Protection" bölməsi
**Domain uyğunluğu:** 1.0 General Security Concepts (12%) / 3.0 Security Architecture (18%) — obyektiv 3.3
**Çətinlik:** Easy→Medium
**Təxmini vaxt:** 35 dəq

## Room haqqında

Fəsil 1-in son room-u. İndiyə qədər kibertəhlükəsizliyin **məqsədlərini** (CIA), **təhdid modellərini** (DAD, Breach Impact) və **nəzarət təsnifatını** (Category/Type) öyrəndiniz. Bu room bunları ən konkret, əl ilə toxuna biləcəyiniz obyektə — **məlumatın özünə** — tətbiq edir. Kibertəhlükəsizlik mütəxəssisləri vaxtlarının böyük hissəsini həssas məlumatın qorunmasına həsr edirlər — bu room-da məlumatın hansı "vəziyyətlərdə" olduğunu, onu necə qoruduğumuzu (şifrələmə, DLP, obfuskasiya) və giriş məhdudiyyətlərini öyrənəcəksiniz.

## Öyrənmə nəticələri

- Məlumatın üç vəziyyətini (at rest, in transit, in use) fərqləndirmək
- DLP sistemlərinin iki mühitini (agent-based, agentless) və iki mexanizmini (pattern matching, watermarking) izah etmək
- Data Minimization texnikalarını (hashing, tokenization, masking) fərqləndirmək və hər birinin zəif nöqtəsini bilmək
- Access Restriction (geographic, permission) və Segmentation/Isolation anlayışlarını tətbiq etmək

## Task 1 — Məlumatın Üç Vəziyyəti

Məlumat qorunma texnikalarını düşünərkən, kitab əvvəlcə məlumatın harada/necə mövcud ola biləcəyini nəzərdən keçirməyi tövsiyə edir — çünki hər vəziyyət fərqli təhlükə profilinə malikdir.

**Data at Rest (Sükunətdə Məlumat)** — sərt disklərdə, lentlərdə, buludda və ya digər saxlama mediasında saxlanılan məlumat. Bu, sistemlərə çıxış əldə edən insayderlər və ya xarici hücumçular tərəfindən oğurluğa məruz qalır — onlar məzmunu "gəzə" bilirlər.

**Data in Transit (Ötürülmədə Məlumat)** — şəbəkə üzərində hərəkətdə olan məlumat. Etibarsız şəbəkə üzərində gedərkən, bu, həmin şəbəkəyə çıxışı olan istənilən şəxs tərəfindən dinləmə (eavesdropping) hücumlarına açıqdır.

**Data in Use (İstifadədə Məlumat)** — hazırda kompüter sistemi tərəfindən aktiv istifadə olunan məlumat, o cümlədən emal zamanı yaddaşda saxlanılan məlumat. Sistemə nəzarəti olan hücumçu yaddaşın məzmununu oxuyub həssas məlumatı oğurlaya bilər.

| Vəziyyət | Harada | Əsas təhlükə |
|---|---|---|
| At Rest | Disk, lent, bulud | İnsayder/xarici hücumçunun "gəzməsi" |
| In Transit | Şəbəkə üzərində | Dinləmə (eavesdropping) |
| In Use | RAM/proses yaddaşı | Yaddaş məzmununun oxunması |

Bu üç vəziyyət path boyu daim geri qayıdacağınız fundamental çərçivədir — Module 6-da (Application Security) və Module 7-də (Cryptography) hər vəziyyət üçün fərqli şifrələmə yanaşmalarını (disk şifrələməsi, TLS, homomorfik şifrələmə) görəcəksiniz.

**Sual 1**
Məlumatın üç vəziyyətini sadalayın və hər birinin əsas təhlükəsini yazın.

**Sual 2**
"Data in use" nə deməkdir və niyə bu vəziyyət xüsusi çətinlik yaradır?

**Sual 3**
Niyə eyni məlumat fərqli vəziyyətlərdə fərqli qorunma texnikası tələb edə bilər?

## Task 2 — DLP: Data Loss Prevention Sistemləri

**DLP (Data Loss Prevention)** — təşkilatların məlumat itkisi/oğurluğunun qarşısını almaq üçün məlumat idarəetmə siyasətlərini icra etməsinə kömək edən sistemlərdir. Onlar sistemlərdə qorunmamış həssas məlumatı axtarır və şəbəkə trafikini izləyir ki, məlumatın təşkilatdan çıxarılması cəhdlərini aşkarlasın.

DLP iki fərqli mühitdə işləyir:

**Agent-Based DLP** — sistemlərə quraşdırılmış proqram agentləri vasitəsilə işləyir, bu agentlər sistemlərdə həssas məlumatın (sosial sığorta nömrəsi, kart nömrəsi) izlərini axtarır. Bu, gözlənilməz yerlərdə tapılan həssas məlumatın erkən aşkarlanmasına imkan verir — cihaz itirilsə/oğurlansa/kompromis olsa belə, əvvəlcədən şifrələnmiş/silinmiş olarsa, zərər azalır. Agent-based DLP həmçinin sistem konfiqurasiyasını və istifadəçi hərəkətlərini monitorinq edə bilər — məsələn, host-based DLP istifadəçilərin USB removable media cihazlarına çıxışını bloklaya bilər.

**Agentless (Network-Based) DLP** — şəbəkədə yerləşən, çıxan trafiki izləyən xüsusi cihazlardır, şifrələnməmiş həssas məlumat ehtiva edən ötürmələri axtarır və bloklayır.

DLP sistemləri sadəcə siyasəti pozan trafiki bloklaya bilər, bəzi hallarda isə avtomatik şifrələmə tətbiq edə bilər (bu, email-ə fokuslanan DLP sistemlərində geniş yayılıb).

DLP-nin iki hərəkət mexanizmi var:

**Pattern Matching** — sistemlər həssas məlumatın tanınan işarələrinə baxır. Məsələn, kredit kartı və ya sosial sığorta nömrəsinə bənzər formatda rəqəm görəndə avtomatik tetiklənir; oxşar şəkildə, "Top Secret" və ya "Business Confidential" kimi həssas terminlərin bazasını saxlaya və bu terminləri çıxan ötürmədə görəndə tetiklənə bilər.

**Watermarking** — sistem/administrator həssas sənədlərə elektron etiket tətbiq edir, sonra DLP sistemi bu etiketləri ehtiva edən şifrələnməmiş məzmun üçün sistem/şəbəkələri monitorinq edə bilər. Watermarking texnologiyası müəllif hüququ/mülkiyyət məhdudiyyətlərini icra edən DRM (Digital Rights Management) həllərində də geniş istifadə olunur.

| | Agent-Based | Agentless (Network-Based) |
|---|---|---|
| Harada işləyir | Cihazın özündə | Şəbəkədə (cihazlardan kənar) |
| Nəyi görür | Saxlanılan məlumat + istifadəçi hərəkəti | Çıxan şəbəkə trafiki |
| Nümunə tətbiq | USB portu bloklamaq | Şifrələnməmiş email-i tutmaq |

**Sual 1**
Agent-based və Agentless DLP arasındakı fərq nədir?

**Sual 2**
Pattern Matching və Watermarking arasındakı fərqi izah edin.

**Sual 3**
Host-based DLP-nin USB portlarını bloklaması hansı DLP mühitinə aiddir və bu, hansı təhlükəni azaldır?

## Task 3 — Data Minimization və Obfuscation Texnikaları

**Data Minimization** — müntəzəm saxladığımız həssas məlumatın miqdarını azaldaraq riski azaltmaq texnikasıdır. Bunu əldə etməyin ən yaxşı yolu — məlumatı orijinal biznes məqsədinə artıq ehtiyac olmadıqda sadəcə **məhv etməkdir**.

Əgər məlumatı tam silmək mümkün deyilsə, onu orijinal həssas məlumatı **"deidentifikasiya"** edilmiş formata çevirə bilərik — bu proses məlumatı konkret şəxslə əlaqələndirmə qabiliyyətini aradan qaldırır, onun həssaslığını azaldır.

Deidentifikasiyaya alternativ, məlumatı orijinal informasiyanın **geri əldə edilə bilmədiyi** formata çevirməkdir — buna **Data Obfuscation** deyilir. Üç əsas alət:

**Hashing** — hash funksiyası istifadə edərək dəyəri uyğun hash dəyərinə çevirir. Güclü hash funksiyası tətbiq etsək, fayldakı dəyəri hashlanmış dəyərlə əvəz edə bilərik.

**Tokenization** — həssas dəyərləri lookup cədvəli istifadə edərək unikal identifikatorla əvəz edir. Məsələn, geniş tanınan bir dəyəri (tələbə ID-si) təsadüfi yaradılmış 10-rəqəmli nömrə ilə əvəz edə bilərik, sonra lookup cədvəlini saxlayıb lazım olduqda geri tələbə ID-sinə çevirə bilərik. Diqqət: bu yanaşmanı istifadə edirsinizsə, lookup cədvəlini təhlükəsiz saxlamalısınız!

**Masking** — bəzi/bütün həssas sahələri boş simvollarla əvəz edərək məlumatı qismən redaktə edir. Məsələn, kart nömrəsinin son 4 rəqəmindən başqa hamısını X və ya * ilə əvəz edə bilərik ki, kart nömrəsi oxunmaz olsun.

**Hashing-in Zəif Nöqtəsi — Rainbow Table Hücumu:** Hashlanmış dəyərdən orijinal dəyəri birbaşa əldə etmək mümkün olmasa da, bu yanaşmanın ciddi bir zəifliyi var. Əgər kimsə bir sahə üçün mümkün dəyərlərin siyahısına malikdirsə, **rainbow table hücumu** apara bilər — hücumçu namizəd dəyərlərin hash-larını hesablayır, sonra bu hash-ların bizim məlumat faylında olub-olmadığını yoxlayır.

Kitabın nümunəsi: fərz edin ki, kollecimizdə imtahandan kəsilmiş bütün tələbələrin siyahısı var, amma biz onların tələbə ID-lərini hashlamışıq. Əgər hücumçunun bütün tələbələrin siyahısı varsa, o, bütün tələbə ID-lərinin hash dəyərlərini hesablaya bilər, sonra hansı hash dəyərlərinin siyahıda olduğunu yoxlaya bilər. Bu səbəbdən, hashing yalnız ehtiyatla istifadə olunmalıdır.

| Texnika | Necə işləyir | Geri əldə edilə bilər? | Əsas zəiflik |
|---|---|---|---|
| Hashing | Dəyəri hash funksiyası ilə çevirir | Xeyr (birbaşa) | Rainbow table hücumu |
| Tokenization | Lookup cədvəli ilə unikal ID əvəz edir | Bəli (lookup cədvəli ilə) | Lookup cədvəlinin təhlükəsizliyi |
| Masking | Sahələri qismən blank simvolla əvəz edir | Xeyr (qalan hissə görünür) | Görünən hissə hələ məlumat sıza bilər |

**Sual 1**
Data Minimization-un ən sadə üsulu nədir?

**Sual 2**
Tokenization-u istifadə edərkən nəyi xüsusi qorumaq lazımdır və niyə?

**Sual 3**
Rainbow table hücumu necə işləyir? Kitabın tələbə ID nümunəsi ilə izah edin.

## Task 4 — Access Restrictions və Segmentation

Son qorunma qatı — kimin/nəyin məlumata çıxış əldə edə biləcəyini məhdudlaşdırmaqdır.

**Access Restrictions** iki əsas növə bölünür:

**Geographic Restrictions (Coğrafi Məhdudiyyətlər)** — istifadəçinin/sistemin fiziki yerləşməsinə əsasən resurslara çıxışı məhdudlaşdırır. Məsələn, təşkilat verilənlər bazasına çıxışı yalnız müəyyən ölkə/regionda yerləşən istifadəçilərlə məhdudlaşdıra bilər — bu, təşkilatın etibarlı şəbəkəsindən kənardan icazəsiz girişin qarşısını almağa kömək edir.

**Permission Restrictions (İcazə Məhdudiyyətləri)** — istifadəçinin rolu/icazə səviyyəsinə əsasən resurslara çıxışı məhdudlaşdırır. Məsələn, bir şirkət maliyyə məlumatına çıxışı yalnız müvafiq arxa fon yoxlamalarından və təlimdən keçmiş icazəli işçilərə verə bilər. (Bu mövzu Module 8-də — Identity and Access Management — dərindən işlənəcək.)

Bundan əlavə, təşkilatlar həssas sistemlərə çıxışı onların **şəbəkə yerləşməsinə** əsasən də məhdudlaşdıra bilər:

**Segmentation (Seqmentasiya)** — həssas sistemləri ayrı şəbəkələrdə yerləşdirir, burada onlar bir-biri ilə əlaqə saxlaya bilər, amma digər şəbəkələrdəki sistemlərlə əlaqə saxlamaq üçün sərt məhdudiyyətlərə malikdirlər.

**Isolation (İzolyasiya)** — bir addım daha irəli gedir və sistemi xarici şəbəkələrə/xarici şəbəkələrdən çıxışdan tamamilə kəsir.

Bunu bir bina təhlükəsizliyi analoji ilə görün: Access Restrictions — girişdə kimlik yoxlanması ("bu binaya kimlər girə bilər"). Segmentation — binanın daxilində müxtəlif otaqların açar kartları ilə ayrılması (mühasibatlıq otağına yalnız müəyyən kartla girmək olar, amma bina daxilində hərəkət mümkündür). Isolation isə tam ayrı, xüsusi girişi olan, əsas binadan fiziki cəhətdən təcrid olunmuş bir otaqdır (Module 1, Room 3-dəki compensating control nümunəsini — köhnəlmiş OS-in izolə edilmiş şəbəkədə saxlanması — xatırlayın, bu, Isolation-un praktiki tətbiqidir).

**Sual 1**
Geographic və Permission Restrictions arasındakı fərq nədir?

**Sual 2**
Segmentation və Isolation arasındakı fərq nədir?

**Sual 3**
Room 3-dəki compensating control nümunəsi (köhnəlmiş OS-in izolə edilmiş şəbəkədə saxlanması) hansı konseptin praktiki tətbiqidir?

## Yekun Yoxlama (Summary Quiz)

1. Məlumatın üç vəziyyətini sadalayın.
2. Agent-based və Agentless DLP arasındakı fərq nədir?
3. Hashing, Tokenization və Masking arasındakı fərqi bir cümlə ilə hər biri üçün yazın.
4. Rainbow table hücumu nədir?
5. Segmentation və Isolation arasındakı fərqi izah edin.
6. Bir kredit kartı nömrəsinin son 4 rəqəmindən başqa hamısını X ilə əvəz etmək hansı texnikaya aiddir?

---
