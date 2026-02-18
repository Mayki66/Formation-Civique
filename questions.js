const questionsData = [
    // ==================================================================
    // 🏛️ THÈME : HISTOIRE (Dates, Rois, Guerres)
    // ==================================================================
    
    // --- Classiques ---
    {
        theme: "Histoire",
        question: "En quelle année a débuté la Révolution française ?",
        options: ["1789", "1945", "1848", "1515"],
        correct: 0,
        explanation: "Elle commence par la prise de la Bastille le 14 juillet."
    },
    {
        theme: "Histoire",
        question: "Qui est Louis XIV ?",
        options: ["Le Roi Soleil", "Un empereur romain", "Un président", "Le chef des Gaulois"],
        correct: 0,
        explanation: "Il a régné 72 ans et construit Versailles."
    },
    {
        theme: "Histoire",
        question: "La Première Guerre mondiale a eu lieu de :",
        options: ["1914 à 1918", "1939 à 1945", "1870 à 1871", "1954 à 1962"],
        correct: 0,
        explanation: "C'est la 'Grande Guerre'."
    },
    {
        theme: "Histoire",
        question: "Qui a lancé l'Appel du 18 juin 1940 ?",
        options: ["Le Général de Gaulle", "Napoléon", "Le Maréchal Pétain", "Jean Moulin"],
        correct: 0,
        explanation: "Il a appelé à la Résistance depuis Londres."
    },
    {
        theme: "Histoire",
        question: "Quand l'esclavage a-t-il été aboli définitivement ?",
        options: ["1848", "1789", "1945", "1905"],
        correct: 0,
        explanation: "Par Victor Schœlcher sous la IIe République."
    },
    {
        theme: "Histoire",
        question: "Le 11 novembre est un jour férié pour commémorer :",
        options: ["L'Armistice de 1918", "La victoire de 1945", "La Révolution", "La Toussaint"],
        correct: 0,
        explanation: "C'est la fin des combats de la Première Guerre mondiale."
    },
    {
        theme: "Histoire",
        question: "Qui a instauré le Code Civil en 1804 ?",
        options: ["Napoléon Bonaparte", "Louis XIV", "Charles de Gaulle", "François Mitterrand"],
        correct: 0,
        explanation: "Il organise encore la vie des Français aujourd'hui."
    },
    {
        theme: "Histoire",
        question: "En quelle année les femmes ont-elles obtenu le droit de vote ?",
        options: ["1944", "1789", "1905", "1981"],
        correct: 0,
        explanation: "Elles ont voté pour la première fois en 1945."
    },
    {
        theme: "Histoire",
        question: "Qui a rendu l'école gratuite, laïque et obligatoire ?",
        options: ["Jules Ferry", "Charlemagne", "Victor Hugo", "Napoléon"],
        correct: 0,
        explanation: "Les lois Jules Ferry datent de 1881-1882."
    },
    {
        theme: "Histoire",
        question: "L'abolition de la peine de mort date de :",
        options: ["1981", "1945", "1968", "2002"],
        correct: 0,
        explanation: "Sous la présidence de François Mitterrand."
    },
    {
        theme: "Histoire",
        question: "Qui était Vercingétorix ?",
        options: ["Le chef des Gaulois", "Le premier Roi de France", "Un empereur", "Un écrivain"],
        correct: 0,
        explanation: "Il a perdu la bataille d'Alésia contre Jules César."
    },
    {
        theme: "Histoire",
        question: "Qui fut le premier Roi des Francs ?",
        options: ["Clovis", "Charlemagne", "Louis XIV", "Henri IV"],
        correct: 0,
        explanation: "Il s'est fait baptiser à Reims."
    },
    {
        theme: "Histoire",
        question: "Le château de Chambord date de quelle époque ?",
        options: ["La Renaissance", "Le Moyen-Âge", "L'Antiquité", "Le XXe siècle"],
        correct: 0,
        explanation: "Construit sous François Ier."
    },
    {
        theme: "Histoire",
        question: "La loi de 1905 concerne :",
        options: ["La séparation des Églises et de l'État", "Le droit de vote", "L'IVG", "La Sécurité Sociale"],
        correct: 0,
        explanation: "C'est le fondement de la laïcité."
    },
    {
        theme: "Histoire",
        question: "Qui est Jeanne d'Arc ?",
        options: ["Une héroïne de la Guerre de Cent Ans", "Une reine", "Une écrivaine", "La femme de Napoléon"],
        correct: 0,
        explanation: "Elle a libéré Orléans et fait couronner Charles VII."
    },
    {
        theme: "Histoire",
        question: "En quelle année a été fondée la Ve République ?",
        options: ["1958", "1945", "1789", "1905"],
        correct: 0,
        explanation: "Par le Général de Gaulle."
    },
    {
        theme: "Histoire",
        question: "Les soldats de la guerre 14-18 étaient surnommés :",
        options: ["Les Poilus", "Les Grognards", "Les Sans-culottes", "Les Bleus"],
        correct: 0,
        explanation: "Car ils ne pouvaient pas se raser dans les tranchées."
    },
    {
        theme: "Histoire",
        question: "Qui a signé l'Édit de Nantes (tolérance religieuse) ?",
        options: ["Henri IV", "Louis XIV", "François Ier", "Clovis"],
        correct: 0,
        explanation: "Pour mettre fin aux guerres de religion."
    },
    {
        theme: "Histoire",
        question: "Quelle célèbre bataille a eu lieu en 1916 ?",
        options: ["Verdun", "Waterloo", "Austerlitz", "Marignan"],
        correct: 0,
        explanation: "Une bataille très meurtrière de la 1ère guerre mondiale."
    },
    {
        theme: "Histoire",
        question: "Le Débarquement allié (D-Day) a eu lieu en :",
        options: ["Normandie", "Provence", "Bretagne", "Corse"],
        correct: 0,
        explanation: "Le 6 juin 1944."
    },

    // --- Inversées (Le Concept <-> La Date/Personne) ---
    {
        theme: "Histoire",
        question: "Que s'est-il passé le 14 juillet 1789 ?",
        options: ["La Prise de la Bastille", "L'appel du Général de Gaulle", "La mort du Roi", "La fin de la guerre"],
        correct: 0,
        explanation: "Le peuple de Paris prend la prison royale."
    },
    {
        theme: "Histoire",
        question: "Qu'a construit Louis XIV pour contrôler sa cour ?",
        options: ["Le Château de Versailles", "L'Arc de Triomphe", "Notre-Dame", "Le Louvre"],
        correct: 0,
        explanation: "Symbole de la monarchie absolue."
    },
    {
        theme: "Histoire",
        question: "L'Armistice du 11 novembre 1918 marque :",
        options: ["La fin de la Première Guerre mondiale", "Le début de la Révolution", "La Libération de Paris", "La mort de Napoléon"],
        correct: 0,
        explanation: "C'est la victoire des Alliés."
    },
    {
        theme: "Histoire",
        question: "Quel événement marque la fin de la monarchie absolue ?",
        options: ["La Révolution française", "La Guerre de Cent Ans", "La Renaissance", "L'élection du Président"],
        correct: 0,
        explanation: "Démarrée en 1789."
    },
    {
        theme: "Histoire",
        question: "Qu'a fait Robert Badinter en 1981 ?",
        options: ["Aboli la peine de mort", "Créé la Sécurité Sociale", "Inventé le cinéma", "Signé l'armistice"],
        correct: 0,
        explanation: "Il était ministre de la Justice."
    },
    {
        theme: "Histoire",
        question: "Qui a résisté à l'occupation nazie ?",
        options: ["Jean Moulin et les Résistants", "Le Maréchal Pétain", "Louis XVI", "Charlemagne"],
        correct: 0,
        explanation: "Ils ont aidé à libérer la France."
    },
    {
        theme: "Histoire",
        question: "Simone Veil est connue pour quelle loi ?",
        options: ["L'IVG (avortement)", "Le mariage pour tous", "L'école gratuite", "Les 35 heures"],
        correct: 0,
        explanation: "Votée en 1975."
    },
    {
        theme: "Histoire",
        question: "Qu'est-ce que la 'Renaissance' ?",
        options: ["Un renouveau artistique au XV-XVIe siècle", "Une guerre civile", "La naissance de la République", "La fin de l'Empire"],
        correct: 0,
        explanation: "Léonard de Vinci, François Ier, les châteaux de la Loire..."
    },
    
    // ==================================================================
    // 🌍 THÈME : GÉOGRAPHIE (Villes, Fleuves, Régions)
    // ==================================================================

    // --- Classiques ---
    {
        theme: "Géographie",
        question: "Quelle est la capitale de la France ?",
        options: ["Paris", "Lyon", "Marseille", "Bordeaux"],
        correct: 0,
        explanation: "C'est le siège du gouvernement."
    },
    {
        theme: "Géographie",
        question: "Quel est le plus long fleuve de France ?",
        options: ["La Loire", "La Seine", "Le Rhône", "La Garonne"],
        correct: 0,
        explanation: "Il traverse la France d'Est en Ouest."
    },
    {
        theme: "Géographie",
        question: "Où se situe le Mont Saint-Michel ?",
        options: ["En Normandie", "En Bretagne", "En Vendée", "En Aquitaine"],
        correct: 0,
        explanation: "Dans le département de la Manche."
    },
    {
        theme: "Géographie",
        question: "Quel fleuve traverse Paris ?",
        options: ["La Seine", "La Loire", "La Marne", "Le Rhin"],
        correct: 0,
        explanation: "Elle se jette dans la Manche."
    },
    {
        theme: "Géographie",
        question: "Quelle montagne est la plus haute de France ?",
        options: ["Le Mont Blanc", "Le Pic du Midi", "Le Puy de Dôme", "L'Etna"],
        correct: 0,
        explanation: "4807m dans les Alpes."
    },
    {
        theme: "Géographie",
        question: "Combien y a-t-il de régions en France métropolitaine ?",
        options: ["13", "22", "96", "101"],
        correct: 0,
        explanation: "Depuis la réforme de 2016."
    },
    {
        theme: "Géographie",
        question: "La France a une frontière avec :",
        options: ["L'Espagne", "Le Portugal", "La Pologne", "La Suède"],
        correct: 0,
        explanation: "Séparée par les Pyrénées."
    },
    {
        theme: "Géographie",
        question: "La Guadeloupe est située :",
        options: ["Dans les Caraïbes (Antilles)", "Dans l'Océan Indien", "En Afrique", "Dans le Pacifique"],
        correct: 0,
        explanation: "C'est un département d'Outre-mer."
    },
    {
        theme: "Géographie",
        question: "Quelle ville est surnommée la Ville Rose ?",
        options: ["Toulouse", "Lille", "Nice", "Nantes"],
        correct: 0,
        explanation: "À cause de ses briques."
    },
    {
        theme: "Géographie",
        question: "Quelle est la deuxième ville de France (population) ?",
        options: ["Marseille", "Lyon", "Bordeaux", "Strasbourg"],
        correct: 0,
        explanation: "Grand port sur la Méditerranée."
    },
    {
        theme: "Géographie",
        question: "Le Rhin sépare la France de :",
        options: ["L'Allemagne", "L'Italie", "L'Angleterre", "L'Espagne"],
        correct: 0,
        explanation: "C'est une frontière naturelle à l'Est."
    },
    {
        theme: "Géographie",
        question: "L'île de la Réunion est dans quel océan ?",
        options: ["Indien", "Pacifique", "Atlantique", "Arctique"],
        correct: 0,
        explanation: "Proche de l'Afrique et de Madagascar."
    },
    {
        theme: "Géographie",
        question: "Où se trouve le Parlement Européen ?",
        options: ["Strasbourg", "Bruxelles", "Paris", "Berlin"],
        correct: 0,
        explanation: "Strasbourg est une capitale européenne."
    },
    {
        theme: "Géographie",
        question: "Quel climat trouve-t-on sur la Côte d'Azur ?",
        options: ["Méditerranéen", "Océanique", "Continental", "Polaire"],
        correct: 0,
        explanation: "Hivers doux, étés chauds et secs."
    },
    {
        theme: "Géographie",
        question: "La Dune du Pilat est :",
        options: ["La plus haute dune de sable d'Europe", "Une montagne", "Une île", "Un volcan"],
        correct: 0,
        explanation: "Située près d'Arcachon/Bordeaux."
    },
    {
        theme: "Géographie",
        question: "Les volcans d'Auvergne sont situés dans :",
        options: ["Le Massif Central", "Les Alpes", "Les Pyrénées", "Le Jura"],
        correct: 0,
        explanation: "Ce sont des volcans éteints."
    },
    {
        theme: "Géographie",
        question: "Quel tunnel relie la France au Royaume-Uni ?",
        options: ["Le Tunnel sous la Manche", "Le Tunnel du Mont-Blanc", "Le Tunnel de Fréjus", "Le Pont de Normandie"],
        correct: 0,
        explanation: "Inauguré en 1994."
    },
    {
        theme: "Géographie",
        question: "La Corse est :",
        options: ["Une île en Méditerranée", "Un département d'Outre-mer", "Une région espagnole", "Une ville"],
        correct: 0,
        explanation: "C'est une Collectivité Territoriale française."
    },
    {
        theme: "Géographie",
        question: "Quelle région produit le Champagne ?",
        options: ["Grand Est", "Bretagne", "Occitanie", "PACA"],
        correct: 0,
        explanation: "Autour de la ville de Reims."
    },
    {
        theme: "Géographie",
        question: "La France métropolitaine est surnommée :",
        options: ["L'Hexagone", "Le Pentagone", "L'Octogone", "Le Carré"],
        correct: 0,
        explanation: "Elle a 6 côtés géométriques."
    },

    // --- Inversées (Le Lieu <-> La Description) ---
    {
        theme: "Géographie",
        question: "Qu'est-ce que 'l'Hexagone' ?",
        options: ["La France métropolitaine", "Un monument", "Une médaille", "Une île"],
        correct: 0,
        explanation: "Forme géométrique de la France."
    },
    {
        theme: "Géographie",
        question: "Dans quelle ville siège Airbus (aéronautique) ?",
        options: ["Toulouse", "Paris", "Lyon", "Marseille"],
        correct: 0,
        explanation: "Capitale européenne de l'espace et de l'aéronautique."
    },
    {
        theme: "Géographie",
        question: "Qu'est-ce que les DROM-COM ?",
        options: ["Les territoires d'Outre-Mer", "Des régions militaires", "Des types de fromages", "Des chaînes télé"],
        correct: 0,
        explanation: "Départements et Régions d'Outre-Mer."
    },
    {
        theme: "Géographie",
        question: "Où se trouve le centre spatial européen (fusées Ariane) ?",
        options: ["En Guyane (Kourou)", "À Paris", "En Corse", "À la Réunion"],
        correct: 0,
        explanation: "Proche de l'équateur pour faciliter les lancements."
    },
    {
        theme: "Géographie",
        question: "Strasbourg est la capitale de :",
        options: ["L'Alsace (Grand-Est) et de l'Europe", "La Bretagne", "La mode", "L'industrie"],
        correct: 0,
        explanation: "Siège du Parlement Européen."
    },
    {
        theme: "Géographie",
        question: "La ville de Nice est située sur :",
        options: ["La Côte d'Azur", "La Côte d'Opale", "La Côte Atlantique", "La Seine"],
        correct: 0,
        explanation: "Au bord de la Méditerranée."
    },
    {
        theme: "Géographie",
        question: "Qu'est-ce que le Mont Blanc ?",
        options: ["Le point culminant des Alpes", "Un fromage", "Une ville", "Un fleuve"],
        correct: 0,
        explanation: "Le toit de l'Europe occidentale."
    },

    // ==================================================================
    // ⚖️ THÈME : INSTITUTIONS (Politique, État)
    // ==================================================================

    // --- Classiques ---
    {
        theme: "Institutions",
        question: "Qui élit le Président de la République ?",
        options: ["Les citoyens au suffrage universel", "Les députés", "Les sénateurs", "Les maires"],
        correct: 0,
        explanation: "Élection directe par le peuple."
    },
    {
        theme: "Institutions",
        question: "Quelle est la durée du mandat du Président ?",
        options: ["5 ans", "7 ans", "4 ans", "6 ans"],
        correct: 0,
        explanation: "C'est le Quinquennat."
    },
    {
        theme: "Institutions",
        question: "Où habite le Président ?",
        options: ["Au Palais de l'Élysée", "À Matignon", "Au Luxembourg", "Au Louvre"],
        correct: 0,
        explanation: "À Paris, rue du Faubourg Saint-Honoré."
    },
    {
        theme: "Institutions",
        question: "Qui dirige le gouvernement ?",
        options: ["Le Premier ministre", "Le Président", "Le Sénat", "Le Maire"],
        correct: 0,
        explanation: "Il est nommé par le Président."
    },
    {
        theme: "Institutions",
        question: "Où siègent les députés ?",
        options: ["À l'Assemblée nationale", "Au Sénat", "À l'Élysée", "Dans les mairies"],
        correct: 0,
        explanation: "Au Palais Bourbon."
    },
    {
        theme: "Institutions",
        question: "Qui vote la loi ?",
        options: ["Le Parlement", "Le Président", "Les juges", "La police"],
        correct: 0,
        explanation: "Parlement = Assemblée nationale + Sénat."
    },
    {
        theme: "Institutions",
        question: "Le Sénat siège :",
        options: ["Au Palais du Luxembourg", "Au Palais Bourbon", "À Versailles", "À Matignon"],
        correct: 0,
        explanation: "Les sénateurs représentent les territoires."
    },
    {
        theme: "Institutions",
        question: "Qui représente l'État dans un département ?",
        options: ["Le Préfet", "Le Maire", "Le Député", "Le Juge"],
        correct: 0,
        explanation: "Il est nommé par le Président."
    },
    {
        theme: "Institutions",
        question: "À quel âge a-t-on le droit de vote ?",
        options: ["18 ans", "21 ans", "16 ans", "25 ans"],
        correct: 0,
        explanation: "C'est la majorité légale."
    },
    {
        theme: "Institutions",
        question: "Qui est le chef des Armées ?",
        options: ["Le Président de la République", "Le Premier ministre", "Le Général", "Le Ministre"],
        correct: 0,
        explanation: "C'est un pouvoir propre du Président."
    },
    {
        theme: "Institutions",
        question: "Le 49.3 permet de :",
        options: ["Faire passer une loi sans vote", "Dissoudre l'assemblée", "Changer le président", "Augmenter les impôts"],
        correct: 0,
        explanation: "Le gouvernement engage sa responsabilité."
    },
    {
        theme: "Institutions",
        question: "La Constitution actuelle est celle de :",
        options: ["La Ve République (1958)", "La IVe République", "La Révolution", "Napoléon"],
        correct: 0,
        explanation: "Elle a été voulue par De Gaulle."
    },
    {
        theme: "Institutions",
        question: "Quel est le rôle du Conseil Constitutionnel ?",
        options: ["Vérifier que les lois respectent la Constitution", "Juger les crimes", "Compter les impôts", "Diriger l'armée"],
        correct: 0,
        explanation: "C'est la plus haute autorité juridique."
    },
    {
        theme: "Institutions",
        question: "Les Maires sont élus pour :",
        options: ["6 ans", "5 ans", "4 ans", "7 ans"],
        correct: 0,
        explanation: "Lors des élections municipales."
    },
    {
        theme: "Institutions",
        question: "Qui gère l'état civil (naissances, mariages) ?",
        options: ["La Mairie", "La Préfecture", "Le Tribunal", "L'Église"],
        correct: 0,
        explanation: "Le Maire est officier d'état civil."
    },
    {
        theme: "Institutions",
        question: "Quels sont les trois pouvoirs ?",
        options: ["Législatif, Exécutif, Judiciaire", "Militaire, Religieux, Politique", "Président, Ministre, Maire", "Police, Justice, Armée"],
        correct: 0,
        explanation: "Ils doivent être séparés pour garantir la démocratie."
    },
    {
        theme: "Institutions",
        question: "Le Premier ministre réside à :",
        options: ["Matignon", "L'Élysée", "Bercy", "Versailles"],
        correct: 0,
        explanation: "C'est l'Hôtel de Matignon."
    },
    {
        theme: "Institutions",
        question: "Combien y a-t-il de députés ?",
        options: ["577", "348", "100", "500"],
        correct: 0,
        explanation: "Ils représentent la Nation."
    },
    {
        theme: "Institutions",
        question: "Si le Président meurt, qui assure l'intérim ?",
        options: ["Le Président du Sénat", "Le Premier ministre", "Sa femme", "Le chef des armées"],
        correct: 0,
        explanation: "Jusqu'à la nouvelle élection."
    },
    {
        theme: "Institutions",
        question: "Le drapeau de la France doit être présent sur :",
        options: ["Les bâtiments publics (écoles, mairies...)", "Toutes les maisons", "Les voitures", "Les magasins"],
        correct: 0,
        explanation: "C'est l'emblème national."
    },

    // --- Inversées (La Fonction <-> Le Titre/Lieu) ---
    {
        theme: "Institutions",
        question: "Qui possède le pouvoir législatif (faire la loi) ?",
        options: ["Le Parlement", "Le Président", "Le Gouvernement", "Les Juges"],
        correct: 0,
        explanation: "L'Assemblée nationale et le Sénat."
    },
    {
        theme: "Institutions",
        question: "Qui est le 'Garde des Sceaux' ?",
        options: ["Le ministre de la Justice", "Le Président", "Le chef de la police", "Un juge"],
        correct: 0,
        explanation: "Il garde le sceau officiel de la République."
    },
    {
        theme: "Institutions",
        question: "Qu'est-ce que l'Hôtel de Matignon ?",
        options: ["La résidence du Premier ministre", "Un grand hôtel de luxe", "La maison du Président", "Le Sénat"],
        correct: 0,
        explanation: "Le lieu de travail du Chef du Gouvernement."
    },
    {
        theme: "Institutions",
        question: "Quelle institution vérifie les comptes de l'État ?",
        options: ["La Cour des Comptes", "La banque", "Le Conseil Constitutionnel", "La Police"],
        correct: 0,
        explanation: "Elle s'assure que l'argent public est bien utilisé."
    },
    {
        theme: "Institutions",
        question: "Qui nomme les ministres ?",
        options: ["Le Président (sur proposition du Premier ministre)", "Le Peuple", "Le Sénat", "Les Juges"],
        correct: 0,
        explanation: "C'est l'Exécutif."
    },
    {
        theme: "Institutions",
        question: "Qu'est-ce que le 'Journal Officiel' ?",
        options: ["Le recueil où sont publiées les lois", "Un journal d'actualité", "Un livre d'histoire", "Le journal du Président"],
        correct: 0,
        explanation: "Pour qu'une loi s'applique, elle doit y être publiée."
    },
    {
        theme: "Institutions",
        question: "Qui a le droit de dissoudre l'Assemblée nationale ?",
        options: ["Le Président de la République", "Le Premier ministre", "Le Peuple", "Le Sénat"],
        correct: 0,
        explanation: "Cela provoque de nouvelles élections législatives."
    },

    // ==================================================================
    // 🇫🇷 THÈME : VALEURS, SYMBOLES & LAÏCITÉ
    // ==================================================================

    // --- Classiques ---
    {
        theme: "Valeurs",
        question: "Quelle est la devise de la France ?",
        options: ["Liberté, Égalité, Fraternité", "Travail, Famille, Patrie", "Honneur et Patrie", "Ordre et Progrès"],
        correct: 0,
        explanation: "Héritage de la Révolution."
    },
    {
        theme: "Valeurs",
        question: "L'hymne national est :",
        options: ["La Marseillaise", "Le Chant du Départ", "L'Ode à la Joie", "Douce France"],
        correct: 0,
        explanation: "Écrit par Rouget de Lisle en 1792."
    },
    {
        theme: "Valeurs",
        question: "Que représente Marianne ?",
        options: ["La République", "La France", "La Liberté", "Toutes les réponses"],
        correct: 3,
        explanation: "Elle est l'allégorie de la République et de ses valeurs."
    },
    {
        theme: "Valeurs",
        question: "Les trois couleurs du drapeau sont :",
        options: ["Bleu, Blanc, Rouge", "Vert, Blanc, Rouge", "Bleu, Jaune, Rouge", "Rouge, Blanc, Bleu"],
        correct: 0,
        explanation: "Bleu et Rouge (Paris) et Blanc (Roi)."
    },
    {
        theme: "Valeurs",
        question: "Le 14 juillet commémore :",
        options: ["La Prise de la Bastille (1789)", "La fin de la guerre", "L'élection du Président", "Noël"],
        correct: 0,
        explanation: "Et la Fête de la Fédération (1790)."
    },
    {
        theme: "Laïcité",
        question: "Qu'est-ce que la laïcité ?",
        options: ["La neutralité de l'État face aux religions", "L'interdiction de croire", "Une religion", "L'obligation d'être athée"],
        correct: 0,
        explanation: "Liberté de conscience et séparation Église/État."
    },
    {
        theme: "Laïcité",
        question: "À l'école publique, les signes religieux ostensibles sont :",
        options: ["Interdits", "Autorisés", "Conseillés", "Obligatoires"],
        correct: 0,
        explanation: "Loi de 2004 pour protéger les élèves."
    },
    {
        theme: "Valeurs",
        question: "Quel animal symbolise la France ?",
        options: ["Le Coq", "L'Aigle", "Le Lion", "Le Cheval"],
        correct: 0,
        explanation: "Le Coq Gaulois."
    },
    {
        theme: "Valeurs",
        question: "Que signifie 'Fraternité' ?",
        options: ["La solidarité entre citoyens", "Vivre avec ses frères", "Tout le monde est pareil", "L'amitié"],
        correct: 0,
        explanation: "S'aider les uns les autres (aides sociales, entraide)."
    },
    {
        theme: "Valeurs",
        question: "L'égalité signifie que :",
        options: ["Tous les citoyens ont les mêmes droits", "Tout le monde a le même salaire", "Tout le monde pense pareil", "Il n'y a pas de chef"],
        correct: 0,
        explanation: "Égalité devant la loi."
    },
    {
        theme: "Laïcité",
        question: "Y a-t-il une religion officielle en France ?",
        options: ["Non, aucune", "Oui, le catholicisme", "Oui, la laïcité", "Oui, le christianisme"],
        correct: 0,
        explanation: "L'État ne reconnaît aucun culte."
    },
    {
        theme: "Valeurs",
        question: "Où trouve-t-on la devise 'Liberté, Égalité, Fraternité' ?",
        options: ["Sur les mairies et écoles", "Sur les voitures", "Sur les vêtements", "Au supermarché"],
        correct: 0,
        explanation: "Sur les bâtiments publics."
    },
    {
        theme: "Laïcité",
        question: "Un employé de mairie peut-il porter un signe religieux ?",
        options: ["Non, il doit être neutre", "Oui, s'il veut", "Oui, si c'est discret", "Seulement le vendredi"],
        correct: 0,
        explanation: "Les agents du service public ont un devoir de neutralité."
    },
    {
        theme: "Valeurs",
        question: "La Liberté consiste à :",
        options: ["Faire tout ce qui ne nuit pas à autrui", "Faire tout ce qu'on veut", "Ne pas respecter les lois", "Ne pas travailler"],
        correct: 0,
        explanation: "Définition de la Déclaration des Droits de l'Homme."
    },
    {
        theme: "Valeurs",
        question: "Qui est l'auteur de la Marseillaise ?",
        options: ["Rouget de Lisle", "Victor Hugo", "Napoléon", "Mozart"],
        correct: 0,
        explanation: "En 1792 à Strasbourg."
    },
    {
        theme: "Valeurs",
        question: "Le bonnet phrygien de Marianne symbolise :",
        options: ["La liberté (esclaves affranchis)", "La mode", "La révolution", "L'hiver"],
        correct: 0,
        explanation: "Porté par les esclaves libérés dans l'Antiquité."
    },
    {
        theme: "Laïcité",
        question: "Peut-on changer de religion en France ?",
        options: ["Oui, c'est la liberté de conscience", "Non, c'est interdit", "Il faut demander au Maire", "Seulement à 18 ans"],
        correct: 0,
        explanation: "On peut croire, ne pas croire, ou changer."
    },
    {
        theme: "Valeurs",
        question: "La France est une République :",
        options: ["Indivisible, laïque, démocratique et sociale", "Religieuse et royale", "Fédérale", "Communiste"],
        correct: 0,
        explanation: "Article 1 de la Constitution."
    },
    {
        theme: "Valeurs",
        question: "Qu'est-ce que le Panthéon ?",
        options: ["Le lieu où reposent les grands personnages", "Une église", "Un musée d'art", "Une bibliothèque"],
        correct: 0,
        explanation: "Pour honorer les héros de la Nation."
    },
    {
        theme: "Valeurs",
        question: "Le 8 mai est férié pour fêter :",
        options: ["La victoire de 1945", "La fin de la guerre 14-18", "La Révolution", "Le Travail"],
        correct: 0,
        explanation: "Fin de la Seconde Guerre mondiale en Europe."
    },

    // --- Inversées (Le Symbole <-> La Signification) ---
    {
        theme: "Valeurs",
        question: "Que signifie le bleu et le rouge du drapeau ?",
        options: ["Les couleurs de Paris", "La royauté", "Le sang et le ciel", "La mer et le soleil"],
        correct: 0,
        explanation: "Encadrant le blanc du Roi."
    },
    {
        theme: "Valeurs",
        question: "Quel chant est devenu l'hymne national en 1879 ?",
        options: ["La Marseillaise", "Le Chant des Partisans", "L'Internationale", "Dieu sauve le Roi"],
        correct: 0,
        explanation: "Symbole de la République combattante."
    },
    {
        theme: "Valeurs",
        question: "Quelle femme coiffée d'un bonnet représente la République ?",
        options: ["Marianne", "Jeanne d'Arc", "Marie-Antoinette", "Catherine Deneuve"],
        correct: 0,
        explanation: "Son buste est dans toutes les mairies."
    },
    {
        theme: "Laïcité",
        question: "Quel principe garantit la liberté de conscience ?",
        options: ["La Laïcité", "La Fraternité", "L'Égalité", "La Solidarité"],
        correct: 0,
        explanation: "Chacun est libre de ses opinions religieuses."
    },
    {
        theme: "Valeurs",
        question: "Qu'est-ce qui est 'indivisible, laïque, démocratique et sociale' ?",
        options: ["La République française", "L'Union Européenne", "L'ONU", "La Mairie"],
        correct: 0,
        explanation: "C'est la définition constitutionnelle de la France."
    },
    {
        theme: "Valeurs",
        question: "Quelle devise est inscrite sur les pièces de monnaie ?",
        options: ["Liberté, Égalité, Fraternité", "In God We Trust", "L'union fait la force", "Je sème à tout vent"],
        correct: 0,
        explanation: "La devise républicaine."
    },
    {
        theme: "Valeurs",
        question: "Que symbolise le Coq ?",
        options: ["La France (fierté, vigilance)", "La ferme", "La nourriture", "Le réveil"],
        correct: 0,
        explanation: "Symbole latin (Gallus = Coq / Gaulois)."
    },

    // ==================================================================
    // 🎭 THÈME : CULTURE (Arts, Sports, Gastronomie)
    // ==================================================================

    // --- Classiques ---
    {
        theme: "Culture",
        question: "Qui a écrit 'Les Misérables' ?",
        options: ["Victor Hugo", "Molière", "Zola", "Proust"],
        correct: 0,
        explanation: "Grand écrivain du XIXe siècle."
    },
    {
        theme: "Culture",
        question: "Qui est Molière ?",
        options: ["Un auteur de théâtre", "Un peintre", "Un musicien", "Un roi"],
        correct: 0,
        explanation: "Le patron de la Comédie-Française."
    },
    {
        theme: "Culture",
        question: "Quel événement sportif a lieu en juillet ?",
        options: ["Le Tour de France", "Roland-Garros", "Le Dakar", "Les JO d'hiver"],
        correct: 0,
        explanation: "La plus grande course cycliste."
    },
    {
        theme: "Culture",
        question: "La Bouillabaisse est une spécialité de :",
        options: ["Marseille", "Strasbourg", "Bordeaux", "Lille"],
        correct: 0,
        explanation: "Soupe de poissons."
    },
    {
        theme: "Culture",
        question: "Le Louvre est :",
        options: ["Un musée célèbre", "Un château fort", "Une gare", "Une église"],
        correct: 0,
        explanation: "Le plus visité au monde (La Joconde)."
    },
    {
        theme: "Culture",
        question: "Qui a peint 'Les Nymphéas' ?",
        options: ["Claude Monet", "Picasso", "Van Gogh", "Renoir"],
        correct: 0,
        explanation: "Peintre impressionniste."
    },
    {
        theme: "Culture",
        question: "Le 21 juin, c'est :",
        options: ["La Fête de la Musique", "La Fête du Cinéma", "La Fête des Mères", "La Saint-Valentin"],
        correct: 0,
        explanation: "Et le premier jour de l'été."
    },
    {
        theme: "Culture",
        question: "Quel monument parisien a été construit en 1889 ?",
        options: ["La Tour Eiffel", "L'Arc de Triomphe", "Le Sacré-Cœur", "Notre-Dame"],
        correct: 0,
        explanation: "Pour l'Exposition Universelle."
    },
    {
        theme: "Culture",
        question: "Qu'est-ce qu'un camembert ?",
        options: ["Un fromage", "Un vin", "Un gâteau", "Une saucisse"],
        correct: 0,
        explanation: "Fromage normand."
    },
    {
        theme: "Culture",
        question: "Qui est Zidane ?",
        options: ["Un footballeur champion du monde", "Un chanteur", "Un acteur", "Un président"],
        correct: 0,
        explanation: "Héros de 1998."
    },
    {
        theme: "Culture",
        question: "Le Festival de Cannes concerne :",
        options: ["Le Cinéma", "La Musique", "Le Théâtre", "La Bande Dessinée"],
        correct: 0,
        explanation: "Récompense : La Palme d'Or."
    },
    {
        theme: "Culture",
        question: "Qui a écrit 'Les Fables' (Le Corbeau et le Renard) ?",
        options: ["Jean de La Fontaine", "Perrault", "Grimm", "Andersen"],
        correct: 0,
        explanation: "Au XVIIe siècle."
    },
    {
        theme: "Culture",
        question: "Quelle est la spécialité de l'Alsace ?",
        options: ["La choucroute", "La crêpe", "Le cassoulet", "La pizza"],
        correct: 0,
        explanation: "Chou fermenté et charcuterie."
    },
    {
        theme: "Culture",
        question: "Qui est Edith Piaf ?",
        options: ["Une chanteuse", "Une actrice", "Une scientifique", "Une reine"],
        correct: 0,
        explanation: "'La Môme', interprète de La Vie en Rose."
    },
    {
        theme: "Culture",
        question: "Le TGV signifie :",
        options: ["Train à Grande Vitesse", "Train Grand Voyageur", "Transport Général de Ville", "Train Gare Ville"],
        correct: 0,
        explanation: "Fierté technologique française."
    },
    {
        theme: "Culture",
        question: "L'Académie française s'occupe de :",
        options: ["La langue française", "La cuisine", "L'armée", "La science"],
        correct: 0,
        explanation: "Les 'Immortels' défendent le dictionnaire."
    },
    {
        theme: "Culture",
        question: "Quelle course de tennis a lieu à Paris ?",
        options: ["Roland-Garros", "Wimbledon", "US Open", "Davis Cup"],
        correct: 0,
        explanation: "Sur terre battue."
    },
    {
        theme: "Culture",
        question: "Le Beaujolais Nouveau est :",
        options: ["Un vin", "Un fromage", "Un parfum", "Une fête"],
        correct: 0,
        explanation: "Fêté le 3ème jeudi de novembre."
    },
    {
        theme: "Culture",
        question: "Alexandre Dumas a écrit :",
        options: ["Les Trois Mousquetaires", "Harry Potter", "Tintin", "Germinal"],
        correct: 0,
        explanation: "Roman de cape et d'épée."
    },
    {
        theme: "Culture",
        question: "Marie Curie est célèbre pour :",
        options: ["Ses travaux sur la radioactivité", "Ses romans", "Ses peintures", "Ses voyages"],
        correct: 0,
        explanation: "Deux prix Nobel (Physique et Chimie)."
    },

    // --- Inversées (L'Œuvre <-> L'Auteur) ---
    {
        theme: "Culture",
        question: "Qui a écrit 'L'Étranger' (Prix Nobel) ?",
        options: ["Albert Camus", "Sartre", "Zola", "Hugo"],
        correct: 0,
        explanation: "Auteur humaniste."
    },
    {
        theme: "Culture",
        question: "Qu'a inventé Auguste Lumière ?",
        options: ["Le Cinématographe", "La radio", "L'avion", "Le vaccin"],
        correct: 0,
        explanation: "Naissance du cinéma."
    },
    {
        theme: "Culture",
        question: "Quelle récompense reçoit le meilleur film à Cannes ?",
        options: ["La Palme d'Or", "Le César", "L'Oscar", "Le Lion d'Or"],
        correct: 0,
        explanation: "Symbole de la ville de Cannes."
    },
    {
        theme: "Culture",
        question: "Où peut-on voir la Joconde ?",
        options: ["Au Musée du Louvre", "À Versailles", "À Orsay", "Au Centre Pompidou"],
        correct: 0,
        explanation: "À Paris."
    },
    {
        theme: "Culture",
        question: "Quel sport se pratique lors du 'Tournoi des Six Nations' ?",
        options: ["Le Rugby", "Le Football", "Le Tennis", "Le Golf"],
        correct: 0,
        explanation: "La France y participe chaque année."
    },
    {
        theme: "Culture",
        question: "Qu'est-ce que la 'Haute Couture' ?",
        options: ["Le luxe vestimentaire français", "Une technique de cuisine", "Une architecture", "Une peinture"],
        correct: 0,
        explanation: "Chanel, Dior, Yves Saint Laurent..."
    },
    {
        theme: "Culture",
        question: "Quelle femme scientifique est au Panthéon ?",
        options: ["Marie Curie", "Jeanne d'Arc", "George Sand", "Coco Chanel"],
        correct: 0,
        explanation: "Avec son mari Pierre Curie."
    },

    // ==================================================================
    // 🤝 THÈME : DROITS & DEVOIRS (+ Europe)
    // ==================================================================

    // --- Classiques ---
    {
        theme: "Droits/Devoirs",
        question: "Payer ses impôts est :",
        options: ["Un devoir", "Facultatif", "Interdit", "Un droit"],
        correct: 0,
        explanation: "Nécessaire pour financer les services publics."
    },
    {
        theme: "Droits/Devoirs",
        question: "Quel numéro appelle les Pompiers ?",
        options: ["18", "17", "15", "112"],
        correct: 0,
        explanation: "18 = Pompiers."
    },
    {
        theme: "Droits/Devoirs",
        question: "Quel numéro appelle la Police ?",
        options: ["17", "18", "15", "112"],
        correct: 0,
        explanation: "17 = Police Secours."
    },
    {
        theme: "Droits/Devoirs",
        question: "Quel numéro appelle le SAMU ?",
        options: ["15", "18", "17", "112"],
        correct: 0,
        explanation: "15 = Urgences médicales."
    },
    {
        theme: "Droits/Devoirs",
        question: "Pour voter, il faut :",
        options: ["Être inscrit sur les listes électorales", "Être propriétaire", "Être marié", "Avoir un travail"],
        correct: 0,
        explanation: "Et être français et majeur."
    },
    {
        theme: "Droits/Devoirs",
        question: "L'école est obligatoire de :",
        options: ["3 à 16 ans", "6 à 18 ans", "3 à 18 ans", "6 à 14 ans"],
        correct: 0,
        explanation: "L'instruction est un droit et un devoir."
    },
    {
        theme: "Droits/Devoirs",
        question: "En France, on est innocent :",
        options: ["Jusqu'à preuve du contraire", "Jusqu'à l'arrestation", "Si on est riche", "Jamais"],
        correct: 0,
        explanation: "C'est la présomption d'innocence."
    },
    {
        theme: "Droits/Devoirs",
        question: "La liberté de la presse permet :",
        options: ["De publier des opinions librement", "D'insulter les gens", "De mentir", "De tout casser"],
        correct: 0,
        explanation: "Pilier de la démocratie."
    },
    {
        theme: "Droits/Devoirs",
        question: "Les hommes et les femmes ont :",
        options: ["Les mêmes droits", "Des droits différents", "Aucun droit", "Le droit de ne pas travailler"],
        correct: 0,
        explanation: "Égalité hommes-femmes."
    },
    {
        theme: "Droits/Devoirs",
        question: "Qu'est-ce qu'un juré d'assises ?",
        options: ["Un citoyen tiré au sort pour juger", "Un avocat", "Un juge professionnel", "Un policier"],
        correct: 0,
        explanation: "C'est un devoir civique."
    },
    {
        theme: "Europe",
        question: "Quelle est la monnaie de la France ?",
        options: ["L'Euro", "Le Franc", "Le Dollar", "La Livre"],
        correct: 0,
        explanation: "Depuis 2002."
    },
    {
        theme: "Europe",
        question: "Combien d'étoiles sur le drapeau européen ?",
        options: ["12", "27", "28", "15"],
        correct: 0,
        explanation: "Symbole de perfection et d'unité."
    },
    {
        theme: "Europe",
        question: "La capitale de l'Europe (Commission) est :",
        options: ["Bruxelles", "Strasbourg", "Berlin", "Londres"],
        correct: 0,
        explanation: "Siège de la Commission européenne."
    },
    {
        theme: "Europe",
        question: "L'hymne européen est :",
        options: ["L'Ode à la Joie (Beethoven)", "La Marseillaise", "God Save the King", "Le Boléro"],
        correct: 0,
        explanation: "9ème Symphonie de Beethoven."
    },
    {
        theme: "Europe",
        question: "L'espace Schengen permet de :",
        options: ["Circuler librement sans frontière", "Payer moins cher", "Parler anglais", "Conduire vite"],
        correct: 0,
        explanation: "Libre circulation des personnes."
    },
    {
        theme: "Droits/Devoirs",
        question: "Doit-on déclarer ses revenus ?",
        options: ["Oui, chaque année", "Non, jamais", "Seulement si on est riche", "Seulement les hommes"],
        correct: 0,
        explanation: "C'est une obligation fiscale."
    },
    {
        theme: "Droits/Devoirs",
        question: "La défense de la patrie est :",
        options: ["Un devoir des citoyens", "Interdite", "Réservée aux militaires", "Facultative en guerre"],
        correct: 0,
        explanation: "En cas de menace grave."
    },
    {
        theme: "Droits/Devoirs",
        question: "Le racisme est :",
        options: ["Un délit puni par la loi", "Une opinion", "Une tradition", "Autorisé"],
        correct: 0,
        explanation: "La loi punit les discriminations."
    },
    {
        theme: "Europe",
        question: "Combien de pays dans l'UE ?",
        options: ["27", "6", "50", "12"],
        correct: 0,
        explanation: "Depuis le départ du Royaume-Uni."
    },
    {
        theme: "Europe",
        question: "La devise de l'Europe est :",
        options: ["Unie dans la diversité", "L'union fait la force", "Liberté et Paix", "Un pour tous"],
        correct: 0,
        explanation: "Respect des cultures différentes."
    },

    // --- Inversées (Le Droit/Devoir <-> L'Action) ---
    {
        theme: "Droits/Devoirs",
        question: "Que doit-on faire à 16 ans ?",
        options: ["Le recensement citoyen", "Voter", "Payer des impôts", "Le service militaire"],
        correct: 0,
        explanation: "Obligatoire à la mairie."
    },
    {
        theme: "Droits/Devoirs",
        question: "Quel organisme collecte le sang ?",
        options: ["L'Établissement Français du Sang (EFS)", "La Sécu", "La Police", "La Mairie"],
        correct: 0,
        explanation: "Le don du sang est un acte citoyen."
    },
    {
        theme: "Europe",
        question: "Qui a fondé l'Europe ?",
        options: ["Schuman et Monnet", "De Gaulle", "Napoléon", "Hugo"],
        correct: 0,
        explanation: "Les pères fondateurs (années 50)."
    },
    {
        theme: "Droits/Devoirs",
        question: "Qu'est-ce que le 112 ?",
        options: ["Le numéro d'urgence européen", "La police", "L'horloge parlante", "Le président"],
        correct: 0,
        explanation: "Valable dans toute l'UE."
    },
    {
        theme: "Droits/Devoirs",
        question: "Le PACS est :",
        options: ["Un pacte civil de solidarité", "Un mariage religieux", "Un impôt", "Une fête"],
        correct: 0,
        explanation: "Union civile entre deux personnes."
    },
    {
        theme: "Droits/Devoirs",
        question: "Qu'est-ce qui est interdit par la loi ?",
        options: ["La discrimination à l'embauche", "La grève", "Le divorce", "Le déménagement"],
        correct: 0,
        explanation: "On ne peut pas refuser un travail pour la couleur de peau ou le sexe."
    },
    {
        theme: "Droits/Devoirs",
        question: "A-t-on le droit de faire grève ?",
        options: ["Oui, c'est un droit constitutionnel", "Non, c'est interdit", "Seulement le weekend", "Seulement les fonctionnaires"],
        correct: 0,
        explanation: "Sauf pour certains métiers (militaires...)."
    }
];