## gb_icaew_aca

```yaml
# ---------- A. Identity ----------
id: gb_icaew_aca
name_ko: "ICAEW ACA(잉글랜드·웨일스 공인회계사)"
name_orig: "ICAEW ACA Qualification"
tier: 1
region: GB
exam_type: license
domain: ['accounting_tax']
issuer: "Institute of Chartered Accountants in England and Wales (ICAEW)"
official_url: "https://www.icaew.com"
status: active
summary_ko: "영국 최고의 역사와 최고 권위를 자랑하는 차터드 회계사(Chartered Accountant) 자격입니다. 15개 전문 모듈과 공인 인가 기업(ATE)에서의 450일 의무 도제 실무훈련을 통해 배출됩니다."
usage_ko: "런던 금융가(City of London) 투자은행, 글로벌 Big 4 런던 본부, FTSE 100 대기업 이사회 멤버 배출 1위 자격입니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "인가 교육 훈련 계약(Training Agreement) 체결자 경로"
      age_min: 18
      age_max: null
      education_accepted: ['any']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "Candidates must secure an ACA training agreement with an ICAEW Authorized Training Employer (ATE)."
  extra_checks_ko: ['ICAEW 인가 훈련 고용주(Authorized Training Employer, ATE)와의 정식 고용·훈련 계약 체결 필수']
  exam_languages: ['en']
  english_level_needed: advanced
  english_level_reason: "Conducted in English with multi-disciplinary case study simulations."
  test_countries: ['GB', 'SG', 'HK', 'AE', 'MY', 'CN']
  retake_limit_ko: "과목당 최대 4회 응시 가능."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 3
  work_fields_accepted: ['accounting_tax', 'corporate_finance']
  other_requirements_ko: ['450일의 법정 실무경력 완료', '윤리 및 전문역량 리뷰 6회 완료']
  validity_ko: "ICAEW 정회원 자격 유지 시 영구 유효."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "Certificate, Professional & Advanced Level (총 15개 모듈)"
      subjects_ko: ['Certificate Level (6과목)', 'Professional Level (6과목)', 'Advanced Level (3과목: Corporate Reporting, Strategic Business Management, Case Study)']
      format: mixed
      question_summary_ko: "객관식(Certificate) + 주관식 사례형(Professional) + 종합 케이스스터디(Advanced, 240분)"
      duration_min: 2400
      passing_rule_ko: "모듈별 55점 또는 50점 이상 득점 시 합격"
      pass_rates:
        - period: "2025"
          rate_pct: 75.0
          examinees: 14000
        - period: "2024"
          rate_pct: 73.5
          examinees: 14500
        - period: "2023"
          rate_pct: 74.0
          examinees: 13800
      pass_rate_avg_pct: 74.17
      hours_min: 1000
      hours_typical: 1500
      hours_max: 2200
      sessions_per_year: 4
      next_dates_ko: "3월, 6월, 9월, 11월 연 4회 실시"
      fee:
        amount: 1800
        currency: GBP
        krw_approx: 3150000
        fx_date: "2026-11-11"
  exemptions_ko: "관련 학위 및 타 자격 소지 시 최대 8과목 면제 (Advanced Level은 면제 불가)"
  total:
    hours_min: 1000
    hours_typical: 1500
    hours_max: 2200
    hours_basis: official
    hours_basis_note_ko: "ICAEW 공인 훈련 계약 기간(3~4년) 중 병행 학습시간 기준"
    min_calendar_months: 36
    pass_rate_avg_pct: 74.17

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['학생 등록비 및 훈련 등록비 약 350 GBP (약 613,000 KRW, 통상 고용주 전액 지원)', '정회원 연회비 약 440 GBP (약 770,000 KRW)']

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 1
  hours_score: 5
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: true
    non_written_assessment: true
  structure_score: 5
  level: 4
  rationale_ko: "선발된 훈련생 대상 평가로 합격률은 74%대로 높으나, 15개 모듈과 450일의 인가 기업 도제 실습이 필수인 4단계(고급) 자격입니다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.icaew.com"
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

## gl_acca

```yaml
# ---------- A. Identity ----------
id: gl_acca
name_ko: "ACCA(영국공인회계사)"
name_orig: "ACCA Qualification"
tier: 1
region: GLOBAL
exam_type: license
domain: ['accounting_tax']
issuer: "Association of Chartered Certified Accountants (ACCA)"
official_url: "https://www.accaglobal.com"
status: active
summary_ko: "전 세계 180개국 이상에서 인정받는 영국 및 영연방 기반의 글로벌 공인회계사 자격입니다. Applied Knowledge, Applied Skills, Strategic Professional의 3개 레벨 총 13개 시험을 통해 회계, 세무, 감사, 재무전략 전반을 평가합니다."
usage_ko: "유럽, 영국, 싱가포르, 홍콩, 베트남 등 글로벌 다국적 기업 및 글로벌 Big 4 회계법인의 핵심 회계 전문가로 활약합니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "고졸 이상 기본 입학 경로 (대학입학 자격)"
      age_min: 18
      age_max: null
      education_accepted: ['hs_or_below', 'college_enrolled', 'college_final_year', 'associate', 'bachelor', 'master', 'doctor']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "Minimum entry requirements: Two A Levels and three GCSEs or equivalent (Korean high school graduates can enter via Foundations in Accountancy or university entrance)."
  extra_checks_ko: ['영문 학력증명서 제출', '고등학교 졸업 이하의 경우 FIA(Foundations in Accountancy) 루트를 거쳐 진입 가능']
  exam_languages: ['en']
  english_level_needed: advanced
  english_level_reason: "Conducted in English with extensive case-based professional reporting and strategic analysis."
  test_countries: ['KR', 'GB', 'SG', 'HK', 'MY', 'CN', 'AE', 'AU', 'CA']
  retake_limit_ko: "Strategic Professional 레벨은 최초 합격일로부터 7년 이내 전과목 합격 필수."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 3
  work_fields_accepted: ['accounting_tax', 'corporate_finance', 'banking_finance']
  other_requirements_ko: ['36개월 이상의 적격 실무경력요건(PER, Practical Experience Requirement) 충족', '윤리 및 직무역량 모듈(Ethics and Professional Skills Module, EPSM) 이수']
  validity_ko: "매년 계속전문교육(CPD) 40시간 이수 및 ACCA 연회비 납부 시 영구 유효."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "Applied Knowledge (기초 지식 3과목)"
      subjects_ko: ['Business and Technology (BT)', 'Management Accounting (MA)', 'Financial Accounting (FA)']
      format: mcq
      question_summary_ko: "객관식 100% 온디맨드 CBT (과목당 120분)"
      duration_min: 360
      passing_rule_ko: "과목당 50% 이상 득점 시 합격"
      pass_rates:
        - period: "2025"
          rate_pct: 71.0
          examinees: 45000
        - period: "2024"
          rate_pct: 69.5
          examinees: 48000
        - period: "2023"
          rate_pct: 70.0
          examinees: 46500
      pass_rate_avg_pct: 70.17
      hours_min: 240
      hours_typical: 360
      hours_max: 480
      sessions_per_year: 300
      next_dates_ko: "연중 상시 온디맨드 CBT 시행"
      fee:
        amount: 360
        currency: GBP
        krw_approx: 630000
        fx_date: "2026-11-11"
    - name_ko: "Applied Skills (실무 응용 6과목)"
      subjects_ko: ['Corporate and Business Law (LW)', 'Performance Management (PM)', 'Taxation (TX)', 'Financial Reporting (FR)', 'Audit and Assurance (AA)', 'Financial Management (FM)']
      format: mixed
      question_summary_ko: "객관식 및 시나리오 서술형 컴퓨터 시험 (과목당 180분)"
      duration_min: 1080
      passing_rule_ko: "과목당 50% 이상 득점 시 합격"
      pass_rates:
        - period: "2025"
          rate_pct: 49.0
          examinees: 62000
        - period: "2024"
          rate_pct: 47.8
          examinees: 65000
        - period: "2023"
          rate_pct: 48.5
          examinees: 63500
      pass_rate_avg_pct: 48.43
      hours_min: 600
      hours_typical: 840
      hours_max: 1200
      sessions_per_year: 4
      next_dates_ko: "3월, 6월, 9월, 12월 연 4회 실시"
      fee:
        amount: 900
        currency: GBP
        krw_approx: 1575000
        fx_date: "2026-11-11"
    - name_ko: "Strategic Professional (전략 전문 4과목)"
      subjects_ko: ['Strategic Business Leader (SBL)', 'Strategic Business Reporting (SBR)', '선택 2과목 (AFM, APM, ATX, AAA 중 택2)']
      format: essay
      question_summary_ko: "고급 비즈니스 케이스 스터디 및 시나리오 서술형 (과목당 195~240분)"
      duration_min: 840
      passing_rule_ko: "과목당 50% 이상 득점 시 합격"
      pass_rates:
        - period: "2025"
          rate_pct: 39.5
          examinees: 38000
        - period: "2024"
          rate_pct: 38.2
          examinees: 41000
        - period: "2023"
          rate_pct: 38.0
          examinees: 39500
      pass_rate_avg_pct: 38.57
      hours_min: 500
      hours_typical: 700
      hours_max: 1000
      sessions_per_year: 4
      next_dates_ko: "3월, 6월, 9월, 12월 연 4회 실시"
      fee:
        amount: 800
        currency: GBP
        krw_approx: 1400000
        fx_date: "2026-11-11"
  exemptions_ko: "관련 학과(회계학, 경영학 전공 학사) 졸업자는 Applied Knowledge 및 Skills 최대 9개 과목까지 면제"
  total:
    hours_min: 1340
    hours_typical: 1900
    hours_max: 2680
    hours_basis: official
    hours_basis_note_ko: "ACAS 공식 가이드(비전공자 13과목 완주 기준 총 1,800~2,000시간, 전공자 면제 시 대폭 감축) 반영"
    min_calendar_months: 24
    pass_rate_avg_pct: 52.39

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['최초 학생 등록비(Initial Registration) 약 89 GBP (약 156,000 KRW)', 'ACCA 학생 연회비 약 134 GBP (약 235,000 KRW)', 'EPSM 모듈 이수비 75 GBP (약 131,000 KRW)', '정회원 연회비 약 310 GBP (약 543,000 KRW)']

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 2
  hours_score: 5
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: true
    non_written_assessment: true
  structure_score: 5
  level: 4
  rationale_ko: "3개 레벨 총 13과목에 달하는 방대한 시험 체계와 주관식 전략 케이스 서술, 36개월 실무경력 요건이 결합된 4단계(고급) 글로벌 자격입니다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.accaglobal.com"
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

## gl_cgma

```yaml
# ---------- A. Identity ----------
id: gl_cgma
name_ko: "CIMA/CGMA(글로벌공인관리회계사)"
name_orig: "Chartered Global Management Accountant (CIMA / AICPA)"
tier: 1
region: GLOBAL
exam_type: certificate
domain: ['accounting_tax']
issuer: "CIMA (Chartered Institute of Management Accountants) / AICPA-CIMA"
official_url: "https://www.aicpa-cima.com"
status: active
summary_ko: "영국 CIMA와 미국 AICPA가 공동으로 설립한 세계 최대의 관리회계사 네트워크 자격입니다. 기업 전략, 비즈니스 리더십, 재무 운영을 통합하여 평가하며 케이스 스터디 중심의 실무 해결 능력을 중점 검증합니다."
usage_ko: "영연방 국가 및 글로벌 대기업 CFO, 재무이사, 전략기획총괄 임원 선발 시 최우선적으로 선호되는 글로벌 자격입니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "제한 없는 개방형 입학 경로"
      age_min: 18
      age_max: null
      education_accepted: ['any']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "Open to all candidates; relevant degree holders or working professionals can enter directly into higher levels."
  extra_checks_ko: ['학사 학위 보유 여부에 따른 단계별 면제 심사(Exemption Search)']
  exam_languages: ['en']
  english_level_needed: advanced
  english_level_reason: "Case Study exams require 3 hours of real-time corporate business simulation writing in English."
  test_countries: ['KR', 'GB', 'US', 'SG', 'HK', 'MY', 'ZA', 'AU']
  retake_limit_ko: "응시 횟수 제한 없음."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 3
  work_fields_accepted: ['corporate_finance', 'accounting_tax']
  other_requirements_ko: ['3년 이상의 실무경력요건(PER) 심사 통과 및 CIMA/AICPA 회원 가입']
  validity_ko: "연회비 납부 및 CPD 이수 시 영구 유효."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "Certificate in Business Accounting (기초 4과목)"
      subjects_ko: ['Fundamentals of Business Economics', 'Fundamentals of Management Accounting', 'Fundamentals of Financial Accounting', 'Fundamentals of Ethics, Corporate Governance and Business Law']
      format: mcq
      question_summary_ko: "객관식 온디맨드 CBT (과목당 120분)"
      duration_min: 480
      passing_rule_ko: "과목당 70% 이상 득점 시 합격"
      pass_rates:
        - period: "2025"
          rate_pct: 68.0
          examinees: 15000
        - period: "2024"
          rate_pct: 67.0
          examinees: 16000
        - period: "2023"
          rate_pct: 66.5
          examinees: 15500
      pass_rate_avg_pct: 67.17
      hours_min: 200
      hours_typical: 300
      hours_max: 400
      sessions_per_year: 300
      next_dates_ko: "상시 온디맨드 시행"
      fee:
        amount: 400
        currency: GBP
        krw_approx: 700000
        fx_date: "2026-11-11"
    - name_ko: "Professional Level (Operational, Management, Strategic)"
      subjects_ko: ['9개 Objective Test 과목(E, P, F)', '3개 종합 Case Study 시험 (OCS, MCS, SCS)']
      format: mixed
      question_summary_ko: "객관식 9과목(90분씩) + 주관식 케이스 스터디 3과목(180분씩)"
      duration_min: 1350
      passing_rule_ko: "OT 과목 70% 이상, 케이스 스터디 80점/150점 이상 득점"
      pass_rates:
        - period: "2025"
          rate_pct: 58.0
          examinees: 22000
        - period: "2024"
          rate_pct: 56.5
          examinees: 24000
        - period: "2023"
          rate_pct: 57.0
          examinees: 23000
      pass_rate_avg_pct: 57.17
      hours_min: 600
      hours_typical: 900
      hours_max: 1300
      sessions_per_year: 4
      next_dates_ko: "케이스 스터디: 2월, 5월, 8월, 11월 연 4회 실시"
      fee:
        amount: 1200
        currency: GBP
        krw_approx: 2100000
        fx_date: "2026-11-11"
  exemptions_ko: "회계학/경영학 학사 또는 MBA 보유자 수준별 면제"
  total:
    hours_min: 800
    hours_typical: 1200
    hours_max: 1700
    hours_basis: official
    hours_basis_note_ko: "CIMA 공식 안내(비전공자 기준 총 약 1,200시간) 반영"
    min_calendar_months: 18
    pass_rate_avg_pct: 62.17

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['학생 등록비 및 연회비 약 130 GBP (약 228,000 KRW)', '정회원 연회비 약 350 GBP (약 613,000 KRW)']

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 2
  hours_score: 5
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: true
    non_written_assessment: true
  structure_score: 5
  level: 4
  rationale_ko: "3개 단계별 케이스 스터디 서술형 평가와 1,200시간의 방대한 학습량, 3년 실무경력 요건이 결합된 4단계(고급) 자격입니다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.aicpa-cima.com"
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

## gl_cia

```yaml
# ---------- A. Identity ----------
id: gl_cia
name_ko: "CIA(국제공인내부감사사)"
name_orig: "Certified Internal Auditor (IIA)"
tier: 1
region: GLOBAL
exam_type: certificate
domain: ['accounting_tax', 'risk_compliance']
issuer: "Institute of Internal Auditors (IIA)"
official_url: "https://www.theiia.org"
status: active
summary_ko: "기업의 내부통제, 지배구조(Governance), 리스크 평가 및 내부감사 실무를 인증하는 세계 유일의 공인 내부감사 전문가 자격입니다. 3개 파트에 걸쳐 내부감사 기준, 실무 수행 절차, 비즈니스 지식을 검정합니다."
usage_ko: "금융기관 및 상장기업 감사위원회, 감사실, 내부통제팀, 리스크관리팀, Big 4 내부감사 컨설팅팀의 필수 전문 자격입니다."

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
      source_text: "Hold an undergraduate degree from an accredited institution."
    - label_ko: "전문학사 및 경력자 경로"
      age_min: null
      age_max: null
      education_accepted: ['associate']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "Hold an associate degree; requires 5 years of internal audit experience for certification."
  extra_checks_ko: ['정부 발행 신분증 및 영문 학위증명서 제출', '신원 보증인(Character Reference) 서명 제출']
  exam_languages: ['ko', 'en', 'ja', 'zh', 'es', 'fr', 'de']
  english_level_needed: none
  english_level_reason: "The examination is officially provided in Korean CBT."
  test_countries: ['KR', 'US', 'GB', 'SG', 'HK', 'JP', 'CN', 'CA']
  retake_limit_ko: "프로그램 등록 후 3년 이내 3개 파트 모두 통과 필수."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 2
  work_fields_accepted: ['accounting_tax', 'corporate_finance']
  other_requirements_ko: ['학사 소지자 기준 2년(석사는 1년)의 내부감사 또는 관련 리스크/컴플라이언스 실무경력 입증']
  validity_ko: "매년 계속전문교육(CPE) 40시간(윤리 2시간 포함) 보고 및 등록 갱신."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "Part 1 (내부감사 기초)"
      subjects_ko: ['내부감사 기초 및 의무적 지침', '독립성과 객관성', '적격성과 전문적 배려', '품질보증 및 개선 프로그램', '거버넌스, 리스크관리, 내부통제', '부정 위험']
      format: mcq
      question_summary_ko: "객관식 4지선다형 125문항 (150분 CBT)"
      duration_min: 150
      passing_rule_ko: "스케일 점수 600점 이상(250~750점 만점, 약 75% 수준) 시 합격"
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 60
      hours_typical: 80
      hours_max: 120
      sessions_per_year: 300
      next_dates_ko: "피어슨VUE 센터에서 연중 상시 응시 가능"
      fee:
        amount: 295
        currency: USD
        krw_approx: 407000
        fx_date: "2026-11-11"
    - name_ko: "Part 2 (내부감사 실무)"
      subjects_ko: ['내부감사 활동 관리', '개별 감사 업무 계획', '감사 업무 수행', '감사 결과 보고 및 진행상황 모니터링']
      format: mcq
      question_summary_ko: "객관식 4지선다형 100문항 (120분 CBT)"
      duration_min: 120
      passing_rule_ko: "스케일 점수 600점 이상 시 합격"
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 60
      hours_typical: 80
      hours_max: 120
      sessions_per_year: 300
      next_dates_ko: "연중 상시 실시"
      fee:
        amount: 295
        currency: USD
        krw_approx: 407000
        fx_date: "2026-11-11"
    - name_ko: "Part 3 (감사인을 위한 비즈니스 지식)"
      subjects_ko: ['비즈니스 통찰력', '정보보안 및 IT', '정보 기술', '재무관리 및 원가회계']
      format: mcq
      question_summary_ko: "객관식 4지선다형 100문항 (120분 CBT)"
      duration_min: 120
      passing_rule_ko: "스케일 점수 600점 이상 시 합격"
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 70
      hours_typical: 100
      hours_max: 140
      sessions_per_year: 300
      next_dates_ko: "연중 상시 실시"
      fee:
        amount: 295
        currency: USD
        krw_approx: 407000
        fx_date: "2026-11-11"
  exemptions_ko: "타 회계 자격(CPA 등) 소지 시 CIA Challenge Exam(단일 시험) 루트 가능"
  total:
    hours_min: 190
    hours_typical: 260
    hours_max: 380
    hours_basis: official
    hours_basis_note_ko: "IIA Learning System 공식 가이드(파트당 80~100시간, 총 약 260시간) 기준"
    min_calendar_months: 6
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['IIA 지원 등록비(Application Fee) 115 USD (약 159,000 KRW, 회원가)', 'IIA 연회비 약 150 USD ~ 275 USD']

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: na
  hours_score: 3
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: true
    non_written_assessment: true
  structure_score: 4
  level: 4
  rationale_ko: "3개 파트 객관식 시험으로 총 260시간 내외의 학습량이 필요해 hours_score 3, structure_score 4를 받았다. IIA가 합격률을 공개하지 않아 합격률 점수를 제외한 두 점수 평균으로 고급(4)으로 산정하였다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.theiia.org"
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
      reason_ko: "IIA가 합격률을 공개하지 않음"
```

## us_cma

```yaml
# ---------- A. Identity ----------
id: us_cma
name_ko: "미국관리회계사(US CMA)"
name_orig: "Certified Management Accountant (IMA)"
tier: 1
region: US
exam_type: certificate
domain: ['accounting_tax']
issuer: "Institute of Management Accountants (IMA)"
official_url: "https://www.imanet.org"
status: active
summary_ko: "기업 내부 의사결정을 위한 전략적 관리회계, 원가관리, 재무계획, 예산 편성, 성과평가 및 기업 재무전략을 총괄하는 글로벌 관리회계 전문가 자격입니다."
usage_ko: "글로벌 다국적 기업 및 국내 대기업의 FP&A(Financial Planning & Analysis) 부서, 재무기획팀, 경영관리본부 핵심 우대 자격입니다."

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
      source_text: "Hold a bachelor's degree from an accredited college or university."
    - label_ko: "대학 재학생 경로 (합격 후 학위 제출)"
      age_min: null
      age_max: null
      education_accepted: ['college_enrolled', 'college_final_year']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "Students currently enrolled in an undergraduate program can sit for the exam."
  extra_checks_ko: ['IMA 정회원(Active Membership) 가입 필수', '최종 자격 인증을 위해 시험 통과 후 7년 이내 학사 학위 및 경력 제출']
  exam_languages: ['en', 'zh']
  english_level_needed: working
  english_level_reason: "Administered in English with written essay responses on corporate finance cases."
  test_countries: ['KR', 'US', 'CN', 'SG', 'JP', 'GB', 'DE']
  retake_limit_ko: "프로메트릭 창구당 파트별 1회 응시 가능."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 2
  work_fields_accepted: ['corporate_finance', 'accounting_tax', 'banking_finance']
  other_requirements_ko: ['관리회계 또는 재무관리 분야 연속 2년 이상의 풀타임 실무경력 입증']
  validity_ko: "매년 계속전문교육(CPE) 30시간 이수 및 IMA 연회비 납부 시 영구 유효."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "Part 1 (재무 계획, 성과 및 분석)"
      subjects_ko: ['External Financial Reporting Decisions', 'Planning, Budgeting, and Forecasting', 'Performance Management', 'Cost Management', 'Internal Controls', 'Technology and Analytics']
      format: mixed
      question_summary_ko: "객관식 100문항(180분) + 서술형 에세이 2문항(60분), 총 240분 CBT"
      duration_min: 240
      passing_rule_ko: "500점 만점 기준 360점 이상 득점 시 합격"
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 120
      hours_typical: 170
      hours_max: 240
      sessions_per_year: 3
      next_dates_ko: "1-2월, 5-6월, 9-10월 연 3개 테스팅 윈도우 운영"
      fee:
        amount: 495
        currency: USD
        krw_approx: 683000
        fx_date: "2026-11-11"
    - name_ko: "Part 2 (전략적 재무 관리)"
      subjects_ko: ['Financial Statement Analysis', 'Corporate Finance', 'Decision Analysis', 'Risk Management', 'Investment Decisions', 'Professional Ethics']
      format: mixed
      question_summary_ko: "객관식 100문항(180분) + 서술형 에세이 2문항(60분), 총 240분 CBT"
      duration_min: 240
      passing_rule_ko: "500점 만점 기준 360점 이상 득점 시 합격"
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 130
      hours_typical: 170
      hours_max: 240
      sessions_per_year: 3
      next_dates_ko: "1-2월, 5-6월, 9-10월 연 3회 실시"
      fee:
        amount: 495
        currency: USD
        krw_approx: 683000
        fx_date: "2026-11-11"
  exemptions_ko: "해당 없음"
  total:
    hours_min: 250
    hours_typical: 340
    hours_max: 480
    hours_basis: provider
    hours_basis_note_ko: "주요 리뷰업체 추정치(파트당 약 150~170시간, 총 약 340시간) 기준"
    min_calendar_months: 6
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['CMA Entrance Fee 300 USD (약 414,000 KRW)', 'IMA 연회비 295 USD (약 407,000 KRW, 학생은 49 USD)']

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: na
  hours_score: 3
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: false
    non_written_assessment: true
  structure_score: 4
  level: 4
  rationale_ko: "서술형 에세이를 포함한 2개 파트 시험으로 총 340시간 내외의 학습량이 필요해 hours_score 3, structure_score 4를 받았다. IMA가 합격률을 공개하지 않아 합격률 점수를 제외한 두 점수 평균으로 고급(4)으로 산정하였다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.imanet.org"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'hours', 'fee', 'award']
  - url: "https://www.gleim.com"
    accessed: "2026-11-11"
    type: provider
    covers: ['hours']
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
      reason_ko: "IMA가 합격률을 공개하지 않음"
```

## us_cpa

```yaml
# ---------- A. Identity ----------
id: us_cpa
name_ko: "미국공인회계사(US CPA)"
name_orig: "Uniform CPA Examination (AICPA / NASBA)"
tier: 1
region: US
exam_type: license
domain: ['accounting_tax']
issuer: "AICPA / NASBA (National Association of State Boards of Accountancy)"
official_url: "https://nasba.org"
status: active
summary_ko: "미국 각 주(State Board of Accountancy)에서 면허를 발급하는 세계 최대 규모의 글로벌 공인회계사 자격입니다. CPA Evolution 개편에 따라 3개 핵심 과목(AUD, FAR, REG)과 1개 선택 전문 분야(BAR, ISC, TCP 중 택1)로 구성되어 있습니다."
usage_ko: "글로벌 회계법인(Big 4), 다국적 기업 재무·회계팀, 미국 상장기업 내부통제 및 회계감사, 국내 금융기관 글로벌 IB 부서에서 핵심 전문인력으로 우대받습니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "대표 주(워싱턴/캘리포니아 등) 학점 충족 경로"
      age_min: null
      age_max: null
      education_accepted: ['bachelor', 'master', 'doctor']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "Hold a bachelor's degree with at least 120 (to test) or 150 (for licensure) semester hours, including specified accounting and business credits."
  extra_checks_ko: ['미국 주별(State Board) 학점 요건 상이: 대표 기준 학사 이상 120~150학점(회계학 24학점 + 경영학 24학점 이상)', '해외 대학 이수 학점의 경우 NIES 또는 FACS 학력평가(Foreign Credential Evaluation) 필수', '일부 주(SSN 요구 주) 외에 괌, 캘리포니아, 워싱턴 등 비미국인 응시 가능 주 선택 응시']
  exam_languages: ['en']
  english_level_needed: working
  english_level_reason: "Conducted in English with technical US GAAP, GAAS, and IRC simulations."
  test_countries: ['KR', 'US', 'JP', 'GB', 'DE', 'IN']
  retake_limit_ko: "첫 과목 합격일로부터 30개월 이내 나머지 3과목 모두 합격 필수 (CPA Evolution 정책 적용)."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 1
  work_fields_accepted: ['accounting_tax', 'corporate_finance']
  other_requirements_ko: ['총 150학점 이수 요건 충족', '미국 공인회계사(Active CPA) 감독 하 1~2년 실무경력 증빙', 'AICPA 윤리시험(Professional Ethics Exam) 90점 이상 통과']
  validity_ko: "주별로 1~3년마다 계속전문교육(CPE 40~120시간) 이수 및 라이선스 갱신."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "4개 섹션 CBT (Core 3과목 + Discipline 1과목)"
      subjects_ko: ['AUD(Auditing and Attestation)', 'FAR(Financial Accounting and Reporting)', 'REG(Taxation and Regulation)', 'Discipline 택1 (BAR, ISC, TCP)']
      format: mixed
      question_summary_ko: "객관식(MCQ 50%) + 시뮬레이션(TBS 50%) 과목당 240분씩 총 4개 섹션 (총 960분)"
      duration_min: 960
      passing_rule_ko: "과목별 75점 이상(0~99점 스케일) 득점 시 개별 과목 합격"
      pass_rates:
        - period: "2025"
          rate_pct: 52.2
          examinees: 88000
        - period: "2024"
          rate_pct: 51.5
          examinees: 92000
        - period: "2023"
          rate_pct: 49.8
          examinees: 86000
      pass_rate_avg_pct: 51.17
      hours_min: 380
      hours_typical: 500
      hours_max: 750
      sessions_per_year: 300
      next_dates_ko: "국내(서울 프로메트릭 센터) 및 전 세계 테스트 센터에서 연중 상시 응시 가능"
      fee:
        amount: 1400
        currency: USD
        krw_approx: 1932000
        fx_date: "2026-11-11"
  exemptions_ko: "호주, 캐나다, 아일랜드, 멕시코 등 MRA(상호인정협정) 체결 국가 CPA의 경우 IQEX 시험으로 대체 가능"
  total:
    hours_min: 380
    hours_typical: 500
    hours_max: 750
    hours_basis: provider
    hours_basis_note_ko: "베커(Becker), AIFA 등 주요 교육기관 과목당 100~130시간(총 약 500시간, 1년 내외) 기준"
    min_calendar_months: 8
    pass_rate_avg_pct: 51.17

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['학력평가(FACS/NIES) 비용 약 250 USD ~ 350 USD (약 345,000 KRW ~ 483,000 KRW)', '국제 시험장 부과금(International Surcharge, 한국 응시 시 과목당 약 390 USD) 별도', '주별 라이선스 등록비 약 150 USD ~ 300 USD']

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 2
  hours_score: 4
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: false
    non_written_assessment: true
  structure_score: 4
  level: 3
  rationale_ko: "섹션별 합격률이 약 51%로 준수하지만 4과목 500시간 이상의 체계적인 학습, 복잡한 시뮬레이션(TBS) 풀이와 150학점 및 실무경력 인증이 결합된 중급(3단계) 전문 자격입니다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://nasba.org"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee']
  - url: "https://www.aicpa-cima.com"
    accessed: "2026-11-11"
    type: official
    covers: ['pass_rate', 'award']
  - url: "https://www.becker.com"
    accessed: "2026-11-11"
    type: provider
    covers: ['hours']
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

## us_ea

```yaml
# ---------- A. Identity ----------
id: us_ea
name_ko: "미국세무사(US EA)"
name_orig: "IRS Enrolled Agent (Special Enrollment Examination)"
tier: 2
region: US
exam_type: license
domain: ['accounting_tax']
issuer: "Internal Revenue Service (IRS) / Prometric"
official_url: "https://www.irs.gov/tax-professionals/enrolled-agents"
status: active
summary_ko: "미국 연방국세청(IRS)에서 미국 연방 세무 대리 권한을 부여하는 유일한 연방 면허입니다. 미국 전역에서 주 경계 없이 납세자를 대리하여 세무신고, 세무조사 대응 및 불복 절차를 수행할 수 있습니다."
usage_ko: "국내외 미국 세무 대리, 미국 진출 한국 기업의 법인세/소득세 신고, 미국 상속·증여세 자문역으로 활동합니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "IRS PTIN 소지자 경로 (학력/경력 불요)"
      age_min: 18
      age_max: null
      education_accepted: ['any']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "Candidates must obtain a Preparer Tax Identification Number (PTIN) from the IRS. No degree or work experience is required to sit."
  extra_checks_ko: ['IRS PTIN(세무신고 대리인 번호) 사전 발급 필수 (온라인 신청)', '최종 면허 등록 시 IRS 세무 신원조회(Tax Compliance Check) 통과']
  exam_languages: ['en']
  english_level_needed: working
  english_level_reason: "Conducted in English covering US Internal Revenue Code provisions."
  test_countries: ['KR', 'US', 'JP', 'GB', 'CA', 'IN']
  retake_limit_ko: "첫 파트 합격 후 3년(36개월) 이내 전 파트 합격 필수."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: ['any']
  other_requirements_ko: ['IRS Form 23 제출 및 연방 세무 체납 여부 신원조회 통과']
  validity_ko: "3년마다 계속전문교육(CPE 72시간, 연간 최소 16시간) 이수 및 갱신."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "SEE 3개 파트 (Special Enrollment Examination)"
      subjects_ko: ['Part 1: Individuals (개인 세무)', 'Part 2: Businesses (법인 및 사업체 세무)', 'Part 3: Representation, Practices and Procedures (세무대리 절차 및 윤리)']
      format: mcq
      question_summary_ko: "파트당 객관식 3지·4지선다형 100문항 (파트당 210분, 총 630분 CBT)"
      duration_min: 630
      passing_rule_ko: "스케일 점수 105점 이상(40~130점 스케일, 약 70% 이상) 득점 시 파트별 합격"
      pass_rates:
      pass_rate_avg_pct: unknown
      hours_min: 180
      hours_typical: 270
      hours_max: 380
      sessions_per_year: 300
      next_dates_ko: "5월부터 이듬해 2월까지 연 10개월간 상시 CBT 시행"
      fee:
        amount: 690
        currency: USD
        krw_approx: 952000
        fx_date: "2026-11-11"
  exemptions_ko: "IRS 5년 이상 근무 경력자 시험 면제 가능"
  total:
    hours_min: 180
    hours_typical: 270
    hours_max: 380
    hours_basis: provider
    hours_basis_note_ko: "Gleim, Fast Forward Academy 등 파트당 약 80~100시간(총 270시간, 약 4~6개월) 권장"
    min_calendar_months: 4
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['PTIN 연간 발급 수수료 약 35.95 USD (약 50,000 KRW)', '최종 면허 등록 수수료 140 USD (약 193,000 KRW)']

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: na
  hours_score: 3
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: true
    non_written_assessment: false
  structure_score: 3
  level: 3
  rationale_ko: "학력 및 실무경력 요건이 없고 합격률이 약 66% 수준이나 3개 파트 270시간의 미국 세법 전문 지식을 학습해야 하는 3단계(중급) 연방 자격입니다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.irs.gov/tax-professionals/enrolled-agents"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'hours', 'fee', 'award']
  - url: "https://www.prometric.com/test-takers/search/irs"
    accessed: "2026-11-11"
    type: provider
    covers: ['structure', 'fee']
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
      reason_ko: "IRS가 SEE 집계 합격률을 공개하지 않아 비공식 집계치는 사용하지 않음".pass_rates: The IRS does not officially publish comprehensive aggregate pass rates for the Special Enrollment Examination (SEE).', 'difficulty.pass_rate_score: Dropped to na per Section 4.1 rule because official pass rate is unknown.']
notes_ko: "미국 연방국세청(IRS)에서 SEE 시험의 공식 합격률 통계를 대외 공표하지 않으므로 Section 4.1 규정에 따라 합격률 기준을 제외하고 평가함."
```

## us_finra_sie

```yaml
# ---------- A. Identity ----------
id: us_finra_sie
name_ko: "FINRA SIE(미국 증권업 기초자격)"
name_orig: "Securities Industry Essentials (SIE) Examination"
tier: 1
region: US
exam_type: license
domain: ['securities_investment']
issuer: "Financial Industry Regulatory Authority (FINRA)"
official_url: "https://www.finra.org"
status: active
summary_ko: "미국 증권업계에 입문하기 위한 필수 기초 공통 자격시험입니다. 증권사 취업 스폰서십 없이도 만 18세 이상이면 누구나 응시할 수 있으며 증권시장 구조, 투자상품, 고객 계좌 규정 및 불공정거래 금지 법규를 다룹니다."
usage_ko: "미국 월스트리트 투자은행(IB) 및 증권사 신입 취업 준비생의 필수 스펙이자 Series 7, 79, 86/87 등 전문 면허 취득을 위한 법정 선행 자격입니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "만 18세 이상 일반 응시 경로 (스폰서 불요)"
      age_min: 18
      age_max: null
      education_accepted: ['any']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "An individual does not need to be associated with a member firm to take the SIE exam. Must be at least 18 years of age."
  extra_checks_ko: ['만 18세 이상', '정부 발행 유효 영문 신분증(여권 등)']
  exam_languages: ['en']
  english_level_needed: working
  english_level_reason: "Conducted in English covering US capital market and regulatory terminology."
  test_countries: ['KR', 'US', 'GB', 'SG', 'HK', 'JP', 'CN', 'CA']
  retake_limit_ko: "불합격 시 30일 대기 (3회 연속 불합격 시 180일 대기)."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: false
  work_years_min: 0
  work_fields_accepted: ['any']
  other_requirements_ko: []
  validity_ko: "합격 결과는 4년간 유효 (4년 이내 FINRA 회원사에 취업하여 전문 자격 취득 필요)."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 객관식 CBT"
      subjects_ko: ['Knowledge of Capital Markets', 'Understanding Products and Their Risks', 'Understanding Trading, Customer Accounts and Prohibited Activities', 'Overview of the Regulatory Framework']
      format: mcq
      question_summary_ko: "객관식 4지선다형 총 75문항(채점) + 10문항(테스트용), 총 105분 CBT"
      duration_min: 105
      passing_rule_ko: "70% 이상 정답(53문항 이상 정답) 시 합격"
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 40
      hours_typical: 70
      hours_max: 100
      sessions_per_year: 300
      next_dates_ko: "프로메트릭 센터에서 연중 상시 응시 가능"
      fee:
        amount: 100
        currency: USD
        krw_approx: 138000
        fx_date: "2026-11-11"
  exemptions_ko: "해당 없음"
  total:
    hours_min: 40
    hours_typical: 70
    hours_max: 100
    hours_basis: provider
    hours_basis_note_ko: "FINRA 및 주요 수험서(Kaplan, Achievable) 권장 학습시간(약 50~80시간, 3~4주) 기준"
    min_calendar_months: 1
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko: []

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: na
  hours_score: 2
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 2
  level: 2
  rationale_ko: "75문항 단일 객관식 입문 시험으로 총 70시간 내외의 학습량이 필요해 hours_score 2, structure_score 2를 받았다. FINRA가 합격률을 공개하지 않아 합격률 점수를 제외한 두 점수 평균으로 초급(2)으로 산정하였다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.finra.org"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'hours', 'fee', 'award']
  - url: "https://achievable.me"
    accessed: "2026-11-11"
    type: provider
    covers: ['hours']
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
      reason_ko: "FINRA가 합격률을 공개하지 않음"
```

## us_finra_series63

```yaml
# ---------- A. Identity ----------
id: us_finra_series63
name_ko: "FINRA Series 63(미국 주정부 증권법)"
name_orig: "Uniform Securities Agent State Law Examination (Series 63)"
tier: 1
region: US
exam_type: license
domain: ['securities_investment', 'risk_compliance']
issuer: "North American Securities Administrators Association (NASAA) / FINRA"
official_url: "https://www.nasaa.org"
status: active
summary_ko: "미국 각 주 단위에서 증권 거래를 유치하고 고객을 유치하기 위해 통일증권법(Uniform Securities Act) 및 주정부 증권 규정을 이해하고 있는지를 검정하는 주정부 법정 자격입니다."
usage_ko: "Series 7 취득자가 각 주정부 라이선스를 부여받아 합법적으로 영업하기 위해 필수적으로 병행 취득하는 자격입니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "제한 없는 일반 응시 경로 (스폰서 불요)"
      age_min: 18
      age_max: null
      education_accepted: ['any']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "Candidates do not need to be sponsored by a FINRA firm to take the Series 63 exam."
  extra_checks_ko: ['만 18세 이상']
  exam_languages: ['en']
  english_level_needed: working
  english_level_reason: "Conducted in English covering the Uniform Securities Act legal provisions."
  test_countries: ['KR', 'US', 'GB', 'SG', 'HK', 'JP', 'CN', 'CA']
  retake_limit_ko: "불합격 시 30일 대기."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: ['securities_asset_mgmt']
  other_requirements_ko: ['주정부 증권위원회(State Securities Administrator) 등록']
  validity_ko: "등록 유지 시 계속 유효, 2년 이상 영업 중단 시 효력 상실."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 객관식 CBT"
      subjects_ko: ['Regulation of Investment Advisers', 'Regulation of Broker-Dealers', 'Regulation of Securities and Transactions', 'Ethical Practices and Fiduciary Obligations']
      format: mcq
      question_summary_ko: "객관식 4지선다형 총 60문항(채점) + 5문항(미채점), 총 75분 CBT"
      duration_min: 75
      passing_rule_ko: "약 71.7% 이상 정답(43문항 이상 정답) 시 합격"
      pass_rates:
      pass_rate_avg_pct: unknown
      hours_min: 20
      hours_typical: 40
      hours_max: 60
      sessions_per_year: 300
      next_dates_ko: "프로메트릭 센터에서 연중 상시 응시 가능"
      fee:
        amount: 147
        currency: USD
        krw_approx: 203000
        fx_date: "2026-11-11"
  exemptions_ko: "해당 없음"
  total:
    hours_min: 20
    hours_typical: 40
    hours_max: 60
    hours_basis: provider
    hours_basis_note_ko: "주요 수험서 기준 평균 30~45시간(약 1~2주) 단기 집중 학습"
    min_calendar_months: 1
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['주정부 라이선스 등록비 약 50 USD ~ 100 USD']

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: na
  hours_score: 1
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 2
  level: 2
  rationale_ko: "문항 수가 60문항에 불과하고 합격률이 80%를 넘으며 40시간 내외로 단기 합격이 가능한 입문 난이도(1단계) 자격입니다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.nasaa.org"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'hours', 'fee', 'award']
  - url: "https://achievable.me"
    accessed: "2026-11-11"
    type: provider
    covers: ['hours']
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
      reason_ko: "NASAA와 FINRA가 주법 시험의 합격률을 공개하지 않음".pass_rates: NASAA and FINRA do not officially publish ongoing aggregate pass-rate statistics for state law exams.', 'difficulty.pass_rate_score: Dropped to na per Section 4.1 rule because pass rate is unknown.']
notes_ko: "NASAA 및 FINRA에서 공식 주정부 시험 합격률을 공표하지 않으므로 Section 4.1 규정에 따라 합격률 기준을 제외하고 학습시간과 구조점수 평균으로 산출함."
```

## us_finra_series65

```yaml
# ---------- A. Identity ----------
id: us_finra_series65
name_ko: "FINRA Series 65(미국 투자자문관리사)"
name_orig: "Uniform Investment Adviser Law Examination (Series 65)"
tier: 1
region: US
exam_type: license
domain: ['securities_investment', 'financial_planning']
issuer: "North American Securities Administrators Association (NASAA) / FINRA"
official_url: "https://www.nasaa.org"
status: active
summary_ko: "미국에서 수수료 기반(Fee-only)의 투자 자문 및 재무 상담을 제공하는 투자자문사 대표(IAR: Investment Adviser Representative)로 활동하기 위한 핵심 자격입니다. 스폰서십 없이 누구나 응시할 수 있습니다."
usage_ko: "미국 독립투자자문사(RIA) 설립, 헤지펀드 및 패밀리오피스 자문인력 등록의 필수 라이선스입니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "제한 없는 일반 응시 경로 (스폰서 불요)"
      age_min: 18
      age_max: null
      education_accepted: ['any']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "Candidates do not need to be sponsored by a member firm to sit for the Series 65 exam."
  extra_checks_ko: ['만 18세 이상']
  exam_languages: ['en']
  english_level_needed: working
  english_level_reason: "Conducted in English covering investment advisory regulations and economics."
  test_countries: ['KR', 'US', 'GB', 'SG', 'HK', 'JP', 'CN', 'CA']
  retake_limit_ko: "불합격 시 30일 대기 (3회 연속 불합격 시 180일 대기)."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: ['securities_asset_mgmt', 'banking_finance']
  other_requirements_ko: ['주정부 증권위원회(State Securities Administrator) IAR 등록']
  validity_ko: "등록 유지 시 계속 유효, 2년 이상 미등록 시 재응시 필요."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 객관식 CBT"
      subjects_ko: ['Economic Factors and Business Information', 'Investment Vehicle Characteristics', 'Client Investment Recommendations and Strategies', 'Laws, Regulations, and Guidelines, including Prohibition on Unethical Business Practices']
      format: mcq
      question_summary_ko: "객관식 4지선다형 총 130문항(채점) + 10문항(미채점), 총 180분 CBT"
      duration_min: 180
      passing_rule_ko: "약 70.7% 이상 정답(92문항 이상 정답) 시 합격"
      pass_rates:
      pass_rate_avg_pct: unknown
      hours_min: 60
      hours_typical: 100
      hours_max: 150
      sessions_per_year: 300
      next_dates_ko: "프로메트릭 센터에서 연중 상시 응시 가능"
      fee:
        amount: 187
        currency: USD
        krw_approx: 258000
        fx_date: "2026-11-11"
  exemptions_ko: "CFA, CFP, ChFC 소지자는 Series 65 시험 완전 면제(IAR 자격 자동 인정)"
  total:
    hours_min: 60
    hours_typical: 100
    hours_max: 150
    hours_basis: provider
    hours_basis_note_ko: "주요 수험 교육기관 기준 약 80~120시간(약 4~6주) 권장"
    min_calendar_months: 2
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['주정부 IAR 라이선스 등록비 약 100 USD ~ 200 USD']

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: na
  hours_score: 2
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 2
  level: 2
  rationale_ko: "스폰서 없이 응시 가능하며 합격률이 약 67% 수준이고 100시간 내외의 학습으로 취득할 수 있는 2단계(초급) 자격입니다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.nasaa.org"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'hours', 'fee', 'award']
  - url: "https://achievable.me"
    accessed: "2026-11-11"
    type: provider
    covers: ['hours']
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
      reason_ko: "NASAA와 FINRA가 Series 65의 합격률을 공개하지 않음".pass_rates: NASAA and FINRA do not officially publish ongoing aggregate pass-rate statistics for the Series 65 exam.', 'difficulty.pass_rate_score: Dropped to na per Section 4.1 rule because pass rate is unknown.']
notes_ko: "NASAA 및 FINRA에서 공식 합격률을 공표하지 않으므로 규정에 따라 합격률 점수를 제외하고 학습시간과 구조점수의 평균으로 산출함."
```

## us_finra_series7

```yaml
# ---------- A. Identity ----------
id: us_finra_series7
name_ko: "FINRA Series 7(미국 일반증권관리인)"
name_orig: "General Securities Representative Exam (Series 7)"
tier: 1
region: US
exam_type: license
domain: ['securities_investment']
issuer: "Financial Industry Regulatory Authority (FINRA)"
official_url: "https://www.finra.org"
status: active
summary_ko: "미국 증권회사에서 주식, 채권, 옵션, 펀드, 지방채 등 거의 모든 일반 증권의 거래 및 매매 권유를 수행할 수 있는 미국 증권업계의 대표적인 핵심 영업 라이선스입니다."
usage_ko: "월스트리트 증권사 브로커, 프라이빗 뱅커, 기관영업 및 트레이더의 법정 필수 면허입니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "FINRA 회원사 스폰서십 및 SIE 합격자 경로"
      age_min: 18
      age_max: null
      education_accepted: ['any']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "Must be sponsored by a FINRA member firm and pass the SIE exam before or concurrently."
  extra_checks_ko: ['FINRA 회원 증권사(Member Firm)의 고용 및 스폰서십(Form U4 제출) 필수', 'SIE(Securities Industry Essentials) 선행 합격 필수', '범죄경력 및 신원조회(Fingerprint/Background Check) 통과']
  exam_languages: ['en']
  english_level_needed: working
  english_level_reason: "Conducted in English covering extensive equity, debt, and options trading rules."
  test_countries: ['KR', 'US', 'GB', 'SG', 'HK', 'JP', 'CN', 'CA']
  retake_limit_ko: "불합격 시 30일 대기 (3회 연속 불합격 시 180일 대기)."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: ['securities_asset_mgmt', 'banking_finance']
  other_requirements_ko: ['FINRA 공식 증권외무원(General Securities Representative) 등록']
  validity_ko: "FINRA 회원사 재직 시 유효, 퇴직 후 2년 이내 재취업하지 않으면 라이선스 말소."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 객관식 CBT"
      subjects_ko: ['Seeks Business for the Broker-Dealer', 'Opens Accounts After Obtaining and Evaluating Customer Information', 'Provides Customers with Information About Investments', 'Obtains and Verifies Customer Purchase and Sales Instructions']
      format: mcq
      question_summary_ko: "객관식 4지선다형 125문항(채점) + 10문항(미채점), 총 225분 CBT"
      duration_min: 225
      passing_rule_ko: "72% 이상 정답(90문항 이상 정답) 시 합격"
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 80
      hours_typical: 130
      hours_max: 180
      sessions_per_year: 300
      next_dates_ko: "프로메트릭 센터에서 연중 상시 응시 가능"
      fee:
        amount: 245
        currency: USD
        krw_approx: 338000
        fx_date: "2026-11-11"
  exemptions_ko: "해당 없음"
  total:
    hours_min: 80
    hours_typical: 130
    hours_max: 180
    hours_basis: provider
    hours_basis_note_ko: "FINRA 회원사 신입사원 연수 프로그램 기준 평균 100~150시간(약 4~6주) 집중 수험"
    min_calendar_months: 2
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['Form U4 등록 및 지문조회 수수료 약 100 USD (스폰서 회사 전액 부담)']

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
  rationale_ko: "125문항 대표자 자격시험으로 총 130시간 내외의 학습량이 필요해 hours_score 2, structure_score 3을 받았다. FINRA가 합격률을 공개하지 않아 합격률 점수를 제외한 두 점수 평균으로 중급(3)으로 산정하였다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.finra.org"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'hours', 'fee', 'award']
  - url: "https://achievable.me"
    accessed: "2026-11-11"
    type: provider
    covers: ['hours']
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
      reason_ko: "FINRA가 합격률을 공개하지 않음"
```

