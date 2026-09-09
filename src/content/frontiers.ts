export type FrontierItem = {
  label: string;
  position: number; // 0 (emerging) – 100 (speculative)
};

export const frontierCategories = [
  { label: "Emerging", description: "Technologies already demonstrating substantial real-world capability." },
  { label: "Early", description: "Fields with working prototypes or limited demonstrations." },
  { label: "Theoretical", description: "Possibilities supported by serious models but not yet demonstrated." },
  { label: "Speculative", description: "Ideas worth examining without pretending that their feasibility is established." },
];

export const frontierItems: FrontierItem[] = [
  { label: "Quantum Computing", position: 12 },
  { label: "Synthetic Biology", position: 18 },
  { label: "Fusion Energy", position: 28 },
  { label: "AGI", position: 40 },
  { label: "Radical Longevity", position: 46 },
  { label: "Brain-Computer Interfaces", position: 50 },
  { label: "Autonomous Aviation", position: 30 },
  { label: "Orbital Habitats", position: 62 },
  { label: "Artificial Gravity", position: 70 },
  { label: "Space Manufacturing", position: 58 },
  { label: "Asteroid Resources", position: 66 },
  { label: "Dyson Swarms", position: 88 },
  { label: "Interstellar Propulsion", position: 92 },
  { label: "Extraterrestrial Intelligence", position: 95 },
  { label: "Quantum Gravity", position: 84 },
  { label: "Additional Dimensions", position: 90 },
  { label: "Machine Consciousness", position: 78 },
];
