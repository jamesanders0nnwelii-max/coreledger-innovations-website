export const site = {
  name: "CoreLedger Innovations",
  shortName: "CoreLedger",
  tagline: "DeFi protocol engineering for production systems",
  description:
    "U.S.-based software company designing and building DeFi protocols, smart contracts, and the applications around them.",
  email: "hello@coreledger-innovations.com",
  careersEmail: "career@coreledger-innovations.com",
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
    label: "Discord",
    href: "https://discord.gg/yjxGdevayT",
    icon: "discord",
  },
  {
    label: "Github",
    href: "https://github.com/CoreLedger-Innovations",
    icon: "github",
  },
  {
    label: "Email",
    href: "mailto:hello@coreledger-innovations.com",
    icon: "email",
  },
] as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/approach", label: "Approach" },
  { href: "/careers", label: "Careers" },
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
    slug: "quay",
    name: "Quay",
    status: "In development",
    category: "Application",
    summary:
      "A new application currently in active development. Full product details will be published as the build advances.",
    detail:
      "Quay is CoreLedger’s next product surface. The public case study will expand once the application reaches a shareable milestone. Until then, it appears here as an in-progress engagement focused on application-layer delivery alongside our DeFi protocol work.",
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

export const careersProject = {
  name: "Aether Protocol",
  summary:
    "Aether Protocol is CoreLedger’s DeFi money-market MVP: an EVM collateralized lending reference with a Hub risk engine, AeToken markets, interest accrual, liquidation, oracle pricing, governance, and AETH incentives. The team is hardening the path from reference implementation toward production-ready protocol and supporting services.",
  focus: [
    "Hub market registry, collateral factors, borrow caps, and pause controls",
    "AeToken markets for deposits, interest accrual, and liquidations",
    "Oracle assumptions, governance authority, and AETH incentive flows",
    "Backend services for indexing, APIs, and operational visibility",
  ],
} as const;

export const jobs = [
  {
    slug: "solidity-engineer",
    title: "Solidity Engineer",
    team: "Aether Protocol",
    location: "United States · Remote",
    employmentTypes: ["Full-time", "Contract"] as const,
    compensation: {
      fullTime: "$200K – $250K",
      fullTimeNote: "Annual base",
      contract: "$100 – $120",
      contractNote: "Hourly",
    },
    summary:
      "Design and implement core money-market contracts for Aether Protocol—Hub, AeToken markets, interest models, liquidation paths, and audit-ready test coverage.",
    about:
      "You will own Solidity delivery for Aether’s EVM money-market reference and help move it toward production standards. The work spans market registry logic, collateral and borrow accounting, rate models, oracle interfaces, and incentive distribution in AETH.",
    responsibilities: [
      "Implement and refine Hub, AeToken, interest-rate, liquidation, and governance-related contracts",
      "Encode protocol invariants around borrow caps, account health, and economically sound liquidations",
      "Write Foundry-oriented unit, fuzz, and invariant tests for adversarial and edge-case behavior",
      "Prepare clean interfaces, upgrade/authority patterns, and documentation for security review",
      "Identify and reject unsafe patterns from the reference MVP before they reach production paths",
    ],
    requirements: [
      "Strong Solidity and EVM experience shipping or hardening DeFi protocols",
      "Deep familiarity with money markets, collateral factors, oracles, and liquidation mechanics",
      "Comfort with Foundry (or equivalent) testing, gas-aware design, and audit handoff",
      "Ability to reason about economic and security trade-offs before writing code",
      "Clear written communication for design notes and review comments",
    ],
    niceToHave: [
      "Experience with Compound-style architectures or similar lending protocols",
      "Exposure to Solana program design for a future architecture mapping",
      "Prior work preparing contracts for external security audits",
    ],
  },
  {
    slug: "technical-lead-engineer",
    title: "Technical Lead Engineer",
    team: "Aether Protocol",
    location: "United States · Remote",
    employmentTypes: ["Full-time", "Contract"] as const,
    compensation: {
      fullTime: "$250K – $300K",
      fullTimeNote: "Annual base",
      contract: "$120 – $140",
      contractNote: "Hourly",
    },
    summary:
      "Lead architecture and delivery across Aether Protocol—contract boundaries, system design, security assumptions, and coordination between Solidity and backend engineering.",
    about:
      "You will be the technical owner who keeps protocol design, implementation, and production readiness connected. Aether needs a lead who can map Hub/AeToken/oracle/governance boundaries, guide the team through failure modes, and sequence work from reference MVP to a secure production outcome.",
    responsibilities: [
      "Own end-to-end technical direction for Aether Protocol across contracts, services, and integrations",
      "Define system boundaries, trust assumptions, risk parameters, and acceptance criteria",
      "Review Solidity and backend designs for solvency, oracle, upgrade, and operational risks",
      "Sequence delivery into testable milestones and keep architecture decisions tied to implementation",
      "Mentor engineers and keep communication clear with stakeholders on scope, risk, and trade-offs",
    ],
    requirements: [
      "Proven technical leadership on DeFi, protocol, or high-stakes distributed systems",
      "Hands-on depth in smart contracts and the services around them (APIs, indexing, or ops)",
      "Ability to threat-model money-market systems and drive audit-ready engineering practices",
      "Strong facilitation skills across design reviews, prioritization, and incident-ready planning",
      "Experience shipping systems where correctness and operator visibility matter as much as features",
    ],
    niceToHave: [
      "Prior technical lead experience on lending, liquidity, or governance protocols",
      "Familiarity with Solana account models for Aether’s longer-term architecture direction",
      "Background coordinating external auditors and production launch readiness",
    ],
  },
  {
    slug: "backend-engineer",
    title: "Backend Engineer",
    team: "Aether Protocol",
    location: "United States · Remote",
    employmentTypes: ["Full-time", "Contract"] as const,
    compensation: {
      fullTime: "$180K – $230K",
      fullTimeNote: "Annual base",
      contract: "$80 – $110",
      contractNote: "Hourly",
    },
    summary:
      "Build the off-chain systems around Aether Protocol—event indexing, APIs, monitoring hooks, and reliable data paths that keep protocol state visible and operable.",
    about:
      "Aether’s contracts need a production-minded backend layer: indexing market events, exposing application APIs, reconciling chain state after reorgs or RPC failures, and giving operators clear visibility into protocol health.",
    responsibilities: [
      "Design and implement indexing and API services for Hub, AeToken, liquidation, and incentive events",
      "Integrate privileged oracle and operational data flows with staleness and failure handling",
      "Build monitoring, alerting, and reconciliation paths for RPC outages and missed events",
      "Partner with Solidity engineers so contract events and off-chain consumers stay aligned",
      "Document runbooks and deployment context for operating Aether-related services safely",
    ],
    requirements: [
      "Strong backend experience with TypeScript/Node.js or equivalent service stacks",
      "Experience with blockchain indexing, RPC providers, or event-driven data pipelines",
      "Comfort designing for failure: retries, idempotency, stale reads, and partial outages",
      "Ability to model APIs around on-chain state and make pending/confirmed behavior explicit",
      "Clear collaboration habits with protocol and product engineers",
    ],
    niceToHave: [
      "Experience supporting DeFi dashboards, keepers, or liquidator infrastructure",
      "Familiarity with Postgres, queues, and observability tooling in production",
      "Prior work on multi-chain or L2 indexing systems",
    ],
  },
] as const;

export type JobSlug = (typeof jobs)[number]["slug"];

export function getJob(slug: string) {
  return jobs.find((job) => job.slug === slug);
}
