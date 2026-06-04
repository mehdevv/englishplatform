import type { Unit } from "./lesson-types";
import { q, lesson, unit } from "./lesson-builder";

export const INTERMEDIATE_UNITS: Unit[] = [
  unit(
    "unit-work",
    "Travail & carrière",
    "Work & career",
    [
      lesson(
        "work-interview",
        "unit-work",
        "Entretien d'embauche",
        "Job interview",
        [
          q(
            "work-interview-q1",
            "Comment traduire « Je postule pour un poste de chef de projet » ?",
            [
              "I apply for a project manager position.",
              "I applied for a project manager position.",
              "I have applied for a project manager position.",
              "I am applying for a project manager position.",
            ],
            3
          ),
          q(
            "work-interview-q2",
            "« She has worked here since 2019 » signifie…",
            [
              "Elle travaillait ici en 2019.",
              "Elle travaille ici depuis 2019.",
              "Elle travaillera ici à partir de 2019.",
              "Elle a travaillé ici une fois en 2019.",
            ],
            1
          ),
          q(
            "work-interview-q3",
            "Choisis la formule la plus professionnelle pour un entretien :",
            [
              "Yeah, I'm totally into teamwork.",
              "I would be pleased to contribute to your team.",
              "I guess I can do the job.",
              "Whatever, I'll try my best.",
            ],
            1
          ),
          q(
            "work-interview-q4",
            "« If I were offered the role, I ___ relocate. »",
            ["will", "would", "had", "am"],
            1
          ),
          q(
            "work-interview-q5",
            "Que signifie le phrasal verb « follow up » dans un contexte pro ?",
            [
              "Abandonner une candidature",
              "Relancer après un entretien",
              "Refuser une offre",
              "Démissionner immédiatement",
            ],
            1
          ),
        ]
      ),
      lesson(
        "work-email",
        "unit-work",
        "E-mails professionnels",
        "Professional emails",
        [
          q(
            "work-email-q1",
            "Quelle ouverture est la plus formelle ?",
            [
              "Hey there!",
              "Dear Mr. Bennett,",
              "Yo team,",
              "What's up?",
            ],
            1
          ),
          q(
            "work-email-q2",
            "« The report was sent yesterday » est à la voix…",
            ["active", "passive", "imperative", "conditional"],
            1
          ),
          q(
            "work-email-q3",
            "Traduis : « Pourriez-vous confirmer la date de la réunion ? »",
            [
              "Could you confirm the meeting date?",
              "You confirm the meeting date?",
              "Confirm you the meeting date?",
              "Did you confirming the meeting date?",
            ],
            0
          ),
          q(
            "work-email-q4",
            "« I look forward to hearing from you » veut dire…",
            [
              "J'attends avec impatience votre réponse.",
              "Je ne veux plus de nouvelles.",
              "J'ai déjà reçu votre message.",
              "Je refuse de vous écrire.",
            ],
            0
          ),
          q(
            "work-email-q5",
            "Complète : « Please find the attachment ___ . »",
            ["attach", "attached", "attaching", "attachment"],
            1
          ),
        ]
      ),
      lesson(
        "work-phrasal",
        "unit-work",
        "Verbes à particule (travail)",
        "Phrasal verbs (work)",
        [
          q(
            "work-phrasal-q1",
            "« We need to cut costs » signifie…",
            [
              "Augmenter les dépenses",
              "Réduire les coûts",
              "Ignorer le budget",
              "Embaucher davantage",
            ],
            1
          ),
          q(
            "work-phrasal-q2",
            "« He was laid off » veut dire qu'il…",
            [
              "a été promu",
              "a été licencié",
              "a démissionné",
              "a pris des congés",
            ],
            1
          ),
          q(
            "work-phrasal-q3",
            "Que signifie « carry out an audit » ?",
            [
              "Annuler un audit",
              "Réaliser un audit",
              "Reporter un audit",
              "Refuser un audit",
            ],
            1
          ),
          q(
            "work-phrasal-q4",
            "« She turned down the offer » = Elle…",
            [
              "a accepté l'offre",
              "a refusé l'offre",
              "a négocié l'offre",
              "a ignoré l'offre",
            ],
            1
          ),
          q(
            "work-phrasal-q5",
            "« The team is gearing up for the launch » signifie…",
            [
              "L'équipe abandonne le lancement",
              "L'équipe se prépare au lancement",
              "L'équipe critique le lancement",
              "L'équipe oublie le lancement",
            ],
            1
          ),
        ]
      ),
      lesson(
        "work-perfect",
        "unit-work",
        "Present perfect (carrière)",
        "Present perfect (career)",
        [
          q(
            "work-perfect-q1",
            "« I have never managed a remote team » exprime…",
            [
              "une action terminée hier seulement",
              "une expérience jusqu'à présent",
              "un futur certain",
              "une habitude quotidienne",
            ],
            1
          ),
          q(
            "work-perfect-q2",
            "Choisis la forme correcte : « She ___ three companies so far. »",
            ["worked", "has worked", "works", "is working"],
            1
          ),
          q(
            "work-perfect-q3",
            "« Have you finished the presentation yet? » — « No, I ___ . »",
            [
              "didn't finish",
              "haven't finished",
              "don't finish",
              "wasn't finishing",
            ],
            1
          ),
          q(
            "work-perfect-q4",
            "Depuis combien de temps ? → « How long ___ you ___ here? »",
            ["did / work", "have / worked", "do / work", "are / working"],
            1
          ),
          q(
            "work-perfect-q5",
            "« They have just signed the contract » signifie…",
            [
              "Ils signeront bientôt.",
              "Ils viennent de signer.",
              "Ils ont signé il y a dix ans.",
              "Ils ne signeront jamais.",
            ],
            1
          ),
        ]
      ),
      lesson(
        "work-passive",
        "unit-work",
        "Voix passive (bureau)",
        "Passive voice (office)",
        [
          q(
            "work-passive-q1",
            "Transforme : « The manager approved the budget. »",
            [
              "The budget approved the manager.",
              "The budget was approved by the manager.",
              "The budget is approving the manager.",
              "The manager was approved the budget.",
            ],
            1
          ),
          q(
            "work-passive-q2",
            "« New policies are being introduced » signifie…",
            [
              "De nouvelles politiques ont été introduites hier seulement.",
              "De nouvelles politiques sont en train d'être introduites.",
              "Personne n'introduit de politiques.",
              "Les politiques introduisent des employés.",
            ],
            1
          ),
          q(
            "work-passive-q3",
            "Complète : « The invoice ___ last week. »",
            ["sent", "was sent", "sends", "is sending"],
            1
          ),
          q(
            "work-passive-q4",
            "Quelle phrase est correcte ?",
            [
              "The meeting will cancelled.",
              "The meeting will be cancelled.",
              "The meeting will cancelling.",
              "The meeting will been cancelled.",
            ],
            1
          ),
          q(
            "work-passive-q5",
            "« Employees are expected to attend » = On ___ aux employés…",
            [
              "interdit d'assister",
              "attend qu'ils assistent",
              "empêche d'assister",
              "oublie d'assister",
            ],
            1
          ),
        ]
      ),
    ]
  ),
  unit(
    "unit-study",
    "Études & université",
    "Study & university",
    [
      lesson(
        "study-campus",
        "unit-study",
        "Vie sur le campus",
        "Campus life",
        [
          q(
            "study-campus-q1",
            "« Enrollment opens next Monday » signifie…",
            [
              "Les inscriptions ferment lundi.",
              "Les inscriptions ouvrent lundi prochain.",
              "Le campus ferme lundi.",
              "Les examens ont lieu lundi.",
            ],
            1
          ),
          q(
            "study-campus-q2",
            "Traduis : « Je suis inscrit en master de droit. »",
            [
              "I am enrolled in a law master's program.",
              "I enroll in a law master's program yesterday.",
              "I enrolling in law master.",
              "I has enrolled law master.",
            ],
            0
          ),
          q(
            "study-campus-q3",
            "« The library is open 24/7 » veut dire…",
            [
              "La bibliothèque est ouverte sept jours sur sept, jour et nuit.",
              "La bibliothèque ouvre sept heures par jour.",
              "La bibliothèque est fermée le week-end.",
              "La bibliothèque n'existe pas.",
            ],
            0
          ),
          q(
            "study-campus-q4",
            "Que signifie « dorm » ?",
            ["Une salle de cours", "Un dortoir", "Un restaurant", "Un laboratoire"],
            1
          ),
          q(
            "study-campus-q5",
            "« She has already chosen her electives » = Elle…",
            [
              "n'a pas encore choisi",
              "a déjà choisi ses options",
              "choisira plus tard",
              "refuse de choisir",
            ],
            1
          ),
        ]
      ),
      lesson(
        "study-research",
        "unit-study",
        "Recherche & mémoire",
        "Research & thesis",
        [
          q(
            "study-research-q1",
            "« Conduct a literature review » signifie…",
            [
              "Ignorer les sources",
              "Mener une revue de littérature",
              "Copier sans citer",
              "Abandonner la recherche",
            ],
            1
          ),
          q(
            "study-research-q2",
            "Quelle phrase est académique ?",
            [
              "The stuff proves everything, like, totally.",
              "The findings suggest a correlation between variables.",
              "I dunno what the data says.",
              "This paper is kinda boring.",
            ],
            1
          ),
          q(
            "study-research-q3",
            "« The hypothesis was rejected » est à la voix…",
            ["active", "passive", "gerund", "infinitive"],
            1
          ),
          q(
            "study-research-q4",
            "« Plagiarism » signifie…",
            ["Une bourse d'études", "Le plagiat", "Une soutenance", "Un stage"],
            1
          ),
          q(
            "study-research-q5",
            "Complète : « The results ___ published next month. »",
            ["will be", "will", "are publish", "publishing"],
            0
          ),
        ]
      ),
      lesson(
        "study-conditionals",
        "unit-study",
        "Conditionnels (études)",
        "Conditionals (study)",
        [
          q(
            "study-conditionals-q1",
            "« If you study regularly, you ___ better results. »",
            ["got", "will get", "would get", "had got"],
            1
          ),
          q(
            "study-conditionals-q2",
            "Type 2 : « If I ___ more time, I would finish the dissertation. »",
            ["have", "had", "will have", "has"],
            1
          ),
          q(
            "study-conditionals-q3",
            "« Unless you submit on time, you ___ penalized. »",
            ["won't be", "will be", "are", "were being"],
            1
          ),
          q(
            "study-conditionals-q4",
            "Traduis : « S'il avait révisé, il aurait réussi. »",
            [
              "If he revised, he will pass.",
              "If he had revised, he would have passed.",
              "If he revises, he passes.",
              "If he has revised, he passed.",
            ],
            1
          ),
          q(
            "study-conditionals-q5",
            "« Provided that you meet the requirements, admission ___ granted. »",
            ["is", "will be", "was", "has"],
            1
          ),
        ]
      ),
      lesson(
        "study-reported",
        "unit-study",
        "Discours rapporté (cours)",
        "Reported speech (classes)",
        [
          q(
            "study-reported-q1",
            "Direct : « I will defend my thesis in June. » → Reported :",
            [
              "She said she will defend her thesis in June.",
              "She said she would defend her thesis in June.",
              "She says she defends her thesis in June.",
              "She said she defends her thesis in June.",
            ],
            1
          ),
          q(
            "study-reported-q2",
            "« The professor asked us ___ quiet. »",
            ["be", "to be", "being", "are"],
            1
          ),
          q(
            "study-reported-q3",
            "« He told me that he ___ the assignment. »",
            ["has finished", "had finished", "finishes", "finish"],
            1
          ),
          q(
            "study-reported-q4",
            "Transforme : « Don't use your phone in class. »",
            [
              "The teacher told us not to use our phones in class.",
              "The teacher told us don't use our phones in class.",
              "The teacher told us to not using phones.",
              "The teacher told us using not phones.",
            ],
            0
          ),
          q(
            "study-reported-q5",
            "« She wondered whether the exam ___ difficult. »",
            ["is", "was", "will", "has"],
            1
          ),
        ]
      ),
      lesson(
        "study-formal",
        "unit-study",
        "Registre formel (université)",
        "Formal register (university)",
        [
          q(
            "study-formal-q1",
            "Quelle formulation convient à une lettre au doyen ?",
            [
              "I'm super mad about my grade.",
              "I wish to appeal the grade assigned in Course 401.",
              "Fix my grade now!!!",
              "Your grading is trash.",
            ],
            1
          ),
          q(
            "study-formal-q2",
            "« Furthermore » signifie…",
            ["Cependant", "De plus", "En revanche", "Finalement"],
            1
          ),
          q(
            "study-formal-q3",
            "« Nevertheless, the data remain inconclusive » = …",
            [
              "Les données sont claires.",
              "Néanmoins, les données restent peu concluantes.",
              "Les données ont disparu.",
              "Personne n'a étudié les données.",
            ],
            1
          ),
          q(
            "study-formal-q4",
            "Synonyme formel de « get » dans « obtain permission » :",
            ["grab", "obtain", "snatch", "pick"],
            1
          ),
          q(
            "study-formal-q5",
            "« I am writing to request an extension » est…",
            [
              "une demande informelle sur les réseaux",
              "une demande formelle écrite",
              "une blague entre amis",
              "un message vocal",
            ],
            1
          ),
        ]
      ),
    ]
  ),
  unit(
    "unit-health",
    "Santé & bien-être",
    "Health & wellness",
    [
      lesson(
        "health-fitness",
        "unit-health",
        "Sport & forme",
        "Fitness & exercise",
        [
          q(
            "health-fitness-q1",
            "« Warm up before you work out » signifie…",
            [
              "Refroidir avant l'effort",
              "S'échauffer avant l'entraînement",
              "Arrêter le sport",
              "Manger avant de courir",
            ],
            1
          ),
          q(
            "health-fitness-q2",
            "« I have been going to the gym twice a week » décrit…",
            [
              "une action unique hier",
              "une habitude récente qui continue",
              "un projet futur",
              "une impossibilité",
            ],
            1
          ),
          q(
            "health-fitness-q3",
            "Que signifie « burn out » (figuré) ?",
            [
              "Brûler des calories uniquement",
              "S'épuiser professionnellement ou mentalement",
              "Gagner en énergie",
              "Dormir davantage",
            ],
            1
          ),
          q(
            "health-fitness-q4",
            "« Stretching helps prevent injuries » = L'étirement…",
            [
              "provoque des blessures",
              "aide à prévenir les blessures",
              "est inutile",
              "remplace le médecin",
            ],
            1
          ),
          q(
            "health-fitness-q5",
            "Complète : « If you ___ hydrated, you feel more energetic. »",
            ["stay", "stayed", "will stay", "had stayed"],
            0
          ),
        ]
      ),
      lesson(
        "health-nutrition",
        "unit-health",
        "Nutrition & habitudes",
        "Nutrition & habits",
        [
          q(
            "health-nutrition-q1",
            "« Cut down on sugar » veut dire…",
            [
              "Augmenter le sucre",
              "Réduire le sucre",
              "Supprimer tous les liquides",
              "Manger uniquement du sucre",
            ],
            1
          ),
          q(
            "health-nutrition-q2",
            "« A balanced diet » signifie…",
            [
              "Un régime déséquilibré",
              "Une alimentation équilibrée",
              "Un jeûne total",
              "Un régime sans eau",
            ],
            1
          ),
          q(
            "health-nutrition-q3",
            "« She has given up fast food » = Elle…",
            [
              "a repris le fast-food",
              "a arrêté le fast-food",
              "mange plus de fast-food",
              "ignore la nourriture",
            ],
            1
          ),
          q(
            "health-nutrition-q4",
            "Traduis : « Il est allergique aux arachides. »",
            [
              "He is allergic to peanuts.",
              "He allergic peanuts.",
              "He has allergic at peanuts.",
              "He is allergy with peanuts.",
            ],
            0
          ),
          q(
            "health-nutrition-q5",
            "« Processed foods should be limited » est…",
            [
              "voix active uniquement",
              "voix passive avec modale",
              "une question",
              "un ordre direct",
            ],
            1
          ),
        ]
      ),
      lesson(
        "health-idioms",
        "unit-health",
        "Expressions santé",
        "Health idioms",
        [
          q(
            "health-idioms-q1",
            "« Under the weather » signifie…",
            [
              "En pleine forme",
              "Un peu malade / patraque",
              "Dehors par beau temps",
              "En vacances",
            ],
            1
          ),
          q(
            "health-idioms-q2",
            "« Back on your feet » veut dire…",
            [
              "Tomber de nouveau",
              "Rétabli, de nouveau sur pied",
              "Courir très vite",
              "Rester alité longtemps",
            ],
            1
          ),
          q(
            "health-idioms-q3",
            "« An apple a day keeps the doctor away » suggère…",
            [
              "Les pommes attirent les médecins",
              "Une bonne habitude peut préserver la santé",
              "Il faut éviter les fruits",
              "Les médecins détestent les pommes",
            ],
            1
          ),
          q(
            "health-idioms-q4",
            "« Burn the candle at both ends » = …",
            [
              "Dormir douze heures",
              "S'épuiser en menant un rythme intense",
              "Économiser son énergie",
              "Allumer une bougie",
            ],
            1
          ),
          q(
            "health-idioms-q5",
            "« Fit as a fiddle » signifie…",
            [
              "Malade et faible",
              "En pleine forme",
              "Musicien professionnel",
              "Instruments cassés",
            ],
            1
          ),
        ]
      ),
      lesson(
        "health-perfect",
        "unit-health",
        "Present perfect (santé)",
        "Present perfect (health)",
        [
          q(
            "health-perfect-q1",
            "« Have you ever had a check-up? » cherche…",
            [
              "une expérience de vie jusqu'à maintenant",
              "une action à un moment précis hier",
              "un futur garanti",
              "une négation permanente",
            ],
            0
          ),
          q(
            "health-perfect-q2",
            "« She has recovered since the surgery » implique…",
            [
              "elle est encore à l'hôpital obligatoirement",
              "récupération liée à une période récente",
              "opération dans dix ans",
              "aucun lien avec la chirurgie",
            ],
            1
          ),
          q(
            "health-perfect-q3",
            "Choisis : « How long ___ you ___ yoga? »",
            ["did / do", "have / done", "are / doing", "will / do"],
            1
          ),
          q(
            "health-perfect-q4",
            "« I haven't slept well lately » = Récemment, je…",
            [
              "dors parfaitement",
              "ne dors pas bien",
              "dormirai mieux demain seulement",
              "ne dors jamais",
            ],
            1
          ),
          q(
            "health-perfect-q5",
            "« They've just released new guidelines » = Ils…",
            [
              "viennent de publier",
              "publieront dans dix ans",
              "n'ont jamais publié",
              "ont publié en 1990 seulement",
            ],
            0
          ),
        ]
      ),
      lesson(
        "health-passive",
        "unit-health",
        "Voix passive (médecine)",
        "Passive voice (medicine)",
        [
          q(
            "health-passive-q1",
            "« The patient was examined by the nurse » = …",
            [
              "L'infirmière a examiné le patient.",
              "Le patient a examiné l'infirmière.",
              "Personne n'a examiné.",
              "L'examen est impossible.",
            ],
            0
          ),
          q(
            "health-passive-q2",
            "Complète : « Vaccines ___ recommended by health authorities. »",
            ["is", "are", "was", "be"],
            1
          ),
          q(
            "health-passive-q3",
            "« The appointment has been rescheduled » signifie…",
            [
              "Le rendez-vous est annulé définitivement",
              "Le rendez-vous a été reporté",
              "Le rendez-vous n'a jamais existé",
              "Le médecin a oublié son nom",
            ],
            1
          ),
          q(
            "health-passive-q4",
            "Quelle phrase est correcte ?",
            [
              "Symptoms can caused by stress.",
              "Symptoms can be caused by stress.",
              "Symptoms can be cause by stress.",
              "Symptoms can causing by stress.",
            ],
            1
          ),
          q(
            "health-passive-q5",
            "« You are advised to rest » = On vous…",
            [
              "interdit de vous reposer",
              "conseille de vous reposer",
              "force à travailler",
              "ignore complètement",
            ],
            1
          ),
        ]
      ),
    ]
  ),
  unit(
    "unit-tech",
    "Technologie & digital",
    "Technology",
    [
      lesson(
        "tech-devices",
        "unit-tech",
        "Appareils & gadgets",
        "Devices & gadgets",
        [
          q(
            "tech-devices-q1",
            "« Back up your files » signifie…",
            [
              "Supprimer vos fichiers",
              "Sauvegarder vos fichiers",
              "Partager vos mots de passe",
              "Éteindre l'ordinateur",
            ],
            1
          ),
          q(
            "tech-devices-q2",
            "« The battery runs out quickly » = La batterie…",
            [
              "se recharge vite",
              "se décharge rapidement",
              "dure une semaine",
              "est illimitée",
            ],
            1
          ),
          q(
            "tech-devices-q3",
            "Traduis : « Mon téléphone est à jour. »",
            [
              "My phone is up to date.",
              "My phone is up for date.",
              "My phone is update.",
              "My phone are up to date.",
            ],
            0
          ),
          q(
            "tech-devices-q4",
            "« Plug in the charger » veut dire…",
            [
              "Débrancher le chargeur",
              "Brancher le chargeur",
              "Jeter le chargeur",
              "Casser l'écran",
            ],
            1
          ),
          q(
            "tech-devices-q5",
            "« Wearable tech » désigne…",
            [
              "Technologie portable / à porter",
              "Meubles en bois",
              "Logiciel obsolète",
              "Câbles uniquement",
            ],
            0
          ),
        ]
      ),
      lesson(
        "tech-internet",
        "unit-tech",
        "Internet & sécurité",
        "Internet & security",
        [
          q(
            "tech-internet-q1",
            "« Log in with two-factor authentication » = Se connecter…",
            [
              "sans mot de passe",
              "avec une double authentification",
              "en mode invité seulement",
              "en supprimant le compte",
            ],
            1
          ),
          q(
            "tech-internet-q2",
            "« Phishing » est…",
            [
              "Un sport nautique",
              "Une arnaque en ligne pour voler des données",
              "Un type de poisson",
              "Un réseau social",
            ],
            1
          ),
          q(
            "tech-internet-q3",
            "« Your data may be shared with partners » utilise…",
            [
              "le futur simple actif",
              "une modalité passive",
              "l'impératif",
              "le présent continu uniquement",
            ],
            1
          ),
          q(
            "tech-internet-q4",
            "« Set up a strong password » signifie…",
            [
              "Effacer le mot de passe",
              "Configurer un mot de passe robuste",
              "Publier le mot de passe",
              "Désactiver la sécurité",
            ],
            1
          ),
          q(
            "tech-internet-q5",
            "« I have never clicked on a suspicious link » exprime…",
            [
              "expérience jusqu'à présent",
              "action future",
              "habitude quotidienne au présent simple",
              "passé lointain terminé",
            ],
            0
          ),
        ]
      ),
      lesson(
        "tech-phrasal",
        "unit-tech",
        "Verbes à particule (tech)",
        "Phrasal verbs (tech)",
        [
          q(
            "tech-phrasal-q1",
            "« The app keeps crashing » = L'application…",
            [
              "fonctionne parfaitement",
              "plante / se bloque régulièrement",
              "se met à jour",
              "est supprimée",
            ],
            1
          ),
          q(
            "tech-phrasal-q2",
            "« Scroll down to see more » signifie…",
            [
              "Faire défiler vers le bas",
              "Éteindre l'écran",
              "Imprimer la page",
              "Couper internet",
            ],
            0
          ),
          q(
            "tech-phrasal-q3",
            "« Sign up for the beta » veut dire…",
            [
              "Se désinscrire",
              "S'inscrire à la version bêta",
              "Pirater le serveur",
              "Supprimer le compte",
            ],
            1
          ),
          q(
            "tech-phrasal-q4",
            "« Shut down the system properly » = …",
            [
              "Allumer le système",
              "Éteindre correctement le système",
              "Ignorer la procédure",
              "Formater sans sauvegarde",
            ],
            1
          ),
          q(
            "tech-phrasal-q5",
            "« Zoom in on the diagram » signifie…",
            [
              "Zoom arrière",
              "Zoomer / agrandir le diagramme",
              "Effacer le diagramme",
              "Envoyer par courrier",
            ],
            1
          ),
        ]
      ),
      lesson(
        "tech-conditionals",
        "unit-tech",
        "Conditionnels (technologie)",
        "Conditionals (technology)",
        [
          q(
            "tech-conditionals-q1",
            "« If the server goes down, users ___ notice errors. »",
            ["will", "would", "had", "have"],
            0
          ),
          q(
            "tech-conditionals-q2",
            "« If I ___ the source code, I could fix the bug. »",
            ["have", "had", "will have", "has"],
            1
          ),
          q(
            "tech-conditionals-q3",
            "« Unless you update the app, it ___ work. »",
            ["won't", "will", "would have", "has"],
            0
          ),
          q(
            "tech-conditionals-q4",
            "Traduis : « Si nous avions sauvegardé, nous n'aurions rien perdu. »",
            [
              "If we backed up, we lose nothing.",
              "If we had backed up, we wouldn't have lost anything.",
              "If we back up, we lost nothing.",
              "If we have backed up, we won't lose.",
            ],
            1
          ),
          q(
            "tech-conditionals-q5",
            "« As long as you comply with the terms, access ___ granted. »",
            ["is", "will be", "was", "has been"],
            0
          ),
        ]
      ),
      lesson(
        "tech-formal",
        "unit-tech",
        "Registre formel (IT)",
        "Formal register (IT)",
        [
          q(
            "tech-formal-q1",
            "Dans un ticket support, quelle phrase est appropriée ?",
            [
              "Yo, fix my laptop ASAP!!!",
              "We are experiencing intermittent connectivity issues.",
              "Internet is busted, duh.",
              "Whatever, just reboot it.",
            ],
            1
          ),
          q(
            "tech-formal-q2",
            "« Implement » signifie plutôt…",
            ["Mettre en œuvre", "Supprimer", "Ignorer", "Ralentir"],
            0
          ),
          q(
            "tech-formal-q3",
            "« Subsequently, the patch was deployed » = …",
            [
              "Ensuite, le correctif a été déployé",
              "Avant tout, le correctif a échoué",
              "Jamais de correctif",
              "Le correctif est une blague",
            ],
            0
          ),
          q(
            "tech-formal-q4",
            "« Please be advised that maintenance will occur tonight » = …",
            [
              "Ignorez la maintenance",
              "Veuillez noter qu'une maintenance aura lieu ce soir",
              "La maintenance est impossible",
              "Maintenance terminée hier",
            ],
            1
          ),
          q(
            "tech-formal-q5",
            "Synonyme formel de « fix » :",
            ["mess up", "resolve", "break", "skip"],
            1
          ),
        ]
      ),
    ]
  ),
  unit(
    "unit-culture",
    "Culture & médias",
    "Culture & media",
    [
      lesson(
        "culture-film",
        "unit-culture",
        "Cinéma & séries",
        "Film & TV",
        [
          q(
            "culture-film-q1",
            "« Binge-watch a series » signifie…",
            [
              "Regarder un épisode par an",
              "Enchaîner plusieurs épisodes d'une série",
              "Refuser de regarder la télé",
              "Filmer un documentaire",
            ],
            1
          ),
          q(
            "culture-film-q2",
            "« Spoiler alert » veut dire…",
            [
              "Alerte : révélation de l'intrigue",
              "Le film est gratuit",
              "Pas de son",
              "Fin heureuse garantie",
            ],
            0
          ),
          q(
            "culture-film-q3",
            "« The film was directed by… » est…",
            ["active", "passive", "conditional", "imperative"],
            1
          ),
          q(
            "culture-film-q4",
            "« Have you seen the latest episode yet? » — réponse possible :",
            [
              "Yes, I have just watched it.",
              "Yes, I just watch it yesterday.",
              "Yes, I watching it now always.",
              "Yes, I will saw it.",
            ],
            0
          ),
          q(
            "culture-film-q5",
            "« Box office hit » signifie…",
            [
              "Échec commercial",
              "Succès au box-office",
              "Film interdit",
              "Court-métrage amateur",
            ],
            1
          ),
        ]
      ),
      lesson(
        "culture-music",
        "unit-culture",
        "Musique & arts",
        "Music & arts",
        [
          q(
            "culture-music-q1",
            "« Live performance » signifie…",
            [
              "Enregistrement studio uniquement",
              "Prestation en direct",
              "Silence sur scène",
              "Livre audio",
            ],
            1
          ),
          q(
            "culture-music-q2",
            "« The album has been streamed millions of times » = L'album…",
            [
              "n'a jamais été écouté",
              "a été écouté en streaming des millions de fois",
              "est interdit",
              "sort demain seulement",
            ],
            1
          ),
          q(
            "culture-music-q3",
            "Traduis : « Ce tableau date du XVIIIe siècle. »",
            [
              "This painting dates from the 18th century.",
              "This painting date from 18 century.",
              "This painting is dating the 18th.",
              "This painting dated since 18.",
            ],
            0
          ),
          q(
            "culture-music-q4",
            "« Genre » dans « jazz genre » signifie…",
            ["Un pays", "Un style / genre artistique", "Une langue", "Un instrument"],
            1
          ),
          q(
            "culture-music-q5",
            "« If the venue were larger, they ___ more tickets. »",
            ["sell", "would sell", "sold", "will sell"],
            1
          ),
        ]
      ),
      lesson(
        "culture-idioms",
        "unit-culture",
        "Idiomes culturels",
        "Cultural idioms",
        [
          q(
            "culture-idioms-q1",
            "« Once in a blue moon » signifie…",
            [
              "Très souvent",
              "Très rarement",
              "Chaque matin",
              "Jamais la nuit",
            ],
            1
          ),
          q(
            "culture-idioms-q2",
            "« Break the ice » veut dire…",
            [
              "Briser la glace littéralement",
              "Briser la glace sociale, détendre l'atmosphère",
              "Refuser de parler",
              "Quitter la fête",
            ],
            1
          ),
          q(
            "culture-idioms-q3",
            "« Hit the books » signifie…",
            [
              "Frapper des livres",
              "Étudier sérieusement",
              "Jeter les manuels",
              "Dormir en cours",
            ],
            1
          ),
          q(
            "culture-idioms-q4",
            "« Piece of cake » = …",
            [
              "Très difficile",
              "Très facile",
              "Un dessert obligatoire",
              "Un gâteau périmé",
            ],
            1
          ),
          q(
            "culture-idioms-q5",
            "« Spill the beans » veut dire…",
            [
              "Cuisiner des haricots",
              "Révéler un secret",
              "Garder le silence",
              "Planter un jardin",
            ],
            1
          ),
        ]
      ),
      lesson(
        "culture-reported",
        "unit-culture",
        "Discours rapporté (médias)",
        "Reported speech (media)",
        [
          q(
            "culture-reported-q1",
            "Journaliste : « The festival starts on Friday. » → Reported :",
            [
              "She said the festival started on Friday.",
              "She said the festival would start on Friday.",
              "She said the festival starts on Friday tomorrow.",
              "She says the festival started on Friday.",
            ],
            0
          ),
          q(
            "culture-reported-q2",
            "« He claimed that the review ___ biased. »",
            ["is", "was", "will", "has"],
            1
          ),
          q(
            "culture-reported-q3",
            "« They announced that tickets ___ sold out. »",
            ["are", "were", "will", "have"],
            1
          ),
          q(
            "culture-reported-q4",
            "Direct : « Don't record during the show. » →",
            [
              "Staff told us not to record during the show.",
              "Staff told us don't record during the show.",
              "Staff told us to not recording.",
              "Staff told us not record during show.",
            ],
            0
          ),
          q(
            "culture-reported-q5",
            "« She asked whether I ___ the exhibition. »",
            ["enjoy", "enjoyed", "will enjoy", "enjoying"],
            1
          ),
        ]
      ),
      lesson(
        "culture-passive",
        "unit-culture",
        "Voix passive (culture)",
        "Passive voice (culture)",
        [
          q(
            "culture-passive-q1",
            "« The novel was written in 1925 » = …",
            [
              "Le roman a été écrit en 1925",
              "Le roman écrit en 1925 le lecteur",
              "1925 a écrit le roman",
              "Personne n'a écrit le roman",
            ],
            0
          ),
          q(
            "culture-passive-q2",
            "Complète : « The museum ___ renovated at the moment. »",
            ["is being", "is", "was", "has"],
            0
          ),
          q(
            "culture-passive-q3",
            "« Subtitles are provided in several languages » signifie…",
            [
              "Les sous-titres sont proposés en plusieurs langues",
              "Les sous-titres fournissent des langues",
              "Il n'y a pas de sous-titres",
              "Une seule langue est interdite",
            ],
            0
          ),
          q(
            "culture-passive-q4",
            "Quelle phrase est correcte ?",
            [
              "The play will performed tonight.",
              "The play will be performed tonight.",
              "The play will performing tonight.",
              "The play will been performed tonight.",
            ],
            1
          ),
          q(
            "culture-passive-q5",
            "« The award is considered prestigious » = On ___ ce prix…",
            [
              "ignore",
              "considère comme prestigieux",
              "refuse",
              "supprime",
            ],
            1
          ),
        ]
      ),
    ]
  ),
  unit(
    "unit-environment",
    "Environnement",
    "Environment",
    [
      lesson(
        "environment-climate",
        "unit-environment",
        "Climat & météo",
        "Climate & weather",
        [
          q(
            "environment-climate-q1",
            "« Greenhouse gases » signifie…",
            [
              "Gaz à effet de serre",
              "Gaz inoffensifs uniquement",
              "Plantes d'intérieur",
              "Carburants propres",
            ],
            0
          ),
          q(
            "environment-climate-q2",
            "« Sea levels are rising » décrit…",
            [
              "une tendance actuelle",
              "un événement impossible",
              "le passé lointain seulement",
              "une blague",
            ],
            0
          ),
          q(
            "environment-climate-q3",
            "« Drought » signifie…",
            ["Inondation", "Sécheresse", "Neige", "Vent fort"],
            1
          ),
          q(
            "environment-climate-q4",
            "« If emissions decrease, air quality ___ improve. »",
            ["will", "would", "had", "has"],
            0
          ),
          q(
            "environment-climate-q5",
            "Traduis : « Les températures ont augmenté ces dernières décennies. »",
            [
              "Temperatures have risen over recent decades.",
              "Temperatures rise yesterday decades.",
              "Temperatures has rise recent decade.",
              "Temperatures will risen recent decades.",
            ],
            0
          ),
        ]
      ),
      lesson(
        "environment-recycling",
        "unit-environment",
        "Recyclage & écologie",
        "Recycling & ecology",
        [
          q(
            "environment-recycling-q1",
            "« Cut down on plastic » veut dire…",
            [
              "Augmenter le plastique",
              "Réduire le plastique",
              "Recycler le métal uniquement",
              "Brûler les déchets",
            ],
            1
          ),
          q(
            "environment-recycling-q2",
            "« Renewable energy » signifie…",
            [
              "Énergie renouvelable",
              "Énergie fossile",
              "Énergie nucléaire uniquement",
              "Pas d'énergie",
            ],
            0
          ),
          q(
            "environment-recycling-q3",
            "« Waste is sorted before being recycled » est…",
            [
              "voix active",
              "voix passive en deux temps",
              "conditionnel",
              "impératif",
            ],
            1
          ),
          q(
            "environment-recycling-q4",
            "« Carbon footprint » désigne…",
            [
              "Empreinte carbone",
              "Trace de pas dans la neige",
              "Taille de chaussure",
              "Score sportif",
            ],
            0
          ),
          q(
            "environment-recycling-q5",
            "« Composting organic waste » signifie…",
            [
              "Composter les déchets organiques",
              "Jeter tout à la décharge",
              "Ignorer le tri",
              "Utiliser plus de plastique",
            ],
            0
          ),
        ]
      ),
      lesson(
        "environment-perfect",
        "unit-environment",
        "Present perfect (écologie)",
        "Present perfect (ecology)",
        [
          q(
            "environment-perfect-q1",
            "« Governments have signed the agreement » = Les gouvernements…",
            [
              "viennent de signer / ont signé",
              "signeront dans cent ans",
              "n'ont jamais entendu parler",
              "refusent toujours",
            ],
            0
          ),
          q(
            "environment-perfect-q2",
            "« Have species disappeared lately? » cherche…",
            [
              "expérience récente jusqu'à maintenant",
              "action à heure précise en 1800",
              "futur certain",
              "négation totale",
            ],
            0
          ),
          q(
            "environment-perfect-q3",
            "Choisis : « She ___ never ___ such pollution before. »",
            ["has / seen", "had / seen", "is / seeing", "will / see"],
            0
          ),
          q(
            "environment-perfect-q4",
            "« We've already planted 500 trees » = Nous…",
            [
              "avons déjà planté",
              "planterons peut-être",
              "n'avons rien fait",
              "avons coupé 500 arbres",
            ],
            0
          ),
          q(
            "environment-perfect-q5",
            "« How long has the river been polluted? » demande…",
            [
              "la durée jusqu'à présent",
              "une date exacte en 1700",
              "un lieu uniquement",
              "un prix",
            ],
            0
          ),
        ]
      ),
      lesson(
        "environment-conditionals",
        "unit-environment",
        "Conditionnels (environnement)",
        "Conditionals (environment)",
        [
          q(
            "environment-conditionals-q1",
            "« If we protect wetlands, biodiversity ___ benefit. »",
            ["will", "would", "had", "has"],
            0
          ),
          q(
            "environment-conditionals-q2",
            "« If they ___ stricter laws, emissions would drop. »",
            ["introduce", "introduced", "will introduce", "introducing"],
            1
          ),
          q(
            "environment-conditionals-q3",
            "« Unless action is taken, ecosystems ___ collapse. »",
            ["could", "could have", "had", "being"],
            0
          ),
          q(
            "environment-conditionals-q4",
            "Traduis : « S'il pleuvait plus, les réservoirs se rempliraient. »",
            [
              "If it rained more, reservoirs would fill up.",
              "If it rains more, reservoirs fill up.",
              "If it had rained, reservoirs will fill.",
              "If it rain more, reservoirs filled.",
            ],
            0
          ),
          q(
            "environment-conditionals-q5",
            "« Provided that funding is approved, the project ___ launch. »",
            ["will", "would have", "had", "has"],
            0
          ),
        ]
      ),
      lesson(
        "environment-formal",
        "unit-environment",
        "Registre formel (écologie)",
        "Formal register (ecology)",
        [
          q(
            "environment-formal-q1",
            "Dans un rapport, quelle phrase convient ?",
            [
              "Pollution is, like, super bad, ok?",
              "Anthropogenic activity contributes to habitat degradation.",
              "Fish are dying, whatever.",
              "The planet is doomed, lol.",
            ],
            1
          ),
          q(
            "environment-formal-q2",
            "« Mitigate » signifie plutôt…",
            ["Atténuer", "Aggraver", "Ignorer", "Accélérer"],
            0
          ),
          q(
            "environment-formal-q3",
            "« Consequently, mitigation measures were adopted » = …",
            [
              "Par conséquent, des mesures d'atténuation ont été adoptées",
              "Avant tout, rien n'a changé",
              "Les mesures ont été rejetées",
              "Il n'y a pas de conséquence",
            ],
            0
          ),
          q(
            "environment-formal-q4",
            "« Stakeholders were consulted » est…",
            ["passive", "active only", "question", "exclamation"],
            0
          ),
          q(
            "environment-formal-q5",
            "« Pursuant to the regulation » signifie…",
            [
              "Conformément au règlement",
              "Contre le règlement",
              "Sans aucune règle",
              "En dehors de la Terre",
            ],
            0
          ),
        ]
      ),
    ]
  ),
  unit(
    "unit-travel",
    "Voyage & monde",
    "Travel & world",
    [
      lesson(
        "travel-airport",
        "unit-travel",
        "Aéroport & transport",
        "Airport & transport",
        [
          q(
            "travel-airport-q1",
            "« Check in online » signifie…",
            [
              "Enregistrer ses bagages en ligne",
              "S'enregistrer en ligne pour le vol",
              "Annuler le vol",
              "Perdre son passeport",
            ],
            1
          ),
          q(
            "travel-airport-q2",
            "« Connecting flight » désigne…",
            [
              "Vol direct sans escale",
              "Vol avec correspondance",
              "Vol annulé",
              "Vol privé uniquement",
            ],
            1
          ),
          q(
            "travel-airport-q3",
            "« My luggage has been delayed » = Mes bagages…",
            [
              "sont arrivés en avance",
              "ont été retardés",
              "n'existent pas",
              "ont été volés par moi",
            ],
            1
          ),
          q(
            "travel-airport-q4",
            "Traduis : « Où est la porte d'embarquement ? »",
            [
              "Where is the boarding gate?",
              "Where is the bored gate?",
              "Where are boarding gate?",
              "Where the boarding gate is?",
            ],
            0
          ),
          q(
            "travel-airport-q5",
            "« Customs declaration » signifie…",
            [
              "Déclaration en douane",
              "Réservation d'hôtel",
              "Carte restaurant",
              "Billet de métro",
            ],
            0
          ),
        ]
      ),
      lesson(
        "travel-hotels",
        "unit-travel",
        "Hôtels & hébergement",
        "Hotels & accommodation",
        [
          q(
            "travel-hotels-q1",
            "« I'd like to check in, please » = Je souhaite…",
            [
              "régler ma note et partir",
              "m'enregistrer à l'arrivée",
              "annuler ma réservation",
              "changer de pays",
            ],
            1
          ),
          q(
            "travel-hotels-q2",
            "« Room service » signifie…",
            [
              "Service en chambre",
              "Nettoyage de la piscine publique",
              "Location de voiture",
              "Visite guidée gratuite",
            ],
            0
          ),
          q(
            "travel-hotels-q3",
            "« The room has been cleaned » est…",
            ["passive", "active", "future", "conditional"],
            0
          ),
          q(
            "travel-hotels-q4",
            "« If the room were available, we ___ upgrade you. »",
            ["will", "would", "had", "are"],
            1
          ),
          q(
            "travel-hotels-q5",
            "« Checkout is at noon » signifie…",
            [
              "L'enregistrement est à midi",
              "Le départ est à midi",
              "Le petit-déjeuner est à minuit",
              "La piscine ferme à midi",
            ],
            1
          ),
        ]
      ),
      lesson(
        "travel-phrasal",
        "unit-travel",
        "Verbes à particule (voyage)",
        "Phrasal verbs (travel)",
        [
          q(
            "travel-phrasal-q1",
            "« Set off early » veut dire…",
            [
              "Partir tôt",
              "Rentrer tard",
              "Rester à l'hôtel",
              "Perdre le vol",
            ],
            0
          ),
          q(
            "travel-phrasal-q2",
            "« Look up the timetable » signifie…",
            [
              "Regarder vers le haut sans lire",
              "Consulter l'horaire",
              "Supprimer l'horaire",
              "Ignorer les trains",
            ],
            1
          ),
          q(
            "travel-phrasal-q3",
            "« Pick up the rental car » = …",
            [
              "Récupérer la voiture de location",
              "Déposer la voiture",
              "Vendre la voiture",
              "Cacher la voiture",
            ],
            0
          ),
          q(
            "travel-phrasal-q4",
            "« See off a friend » signifie…",
            [
              "Accompagner quelqu'un qui part",
              "Éviter un ami",
              "Inviter un ami",
              "Se perdre ensemble",
            ],
            0
          ),
          q(
            "travel-phrasal-q5",
            "« Run out of fuel » veut dire…",
            [
              "Manquer de carburant",
              "Faire le plein",
              "Conduire plus vite",
              "Acheter un billet",
            ],
            0
          ),
        ]
      ),
      lesson(
        "travel-reported",
        "unit-travel",
        "Discours rapporté (voyage)",
        "Reported speech (travel)",
        [
          q(
            "travel-reported-q1",
            "Agent : « Your passport expires soon. » → Reported :",
            [
              "He said my passport expired soon.",
              "He said my passport would expire soon.",
              "He says my passport expires soon now.",
              "He said my passport is expiring soon tomorrow.",
            ],
            0
          ),
          q(
            "travel-reported-q2",
            "« The guide told us ___ the marked trail. »",
            ["follow", "to follow", "following", "followed"],
            1
          ),
          q(
            "travel-reported-q3",
            "« She explained that the tour ___ canceled due to weather. »",
            ["is", "had been", "will", "has"],
            1
          ),
          q(
            "travel-reported-q4",
            "Direct : « Don't leave valuables unattended. » →",
            [
              "They warned us not to leave valuables unattended.",
              "They warned us don't leave valuables unattended.",
              "They warned us to not leaving valuables.",
              "They warned us not leave valuables unattended.",
            ],
            0
          ),
          q(
            "travel-reported-q5",
            "« He asked if I ___ a visa. »",
            ["need", "needed", "will need", "needing"],
            1
          ),
        ]
      ),
      lesson(
        "travel-idioms",
        "unit-travel",
        "Idiomes voyage",
        "Travel idioms",
        [
          q(
            "travel-idioms-q1",
            "« Off the beaten track » signifie…",
            [
              "Loin des sentiers touristiques",
              "Sur l'autoroute principale",
              "Dans un grand hôtel",
              "En centre commercial",
            ],
            0
          ),
          q(
            "travel-idioms-q2",
            "« Travel light » veut dire…",
            [
              "Voyager avec peu de bagages",
              "Emporter tout sa maison",
              "Voyager de nuit seulement",
              "Refuser de bouger",
            ],
            0
          ),
          q(
            "travel-idioms-q3",
            "« Hit the road » signifie…",
            [
              "Prendre la route / partir",
              "S'arrêter immédiatement",
              "Réparer la route",
              "Acheter une carte",
            ],
            0
          ),
          q(
            "travel-idioms-q4",
            "« A home away from home » = …",
            [
              "Un lieu où l'on se sent chez soi",
              "Une maison abandonnée",
              "Un hôtel miteux",
              "Un bureau",
            ],
            0
          ),
          q(
            "travel-idioms-q5",
            "« Culture shock » signifie…",
            [
              "Choc culturel",
              "Tempête de neige",
              "Allergie alimentaire",
              "Retard de vol",
            ],
            0
          ),
        ]
      ),
    ]
  ),
  unit(
    "unit-shopping",
    "Achats & services",
    "Shopping & services",
    [
      lesson(
        "shopping-retail",
        "unit-shopping",
        "Magasins & soldes",
        "Retail & sales",
        [
          q(
            "shopping-retail-q1",
            "« On sale » signifie…",
            [
              "En promotion / en solde",
              "Hors de prix",
              "Fermé définitivement",
              "Réservé aux employés",
            ],
            0
          ),
          q(
            "shopping-retail-q2",
            "« I'd like to try it on » veut dire…",
            [
              "Je voudrais l'essayer (vêtement)",
              "Je voudrais le jeter",
              "Je voudrais le vendre",
              "Je voudrais le laver",
            ],
            0
          ),
          q(
            "shopping-retail-q3",
            "« The item was discounted by 20% » est…",
            ["passive", "active only", "question", "imperative"],
            0
          ),
          q(
            "shopping-retail-q4",
            "« Receipt » signifie…",
            ["Étagère", "Reçu / ticket de caisse", "Réduction", "Rayon"],
            1
          ),
          q(
            "shopping-retail-q5",
            "« Have you returned the shoes yet? » — « Yes, I ___ . »",
            ["returned", "have returned", "am returning", "will returned"],
            1
          ),
        ]
      ),
      lesson(
        "shopping-online",
        "unit-shopping",
        "Achats en ligne",
        "Online shopping",
        [
          q(
            "shopping-online-q1",
            "« Add to cart » signifie…",
            [
              "Ajouter au panier",
              "Supprimer le compte",
              "Payer en espèces",
              "Annuler la commande",
            ],
            0
          ),
          q(
            "shopping-online-q2",
            "« Track your order » veut dire…",
            [
              "Suivre votre commande",
              "Ignorer la livraison",
              "Modifier le mot de passe",
              "Télécharger une application",
            ],
            0
          ),
          q(
            "shopping-online-q3",
            "« Your package has been shipped » = Votre colis…",
            [
              "a été expédié",
              "n'existe pas",
              "est arrivé hier obligatoirement",
              "a été refusé par vous",
            ],
            0
          ),
          q(
            "shopping-online-q4",
            "« Refund policy » signifie…",
            [
              "Politique de remboursement",
              "Politique de recrutement",
              "Politique de confidentialité uniquement",
              "Politique de stationnement",
            ],
            0
          ),
          q(
            "shopping-online-q5",
            "Traduis : « Je souhaite échanger cet article. »",
            [
              "I'd like to exchange this item.",
              "I like exchange this item.",
              "I'd like exchanging this item.",
              "I will like exchange item this.",
            ],
            0
          ),
        ]
      ),
      lesson(
        "shopping-passive",
        "unit-shopping",
        "Voix passive (commerce)",
        "Passive voice (commerce)",
        [
          q(
            "shopping-passive-q1",
            "« The product is manufactured locally » = Le produit…",
            [
              "est fabriqué localement",
              "fabrique localement",
              "n'est jamais vendu",
              "importe des clients",
            ],
            0
          ),
          q(
            "shopping-passive-q2",
            "Complète : « Orders ___ processed within 48 hours. »",
            ["are", "is", "was", "be"],
            0
          ),
          q(
            "shopping-passive-q3",
            "« Customers are requested to queue » signifie…",
            [
              "On demande aux clients de faire la queue",
              "Les clients interdisent la queue",
              "Pas de file d'attente",
              "La queue est illégale",
            ],
            0
          ),
          q(
            "shopping-passive-q4",
            "Quelle phrase est correcte ?",
            [
              "The warranty will extended automatically.",
              "The warranty will be extended automatically.",
              "The warranty will extending automatically.",
              "The warranty will been extended automatically.",
            ],
            1
          ),
          q(
            "shopping-passive-q5",
            "« Payment is accepted by card only » = Le paiement…",
            [
              "par carte uniquement est accepté",
              "en espèces est obligatoire",
              "est refusé",
              "n'existe pas",
            ],
            0
          ),
        ]
      ),
      lesson(
        "shopping-perfect",
        "unit-shopping",
        "Present perfect (achats)",
        "Present perfect (shopping)",
        [
          q(
            "shopping-perfect-q1",
            "« Have you ever shopped here before? » cherche…",
            [
              "expérience jusqu'à maintenant",
              "action à heure précise hier seulement",
              "futur",
              "interdiction",
            ],
            0
          ),
          q(
            "shopping-perfect-q2",
            "« She has already paid online » = Elle…",
            [
              "a déjà payé en ligne",
              "paiera demain",
              "n'a jamais payé",
              "a volé en ligne",
            ],
            0
          ),
          q(
            "shopping-perfect-q3",
            "Choisis : « How many times ___ you ___ here? »",
            ["have / ordered", "did / order", "are / ordering", "will / order"],
            0
          ),
          q(
            "shopping-perfect-q4",
            "« We've just received your complaint » = Nous…",
            [
              "venons de recevoir",
              "recevrons dans un an",
              "n'avons rien reçu",
              "avons ignoré",
            ],
            0
          ),
          q(
            "shopping-perfect-q5",
            "« Prices have gone up recently » signifie…",
            [
              "Les prix ont augmenté récemment",
              "Les prix baissent toujours",
              "Les prix sont fixes depuis 1900",
              "Pas de prix",
            ],
            0
          ),
        ]
      ),
      lesson(
        "shopping-conditionals",
        "unit-shopping",
        "Conditionnels (services)",
        "Conditionals (services)",
        [
          q(
            "shopping-conditionals-q1",
            "« If you show your membership card, you ___ a discount. »",
            ["get", "will get", "would get", "got"],
            1
          ),
          q(
            "shopping-conditionals-q2",
            "« If the item ___ defective, I would return it. »",
            ["is", "were", "will be", "has been"],
            1
          ),
          q(
            "shopping-conditionals-q3",
            "« Unless proof of purchase is provided, refunds ___ issued. »",
            ["won't be", "will be", "are", "were"],
            0
          ),
          q(
            "shopping-conditionals-q4",
            "Traduis : « Si j'avais su, j'aurais acheté plus tôt. »",
            [
              "If I knew, I buy earlier.",
              "If I had known, I would have bought earlier.",
              "If I know, I would buy earlier.",
              "If I had know, I bought earlier.",
            ],
            1
          ),
          q(
            "shopping-conditionals-q5",
            "« In case of delay, compensation ___ offered. »",
            ["may be", "may", "are", "was offer"],
            0
          ),
        ]
      ),
    ]
  ),
  unit(
    "unit-communication",
    "Communication & opinions",
    "Communication",
    [
      lesson(
        "communication-debate",
        "unit-communication",
        "Débat & argumentation",
        "Debate & argument",
        [
          q(
            "communication-debate-q1",
            "« On the one hand… on the other hand » sert à…",
            [
              "Présenter deux aspects d'un débat",
              "Raconter une blague",
              "Terminer la conversation",
              "Changer de sujet brutalement",
            ],
            0
          ),
          q(
            "communication-debate-q2",
            "« I strongly disagree » exprime…",
            [
              "un désaccord marqué",
              "un accord total",
              "une indifférence",
              "une question",
            ],
            0
          ),
          q(
            "communication-debate-q3",
            "« Their point was that costs ___ too high. »",
            ["are", "were", "will", "have"],
            1
          ),
          q(
            "communication-debate-q4",
            "« If we listened more, misunderstandings ___ decrease. »",
            ["will", "would", "had", "has"],
            1
          ),
          q(
            "communication-debate-q5",
            "« To sum up » signifie…",
            ["Pour résumer", "Pour commencer", "Pour contredire", "Pour rire"],
            0
          ),
        ]
      ),
      lesson(
        "communication-opinions",
        "unit-communication",
        "Exprimer son avis",
        "Expressing opinions",
        [
          q(
            "communication-opinions-q1",
            "« In my view » signifie…",
            [
              "À mon avis",
              "Selon lui uniquement",
              "Sans opinion",
              "En secret",
            ],
            0
          ),
          q(
            "communication-opinions-q2",
            "Formulation nuancée :",
            [
              "You're totally wrong, period.",
              "I tend to think the policy needs revision.",
              "Shut up and listen.",
              "I don't care at all.",
            ],
            1
          ),
          q(
            "communication-opinions-q3",
            "« I'm inclined to believe that… » = Je…",
            [
              "suis enclin à croire que…",
              "refuse de croire",
              "sais avec certitude scientifique",
              "mens volontairement",
            ],
            0
          ),
          q(
            "communication-opinions-q4",
            "« Fair enough » veut dire…",
            [
              "C'est juste / d'accord, je comprends",
              "C'est injuste",
              "Pas question",
              "Au revoir",
            ],
            0
          ),
          q(
            "communication-opinions-q5",
            "« Have you ever changed your mind on this? » utilise…",
            [
              "present perfect pour l'expérience",
              "past simple à heure précise",
              "future perfect",
              "zero conditional",
            ],
            0
          ),
        ]
      ),
      lesson(
        "communication-reported",
        "unit-communication",
        "Discours rapporté (opinions)",
        "Reported speech (opinions)",
        [
          q(
            "communication-reported-q1",
            "« She said she ___ in favor of the reform. »",
            ["is", "was", "will", "has"],
            1
          ),
          q(
            "communication-reported-q2",
            "Direct : « I won't attend the meeting. » →",
            [
              "He said he wouldn't attend the meeting.",
              "He said he won't attend the meeting.",
              "He said he don't attend the meeting.",
              "He said he isn't attend the meeting.",
            ],
            0
          ),
          q(
            "communication-reported-q3",
            "« They insisted that he ___ present. »",
            ["is", "be", "was", "being"],
            1
          ),
          q(
            "communication-reported-q4",
            "« The journalist asked why prices ___ risen. »",
            ["have", "had", "will", "are"],
            1
          ),
          q(
            "communication-reported-q5",
            "Direct : « Do you support the proposal? » →",
            [
              "She asked whether I supported the proposal.",
              "She asked whether I support the proposal.",
              "She asked do I support the proposal.",
              "She asked whether supported I the proposal.",
            ],
            0
          ),
        ]
      ),
      lesson(
        "communication-formal",
        "unit-communication",
        "Registre formel (communication)",
        "Formal register (communication)",
        [
          q(
            "communication-formal-q1",
            "Quelle phrase convient à une réunion officielle ?",
            [
              "Yeah, whatever, let's move on.",
              "I would like to raise a concern regarding the timeline.",
              "This meeting is boring.",
              "I ain't got time for this.",
            ],
            1
          ),
          q(
            "communication-formal-q2",
            "« Acknowledge » signifie plutôt…",
            ["Reconnaître", "Ignorer", "Supprimer", "Rire"],
            0
          ),
          q(
            "communication-formal-q3",
            "« We regret any inconvenience caused » = …",
            [
              "Nous regrettons la gêne occasionnée",
              "Nous ignorons vos plaintes",
              "Nous exigeons des excuses",
              "Nous annulons tout",
            ],
            0
          ),
          q(
            "communication-formal-q4",
            "« Your feedback will be taken into consideration » est…",
            ["passive", "active only", "slang", "imperative rude"],
            0
          ),
          q(
            "communication-formal-q5",
            "« Henceforth » signifie…",
            ["Désormais", "Hier", "Jamais", "Peut-être"],
            0
          ),
        ]
      ),
      lesson(
        "communication-phrasal",
        "unit-communication",
        "Verbes à particule (communication)",
        "Phrasal verbs (communication)",
        [
          q(
            "communication-phrasal-q1",
            "« Bring up a topic » signifie…",
            [
              "Aborder un sujet",
              "Éviter un sujet",
              "Terminer la discussion",
              "Changer de langue",
            ],
            0
          ),
          q(
            "communication-phrasal-q2",
            "« Talk it over » veut dire…",
            [
              "En parler pour trouver une solution",
              "Refuser d'en parler",
              "Crier fort",
              "Écrire un roman",
            ],
            0
          ),
          q(
            "communication-phrasal-q3",
            "« Cut someone off » signifie…",
            [
              "Interrompre quelqu'un",
              "Complimenter quelqu'un",
              "Inviter quelqu'un",
              "Raccrocher poliment toujours",
            ],
            0
          ),
          q(
            "communication-phrasal-q4",
            "« Get the message across » = …",
            [
              "Faire passer le message",
              "Cacher le message",
              "Supprimer le message",
              "Traduire automatiquement",
            ],
            0
          ),
          q(
            "communication-phrasal-q5",
            "« Back up your claim » signifie…",
            [
              "Étayer / appuyer votre affirmation",
              "Retirer votre affirmation",
              "Plagier",
              "Rire de l'affirmation",
            ],
            0
          ),
        ]
      ),
    ]
  ),
  unit(
    "unit-society",
    "Société & actualités",
    "Society & news",
    [
      lesson(
        "society-news",
        "unit-society",
        "Actualités & médias",
        "News & media",
        [
          q(
            "society-news-q1",
            "« Breaking news » signifie…",
            [
              "Dernières nouvelles / info de dernière minute",
              "Vieilles nouvelles",
              "Publicité",
              "Météo uniquement",
            ],
            0
          ),
          q(
            "society-news-q2",
            "« The election results have been announced » = Les résultats…",
            [
              "ont été annoncés",
              "annoncent les médias",
              "n'existent pas",
              "seront demain seulement toujours",
            ],
            0
          ),
          q(
            "society-news-q3",
            "« Headline » désigne…",
            [
              "Un titre de presse",
              "Un paragraphe entier",
              "Une photo obligatoire",
              "Un podcast",
            ],
            0
          ),
          q(
            "society-news-q4",
            "« According to sources » signifie…",
            [
              "Selon des sources",
              "Contre toute source",
              "Sans aucune information",
              "En fiction seulement",
            ],
            0
          ),
          q(
            "society-news-q5",
            "« Have you followed the story? » demande si tu…",
            [
              "as suivi l'affaire jusqu'à présent",
              "suivras dans dix ans",
              "ignores tout",
              "écris l'article",
            ],
            0
          ),
        ]
      ),
      lesson(
        "society-politics",
        "unit-society",
        "Politique & citoyenneté",
        "Politics & citizenship",
        [
          q(
            "society-politics-q1",
            "« Turnout » dans « voter turnout » signifie…",
            [
              "Participation électorale",
              "Annulation du vote",
              "Campagne publicitaire",
              "Loi internationale",
            ],
            0
          ),
          q(
            "society-politics-q2",
            "« Policies were debated in parliament » est…",
            ["passive", "active only", "slang", "future"],
            0
          ),
          q(
            "society-politics-q3",
            "« If citizens participated more, democracy ___ strengthen. »",
            ["will", "would", "had", "has"],
            1
          ),
          q(
            "society-politics-q4",
            "« Civil rights » signifie…",
            [
              "Droits civiques",
              "Droits des entreprises uniquement",
              "Droits des animaux domestiques",
              "Taxes douanières",
            ],
            0
          ),
          q(
            "society-politics-q5",
            "Traduis : « La loi a été adoptée le mois dernier. »",
            [
              "The law was passed last month.",
              "The law passed was last month.",
              "The law is pass last month.",
              "The law were passed last month.",
            ],
            0
          ),
        ]
      ),
      lesson(
        "society-passive",
        "unit-society",
        "Voix passive (société)",
        "Passive voice (society)",
        [
          q(
            "society-passive-q1",
            "« The protest was organized peacefully » = La manifestation…",
            [
              "a été organisée pacifiquement",
              "organise la police",
              "n'a pas eu lieu",
              "est interdite toujours",
            ],
            0
          ),
          q(
            "society-passive-q2",
            "Complète : « New measures ___ being implemented. »",
            ["are", "is", "was", "be"],
            0
          ),
          q(
            "society-passive-q3",
            "« Residents are encouraged to recycle » signifie…",
            [
              "On encourage les résidents à recycler",
              "Les résidents interdisent le recyclage",
              "Pas de recyclage",
              "Les résidents ignorent tout",
            ],
            0
          ),
          q(
            "society-passive-q4",
            "Quelle phrase est correcte ?",
            [
              "The report will published tomorrow.",
              "The report will be published tomorrow.",
              "The report will publishing tomorrow.",
              "The report will been published tomorrow.",
            ],
            1
          ),
          q(
            "society-passive-q5",
            "« He was elected by a majority » = Il…",
            [
              "a été élu par une majorité",
              "a élu une majorité",
              "n'a pas voté",
              "refuse le poste",
            ],
            0
          ),
        ]
      ),
      lesson(
        "society-idioms",
        "unit-society",
        "Idiomes société",
        "Society idioms",
        [
          q(
            "society-idioms-q1",
            "« The tip of the iceberg » signifie…",
            [
              "La partie visible d'un problème plus vaste",
              "Un succès total",
              "Un voyage en Antarctique",
              "Une récompense",
            ],
            0
          ),
          q(
            "society-idioms-q2",
            "« Under pressure » veut dire…",
            [
              "Sous pression / stress",
              "Sans stress",
              "En vacances",
              "En haute montagne uniquement",
            ],
            0
          ),
          q(
            "society-idioms-q3",
            "« Go viral » signifie…",
            [
              "Se propager massivement en ligne",
              "Tomber malade",
              "Refuser internet",
              "Imprimer un journal",
            ],
            0
          ),
          q(
            "society-idioms-q4",
            "« A heated debate » = …",
            [
              "Un débat animé / passionné",
              "Un débat froid et vide",
              "Une panne de chauffage",
              "Un match sportif",
            ],
            0
          ),
          q(
            "society-idioms-q5",
            "« Call for action » signifie…",
            [
              "Appeler à l'action",
              "Refuser toute action",
              "Téléphoner pour rien",
              "Annuler un projet",
            ],
            0
          ),
        ]
      ),
      lesson(
        "society-perfect",
        "unit-society",
        "Present perfect (actualités)",
        "Present perfect (news)",
        [
          q(
            "society-perfect-q1",
            "« Unemployment has fallen this year » décrit…",
            [
              "un changement avec lien au présent",
              "un événement daté de 1800 précisément",
              "un futur impossible",
              "une habitude quotidienne",
            ],
            0
          ),
          q(
            "society-perfect-q2",
            "« Have reforms made a difference yet? » — « Yes, they ___ . »",
            ["made", "have made", "make", "will made"],
            1
          ),
          q(
            "society-perfect-q3",
            "« She has never held public office » = Elle…",
            [
              "n'a jamais occupé de fonction publique",
              "est ministre depuis toujours",
              "sera élue demain certainement",
              "refuse la politique demain",
            ],
            0
          ),
          q(
            "society-perfect-q4",
            "Choisis : « How long ___ tensions ___ ? »",
            ["have / lasted", "did / last", "are / lasting", "will / last"],
            0
          ),
          q(
            "society-perfect-q5",
            "« They've just released the figures » = Ils…",
            [
              "viennent de publier les chiffres",
              "publieront dans dix ans",
              "n'ont jamais publié",
              "ont menti obligatoirement",
            ],
            0
          ),
        ]
      ),
    ]
  ),
];
