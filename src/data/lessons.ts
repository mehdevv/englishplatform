export type Question = {
  id: string;
  promptFr: string;
  promptEn?: string;
  options: string[];
  correctIndex: number;
  hint?: string;
};

export type Lesson = {
  id: string;
  unitId: string;
  titleFr: string;
  titleEn: string;
  icon: string;
  questions: Question[];
};

export type Unit = {
  id: string;
  titleFr: string;
  titleEn: string;
  icon: string;
  lessons: Lesson[];
};

export const UNITS: Unit[] = [
  {
    id: "unit-1",
    titleFr: "Les bases",
    titleEn: "Basics",
    icon: "👋",
    lessons: [
      {
        id: "greetings",
        unitId: "unit-1",
        titleFr: "Salutations",
        titleEn: "Greetings",
        icon: "🙋",
        questions: [
          {
            id: "g1",
            promptFr: "Comment dit-on « Bonjour » en anglais ?",
            options: ["Goodbye", "Hello", "Thanks", "Please"],
            correctIndex: 1,
            hint: "On dit aussi « Hi » de façon informelle.",
          },
          {
            id: "g2",
            promptFr: "Que signifie « Good morning » ?",
            options: ["Bonne nuit", "Bonsoir", "Bonjour (matin)", "Au revoir"],
            correctIndex: 2,
          },
          {
            id: "g3",
            promptFr: "Comment dit-on « Merci » ?",
            options: ["Sorry", "Please", "Thank you", "Welcome"],
            correctIndex: 2,
          },
          {
            id: "g4",
            promptFr: "« See you later » veut dire…",
            options: ["À tout de suite", "À plus tard", "Enchanté", "Bienvenue"],
            correctIndex: 1,
          },
          {
            id: "g5",
            promptFr: "Comment te présentes-tu ?",
            promptEn: "My name ___ Houda.",
            options: ["is", "are", "am", "be"],
            correctIndex: 0,
          },
        ],
      },
      {
        id: "intro",
        unitId: "unit-1",
        titleFr: "Se présenter",
        titleEn: "Introductions",
        icon: "✨",
        questions: [
          {
            id: "i1",
            promptFr: "« Nice to meet you » signifie…",
            options: ["À bientôt", "Enchanté(e)", "Comment vas-tu ?", "Je m'appelle"],
            correctIndex: 1,
          },
          {
            id: "i2",
            promptFr: "Comment demander « Comment tu t'appelles ? »",
            options: ["How old are you?", "What is your name?", "Where are you from?", "How are you?"],
            correctIndex: 1,
          },
          {
            id: "i3",
            promptFr: "Je viens d'Algérie → I ___ from Algeria.",
            options: ["am", "is", "are", "be"],
            correctIndex: 0,
          },
          {
            id: "i4",
            promptFr: "« How are you? » — bonne réponse :",
            options: ["I'm fine, thanks.", "My name is Houda.", "Goodbye!", "See you!"],
            correctIndex: 0,
          },
          {
            id: "i5",
            promptFr: "« I am 20 years old » veut dire…",
            options: ["J'ai 20 ans", "Je suis ici depuis 20 ans", "Il est 20 h", "20 personnes"],
            correctIndex: 0,
          },
        ],
      },
    ],
  },
  {
    id: "unit-2",
    titleFr: "Quotidien",
    titleEn: "Daily life",
    icon: "🏠",
    lessons: [
      {
        id: "family",
        unitId: "unit-2",
        titleFr: "La famille",
        titleEn: "Family",
        icon: "👨‍👩‍👧",
        questions: [
          {
            id: "f1",
            promptFr: "« Mother » en français ?",
            options: ["Père", "Mère", "Sœur", "Fils"],
            correctIndex: 1,
          },
          {
            id: "f2",
            promptFr: "Mon frère → My ___",
            options: ["sister", "brother", "mother", "aunt"],
            correctIndex: 1,
          },
          {
            id: "f3",
            promptFr: "« Grandparents » signifie…",
            options: ["Parents", "Grands-parents", "Cousins", "Oncles"],
            correctIndex: 1,
          },
          {
            id: "f4",
            promptFr: "This is my family. « This » = …",
            options: ["Ceci / Ce", "Cela", "Ils", "Nous"],
            correctIndex: 0,
          },
          {
            id: "f5",
            promptFr: "She is my sister. « She » = …",
            options: ["Il", "Elle", "Ils", "Tu"],
            correctIndex: 1,
          },
        ],
      },
      {
        id: "routine",
        unitId: "unit-2",
        titleFr: "Ma journée",
        titleEn: "My day",
        icon: "⏰",
        questions: [
          {
            id: "r1",
            promptFr: "« Wake up » signifie…",
            options: ["Se coucher", "Se réveiller", "Manger", "Travailler"],
            correctIndex: 1,
          },
          {
            id: "r2",
            promptFr: "Petit-déjeuner en anglais :",
            options: ["Lunch", "Dinner", "Breakfast", "Snack"],
            correctIndex: 2,
          },
          {
            id: "r3",
            promptFr: "I go to school. « go » au présent avec I :",
            options: ["goes", "go", "going", "went"],
            correctIndex: 1,
          },
          {
            id: "r4",
            promptFr: "« In the evening » = …",
            options: ["Le matin", "L'après-midi", "Le soir", "La nuit seulement"],
            correctIndex: 2,
          },
          {
            id: "r5",
            promptFr: "Je me couche → I go to ___.",
            options: ["work", "bed", "market", "school"],
            correctIndex: 1,
          },
        ],
      },
    ],
  },
  {
    id: "unit-3",
    titleFr: "Explorer",
    titleEn: "Explore",
    icon: "🌍",
    lessons: [
      {
        id: "food",
        unitId: "unit-3",
        titleFr: "Nourriture",
        titleEn: "Food",
        icon: "🍎",
        questions: [
          {
            id: "fo1",
            promptFr: "« Water » = …",
            options: ["Lait", "Eau", "Jus", "Thé"],
            correctIndex: 1,
          },
          {
            id: "fo2",
            promptFr: "I would like some bread. « would like » = …",
            options: ["Je déteste", "Je voudrais", "J'ai mangé", "Je cuis"],
            correctIndex: 1,
          },
          {
            id: "fo3",
            promptFr: "Pomme en anglais :",
            options: ["Orange", "Banana", "Apple", "Grape"],
            correctIndex: 2,
          },
          {
            id: "fo4",
            promptFr: "« Delicious » signifie…",
            options: ["Cher", "Délicieux", "Froid", "Sale"],
            correctIndex: 1,
          },
          {
            id: "fo5",
            promptFr: "The food is good. « food » = …",
            options: ["Boisson", "Nourriture", "Maison", "Ville"],
            correctIndex: 1,
          },
        ],
      },
      {
        id: "travel",
        unitId: "unit-3",
        titleFr: "Voyage",
        titleEn: "Travel",
        icon: "✈️",
        questions: [
          {
            id: "t1",
            promptFr: "« Airport » = …",
            options: ["Gare", "Aéroport", "Port", "Hôtel"],
            correctIndex: 1,
          },
          {
            id: "t2",
            promptFr: "Where is the bus stop? = …",
            options: ["Où est l'arrêt de bus ?", "Combien coûte le ticket ?", "À quelle heure ?", "Bon voyage !"],
            correctIndex: 0,
          },
          {
            id: "t3",
            promptFr: "« Ticket » en français ?",
            options: ["Carte", "Billet", "Valise", "Carte d'identité"],
            correctIndex: 1,
          },
          {
            id: "t4",
            promptFr: "I need help. « need » = …",
            options: ["J'ai besoin", "Je refuse", "J'oublie", "Je promets"],
            correctIndex: 0,
          },
          {
            id: "t5",
            promptFr: "« Have a nice trip! » = …",
            options: ["Bon appétit !", "Bonne chance !", "Bon voyage !", "Bonne nuit !"],
            correctIndex: 2,
          },
        ],
      },
    ],
  },
];

export const ALL_LESSONS = UNITS.flatMap((u) => u.lessons);

export function getLesson(id: string): Lesson | undefined {
  return ALL_LESSONS.find((l) => l.id === id);
}

export function getNextLessonId(currentId: string): string | null {
  const idx = ALL_LESSONS.findIndex((l) => l.id === currentId);
  if (idx < 0 || idx >= ALL_LESSONS.length - 1) return null;
  return ALL_LESSONS[idx + 1]!.id;
}

export function isLessonUnlocked(lessonId: string, completed: string[]): boolean {
  const idx = ALL_LESSONS.findIndex((l) => l.id === lessonId);
  if (idx <= 0) return true;
  const prev = ALL_LESSONS[idx - 1]!;
  return completed.includes(prev.id);
}
