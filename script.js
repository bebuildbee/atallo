// Allo Bank PayLater Creator Guidelines — behavior + EN/ID language toggle

const I18N = {
  'nav.rewards': { en: 'Rewards', id: 'Reward' },
  'nav.examples': { en: 'Examples', id: 'Contoh' },
  'nav.authenticity': { en: 'Authenticity', id: 'Keaslian' },
  'nav.content': { en: 'Content', id: 'Konten' },
  'nav.registration': { en: 'Registration', id: 'Registrasi' },
  'nav.creatorGuide': { en: 'Creator Guide', id: 'Panduan Kreator' },

  'hero.eyebrow': { en: 'Creator Guideline', id: 'Panduan Kreator' },
  'hero.title': { en: 'Create Better<br />PayLater Content', id: 'Buat Konten<br />PayLater Lebih Baik' },
  'hero.sub': { en: "Learn how to create authentic, engaging and high-performing Allo Bank PayLater content while earning real rewards for it.", id: 'Pelajari cara membuat konten Allo Bank PayLater yang autentik, menarik, dan berperforma tinggi — sambil mendapatkan reward nyata untuk setiap kontennya.' },
  'hero.ctaRewards': { en: 'See Your Rewards', id: 'Lihat Reward Kamu' },
  'hero.ctaPractice': { en: 'Best Practice', id: 'Praktik Terbaik' },
  'hero.statRegistration': { en: 'Registration', id: 'Registrasi' },
  'hero.statCreditLimit': { en: 'Credit Limit', id: 'Limit Kredit' },
  'hero.statPromotions': { en: 'Promotions', id: 'Promo' },

  'rewards.eyebrow': { en: "What You'll Earn", id: 'Yang Akan Kamu Dapatkan' },
  'rewards.title': { en: 'Get Paid For Every Real Referral', id: 'Dapatkan Bayaran untuk Setiap Referral Asli' },
  'rewards.intro': { en: "Both sides of the referral get rewarded — straight to their account balance, on a fixed weekly schedule.", id: 'Kedua pihak dalam referral mendapatkan reward — langsung masuk ke saldo akun, dengan jadwal mingguan yang tetap.' },
  'rewards.creatorTag': { en: 'You, the Creator', id: 'Kamu, Sang Kreator' },
  'rewards.creatorDesc': { en: 'For every referral who becomes eligible.', id: 'Untuk setiap referral yang memenuhi syarat.' },
  'rewards.userTag': { en: 'Invited Users', id: 'Pengguna Kode' },
  'rewards.userDesc': { en: 'For the friend they bring in.', id: 'Untuk teman yang mereka ajak.' },
  'rewards.condition1': { en: 'Referred user reaches a minimum credit limit of <strong>Rp1.000.000</strong>', id: 'Pengguna yang direferensikan mencapai limit kredit minimum <strong>Rp1.000.000</strong>' },
  'rewards.condition2': { en: 'Both rewards land as <strong>account balance</strong> automatically', id: 'Kedua reward otomatis masuk sebagai <strong>saldo akun</strong>' },
  'rewards.condition3': { en: 'Payouts are processed every <strong>Wednesday</strong>', id: 'Pencairan diproses setiap <strong>Rabu</strong>' },

  'videos.eyebrow': { en: 'Content Examples', id: 'Contoh Konten' },
  'videos.title': { en: 'See It In Action', id: 'Lihat Contohnya' },
  'videos.intro': { en: 'Real examples from our KOLs — this is the tone and format that performs.', id: 'Contoh nyata dari KOL kami — inilah gaya dan format yang terbukti berhasil.' },
  'videos.cat1': { en: 'Coffee', id: 'Kopi' },
  'videos.caption1': { en: 'Finding an easy 50% promo on coffee & food — and stacking a referral bonus on top.', id: 'Menemukan promo 50% yang gampang untuk kopi & makanan — sekaligus menambah bonus referral.' },
  'videos.cat2': { en: 'Dining', id: 'Makan' },
  'videos.caption2': { en: 'A simple 3-step walkthrough: download, activate PayLater, use a referral code — dining discount + bonus balance.', id: 'Panduan singkat 3 langkah: download, aktivasi PayLater, pakai kode referral — diskon makan + bonus saldo.' },

  'rule1.eyebrow': { en: 'Rule 01', id: 'Aturan 01' },
  'rule1.title': { en: 'Authenticity Comes First', id: 'Keaslian Adalah Prioritas Utama' },
  'rule1.intro': { en: 'Audiences respond best to genuine experiences. Demonstrate how Allo Bank PayLater fits naturally into your own lifestyle instead of creating content that feels scripted or overly promotional.', id: 'Audiens merespons paling baik terhadap pengalaman yang nyata. Tunjukkan bagaimana Allo Bank PayLater cocok secara alami dengan gaya hidupmu, bukan konten yang terasa dibuat-buat atau terlalu promosi.' },
  'rule1.item1': { en: '<strong>Show Real Experiences</strong> — Share authentic moments instead of staged product demonstrations.', id: '<strong>Tunjukkan Pengalaman Nyata</strong> — Bagikan momen autentik, bukan demo produk yang terasa dibuat-buat.' },
  'rule1.item2': { en: '<strong>Explain the Benefits</strong> — Focus on how PayLater helps users, not simply what it offers.', id: '<strong>Jelaskan Manfaatnya</strong> — Fokus pada bagaimana PayLater membantu pengguna, bukan sekadar fiturnya.' },
  'rule1.item3': { en: '<strong>Be Honest</strong> — Present information accurately and avoid exaggerated promises.', id: '<strong>Jujur</strong> — Sampaikan informasi secara akurat dan hindari janji yang berlebihan.' },

  'rule2.eyebrow': { en: 'Lifestyle Content', id: 'Konten Gaya Hidup' },
  'rule2.title': { en: 'Showcase Everyday Spending Moments', id: 'Tunjukkan Momen Belanja Sehari-hari' },
  'rule2.intro': { en: 'Position Allo Bank PayLater as part of daily life. Highlight relatable situations where flexible payments, promotions, and cashback naturally create value.', id: 'Posisikan Allo Bank PayLater sebagai bagian dari kehidupan sehari-hari. Tonjolkan situasi yang relatable di mana pembayaran fleksibel, promo, dan cashback menciptakan nilai secara alami.' },

  'cat.diningTitle': { en: 'Dining', id: 'Makan' },
  'cat.diningDesc': { en: 'Restaurants, cafés, family meals, food delivery and weekend hangouts.', id: 'Restoran, kafe, makan bersama keluarga, food delivery, dan hangout akhir pekan.' },
  'cat.coffeeTitle': { en: 'Coffee', id: 'Kopi' },
  'cat.coffeeDesc': { en: 'Daily coffee routines, meetings, remote work and lifestyle moments.', id: 'Rutinitas ngopi harian, meeting, kerja remote, dan momen gaya hidup.' },
  'cat.shoppingTitle': { en: 'Shopping', id: 'Belanja' },
  'cat.shoppingDesc': { en: 'Fashion, gadgets, beauty, groceries and retail experiences.', id: 'Fashion, gadget, kecantikan, kebutuhan sehari-hari, dan pengalaman belanja.' },
  'cat.travelTitle': { en: 'Travel', id: 'Travel' },
  'cat.travelDesc': { en: 'Flights, hotels, vacations, commuting and spontaneous trips.', id: 'Penerbangan, hotel, liburan, commuting, dan perjalanan dadakan.' },
  'cat.entertainmentTitle': { en: 'Entertainment', id: 'Hiburan' },
  'cat.entertainmentDesc': { en: 'Movies, concerts, streaming, gaming and leisure activities.', id: 'Film, konser, streaming, gaming, dan aktivitas hiburan lainnya.' },
  'cat.fashionTitle': { en: 'Fashion', id: 'Fashion' },
  'cat.fashionDesc': { en: 'Apparel, accessories, footwear and seasonal collections.', id: 'Pakaian, aksesori, alas kaki, dan koleksi musiman.' },

  'approach.eyebrow': { en: 'Recommended Approach', id: 'Pendekatan yang Disarankan' },
  'approach.title': { en: 'Build Stories Around Real Lifestyle Moments', id: 'Bangun Cerita di Sekitar Momen Gaya Hidup Nyata' },
  'approach.desc': { en: 'Instead of listing features, create content where PayLater naturally solves everyday situations, helping viewers imagine themselves using it.', id: 'Alih-alih mendaftar fitur, buat konten di mana PayLater secara alami menyelesaikan situasi sehari-hari, membantu penonton membayangkan diri mereka menggunakannya.' },

  'opp.eyebrow': { en: 'Creator Opportunities', id: 'Peluang untuk Kreator' },
  'opp.title': { en: 'Turn Everyday Moments Into High-Performing Content', id: 'Ubah Momen Sehari-hari Jadi Konten Berperforma Tinggi' },
  'opp.intro': { en: 'Combine merchant promotions, cashback, flexible installments and lifestyle storytelling to create engaging creator content that feels natural while delivering value.', id: 'Gabungkan promo merchant, cashback, cicilan fleksibel, dan storytelling gaya hidup untuk membuat konten kreator yang menarik, terasa alami, dan tetap memberi nilai.' },
  'opp.featuredEyebrow': { en: 'Featured Campaign', id: 'Kampanye Unggulan' },
  'opp.featuredTitle': { en: 'Cashback, Rewards &amp; Merchant Promotions', id: 'Cashback, Reward &amp; Promo Merchant' },
  'opp.featuredDesc': { en: 'Mix promotions with authentic storytelling instead of focusing only on discounts. Viewers remember experiences, not advertisements.', id: 'Padukan promo dengan storytelling yang autentik, jangan hanya fokus pada diskon. Penonton mengingat pengalaman, bukan iklan.' },
  'opp.featuredCta': { en: 'Start Creating', id: 'Mulai Membuat Konten' },
  'opp.b1Title': { en: 'Flexible Credit', id: 'Kredit Fleksibel' },
  'opp.b1Desc': { en: 'Show audiences how PayLater helps spread payments comfortably.', id: 'Tunjukkan bagaimana PayLater membantu mencicil pembayaran dengan nyaman.' },
  'opp.b2Title': { en: 'Cashback Rewards', id: 'Reward Cashback' },
  'opp.b2Desc': { en: 'Highlight cashback benefits through genuine purchase experiences.', id: 'Tonjolkan manfaat cashback lewat pengalaman belanja yang nyata.' },
  'opp.b3Title': { en: 'Merchant Promotions', id: 'Promo Merchant' },
  'opp.b3Desc': { en: 'Feature real merchant offers that match your audience.', id: 'Tampilkan promo merchant nyata yang sesuai dengan audiensmu.' },

  'journey.eyebrow': { en: 'Referral Code Usage', id: 'Penggunaan Kode Referral' },
  'journey.title': { en: 'How Your Code Will Be Used in 3 Simple Steps', id: 'Bagaimana Kode Kamu Digunakan dalam 3 Langkah Mudah' },
  'journey.intro': { en: "Becoming an Allo Bank user only takes a few minutes. After installing, they'll complete the Allo Bank PayLater registration — and both of you become eligible for rewards once their credit limit clears <strong>Rp1.000.000</strong>.", id: 'Menjadi pengguna Allo Bank hanya butuh beberapa menit. Setelah instal, mereka akan menyelesaikan registrasi Allo Bank PayLater — dan kalian berdua berhak atas reward setelah limit kreditnya mencapai <strong>Rp1.000.000</strong>.' },
  'journey.step1Title': { en: 'Download Allo Bank', id: 'Download Allo Bank' },
  'journey.step1Desc': { en: 'User opens Allo Bank, goes to the Allo Bank PayLater page.', id: 'Pengguna membuka Allo Bank, lalu masuk ke halaman Allo Bank PayLater.' },
  'journey.step2Title': { en: 'Go To PayLater Page', id: 'Buka Halaman PayLater' },
  'journey.step2Desc': { en: "They'll go to the referral section in the page.", id: 'Mereka akan menuju bagian referral di halaman tersebut.' },
  'journey.step3Title': { en: 'Use Your Referral Code', id: 'Gunakan Kode Referralmu' },
  'journey.step3Desc': { en: "During registration, they'll add your referral code to the field.", id: 'Saat registrasi, mereka akan memasukkan kode referralmu ke kolom yang tersedia.' },
  'journey.cta': { en: 'Join as Allo Bank Creator', id: 'Gabung Jadi Kreator Allo Bank' },

  'bonus.eyebrow': { en: 'New User Bonus', id: 'Bonus Pengguna Baru' },
  'bonus.title': { en: 'Start Using Allo Bank and Enjoy Our Promo!', id: 'Mulai Gunakan Allo Bank dan Nikmati Promo Kami!' },
  'bonus.intro': { en: 'Register your Allo Bank account, activate PayLater, complete your first eligible transaction and enjoy exclusive cashback, rewards and special merchant promotions.', id: 'Daftarkan akun Allo Bank kamu, aktivasi PayLater, selesaikan transaksi pertama yang memenuhi syarat, dan nikmati cashback eksklusif, reward, serta promo merchant spesial.' },
  'bonus.tag1': { en: 'Cashback Rewards', id: 'Reward Cashback' },
  'bonus.tag2': { en: 'Flexible Installments', id: 'Cicilan Fleksibel' },
  'bonus.tag3': { en: 'Exclusive Merchant Promotions', id: 'Promo Merchant Eksklusif' },
  'bonus.tag4': { en: 'Instant Digital Registration', id: 'Registrasi Digital Instan' },
  'bonus.cta': { en: 'Our Promotions', id: 'Promo Kami' },

  'final.eyebrow': { en: 'Ready to Start?', id: 'Siap Memulai?' },
  'final.title': { en: 'Create Better Content. Earn More Rewards.', id: 'Buat Konten Lebih Baik. Dapatkan Lebih Banyak Reward.' },
  'final.desc': { en: 'Follow the creator guidelines, register for Allo Bank PayLater, and start creating authentic content that audiences trust.', id: 'Ikuti panduan kreator, daftar Allo Bank PayLater, dan mulai buat konten autentik yang dipercaya audiens.' },
  'final.cta': { en: 'Start Registration', id: 'Mulai Registrasi' },

  'footer.tagline': { en: 'Official creator guideline for Allo Bank PayLater.', id: 'Panduan resmi kreator untuk Allo Bank PayLater.' },
  'footer.copyright': { en: '© 2026 Allo Bank. All Rights Reserved.', id: '© 2026 Allo Bank. Hak Cipta Dilindungi.' },
  'footer.privacy': { en: 'Privacy', id: 'Privasi' },
  'footer.terms': { en: 'Terms', id: 'Syarat & Ketentuan' },
  'footer.registration': { en: 'Registration', id: 'Registrasi' },

  // ---- Promotions page ----
  'promo.eyebrow': { en: 'List of Promo Available', id: 'Daftar Promo Tersedia' },
  'promo.title': { en: 'More Promos, More Perks with Allo Bank PayLater', id: 'Lebih Banyak Promo, Lebih Banyak Keuntungan dengan Allo Bank PayLater' },
  'promo.intro': { en: 'More promos, more perks with Allo Bank PayLater — updated as of 22 July 2026.', id: 'Lebih banyak promo, lebih banyak keuntungan bareng Allo Bank PayLater — diperbarui per 22 Juli 2026.' },
  'promo.link': { en: 'View Promo →', id: 'Lihat Promo →' },

  'promo.c1.badge': { en: 'Up to 50%', id: 'Hingga 50%' },
  'promo.c1.title': { en: '50% Off Special for Allo Friends', id: 'Diskon Up to 50% Spesial Allo Friends' },
  'promo.c1.date': { en: '6 April – 31 December 2026', id: '6 April – 31 Desember 2026' },
  'promo.c1.desc': { en: 'Special for Allo Friends — shopping, snacking, everyday needs or vacations get up to 50% off with Allo PayLater at CT Corp merchants. Check the promo page for details.', id: 'Spesial Allo Friends, belanja, jajan, penuhi kebutuhan sehari-hari atau pergi liburan ada diskon Allo PayLater up to 50% di merchant CT Corp. Untuk info lebih lanjut cek promonya.' },

  'promo.c2.title': { en: 'Allo Bank PayLater: Get Rp100,000 Balance', id: 'Allo Bank PayLater: Dapat Saldo Rp100.000' },
  'promo.c2.date': { en: '17 July – 31 August 2026', id: '17 Juli – 31 Agustus 2026' },
  'promo.c2.desc': { en: 'Sign up for Allo Bank PayLater via the link, referral code or QR code shared on social media (Instagram, TikTok & YouTube). Get Rp100,000 balance once your credit limit reaches a minimum of Rp1,000,000.', id: 'Daftar Allo Bank PayLater melalui link, referral code, atau QR code yang ada di media sosial (Instagram, TikTok & YouTube). Dapatkan saldo Rp100.000 untuk user yang berhasil aktivasi dengan limit min. Rp1.000.000.' },

  'promo.c3.badge': { en: '20% Off', id: 'Diskon 20%' },
  'promo.c3.title': { en: 'Affordable Staycation at Trans Hotel Jakarta', id: 'Staycation Hemat di Trans Hotel Jakarta' },
  'promo.c3.date': { en: '21 June – 31 August 2026', id: '21 Juni – 31 Agustus 2026' },
  'promo.c3.desc': { en: 'Exclusively for Allo Friends — staycation at Trans Hotel Jakarta comes with 20% off when paying with Allo Bank PayLater.', id: 'Cuma buat Allo Friends, staycation di Trans Hotel Jakarta ada diskon 20% untuk pembayaran dengan Allo Bank PayLater.' },

  'promo.c4.badge': { en: '20% Off', id: 'Diskon 20%' },
  'promo.c4.title': { en: 'Events at The Trans Luxury Hotel', id: 'Event di The Trans Luxury Hotel' },
  'promo.c4.date': { en: '21 June – 31 August 2026', id: '21 Juni – 31 Agustus 2026' },
  'promo.c4.desc': { en: 'Plan, book and pay for your event using Allo Bank PayLater. Get 20% off for your event.', id: 'Rencanakan, pesan & bayar berbagai event pakai Allo Bank PayLater. Dapatkan diskon 20% untuk acaramu.' },

  'promo.c5.badge': { en: '0% Interest', id: '0% Bunga' },
  'promo.c5.title': { en: '0% Interest Coupon for Dana Instan', id: 'Kupon Bunga 0% Dana Instan' },
  'promo.c5.date': { en: '4 June – 30 November 2026', id: '4 Juni – 30 November 2026' },
  'promo.c5.desc': { en: 'Activate Allo PayLater & get a 0% interest coupon for Dana Instan withdrawals up to Rp1 million.', id: 'Aktifkan Allo PayLater & dapatkan kupon bunga 0% untuk pencairan Dana Instan hingga Rp1 juta.' },

  'promo.c6.badge': { en: 'Up to 25% Off', id: 'Diskon s.d 25%' },
  'promo.c6.title': { en: 'AlloFresh: Sign Up for PayLater, Get a Coupon', id: 'AlloFresh: Daftar PayLater Ada Kupon Diskon' },
  'promo.c6.date': { en: '1 July – 30 September 2026', id: '1 Juli – 30 September 2026' },
  'promo.c6.desc': { en: 'Shop at AlloFresh and sign up for Allo PayLater at the same time — get up to 25% off for yourself.', id: 'Belanja di AlloFresh sekalian daftar Allo PayLater, dapatkan diskon s.d 25% untukmu.' },

  'promo.c7.badge': { en: 'Up to 30% Off', id: 'Diskon s.d 30%' },
  'promo.c7.title': { en: 'AlloFood: Discounts at Mall TSM', id: 'AlloFood: Diskon di Mall TSM' },
  'promo.c7.date': { en: '13 May – 31 October 2026', id: '13 Mei – 31 Oktober 2026' },
  'promo.c7.desc': { en: 'Pick your favorite food, pay with Allo Bank PayLater, and get up to 30% off on your transaction at Mall TSM.', id: 'Pilih makanan favorit, bayar pakai Allo Bank PayLater, dapatkan diskon s.d 30% untuk transaksimu di Mall TSM.' },

  'promo.c8.badge': { en: '50% Off', id: 'Diskon 50%' },
  'promo.c8.title': { en: 'AlloFood: Trans Icon, Trans Studio Bali &amp; Transmart', id: 'AlloFood: Trans Icon, Trans Studio Bali &amp; Transmart' },
  'promo.c8.date': { en: '13 May – 31 October 2026', id: '13 Mei – 31 Oktober 2026' },
  'promo.c8.desc': { en: 'Pick your favorite food, pay with Allo Bank PayLater, and get 50% off at Mall Trans Icon Surabaya, Trans Studio Mall Bali and Transmart.', id: 'Pilih makanan favorit, bayar pakai Allo Bank PayLater, dapatkan diskon 50% untuk transaksimu di Mall Trans Icon Surabaya, Trans Studio Mall Bali, Transmart.' },

  'promo.c9.badge': { en: 'Up to 50% Off', id: 'Diskon s.d 50%' },
  'promo.c9.title': { en: 'AlloFood x Boga Group at TSM', id: 'AlloFood x Boga Group di TSM' },
  'promo.c9.date': { en: '22 June – 31 October 2026', id: '22 Juni – 31 Oktober 2026' },
  'promo.c9.desc': { en: 'Enjoy up to 50% off at selected Boga Group restaurants with QRIS Allo PayLater.', id: 'Nikmati diskon hingga 50% di restoran pilihan Boga Group dengan QRIS Allo PayLater.' },

  'promo.c10.badge': { en: 'Up to 50% Off', id: 'Diskon s.d 50%' },
  'promo.c10.title': { en: 'AlloFood x Eatwell Culinary at TSM', id: 'AlloFood x Eatwell Culinary di TSM' },
  'promo.c10.date': { en: '1 July – 31 October 2026', id: '1 Juli – 31 Oktober 2026' },
  'promo.c10.desc': { en: 'Enjoy up to 50% off at selected Eatwell Culinary restaurants with QRIS Allo PayLater.', id: 'Nikmati diskon hingga 50% di restoran pilihan Eatwell Culinary dengan QRIS Allo PayLater.' },

  'promo.c11.title': { en: 'Indomaret Point Coffee: Voucher &amp; Coupon', id: 'Indomaret Point Coffee: Voucher &amp; Kupon Diskon' },
  'promo.c11.date': { en: '13 July – 13 August 2026', id: '13 Juli – 13 Agustus 2026' },
  'promo.c11.desc': { en: 'Sign up for Allo PayLater through Indomaret Point Coffee, activate it, & get a coffee voucher and discount coupon for your transactions.', id: 'Daftar Allo PayLater melalui Indomaret Point Coffee, aktivasi, & dapatkan voucher kopi dan kupon diskon untuk transaksimu.' },

  'promo.c12.badge': { en: 'No Admin Fee', id: 'Bebas Admin' },
  'promo.c12.title': { en: 'PLN: No Admin Fee', id: 'PLN: Bebas Biaya Admin' },
  'promo.c12.date': { en: '1 May – 31 July 2026', id: '1 Mei – 31 Juli 2026' },
  'promo.c12.desc': { en: 'No admin fee for electricity bill payments on PLN Mobile, exclusively for Allo Prime & Allo PayLater transactions.', id: 'Bebas biaya admin untuk pembayaran tagihan listrik di PLN Mobile khusus transaksi Allo Prime & Allo PayLater.' },

  'promo.c13.title': { en: 'PLN: 5% Cashback', id: 'PLN: Cashback 5%' },
  'promo.c13.date': { en: '20 July – 31 December 2026', id: '20 Juli – 31 Desember 2026' },
  'promo.c13.desc': { en: 'Pay your PLN bill and get 5% cashback with Allo Bank PayLater.', id: 'Bayar tagihan PLN dan dapatkan cashback 5% dengan Allo Bank PayLater.' },

  'promo.c14.title': { en: 'TIX ID: Pay with QRIS', id: 'TIX ID: Bayar Pakai QRIS' },
  'promo.c14.date': { en: '1 May – 31 July 2026', id: '1 Mei – 31 Juli 2026' },
  'promo.c14.desc': { en: 'Watch movies, shop or subscribe on TIX ID using Allo Prime and get Rp4,000 cashback balance.', id: 'Nonton, jajan, atau langganan di TIX ID pakai Allo Prime, ada cashback saldo Rp4.000 yang bisa kamu dapatkan.' },

  'promo.bannerEyebrow': { en: 'More Exciting Promos Coming Soon!', id: 'Promo Menarik Lainnya Akan Terus Hadir!' },
  'promo.bannerText': { en: 'Check regularly in the Allo Bank app or visit <a href="https://www.allobank.com/promo" target="_blank" rel="noopener" class="inline-link">allobank.com/promo</a>.', id: 'Cek secara rutin di aplikasi Allo Bank atau kunjungi <a href="https://www.allobank.com/promo" target="_blank" rel="noopener" class="inline-link">allobank.com/promo</a>.' },
  'promo.bannerCta': { en: 'Back to Creator Guide', id: 'Kembali ke Panduan Kreator' },
};

const LANG_KEY = 'atallo-lang';

function getLang() {
  const stored = localStorage.getItem(LANG_KEY);
  return stored === 'id' ? 'id' : 'en';
}

function applyLang(lang) {
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const entry = I18N[el.getAttribute('data-i18n')];
    if (entry) el.textContent = entry[lang] || entry.en;
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const entry = I18N[el.getAttribute('data-i18n-html')];
    if (entry) el.innerHTML = entry[lang] || entry.en;
  });

  // Privacy / Terms links follow the same language as the site, per Allo Bank's own
  // EN/ID support on those pages. Assumes a ?lang= query param — confirm against the
  // live allobank.com pages and adjust the param name here if it differs.
  document.querySelectorAll('[data-legal-link]').forEach((a) => {
    const base = a.getAttribute('data-base-href');
    if (base) a.href = `${base}?lang=${lang}`;
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
  });
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  applyLang(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  applyLang(getLang());

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
  });

  // Highlight the current section's nav link while scrolling
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const setActive = (id) => {
    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
    });
  };

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
  }

  // Gentle fade-up reveal for content blocks, respecting reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealTargets = document.querySelectorAll(
      '.reward-card, .video-card, .category-tile, .benefit-card, .step, .promo-card'
    );
    revealTargets.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealTargets.forEach((el) => revealObserver.observe(el));
  }
});
