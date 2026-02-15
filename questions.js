const questionsData = [
    {
        question: "Quelle est la devise de la République française ?",
        options: ["Travail, Famille, Patrie", "Liberté, Égalité, Fraternité", "Honneur et Patrie", "Vérité et Justice"],
        correct: 1, // L'index de la bonne réponse (commence à 0)
        explanation: "La devise de la France est 'Liberté, Égalité, Fraternité'. Elle figure dans la Constitution de 1958."
    },
    {
        question: "Quel est l'hymne national de la France ?",
        options: ["Le Chant du Départ", "L'Ode à la Joie", "La Marseillaise", "Le Chant des Partisans"],
        correct: 2,
        explanation: "La Marseillaise a été écrite par Rouget de Lisle en 1792."
    },
    {
        question: "Qui a le pouvoir de voter les lois en France ?",
        options: ["Le Président de la République", "Le Parlement (Assemblée nationale et Sénat)", "Le Premier ministre", "Les juges"],
        correct: 1,
        explanation: "C'est le Parlement (composé de l'Assemblée nationale et du Sénat) qui vote les lois."
    },
    {
        question: "En quelle année les femmes ont-elles obtenu le droit de vote en France ?",
        options: ["1789", "1848", "1944", "1981"],
        correct: 2,
        explanation: "Les femmes ont obtenu le droit de vote en 1944, par une ordonnance du Général de Gaulle."
    },
    {
        question: "Quel fleuve traverse Paris ?",
        options: ["La Loire", "Le Rhône", "La Seine", "La Garonne"],
        correct: 2,
        explanation: "C'est la Seine qui traverse Paris."
    },
    // --- VARIATIONS : HISTOIRE (Reformulations) ---

    {
        question: "Quel événement marque le début de la République en France ?",
        options: ["Le baptême de Clovis", "La Révolution de 1789", "La victoire de 1918", "L'élection de De Gaulle"],
        correct: 1,
        explanation: "C'est la Révolution française qui met fin à la monarchie absolue et initie la République."
    },
    {
        question: "Qui est considéré comme le premier Roi des Francs ?",
        options: ["Charlemagne", "Clovis", "Louis XIV", "Vercingétorix"],
        correct: 1,
        explanation: "Clovis (481-511) est considéré comme le premier roi à avoir unifié les Francs."
    },
    {
        question: "Contre qui la France s'est-elle battue pendant la Guerre de 14-18 ?",
        options: ["L'Angleterre", "L'Allemagne et l'Autriche-Hongrie", "La Russie", "L'Espagne"],
        correct: 1,
        explanation: "La France était alliée à l'Angleterre et la Russie contre l'Allemagne."
    },
    {
        question: "Quel personnage a entendu des voix et libéré Orléans ?",
        options: ["Marie-Antoinette", "Jeanne d'Arc", "Catherine de Médicis", "George Sand"],
        correct: 1,
        explanation: "Jeanne d'Arc, héroïne de la Guerre de Cent Ans, a été brûlée à Rouen."
    },
    {
        question: "Le Débarquement des Alliés en Normandie a eu lieu le :",
        options: ["14 juillet 1789", "11 novembre 1918", "6 juin 1944", "8 mai 1945"],
        correct: 2,
        explanation: "Le 6 juin 1944 (D-Day) marque le début de la Libération de la France."
    },
    {
        question: "Quel célèbre château a été construit par François Ier ?",
        options: ["Versailles", "Chambord", "Fontainebleau", "Le Louvre"],
        correct: 1,
        explanation: "Chambord est le symbole de la Renaissance française voulue par François Ier."
    },

    // --- VARIATIONS : GÉOGRAPHIE (Pièges) ---
    {
        question: "Lequel de ces pays NE touche PAS la France ?",
        options: ["L'Italie", "La Belgique", "Le Royaume-Uni", "L'Espagne"],
        correct: 2,
        explanation: "Le Royaume-Uni est séparé de la France par la Manche. Il n'y a pas de frontière terrestre (sauf le tunnel)."
    },
    {
        question: "Quelle île française se trouve dans la mer Méditerranée ?",
        options: ["La Réunion", "La Corse", "La Guadeloupe", "Oléron"],
        correct: 1,
        explanation: "La Corse est une île française située au sud-est du continent, en Méditerranée."
    },
    {
        question: "Outre Paris, quelles sont les deux plus grandes villes de France ?",
        options: ["Bordeaux et Lille", "Marseille et Lyon", "Toulouse et Nice", "Nantes et Strasbourg"],
        correct: 1,
        explanation: "Marseille et Lyon sont les plus grandes agglomérations après Paris."
    },
    {
        question: "Dans quelle région se trouve le Parlement Européen ?",
        options: ["En Île-de-France", "En Grand-Est (Alsace)", "En Bretagne", "En PACA"],
        correct: 1,
        explanation: "Il se trouve à Strasbourg, qui fait partie de la région Grand-Est."
    },

    // --- VARIATIONS : INSTITUTIONS (Compréhension) ---
    {
        question: "Si le Président de la République décède, qui le remplace par intérim ?",
        options: ["Le Premier ministre", "La femme du Président", "Le Président du Sénat", "Le chef de l'armée"],
        correct: 2,
        explanation: "C'est le Président du Sénat qui assure l'intérim jusqu'à une nouvelle élection."
    },
    {
        question: "L'Assemblée Nationale peut-elle renverser le Gouvernement ?",
        options: ["Oui, par une motion de censure", "Non, jamais", "Seulement si le Président est d'accord", "Oui, mais seulement le lundi"],
        correct: 0,
        explanation: "L'Assemblée peut forcer le gouvernement à démissionner en votant une motion de censure."
    },
    {
        question: "Combien de députés siègent à l'Assemblée Nationale ?",
        options: ["100", "348", "577", "1000"],
        correct: 2,
        explanation: "Il y a 577 députés élus pour représenter les Français."
    },
    {
        question: "Quelle est la fonction du Conseil Constitutionnel ?",
        options: ["Voter les lois", "Vérifier que les lois respectent la Constitution", "Juger les criminels", "Diriger l'armée"],
        correct: 1,
        explanation: "Il est le garant de la Constitution et valide les élections."
    },
    {
        question: "Comment appelle-t-on la loi fondamentale qui organise l'État ?",
        options: ["Le Code Civil", "La Constitution", "Le Code Pénal", "La Déclaration des Droits"],
        correct: 1,
        explanation: "La France est régie par la Constitution de la Ve République (1958)."
    },

    // --- VARIATIONS : SYMBOLES & VALEURS (Subtilité) ---
    {
        question: "Que signifie 'Fraternité' dans la devise française ?",
        options: ["Vivre avec ses frères", "La solidarité entre les citoyens", "L'obligation d'aimer tout le monde", "L'égalité des salaires"],
        correct: 1,
        explanation: "La Fraternité évoque la solidarité (aides sociales, entraide) entre les membres de la nation."
    },
    {
        question: "Lequel de ces symboles N'EST PAS un symbole officiel ?",
        options: ["Le Drapeau tricolore", "La Marseillaise", "Le croissant au beurre", "Marianne"],
        correct: 2,
        explanation: "Le croissant est un symbole culturel, mais pas politique ou officiel."
    },
    {
        question: "Quel jour la Marseillaise a-t-elle été déclarée hymne national ?",
        options: ["Le 14 juillet 1789", "Sous la IIIe République", "Par Napoléon", "En 2002"],
        correct: 1,
        explanation: "Elle devient hymne national en 1879 sous la IIIe République."
    },
    {
        question: "Sur le drapeau européen, combien y a-t-il d'étoiles ?",
        options: ["12 étoiles dorées", "27 étoiles (nombre de pays)", "10 étoiles blanches", "50 étoiles"],
        correct: 0,
        explanation: "Le drapeau européen a toujours 12 étoiles en cercle (symbole de perfection), peu importe le nombre de pays."
    },

    // --- DROITS, DEVOIRS & SOCIÉTÉ ---
    {
        question: "En France, payer ses impôts est :",
        options: ["Facultatif", "Un devoir citoyen", "Seulement pour les riches", "Interdit"],
        correct: 1,
        explanation: "Participer au financement des services publics est un devoir de tout citoyen."
    },
    {
        question: "Pour voter en France, il faut obligatoirement :",
        options: ["Être propriétaire", "Être inscrit sur les listes électorales", "Avoir un travail", "Parler trois langues"],
        correct: 1,
        explanation: "Il faut être majeur, français et inscrit sur les listes électorales."
    },
    {
        question: "Quelle affirmation est vraie concernant la justice en France ?",
        options: ["On est coupable jusqu'à preuve du contraire", "On est innocent jusqu'à preuve du contraire", "La justice est payante", "Les juges sont élus par le peuple"],
        correct: 1,
        explanation: "C'est la 'présomption d'innocence'."
    },
    {
        question: "Lequel de ces droits est garanti par la République ?",
        options: ["Le droit de ne pas travailler", "La liberté d'expression", "Le droit de rouler à 200km/h", "Le droit de ne pas payer"],
        correct: 1,
        explanation: "La liberté d'expression est fondamentale, tant qu'elle ne nuit pas à autrui."
    },
    {
        question: "Que garantit la Sécurité Sociale ?",
        options: ["Des vacances gratuites", "Une protection contre les risques (maladie, vieillesse...)", "Un travail pour tous", "Le logement gratuit"],
        correct: 1,
        explanation: "Créée en 1945, la 'Sécu' protège la santé et la famille."
    },

    // --- CULTURE GÉNÉRALE (Divers) ---
    {
        question: "Qui a peint 'La Joconde' (exposée au Louvre) ?",
        options: ["Claude Monet", "Léonard de Vinci", "Picasso", "Van Gogh"],
        correct: 1,
        explanation: "Léonard de Vinci l'a peinte, et François Ier l'a fait venir en France."
    },
    {
        question: "Quel événement sportif se déroule à Roland-Garros ?",
        options: ["Un tournoi de rugby", "Une course de Formule 1", "Un tournoi de tennis", "Une compétition de natation"],
        correct: 2,
        explanation: "C'est un des plus grands tournois de tennis au monde (sur terre battue)."
    },
    {
        question: "Quel est le plat traditionnel alsacien ?",
        options: ["Le Cassoulet", "La Choucroute", "La Crêpe", "La Bouillabaisse"],
        correct: 1,
        explanation: "La choucroute est emblématique de l'Alsace (Marseille = Bouillabaisse, Bretagne = Crêpe)."
    },
    {
        question: "Qu'est-ce que 'l'Académie française' ?",
        options: ["Une école de tennis", "Une institution qui protège la langue française", "Un concours de cuisine", "Le bureau du Président"],
        correct: 1,
        explanation: "Fondée par Richelieu en 1635, elle est chargée de définir la langue française."
    },
    {
        question: "Dans quelle ville se déroule le Festival de Cinéma le plus célèbre ?",
        options: ["Paris", "Deauville", "Cannes", "Lyon"],
        correct: 2,
        explanation: "Le Festival de Cannes récompense les meilleurs films avec la Palme d'Or."
    },
    {
        question: "Qu'est-ce qu'un 'Maire' ?",
        options: ["Le représentant de l'État dans le département", "L'élu qui dirige une commune (ville/village)", "Le chef des pompiers", "Un juge"],
        correct: 1,
        explanation: "Le Maire est élu par le conseil municipal pour diriger la commune."
    }
];