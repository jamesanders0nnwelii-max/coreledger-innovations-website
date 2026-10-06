export const site = {
  name: "CoreLedger Innovations",
  shortName: "CoreLedger",
  tagline: "DeFi protocol engineering for production systems",
  description:
    "U.S.-based software company designing and building DeFi protocols, smart contracts, and the applications around them.",
  email: "hello@coreledger-innovations.com",
  region: "United States · Remote",
  responseTime: "Within 1 business day",
} as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/coreledger-innovations",
    icon: "linkedin",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/coreledger",
    icon: "twitter",
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/@coreledgerinnovations",
    icon: "youtube",
  },
  {
    label: "Discord",
    href: "https://discord.gg/coreledger",
    icon: "discord",
  },
  {
    label: "Github",
    href: "https://github.com/jamesanders0nnwelii-max/coreledger-innovations-website",
    icon: "github",
  },
  {
    label: "Email",
    href: "mailto:hello@coreledger-innovations.com",
    icon: "email",
  },
  {
    label: "Newsletter",
    href: "/contact",
    icon: "newsletter",
  },
] as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/approach", label: "Approach" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    title: "DeFi protocol development",
    summary:
      "Money markets, lending, liquidity systems, and incentive design built around clear risk boundaries.",
    points: [
      "Market registries and risk engines",
      "Interest accrual and liquidation logic",
      "Oracle integration and parameter safety",
    ],
  },
  {
    title: "Smart contract engineering",
    summary:
      "Solidity and EVM systems written for audit readiness, with tests that cover economic and adversarial paths.",
    points: [
      "Foundry-oriented test suites",
      "Upgrade and authority design",
      "Pre-audit hardening and documentation",
    ],
  },
  {
    title: "Web3 product applications",
    summary:
      "Wallet-connected interfaces and APIs that make signing, pending state, and failures understandable.",
    points: [
      "React and TypeScript frontends",
      "Transaction and wallet UX",
      "Indexing and application APIs",
    ],
  },
  {
    title: "Protocol security review",
    summary:
      "Threat models, permission reviews, and failure-mode analysis before users depend on the system.",
    points: [
      "Trust assumption documentation",
      "Invariant and economic risk review",
      "Operational readiness planning",
    ],
  },
] as const;

export const projects = [
  {
    slug: "aether-protocol",
    name: "Aether Protocol",
    status: "Active reference",
    category: "DeFi · Money markets",
    summary:
      "A collateralized lending-market system spanning market risk, reserves, borrowing, interest, liquidation, and AETH incentives.",
    detail:
      "Aether Protocol is CoreLedger’s DeFi MVP: an EVM money-market reference with a Hub risk engine, AeToken markets, oracle pricing, governance, and incentive flows. It models the core mechanics of supply, borrow, collateral checks, and liquidation while documenting the Solana architecture direction for production redesign.",
    stack: ["Solidity", "EVM", "Hub / AeToken", "Oracle & risk", "AETH incentives"],
    outcomes: [
      "Hub market registry with collateral factors, borrow caps, and pause controls",
      "AeToken markets for deposit receipts and interest accrual",
      "Liquidation and incentive paths designed against solvency invariants",
    ],
  },
  {
    slug: "orbit",
    name: "Orbit",
    status: "In development",
    category: "Application",
    summary:
      "A new application currently in active development. Full product details will be published as the build advances.",
    detail:
      "Orbit is CoreLedger’s next product surface. The public case study will expand once the application reaches a shareable milestone. Until then, it appears here as an in-progress engagement focused on application-layer delivery alongside our DeFi protocol work.",
    stack: ["Application", "Product engineering", "Upcoming release"],
    outcomes: [
      "Product architecture and delivery underway",
      "Public materials to follow the next upgrade",
      "Contact us for early technical conversations",
    ],
  },
] as const;

export const approachSteps = [
  {
    step: "01",
    title: "Map the system",
    body: "Define users, protocol boundaries, trust assumptions, data flows, and measurable success before code becomes the constraint.",
  },
  {
    step: "02",
    title: "Build the critical path",
    body: "Ship contracts, APIs, indexers, and interfaces in small increments that can be tested against real failure modes.",
  },
  {
    step: "03",
    title: "Test adversarial paths",
    body: "Threat-model, load-test, observe, and rehearse recovery before operators and users depend on the system.",
  },
  {
    step: "04",
    title: "Launch with visibility",
    body: "Deploy with monitoring, runbooks, ownership, and the context needed to improve safely after release.",
  },
] as const;

export const faqs = [
  {
    q: "What does the first phase look like?",
    a: "We begin by mapping the product, protocol dependencies, security assumptions, and delivery constraints. You leave with a focused technical plan, ownership boundaries, and milestones.",
  },
  {
    q: "Can you work with an existing engineering team?",
    a: "Yes. We can own a defined system boundary or work alongside your engineers on architecture, implementation, protocol integration, and production readiness.",
  },
  {
    q: "How do you approach smart contract security?",
    a: "Security starts with documented trust assumptions, constrained permissions, and tests for adversarial behavior. Engineering review prepares the work for independent audit—it does not replace one.",
  },
  {
    q: "Do you support systems after launch?",
    a: "Production readiness includes monitoring, runbooks, deployment context, and an explicit support plan so the system can be operated and improved safely.",
  },
] as const;
