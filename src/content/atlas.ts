export const atlasQuestions = [
  "What is it?",
  "How does it work?",
  "How do we know?",
  "What remains unknown?",
  "What possibilities does it contain?",
  "What would deeper understanding make possible?",
];

export type AtlasTerritory = {
  slug: string;
  index: string;
  title: string;
  definition: string;
  subterritories: string[];
};

export const atlasTerritories: AtlasTerritory[] = [
  {
    slug: "mind",
    index: "01",
    title: "Mind",
    definition:
      "The interior of experience — consciousness, attention, memory, emotion, and the machinery of decision.",
    subterritories: [
      "Consciousness", "Attention", "Memory", "Emotion", "Neuroticism", "Desire",
      "Attachment", "Intelligence", "Perception", "Personality", "Decision-making",
      "Creativity", "Identity",
    ],
  },
  {
    slug: "life",
    index: "02",
    title: "Life",
    definition:
      "Living systems, from the cell to the ecosystem, and the biological conditions of health and flourishing.",
    subterritories: [
      "Cells", "Genetics", "Evolution", "Microbiology", "Physiology", "Health",
      "Disease", "Aging", "Reproduction", "Ecosystems", "Synthetic biology",
    ],
  },
  {
    slug: "society",
    index: "03",
    title: "Society",
    definition:
      "The systems through which human beings coordinate, govern, exchange, and believe.",
    subterritories: [
      "Family", "Status", "Markets", "Organizations", "Law", "Government",
      "Religion", "Language", "Education", "Media", "Culture", "War",
      "Cooperation", "Civilization",
    ],
  },
  {
    slug: "matter",
    index: "04",
    title: "Matter",
    definition:
      "The physics of the near-at-hand — particles, atoms, and the materials built from them.",
    subterritories: [
      "Particles", "Atoms", "Molecules", "Chemistry", "Materials",
      "Quantum phenomena", "Thermodynamics", "Condensed matter",
    ],
  },
  {
    slug: "machines",
    index: "05",
    title: "Machines",
    definition:
      "What humans build to compute, sense, move, manufacture, and act on their behalf.",
    subterritories: [
      "Computation", "Artificial intelligence", "Robotics", "Semiconductors",
      "Manufacturing", "Energy systems", "Transportation", "Autonomy",
      "Communication",
    ],
  },
  {
    slug: "earth",
    index: "06",
    title: "Earth",
    definition: "The planetary systems that sustain and constrain human life.",
    subterritories: [
      "Atmosphere", "Oceans", "Geology", "Climate", "Biosphere", "Resources",
      "Cities", "Infrastructure",
    ],
  },
  {
    slug: "cosmos",
    index: "07",
    title: "Cosmos",
    definition: "The physical universe beyond Earth, from planets to the structure of spacetime.",
    subterritories: [
      "Planets", "Stars", "Black holes", "Gamma-ray bursts", "Galaxies",
      "Dark matter", "Dark energy", "Cosmology", "Origins of structure",
      "Observable universe",
    ],
  },
  {
    slug: "frontiers",
    index: "08",
    title: "Frontiers of Physics",
    definition: "Where established physics becomes incomplete but rigorous investigation remains possible.",
    subterritories: [
      "Quantum gravity", "Spacetime", "Unification", "Additional dimensions",
      "Vacuum structure", "Early-universe physics", "Unknown physical phenomena",
    ],
  },
  {
    slug: "metaphysics",
    index: "09",
    title: "Metaphysics",
    definition: "Questions investigated primarily through reasoning rather than experimental science.",
    subterritories: [
      "Being", "Causation", "Time", "Identity", "Possibility", "Necessity",
      "Mind and matter", "Ontology", "Epistemology",
    ],
  },
  {
    slug: "revelation",
    index: "10",
    title: "Revelation & Theology",
    definition:
      "Claims grounded in religious revelation or theological interpretation, held distinct from empirical science.",
    subterritories: [
      "God", "Creation", "Purpose", "Moral command", "The unseen",
      "Human responsibility", "Eschatology",
    ],
  },
];

export const epistemicStatuses = [
  { status: "OBSERVED", description: "Directly observed or experimentally established." },
  { status: "INFERRED", description: "Strongly supported by evidence, although not always directly observable." },
  { status: "THEORETICAL", description: "Supported by serious mathematical or conceptual models but not empirically established." },
  { status: "SPECULATIVE", description: "Possible ideas for which evidence remains weak or absent." },
  { status: "PHILOSOPHICAL", description: "Claims investigated primarily through reasoning rather than experimental science." },
  { status: "REVEALED", description: "Claims grounded in religious revelation or theological interpretation." },
] as const;
