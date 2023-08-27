---

---
sidebar_position: 2
---

# Camino Ağı Genel Bakış

Camino'nun yerleşik olarak bulunan 3 blokzinciri vardır: [**Exchange Chain (X-Chain)**](#exchange-chain-x-chain), [**Platform Chain (P-Chain)**](#platform-chain-p-chain), ve [**Contract Chain (C-Chain)**](#contract-chain-c-chain). Tüm 3 blokzincir, **Ana Ağ** tarafından doğrulanmış ve güvence altına alınmıştır. Ana Ağ özel bir alt ağdır ve tüm özel alt ağların üyeleri de Ana Ağ'ın bir üyesi olmalıdır.

![Ana ağ](/img/about/network-overview/primary-network.png)

## Takas Zinciri (X-Chain)

**X-Chain**, dijital akıllı varlıkların oluşturulması ve ticaretinin yapıldığı merkeziyetsiz bir platform olarak hareket eder, bu varlıklar gerçek dünya kaynaklarının (örneğin hisse senetleri, tahviller) bir temsilcisidir ve "yarına kadar ticaret yapılmasın" veya "sadece ABD vatandaşlarına gönderilebilir" gibi kendi davranışlarını yöneten bir dizi kurala sahiptir.

X-Chain'de alınıp satılan varlıklardan biri CAM'dir. Camino üzerinde bir blockchain'e bir işlem gönderdiğinizde, bu işlem CAM cinsinden bir ücret ödersiniz.

X-Chain, Avalanche Sanal Makinesi'nin (AVM) bir örneğidir. [X-Chain API](../developer/apis/camino-node-apis/x-chain.mdx) istemcilere X-Chain ve diğer AVM örneklerinde varlık oluşturma ve ticaret yapma imkanı sağlar.

Bu, oldukça uzmanlaşmış ve performansı optimize edilmiş bir Zincirdir ve basit karmaşıklık seviyesi sayesinde işlemler için genel ağ yükü diğer Zincirlere göre daha düşüktür. Bu, işlem ücreti hesaplamasının da bir parçasıdır çünkü basit ve hızlı işlemler ağı çok fazla yormaz.

## Platform Zinciri (P-Chain)

**P-Chain**, Camino'nun metadata blockchain'idir ve doğrulayıcıları koordine eder, aktif alt ağları takip eder ve yeni alt ağların oluşturulmasını sağlar. P-Chain, **Snowman konsensüs protokolü**nü uygular.

[P-Chain API](../developer/apis/camino-node-apis/p-chain.md) istemcilere alt ağlar oluşturma, alt ağlara doğrulayıcı eklemek ve blockchain oluşturmak imkanı sağlar.

Sadece koordinasyon değil, aynı zamanda doğrulayıcıların oluşturulması ve payın temsil edilmesi de P-Chain'in bir parçasıdır. Kavramsal olarak, stake/delege'nin doğrulayıcılara nasıl bağlandığına dair yolumuzu değiştirmek üzere sürekli bir süreç içindeyiz, ancak temelde bu yine de P-Chain üzerinde ele alınacaktır.

---

## Sözleşme Zinciri (C-Chain)

**C-Chain**, [C-Chain'in API](../developer/apis/camino-node-apis/c-chain.md) kullanılarak akıllı sözleşmelerin oluşturulmasına olanak tanır.

C-Chain, [Camino](../) tarafından desteklenen Ethereum Sanal Makinesi'nin bir örneğidir.

Bu zincir, zincirlerdekin toplam yükün yaklaşık %95'ini taşır. Burada, akıllı sözleşmeler, Ethereum IDE'si olan [Remix](https://remix.ethereum.org) gibi bir ortamda Solidity dilinde yazılabilir ve zincirin kullanıcıları (çoğunlukla uygulamalar aracılığıyla) tarafından konuşlandırılır ve zincir kullanılır. Bu zincirde kullanılan adresler, yapısıyla EVM/Ethereum'dan alışık olduğumuz şekilde aynıdır ve ayrıca, mevcut uygulamalar (örneğin MetaMask gibi) ile bu zincire oldukça kolay bir şekilde bağlanabilir. En fazla esneklik ve uyumluluktan, en büyük olumsuz nokta ortaya çıkar: (karmaşık) işlemlerin uygulanmasında _potansiyel olarak_ yavaştır. Bu nedenle, karmaşık veya verimsiz akıllı sözleşmeler nedeniyle ağda bir yüklenme olmaması için, işlem ücretleri konuşlandırılmak istenen sözleşmelerin karmaşıklığına uygun olacaktır.

## Neden 3 Zincir?

Her zaman bir iş için en uygun aracı kullanmalısınız. Bu, Avalanche'ın uzmanlaşmış zincirlerine olan yaklaşımının tam olarak felsefesidir ve Camino aynı teknik çerçeve üzerine inşa edildiğinden, bu bize de uygundur. Bu zincirler, amacına göre tasarlanmış, optimize edilmiş ve temel olarak tamamen bağımsız sistemler olarak kabul edilir.
Başlangıçta biraz karmaşık görünebilir, ancak günün sonunda, sadece gerçekten ihtiyacınız olan zincirleri kullanırsınız.

Zincirler arasındaki tek etkileşim, CAM jetonlarının takasıdır. Varlığın veya kişinin rolü, hangi zinciri kullanması gerektiğini belirler:

- Doğrulayıcılar/Delegeler P-Zinciri ile çalışmak zorundadır.
- Uygulama geliştiriciler, gereksinimlerine bağlı olarak, birçok küçük işlem için ücretten tasarruf etmek amacıyla X-zinciri aracılığıyla entegrasyonun faydalı olup olmayacağına karar verebilir. Daha karmaşık uygulama senaryoları söz konusu olduğunda, akıllı sözleşmelerin kullanılması gerektiğinde, C-Zinciri kullanılacaktır.
- Uygulama kullanıcılarının bunu farketmemesi gerekir, çünkü uygulamalar bunu arka planda halletmelidir.

---

## Özetle:

- Herkes Camino cüzdanı kullanarak Zincirler arasında CAM aktarabilir.
- Ağ operatörleri/doğrulayıcılar ve delegasyon yapmak isteyen herkes (ayrıca) P-Zinciri'ni kullanmak zorundadır.
- Gelişmiş uygulama geliştiricileri, basit ve hızlı X-Zinciri'nin sınırlamaları ama aynı zamanda avantajları ile başa çıkmak için seçeneğe sahiptir.
- Tüm diğer işlemler, akıllı sözleşmelerin konuşlandırılması EVM uyumlu C-Zinciri üzerinde gerçekleşir.

## Sanal Makineler

Bir **Sanal Makine** (VM), bir blockchain'in uygulama seviyesi mantığını tanımlar. Teknik olarak, blockchain'in durumunu, durum geçiş işlevini, işlemleri ve kullanıcıların blockchain ile etkileşime geçebileceği API'yi belirtir. Camino'daki her blockchain, bir VM'nin bir örneğidir.

[Bir VM yazarken](./developer/guides/create-a-virtual-machine-vm.md), ağ oluşturma, konsensus ve blockchain'in yapısı gibi daha alt seviye mantıklarla ilgilenmenize gerek yoktur. Camino bu işleri sahnelerin arkasında halleder, böylece yapmak istediğiniz şeye odaklanabilirsiniz.

Bir VM'yi, bir blockchain için bir şablon gibi düşünebilirsiniz; aynı VM'yi, aynı kurallar setini takip eden ancak diğer blockchainlerden mantıklı olarak bağımsız olan birçok blockchain oluşturmak için kullanabilirsiniz.

### Neden Sanal Makineler?

Başlangıçta, blockchain ağları, önceden tanımlanmış, statik bir işlev setine sahip bir Sanal Makine (VM) ile gelirdi. Bu katı, monolitik tasarım, böyle ağlarda çalıştırabileceğiniz blockchain tabanlı uygulamaları sınırlıyordu.

Özel merkezi olmayan uygulamalar oluşturmak isteyen insanlar, tamamen yeni bir blockchain ağı oluşturmak zorundaydılar. Bunu yapmak çok zaman ve çaba gerektiriyordu, sınırlı güvenlik sunuyordu ve genellikle yerden kalkamayan özel, kırılgan bir blockchain sonuçlanıyordu.

Ethereum, akıllı sözleşmeler ile bu soruna bir adım attı. Geliştiricilerin ağ oluşturma ve konsensus konularında endişelenmesine gerek kalmadı, ancak merkezi olmayan uygulamalar oluşturmak hala zordu. Ethereum VM düşük performanslıdır ve akıllı sözleşme geliştiricilerine kısıtlamalar getirir. Ethereum akıllı sözleşmeleri için yazılan Solidity ve diğer birkaç dil, çoğu programcıya yabancıdır.

Camino VM'leri, blockchain tabanlı bir merkezi olmayan uygulamayı tanımlamanın kolay bir yolunu sağlar. Solidity gibi yeni, sınırlı diller yerine, geliştiriciler VM'leri Go dilinde (gelecekte diğer diller de desteklenecek) yazabilirler.

---


## Subnet'ler (Alt Ağlar)

Bir **subnet**, ya da alt ağ, bir dizi doğrulayıcıyı bir araya getiren dinamik bir yapıdır; bu doğrulayıcılar bir dizi blockchain'in durumu üzerinde konsensüs oluşturmak için birlikte çalışırlar. Her blockchain yalnızca bir subnet tarafından doğrulanır. Bir subnet, birçok blockchain'i doğrulayabilir. Bir düğüm, birçok subnet'in üyesi olabilir.

Alt ağ kendi üyeliğini yönetir ve bileşen doğrulayıcıların belirli özelliklere sahip olmasını gerektirebilir. Bu, çok yararlıdır ve aşağıda daha derinlemesine ele alıyoruz:

### Uyumluluk (Compliance)

Camino'nun alt ağ mimarisi, düzenleyici uyumluluğu yönetilebilir hale getirir. Yukarıda belirtildiği gibi, bir alt ağ doğrulayıcılarının bir dizi gereksinimi karşılamasını isteyebilir.

Gereksinim örnekleri şunlar olabilir:

- Doğrulayıcılar belirli bir ülkede bulunmalıdır.
- Doğrulayıcılar KYC/AML kontrolünden geçmelidir.
- Doğrulayıcılar belirli bir lisansa sahip olmalıdır.

(Açıkça belirtmek gerekirse, yukarıdaki örnekler sadece örnektir. Tüm gereksinimler Camino'nun Birincil Ağı'na uygulanmaz.)

### Özel Blockchain'ler için Destek

Yalnızca belirli önceden tanımlanmış doğrulayıcıların katılabileceği bir alt ağ oluşturabilir ve blockchain'lerin içeriklerinin sadece bu doğrulayıcılar tarafından görülebilir olduğu bir özel alt ağ oluşturabilirsiniz. Bu, bilgilerini özel tutmak isteyen organizasyonlar için idealdir.

### İlgili Alanların Ayrılması (Separation of Concerns)

Bir heterojen blockchain ağından oluşan bir ağda, bazı doğrulayıcılar belirli blockchain'leri doğrulamak istemeyebilir çünkü bu blockchain'lerle ilgilenmiyorlar. Alt ağ modeli, doğrulayıcıların yalnızca ilgilendikleri blockchain'lerle ilgilenmelerini sağlar. Bu, doğrulayıcılar üzerindeki yükü azaltır.

### Uygulama Özgü Gereksinimler

Farklı blockchain tabanlı uygulamaların doğrulayıcılarının belirli özelliklere sahip olmasını gerekebilir. Örneğin, büyük miktarda RAM veya CPU gücü gerektiren bir uygulama varsa, bir alt ağ, uygulamanın yavaş doğrulayıcılar nedeniyle düşük performans göstermemesi için doğrulayıcıların belirli donanım gereksinimlerini karşılamasını isteyebilir.

---


## Özel Alt Ağlar ve Yenilikler (Custom Subnets and Innovations)

Camino'nun dinamik alt ağ yapısı, projenin sadece genel uyumluluğu ve özel ihtiyaçları yönetmesine olanak tanımakla kalmaz, aynı zamanda hızlı ve etkili yenilikler için de bir zemin oluşturur.

Örneğin, bir finansal kuruluş kendi alt ağına sahip olabilir ve bu alt ağı, belirli düzenleyici gereksinimleri veya hızlı işlem süreleri gibi özel ihtiyaçlar için optimize edebilir. Bu sayede, finansal kuruluşlar hızlı bir şekilde yeni ürünler ve hizmetler sunabilir.

### Güvenlik ve Ölçeklenebilirlik (Security and Scalability)

Her bir alt ağın kendine ait bir set doğrulayıcıları olduğu için, Camino ağı genelinde güvenlik ve ölçeklenebilirlik sağlanır. Eğer bir alt ağda bir sorun oluşursa, bu durum diğer alt ağları etkilemez. Bu, büyük bir ölçekte çalışırken bile ağı sağlam ve güvende tutar.

### Modülerlik ve Esneklik (Modularity and Flexibility)

Alt ağların modüler yapısı, projelerin sadece mevcut yapıları kullanmalarını değil, aynı zamanda kendi özel alt ağlarını ve blockhain'lerini oluşturmalarını da sağlar. Bu, Camino'nun farklı ihtiyaçlara ve uygulamalara kolaylıkla uyum sağlamasını sağlar.

## Gelecekte Neler Var? (What's Next?)

Camino sürekli olarak gelişmektedir ve bu gelişmelerin bir parçası olarak, daha fazla dilin destekleneceği, daha yüksek performans ve düşük işlem ücretleri sunan yeni Virtual Machine'lerin (VM'ler) ve alt ağların tanıtılması planlanmaktadır.

Ayrıca, Camino'nun gelecekteki sürümleri, kullanıcı deneyimini daha da kolaylaştırmak ve daha geniş bir kullanıcı kitlesine hitap etmek için tasarlanmış olan bir dizi yeni özellik ve araç getirecek.

---


