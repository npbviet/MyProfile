import zipfile
import html

def make_cv_docx(output_path):
    content_types = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
</Types>'''

    rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>'''

    doc_rels = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>'''

    styles = '''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:docDefaults>
    <w:rPrDefault>
      <w:rPr>
        <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/>
        <w:sz w:val="21"/>
        <w:color w:val="222222"/>
      </w:rPr>
    </w:rPrDefault>
    <w:pPrDefault>
      <w:pPr>
        <w:spacing w:line="276" w:lineRule="auto" w:before="50" w:after="50"/>
      </w:pPr>
    </w:pPrDefault>
  </w:docDefaults>
</w:styles>'''

    # Builder for document.xml
    p_elements = []

    def add_p(runs, before=50, after=50, align="left", left_indent=0):
        jc = f'<w:jc w:val="{align}"/>' if align != "left" else ""
        ind = f'<w:ind w:left="{left_indent}"/>' if left_indent > 0 else ""
        pPr = f'<w:pPr><w:spacing w:before="{before}" w:after="{after}"/>{jc}{ind}</w:pPr>'
        run_xmls = []
        for text, bold, italic, size, color in runs:
            escaped_text = html.escape(text)
            rPr = "<w:rPr>"
            if bold:
                rPr += "<w:b/>"
            if italic:
                rPr += "<w:i/>"
            if size:
                rPr += f'<w:sz w:val="{size}"/>'
            if color:
                rPr += f'<w:color w:val="{color}"/>'
            rPr += "</w:rPr>"
            run_xmls.append(f'<w:r>{rPr}<w:t xml:space="preserve">{escaped_text}</w:t></w:r>')
        p_elements.append(f'<w:p>{pPr}{"".join(run_xmls)}</w:p>')

    def add_heading1(text):
        p_elements.append(f'''<w:p>
          <w:pPr>
            <w:pBdr>
              <w:bottom w:val="single" w:sz="12" w:space="4" w:color="1E3A8A"/>
            </w:pBdr>
            <w:spacing w:before="220" w:after="70"/>
          </w:pPr>
          <w:r>
            <w:rPr>
              <w:b/>
              <w:sz w:val="25"/>
              <w:color w:val="1E3A8A"/>
            </w:rPr>
            <w:t xml:space="preserve">{html.escape(text.upper())}</w:t>
          </w:r>
        </w:p>''')

    def add_bullet(runs):
        bullet_run = ('•  ', True, False, 20, "2563EB")
        add_p([bullet_run] + runs, before=25, after=35, left_indent=360)

    # 1. Header
    add_p([("NGUYEN PHAN BAO VIET", True, False, 34, "0F172A")], before=0, after=20, align="center")
    add_p([("SENIOR SOFTWARE QA/QC ENGINEER | AUTOMATION & MANUAL SPECIALIST", True, False, 22, "2563EB")], before=0, after=70, align="center")
    add_p([
        ("Da Nang, Vietnam  |  ", False, False, 19, "475569"),
        ("viet.nguyen@itdragons.com / npb.viet@gmail.com", True, False, 19, "1E3A8A"),
        ("  |  (+84) 903 717 459", False, False, 19, "475569")
    ], before=0, after=30, align="center")
    add_p([
        ("LinkedIn: linkedin.com/in/npbviet  |  GitHub: github.com/npbviet  |  Portfolio: npbviet.github.io/MyProfile/", False, False, 18, "475569")
    ], before=0, after=120, align="center")

    # 2. Professional Summary
    add_heading1("Professional Summary")
    add_bullet([
        ("Senior Software QA/QC Engineer with nearly 5 years of comprehensive experience ", True, False, 20, "111827"),
        ("across the entire Software Testing Life Cycle (STLC), specializing in high-reliability Banking & Fintech, Enterprise HRM, and AI-powered EdTech platforms.", False, False, 20, "111827")
    ])
    add_bullet([
        ("Hands-on expertise in Automation Testing: ", True, False, 20, "111827"),
        ("designing, architecting, and maintaining scalable End-to-End (E2E) automation frameworks using ", False, False, 20, "111827"),
        ("Playwright (TypeScript)", True, False, 20, "1E3A8A"),
        (", Page Object Model (POM), Data-Driven Testing (DDT), and CI/CD pipelines.", False, False, 20, "111827")
    ])
    add_bullet([
        ("Adept at dual-track quality engineering: ", True, False, 20, "111827"),
        ("seamlessly balancing practical ", False, False, 20, "111827"),
        ("Manual Testing ", True, False, 20, "111827"),
        ("(exploratory, edge-case analysis, boundary value, risk-based verification) and robust ", False, False, 20, "111827"),
        ("Automation Testing ", True, False, 20, "111827"),
        ("to maximize test coverage and shorten release cycles.", False, False, 20, "111827")
    ])
    add_bullet([
        ("Proficient in API & Database Verification: ", True, False, 20, "111827"),
        ("experienced in RESTful API testing (Postman, Playwright APIRequestContext), payload validation, and formulating ", False, False, 20, "111827"),
        ("complex SQL queries ", True, False, 20, "1E3A8A"),
        ("(PostgreSQL, MySQL - joins, subqueries, transaction logs) and NoSQL (MongoDB aggregation pipelines).", False, False, 20, "111827")
    ])
    add_bullet([
        ("High-performing Agile/Scrum collaborator with fluent English communication: ", True, False, 20, "111827"),
        ("confident in conducting sprint reviews, defect triage, and technical discussions directly with developers, product owners, and international stakeholders.", False, False, 20, "111827")
    ])

    # 3. Core Competencies & Technical Skills
    add_heading1("Core Competencies & Technical Skills")
    skills = [
        ("Testing & Methodologies: ", "Manual Testing, Automation Testing (Playwright), Functional Testing, Integration Testing, Regression Testing, API Testing, Data-Driven Testing (DDT), Test Case Design, Defect Lifecycle, Agile/Scrum."),
        ("Databases & Backend: ", "SQL (PostgreSQL, MySQL - complex queries, joins, transactions), NoSQL (MongoDB aggregation), RESTful APIs, Node.js."),
        ("CI/CD & Tools: ", "GitHub Actions, Docker, Git & GitHub, Jira, Confluence, Postman, Playwright Test Runner."),
        ("Domain Expertise: ", "EdTech & AI (Adaptive Learning, Knowledge Gap Diagnosis), Banking & Payment Networks (Clearing & Settlement, Credit Scoring), Enterprise HRM & Payroll."),
        ("Languages: ", "English (IELTS 5.5 - 6.0: Can read technical documents, write emails, formal reports & participate in technical discussions), French (DELF B1 - B2 level), Vietnamese (Native).")
    ]
    for cat, desc in skills:
        add_p([
            (cat, True, False, 20, "0F172A"),
            (desc, False, False, 20, "334155")
        ], before=15, after=15, left_indent=180)

    # 4. Work Experience
    add_heading1("Professional Work Experience")

    # IT Dragons - Senior Milestone
    add_p([
        ("IT DRAGONS  ", True, False, 23, "0F172A"),
        ("— Da Nang, Vietnam", False, True, 20, "64748B")
    ], before=80, after=20)
    add_p([
        ("Senior Software Quality Control (QC) Engineer  |  03/2026 – Present", True, False, 21, "2563EB")
    ], before=0, after=70)

    # Project 1: Enterprise HRM & Payroll System (Senior QC)
    add_p([
        ("Project 1: Enterprise HRM & Payroll System", True, False, 21, "0F172A")
    ], before=60, after=20)
    add_p([
        ("Role: ", True, False, 19, "475569"),
        ("Senior QC Engineer  |  Testing Approach: PLAYWRIGHT AUTOMATION TESTING + MANUAL TESTING", True, False, 19, "059669")
    ], before=0, after=30)
    add_bullet([
        ("Led the overall testing lifecycle; architected comprehensive Test Strategies and E2E automation frameworks using Playwright (TypeScript) with Data-Driven Testing (DDT).", False, False, 20, "111827")
    ])
    add_bullet([
        ("Automated payroll computation verification across complex tax brackets, social insurance deductions, overtime multipliers, and allowances.", False, False, 20, "111827")
    ])
    add_bullet([
        ("Automated cross-browser testing across Chromium, Firefox, and WebKit; implemented automated RBAC security test scripts preventing unauthorized access to confidential salary records.", False, False, 20, "111827")
    ])
    add_bullet([
        ("Executed data validation testing on the intermediate Hub using complex SQL queries, ensuring zero data corruption between raw client imports and backend databases.", False, False, 20, "111827")
    ])

    # IT Dragons - Middle Milestone
    add_p([
        ("IT DRAGONS  ", True, False, 23, "0F172A"),
        ("— Da Nang, Vietnam", False, True, 20, "64748B")
    ], before=90, after=20)
    add_p([
        ("Middle Software Quality Control (QC) Engineer  |  12/2021 – 03/2026", True, False, 21, "2563EB")
    ], before=0, after=70)

    # Project 2: Banking Payment Network (Middle QC)
    add_p([
        ("Project 2: Banking Payment Network", True, False, 21, "0F172A")
    ], before=90, after=20)
    add_p([
        ("Role: ", True, False, 19, "475569"),
        ("Middle QC Engineer  |  Testing Approach: PLAYWRIGHT AUTOMATION TESTING + MANUAL TESTING", True, False, 19, "059669")
    ], before=0, after=30)
    add_bullet([
        ("Designed and maintained a Playwright (TypeScript) E2E Automation Framework following the Page Object Model (POM) pattern.", False, False, 20, "111827")
    ])
    add_bullet([
        ("Automated core authentication: user Login, Logout, session persistence, and invalid credential error handling.", False, False, 20, "111827")
    ])
    add_bullet([
        ("Automated new merchant onboarding flow: registration, business validation, and merchant portal activation.", False, False, 20, "111827")
    ])
    add_bullet([
        ("Automated purchase transaction workflow: payment initiation, card/account input validation, and payment gateway callback verification.", False, False, 20, "111827")
    ])
    add_bullet([
        ("Automated transaction hold features (pre-authorized funds hold reservation, expiration, and status transitions) and refund workflows (full/partial refunds, ledger reversal verification).", False, False, 20, "111827")
    ])
    add_bullet([
        ("Wrote targeted SQL queries to audit transaction status flags and refund logs in the database; executed manual testing for third-party network timeout edge cases.", False, False, 20, "111827")
    ])

    # Project 3: EdTech AI (Middle QC)
    add_p([
        ("Project 3: AI-Powered Adaptive Learning & Knowledge Assessment Platform (EdTech)", True, False, 21, "0F172A")
    ], before=90, after=20)
    add_p([
        ("Role: ", True, False, 19, "475569"),
        ("Middle QC Engineer  |  Testing Approach: 100% MANUAL TESTING & API / DATA VALIDATION", True, False, 19, "D97706")
    ], before=0, after=30)
    add_bullet([
        ("Formulated master Test Strategy and Test Plans covering syllabus/past exam ingestion, dynamic examination UI, error-pattern detection engine, and teacher diagnostic dashboards.", False, False, 20, "111827")
    ])
    add_bullet([
        ("Performed manual functional, exploratory, and boundary testing on real-time exam interfaces (autosave, timer sync, submission integrity).", False, False, 20, "111827")
    ])
    add_bullet([
        ("Conducted extensive API testing using Postman for AI microservices (document parsing, prompt-to-question generation, token thresholds, JSON schema validation).", False, False, 20, "111827")
    ])
    add_bullet([
        ("Validated AI Error-Pattern Recognition & Knowledge Gap Engine: designed simulation matrices for recurring arithmetic slips vs. thematic theory errors, verifying accurate gap classification and remediation plans.", False, False, 20, "111827")
    ])
    add_bullet([
        ("Executed complex SQL & MongoDB queries to audit student telemetry event logs and knowledge gap matrices.", False, False, 20, "111827")
    ])

    # Project 4: Credit Scoring (Middle QC)
    add_p([
        ("Project 4: Credit Scoring & Financial Risk Assessment System", True, False, 21, "0F172A")
    ], before=90, after=20)
    add_p([
        ("Role: ", True, False, 19, "475569"),
        ("Middle QC Engineer  |  Testing Approach: 100% MANUAL TESTING & DATA VALIDATION", True, False, 19, "D97706")
    ], before=0, after=30)
    add_bullet([
        ("Planned and executed comprehensive manual testing strategies for multi-variable credit scoring algorithms and rule engines.", False, False, 20, "111827")
    ])
    add_bullet([
        ("Conducted rigorous Data Validation and Negative Testing with corrupted or anomalous credit bureau records to evaluate system error-handling resilience.", False, False, 20, "111827")
    ])
    add_bullet([
        ("Formulated complex SQL queries to audit score computation tables, validation rules, and compliance audit logs.", False, False, 20, "111827")
    ])

    # AMAZINGIT (Junior / Fresher Software QC Engineer)
    add_p([
        ("AMAZINGIT  ", True, False, 23, "0F172A"),
        ("— Da Nang, Vietnam", False, True, 20, "64748B")
    ], before=90, after=20)
    add_p([
        ("Junior / Fresher Software QC Engineer  |  09/2021 – 12/2021", True, False, 21, "2563EB")
    ], before=0, after=50)
    add_bullet([
        ("Analyzed business requirements, designed detailed test cases and test scenarios for an internal CRM web application.", False, False, 20, "111827")
    ])
    add_bullet([
        ("Executed manual functional, UI/UX, and regression testing across sprint cycles to identify defects and ensure requirement alignment.", False, False, 20, "111827")
    ])
    add_bullet([
        ("Performed basic API testing using Postman to validate CRUD endpoints, HTTP status codes, and JSON response payloads.", False, False, 20, "111827")
    ])
    add_bullet([
        ("Wrote basic SQL queries (SELECT, WHERE, JOIN) to prepare test data and verify database integrity.", False, False, 20, "111827")
    ])
    add_bullet([
        ("Logged, tracked, and verified defect lifecycles in Jira; collaborated with development team in Agile standups.", False, False, 20, "111827")
    ])
    add_bullet([
        ("Skills utilized: Functional Testing, Regression Testing, Test Case Design, API Testing (Postman), SQL, Jira, Agile/Scrum.", False, True, 20, "334155")
    ])

    # 5. Education
    add_heading1("Education")
    add_p([
        ("FUNiX  ", True, False, 21, "0F172A"),
        ("— Web Fullstack Developer Certificate Program  |  02/2020 – 02/2022", False, False, 20, "334155")
    ], before=40, after=20)
    add_bullet([
        ("Completed the FUNiX Web Fullstack Developer Certificate Program (GPA: 8.4 / 10).", False, False, 20, "111827")
    ])

    doc_xml = f'''<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    {''.join(p_elements)}
    <w:sectPr>
      <w:pgSz w:w="11906" w:h="16838"/>
      <w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134" w:header="720" w:footer="720" w:gutter="0"/>
    </w:sectPr>
  </w:body>
</w:document>'''

    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as z:
        z.writestr('[Content_Types].xml', content_types)
        z.writestr('_rels/.rels', rels)
        z.writestr('word/_rels/document.xml.rels', doc_rels)
        z.writestr('word/styles.xml', styles)
        z.writestr('word/document.xml', doc_xml)
    print(f"Generated {output_path} successfully.")

if __name__ == "__main__":
    make_cv_docx("/home/katteam/IdeaProjects/MyProfile/CV_Senior_QC_VietNguyen.docx")
