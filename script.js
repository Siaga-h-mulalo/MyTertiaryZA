// ============================================================
// DATA
// ============================================================
const institutions = [{
    id: 1,
    name: "University of Cape Town",
    abbr: "UCT",
    type: "University",
    province: "Western Cape",
    city: "Cape Town",
    description: "A leading research-intensive university known for academic excellence, innovation, and strong programmes across science, engineering, medicine, commerce, law, and the humanities.",
    logo: "https://mb.usaf.ac.za/wp-content/uploads/2017/02/uct.jpg",
    website: "https://www.uct.ac.za/",
    appUrl: "https://applyonline.uct.ac.za/",
    prospectusLink: "https://www.uct.ac.za/students/prospective-students/undergraduate-prospectus",
    prospectusYear: "2026/2027",
    appOpenDate: "April 2026",
    appCloseDate: "September 2026",
    appFee: "R100",
    appPeriodOpen: "April",
    appPeriodClose: "September",
    status: "open"
}, {
    id: 2,
    name: "University of the Witwatersrand",
    abbr: "Wits",
    type: "University",
    province: "Gauteng",
    city: "Johannesburg",
    description: "A research-driven university recognised for academic excellence and strong programmes in medicine, engineering, science, commerce, law, and the humanities.",
    logo: "https://mb.usaf.ac.za/wp-content/uploads/2017/02/wits.jpg",
    website: "https://www.wits.ac.za/",
    appUrl: "https://www.wits.ac.za/applications/",
    prospectusLink: "https://www.wits.ac.za/",
    prospectusYear: "",
    appOpenDate: "",
    appCloseDate: "",
    appFee: "",
    appPeriodOpen: "March",
    appPeriodClose: "September",
    status: "open"
}, {
    id: 3,
    name: "University of Pretoria",
    abbr: "UP",
    type: "University",
    province: "Gauteng",
    city: "Pretoria",
    description: "A comprehensive university offering a wide range of programmes, with strong academic and research opportunities across engineering, health sciences, law, education, business, and science.",
    logo: "https://mb.usaf.ac.za/wp-content/uploads/2017/02/up.jpg",
    website: "https://www.up.ac.za/",
    appUrl: "https://www.up.ac.za/online-application",
    prospectusLink: "https://www.up.ac.za/",
    prospectusYear: "",
    appOpenDate: "",
    appCloseDate: "",
    appFee: "",
    appPeriodOpen: "April",
    appPeriodClose: "September",
    status: "open"
}, {
    id: 4,
    name: "Stellenbosch University",
    abbr: "SU",
    type: "University",
    province: "Western Cape",
    city: "Stellenbosch",
    description: "A research-intensive university known for academic excellence, innovation, and strong programmes in science, engineering, medicine, agriculture, business, law, and the humanities.",
    logo: "https://mb.usaf.ac.za/wp-content/uploads/2017/02/su.jpg",
    website: "https://www.sun.ac.za/",
    appUrl: "https://student.sun.ac.za/",
    prospectusLink: "https://www.sun.ac.za/",
    prospectusYear: "",
    appOpenDate: "",
    appCloseDate: "",
    appFee: "",
    appPeriodOpen: "March",
    appPeriodClose: "September",
    status: "open"
}, {
    id: 5,
    name: "University of Johannesburg",
    abbr: "UJ",
    type: "University",
    province: "Gauteng",
    city: "Johannesburg",
    description: "A modern, comprehensive university offering career-focused and research-based programmes across engineering, technology, business, health sciences, education, and the humanities.",
    logo: "https://mb.usaf.ac.za/wp-content/uploads/2017/02/uj.jpg",
    website: "https://www.uj.ac.za/",
    appUrl: "https://www.uj.ac.za/apply/",
    prospectusLink: "https://www.uj.ac.za/",
    prospectusYear: "",
    appOpenDate: "",
    appCloseDate: "",
    appFee: "",
    appPeriodOpen: "April",
    appPeriodClose: "October",
    status: "open"
}, {
    id: 6,
    name: "University of KwaZulu-Natal",
    abbr: "UKZN",
    type: "University",
    province: "KwaZulu-Natal",
    city: "Durban",
    description: "A major research university offering diverse programmes with particular strengths in health sciences, engineering, agriculture, science, humanities, law, and commerce.",
    logo: "https://mb.usaf.ac.za/wp-content/uploads/2017/02/ukzn.jpg",
    website: "https://www.ukzn.ac.za/",
    appUrl: "https://applications.ukzn.ac.za/apply/",
    prospectusLink: "https://ukzn.ac.za/",
    prospectusYear: "",
    appOpenDate: "",
    appCloseDate: "",
    appFee: "",
    appPeriodOpen: "April",
    appPeriodClose: "September",
    status: "open"
}, {
    id: 7,
    name: "University of the Free State",
    abbr: "UFS",
    type: "University",
    province: "Free State",
    city: "Bloemfontein",
    description: "A comprehensive university providing diverse academic opportunities across education, law, health sciences, humanities, natural sciences, business, and other disciplines.",
    logo: "https://mb.usaf.ac.za/wp-content/uploads/2017/02/ufs_1.jpg",
    website: "https://www.ufs.ac.za/",
    appUrl: "https://apply.ufs.ac.za/Application/Start",
    prospectusLink: "https://www.ufs.ac.za/",
    prospectusYear: "",
    appOpenDate: "",
    appCloseDate: "",
    appFee: "",
    appPeriodOpen: "April",
    appPeriodClose: "September",
    status: "open"
}, {
    id: 8,
    name: "North-West University",
    abbr: "NWU",
    type: "University",
    province: "North West",
    city: "Potchefstroom",
    description: "A multi-campus university known for quality teaching and research, offering programmes across education, engineering, health sciences, business, law, science, and the humanities.",
    logo: "https://mb.usaf.ac.za/wp-content/uploads/2017/02/nwu.jpg",
    website: "https://www.nwu.ac.za/",
    appUrl: "https://studies.nwu.ac.za/apply",
    prospectusLink: "https://www.nwu.ac.za/",
    prospectusYear: "",
    appOpenDate: "",
    appCloseDate: "",
    appFee: "",
    appPeriodOpen: "April",
    appPeriodClose: "September",
    status: "open"
}, {
    id: 9,
    name: "University of the Western Cape",
    abbr: "UWC",
    type: "University",
    province: "Western Cape",
    city: "Cape Town",
    description: "A research-oriented university committed to academic excellence, innovation, and social impact, with programmes spanning law, health sciences, education, science, and the humanities.",
    logo: "https://mb.usaf.ac.za/wp-content/uploads/2017/02/uwc.jpg",
    website: "https://www.uwc.ac.za/",
    appUrl: "https://www.uwc.ac.za/admission-and-enrolment/apply",
    prospectusLink: "https://www.uwc.ac.za/",
    prospectusYear: "",
    appOpenDate: "",
    appCloseDate: "",
    appFee: "",
    appPeriodOpen: "April",
    appPeriodClose: "September",
    status: "open"
}, {
    id: 10,
    name: "Rhodes University",
    abbr: "RU",
    type: "University",
    province: "Eastern Cape",
    city: "Makhanda",
    description: "A research-intensive university known for its strong academic environment, personalised learning experience, and excellence in journalism, humanities, science, commerce, and research.",
    logo: "https://mb.usaf.ac.za/wp-content/uploads/2017/02/ru.jpg",
    website: "https://www.ru.ac.za/",
    appUrl: "https://ross.ru.ac.za/",
    prospectusLink: "https://www.ru.ac.za/",
    prospectusYear: "",
    appOpenDate: "",
    appCloseDate: "",
    appFee: "",
    appPeriodOpen: "April",
    appPeriodClose: "September",
    status: "open"
}, {
    id: 11,
    name: "University of South Africa",
    abbr: "UNISA",
    type: "University",
    province: "Gauteng",
    city: "Pretoria",
    description: "Africa's leading open-distance learning university, providing flexible study opportunities across a wide range of undergraduate, postgraduate, and professional programmes.",
    logo: "https://mb.usaf.ac.za/wp-content/uploads/2017/02/unisa.jpg",
    website: "https://www.unisa.ac.za/",
    appUrl: "https://www.unisa.ac.za/sites/corporate/default/Apply-for-admission",
    prospectusLink: "https://www.unisa.ac.za/",
    prospectusYear: "",
    appOpenDate: "",
    appCloseDate: "",
    appFee: "",
    appPeriodOpen: "August",
    appPeriodClose: "October",
    status: "open"
}, {
    id: 12,
    name: "University of Limpopo",
    abbr: "UL",
    type: "University",
    province: "Limpopo",
    city: "Polokwane",
    description: "A comprehensive university focused on academic development, research, and community engagement, offering programmes in health sciences, science, education, humanities, management, and agriculture.",
    logo: "https://mb.usaf.ac.za/wp-content/uploads/2017/02/uol.jpg",
    website: "https://www.ul.ac.za/",
    appUrl: "https://www.ul.ac.za/",
    prospectusLink: "https://www.ul.ac.za/",
    prospectusYear: "",
    appOpenDate: "",
    appCloseDate: "",
    appFee: "",
    appPeriodOpen: "April",
    appPeriodClose: "September",
    status: "open"
}, {
    id: 13,
    name: "University of Venda",
    abbr: "UNIVEN",
    type: "University",
    province: "Limpopo",
    city: "Thohoyandou",
    description: "A comprehensive university committed to producing skilled graduates through teaching, research, innovation, and community engagement across science, technology, agriculture, health, education, and humanities.",
    logo: "https://mb.usaf.ac.za/wp-content/uploads/2017/02/univenda.jpg",
    website: "https://www.univen.ac.za/",
    appUrl: "https://www.univen.ac.za/students/how-to-apply/",
    prospectusLink: "https://www.univen.ac.za/wp-content/uploads/2026/03/2027-Univen-Undergraduate-Prospectus.pdf",
    prospectusYear: "2027",
    appOpenDate: "",
    appCloseDate: "",
    appFee: "",
    appPeriodOpen: "April",
    appPeriodClose: "September",
    status: "open"
}, {
    id: 14,
    name: "University of Zululand",
    abbr: "UNIZULU",
    type: "University",
    province: "KwaZulu-Natal",
    city: "Richards Bay",
    description: "A comprehensive university offering career-focused and academic programmes across education, science, commerce, law, agriculture, arts, and humanities.",
    logo: "https://mb.usaf.ac.za/wp-content/uploads/2017/02/uoz.jpg",
    website: "https://www.unizulu.ac.za/",
    appUrl: "https://www.unizulu.ac.za/apply/",
    prospectusLink: "https://www.unizulu.ac.za/",
    prospectusYear: "",
    appOpenDate: "",
    appCloseDate: "",
    appFee: "",
    appPeriodOpen: "April",
    appPeriodClose: "September",
    status: "open"
}, {
    id: 15,
    name: "University of Fort Hare",
    abbr: "UFH",
    type: "University",
    province: "Eastern Cape",
    city: "Alice",
    description: "A historically significant university with a strong tradition of academic development, research, leadership, and community engagement across diverse fields of study.",
    logo: "https://mb.usaf.ac.za/wp-content/uploads/2017/02/ufh.jpg",
    website: "https://www.ufh.ac.za/",
    appUrl: "https://www.ufh.ac.za/apply/",
    prospectusLink: "https://www.ufh.ac.za/",
    prospectusYear: "",
    appOpenDate: "",
    appCloseDate: "",
    appFee: "",
    appPeriodOpen: "April",
    appPeriodClose: "September",
    status: "open"
}, {
    id: 16,
    name: "Walter Sisulu University",
    abbr: "WSU",
    type: "University",
    province: "Eastern Cape",
    city: "Mthatha",
    description: "A comprehensive university focused on accessible higher education, professional development, research, and community impact across health sciences, business, education, science, and humanities.",
    logo: "https://mb.usaf.ac.za/wp-content/uploads/2017/02/wsu.jpg",
    website: "https://www.wsu.ac.za/",
    appUrl: "https://applications.wsu.ac.za/",
    prospectusLink: "https://www.wsu.ac.za/",
    prospectusYear: "",
    appOpenDate: "",
    appCloseDate: "",
    appFee: "",
    appPeriodOpen: "April",
    appPeriodClose: "September",
    status: "open"
}, {
    id: 17,
    name: "Nelson Mandela University",
    abbr: "NMU",
    type: "University",
    province: "Eastern Cape",
    city: "Gqeberha",
    description: "A comprehensive university known for innovation, sustainability, research, and career-focused education across engineering, business, law, health sciences, science, humanities, and environmental studies.",
    logo: "https://mb.usaf.ac.za/wp-content/uploads/2022/03/Nelson-Mandela-University-logo-blue-on-white-standard.png",
    website: "https://www.mandela.ac.za/",
    appUrl: "https://applyonline.mandela.ac.za/",
    prospectusLink: "https://www.mandela.ac.za/",
    prospectusYear: "",
    appOpenDate: "",
    appCloseDate: "",
    appFee: "",
    appPeriodOpen: "April",
    appPeriodClose: "September",
    status: "open"
}, {
    id: 18,
    name: "Cape Peninsula University of Technology",
    abbr: "CPUT",
    type: "University of Technology",
    province: "Western Cape",
    city: "Cape Town",
    description: "A university of technology focused on practical, career-oriented education and innovation, with strong programmes in engineering, ICT, business, design, health sciences, and applied fields.",
    logo: "https://mb.usaf.ac.za/wp-content/uploads/2017/02/cput.jpg",
    website: "https://www.cput.ac.za/",
    appUrl: "https://www.cput.ac.za/study-at-cput/undergraduate/apply",
    prospectusLink: "https://www.cput.ac.za/",
    prospectusYear: "",
    appOpenDate: "",
    appCloseDate: "",
    appFee: "",
    appPeriodOpen: "April",
    appPeriodClose: "September",
    status: "open"
}, {
    id: 19,
    name: "Durban University of Technology",
    abbr: "DUT",
    type: "University of Technology",
    province: "KwaZulu-Natal",
    city: "Durban",
    description: "A university of technology focused on applied learning, innovation, and career development, offering programmes across engineering, health sciences, business, ICT, and creative industries.",
    logo: "https://mb.usaf.ac.za/wp-content/uploads/2017/02/dut.jpg",
    website: "https://www.dut.ac.za/",
    appUrl: "https://www.dut.ac.za/apply/",
    prospectusLink: "https://www.dut.ac.za/",
    prospectusYear: "",
    appOpenDate: "",
    appCloseDate: "",
    appFee: "",
    appPeriodOpen: "April",
    appPeriodClose: "September",
    status: "open"
}, {
    id: 20,
    name: "Tshwane University of Technology",
    abbr: "TUT",
    type: "University of Technology",
    province: "Gauteng",
    city: "Pretoria",
    description: "A leading university of technology providing practical and career-focused education across engineering, ICT, business, science, management, humanities, and the arts.",
    logo: "https://mb.usaf.ac.za/wp-content/uploads/2017/02/tut.jpg",
    website: "https://www.tut.ac.za/",
    appUrl: "https://www.tut.ac.za/apply/",
    prospectusLink: "https://www.tut.ac.za/",
    prospectusYear: "",
    appOpenDate: "",
    appCloseDate: "",
    appFee: "",
    appPeriodOpen: "April",
    appPeriodClose: "September",
    status: "open"
}, {
    id: 21,
    name: "Vaal University of Technology",
    abbr: "VUT",
    type: "University of Technology",
    province: "Gauteng",
    city: "Vanderbijlpark",
    description: "A technology-focused university specialising in practical education, innovation, and skills development across engineering, ICT, business, management, and applied sciences.",
    logo: "https://mb.usaf.ac.za/wp-content/uploads/2017/02/vut.jpg",
    website: "https://www.vut.ac.za/",
    appUrl: "https://www.vut.ac.za/apply-now/",
    prospectusLink: "https://www.vut.ac.za/",
    prospectusYear: "",
    appOpenDate: "",
    appCloseDate: "",
    appFee: "",
    appPeriodOpen: "April",
    appPeriodClose: "September",
    status: "open"
}, {
    id: 22,
    name: "Central University of Technology",
    abbr: "CUT",
    type: "University of Technology",
    province: "Free State",
    city: "Bloemfontein",
    description: "A university of technology focused on innovation, entrepreneurship, practical education, and industry-relevant skills across engineering, technology, business, health sciences, and applied fields.",
    logo: "https://mb.usaf.ac.za/wp-content/uploads/2017/02/cut.jpg",
    website: "https://www.cut.ac.za/",
    appUrl: "https://www.cut.ac.za/apply",
    prospectusLink: "https://www.cut.ac.za/",
    prospectusYear: "",
    appOpenDate: "",
    appCloseDate: "",
    appFee: "",
    appPeriodOpen: "April",
    appPeriodClose: "September",
    status: "open"
}, {
    id: 23,
    name: "Mangosuthu University of Technology",
    abbr: "MUT",
    type: "University of Technology",
    province: "KwaZulu-Natal",
    city: "Durban",
    description: "A university of technology focused on practical learning and skills development, offering programmes in engineering, ICT, management sciences, and other technical disciplines.",
    logo: "https://mb.usaf.ac.za/wp-content/uploads/2017/02/mut.jpg",
    website: "https://www.mut.ac.za/",
    appUrl: "https://www.mut.ac.za/",
    prospectusLink: "https://www.mut.ac.za/",
    prospectusYear: "",
    appOpenDate: "",
    appCloseDate: "",
    appFee: "",
    appPeriodOpen: "April",
    appPeriodClose: "September",
    status: "open"
}, {
    id: 24,
    name: "Sefako Makgatho Health Sciences University",
    abbr: "SMU",
    type: "University",
    province: "Gauteng",
    city: "Pretoria",
    description: "A specialised health sciences university focused on training healthcare professionals and conducting research in medicine, dentistry, pharmacy, nursing, and other health-related fields.",
    logo: "https://www.smu.ac.za/wp-content/uploads/2021/07/SMU-logo.png",
    website: "https://www.smu.ac.za/",
    appUrl: "https://www.smu.ac.za/apply/",
    prospectusLink: "https://www.smu.ac.za/",
    prospectusYear: "",
    appOpenDate: "",
    appCloseDate: "",
    appFee: "",
    appPeriodOpen: "April",
    appPeriodClose: "September",
    status: "open"
}, {
    id: 25,
    name: "Sol Plaatje University",
    abbr: "SPU",
    type: "University",
    province: "Northern Cape",
    city: "Kimberley",
    description: "A young and innovative university offering focused academic programmes while emphasising research, technology, entrepreneurship, education, and skills development.",
    logo: "https://mb.usaf.ac.za/wp-content/uploads/2017/02/spu.jpg",
    website: "https://www.spu.ac.za/",
    appUrl: "https://www.spu.ac.za/index.php/how-to-apply/",
    prospectusLink: "https://www.spu.ac.za/",
    prospectusYear: "",
    appOpenDate: "",
    appCloseDate: "",
    appFee: "",
    appPeriodOpen: "April",
    appPeriodClose: "September",
    status: "open"
}, {
    id: 26,
    name: "University of Mpumalanga",
    abbr: "UMP",
    type: "University",
    province: "Mpumalanga",
    city: "Mbombela",
    description: "A growing comprehensive university focused on quality teaching, research, innovation, and community development across agriculture, education, ICT, business, science, hospitality, and humanities.",
    logo: "https://mb.usaf.ac.za/wp-content/uploads/2017/02/uom.jpg",
    website: "https://www.ump.ac.za/",
    appUrl: "https://www.ump.ac.za/apply/",
    prospectusLink: "https://www.ump.ac.za/",
    prospectusYear: "",
    appOpenDate: "",
    appCloseDate: "",
    appFee: "",
    appPeriodOpen: "April",
    appPeriodClose: "September",
    status: "open"
}];

const fallbackColours = {
    UCT: "1a4b77",
    Wits: "b31b1b",
    SU: "006b3f",
    UP: "003057",
    UJ: "f7941e",
    UKZN: "003d6c",
    UWC: "e31b23",
    UFS: "1a4b77",
    NWU: "8b1a4a",
    UNISA: "005a9c",
    UL: "00843d",
    UNIVEN: "7c3f00",
    UNIZULU: "d4a017",
    UFH: "1a4b77",
    RU: "8b1a4a",
    NMU: "003057",
    UMP: "d4a017",
    SPU: "005a9c",
    SMU: "b31b1b",
    WSU: "1a4b77",
    TUT: "005a9c",
    CPUT: "b31b1b",
    DUT: "003d6c",
    MUT: "00843d",
    CUT: "8b1a4a",
    VUT: "f7941e"
};

const admissionData = {
    UCT: {
        general: "NSC with at least four subjects at achievement level 4 (50–59%) or better. Life Orientation is excluded from the admission score calculation.",
        qualification: "NSC Bachelor's qualification",
        aps: "Varies by programme. UCT calculates a Faculty-specific Admission Score (FAS) using six subjects excluding Life Orientation, with required subjects included where applicable.",
        important: "Each faculty and programme has its own subject requirements and minimum achievement levels. Meeting the general admission requirement does not guarantee admission.",
        subjects: "English (Home Language or First Additional Language), Mathematics, and other subjects depending on the programme. Health Sciences and Engineering require Physical Sciences and Mathematics at specific levels.",
        warning: "Admission requirements vary by programme. Always check the requirements for the specific qualification before applying.",
        extra: "Some programmes require the National Benchmark Tests (NBTs), portfolios (e.g., Architecture, Fine Art), or interviews.",
        source: "https://www.uct.ac.za/students/prospective-students/undergraduate-prospectus",
        verified: "2026-09-02"
    },
    Wits: {
        general: "NSC Bachelor's qualification with at least four subjects at achievement level 4 (50–59%) or better.",
        qualification: "NSC Bachelor's qualification",
        aps: "Varies by programme. Wits uses its own APS calculation (excluding Life Orientation) with a maximum of 48 points across six subjects. Required APS depends on the chosen programme.",
        important: "Programme-specific APS scores and subject requirements apply. Some programmes also require the National Benchmark Tests (NBTs) and/or interviews.",
        subjects: "English (Home Language or First Additional Language) is required for all programmes. Mathematics and/or Physical Sciences are required for many programmes, especially in Science, Engineering, and Health Sciences.",
        warning: "Admission requirements vary by programme. Always check the requirements for the specific qualification before applying.",
        extra: "NBTs are required for most undergraduate programmes. Portfolios or auditions are required for programmes in the Arts.",
        source: "https://www.wits.ac.za/applications/",
        verified: "2026-09-02"
    },
    UP: {
        general: "NSC Bachelor's qualification with at least four subjects at achievement level 4 (50–59%) or better.",
        qualification: "NSC Bachelor's qualification",
        aps: "Varies by programme. UP uses a programme-specific APS calculation. Some programmes require APS 28, while Engineering-related programmes can require APS 30–33 or higher, together with specific Mathematics and Physical Sciences requirements.",
        important: "Each faculty and programme has its own APS, subject, and achievement level requirements. Meeting the general admission requirement does not guarantee admission.",
        subjects: "English (Home Language or First Additional Language), Mathematics, Physical Sciences, Life Sciences, and other subjects depending on the programme.",
        warning: "Admission requirements vary by programme. Always check the requirements for the specific qualification before applying.",
        extra: "Some programmes require NBTs, portfolios, or interviews.",
        source: "https://www.up.ac.za/",
        verified: "2026-09-02"
    },
    SU: {
        general: "NSC Bachelor's qualification with at least four subjects at achievement level 4 (50–59%) or better.",
        qualification: "NSC Bachelor's qualification",
        aps: "Varies by programme. Stellenbosch uses programme/faculty-specific requirements and selection criteria. Individual programmes can have substantially higher requirements than the general admission threshold.",
        important: "Programme-specific admission scores and subject requirements apply. Selection is based on academic performance and, where applicable, additional criteria.",
        subjects: "English (Home Language or First Additional Language), Mathematics, and other subjects depending on the programme. Health Sciences, Engineering, and Science programmes have specific Mathematics and Physical Sciences requirements.",
        warning: "Admission requirements vary by programme. Always check the requirements for the specific qualification before applying.",
        extra: "NBTs are required for most programmes. Portfolios, auditions, or interviews are required for some programmes.",
        source: "https://www.sun.ac.za/",
        verified: "2026-09-02"
    },
    UJ: {
        general: "NSC Bachelor's qualification with at least four subjects at achievement level 4 (50–59%) or better.",
        qualification: "NSC Bachelor's qualification",
        aps: "Varies by programme. UJ uses qualification-specific APS and subject requirements. Programmes can have different APS scores and subject combinations.",
        important: "Each qualification has its own APS, subject, and achievement level requirements. Meeting the general admission requirement does not guarantee admission.",
        subjects: "English (Home Language or First Additional Language), Mathematics, and other subjects depending on the programme. Engineering and Science programmes require Mathematics and Physical Sciences.",
        warning: "Admission requirements vary by programme. Always check the requirements for the specific qualification before applying.",
        extra: "Some programmes require NBTs, portfolios, or interviews.",
        source: "https://www.uj.ac.za/",
        verified: "2026-09-02"
    },
    UKZN: {
        general: "NSC Bachelor's qualification with at least four subjects at achievement level 4 (50–59%) or better.",
        qualification: "NSC Bachelor's qualification",
        aps: "Varies by programme. UKZN uses programme-specific selection information. Meeting minimum requirements does not automatically guarantee a place.",
        important: "Programme requirements and selection criteria vary. Meeting the minimum does not guarantee admission, as selection is competitive.",
        subjects: "English (Home Language or First Additional Language), Mathematics, and other subjects depending on the programme. Health Sciences, Engineering, and Science programmes have specific subject requirements.",
        warning: "Admission requirements vary by programme. Always check the requirements for the specific qualification before applying.",
        extra: "Some programmes require NBTs, portfolios, or interviews.",
        source: "https://ukzn.ac.za/",
        verified: "2026-09-02"
    },
    UWC: {
        general: "NSC Bachelor's qualification with at least four subjects at achievement level 4 (50–59%) or better.",
        qualification: "NSC Bachelor's qualification",
        aps: "Varies by programme. UWC uses programme-specific APS and subject requirements.",
        important: "Each programme has its own APS, subject, and achievement level requirements. Meeting the general admission requirement does not guarantee admission.",
        subjects: "English (Home Language or First Additional Language), Mathematics, and other subjects depending on the programme.",
        warning: "Admission requirements vary by programme. Always check the requirements for the specific qualification before applying.",
        extra: "Some programmes require NBTs, portfolios, or interviews.",
        source: "https://www.uwc.ac.za/",
        verified: "2026-09-02"
    },
    UFS: {
        general: "NSC Bachelor's qualification with at least four subjects at achievement level 4 (50–59%) or better.",
        qualification: "NSC Bachelor's qualification",
        aps: "Varies by programme. UFS uses programme-specific APS and subject requirements.",
        important: "Each programme has its own APS, subject, and achievement level requirements. Meeting the general admission requirement does not guarantee admission.",
        subjects: "English (Home Language or First Additional Language), Mathematics, and other subjects depending on the programme.",
        warning: "Admission requirements vary by programme. Always check the requirements for the specific qualification before applying.",
        extra: "Some programmes require NBTs, portfolios, or interviews.",
        source: "https://www.ufs.ac.za/",
        verified: "2026-09-02"
    },
    NWU: {
        general: "NSC Bachelor's qualification with at least four subjects at achievement level 4 (50–59%) or better.",
        qualification: "NSC Bachelor's qualification",
        aps: "Varies by programme. NWU uses qualification-specific APS and subject requirements. APS and subject requirements can differ between qualifications.",
        important: "Each qualification has its own APS, subject, and achievement level requirements. Meeting the general admission requirement does not guarantee admission.",
        subjects: "English (Home Language or First Additional Language), Mathematics, and other subjects depending on the programme.",
        warning: "Admission requirements vary by programme. Always check the requirements for the specific qualification before applying.",
        extra: "Some programmes require NBTs, portfolios, or interviews.",
        source: "https://www.nwu.ac.za/",
        verified: "2026-09-02"
    },
    UNISA: {
        general: "NSC Bachelor's qualification with at least four subjects at achievement level 4 (50–59%) or better.",
        qualification: "NSC Bachelor's / Diploma / Higher Certificate depending on the qualification",
        aps: "Varies by qualification. UNISA uses qualification-specific APS/AS requirements. For example, some Bachelor of Arts qualifications have APS/AS 20, while other qualifications have different requirements and subject requirements.",
        important: "Each qualification has its own APS/AS, subject, and achievement level requirements. Meeting the general admission requirement does not guarantee admission.",
        subjects: "English (Home Language or First Additional Language) is required for all qualifications. Other subjects depend on the qualification.",
        warning: "Admission requirements vary by programme. Always check the requirements for the specific qualification before applying.",
        extra: "UNISA has a continuous application process for some qualifications. Check the official website for specific dates.",
        source: "https://www.unisa.ac.za/",
        verified: "2026-09-02"
    },
    UL: {
        general: "NSC Bachelor's qualification with at least four subjects at achievement level 4 (50–59%) or better.",
        qualification: "NSC Bachelor's qualification",
        aps: "Varies by programme. UL uses programme-specific APS and subject requirements.",
        important: "Each programme has its own APS, subject, and achievement level requirements. Meeting the general admission requirement does not guarantee admission.",
        subjects: "English (Home Language or First Additional Language), Mathematics, and other subjects depending on the programme.",
        warning: "Admission requirements vary by programme. Always check the requirements for the specific qualification before applying.",
        extra: "Some programmes require NBTs, portfolios, or interviews.",
        source: "https://www.ul.ac.za/",
        verified: "2026-09-02"
    },
    UNIVEN: {
        general: "NSC Bachelor's qualification with at least four subjects at achievement level 4 (50–59%) or better.",
        qualification: "NSC Bachelor's qualification",
        aps: "Minimum 26 for bachelor's degree admission (Life Orientation excluded from APS, subjects below 40% not included in APS calculation). Individual programmes may require additional/higher requirements.",
        important: "This is a general bachelor's admission threshold. Individual programmes may have additional or higher requirements. Meeting the minimum does not guarantee admission.",
        subjects: "English (Home Language or First Additional Language), Mathematics, and other subjects depending on the programme.",
        warning: "Admission requirements vary by programme. Always check the requirements for the specific qualification before applying.",
        extra: "Some programmes require NBTs, portfolios, or interviews.",
        source: "https://www.univen.ac.za/",
        verified: "2026-09-02"
    },
    UNIZULU: {
        general: "NSC Bachelor's qualification with at least four subjects at achievement level 4 (50–59%) or better.",
        qualification: "NSC Bachelor's qualification",
        aps: "Varies by programme. UNIZULU uses programme-specific APS and subject requirements.",
        important: "Each programme has its own APS, subject, and achievement level requirements. Meeting the general admission requirement does not guarantee admission.",
        subjects: "English (Home Language or First Additional Language), Mathematics, and other subjects depending on the programme.",
        warning: "Admission requirements vary by programme. Always check the requirements for the specific qualification before applying.",
        extra: "Some programmes require NBTs, portfolios, or interviews.",
        source: "https://www.unizulu.ac.za/",
        verified: "2026-09-02"
    },
    UFH: {
        general: "NSC Bachelor's qualification with at least four subjects at achievement level 4 (50–59%) or better.",
        qualification: "NSC Bachelor's qualification",
        aps: "Varies by programme. UFH uses programme-specific APS and subject requirements.",
        important: "Each programme has its own APS, subject, and achievement level requirements. Meeting the general admission requirement does not guarantee admission.",
        subjects: "English (Home Language or First Additional Language), Mathematics, and other subjects depending on the programme.",
        warning: "Admission requirements vary by programme. Always check the requirements for the specific qualification before applying.",
        extra: "Some programmes require NBTs, portfolios, or interviews.",
        source: "https://www.ufh.ac.za/",
        verified: "2026-09-02"
    },
    WSU: {
        general: "NSC Bachelor's qualification with at least four subjects at achievement level 4 (50–59%) or better.",
        qualification: "NSC Bachelor's / Diploma / Higher Certificate depending on the qualification",
        aps: "Varies by programme. WSU uses qualification-specific APS and subject requirements.",
        important: "Each qualification has its own APS, subject, and achievement level requirements. Meeting the general admission requirement does not guarantee admission.",
        subjects: "English (Home Language or First Additional Language), Mathematics, and other subjects depending on the programme.",
        warning: "Admission requirements vary by programme. Always check the requirements for the specific qualification before applying.",
        extra: "Some programmes require NBTs, portfolios, or interviews.",
        source: "https://www.wsu.ac.za/",
        verified: "2026-09-02"
    },
    NMU: {
        general: "NSC Bachelor's qualification with at least four subjects at achievement level 4 (50–59%) or better.",
        qualification: "NSC Bachelor's qualification",
        aps: "Varies by programme. NMU uses programme-specific APS and subject requirements.",
        important: "Each programme has its own APS, subject, and achievement level requirements. Meeting the general admission requirement does not guarantee admission.",
        subjects: "English (Home Language or First Additional Language), Mathematics, and other subjects depending on the programme.",
        warning: "Admission requirements vary by programme. Always check the requirements for the specific qualification before applying.",
        extra: "Some programmes require NBTs, portfolios, or interviews.",
        source: "https://www.mandela.ac.za/",
        verified: "2026-09-02"
    },
    RU: {
        general: "NSC Bachelor's qualification with at least four subjects at achievement level 4 (50–59%) or better.",
        qualification: "NSC Bachelor's qualification",
        aps: "Varies by programme. Rhodes uses programme-specific APS and subject requirements.",
        important: "Each programme has its own APS, subject, and achievement level requirements. Meeting the general admission requirement does not guarantee admission.",
        subjects: "English (Home Language or First Additional Language), Mathematics, and other subjects depending on the programme.",
        warning: "Admission requirements vary by programme. Always check the requirements for the specific qualification before applying.",
        extra: "Some programmes require NBTs, portfolios, or interviews.",
        source: "https://www.ru.ac.za/",
        verified: "2026-09-02"
    },
    UMP: {
        general: "NSC Bachelor's qualification with at least four subjects at achievement level 4 (50–59%) or better.",
        qualification: "NSC Bachelor's qualification",
        aps: "Varies by programme. UMP uses programme-specific APS and subject requirements.",
        important: "Each programme has its own APS, subject, and achievement level requirements. Meeting the general admission requirement does not guarantee admission.",
        subjects: "English (Home Language or First Additional Language), Mathematics, and other subjects depending on the programme.",
        warning: "Admission requirements vary by programme. Always check the requirements for the specific qualification before applying.",
        extra: "Some programmes require NBTs, portfolios, or interviews.",
        source: "https://www.ump.ac.za/",
        verified: "2026-09-02"
    },
    SPU: {
        general: "NSC Bachelor's qualification with at least four subjects at achievement level 4 (50–59%) or better.",
        qualification: "NSC Bachelor's qualification",
        aps: "Varies by programme. SPU uses programme-specific APS and subject requirements.",
        important: "Each programme has its own APS, subject, and achievement level requirements. Meeting the general admission requirement does not guarantee admission.",
        subjects: "English (Home Language or First Additional Language), Mathematics, and other subjects depending on the programme.",
        warning: "Admission requirements vary by programme. Always check the requirements for the specific qualification before applying.",
        extra: "Some programmes require NBTs, portfolios, or interviews.",
        source: "https://www.spu.ac.za/",
        verified: "2026-09-02"
    },
    SMU: {
        general: "NSC Bachelor's qualification with at least four subjects at achievement level 4 (50–59%) or better. Health sciences programmes have substantially higher requirements.",
        qualification: "NSC Bachelor's qualification",
        aps: "Varies by programme. Health sciences, medicine, and related programmes have substantially higher APS and subject requirements.",
        important: "Health sciences programmes are highly competitive and have significantly higher requirements than the general admission threshold.",
        subjects: "English (Home Language or First Additional Language), Mathematics, Physical Sciences, Life Sciences. Specific subjects and achievement levels depend on the programme.",
        warning: "Admission requirements vary by programme. Health sciences programmes have substantially higher requirements. Always check the requirements for the specific qualification before applying.",
        extra: "NBTs are required. Some programmes require interviews and additional selection tests.",
        source: "https://www.smu.ac.za/",
        verified: "2026-09-02"
    },
    CPUT: {
        general: "NSC with appropriate achievement levels for the qualification level (Higher Certificate, Diploma, or Bachelor's degree).",
        qualification: "Higher Certificate, Diploma, or Bachelor's degree depending on the programme",
        aps: "Varies by qualification and programme. Higher Certificate: minimum 18–20 APS. Diploma: minimum 22–26 APS. Bachelor's degree: minimum 26–30 APS (programme-specific).",
        important: "Each qualification and programme has its own APS, subject, and achievement level requirements.",
        subjects: "English (Home Language or First Additional Language) is required. Mathematics and/or Physical Sciences are required for many programmes, especially in Engineering and Science.",
        warning: "Admission requirements vary by qualification and programme. Always check the requirements for the specific qualification before applying.",
        extra: "Some programmes require portfolios, interviews, or practical tests.",
        source: "https://www.cput.ac.za/",
        verified: "2026-09-02"
    },
    DUT: {
        general: "NSC with appropriate achievement levels for the qualification level (Higher Certificate, Diploma, or Bachelor's degree).",
        qualification: "Higher Certificate, Diploma, or Bachelor's degree depending on the programme",
        aps: "Varies by qualification and programme. Higher Certificate: minimum 18–20 APS. Diploma: minimum 22–26 APS. Bachelor's degree: minimum 26–30 APS (programme-specific).",
        important: "Each qualification and programme has its own APS, subject, and achievement level requirements.",
        subjects: "English (Home Language or First Additional Language) is required. Mathematics and/or Physical Sciences are required for many programmes.",
        warning: "Admission requirements vary by qualification and programme. Always check the requirements for the specific qualification before applying.",
        extra: "Some programmes require portfolios, interviews, or practical tests.",
        source: "https://www.dut.ac.za/",
        verified: "2026-09-02"
    },
    TUT: {
        general: "NSC with appropriate achievement levels for the qualification level (Higher Certificate, Diploma, or Bachelor's degree).",
        qualification: "Higher Certificate, Diploma, or Bachelor's degree depending on the programme",
        aps: "Varies by qualification and programme. Higher Certificate: minimum 18–20 APS. Diploma: minimum 22–26 APS. Bachelor's degree: minimum 26–30 APS (programme-specific).",
        important: "Each qualification and programme has its own APS, subject, and achievement level requirements.",
        subjects: "English (Home Language or First Additional Language) is required. Mathematics and/or Physical Sciences are required for many programmes.",
        warning: "Admission requirements vary by qualification and programme. Always check the requirements for the specific qualification before applying.",
        extra: "Some programmes require portfolios, interviews, or practical tests.",
        source: "https://www.tut.ac.za/",
        verified: "2026-09-02"
    },
    VUT: {
        general: "NSC with appropriate achievement levels for the qualification level (Higher Certificate, Diploma, or Bachelor's degree).",
        qualification: "Higher Certificate, Diploma, or Bachelor's degree depending on the programme",
        aps: "Varies by qualification and programme. Higher Certificate: minimum 18–20 APS. Diploma: minimum 22–26 APS. Bachelor's degree: minimum 26–30 APS (programme-specific).",
        important: "Each qualification and programme has its own APS, subject, and achievement level requirements.",
        subjects: "English (Home Language or First Additional Language) is required. Mathematics and/or Physical Sciences are required for many programmes.",
        warning: "Admission requirements vary by qualification and programme. Always check the requirements for the specific qualification before applying.",
        extra: "Some programmes require portfolios, interviews, or practical tests.",
        source: "https://www.vut.ac.za/",
        verified: "2026-09-02"
    },
    CUT: {
        general: "NSC with appropriate achievement levels for the qualification level (Higher Certificate, Diploma, or Bachelor's degree).",
        qualification: "Higher Certificate, Diploma, or Bachelor's degree depending on the programme",
        aps: "Varies by qualification and programme. Higher Certificate: minimum 18–20 APS. Diploma: minimum 22–26 APS. Bachelor's degree: minimum 26–30 APS (programme-specific).",
        important: "Each qualification and programme has its own APS, subject, and achievement level requirements.",
        subjects: "English (Home Language or First Additional Language) is required. Mathematics and/or Physical Sciences are required for many programmes.",
        warning: "Admission requirements vary by qualification and programme. Always check the requirements for the specific qualification before applying.",
        extra: "Some programmes require portfolios, interviews, or practical tests.",
        source: "https://www.cut.ac.za/",
        verified: "2026-09-02"
    },
    MUT: {
        general: "NSC with appropriate achievement levels for the qualification level (Higher Certificate, Diploma, or Bachelor's degree).",
        qualification: "Higher Certificate, Diploma, or Bachelor's degree depending on the programme",
        aps: "Varies by qualification and programme. Higher Certificate: minimum 18–20 APS. Diploma: minimum 22–26 APS. Bachelor's degree: minimum 26–30 APS (programme-specific).",
        important: "Each qualification and programme has its own APS, subject, and achievement level requirements.",
        subjects: "English (Home Language or First Additional Language) is required. Mathematics and/or Physical Sciences are required for many programmes.",
        warning: "Admission requirements vary by qualification and programme. Always check the requirements for the specific qualification before applying.",
        extra: "Some programmes require portfolios, interviews, or practical tests.",
        source: "https://www.mut.ac.za/",
        verified: "2026-09-02"
    }
};

const programmeRequirements = {
    "Medicine (MBChB)": { typicalAverage: "75–80%+", maths: "70%+", physSci: "70%+",
        lifeSci: "Not usually required, but Life Sciences recommended", english: "65%+", aps: "36–42+",
        additional: "NBTs, interview, and selection tests often required." },
    "Engineering": { typicalAverage: "60–65%+", maths: "60–70%+", physSci: "60–70%+", lifeSci: "Not usually required",
        english: "50–60%+", aps: "30–38+",
        additional: "NBTs often required. Specific engineering disciplines may have higher requirements." },
    "Computer Science": { typicalAverage: "55–60%+", maths: "60%+", physSci: "50%+ where required",
        lifeSci: "Not usually required", english: "50–60%+", aps: "28–35+",
        additional: "Some universities require NBTs or programming aptitude tests." },
    "Law (LLB)": { typicalAverage: "55–60%+", maths: "Not compulsory (but recommended)", physSci: "Not required",
        lifeSci: "Not required", english: "60%+", aps: "30–36+",
        additional: "NBTs often required. Some universities require additional tests." },
    "BCom Accounting": { typicalAverage: "55–60%+", maths: "60%+", physSci: "Not required", lifeSci: "Not required",
        english: "50–60%+", aps: "30–36+", additional: "NBTs may be required." },
    "Architecture": { typicalAverage: "55–60%+", maths: "50–60%+", physSci: "50%+ where required",
        lifeSci: "Not required", english: "50–60%+", aps: "28–34+",
        additional: "Portfolio may be required. NBTs often required." },
    "Psychology": { typicalAverage: "50–55%+", maths: "Not compulsory", physSci: "Not required",
        lifeSci: "Not required", english: "50–60%+", aps: "25–32+", additional: "NBTs may be required." },
    "Nursing": { typicalAverage: "50–60%+", maths: "40–50%+",
        physSci: "Life Sciences preferred, Physical Sciences not always required", lifeSci: "50%+ (Life Sciences)",
        english: "50%+", aps: "24–30+", additional: "Some universities require NBTs." },
    "BA Humanities": { typicalAverage: "45–50%+", maths: "Not compulsory", physSci: "Not required",
        lifeSci: "Not required", english: "50%+", aps: "20–28+", additional: "NBTs may be required." },
    "Business Management": { typicalAverage: "45–55%+", maths: "40–50%+", physSci: "Not required",
        lifeSci: "Not required", english: "50%+", aps: "22–30+",
        additional: "NBTs may be required by some universities." }
};

const studyFields = [{
    id: "health",
    label: "Health Sciences",
    icon: "fa-heart-pulse",
    description: "Health Sciences focus on the study of the human body, health, disease, and healthcare. This field prepares students for careers in medicine, nursing, pharmacy, therapy, and public health.",
    suitable: "You enjoy biology, chemistry, helping people, solving problems, and have a strong sense of empathy and attention to detail.",
    subjects: "Life Sciences, Physical Sciences, Mathematics, English",
    qualifications: [
        { name: "Medicine (MBChB)", careers: "Doctor, Surgeon, General Practitioner, Medical Specialist",
            learn: "Human anatomy, physiology, pathology, pharmacology, clinical skills, surgery, public health" },
        { name: "Nursing", careers: "Nurse, Nurse Practitioner, Clinical Nurse Specialist, Nurse Educator",
            learn: "Patient care, anatomy, physiology, pharmacology, nursing ethics, community health" },
        { name: "Pharmacy", careers: "Pharmacist, Clinical Pharmacist, Pharmaceutical Researcher, Retail Pharmacist",
            learn: "Medicinal chemistry, pharmacology, pharmaceutics, pharmacy practice, clinical pharmacy" },
        { name: "Physiotherapy", careers: "Physiotherapist, Sports Physiotherapist, Neurological Physiotherapist",
            learn: "Anatomy, biomechanics, exercise therapy, manual therapy, rehabilitation" },
        { name: "Occupational Therapy", careers: "Occupational Therapist, Rehabilitation Specialist, Community Health Worker",
            learn: "Human development, anatomy, psychology, therapeutic activities, rehabilitation" }
    ]
}, {
    id: "science",
    label: "Science, Mathematics & Computing",
    icon: "fa-flask",
    description: "This field covers the study of the natural world, mathematical principles, and computing systems. It develops analytical, problem-solving, and technical skills for a wide range of careers.",
    suitable: "You are curious about how things work, enjoy problem-solving, logic, and have a strong interest in mathematics, technology, or the natural world.",
    subjects: "Mathematics, Physical Sciences, Life Sciences, Computer Applications Technology, English",
    qualifications: [
        { name: "Computer Science", careers: "Software Developer, Systems Analyst, Cybersecurity Specialist, AI Engineer",
            learn: "Programming, algorithms, data structures, databases, software development, AI, computer systems" },
        { name: "Information Technology", careers: "IT Manager, Network Engineer, Database Administrator, Cloud Engineer",
            learn: "Networking, databases, systems administration, cybersecurity, IT project management" },
        { name: "Data Science", careers: "Data Scientist, Data Analyst, Business Intelligence Analyst, Data Engineer",
            learn: "Statistics, machine learning, data visualisation, Python, SQL, big data" },
        { name: "Mathematics", careers: "Mathematician, Actuary, Statistician, Financial Analyst, Teacher",
            learn: "Calculus, algebra, analysis, differential equations, mathematical modelling" },
        { name: "Physics", careers: "Physicist, Research Scientist, Geophysicist, Medical Physicist, Teacher",
            learn: "Mechanics, electromagnetism, thermodynamics, quantum physics, relativity" }
    ]
}, {
    id: "engineering",
    label: "Engineering & Built Environment",
    icon: "fa-gears",
    description: "Engineering applies scientific and mathematical principles to design, build, and maintain structures, machines, systems, and processes. The built environment focuses on the design and construction of buildings and infrastructure.",
    suitable: "You enjoy mathematics and physics, like solving practical problems, designing things, and have a strong attention to detail and creativity.",
    subjects: "Mathematics, Physical Sciences, English, sometimes Geography or Design",
    qualifications: [
        { name: "Civil Engineering", careers: "Civil Engineer, Structural Engineer, Water Engineer, Construction Manager",
            learn: "Structural analysis, fluid mechanics, geotechnical engineering, transport engineering, construction" },
        { name: "Mechanical Engineering", careers: "Mechanical Engineer, Design Engineer, Manufacturing Engineer, Aerospace Engineer",
            learn: "Thermodynamics, fluid mechanics, mechanics, materials science, manufacturing" },
        { name: "Electrical Engineering", careers: "Electrical Engineer, Power Engineer, Control Systems Engineer, Electronics Engineer",
            learn: "Circuits, power systems, control systems, electronics, signal processing, electromagnetics" },
        { name: "Chemical Engineering", careers: "Chemical Engineer, Process Engineer, Petrochemical Engineer, Environmental Engineer",
            learn: "Thermodynamics, fluid mechanics, mass transfer, chemical reactions, process design" },
        { name: "Architecture", careers: "Architect, Urban Designer, Project Manager, Design Consultant",
            learn: "Architectural design, history, building technology, urban design, construction management" }
    ]
}, {
    id: "business",
    label: "Business, Commerce & Management",
    icon: "fa-chart-line",
    description: "Business and commerce focuses on the study of organisations, markets, finance, and management. It prepares students for careers in corporate, entrepreneurial, and public sectors.",
    suitable: "You are interested in how businesses work, enjoy working with numbers and people, have strong communication skills, and like taking initiative.",
    subjects: "Mathematics, English, Accounting, Economics, Business Studies",
    qualifications: [
        { name: "Accounting", careers: "Accountant, Auditor, Tax Consultant, Financial Manager, Controller",
            learn: "Financial accounting, management accounting, taxation, auditing, corporate finance" },
        { name: "Economics", careers: "Economist, Policy Analyst, Financial Analyst, Consultant, Researcher",
            learn: "Microeconomics, macroeconomics, econometrics, economic policy, development economics" },
        { name: "Finance", careers: "Financial Analyst, Investment Banker, Portfolio Manager, Financial Planner",
            learn: "Corporate finance, investments, financial markets, risk management, financial modelling" },
        { name: "Marketing", careers: "Marketing Manager, Brand Manager, Digital Marketer, Market Researcher",
            learn: "Consumer behaviour, branding, digital marketing, market research, advertising" },
        { name: "Business Management", careers: "Business Manager, Operations Manager, General Manager",
            learn: "Organisational behaviour, operations, strategy, marketing, finance, leadership" }
    ]
}, {
    id: "law",
    label: "Law & Legal Studies",
    icon: "fa-scale-balanced",
    description: "Law and legal studies cover the study of legal systems, justice, and the application of law. It prepares students for careers in the legal profession, paralegal work, and related fields.",
    suitable: "You enjoy debate, critical thinking, reading and analysing texts, have strong reasoning skills, and a sense of justice.",
    subjects: "English, History, Life Orientation, Languages, Mathematics",
    qualifications: [
        { name: "LLB (Bachelor of Laws)", careers: "Attorney, Advocate, Legal Advisor, Magistrate, Judge",
            learn: "Criminal law, civil law, constitutional law, legal practice, ethics" },
        { name: "BA Law", careers: "Legal Advisor, Paralegal, Law Clerk, Policy Analyst, Researcher",
            learn: "Legal principles, criminal law, constitutional law, legal writing, legal research" },
        { name: "BCom Law", careers: "Corporate Legal Advisor, Compliance Officer, Legal Consultant",
            learn: "Business law, company law, commercial law, legal research, compliance" },
        { name: "Criminal Justice", careers: "Police Officer, Probation Officer, Correctional Officer",
            learn: "Criminal law, criminology, justice system, corrections, community safety" },
        { name: "Paralegal Studies", careers: "Paralegal, Legal Assistant, Legal Secretary, Law Clerk",
            learn: "Legal systems, legal writing, research, office administration, ethics" }
    ]
}, {
    id: "humanities",
    label: "Humanities & Social Sciences",
    icon: "fa-users",
    description: "Humanities and social sciences study human society, culture, behaviour, and ideas. It develops critical thinking, communication, and analytical skills for diverse careers.",
    suitable: "You are curious about people and society, enjoy reading, writing, and thinking deeply about ideas, history, and culture.",
    subjects: "English, History, Languages, Geography, Life Orientation",
    qualifications: [
        { name: "Bachelor of Arts", careers: "Communications, Public Relations, Teaching, Writing, Researcher",
            learn: "Humanities, social sciences, critical thinking, writing, research" },
        { name: "Psychology", careers: "Psychologist, Counsellor, Human Resources, Researcher, Therapist",
            learn: "Human behaviour, cognition, development, mental health, research methods" },
        { name: "Sociology", careers: "Sociologist, Researcher, Policy Analyst, Social Worker, Educator",
            learn: "Social theory, social issues, research methods, sociology of family, education, and work" },
        { name: "Political Science", careers: "Policy Analyst, Political Advisor, Diplomat, Journalist, Researcher",
            learn: "Political theory, comparative politics, international relations, policy analysis" },
        { name: "History", careers: "Historian, Teacher, Researcher, Museum Curator, Archivist",
            learn: "World history, African history, historical methods, research, historiography" }
    ]
}, {
    id: "arts",
    label: "Arts, Design & Creative Industries",
    icon: "fa-palette",
    description: "Creative industries encompass art, design, media, and performance. This field develops creative, technical, and visual skills for careers in the cultural and creative economy.",
    suitable: "You are creative, have a strong visual or performance sense, enjoy expressing yourself, and like working with your hands or digital tools.",
    subjects: "Art, Design, Drama, Music, History, English, Mathematics",
    qualifications: [
        { name: "Fine Art", careers: "Artist, Gallery Manager, Art Teacher, Illustrator, Visual Artist",
            learn: "Painting, sculpture, drawing, art history, contemporary practice, installation" },
        { name: "Graphic Design", careers: "Graphic Designer, Art Director, Illustrator, UX/UI Designer",
            learn: "Typography, layout, branding, digital design, illustration, design theory" },
        { name: "Fashion Design", careers: "Fashion Designer, Pattern Cutter, Textile Designer, Buyer",
            learn: "Fashion illustration, pattern making, garment construction, textiles, fashion business" },
        { name: "Interior Design", careers: "Interior Designer, Decorator, Exhibition Designer, Design Consultant",
            learn: "Space planning, materials, lighting, furniture design, history, CAD" },
        { name: "Animation", careers: "Animator, Motion Designer, Visual Effects Artist, Game Artist",
            learn: "2D animation, 3D animation, character design, storyboard, motion graphics" }
    ]
}, {
    id: "education",
    label: "Education",
    icon: "fa-chalkboard-user",
    description: "Education prepares students for teaching and education-related careers. It covers educational theory, curriculum development, and practical teaching skills across various phases and subjects.",
    suitable: "You enjoy helping others learn, have patience, strong communication skills, and a passion for shaping young minds.",
    subjects: "English, Mathematics, Life Orientation, subject specialisations",
    qualifications: [
        { name: "Bachelor of Education", careers: "Teacher, Education Specialist, Curriculum Developer",
            learn: "Educational theory, pedagogy, curriculum studies, subject didactics, assessment" },
        { name: "Foundation Phase Education", careers: "Foundation Phase Teacher, Early Childhood Educator",
            learn: "Child development, early literacy, numeracy, creative arts, physical education" },
        { name: "Intermediate Phase Education", careers: "Intermediate Phase Teacher, Subject Specialist",
            learn: "Curriculum, assessment, subject-specific methodology, child development" },
        { name: "Senior Phase Education", careers: "Senior Phase Teacher, Subject Specialist, Head of Department",
            learn: "Subject didactics, curriculum, assessment, adolescent development" },
        { name: "Mathematics Education", careers: "Mathematics Teacher, Maths Specialist, Curriculum Advisor",
            learn: "Mathematics pedagogy, curriculum, assessment, advanced mathematical knowledge" }
    ]
}, {
    id: "agriculture",
    label: "Agriculture, Environment & Natural Resources",
    icon: "fa-seedling",
    description: "This field covers the study of food production, environmental management, and the sustainable use of natural resources. It combines science, technology, and practical skills.",
    suitable: "You enjoy the outdoors, are passionate about nature and sustainability, and have an interest in farming, conservation, or environmental management.",
    subjects: "Life Sciences, Mathematics, Physical Sciences, Geography, Agricultural Sciences",
    qualifications: [
        { name: "Agriculture", careers: "Farm Manager, Agricultural Consultant, Agri-business Manager",
            learn: "Crop production, animal production, farm management, agricultural economics, sustainability" },
        { name: "Environmental Science", careers: "Environmental Scientist, Ecologist, Conservationist, Consultant",
            learn: "Ecology, conservation, environmental chemistry, pollution control, sustainability" },
        { name: "Wildlife Management", careers: "Wildlife Manager, Conservationist, Park Ranger, Ecologist",
            learn: "Wildlife ecology, conservation, animal behaviour, habitat management, policy" },
        { name: "Forestry", careers: "Forester, Timber Manager, Conservationist, Forestry Consultant",
            learn: "Forest ecology, silviculture, timber harvesting, forest management, conservation" },
        { name: "Horticulture", careers: "Horticulturist, Plant Scientist, Nursery Manager, Landscape Designer",
            learn: "Plant cultivation, propagation, nursery management, landscaping, pest control" }
    ]
}, {
    id: "hospitality",
    label: "Hospitality, Tourism, Sport & Recreation",
    icon: "fa-utensils",
    description: "This field covers the management of hospitality, tourism, sport, and leisure services. It combines business skills with hands-on experience in service industries.",
    suitable: "You enjoy working with people, have strong organisational skills, and are interested in travel, food, events, or sport.",
    subjects: "English, Mathematics, Geography, Life Orientation, Business Studies",
    qualifications: [
        { name: "Hospitality Management", careers: "Hotel Manager, Restaurant Manager, Event Manager, Hospitality Consultant",
            learn: "Hotel operations, food and beverage, event management, hospitality law, revenue management" },
        { name: "Tourism Management", careers: "Tourism Manager, Travel Consultant, Destination Manager, Tour Operator",
            learn: "Tourism marketing, destination management, travel operations, sustainable tourism" },
        { name: "Event Management", careers: "Event Manager, Wedding Planner, Conference Organiser, Festival Manager",
            learn: "Event planning, logistics, catering, entertainment, marketing, budgeting" },
        { name: "Sport Management", careers: "Sports Manager, Athletic Director, Event Coordinator, Sports Marketing",
            learn: "Sports business, marketing, event management, facilities management, law" },
        { name: "Culinary Arts", careers: "Chef, Pastry Chef, Food Stylist, Restaurant Manager, Food Writer",
            learn: "Cooking techniques, baking, food safety, kitchen management, menu planning" }
    ]
}];

const resources = [
    { icon: "fa-calculator", title: "How APS Works",
        desc: "Understand how the Admission Point Score is calculated and used by universities." },
    { icon: "fa-file-pen", title: "How to Apply to University",
        desc: "A step-by-step guide to applying for undergraduate study in South Africa." },
    { icon: "fa-compass", title: "How to Choose a Degree",
        desc: "Tips and strategies to help you choose the right qualification for your future." },
    { icon: "fa-building-columns", title: "University vs TVET College",
        desc: "Compare universities, universities of technology, and TVET colleges." },
    { icon: "fa-landmark", title: "NSFAS Information", desc: "Find out about NSFAS funding and how to apply." },
    { icon: "fa-hand-holding-dollar", title: "Bursaries",
        desc: "Explore bursary opportunities for South African students." },
    { icon: "fa-calendar", title: "Application Deadlines",
        desc: "Stay on top of university application deadlines and key dates." },
    { icon: "fa-house", title: "Residence Applications",
        desc: "Learn about university residence options and how to apply." }
];

// ============================================================
// HELPERS
// ============================================================
function escapeHTML(value) {
    return String(value || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g,
            "&quot;").replace(/'/g, "&#039;");
}

function displayValue(value) {
    return value && String(value).trim() ? escapeHTML(value) : "Not currently listed";
}

function generateLogoHTML(inst, modalSize = false) {
    const abbr = encodeURIComponent(inst.abbr);
    const colour = (fallbackColours[inst.abbr] || "123c63").replace("#", "");
    const size = modalSize ? 140 : 80;
    const avatarSrc =
        `https://ui-avatars.com/api/?name=${abbr}&background=${colour}&color=fff&size=${size}&rounded=true&font-size=0.45&bold=true`;
    const src = (inst.logo && inst.logo.trim() !== "") ? inst.logo : avatarSrc;
    return `<img src="${src}" alt="${escapeHTML(inst.name)} logo" loading="lazy" onerror="this.onerror=null; this.src='${avatarSrc}';" style="width:100%;height:100%;object-fit:contain;padding:4px;">`;
}

// ============================================================
// STORAGE
// ============================================================
const STORAGE_KEYS = { SAVED: 'mytertiary_saved', VIEWED: 'mytertiary_viewed', COMPARE: 'mytertiary_compare',
    LAST_READ: 'mytertiary_last_read' };

function getSavedIds() { try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.SAVED)) || []; } catch { return []; } }

function setSavedIds(ids) { localStorage.setItem(STORAGE_KEYS.SAVED, JSON.stringify(ids)); }

function getViewedIds() { try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.VIEWED)) || []; } catch { return []; } }

function setViewedIds(ids) { localStorage.setItem(STORAGE_KEYS.VIEWED, JSON.stringify(ids)); }

function addViewed(id) {
    let viewed = getViewedIds();
    viewed = viewed.filter(v => v !== id);
    viewed.unshift(id);
    if (viewed.length > 10) viewed = viewed.slice(0, 10);
    setViewedIds(viewed);
}

function getCompareIds() { try { return JSON.parse(localStorage.getItem(STORAGE_KEYS.COMPARE)) || []; } catch { return []; } }

function setCompareIds(ids) { localStorage.setItem(STORAGE_KEYS.COMPARE, JSON.stringify(ids)); }

function getLastReadDate() { try { return localStorage.getItem(STORAGE_KEYS.LAST_READ) || ''; } catch { return ''; } }

function setLastReadDate(date) { localStorage.setItem(STORAGE_KEYS.LAST_READ, date); }

// ============================================================
// COMPARE
// ============================================================
let compareIds = getCompareIds();

function updateCompareBadge() {
    const badge = document.getElementById('compareBadge');
    if (badge) badge.textContent = compareIds.length;
}

function toggleCompare(instId) {
    const idx = compareIds.indexOf(instId);
    if (idx > -1) {
        compareIds.splice(idx, 1);
    } else {
        if (compareIds.length >= 4) {
            showToast('You can compare up to 4 universities.');
            return;
        }
        compareIds.push(instId);
    }
    setCompareIds(compareIds);
    updateCompareBadge();
    document.querySelectorAll('.compare-btn').forEach(btn => {
        const id = Number(btn.dataset.id);
        if (id === instId) {
            const isSelected = compareIds.includes(id);
            btn.classList.toggle('compare-selected', isSelected);
            btn.querySelector('i').className =
                `fas ${isSelected ? 'fa-check-circle' : 'fa-arrow-right-arrow-left'}`;
            btn.querySelector('span').textContent = isSelected ? 'Selected' : 'Compare';
        }
    });
    showToast(compareIds.includes(instId) ? 'Added to compare' : 'Removed from compare');
}

function openCompareModal() {
    const container = document.getElementById('compareModalContent');
    if (compareIds.length === 0) {
        container.innerHTML =
            `<div class="compare-empty"><i class="fas fa-arrow-right-arrow-left" style="font-size:2rem;color:var(--gray-300);"></i><p style="margin-top:12px;">No universities selected.</p><p style="font-size:0.85rem;color:var(--gray-500);">Go to <a href="#directory" style="color:var(--gold-dark);font-weight:600;" onclick="closeCompareModal();">Universities</a> and click "Compare".</p></div>`;
    } else {
        const selectedInsts = compareIds.map(id => institutions.find(i => i.id === id)).filter(Boolean);
        if (selectedInsts.length === 0) {
            container.innerHTML = `<div class="compare-empty"><p>Selected universities not found.</p></div>`;
        } else {
            let tableHTML =
                `<div class="compare-table-wrap"><table class="compare-table"><thead><tr><th>Attribute</th>`;
            selectedInsts.forEach(inst => {
                tableHTML +=
                    `<th style="text-align:center;"><div class="univ-logo">${generateLogoHTML(inst, false)}</div><div style="font-weight:800;font-size:0.85rem;">${escapeHTML(inst.name)}</div><div style="font-size:0.65rem;color:var(--gray-500);">${escapeHTML(inst.abbr)}</div></th>`;
            });
            tableHTML += `</tr></thead><tbody>`;
            const attributes = [
                { key: 'type', label: 'Type' },
                { key: 'province', label: 'Province' },
                { key: 'city', label: 'City' },
                { key: 'description', label: 'Description' },
                { key: 'website', label: 'Website', render: (v) => `<a href="${v}" target="_blank">${v}</a>` },
                { key: 'appUrl', label: 'Application Portal', render: (v) => `<a href="${v}" target="_blank">Apply</a>` },
                { key: 'appPeriodOpen', label: 'Applications Open' },
                { key: 'appPeriodClose', label: 'Applications Close' },
                { key: 'appFee', label: 'Application Fee' }
            ];
            attributes.forEach(attr => {
                tableHTML += `<tr><td class="label-cell">${attr.label}</td>`;
                selectedInsts.forEach(inst => {
                    const value = inst[attr.key] || 'N/A';
                    const display = attr.render ? attr.render(value) : escapeHTML(value);
                    tableHTML += `<td>${display}</td>`;
                });
                tableHTML += `</tr>`;
            });
            tableHTML += `<tr><td class="label-cell">Admission Info</td>`;
            selectedInsts.forEach(inst => {
                const data = admissionData[inst.abbr];
                if (data) {
                    const aps = data.aps ? data.aps : 'N/A';
                    const subjects = data.subjects ? data.subjects : 'N/A';
                    tableHTML +=
                        `<td><div><strong>APS:</strong> ${escapeHTML(aps)}</div><div style="font-size:0.7rem;margin-top:4px;"><strong>Subjects:</strong> ${escapeHTML(subjects)}</div></td>`;
                } else {
                    tableHTML += `<td>N/A</td>`;
                }
            });
            tableHTML += `</tr>`;
            tableHTML += `</tbody></table></div>`;
            tableHTML +=
                `<div class="compare-actions"><button class="btn btn-details" onclick="clearCompare();"><i class="fas fa-trash"></i> Clear All</button><div><button class="btn btn-apply" onclick="closeCompareModal();">Close</button></div></div>`;
            container.innerHTML = tableHTML;
        }
    }
    document.getElementById('compareModal').classList.add('show');
    document.getElementById('compareModal').setAttribute('aria-hidden', 'false');
}

function closeCompareModal() {
    document.getElementById('compareModal').classList.remove('show');
    document.getElementById('compareModal').setAttribute('aria-hidden', 'true');
}

function clearCompare() {
    compareIds = [];
    setCompareIds(compareIds);
    updateCompareBadge();
    document.querySelectorAll('.compare-btn').forEach(btn => {
        btn.classList.remove('compare-selected');
        btn.querySelector('i').className = 'fas fa-arrow-right-arrow-left';
        btn.querySelector('span').textContent = 'Compare';
    });
    showToast('Compare list cleared');
    if (document.getElementById('compareModal').classList.contains('show')) openCompareModal();
}

// ============================================================
// NOTIFICATIONS
// ============================================================
function requestNotificationPermission() {
    if (!('Notification' in window)) {
        showToast('Notifications not supported.');
        return;
    }
    if (Notification.permission === 'granted') {
        showToast('Notifications already enabled.');
        sendTestNotification();
        return;
    }
    if (Notification.permission === 'denied') {
        showToast('Notifications blocked. Enable in browser settings.');
        return;
    }
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            showToast('✅ Notifications enabled!');
            document.getElementById('notificationPermissionBtn').textContent = '✅ Enabled';
            document.getElementById('notificationPermissionBtn').classList.add('granted');
            sendTestNotification();
            setTimeout(() => {
                if (Notification.permission === 'granted') {
                    new Notification('MyTertiary ZA', {
                        body: '🎓 New updates for 2027 applications!',
                        icon: 'https://ui-avatars.com/api/?name=MT&background=f5c842&color=fff&size=64&rounded=true'
                    });
                }
            }, 10000);
        } else {
            showToast('Notifications denied.');
        }
    });
}

function sendTestNotification() {
    if (Notification.permission === 'granted') {
        new Notification('MyTertiary ZA', {
            body: '✅ Notifications working!',
            icon: 'https://ui-avatars.com/api/?name=MT&background=f5c842&color=fff&size=64&rounded=true'
        });
    }
}

function updateNotificationUI() {
    const btn = document.getElementById('notificationPermissionBtn');
    if (Notification.permission === 'granted') {
        btn.textContent = '✅ Enabled';
        btn.classList.add('granted');
    } else {
        btn.textContent = 'Enable Notifications';
        btn.classList.remove('granted');
    }
}

// ============================================================
// INBOX
// ============================================================
const adminMessages = [
    { id: 1, sender: "Admin Sia13", date: "2026-09-04", time: "08:30",
        message: "Good morning! Don't forget to check the new university requirements for 2027." },
    { id: 2, sender: "Admin Sia13", date: "2026-09-04", time: "12:15",
        message: "Reminder: The APS calculator has been updated with the latest guidelines." },
    { id: 3, sender: "Admin Sia13", date: "2026-09-03", time: "14:00",
        message: "Welcome to MyTertiary! Start by exploring the 'What Can I Study?' section." },
    { id: 4, sender: "Admin Sia13", date: "2026-09-04", time: "16:45",
        message: "University applications for 2027 are opening soon. Get your documents ready!" }
];

function getUnreadCount() {
    const lastRead = getLastReadDate();
    const today = new Date().toISOString().slice(0, 10);
    const todayMessages = adminMessages.filter(msg => msg.date === today);
    if (!lastRead || lastRead !== today) return todayMessages.length;
    return 0;
}

function updateMessageBadge() {
    const count = getUnreadCount();
    const badge = document.getElementById('messageBadge');
    if (badge) {
        if (count > 0) { badge.textContent = count;
            badge.style.display = 'flex'; } else { badge.style.display = 'none'; }
    }
}

function markMessagesAsRead() {
    const today = new Date().toISOString().slice(0, 10);
    setLastReadDate(today);
    updateMessageBadge();
}

function openInbox() {
    markMessagesAsRead();
    const container = document.getElementById('inboxModalContent');
    const today = new Date().toISOString().slice(0, 10);
    const todaysMessages = adminMessages.filter(msg => msg.date === today);
    if (todaysMessages.length === 0) {
        container.innerHTML = `<div class="dashboard-empty">No new messages from Admin today.</div>`;
    } else {
        let html = '';
        todaysMessages.forEach(msg => {
            html +=
                `<div class="inbox-item"><div class="inbox-avatar"><img src="Sia13.jpeg" alt="Admin" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"><span class="avatar-fallback" style="display:none;"><i class="fas fa-user-shield"></i></span></div><div class="inbox-content"><div class="inbox-header"><span class="inbox-sender"><span class="sender-avatar-sm"><img src="Sia13.jpeg" alt="Admin" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"><span class="fallback" style="display:none;"><i class="fas fa-user-shield"></i></span></span>${escapeHTML(msg.sender)}</span><span class="inbox-time"><i class="far fa-clock"></i> ${escapeHTML(msg.time)}</span></div><div class="inbox-message">${escapeHTML(msg.message)}</div></div></div>`;
        });
        container.innerHTML = html;
    }
    updateNotificationUI();
    document.getElementById('inboxModal').classList.add('show');
    document.getElementById('inboxModal').setAttribute('aria-hidden', 'false');
}

function closeInbox() {
    document.getElementById('inboxModal').classList.remove('show');
    document.getElementById('inboxModal').setAttribute('aria-hidden', 'true');
}

// ============================================================
// DIRECTORY / UNIVERSITY CARDS
// ============================================================
const grid = document.getElementById("cardGrid");
const searchInput = document.getElementById("topSearch");
const provinceFilter = document.getElementById("provinceFilter");
const resultCount = document.getElementById("resultCount");
const modal = document.getElementById("detailModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");
const tabs = document.querySelectorAll(".tab");
let activeTab = "all";
const likedState = {};

function getPeriodStatus(inst) {
    if (inst.appPeriodOpen && inst.appPeriodClose) return "open";
    return "unknown";
}

function renderPeriodStatus(inst) {
    const open = inst.appPeriodOpen || 'Unknown';
    const close = inst.appPeriodClose || 'Unknown';
    const status = getPeriodStatus(inst);
    let statusClass = 'unknown',
        statusText = 'Typical Period';
    if (status === 'open') { statusClass = 'open';
        statusText = 'Application Period'; }
    return `<div class="application-period"><span class="period-label"><i class="fas fa-calendar-alt"></i> Application Period</span><span class="period-dates">Opens: <strong>${escapeHTML(open)}</strong> <span class="sep">•</span> Closes: <strong>${escapeHTML(close)}</strong></span><span class="period-status ${statusClass}">${statusText}</span></div>`;
}

function renderAdmissionCard(inst) {
    const data = admissionData[inst.abbr];
    if (!data) return '';
    let apsLine = data.aps.includes('Varies') ?
        `<span class="highlight-gold">${escapeHTML(data.aps)}</span>` : escapeHTML(data.aps);
    let qualLevels = '';
    if (data.qualification && (data.qualification.includes('Higher Certificate') || inst.type ===
            'University of Technology')) {
        qualLevels =
            `<div style="margin-top:4px;font-size:0.82rem;color:var(--gray-600);"><span style="color:var(--gold-dark);font-weight:600;">Qualification levels:</span> ${escapeHTML(data.qualification)}</div>`;
    }
    return `<div class="admission-card"><div class="req-block"><div class="req-label"><i class="fas fa-university"></i> GENERAL ADMISSION</div><div class="req-value">${escapeHTML(data.general)}</div>${qualLevels}</div><div class="req-block"><div class="req-label"><i class="fas fa-calculator"></i> APS</div><div class="req-value">${apsLine}</div></div><div class="req-block"><div class="req-label"><i class="fas fa-book"></i> SUBJECT REQUIREMENTS</div><div class="req-value">${escapeHTML(data.subjects)}</div></div><div class="req-block"><div class="req-label"><i class="fas fa-circle-check"></i> SELECTION</div><div class="req-value">${escapeHTML(data.extra)}</div></div><div class="req-warning"><i class="fas fa-triangle-exclamation"></i><div><strong>Important:</strong> ${escapeHTML(data.important)}<br><span style="font-size:0.75rem;color:var(--gray-500);">${escapeHTML(data.warning)}</span></div></div><div class="req-actions"><a class="btn btn-details" href="${data.source || inst.prospectusLink || inst.website}" target="_blank"><i class="fas fa-eye"></i> View Programme Requirements</a><a class="btn btn-apply" href="${inst.appUrl}" target="_blank"><i class="fas fa-paper-plane"></i> Apply at Official University</a></div><div style="margin-top:6px;font-size:0.7rem;color:var(--gray-500);"><i class="fas fa-check-circle" style="color:var(--gold-dark);"></i> Last verified: ${escapeHTML(data.verified || '2026-09-02')}</div></div>`;
}

function renderCards(list) {
    if (!list.length) {
        grid.innerHTML =
            `<div class="empty-state"><i class="fas fa-magnifying-glass"></i><h3>No universities found</h3><p>Try another search term or province.</p></div>`;
        resultCount.textContent = "0 institutions";
        return;
    }
    const savedIds = getSavedIds();
    grid.innerHTML = list.map(inst => {
        const isLiked = likedState[inst.id] || false;
        const isSaved = savedIds.includes(inst.id);
        const isCompared = compareIds.includes(inst.id);
        return `
                <article class="institution-card" data-id="${inst.id}">
                    <div class="card-logo">${generateLogoHTML(inst, false)}</div>
                    <h3 class="card-title">${escapeHTML(inst.name)}</h3>
                    <div class="card-abbr">${escapeHTML(inst.abbr)} · ${escapeHTML(inst.type)}</div>
                    <div class="location"><i class="fas fa-location-dot"></i> ${escapeHTML(inst.city)}, ${escapeHTML(inst.province)}</div>
                    <p class="card-description">${escapeHTML(inst.description)}</p>
                    ${renderPeriodStatus(inst)}
                    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:6px;">
                        <button class="btn btn-details detail-btn" type="button" data-id="${inst.id}"><i class="fas fa-eye"></i> Details</button>
                        <a class="btn btn-apply" href="${inst.appUrl}" target="_blank">Apply Now <i class="fas fa-arrow-up-right-from-square" style="margin-left:5px;"></i></a>
                    </div>
                    <div class="card-actions-row">
                        <button class="action-btn like-btn ${isLiked ? 'liked' : ''}" data-id="${inst.id}" title="Like"><i class="fas ${isLiked ? 'fa-thumbs-up' : 'fa-thumbs-up'}"></i> <span>${isLiked ? 'Liked' : 'Like'}</span></button>
                        <button class="action-btn save-btn ${isSaved ? 'saved' : ''}" data-id="${inst.id}" title="Save"><i class="fas ${isSaved ? 'fa-bookmark' : 'fa-bookmark'}"></i> <span>${isSaved ? 'Saved' : 'Save'}</span></button>
                        <button class="action-btn share-btn" data-id="${inst.id}" title="Share"><i class="fas fa-share-alt"></i> <span>Share</span></button>
                        <button class="action-btn compare-btn ${isCompared ? 'compare-selected' : ''}" data-id="${inst.id}" title="Compare"><i class="fas ${isCompared ? 'fa-check-circle' : 'fa-arrow-right-arrow-left'}"></i> <span>${isCompared ? 'Selected' : 'Compare'}</span></button>
                    </div>
                </article>
                `;
    }).join("");
    resultCount.textContent = `${list.length} institution${list.length === 1 ? "" : "s"}`;

    document.querySelectorAll('.detail-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = Number(this.dataset.id);
            const institution = institutions.find(item => item.id === id);
            if (institution) { addViewed(id);
                openModal(institution); }
        });
    });

    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = Number(this.dataset.id);
            likedState[id] = !likedState[id];
            const isLiked = likedState[id];
            this.classList.toggle('liked', isLiked);
            this.querySelector('i').className = `fas ${isLiked ? 'fa-thumbs-up' : 'fa-thumbs-up'}`;
            this.querySelector('span').textContent = isLiked ? 'Liked' : 'Like';
            if (isLiked) showToast('❤️ You liked ' + institutions.find(i => i.id === id)?.name);
        });
    });

    document.querySelectorAll('.save-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = Number(this.dataset.id);
            let saved = getSavedIds();
            const idx = saved.indexOf(id);
            if (idx > -1) { saved.splice(idx, 1);
                showToast('Removed from saved'); } else { saved.push(id);
                showToast('📌 Saved ' + institutions.find(i => i.id === id)?.name); }
            setSavedIds(saved);
            const isSaved = saved.includes(id);
            this.classList.toggle('saved', isSaved);
            this.querySelector('i').className = `fas ${isSaved ? 'fa-bookmark' : 'fa-bookmark'}`;
            this.querySelector('span').textContent = isSaved ? 'Saved' : 'Save';
        });
    });

    document.querySelectorAll('.share-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = Number(this.dataset.id);
            const inst = institutions.find(i => i.id === id);
            if (navigator.share) {
                navigator.share({
                    title: inst.name,
                    text: `Check out ${inst.name} – ${inst.description}`,
                    url: inst.website
                }).catch(() => {});
            } else {
                navigator.clipboard?.writeText(inst.website).then(() => showToast('🔗 Link copied!'))
                    .catch(() => showToast('🔗 Share: ' + inst.website));
            }
        });
    });

    document.querySelectorAll('.compare-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = Number(this.dataset.id);
            toggleCompare(id);
        });
    });
}

function showToast(msg) {
    const existing = document.querySelector('.toast-msg');
    if (existing) existing.remove();
    const div = document.createElement('div');
    div.className = 'toast-msg';
    div.style.cssText =
        `position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:var(--gray-900);color:white;padding:8px 16px;border-radius:30px;font-size:0.8rem;font-weight:600;box-shadow:0 4px 20px rgba(0,0,0,0.2);z-index:3000;max-width:90%;text-align:center;animation:fadeInUp 0.3s ease;`;
    div.textContent = msg;
    document.body.appendChild(div);
    setTimeout(() => { div.style.opacity = '0';
        div.style.transition = 'opacity 0.3s';
        setTimeout(() => div.remove(), 400); }, 2500);
}
const toastStyle = document.createElement("style");
toastStyle.textContent =
    `@keyframes fadeInUp { from { opacity:0; transform:translateX(-50%) translateY(20px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }`;
document.head.appendChild(toastStyle);

function filterInstitutions() {
    const search = searchInput.value.toLowerCase().trim();
    const province = provinceFilter.value;
    const filtered = institutions.filter(inst => {
        let tabMatch = true;
        if (activeTab === "university") tabMatch = inst.type === "University";
        else if (activeTab === "tech") tabMatch = inst.type === "University of Technology";
        const searchableText = [inst.name, inst.abbr, inst.province, inst.city, inst.type, inst.description]
            .join(" ").toLowerCase();
        const searchMatch = !search || searchableText.includes(search);
        const provinceMatch = !province || inst.province === province;
        return tabMatch && searchMatch && provinceMatch;
    });
    renderCards(filtered);
}

function setTab(tab) {
    activeTab = tab;
    tabs.forEach(button => button.classList.toggle("active", button.dataset.tab === tab));
    filterInstitutions();
    const dirSection = document.getElementById('directory');
    if (dirSection) setTimeout(() => dirSection.scrollIntoView({ behavior: 'smooth' }), 50);
}

tabs.forEach(button => button.addEventListener("click", () => setTab(button.dataset.tab)));
searchInput.addEventListener("input", filterInstitutions);
searchInput.addEventListener("keydown", e => { if (e.key === "Enter") filterInstitutions(); });
provinceFilter.addEventListener("change", filterInstitutions);

document.getElementById('exploreUniBtn').addEventListener('click', function(e) { e.preventDefault();
    setTab('all'); });

// ============================================================
// MODAL
// ============================================================
function openModal(inst) {
    const admissionHTML = renderAdmissionCard(inst);
    modalContent.innerHTML = `
                <div class="modal-logo">${generateLogoHTML(inst, true)}</div>
                <h2 id="modalTitle">${escapeHTML(inst.name)}</h2>
                <div class="modal-subtitle"><strong>${escapeHTML(inst.abbr)}</strong> · ${escapeHTML(inst.type)} · ${escapeHTML(inst.city)}, ${escapeHTML(inst.province)}</div>
                <p class="modal-description">${escapeHTML(inst.description)}</p>
                ${admissionHTML}
                <div style="margin-top:14px;">
                    <div class="detail-list">
                        <div class="detail-row"><i class="fas fa-globe"></i><a href="${inst.website}" target="_blank">Official Website</a></div>
                        <div class="detail-row"><i class="fas fa-file-signature"></i><a href="${inst.appUrl}" target="_blank">Official Application Portal</a></div>
                        <div class="detail-row"><i class="fas fa-book-open"></i><a href="${inst.prospectusLink}" target="_blank">Prospectus</a></div>
                        <div class="detail-row"><i class="fas fa-calendar"></i><span>Prospectus: ${displayValue(inst.prospectusYear)}</span></div>
                        <div class="detail-row"><i class="fas fa-calendar-plus"></i><span>Application Opens: ${displayValue(inst.appOpenDate)}</span></div>
                        <div class="detail-row"><i class="fas fa-calendar-xmark"></i><span>Application Closes: ${displayValue(inst.appCloseDate)}</span></div>
                        <div class="detail-row"><i class="fas fa-money-bill"></i><span>Application Fee: ${displayValue(inst.appFee)}</span></div>
                    </div>
                </div>
                <div class="modal-notice"><i class="fas fa-shield-halved"></i> You are being redirected to the institution's official website or application portal. Admission requirements can change. The information provided by MyTertiary ZA is intended as a guide. Always verify the latest requirements with the official university before applying.</div>
                <div class="modal-actions"><button class="btn btn-details" type="button" id="modalCancel">Close</button><a class="btn btn-apply" href="${inst.appUrl}" target="_blank">Continue to Apply <i class="fas fa-arrow-up-right-from-square" style="margin-left:6px;"></i></a></div>
            `;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.getElementById("modalCancel").addEventListener("click", closeModal);
}

function closeModal() { modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true"); }
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", event => { if (event.target === modal) closeModal(); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && modal.classList.contains("show"))
        closeModal(); });

// ============================================================
// CAROUSEL
// ============================================================
const carouselTrack = document.getElementById('carouselTrack');
const carouselDots = document.getElementById('carouselDots');
const prevBtn = document.getElementById('carouselPrev');
const nextBtn = document.getElementById('carouselNext');
let carouselIndex = 0,
    autoSlideInterval;

function buildCarousel() {
    carouselTrack.innerHTML = '';
    carouselDots.innerHTML = '';
    institutions.forEach((inst, idx) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.innerHTML =
            `${generateLogoHTML(inst, false)}<div class="carousel-name">${escapeHTML(inst.name)}</div><div class="carousel-abbr">${escapeHTML(inst.abbr)}</div>`;
        slide.addEventListener('click', () => { document.getElementById('directory').scrollIntoView({ behavior: 'smooth' });
            searchInput.value = inst.name;
            filterInstitutions(); });
        carouselTrack.appendChild(slide);
        const dot = document.createElement('span');
        if (idx === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(idx));
        carouselDots.appendChild(dot);
    });
    updateCarousel();
}

function updateCarousel() {
    const slides = carouselTrack.querySelectorAll('.carousel-slide');
    const slideWidth = slides[0]?.offsetWidth + 16 || 176;
    carouselTrack.style.transform = `translateX(-${carouselIndex * slideWidth}px)`;
    const dots = carouselDots.querySelectorAll('span');
    dots.forEach((dot, i) => dot.classList.toggle('active', i === carouselIndex));
}

function goToSlide(index) {
    const slides = carouselTrack.querySelectorAll('.carousel-slide');
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    carouselIndex = index;
    updateCarousel();
}

function nextSlide() { goToSlide(carouselIndex + 1); }

function prevSlide() { goToSlide(carouselIndex - 1); }
prevBtn.addEventListener('click', () => { clearInterval(autoSlideInterval);
    prevSlide();
    startAutoSlide(); });
nextBtn.addEventListener('click', () => { clearInterval(autoSlideInterval);
    nextSlide();
    startAutoSlide(); });

function startAutoSlide() { if (autoSlideInterval) clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 3000); }
buildCarousel();
setTimeout(() => { updateCarousel();
    startAutoSlide(); }, 100);
let resizeTimer;
window.addEventListener('resize', () => { clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateCarousel, 100); });

// ============================================================
// STUDY FIELDS
// ============================================================
const studyTabsTrack = document.getElementById('studyTabsTrack');
const studyContentContainer = document.getElementById('studyFieldContent');
const qualModal = document.getElementById('qualModal');
const qualModalContent = document.getElementById('qualModalContent');
const qualModalClose = document.getElementById('qualModalClose');
let activeFieldId = studyFields[0]?.id || '';
let slideTimer = null,
    currentScrollOffset = 0;
const slideStep = 160;

function renderStudyFields() {
    const allTabs = [...studyFields, ...studyFields];
    studyTabsTrack.innerHTML = allTabs.map((field, idx) => `
                <button class="study-field-tab ${field.id === activeFieldId && idx < studyFields.length ? 'active' : ''}" data-field="${field.id}" data-index="${idx}" type="button">
                    <i class="fas ${field.icon}"></i> ${field.label}
                </button>
            `).join('');

    studyContentContainer.innerHTML = studyFields.map((field, idx) => `
                <div class="study-field-content ${field.id === activeFieldId ? 'active' : ''}" data-field="${field.id}">
                    <div class="field-intro">
                        <h3><i class="fas ${field.icon}" style="color:var(--gold-dark);margin-right:8px;"></i>${field.label}</h3>
                        <p>${escapeHTML(field.description)}</p>
                        <div class="suitable"><strong>Suitable for:</strong> ${escapeHTML(field.suitable)}</div>
                        <div class="suitable" style="margin-top:4px;"><strong>Recommended school subjects:</strong> ${escapeHTML(field.subjects)}</div>
                    </div>
                    <div class="qual-grid">
                        ${field.qualifications.map((q, qi) => `
                            <div class="qual-item" data-field="${field.id}" data-index="${qi}">
                                <i class="fas fa-graduation-cap"></i>
                                ${escapeHTML(q.name)}
                                <span class="qual-badge">${q.careers.split(',').length} careers</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');

    studyTabsTrack.querySelectorAll('.study-field-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const fieldId = this.dataset.field;
            const idx = parseInt(this.dataset.index);
            if (idx < studyFields.length) {
                setActiveField(fieldId);
                const containerWidth = studyTabsTrack.parentElement.offsetWidth - 80;
                const tabWidth = this.offsetWidth + 4;
                const offset = this.offsetLeft - containerWidth / 2 + tabWidth / 2;
                studyTabsTrack.style.transform = `translateX(-${Math.max(0, offset)}px)`;
                currentScrollOffset = Math.max(0, offset);
            }
        });
    });

    document.querySelectorAll('.qual-item').forEach(item => {
        item.addEventListener('click', () => {
            const fieldId = item.dataset.field;
            const index = parseInt(item.dataset.index);
            const field = studyFields.find(f => f.id === fieldId);
            if (field && field.qualifications[index]) openQualModal(field, index);
        });
    });

    document.getElementById('studyArrowLeft').addEventListener('click', () => {
        currentScrollOffset = Math.max(0, currentScrollOffset - slideStep);
        studyTabsTrack.style.transform = `translateX(-${currentScrollOffset}px)`;
        studyTabsTrack.style.transition = 'transform 0.4s ease';
    });
    document.getElementById('studyArrowRight').addEventListener('click', () => {
        const maxScroll = studyTabsTrack.scrollWidth - studyTabsTrack.parentElement.offsetWidth + 40;
        currentScrollOffset = Math.min(maxScroll, currentScrollOffset + slideStep);
        studyTabsTrack.style.transform = `translateX(-${currentScrollOffset}px)`;
        studyTabsTrack.style.transition = 'transform 0.4s ease';
    });

    startSliding();
}

function setActiveField(fieldId) {
    activeFieldId = fieldId;
    document.querySelectorAll('.study-field-tab').forEach(t => t.classList.remove('active'));
    studyTabsTrack.querySelectorAll(`.study-field-tab[data-field="${fieldId}"]`).forEach(t => t.classList.add(
        'active'));
    document.querySelectorAll('.study-field-content').forEach(c => c.classList.remove('active'));
    document.querySelector(`.study-field-content[data-field="${fieldId}"]`).classList.add('active');
}

function startSliding() {
    if (slideTimer) clearInterval(slideTimer);
    const wrapper = document.getElementById('studyTabsWrapper');
    const track = studyTabsTrack;
    let interval = setInterval(() => {
        if (document.hidden) return;
        if (!track.dataset.paused) {
            let current = parseFloat(track.style.transform.replace('translateX(-', '').replace('px)',
                '')) || 0;
            current += 0.5;
            const maxScroll = track.scrollWidth - track.parentElement.offsetWidth + 40;
            if (current >= maxScroll) current = 0;
            track.style.transform = `translateX(-${current}px)`;
            currentScrollOffset = current;
        }
    }, 40);
    wrapper.addEventListener('mouseenter', () => { track.dataset.paused = 'true'; });
    wrapper.addEventListener('mouseleave', () => { track.dataset.paused = ''; });
}

function openQualModal(field, index) {
    const q = field.qualifications[index];
    const careersList = q.careers.split(',').map(c => c.trim());
    const learnList = q.learn.split(',').map(l => l.trim());
    const req = programmeRequirements[q.name] || null;
    let reqHTML = '';
    if (req) {
        reqHTML = `<div class="qual-requirements-card">
                    <div class="req-row"><span class="req-label">Typical overall average</span><span class="req-value">${escapeHTML(req.typicalAverage)}</span></div>
                    <div class="req-row"><span class="req-label">Mathematics</span><span class="req-value">${escapeHTML(req.maths)}</span></div>
                    <div class="req-row"><span class="req-label">Physical Sciences</span><span class="req-value">${escapeHTML(req.physSci)}</span></div>
                    <div class="req-row"><span class="req-label">Life Sciences</span><span class="req-value">${escapeHTML(req.lifeSci)}</span></div>
                    <div class="req-row"><span class="req-label">English</span><span class="req-value">${escapeHTML(req.english)}</span></div>
                    <div class="req-row"><span class="req-label">Typical APS range</span><span class="req-value"><span class="highlight">${escapeHTML(req.aps)}</span></span></div>
                    ${req.additional ? `<div class="req-row"><span class="req-label">Additional requirements</span><span class="req-value">${escapeHTML(req.additional)}</span></div>` : ''}
                    <div class="req-warning"><i class="fas fa-triangle-exclamation"></i><div><strong>Requirements shown are typical / estimated guidelines.</strong> They vary by university and programme. Meeting these does not guarantee admission. Always check official university requirements.</div></div>
                </div>`;
    } else {
        reqHTML =
            `<div class="qual-requirements-card"><p style="color:var(--gray-500);font-size:0.9rem;"><i class="fas fa-info-circle"></i> Typical requirements for this qualification are not yet available. Please check the individual university websites for specific requirements.</p></div>`;
    }
    const keywords = q.name.split(' ').filter(w => w.length > 3);
    const matchingInsts = institutions.filter(inst => {
        const desc = inst.description.toLowerCase();
        const name = inst.name.toLowerCase();
        return keywords.some(k => desc.includes(k.toLowerCase()) || name.includes(k.toLowerCase()));
    }).slice(0, 6);
    qualModalContent.innerHTML = `
                <h2 id="qualModalTitle">${escapeHTML(q.name)}</h2>
                <div class="modal-subtitle" style="text-align:left;color:var(--gold-dark);"><i class="fas ${field.icon}"></i> ${escapeHTML(field.label)}</div>
                <div class="qual-detail-section"><h4><i class="fas fa-graduation-cap" style="color:var(--gold-dark);"></i> What is this qualification?</h4><p>${escapeHTML(q.name)} is a qualification in the field of ${escapeHTML(field.label)}. It prepares students for careers such as ${careersList.slice(0,3).join(', ')} and many others.</p></div>
                <div class="qual-detail-section"><h4><i class="fas fa-brain" style="color:var(--gold-dark);"></i> What will I learn?</h4><ul>${learnList.map(l => `<li>${escapeHTML(l)}</li>`).join('')}</ul></div>
                <div class="qual-detail-section"><h4><i class="fas fa-briefcase" style="color:var(--gold-dark);"></i> Possible careers</h4><ul>${careersList.map(c => `<li>${escapeHTML(c)}</li>`).join('')}</ul></div>
                <div class="qual-detail-section"><h4><i class="fas fa-school" style="color:var(--gold-dark);"></i> Recommended school subjects</h4><p>${escapeHTML(field.subjects)}</p><p style="font-size:0.8rem;color:var(--gray-500);margin-top:4px;"><i class="fas fa-info-circle"></i> These subjects are commonly required or recommended. Check each institution's specific requirements.</p></div>
                <div class="qual-detail-section"><h4><i class="fas fa-clipboard-list" style="color:var(--gold-dark);"></i> Typical / Estimated Requirements</h4>${reqHTML}</div>
                <div class="qual-detail-section"><h4><i class="fas fa-university" style="color:var(--gold-dark);"></i> Where can I study?</h4>
                    ${matchingInsts.length > 0 ? `<div class="qual-institutions">${matchingInsts.map(inst => `
                        <div class="qual-institution-item">
                            <div class="inst-name">${escapeHTML(inst.name)} (${escapeHTML(inst.abbr)})</div>
                            <div class="inst-req"><span class="aps-badge">APS varies by programme</span> <span style="margin-left:8px;">${escapeHTML(inst.province)}</span></div>
                            <div class="inst-actions"><a href="${inst.appUrl}" target="_blank" class="btn-sm gold"><i class="fas fa-paper-plane"></i> Apply</a><a href="${inst.prospectusLink}" target="_blank" class="btn-sm"><i class="fas fa-book-open"></i> Official Requirements</a></div>
                        </div>
                    `).join('')}</div><p style="font-size:0.75rem;color:var(--gray-400);margin-top:8px;"><i class="fas fa-triangle-exclamation"></i> This is a sample of institutions. Always verify the qualification is offered and check specific admission requirements with each institution.</p>` : `<p style="color:var(--gray-500);">Information about institutions offering this qualification is being verified. Please check individual university websites for programme availability.</p>`}
                </div>
                <div class="disclaimer-box"><i class="fas fa-shield-halved"></i> Requirements shown on MyTertiary ZA are general/estimated guidelines and may vary by university, programme and year. Meeting the stated minimum does not guarantee admission. Universities may use different APS/points calculations, selection criteria, subject combinations and additional requirements. Always confirm the latest official requirements directly with the university before applying.</div>
                <div class="modal-actions" style="margin-top:12px;"><button class="btn btn-details" type="button" id="qualModalCancel">Close</button><a class="btn btn-apply" href="#directory" onclick="setTab('all');document.getElementById('directory').scrollIntoView({behavior:'smooth'});">Explore Universities <i class="fas fa-arrow-right" style="margin-left:6px;"></i></a></div>
            `;
    qualModal.classList.add("show");
    qualModal.setAttribute("aria-hidden", "false");
    document.getElementById("qualModalCancel").addEventListener("click", closeQualModal);
}

function closeQualModal() { qualModal.classList.remove("show");
    qualModal.setAttribute("aria-hidden", "true"); }
qualModalClose.addEventListener("click", closeQualModal);
qualModal.addEventListener("click", event => { if (event.target === qualModal) closeQualModal(); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && qualModal.classList.contains("show"))
        closeQualModal(); });
renderStudyFields();

// ============================================================
// FINDER
// ============================================================
const finderStepsContainer = document.getElementById('finderSteps');
const finderResults = document.getElementById('finderResults');
const interestCategories = [
    { id: 'people', label: 'Working with people', icon: 'fa-handshake' },
    { id: 'technology', label: 'Technology', icon: 'fa-microchip' },
    { id: 'science', label: 'Science', icon: 'fa-flask' },
    { id: 'business', label: 'Business', icon: 'fa-chart-line' },
    { id: 'law', label: 'Law', icon: 'fa-scale-balanced' },
    { id: 'education', label: 'Education', icon: 'fa-chalkboard-user' },
    { id: 'health', label: 'Health', icon: 'fa-heart-pulse' },
    { id: 'engineering', label: 'Engineering', icon: 'fa-gears' },
    { id: 'creativity', label: 'Creativity', icon: 'fa-palette' },
    { id: 'environment', label: 'Environment', icon: 'fa-seedling' },
    { id: 'government', label: 'Government & Policy', icon: 'fa-building-columns' },
    { id: 'research', label: 'Research', icon: 'fa-microscope' }
];
const interestFieldMap = {
    'people': ['health', 'humanities', 'education', 'law', 'hospitality'],
    'technology': ['science', 'engineering', 'business'],
    'science': ['science', 'health', 'agriculture', 'engineering'],
    'business': ['business', 'law', 'humanities'],
    'law': ['law', 'humanities', 'business'],
    'education': ['education', 'humanities', 'health'],
    'health': ['health', 'science', 'humanities'],
    'engineering': ['engineering', 'science', 'business'],
    'creativity': ['arts', 'humanities', 'hospitality'],
    'environment': ['agriculture', 'science', 'humanities'],
    'government': ['humanities', 'law', 'business'],
    'research': ['science', 'health', 'agriculture', 'engineering']
};
let selectedInterests = [];

function renderFinder() {
    finderStepsContainer.innerHTML = `
                <div class="finder-step">
                    <div class="step-label"><i class="fas fa-star"></i> Step 1</div>
                    <h4>What type of work interests you?</h4>
                    <p style="color:var(--gray-500);font-size:0.85rem;margin-bottom:10px;">Select all that apply — this helps us recommend study fields.</p>
                    <div class="finder-options" id="interestOptions">
                        ${interestCategories.map(cat => `<button class="finder-option" data-interest="${cat.id}" type="button"><i class="fas ${cat.icon}"></i> ${cat.label}</button>`).join('')}
                    </div>
                </div>
                <div style="text-align:right;margin-top:10px;">
                    <button class="btn btn-apply" id="getRecommendationsBtn" style="padding:10px 32px;border-radius:40px;"><i class="fas fa-compass"></i> Get Recommendations</button>
                </div>
            `;
    document.querySelectorAll('.finder-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.interest;
            const idx = selectedInterests.indexOf(id);
            if (idx > -1) { selectedInterests.splice(idx, 1);
                btn.classList.remove('selected'); } else { selectedInterests.push(id);
                btn.classList.add('selected'); }
        });
    });
    document.getElementById('getRecommendationsBtn').addEventListener('click', showRecommendations);
}

function showRecommendations() {
    if (selectedInterests.length === 0) {
        finderResults.innerHTML =
            `<div class="result-hint"><i class="fas fa-lightbulb"></i> Please select at least one interest above to see recommendations.</div>`;
        return;
    }
    const fieldIds = new Set();
    selectedInterests.forEach(interest => {
        const mapped = interestFieldMap[interest] || [];
        mapped.forEach(fid => fieldIds.add(fid));
    });
    if (fieldIds.size === 0) studyFields.forEach(f => fieldIds.add(f.id));
    const recommendedFields = studyFields.filter(f => fieldIds.has(f.id));
    if (recommendedFields.length === 0) {
        finderResults.innerHTML =
            `<div class="result-hint"><i class="fas fa-lightbulb"></i> Based on your interests, we recommend exploring all study fields. Try selecting different interests.</div>`;
        return;
    }
    finderResults.innerHTML = `
                <h4><i class="fas fa-compass" style="color:var(--gold-dark);"></i> Based on your interests, you may want to explore:</h4>
                <div style="margin-top:10px;">
                    ${recommendedFields.map(f => `<span class="result-field" style="cursor:pointer;display:inline-block;background:var(--gold-light);padding:6px 14px;border-radius:20px;margin:4px;font-weight:600;font-size:0.85rem;border:1px solid var(--gold);" onclick="document.querySelector('.study-field-tab[data-field=\\'${f.id}\\']')?.click();document.getElementById('whatCanIStudy').scrollIntoView({behavior:'smooth'});"><i class="fas ${f.icon}"></i> ${f.label}</span>`).join('')}
                </div>
                <p style="color:var(--gray-500);font-size:0.85rem;margin-top:14px;"><i class="fas fa-info-circle"></i> This is guidance, not a definitive career test. Explore the fields above to learn more about qualifications and careers.</p>
                <div style="margin-top:12px;"><a href="#whatCanIStudy" class="btn btn-apply" style="padding:8px 24px;border-radius:40px;display:inline-flex;gap:8px;" onclick="document.getElementById('whatCanIStudy').scrollIntoView({behavior:'smooth'});">Explore These Study Fields <i class="fas fa-arrow-right"></i></a></div>
            `;
}
renderFinder();

// ============================================================
// APS CALCULATOR
// ============================================================
const subjectEntriesContainer = document.getElementById('subjectEntries');
const addSubjectBtn = document.getElementById('addSubjectBtn');
const calculateBtn = document.getElementById('calculateApsBtn');
const resetBtn = document.getElementById('resetApsBtn');
const apsResult = document.getElementById('apsResult');
const apsScore = document.getElementById('apsScore');
const apsSubjectsUsed = document.getElementById('apsSubjectsUsed');
const apsGuidance = document.getElementById('apsGuidance');
const excludeLO = document.getElementById('excludeLO');
const MAX_SUBJECTS = 7;

function createSubjectEntry(name = '', percentage = '', isFixed = false) {
    const div = document.createElement('div');
    div.className = 'subject-entry' + (isFixed ? ' fixed' : '');
    div.innerHTML = `
                <input type="text" placeholder="Subject name" value="${escapeHTML(name)}" class="subject-name" ${isFixed ? 'readonly' : ''} />
                <input type="number" placeholder="%" min="0" max="100" value="${percentage}" class="subject-percentage" />
                ${isFixed ? '<span class="fixed-badge"><i class="fas fa-lock"></i> Fixed</span>' : ''}
                <button type="button" class="remove-subject" title="Remove subject"><i class="fas fa-trash-can"></i></button>
            `;
    if (isFixed) div.querySelector('.remove-subject').style.display = 'none';
    const removeBtn = div.querySelector('.remove-subject');
    if (!isFixed) {
        removeBtn.addEventListener('click', () => {
            const total = document.querySelectorAll('.subject-entry:not(.fixed)').length;
            if (total > 1 || document.querySelectorAll('.subject-entry').length > 1) { div.remove();
                updateAddButton(); } else
                alert('You need at least one subject (Life Orientation is fixed).');
        });
    }
    return div;
}

function renderDefaultSubjects() {
    subjectEntriesContainer.innerHTML = '';
    subjectEntriesContainer.appendChild(createSubjectEntry('Life Orientation', 60, true));
    const examples = [{ name: 'English Home Language', perc: 70 }, { name: 'Mathematics', perc: 65 },
        { name: 'Physical Sciences', perc: 58 }, { name: 'Life Sciences', perc: 62 }
    ];
    examples.forEach(subj => subjectEntriesContainer.appendChild(createSubjectEntry(subj.name, subj.perc,
        false)));
    updateAddButton();
}

function updateAddButton() {
    const total = document.querySelectorAll('.subject-entry').length;
    addSubjectBtn.disabled = total >= MAX_SUBJECTS;
    addSubjectBtn.title = total >= MAX_SUBJECTS ? 'Maximum 7 subjects reached' : '';
}
renderDefaultSubjects();
addSubjectBtn.addEventListener('click', () => {
    const total = document.querySelectorAll('.subject-entry').length;
    if (total < MAX_SUBJECTS) { subjectEntriesContainer.appendChild(createSubjectEntry('', '', false));
        updateAddButton(); } else alert(
        `You can add up to ${MAX_SUBJECTS} subjects total (including Life Orientation).`);
});

function getPoints(percentage) {
    if (percentage >= 80) return 7;
    if (percentage >= 70) return 6;
    if (percentage >= 60) return 5;
    if (percentage >= 50) return 4;
    if (percentage >= 40) return 3;
    if (percentage >= 30) return 2;
    if (percentage >= 0) return 1;
    return 0;
}

function calculateAPS() {
    const entries = document.querySelectorAll('.subject-entry');
    const subjects = [];
    let hasError = false;
    entries.forEach(entry => {
        const nameInput = entry.querySelector('.subject-name');
        const percInput = entry.querySelector('.subject-percentage');
        const name = nameInput.value.trim();
        const perc = parseFloat(percInput.value);
        if (!name) { nameInput.style.borderColor = '#ef4444';
            hasError = true; } else nameInput.style.borderColor = '';
        if (isNaN(perc) || perc < 0 || perc > 100) { percInput.style.borderColor = '#ef4444';
            hasError = true; } else {
            percInput.style.borderColor = '';
            subjects.push({ name, percentage: perc, points: getPoints(perc) });
        }
    });
    if (hasError) { alert('Please fill in all subject names and valid percentages (0-100).'); return; }
    let filtered = subjects;
    if (excludeLO.checked) filtered = filtered.filter(s => s.name.toLowerCase() !== 'life orientation');
    if (filtered.length === 0) { alert('No valid subjects to calculate APS. Please add subjects.'); return; }
    filtered.sort((a, b) => b.points - a.points);
    const topSubjects = filtered.slice(0, 6);
    const totalAPS = topSubjects.reduce((sum, s) => sum + s.points, 0);
    const usedCount = topSubjects.length;
    apsScore.textContent = totalAPS;
    apsSubjectsUsed.textContent = `(using best ${usedCount} subject${usedCount > 1 ? 's' : ''})`;
    let guidanceHTML = '';
    if (totalAPS >= 40)
        guidanceHTML =
        `<strong>Excellent! </strong>You are likely eligible for admission to most universities and competitive programmes. Consider institutions like UCT, Wits, Stellenbosch, UP and others.`;
    else if (totalAPS >= 35)
        guidanceHTML =
        `<strong>Good! </strong>You qualify for many programmes at universities such as UJ, NWU, UKZN, UWC. Check specific faculty requirements.`;
    else if (totalAPS >= 30)
        guidanceHTML =
        `<strong>Average. </strong>You may be eligible for some programmes at universities and most universities of technology. Consider CPUT, DUT, TUT, VUT and others.`;
    else if (totalAPS >= 25)
        guidanceHTML =
        `<strong>Below average. </strong>You may not meet the minimum APS for many university programmes, but universities of technology and some foundation programmes may be options. Check with institutions directly.`;
    else
        guidanceHTML =
        `<strong>Low APS. </strong>You may not qualify for most degree programmes. Consider universities of technology, bridging courses, or improving your results. Speak to a career counsellor.`;
    apsGuidance.innerHTML = guidanceHTML;
    apsResult.style.display = 'block';
}
calculateBtn.addEventListener('click', calculateAPS);
resetBtn.addEventListener('click', () => { renderDefaultSubjects();
    apsResult.style.display = 'none';
    document.querySelectorAll('.subject-entry input').forEach(inp => inp.style.borderColor = ''); });
document.addEventListener('keydown', (e) => { if (e.key === 'Enter' && e.target.closest('.subject-entry'))
        calculateAPS(); });
updateAddButton();

// ============================================================
// CHECKLIST
// ============================================================
const checklistItems = [
    "Does the institution offer the programme I actually want?",
    "Do I meet the admission requirements?",
    "Is the programme professionally recognised/accredited where necessary?",
    "Does the programme have practical training?",
    "Are there internship or work-integrated-learning opportunities?",
    "Can I afford the tuition and other costs?",
    "Can I get accommodation?",
    "Is the institution accessible from where I live?",
    "Does the institution provide good student support?",
    "Does the institution provide opportunities that support my career goals?",
    "Would I be comfortable studying there?",
    "Have I checked the official university website?"
];

function renderChecklist() {
    const container = document.getElementById('decision-checklist');
    container.innerHTML = checklistItems.map((item, idx) => `
                <div class="checklist-item" data-idx="${idx}">
                    <span class="check-icon"><i class="fas fa-check"></i></span>
                    <span>${escapeHTML(item)}</span>
                </div>
            `).join('');
    container.querySelectorAll('.checklist-item').forEach(el => {
        el.addEventListener('click', () => el.classList.toggle('checked'));
    });
}
document.getElementById('reset-checklist')?.addEventListener('click', () => {
    document.querySelectorAll('#decision-checklist .checklist-item').forEach(el => el.classList.remove(
        'checked'));
});
renderChecklist();

// ============================================================
// RESOURCES
// ============================================================
const resourceGrid = document.getElementById('resourceGrid');

function renderResources() {
    resourceGrid.innerHTML = resources.map(r => `
                <div class="resource-card" onclick="this.scrollIntoView({behavior:'smooth'});">
                    <div class="res-icon"><i class="fas ${r.icon}"></i></div>
                    <h4>${escapeHTML(r.title)}</h4>
                    <p>${escapeHTML(r.desc)}</p>
                </div>
            `).join('');
}
renderResources();

// ============================================================
// DAILY WORD
// ============================================================
const dailyMessages = [
    { title: "Believe", message: "Believe in the future you are working towards.",
        extra: "Your journey starts with the decisions you make today." },
    { title: "Courage", message: "Fortune Favours The Brave!",
        extra: "Take the next step. Your future starts with the decisions you make today." },
    { title: "Focus", message: "Keep your eyes on the goal.", extra: "Stay focused. Stay consistent." },
    { title: "Persistence", message: "Don't give up now.", extra: "Your hard work will pay off. Keep pushing forward." },
    { title: "Progress", message: "Small steps every day.", extra: "Progress is still progress. Your effort matters." },
    { title: "Hope", message: "Your future is still being written.",
        extra: "Keep your head up. Your story is not over." },
    { title: "Strength", message: "Keep Your Head Up, You're Very Close.",
        extra: "Difficult roads often lead to beautiful destinations." },
    { title: "Believe", message: "Believe that you can.", extra: "You are capable of more than you think." },
    { title: "Courage", message: "Do it scared. Do it anyway.", extra: "Your dreams are bigger than your doubts." },
    { title: "Focus", message: "Stay focused. Stay consistent.", extra: "Your goals are worth the effort." }
];

function getDailyWord() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = (now - start) + (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60000;
    const dayOfYear = Math.floor(diff / 86400000);
    return dailyMessages[dayOfYear % dailyMessages.length];
}

function renderDailyWord() {
    const word = getDailyWord();
    document.getElementById('wordTitleWidget').textContent = word.title;
    document.getElementById('wordMessageWidget').textContent = `"${word.message}"`;
    document.getElementById('wordExtraWidget').textContent = word.extra;
    document.getElementById('topBarWordText').textContent = `"${word.message}"`;
}
renderDailyWord();

// ============================================================
// FLOATING HOME BUTTON
// ============================================================
const floatingHomeBtn = document.getElementById('floatingHomeBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { floatingHomeBtn.classList.add('visible'); } else { floatingHomeBtn.classList
            .remove('visible'); }
});
floatingHomeBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });

// ============================================================
// DASHBOARD
// ============================================================
function renderDashboard() {
    const container = document.getElementById('dashboardModalContent');
    const saved = getSavedIds();
    const viewed = getViewedIds();
    const savedInsts = saved.map(id => institutions.find(i => i.id === id)).filter(Boolean);
    const viewedInsts = viewed.map(id => institutions.find(i => i.id === id)).filter(Boolean);

    let html =
        `<div class="dashboard-stats"><div class="dashboard-stat-card"><span class="stat-number">${saved.length}</span><span class="stat-label"><i class="fas fa-bookmark"></i> Saved</span></div><div class="dashboard-stat-card"><span class="stat-number">${viewed.length}</span><span class="stat-label"><i class="fas fa-eye"></i> Viewed</span></div><div class="dashboard-stat-card"><span class="stat-number">${institutions.length}</span><span class="stat-label"><i class="fas fa-university"></i> Total</span></div></div>`;
    html +=
        `<h4 style="margin-top:16px;font-weight:700;font-size:1rem;"><i class="fas fa-bookmark" style="color:var(--gold-dark);"></i> Saved Universities</h4>`;
    if (savedInsts.length === 0) {
        html +=
            `<div class="dashboard-empty">You haven't saved any universities yet. Browse the <a href="#directory" style="color:var(--gold-dark);font-weight:600;" onclick="closeDashboard();">Universities</a> section and click "Save".</div>`;
    } else {
        html += `<ul class="dashboard-list">`;
        savedInsts.forEach(inst => {
            html +=
                `<li><span class="univ-name">${escapeHTML(inst.name)}</span><span class="univ-action" onclick="closeDashboard(); document.getElementById('directory').scrollIntoView({behavior:'smooth'}); searchInput.value='${escapeHTML(inst.name)}'; filterInstitutions();">View</span></li>`;
        });
        html += `</ul>`;
    }

    html +=
        `<h4 style="margin-top:16px;font-weight:700;font-size:1rem;"><i class="fas fa-clock" style="color:var(--gold-dark);"></i> Recently Viewed</h4>`;
    if (viewedInsts.length === 0) {
        html += `<div class="dashboard-empty">No universities viewed yet. Start exploring!</div>`;
    } else {
        html += `<ul class="dashboard-list">`;
        viewedInsts.forEach(inst => {
            html +=
                `<li><span class="univ-name">${escapeHTML(inst.name)}</span><span class="univ-action" onclick="closeDashboard(); document.getElementById('directory').scrollIntoView({behavior:'smooth'}); searchInput.value='${escapeHTML(inst.name)}'; filterInstitutions();">View</span></li>`;
        });
        html += `</ul>`;
    }

    html +=
        `<div class="dashboard-actions">${saved.length > 0 ? `<button class="btn btn-details" onclick="if(confirm('Clear all saved universities?')){setSavedIds([]); renderDashboard();}"><i class="fas fa-trash"></i> Clear Saved</button>` : ''}${viewed.length > 0 ? `<button class="btn btn-details" onclick="if(confirm('Clear viewing history?')){setViewedIds([]); renderDashboard();}"><i class="fas fa-eraser"></i> Clear History</button>` : ''}<button class="btn btn-apply" onclick="closeDashboard();"><i class="fas fa-close"></i> Close</button></div>`;
    container.innerHTML = html;
}

function openDashboard() { renderDashboard();
    document.getElementById('dashboardModal').classList.add('show');
    document.getElementById('dashboardModal').setAttribute('aria-hidden', 'false'); }

function closeDashboard() { document.getElementById('dashboardModal').classList.remove('show');
    document.getElementById('dashboardModal').setAttribute('aria-hidden', 'true'); }

document.getElementById('dashboardIconBtn')?.addEventListener('click', openDashboard);
document.getElementById('dashboardSidebarLink')?.addEventListener('click', openDashboard);
document.getElementById('dashboardModalClose')?.addEventListener('click', closeDashboard);
document.getElementById('dashboardModal')?.addEventListener('click', function(e) { if (e.target === this)
        closeDashboard(); });

// ============================================================
// COMPARE SIDEBAR LINK & MODAL CLOSE
// ============================================================
document.getElementById('compareSidebarLink')?.addEventListener('click', openCompareModal);
document.getElementById('compareModalClose')?.addEventListener('click', closeCompareModal);
document.getElementById('compareModal')?.addEventListener('click', function(e) { if (e.target === this)
        closeCompareModal(); });
document.addEventListener('keydown', function(e) { if (e.key === 'Escape' && document.getElementById('compareModal')
        .classList.contains('show')) closeCompareModal(); });

// ============================================================
// INBOX EVENT LISTENERS
// ============================================================
document.getElementById('messageBtn')?.addEventListener('click', openInbox);
document.getElementById('inboxModalClose')?.addEventListener('click', closeInbox);
document.getElementById('inboxModal')?.addEventListener('click', function(e) { if (e.target === this)
        closeInbox(); });
document.addEventListener('keydown', function(e) { if (e.key === 'Escape' && document.getElementById('inboxModal')
        .classList.contains('show')) closeInbox(); });

document.getElementById('notificationPermissionBtn')?.addEventListener('click', requestNotificationPermission);

// ============================================================
// LEFT SIDEBAR NAV
// ============================================================
const leftNavItems = document.querySelectorAll('.left-sidebar .nav-item');
const sections = document.querySelectorAll('.feed-card, #home');

function updateActiveNav() {
    let current = '';
    const scrollPos = window.scrollY + 100;
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;
        if (scrollPos >= top && scrollPos < bottom) current = section.id;
    });
    leftNavItems.forEach(link => {
        const sectionId = link.dataset.section;
        link.classList.toggle('active', sectionId === current);
    });
}
window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// ============================================================
// SMOOTH SCROLL
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) { e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' }); }
    });
});

// ============================================================
// INIT
// ============================================================
setTab('all');
updateCompareBadge();
updateMessageBadge();
updateNotificationUI();

if (Notification.permission === 'granted') {
    document.getElementById('notificationPermissionBtn').textContent = '✅ Enabled';
    document.getElementById('notificationPermissionBtn').classList.add('granted');
}

console.log('✅ MyTertiary ZA — All features functional, social links clickable.');
