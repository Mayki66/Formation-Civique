const questionsData = [
    // --- HISTOIRE : LES BASES ---
    {
        theme: "Histoire",
        question: "En quelle année a eu lieu la Révolution française ?",
        options: ["1789", "1848", "1914", "1945"],
        correct: 0,
        explanation: "1789 marque la prise de la Bastille et le début de la Révolution."
    },
    {
        theme: "Histoire",
        question: "Quel événement de 1789 marque symboliquement la fin de la monarchie absolue ?",
        options: ["La prise de la Bastille", "L'exécution du Roi", "La bataille de Waterloo", "L'appel du 18 juin"],
        correct: 0,
        explanation: "La prise de la Bastille le 14 juillet 1789 est le symbole de la Révolution."
    },
    {
        theme: "Histoire",
        question: "Qui était le 'Roi Soleil' ?",
        options: ["Louis XIV", "Henri IV", "Napoléon Ier", "Clovis"],
        correct: 0,
        explanation: "Louis XIV a régné 72 ans et fait construire Versailles."
    },
    {
        theme: "Histoire",
        question: "Le château de Versailles a été construit principalement sous le règne de :",
        options: ["Louis XIV", "François Ier", "Napoléon III", "Charlemagne"],
        correct: 0,
        explanation: "C'est Louis XIV qui a transformé le pavillon de chasse en château royal."
    },
    {
        theme: "Histoire",
        question: "Qui a été le premier Empereur des Français en 1804 ?",
        options: ["Napoléon Bonaparte", "Louis XVI", "Charles de Gaulle", "Jules César"],
        correct: 0,
        explanation: "Napoléon Bonaparte s'est sacré Empereur en 1804."
    },
    {
        theme: "Histoire",
        question: "Napoléon Bonaparte est célèbre pour :",
        options: ["Le Code Civil", "La Tour Eiffel", "La Sécurité Sociale", "L'école gratuite"],
        correct: 0,
        explanation: "Il a créé le Code Civil en 1804, qui organise encore la vie des Français."
    },
    {
        theme: "Histoire",
        question: "Quelles sont les dates de la Première Guerre mondiale ?",
        options: ["1914-1918", "1939-1945", "1870-1871", "1954-1962"],
        correct: 0,
        explanation: "La Grande Guerre a opposé la Triple Entente à la Triple Alliance."
    },
    {
        theme: "Histoire",
        question: "Le 11 novembre est un jour férié. Pourquoi ?",
        options: ["C'est l'Armistice de 1918", "C'est la victoire de 1945", "C'est la Fête du Travail", "C'est la Toussaint"],
        correct: 0,
        explanation: "Il commémore la fin des combats de la Première Guerre mondiale."
    },
    {
        theme: "Histoire",
        question: "Qui a lancé l'Appel du 18 juin 1940 ?",
        options: ["Le Général de Gaulle", "Le Maréchal Pétain", "Jean Moulin", "Winston Churchill"],
        correct: 0,
        explanation: "Charles de Gaulle a appelé à la Résistance depuis Londres."
    },
    {
        theme: "Histoire",
        question: "Jean Moulin est célèbre pour :",
        options: ["Avoir unifié la Résistance", "Avoir écrit les Misérables", "Avoir construit la Tour Eiffel", "Avoir été Président"],
        correct: 0,
        explanation: "Il a unifié les mouvements de Résistance avant d'être torturé et tué par les nazis."
    },
    {
        theme: "Histoire",
        question: "Les femmes ont obtenu le droit de vote en :",
        options: ["1944", "1789", "1905", "1981"],
        correct: 0,
        explanation: "Elles ont voté pour la première fois en 1945."
    },
    {
        theme: "Histoire",
        question: "Qui a aboli la peine de mort en France en 1981 ?",
        options: ["François Mitterrand (et R. Badinter)", "Charles de Gaulle", "Valéry Giscard d'Estaing", "Jacques Chirac"],
        correct: 0,
        explanation: "C'était une promesse de campagne de François Mitterrand."
    },
    {
        theme: "Histoire",
        question: "L'esclavage a été aboli définitivement en :",
        options: ["1848", "1789", "1950", "1600"],
        correct: 0,
        explanation: "Victor Schœlcher a porté le décret d'abolition en 1848."
    },
    {
        theme: "Histoire",
        question: "Jeanne d'Arc a combattu contre :",
        options: ["Les Anglais", "Les Allemands", "Les Romains", "Les Espagnols"],
        correct: 0,
        explanation: "Elle a libéré Orléans pendant la Guerre de Cent Ans (Moyen-Âge)."
    },
    {
        theme: "Histoire",
        question: "Clovis est considéré comme :",
        options: ["Le premier Roi des Francs chrétien", "Un empereur romain", "Un président", "Un écrivain"],
        correct: 0,
        explanation: "Son baptême à Reims marque le début de la monarchie chrétienne franque."
    },
    {
        theme: "Histoire",
        question: "En quelle année l'école est-elle devenue laïque, gratuite et obligatoire ?",
        options: ["1881-1882", "1905", "1945", "2000"],
        correct: 0,
        explanation: "Grâce aux lois Jules Ferry sous la IIIe République."
    },
    {
        theme: "Histoire",
        question: "La loi de 1905 concerne :",
        options: ["La séparation des Églises et de l'État", "Le droit de vote", "L'abolition de l'esclavage", "La sécurité sociale"],
        correct: 0,
        explanation: "Elle instaure la laïcité de l'État."
    },
    {
        theme: "Histoire",
        question: "L'Armistice du 8 mai 1945 marque :",
        options: ["La fin de la Seconde Guerre mondiale en Europe", "La fin de la guerre d'Algérie", "La Révolution", "La mort de Napoléon"],
        correct: 0,
        explanation: "C'est la victoire des Alliés sur l'Allemagne nazie."
    },
    
    // --- GÉOGRAPHIE : LIEUX & RÉGIONS ---
    {
        theme: "Géographie",
        question: "Quelle est la capitale de la France ?",
        options: ["Paris", "Lyon", "Marseille", "Strasbourg"],
        correct: 0,
        explanation: "Paris est la capitale et la plus grande ville."
    },
    {
        theme: "Géographie",
        question: "Dans quelle ville se trouve le Parlement Européen ?",
        options: ["Strasbourg", "Bruxelles", "Paris", "Bordeaux"],
        correct: 0,
        explanation: "Strasbourg est une capitale européenne."
    },
    {
        theme: "Géographie",
        question: "Quel fleuve traverse Paris ?",
        options: ["La Seine", "La Loire", "Le Rhône", "La Garonne"],
        correct: 0,
        explanation: "La Seine se jette ensuite dans la Manche."
    },
    {
        theme: "Géographie",
        question: "Le Mont Saint-Michel est situé en :",
        options: ["Normandie", "Bretagne", "Vendée", "Aquitaine"],
        correct: 0,
        explanation: "Il est célèbre pour ses marées, situé dans le département de la Manche."
    },
    {
        theme: "Géographie",
        question: "Quel est le plus haut sommet de France ?",
        options: ["Le Mont Blanc", "Le Pic du Midi", "Le Piton de la Fournaise", "Le Puy de Dôme"],
        correct: 0,
        explanation: "Le Mont Blanc (Alpes) culmine à 4807m."
    },
    {
        theme: "Géographie",
        question: "Où se situent les volcans d'Auvergne ?",
        options: ["Dans le Massif Central", "Dans les Alpes", "Dans les Pyrénées", "En Corse"],
        correct: 0,
        explanation: "Le Massif Central est une chaîne de montagnes anciennes et volcaniques."
    },
    {
        theme: "Géographie",
        question: "Quelle île française se trouve en Méditerranée ?",
        options: ["La Corse", "La Réunion", "Oléron", "La Martinique"],
        correct: 0,
        explanation: "La Corse est surnommée l'Île de Beauté."
    },
    {
        theme: "Géographie",
        question: "Lequel de ces territoires est un DROM (Département d'Outre-Mer) ?",
        options: ["La Guadeloupe", "La Corse", "La Bretagne", "Monaco"],
        correct: 0,
        explanation: "La Guadeloupe est située dans les Caraïbes."
    },
    {
        theme: "Géographie",
        question: "Quelle est la deuxième ville de France par sa population ?",
        options: ["Marseille", "Lyon", "Toulouse", "Nice"],
        correct: 0,
        explanation: "Marseille est la deuxième ville la plus peuplée."
    },
    {
        theme: "Géographie",
        question: "La France métropolitaine est souvent surnommée :",
        options: ["L'Hexagone", "Le Carré", "L'Étoile", "Le Triangle"],
        correct: 0,
        explanation: "À cause de sa forme géométrique à 6 côtés."
    },
    {
        theme: "Géographie",
        question: "Quel pays a une frontière commune avec la France ?",
        options: ["L'Italie", "La Pologne", "Le Portugal", "La Suède"],
        correct: 0,
        explanation: "L'Italie partage la frontière des Alpes avec la France."
    },
    {
        theme: "Géographie",
        question: "Dans quel océan se situe l'île de La Réunion ?",
        options: ["Océan Indien", "Océan Atlantique", "Océan Pacifique", "Mer Méditerranée"],
        correct: 0,
        explanation: "La Réunion est proche de Madagascar, dans l'Océan Indien."
    },
    {
        theme: "Géographie",
        question: "Quelle ville est célèbre pour son industrie aéronautique (Airbus) ?",
        options: ["Toulouse", "Bordeaux", "Nantes", "Lille"],
        correct: 0,
        explanation: "Toulouse est la capitale européenne de l'aéronautique."
    },

    // --- INSTITUTIONS ---
    {
        theme: "Institutions",
        question: "Qui élit le Président de la République ?",
        options: ["Les citoyens au suffrage universel direct", "Les députés", "Les sénateurs", "Les maires"],
        correct: 0,
        explanation: "Tous les Français majeurs peuvent voter pour le Président."
    },
    {
        theme: "Institutions",
        question: "Quelle est la durée du mandat présidentiel ?",
        options: ["5 ans (quinquennat)", "7 ans (septennat)", "4 ans", "6 ans"],
        correct: 0,
        explanation: "Le mandat est de 5 ans renouvelable une fois."
    },
    {
        theme: "Institutions",
        question: "Où siège l'Assemblée nationale ?",
        options: ["Au Palais Bourbon", "Au Palais du Luxembourg", "À l'Élysée", "À Matignon"],
        correct: 0,
        explanation: "Les députés siègent au Palais Bourbon."
    },
    {
        theme: "Institutions",
        question: "Où siège le Sénat ?",
        options: ["Au Palais du Luxembourg", "Au Palais Bourbon", "À Versailles", "À l'Hôtel de Ville"],
        correct: 0,
        explanation: "Les sénateurs siègent au Palais du Luxembourg."
    },
    {
        theme: "Institutions",
        question: "Qui a le pouvoir de voter la loi ?",
        options: ["Le Parlement (Députés et Sénateurs)", "Le Président seul", "Les Juges", "Le Premier ministre"],
        correct: 0,
        explanation: "C'est le pouvoir législatif."
    },
    {
        theme: "Institutions",
        question: "Qui nomme le Premier ministre ?",
        options: ["Le Président de la République", "L'Assemblée nationale", "Le peuple", "Le Sénat"],
        correct: 0,
        explanation: "Le Président nomme le Premier ministre, généralement issu de la majorité parlementaire."
    },
    {
        theme: "Institutions",
        question: "Quel est le rôle du Conseil Constitutionnel ?",
        options: ["Vérifier la conformité des lois à la Constitution", "Juger les crimes", "Diriger l'armée", "Faire les lois"],
        correct: 0,
        explanation: "Il veille à ce que la Constitution soit respectée."
    },
    {
        theme: "Institutions",
        question: "La France est une République...",
        options: ["Indivisible, laïque, démocratique et sociale", "Monarchique et catholique", "Fédérale et libérale", "Religieuse et autoritaire"],
        correct: 0,
        explanation: "C'est l'article 1er de la Constitution."
    },
    {
        theme: "Institutions",
        question: "Qu'est-ce que le '49.3' ?",
        options: ["Un article pour faire passer une loi sans vote", "Une région française", "Une date historique", "Un impôt"],
        correct: 0,
        explanation: "L'article 49.3 permet au gouvernement d'engager sa responsabilité pour adopter un texte."
    },
    
    // --- VALEURS & SYMBOLES ---
    {
        theme: "Valeurs",
        question: "Quelle est la devise de la France ?",
        options: ["Liberté, Égalité, Fraternité", "Travail, Famille, Patrie", "Honneur et Patrie", "Paix et Justice"],
        correct: 0,
        explanation: "Elle figure sur les mairies et les pièces de monnaie."
    },
    {
        theme: "Valeurs",
        question: "Que représente Marianne ?",
        options: ["La République", "La Royauté", "L'Armée", "La Justice"],
        correct: 0,
        explanation: "C'est l'allégorie de la République, coiffée du bonnet phrygien."
    },
    {
        theme: "Valeurs",
        question: "L'hymne national français est :",
        options: ["La Marseillaise", "Le Chant des Partisans", "L'Ode à la Joie", "Douce France"],
        correct: 0,
        explanation: "Composée par Rouget de Lisle en 1792."
    },
    {
        theme: "Valeurs",
        question: "Que signifie 'Fraternité' ?",
        options: ["La solidarité entre les citoyens", "L'obligation d'être d'accord", "L'égalité des salaires", "La liberté de parole"],
        correct: 0,
        explanation: "C'est le lien de solidarité et d'amitié qui unit les membres de la Nation."
    },
    {
        theme: "Valeurs",
        question: "Quel est l'animal symbole de la France ?",
        options: ["Le Coq", "L'Aigle", "Le Lion", "L'Ours"],
        correct: 0,
        explanation: "Le Coq Gaulois est un symbole sportif et historique."
    },
    {
        theme: "Valeurs",
        question: "Le drapeau tricolore est composé de quelles couleurs ?",
        options: ["Bleu, Blanc, Rouge", "Vert, Blanc, Rouge", "Bleu, Jaune, Rouge", "Rouge, Blanc, Bleu"],
        correct: 0,
        explanation: "Dans cet ordre vertical : Bleu (au mât), Blanc, Rouge."
    },

    // --- LAÏCITÉ ---
    {
        theme: "Laïcité",
        question: "Qu'est-ce que la laïcité ?",
        options: ["La neutralité de l'État face aux religions", "L'interdiction de croire", "Une religion d'État", "L'obligation d'être athée"],
        correct: 0,
        explanation: "L'État ne favorise aucune religion et garantit la liberté de conscience."
    },
    {
        theme: "Laïcité",
        question: "Dans les écoles publiques, les signes religieux ostensibles sont :",
        options: ["Interdits", "Autorisés", "Obligatoires", "Conseillés"],
        correct: 0,
        explanation: "Pour protéger les élèves de toute pression, l'école publique est un espace neutre."
    },
    {
        theme: "Laïcité",
        question: "Un agent de la mairie peut-il porter un signe religieux au travail ?",
        options: ["Non, il doit être neutre", "Oui, s'il est discret", "Oui, toujours", "Ça dépend de la religion"],
        correct: 0,
        explanation: "Les agents du service public doivent respecter une stricte neutralité."
    },
    {
        theme: "Laïcité",
        question: "En France, on a le droit de changer de religion ?",
        options: ["Oui, c'est la liberté de conscience", "Non, c'est interdit", "Il faut l'autorisation du Préfet", "Seulement à 18 ans"],
        correct: 0,
        explanation: "Chacun est libre de croire, de ne pas croire, ou de changer de religion."
    },

    // --- DROITS & DEVOIRS ---
    {
        theme: "Droits/Devoirs",
        question: "Payer ses impôts est :",
        options: ["Un devoir pour tous les citoyens", "Facultatif", "Réservé aux riches", "Interdit"],
        correct: 0,
        explanation: "Cela permet de financer les services publics (hôpitaux, écoles, routes...)."
    },
    {
        theme: "Droits/Devoirs",
        question: "Quel numéro appeler pour les Pompiers ?",
        options: ["18", "17", "15", "112"],
        correct: 0,
        explanation: "18 = Pompiers. (17=Police, 15=SAMU)."
    },
    {
        theme: "Droits/Devoirs",
        question: "Quel numéro appeler pour le SAMU (Urgences médicales) ?",
        options: ["15", "18", "17", "911"],
        correct: 0,
        explanation: "Le 15 est le numéro d'urgence médicale."
    },
    {
        theme: "Droits/Devoirs",
        question: "Pour voter, il faut :",
        options: ["Être inscrit sur les listes électorales", "Être propriétaire", "Avoir un travail", "Être marié"],
        correct: 0,
        explanation: "Il faut être majeur, français et inscrit."
    },
    {
        theme: "Droits/Devoirs",
        question: "La déclaration de naissance d'un enfant est-elle obligatoire ?",
        options: ["Oui, dans les 5 jours", "Non", "Seulement pour le premier enfant", "Oui, dans les 6 mois"],
        correct: 0,
        explanation: "Elle se fait à la mairie du lieu de naissance."
    },

    // --- CULTURE GÉNÉRALE ---
    {
        theme: "Culture",
        question: "Qui a écrit 'Les Misérables' ?",
        options: ["Victor Hugo", "Émile Zola", "Molière", "Voltaire"],
        correct: 0,
        explanation: "Victor Hugo est une figure majeure de la littérature française."
    },
    {
        theme: "Culture",
        question: "Qui est Molière ?",
        options: ["Un auteur de théâtre (comédies)", "Un peintre", "Un musicien", "Un roi"],
        correct: 0,
        explanation: "Jean-Baptiste Poquelin, dit Molière, a écrit L'Avare, Le Malade Imaginaire..."
    },
    {
        theme: "Culture",
        question: "Le Tour de France est une course de :",
        options: ["Vélo (Cyclisme)", "Voiture", "Moto", "Course à pied"],
        correct: 0,
        explanation: "C'est l'événement sportif annuel le plus populaire."
    },
    {
        theme: "Culture",
        question: "Quel événement sportif a lieu à Roland-Garros ?",
        options: ["Du Tennis", "Du Football", "Du Rugby", "De la Natation"],
        correct: 0,
        explanation: "Les Internationaux de France de Tennis."
    },
    {
        theme: "Culture",
        question: "Quelle est la spécialité culinaire de la Bretagne ?",
        options: ["Les crêpes et galettes", "La choucroute", "La bouillabaisse", "Le cassoulet"],
        correct: 0,
        explanation: "La choucroute = Alsace, Bouillabaisse = Marseille."
    },
    {
        theme: "Culture",
        question: "Le Musée du Louvre est célèbre pour abriter :",
        options: ["La Joconde", "La Tour Eiffel", "Le Penseur", "Les Nymphéas"],
        correct: 0,
        explanation: "La Joconde de Léonard de Vinci est le tableau le plus visité."
    },
    {
        theme: "Culture",
        question: "Qui est Edith Piaf ?",
        options: ["Une chanteuse célèbre", "Une scientifique", "Une reine", "Une sportive"],
        correct: 0,
        explanation: "Elle a chanté 'La Vie en Rose' et 'L'Hymne à l'Amour'."
    },
    {
        theme: "Culture",
        question: "Le Festival de Cannes récompense :",
        options: ["Le cinéma", "La musique", "Le théâtre", "La littérature"],
        correct: 0,
        explanation: "La Palme d'Or récompense le meilleur film."
    },

    // --- UNION EUROPÉENNE ---
    {
        theme: "Europe",
        question: "Quelle est la monnaie de la France ?",
        options: ["L'Euro", "Le Franc", "Le Dollar", "La Livre"],
        correct: 0,
        explanation: "Depuis 2002, l'Euro est la monnaie unique."
    },
    {
        theme: "Europe",
        question: "Combien d'étoiles y a-t-il sur le drapeau européen ?",
        options: ["12", "27", "28", "10"],
        correct: 0,
        explanation: "12 étoiles d'or, symbole de perfection et d'unité (le nombre ne change pas)."
    },
    {
        theme: "Europe",
        question: "L'hymne européen est tiré d'une œuvre de :",
        options: ["Beethoven (Ode à la Joie)", "Mozart", "Chopin", "Bach"],
        correct: 0,
        explanation: "C'est l'Ode à la Joie de la 9ème symphonie de Beethoven."
    },

    // --- QUESTIONS INVERSÉES (LE BONUS DEMANDÉ) ---
    {
        theme: "Institutions",
        question: "Quelle institution vote les lois ?",
        options: ["Le Parlement", "Le Gouvernement", "Le Président", "Le Conseil d'État"],
        correct: 0,
        explanation: "Le pouvoir législatif appartient au Parlement."
    },
    {
        theme: "Institutions", // Inversion
        question: "Quel est le rôle principal du Parlement ?",
        options: ["Voter les lois", "Diriger l'armée", "Rendre la justice", "Nommer les ministres"],
        correct: 0,
        explanation: "Le Parlement vote la loi et contrôle le gouvernement."
    },
    {
        theme: "Histoire",
        question: "Qui a construit le château de Versailles ?",
        options: ["Louis XIV", "Henri IV", "Napoléon", "Clovis"],
        correct: 0,
        explanation: "Le Roi Soleil voulait contrôler sa cour à Versailles."
    },
    {
        theme: "Histoire", // Inversion
        question: "Qu'est-ce que Louis XIV a fait construire ?",
        options: ["Le château de Versailles", "La Tour Eiffel", "L'Arc de Triomphe", "Notre-Dame"],
        correct: 0,
        explanation: "Le château de Versailles est le symbole de son pouvoir absolu."
    },
    {
        theme: "Valeurs",
        question: "Quelle est la devise de la France ?",
        options: ["Liberté, Égalité, Fraternité", "Travail, Famille, Patrie", "Honneur et Patrie", "Amour et Paix"],
        correct: 0,
        explanation: "C'est la devise républicaine."
    },
    {
        theme: "Valeurs", // Inversion
        question: "Que représente 'Liberté, Égalité, Fraternité' ?",
        options: ["La devise de la France", "L'hymne national", "Une loi", "Le nom du Président"],
        correct: 0,
        explanation: "Ces trois mots constituent la devise nationale."
    },
    {
        theme: "Valeurs",
        question: "Quel est l'hymne national ?",
        options: ["La Marseillaise", "Le Chant du Départ", "L'Internationale", "La Parisienne"],
        correct: 0,
        explanation: "Chant patriotique de la Révolution."
    },
    {
        theme: "Valeurs", // Inversion
        question: "Qu'est-ce que 'La Marseillaise' ?",
        options: ["L'hymne national français", "Un plat cuisiné", "Une danse traditionnelle", "Un monument"],
        correct: 0,
        explanation: "C'est l'hymne national écrit par Rouget de Lisle."
    },
    {
        theme: "Géographie",
        question: "Quelle est la capitale de la France ?",
        options: ["Paris", "Lyon", "Marseille", "Bordeaux"],
        correct: 0,
        explanation: "Paris est la capitale."
    },
    {
        theme: "Géographie", // Inversion
        question: "Qu'est-ce que Paris ?",
        options: ["La capitale de la France", "Une région", "Un département d'outre-mer", "Une montagne"],
        correct: 0,
        explanation: "C'est la capitale politique et économique."
    }
];