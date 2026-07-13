/**
 * STACKS ADVISORY — Services Catalog
 * services-data.js  |  version: 0.3.0
 *
 * Structure:
 *   window.STACKS_SERVICES_DATA = {
 *     version, meta, personas, engagementModels, services[]
 *   }
 *
 * Each service has:
 *   id, name, description, pillar, category,
 *   personas[], engagementModels[], tags[], icon
 *
 * Pillars:
 *   1. Commercial Architecture
 *   2. Strategic BD & Partnerships
 *   3. Data-Driven GTM Strategy
 *   4. Revenue Acceleration
 *
 * Personas:
 *   founder-ceo | cco-vp-sales | rev-ops |
 *   product-marketing | informatics | investor-board
 *
 * Engagement Models:
 *   fractional | sprint | project | advisory
 */

window.STACKS_SERVICES_DATA = {

  version: "0.3.0",

  meta: {
    totalServices: 84,
    pillars: 4,
    personas: 6,
    engagementModels: 4,
    lastUpdated: "2026-07-13"
  },

  personas: [
    { id: "founder-ceo",       label: "Founder / CEO" },
    { id: "cco-vp-sales",      label: "CCO / VP Sales" },
    { id: "rev-ops",           label: "Revenue / Sales Operations" },
    { id: "product-marketing", label: "Product / Marketing Leader" },
    { id: "informatics",       label: "Scientific Software / Informatics Leader" },
    { id: "investor-board",    label: "Investor / Board Member" }
  ],

  engagementModels: [
    { id: "fractional", label: "Fractional VP / Director",      scope: "Ongoing senior commercial leadership without a full-time hire." },
    { id: "sprint",     label: "90-Day Commercial Sprint",      scope: "Focused engagement with a defined outcome in one quarter." },
    { id: "project",    label: "Strategic Advisory Project",    scope: "Discrete deliverable for a specific strategic decision." },
    { id: "advisory",   label: "Advisory Board / Advisor Role", scope: "Monthly calls, network access, on-demand input." }
  ],

  services: [

    // ══════════════════════════════════════════════════
    // PILLAR 1 — COMMERCIAL ARCHITECTURE  (svc-001–021)
    // ══════════════════════════════════════════════════

    {
      id: "svc-001",
      icon: "🏛",
      name: "CRM Architecture Design",
      description: "Full commercial data model and pipeline configuration for HubSpot or Salesforce — built for your motion, not the out-of-box default.",
      pillar: "Commercial Architecture",
      category: "CRM & Infrastructure",
      personas: ["founder-ceo","cco-vp-sales","rev-ops"],
      engagementModels: ["fractional","sprint","project"],
      tags: ["CRM","HubSpot","Salesforce","Infrastructure","Commercial Architecture"]
    },
    {
      id: "svc-002",
      icon: "📊",
      name: "Pipeline Stage Design",
      description: "Entry and exit criteria, deal stage taxonomy, and field workflow — aligned to how your buyers actually buy, not a generic funnel.",
      pillar: "Commercial Architecture",
      category: "CRM & Infrastructure",
      personas: ["cco-vp-sales","rev-ops","founder-ceo"],
      engagementModels: ["sprint","project","fractional"],
      tags: ["CRM","Pipeline","Sales Process","Commercial Architecture"]
    },
    {
      id: "svc-003",
      icon: "👥",
      name: "CRM Adoption Program",
      description: "Training, documentation, and accountability design to make CRM the real system of record — not the system reps work around.",
      pillar: "Commercial Architecture",
      category: "CRM & Infrastructure",
      personas: ["rev-ops","cco-vp-sales"],
      engagementModels: ["fractional","sprint"],
      tags: ["CRM","Adoption","Enablement","Sales Process"]
    },
    {
      id: "svc-004",
      icon: "🗺",
      name: "Territory Model and Coverage Architecture",
      description: "Segmented by account type, geography, and propensity — with overlay structure and field assignment built in.",
      pillar: "Commercial Architecture",
      category: "Territory & Quota",
      personas: ["cco-vp-sales","founder-ceo","rev-ops"],
      engagementModels: ["sprint","project","fractional"],
      tags: ["Territory","Coverage","Commercial Architecture","GTM Strategy"]
    },
    {
      id: "svc-005",
      icon: "🎯",
      name: "ICP Definition and Account Scoring",
      description: "The firmographic, technographic, and behavioral signals that define your best-fit accounts — with a prioritized named list.",
      pillar: "Commercial Architecture",
      category: "Territory & Quota",
      personas: ["founder-ceo","cco-vp-sales","product-marketing","informatics"],
      engagementModels: ["sprint","project"],
      tags: ["ICP","Segmentation","Account Scoring","GTM Strategy"]
    },
    {
      id: "svc-006",
      icon: "⚖️",
      name: "Quota Framework and Attainment Model",
      description: "Territory-level quota construction with attainment tracking and annual review process — tied to market opportunity, not last year's number.",
      pillar: "Commercial Architecture",
      category: "Territory & Quota",
      personas: ["cco-vp-sales","rev-ops"],
      engagementModels: ["project","fractional"],
      tags: ["Quota","Compensation","Territory","Revenue Acceleration"]
    },
    {
      id: "svc-007",
      icon: "👤",
      name: "Commercial Hire Profile and Interview Framework",
      description: "Competency model, scorecard, and interview sequence for your next commercial hire — from first AE to VP Sales.",
      pillar: "Commercial Architecture",
      category: "Team & Talent",
      personas: ["founder-ceo","cco-vp-sales"],
      engagementModels: ["project","advisory"],
      tags: ["Hiring","Team Building","Commercial Architecture","Leadership"]
    },
    {
      id: "svc-008",
      icon: "📈",
      name: "Onboarding and Ramp Plan",
      description: "90-day onboarding plan with milestones, enablement content, and ramp-to-quota targets by role and territory.",
      pillar: "Commercial Architecture",
      category: "Team & Talent",
      personas: ["founder-ceo","cco-vp-sales"],
      engagementModels: ["sprint","project","fractional"],
      tags: ["Onboarding","Ramp","Enablement","Sales Process"]
    },
    {
      id: "svc-009",
      icon: "💰",
      name: "Compensation Structure and OTE Benchmarking",
      description: "Market-benchmarked OTE, base/variable split, and accelerator design for your commercial roles — validated against life sciences comps.",
      pillar: "Commercial Architecture",
      category: "Team & Talent",
      personas: ["founder-ceo","cco-vp-sales"],
      engagementModels: ["project","advisory"],
      tags: ["Compensation","OTE","Benchmarking","Team Building"]
    },
    {
      id: "svc-010",
      icon: "📘",
      name: "GTM Playbook Development",
      description: "The complete commercial operating manual — ICP, messaging, sequences, deal stage process, objection handling, and metrics.",
      pillar: "Commercial Architecture",
      category: "Playbooks & Enablement",
      personas: ["founder-ceo","cco-vp-sales","product-marketing"],
      engagementModels: ["sprint","fractional"],
      tags: ["Playbook","Enablement","GTM Strategy","Commercial Architecture"]
    },
    {
      id: "svc-011",
      icon: "🔗",
      name: "Unified Commercial Intelligence Layer Design",
      description: "Architecture connecting instrument data, LIMS, CRM, and ERP into a single commercial view — the operating system for your GTM.",
      pillar: "Commercial Architecture",
      category: "Data & Systems",
      personas: ["rev-ops","informatics","founder-ceo"],
      engagementModels: ["sprint","project","fractional"],
      tags: ["Data Integration","LIMS","CRM","Infrastructure","Commercial Architecture"]
    },
    {
      id: "svc-012",
      icon: "📡",
      name: "Integration and Data Flow Mapping",
      description: "Current-state audit and future-state design of all data connections in your commercial stack — instrument to boardroom.",
      pillar: "Commercial Architecture",
      category: "Data & Systems",
      personas: ["rev-ops","informatics"],
      engagementModels: ["project","sprint"],
      tags: ["Data Integration","Architecture","Systems","Infrastructure"]
    },
    {
      id: "svc-013",
      icon: "🗂",
      name: "Metadata and Data Provenance Strategy",
      description: "Framework for data lineage, searchability, and chain-of-custody across your scientific-commercial environment.",
      pillar: "Commercial Architecture",
      category: "Data & Systems",
      personas: ["rev-ops","informatics"],
      engagementModels: ["project"],
      tags: ["Data","Metadata","Provenance","Infrastructure","Scientific SaaS"]
    },
    {
      id: "svc-014",
      icon: "📊",
      name: "Executive Commercial Dashboard",
      description: "C-suite view of pipeline, revenue, account health, and leading indicators — tied to board-level metrics and P&L.",
      pillar: "Commercial Architecture",
      category: "Reporting & Analytics",
      personas: ["rev-ops","cco-vp-sales","investor-board"],
      engagementModels: ["sprint","project","fractional"],
      tags: ["Dashboard","Reporting","Board Reporting","Data & Reporting"]
    },
    {
      id: "svc-015",
      icon: "📋",
      name: "Field-Level Performance Reporting",
      description: "Rep-level activity, pipeline, and attainment views that drive coaching conversations and hold the team accountable.",
      pillar: "Commercial Architecture",
      category: "Reporting & Analytics",
      personas: ["cco-vp-sales","rev-ops"],
      engagementModels: ["fractional","sprint"],
      tags: ["Reporting","Pipeline","Sales Process","Data & Reporting"]
    },
    {
      id: "svc-016",
      icon: "💰",
      name: "Financial Traceability Framework",
      description: "The connection between commercial activity, pipeline creation, and P&L impact — for finance leadership and board reporting.",
      pillar: "Commercial Architecture",
      category: "Reporting & Analytics",
      personas: ["rev-ops","investor-board","founder-ceo"],
      engagementModels: ["project","fractional"],
      tags: ["Financial Reporting","Board Reporting","P&L","Data & Reporting"]
    },
    {
      id: "svc-017",
      icon: "📧",
      name: "Outreach Sequence Automation",
      description: "Multi-touch outreach sequences in HubSpot or Salesloft — personalized by persona, ICP segment, and deal stage.",
      pillar: "Commercial Architecture",
      category: "Automation",
      personas: ["rev-ops","cco-vp-sales","founder-ceo"],
      engagementModels: ["sprint","fractional"],
      tags: ["Automation","Outreach","Sequences","CRM","BD & Partnerships"]
    },
    {
      id: "svc-018",
      icon: "🔄",
      name: "Pipeline Review Workflow Automation",
      description: "Automated deal health scoring, follow-up triggers, and manager alert systems — removing manual overhead from the forecast.",
      pillar: "Commercial Architecture",
      category: "Automation",
      personas: ["rev-ops","cco-vp-sales"],
      engagementModels: ["sprint","fractional"],
      tags: ["Automation","Pipeline","Workflow","CRM"]
    },
    {
      id: "svc-019",
      icon: "⚡",
      name: "Customer Onboarding Workflow Automation",
      description: "Post-close handoff, onboarding task automation, and early adoption tracking — the commercial-to-CS handoff that retains accounts.",
      pillar: "Commercial Architecture",
      category: "Automation",
      personas: ["rev-ops","founder-ceo"],
      engagementModels: ["sprint","project"],
      tags: ["Automation","Onboarding","Customer Success","Workflow"]
    },
    {
      id: "svc-020",
      icon: "🗺",
      name: "Territory Revision and Rebalancing",
      description: "Data-driven territory rebalancing as headcount changes or market intelligence evolves — prevents coverage gaps and conflict.",
      pillar: "Commercial Architecture",
      category: "Territory & Quota",
      personas: ["cco-vp-sales","rev-ops"],
      engagementModels: ["project","fractional"],
      tags: ["Territory","Coverage","Sales Operations","Commercial Architecture"]
    },
    {
      id: "svc-021",
      icon: "🏆",
      name: "SPIFF and Incentive Program Design",
      description: "Short-term incentive program design tied to specific pipeline, product, or segment objectives — structured to drive behavior without breaking comp plans.",
      pillar: "Commercial Architecture",
      category: "Territory & Quota",
      personas: ["cco-vp-sales","rev-ops"],
      engagementModels: ["project"],
      tags: ["SPIFF","Incentives","Compensation","Sales Process"]
    },

    // ══════════════════════════════════════════════════
    // PILLAR 2 — STRATEGIC BD & PARTNERSHIPS  (svc-022–042)
    // ══════════════════════════════════════════════════

    {
      id: "svc-022",
      icon: "⭐",
      name: "Pioneer Program Design and Execution",
      description: "Scope, terms, target selection, outreach, and closure of your first structured customer program — the anchor account engine.",
      pillar: "Strategic BD & Partnerships",
      category: "Pioneer & Key Accounts",
      personas: ["founder-ceo","informatics","cco-vp-sales"],
      engagementModels: ["sprint","fractional"],
      tags: ["Pioneer Program","BD & Partnerships","Key Accounts","Revenue Acceleration"]
    },
    {
      id: "svc-023",
      icon: "🤝",
      name: "Key Account Relationship Development",
      description: "Stakeholder mapping and multi-threaded engagement strategy for priority accounts — building the internal champions that close deals.",
      pillar: "Strategic BD & Partnerships",
      category: "Pioneer & Key Accounts",
      personas: ["cco-vp-sales","founder-ceo","informatics"],
      engagementModels: ["fractional","sprint"],
      tags: ["Key Accounts","BD & Partnerships","Stakeholder Management","Revenue Acceleration"]
    },
    {
      id: "svc-024",
      icon: "📋",
      name: "Program Agreement and LOI Structure",
      description: "Commercial terms, LOI language, and program structure for time-limited early-adopter engagements — the paper that closes pioneers.",
      pillar: "Strategic BD & Partnerships",
      category: "Pioneer & Key Accounts",
      personas: ["founder-ceo","informatics"],
      engagementModels: ["project","sprint"],
      tags: ["LOI","BD & Partnerships","Contracts","Pioneer Program"]
    },
    {
      id: "svc-025",
      icon: "✍️",
      name: "Partnership Agreement Execution",
      description: "Direct negotiation and execution of partnership agreements — MOU, LOI, and preferred-supplier structures with named organizations.",
      pillar: "Strategic BD & Partnerships",
      category: "Partnerships",
      personas: ["founder-ceo","cco-vp-sales","informatics"],
      engagementModels: ["sprint","fractional"],
      tags: ["Partnerships","LOI","BD & Partnerships","Contracts"]
    },
    {
      id: "svc-026",
      icon: "🔍",
      name: "Partner Identification and Screening",
      description: "Prioritized partner shortlist with strategic fit scoring and outreach sequencing — names, not categories.",
      pillar: "Strategic BD & Partnerships",
      category: "Partnerships",
      personas: ["founder-ceo","informatics","cco-vp-sales"],
      engagementModels: ["project","sprint"],
      tags: ["Partnerships","BD & Partnerships","Screening","GTM Strategy"]
    },
    {
      id: "svc-027",
      icon: "🗺",
      name: "Partner Ecosystem Mapping",
      description: "Competitive and complementary partner landscape — where the white space is, who to pursue first, and what the integration opportunity looks like.",
      pillar: "Strategic BD & Partnerships",
      category: "Partnerships",
      personas: ["informatics","founder-ceo","investor-board"],
      engagementModels: ["project"],
      tags: ["Partnerships","Ecosystem","BD & Partnerships","GTM Strategy"]
    },
    {
      id: "svc-028",
      icon: "📘",
      name: "Partnership Engagement Playbook",
      description: "The structure, sequencing, and commercial documents to replicate your partnership motion at scale — not a one-off.",
      pillar: "Strategic BD & Partnerships",
      category: "Partnerships",
      personas: ["founder-ceo","cco-vp-sales","informatics"],
      engagementModels: ["sprint","project"],
      tags: ["Partnerships","Playbook","BD & Partnerships","Enablement"]
    },
    {
      id: "svc-029",
      icon: "🤝",
      name: "Technology Partner Program Design",
      description: "Partner tiers, co-sell motion, and partner enablement for ISV and CRO partners — the infrastructure for a scalable partner channel.",
      pillar: "Strategic BD & Partnerships",
      category: "Partnerships",
      personas: ["informatics","founder-ceo"],
      engagementModels: ["sprint","project"],
      tags: ["Partner Program","BD & Partnerships","ISV","Scientific SaaS"]
    },
    {
      id: "svc-030",
      icon: "🔌",
      name: "Integration Partnership Execution",
      description: "Direct outreach and agreement execution with priority integration partners — the actual relationship work, not just the strategy.",
      pillar: "Strategic BD & Partnerships",
      category: "Partnerships",
      personas: ["informatics","founder-ceo"],
      engagementModels: ["sprint","fractional"],
      tags: ["Integrations","BD & Partnerships","Partnerships","Technical Commercialization"]
    },
    {
      id: "svc-031",
      icon: "🗺",
      name: "CRO/CDMO Channel Map and Target List",
      description: "Named CRO/CDMO organizations, decision-makers, and procurement pathways into the outsourced research ecosystem.",
      pillar: "Strategic BD & Partnerships",
      category: "Channel Development",
      personas: ["founder-ceo","cco-vp-sales","informatics"],
      engagementModels: ["project","sprint"],
      tags: ["CRO","CDMO","Channel","BD & Partnerships","GTM Strategy"]
    },
    {
      id: "svc-032",
      icon: "📡",
      name: "CRO/CDMO Channel Outreach and Activation",
      description: "Direct execution: sequenced outreach, discovery calls, and relationship establishment with priority CRO and CDMO targets.",
      pillar: "Strategic BD & Partnerships",
      category: "Channel Development",
      personas: ["founder-ceo","cco-vp-sales"],
      engagementModels: ["sprint","fractional"],
      tags: ["CRO","CDMO","BD & Partnerships","Channel","Outreach"]
    },
    {
      id: "svc-033",
      icon: "✍️",
      name: "Channel Partnership Agreements",
      description: "Preferred vendor, preferred supplier, and MOU structures that formalize the CRO/CDMO channel relationship.",
      pillar: "Strategic BD & Partnerships",
      category: "Channel Development",
      personas: ["founder-ceo","cco-vp-sales"],
      engagementModels: ["project","sprint"],
      tags: ["CRO","CDMO","Channel","Contracts","BD & Partnerships"]
    },
    {
      id: "svc-034",
      icon: "🔒",
      name: "Account Deepening Strategy",
      description: "The engagement sequence, internal champion map, and value expansion plan for a named account on the path to sole-source.",
      pillar: "Strategic BD & Partnerships",
      category: "Account Strategy",
      personas: ["cco-vp-sales","founder-ceo"],
      engagementModels: ["fractional","sprint"],
      tags: ["Account Strategy","Revenue Acceleration","BD & Partnerships","Key Accounts"]
    },
    {
      id: "svc-035",
      icon: "📋",
      name: "Standardization Business Case",
      description: "The ROI case, risk-reduction narrative, and commercial structure to win a preferred-provider position — built for enterprise procurement.",
      pillar: "Strategic BD & Partnerships",
      category: "Account Strategy",
      personas: ["cco-vp-sales","founder-ceo"],
      engagementModels: ["project","sprint"],
      tags: ["Account Strategy","Revenue Acceleration","ROI","BD & Partnerships"]
    },
    {
      id: "svc-036",
      icon: "🤝",
      name: "Executive Engagement and Alignment",
      description: "C-suite engagement strategy and materials to elevate the relationship beyond field-level buying — access to the boardroom.",
      pillar: "Strategic BD & Partnerships",
      category: "Account Strategy",
      personas: ["founder-ceo","cco-vp-sales","investor-board"],
      engagementModels: ["advisory","fractional"],
      tags: ["Executive Engagement","BD & Partnerships","Key Accounts","Leadership"]
    },
    {
      id: "svc-037",
      icon: "🔬",
      name: "Genomics / Causal Inference BD Pipeline",
      description: "Pioneer outreach, stakeholder mapping, and pipeline development for biopharma and CGT platform buyers — the BD motion for a causal genomics platform.",
      pillar: "Strategic BD & Partnerships",
      category: "Genomics & Precision Medicine",
      personas: ["informatics","founder-ceo","cco-vp-sales"],
      engagementModels: ["fractional","sprint"],
      tags: ["Genomics","BD & Partnerships","Biopharma","CGT","Pioneer Program"]
    },
    {
      id: "svc-038",
      icon: "🧬",
      name: "MCED / Liquid Biopsy Commercial Narrative",
      description: "The commercial story for multi-cancer early detection and liquid biopsy platforms — translating clinical utility into payer and provider language.",
      pillar: "Strategic BD & Partnerships",
      category: "Genomics & Precision Medicine",
      personas: ["informatics","founder-ceo","product-marketing"],
      engagementModels: ["project","sprint"],
      tags: ["MCED","Liquid Biopsy","Genomics","Messaging","BD & Partnerships"]
    },
    {
      id: "svc-039",
      icon: "🌉",
      name: "Research-to-Clinical Commercialization Bridge",
      description: "GTM strategy bridging academic and research use cases to regulated clinical and diagnostic markets — the path from lab to clinic.",
      pillar: "Strategic BD & Partnerships",
      category: "Genomics & Precision Medicine",
      personas: ["informatics","founder-ceo"],
      engagementModels: ["sprint","advisory"],
      tags: ["Genomics","Diagnostics","Clinical","BD & Partnerships","GTM Strategy"]
    },
    {
      id: "svc-040",
      icon: "🌐",
      name: "Enterprise Account Plan",
      description: "Multi-site, multi-stakeholder account map with global standardization pathway and executive engagement strategy for Big Pharma.",
      pillar: "Strategic BD & Partnerships",
      category: "Global Pharma",
      personas: ["cco-vp-sales","founder-ceo"],
      engagementModels: ["fractional","sprint"],
      tags: ["Global Pharma","Enterprise","Account Strategy","BD & Partnerships"]
    },
    {
      id: "svc-041",
      icon: "🏛",
      name: "Procurement and Vendor Approval Navigation",
      description: "Guidance on preferred-supplier programs, vendor management, and global contract structures at Big Pharma — the path through procurement.",
      pillar: "Strategic BD & Partnerships",
      category: "Global Pharma",
      personas: ["cco-vp-sales","founder-ceo","informatics"],
      engagementModels: ["advisory","project"],
      tags: ["Global Pharma","Procurement","Enterprise","BD & Partnerships"]
    },
    {
      id: "svc-042",
      icon: "🚀",
      name: "Global Rollout Sequencing",
      description: "Site-by-site adoption plan with local champion development and cross-site knowledge transfer for multi-national pharma accounts.",
      pillar: "Strategic BD & Partnerships",
      category: "Global Pharma",
      personas: ["cco-vp-sales","founder-ceo"],
      engagementModels: ["fractional","sprint"],
      tags: ["Global Pharma","Rollout","Account Strategy","Revenue Acceleration"]
    },

    // ══════════════════════════════════════════════════
    // PILLAR 3 — DATA-DRIVEN GTM STRATEGY  (svc-043–063)
    // ══════════════════════════════════════════════════

    {
      id: "svc-043",
      icon: "📝",
      name: "Scientific-to-Commercial Messaging Architecture",
      description: "Persona-level messaging matrix: the problem, the proof, the differentiation — in the language your buyers use to make decisions.",
      pillar: "Data-Driven GTM Strategy",
      category: "Messaging & Positioning",
      personas: ["founder-ceo","product-marketing","informatics"],
      engagementModels: ["sprint","project"],
      tags: ["Messaging","Positioning","GTM Strategy","Enablement"]
    },
    {
      id: "svc-044",
      icon: "💡",
      name: "Value Proposition Development",
      description: "Distilling your scientific differentiation into the economic and operational value your buyers actually care about — not features, outcomes.",
      pillar: "Data-Driven GTM Strategy",
      category: "Messaging & Positioning",
      personas: ["founder-ceo","product-marketing","informatics"],
      engagementModels: ["project","sprint"],
      tags: ["Value Proposition","Messaging","Positioning","GTM Strategy"]
    },
    {
      id: "svc-045",
      icon: "🎯",
      name: "Pitch and Presentation Materials",
      description: "Sales deck, solution overview, and executive pitch — built for the buyer, not the scientist. Validated against real buyer feedback.",
      pillar: "Data-Driven GTM Strategy",
      category: "Messaging & Positioning",
      personas: ["founder-ceo","product-marketing"],
      engagementModels: ["project","sprint"],
      tags: ["Pitch","Messaging","Enablement","GTM Strategy"]
    },
    {
      id: "svc-046",
      icon: "🗺",
      name: "Competitive Landscape Mapping",
      description: "Category map of the competitive environment with positioning of each named competitor — who they target, how they sell, where they're weak.",
      pillar: "Data-Driven GTM Strategy",
      category: "Market Intelligence",
      personas: ["founder-ceo","product-marketing","investor-board","cco-vp-sales"],
      engagementModels: ["project","sprint"],
      tags: ["Competitive Intelligence","Market Analysis","GTM Strategy","Positioning"]
    },
    {
      id: "svc-047",
      icon: "🔍",
      name: "White Space and Differentiation Analysis",
      description: "Where the market is underserved and where your platform owns unique ground — the map that guides positioning decisions.",
      pillar: "Data-Driven GTM Strategy",
      category: "Market Intelligence",
      personas: ["founder-ceo","product-marketing","investor-board"],
      engagementModels: ["project"],
      tags: ["Competitive Intelligence","Market Analysis","Positioning","GTM Strategy"]
    },
    {
      id: "svc-048",
      icon: "📝",
      name: "Positioning Architecture and Statement",
      description: "Category definition, positioning statement, and proof points that make it defensible — the strategic foundation for all messaging.",
      pillar: "Data-Driven GTM Strategy",
      category: "Messaging & Positioning",
      personas: ["product-marketing","founder-ceo"],
      engagementModels: ["project","sprint"],
      tags: ["Positioning","Messaging","GTM Strategy","Strategy"]
    },
    {
      id: "svc-049",
      icon: "🌍",
      name: "TAM/SAM/SOM Build",
      description: "Bottom-up market sizing with named account opportunity mapping for your defined segment — not a top-down estimate.",
      pillar: "Data-Driven GTM Strategy",
      category: "Market Intelligence",
      personas: ["founder-ceo","investor-board"],
      engagementModels: ["project"],
      tags: ["Market Sizing","TAM","Market Analysis","Strategy","Diligence"]
    },
    {
      id: "svc-050",
      icon: "🗺",
      name: "Segment and Buyer Mapping",
      description: "The specific organizations, roles, and buying contexts that define the commercial opportunity — with named accounts.",
      pillar: "Data-Driven GTM Strategy",
      category: "Market Intelligence",
      personas: ["founder-ceo","product-marketing","investor-board"],
      engagementModels: ["project","sprint"],
      tags: ["Segmentation","Market Analysis","ICP","GTM Strategy"]
    },
    {
      id: "svc-051",
      icon: "🚀",
      name: "Product Launch GTM Plan",
      description: "Sequenced launch with channel mix, content calendar, sales enablement, and field activation — the full go-to-market execution plan.",
      pillar: "Data-Driven GTM Strategy",
      category: "Launch",
      personas: ["product-marketing","founder-ceo","informatics"],
      engagementModels: ["sprint","project"],
      tags: ["Launch","GTM Strategy","Product Marketing","Enablement"]
    },
    {
      id: "svc-052",
      icon: "🎯",
      name: "Launch ICP and Early-Adopter Targeting",
      description: "Named early-adopter target list with outreach sequencing and prioritization for launch momentum.",
      pillar: "Data-Driven GTM Strategy",
      category: "Launch",
      personas: ["product-marketing","founder-ceo"],
      engagementModels: ["sprint","project"],
      tags: ["Launch","ICP","GTM Strategy","Pioneer Program"]
    },
    {
      id: "svc-053",
      icon: "📊",
      name: "Launch Metrics Framework",
      description: "The leading and lagging indicators that confirm the launch is working — before the pipeline fully validates.",
      pillar: "Data-Driven GTM Strategy",
      category: "Launch",
      personas: ["product-marketing","founder-ceo","rev-ops"],
      engagementModels: ["project","sprint"],
      tags: ["Launch","Metrics","GTM Strategy","Data & Reporting"]
    },
    {
      id: "svc-054",
      icon: "🎪",
      name: "ABM Program Design",
      description: "Account selection, content pairing, and outreach coordination between marketing and field — ABM as a commercial motion, not a campaign.",
      pillar: "Data-Driven GTM Strategy",
      category: "Account-Based Marketing",
      personas: ["product-marketing","cco-vp-sales"],
      engagementModels: ["sprint","fractional"],
      tags: ["ABM","Marketing","GTM Strategy","Account Strategy"]
    },
    {
      id: "svc-055",
      icon: "📄",
      name: "Account-Specific Content Development",
      description: "Customized content assets for named accounts — referencing their context, pipeline language, and buying criteria.",
      pillar: "Data-Driven GTM Strategy",
      category: "Account-Based Marketing",
      personas: ["product-marketing","cco-vp-sales"],
      engagementModels: ["sprint","project"],
      tags: ["ABM","Content","Enablement","Account Strategy"]
    },
    {
      id: "svc-056",
      icon: "📊",
      name: "ABM Measurement and Attribution Framework",
      description: "How to measure engagement, intent signal, and pipeline influence from your ABM investment — with defined attribution logic.",
      pillar: "Data-Driven GTM Strategy",
      category: "Account-Based Marketing",
      personas: ["product-marketing","rev-ops"],
      engagementModels: ["project"],
      tags: ["ABM","Measurement","Marketing","Data & Reporting"]
    },
    {
      id: "svc-057",
      icon: "🧪",
      name: "Scientific SaaS / Platform GTM Strategy",
      description: "ICP definition, channel design, and commercial motion for a scientific SaaS or informatics platform entering regulated pharma markets.",
      pillar: "Data-Driven GTM Strategy",
      category: "Scientific SaaS",
      personas: ["informatics","founder-ceo"],
      engagementModels: ["sprint","fractional"],
      tags: ["Scientific SaaS","GTM Strategy","Platform GTM","Biopharma"]
    },
    {
      id: "svc-058",
      icon: "🧬",
      name: "Biopharma and CGT Buyer Mapping",
      description: "Named-account opportunity map with decision-maker identification for biopharma and cell and gene therapy buyers.",
      pillar: "Data-Driven GTM Strategy",
      category: "Scientific SaaS",
      personas: ["informatics","founder-ceo","cco-vp-sales"],
      engagementModels: ["project","sprint"],
      tags: ["Biopharma","CGT","Market Analysis","GTM Strategy","Genomics"]
    },
    {
      id: "svc-059",
      icon: "💰",
      name: "Pricing and Packaging Architecture",
      description: "Subscription, module, and enterprise pricing design that matches buyer expectations and value perception — with competitive benchmarking.",
      pillar: "Data-Driven GTM Strategy",
      category: "Scientific SaaS",
      personas: ["informatics","founder-ceo","product-marketing"],
      engagementModels: ["project","sprint"],
      tags: ["Pricing","Packaging","GTM Strategy","Scientific SaaS"]
    },
    {
      id: "svc-060",
      icon: "🏛",
      name: "Regulated Market Entry Strategy",
      description: "The compliance, procurement, and validation requirements that govern scientific software buying in pharma — and how to navigate them.",
      pillar: "Data-Driven GTM Strategy",
      category: "Scientific SaaS",
      personas: ["informatics","founder-ceo"],
      engagementModels: ["project","advisory"],
      tags: ["Regulatory","Market Entry","Scientific SaaS","GTM Strategy","Biopharma"]
    },
    {
      id: "svc-061",
      icon: "🔗",
      name: "Integration and Interoperability Narrative",
      description: "How to position your connectivity and openness as a commercial advantage in a market defined by locked-in legacy systems.",
      pillar: "Data-Driven GTM Strategy",
      category: "Scientific SaaS",
      personas: ["informatics","product-marketing"],
      engagementModels: ["project"],
      tags: ["Integration","Messaging","Scientific SaaS","Positioning"]
    },
    {
      id: "svc-062",
      icon: "📦",
      name: "Unified Data Infrastructure Commercial Narrative",
      description: "The buyer-facing story for a scientific data layer that replaces fragmented environments — for CIO, CDO, and VP Research audiences.",
      pillar: "Data-Driven GTM Strategy",
      category: "Scientific SaaS",
      personas: ["informatics","product-marketing","founder-ceo"],
      engagementModels: ["project","sprint"],
      tags: ["Data Infrastructure","Messaging","Scientific SaaS","GTM Strategy"]
    },
    {
      id: "svc-063",
      icon: "🏛",
      name: "CIO/CDO Engagement Strategy",
      description: "How to reach and engage data leadership buyers at pharma and biotech enterprises — personas, pathways, and proof requirements.",
      pillar: "Data-Driven GTM Strategy",
      category: "Scientific SaaS",
      personas: ["informatics","founder-ceo"],
      engagementModels: ["advisory","project"],
      tags: ["CIO","CDO","Enterprise","GTM Strategy","Scientific SaaS"]
    },

    // ══════════════════════════════════════════════════
    // PILLAR 4 — REVENUE ACCELERATION  (svc-064–084)
    // ══════════════════════════════════════════════════

    {
      id: "svc-064",
      icon: "🔍",
      name: "Pipeline Audit and Velocity Diagnosis",
      description: "Stage-by-stage analysis of where deals stall — with root cause identification and intervention design for each leak point.",
      pillar: "Revenue Acceleration",
      category: "Pipeline & Forecasting",
      personas: ["cco-vp-sales","founder-ceo","rev-ops"],
      engagementModels: ["project","sprint"],
      tags: ["Pipeline","Revenue Acceleration","Diagnosis","Sales Process"]
    },
    {
      id: "svc-065",
      icon: "📘",
      name: "Deal Stage Playbook",
      description: "Entry and exit criteria, required actions, and field coaching points for each pipeline stage — the operating standard for your sales motion.",
      pillar: "Revenue Acceleration",
      category: "Pipeline & Forecasting",
      personas: ["cco-vp-sales","rev-ops"],
      engagementModels: ["sprint","project"],
      tags: ["Pipeline","Sales Process","Playbook","Revenue Acceleration"]
    },
    {
      id: "svc-066",
      icon: "🕸",
      name: "Multi-Threading and Champion Development",
      description: "Engagement strategy to build internal champions and reduce single-threaded deal risk — the difference between a stalled deal and a closed one.",
      pillar: "Revenue Acceleration",
      category: "Pipeline & Forecasting",
      personas: ["cco-vp-sales","founder-ceo"],
      engagementModels: ["fractional","sprint"],
      tags: ["Pipeline","Champion","Sales Process","Revenue Acceleration"]
    },
    {
      id: "svc-067",
      icon: "⚔️",
      name: "Competitive Battlecard and Positioning",
      description: "Head-to-head differentiation, proof points, and live objection handling for your primary competitive scenario.",
      pillar: "Revenue Acceleration",
      category: "Competitive Selling",
      personas: ["cco-vp-sales","product-marketing","founder-ceo"],
      engagementModels: ["project","sprint"],
      tags: ["Competitive Intelligence","Battlecard","Sales Process","Revenue Acceleration"]
    },
    {
      id: "svc-068",
      icon: "🏆",
      name: "Competitive Displacement Proof Structure",
      description: "Reference architecture, case study development, and proof-of-concept design to de-risk a switch away from an incumbent.",
      pillar: "Revenue Acceleration",
      category: "Competitive Selling",
      personas: ["cco-vp-sales","product-marketing"],
      engagementModels: ["sprint","project"],
      tags: ["Competitive Intelligence","Displacement","Revenue Acceleration","Enablement"]
    },
    {
      id: "svc-069",
      icon: "🔍",
      name: "Win/Loss Analysis",
      description: "Systematic review of recent competitive outcomes — by persona, segment, and objection pattern. The truth about why you're losing.",
      pillar: "Revenue Acceleration",
      category: "Competitive Selling",
      personas: ["cco-vp-sales","product-marketing","founder-ceo"],
      engagementModels: ["project"],
      tags: ["Win/Loss","Competitive Intelligence","Revenue Acceleration","Diagnosis"]
    },
    {
      id: "svc-070",
      icon: "📖",
      name: "Customer Case Study Development",
      description: "Problem-solution-outcome case studies for priority accounts and use cases — built for field use, not the website.",
      pillar: "Revenue Acceleration",
      category: "Enablement",
      personas: ["product-marketing","cco-vp-sales","founder-ceo"],
      engagementModels: ["project","sprint"],
      tags: ["Case Studies","Enablement","Content","Revenue Acceleration"]
    },
    {
      id: "svc-071",
      icon: "💰",
      name: "ROI and Value Calculator",
      description: "Quantified ROI model the field can customize for a prospect — tied to their specific operational context and buying criteria.",
      pillar: "Revenue Acceleration",
      category: "Enablement",
      personas: ["product-marketing","cco-vp-sales"],
      engagementModels: ["project","sprint"],
      tags: ["ROI","Enablement","Value Selling","Revenue Acceleration"]
    },
    {
      id: "svc-072",
      icon: "🎬",
      name: "Demo Script and Objection Handling Guide",
      description: "Structured demo narrative and live objection handling for your three most common competitive and procurement scenarios.",
      pillar: "Revenue Acceleration",
      category: "Enablement",
      personas: ["cco-vp-sales","product-marketing"],
      engagementModels: ["sprint","project"],
      tags: ["Demo","Objection Handling","Enablement","Sales Process"]
    },
    {
      id: "svc-073",
      icon: "📊",
      name: "Commercial Data Room Build",
      description: "Pipeline data, unit economics, GTM evidence, and the commercial narrative in investor-ready format — the commercial half of your data room.",
      pillar: "Revenue Acceleration",
      category: "Fundraising & Board",
      personas: ["founder-ceo","investor-board"],
      engagementModels: ["project","sprint"],
      tags: ["Data Room","Fundraising","Board Reporting","Strategy"]
    },
    {
      id: "svc-074",
      icon: "📈",
      name: "Revenue Milestone Framework",
      description: "The commercial milestones that de-risk the raise — tied to the pipeline, account, and ARR metrics your next investors will interrogate.",
      pillar: "Revenue Acceleration",
      category: "Fundraising & Board",
      personas: ["founder-ceo","investor-board"],
      engagementModels: ["project","advisory"],
      tags: ["Fundraising","Milestones","Strategy","Board Reporting"]
    },
    {
      id: "svc-075",
      icon: "💡",
      name: "Commercial Story Architecture",
      description: "The board-level narrative connecting market, differentiation, traction, and forward thesis — the commercial case for your raise.",
      pillar: "Revenue Acceleration",
      category: "Fundraising & Board",
      personas: ["founder-ceo","investor-board"],
      engagementModels: ["project"],
      tags: ["Messaging","Fundraising","Board Reporting","Strategy"]
    },
    {
      id: "svc-076",
      icon: "🔍",
      name: "GTM Readiness Assessment",
      description: "Independent assessment of ICP clarity, pipeline quality, team capability, and commercial infrastructure — the commercial due diligence lens.",
      pillar: "Revenue Acceleration",
      category: "Diligence & Advisory",
      personas: ["investor-board","founder-ceo"],
      engagementModels: ["project"],
      tags: ["Diligence","GTM Strategy","Assessment","Investor-Board"]
    },
    {
      id: "svc-077",
      icon: "📊",
      name: "Pipeline Quality and Coverage Audit",
      description: "Stage-level review of pipeline reliability, coverage ratio, and forecast accuracy — for investors and boards evaluating commercial health.",
      pillar: "Revenue Acceleration",
      category: "Diligence & Advisory",
      personas: ["investor-board","cco-vp-sales"],
      engagementModels: ["project"],
      tags: ["Diligence","Pipeline","Board Reporting","Assessment"]
    },
    {
      id: "svc-078",
      icon: "⚔️",
      name: "Competitive Position Diligence",
      description: "Market landscape assessment and differentiation analysis for the target's claimed position — independent of management's narrative.",
      pillar: "Revenue Acceleration",
      category: "Diligence & Advisory",
      personas: ["investor-board"],
      engagementModels: ["project"],
      tags: ["Diligence","Competitive Intelligence","Market Analysis","Investor-Board"]
    },
    {
      id: "svc-079",
      icon: "🚀",
      name: "Hands-On Commercial Acceleration",
      description: "Fractional CCO-level engagement — strategy and execution — for a portfolio company at a commercial inflection point.",
      pillar: "Revenue Acceleration",
      category: "Diligence & Advisory",
      personas: ["investor-board","founder-ceo"],
      engagementModels: ["fractional","sprint"],
      tags: ["Fractional","Revenue Acceleration","Portfolio","GTM Strategy"]
    },
    {
      id: "svc-080",
      icon: "📋",
      name: "Commercial Board Deck",
      description: "Board-ready commercial narrative: metrics, milestones, forward thesis, and the evidence base for the strategy — built to answer board questions before they're asked.",
      pillar: "Revenue Acceleration",
      category: "Diligence & Advisory",
      personas: ["investor-board","founder-ceo"],
      engagementModels: ["project"],
      tags: ["Board Reporting","Strategy","Deliverable","Investor-Board"]
    },
    {
      id: "svc-081",
      icon: "📊",
      name: "Commercial KPI Framework",
      description: "The leading and lagging indicators the board should track — and how to present them in context of strategy, not just activity.",
      pillar: "Revenue Acceleration",
      category: "Diligence & Advisory",
      personas: ["investor-board","founder-ceo","rev-ops"],
      engagementModels: ["project","advisory"],
      tags: ["KPIs","Board Reporting","Metrics","Strategy"]
    },
    {
      id: "svc-082",
      icon: "📈",
      name: "Risk-Adjusted Revenue Forecast",
      description: "Pipeline-based forecast with scenario modeling and the assumptions driving each case — the commercial model your board can stress-test.",
      pillar: "Revenue Acceleration",
      category: "Diligence & Advisory",
      personas: ["investor-board","founder-ceo","cco-vp-sales"],
      engagementModels: ["project"],
      tags: ["Forecasting","Board Reporting","Revenue Acceleration","Strategy"]
    },
    {
      id: "svc-083",
      icon: "🎯",
      name: "M&A Target Screening",
      description: "Systematic identification of acquisition targets by commercial capability, market position, and strategic fit — with named shortlist.",
      pillar: "Revenue Acceleration",
      category: "M&A",
      personas: ["investor-board","founder-ceo"],
      engagementModels: ["project","advisory"],
      tags: ["M&A","Diligence","Strategy","Market Analysis","Investor-Board"]
    },
    {
      id: "svc-084",
      icon: "🔍",
      name: "Commercial Fit and M&A Integration Analysis",
      description: "Assessment of commercial complementarity, channel overlap, and post-close integration complexity for a named acquisition target.",
      pillar: "Revenue Acceleration",
      category: "M&A",
      personas: ["investor-board","founder-ceo"],
      engagementModels: ["project"],
      tags: ["M&A","Diligence","Integration","Strategy","Investor-Board"]
    }

  ] // end services[]

}; // end window.STACKS_SERVICES_DATA
