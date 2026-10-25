const cases = [
  {
    id: "internet-research-agency",
    title: "Internet Research Agency and the 2016 U.S. election",
    region: "Russia / United States",
    startYear: 2014,
    period: "2014-2017",
    tags: ["election", "state"],
    evidence: "A",
    scale: 3000,
    scaleLabel: "Thousands of accounts",
    actor: "Internet Research Agency",
    summary: "Employees posed as Americans, operated political pages, bought advertisements, organized rallies, and promoted or attacked candidates during the 2016 U.S. election.",
    playbook: "False U.S. personas, issue pages, targeted advertisements, hashtag campaigns, direct outreach to activists, and real-world event promotion.",
    proof: "A federal indictment described the organization, employees, budgets, internal instructions, payment infrastructure, and named social-media accounts. The Mueller investigation separately documented the operation.",
    takeaway: "The operation embedded itself inside genuine political communities instead of relying only on obviously automated posting.",
    sourceLabel: "DOJ indictment",
    sourceUrl: "https://www.justice.gov/d9/fieldable-panel-panes/basic-panes/attachments/2018/02/16/internet_research_agency_indictment.pdf",
    substackUrl: ""
  },
  {
    id: "rt-fsb-ai-bot-farm",
    title: "RT and FSB AI-enhanced bot farm",
    region: "Russia / Global",
    startYear: 2024,
    period: "2024",
    tags: ["state"],
    evidence: "A",
    scale: 968,
    scaleLabel: "968 X accounts",
    actor: "RT and Russia's FSB",
    summary: "A Russian state-run network used fictitious X personas and automated infrastructure to distribute narratives favorable to the Russian government.",
    playbook: "AI-assisted persona creation, registered email domains, automated account management, and coordinated posting by profiles posing as people in the United States and elsewhere.",
    proof: "The U.S. Justice Department announced court-authorized searches of 968 accounts and seizure of two domains, supported by unsealed affidavits describing the infrastructure and operators.",
    takeaway: "Generative AI can reduce the labor needed to create believable personas, while the coordination infrastructure remains detectable.",
    sourceLabel: "DOJ disruption",
    sourceUrl: "https://www.justice.gov/archives/opa/pr/justice-department-leads-efforts-among-federal-international-and-private-sector-partners",
    substackUrl: ""
  },
  {
    id: "doppelganger",
    title: "Doppelganger and cloned news sites",
    region: "Russia / Europe and U.S.",
    startYear: 2022,
    period: "2022-2024",
    tags: ["election", "state"],
    evidence: "A",
    scale: 32,
    scaleLabel: "32 seized domains",
    actor: "Russian Presidential Administration proxies",
    summary: "Operators cloned trusted news websites and used fake local personas, advertisements, and social posts to direct audiences to covert propaganda.",
    playbook: "Typosquatted domains, copied news layouts, fabricated bylines, AI-assisted advertising, influencer outreach, and social profiles posing as local citizens.",
    proof: "An FBI affidavit and court-approved seizure tied 32 domains to Russian companies acting under the direction of the Presidential Administration.",
    takeaway: "The influence system was a publishing and distribution stack, not merely a collection of social-media bots.",
    sourceLabel: "DOJ case summary",
    sourceUrl: "https://www.justice.gov/usao-edpa/pr/justice-department-disrupts-covert-russian-government-sponsored-foreign-malign",
    substackUrl: ""
  },
  {
    id: "spamouflage",
    title: "Spamouflage's cross-platform propaganda network",
    region: "China / Global",
    startYear: 2019,
    period: "2019-2023",
    tags: ["state"],
    evidence: "B",
    scale: 8673,
    scaleLabel: "8,673 Meta assets",
    actor: "China-linked operators",
    summary: "Thousands of fake accounts praised China, attacked critics, and distributed the same narratives across more than 50 large and small platforms.",
    playbook: "Mass account creation, multilingual content, repeated link seeding, copied comments, repurposed spam Pages, and migration to smaller forums after detection.",
    proof: "Meta connected previously separate clusters into one operation and linked it to individuals associated with Chinese law enforcement. Other research groups independently documented parts of the network.",
    takeaway: "Enormous account volume can still produce little authentic engagement; scale and persuasion are not the same thing.",
    sourceLabel: "Meta threat report",
    sourceUrl: "https://about.fb.com/news/2023/08/raising-online-defenses/",
    substackUrl: ""
  },
  {
    id: "myanmar-military",
    title: "Myanmar military's covert community pages",
    region: "Myanmar",
    startYear: 2018,
    period: "2018-2020",
    tags: ["state", "domestic"],
    evidence: "B",
    scale: 592,
    scaleLabel: "592 Meta assets",
    actor: "Myanmar military-linked operators",
    summary: "Military-linked operators controlled apparently independent news, entertainment, beauty, and lifestyle pages before using them to promote military messaging.",
    playbook: "Front pages, covert administration, engagement farming, repurposed entertainment content, and repeated reconstitution after enforcement.",
    proof: "Meta repeatedly identified technical and operational links between the networks and members of the Myanmar military, removing hundreds of accounts, Pages, Groups, and Instagram profiles.",
    takeaway: "A page can build trust through harmless content before becoming infrastructure for political messaging or intimidation.",
    sourceLabel: "Meta investigation",
    sourceUrl: "https://about.fb.com/news/2018/08/removing-myanmar-officials/",
    substackUrl: ""
  },
  {
    id: "liberty-front-press",
    title: "Liberty Front Press and inauthentic media brands",
    region: "Iran / Multiple regions",
    startYear: 2018,
    period: "2018",
    tags: ["state"],
    evidence: "B",
    scale: 652,
    scaleLabel: "652 Meta assets",
    actor: "Iran-origin operators",
    summary: "Fake news organizations and social accounts impersonated local media while promoting narratives aligned with Iranian interests in several regions.",
    playbook: "False media outlets, copied and altered articles, ideological audience targeting, linked account clusters, and personas presented as local journalists.",
    proof: "Mandiant found shared infrastructure, Iranian registration links, and Iranian phone numbers. Meta removed hundreds of related assets and linked part of the activity to Iranian state media.",
    takeaway: "A network of websites can provide credibility and source material for coordinated social personas.",
    sourceLabel: "Mandiant analysis",
    sourceUrl: "https://cloud.google.com/blog/topics/threat-intelligence/suspected-iranian-influence-operation",
    substackUrl: ""
  },
  {
    id: "nicaragua-troll-farm",
    title: "Nicaragua's cross-government troll farm",
    region: "Nicaragua",
    startYear: 2018,
    period: "2018-2021",
    tags: ["state", "domestic"],
    evidence: "B",
    scale: 1464,
    scaleLabel: "1,464 Meta assets",
    actor: "Nicaraguan government and FSLN",
    summary: "Government employees ran fake personas and media brands that praised the government, attacked protesters, and flooded domestic debate with pro-government messaging.",
    playbook: "Co-located operators, cross-platform media brands, fake accounts, mass reporting, opposition attacks, and coordinated amplification.",
    proof: "Meta linked the network to employees and infrastructure at TELCOR, the postal service, the Supreme Court, the social-security institute, and the governing FSLN party.",
    takeaway: "State resources can support a distributed influence operation that appears to be independent grassroots media.",
    sourceLabel: "Meta CIB report",
    sourceUrl: "https://about.fb.com/news/2021/11/october-2021-coordinated-inauthentic-behavior-report/",
    substackUrl: ""
  },
  {
    id: "honduras-government-network",
    title: "Honduras government social-media network",
    region: "Honduras",
    startYear: 2019,
    period: "2019",
    tags: ["state", "domestic"],
    evidence: "C",
    scale: 1669,
    scaleLabel: "1,669 Facebook assets",
    actor: "Government social-media personnel",
    summary: "Fake accounts and profile-like Pages amplified positive content about the president and manufactured supportive engagement.",
    playbook: "Stock-photo personas, Pages designed to resemble individual profiles, coordinated comments, and amplification of presidential content.",
    proof: "Meta connected parts of the operation to people who managed social media for the Honduran government and removed 181 accounts and 1,488 Pages.",
    takeaway: "Manufactured agreement can be produced through comments and page interactions, not only through original posts.",
    sourceLabel: "Meta takedown",
    sourceUrl: "https://about.fb.com/news/2019/07/removing-cib-thailand-russia-ukraine-honduras/",
    substackUrl: ""
  },
  {
    id: "philippines-military-police",
    title: "Philippine military and police-linked network",
    region: "Philippines",
    startYear: 2019,
    period: "2019-2020",
    tags: ["state", "domestic"],
    evidence: "B",
    scale: 129,
    scaleLabel: "129 Meta assets",
    actor: "Philippine military and police-linked operators",
    summary: "Fake accounts promoted security policy, criticized activists and opposition groups, and amplified government and military narratives.",
    playbook: "Fictitious personas, coordinated comments, Page management, anti-communist messaging, and attacks on youth activists and political critics.",
    proof: "Following reporting from civil society and Rappler, Meta expanded its investigation and linked 64 accounts, 32 Pages, and 33 Instagram accounts to military and police personnel.",
    takeaway: "Domestic security institutions can use covert online identities to shape perceptions of dissent and public safety.",
    sourceLabel: "Meta investigation",
    sourceUrl: "https://about.fb.com/news/2020/09/removing-coordinated-inauthentic-behavior-china-philippines/",
    substackUrl: ""
  },
  {
    id: "archimedes-group",
    title: "Archimedes Group's influence-for-hire network",
    region: "Israel / Multiple regions",
    startYear: 2012,
    period: "2012-2019",
    tags: ["election", "commercial"],
    evidence: "B",
    scale: 265,
    scaleLabel: "265 Meta assets",
    actor: "Archimedes Group",
    summary: "A commercial influence company posed as local residents and news organizations while targeting elections and politicians across several continents.",
    playbook: "Fake local personas, fabricated media brands, leaked-material claims, political advertising, event promotion, and artificial engagement.",
    proof: "Meta attributed the network to the Israeli company, removed 265 assets, banned the company, and documented roughly $812,000 in advertising spending.",
    takeaway: "Influence operations can be purchased as a commercial service and deployed across unrelated countries.",
    sourceLabel: "Meta takedown",
    sourceUrl: "https://about.fb.com/news/2019/05/removing-coordinated-inauthentic-behavior-from-israel/amp/",
    substackUrl: ""
  },
  {
    id: "mek-albania",
    title: "MEK-linked troll farm in Albania",
    region: "Albania / Iran",
    startYear: 2017,
    period: "2017-2021",
    tags: ["nonstate"],
    evidence: "B",
    scale: 336,
    scaleLabel: "336 Meta assets",
    actor: "Mojahedin-e Khalq-linked operators",
    summary: "A co-located operation used fake and authentic accounts in work shifts to promote MEK messaging and manufacture engagement around Iran.",
    playbook: "High-volume posting, coordinated work shifts, self-commenting, fake personas, and replies beneath international news organizations.",
    proof: "Meta identified long-running infrastructure connections between fake accounts and authentic MEK-linked accounts, as well as posting patterns consistent with an organized workplace.",
    takeaway: "Regular schedules and synchronized behavior can expose a human-operated troll farm even without obvious automation.",
    sourceLabel: "Meta detailed report",
    sourceUrl: "https://about.fb.com/wp-content/uploads/2021/04/March-2021-CIB-Report.pdf",
    substackUrl: ""
  },
  {
    id: "azerbaijan-youth-union",
    title: "New Azerbaijani Party Youth Union network",
    region: "Azerbaijan",
    startYear: 2020,
    period: "2020",
    tags: ["state", "domestic"],
    evidence: "B",
    scale: 8691,
    scaleLabel: "8,691 Meta assets",
    actor: "New Azerbaijani Party Youth Union",
    summary: "Thousands of profile-like Pages praised the government and attacked opposition figures to create the appearance of widespread agreement.",
    playbook: "Stock-image profiles, scheduled work shifts, supportive comment brigades, attacks on critics, and self-amplification within the network.",
    proof: "Meta linked the activity to the ruling party's Youth Union and removed 589 Facebook accounts, 7,665 Pages, and 437 Instagram accounts.",
    takeaway: "Comment sections can be systematically engineered to change how audiences perceive the balance of public opinion.",
    sourceLabel: "Meta investigation",
    sourceUrl: "https://about.fb.com/news/2020/10/removing-coordinated-inauthentic-behavior-september-report/",
    substackUrl: ""
  },
  {
    id: "turkey-akp-network",
    title: "AKP-linked Twitter amplification network",
    region: "Turkey",
    startYear: 2008,
    period: "2008-2020",
    tags: ["election", "domestic"],
    evidence: "B",
    scale: 7340,
    scaleLabel: "7,340 Twitter accounts",
    actor: "AKP youth-wing-linked network",
    summary: "Fake and compromised accounts amplified pro-AKP and pro-Erdoğan narratives while criticizing opposition parties and political movements.",
    playbook: "Centrally managed accounts, compromised profiles, mass retweeting, coordinated replies, and political narrative amplification.",
    proof: "Twitter attributed 7,340 accounts to a centralized network associated through technical signals with the AKP youth wing and released the dataset for research.",
    takeaway: "Compromised authentic accounts can be folded into a coordinated network, complicating simple fake-account detection.",
    sourceLabel: "Twitter disclosure",
    sourceUrl: "https://blog.x.com/en/company/information-operations-june-2020",
    substackUrl: ""
  },
  {
    id: "serbia-sns-network",
    title: "Serbian Progressive Party amplification network",
    region: "Serbia",
    startYear: 2018,
    period: "2018-2020",
    tags: ["election", "domestic"],
    evidence: "B",
    scale: 8558,
    scaleLabel: "8,558 Twitter accounts",
    actor: "SNS-linked operators",
    summary: "Thousands of accounts boosted President Aleksandar Vučić and the Serbian Progressive Party while attacking opposition figures and promoting favorable media.",
    playbook: "Mass retweeting, replies to government accounts, coordinated pro-party imagery, opposition attacks, and amplification of supportive news outlets.",
    proof: "Twitter removed and released a dataset of 8,558 accounts. Stanford researchers and ASPI documented roughly 37.8 million tweets and systematic support for the ruling party.",
    takeaway: "A coordinated network can dominate visible political discussion even when individual accounts have small audiences.",
    sourceLabel: "ASPI dataset analysis",
    sourceUrl: "https://infoops.aspi.org.au/country/serbia/",
    substackUrl: ""
  },
  {
    id: "south-korea-nis",
    title: "South Korean NIS and Cyber Command operations",
    region: "South Korea",
    startYear: 2012,
    period: "2012",
    tags: ["election", "state", "domestic"],
    evidence: "A",
    scale: 780000,
    scaleLabel: "780,000+ political comments",
    actor: "National Intelligence Service and Cyber Command personnel",
    summary: "Intelligence and military personnel posted political comments and social messages intended to favor or discredit candidates around the 2012 presidential election.",
    playbook: "Coordinated online comments, Twitter accounts, retweeting tools, political messaging directives, and state personnel assigned to psychological operations.",
    proof: "South Korean court proceedings found that intelligence personnel conducted political activity, while separate convictions covered military cyber-command involvement and hundreds of thousands of comments.",
    takeaway: "A state information unit can redirect national-security capabilities toward domestic political influence.",
    sourceLabel: "South Korean court record",
    sourceUrl: "https://www.law.go.kr/LSW/precInfoP.do?precSeq=195408",
    substackUrl: ""
  }
];

const grid = document.querySelector("#case-grid");
const resultCount = document.querySelector("#results-count");
const sortSelect = document.querySelector("#sort-cases");
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const dialog = document.querySelector("#case-dialog");
const dialogContent = document.querySelector("#dialog-content");
const closeButton = document.querySelector(".dialog-close");
const evidenceOrder = { A: 1, B: 2, C: 3 };

let activeFilter = "all";

function visibleCases() {
  const filtered = cases.filter((item) => activeFilter === "all" || item.tags.includes(activeFilter));
  const sorted = [...filtered];

  sorted.sort((a, b) => {
    switch (sortSelect.value) {
      case "oldest": return a.startYear - b.startYear || a.title.localeCompare(b.title);
      case "region": return a.region.localeCompare(b.region) || b.startYear - a.startYear;
      case "evidence": return evidenceOrder[a.evidence] - evidenceOrder[b.evidence] || b.startYear - a.startYear;
      default: return b.startYear - a.startYear || a.title.localeCompare(b.title);
    }
  });

  return sorted;
}

function renderCases() {
  const items = visibleCases();
  resultCount.textContent = `${items.length} ${items.length === 1 ? "case" : "cases"}`;
  grid.innerHTML = items.map((item) => `
    <article class="case-card">
      <div class="case-topline">
        <span>${item.region}</span>
        <span class="date">${item.period}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <div class="case-meta">
        <span class="evidence-grade">Evidence ${item.evidence}</span>
        <span>${item.scaleLabel}</span>
      </div>
      <div class="card-actions">
        <button class="case-open" type="button" data-case-id="${item.id}">Open case</button>
        <a class="source-link" href="${item.sourceUrl}" target="_blank" rel="noreferrer">${item.sourceLabel}</a>
      </div>
    </article>
  `).join("");
}

function openCase(id, updateHash = true) {
  const item = cases.find((entry) => entry.id === id);
  if (!item) return;

  const substackAction = item.substackUrl
    ? `<a class="button primary" href="${item.substackUrl}" target="_blank" rel="noreferrer">Read on Substack</a>`
    : `<span class="button disabled" aria-disabled="true">Substack article not published</span>`;

  dialogContent.innerHTML = `
    <header class="dialog-header">
      <p class="dialog-kicker">${item.region} / ${item.period}</p>
      <h2 id="dialog-title">${item.title}</h2>
      <p class="dialog-summary">${item.summary}</p>
    </header>
    <dl class="dialog-stats">
      <div><dt>Attributed actor</dt><dd>${item.actor}</dd></div>
      <div><dt>Evidence</dt><dd>Grade ${item.evidence}</dd></div>
      <div><dt>Documented scale</dt><dd>${item.scaleLabel}</dd></div>
    </dl>
    <section class="dialog-section">
      <h3>How it worked</h3>
      <p>${item.playbook}</p>
      <h3>Why it is documented</h3>
      <p>${item.proof}</p>
      <h3>What this case shows</h3>
      <p>${item.takeaway}</p>
    </section>
    <p class="dialog-note">The evidence establishes that the operation existed and attempted to manipulate public debate. It does not, by itself, prove that the operation changed an election result or persuaded a measurable number of people.</p>
    <div class="dialog-actions">
      ${substackAction}
      <a class="button secondary" href="${item.sourceUrl}" target="_blank" rel="noreferrer">Open primary source</a>
      <a class="button secondary" href="#case/${item.id}">Copyable case link</a>
    </div>
  `;

  if (updateHash) history.replaceState(null, "", `#case/${item.id}`);
  if (!dialog.open) dialog.showModal();
}

function closeCase() {
  dialog.close();
  if (location.hash.startsWith("#case/")) history.replaceState(null, "", "#cases");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderCases();
  });
});

sortSelect.addEventListener("change", renderCases);
grid.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-case-id]");
  if (trigger) openCase(trigger.dataset.caseId);
});

closeButton.addEventListener("click", closeCase);
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeCase();
});
dialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeCase();
});

renderCases();

if (location.hash.startsWith("#case/")) {
  openCase(location.hash.replace("#case/", ""), false);
}
