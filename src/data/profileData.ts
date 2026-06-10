export interface Office {
  type: 'Head Office' | 'Branch Office';
  address: string;
  location: string;
  email: string;
  gstin?: string;
  pin: string;
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  details: string;
  background: 'Siemens' | 'BHEL' | 'SSES';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
}

export interface Industry {
  name: string;
  description: string;
  icon: string;
  clients: string[];
}

export interface Project {
  id: number;
  clientName: string;
  title: string;
  capacity: string;
  location: string;
  status: string;
  category: 'Nuclear & Utility' | 'CPP & Heavy Industry' | 'Cogeneration & Process' | 'Auxiliaries';
  description: string;
}

export const COMPANY_NAME = "SIVA SAI ENGINEERING SERVICES";
export const TAGLINE = "Empowering Progress. Energizing Tomorrow.";
export const BRIEF_ABOUT = "Siva Sai Engineering Services (SSES) is a premier industrial engineering and turbine services company. Established in 2011 by Mr. M. Rajendra Prasad, an engineering specialist with over 28 years of power plant experience, SSES has completed over 120 prestigious projects across India. We specialize in the erection, overhauling, alignment, and commissioning of steam turbines, gas turbines, generators, pumps, and auxiliary equipment ranging from 1 MW to 1000 MW.";

export const COMPANY_HISTORY = [
  {
    year: "1998 - 2010",
    title: "The Foundation",
    description: "Founder Mr. M. Rajendra Prasad begins his career as a megawatt technician, working extensively on Large Power Plants (LPP) and Small Power Plants (SPP) across India, mastering turbine mechanics and alignment."
  },
  {
    year: "2011",
    title: "SSES Inception",
    description: "M/s Siva Sai Engineering Services is established in March 2011, headquartered in Tamil Nadu, quickly earning reputation as a competent turbine services contractor."
  },
  {
    year: "2012 - 2015",
    title: "Nuclear Breakthrough",
    description: "SSES secures critical work orders at Kudankulam Nuclear Power Project (KKNPP 2x1000MW) for LP turbine assembly, HP stopping/control valves overhauling, and blade replacement under Russian specialist supervision."
  },
  {
    year: "2016 - 2020",
    title: "Supercritical & Utility Expansion",
    description: "Collaborating with BHEL and Siemens on major projects including Kakrapar Atomic Power Project (2x700MW MSR supply), Raichur TPS (210MW/250MW bellows replacement), and JSW Steel (100MW capital overhauling)."
  },
  {
    year: "2021 - 2024",
    title: "Pan-India Operations",
    description: "Establishing corporate offices in Vijayawada (AP) and Surat (Gujarat). Handling massive turbine overhauling contracts for companies like Reliance Vadodara, NALCO Angul, Filatex, Devpriya Meerut, and AMNS Hazira."
  },
  {
    year: "2025 - 2026",
    title: "Global Footprint & Scaling",
    description: "Venturing into international projects including manpower deputation for steam turbine overhauling at ANRML Nigeria. Serving capacities up to 1000 MW with a core team of ex-BHEL & ex-Siemens experts."
  }
];

export const CORE_VALUES = [
  {
    title: "Engineering Precision",
    description: "Aligning Casings and rotors to tolerances of hundredths of a millimeter. We ensure absolute geometric precision in all installations."
  },
  {
    title: "Nuclear-Grade Safety",
    description: "Working within nuclear power stations (NPCIL) has trained our team to adhere to the absolute highest levels of safety and quality assurance."
  },
  {
    title: "24/7 Rapid Mobilization",
    description: "Power plant shutdowns cost millions per hour. We mobilize our expert engineers, specialized tools, and skilled technicians within hours."
  },
  {
    title: "Customer Satisfaction",
    description: "Delivering projects on or ahead of schedule, with zero accidents, ensuring smooth power generation startup."
  }
];

export const OFFICE_CONTACTS: Office[] = [
  {
    type: "Head Office",
    location: "Vijayawada, Andhra Pradesh",
    pin: "520015",
    address: "D.No 43-143/1-46, Block No. 143G, Pipula Road, Ajith Singh Nagar, Vijayawada, NTR District, Andhra Pradesh",
    email: "sivasaiengineeringservices@gmail.com",
    gstin: "37ABXFS0833M1ZE"
  },
  {
    type: "Branch Office",
    location: "Surat, Gujarat",
    pin: "394310",
    address: "Flat No: 663, 1st Floor, Dastan Residency-2, Unnamed Road, Dastan Branch Post Office, Tq. Palsana, Dastan, Surat, Gujarat",
    email: "prasad.kknpp999@gmail.com",
    gstin: "24ABXFS0833M1ZL"
  },
  {
    type: "Branch Office",
    location: "Kanyakumari, Tamil Nadu",
    pin: "629401",
    address: "Door No. 6-27, E-5, Vasantham Compound, Anjugramam (PO), Kanyakumari District, Tamil Nadu",
    email: "siva.sai9999@yahoo.in"
  }
];

export const PHONE_NUMBERS = ["+91 99432 04553", "+91 94887 10859"];
export const EMAILS = [
  "siva.sai9999@yahoo.in",
  "sivasaiengineeringservices@gmail.com",
  "prasad_kknpp@yahoo.com",
  "prasad.kknpp999@gmail.com"
];

export const TAX_REGISTRATIONS = {
  pan: "ABXFS0833M",
  tin: "33736126501",
  cst: "1072353",
  epf: "MDNKL0079621000 (TN/NGL/79621)",
  esi: "70000566860001019",
  udyam: "Udyam Registered MSME"
};

export const EXPERT_TEAM: TeamMember[] = [
  {
    name: "Mr. M. Rajendra Prasad",
    role: "Founder & Managing Partner",
    experience: "28+ Years Experience",
    details: "Holds a Diploma in Mechanical Engineering. Began his career in 1998 as a megawatt turbine technician. Founded SSES in 2011, guiding it to execute 120+ projects up to 1000 MW, including extensive nuclear turbine works.",
    background: "SSES"
  },
  {
    name: "Mr. D. Vijay Babu",
    role: "Senior Engineering Consultant",
    experience: "35+ Years Experience (Ex-Siemens)",
    details: "Specialist in Siemens steam turbines. Managed turbine erection and major overhauling projects up to 800 MW across India and various export countries.",
    background: "Siemens"
  },
  {
    name: "Mr. CH. Adhisesulu",
    role: "Senior Project Advisor",
    experience: "35+ Years Experience (Ex-BHEL)",
    details: "Expert in erection, overhauling, and commissioning of utility steam turbines and gas turbines up to 1000 MW.",
    background: "BHEL"
  },
  {
    name: "Mr. P. V. Sai",
    role: "Lead Erection & Commissioning Expert",
    experience: "45+ Years Experience (Ex-BHEL)",
    details: "Brings four decades of technical expertise in turbine alignment, catenaries checking, rotor balancing, and high-pressure steam path overhauls.",
    background: "BHEL"
  }
];

export const SERVICES_LIST: Service[] = [
  {
    id: "steam-turbine",
    title: "Steam Turbine Services",
    description: "Complete overhaul, repair, and erection of industrial and utility steam turbines from 1 MW to 1000 MW.",
    details: [
      "Erection, leveling, and centering of turbine casings",
      "Major overhauls (removal of top casing, internals sandblasting, box-up)",
      "High pressure steam path inspection and blade repairs",
      "Realignment of casing and rotor systems",
      "KWU, Siemens, BHEL, GE, and LMZ turbine expertise"
    ]
  },
  {
    id: "gas-turbine",
    title: "Gas Turbine Services",
    description: "Comprehensive maintenance, overhauling, and installation of gas turbine generators.",
    details: [
      "Overhauling of gas turbine hot paths and combustion chambers",
      "Erection and alignment of auxiliary skids",
      "BHEL/GE Frame machines service engineering",
      "Emergency shutdown repair and component replacement"
    ]
  },
  {
    id: "generator",
    title: "Generator Services",
    description: "Medium and major overhauling of air-cooled, water-cooled, and hydrogen-cooled generators up to 1000 MWe.",
    details: [
      "Threading out and threading in of heavy generator rotors",
      "Stator core insulation and winding health inspections",
      "Exciter rotor and diode bridge repairs",
      "Electrical testing and carbon dioxide dry cleaning"
    ]
  },
  {
    id: "balancing-realignment",
    title: "Rotor Balancing & Realignment",
    description: "Super-precision casing alignment, vibration control, and rotor balancing services.",
    details: [
      "Front shaft vibration analysis and correction",
      "Rotor coupling runout and concentricity checks",
      "Catenary curve checking and bearing load calculations",
      "Replacing turbine bearings and journal refurbishing"
    ]
  },
  {
    id: "shutdown-maintenance",
    title: "Shutdown Maintenance (MOH/AOH)",
    description: "Rapid-mobilization services for Annual and Major Overhauling shutdowns of captive and utility plants.",
    details: [
      "Emergency breakdown troubleshooting and rectification",
      "LPT parting plane, gland box gasket, and diaphragm repairs",
      "Valve cage removing, sandblasting, and blue contact checking",
      "Mobilization of specialized tools and qualified industrial crew"
    ]
  },
  {
    id: "piping-auxiliaries",
    title: "Piping & Auxiliary Erection",
    description: "Installation and replacement of heavy condensers, compensatory bellows, and power piping.",
    details: [
      "Replacement of LP turbine inlet compensatory bellows",
      "Fabrication and erection of TG Condenser packages",
      "MSR (Moisture Separator Reheater) nitrogen filling and preservation",
      "Impulse lines leakage arrest and high-pressure flange updates"
    ]
  }
];

export const INDUSTRIES_SERVED: Industry[] = [
  {
    name: "Nuclear Power Plants",
    description: "Providing high-precision turbine and generator overhauling for India's largest 1000MWe nuclear units at Kudankulam (KKNPP) and 700MWe units at Kakrapar (KAPP).",
    icon: "ShieldAlert",
    clients: ["NPCIL", "Power Mech Projects", "Engenius Erectors"]
  },
  {
    name: "Thermal Utility Plants",
    description: "Major turbine overhauling and compensatory bellow replacements at mega utility stations (e.g., KPCL RTPS Raichur 210MW/250MW, NALCO CPP Angul 120MW).",
    icon: "FlameKindling",
    clients: ["KPCL (RTPS/BTPS)", "BHEL", "NALCO", "TANGEDCO"]
  },
  {
    name: "Iron, Steel & Heavy Metals",
    description: "Overhauling 100MW captive power plants, blast furnace turbines, and generators for steel majors like JSW Steel and Aditya Birla Hindalco.",
    icon: "Cpu",
    clients: ["JSW Steel", "Hindalco Industries", "Rungta Mines", "Beekay Steel"]
  },
  {
    name: "Chemicals & Petrochemicals",
    description: "Erection, maintenance, and bearing replacement of utility turbines for refineries and process chemical plants (e.g., Reliance Vadodara, MRPL-ONGC, Deepak Phenolics).",
    icon: "Droplets",
    clients: ["Reliance Industries (RIL)", "MRPL-ONGC", "Deepak Phenolics", "Meghmani Finechem", "UPL Limited"]
  },
  {
    name: "Sugar & Agro Industries",
    description: "Erection and overhauling of biomass and cogeneration turbines (Dhampur Sugar, Sukhbir Agro Energy, Pearl Distillery, Shree Kranti Sugar, Green Power Sugar).",
    icon: "Leaf",
    clients: ["Dhampur Sugar Mills", "Sukhbir Agro Energy", "Pearl Distillery", "Shree Kranti Sugar"]
  },
  {
    name: "Paper & Process Industries",
    description: "Erection, alignment, and commissioning of steam turbines for high-capacity continuous paper mills (e.g., ITC PSPD Bhadrachalam, JK Paper).",
    icon: "FileText",
    clients: ["ITC PSPD", "JK Paper", "Ajit Papers"]
  }
];

export const KEY_CLIENTS = [
  "SIEMENS LIMITED",
  "BHEL",
  "NPCIL",
  "TOSHIBA JSW",
  "JSW STEEL",
  "LARSEN & TOUBRO (L&T)",
  "RELIANCE INDUSTRIES LIMITED",
  "ADITYA BIRLA HINDALCO",
  "AMNS INDIA",
  "MRPL-ONGC",
  "NALCO CPP",
  "KARNATAKA POWER CORP (KPCL)",
  "TANGEDCO",
  "ITC LIMITED",
  "JK PAPER",
  "UPL LIMITED",
  "DHAMPUR SUGAR MILLS",
  "SUKHBIR AGRO ENERGY",
  "MEGHMANI FINECHEM",
  "BALAKRISHNA INDUSTRIES (BKT)",
  "RUNGTA MINES LIMITED",
  "MAITHAN ISPAT"
];

export const COMPLETED_PROJECTS: Project[] = [
  {
    id: 1,
    clientName: "NPCIL / Engenius Erectors",
    title: "1000 MW Nuclear Steam Turbine Overhauling",
    capacity: "1000 MWe",
    location: "Kudankulam Nuclear Power Project (KKNPP), Tamil Nadu",
    status: "Completed",
    category: "Nuclear & Utility",
    description: "Overhauling of Low Pressure Cylinder #3, Medium repair of 1000MWe Russian-make Synchronous Turbo Generator (TBB-1000-2T3, Electrosila) without threading out rotor, and overhauling of K-8-0.65ПA Kaluga Turbine feedwater pump."
  },
  {
    id: 2,
    clientName: "BHEL / NALCO CPP",
    title: "120 MW Turbine Medium Overhaul & Rotor Replacement",
    capacity: "120 MW",
    location: "NALCO CPP, Angul, Odisha",
    status: "Completed",
    category: "Nuclear & Utility",
    description: "Medium overhaul of Unit 8 KN Series Turbine & Unit 3 HMN Series Turbine, including additional works of generator rotor replacement and generator overhauling."
  },
  {
    id: 3,
    clientName: "Karnataka Power Corp. Ltd (KPCL)",
    title: "LP Turbine Inlet Compensatory Bellows Replacement",
    capacity: "210 MW / 250 MW",
    location: "Raichur Thermal Power Station (RTPS), Karnataka",
    status: "Completed",
    category: "Nuclear & Utility",
    description: "Replacement of LP turbine inlet compensatory bellows (Left & Right) and A3 Bellows for RTPS Unit 7, and additional metallic expansion bellows replacement in LP flash box line for Unit 8."
  },
  {
    id: 4,
    clientName: "Toshiba JSW Power Systems",
    title: "800 MW Supercritical Turbine Rotor & CV Assembly",
    capacity: "800 MW",
    location: "Toshiba JSW Manufacturing Facility, Chennai",
    status: "Completed",
    category: "Nuclear & Utility",
    description: "Technician services for manufacturing engineering of Turbine Rotor & Control Valve Assembly: Nozzle Diaphragm Vane Polishing (XIKU1 HP & IP Nozzle Nozzle Repair) under Toshiba supervision."
  },
  {
    id: 5,
    clientName: "JSW Steel Limited / MEE",
    title: "100 MW Captive Power Plant Turbine Overhauling",
    capacity: "100 MW",
    location: "JSW Steel, Torngallu, Bellary, Karnataka",
    status: "Completed",
    category: "CPP & Heavy Industry",
    description: "Capital overhauling of 100 MW Steam Turbine (CPP-1) and auxiliary systems, centering, clearances and alignment."
  },
  {
    id: 6,
    clientName: "Siemens Limited / AMNS",
    title: "19 MW SST300 Turbine Major Overhauling",
    capacity: "19 MW",
    location: "ArcelorMittal Nippon Steel (AMNS), Hazira, Gujarat",
    status: "Completed",
    category: "CPP & Heavy Industry",
    description: "Major overhauling of Siemens SST300 19 MW steam turbine generator set, dismantling, sandblasting of rotor/diaphragms, and final boxing up with precise clearances checking."
  },
  {
    id: 7,
    clientName: "ITC PSPD / Siemens",
    title: "36 MW Siemens SST600 Turbine & Gearbox Overhaul",
    capacity: "36 MW",
    location: "ITC Paperboards (PSPD), Bhadrachalam, Telangana",
    status: "Completed",
    category: "Cogeneration & Process",
    description: "Major overhauling of High Pressure Cylinder, Speed Reduction Gearbox, and TDPS Alternator of 36 MWe Siemens supplied Steam Turbine (SST600)."
  },
  {
    id: 8,
    clientName: "Siemens Ltd / Reliance Industries",
    title: "Major Overhauling of RIL VMD STG 3",
    capacity: "6 MW",
    location: "Reliance Industries Limited (RIL), Vadodara, Gujarat",
    status: "Completed",
    category: "CPP & Heavy Industry",
    description: "Major overhauling of steam turbine generator STG 3 at Reliance Industries chemical plant complex."
  },
  {
    id: 9,
    clientName: "Rungta Mines Limited",
    title: "20 MW TG Set Major Overhaul",
    capacity: "20 MW",
    location: "Chaliyama Steel Plant, Jharkhand",
    status: "Completed",
    category: "CPP & Heavy Industry",
    description: "Repairing, maintenance, and major overhaul of 1 x 20 MW steam turbine generator set at Chaliyama Steel Plant."
  },
  {
    id: 10,
    clientName: "Siemens Ltd / UPL Limited",
    title: "8.3 MW BPSTG-1 Turbine & Gearbox Overhauling",
    capacity: "8.3 MW",
    location: "UPL Unit 5, Jhagadia, Bharuch, Gujarat",
    status: "Completed",
    category: "Cogeneration & Process",
    description: "Dismantling of couplings and gear box, blue contact checking, re-assembly of gearbox, high/low speed couplings and final turbine-generator alignment."
  },
  {
    id: 11,
    clientName: "Dhampur Sugar Mills Ltd",
    title: "5.5 MW Siemens Back Pressure Turbine Overhauling",
    capacity: "5.5 MW",
    location: "Dhampur Sugar Mills, Bijnor District, Uttar Pradesh",
    status: "Completed",
    category: "Cogeneration & Process",
    description: "Complete overhauling of 5.5 MW Siemens make SST-200, G22 (45 kg/cm2, 400°C) Back Pressure Turbine, including rotor sandblasting and oil line leak rectification."
  },
  {
    id: 12,
    clientName: "Sukhbir Agro Energy Limited",
    title: "18 MW Siemens Turbine Casing & Internals Removal",
    capacity: "18 MW",
    location: "SAEL Biomass Power Plant, Faridkot, Punjab",
    status: "Completed",
    category: "Cogeneration & Process",
    description: "Turbine top casing and top/bottom internals removal, sandblasting, and final assembly with alignment of 1x18MW Siemens Unit 11 (Paddy Straw based Power Plant)."
  },
  {
    id: 13,
    clientName: "M/s Afrzen Private Limited (International)",
    title: "Manpower Deputation for Steam Turbine Overhaul",
    capacity: "30 MW",
    location: "ANRML Plant, Nigeria (Overseas)",
    status: "Under Progress",
    category: "CPP & Heavy Industry",
    description: "Deputation of specialist engineers, supervisors, and technicians for major overhauling of steam turbine, gearbox, and generator in Nigeria."
  },
  {
    id: 14,
    clientName: "Rain CII Carbon (Vizag) Ltd",
    title: "18 MW STG Erection & Piping Commissioning",
    capacity: "18 MW",
    location: "APSEZ, Atchutapuram, Vishakhapatnam, Andhra Pradesh",
    status: "Completed",
    category: "Cogeneration & Process",
    description: "Erection, testing, and commissioning of 1x18 MW STG, auxiliaries, and related NBIR high-pressure steam piping for Siemens supplied cogeneration power plant."
  },
  {
    id: 15,
    clientName: "BHEL / TANGEDCO",
    title: "69.65 MW Gas Turbine Generator Complete Overhaul",
    capacity: "69.65 MW",
    location: "Kuttalam Gas Turbine Power Station, Tamil Nadu",
    status: "Under Progress",
    category: "Nuclear & Utility",
    description: "Erection, realignment, and overhauling of gas turbine generator casing, shaft seals, and auxiliaries for Tamil Nadu Generation and Distribution Corp."
  }
];

export const MAP_STATES_DATA: Record<string, { stateName: string; projectsCount: number; keyProjects: string[] }> = {
  "IN-AP": {
    stateName: "Andhra Pradesh",
    projectsCount: 12,
    keyProjects: ["Rain CII Carbon Vizag (18MW STG Erection)", "Laurus Labs Vizag (4.55MW MOH)", "Pearl Distillery Singarayakonda (4.22MW Overhaul)"]
  },
  "IN-TN": {
    stateName: "Tamil Nadu",
    projectsCount: 22,
    keyProjects: ["Kudankulam Nuclear Plant (1000MW LP Cylinders/Generator)", "Chettinad Cement (30MW STG Overhaul)", "Kuttalam GTPS (69.65MW Gas Turbine Overhaul)", "Tulsyan NEC Gummidipoondi (38MW/35MW Turbine Overhauls)"]
  },
  "IN-KA": {
    stateName: "Karnataka",
    projectsCount: 18,
    keyProjects: ["KPCL Raichur RTPS Unit 7 & 8 (LP Bellows Replacement)", "JSW Steel Bellary CPP-1 (100MW Capital Overhaul)", "JSW Steel Bellary Unit 2 (130MW Annual Overhaul)", "KPCL Bellary BTPS (500MW Minor Overhaul)", "Janki Corp Bellary (3.5MW Major Overhaul)"]
  },
  "IN-GJ": {
    stateName: "Gujarat",
    projectsCount: 14,
    keyProjects: ["AMNS Hazira (19MW SST300 Major Overhaul)", "Meghmani Finechem Bharuch (36MW SST600 Overhaul)", "Filatex India Dahej (30MW SST-600 Overhaul)", "UPL Jhagadia Unit 5 (8.3MW & 21.6MW Bearing Replacement)", "Deepak Phenolics (30MW Overhaul)", "BKT Bhuj (20MW SST300 Overhaul)", "Kakrapar Atomic Power (2x700MW TG Condenser Platform)"]
  },
  "IN-OD": {
    stateName: "Odisha",
    projectsCount: 9,
    keyProjects: ["NALCO CPP Angul (120MW Unit 8 & 3 Turbine & Rotor Replacement)", "Beekay Steel Cuttack (2x15MW Overhaul)", "Maithan Ispat Jajpur (30MW Turbine & Generator Overhaul)"]
  },
  "IN-CT": {
    stateName: "Chhattisgarh",
    projectsCount: 6,
    keyProjects: ["SBPIL Raipur (30MW Siemens Casing Re-Erection)", "Bhagwati Steel Raipur (10MW Valve Overhaul)", "Shyam Warehouse (MOH Turbine & Generator)", "Vandana Global Raipur (8MW & 36MW Service Engineer Deputation)"]
  },
  "IN-UP": {
    stateName: "Uttar Pradesh",
    projectsCount: 8,
    keyProjects: ["Dhampur Sugar Mills Bijnor (5.5MW Back Pressure Overhaul)", "DCM Shriram Loni (12MW & 13MW Major Overhauls)", "Bajaj Energy (45MW Kundarki, Maqsoodapur, Utraula, Bharkera Overhauls)", "Devpriya Paper Meerut (8.3MW Coupling & Gearbox Overhaul)"]
  },
  "IN-JH": {
    stateName: "Jharkhand",
    projectsCount: 5,
    keyProjects: ["Rungta Mines Chaliyama Site (2x40MW Dismantling & 20MW Overhaul)", "L&T HURL Sindri Fertilizer (1.5MW Erection & Clearances Check)"]
  },
  "IN-PB": {
    stateName: "Punjab",
    projectsCount: 7,
    keyProjects: ["Sukhbir Agro Jaithu/Faridkot (18MW Biomass Turbine Overhauls)", "Sukhbir Agro Ferozpur (18MW Biomass Turbine)", "AB Grain Batala (5.5MW Steam Turbine Overhaul)", "Siemens Bhatinda STG Project"]
  },
  "IN-MH": {
    stateName: "Maharashtra",
    projectsCount: 4,
    keyProjects: ["MSPGCL Paras TPS Akola (250MW Catenaries & Casings Checking)", "Reliance Vadodara Refinery Linkage Projects"]
  }
};
