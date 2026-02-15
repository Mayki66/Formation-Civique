const questionsData = [
    // --- SYMBOLES & VALEURS ---
    {
        theme: "Valeurs & Symboles",
        question: "Quelle est la devise de la République française ?",
        options: ["Travail, Famille, Patrie", "Liberté, Égalité, Fraternité", "Honneur et Patrie", "Vérité et Justice"],
        correct: 1,
        explanation: "La devise Liberté, Égalité, Fraternité est héritée de la Révolution et inscrite dans la Constitution."
    },
    {
        theme: "Valeurs & Symboles",
        question: "Que représente le buste de Marianne ?",
        options: ["La mode française", "La République française", "La résistance", "La gastronomie"],
        correct: 1,
        explanation: "Marianne est une figure allégorique de la République. Elle porte le bonnet phrygien (symbole de liberté)."
    },
    {
        theme: "Valeurs & Symboles",
        question: "Quelles sont les trois couleurs du drapeau français ?",
        options: ["Bleu, Blanc, Rouge", "Vert, Blanc, Rouge", "Bleu, Jaune, Rouge", "Rouge, Blanc, Bleu"],
        correct: 0,
        explanation: "Bleu et Rouge (Paris) encadrent le Blanc (Royauté), symbolisant l'union de la Nation."
    },
    {
        theme: "Valeurs & Symboles",
        question: "Quel est l'hymne national de la France ?",
        options: ["Le Chant du Départ", "La Marseillaise", "L'Hymne à l'Amour", "God Save the King"],
        correct: 1,
        explanation: "La Marseillaise a été écrite par Rouget de Lisle en 1792."
    },
    {
        theme: "Valeurs & Symboles",
        question: "Le 14 juillet commémore :",
        options: ["L'armistice de 1918", "La prise de la Bastille (1789)", "La mort du Roi", "La Libération"],
        correct: 1,
        explanation: "C'est la Fête Nationale qui commémore la prise de la Bastille (1789) et la Fête de la Fédération (1790)."
    },
    {
        theme: "Valeurs & Symboles",
        question: "Que signifie le principe de 'Laïcité' ?",
        options: ["L'interdiction des religions", "La séparation des Églises et de l'État", "L'obligation d'être catholique", "Le refus de croire"],
        correct: 1,
        explanation: "L'État est neutre et garantit la liberté de conscience (croire ou ne pas croire)."
    },

    // --- INSTITUTIONS ---
    {
        theme: "Institutions",
        question: "Qui est le chef de l'État ?",
        options: ["Le Premier ministre", "Le Président de la République", "Le Président du Sénat", "Le Maire"],
        correct: 1,
        explanation: "Le Président de la République est élu au suffrage universel direct."
    },
    {
        theme: "Institutions",
        question: "Où réside le Président de la République ?",
        options: ["Au Palais de l'Élysée", "À l'Hôtel Matignon", "Au Palais Bourbon", "Au Louvre"],
        correct: 0,
        explanation: "Le Palais de l'Élysée est la résidence officielle du chef de l'État."
    },
    {
        theme: "Institutions",
        question: "Qui dirige le Gouvernement ?",
        options: ["Le Président", "Le Premier ministre", "Le Ministre de l'Intérieur", "Les Députés"],
        correct: 1,
        explanation: "Le Premier ministre dirige l'action du Gouvernement. Il est nommé par le Président."
    },
    {
        theme: "Institutions",
        question: "Quelle est la durée du mandat du Président (le quinquennat) ?",
        options: ["4 ans", "5 ans", "7 ans", "10 ans"],
        correct: 1,
        explanation: "Le Président est élu pour 5 ans (depuis l'année 2000)."
    },
    {
        theme: "Institutions",
        question: "Où sont votées les lois ?",
        options: ["Au Parlement", "À l'Élysée", "Au Tribunal", "Dans les mairies"],
        correct: 0,
        explanation: "Le Parlement (Assemblée nationale + Sénat) détient le pouvoir législatif (voter la loi)."
    },
    {
        theme: "Institutions",
        question: "Quel est l'âge de la majorité légale en France ?",
        options: ["16 ans", "18 ans", "21 ans", "25 ans"],
        correct: 1,
        explanation: "À 18 ans, on devient citoyen à part entière (droit de vote)."
    },
    {
        theme: "Institutions",
        question: "Combien y a-t-il de députés à l'Assemblée nationale ?",
        options: ["100", "348", "577", "900"],
        correct: 2,
        explanation: "Il y a 577 députés élus par le peuple."
    },
    {
        theme: "Institutions",
        question: "Qui a le droit de vote en France ?",
        options: ["Seulement les hommes", "Les citoyens français majeurs", "Ceux qui paient des impôts", "Tout le monde"],
        correct: 1,
        explanation: "Il faut être de nationalité française, avoir 18 ans et jouir de ses droits civiques."
    },

    // --- HISTOIRE ---
    {
        theme: "Histoire",
        question: "Qui est surnommé le 'Roi Soleil' ?",
        options: ["Charlemagne", "Louis XIV", "Henri IV", "Napoléon"],
        correct: 1,
        explanation: "Louis XIV (le Roi Soleil) a fait construire le château de Versailles pour y installer sa cour."
    },
    {
        theme: "Histoire",
        question: "En quelle année a débuté la Révolution française ?",
        options: ["1515", "1789", "1848", "1945"],
        correct: 1,
        explanation: "1789 marque la fin de l'Ancien Régime et la Déclaration des Droits de l'Homme."
    },
    {
        theme: "Histoire",
        question: "Qui fut le premier Empereur des Français ?",
        options: ["Clovis", "Napoléon Bonaparte", "Charles de Gaulle", "François Ier"],
        correct: 1,
        explanation: "Napoléon Ier a été sacré empereur en 1804."
    },
    {
        theme: "Histoire",
        question: "Dates de la Première Guerre mondiale :",
        options: ["1870-1871", "1914-1918", "1939-1945", "1954-1962"],
        correct: 1,
        explanation: "La 'Grande Guerre' a duré 4 ans, de 1914 à 1918."
    },
    {
        theme: "Histoire",
        question: "Qui a lancé l'appel du 18 juin 1940 ?",
        options: ["Le Maréchal Pétain", "Le Général de Gaulle", "Jean Moulin", "Georges Clemenceau"],
        correct: 1,
        explanation: "Depuis Londres, le Général de Gaulle a appelé les Français à résister contre l'occupation nazie."
    },
    {
        theme: "Histoire",
        question: "Quand les femmes ont-elles obtenu le droit de vote ?",
        options: ["1789", "1905", "1944", "1981"],
        correct: 2,
        explanation: "Elles ont obtenu le droit de vote en 1944 et ont voté pour la première fois en 1945."
    },
    {
        theme: "Histoire",
        question: "En quelle année la peine de mort a-t-elle été abolie ?",
        options: ["1945", "1968", "1981", "2002"],
        correct: 2,
        explanation: "Sous la présidence de François Mitterrand, grâce au combat de Robert Badinter."
    },
    {
        theme: "Histoire",
        question: "Qui a rendu l'école gratuite, laïque et obligatoire ?",
        options: ["Jules Ferry", "Victor Hugo", "Napoléon", "Charlemagne"],
        correct: 0,
        explanation: "Les lois Jules Ferry (1881-1882) sont le socle de l'école républicaine."
    },
    {
        theme: "Histoire",
        question: "L'abolition définitive de l'esclavage date de :",
        options: ["1789", "1848", "1905", "1945"],
        correct: 1,
        explanation: "L'esclavage a été aboli en 1848 (IIe République) sous l'impulsion de Victor Schœlcher."
    },
    {
        theme: "Histoire",
        question: "Qui est Jeanne d'Arc ?",
        options: ["Une reine de France", "Une héroïne qui a combattu les Anglais", "Une écrivaine", "La femme de Napoléon"],
        correct: 1,
        explanation: "Elle a aidé Charles VII à libérer la France pendant la Guerre de Cent Ans (XVe siècle)."
    },

    // --- GÉOGRAPHIE ---
    {
        theme: "Géographie",
        question: "Quelle est la capitale de la France ?",
        options: ["Lyon", "Marseille", "Paris", "Bordeaux"],
        correct: 2,
        explanation: "Paris est la capitale politique, économique et culturelle."
    },
    {
        theme: "Géographie",
        question: "Quel fleuve traverse Paris ?",
        options: ["La Loire", "La Seine", "Le Rhône", "La Garonne"],
        correct: 1,
        explanation: "C'est la Seine qui coule à Paris."
    },
    {
        theme: "Géographie",
        question: "Quel est le plus haut sommet d'Europe situé en France ?",
        options: ["Le Pic du Midi", "Le Mont Blanc", "Le Puy de Dôme", "L'Etna"],
        correct: 1,
        explanation: "Le Mont Blanc, dans les Alpes, culmine à environ 4807 mètres."
    },
    {
        theme: "Géographie",
        question: "La France est bordée à l'Ouest par :",
        options: ["La Mer Méditerranée", "L'Océan Atlantique", "La Mer du Nord", "L'Océan Indien"],
        correct: 1,
        explanation: "L'Océan Atlantique borde toute la côte Ouest."
    },
    {
        theme: "Géographie",
        question: "Quel pays est frontalier avec la France ?",
        options: ["Le Portugal", "La Pologne", "L'Espagne", "La Grèce"],
        correct: 2,
        explanation: "L'Espagne partage la frontière des Pyrénées avec la France."
    },
    {
        theme: "Géographie",
        question: "Citez un département d'Outre-Mer (DROM) :",
        options: ["La Corse", "La Guadeloupe", "La Bretagne", "Tahiti"],
        correct: 1,
        explanation: "La Guadeloupe, la Martinique, la Guyane, la Réunion et Mayotte sont des départements d'Outre-mer."
    },
    {
        theme: "Géographie",
        question: "Quelle est la forme géométrique souvent utilisée pour décrire la France ?",
        options: ["Le Carré", "L'Hexagone", "Le Cercle", "Le Triangle"],
        correct: 1,
        explanation: "La France métropolitaine a 6 côtés, d'où le surnom 'l'Hexagone'."
    },

    // --- CULTURE ---
    {
        theme: "Culture",
        question: "Qui a écrit 'Les Misérables' ?",
        options: ["Molière", "Victor Hugo", "Émile Zola", "Albert Camus"],
        correct: 1,
        explanation: "Victor Hugo est un écrivain majeur du XIXe siècle, inhumé au Panthéon."
    },
    {
        theme: "Culture",
        question: "Qui est Molière ?",
        options: ["Un peintre", "Un dramaturge (auteur de théâtre)", "Un scientifique", "Un roi"],
        correct: 1,
        explanation: "Molière (Jean-Baptiste Poquelin) est le plus célèbre auteur de comédies français."
    },
    {
        theme: "Culture",
        question: "Le Tour de France est une compétition de :",
        options: ["Voile", "Tennis", "Cyclisme (vélo)", "Course à pied"],
        correct: 2,
        explanation: "C'est la plus grande course cycliste au monde, chaque année en juillet."
    },
    {
        theme: "Culture",
        question: "Qu'est-ce que le TGV ?",
        options: ["Train à Grande Vitesse", "Transport Général de Ville", "Tramway du Grand Versailles", "Taxe Générale"],
        correct: 0,
        explanation: "Le TGV permet de relier les grandes villes françaises très rapidement."
    },
    {
        theme: "Culture",
        question: "Quel monument parisien a été construit pour l'Exposition de 1889 ?",
        options: ["L'Arc de Triomphe", "La Tour Eiffel", "Le Louvre", "Notre-Dame"],
        correct: 1,
        explanation: "La Tour Eiffel, œuvre de Gustave Eiffel, devait être éphémère à l'origine."
    },
    {
        theme: "Culture",
        question: "Marie Curie est célèbre pour :",
        options: ["Ses peintures", "Ses recherches sur la radioactivité", "Ses romans", "Son rôle politique"],
        correct: 1,
        explanation: "Elle a reçu deux prix Nobel (Physique et Chimie). Ses cendres sont au Panthéon."
    },
    {
        theme: "Culture",
        question: "Quel est le plat typique de Marseille ?",
        options: ["La Choucroute", "La Bouillabaisse", "Le Cassoulet", "La Crêpe"],
        correct: 1,
        explanation: "La Bouillabaisse est une soupe de poissons traditionnelle."
    },
    
    // --- DROITS ET DEVOIRS ---
    {
        theme: "Droits & Devoirs",
        question: "Quel est l'un des devoirs des citoyens ?",
        options: ["Partir en vacances", "Payer l'impôt", "Acheter une voiture", "Avoir des enfants"],
        correct: 1,
        explanation: "Participer aux charges publiques (impôts) est un devoir constitutionnel."
    },
    {
        theme: "Droits & Devoirs",
        question: "La justice en France est rendue au nom de :",
        options: ["Du Président", "De Dieu", "Du Peuple français", "Du Roi"],
        correct: 2,
        explanation: "Les jugements commencent par 'Au nom du Peuple français'."
    },
    {
        theme: "Droits & Devoirs",
        question: "Quel numéro appeler en cas d'urgence médicale (SAMU) ?",
        options: ["15", "17", "18", "112"],
        correct: 0,
        explanation: "Le 15 est le SAMU. Le 17 Police, le 18 Pompiers, le 112 Urgences Européennes."
    },

    // --- UNION EUROPÉENNE ---
    {
        theme: "Union Européenne",
        question: "Quelle est la monnaie commune de la France ?",
        options: ["Le Franc", "L'Euro", "Le Dollar", "La Livre"],
        correct: 1,
        explanation: "L'Euro est la monnaie de la France depuis 2002."
    },
    {
        theme: "Union Européenne",
        question: "Où siège le Parlement européen ?",
        options: ["À Paris", "À Strasbourg", "À Bruxelles", "À Berlin"],
        correct: 1,
        explanation: "Le siège officiel est à Strasbourg (France)."
    },
    {
        theme: "Union Européenne",
        question: "Combien d'étoiles y a-t-il sur le drapeau européen ?",
        options: ["10", "12", "27", "50"],
        correct: 1,
        explanation: "12 étoiles dorées sur fond bleu, symbole de perfection et d'unité (et non du nombre de pays)."
    },

    // --- QUESTIONS PIÈGES / DIVERS ---
    {
        theme: "Divers",
        question: "Peut-on perdre la nationalité française ?",
        options: ["Non, jamais", "Oui, dans certains cas très graves", "Oui, si on ne vote pas", "Oui, si on quitte la France"],
        correct: 1,
        explanation: "La déchéance de nationalité est possible mais extrêmement rare (terrorisme, trahison)."
    },
    {
        theme: "Divers",
        question: "Qui a écrit la Déclaration des Droits de la Femme en 1791 ?",
        options: ["Marie-Antoinette", "Olympe de Gouges", "Simone de Beauvoir", "Coco Chanel"],
        correct: 1,
        explanation: "Olympe de Gouges, guillotinée en 1793, est une pionnière du féminisme."
    },
    {
        theme: "Divers",
        question: "Quelle ville est surnommée la 'Ville Rose' ?",
        options: ["Lille", "Toulouse", "Nice", "Bordeaux"],
        correct: 1,
        explanation: "Toulouse, à cause de la couleur de ses briques."
    },
    {
        theme: "Histoire",
        question: "Qui a ordonné la construction de l'Arc de Triomphe ?",
        options: ["Louis XIV", "Napoléon Ier", "Charles de Gaulle", "François Mitterrand"],
        correct: 1,
        explanation: "Napoléon voulait honorer la Grande Armée après la bataille d'Austerlitz."
    },
    {
        theme: "Géographie",
        question: "La Guyane est située :",
        options: ["En Afrique", "En Amérique du Sud", "Dans l'Océan Indien", "Dans les Caraïbes"],
        correct: 1,
        explanation: "C'est le plus grand département français, situé au nord du Brésil."
    },
    {
        theme: "Institutions",
        question: "Le Sénat siège dans quel bâtiment ?",
        options: ["Palais Bourbon", "Palais du Luxembourg", "Palais de l'Élysée", "Hôtel de Ville"],
        correct: 1,
        explanation: "Les sénateurs siègent au Palais du Luxembourg à Paris."
    },
    {
        theme: "Institutions",
        question: "Combien y a-t-il de régions en France Métropolitaine ?",
        options: ["10", "13", "22", "96"],
        correct: 1,
        explanation: "Depuis 2016, il y a 13 régions en métropole (et 5 outre-mer)."
    },
    {
        theme: "Culture",
        question: "Le Festival de Cannes récompense le cinéma avec :",
        options: ["Un Oscar", "Un César", "Une Palme d'Or", "Un Lion d'Or"],
        correct: 2,
        explanation: "La Palme d'Or est la récompense suprême du festival."
    },
    {
        theme: "Histoire",
        question: "Le Débarquement du 6 juin 1944 a eu lieu en :",
        options: ["Provence", "Normandie", "Bretagne", "Pas-de-Calais"],
        correct: 1,
        explanation: "Les Alliés ont débarqué sur les plages de Normandie (Utah, Omaha...)."
    },
    {
        theme: "Symboles",
        question: "Quel animal représente la France (sportive) ?",
        options: ["L'Aigle", "Le Coq", "Le Lion", "Le Panda"],
        correct: 1,
        explanation: "Le Coq Gaulois est un symbole latin (Gallus = coq et gaulois)."
    },
    {
        theme: "Société",
        question: "Le Pacte Civil de Solidarité s'appelle :",
        options: ["Le Mariage", "Le PACS", "Le Concubinage", "Le Bail"],
        correct: 1,
        explanation: "Le PACS (créé en 1999) est une union civile entre deux majeurs."
    },
    {
        theme: "Histoire",
        question: "Simone Veil est célèbre pour :",
        options: ["La loi sur l'IVG", "La mode", "La cuisine", "Le cinéma"],
        correct: 0,
        explanation: "Elle a fait voter la loi légalisant l'Interruption Volontaire de Grossesse en 1975."
    }
];