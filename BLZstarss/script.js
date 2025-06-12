 // === Onglets de navigation ===
const tabButtons = document.querySelectorAll('nav .tab-button');
const sections = document.querySelectorAll('main > section');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    sections.forEach(sec => {
      if (sec.id === btn.dataset.target) {
        sec.classList.add('active');
      } else {
        sec.classList.remove('active');
      }
    });
  });
});

// === Exemple de vidéos (remplace/complète avec la vraie liste) ===
const videos = [
   {
    title: "Pourquoi Astérion n'a pas Disparu ?",
    views: "15 k vues",
    date: "28/05/2025",
    summary: " examine les raisons pour lesquelles le créateur de contenu Astérion reste actif sur les réseaux sociaux malgré les controverses qui l'entourent."
  },
  {
    title: "La Chute Inévitable de Dream...",
    views: "17 k vues",
    date: "18/05/2025",
    summary: "Analyse des raisons qui mènent à la chute programmée de Dream, la star de YouTube, en mettant en lumière ses erreurs et ses controverses récentes."
  },
  {
    title: "Le Problème avec Studio Bubble Tea...",
    views: "49 k vues",
    date: "14/05/2025",
    summary: "Critique du Studio Bubble Tea et des défauts cachés derrière ses productions qui déçoivent de plus en plus les fans."
  },
  {
    title: "Cyprien n'a Jamais Chuté...",
    views: "52 k vues",
    date: "10/05/2025",
    summary: "Discussion sur l'incroyable constance de Cyprien, qui malgré les aléas du web, ne semble jamais perdre sa popularité."
  },
  {
    title: "Pokimane est Hypocrite ?",
    views: "46 k vues",
    date: "01/05/2025",
    summary: "Enquête et accusations d'hypocrisie autour de Pokimane, avec des exemples précis de ses contradictions publiques."
  },
  {
    title: "La Vérité sur la Mère de Swan et Néo...",
    views: "64 k vues",
    date: "21/04/2025",
    summary: "Révélations sur la mère de Swan et Néo, révélant des détails personnels jusque-là inconnus du public."
  },
  {
    title: "Où est Passé Alan FoodChallenge ?",
    views: "50 k vues",
    date: "19/04/2025",
    summary: "Analyse de la disparition d'Alan FoodChallenge des réseaux, entre choix personnels et pressions externes."
  },
  {
    title: "Pourquoi Hugoposé a Chuté ? (selon moi)",
    views: "44 k vues",
    date: "17/04/2025",
    summary: "Point de vue personnel sur la raison de la chute d'Hugoposé, entre erreurs de communication et perte d'audience."
  },
  {
    title: "(+13) L'horreur Cachée derrière les Shorts YouTube...",
    views: "50 k vues",
    date: "15/04/2025",
    summary: "Explication des dangers et aspects cachés des Shorts YouTube, souvent ignorés par les utilisateurs."
  },
  {
    title: "Le Milliardaire Détesté d'Internet...",
    views: "21 k vues",
    date: "14/04/2025",
    summary: "Portrait d'un milliardaire très controversé, détesté par la communauté internet pour ses actes."
  },
  {
    title: "La Chute Méritée de Lama Fâché...",
    views: "221 k vues",
    date: "13/04/2025",
    summary: "Récit de la chute de Lama Fâché, jugée méritée après une série de mauvais choix."
  },
  {
    title: "L'histoire et les Scandales de Michou...",
    views: "32 k vues",
    date: "12/04/2025",
    summary: "Retour sur les scandales qui ont marqué la carrière de Michou."
  },
  {
    title: "Le plus gros Détraqué d'internet...",
    views: "61 k vues",
    date: "12/04/2025",
    summary: "Portrait d'un individu très controversé qui choque la communauté internet par son comportement."
  },
  {
    title: "Faut qu'on parle...",
    views: "21 k vues",
    date: "11/04/2025",
    summary: "Vidéo personnelle où l'auteur aborde des sujets sensibles et importants à discuter."
  },
  {
    title: "L'entreprise qui Manipule des TikTokeurs...",
    views: "25 k vues",
    date: "10/03/2025",
    summary: "Enquête sur une entreprise qui manipule des créateurs TikTok pour son profit."
  },
  {
    title: "Le Groupe Roblox qui Cache un FOU...",
    views: "62 k vues",
    date: "08/03/2025",
    summary: "Révélations sur un groupe Roblox dirigé par une personne à problème mental."
  },
  {
    title: "(13+) Sophie Rain est une Prostituée...",
    views: "116 k vues",
    date: "05/02/2025",
    summary: "Accusations graves envers Sophie Rain, vidéo pour public averti."
  },
  {
    title: "(13+) Cette Streameuse a Dérapé... (2/2)",
    views: "56 k vues",
    date: "03/02/2025",
    summary: "Analyse des dérapages publics d'une streameuse controversée."
  },
  {
    title: "Nasdas est Dangereux ?!",
    views: "37 k vues",
    date: "01/02/2025",
    summary: "Enquête sur la dangerosité de Nasdas, créateur au comportement problématique."
  },
  {
    title: "(13+) La Yandere M*urtrière Adorée...",
    views: "37 k vues",
    date: "01/02/2025",
    summary: "Portrait d'une figure yandere admirée malgré son passé violent."
  },
  {
    title: "Le plus gros Drama de l'année...",
    views: "43 k vues",
    date: "01/01/2025",
    summary: "Résumé du plus gros scandale de l'année écoulée."
  },
  {
    title: "Le Prochain GTA ne Sauvera pas LaSalle...",
    views: "43 k vues",
    date: "01/01/2025",
    summary: "Discussion critique sur l'avenir de LaSalle avec la sortie du prochain GTA."
  },
  {
    title: "La fin Inévitable d'Overspes...",
    views: "58 k vues",
    date: "01/01/2025",
    summary: "Analyse de la fin annoncée de Overspes."
  },
  {
    title: "(13+) L'application où tu peux Voir des **** Dessinés...",
    views: "157 k vues",
    date: "01/12/2024",
    summary: "Exposition d'une application controversée avec contenu inapproprié."
  },
  {
    title: "La Pire Chute du YouTube Français...",
    views: "24 k vues",
    date: "01/12/2024",
    summary: "Analyse d'une des plus grosses chutes chez les YouTubers français."
  },
  {
    title: "Comment Laupok en est-t'il arrivé là ?",
    views: "35 k vues",
    date: "01/12/2024",
    summary: "Retour sur le parcours difficile de Laupok."
  },
  {
    title: "(13+) La Pire Streameuse ? (Racisme, etc..) (1/2)",
    views: "110 k vues",
    date: "01/12/2024",
    summary: "Décryptage des controverses autour d'une streameuse très critiquée."
  },
  {
    title: "(13+) La Folle Instable de Gacha Life...",
    views: "78 k vues",
    date: "01/11/2024",
    summary: "Portrait d'une personnalité instable dans l'univers Gacha Life."
  },
  {
    title: "(13+) Voici Pourquoi Cette Personne est Très Dangereuse...",
    views: "208 k vues",
    date: "01/11/2024",
    summary: "Explication des raisons qui rendent cette personne dangereuse."
  },
  {
    title: "La Chute Méritée de Noa...",
    views: "235 k vues",
    date: "01/11/2024",
    summary: "Analyse de la chute de Noa, largement méritée."
  },
  {
    title: "La fois où tout le monde s'est fait Manipulé 2...",
    views: "21 k vues",
    date: "01/09/2024",
    summary: "Deuxième partie d'une série sur une manipulation massive du public."
  },
  {
    title: "Pourquoi Hyra est Considéré comme un TARÉ !? (1/2)",
    views: "111 k vues",
    date: "01/09/2024",
    summary: "Premières révélations sur Hyra et son comportement choquant."
  },
  {
    title: "Ce que je Vous ai Caché sur NUFFI...",
    views: "19 k vues",
    date: "01/09/2024",
    summary: "Secrets révélés sur NUFFI."
  },
  {
    title: "La Face Cachée de FREEZIE...",
    views: "85 k vues",
    date: "01/09/2024",
    summary: "Découverte des aspects cachés de FREEZIE."
  },
  {
    title: "Ce tiktoker détesté... Pour rien.",
    views: "40 k vues",
    date: "01/08/2024",
    summary: "Défense d'un tiktoker injustement critiqué."
  },
  {
    title: "Passer de MENTEUR à véritable GOAT !",
    views: "152 k vues",
    date: "01/07/2024",
    summary: "Parcours de rédemption d'une personnalité controversée."
  },
  {
    title: "Le Gros Problème de DISCORD... (feat Punisher)",
    views: "38 k vues",
    date: "01/07/2024",
    summary: "Analyse des problèmes majeurs sur Discord, avec la participation de Punisher."
  },
  {
    title: "L'endroit où tu dois M0URIR pour Faire des VUES... (ft. Ashlord)",
    views: "60 k vues",
    date: "01/06/2024",
    summary: "Explications sur un lieu extrême où certains font tout pour gagner des vues."
  },
  {
    title: "J'ai Du Faire ça à Cause de PUNISHER...",
    views: "20 k vues",
    date: "21/05/2024",
    summary: "Vidéo explicative sur des choix forcés à cause de Punisher."
  },
  {
    title: "La Fois où Tout le Monde s'est fait MANIPULÉ...",
    views: "64 k vues",
    date: "20/05/2024",
    summary: "Retour sur un événement de manipulation de masse."
  },
  {
    title: "J'ai Survécu 200 Jours Sur Paladium... (@FuzeIII est mort la wsh...)",
    views: "2,7 k vues",
    date: "20/05/2024",
    summary: "Témoignage de survie dans le jeu Paladium."
  },
  {
    title: "J'ai Survécu 100 Jours Sur Paladium... (fuze en sueur)",
    views: "4,2 k vues",
    date: "20/05/2023",
    summary: "Défis et péripéties pendant 100 jours sur Paladium."
  },
  {
    title: "Avoir une légendaire dans une petite boite ! 0,0000173% de chance brawls stars #7",
    views: "3,2 k vues",
    date: "20/05/2021",
    summary: "Vidéo sur la chance incroyable d'obtenir une légendaire dans Brawl Stars."
  }
];

// === Commandes du Bot (exemple) ===
const botCommands = [
  {
    title: "info-bot",
    status: "Disponible",
    description: "cette commande sert a connaître les informations principales du bot."
  },
  {
    title: "bug",
    status: "En réparation",
    description: "quand vous remarquez un bug vous pouvez l'exécuter en détaillant le plus possible le problème je recevrais un message pour que je puisse régler le bug !."
  },
    {
    title: "points",
    status: "Disponible",
    description: " cela vous permet de voir combien vous avez de points (plus d'infos a propos des points ci dessous)"
  },
  {
    title: "toppoints",
    status: "Disponible",
    description: "cette commande vous permet de voir le to 10 des premiers utilisateur a avoir des points."
  },
    {
    title: "stats",
    status: "En réparation",
    description: "cela vous permet de voir les statistiques principales comme les modérateur, les modérateur en ligne etc."
  }
];
// Afficher les rôles des membres du staff
  document.querySelectorAll('.staff-member').forEach(member => {
    member.addEventListener('click', () => {
      member.classList.toggle('active');
    });
  });

const botSearchInput = document.getElementById("bot-search");
const botSuggestions = document.getElementById("bot-suggestions");
const botContainer = document.getElementById("bot-container");

function displayBotCommands(commands) {
  if (!botContainer) return;
  botContainer.innerHTML = "";

  if (commands.length === 0) {
    botContainer.innerHTML = '<p style="color:#999; font-style:italic;">Aucune commande trouvée.</p>';
    return;
  }

  commands.forEach(command => {
    const div = document.createElement("div");
    div.className = "bot-command";

    const title = document.createElement("h3");
    title.className = "bot-title";
    title.textContent = `${command.title} (${command.status})`;

    const desc = document.createElement("div");
    desc.className = "bot-description";
    desc.textContent = command.description;

    // Clic pour afficher/masquer la description
    title.addEventListener("click", () => {
      desc.classList.toggle("active");
    });

    div.appendChild(title);
    div.appendChild(desc);
    botContainer.appendChild(div);
  });
}

function filterBotCommands(query) {
  if (!botSuggestions) return;
  if (!query) {
    botSuggestions.innerHTML = "";
    return;
  }
  const filtered = botCommands.filter(cmd =>
    cmd.title.toLowerCase().includes(query.toLowerCase())
  );

  displayBotSuggestions(filtered);
}

function displayBotSuggestions(filtered) {
  if (!botSuggestions) return;
  botSuggestions.innerHTML = "";
  if (filtered.length === 0) {
    botSuggestions.innerHTML = '<div class="no-suggestion">Aucune suggestion</div>';
    return;
  }

  filtered.forEach(cmd => {
    const div = document.createElement("div");
    div.className = "suggestion-item";
    div.textContent = cmd.title;
    div.addEventListener("click", () => {
      if (botSearchInput) botSearchInput.value = cmd.title;
      botSuggestions.innerHTML = "";
      displayBotCommands([cmd]);
    });
    botSuggestions.appendChild(div);
  });
}

if (botSearchInput) {
  botSearchInput.addEventListener("input", e => {
    const query = e.target.value.trim();
    filterBotCommands(query);
    if (!query) {
      displayBotCommands(botCommands);
    }
  });
}

displayBotCommands(botCommands);

// === Affichage des rôles Staff ===
const staffMembers = document.querySelectorAll('.staff-member');
staffMembers.forEach(member => {
  member.addEventListener('click', () => {
    const role = member.querySelector('.role');
    if (role) {
      role.classList.toggle('active');
    }
  });
});

// === Bouton "Accepter le règlement" ===
const acceptBtn = document.getElementById('accept-button');
if (acceptBtn) {
  acceptBtn.addEventListener('click', () => {
    acceptBtn.disabled = true;
    acceptBtn.textContent = "Redirection...";
    setTimeout(() => {
      window.location.href = "https://discord.gg/UarWXUgXJE"; // Remplace par ton lien d'invitation réel
    }, 4000);
  });
}

// === Gestion des vidéos (affichage, recherche, suggestions) ===
const searchInput = document.getElementById("video-search");
const suggestionsDiv = document.getElementById("suggestions");
const videosContainer = document.getElementById("videos-container");

function displayVideos(videosList) {
  if (!videosContainer) return;
  videosContainer.innerHTML = "";
  if (videosList.length === 0) {
    videosContainer.innerHTML = '<p style="color:#999; font-style:italic;">Aucune vidéo trouvée.</p>';
    return;
  }

  videosList.forEach(video => {
    const div = document.createElement("div");
    div.className = "video-item";

    const title = document.createElement("h3");
    title.className = "video-title";
    title.textContent = video.title;

    const infos = document.createElement("p");
    infos.className = "video-meta";
    infos.textContent = `${video.views} • ${video.date}`;

    const summary = document.createElement("div");
    summary.className = "video-summary";
    summary.textContent = video.summary;

    title.addEventListener("click", () => {
      div.classList.toggle("active");
    });

    div.appendChild(title);
    div.appendChild(infos);
    div.appendChild(summary);
    videosContainer.appendChild(div);
  });
}

function displaySuggestions(filteredVideos) {
  if (!suggestionsDiv) return;
  suggestionsDiv.innerHTML = "";
  if (filteredVideos.length === 0) {
    suggestionsDiv.innerHTML = '<div class="no-suggestion">Aucune suggestion</div>';
    return;
  }

  filteredVideos.forEach(video => {
    const div = document.createElement("div");
    div.className = "suggestion-item";
    div.textContent = video.title;
    div.addEventListener("click", () => {
      if (searchInput) searchInput.value = video.title;
      suggestionsDiv.innerHTML = "";
      displayVideos([video]);
    });
    suggestionsDiv.appendChild(div);
  });
}

function filterVideos(query) {
  if (!suggestionsDiv) return;
  if (!query) {
    suggestionsDiv.innerHTML = "";
    return;
  }
  const filtered = videos.filter(video =>
    video.title.toLowerCase().includes(query.toLowerCase())
  );
  displaySuggestions(filtered);
}

if (searchInput) {
  searchInput.addEventListener("input", e => {
    const query = e.target.value.trim();
    filterVideos(query);
    if (!query) {
      displayVideos(videos);
    }
  });
}
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('nav');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
  });

  // Fermer le menu si on clique sur un bouton
  document.querySelectorAll('nav .tab-button').forEach(btn => {
    btn.addEventListener('click', () => {
      if(nav.classList.contains('open')) {
        nav.classList.remove('open');
        hamburger.classList.remove('open');
      }
    });
  });
// Afficher toutes les vidéos au chargement
displayVideos(videos);

  const customizerPanel = document.getElementById('customizerPanel');

function toggleCustomizer() {
  customizerPanel.classList.toggle('open');
}

const elementsToStyle = {
  buttons: () => document.querySelectorAll('button:not(.code-btn):not(.role-fixed)'),
  text: () => document.querySelectorAll('body *:not(script):not(style):not(.code-text):not(.role-fixed)')
};

const themes = {
  dark:        { font: "Verdana",           textColor: "#111111", buttonColor: "#444444", bgColor: "#111111" },
  light:       { font: "Arial",             textColor: "#000000", buttonColor: "#dddddd", bgColor: "#ffffff" },
  red:         { font: "'Courier New'",     textColor: "#ffdddd", buttonColor: "#660000", bgColor: "#220000" },
  blue:        { font: "'Times New Roman'", textColor: "#ddeeff", buttonColor: "#003366", bgColor: "#001122" },
  ocean:       { font: "'Trebuchet MS'",    textColor: "#007f9a", buttonColor: "#007f9a", bgColor: "#002f4b" },
  espace:      { font: "'Orbitron'",        textColor: "#cfcfff", buttonColor: "#333366", bgColor: "#000010" },
  feu:         { font: "'Impact'",          textColor: "#ffccaa", buttonColor: "#cc3300", bgColor: "#330000" },
  neige:       { font: "'Segoe UI'",        textColor: "#003366", buttonColor: "#cceeff", bgColor: "#ffffff" },
  cyberpunk:   { font: "'Lucida Console'",  textColor: "#39ff14", buttonColor: "#ff00ff", bgColor: "#000000" },
  japonais:    { font: "'Noto Sans JP'",    textColor: "#1f1f1f", buttonColor: "#ffcccc", bgColor: "#fff0f0" },
  retro:       { font: "'Courier New'",     textColor: "#00ff00", buttonColor: "#000000", bgColor: "#111111" },
  spacegray:   { font: "'Helvetica Neue'",  textColor: "#dddddd", buttonColor: "#444",    bgColor: "#222" },
  sakura:      { font: "'Comic Sans MS'",   textColor: "#d63384", buttonColor: "#ffc0cb", bgColor: "#fff0f5" },
  toxic:       { font: "'Consolas'",        textColor: "#ccff00", buttonColor: "#333300", bgColor: "#111100" },
  sunset:      { font: "'Georgia'",         textColor: "#ffcc99", buttonColor: "#ff9966", bgColor: "#330000" },
  hacker:      { font: "'Courier New'",     textColor: "#00ff00", buttonColor: "#003300", bgColor: "#000000" },
  forest:      { font: "'Garamond'",        textColor: "#001a00", buttonColor: "#336633", bgColor: "#001a00" },
  neon:        { font: "'Arial Black'",     textColor: "#00ffff", buttonColor: "#00ffff", bgColor: "#1a1a1a" },
  candy:       { font: "'Comic Sans MS'",   textColor: "#ff66cc", buttonColor: "#ffccff", bgColor: "#ffe6f2" }
};

function applyTheme(themeName) {
  const theme = themes[themeName];
  if (!theme) return;

  // Mettre à jour les valeurs dans les inputs
  document.getElementById('fontSelect').value = theme.font;
  document.getElementById('textColorPicker').value = theme.textColor;
  document.getElementById('buttonColorPicker').value = theme.buttonColor;
  document.getElementById('bgColorPicker').value = theme.bgColor;

  // Mettre à jour le style du select
  const selector = document.getElementById("themeSelector");
  selector.style.color = theme.textColor;
  selector.style.backgroundColor = theme.buttonColor;
  selector.style.border = `1px solid ${theme.textColor}`;

  applyCustomization(); // Appliquer les styles directement
}

function applyCustomization(save = true) {
  const font = document.getElementById('fontSelect').value;
  const textColor = document.getElementById('textColorPicker').value;
  const buttonColor = document.getElementById('buttonColorPicker').value;
  const bgColor = document.getElementById('bgColorPicker').value;
  const borderRadius = document.getElementById('radiusPicker').value;

  elementsToStyle.text().forEach(el => {
    el.style.fontFamily = font;
    el.style.color = textColor;
  });

  elementsToStyle.buttons().forEach(el => {
    el.style.backgroundColor = buttonColor;
    el.style.color = textColor;
    el.style.border = "none";
    el.style.borderRadius = borderRadius + "px";
    el.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
  });

  document.body.style.backgroundColor = bgColor;

  if (save) {
    localStorage.setItem('blz_custom_style', JSON.stringify({ font, textColor, buttonColor, bgColor, borderRadius }));
  }
}

function resetCustomization() {
  localStorage.removeItem('blz_custom_style');
  location.reload();
}

function loadSavedCustomization() {
  const saved = localStorage.getItem('blz_custom_style');
  if (!saved) return;
  const { font, textColor, buttonColor, bgColor, borderRadius } = JSON.parse(saved);

  document.getElementById('fontSelect').value = font;
  document.getElementById('textColorPicker').value = textColor;
  document.getElementById('buttonColorPicker').value = buttonColor;
  document.getElementById('bgColorPicker').value = bgColor;
  document.getElementById('radiusPicker').value = borderRadius;

  applyCustomization(false);
}

document.getElementById('themeSelect').addEventListener('change', (e) => {
  if (e.target.value) {
    applyTheme(e.target.value);
  }
});

window.addEventListener('load', () => {
  loadSavedCustomization();
});

window.onloadTurnstileCallback = function () {
  turnstile.render("#myWidget", {
    sitekey: "0x4AAAAAABg0F_tANoVSt1OS",
    callback: function (token) {
      console.log(`Challenge Success ${token}`);
      setTimeout(() => {
        document.querySelector(".body").style.display = "flex";
        document.getElementById("myWidget").style.display = "none";
      }, 2000);
    },
  });
};