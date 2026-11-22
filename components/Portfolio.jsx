"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowDown,
  ArrowRight,
  Award,
  BookOpen,
  ChevronDown,
  ExternalLink,
  FileText,
  FlaskConical,
  GraduationCap,
  Menu,
  Moon,
  Send,
  Shield,
  Sun,
  Terminal,
  X,
} from "lucide-react";

const navigation = [
  { id: "home", label: "Overview", icon: "⌂" },
  { id: "security", label: "Security", icon: "◈" },
  { id: "lab", label: "Live Lab", icon: "◉" },
  { id: "automation", label: "Automation", icon: "⚙" },
  { id: "engineering", label: "Engineering", icon: "⌘" },
  { id: "projects", label: "Projects", icon: "▣" },
  { id: "certifications", label: "Credentials", icon: "✓" },
  { id: "trends", label: "Trends", icon: "↗" },
  { id: "hackathons", label: "Hackathons", icon: "⚑" },
  { id: "about", label: "About", icon: "☺" },
  { id: "contact", label: "Contact", icon: "✉" },
];

const securityPhases = [
  {
    name: "Recon",
    title: "Know the target first.",
    description:
      "Map hosts, open ports and running services before testing anything, and only within authorized lab environments.",
    tools: ["Nmap", "Kali Linux"],
  },
  {
    name: "Enumerate",
    title: "Turn a port into a picture.",
    description:
      "Look into each service for versions, endpoints and misconfigurations that need attention.",
    tools: ["Nmap scripts", "Burp Suite", "Manual testing"],
  },
  {
    name: "Analyze",
    title: "Read what the network says.",
    description:
      "Inspect packets and web traffic to understand what a system is actually sending and receiving.",
    tools: ["Wireshark", "Burp Suite", "Network security"],
  },
  {
    name: "Validate",
    title: "Prove the weakness is real.",
    description:
      "Reproduce findings against deliberately vulnerable lab targets, then document impact and a practical fix.",
    tools: ["Metasploit", "Burp Suite", "Lab notes"],
  },
  {
    name: "Report",
    title: "Make findings actionable.",
    description:
      "Write clear steps, impact and remediation so a developer can reproduce the issue and fix it.",
    tools: ["Assessment", "Documentation", "Remediation"],
  },
];

const securityChecks = [
  {
    title: "Broken access control",
    question: "Can one patient open another patient’s record by changing an ID?",
    test: "Replay a request with another test record ID in the simulated clinic.",
    fix: "Check record ownership on the server for every request.",
  },
  {
    title: "Injection",
    question: "Can search input change how a database query is interpreted?",
    test: "Try a harmless injection string against the simulated search.",
    fix: "Use parameterized queries rather than concatenating user input.",
  },
  {
    title: "Cross-site scripting",
    question: "Can a note run as code in another user’s browser?",
    test: "Submit a harmless markup string and confirm it is displayed as text.",
    fix: "Encode output and use a strict content security policy.",
  },
  {
    title: "Authentication and sessions",
    question: "Are login limits, tokens and error messages safe?",
    test: "Review login behavior and token expiry in a local test environment.",
    fix: "Rate-limit authentication, use short-lived tokens and generic errors.",
  },
  {
    title: "Exposure and misconfiguration",
    question: "Are debug pages or unnecessary services exposed?",
    test: "Review configuration and service exposure on an authorized lab host.",
    fix: "Disable debug mode and close services that are not needed.",
  },
  {
    title: "Logging and monitoring",
    question: "Would anyone notice repeated failed requests?",
    test: "Generate test events and verify that they appear in protected logs.",
    fix: "Log security events and alert on meaningful patterns.",
  },
  {
    title: "Cryptography",
    question: "Are passwords and sensitive data protected by correct cryptographic practices?",
    test: "Review password storage, token handling and whether sensitive values are exposed.",
    fix: "Use modern password hashing and current, well-maintained cryptographic libraries.",
  },
  {
    title: "Supply-chain security",
    question: "Do dependencies and deployment components introduce avoidable risk?",
    test: "Review pinned versions, package provenance and the deployment configuration.",
    fix: "Audit dependencies, pin reviewed versions and keep deployment components patched.",
  },
];

const labVulnerabilities = {
  access: {
    name: "Broken access control",
    severity: "Critical",
    impact: "A patient could read another patient’s record.",
    fix: "Check record ownership on the server.",
  },
  injection: {
    name: "Injection",
    severity: "Critical",
    impact: "Unsafe search input could expose records.",
    fix: "Use parameterized queries.",
  },
  xss: {
    name: "Unsafe note rendering",
    severity: "High",
    impact: "Untrusted notes could be interpreted as markup.",
    fix: "Encode user-generated content before display.",
  },
  debug: {
    name: "Exposed debug service",
    severity: "High",
    impact: "A debug service could reveal internal information.",
    fix: "Disable debug mode and close the service.",
  },
};

const patients = {
  101: ["Amina Lab", "Seasonal allergy"],
  102: ["Brian Test", "Hypertension, controlled"],
  103: ["Carol Demo", "Asthma review"],
  104: ["David Sample", "Post-op check"],
};

const pipeline = [
  {
    name: "Intake",
    title: "Coffee enters the system.",
    description:
      "Record every delivery at the factory as it arrives, so information starts clean at the source.",
  },
  {
    name: "Compliance",
    title: "Rules checked automatically.",
    description:
      "Check farm-regulation requirements as data comes in and flag exceptions early.",
  },
  {
    name: "Payments",
    title: "Every payment tracked.",
    description:
      "Follow payments from intake onwards with one consistent record for farmers and operators.",
  },
  {
    name: "Revenue",
    title: "From input to income.",
    description:
      "Trace each revenue figure back through the same auditable data trail.",
  },
  {
    name: "Reporting",
    title: "Real-time visibility.",
    description:
      "Turn live tracking, compliance checks and data visualization into useful decisions.",
  },
];

const technologyStacks = [
  {
    name: "Frontend",
    tools: ["React", "Tailwind CSS", "HTML/CSS", "TypeScript"],
    description:
      "Component-driven interfaces with deliberate loading, empty and error states, built to be accessible and quick on a phone.",
  },
  {
    name: "Backend",
    tools: ["Django", "Django REST", "Node.js", "Flask"],
    description:
      "REST APIs with role-based access, server-side validation and predictable responses the front end can rely on.",
  },
  {
    name: "Data",
    tools: ["PostgreSQL", "MySQL", "MongoDB"],
    description:
      "Relational models for records that must stay consistent, and document stores when the data shape is more flexible.",
  },
  {
    name: "Workflow",
    tools: ["Git/GitHub", "Docker", "Postman", "VS Code"],
    description:
      "Version-controlled, containerized and API-tested changes, so releases are repeatable rather than surprising.",
  },
];

const projects = [
  {
    title: "Medicare Health System",
    problem: "Clinics need a reliable way to manage records, appointments and prescriptions.",
    built: "A full-stack platform for patient records, appointment scheduling and prescription tracking.",
    security: "Patient data is sensitive; access must be checked per role and per record.",
    tools: ["React", "Django REST Framework", "PostgreSQL"],
  },
  {
    title: "K-Trace",
    problem: "Manual coffee compliance checks and payment records create delays and audit stress.",
    built: "A workflow for regulation checks and payment tracking from factory intake to revenue.",
    security: "Every figure should trace back to its source record; integrity is part of the product.",
    tools: ["Web app", "Automation", "Data visualization"],
  },
  {
    title: "E-Commerce Platform",
    problem: "Small sellers need a store that is easier to manage than spreadsheets and chat messages.",
    built: "A product catalog, shopping cart, payment flow and admin dashboard.",
    security: "Payment handling and administrative access need strict validation and role separation.",
    tools: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
  },
  {
    title: "Penetration Testing Lab",
    problem: "Security testing should be hands-on without putting real systems at risk.",
    built: "An authorized lab workflow for assessment, evidence collection and reporting.",
    security: "Testing stays within owned or explicitly authorized environments.",
    tools: ["Kali Linux", "Nmap", "Metasploit", "Burp Suite", "sqlmap"],
  },
  {
    title: "Network Monitoring",
    problem: "It is hard to spot unusual traffic without understanding normal behavior first.",
    built: "A controlled network environment for packet analysis and traffic inspection.",
    security: "Establish a baseline, then investigate unexpected changes.",
    tools: ["Wireshark", "Packet analysis", "Traffic inspection"],
  },
  {
    title: "Search Hybrid System",
    problem: "Users need a seamless way to search across multiple data sources and formats.",
    built: "A unified search interface that aggregates results from various backend systems.",
    security: "Ensure that search queries and results are handled with appropriate access controls.",
    tools: ["Elasticsearch", "React.ts", "Flask - Python", "API integration"],
  },
];

const trends = [
  {
    type: "Security",
    title: "AI-assisted attack and defense",
    description:
      "Automation makes both attacks and anomaly detection easier to scale. I’m studying how machine learning can support defensive security.",
  },
  {
    type: "Security",
    title: "API security",
    description:
      "Modern applications rely on APIs, where object-level authorization and request validation remain essential.",
  },
  {
    type: "Security",
    title: "Supply-chain risk",
    description:
      "Dependencies are part of the software we ship. Pinned versions and regular dependency reviews belong in every project.",
  },
  {
    type: "Automation",
    title: "Compliance as code",
    description:
      "Automated checks make changing rules visible and auditable, from health systems to agriculture and finance.",
  },
  {
    type: "Security",
    title: "Health-data privacy",
    description:
      "Sensitive records call for careful access controls, thoughtful retention and privacy-aware design.",
  },
  {
    type: "Engineering",
    title: "DevSecOps and shift-left",
    description:
      "Security checks work best as part of the delivery pipeline, not as a surprise after launch.",
  },
  {
    type: "Security",
    title: "Zero trust and identity",
    description:
      "Verify every request with per-request authorization, short-lived tokens and least privilege.",
  },
  {
    type: "Automation",
    title: "Agentic automation with guardrails",
    description:
      "AI agents are starting to run workflows end to end. They need limited permissions, useful logs and human approval for risky steps.",
  },
  {
    type: "Security",
    title: "Ransomware resilience",
    description:
      "Tested backups, segmentation and fast detection matter as much as the security tools themselves.",
  },
];

const sprint = [
  ["Before", "Prepare", "Have starter templates, a Docker setup and a security checklist ready."],
  ["0–4 h", "Scope and model", "Agree on one problem, sketch the data model and split the work."],
  ["4–20 h", "Build a vertical slice", "Connect one working React screen to an API and database."],
  ["20–36 h", "Integrate and automate", "Add seed data, scripts and tests so manual steps are repeatable."],
  ["36–44 h", "Security pass", "Review input validation and access checks in the running app."],
  ["44–48 h", "Demo", "Rehearse the problem, walkthrough and next steps."],
  ["After", "Retro", "Write down what worked and one thing to improve next time."],
];

let currentTheme = "dark";

function getThemeSnapshot() {
  try {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme === "light" || savedTheme === "dark") currentTheme = savedTheme;
  } catch (error) {
    console.error("Could not read the saved portfolio theme.", error);
  }
  return currentTheme;
}

function subscribeToTheme(onChange) {
  window.addEventListener("storage", onChange);
  window.addEventListener("portfolio-theme-change", onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("portfolio-theme-change", onChange);
  };
}

function saveTheme(theme) {
  currentTheme = theme;
  try {
    window.localStorage.setItem("portfolio-theme", theme);
  } catch (error) {
    console.error("Could not save the portfolio theme.", error);
  }
  window.dispatchEvent(new Event("portfolio-theme-change"));
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <header className="portfolio-heading">
      <p className="portfolio-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="portfolio-lead">{description}</p>}
    </header>
  );
}

function Chips({ items }) {
  return (
    <div className="portfolio-chips">
      {items.map((item) => (
        <span className="portfolio-chip" key={item}>{item}</span>
      ))}
    </div>
  );
}

const sectionVisuals = {
  overview: {
    image: "/images/portfolio-overview.jpg",
    alt: "Technology professionals working together around laptops.",
    label: "OVERVIEW · COLLABORATION",
    caption: "Building secure systems takes a team.",
  },
  security: {
    image: "/images/portfolio-security.jpg",
    alt: "A laptop displaying green code in a dark workspace.",
    label: "SECURITY · AUTHORIZED TESTING",
    caption: "Test deliberately. Document clearly.",
  },
  lab: {
    image: "/images/portfolio-lab.jpg",
    alt: "Close-up view of a detailed electronic circuit board.",
    label: "LIVE LAB · SYSTEMS",
    caption: "Understand the technology behind the interface.",
  },
  automation: {
    image: "/images/portfolio-automation.jpg",
    alt: "A developer working on code at a laptop.",
    label: "AUTOMATION · WORKFLOWS",
    caption: "Turn repeatable work into reliable systems.",
  },
  engineering: {
    image: "/images/portfolio-engineering.jpg",
    alt: "Two software developers collaborating at a computer.",
    label: "ENGINEERING · CODE REVIEW",
    caption: "Good software gets better when we build together.",
  },
  projects: {
    image: "/images/portfolio-projects.jpg",
    alt: "Colleagues discussing a project around a computer.",
    label: "PROJECTS · PROTOTYPING",
    caption: "From a practical problem to a working build.",
  },
  certifications: {
    image: "/images/portfolio-certifications.jpg",
    alt: "Students studying and collaborating in a library.",
    label: "CREDENTIALS · CONTINUOUS LEARNING",
    caption: "Strong foundations come from practice and study.",
  },
  trends: {
    image: "/images/portfolio-trends.jpg",
    alt: "An analytics dashboard showing charts on a laptop.",
    label: "TRENDS · SIGNALS IN THE DATA",
    caption: "Turning new signals into useful insight.",
  },
  hackathons: {
    image: "/images/portfolio-hackathons.jpg",
    alt: "A student team collaborating around laptops on a prototype.",
    label: "HACKATHONS · TEAM BUILD",
    caption: "Students teaming up to build and demo a prototype.",
  },
  about: {
    image: "/images/portfolio-about.jpg",
    alt: "A small team working together at a shared table.",
    label: "ABOUT · HANDS-ON LEARNING",
    caption: "Curiosity grows through making things together.",
  },
  contact: {
    image: "/images/portfolio-contact.jpg",
    alt: "Colleagues sharing ideas while working around a laptop.",
    label: "CONTACT · COLLABORATION",
    caption: "Let’s talk about what we could build next.",
  },
};

function SectionVisual({ section }) {
  const visual = sectionVisuals[section];

  return (
    <figure className={`section-visual section-visual-${section}`}>
      <Image
        className="section-visual-image"
        src={visual.image}
        alt={visual.alt}
        fill
        sizes="(max-width: 720px) calc(100vw - 40px), (max-width: 1100px) 90vw, 1080px"
      />
      <div className="section-visual-shade" aria-hidden="true" />
      <figcaption className="section-visual-caption">
        <span className="section-visual-label">{visual.label}</span>
        <strong>{visual.caption}</strong>
        <small>Photo · Unsplash</small>
      </figcaption>
    </figure>
  );
}

const nextSections = [
  { id: "home", label: "Overview", href: "/" },
  { id: "security", label: "Security", href: "/security" },
  { id: "lab", label: "Live Lab", href: "/lab" },
  { id: "automation", label: "Automation", href: "/automation" },
  { id: "engineering", label: "Engineering", href: "/engineering" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "certifications", label: "Credentials", href: "/certifications" },
  { id: "trends", label: "Trends", href: "/trends" },
  { id: "hackathons", label: "Hackathons", href: "/hackathons" },
  { id: "about", label: "About", href: "/about" },
  { id: "contact", label: "Contact", href: "/contact" },
];

const heroTypeLines = [
  "Blue teaming...",
  "Building secure systems...",
  "Deploying secure infrastructure...",
  "Automating security infrastructure...",
];

function NextSection({ page }) {
  const currentIndex = nextSections.findIndex((item) => item.id === page);
  if (page === "contact") {
    return (
      <Link className="overview-next" href="/">
        <p className="portfolio-eyebrow">Back to</p>
        <span>Overview <ArrowRight size={32} strokeWidth={1.5} /></span>
      </Link>
    );
  }
  const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % nextSections.length : 0;
  const next = nextSections[nextIndex];

  return (
    <Link className="overview-next" href={next.href}>
      <p className="portfolio-eyebrow">Next</p>
      <span>{next.label} <ArrowRight size={32} strokeWidth={1.5} /></span>
    </Link>
  );
}

export default function Portfolio({ page = "home" }) {
  const activeSection = page;
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, () => "dark");
  const [phase, setPhase] = useState(0);
  const [stack, setStack] = useState(0);
  const [trendFilter, setTrendFilter] = useState("All");
  const [pipelineStage, setPipelineStage] = useState(0);
  const [recordCount, setRecordCount] = useState(200);
  const [checkMinutes, setCheckMinutes] = useState(3);
  const [termCommand, setTermCommand] = useState("");
  const [terminalLines, setTerminalLines] = useState([
    { text: "Booting portfolio …", tone: "muted" },
    { text: "[ok] security module loaded", tone: "green" },
    { text: "[ok] automation module loaded", tone: "green" },
    { text: "Type help or choose a command below.", tone: "amber" },
  ]);
  const [patientId, setPatientId] = useState("101");
  const [searchValue, setSearchValue] = useState("");
  const [noteValue, setNoteValue] = useState("");
  const [labFixes, setLabFixes] = useState({});
  const [labHits, setLabHits] = useState({});
  const [labLogs, setLabLogs] = useState([
    { text: "Simulated clinic console ready. No external systems are contacted.", tone: "muted" },
  ]);
  const [labResult, setLabResult] = useState("");
  const [report, setReport] = useState("");
  const [reportStatus, setReportStatus] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [heroTypeIndex, setHeroTypeIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroTypeIndex((index) => (index + 1) % heroTypeLines.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  const filteredTrends = useMemo(
    () => trends.filter((item) => trendFilter === "All" || item.type === trendFilter),
    [trendFilter],
  );

  const openRiskCount = Object.keys(labVulnerabilities).filter((key) => !labFixes[key]).length;
  const riskScore = openRiskCount * 25;
  const savedHours = Math.round((recordCount * checkMinutes * 22) / 60);

  function appendTerminal(text, tone = "") {
    setTerminalLines((lines) => [...lines.slice(-18), { text, tone }]);
  }

  function runCommand(command) {
    const value = command.trim();
    if (!value) return;
    setTermCommand("");
    if (value.toLowerCase() === "lab") {
      router.push("/lab");
      return;
    }
    if (value.toLowerCase() === "clear") {
      setTerminalLines([]);
      return;
    }

    const responses = {
      help: [
        ["commands: whoami · skills · certs · projects · lab · contact · clear", "muted"],
      ],
      whoami: [
        ["Charles Macharia", "green"],
        ["Software Engineering student · Nairobi, Kenya"],
      ],
      skills: [
        ["security  Nmap, Wireshark, Burp Suite, Metasploit", "muted"],
        ["backend   Django, Node.js, Flask", "muted"],
        ["frontend  React, Tailwind CSS, TypeScript", "muted"],
      ],
      certs: [
        ["OSCP · Offensive Security Certified Professional", "green"],
        ["Cisco Networking Essentials", "green"],
      ],
      projects: [
        ["Medicare Health System · K-Trace · E-Commerce Platform", "muted"],
        ["Penetration Testing Lab · Network Monitoring", "muted"],
      ],
      contact: [
        ["kariukic547@gmail.com · Nairobi, Kenya", "muted"],
        ["WhatsApp: +254 727 537 684", "muted"],
      ],
    };
    const result = responses[value.toLowerCase()];
    setTerminalLines((lines) => [
      ...lines.slice(-16),
      { text: `$ ${value}`, tone: "muted" },
      ...(result ?? [[`command not found: ${value}. Try help.`, "amber"]]).map(
        ([text, tone]) => ({ text, tone }),
      ),
    ]);
  }

  function addLabLog(text, tone = "") {
    setLabLogs((lines) => [...lines.slice(-24), { text, tone }]);
  }

  function runClinicScan() {
    addLabLog("$ scan clinic.lab (simulated)", "muted");
    addLabLog("22/tcp  open  ssh", "");
    addLabLog("80/tcp  open  http", "");
    addLabLog("443/tcp open  https", "");
    if (labFixes.debug) {
      addLabLog("debug service disabled by the fix", "green");
    } else {
      setLabHits((hits) => ({ ...hits, debug: true }));
      addLabLog("debug service exposed in this simulation", "amber");
    }
  }

  function openPatientRecord() {
    const patient = patients[Number(patientId)];
    setLabResult("");
    addLabLog(`GET /patients/${patientId} (simulated)`, "muted");
    if (!patient) {
      setLabResult("404 · no simulated record with that ID.");
      return;
    }
    if (Number(patientId) !== 101 && labFixes.access) {
      setLabResult("403 Forbidden · the ownership check blocked this request.");
      addLabLog("403: request blocked by the simulated fix", "green");
      return;
    }
    if (Number(patientId) !== 101) {
      setLabHits((hits) => ({ ...hits, access: true }));
      addLabLog("200: another test patient's record was exposed", "amber");
    }
    setLabResult(
      `${patient[0]} · ${patient[1]}${
        Number(patientId) !== 101
          ? " — Broken access control: patient #101 can view this record."
          : ""
      }`,
    );
  }

  function searchPatients() {
    const query = searchValue.trim();
    setLabResult("");
    const looksLikeInjection = /'\s*or\s*'?1'?\s*=\s*'?1/i.test(query);
    addLabLog(
      labFixes.injection
        ? `Parameterized search (simulated): ${query || "empty query"}`
        : `Search input received (simulated): ${query || "empty query"}`,
      "muted",
    );

    if (looksLikeInjection && !labFixes.injection) {
      setLabHits((hits) => ({ ...hits, injection: true }));
      setLabResult(`Injection succeeded in the simulation. Records returned: ${Object.values(patients).map(([name]) => name).join(", ")}.`);
      addLabLog("the simulated query returned every test record", "amber");
      return;
    }

    const matches = Object.values(patients)
      .filter(([name]) => name.toLowerCase().startsWith(query.toLowerCase()))
      .map(([name]) => name);
    setLabResult(matches.length ? matches.join(", ") : "No matching test patients.");
  }

  function savePatientNote() {
    const containsMarkup = /<\s*(script|img)|onerror\s*=/i.test(noteValue);
    if (containsMarkup && !labFixes.xss) {
      setLabHits((hits) => ({ ...hits, xss: true }));
      setLabResult(`Unsafe markup detected in the simulation. It is shown only as text: ${noteValue}`);
      addLabLog("untrusted note content was not executed", "amber");
      return;
    }
    setLabResult(
      containsMarkup
        ? `Note safely encoded as text: ${noteValue}`
        : `Note saved in the simulation: ${noteValue || "(empty note)"}`,
    );
    if (containsMarkup) addLabLog("output encoded; content remains inert", "green");
  }

  function toggleLabFix(key, checked) {
    setLabFixes((fixes) => ({ ...fixes, [key]: checked }));
    addLabLog(
      `${checked ? "[fixed] " : "[unfixed] "}${labVulnerabilities[key].name}`,
      checked ? "green" : "amber",
    );
  }

  function generateReport() {
    const lines = ["PENETRATION TEST REPORT · clinic.lab (simulated)", ""];
    Object.entries(labVulnerabilities).forEach(([key, item]) => {
      const status = labFixes[key]
        ? "FIXED"
        : labHits[key]
          ? "CONFIRMED in simulation"
          : "NOT YET TESTED";
      lines.push(
        `[${item.severity}] ${item.name}`,
        `Status: ${status}`,
        `Impact: ${item.impact}`,
        `Recommendation: ${item.fix}`,
        "",
      );
    });
    lines.push(`Residual risk: ${riskScore}/100`);
    setReport(lines.join("\n"));
    setReportStatus("Report generated.");
  }

  async function copyReport() {
    try {
      await navigator.clipboard.writeText(report);
      setReportStatus("Report copied to clipboard.");
    } catch (error) {
      console.error("Could not copy the report to the clipboard.", error);
      setReportStatus("Clipboard access failed. Select and copy the report text instead.");
    }
  }

  function sendContact() {
    const subject = encodeURIComponent(`Portfolio enquiry from ${contactName}`);
    const body = encodeURIComponent(contactMessage);
    window.location.href = `mailto:kariukic547@gmail.com?subject=${subject}&body=${body}`;
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="portfolio-app" data-theme={theme}>
      <button
        className="portfolio-mobile-menu"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
        <span>charles@sec</span>
      </button>
      {menuOpen && <button className="portfolio-backdrop" aria-label="Close navigation" onClick={closeMenu} />}

      <aside className={`portfolio-sidebar${menuOpen ? " is-open" : ""}`} aria-label="Portfolio navigation">
        <Link className="portfolio-brand" href="/" onClick={closeMenu}>
          <span className="brand-mark">◆</span>
          <span>charles@sec</span>
        </Link>
        <nav className="portfolio-nav">
          {navigation.map((item, index) => (
            <Link
              key={item.id}
              href={item.id === "home" ? "/" : `/${item.id}`}
              aria-current={activeSection === item.id ? "page" : undefined}
              onClick={closeMenu}
            >
              <span className="nav-icon" aria-hidden="true">{item.icon}</span>
              <span>{item.label}</span>
              <span className="nav-index">{String(index + 1).padStart(2, "0")}</span>
            </Link>
          ))}
        </nav>
        <div className="portfolio-sidebar-footer">
          <div className="portfolio-progress" aria-label="Page reading progress">
            <span style={{ width: `${((navigation.findIndex((item) => item.id === activeSection) + 1) / navigation.length) * 100}%` }} />
          </div>
          <button
            type="button"
            className="portfolio-theme-toggle"
            onClick={() => saveTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            <span>{theme === "dark" ? "Light theme" : "Dark theme"}</span>
          </button>
        </div>
      </aside>

      <main className="portfolio-main">
        {page === "home" && (
          <>
        <section className="portfolio-hero" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow hero-glow-blue" aria-hidden="true" />
          <div className="hero-glow hero-glow-purple" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="hero-kicker"><span />Software Developer · Cybersecurity · Automation Engineer</p>
              <h1>Macharia<br />Charles<br />Kariuki</h1>
              <p className="hero-type" aria-live="polite"><Terminal size={18} /><span key={heroTypeIndex}>{heroTypeLines[heroTypeIndex]}</span><i /></p>
              <p className="hero-description">
                Specializing in building robust, high-performance applications while
                architecting secure infrastructure. Bridging the gap between software
                engineering and cybersecurity.
              </p>
              <div className="hero-actions">
                <Link className="portfolio-button portfolio-button-primary" href="/projects">
                  Initiate_Projects <ArrowDown size={16} />
                </Link>
                <Link className="portfolio-button portfolio-button-outline" href="/contact">Contact_Gateway</Link>
              </div>
              <a className="hero-cv-link" href="/CV.html" target="_blank" rel="noopener noreferrer">
                <FileText size={17} /> View CV <ExternalLink size={15} />
              </a>
            </div>

            <div className="hero-visual" aria-label="Cybersecurity system status">
              <div className="orb-ring orb-outer" />
              <div className="orb-ring orb-middle" />
              <div className="orb-ring orb-inner" />
              <div className="orb-core"><Shield size={56} strokeWidth={1.8} /></div>
              <div className="hero-hud hero-hud-ai"><span className="hud-dot purple" />AI_MODELS_ACTIVE</div>
              <div className="hero-hud hero-hud-load">
                <span>SYS_LOAD <b>32%</b></span>
                <i><span /></i>
              </div>
              <div className="hero-hud hero-hud-availability"><span className="hud-dot green" />Q1 Availability: OPEN</div>
            </div>
          </div>
          <a className="hero-scroll" href="#overview" aria-label="Scroll to portfolio overview"><ChevronDown size={18} /></a>
        </section>

        <section className="portfolio-section" id="overview">
          <SectionHeading
            eyebrow="Cybersecurity · Full-stack · Automation"
            title={<>Secure by design.<br /><span>Automated by default.</span></>}
            description="I’m Charles Macharia, a Software Engineering student in Nairobi. I build full-stack systems, test them in authorized environments, and automate repetitive work."
          />
          <SectionVisual section="overview" />
          <div className="portfolio-stats">
            <div><strong>4</strong><span>Languages</span></div>
            <div><strong>6</strong><span>Security tools</span></div>
            <div><strong>5</strong><span>Projects</span></div>
            <div><strong>2</strong><span>Certifications</span></div>
          </div>
          <div className="portfolio-terminal">
            <div className="terminal-title"><span className="terminal-dots"><i /><i /><i /></span><span>charles@kali: ~/portfolio</span></div>
            <div className="terminal-output" aria-live="polite">
              {terminalLines.map((line, index) => <div className={line.tone ? `terminal-${line.tone}` : ""} key={`${index}-${line.text}`}>{line.text}</div>)}
            </div>
            <form
              className="terminal-input-row"
              onSubmit={(event) => {
                event.preventDefault();
                runCommand(termCommand);
              }}
            >
              <span>$</span>
              <input
                aria-label="Terminal command"
                value={termCommand}
                onChange={(event) => setTermCommand(event.target.value)}
                autoComplete="off"
                spellCheck="false"
                placeholder="type help"
              />
            </form>
            <div className="terminal-shortcuts">
              {["whoami", "skills", "lab", "certs", "projects", "contact"].map((command) => (
                <button key={command} type="button" onClick={() => runCommand(command)}>{command}</button>
              ))}
            </div>
          </div>
          <div className="portfolio-subheading overview-start-heading">
            <h2>Start here</h2>
          </div>
          <div className="overview-start-grid">
            <Link className="overview-start-card is-featured" href="/security">
              <p className="portfolio-eyebrow">For security teams</p>
              <h3>Eight checks for a healthcare app</h3>
              <p>The questions, tests and fixes I run first.</p>
            </Link>
            <Link className="overview-start-card" href="/lab">
              <p className="portfolio-eyebrow">Hands-on</p>
              <h3>The Live Lab</h3>
              <p>Hack a simulated clinic, fix it and watch the risk fall.</p>
            </Link>
            <Link className="overview-start-card" href="/automation">
              <p className="portfolio-eyebrow">For operations</p>
              <h3>The K-Trace pipeline</h3>
              <p>Compliance and payments, automated end to end.</p>
            </Link>
            <Link className="overview-start-card" href="/projects">
              <p className="portfolio-eyebrow">For hiring managers</p>
              <h3>Five case studies</h3>
              <p>Problem, build and security lens for each.</p>
            </Link>
            <Link className="overview-start-card" href="/certifications">
              <p className="portfolio-eyebrow">Credentials</p>
              <h3>OSCP and Cisco</h3>
              <p>What each one proves and how I use it.</p>
            </Link>
            <Link className="overview-start-card" href="/trends">
              <p className="portfolio-eyebrow">Forward-looking</p>
              <h3>Nine industry shifts</h3>
              <p>Where the field is heading, and where I fit.</p>
            </Link>
          </div>
          <NextSection page="home" />
        </section>
          </>
        )}

        {page === "security" && <section className="portfolio-section" id="security">
          <SectionHeading
            eyebrow="01 · Offensive security"
            title={<>Offensive thinking,<br /><span>defensive results.</span></>}
            description="Hands-on testing in authorized lab environments, from first scan to documented findings. Select a phase to see how I approach it."
          />
          <SectionVisual section="security" />
          <div className="portfolio-tabs" role="tablist" aria-label="Security assessment phases">
            {securityPhases.map((item, index) => (
              <button key={item.name} type="button" role="tab" aria-selected={phase === index} onClick={() => setPhase(index)}>
                <span>{String(index + 1).padStart(2, "0")}</span>{item.name}
              </button>
            ))}
          </div>
          <div className="portfolio-panel" role="tabpanel">
            <div><p className="portfolio-eyebrow">{securityPhases[phase].name} phase</p><h3>{securityPhases[phase].title}</h3><p>{securityPhases[phase].description}</p></div>
            <Chips items={securityPhases[phase].tools} />
          </div>
          <div className="portfolio-subheading">
            <h3>Security checks for a healthcare web app</h3>
            <p>These are practical questions to test on systems you own or are explicitly authorized to assess.</p>
          </div>
          <div className="portfolio-checks">
            {securityChecks.map((item, index) => (
              <details className="portfolio-check" key={item.title}>
                <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.title}</summary>
                <p><b>Question:</b> {item.question}</p>
                <p><b>Test:</b> {item.test}</p>
                <p><b>Fix:</b> {item.fix}</p>
              </details>
            ))}
          </div>
          <div className="portfolio-callout">
            <p className="portfolio-eyebrow">Practical application</p>
            <h3>Findings matter when someone can act on them.</h3>
            <p>Each issue should include steps to reproduce, plain-language impact and a recommended fix—so developers can verify and resolve it.</p>
          </div>
          <Chips items={["Kali Linux", "Nmap", "Wireshark", "Metasploit", "Burp Suite", "XSStrike", "sqlmap", "Postman"]} />
          <NextSection page="security" />
        </section>}

        {page === "lab" && <section className="portfolio-section" id="lab">
          <SectionHeading
            eyebrow="02 · Live Lab"
            title={<>Break it. <span>Fix it.</span><br />Watch the risk fall.</>}
            description="A safe, simulated clinic app with four vulnerabilities. It uses fake data in your browser and never contacts an external system."
          />
          <SectionVisual section="lab" />
          <div className="lab-mission portfolio-card">
            <FlaskConical size={22} />
            <div><b>Mission</b><p>Try the sample patient, search and note flows. Then enable the fixes and replay the same tests.</p></div>
          </div>
          <div className="lab-layout">
            <div className="portfolio-card lab-target">
              <p className="portfolio-eyebrow">Target · clinic.lab · patient #101</p>
              <label className="portfolio-label" htmlFor="patient-id">Patient record</label>
              <div className="lab-inline">
                <span>clinic.lab/patients/</span>
                <input id="patient-id" value={patientId} onChange={(event) => setPatientId(event.target.value)} aria-label="Patient ID" />
                <button className="portfolio-button portfolio-button-outline" type="button" onClick={openPatientRecord}>Open</button>
              </div>
              <div className="lab-shortcuts">
                <button type="button" onClick={() => setPatientId("103")}>Try test record #103</button>
                <button type="button" onClick={() => setPatientId("101")}>Reset to #101</button>
              </div>
              <div className="lab-result" aria-live="polite">{labResult}</div>

              <label className="portfolio-label" htmlFor="patient-search">Search patients by name</label>
              <div className="lab-inline">
                <input id="patient-search" className="lab-wide-input" value={searchValue} onChange={(event) => setSearchValue(event.target.value)} placeholder="Amina" />
                <button className="portfolio-button portfolio-button-outline" type="button" onClick={searchPatients}>Search</button>
              </div>
              <div className="lab-shortcuts">
                <button type="button" onClick={() => setSearchValue("' OR '1'='1")}>Try simulated injection</button>
              </div>

              <label className="portfolio-label" htmlFor="patient-note">Add a note to the record</label>
              <textarea id="patient-note" className="portfolio-input" rows={3} value={noteValue} onChange={(event) => setNoteValue(event.target.value)} placeholder="Feeling better" />
              <div className="lab-inline lab-note-actions">
                <button className="portfolio-button portfolio-button-outline" type="button" onClick={savePatientNote}>Save note</button>
                <button className="lab-text-button" type="button" onClick={() => setNoteValue("<img src=x onerror=alert(1)>")}>Try harmless markup string</button>
              </div>
              <button className="portfolio-button portfolio-button-outline lab-scan" type="button" onClick={runClinicScan}>Run simulated service check</button>
              <div className="portfolio-terminal lab-console">
                <div className="terminal-title"><span className="terminal-dots"><i /><i /><i /></span><span>simulated clinic console</span></div>
                <div className="terminal-output" aria-live="polite">
                  {labLogs.map((line, index) => <div className={line.tone ? `terminal-${line.tone}` : ""} key={`${index}-${line.text}`}>{line.text}</div>)}
                </div>
              </div>
            </div>

            <div className="lab-controls">
              <div className="portfolio-card risk-card">
                <p className="portfolio-eyebrow">Simulated risk score</p>
                <strong>{riskScore}</strong>
                <span>{riskScore === 0 ? "Hardened" : riskScore === 100 ? "Critical" : riskScore >= 75 ? "High" : riskScore >= 50 ? "Elevated" : "Low"}</span>
                <div className="risk-meter"><i style={{ width: `${riskScore}%` }} /></div>
                <p className="risk-note">Risk is based on the number of enabled fixes, not a real-world assessment.</p>
              </div>
              <div className="portfolio-card">
                <p className="portfolio-eyebrow">Mitigations</p>
                {Object.entries(labVulnerabilities).map(([key, item]) => (
                  <label className="lab-fix" key={key}>
                    <input type="checkbox" checked={Boolean(labFixes[key])} onChange={(event) => toggleLabFix(key, event.target.checked)} />
                    <span>{item.name}</span>
                  </label>
                ))}
                <div className="lab-report-actions">
                  <button className="portfolio-button portfolio-button-primary" type="button" onClick={generateReport}>Generate report</button>
                  {report && <button className="portfolio-button portfolio-button-outline" type="button" onClick={copyReport}>Copy report</button>}
                </div>
                {reportStatus && <p className="portfolio-status" role="status">{reportStatus}</p>}
              </div>
              {report && <pre className="portfolio-report">{report}</pre>}
            </div>
          </div>
          <div className="portfolio-callout">
            <p className="portfolio-eyebrow">Why a simulation?</p>
            <h3>Practice safely. Test only with permission.</h3>
            <p>This browser-only exercise uses mock records and harmless strings to demonstrate the questions, fixes and reporting process without targeting real systems.</p>
          </div>
          <NextSection page="lab" />
        </section>}

        {page === "automation" && <section className="portfolio-section" id="automation">
          <SectionHeading
            eyebrow="03 · Automation operations"
            title={<>Remove the human <span>error,</span><br />keep the human.</>}
            description="K-Trace automates coffee-farm compliance checks and tracks payments from factory intake to revenue. Explore each stage."
          />
          <SectionVisual section="automation" />
          <div className="pipeline-tabs" role="tablist" aria-label="K-Trace workflow">
            {pipeline.map((stage, index) => (
              <button key={stage.name} type="button" role="tab" aria-selected={pipelineStage === index} onClick={() => setPipelineStage(index)}>
                <span>{String(index + 1).padStart(2, "0")}</span>{stage.name}
              </button>
            ))}
          </div>
          <div className="portfolio-panel pipeline-panel" role="tabpanel">
            <div><p className="portfolio-eyebrow">Stage {pipelineStage + 1} of {pipeline.length}</p><h3>{pipeline[pipelineStage].title}</h3><p>{pipeline[pipelineStage].description}</p></div>
            <button type="button" className="portfolio-button portfolio-button-outline" onClick={() => setPipelineStage((stage) => (stage + 1) % pipeline.length)}>Next stage <ArrowRight size={15} /></button>
          </div>

          <div className="portfolio-subheading"><h3>What could automation give back?</h3><p>Adjust these estimates to match a workflow you know.</p></div>
          <div className="portfolio-card savings-card">
            <label htmlFor="record-count">Records checked per day <b>{recordCount}</b></label>
            <input id="record-count" type="range" min="20" max="2000" step="20" value={recordCount} onChange={(event) => setRecordCount(Number(event.target.value))} />
            <label htmlFor="check-minutes">Minutes per manual check <b>{checkMinutes}</b></label>
            <input id="check-minutes" type="range" min="1" max="15" value={checkMinutes} onChange={(event) => setCheckMinutes(Number(event.target.value))} />
            <p>Over 22 working days, that is about</p>
            <strong>{savedHours} <span>hours per month</span></strong>
            <small>An estimate of time spent on checks a script could handle, leaving people to focus on exceptions that need judgment.</small>
          </div>

          <div className="portfolio-subheading"><h3>Six rules for automation I trust</h3></div>
          <div className="portfolio-card-grid">
            {[
              ["Automate the check, not the decision", "Send exceptions to a person with the evidence attached."],
              ["Log every run", "If it cannot be audited, it cannot be trusted."],
              ["Safe to run twice", "Make retries idempotent so they do not duplicate a payment."],
              ["Fail loudly", "A silent failure is worse than no automation at all."],
              ["Keep rules in config", "A regulation change should not require rewriting the application."],
              ["Measure the savings", "Track exceptions caught and hours returned."],
            ].map(([title, description], index) => (
              <article className="portfolio-card" key={title}><span className="card-index">0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
          <NextSection page="automation" />
        </section>}

        {page === "engineering" && <section className="portfolio-section" id="engineering">
          <SectionHeading
            eyebrow="04 · Software development"
            title={<>Full-stack, with security<br />in the <span>foundation.</span></>}
            description="React and Tailwind on the front, Django, Node and Flask behind it, over PostgreSQL, MySQL or MongoDB."
          />
          <SectionVisual section="engineering" />
          <div className="portfolio-tabs" role="tablist" aria-label="Technology stack">
            {technologyStacks.map((item, index) => <button key={item.name} type="button" role="tab" aria-selected={stack === index} onClick={() => setStack(index)}><span>{String(index + 1).padStart(2, "0")}</span>{item.name}</button>)}
          </div>
          <div className="portfolio-panel" role="tabpanel">
            <div><p className="portfolio-eyebrow">{technologyStacks[stack].name}</p><h3>Tools chosen for the problem.</h3><p>{technologyStacks[stack].description}</p></div>
            <Chips items={technologyStacks[stack].tools} />
          </div>
          <div className="portfolio-subheading"><h3>How I build</h3></div>
          <div className="portfolio-card-grid">
            {[
              ["Validate on the server", "The browser is a suggestion. Every rule that matters is enforced again in the API."],
              ["Least privilege", "Each role can access only the records and actions it needs."],
              ["Fail visibly", "Loading, empty and error states keep users from guessing."],
              ["Test the contract", "Exercise APIs before the interface depends on them."],
              ["Migrate, never hand-edit", "Schema changes go through migrations so environments stay consistent."],
              ["Keep secrets out of code", "Keys and passwords belong in environment variables, never in the repository."],
              ["Make changes reviewable", "Small commits make the history easier to understand."],
              ["Document the API", "A finished endpoint should be usable without an extra explanation."],
            ].map(([title, description], index) => <article className="portfolio-card" key={title}><span className="card-index">0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}
          </div>
          <div className="portfolio-callout"><p className="portfolio-eyebrow">Why security-minded development?</p><h3>Catch issues while building, not weeks later.</h3><p>Thinking about permissions, unsafe inputs and error states as I implement a feature helps reduce rework and makes security part of the design.</p></div>
          <NextSection page="engineering" />
        </section>}

        {page === "projects" && <section className="portfolio-section" id="projects">
          <SectionHeading
            eyebrow="05 · Selected work"
            title={<>Six projects, six real <span>problems.</span></>}
            description="Each case starts with a problem, then the build, then the security questions the work needs to answer."
          />
          <SectionVisual section="projects" />
          <div className="portfolio-projects">
            {projects.map((project, index) => (
              <article className="portfolio-project portfolio-card" key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <div><p className="portfolio-eyebrow">Case study · {project.tools[0]}</p><h3>{project.title}</h3></div>
                <div className="project-detail"><b>Problem</b><p>{project.problem}</p></div>
                <div className="project-detail"><b>What I built</b><p>{project.built}</p></div>
                <div className="project-detail"><b>Security lens</b><p>{project.security}</p></div>
                <Chips items={project.tools} />
              </article>
            ))}
          </div>
          <div className="portfolio-callout">
            <p className="portfolio-eyebrow">Try the interactive demo</p>
            <h3>See how I think through a security issue.</h3>
            <p>The Live Lab lets you explore mock vulnerabilities, apply mitigations and generate a sample report.</p>
            <Link className="portfolio-inline-link" href="/lab">Open the Live Lab <ArrowRight size={15} /></Link>
          </div>
          <NextSection page="projects" />
        </section>}

        {page === "certifications" && <section className="portfolio-section" id="certifications">
          <SectionHeading
            eyebrow="06 · Certifications"
            title={<>Credentials that <span>prove</span><br />hands-on skill.</>}
            description="Two certifications chosen because they build practical foundations in security and networking."
          />
          <SectionVisual section="certifications" />
          <div className="portfolio-card-grid two-column">
            <article className="portfolio-card credential-card">
              <Shield size={28} />
              <p className="portfolio-eyebrow">Offensive security</p>
              <h3>OSCP</h3>
              <p><b>What it is:</b> Offensive Security Certified Professional, a practical exam involving lab machines and a professional report.</p>
              <p><b>What it shows:</b> Enumeration, exploitation, privilege escalation and clear reporting under time pressure.</p>
            </article>
            <article className="portfolio-card credential-card">
              <GraduationCap size={28} />
              <p className="portfolio-eyebrow">Networking</p>
              <h3>Cisco Networking Essentials</h3>
              <p><b>What it is:</b> Foundations of how networks move traffic: addressing, routing and switching.</p>
              <p><b>What it shows:</b> Network fundamentals for interpreting packet captures and service scans.</p>
            </article>
          </div>
          <div className="portfolio-subheading"><h3>What the OSCP syllabus covers</h3></div>
          <Chips items={["Enumeration", "Web application attacks", "Password attacks", "Privilege escalation", "Pivoting and tunneling", "Active Directory attacks", "Report writing"]} />
          <div className="portfolio-subheading"><h3>What the Cisco foundation covers</h3></div>
          <Chips items={["IP addressing", "Subnetting", "Routing", "Switching", "Network devices", "Troubleshooting"]} />
          <div className="portfolio-subheading"><h3>From credentials to capability</h3></div>
          <div className="portfolio-card-grid">
            {[
              ["OSCP → Security", "A methodical recon, analysis, validation and reporting cycle."],
              ["Cisco → Analysis", "Read packets and service scans with a foundation in networking."],
              ["Both → Engineering", "Understand how systems fail to build systems that fail less."],
              ["Both → Automation", "Build safer scripts with practical testing and network knowledge."],
              ["OSCP → Reporting", "Every exercise ends in a written report that fixes carry into projects."],
              ["Cisco → Trends", "Strong fundamentals make zero trust, cloud and API security easier to learn."],
            ].map(([title, description]) => <article className="portfolio-card" key={title}><Award size={20} /><h3>{title}</h3><p>{description}</p></article>)}
          </div>
          <div className="portfolio-callout"><p className="portfolio-eyebrow">Learning in progress</p><h3>Still learning on purpose.</h3><p>Machine learning, mobile development and open-source contribution are current study interests. Credential verification is available on request.</p></div>
          <NextSection page="certifications" />
        </section>}

        {page === "trends" && <section className="portfolio-section" id="trends">
          <SectionHeading
            eyebrow="07 · Industry trends"
            title={<>Where the field is <span>heading,</span><br />and how I am ready.</>}
            description="Shifts in security, automation and engineering, connected to the work I care about."
          />
          <SectionVisual section="trends" />
          <div className="portfolio-filter" role="group" aria-label="Filter trends">
            {["All", "Security", "Automation", "Engineering"].map((filter) => (
              <button key={filter} type="button" aria-pressed={trendFilter === filter} onClick={() => setTrendFilter(filter)}>{filter}</button>
            ))}
          </div>
          <div className="portfolio-card-grid">
            {filteredTrends.map((item) => <article className="portfolio-card" key={item.title}><p className="portfolio-eyebrow">{item.type}</p><h3>{item.title}</h3><p>{item.description}</p></article>)}
          </div>
          <NextSection page="trends" />
        </section>}

        {page === "hackathons" && <section className="portfolio-section" id="hackathons">
          <SectionHeading
            eyebrow="08 · Hackathons and CTFs"
            title={<>Built and broken<br /><span>under pressure.</span></>}
            description="Capture-the-flag events sharpen security skills; hackathons bring full-stack, security and automation together under a deadline."
          />
          <SectionVisual section="hackathons" />
          <div className="portfolio-card-grid">
            {[
              ["The backend", "Build an API and database model that hold up past the demo."],
              ["The interface", "Deliver React screens that look finished and work on a phone."],
              ["The security review", "Check access control and inputs in an authorized test environment."],
              ["The automation", "Use seed data, scripts and tests to avoid repetitive manual work."],
              ["The pitch", "Tell a clear story: problem, demo and impact."],
              ["The glue", "Use Git and a repeatable setup so the team can ship on time."],
            ].map(([title, description], index) => <article className="portfolio-card" key={title}><span className="card-index">0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}
          </div>
          <div className="portfolio-subheading"><h3>What CTF categories train</h3></div>
          <div className="portfolio-card-grid">
            {[
              ["Web", "Injection, broken authentication and application logic flaws."],
              ["Network", "Packet captures, protocols and service analysis."],
              ["Cryptography", "Spotting weak schemes and misused primitives."],
              ["Forensics", "Reconstructing what happened from files and logs."],
              ["Reverse engineering", "Reading unfamiliar code to understand behavior."],
              ["OSINT", "Finding what is already public, and why it matters."],
            ].map(([title, description]) => <article className="portfolio-card" key={title}><p className="portfolio-eyebrow">Category</p><h3>{title}</h3><p>{description}</p></article>)}
          </div>
          <div className="portfolio-subheading"><h3>A 48-hour sprint playbook</h3></div>
          <div className="portfolio-timeline">
            {sprint.map(([time, title, description]) => <div className="timeline-item" key={time}><b>{time} · {title}</b><p>{description}</p></div>)}
          </div>
          <div className="portfolio-callout"><p className="portfolio-eyebrow">CTF competitions</p><h3>Practice, learn, document.</h3><p>Web, network and problem-solving challenges are a standing part of my learning. Scoreboards and write-ups will be linked here as I publish them.</p></div>
          <NextSection page="hackathons" />
        </section>}

        {page === "about" && <section className="portfolio-section" id="about">
          <SectionHeading
            eyebrow="09 · About"
            title={<>Builder first,<br /><span>breaker second.</span></>}
            description="A Software Engineering student with a foundation in full-stack development, cybersecurity and machine learning. I like building secure, scalable applications and learning by solving real problems."
          />
          <SectionVisual section="about" />
          <div className="about-education portfolio-card">
            <GraduationCap size={24} />
            <div><p className="portfolio-eyebrow">2024 – present · Zetech University</p><h3>BSc. Software Engineering</h3><p>Coursework includes cybersecurity, web development, database design, machine learning and network security.</p></div>
          </div>
          <div className="portfolio-subheading"><h3>What drives me</h3></div>
          <div className="portfolio-card-grid">
            {[
              ["Craft", "Secure and scalable software that is still pleasant to use."],
              ["Curiosity", "Labs, CTFs and real builds teach through practice."],
              ["Community", "Contribute, share what I learn and learn in public."],
              ["Discipline", "Documented work, tests and reports make good work repeatable."],
              ["Ownership", "Stay with a problem until it is actually solved."],
              ["Teamwork", "Clear updates, kind reviews and shared credit."],
            ].map(([title, description]) => <article className="portfolio-card" key={title}><BookOpen size={19} /><h3>{title}</h3><p>{description}</p></article>)}
          </div>
          <div className="portfolio-subheading"><h3>Interests and languages</h3></div>
          <Chips items={["CTF competitions", "Machine learning", "Open source", "Mobile development", "Web development", "Cybersecurity research", "Penetration testing", "English · Fluent", "Swahili · Native"]} />
          <NextSection page="about" />
        </section>}

        {page === "contact" && <section className="portfolio-section contact-section" id="contact">
          <SectionHeading
            eyebrow="10 · Contact"
            title={<>Let’s secure, build or<br /><span>automate something.</span></>}
            description="Open to internships, junior roles and collaborations. References are available on request."
          />
          <SectionVisual section="contact" />
          <div className="contact-grid">
            <div className="contact-details">
              <div className="contact-orb" aria-hidden="true"><div><Shield size={42} /></div></div>
              <a className="contact-method" href="mailto:kariukic547@gmail.com"><span>Email</span><b>kariukic547@gmail.com</b><ExternalLink size={15} /></a>
              <a className="contact-method" href="tel:+254727537684"><span>Phone</span><b>+254 727 537 684</b><ExternalLink size={15} /></a>
              <div className="contact-method"><span>Based in</span><b>Nairobi, Kenya</b></div>
              <a className="contact-method" href="https://wa.me/254727537684" target="_blank" rel="noopener noreferrer"><span>WhatsApp</span><b>Message me</b><ExternalLink size={15} /></a>
              <a className="contact-method" href="https://t.me/karizK" target="_blank" rel="noopener noreferrer"><span>Telegram</span><b>@karizK</b><ExternalLink size={15} /></a>
              <a className="contact-method" href="https://x.com/Karis1182609" target="_blank" rel="noopener noreferrer"><span>X / Twitter</span><b>@Karis1182609</b><ExternalLink size={15} /></a>
            </div>
            <form className="portfolio-card contact-form" onSubmit={(event) => { event.preventDefault(); sendContact(); }}>
              <p className="portfolio-eyebrow">Send a message</p>
              <label className="portfolio-label" htmlFor="contact-name">Your name</label>
              <input id="contact-name" className="portfolio-input" autoComplete="name" value={contactName} onChange={(event) => setContactName(event.target.value)} required />
              <label className="portfolio-label" htmlFor="contact-message">Message</label>
              <textarea id="contact-message" className="portfolio-input" rows={6} value={contactMessage} onChange={(event) => setContactMessage(event.target.value)} required />
              <button className="portfolio-button portfolio-button-primary" type="submit">Open in my email app <Send size={15} /></button>
              <small>This opens your email app with the message filled in; it does not send anything automatically.</small>
            </form>
          </div>
          <div className="portfolio-subheading"><h3>Good fit if you need</h3></div>
          <Chips items={[
            "A developer who tests his own code",
            "Penetration-testing support in a lab",
            "Workflow or compliance automation",
            "Security review of a web app or API",
            "Full-stack feature delivery",
            "A fast learner for a junior role",
          ]} />
          <NextSection page="contact" />
          <footer className="portfolio-footer">
            <Link href="/"><span className="brand-mark">◆</span> charles@sec</Link>
            <span>Designed and built with React · {new Date().getFullYear()}</span>
            <Link href="/">Back to top ↑</Link>
          </footer>
        </section>}
      </main>
    </div>
  );
}
