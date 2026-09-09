export const primaryNav = [
  { label: "Institution", href: "/institution" },
  { label: "Atlas", href: "/atlas" },
  { label: "Research", href: "/research" },
  { label: "Frontiers", href: "/frontiers" },
  { label: "Innovation", href: "/innovation" },
  { label: "Capital", href: "/capital" },
  { label: "Human Possibility", href: "/human-possibility" },
  { label: "Civilization", href: "/civilization" },
];

export const indexColumns = [
  {
    heading: "Institution",
    items: [
      { label: "Institution", href: "/institution" },
      { label: "Governance", href: "/governance" },
      { label: "People", href: "/people" },
      { label: "Record", href: "/record" },
    ],
  },
  {
    heading: "Knowledge",
    items: [
      { label: "Atlas", href: "/atlas" },
      { label: "Questions", href: "/questions" },
      { label: "Research", href: "/research" },
      { label: "Frontiers", href: "/frontiers" },
    ],
  },
  {
    heading: "Capability",
    items: [
      { label: "Innovation", href: "/innovation" },
      { label: "Capital", href: "/capital" },
      { label: "Ventures", href: "/ventures" },
      { label: "Projects", href: "/projects" },
    ],
  },
  {
    heading: "Possibility",
    items: [
      { label: "Human Possibility", href: "/human-possibility" },
      { label: "Patronage", href: "/patronage" },
      { label: "The Friction Fund", href: "/friction" },
      { label: "Benefaction", href: "/benefaction" },
    ],
  },
  {
    heading: "Civilization",
    items: [
      { label: "Civilization", href: "/civilization" },
      { label: "Culture", href: "/culture" },
      { label: "Observatory", href: "/observatory" },
      { label: "Possibility Index", href: "/possibility-index" },
    ],
  },
  {
    heading: "Archive",
    items: [
      { label: "Library", href: "/library" },
      { label: "Publications", href: "/publications" },
      { label: "Establishments", href: "/establishments" },
      { label: "News", href: "/news" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const footerNav = indexColumns.flatMap((c) => c.items);

export const contactEmail = "institutional@apexplenitude.com";

export const contactChannels = [
  "Institutional Relations",
  "Research",
  "Capital",
  "Partnerships",
  "Benefaction",
  "Media",
];
