/**
 * Texts of the page around the game frame (header, help, touch buttons, controller notices) in
 * the three languages of the original. The story is section 1 of each site's guide (`guide.html`
 * of hammerfest.fr, hfest.net and hammerfest.es, in `assets-src/site-archive/`); the control
 * names reuse the pause screen's (`Lang` statics 7 to 10) where it has them. The rest is the
 * port's own.
 *
 * Elements opt in with attributes: `data-i18n` (text), `data-i18n-html` (trusted markup from
 * this file) and `data-i18n-label` (`aria-label` and `title`). The loading texts are the
 * original loader's (`Lang` static 50), shown before the lang files load.
 */
import type { Lang } from './Language';

type PageTexts = Record<string, string>;

/** The privacy note's links (`privacy`, in the help dialog), opened in a new tab. */
const GITHUB_PRIVACY =
  'https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement';
const GOOGLE_PRIVACY = 'https://policies.google.com/privacy';
const ISSUES = 'https://github.com/Greaple/IgorsQuest/issues';
function link(href: string, text: string): string {
  return `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
}

const TEXT: Record<Lang, PageTexts> = {
  fr: {
    pageTitle: 'Igor’s Quest — Les Cavernes de Hammerfest',
    loading: 'Voyage vers Hammerfest…',
    loadError: 'Le voyage a échoué : le jeu n’a pas pu se charger.',
    retry: 'Réessayer',
    credit: 'Hammerfest © Motion Twin',
    soundOn: 'Couper le son',
    soundOff: 'Remettre le son',
    language: 'Langue',
    help: 'Aide et crédits',
    close: 'Fermer',
    jump: 'Sauter',
    left: 'Gauche',
    right: 'Droite',
    down: 'Bas',
    jumpShort: 'Sauter',
    bombShort: 'Bombe',
    helpTitle: 'Comment jouer',
    storyTitle: 'L’histoire',
    story:
      'Igor était un petit bonhomme de neige sans histoire vivant en Hammerfest. Mais ce beau pays et les fruits qui le peuplaient étaient secoués par les attaques incessantes du cruel sorcier Tuberculoz. Un jour, lassé de ses nombreux assauts sans effet, celui-ci décida de prendre les choses en main et sortit de sa Caverne… Les innocents fruits du pays de Hammerfest ne se doutaient alors pas encore du terrible plan que fomentait le sorcier…',
    controlsTitle: 'Commandes',
    move: 'Se déplacer',
    jumpKey: 'Sauter',
    spaceKey: 'ESPACE',
    bombKey: 'Poser une bombe, ou frapper une bombe toute proche',
    pauseKey: 'Pause',
    musicKey: 'Couper ou remettre la musique',
    disguiseKey: 'Changer de déguisement (une fois gagné par une quête)',
    mapKey: 'Voir la carte du monde',
    quitKey: 'Abandonner la partie (elle est enregistrée)',
    keysTitle: 'Clavier',
    padTitle: 'Manette',
    padMenus: 'Menus : valider, revenir',
    padConnected: 'Manette connectée',
    padLost: 'Manette débranchée',
    padLostPaused: 'Manette débranchée : partie en pause',
    creditsTitle: 'Crédits',
    credits:
      '<strong>Hammerfest</strong> a été créé par <strong>Motion Twin</strong> en 2006. Son code source et ses graphismes ont été publiés sous licence CC BY-NC-SA 4.0. Igor’s Quest est un remake indépendant et non commercial, pour préserver le jeu ; les graphismes, sons et niveaux restent ceux de Motion Twin.',
    linkOriginal: 'Code source original (Motion Twin)',
    linkPort: 'Code source d’Igor’s Quest',
    linkKofi: 'Soutenir le développeur sur Ko-fi (facultatif, rien à débloquer)',
    linkLicense: 'Licence CC BY-NC-SA 4.0',
    padIcons: 'Icônes de manettes, de Figma Community (CC BY 4.0) :',
    hdBitmaps:
      'Images agrandies pour les grands écrans avec un modèle de Philip Hofmann (CC BY 4.0) :',
    fonts: 'Polices libres (SIL OFL 1.1) à la place de Franklin Gothic et Impact :',
    privacyTitle: 'Confidentialité',
    privacy:
      `<p>Votre progression, vos scores et vos réglages sont gardés dans ce navigateur, sur cet appareil seulement. Le jeu ne pose aucun cookie et n’a ni publicité, ni statistiques, ni pistage. Le site est hébergé par GitHub Pages, qui, comme tout hébergeur, voit l’adresse IP des visiteurs (${link(GITHUB_PRIVACY, 'déclaration de confidentialité de GitHub')}).</p>` +
      `<p><strong>Sauvegarde en ligne (facultative).</strong> Si vous vous connectez avec Google dans les options de jeu, le jeu garde l’identifiant, l’adresse e-mail, le nom et la photo de votre compte Google (Firebase Authentication), et une copie de votre progression, de vos scores, de vos réglages et de vos touches (Cloud Firestore, dans l’Union européenne). Ils servent seulement à retrouver votre partie sur vos autres appareils : rien n’est partagé, vendu ni utilisé à autre chose. Ces services de Google Firebase suivent les ${link(GOOGLE_PRIVACY, 'règles de confidentialité de Google')} ; contre les abus, ils peuvent vérifier avec Google reCAPTCHA que les demandes viennent bien de ce site.</p>` +
      `<p>Votre sauvegarde en ligne reste jusqu’à ce que vous la supprimiez : « Supprimer en ligne », dans les options de jeu, efface pour de bon la sauvegarde et votre compte dans le jeu (votre progression reste sur cet appareil). Se déconnecter la laisse en ligne.</p>` +
      `<p>Igor’s Quest est fait par un seul développeur bénévole, Greaple. Pour toute question sur vos données, ou pour en demander une copie ou l’effacement, ouvrez un ticket sur ${link(ISSUES, 'le GitHub du projet')}.</p>`,
    devKeysTitle: 'Touches de développement',
    devKeysNote:
      'Celles du jeu original en mode développeur. Les chiffres sont ceux du pavé numérique ou de la rangée du haut. Elles ne marchent pas pendant un enregistrement ou un replay, et les lettres gardent leur usage normal (W saute aussi).',
    devGoto: 'Aller au niveau 012 (trois chiffres)',
    devItem: 'Faire apparaître l’objet spécial 012, ou l’objet à points avec Alt',
    devClear: 'Effacer les chiffres tapés',
    devNext: 'Niveau suivant',
    devKeys: 'Toutes les clés (et tue la chauve-souris)',
    devRandItem: 'Un objet spécial au hasard',
    devWeapon: 'Arme suivante',
    devGrid: 'Afficher la grille des cases, un drapeau à la fois',
    devHurry: 'Le « hurry up » arrive plus vite (H maintenu), ou tout de suite',
    devAnger: 'Énerver, calmer ou retirer tous les ennemis',
    devSlow: 'Ralenti tant que Shift est maintenu (Tuberculoz perd des vies), vitesse normale',
    devTub: 'Tuer Tuberculoz',
    devLog: 'Images par seconde, date de la version ; infos de débogage en pause (dans la console)',
    devTools: 'Outils de développement',
    ok: 'Compris !',
  },
  en: {
    pageTitle: 'Igor’s Quest — The Caverns of Hammerfest',
    loading: 'Travelling to Hammerfest…',
    loadError: 'The journey failed: the game could not load.',
    retry: 'Try again',
    credit: 'Hammerfest © Motion Twin',
    soundOn: 'Mute sound',
    soundOff: 'Turn sound on',
    language: 'Language',
    help: 'Help and credits',
    close: 'Close',
    jump: 'Jump',
    left: 'Left',
    right: 'Right',
    down: 'Down',
    jumpShort: 'Jump',
    bombShort: 'Bomb',
    helpTitle: 'How to play',
    storyTitle: 'The story',
    story:
      'Igor is a snowman who lives in the far away and cold land of Hammerfest. This beautiful country of green hills and snow-covered mountains was once shattered by the evil powers of Tuber the Sorcerer. The fruits were cursed and kidnapped and Igor found himself sad and alone without his friends. The intrepid Igor decided to go and rescue his friends the Fruits and to destroy the evil sorcerer’s plan…',
    controlsTitle: 'Controls',
    move: 'Move',
    jumpKey: 'Jump',
    spaceKey: 'SPACE',
    bombKey: 'Place a bomb, or kick a bomb next to you',
    pauseKey: 'Pause',
    musicKey: 'Music on / off',
    disguiseKey: 'Change disguise (once a quest gives one)',
    mapKey: 'Show the map of the caverns',
    quitKey: 'Give up the game (it is saved)',
    keysTitle: 'Keyboard',
    padTitle: 'Controller',
    padMenus: 'Menus: confirm, back',
    padConnected: 'Controller connected',
    padLost: 'Controller unplugged',
    padLostPaused: 'Controller unplugged: game paused',
    creditsTitle: 'Credits',
    credits:
      '<strong>Hammerfest</strong> was made by <strong>Motion Twin</strong> in 2006. Its source code and graphics were released under the CC BY-NC-SA 4.0 license. Igor’s Quest is an independent, non-commercial remake to preserve the game; the graphics, sounds and levels are still Motion Twin’s.',
    linkOriginal: 'Original source code (Motion Twin)',
    linkPort: 'Igor’s Quest source code',
    linkKofi: 'Support the developer on Ko-fi (optional, nothing to unlock)',
    linkLicense: 'CC BY-NC-SA 4.0 license',
    padIcons: 'Controller icons, from Figma Community (CC BY 4.0):',
    hdBitmaps: 'Bitmaps for big screens upscaled with a model by Philip Hofmann (CC BY 4.0):',
    fonts: 'Free fonts (SIL OFL 1.1) standing in for Franklin Gothic and Impact:',
    privacyTitle: 'Privacy',
    privacy:
      `<p>Your progress, scores and settings are kept in this browser, on this device only. The game sets no cookies and has no ads, analytics or tracking. The site is hosted by GitHub Pages, which, like any web host, sees visitors’ IP addresses (${link(GITHUB_PRIVACY, 'GitHub’s privacy statement')}).</p>` +
      `<p><strong>Online save (optional).</strong> If you sign in with Google in the game options, the game keeps your Google account’s identifier, email address, name and picture (Firebase Authentication), and a copy of your progress, scores, settings and controls (Cloud Firestore, in the European Union). They are used only to bring your game to your other devices: nothing is shared, sold or used for anything else. These Google Firebase services follow ${link(GOOGLE_PRIVACY, 'Google’s privacy policy')}; to block abuse, they may check with Google reCAPTCHA that requests come from this site.</p>` +
      `<p>Your online save stays until you delete it: “Delete online save”, in the game options, erases the save and your account in the game for good (your progress stays on this device). Signing out leaves it online.</p>` +
      `<p>Igor’s Quest is made by one volunteer developer, Greaple. For any question about your data, or to ask for a copy or for it to be erased, open an issue on ${link(ISSUES, 'the project’s GitHub')}.</p>`,
    devKeysTitle: 'Developer keys',
    devKeysNote:
      'The original game’s own dev mode keys. Digits are the numpad’s or the top row’s. They are off while recording or replaying, and letters keep their game use (W also jumps).',
    devGoto: 'Go to level 012 (three digits)',
    devItem: 'Spawn special item 012, or score item with Alt',
    devClear: 'Clear the typed digits',
    devNext: 'Next level',
    devKeys: 'Every key (and kills the Bat)',
    devRandItem: 'A random special item',
    devWeapon: 'Next weapon',
    devGrid: 'Show the case grid, one flag at a time',
    devHurry: 'Hurry up comes faster (H held), or at once',
    devAnger: 'Anger, calm or remove every enemy',
    devSlow: 'Slow motion while Shift is held (Tuberculoz loses lives), normal speed',
    devTub: 'Kill Tuberculoz',
    devLog: 'Frame rate, build date; debug infos when paused (in the console)',
    devTools: 'Developer tools',
    ok: 'Got it!',
  },
  es: {
    pageTitle: 'Igor’s Quest — Las Cavernas de Hammerfest',
    loading: 'Viajando a Hammerfest…',
    loadError: 'El viaje ha fallado: el juego no se ha podido cargar.',
    retry: 'Reintentar',
    credit: 'Hammerfest © Motion Twin',
    soundOn: 'Silenciar',
    soundOff: 'Activar el sonido',
    language: 'Idioma',
    help: 'Ayuda y créditos',
    close: 'Cerrar',
    jump: 'Saltar',
    left: 'Izquierda',
    right: 'Derecha',
    down: 'Abajo',
    jumpShort: 'Saltar',
    bombShort: 'Bomba',
    helpTitle: 'Cómo jugar',
    storyTitle: 'La historia',
    story:
      'Igor es un pequeño hombre de nieve que vive en las lejanas y frías tierras de Hammerfest. Un día este bello país de verdes colinas y montañas nevadas se vio sacudido por los maléficos poderes de Tubérculo el hechicero. ¡Las frutas fueron maldecidas y secuestradas! El intrépido Igor decidió salir en búsqueda de sus amigas las frutas para acabar con el malvado plan del hechicero…',
    controlsTitle: 'Controles',
    move: 'Desplazarse',
    jumpKey: 'Saltar',
    spaceKey: 'ESPACIO',
    bombKey: 'Poner una bomba, o golpear una bomba cercana',
    pauseKey: 'Pausa',
    musicKey: 'Activar o quitar la música',
    disguiseKey: 'Cambiar de disfraz (cuando una misión te lo da)',
    mapKey: 'Ver el mapa de las cavernas',
    quitKey: 'Abandonar la partida (se guarda)',
    keysTitle: 'Teclado',
    padTitle: 'Mando',
    padMenus: 'Menús: aceptar, volver',
    padConnected: 'Mando conectado',
    padLost: 'Mando desconectado',
    padLostPaused: 'Mando desconectado: partida en pausa',
    creditsTitle: 'Créditos',
    credits:
      '<strong>Hammerfest</strong> fue creado por <strong>Motion Twin</strong> en 2006. Su código fuente y sus gráficos se publicaron con la licencia CC BY-NC-SA 4.0. Igor’s Quest es un remake independiente y sin ánimo de lucro para preservar el juego; los gráficos, sonidos y niveles siguen siendo de Motion Twin.',
    linkOriginal: 'Código fuente original (Motion Twin)',
    linkPort: 'Código fuente de Igor’s Quest',
    linkKofi: 'Apoyar al desarrollador en Ko-fi (opcional, no desbloquea nada)',
    linkLicense: 'Licencia CC BY-NC-SA 4.0',
    padIcons: 'Iconos de mandos, de Figma Community (CC BY 4.0):',
    hdBitmaps:
      'Imágenes ampliadas para pantallas grandes con un modelo de Philip Hofmann (CC BY 4.0):',
    fonts: 'Fuentes libres (SIL OFL 1.1) en lugar de Franklin Gothic e Impact:',
    privacyTitle: 'Privacidad',
    privacy:
      `<p>Tu progreso, tus puntuaciones y tus ajustes se guardan en este navegador, solo en este dispositivo. El juego no usa cookies y no tiene publicidad, estadísticas ni rastreo. El sitio está alojado en GitHub Pages, que, como cualquier alojamiento web, ve la dirección IP de los visitantes (${link(GITHUB_PRIVACY, 'declaración de privacidad de GitHub')}).</p>` +
      `<p><strong>Guardado en línea (opcional).</strong> Si te conectas con Google en las opciones de juego, el juego guarda el identificador, la dirección de correo, el nombre y la foto de tu cuenta de Google (Firebase Authentication), y una copia de tu progreso, tus puntuaciones, tus ajustes y tus controles (Cloud Firestore, en la Unión Europea). Solo sirven para llevar tu partida a tus otros dispositivos: nada se comparte, se vende ni se usa para otra cosa. Estos servicios de Google Firebase siguen la ${link(GOOGLE_PRIVACY, 'política de privacidad de Google')}; contra los abusos, pueden comprobar con Google reCAPTCHA que las peticiones vienen de este sitio.</p>` +
      `<p>Tu guardado en línea se queda hasta que lo borres: «Borrar en línea», en las opciones de juego, borra para siempre el guardado y tu cuenta en el juego (tu progreso se queda en este dispositivo). Desconectarte lo deja en línea.</p>` +
      `<p>Igor’s Quest lo hace un solo desarrollador voluntario, Greaple. Para cualquier pregunta sobre tus datos, o para pedir una copia o que se borren, abre una incidencia en ${link(ISSUES, 'el GitHub del proyecto')}.</p>`,
    devKeysTitle: 'Teclas de desarrollo',
    devKeysNote:
      'Las del modo desarrollador del juego original. Las cifras son las del teclado numérico o de la fila de arriba. No funcionan durante una grabación o una repetición, y las letras siguen con su uso normal (W también salta).',
    devGoto: 'Ir al nivel 012 (tres cifras)',
    devItem: 'Hacer aparecer el objeto especial 012, o el objeto de puntos con Alt',
    devClear: 'Borrar las cifras tecleadas',
    devNext: 'Nivel siguiente',
    devKeys: 'Todas las llaves (y mata al murciélago)',
    devRandItem: 'Un objeto especial al azar',
    devWeapon: 'Arma siguiente',
    devGrid: 'Mostrar la cuadrícula de casillas, una bandera cada vez',
    devHurry: 'El «hurry up» llega más rápido (H pulsada), o enseguida',
    devAnger: 'Enfadar, calmar o quitar a todos los enemigos',
    devSlow: 'Cámara lenta mientras Shift está pulsada (Tuberculoz pierde vidas), velocidad normal',
    devTub: 'Matar a Tuberculoz',
    devLog:
      'Imágenes por segundo, fecha de la versión; información de depuración en pausa (en la consola)',
    devTools: 'Herramientas de desarrollo',
    ok: '¡Entendido!',
  },
};

/** The page text `key` in language `lang`. */
export function pageText(lang: Lang, key: string): string {
  return TEXT[lang][key] ?? TEXT.en[key] ?? key;
}

/** Writes the page's texts in language `lang`. */
export function applyPageText(lang: Lang, root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    el.textContent = pageText(lang, el.dataset.i18n ?? '');
  });
  root.querySelectorAll<HTMLElement>('[data-i18n-html]').forEach((el) => {
    el.innerHTML = pageText(lang, el.dataset.i18nHtml ?? '');
  });
  root.querySelectorAll<HTMLElement>('[data-i18n-label]').forEach((el) => {
    const s = pageText(lang, el.dataset.i18nLabel ?? '');
    el.setAttribute('aria-label', s);
    el.title = s;
  });
  if (root === document) {
    document.documentElement.lang = lang;
    document.title = pageText(lang, 'pageTitle');
  }
}

/** Every key, for the test that each language has them all. */
export const PAGE_TEXT_KEYS: Record<Lang, string[]> = {
  fr: Object.keys(TEXT.fr),
  en: Object.keys(TEXT.en),
  es: Object.keys(TEXT.es),
};
