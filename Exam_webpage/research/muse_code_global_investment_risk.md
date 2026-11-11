## gb_cisi_imc

```yaml
# ---------- A. Identity ----------
id: gb_cisi_imc
name_ko: "CISI IMC(영국투자운용자격)"
name_orig: "Investment Management Certificate (IMC)"
tier: 1
region: GB
exam_type: certificate
domain: ['securities_investment']
issuer: "CFA Society of the UK / CISI (Chartered Institute for Securities & Investment)"
official_url: "https://www.cfauk.org/study/imc"
status: active
summary_ko: "영국 금융행위감독청(FCA)에서 인정하는 영국 자산운용 및 투자관리 업계의 공식 벤치마크 입문 자격입니다. 영국 금융시장 규제 및 투자 실무의 2개 유닛으로 구성되어 있습니다."
usage_ko: "영국 런던의 헤지펀드, 자산운용사, 사모펀드 애널리스트 및 트레이더의 FCA 승인 업무 필수 자격입니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "제한 없는 일반 응시 경로"
      age_min: null
      age_max: null
      education_accepted: ['any']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "There are no formal entry requirements for the IMC. Anyone can take the exam."
  extra_checks_ko: ['영문 신분증 지참']
  exam_languages: ['en']
  english_level_needed: working
  english_level_reason: "Conducted in English covering UK financial regulation and investment techniques."
  test_countries: ['KR', 'GB', 'US', 'SG', 'HK', 'DE', 'FR']
  retake_limit_ko: "응시 횟수 제한 없음."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: false
  work_years_min: 0
  work_fields_accepted: ['any']
  other_requirements_ko: []
  validity_ko: "유효기간 만료 없이 영구 유효."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "Unit 1 (금융시장 및 규제)"
      subjects_ko: ['Regulatory Environment', 'Legal Concepts', 'Market Integrity', 'Taxation', 'Client Objectives']
      format: mcq
      question_summary_ko: "객관식 85문항 (100분 CBT)"
      duration_min: 100
      passing_rule_ko: "통상 65~75% 정답 시 합격"
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 60
      hours_typical: 80
      hours_max: 120
      sessions_per_year: 300
      next_dates_ko: "피어슨VUE에서 연중 상시 실시"
      fee:
        amount: 320
        currency: GBP
        krw_approx: 560000
        fx_date: "2026-11-11"
    - name_ko: "Unit 2 (투자 실무)"
      subjects_ko: ['Quantitative Methods', 'Microeconomics', 'Macroeconomics', 'Accounting', 'Equities', 'Fixed Income', 'Derivatives', 'Alternative Investments', 'Portfolio Management']
      format: mcq
      question_summary_ko: "객관식 및 아이템 세트 105문항 (140분 CBT)"
      duration_min: 140
      passing_rule_ko: "통상 65~75% 정답 시 합격"
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 100
      hours_typical: 130
      hours_max: 180
      sessions_per_year: 300
      next_dates_ko: "연중 상시 실시"
      fee:
        amount: 340
        currency: GBP
        krw_approx: 595000
        fx_date: "2026-11-11"
  exemptions_ko: "CFA Level I 합격자는 Unit 2 면제"
  total:
    hours_min: 160
    hours_typical: 210
    hours_max: 300
    hours_basis: official
    hours_basis_note_ko: "CFA UK 공식 권장 학습시간(Unit 1 약 80시간, Unit 2 약 130시간, 총 약 210시간) 기준"
    min_calendar_months: 3
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko: []

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: na
  hours_score: 3
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 2
  level: 3
  rationale_ko: "2개 유닛 객관식 시험으로 총 210시간 내외의 학습량이 필요해 hours_score 3, structure_score 2를 받았다. 기관이 유닛별 합격률을 공개하지 않아 합격률 점수를 제외한 두 점수 평균으로 중급(3)으로 산정하였다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.cfauk.org/study/imc"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'hours', 'fee', 'award']
confidence:
  eligibility: high
  award: high
  structure: high
  hours: high
  pass_rate: low
  fee: high
as_of: "2026-11-11"
unknown_reasons:
    - field: pass_rates
      reason_ko: "CISI와 CFA UK가 유닛별 합격률을 공개하지 않음"
```

## gl_caia

```yaml
# ---------- A. Identity ----------
id: gl_caia
name_ko: "CAIA(공인대안투자분석사)"
name_orig: "Chartered Alternative Investment Analyst (CAIA)"
tier: 1
region: GLOBAL
exam_type: certificate
domain: ['securities_investment']
issuer: "CAIA Association"
official_url: "https://caia.org"
status: active
summary_ko: "사모펀드(Private Equity), 헤지펀드(Hedge Funds), 부동산(Real Estate), 원자재(Commodities), 인프라 및 구조화 상품 등 대체투자(Alternative Investments) 자산군에 특화된 세계 유일의 공인 전문자격입니다."
usage_ko: "국부펀드(KIC), 국민연금(NPS) 등 연기금 대체투자실, PEF 운용사, 글로벌 부동산·인프라 펀드에서 핵심 우대 자격으로 평가받습니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "제한 없는 일반 응시 경로"
      age_min: null
      age_max: null
      education_accepted: ['any']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "Candidates are not required to hold an undergraduate degree or relevant work experience to sit for the CAIA exams."
  extra_checks_ko: ['유효한 국제 여권 소지 필수']
  exam_languages: ['en']
  english_level_needed: working
  english_level_reason: "Conducted in English with Level II essay questions on alternative investment cases."
  test_countries: ['KR', 'US', 'GB', 'SG', 'HK', 'JP', 'CN', 'CA', 'AU']
  retake_limit_ko: "응시 횟수 제한 없음."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 1
  work_fields_accepted: ['securities_asset_mgmt', 'banking_finance']
  other_requirements_ko: ['학사 학위 보유 시 1년 이상, 미보유 시 4년 이상의 금융투자 실무경력 증빙', '협회 회원 가입']
  validity_ko: "CAIA Association 연회비 납부 및 회원 자격 유지 시 영구 유효."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "Level I (대안투자 기초 및 주요 자산군)"
      subjects_ko: ['Professional Ethics and Standards', 'Introduction to Alternative Investments', 'Real Assets', 'Hedge Funds', 'Private Equity', 'Structured Products']
      format: mcq
      question_summary_ko: "객관식 4지선다형 총 200문항 (총 240분 CBT)"
      duration_min: 240
      passing_rule_ko: "통상 70% 이상 정답 시 합격 (난이도에 따라 유동적)"
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 160
      hours_typical: 200
      hours_max: 280
      sessions_per_year: 2
      next_dates_ko: "2026년 3월, 9월 연 2회 실시"
      fee:
        amount: 1250
        currency: USD
        krw_approx: 1725000
        fx_date: "2026-11-11"
    - name_ko: "Level II (고급 자산배분 및 사례 연구)"
      subjects_ko: ['Ethics and Professional Standards', 'Emerging Topics', 'Universal, Private, and Hedge Fund Strategies', 'Allocation and Due Diligence']
      format: mixed
      question_summary_ko: "객관식 100문항(120분) + 서술형 논술 3세트(120분), 총 240분 CBT"
      duration_min: 240
      passing_rule_ko: "객관식 및 서술형 총점 기준 합격선(통상 70%) 충족"
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 180
      hours_typical: 220
      hours_max: 320
      sessions_per_year: 2
      next_dates_ko: "2026년 3월, 9월 연 2회 실시"
      fee:
        amount: 1250
        currency: USD
        krw_approx: 1725000
        fx_date: "2026-11-11"
  exemptions_ko: "CFA 차터홀더는 Level I 전과목 면제 (CAIA Stackable Credential Program을 통해 곧바로 Level II 응시 가능)"
  total:
    hours_min: 340
    hours_typical: 420
    hours_max: 600
    hours_basis: researcher_estimate
    hours_basis_note_ko: "공식 권장시간이 없어 교육기관 권장(레벨당 약 200시간)을 기준으로 연구자가 추정한 총 400시간 이상 기준"
    min_calendar_months: 6
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['최초 1회 등록비(First-time Registration Fee) 400 USD (약 552,000 KRW)', 'CAIA 협회 연회비 350 USD (약 483,000 KRW)']

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: na
  hours_score: 4
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: false
    non_written_assessment: true
  structure_score: 4
  level: 4
  rationale_ko: "대체투자 심화 커리큘럼과 Level II 서술형 답안으로 총 420시간 내외의 학습량이 필요해 hours_score 4, structure_score 4를 받았다. 기관이 정기 합격률 표를 게시하지 않아 합격률 점수를 제외한 두 점수 평균으로 고급(4)으로 산정하였다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://caia.org"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'hours', 'fee', 'award']
confidence:
  eligibility: high
  award: high
  structure: high
  hours: high
  pass_rate: low
  fee: high
as_of: "2026-11-11"
unknown_reasons:
    - field: pass_rates
      reason_ko: "CAIA Association이 정기 합격률 표를 게시하지 않아 윈도우별 비공식 집계치는 사용하지 않음"
```

## gl_cams

```yaml
# ---------- A. Identity ----------
id: gl_cams
name_ko: "CAMS(공인자금세탁방지전문가)"
name_orig: "Certified Anti-Money Laundering Specialist (CAMS)"
tier: 1
region: GLOBAL
exam_type: certificate
domain: ['risk_compliance']
issuer: "Association of Certified Anti-Money Laundering Specialists (ACAMS)"
official_url: "https://www.acams.org"
status: active
summary_ko: "전 세계 금융기관 및 규제 당국에서 인정하는 자금세탁방지(AML), 테러자금조달금지(CFT), 대량살상무기 확산방지 및 글로벌 금융제재(Sanctions) 준수 분야 최고 권위의 글로벌 전문자격입니다."
usage_ko: "시중은행, 증권사, 가상자산사업자(VASP), 핀테크 기업의 준법감시부(Compliance), AML 실무팀장, 금융정보분석원(KoFIU) 대응 담당자의 필수 자격입니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "40 자격 크레딧 충족자 경로"
      age_min: null
      age_max: null
      education_accepted: ['any']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "Candidates must have earned at least 40 qualifying credits based on education, other professional credentials, and AML/financial crime work experience."
  extra_checks_ko: ['ACAMS 규정 학력(학사 20점, 석사 30점) 및 전문경력(1년당 10점) 합산 40점 이상 입증 필수', 'ACAMS 유효 회원권(Membership) 가입 필수']
  exam_languages: ['ko', 'en', 'ja', 'zh', 'es', 'fr']
  english_level_needed: none
  english_level_reason: "The examination is officially available in Korean (as well as English and 10 other languages)."
  test_countries: ['KR', 'US', 'GB', 'SG', 'HK', 'JP', 'CN', 'CA', 'AU']
  retake_limit_ko: "불합격 시 30일(1차 재응시) 또는 60일(2차 이후) 대기 후 재응시 가능."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: ['any']
  other_requirements_ko: ['ACAMS 회원 자격 유지 및 윤리 기준 준수']
  validity_ko: "3년마다 계속전문교육(CPE) 60학점(AML 관련 12학점 포함) 취득 및 갱신."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 필기시험 (Pearson VUE CBT)"
      subjects_ko: ['자금세탁의 위험과 수법', '자금세탁방지 및 테러자금조달금지에 관한 국제기준', 'AML/CFT 컴플라이언스 프로그램 구축', '자금세탁방지 조사 절차 및 지원']
      format: mcq
      question_summary_ko: "객관식 4지선다형 총 120문항 (총 210분 CBT)"
      duration_min: 210
      passing_rule_ko: "120점 만점 기준 75점 이상 득점 시 합격 (약 62.5% 이상)"
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 80
      hours_typical: 150
      hours_max: 240
      sessions_per_year: 300
      next_dates_ko: "피어슨VUE 센터에서 연중 상시 응시 가능"
      fee:
        amount: 1995
        currency: USD
        krw_approx: 2753000
        fx_date: "2026-11-11"
  exemptions_ko: "해당 없음"
  total:
    hours_min: 80
    hours_typical: 150
    hours_max: 240
    hours_basis: researcher_estimate
    hours_basis_note_ko: "ACAMS 스터디가이드 정독 및 연습문제 풀이 평균 2~3개월(일 2시간) 기준"
    min_calendar_months: 2
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['ACAMS 3년 회원비 845 USD (약 1,166,000 KRW, 시험 패키지 포함 옵션 가능)', '3년 주기 자격 갱신료 250 USD (약 345,000 KRW)']

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: na
  hours_score: 2
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: true
  structure_score: 3
  level: 3
  rationale_ko: "120문항 시나리오형 단일 시험과 40학점 응시요건으로 총 150시간 내외의 학습량이 필요해 hours_score 2, structure_score 3을 받았다. 기관이 합격률 통계를 공개하지 않아 합격률 점수를 제외한 두 점수 평균으로 중급(3)으로 산정하였다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.acams.org"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'hours', 'fee', 'award']
confidence:
  eligibility: high
  award: high
  structure: high
  hours: high
  pass_rate: low
  fee: high
as_of: "2026-11-11"
unknown_reasons:
    - field: pass_rates
      reason_ko: "ACAMS가 합격률 통계를 공개하지 않음"
```

## gl_cfa

```yaml
# ---------- A. Identity ----------
id: gl_cfa
name_ko: "CFA(국제재무분석사)"
name_orig: "Chartered Financial Analyst (CFA)"
tier: 1
region: GLOBAL
exam_type: certificate
domain: ['securities_investment', 'risk_compliance']
issuer: "CFA Institute"
official_url: "https://www.cfainstitute.org"
status: active
summary_ko: "전 세계 금융투자업계에서 가장 높은 공신력과 명성을 보유한 글로벌 최고 권위의 투자분석 전문가 자격입니다. 윤리 기준, 계량분석, 경제학, 재무보고분석, 기업금융, 지분투자, 채권, 파생상품, 대안투자, 포트폴리오 관리 등 금융투자 전 영역을 3단계(Level I, II, III)에 걸쳐 평가합니다."
usage_ko: "글로벌 및 국내 자산운용사 펀드매니저, 투자은행(IB) M&A/ECM/DCM 부서, 사모펀드(PEF), 벤처캐피탈(VC), 리서치센터 애널리스트 채용 및 승진 시 전 세계 어디서나 통용되는 최고 우대 자격입니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "학사 학위 소지자 경로"
      age_min: null
      age_max: null
      education_accepted: ['bachelor', 'master', 'doctor']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "Hold an undergraduate degree from an accredited university, or equivalent qualification."
    - label_ko: "대학 졸업예정자 경로"
      age_min: null
      age_max: null
      education_accepted: ['college_final_year']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "Undergraduate students within 23 months of graduation can sit for Level I."
    - label_ko: "전문경력 또는 교육 연계 경로"
      age_min: null
      age_max: null
      education_accepted: ['any']
      work_years_min: 3
      work_fields_accepted: ['any']
      source_text: "Have a combination of 4,000 hours of professional work experience and/or higher education that was acquired over a minimum of three sequential years."
  extra_checks_ko: ['국제 여권(International Travel Passport) 소지 필수', 'CFA Institute 직무 윤리 규정 준수 서약']
  exam_languages: ['en']
  english_level_needed: advanced
  english_level_reason: "Entirely administered in English with extensive case scenarios and Level III constructed response (essay)."
  test_countries: ['KR', 'US', 'GB', 'SG', 'HK', 'JP', 'CN', 'CA', 'AU', 'DE']
  retake_limit_ko: "각 레벨당 최대 6회 응시 가능 (6회 불합격 시 영구 응시 제한)."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 3
  work_fields_accepted: ['securities_asset_mgmt', 'banking_finance', 'corporate_finance']
  other_requirements_ko: ['투자 의사결정 관련 4,000시간(최소 36개월 이상) 실무경력 입증', '추천인 2~3인의 전문성 추천서 제출', 'CFA Institute 정회원(Regular Member) 가입 및 연회비 납부']
  validity_ko: "정회원 자격 유지 및 매년 윤리 규약 서약 시 영구 유효."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "Level I (기초 지식 및 개념 이해)"
      subjects_ko: ['Ethical and Professional Standards', 'Quantitative Methods', 'Economics', 'Financial Statement Analysis', 'Corporate Issuers', 'Equity Investments', 'Fixed Income', 'Derivatives', 'Alternative Investments', 'Portfolio Management']
      format: mcq
      question_summary_ko: "객관식 3지선다형 총 180문항 (135분씩 2세션, 총 270분 CBT)"
      duration_min: 270
      passing_rule_ko: "최소 합격선(MPS: Minimum Passing Score, 통상 68~70%) 이상 득점"
      pass_rates:
        - period: "2025"
          rate_pct: 44.0
          examinees: 97019
        - period: "2024"
          rate_pct: 44.1
          examinees: 89389
        - period: "2023"
          rate_pct: 37.1
          examinees: 92553
      pass_rate_avg_pct: 41.73
      hours_min: 250
      hours_typical: 320
      hours_max: 450
      sessions_per_year: 4
      next_dates_ko: "2026년 2월, 5월, 8월, 11월 연 4회 실시"
      fee:
        amount: 940
        currency: USD
        krw_approx: 1297000
        fx_date: "2026-11-11"
    - name_ko: "Level II (자산 가치평가 및 분석)"
      subjects_ko: ['Ethical and Professional Standards', 'Quantitative Methods', 'Economics', 'Financial Statement Analysis', 'Corporate Issuers', 'Equity Valuation', 'Fixed Income', 'Derivatives', 'Alternative Investments', 'Portfolio Management']
      format: mcq
      question_summary_ko: "미니 케이스 기반 아이템 세트 총 88문항 (132분씩 2세션, 총 264분 CBT)"
      duration_min: 264
      passing_rule_ko: "최소 합격선(MPS, 통상 66~70%) 이상 득점"
      pass_rates:
        - period: "2025"
          rate_pct: 46.6
          examinees: 39901
        - period: "2024"
          rate_pct: 48.6
          examinees: 36772
        - period: "2023"
          rate_pct: 40.8
          examinees: 68542
      pass_rate_avg_pct: 45.33
      hours_min: 280
      hours_typical: 350
      hours_max: 500
      sessions_per_year: 3
      next_dates_ko: "2026년 5월, 8월, 11월 연 3회 실시"
      fee:
        amount: 940
        currency: USD
        krw_approx: 1297000
        fx_date: "2026-11-11"
    - name_ko: "Level III (포트폴리오 관리 및 자산배분)"
      subjects_ko: ['Ethical and Professional Standards', 'Economics', 'Equity Investments', 'Fixed Income', 'Derivatives', 'Alternative Investments', 'Portfolio Management & Wealth Planning']
      format: mixed
      question_summary_ko: "주관식 서술형(Constructed Response) 및 객관식 아이템 세트 (132분씩 2세션, 총 264분 CBT)"
      duration_min: 264
      passing_rule_ko: "최소 합격선(MPS, 통상 62~66%) 이상 득점"
      pass_rates:
        - period: "2025"
          rate_pct: 49.5
          examinees: 25669
        - period: "2024"
          rate_pct: 43.5
          examinees: 30536
        - period: "2023"
          rate_pct: 47.5
          examinees: 31885
      pass_rate_avg_pct: 46.83
      hours_min: 300
      hours_typical: 380
      hours_max: 550
      sessions_per_year: 2
      next_dates_ko: "2026년 2월, 8월 연 2회 실시"
      fee:
        amount: 940
        currency: USD
        krw_approx: 1297000
        fx_date: "2026-11-11"
  exemptions_ko: "해당 없음 (모든 응시자는 Level I부터 순차 합격 필수)"
  total:
    hours_min: 830
    hours_typical: 1050
    hours_max: 1500
    hours_basis: official
    hours_basis_note_ko: "CFA Institute 공식 합격자 설문조사 평균(각 레벨당 약 300~350시간, 총 1,000시간 이상) 반영"
    min_calendar_months: 24
    pass_rate_avg_pct: 44.63

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['최초 응시 등록비(One-time Enrollment Fee) 350 USD (약 483,000 KRW)', 'CFA Institute 연회비 299 USD (약 413,000 KRW, 합격 후 정회원)', '한국CFA협회 연회비 약 100,000 KRW']

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 3
  hours_score: 5
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: true
    non_written_assessment: true
  structure_score: 5
  level: 4
  rationale_ko: "3단계에 걸친 1,000시간 이상의 고강도 영어 시험과 Level 3 주관식 서술형, 4,000시간 실무경력 인증이 요구되는 세계적 권위의 4단계(고급) 자격입니다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.cfainstitute.org"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'hours', 'pass_rate', 'fee', 'award']
  - url: "https://www.schweser.com"
    accessed: "2026-11-11"
    type: provider
    covers: ['hours', 'pass_rate']
confidence:
  eligibility: high
  award: high
  structure: high
  hours: high
  pass_rate: high
  fee: high
as_of: "2026-11-11"
unknown_reasons: []
```

## gl_frm

```yaml
# ---------- A. Identity ----------
id: gl_frm
name_ko: "FRM(국제재무위험관리사)"
name_orig: "Financial Risk Manager (FRM)"
tier: 1
region: GLOBAL
exam_type: certificate
domain: ['risk_compliance']
issuer: "Global Association of Risk Professionals (GARP)"
official_url: "https://www.garp.org"
status: active
summary_ko: "글로벌 금융시장의 금융 리스크를 측정하고 통제하는 리스크 관리 분야 최고 권위의 글로벌 전문자격입니다. 시장 리스크, 신용 리스크, 운영 리스크, 유동성 및 재무 리스크, 투자 리스크 및 최신 바젤(Basel) 규제 체계를 집중 평가합니다."
usage_ko: "글로벌 투자은행, 상업은행, 헤지펀드, 금융감독기구의 리스크 관리부, 금융공학 데스크, ALM 부서의 핵심 필수 자격입니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "제한 없는 일반 응시 경로"
      age_min: null
      age_max: null
      education_accepted: ['any']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "There are no educational or professional prerequisites to sit for the FRM Exam."
  extra_checks_ko: ['유효한 여권(Passport) 또는 운전면허증 지참 필수', 'GARP 윤리 규약 준수 서약']
  exam_languages: ['en']
  english_level_needed: working
  english_level_reason: "Conducted in English with technical quantitative and financial risk terminologies."
  test_countries: ['KR', 'US', 'GB', 'SG', 'HK', 'JP', 'CN', 'CA', 'AU']
  retake_limit_ko: "Part I 합격 후 4년 이내 Part II를 통과해야 하며, 미통과 시 Part I 재응시 필요."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 2
  work_fields_accepted: ['banking_finance', 'securities_asset_mgmt']
  other_requirements_ko: ['Part II 합격 후 5년 이내 2년 이상의 풀타임 재무 리스크 관리 실무경력 증빙 제출']
  validity_ko: "실무경력 인증 완료 후 영구 유효 (자격 유지비 불요, GARP 회원 유지는 선택)."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "Part I (리스크 도구 및 금융공학 기초)"
      subjects_ko: ['Foundations of Risk Management', 'Quantitative Analysis', 'Financial Markets and Products', 'Valuation and Risk Models']
      format: mcq
      question_summary_ko: "객관식 4지선다형 100문항 (총 240분 CBT)"
      duration_min: 240
      passing_rule_ko: "GARP 기준 상대평가 4분위수 쿼타일(Quartile) 성적 기반 합격선 결정"
      pass_rates:
        - period: "2025"
          rate_pct: 52.5
          examinees: 28000
        - period: "2024"
          rate_pct: 55.7
          examinees: 29500
        - period: "2023"
          rate_pct: 46.0
          examinees: 27800
      pass_rate_avg_pct: 51.4
      hours_min: 200
      hours_typical: 260
      hours_max: 350
      sessions_per_year: 3
      next_dates_ko: "2026년 5월, 8월, 11월 연 3회 실시"
      fee:
        amount: 600
        currency: USD
        krw_approx: 828000
        fx_date: "2026-11-11"
    - name_ko: "Part II (리스크 측정 실무 및 최신 금융 이슈)"
      subjects_ko: ['Market Risk Measurement and Management', 'Credit Risk Measurement and Management', 'Operational Risk and Resilience', 'Liquidity and Treasury Risk', 'Risk Management and Investment Management', 'Current Issues in Financial Markets']
      format: mcq
      question_summary_ko: "객관식 4지선다형 80문항 (총 240분 CBT)"
      duration_min: 240
      passing_rule_ko: "상대평가 쿼타일 분석 기반 합격선 결정"
      pass_rates:
        - period: "2025"
          rate_pct: 51.3
          examinees: 16500
        - period: "2024"
          rate_pct: 52.0
          examinees: 17200
        - period: "2023"
          rate_pct: 52.0
          examinees: 16800
      pass_rate_avg_pct: 51.77
      hours_min: 220
      hours_typical: 280
      hours_max: 400
      sessions_per_year: 3
      next_dates_ko: "2026년 5월, 8월, 11월 연 3회 실시"
      fee:
        amount: 600
        currency: USD
        krw_approx: 828000
        fx_date: "2026-11-11"
  exemptions_ko: "해당 없음 (Part I 통과 후 Part II 채점 가능)"
  total:
    hours_min: 420
    hours_typical: 540
    hours_max: 750
    hours_basis: official
    hours_basis_note_ko: "GARP 공식 가이드 권장 학습시간(파트당 240~280시간, 총 약 540시간) 기준"
    min_calendar_months: 6
    pass_rate_avg_pct: 51.58

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['최초 1회 등록비(One-time Enrollment Fee) 400 USD (약 552,000 KRW)']

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 2
  hours_score: 4
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: true
  structure_score: 3
  level: 3
  rationale_ko: "합격률은 약 51%로 준수하지만, 금융통계와 파생상품 수리 모델링의 난이도가 높고 540시간의 집중 학습과 2년 실무경력이 요구되는 중급(3단계) 전문 자격입니다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.garp.org"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'hours', 'pass_rate', 'fee', 'award']
  - url: "https://www.schweser.com"
    accessed: "2026-11-11"
    type: provider
    covers: ['hours', 'pass_rate']
confidence:
  eligibility: high
  award: high
  structure: high
  hours: high
  pass_rate: high
  fee: high
as_of: "2026-11-11"
unknown_reasons: []
```

## us_cfp

```yaml
# ---------- A. Identity ----------
id: us_cfp
name_ko: "CFP(미국 공인재무설계사)"
name_orig: "Certified Financial Planner (CFP Board / FPSB)"
tier: 1
region: US
exam_type: certificate
domain: ['financial_planning']
issuer: "Certified Financial Planner Board of Standards (CFP Board)"
official_url: "https://www.cfp.net"
status: active
summary_ko: "미국 및 전 세계에서 개인 종합자산관리 및 재무설계 분야의 최고 표준으로 인정받는 골드 스탠다드 자격입니다. 고객의 종합 재무상태 평가, 세무·상속·은퇴·보험·투자 솔루션 설계를 총체적으로 검증합니다."
usage_ko: "미국 및 글로벌 금융기관의 자산관리(WM), Private Wealth Management(PWM), RIA(등록투자자문사) 취업 및 파트너 승진의 핵심 자격입니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "CFP Board 공인 교육과정 이수자 경로"
      age_min: null
      age_max: null
      education_accepted: ['any']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "Complete a CFP Board-registered education program, or hold an accepted credential (CPA, CFA, JD, etc.) to challenge."
  extra_checks_ko: ['CFP Board 지정 정규 교육과정(7개 코스) 사전 수료 필수 (CPA, CFA, 변호사 등은 Challenge Status로 교육 면제)', '최종 인증을 위해 학사 학위 소지 필수 (시험 합격 후 5년 이내 소명 가능)']
  exam_languages: ['en']
  english_level_needed: working
  english_level_reason: "Conducted in English covering extensive client financial planning scenarios and case analysis."
  test_countries: ['US', 'CA']
  retake_limit_ko: "평생 최대 5회 응시 가능 (5회 불합격 시 응시 자격 상실)."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 3
  work_fields_accepted: ['banking_finance', 'securities_asset_mgmt', 'accounting_tax', 'corporate_finance']
  other_requirements_ko: ['6,000시간(약 3년) 이상의 적격 재무설계 실무경력 또는 4,000시간 도제식(Apprenticeship) 경력 소명', '학사 학위 증명서 제출', 'CFP Board 직무윤리 및 배경조사 통과']
  validity_ko: "2년마다 30시간의 계속교육(CE, 윤리 2시간 포함) 이수 및 인증 갱신."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 통합 필기시험"
      subjects_ko: ['Professional Conduct and Regulation', 'General Financial Planning Principles', 'Risk Management and Insurance Planning', 'Investment Planning', 'Tax Planning', 'Retirement Savings and Income Planning', 'Estate Planning', 'Psychology of Financial Planning']
      format: mcq
      question_summary_ko: "객관식 4지선다형 총 170문항 (180분씩 2세션, 총 360분 CBT)"
      duration_min: 360
      passing_rule_ko: "준거집단 기준 변형 앵고프(Modified Angoff) 방식 합격 점수제 적용"
      pass_rates:
        - period: "2025"
          rate_pct: 64.0
          examinees: 9800
        - period: "2024"
          rate_pct: 63.5
          examinees: 10200
        - period: "2023"
          rate_pct: 65.0
          examinees: 9950
      pass_rate_avg_pct: 64.17
      hours_min: 350
      hours_typical: 500
      hours_max: 700
      sessions_per_year: 3
      next_dates_ko: "2026년 3월, 7월, 11월 연 3회 실시"
      fee:
        amount: 925
        currency: USD
        krw_approx: 1277000
        fx_date: "2026-11-11"
  exemptions_ko: "CPA, CFA, ChFC, CLU, 법학박사(JD) 소지자는 사전 교육 전과목 면제"
  total:
    hours_min: 350
    hours_typical: 500
    hours_max: 700
    hours_basis: official
    hours_basis_note_ko: "CFP Board 공식 가이드(정규 코스 250시간 + 시험 리뷰 250시간) 기준"
    min_calendar_months: 9
    pass_rate_avg_pct: 64.17

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['정규 교육과정 이수료 약 1,500 USD ~ 4,000 USD (약 2,070,000 KRW ~ 5,520,000 KRW)', 'CFP 연간 인증 갱신비 455 USD (약 628,000 KRW)']

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 2
  hours_score: 4
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: true
  structure_score: 3
  level: 3
  rationale_ko: "합격률은 64% 수준이지만 의무 교육과정 이수, 6,000시간 실무경력과 학사 학위 요건이 결합된 중급(3단계) 자격입니다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.cfp.net"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'hours', 'pass_rate', 'fee', 'award']
confidence:
  eligibility: high
  award: high
  structure: high
  hours: high
  pass_rate: high
  fee: high
as_of: "2026-11-11"
unknown_reasons: []
```

