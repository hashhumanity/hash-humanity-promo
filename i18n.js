/* ============================================================================
 * Hash Humanity — i18n
 * Shared across index.html (home), mission.html, join.html
 * Languages match the app's existing 8: en, de, fr, es, pt, zh, ko, ms
 * ============================================================================ */

(function () {
  "use strict";

  var LANGS = [
    { code: "en", native: "English" },
    { code: "de", native: "Deutsch" },
    { code: "fr", native: "Français" },
    { code: "es", native: "Español" },
    { code: "pt", native: "Português" },
    { code: "zh", native: "中文" },
    { code: "ko", native: "한국어" },
    { code: "ms", native: "Bahasa Melayu" }
  ];

  var STRINGS = {

    /* ============================== HOME ============================== */
    home: {
      en: {
        nav_learn: "Learn more", nav_join: "Join",
        eyebrow: "Human-verified · World ID only",
        h1: "You are the proof,<br/><em>not the product.</em>",
        lead: "Hash Humanity is a human-only network with World ID at the gate. Bots out, real people in. Pulse tipping is built in, and <strong>Humanity Chat</strong> lets verified humans meet in live voice rooms.",
        member_lbl: "members &amp; counting",
        subline: "No ads · No trackers · No bot swarms",
        launch: "Launch now",
        sec_kicker: "What you get",
        sec_h2: "Built for humans, <em>only humans</em>.",
        card1_h3: "World ID-gated network",
        card1_p: "Every account is human-verified. No bot farms, no burner spam. Your feed is humans — full stop.",
        card2_h3: "Humanity Chat voice rooms",
        card2_p: "Jump into live voice rooms with verified humans. Create rooms, join conversations, and keep it real.",
        card3_h3: "Pulse tipping in WLD",
        card3_p: "Tip creators via World App. Deep-links on mobile, WalletConnect on desktop. Support what moves you.",
        card4_h3: "Privacy-first by design",
        card4_p: "Hash Humanity does not collect your biometric data. World ID verification happens through World App.",
        cta_h2: "Join in <em>10 seconds</em>.",
        cta_p: "Point your camera, open <strong>hashhumanity.world</strong>, and verify with World ID. Then jump into the feed or enter <strong>Humanity Chat</strong> voice rooms.",
        fineprint: "Hash Humanity does not store biometric data. Verification is handled by World ID via World App.",
        footer_tag: "You are the proof, not the product.",
        audio_start: "Turn on sound", audio_on: "Sound: on", audio_off: "Sound: off"
      },
      de: {
        nav_learn: "Mehr erfahren", nav_join: "Beitreten",
        eyebrow: "Menschlich verifiziert · Nur World ID",
        h1: "Du bist der Beweis,<br/><em>nicht das Produkt.</em>",
        lead: "Hash Humanity ist ein Netzwerk nur für Menschen, mit World ID als Eingangstür. Bots draußen, echte Menschen drinnen. Pulse-Trinkgeld ist eingebaut, und <strong>Humanity Chat</strong> lässt verifizierte Menschen in Live-Sprachräumen zusammenkommen.",
        member_lbl: "Mitglieder &amp; wachsend",
        subline: "Keine Werbung · Keine Tracker · Keine Bot-Schwärme",
        launch: "Jetzt starten",
        sec_kicker: "Das bekommst du",
        sec_h2: "Gemacht für Menschen, <em>nur Menschen</em>.",
        card1_h3: "Netzwerk mit World-ID-Zugang",
        card1_p: "Jedes Konto ist menschlich verifiziert. Keine Bot-Farmen, kein Wegwerf-Spam. Dein Feed besteht aus Menschen — Punkt.",
        card2_h3: "Humanity-Chat-Sprachräume",
        card2_p: "Steig in Live-Sprachräume mit verifizierten Menschen ein. Räume erstellen, Gesprächen beitreten, echt bleiben.",
        card3_h3: "Pulse-Trinkgeld in WLD",
        card3_p: "Unterstütze Creator über die World App. Deep-Links auf dem Handy, WalletConnect am Desktop. Zeig, was dich bewegt.",
        card4_h3: "Datenschutz von Anfang an",
        card4_p: "Hash Humanity erfasst keine biometrischen Daten. Die World-ID-Verifizierung läuft über die World App.",
        cta_h2: "Beitreten in <em>10 Sekunden</em>.",
        cta_p: "Kamera drauf, <strong>hashhumanity.world</strong> öffnen und mit World ID verifizieren. Dann ab in den Feed oder in die <strong>Humanity-Chat</strong>-Sprachräume.",
        fineprint: "Hash Humanity speichert keine biometrischen Daten. Die Verifizierung erfolgt über World ID in der World App.",
        footer_tag: "Du bist der Beweis, nicht das Produkt.",
        audio_start: "Ton einschalten", audio_on: "Ton: an", audio_off: "Ton: aus"
      },
      fr: {
        nav_learn: "En savoir plus", nav_join: "Rejoindre",
        eyebrow: "Humains vérifiés · World ID uniquement",
        h1: "Vous êtes la preuve,<br/><em>pas le produit.</em>",
        lead: "Hash Humanity est un réseau réservé aux humains, avec World ID comme porte d'entrée. Les bots dehors, les vraies personnes dedans. Les pourboires Pulse sont intégrés, et <strong>Humanity Chat</strong> permet aux humains vérifiés de se retrouver dans des salons vocaux en direct.",
        member_lbl: "membres &amp; ça grimpe",
        subline: "Pas de pub · Pas de traqueurs · Pas d'essaims de bots",
        launch: "Lancer maintenant",
        sec_kicker: "Ce que vous obtenez",
        sec_h2: "Conçu pour les humains, <em>rien que les humains</em>.",
        card1_h3: "Réseau verrouillé par World ID",
        card1_p: "Chaque compte est vérifié humain. Pas de fermes de bots, pas de spam jetable. Votre fil, ce sont des humains — un point c'est tout.",
        card2_h3: "Salons vocaux Humanity Chat",
        card2_p: "Rejoignez des salons vocaux en direct avec des humains vérifiés. Créez des salons, participez aux conversations, restez vrai.",
        card3_h3: "Pourboires Pulse en WLD",
        card3_p: "Soutenez les créateurs via World App. Liens directs sur mobile, WalletConnect sur ordinateur. Soutenez ce qui vous touche.",
        card4_h3: "Confidentialité dès la conception",
        card4_p: "Hash Humanity ne collecte pas vos données biométriques. La vérification World ID se fait via World App.",
        cta_h2: "Rejoignez en <em>10 secondes</em>.",
        cta_p: "Pointez votre caméra, ouvrez <strong>hashhumanity.world</strong>, et vérifiez-vous avec World ID. Puis direction le fil d'actualité ou les salons vocaux <strong>Humanity Chat</strong>.",
        fineprint: "Hash Humanity ne stocke aucune donnée biométrique. La vérification est gérée par World ID via World App.",
        footer_tag: "Vous êtes la preuve, pas le produit.",
        audio_start: "Activer le son", audio_on: "Son : activé", audio_off: "Son : désactivé"
      },
      es: {
        nav_learn: "Saber más", nav_join: "Unirse",
        eyebrow: "Verificado como humano · Solo World ID",
        h1: "Tú eres la prueba,<br/><em>no el producto.</em>",
        lead: "Hash Humanity es una red solo para humanos, con World ID en la puerta. Los bots fuera, las personas reales dentro. Las propinas Pulse vienen integradas, y <strong>Humanity Chat</strong> permite a los humanos verificados reunirse en salas de voz en vivo.",
        member_lbl: "miembros &amp; sumando",
        subline: "Sin anuncios · Sin rastreadores · Sin ejércitos de bots",
        launch: "Entrar ahora",
        sec_kicker: "Lo que obtienes",
        sec_h2: "Hecho para humanos, <em>solo humanos</em>.",
        card1_h3: "Red con acceso por World ID",
        card1_p: "Cada cuenta está verificada como humana. Sin granjas de bots, sin spam desechable. Tu feed son personas — punto.",
        card2_h3: "Salas de voz de Humanity Chat",
        card2_p: "Entra en salas de voz en vivo con humanos verificados. Crea salas, únete a conversaciones y mantente real.",
        card3_h3: "Propinas Pulse en WLD",
        card3_p: "Apoya a creadores a través de World App. Enlaces directos en móvil, WalletConnect en escritorio. Apoya lo que te mueve.",
        card4_h3: "Privacidad desde el diseño",
        card4_p: "Hash Humanity no recopila tus datos biométricos. La verificación de World ID ocurre a través de World App.",
        cta_h2: "Únete en <em>10 segundos</em>.",
        cta_p: "Apunta tu cámara, abre <strong>hashhumanity.world</strong> y verifícate con World ID. Luego entra al feed o a las salas de voz de <strong>Humanity Chat</strong>.",
        fineprint: "Hash Humanity no almacena datos biométricos. La verificación la gestiona World ID a través de World App.",
        footer_tag: "Tú eres la prueba, no el producto.",
        audio_start: "Activar sonido", audio_on: "Sonido: activado", audio_off: "Sonido: desactivado"
      },
      pt: {
        nav_learn: "Saiba mais", nav_join: "Participar",
        eyebrow: "Verificado como humano · Só World ID",
        h1: "Você é a prova,<br/><em>não o produto.</em>",
        lead: "Hash Humanity é uma rede só para humanos, com World ID na porta. Bots fora, pessoas reais dentro. As gorjetas Pulse já vêm integradas, e o <strong>Humanity Chat</strong> permite que humanos verificados se encontrem em salas de voz ao vivo.",
        member_lbl: "membros &amp; contando",
        subline: "Sem anúncios · Sem rastreadores · Sem enxames de bots",
        launch: "Entrar agora",
        sec_kicker: "O que você ganha",
        sec_h2: "Feito para humanos, <em>só humanos</em>.",
        card1_h3: "Rede com acesso via World ID",
        card1_p: "Toda conta é verificada como humana. Sem fazendas de bots, sem spam descartável. Seu feed é gente de verdade — ponto final.",
        card2_h3: "Salas de voz do Humanity Chat",
        card2_p: "Entre em salas de voz ao vivo com humanos verificados. Crie salas, participe de conversas e seja você mesmo.",
        card3_h3: "Gorjetas Pulse em WLD",
        card3_p: "Apoie criadores pelo World App. Links diretos no celular, WalletConnect no computador. Apoie o que te move.",
        card4_h3: "Privacidade desde o início",
        card4_p: "A Hash Humanity não coleta seus dados biométricos. A verificação World ID acontece pelo World App.",
        cta_h2: "Entre em <em>10 segundos</em>.",
        cta_p: "Aponte a câmera, abra <strong>hashhumanity.world</strong> e verifique-se com World ID. Depois é só entrar no feed ou nas salas de voz do <strong>Humanity Chat</strong>.",
        fineprint: "A Hash Humanity não armazena dados biométricos. A verificação é feita pelo World ID através do World App.",
        footer_tag: "Você é a prova, não o produto.",
        audio_start: "Ativar som", audio_on: "Som: ativado", audio_off: "Som: desativado"
      },
      zh: {
        nav_learn: "了解更多", nav_join: "加入",
        eyebrow: "真人验证 · 仅限 World ID",
        h1: "你就是证明,<br/><em>而非产品。</em>",
        lead: "Hash Humanity 是一个只属于真人的网络，World ID 是唯一的入口。机器人止步，真实的人进来。内置 Pulse 打赏功能，<strong>Humanity Chat</strong> 让通过验证的用户在实时语音房间相聚。",
        member_lbl: "位成员 &amp; 持续增长",
        subline: "无广告 · 无追踪 · 无机器人大军",
        launch: "立即体验",
        sec_kicker: "你将获得",
        sec_h2: "为人类打造，<em>只为人类</em>。",
        card1_h3: "World ID 把关的网络",
        card1_p: "每个账号都经过真人验证。没有机器人农场，没有一次性垃圾账号。你的信息流里全是真人——就是这么简单。",
        card2_h3: "Humanity Chat 语音房间",
        card2_p: "加入通过验证用户的实时语音房间。创建房间、参与对话，保持真实。",
        card3_h3: "WLD Pulse 打赏",
        card3_p: "通过 World App 打赏创作者。手机端直达链接，桌面端支持 WalletConnect。支持你所在意的一切。",
        card4_h3: "隐私优先的设计",
        card4_p: "Hash Humanity 不会收集你的生物特征数据。World ID 验证通过 World App 完成。",
        cta_h2: "<em>10 秒</em>即可加入。",
        cta_p: "打开摄像头，访问 <strong>hashhumanity.world</strong>，用 World ID 完成验证。然后就可以进入信息流，或加入 <strong>Humanity Chat</strong> 语音房间。",
        fineprint: "Hash Humanity 不存储生物特征数据。验证由 World ID 通过 World App 完成。",
        footer_tag: "你就是证明，而非产品。",
        audio_start: "开启声音", audio_on: "声音：开", audio_off: "声音：关"
      },
      ko: {
        nav_learn: "자세히 보기", nav_join: "가입하기",
        eyebrow: "휴먼 인증 · World ID 전용",
        h1: "당신이 증거입니다,<br/><em>상품이 아니라.</em>",
        lead: "Hash Humanity는 World ID가 문을 지키는, 오직 사람만을 위한 네트워크입니다. 봇은 밖으로, 진짜 사람은 안으로. Pulse 팁 기능이 기본 탑재되어 있고, <strong>Humanity Chat</strong>을 통해 인증된 사람들이 실시간 음성 룸에서 만날 수 있습니다.",
        member_lbl: "명의 멤버 &amp; 계속 증가 중",
        subline: "광고 없음 · 추적 없음 · 봇 무리 없음",
        launch: "지금 시작하기",
        sec_kicker: "당신이 얻는 것",
        sec_h2: "사람을 위해, <em>오직 사람만을 위해</em> 만들었습니다.",
        card1_h3: "World ID로 문을 지키는 네트워크",
        card1_p: "모든 계정은 휴먼 인증을 거칩니다. 봇 농장도, 일회용 스팸도 없습니다. 당신의 피드는 진짜 사람들뿐입니다 — 이게 전부입니다.",
        card2_h3: "Humanity Chat 음성 룸",
        card2_p: "인증된 사람들과 실시간 음성 룸에 참여하세요. 룸을 만들고, 대화에 참여하고, 진짜 나답게 있어보세요.",
        card3_h3: "WLD 기반 Pulse 팁",
        card3_p: "World App을 통해 크리에이터에게 팁을 보내세요. 모바일에서는 딥링크로, 데스크톱에서는 WalletConnect로. 마음이 움직이는 곳을 응원하세요.",
        card4_h3: "설계부터 프라이버시 우선",
        card4_p: "Hash Humanity는 생체 데이터를 수집하지 않습니다. World ID 인증은 World App을 통해 이루어집니다.",
        cta_h2: "<em>10초</em>면 가입 완료.",
        cta_p: "카메라를 켜고 <strong>hashhumanity.world</strong>에 접속해 World ID로 인증하세요. 그런 다음 피드로, 또는 <strong>Humanity Chat</strong> 음성 룸으로 들어가세요.",
        fineprint: "Hash Humanity는 생체 데이터를 저장하지 않습니다. 인증은 World App을 통한 World ID로 처리됩니다.",
        footer_tag: "당신이 증거입니다, 상품이 아니라.",
        audio_start: "소리 켜기", audio_on: "소리: 켜짐", audio_off: "소리: 꺼짐"
      },
      ms: {
        nav_learn: "Ketahui lebih lanjut", nav_join: "Sertai",
        eyebrow: "Disahkan sebagai manusia · World ID sahaja",
        h1: "Anda adalah buktinya,<br/><em>bukan produknya.</em>",
        lead: "Hash Humanity ialah rangkaian khas untuk manusia sahaja, dengan World ID sebagai pintu masuk. Bot keluar, orang sebenar masuk. Tip Pulse sudah terbina dalam, dan <strong>Humanity Chat</strong> membolehkan manusia yang disahkan bertemu dalam bilik suara langsung.",
        member_lbl: "ahli &amp; terus bertambah",
        subline: "Tiada iklan · Tiada penjejak · Tiada kumpulan bot",
        launch: "Lancar sekarang",
        sec_kicker: "Apa yang anda dapat",
        sec_h2: "Dibina untuk manusia, <em>hanya manusia</em>.",
        card1_h3: "Rangkaian berpintu World ID",
        card1_p: "Setiap akaun disahkan sebagai manusia. Tiada ladang bot, tiada spam sekali guna. Suapan anda adalah manusia — titik.",
        card2_h3: "Bilik suara Humanity Chat",
        card2_p: "Masuk ke bilik suara langsung bersama manusia yang disahkan. Cipta bilik, sertai perbualan, dan kekal ikhlas.",
        card3_h3: "Tip Pulse dalam WLD",
        card3_p: "Beri tip kepada pencipta kandungan melalui World App. Pautan terus di telefon, WalletConnect di desktop. Sokong apa yang menggerakkan anda.",
        card4_h3: "Privasi diutamakan sejak awal",
        card4_p: "Hash Humanity tidak mengumpul data biometrik anda. Pengesahan World ID berlaku melalui World App.",
        cta_h2: "Sertai dalam <em>10 saat</em>.",
        cta_p: "Halakan kamera, buka <strong>hashhumanity.world</strong>, dan sahkan diri dengan World ID. Kemudian masuk ke suapan atau bilik suara <strong>Humanity Chat</strong>.",
        fineprint: "Hash Humanity tidak menyimpan data biometrik. Pengesahan dikendalikan oleh World ID melalui World App.",
        footer_tag: "Anda adalah buktinya, bukan produknya.",
        audio_start: "Hidupkan bunyi", audio_on: "Bunyi: hidup", audio_off: "Bunyi: mati"
      }
    },

    /* ============================= MISSION ============================= */
    mission: {
      en: {
        back: "← Back", launch: "Launch",
        eyebrow: "Mission · Vision · Human-first network",
        h1: "Mission &amp; <em>vision</em>.",
        lead: "We're building a human-verified social network where <strong>people</strong> — not bots, click-farms, spam engines, or rage-bait machines — set the tone.",
        c1_idx: "01 — Mission", c1_h2: "Make social trustworthy again",
        c1_p: "Every account is a real human, verified through World ID. With identity handled privately, Hash Humanity can focus on what matters: conversation, creation, and community.",
        c2_idx: "02 — Who we are", c2_h2: "Builders and pragmatists",
        c2_p: "We ship quickly, keep the product focused, and prioritize clarity, reliability, and user trust. Hash Humanity is intentionally minimal — a clean, stable space for verified people.",
        c3_idx: "03 — Why we're doing this", c3_h2: "Open social got wrecked",
        c3_p: "Bots, spam, and incentives that reward outrage broke the open internet. Verification at the door removes the bot problem without turning the product into another ad-soaked machine.",
        c4_idx: "04 — The bigger picture", c4_h2: "A network that pays people, not itself",
        c4_p: "Creators get paid directly through Pulse tipping, language barriers drop with built-in translation, and data extraction is not the business model.",
        c4_p2: "No dark patterns. No fake metrics. Just people talking — and tipping — in the open.",
        pull: "<span>You are the proof</span>, not the product.",
        c5_idx: "05 — How it works", c5_h2: "Three steps to get in",
        step1: "<b>Verify with World ID.</b> Prove you're human without sharing biometric data with Hash Humanity.",
        step2: "<b>Join the feed.</b> Post, translate, react, and connect with verified people.",
        step3: "<b>Tip with Pulse.</b> Send WLD micro-tips through World App or WalletConnect.",
        c6_idx: "06 — What's next", c6_h2: "Where we're headed",
        c6_p: "Device-first onboarding, deeper internationalization, creator tools, stronger voice-room experiences, and export paths so people are never trapped inside the platform.",
        launch_now: "Launch now", contact_us: "Contact us",
        footer_tag: "You are the proof, not the product."
      },
      de: {
        back: "← Zurück", launch: "Starten",
        eyebrow: "Mission · Vision · Menschen-zuerst-Netzwerk",
        h1: "Mission &amp; <em>Vision</em>.",
        lead: "Wir bauen ein menschlich verifiziertes soziales Netzwerk, in dem <strong>Menschen</strong> — nicht Bots, Klickfarmen, Spam-Maschinen oder Empörungsmaschinen — den Ton angeben.",
        c1_idx: "01 — Mission", c1_h2: "Soziale Netzwerke wieder vertrauenswürdig machen",
        c1_p: "Jedes Konto ist ein echter Mensch, verifiziert über World ID. Da die Identität privat gehandhabt wird, kann sich Hash Humanity auf das Wesentliche konzentrieren: Gespräche, Kreativität und Gemeinschaft.",
        c2_idx: "02 — Wer wir sind", c2_h2: "Macher und Pragmatiker",
        c2_p: "Wir liefern schnell, halten das Produkt fokussiert und setzen auf Klarheit, Zuverlässigkeit und Vertrauen. Hash Humanity ist bewusst minimalistisch — ein sauberer, stabiler Raum für verifizierte Menschen.",
        c3_idx: "03 — Warum wir das tun", c3_h2: "Das offene Netz wurde ruiniert",
        c3_p: "Bots, Spam und Anreize für Empörung haben das offene Internet kaputtgemacht. Verifizierung am Eingang löst das Bot-Problem, ohne das Produkt in eine weitere werbeverseuchte Maschine zu verwandeln.",
        c4_idx: "04 — Das größere Bild", c4_h2: "Ein Netzwerk, das Menschen bezahlt, nicht sich selbst",
        c4_p: "Creator werden direkt über Pulse-Trinkgelder bezahlt, Sprachbarrieren sinken dank eingebauter Übersetzung, und Datenverwertung ist nicht das Geschäftsmodell.",
        c4_p2: "Keine Dark Patterns. Keine gefälschten Kennzahlen. Nur Menschen, die offen miteinander reden — und sich gegenseitig unterstützen.",
        pull: "<span>Du bist der Beweis</span>, nicht das Produkt.",
        c5_idx: "05 — So funktioniert's", c5_h2: "Drei Schritte zum Einstieg",
        step1: "<b>Mit World ID verifizieren.</b> Beweise, dass du ein Mensch bist, ohne biometrische Daten mit Hash Humanity zu teilen.",
        step2: "<b>Dem Feed beitreten.</b> Posten, übersetzen, reagieren und dich mit verifizierten Menschen vernetzen.",
        step3: "<b>Mit Pulse Trinkgeld geben.</b> Sende WLD-Mikro-Trinkgelder über die World App oder WalletConnect.",
        c6_idx: "06 — Was als Nächstes kommt", c6_h2: "Wohin wir unterwegs sind",
        c6_p: "Geräte-orientiertes Onboarding, tiefere Internationalisierung, Creator-Tools, stärkere Sprachraum-Erlebnisse und Exportwege, damit niemand in der Plattform gefangen ist.",
        launch_now: "Jetzt starten", contact_us: "Kontakt aufnehmen",
        footer_tag: "Du bist der Beweis, nicht das Produkt."
      },
      fr: {
        back: "← Retour", launch: "Lancer",
        eyebrow: "Mission · Vision · Réseau centré sur l'humain",
        h1: "Mission &amp; <em>vision</em>.",
        lead: "Nous construisons un réseau social vérifié par des humains, où ce sont les <strong>personnes</strong> — pas les bots, les fermes de clics, les moteurs de spam ou les machines à polémiques — qui donnent le ton.",
        c1_idx: "01 — Mission", c1_h2: "Rendre le social digne de confiance à nouveau",
        c1_p: "Chaque compte est un vrai humain, vérifié via World ID. L'identité étant gérée en privé, Hash Humanity peut se concentrer sur l'essentiel : la conversation, la création et la communauté.",
        c2_idx: "02 — Qui nous sommes", c2_h2: "Des bâtisseurs pragmatiques",
        c2_p: "Nous livrons vite, gardons le produit ciblé et privilégions la clarté, la fiabilité et la confiance des utilisateurs. Hash Humanity est volontairement minimaliste — un espace propre et stable pour les personnes vérifiées.",
        c3_idx: "03 — Pourquoi nous faisons cela", c3_h2: "Le web ouvert a été saccagé",
        c3_p: "Les bots, le spam et les incitations à la colère ont brisé l'internet ouvert. La vérification à l'entrée règle le problème des bots sans transformer le produit en une nouvelle machine gorgée de publicité.",
        c4_idx: "04 — La vue d'ensemble", c4_h2: "Un réseau qui paie les gens, pas lui-même",
        c4_p: "Les créateurs sont payés directement grâce aux pourboires Pulse, les barrières linguistiques tombent grâce à la traduction intégrée, et l'extraction de données n'est pas le modèle économique.",
        c4_p2: "Pas de dark patterns. Pas de fausses statistiques. Juste des gens qui discutent — et se soutiennent — au grand jour.",
        pull: "<span>Vous êtes la preuve</span>, pas le produit.",
        c5_idx: "05 — Comment ça marche", c5_h2: "Trois étapes pour entrer",
        step1: "<b>Vérifiez-vous avec World ID.</b> Prouvez que vous êtes humain sans partager de données biométriques avec Hash Humanity.",
        step2: "<b>Rejoignez le fil.</b> Publiez, traduisez, réagissez et connectez-vous avec des personnes vérifiées.",
        step3: "<b>Envoyez un pourboire via Pulse.</b> Envoyez des micro-pourboires en WLD via World App ou WalletConnect.",
        c6_idx: "06 — Et ensuite", c6_h2: "Là où nous allons",
        c6_p: "Un onboarding pensé pour mobile, une internationalisation plus poussée, des outils pour les créateurs, des salons vocaux plus riches, et des options d'export pour que personne ne reste jamais piégé sur la plateforme.",
        launch_now: "Lancer maintenant", contact_us: "Nous contacter",
        footer_tag: "Vous êtes la preuve, pas le produit."
      },
      es: {
        back: "← Volver", launch: "Entrar",
        eyebrow: "Misión · Visión · Red centrada en las personas",
        h1: "Misión &amp; <em>visión</em>.",
        lead: "Estamos construyendo una red social verificada por humanos, donde son las <strong>personas</strong> —no los bots, las granjas de clics, las máquinas de spam ni las de polémica— quienes marcan el tono.",
        c1_idx: "01 — Misión", c1_h2: "Hacer que lo social vuelva a ser confiable",
        c1_p: "Cada cuenta es un humano real, verificado mediante World ID. Con la identidad gestionada de forma privada, Hash Humanity puede centrarse en lo que importa: conversación, creación y comunidad.",
        c2_idx: "02 — Quiénes somos", c2_h2: "Constructores pragmáticos",
        c2_p: "Lanzamos rápido, mantenemos el producto enfocado y priorizamos la claridad, la fiabilidad y la confianza del usuario. Hash Humanity es deliberadamente minimalista — un espacio limpio y estable para personas verificadas.",
        c3_idx: "03 — Por qué hacemos esto", c3_h2: "Lo social abierto se rompió",
        c3_p: "Los bots, el spam y los incentivos que premian la indignación rompieron el internet abierto. Verificar en la puerta elimina el problema de los bots sin convertir el producto en otra máquina llena de anuncios.",
        c4_idx: "04 — El panorama completo", c4_h2: "Una red que paga a las personas, no a sí misma",
        c4_p: "Los creadores cobran directamente mediante propinas Pulse, las barreras de idioma bajan con traducción integrada, y la extracción de datos no es el modelo de negocio.",
        c4_p2: "Sin patrones oscuros. Sin métricas falsas. Solo personas hablando —y apoyándose— a la vista de todos.",
        pull: "<span>Tú eres la prueba</span>, no el producto.",
        c5_idx: "05 — Cómo funciona", c5_h2: "Tres pasos para entrar",
        step1: "<b>Verifícate con World ID.</b> Demuestra que eres humano sin compartir datos biométricos con Hash Humanity.",
        step2: "<b>Únete al feed.</b> Publica, traduce, reacciona y conecta con personas verificadas.",
        step3: "<b>Da propina con Pulse.</b> Envía micropropinas en WLD a través de World App o WalletConnect.",
        c6_idx: "06 — Qué sigue", c6_h2: "Hacia dónde vamos",
        c6_p: "Incorporación pensada para el móvil, internacionalización más profunda, herramientas para creadores, salas de voz mejoradas y opciones de exportación para que nadie quede atrapado en la plataforma.",
        launch_now: "Entrar ahora", contact_us: "Contáctanos",
        footer_tag: "Tú eres la prueba, no el producto."
      },
      pt: {
        back: "← Voltar", launch: "Entrar",
        eyebrow: "Missão · Visão · Rede centrada nas pessoas",
        h1: "Missão &amp; <em>visão</em>.",
        lead: "Estamos construindo uma rede social verificada por humanos, onde são as <strong>pessoas</strong> — não bots, fazendas de cliques, máquinas de spam ou de polêmica — que dão o tom.",
        c1_idx: "01 — Missão", c1_h2: "Tornar o social confiável de novo",
        c1_p: "Cada conta é um humano real, verificado pelo World ID. Com a identidade tratada de forma privada, a Hash Humanity pode focar no que importa: conversa, criação e comunidade.",
        c2_idx: "02 — Quem somos", c2_h2: "Construtores pragmáticos",
        c2_p: "Lançamos rápido, mantemos o produto focado e priorizamos clareza, confiabilidade e confiança do usuário. A Hash Humanity é propositalmente minimalista — um espaço limpo e estável para pessoas verificadas.",
        c3_idx: "03 — Por que fazemos isso", c3_h2: "O social aberto foi destruído",
        c3_p: "Bots, spam e incentivos que recompensam a indignação quebraram a internet aberta. Verificar na entrada resolve o problema dos bots sem transformar o produto em mais uma máquina cheia de anúncios.",
        c4_idx: "04 — O panorama geral", c4_h2: "Uma rede que paga as pessoas, não a si mesma",
        c4_p: "Criadores recebem diretamente pelas gorjetas Pulse, as barreiras de idioma caem com tradução integrada, e a extração de dados não é o modelo de negócio.",
        c4_p2: "Sem dark patterns. Sem métricas falsas. Só pessoas conversando — e se apoiando — abertamente.",
        pull: "<span>Você é a prova</span>, não o produto.",
        c5_idx: "05 — Como funciona", c5_h2: "Três passos para entrar",
        step1: "<b>Verifique-se com o World ID.</b> Prove que é humano sem compartilhar dados biométricos com a Hash Humanity.",
        step2: "<b>Entre no feed.</b> Publique, traduza, reaja e conecte-se com pessoas verificadas.",
        step3: "<b>Dê gorjeta com o Pulse.</b> Envie micro-gorjetas em WLD pelo World App ou WalletConnect.",
        c6_idx: "06 — O que vem a seguir", c6_h2: "Para onde estamos indo",
        c6_p: "Onboarding pensado para celular, internacionalização mais profunda, ferramentas para criadores, salas de voz melhores e opções de exportação para que ninguém fique preso na plataforma.",
        launch_now: "Entrar agora", contact_us: "Fale conosco",
        footer_tag: "Você é a prova, não o produto."
      },
      zh: {
        back: "← 返回", launch: "立即体验",
        eyebrow: "使命 · 愿景 · 以人为本的网络",
        h1: "使命与<em>愿景</em>。",
        lead: "我们正在打造一个由真人验证的社交网络——在这里，定调子的是<strong>人</strong>，而不是机器人、点击农场、垃圾信息引擎或专门带节奏的机器。",
        c1_idx: "01 — 使命", c1_h2: "让社交重新变得可信",
        c1_p: "每个账号都是真实的人，经过 World ID 验证。身份信息私密处理，Hash Humanity 得以专注于真正重要的事：交流、创作与社区。",
        c2_idx: "02 — 我们是谁", c2_h2: "务实的建造者",
        c2_p: "我们快速迭代，保持产品聚焦，重视清晰、可靠与用户信任。Hash Humanity 有意保持简洁——为经过验证的人打造一个干净、稳定的空间。",
        c3_idx: "03 — 我们为何而做", c3_h2: "开放的社交网络已被破坏",
        c3_p: "机器人、垃圾信息，以及奖励愤怒情绪的激励机制，破坏了开放的互联网。在入口处进行验证，就能解决机器人问题，而不必让产品变成又一台被广告塞满的机器。",
        c4_idx: "04 — 更大的图景", c4_h2: "一个回馈用户而非榨取用户的网络",
        c4_p: "创作者可通过 Pulse 打赏直接获得报酬，内置翻译打破语言壁垒，数据变现不是我们的商业模式。",
        c4_p2: "没有暗黑设计，没有虚假数据。只有人们公开地交流——和互相支持。",
        pull: "<span>你就是证明</span>，而非产品。",
        c5_idx: "05 — 如何使用", c5_h2: "三步即可加入",
        step1: "<b>用 World ID 完成验证。</b>无需与 Hash Humanity 分享生物特征数据即可证明你是真人。",
        step2: "<b>加入信息流。</b>发帖、翻译、互动，与经过验证的人建立联系。",
        step3: "<b>用 Pulse 打赏。</b>通过 World App 或 WalletConnect 发送 WLD 小额打赏。",
        c6_idx: "06 — 接下来的计划", c6_h2: "我们前进的方向",
        c6_p: "以设备为先的引导流程、更深入的多语言支持、创作者工具、更强大的语音房间体验，以及导出方案，让用户永远不会被困在平台里。",
        launch_now: "立即体验", contact_us: "联系我们",
        footer_tag: "你就是证明，而非产品。"
      },
      ko: {
        back: "← 뒤로", launch: "시작하기",
        eyebrow: "미션 · 비전 · 사람 중심 네트워크",
        h1: "미션 &amp; <em>비전</em>.",
        lead: "우리는 봇, 클릭 농장, 스팸 엔진, 분노 유발 머신이 아니라 <strong>사람</strong>이 분위기를 만드는, 휴먼 인증 기반 소셜 네트워크를 만들고 있습니다.",
        c1_idx: "01 — 미션", c1_h2: "소셜을 다시 신뢰할 수 있게",
        c1_p: "모든 계정은 World ID를 통해 인증된 실제 사람입니다. 신원 정보를 비공개로 처리하기에, Hash Humanity는 진짜 중요한 것 — 대화, 창작, 커뮤니티 — 에 집중할 수 있습니다.",
        c2_idx: "02 — 우리는 누구인가", c2_h2: "실용적인 빌더들",
        c2_p: "우리는 빠르게 출시하고, 제품의 초점을 유지하며, 명료함과 안정성, 사용자 신뢰를 우선시합니다. Hash Humanity는 의도적으로 미니멀합니다 — 인증된 사람들을 위한 깔끔하고 안정적인 공간입니다.",
        c3_idx: "03 — 우리가 이 일을 하는 이유", c3_h2: "개방형 소셜은 망가졌습니다",
        c3_p: "봇, 스팸, 그리고 분노를 보상하는 인센티브 구조가 열린 인터넷을 망가뜨렸습니다. 입구에서의 인증은 제품을 또 하나의 광고범벅 머신으로 만들지 않으면서도 봇 문제를 해결합니다.",
        c4_idx: "04 — 더 큰 그림", c4_h2: "스스로가 아닌 사람들에게 보상하는 네트워크",
        c4_p: "크리에이터는 Pulse 팁을 통해 직접 보상을 받고, 내장 번역 기능으로 언어 장벽이 낮아지며, 데이터 추출은 비즈니스 모델이 아닙니다.",
        c4_p2: "다크 패턴 없음. 가짜 지표 없음. 그저 사람들이 공개적으로 대화하고 — 서로를 응원할 뿐입니다.",
        pull: "<span>당신이 증거입니다</span>, 상품이 아니라.",
        c5_idx: "05 — 이용 방법", c5_h2: "가입까지 세 단계",
        step1: "<b>World ID로 인증하기.</b> Hash Humanity에 생체 데이터를 공유하지 않고도 사람임을 증명하세요.",
        step2: "<b>피드에 참여하기.</b> 게시하고, 번역하고, 반응하고, 인증된 사람들과 연결되세요.",
        step3: "<b>Pulse로 팁 보내기.</b> World App 또는 WalletConnect를 통해 WLD 소액 팁을 보내세요.",
        c6_idx: "06 — 다음 단계", c6_h2: "우리가 나아가는 방향",
        c6_p: "모바일 우선 온보딩, 더 깊은 다국어 지원, 크리에이터 도구, 더 강력한 음성 룸 경험, 그리고 누구도 플랫폼에 갇히지 않도록 하는 내보내기 경로를 준비하고 있습니다.",
        launch_now: "지금 시작하기", contact_us: "문의하기",
        footer_tag: "당신이 증거입니다, 상품이 아니라."
      },
      ms: {
        back: "← Kembali", launch: "Lancar",
        eyebrow: "Misi · Wawasan · Rangkaian berteraskan manusia",
        h1: "Misi &amp; <em>wawasan</em>.",
        lead: "Kami sedang membina rangkaian sosial yang disahkan manusia, di mana <strong>orang</strong> — bukan bot, ladang klik, enjin spam atau mesin pencetus kemarahan — yang menentukan haluan.",
        c1_idx: "01 — Misi", c1_h2: "Menjadikan sosial boleh dipercayai semula",
        c1_p: "Setiap akaun ialah manusia sebenar, disahkan melalui World ID. Dengan identiti dikendalikan secara peribadi, Hash Humanity dapat fokus pada perkara yang penting: perbualan, kreativiti dan komuniti.",
        c2_idx: "02 — Siapa kami", c2_h2: "Pembina yang pragmatik",
        c2_p: "Kami melancarkan dengan cepat, mengekalkan fokus produk, serta mengutamakan kejelasan, kebolehpercayaan dan kepercayaan pengguna. Hash Humanity sengaja dibuat minimal — ruang yang bersih dan stabil untuk orang yang disahkan.",
        c3_idx: "03 — Kenapa kami buat ini", c3_h2: "Sosial terbuka telah musnah",
        c3_p: "Bot, spam, dan insentif yang mengganjari kemarahan telah merosakkan internet terbuka. Pengesahan di pintu masuk menyelesaikan masalah bot tanpa menjadikan produk ini satu lagi mesin bertimbun iklan.",
        c4_idx: "04 — Gambaran lebih besar", c4_h2: "Rangkaian yang membayar orang, bukan dirinya sendiri",
        c4_p: "Pencipta kandungan dibayar terus melalui tip Pulse, halangan bahasa berkurang dengan terjemahan terbina dalam, dan pengekstrakan data bukan model perniagaan kami.",
        c4_p2: "Tiada corak gelap. Tiada metrik palsu. Cuma orang berbual — dan saling menyokong — secara terbuka.",
        pull: "<span>Anda adalah buktinya</span>, bukan produknya.",
        c5_idx: "05 — Cara ia berfungsi", c5_h2: "Tiga langkah untuk masuk",
        step1: "<b>Sahkan dengan World ID.</b> Buktikan anda manusia tanpa berkongsi data biometrik dengan Hash Humanity.",
        step2: "<b>Sertai suapan.</b> Hantar siaran, terjemah, bertindak balas, dan berhubung dengan orang yang disahkan.",
        step3: "<b>Beri tip dengan Pulse.</b> Hantar tip mikro WLD melalui World App atau WalletConnect.",
        c6_idx: "06 — Seterusnya", c6_h2: "Ke mana kami menuju",
        c6_p: "Onboarding berteraskan peranti, penyetempatan yang lebih mendalam, alat untuk pencipta kandungan, pengalaman bilik suara yang lebih kukuh, serta laluan eksport supaya tiada siapa terperangkap dalam platform.",
        launch_now: "Lancar sekarang", contact_us: "Hubungi kami",
        footer_tag: "Anda adalah buktinya, bukan produknya."
      }
    },

    /* =============================== JOIN =============================== */
    join: {
      en: {
        back: "← Back", launch: "Launch",
        eyebrow: "Join · Human-verified · World ID only",
        h1: "Come be <em>human</em> with us.",
        lead: "Hash Humanity is a network built for <strong>real people</strong> — no bots, no spam, no rage-bait. Tell us a bit about you and we'll help you get onboarded.",
        lbl_name: "Your name", ph_name: "First name",
        lbl_email: "Email",
        lbl_role: "What brings you here?",
        opt_choose: "Choose one…",
        opt_member: "I want to join as a member",
        opt_creator: "I'm a creator",
        opt_builder: "I'm a builder / developer",
        opt_partner: "Partnership / organization",
        opt_press: "Press / media",
        opt_other: "Something else",
        lbl_message: "Anything you'd like us to know? <span class=\"optional\">(optional)</span>",
        ph_message: "What are you hoping to do on Hash Humanity? Any questions?",
        submit: "Request an invite",
        done_h2: "You're <em>on the list</em>.",
        done_p: "Thanks for your interest — we've got your details and someone from our team will reach out at the email you gave us. Want to look around now?",
        launch_full: "Launch Hash Humanity",
        footer_tag: "You are the proof, not the product.",
        err_name: "Please tell us your name.",
        err_email: "Please enter a valid email so we can reach you.",
        err_role: "Please choose what brings you here.",
        err_offline: "Couldn't reach our servers. Check your connection and try again.",
        sending: "Sending…",
        err_generic: "Something went wrong. Please try again."
      },
      de: {
        back: "← Zurück", launch: "Starten",
        eyebrow: "Beitreten · Menschlich verifiziert · Nur World ID",
        h1: "Komm und sei <em>Mensch</em> mit uns.",
        lead: "Hash Humanity ist ein Netzwerk für <strong>echte Menschen</strong> — keine Bots, kein Spam, kein Empörungs-Köder. Erzähl uns kurz von dir, und wir helfen dir beim Einstieg.",
        lbl_name: "Dein Name", ph_name: "Vorname",
        lbl_email: "E-Mail",
        lbl_role: "Was führt dich zu uns?",
        opt_choose: "Auswählen…",
        opt_member: "Ich möchte als Mitglied beitreten",
        opt_creator: "Ich bin Creator",
        opt_builder: "Ich bin Entwickler:in",
        opt_partner: "Partnerschaft / Organisation",
        opt_press: "Presse / Medien",
        opt_other: "Etwas anderes",
        lbl_message: "Möchtest du uns noch etwas mitteilen? <span class=\"optional\">(optional)</span>",
        ph_message: "Was möchtest du bei Hash Humanity machen? Hast du Fragen?",
        submit: "Einladung anfragen",
        done_h2: "Du stehst <em>auf der Liste</em>.",
        done_p: "Danke für dein Interesse — wir haben deine Angaben, und jemand aus unserem Team meldet sich unter der angegebenen E-Mail-Adresse. Möchtest du dich schon mal umsehen?",
        launch_full: "Hash Humanity starten",
        footer_tag: "Du bist der Beweis, nicht das Produkt.",
        err_name: "Bitte gib deinen Namen ein.",
        err_email: "Bitte gib eine gültige E-Mail-Adresse ein, damit wir dich erreichen können.",
        err_role: "Bitte wähle aus, was dich zu uns führt.",
        err_offline: "Server nicht erreichbar. Verbindung prüfen und erneut versuchen.",
        sending: "Wird gesendet…",
        err_generic: "Etwas ist schiefgelaufen. Bitte versuche es erneut."
      },
      fr: {
        back: "← Retour", launch: "Lancer",
        eyebrow: "Rejoindre · Humains vérifiés · World ID uniquement",
        h1: "Venez être <em>humain</em> avec nous.",
        lead: "Hash Humanity est un réseau conçu pour de <strong>vraies personnes</strong> — pas de bots, pas de spam, pas de contenu polémique. Parlez-nous un peu de vous et on vous aide à démarrer.",
        lbl_name: "Votre nom", ph_name: "Prénom",
        lbl_email: "E-mail",
        lbl_role: "Qu'est-ce qui vous amène ici ?",
        opt_choose: "Choisissez…",
        opt_member: "Je veux rejoindre en tant que membre",
        opt_creator: "Je suis créateur/créatrice",
        opt_builder: "Je suis développeur/développeuse",
        opt_partner: "Partenariat / organisation",
        opt_press: "Presse / médias",
        opt_other: "Autre chose",
        lbl_message: "Autre chose à nous faire savoir ? <span class=\"optional\">(facultatif)</span>",
        ph_message: "Qu'espérez-vous faire sur Hash Humanity ? Des questions ?",
        submit: "Demander une invitation",
        done_h2: "Vous êtes <em>sur la liste</em>.",
        done_p: "Merci de votre intérêt — nous avons vos informations et quelqu'un de notre équipe vous contactera à l'adresse indiquée. Envie de jeter un œil en attendant ?",
        launch_full: "Lancer Hash Humanity",
        footer_tag: "Vous êtes la preuve, pas le produit.",
        err_name: "Merci d'indiquer votre nom.",
        err_email: "Merci de saisir un e-mail valide pour qu'on puisse vous contacter.",
        err_role: "Merci de choisir ce qui vous amène ici.",
        err_offline: "Impossible de joindre nos serveurs. Vérifiez votre connexion et réessayez.",
        sending: "Envoi…",
        err_generic: "Une erreur est survenue. Merci de réessayer."
      },
      es: {
        back: "← Volver", launch: "Entrar",
        eyebrow: "Únete · Verificado como humano · Solo World ID",
        h1: "Ven a ser <em>humano</em> con nosotros.",
        lead: "Hash Humanity es una red hecha para <strong>personas reales</strong> — sin bots, sin spam, sin contenido diseñado para indignar. Cuéntanos un poco sobre ti y te ayudamos a empezar.",
        lbl_name: "Tu nombre", ph_name: "Nombre",
        lbl_email: "Correo electrónico",
        lbl_role: "¿Qué te trae por aquí?",
        opt_choose: "Elige una opción…",
        opt_member: "Quiero unirme como miembro",
        opt_creator: "Soy creador/a de contenido",
        opt_builder: "Soy desarrollador/a",
        opt_partner: "Asociación / organización",
        opt_press: "Prensa / medios",
        opt_other: "Otra cosa",
        lbl_message: "¿Algo más que quieras contarnos? <span class=\"optional\">(opcional)</span>",
        ph_message: "¿Qué esperas hacer en Hash Humanity? ¿Alguna pregunta?",
        submit: "Solicitar invitación",
        done_h2: "Ya estás <em>en la lista</em>.",
        done_p: "Gracias por tu interés — ya tenemos tus datos y alguien de nuestro equipo te contactará al correo que nos diste. ¿Quieres echar un vistazo mientras tanto?",
        launch_full: "Entrar a Hash Humanity",
        footer_tag: "Tú eres la prueba, no el producto.",
        err_name: "Por favor, dinos tu nombre.",
        err_email: "Introduce un correo válido para poder contactarte.",
        err_role: "Por favor, elige qué te trae por aquí.",
        err_offline: "No pudimos conectar con el servidor. Revisa tu conexión e inténtalo de nuevo.",
        sending: "Enviando…",
        err_generic: "Algo salió mal. Inténtalo de nuevo."
      },
      pt: {
        back: "← Voltar", launch: "Entrar",
        eyebrow: "Participar · Verificado como humano · Só World ID",
        h1: "Venha ser <em>humano</em> com a gente.",
        lead: "A Hash Humanity é uma rede feita para <strong>pessoas de verdade</strong> — sem bots, sem spam, sem conteúdo criado pra gerar polêmica. Conte um pouco sobre você e a gente te ajuda a começar.",
        lbl_name: "Seu nome", ph_name: "Primeiro nome",
        lbl_email: "E-mail",
        lbl_role: "O que te trouxe até aqui?",
        opt_choose: "Escolha uma opção…",
        opt_member: "Quero entrar como membro",
        opt_creator: "Sou criador(a) de conteúdo",
        opt_builder: "Sou desenvolvedor(a)",
        opt_partner: "Parceria / organização",
        opt_press: "Imprensa / mídia",
        opt_other: "Outro motivo",
        lbl_message: "Tem algo mais que gostaria de nos contar? <span class=\"optional\">(opcional)</span>",
        ph_message: "O que você espera fazer na Hash Humanity? Alguma dúvida?",
        submit: "Solicitar convite",
        done_h2: "Você está <em>na lista</em>.",
        done_p: "Obrigado pelo interesse — já temos seus dados e alguém da nossa equipe vai entrar em contato pelo e-mail que você informou. Quer dar uma olhada por aí enquanto isso?",
        launch_full: "Entrar na Hash Humanity",
        footer_tag: "Você é a prova, não o produto.",
        err_name: "Por favor, nos diga seu nome.",
        err_email: "Insira um e-mail válido para que possamos falar com você.",
        err_role: "Por favor, escolha o que te trouxe até aqui.",
        err_offline: "Não foi possível conectar aos nossos servidores. Verifique sua conexão e tente novamente.",
        sending: "Enviando…",
        err_generic: "Algo deu errado. Tente novamente."
      },
      zh: {
        back: "← 返回", launch: "立即体验",
        eyebrow: "加入 · 真人验证 · 仅限 World ID",
        h1: "来和我们一起，做<em>真实的人</em>。",
        lead: "Hash Humanity 是专为<strong>真实用户</strong>打造的网络——没有机器人，没有垃圾信息，没有带节奏的内容。简单告诉我们一些关于你的信息，我们会帮你完成入门。",
        lbl_name: "你的姓名", ph_name: "名字",
        lbl_email: "电子邮箱",
        lbl_role: "是什么让你来到这里？",
        opt_choose: "请选择…",
        opt_member: "我想以成员身份加入",
        opt_creator: "我是创作者",
        opt_builder: "我是开发者",
        opt_partner: "合作伙伴 / 机构",
        opt_press: "媒体 / 新闻",
        opt_other: "其他原因",
        lbl_message: "还有什么想让我们了解的吗？<span class=\"optional\">（可选）</span>",
        ph_message: "你希望在 Hash Humanity 上做什么？有什么问题吗？",
        submit: "申请邀请",
        done_h2: "你已经<em>在名单上</em>了。",
        done_p: "感谢你的关注——我们已经收到你的信息，团队成员会通过你提供的邮箱与你联系。要不要先四处看看？",
        launch_full: "打开 Hash Humanity",
        footer_tag: "你就是证明，而非产品。",
        err_name: "请填写你的姓名。",
        err_email: "请填写有效的邮箱地址，以便我们联系你。",
        err_role: "请选择是什么让你来到这里。",
        err_offline: "无法连接到服务器。请检查网络连接后重试。",
        sending: "发送中…",
        err_generic: "出了点问题，请重试。"
      },
      ko: {
        back: "← 뒤로", launch: "시작하기",
        eyebrow: "가입 · 휴먼 인증 · World ID 전용",
        h1: "우리와 함께 <em>사람</em>이 되어보세요.",
        lead: "Hash Humanity는 <strong>진짜 사람들</strong>을 위한 네트워크입니다 — 봇도, 스팸도, 자극적인 미끼 콘텐츠도 없습니다. 자신에 대해 조금만 알려주시면 온보딩을 도와드리겠습니다.",
        lbl_name: "이름", ph_name: "이름",
        lbl_email: "이메일",
        lbl_role: "어떤 이유로 오셨나요?",
        opt_choose: "선택해주세요…",
        opt_member: "멤버로 가입하고 싶어요",
        opt_creator: "크리에이터입니다",
        opt_builder: "빌더 / 개발자입니다",
        opt_partner: "파트너십 / 단체",
        opt_press: "언론 / 미디어",
        opt_other: "기타",
        lbl_message: "저희가 알아두면 좋을 내용이 있나요? <span class=\"optional\">(선택 사항)</span>",
        ph_message: "Hash Humanity에서 하고 싶은 것이 있나요? 궁금한 점은요?",
        submit: "초대 요청하기",
        done_h2: "<em>대기 명단</em>에 등록되었습니다.",
        done_p: "관심 가져주셔서 감사합니다 — 정보를 받았고, 저희 팀에서 남겨주신 이메일로 연락드리겠습니다. 지금 미리 둘러보시겠어요?",
        launch_full: "Hash Humanity 시작하기",
        footer_tag: "당신이 증거입니다, 상품이 아니라.",
        err_name: "이름을 알려주세요.",
        err_email: "연락 가능한 올바른 이메일을 입력해주세요.",
        err_role: "어떤 이유로 오셨는지 선택해주세요.",
        err_offline: "서버에 연결할 수 없습니다. 연결 상태를 확인한 뒤 다시 시도해주세요.",
        sending: "전송 중…",
        err_generic: "문제가 발생했습니다. 다시 시도해주세요."
      },
      ms: {
        back: "← Kembali", launch: "Lancar",
        eyebrow: "Sertai · Disahkan sebagai manusia · World ID sahaja",
        h1: "Jom jadi <em>manusia</em> bersama kami.",
        lead: "Hash Humanity ialah rangkaian yang dibina untuk <strong>orang sebenar</strong> — tiada bot, tiada spam, tiada umpan kemarahan. Beritahu kami sedikit tentang diri anda dan kami akan bantu anda bermula.",
        lbl_name: "Nama anda", ph_name: "Nama pertama",
        lbl_email: "E-mel",
        lbl_role: "Apa yang membawa anda ke sini?",
        opt_choose: "Pilih satu…",
        opt_member: "Saya mahu menyertai sebagai ahli",
        opt_creator: "Saya seorang pencipta kandungan",
        opt_builder: "Saya pembina / pembangun",
        opt_partner: "Perkongsian / organisasi",
        opt_press: "Media / akhbar",
        opt_other: "Sesuatu yang lain",
        lbl_message: "Ada apa-apa lagi yang anda ingin beritahu kami? <span class=\"optional\">(pilihan)</span>",
        ph_message: "Apa yang anda harap lakukan di Hash Humanity? Ada soalan?",
        submit: "Minta jemputan",
        done_h2: "Anda kini <em>dalam senarai</em>.",
        done_p: "Terima kasih atas minat anda — kami telah menerima maklumat anda dan seseorang dari pasukan kami akan menghubungi anda melalui e-mel yang diberikan. Mahu melihat-lihat sekarang?",
        launch_full: "Lancar Hash Humanity",
        footer_tag: "Anda adalah buktinya, bukan produknya.",
        err_name: "Sila beritahu kami nama anda.",
        err_email: "Sila masukkan e-mel yang sah supaya kami dapat menghubungi anda.",
        err_role: "Sila pilih apa yang membawa anda ke sini.",
        err_offline: "Tidak dapat menghubungi pelayan kami. Semak sambungan anda dan cuba lagi.",
        sending: "Menghantar…",
        err_generic: "Sesuatu tidak kena. Sila cuba lagi."
      }
    }
  };

  /* ============================== ENGINE ============================== */

  var STORAGE_KEY = "hh_lang";

  function detectLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored && STRINGS.home[stored]) return stored;
    } catch (e) {}

    var nav = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    var short = nav.split("-")[0];
    if (STRINGS.home[short]) return short;
    return "en";
  }

  function applyPage(page, lang) {
    var dict = (STRINGS[page] && STRINGS[page][lang]) || STRINGS[page].en;
    window.HH_ACTIVE_STRINGS = dict;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
    });

    document.documentElement.setAttribute("lang", lang);

    var btnLabel = document.getElementById("langBtnLabel");
    if (btnLabel) btnLabel.textContent = lang.toUpperCase();

    var menu = document.getElementById("langMenu");
    if (menu) {
      menu.querySelectorAll("button").forEach(function (b) {
        b.setAttribute("aria-selected", b.getAttribute("data-lang") === lang ? "true" : "false");
      });
    }
  }

  function buildSwitcher(page) {
    var btn = document.getElementById("langBtn");
    var menu = document.getElementById("langMenu");
    if (!btn || !menu) return;

    menu.innerHTML = "";
    LANGS.forEach(function (l) {
      var li = document.createElement("li");
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("data-lang", l.code);
      b.setAttribute("role", "option");
      b.innerHTML = "<span>" + l.native + "</span><span class=\"code\">" + l.code.toUpperCase() + "</span>";
      b.addEventListener("click", function () {
        try { localStorage.setItem(STORAGE_KEY, l.code); } catch (e) {}
        applyPage(page, l.code);
        menu.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
      li.appendChild(b);
      menu.appendChild(li);
    });

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpen = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    document.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && e.target !== btn) {
        menu.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  function init(page) {
    var lang = detectLang();
    buildSwitcher(page);
    applyPage(page, lang);
  }

  window.HH_I18N = { init: init, STRINGS: STRINGS, LANGS: LANGS };
})();
