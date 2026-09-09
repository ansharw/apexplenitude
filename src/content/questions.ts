export type Question = {
  id: string;
  text: string;
  domains: string[];
};

export const questions: Question[] = [
  { id: "001", text: "What is consciousness?", domains: ["Mind", "Metaphysics"] },
  { id: "002", text: "What are the fundamental limits of intelligence?", domains: ["Mind", "Machines"] },
  { id: "003", text: "Can biological aging become substantially controllable?", domains: ["Life"] },
  { id: "004", text: "What is the deepest structure of physical reality?", domains: ["Frontiers", "Cosmos"] },
  { id: "005", text: "Can humans build permanent free-space civilizations?", domains: ["Cosmos", "Civilization"] },
  { id: "006", text: "What forms of energy abundance are physically and economically achievable?", domains: ["Matter", "Civilization"] },
  { id: "007", text: "Which forms of suffering are technically removable?", domains: ["Life", "Society"] },
  { id: "008", text: "How much of personality is biologically constrained?", domains: ["Mind", "Life"] },
  { id: "009", text: "What makes civilizations durable?", domains: ["Society", "Civilization"] },
  { id: "010", text: "How should artificial intelligence alter the distribution of human labor and agency?", domains: ["Machines", "Society"] },
  { id: "011", text: "What is the maximum practical scale of human mobility?", domains: ["Civilization"] },
  { id: "012", text: "Could large-scale orbital industry become economically self-sustaining?", domains: ["Cosmos", "Frontiers"] },
  { id: "013", text: "What lies beyond the observable universe?", domains: ["Cosmos"] },
  { id: "014", text: "Are additional spatial dimensions physically real?", domains: ["Frontiers"] },
  { id: "015", text: "How much freedom can a civilization provide without destroying coordination?", domains: ["Society", "Civilization"] },
  { id: "016", text: "How should humanity distinguish valuable friction from unnecessary friction?", domains: ["Society"] },
];
