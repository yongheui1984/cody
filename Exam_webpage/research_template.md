# Deep Research Template: Finance, Accounting and Banking Certifications, Licenses and Exams

## 1. Purpose and how the output is used

The output of this research feeds a single-file HTML web page that:

1. Classifies finance, accounting and banking exams by **difficulty**, by **preparation period**, and by **eligibility requirements**.
2. Recommends exams to a user who enters age, nationality, highest education, work experience (years and field), daily study hours and total months available.

The page runs locally with no server. The research output will be converted into one JavaScript data array, one record per exam. Therefore:

- Follow the record format in Section 6 exactly. Do not rename fields, add fields, or change the allowed values in Section 3.
- Every value must be traceable to a source (Section 2, rule 3).
- Free-text fields are shown to end users on a Korean-language page. **Write every field whose name ends in `_ko` in Korean.** Write all other text (notes to the developer, source notes) in English.

The page logic depends on these fields being machine-readable: `eligibility.paths`, `eligibility.nationality_rule`, `award`, all `hours_*` fields, `min_calendar_months`, `pass_rate_avg_pct`, and the `difficulty` block. Give these the most care.

## 2. Working rules

1. **Reference date.** Record the research date in `as_of` (format `YYYY-MM-DD`). Use information valid on that date, including rule changes announced for the next 12 months.
2. **Official sources first.** Priority order: (a) the exam body's official website, rulebook or candidate handbook; (b) the regulator or government notice; (c) official pass-rate statistics; (d) exam-prep providers and candidate surveys, used only for study hours when no official figure exists. Do not use a blog or forum as the only source for eligibility, fees or pass rates.
3. **Source every value group.** Each record must list sources (Section 6, `sources`). Each source gives the URL, the access date, the source type, and which field groups it supports. Prefer deep links to the exact page over home pages.
4. **Never guess.** If a value cannot be verified, write `unknown` and explain why in `notes_ko` or `unknown_reasons`. Use `null` only when the field does not apply (for example, `age_max` when there is no upper limit). Do not fill a field with a plausible estimate unless the field explicitly allows `researcher_estimate` (study hours only).
5. **Numbers are plain numbers.** No units, commas, ranges or words inside numeric fields. Percentages are numbers from 0 to 100. Years of experience may be decimals (0.5 = six months). Durations are in minutes, hours or months as the field name says.
6. **Dates are ISO** (`YYYY-MM-DD`). Currencies use ISO 4217 codes. Countries use ISO 3166-1 alpha-2 codes (United Kingdom is `GB`).
7. **Conflicts.** When two sources disagree, use the more official or more recent one. Record the disagreement in `notes_ko` and lower the matching confidence value.
8. **One record per exam.** A multi-level exam (for example, Level I to III or Part I and II) is one record with several `stages`. Separate qualifications from the same body (for example, a basic and an advanced credential) are separate records.
9. **Status check.** Confirm every candidate is still offered under that name. If it was abolished, merged or renamed, record the replacement under its current name, or exclude it and list it in the research log (Section 8) with the reason.
10. **Pass rates.** Use the latest 3 to 5 sessions or years. If the exam body does not publish pass rates, write `unknown` and do not use unofficial figures. Do not compute a pass rate from partial data.
11. **Study hours.** Prefer the exam body's own recommendation. If none exists, use a documented survey or exam-prep provider recommendation. Only as the last resort, make your own estimate and say how you derived it. Always set `hours_basis` to match.
12. **Normalize eligibility.** Convert the exam's own wording into the structure in Section 6. Keep the original wording (one sentence) in `source_text`. Anything that cannot be expressed with age, education, work years, work field or nationality goes into `extra_checks_ko`.

## 3. Controlled vocabulary (use these values only)

### 3.1 Education levels (`education_accepted`)

List every level the exam accepts. If the exam has no education requirement, write `[any]`.

| Value | Korean label (shown on the page) | Meaning |
|---|---|---|
| `any` | 제한 없음 | No education requirement |
| `hs_or_below` | 고등학교 졸업 이하 | High school graduate or below |
| `college_enrolled` | 대학 재학(최종학년 아님) | University student, not in the final year |
| `college_final_year` | 대학 최종학년 재학·졸업예정 | Final-year student or expected graduate |
| `associate` | 전문학사 졸업 | Associate / 2-3 year college degree |
| `bachelor` | 학사 졸업 | Bachelor's degree |
| `master` | 석사 졸업 | Master's degree |
| `doctor` | 박사 졸업 | Doctorate |

Accepted levels are listed explicitly because the levels are not strictly ordered. Example: if only bachelor's degree holders and final-year students qualify, write `[college_final_year, bachelor, master, doctor]`. An associate degree is not accepted in that case. A person with a higher degree is normally accepted if the exam accepts the lower one, but still list every level.

### 3.2 Work fields (`work_fields_accepted`)

If any field of experience counts, write `[any]`.

| Value | Korean label |
|---|---|
| `any` | 분야 무관 |
| `banking_finance` | 은행·금융 |
| `securities_asset_mgmt` | 증권·자산운용 |
| `insurance` | 보험 |
| `accounting_tax` | 회계·세무 |
| `corporate_finance` | 일반기업 재무·경리 |
| `non_finance` | 금융 외 분야 |

The page asks users for one of these fields (or "no experience"). Map the exam's wording (for example, "relevant investment experience") to the closest values and explain in `source_text`.

### 3.3 Domain (`domain`, one or more)

| Value | Korean label |
|---|---|
| `banking_credit_fx` | 은행·여신·외환 |
| `securities_investment` | 증권·투자·자산운용 |
| `insurance` | 보험 |
| `accounting_tax` | 회계·세무 |
| `risk_compliance` | 리스크·컴플라이언스 |
| `financial_planning` | 재무설계 |

### 3.4 Other enumerations

| Field | Allowed values |
|---|---|
| `exam_type` | `certificate` (private or industry credential), `license` (legally required or state-granted), `employment_exam` (recruitment exam for a bank or financial institution) |
| `status` | `active`, `reform_announced`, `discontinued_or_merged` |
| `region` | `KR`, `GLOBAL`, or an ISO country code (`US`, `GB`, `JP`, `CN`, `IN`, `SG`, `HK`, `CA`, `AU`, others). Use `GLOBAL` for credentials offered internationally by one body |
| `nationality_rule` | `none` (no restriction), `citizens_only`, `residents_only`, `other` |
| `format` (per stage) | `mcq`, `short_answer`, `essay`, `calculation`, `oral`, `practical`, `mixed` |
| `english_level_needed` | `none`, `basic`, `working`, `advanced` (see 3.5) |
| `hours_basis` | `official`, `survey`, `provider`, `researcher_estimate` |
| `confidence` values | `high`, `medium`, `low` |
| `source type` | `official`, `regulator`, `statistics`, `provider`, `other` |

### 3.5 English level needed

Judge the English needed to pass, based on the exam language, question style and reading load. Page labels: `none` = 거의 못함, `basic` = 기초, `working` = 업무 가능, `advanced` = 고급.

| Value | Use when |
|---|---|
| `none` | The exam is offered in Korean (or the user's likely language) and no English is needed |
| `basic` | English terms appear, but the exam and materials are available in another language |
| `working` | The exam is in English with moderate technical reading load |
| `advanced` | English-only exam with long case-based, essay or calculation questions |

Write the reason in `english_level_reason`.

## 4. Classification rules (compute these for every record)

### 4.1 Difficulty level (1 to 5)

Score three criteria from 1 to 5 each, then take the average and round half up. If the pass rate is `unknown`, drop criterion A and average B and C.

| Score | A. Average pass rate | B. Typical total study hours | C. Exam structure (points) |
|---|---|---|---|
| 1 | 70% or more | 60 or fewer | 1 |
| 2 | 50 to 69% | 61 to 150 | 2 |
| 3 | 30 to 49% | 151 to 400 | 3 |
| 4 | 15 to 29% | 401 to 1,000 | 4 |
| 5 | under 15% | over 1,000 | 5 |

- **A. Average pass rate:** the arithmetic mean of the stage pass rates (each stage's rate is the average of the latest 3 to 5 sessions or years).
- **B. Typical total study hours:** `total.hours_typical`.
- **C. Exam structure:** start at 1 point, then add 1 point for each that applies (maximum 5):
  - 3 or more subjects across the exam
  - includes short-answer, essay or calculation questions
  - 3 or more successive stages
  - includes a non-written assessment (oral, practical, mandatory apprenticeship or training)

Level names used on the page: 1 = 입문, 2 = 초급, 3 = 중급, 4 = 고급, 5 = 최상급.

### 4.2 Preparation-period group (computed by the page, shown here for reference)

| Group | Typical total study hours |
|---|---|
| Short | 150 or fewer |
| Medium | 151 to 400 |
| Long | 401 to 1,000 |
| Extra long | over 1,000 |

The page assigns the group from `total.hours_typical`. Do not write the group in the record.

### 4.3 How the page uses key fields

- Available hours = hours per day x 30 x months. It is compared with `total.hours_min` and `total.hours_typical`.
- `min_calendar_months` is compared with the user's total months. If the user has fewer months than this, the exam is marked as not feasible in that time.
- Eligibility paths are OR-ed. Conditions inside one path are AND-ed.

## 5. Research scope

Research all Tier 1 exams first. Start Tier 2 only after Tier 1 is complete. Names below are candidates only. Verify that each exists under that name (rule 9), and add any well-known exam that is missing. State additions in the research log.

### 5.1 Korea (`region: KR`)

**Tier 1**

- Banking and general finance: 은행FP 자격시험, 신용분석사, 여신심사역, 외환전문역 (I and II)
- Financial investment: 펀드투자권유대행인, 증권투자권유대행인, 펀드투자권유자문인력, 증권투자권유자문인력, 파생상품투자권유자문인력, 투자자산운용사, 금융투자분석사, 재무위험관리사
- Insurance: 보험설계사 (life, non-life, third-sector), 손해사정사, 보험계리사
- Accounting and tax: 공인회계사 (KICPA), 세무사, 전산회계 and 전산세무, 재경관리사
- Financial planning: AFPK, CFP (Korea FPSB)

**Tier 2**

- 파생상품투자권유대행인, 변액보험판매관리사, 보험중개사, 관세사, FAT and TAT, IFRS관리사
- Credit-related credentials such as 신용위험분석사 or 신용관리사 (verify what exists)
- Employment exams: Bank of Korea, Financial Supervisory Service, major commercial bank recruitment written exams (NCS and finance knowledge), financial public institution NCS exams

### 5.2 International

**Tier 1**

- Investment and risk: CFA (Levels I to III), FRM (Parts I and II), CAIA, CFP (FPSB)
- Accounting and audit: US CPA (AICPA/NASBA), US CMA (IMA), ACCA, CIMA / CGMA, ICAEW ACA, CIA (IIA)
- Compliance: CAMS (ACAMS)
- Securities licensing: FINRA SIE and Series 7, 63 and 65
- UK: CISI Investment Management Certificate (IMC)

**Tier 2**

- Investment and risk: CMT, PRM, CQF, CIPM, GARP SCR, CFA Institute Investment Foundations and ESG certificates
- Accounting and tax: CPA Australia, Chartered Accountants ANZ, CPA Canada, HKICPA Qualification Programme, ICAI Chartered Accountant (India), ICMAI CMA (India), US Enrolled Agent (EA)
- Compliance and fraud: CFE, ICA certificates
- Treasury: CTP (AFP)
- Securities and banking licensing: Canadian Securities Course (CSC), Singapore CMFAS exams, India NISM and AMFI exams, UK Chartered Banker qualifications
- Japan: 証券アナリスト, FP技能士, 日商簿記検定, 銀行業務検定, 証券外務員
- China: CICPA, fund practitioner qualification, securities practitioner qualification, banking professional qualification
- US insurance and advisory: ChFC and CLU

**Per-country rule for exams that vary by region** (for example, US CPA by state): record the most common or the largest-population jurisdiction's rule as the main value. Write the differences into `extra_checks_ko`.

## 6. Record format

Write one section per exam in this exact form: a heading `## <id>` followed by one fenced `yaml` block. Fields marked **R** are required. Fields marked **O** are optional. For a required field you cannot verify, write `unknown`.

````markdown
## kr_example

```yaml
# ---------- A. Identity ----------
id: kr_example                      # R. region (lowercase) + underscore + short English slug. Examples of format: kr_cpa, gl_cfa
name_ko:                            # R. Official Korean name
name_orig:                          # R. Official name in the original language (English if international)
tier: 1                             # R. 1 or 2 (Section 5)
region: KR                          # R. See 3.4
exam_type: certificate              # R. See 3.4
domain: [accounting_tax]            # R. One or more, see 3.3
issuer:                             # R. Name of the body that runs the exam or grants the credential
official_url:                       # R. Official page for the exam
status: active                      # R. See 3.4
status_note:                        # O. Required if status is not active (what changes and when)
summary_ko:                         # R. 2 to 3 sentences in Korean
usage_ko:                           # R. What the holder can do: legal exclusive work, typical jobs, recognition

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none            # R. See 3.4
  nationality_countries: []         # R if citizens_only or residents_only: ISO alpha-2 codes
  nationality_note_ko:              # O.
  paths:                            # R. At least one path. Paths are OR-ed; conditions inside a path are AND-ed
    - label_ko:                     # R. Short Korean name of the path, e.g. "학사 학위 소지자"
      age_min:                      # R. Number or null
      age_max:                      # R. Number or null
      education_accepted: [any]     # R. See 3.1
      work_years_min: 0             # R. Number (0 = no experience needed)
      work_fields_accepted: [any]   # R. See 3.2
      source_text:                  # R. One sentence quoting or closely translating the official wording
  extra_checks_ko: []               # R. Conditions the page cannot judge from its inputs: credit hours, majors, sponsor recommendation, residency, background check, state-by-state differences. Write [] if none
  exam_languages: [ko]              # R. Language codes: ko, en, ja, zh, ...
  english_level_needed: none        # R. See 3.5
  english_level_reason:             # R. One sentence in English
  test_countries: [KR]              # R. ISO alpha-2 codes of countries where the exam can be taken (write the main countries if there are many)
  retake_limit_ko:                  # O. Limits on number of attempts or time windows

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: false         # R. true if anything beyond passing the exam is needed (experience, training, ethics pledge, membership)
  work_years_min: 0                 # R. Number. Use 0 if none
  work_fields_accepted: [any]       # R. See 3.2
  other_requirements_ko: []         # R. Training hours, interviews, ethics review, registration, membership. [] if none
  time_limit_ko:                    # O. Deadline to meet the requirements after passing
  validity_ko:                      # R. Validity period, renewal, continuing-education rules

# ---------- D. Exam structure and study load ----------
structure:
  stages:                           # R. At least one stage (one entry per level, part or round)
    - name_ko:                      # R. e.g. "1차 시험", "Level I"
      subjects_ko: []               # R. Subject names
      format: mcq                   # R. See 3.4
      question_summary_ko:          # R. Number and type of questions
      duration_min:                 # R. Total minutes of the stage, number
      passing_rule_ko:              # R. Passing score or rule (e.g. average 60 and no subject below 40)
      pass_rates:                   # R. List of the latest 3 to 5 years/sessions. unknown if not published
        - period:                   # e.g. 2025 or 2025-Q2
          rate_pct:                 # number 0 to 100
          examinees:                # number or unknown
      pass_rate_avg_pct:            # R. Average of pass_rates, number, or unknown
      hours_min:                    # R. Fewest realistic study hours for this stage (fast learners), number
      hours_typical:                # R. Typical study hours for this stage, number
      hours_max:                    # R. Upper realistic study hours for this stage, number
      sessions_per_year:            # R. Number of sittings per year
      next_dates_ko:                # R. Most recent confirmed registration and exam dates (write with year)
      fee:                          # R. Fee to sit this stage
        amount:                     # number
        currency:                   # ISO 4217
        krw_approx:                 # number, rounded to 1,000 KRW
        fx_date:                    # date of the exchange rate used for krw_approx
  exemptions_ko:                    # O. Subject exemptions or credit for other credentials
  total:                            # R. Whole path from first sitting to passing every stage
    hours_min:                      # R. Number (normally the sum of stage hours_min)
    hours_typical:                  # R. Number (normally the sum of stage hours_typical)
    hours_max:                      # R. Number (normally the sum of stage hours_max)
    hours_basis: official           # R. See 3.4 (applies to all hours fields)
    hours_basis_note_ko:            # R. Where the hours figures come from; if researcher_estimate, how they were derived
    min_calendar_months:            # R. Shortest realistic calendar time from the first sitting to passing every stage, given the exam calendar (e.g. one sitting per year). Number
    pass_rate_avg_pct:              # R. Mean of the stage pass_rate_avg_pct values, or unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko: []                 # R. Enrollment, registration, annual membership, renewal fees with amounts and currency. [] if none

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score:                  # R. 1 to 5, or na if pass rate is unknown
  hours_score:                      # R. 1 to 5
  structure_points:                 # R. Each is true or false
    subjects_3_or_more:
    subjective_questions:
    stages_3_or_more:
    non_written_assessment:
  structure_score:                  # R. 1 to 5 (1 + number of true values, maximum 5)
  level:                            # R. 1 to 5, computed from the three scores
  rationale_ko:                     # R. 2 sentences: the main factors behind the level

# ---------- G. Sources and confidence ----------
sources:                            # R. At least 3 where possible, at least 1 official
  - url:                            # R.
    accessed: 2026-01-01            # R. Date you read it
    type: official                  # R. See 3.4
    covers: [eligibility, structure, hours, pass_rate, fee]   # R. Which groups this source supports
confidence:                         # R. high, medium or low for each group
  eligibility:
  award:
  structure:
  hours:
  pass_rate:
  fee:
as_of:                              # R. Research date, YYYY-MM-DD
unknown_reasons: []                 # R. For every field set to unknown: field name and the reason. [] if none
notes_ko:                           # O. Anything a user should know that does not fit above (rule changes, source conflicts)
```
````

The dates and the placeholders above only show the format. Replace every value with verified data.

## 7. Quality checklist (run before delivery)

For each record:

- [ ] Every required field is filled with a verified value or `unknown` (with a reason in `unknown_reasons`).
- [ ] `eligibility.paths` covers every route the official rules allow (for example, a degree route and a work-experience route).
- [ ] Education values come only from 3.1, work fields only from 3.2, domains only from 3.3.
- [ ] `total.hours_*` equals the sum of stage hours unless an official total is given, and `hours_min <= hours_typical <= hours_max` holds.
- [ ] `min_calendar_months` accounts for the real exam calendar, not only study hours.
- [ ] `difficulty.level` follows the rubric in 4.1 and the three scores are recorded.
- [ ] Each fee has a currency and, for foreign currency, a `krw_approx` with `fx_date`.
- [ ] Every source has a URL and an access date, and at least one source is official.
- [ ] Numbers contain no units, commas, ranges or text.
- [ ] All `_ko` fields are in Korean. No placeholder text remains.

For the whole delivery:

- [ ] All Tier 1 exams are covered. Tier 2 exams that are not covered are listed in the research log.
- [ ] No two records share an `id`.

## 8. Delivery format

Save the output in the folder `/Users/mac/Documents/문서 - 김용희/Codyssey/Exam_webpage/research/` using English file names. One file per group:

| File | Contents |
|---|---|
| `/Users/mac/Documents/문서 - 김용희/Codyssey/Exam_webpage/research/kr_banking_finance.md` | Korea: banking and general finance, financial investment |
| `/Users/mac/Documents/문서 - 김용희/Codyssey/Exam_webpage/research/kr_insurance_accounting.md` | Korea: insurance, accounting and tax, financial planning, employment exams |
| `/Users/mac/Documents/문서 - 김용희/Codyssey/Exam_webpage/research/global_investment_risk.md` | International: investment, risk, financial planning, compliance |
| `/Users/mac/Documents/문서 - 김용희/Codyssey/Exam_webpage/research/global_accounting_licensing.md` | International: accounting and audit, securities and banking licensing by country |
| `/Users/mac/Documents/문서 - 김용희/Codyssey/Exam_webpage/research/research_log.md` | Research log |

Each of the four group files contains only records in the Section 6 format, in order of `tier`, then `id`. Do not add introductions or summaries.

The research log contains:

1. Date of research and the list of exams completed (id and name).
2. Candidates that were excluded, abolished, merged or renamed, each with the reason and the source.
3. Exams added beyond the candidate list, with the reason.
4. Candidates not researched (Tier 2 only) and why.
5. Open issues: fields set to `unknown`, source conflicts that were not resolved, and rule changes expected within 12 months.
