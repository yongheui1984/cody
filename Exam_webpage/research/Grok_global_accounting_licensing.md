## gb_aca

```yaml
# ---------- A. Identity ----------
id: gb_aca
name_ko: "ICAEW 차터드 어카운턴트(ACA)"
name_orig: "ACA qualification"
tier: 1
region: GB
exam_type: certificate
domain: [accounting_tax]
issuer: "Institute of Chartered Accountants in England and Wales (ICAEW)"
official_url: "https://www.icaew.com/start-your-career/how-to-become-a-chartered-accountant/discover-aca"
status: reform_announced
status_note: "ACA is still offered. The 2026 professional results already contain both a new syllabus and the previous papers. The fees page, published 2025-05-09, replaces the Advanced Level Case Study from the 2027 fee table with a Technical Case Study and a Strategic Case Study and adds a Professional Fundamental Case Study price. Question format, duration and the full paper list were not on an opened syllabus handbook."
summary_ko: |
  ICAEW ACA는 영국과 웨일스의 차터드 어카운턴트 자격이다. 안내 페이지는 Certificate, Professional, Advanced의 세 수준과 14개 시험, 공인 교육 고용주와의 훈련 계약, 전문 경험 450일, 전문 학습 30단위를 완료 요건으로 적는다.
  2026년 시험 결과에는 새 Professional 과목과 이전 과목이 함께 있어, 14개라는 문장과 현재 응시 과목 목록을 한 세트로 확정하지 않았다.
usage_ko: |
  과정을 마치면 ICAEW 차터드 어카운턴트 자격을 받을 수 있다. 훈련 계약이 있는 경우가 보통이며, 독립 학생 등록도 수수료 페이지에 있다.
  법정 감사 등록의 추가 요건은 이번에 연 페이지에서 확인하지 못했다. 기간은 보통 3년에서 5년이라고 안내하나, 이것은 최소 일수로 환산하지 않았다.

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  nationality_note_ko: "시민권 요건은 확인되지 않았다. 해외 경로가 있다고 안내 페이지가 적는다."
  paths:
    - label_ko: "A레벨과 GCSE"
      age_min: null
      age_max: null
      education_accepted: [hs_or_below]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "Two A-level passes at grades A* to E plus three GCSEs at grades 9 to 4 or A to C are an accepted academic route."
    - label_ko: "학사 이상 또는 이에 상당하는 학위"
      age_min: null
      age_max: null
      education_accepted: [bachelor, master, doctor]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "A comparable bachelor's degree is an accepted entry route."
    - label_ko: "파운데이션 학위"
      age_min: null
      age_max: null
      education_accepted: [associate]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "A foundation degree is listed among the accepted entry routes."
    - label_ko: "25세 초과와 7년 경력"
      age_min: 25
      age_max: null
      education_accepted: [any]
      work_years_min: 7
      work_fields_accepted: [accounting_tax, corporate_finance, banking_finance]
      source_text: "Mature entrants over 25 with seven years' experience in finance, law or accountancy can be accepted."
    - label_ko: "인정된 다른 회계 단체 회원"
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "Membership of AAT, ACCA, CIMA or CIPFA, or membership of an approved IFAC body, is an accepted route."
  extra_checks_ko:
    - "A레벨 경로를 고등학교 졸업 이하로 넣은 것은 템플릿 어휘의 한계다. 스코틀랜드 Higher, 아일랜드 Leaving Certificate, European Baccalaureate, International Baccalaureate도 별도 학력 경로로 적혀 있다."
    - "만 25세 초과 경로의 법률 경력은 템플릿 분야에 없다. 금융·회계로 대응한 값 외에 법률 경력도 본문 요건이다."
    - "CFAB를 마친 경로도 있다."
    - "훈련을 마치려면 공인 교육 고용주와 훈련 계약이 필요하다. 독립 학생은 시험 등록이 가능하므로, 훈련 계약을 응시 요건으로 단정하지 않았다."
    - "다른 회계 단체 회원 경로의 education any는 학위가 없다는 뜻이 아니라, 회원 자격이 별도 조건이라는 뜻이다."
  exam_languages: [en]
  english_level_needed: advanced
  english_level_reason: "The qualification, fees and result reports are English, and the Advanced Level includes a case study. Item types and reading time were not in an opened syllabus."
  test_countries: [GB]
  retake_limit_ko: "재응시 횟수 제한은 연 페이지에서 확인하지 못했다."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: unknown
  work_fields_accepted: [accounting_tax]
  other_requirements_ko:
    - "완료에는 공인 교육 고용주와의 훈련 계약이 필요하다."
    - "안내 페이지는 훈련 3년이라는 설명과, 전문 경험 최소 450일을 함께 적는다. 450일을 연 단위로 바꾸지 않아 work_years_min은 unknown이다."
    - "전문 학습 30단위가 필요하다."
    - "기간은 보통 3년에서 5년이며 수준은 Level 7이라고 적는다. 보통 기간을 최소 기간으로 쓰지 않았다."
  time_limit_ko: "합격 후 요건을 마치는 별도 마감은 확인하지 못했다."
  validity_ko: |
    학생 연회비는 2026년 216파운드에 VAT가 더해진다. 2027-01-01부터는 223파운드에 VAT가 더해진다. VAT 세율은 연 수수료 페이지에 없어 원화에 더하지 않았다.
    자격 취득 후 계속교육 시간은 이번에 연 페이지에서 확인하지 못했다.

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "Certificate Level"
      subjects_ko:
        - "Certificate Level 시험"
      format: unknown
      question_summary_ko: "Discover ACA는 세 수준을 합쳐 14개 시험이라고 적는다. Certificate의 과목 이름, 문항 형식, 시간은 실러버스 핸드북을 열지 못했다. 수수료는 시험 1건당 99파운드다."
      duration_min: unknown
      passing_rule_ko: "합격 점수는 연 페이지에서 확인하지 못했다."
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: unknown
      next_dates_ko: "다음 시험일과 접수 마감은 실러버스와 일정 페이지를 열지 못했다."
      fee:
        amount: 99
        currency: GBP
        krw_approx: 176000
        fx_date: 2026-11-11
    - name_ko: "Professional Level"
      subjects_ko:
        - "새 과정: Fundamental Case Study, Assurance Risk and Reporting, Corporate Reporting Data and Assurance, Tax Compliance and Planning, Business and Digital Strategy, Corporate Financial Strategy"
        - "이전 과정: Audit and Assurance, Financial Accounting and Reporting, Tax Compliance, Business Planning, Business Strategy and Technology, Financial Management"
      format: unknown
      question_summary_ko: "2026-06 공식 통계에 새 과목과 이전 과목이 함께 있다. 한 학생이 두 과정을 모두 보는 구조가 아니므로 과목 합격률을 하나의 수준 합격률로 합치지 않았다. 수수료 페이지의 Professional 시험 1건은 133파운드다."
      duration_min: unknown
      passing_rule_ko: "합격 점수는 연 페이지에서 확인하지 못했다."
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: unknown
      next_dates_ko: "2026년 Professional 결과 회차는 3월, 6월, 12월 통계가 파일로 있으나 3월 PDF의 과목 합격률 표까지는 추출하지 못했다. 다음 접수일은 확인하지 못했다."
      fee:
        amount: 133
        currency: GBP
        krw_approx: 237000
        fx_date: 2026-11-11
    - name_ko: "Advanced Level"
      subjects_ko:
        - "Case Study"
        - "Corporate Reporting"
        - "Strategic Business Management"
      format: unknown
      question_summary_ko: "2025-11과 2026-07 공식 결과는 이 세 과목이다. 2027년 수수료표는 Case Study를 Technical Case Study와 Strategic Case Study로 바꾼다. 세 과목의 합격률이 달라 수준 평균은 만들지 않았다. 2026년 수수료는 Corporate Reporting과 Strategic Business Management가 각 220파운드, Case Study가 297파운드다."
      duration_min: unknown
      passing_rule_ko: "합격 점수는 연 페이지에서 확인하지 못했다."
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: unknown
      next_dates_ko: "연 결과 회차는 2025년 11월과 2026년 7월이다. 연간 횟수와 2027년 첫 새 케이스 스터디 날짜는 확인하지 못했다."
      fee:
        amount: unknown
        currency: GBP
        krw_approx: unknown
        fx_date: 2026-11-11
  exemptions_ko:
    - "Certificate와 Professional에는 시험 수수료와 같은 금액의 학점 인정(CPL) 수수료가 있다. Advanced CPL은 수수료 페이지에 없다고 되어 있다."
  total:
    hours_min: unknown
    hours_typical: unknown
    hours_max: unknown
    hours_basis: unknown
    hours_basis_note_ko: "ICAEW 권장 학습시간과 제공자 시간을 열지 않았다. 2026-11-11에 다시 확인한 범위에서도 연 ICAEW 페이지와 BPP, Kaplan, Becker, Gleim 페이지에 과목별 또는 전체 학습시간 합계가 없어 총시간과 난이도 수준은 unknown이다. 시험 시간(분)은 학습시간이 아니므로 바꾸지 않았다."
    min_calendar_months: unknown
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "2026년 Certificate 시험 1건 99파운드(약 176000원), Professional 1건 133파운드(약 237000원)."
    - "2026년 Advanced Corporate Reporting 220파운드(약 392000원), Strategic Business Management 220파운드(약 392000원), Case Study 297파운드(약 529000원). 수준 수수료는 금액이 달라 unknown이다."
    - "학생 연회비 2026년 216파운드+VAT, 약 385000원에 VAT 별도. 2027-01-01부터 223파운드+VAT, 약 397000원에 VAT 별도."
    - "2027년 수수료표의 Professional Fundamental Case Study는 160파운드, Advanced의 Technical Case Study와 Strategic Case Study는 각 350파운드라고 수수료 페이지가 적는다. 2026-11-11의 응시료 본문은 2026년 금액이다."
    - "수업료와 교재는 별도다. 훈련 계약이 있으면 고용주가 내는 경우가 많다고 페이지가 적는다."

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: na
  hours_score: unknown
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: true
    non_written_assessment: true
  structure_score: 4
  level: unknown
  rationale_ko: |
    수준 안의 과목 합격률이 서로 달라 합격률 점수를 계산하지 않았다. 학습시간이 없어 시간 점수도 없다.
    구조는 여러 과목, 세 수준, 훈련 계약과 450일 경험으로 4점이다. 문항 형식을 확인하지 못해 서술·계산 가점은 주지 않았다. 난이도 수준은 계산하지 않았다.

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.icaew.com/start-your-career/how-to-become-a-chartered-accountant/discover-aca"
    accessed: 2026-11-11
    type: official
    covers: [eligibility, award, structure]
  - url: "https://www.icaew.com/learning-and-development/aca/minimum-entry-requirements-for-the-aca"
    accessed: 2026-11-11
    type: official
    covers: [eligibility]
  - url: "https://www.icaew.com/students/exams/book-an-exam/exam-applications/aca-fees"
    accessed: 2026-11-11
    type: official
    covers: [fee]
  - url: "https://www.icaew.com/-/media/corporate/files/for-current-aca-students/exam-results/2026/final-stats-july-2026.ashx"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://www.icaew.com/-/media/corporate/files/for-current-aca-students/exam-results/2026/final-stats-june-2026.ashx"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://www.icaew.com/-/media/corporate/files/for-current-aca-students/exam-results/2025/overall-stats-november-2025.ashx"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://www.icaew.com/-/media/corporate/files/for-current-aca-students/exam-results/2025/december-2025-final-stats.ashx"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://wise.com/us/currency-converter/gbp-to-krw-rate/history"
    accessed: 2026-11-11
    type: other
    covers: [fee]
confidence:
  eligibility: high
  award: medium
  structure: low
  hours: low
  pass_rate: medium
  fee: high
as_of: 2026-11-11
unknown_reasons:
  - "Advanced 합격률을 하나로 만들지 않았다. 전체 응시 기준 2025-11은 Case Study 87.3%(3786명 중 3306명), Corporate Reporting 80.5%(4187명 중 3371명), Strategic Business Management 87.0%(4243명 중 3690명)이다. 2026-07은 93.0%(3966명 중 3687명), 80.9%(3958명 중 3204명), 90.7%(3479명 중 3156명)이다."
  - "Professional 합격률도 하나로 만들지 않았다. 2026-06 전체 응시 기준 새 과목은 Fundamental Case Study 93.4%(4654명 중 4346명), Assurance Risk and Reporting 92.8%(2925명 중 2715명), Corporate Reporting Data and Assurance 82.5%(40명 중 33명), Tax Compliance and Planning 74.9%(950명 중 712명), Business and Digital Strategy 84.1%(1539명 중 1295명), Corporate Financial Strategy 84.4%(812명 중 685명)이다."
  - "2025-12 이전 과목 전체 응시 기준은 Audit and Assurance 79.3%(1529명 중 1212명), Financial Accounting and Reporting IFRS 78.4%(1410명 중 1106명), Tax Compliance 76.0%(1764명 중 1341명), Business Planning Taxation 79.6%(1912명 중 1522명), Business Strategy and Technology 89.0%(2379명 중 2117명), Financial Management 91.3%(2573명 중 2348명)이다. 금융 업종 선택 과목과 UK GAAP는 인원이 작아 여기 나열하지 않았다."
  - "Certificate 합격률 PDF는 열지 못했다."
  - "award.work_years_min: 3년이라는 설명과 450일을 서로 환산하지 않았다."
  - "format, duration_min, sessions_per_year, hours, min_calendar_months: 실러버스 핸드북과 일정 페이지를 열지 못했다."
  - "Advanced fee.amount: 220파운드 과목과 297파운드 과목이 한 수준에 같이 있다."
notes_ko: |
  paper-grouping은 기관의 세 수준이다. 개별 시험이 많지만 2026년에 이전 과정과 새 과정이 겹치고 Discover 페이지의 14개 시험과 수수료표의 2027년 구성이 달라, 과목별 단계를 확정 목록으로 만들지 않았다.
  학생 7,146명이 2026년 7월 Advanced에 응시했고 시험 11,403건 중 모든 응시 과목을 합격한 학생은 6,003명이다. 이 학생 단위 수치를 과목 합격률로 바꾸지 않았다.
  2026년 6월 Professional은 학생 7,844명, 시험 12,448건이다.
```

## gb_imc

```yaml
# ---------- A. Identity ----------
id: gb_imc
name_ko: "투자관리 자격증(IMC)"
name_orig: "CFA UK Level 4 Certificate in Investment Management (Investment Management Certificate, IMC)"
tier: 1
region: GB
exam_type: certificate
domain: [securities_investment]
issuer: "CFA Society of the United Kingdom (CFA UK)"
official_url: "https://www.cfauk.org/learn/qualifications/investment-management-certificate"
status: active
summary_ko: |
  IMC는 CFA UK가 개발·시행·수여하는 레벨 4 자격이다. Unit 1 투자 환경과 Unit 2 투자 실무를 모두 합격하면 완료된다.
  영국 투자업의 입문 자격으로 쓰이고, ‘투자 운용’에 대한 FCA 적합 자격이며 CFA Level I과 합치면 자산관리·투자자문 시험 기준을 맞출 수 있다고 CFA UK가 안내한다. 자격 자체는 영국 규제·세제에 묶여 있어 지역은 영국으로 둔다.
usage_ko: |
  보유자는 이름 뒤에 IMC를 쓸 수 있다. 투자운용사 등이 신입 역량으로 요구하는 자격이고, FCA 적합 자격 목록의 투자 운용 항목에 오른다.
  IMC만으로 영국 규제 업무를 할 수 있는 개인 인가가 생기지는 않는다. 규제 활동을 하려면 인가 회사 소속과 그 회사의 적격성 판단이 따로 필요하다. CISI의 Certificate in Investment Management는 다른 자격이라 이 기록에 넣지 않았다.

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  nationality_note_ko: "국적, 거주, 취업 허가 요건은 연 자격 사양에 없다."
  paths:
    - label_ko: "선행 자격 없이 응시"
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "There is no requirement for you to have completed any other qualifications prior to taking the IMC."
  extra_checks_ko:
    - "나이 하한은 연 페이지에 없다."
    - "면제가 있다고 자격 사양은 적지만, 면제 대상 목록 페이지는 열지 못했다."
    - "두 유닛을 서로 다른 실러버스 버전으로 봐도 자격은 수여된다."
  exam_languages: [en]
  english_level_needed: advanced
  english_level_reason: "Both units are English-only and use multiple choice, item sets and gap-fill, and formulas are not provided in the exam."
  test_countries: [GB]
  retake_limit_ko: "재응시 횟수나 대기 기간은 연 페이지에서 확인하지 못했다. 시험은 Pearson 센터에서 영업일마다, OnVUE로는 매일 24시간 볼 수 있다."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: false
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko: []
  validity_ko: "연 자격 사양과 IMC 안내 페이지에는 합격 후 만료 기간이나 의무 보수교육이 적혀 있지 않다."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "Unit 1 투자 환경"
      subjects_ko:
        - "투자 환경(세부 주제 배점은 현재 실러버스 23 원문 미수록)"
      format: mixed
      question_summary_ko: "85문항, 100분. 표준 객관식, 지문 세트, 빈칸 채우기가 있다. 휴대용 계산기는 안 되고 화면 계산기를 쓴다. 공식은 시험지에 주지 않는다."
      duration_min: 100
      passing_rule_ko: "합격선은 65%에서 75% 사이다. 어려운 문항이 많은 시험지는 합격선이 낮아진다. 고정된 한 점수는 없다."
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 100
      hours_typical: 100
      hours_max: 100
      sessions_per_year: unknown
      next_dates_ko: "2026-11-11 현재 실러버스 버전 23이며 시험 기간은 2025-12-01부터 2026-11-30까지다. 버전 24는 2026-12-01부터 2027-11-30까지다. 좌석은 수시다."
      fee:
        amount: 365
        currency: GBP
        krw_approx: 650000
        fx_date: "2026-11-11"
    - name_ko: "Unit 2 투자 실무"
      subjects_ko:
        - "투자 실무(세부 주제 배점은 현재 실러버스 23 원문 미수록)"
      format: mixed
      question_summary_ko: "105문항, 140분. 표준 객관식, 지문 세트, 빈칸 채우기가 있다. 휴대용 계산기는 안 되고 공식은 제공되지 않는다."
      duration_min: 140
      passing_rule_ko: "합격선은 60%에서 70% 사이다. 어려운 문항이 많은 시험지는 합격선이 낮아진다."
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 140
      hours_typical: 140
      hours_max: 140
      sessions_per_year: unknown
      next_dates_ko: "Unit 1과 같이 수시 응시다. 2026-11-11 현재 실러버스는 버전 23이고 2026-12-01에 버전 24로 바뀐다. 두 유닛의 순서는 자유다."
      fee:
        amount: 390
        currency: GBP
        krw_approx: 694000
        fx_date: "2026-11-11"
  exemptions_ko: "자격 사양은 면제가 있고 CFA UK 웹사이트에 안내되어 있다고만 적는다. 대상 목록은 열지 못했다."
  total:
    hours_min: 240
    hours_typical: 240
    hours_max: 240
    hours_basis: official
    hours_basis_note_ko: "CFA UK는 Unit 1 100시간, Unit 2 140시간을 권장하고, 평균 응시자가 각 유닛을 공부하고 응시하는 시간도 그렇다고 적는다. 총자격시간(TQT)은 244시간으로, 공식 학습·평가 추정에 평가 시간이 조금 더 들어간 수치다. 범위가 없어 최솟값·전형값·최댓값을 권장 시간과 같게 두었다. 단계 합은 240이다."
    min_calendar_months: 1
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "Unit 1 공식 교재 135파운드(약 240,000원), 우편료 별도."
    - "Unit 2 공식 교재 145파운드(약 258,000원), 우편료 별도. 교재 구매가 응시 필수인지는 연 페이지에 없다."

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: na
  hours_score: 3
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 3
  level: 3
  rationale_ko: |
    회차별 합격률이 없어 전형 240시간의 3점과 구조 3점을 평균해 3으로 했다.
    두 유닛은 여러 주제에 걸쳐 있고 빈칸 채우기가 있으나, 단계가 3개 미만이고 구두·실기 평가는 없다.

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.cfauk.org/learn/qualifications/investment-management-certificate"
    accessed: "2026-11-11"
    type: official
    covers: [eligibility, award, structure, hours, pass_rate, fee]
  - url: "https://www.cfauk.org/learn/qualifications/investment-management-certificate/imc-qualification-specification"
    accessed: "2026-11-11"
    type: official
    covers: [eligibility, award, structure, hours]
  - url: "https://www.citibank.co.kr/FxdExrtFxrt0100.act?JEX_LANG=EN"
    accessed: "2026-11-11"
    type: other
    covers: [fee]
confidence:
  eligibility: high
  award: medium
  structure: high
  hours: high
  pass_rate: high
  fee: high
as_of: "2026-11-11"
unknown_reasons:
  - "pass_rates, pass_rate_avg_pct: CFA UK는 합격률을 ‘65%에서 80% 사이’라는 범위로만 적는다. 최근 3–5개 회차나 연도 수치가 아니라 평균을 계산하지 않았다."
  - "sessions_per_year: 영업일 센터 시험과 상시 OnVUE라 고정 횟수가 없다."
  - "retake_limit_ko: 재응시 제한을 연 페이지에서 찾지 못했다."
  - "면제 대상 목록과 교재 우편료: 페이지를 열지 못했거나 금액이 없다."
  - "age_min: 나이 요건이 없다."
  - "해외 시험장 국가 목록: 영국 밖에 센터가 있다고만 하고 국가 코드는 없다."
notes_ko: |
  시험 이름은 여전히 Investment Management Certificate(IMC)다. 수여기는 CFA UK다. CISI의 Certificate in Investment Management(영국 규제·직업 윤리 + 레벨 4 투자관리, 총 시험료 606파운드, TQT 284시간)는 다른 자격이므로 대체 기록으로 쓰지 않았다.
  지역을 영국으로 둔 이유는 자격 사용이 FCA의 영국 투자 운용 적합 자격과 영국 세제에 묶여 있기 때문이다. 응시 장소는 영국 Pearson 센터, 일부 해외 센터, OnVUE다.
  2026-12-01에 실러버스 버전 24가 시작된다. 두 유닛을 다른 버전으로 합격해도 자격은 나온다. 최단 기간은 두 시험을 다른 날 수시로 볼 수 있어 1개월보다 짧을 수 있으나 통월 1개월로 적었다.
  검색에 잡힌 판매 페이지 금액(유닛 350·375파운드)은 판매 페이지를 다시 열지 않아 확인하지 않았다. 기록한 응시료는 연 IMC 안내의 365파운드와 390파운드다.
```

## gl_acca

```yaml
# ---------- A. Identity ----------
id: gl_acca
name_ko: "ACCA 자격"
name_orig: "ACCA Qualification"
tier: 1
region: GLOBAL
exam_type: certificate
domain: [accounting_tax]
issuer: "Association of Chartered Certified Accountants (ACCA)"
official_url: "https://www.accaglobal.com/gb/en/qualifications/glance/acca/overview.html"
status: reform_announced
status_note: "The opened overview and how-it-works pages say: From 2027 the ACCA Qualification is changing. The campaign page that would give the first new exam date was not opened, so no first sitting date is recorded."
summary_ko: |
  ACCA 자격은 시험, 윤리·전문역량 모듈, 36개월 실무경험으로 이루어진다. 시험은 응용 지식 3과목, 응용 기술 6과목, 전략 전문가 필수 2과목과 선택 4과목 중 2과목이다.
  2026-11-11에도 이 구조로 접수와 합격률이 공개되어 있다. 2027년부터 자격이 바뀐다는 안내가 떠 있으나 새 시험의 첫 시행일은 확인하지 못했다.
usage_ko: |
  회원은 국제적으로 통용되는 회계 전문 자격을 보유한다. 이 기록의 합격만으로 특정 국가의 법정 감사인 등록이 된다는 문장은 확인하지 못했다.
  영국 페이지 기준 2027-01-01부터 회원 가입비와 연회비는 각각 342파운드다.

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  nationality_note_ko: "국적 제한은 확인되지 않았다. 국가마다 인정 학력이 다르며, 서류는 발급 기관의 공식 문서여야 하고 영어가 아니면 공인 번역이 필요하다."
  paths:
    - label_ko: "국가별 중등 학력"
      age_min: null
      age_max: null
      education_accepted: [hs_or_below]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "United Kingdom including Gibraltar: 2 passes at GCE or VCE A Level (grades A-E) plus 3 GCSE, Vocational GCSE or GCE O Level passes (grades 9-4 or A-C) in five separate subjects including Mathematics and English."
    - label_ko: "대학 입학 학력(학사 또는 석사)"
      age_min: null
      age_max: null
      education_accepted: [bachelor, master, doctor]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "For Korea, the United Kingdom and the United States, matriculation to university at bachelor's or master's level is listed as sufficient for registration."
  extra_checks_ko:
    - "학력은 국가 표로 정해진다. 영국식 A레벨 경로를 템플릿의 고등학교 졸업 이하로 넣었으나, A레벨은 그 단어보다 높은 중등 후 학력이다."
    - "대한민국은 고등학교 졸업장만으로는 부족하다고 표에 적혀 있다. 대학 입학 학력(학사 또는 석사)은 충분하다."
    - "미국은 고등학교 졸업장과 함께 AP 3과목 이상에서 3점 이상이거나, 학사 또는 석사 과정의 대학 입학 학력이면 충분하다."
    - "표에 없는 학력은 등록이 거절될 수 있고, 그때는 Foundations in Accountancy에서 시작한다."
    - "관련 학위나 대학원 학력은 일부 시험 면제를 신청할 수 있다. 면제 과목은 개인별로 다르다."
    - "응시 전 실무 경력 요건은 열린 입학 표에서 확인되지 않았다. 36개월 경험은 자격 부여 요건이다."
  exam_languages: [en]
  english_level_needed: advanced
  english_level_reason: "The opened UK qualification pages and exam names are English. Local tax and law variants exist, but a Korean-language administration was not found on the opened pages."
  test_countries: [GB]
  retake_limit_ko: "응용 지식과 응용 기술에는 기간 제한이 없다. 전략 전문가 과목을 처음 합격한 뒤 나머지 시험은 7년 안에 합격해야 한다."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 3
  work_fields_accepted: [accounting_tax, corporate_finance]
  other_requirements_ko:
    - "윤리·전문역량 모듈(EPSM)을 마쳐야 한다. 응용 지식 이후, 전략 전문가 시험 전에 시작하는 것이 안내되어 있다."
    - "실무는 36개월의 관련 직무 경험이다. 성과 목표의 개수와 세부 직무 목록이 있는 PER 페이지는 열지 않아, 분야는 회계·세무와 기업 재무만 대응했다."
    - "일과 공부를 같이 하면 3년 또는 4년 안에 회원이 될 수 있다고 안내한다."
  time_limit_ko: "전략 전문가의 첫 합격 이후 7년. 응용 지식과 응용 기술의 기간 제한은 없다."
  validity_ko: |
    회원 자격을 유지하려면 연회비가 있다. 영국 수수료 페이지 기준 2027년 연회비는 342파운드다.
    계속교육 시간은 이번에 연 페이지에서 확인하지 못했다.

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "BT 비즈니스와 기술"
      subjects_ko: ["비즈니스와 기술(BT)"]
      format: unknown
      question_summary_ko: "응용 지식 과목이다. 문항 수, 형식, 시간, 합격 점수는 연 과목 페이지에 없었다."
      duration_min: unknown
      passing_rule_ko: "합격 점수는 연 페이지에서 확인하지 못했다."
      pass_rates:
        - period: 2025-06
          rate_pct: 88
          examinees: unknown
        - period: 2025-12
          rate_pct: 87
          examinees: unknown
        - period: 2026-06
          rate_pct: 89
          examinees: unknown
      pass_rate_avg_pct: 88
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: unknown
      next_dates_ko: "합격률 표에서 2026년 3월과 9월은 공란이었다. 연중 응시인지 연 2회인지는 그 표가 설명하지 않았다."
      fee:
        amount: unknown
        currency: GBP
        krw_approx: unknown
        fx_date: 2026-11-11
    - name_ko: "MA 관리회계"
      subjects_ko: ["관리회계(MA)"]
      format: unknown
      question_summary_ko: "응용 지식 과목이다. 형식과 시간은 확인하지 못했다."
      duration_min: unknown
      passing_rule_ko: "합격 점수는 연 페이지에서 확인하지 못했다."
      pass_rates:
        - period: 2025-06
          rate_pct: 64
          examinees: unknown
        - period: 2025-12
          rate_pct: 64
          examinees: unknown
        - period: 2026-06
          rate_pct: 65
          examinees: unknown
      pass_rate_avg_pct: 64.33
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: unknown
      next_dates_ko: "2026년 3월과 9월 합격률은 공란이었다."
      fee:
        amount: unknown
        currency: GBP
        krw_approx: unknown
        fx_date: 2026-11-11
    - name_ko: "FA 재무회계"
      subjects_ko: ["재무회계(FA)"]
      format: unknown
      question_summary_ko: "응용 지식 과목이다. 형식과 시간은 확인하지 못했다."
      duration_min: unknown
      passing_rule_ko: "합격 점수는 연 페이지에서 확인하지 못했다."
      pass_rates:
        - period: 2025-06
          rate_pct: 68
          examinees: unknown
        - period: 2025-12
          rate_pct: 68
          examinees: unknown
        - period: 2026-06
          rate_pct: 71
          examinees: unknown
      pass_rate_avg_pct: 69
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: unknown
      next_dates_ko: "2026년 3월과 9월 합격률은 공란이었다."
      fee:
        amount: unknown
        currency: GBP
        krw_approx: unknown
        fx_date: 2026-11-11
    - name_ko: "LW 기업법"
      subjects_ko: ["기업법(LW)"]
      format: unknown
      question_summary_ko: "응용 기술 과목이다. 형식과 시간은 확인하지 못했다. 응시료는 다른 응용 기술 과목과 같이 2027년 3월 표준 160파운드다."
      duration_min: unknown
      passing_rule_ko: "합격 점수는 연 페이지에서 확인하지 못했다."
      pass_rates:
        - period: 2025-06
          rate_pct: 81
          examinees: unknown
        - period: 2025-12
          rate_pct: 82
          examinees: unknown
        - period: 2026-06
          rate_pct: 82
          examinees: unknown
      pass_rate_avg_pct: 81.67
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: unknown
      next_dates_ko: "합격률 표의 2026년 3월과 9월은 공란이었다. 응시료 페이지의 다음 표준 접수 마감은 2027-02-01 23:59 GMT, 늦은 접수는 2027-02-08이다."
      fee:
        amount: 160
        currency: GBP
        krw_approx: 285000
        fx_date: 2026-11-11
    - name_ko: "PM 성과 관리"
      subjects_ko: ["성과 관리(PM)"]
      format: unknown
      question_summary_ko: "응용 기술 과목이다. 형식과 시간은 확인하지 못했다."
      duration_min: unknown
      passing_rule_ko: "합격 점수는 연 페이지에서 확인하지 못했다."
      pass_rates:
        - period: 2025-06
          rate_pct: 43
          examinees: unknown
        - period: 2025-12
          rate_pct: 40
          examinees: unknown
        - period: 2026-06
          rate_pct: 41
          examinees: unknown
        - period: 2026-09
          rate_pct: 42
          examinees: unknown
      pass_rate_avg_pct: 41.5
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: 4
      next_dates_ko: "3월, 6월, 9월, 12월 합격률이 공개된다. 2027년 3월 표준 접수 마감은 2027-02-01 23:59 GMT다."
      fee:
        amount: 160
        currency: GBP
        krw_approx: 285000
        fx_date: 2026-11-11
    - name_ko: "TX 세무"
      subjects_ko: ["세무(TX)"]
      format: unknown
      question_summary_ko: "응용 기술 과목이다. 형식과 시간은 확인하지 못했다."
      duration_min: unknown
      passing_rule_ko: "합격 점수는 연 페이지에서 확인하지 못했다."
      pass_rates:
        - period: 2025-06
          rate_pct: 54
          examinees: unknown
        - period: 2025-12
          rate_pct: 55
          examinees: unknown
        - period: 2026-06
          rate_pct: 55
          examinees: unknown
        - period: 2026-09
          rate_pct: 54
          examinees: unknown
      pass_rate_avg_pct: 54.5
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: 4
      next_dates_ko: "2027년 3월 표준 접수 마감은 2027-02-01 23:59 GMT다."
      fee:
        amount: 160
        currency: GBP
        krw_approx: 285000
        fx_date: 2026-11-11
    - name_ko: "FR 재무 보고"
      subjects_ko: ["재무 보고(FR)"]
      format: unknown
      question_summary_ko: "응용 기술 과목이다. 형식과 시간은 확인하지 못했다."
      duration_min: unknown
      passing_rule_ko: "합격 점수는 연 페이지에서 확인하지 못했다."
      pass_rates:
        - period: 2025-06
          rate_pct: 50
          examinees: unknown
        - period: 2025-12
          rate_pct: 51
          examinees: unknown
        - period: 2026-06
          rate_pct: 52
          examinees: unknown
        - period: 2026-09
          rate_pct: 49
          examinees: unknown
      pass_rate_avg_pct: 50.5
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: 4
      next_dates_ko: "2027년 3월 표준 접수 마감은 2027-02-01 23:59 GMT다."
      fee:
        amount: 160
        currency: GBP
        krw_approx: 285000
        fx_date: 2026-11-11
    - name_ko: "AA 감사와 인증"
      subjects_ko: ["감사와 인증(AA)"]
      format: unknown
      question_summary_ko: "응용 기술 과목이다. 형식과 시간은 확인하지 못했다."
      duration_min: unknown
      passing_rule_ko: "합격 점수는 연 페이지에서 확인하지 못했다."
      pass_rates:
        - period: 2025-06
          rate_pct: 44
          examinees: unknown
        - period: 2025-12
          rate_pct: 46
          examinees: unknown
        - period: 2026-06
          rate_pct: 47
          examinees: unknown
        - period: 2026-09
          rate_pct: 45
          examinees: unknown
      pass_rate_avg_pct: 45.5
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: 4
      next_dates_ko: "2027년 3월 표준 접수 마감은 2027-02-01 23:59 GMT다."
      fee:
        amount: 160
        currency: GBP
        krw_approx: 285000
        fx_date: 2026-11-11
    - name_ko: "FM 재무 관리"
      subjects_ko: ["재무 관리(FM)"]
      format: unknown
      question_summary_ko: "응용 기술 과목이다. 형식과 시간은 확인하지 못했다."
      duration_min: unknown
      passing_rule_ko: "합격 점수는 연 페이지에서 확인하지 못했다."
      pass_rates:
        - period: 2025-06
          rate_pct: 48
          examinees: unknown
        - period: 2025-12
          rate_pct: 48
          examinees: unknown
        - period: 2026-06
          rate_pct: 48
          examinees: unknown
        - period: 2026-09
          rate_pct: 47
          examinees: unknown
      pass_rate_avg_pct: 47.75
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: 4
      next_dates_ko: "2027년 3월 표준 접수 마감은 2027-02-01 23:59 GMT다."
      fee:
        amount: 160
        currency: GBP
        krw_approx: 285000
        fx_date: 2026-11-11
    - name_ko: "SBL 전략 비즈니스 리더"
      subjects_ko: ["전략 비즈니스 리더(SBL)"]
      format: unknown
      question_summary_ko: "전략 전문가 필수 과목이다. 형식과 시간은 확인하지 못했다."
      duration_min: unknown
      passing_rule_ko: "합격 점수는 연 페이지에서 확인하지 못했다."
      pass_rates:
        - period: 2025-09
          rate_pct: 51
          examinees: unknown
        - period: 2025-12
          rate_pct: 50
          examinees: unknown
        - period: 2026-03
          rate_pct: 52
          examinees: unknown
        - period: 2026-06
          rate_pct: 51
          examinees: unknown
        - period: 2026-09
          rate_pct: 53
          examinees: unknown
      pass_rate_avg_pct: 51.4
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: 4
      next_dates_ko: "2027년 3월 표준 접수 마감은 2027-02-01 23:59 GMT, 늦은 접수는 2027-02-08이다."
      fee:
        amount: 282
        currency: GBP
        krw_approx: 502000
        fx_date: 2026-11-11
    - name_ko: "SBR 전략 비즈니스 보고"
      subjects_ko: ["전략 비즈니스 보고(SBR)"]
      format: unknown
      question_summary_ko: "전략 전문가 필수 과목이다. 형식과 시간은 확인하지 못했다."
      duration_min: unknown
      passing_rule_ko: "합격 점수는 연 페이지에서 확인하지 못했다."
      pass_rates:
        - period: 2025-09
          rate_pct: 48
          examinees: unknown
        - period: 2025-12
          rate_pct: 48
          examinees: unknown
        - period: 2026-03
          rate_pct: 50
          examinees: unknown
        - period: 2026-06
          rate_pct: 47
          examinees: unknown
        - period: 2026-09
          rate_pct: 50
          examinees: unknown
      pass_rate_avg_pct: 48.6
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: 4
      next_dates_ko: "2027년 3월 표준 응시료는 208파운드다. 접수 마감은 2027-02-01 23:59 GMT다."
      fee:
        amount: 208
        currency: GBP
        krw_approx: 370000
        fx_date: 2026-11-11
    - name_ko: "전략 선택 2과목"
      subjects_ko:
        - "고급 재무관리(AFM)"
        - "고급 성과관리(APM)"
        - "고급 세무(ATX)"
        - "고급 감사와 인증(AAA)"
      format: unknown
      question_summary_ko: "네 과목 중 두 과목을 고른다. 과목마다 합격률이 달라 하나의 합격률로 합치지 않았다. 형식과 시간은 확인하지 못했다."
      duration_min: unknown
      passing_rule_ko: "선택한 두 과목을 각각 합격해야 한다. 합격 점수는 확인하지 못했다."
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: 4
      next_dates_ko: "2027년 3월 표준 응시료는 과목당 208파운드다. 이 단계 금액 416파운드는 같은 가격인 두 과목의 합이며, ACCA가 묶음 가격으로 발표한 금액은 아니다."
      fee:
        amount: 416
        currency: GBP
        krw_approx: 741000
        fx_date: 2026-11-11
  exemptions_ko:
    - "관련 학위와 다른 자격으로 일부 과목 면제를 신청할 수 있다. 면제비는 응용 지식 과목당 86파운드, 응용 기술 과목당 114파운드다."
  total:
    hours_min: unknown
    hours_typical: unknown
    hours_max: unknown
    hours_basis: unknown
    hours_basis_note_ko: "열린 ACCA 학습 습관 페이지는 수면과 30–45분 집중을 말할 뿐 과목별·자격 전체 학습시간을 권하지 않는다. 연 BPP, Kaplan, Becker, Gleim 페이지에서 과목별 또는 전체 학습시간 합계를 확인하지 못했다."
    min_calendar_months: 36
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "초기 등록 89파운드, 약 159000원. 재등록도 89파운드다. 1파운드=1781원(2026-11-11 와이즈 머리글)이며, 같은 페이지의 1780.62원을 쓰면 89파운드는 158000원으로 반올림이 달라진다."
    - "2027년 학생 연회비 146파운드, 약 260000원."
    - "EPSM 83파운드, 약 148000원."
    - "응용 기술 늦은 접수 409파운드(약 728000원). SBL 늦은 접수 467파운드(약 832000원). SBR와 선택 과목 늦은 접수도 467파운드다."
    - "2027년 준회원 회비 171파운드(약 305000원) 후 정규 342파운드(약 609000원). 1780.62원을 쓰면 171파운드는 304000원이다."
    - "2027-01-01부터 회원 가입비 342파운드, 연회비 342파운드."
    - "응용 지식 응시료는 센터와 원격에 따라 달라 단일 금액이 확인되지 않았다."

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: na
  hours_score: unknown
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: true
    non_written_assessment: true
  structure_score: 4
  level: unknown
  rationale_ko: |
    필수 과목의 최근 합격률은 과목별로 계산했으나, 선택 2과목은 하나의 합격률이 없어 전체 평균과 합격률 점수를 만들지 않았다.
    학습시간이 없어 시간 점수도 없고, 따라서 난이도 수준은 계산하지 않았다. 구조는 다과목, 3단계 이상, 자격 전 실무·윤리 모듈을 반영해 4점이다. 문항 형식을 확인하지 못해 서술·계산 가점은 주지 않았다.

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.accaglobal.com/gb/en/qualifications/glance/acca/overview.html"
    accessed: 2026-11-11
    type: official
    covers: [eligibility, award]
  - url: "https://www.accaglobal.com/gb/en/qualifications/glance/acca/how.html"
    accessed: 2026-11-11
    type: official
    covers: [structure, award]
  - url: "https://www.accaglobal.com/gb/en/qualifications/glance/acca/minimum-entrance.html"
    accessed: 2026-11-11
    type: official
    covers: [eligibility]
  - url: "https://www.accaglobal.com/gb/en/student/exam-support-resources/pass-rates-for-acca-qualifications.html"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://www.accaglobal.com/gb/en/qualifications/accountancy-career/fees.html"
    accessed: 2026-11-11
    type: official
    covers: [fee]
  - url: "https://wise.com/us/currency-converter/gbp-to-krw-rate/history"
    accessed: 2026-11-11
    type: other
    covers: [fee]
  - url: "https://www.accaglobal.com/uk/en/student/exam-entry-and-administration/prepare-for-exams/good-study-habits.html"
    accessed: "2026-11-11"
    type: official
    covers: [hours]
confidence:
  eligibility: medium
  award: medium
  structure: medium
  hours: low
  pass_rate: high
  fee: medium
as_of: 2026-11-11
unknown_reasons:
  - "hours and difficulty.level: the ACCA study-habits page and the opened allowed-provider pages state no hours per paper or for the whole qualification, so the total and the level stay unknown."
  - "선택 과목 합격률: 2025-09부터 2026-09까지 AFM 44, 45, 44, 47, 47(평균 45.4), APM 40, 41, 40, 42, 41(평균 40.8), ATX 53, 50, 50, 47, 53(평균 50.6), AAA 40, 38, 42, 39, 42(평균 40.2)다. 두 과목을 고르므로 단계 평균은 없다."
  - "structure.total.pass_rate_avg_pct: 선택 단계 평균이 없어 전체 평균을 계산하지 않았다."
  - "format, duration_min, passing_rule_ko: 과목 안내 페이지와 합격률 표에 시간, 문항 형식, 50% 합격선이 없었다. 기억에 의존한 시간을 넣지 않았다."
  - "BT, MA, FA 응시료: 영국 수수료 페이지가 센터·원격별로 달리며 단일 ACCA 가격을 추출하지 못했다."
  - "hours: 공식 권장 시간과 제공자 시간을 모두 열지 않았다."
  - "subjective_questions를 false로 둔 것은 형식이 객관식이라는 뜻이 아니라, 서술형이라는 문장을 확인하지 못했다는 뜻이다."
  - "2027년 개편의 첫 시험일은 캠페인 페이지를 열지 못했다."
notes_ko: |
  파운드 원화는 와이즈 역사 페이지 머리글의 2026-11-11 환율 1파운드=1781원이다. 같은 페이지는 당일 환율을 1780.62원으로도 적는다. 1000원 반올림이 달라지는 금액은 89파운드와 171파운드뿐이며 본문에 적었다.
  응용 지식 3과목을 마치고 전문성 기초 모듈을 끝내면 ACCA Diploma in Accounting and Business를 받을 수 있고, 안내는 6–12개월을 예시로 든다. 이것은 전체 자격의 최단 기간이 아니다.
  합격률 응시 인원은 표에 없었다.
```

## gl_cia

```yaml
# ---------- A. Identity ----------
id: gl_cia
name_ko: "국제공인내부감사사(CIA)"
name_orig: "Certified Internal Auditor (CIA)"
tier: 1
region: GLOBAL
exam_type: certificate
domain: [accounting_tax, risk_compliance]
issuer: "The Institute of Internal Auditors (The IIA)"
official_url: "https://www.theiia.org/en/certifications/cia/"
status: reform_announced
status_note: "The three-part CIA remains offered. On the opened certifications page, Arabic stays on the 2019 syllabus through 2026-12-27 and moves to the 2025 syllabus on 2026-12-28. Simplified Chinese, available only in mainland China, stays on the 2019 syllabus until the December 2026 window. Language-by-language 2025 switch dates other than those two were not on that page. A pricing change on 2027-01-04 is linked from the pricing page, but the new amounts were not opened."
summary_ko: |
  CIA는 내부감사 국제 자격으로 1974년부터 운영되며, 170개국에 22만 명 이상이 있다. 기본 경로는 순서를 가리지 않는 객관식 3과목이고, 합격 점수는 척도 점수 600점이다.
  학위 경로에서는 경험 전에 시험을 볼 수 있다. 석사 이상은 자격 부여에 경력 1년, 학사는 2년, 현직 Internal Audit Practitioner는 Part 1 면제와 경력 5년이다.
usage_ko: |
  자격을 받으면 내부감사 전문 자격으로 등록부에 이름을 올릴 수 있다. 주 정부가 주는 회계사 면허는 아니다.
  매년 10월 1일에 갱신이 열리고 12월 31일이 마감이다. 갱신하지 않으면 Grace가 되고, Grace가 2년 계속되면 Revoked가 되어 다시 지원하고 시험도 다시 봐야 한다. 계속교육 시간 수는 연 페이지에서 확인하지 못했다.

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  nationality_note_ko: "국적 제한은 없다. 영국, 아일랜드, 남아프리카공화국 거주자는 지원 전에 IIA 회원이어야 한다."
  paths:
    - label_ko: "석사 이상"
      age_min: null
      age_max: null
      education_accepted: [master, doctor]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "A master's degree or higher requires proof of education and photo identification to enter, and the three parts are completed within three years."
    - label_ko: "학사 또는 동등 학력"
      age_min: null
      age_max: null
      education_accepted: [bachelor]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "A bachelor's degree or equivalent requires proof of education and photo identification, and the three parts are completed within three years."
    - label_ko: "현직 Internal Audit Practitioner"
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "An active Internal Audit Practitioner receives a waiver of Part 1 and completes Parts 2 and 3 within three years."
  extra_checks_ko:
    - "학위가 없는 학생은 먼저 Internal Audit Practitioner를 해야 하며, 그 시험은 CIA Part 1과 같다. 이 기록의 3과목 직접 응시 경로는 아니다."
    - "인정된 CPA 또는 CA, 그리고 CISA 소지자는 Challenge Exam이라는 별도 1과목 경로가 있다. 창은 2월, 6월, 9월, 11월이다. 이 기록의 단계는 3과목 경로만 담는다."
    - "경력 10년 Challenge 지원은 현재 닫혀 있다."
    - "ACCA 자격 회원은 학력과 경력 요건이 면제된다. 현직 미국 CPA는 학력이 면제되며, 경력 면제 여부는 연 문장에서 확인하지 못했다."
    - "북미 밖 수수료는 National Institute를 통해 다를 수 있다. 미국, 캐나다와 일부 국가의 가격표가 본문 금액이다."
    - "시험 등록은 180일 또는 프로그램 만료 중 빠른 날까지다."
  exam_languages: [ar, zh, en, fr, de, ja, ko, pl, pt, ru, es, th, tr, vi]
  english_level_needed: basic
  english_level_reason: "Korean is an offered CIA language, so English is not required, but the syllabus and standards still use technical audit terms."
  test_countries: [US, KR, GB, CN]
  retake_limit_ko: "프로그램 승인 후 3년 안에 요건을 마쳐야 한다. 같은 과목의 재응시 대기일은 연 페이지에서 확인하지 못했다."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 2
  work_fields_accepted: [accounting_tax, non_finance]
  other_requirements_ko:
    - "학사 경로의 자격 부여 경력은 2년이다. 석사 이상은 1년이라, 이 숫자 2는 학사 경로만 가리킨다."
    - "Internal Audit Practitioner 경로의 자격 부여 경력은 5년이며, 그중 2년은 최근 3년 안이어야 한다. 나중에 학위를 갖추면 학위 경로의 경력으로 줄어든다."
    - "ACCA 자격 회원은 경력 요건이 면제된다."
    - "인정 경력의 공식 범위는 내부감사, 품질 보증, 위험 관리, 감사·평가 분야, 준법, 외부감사, 내부통제다. 템플릿에는 회계·세무와 금융 외 분야만 넣었다."
    - "요건을 모두 마치면 7–14영업일 안에 자격이 계정에 표시된다."
  time_limit_ko: "승인일부터 3년 안에 시험과 나머지 프로그램 요건을 마쳐야 한다. 프로그램 연장은 1회 12개월에 275달러다."
  validity_ko: |
    갱신은 매년이다. 신청은 10월 1일에 열리고 마감은 12월 31일이다. 마감 후 Grace가 되며, 그 동안에는 자격자로 표시할 수 없다. Grace가 2년이면 Revoked다.
    북미 회원의 CIA 갱신료는 회원비에 포함될 수 있다. 비회원 갱신료는 120달러, 회원 갱신료는 30달러다. 계속교육 시간 수는 연 페이지에 없었다. 증빙은 3년 보관이 권장된다.

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "Part 1 내부감사 기초"
      subjects_ko:
        - "내부감사 기초"
      format: mcq
      question_summary_ko: "객관식 125문항, 150분."
      duration_min: 150
      passing_rule_ko: "척도 점수 600점. 점수의 하한과 상한은 시험 개발 PDF를 열지 않아 적지 않았다. 결과는 3주 안에 나온다."
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: unknown
      next_dates_ko: "Pearson VUE에서 수시 접수다. 2026-11-11 기준 다음 고정 회차는 없다. 영어는 2025 실러버스다."
      fee:
        amount: 445
        currency: USD
        krw_approx: 595000
        fx_date: 2026-11-10
    - name_ko: "Part 2 내부감사 업무"
      subjects_ko:
        - "내부감사 업무 수행"
      format: mcq
      question_summary_ko: "객관식 100문항, 120분."
      duration_min: 120
      passing_rule_ko: "척도 점수 600점. 결과는 3주 안에 나온다."
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: unknown
      next_dates_ko: "수시 접수다. 다음 고정 회차는 없다."
      fee:
        amount: 415
        currency: USD
        krw_approx: 555000
        fx_date: 2026-11-10
    - name_ko: "Part 3 내부감사 기능"
      subjects_ko:
        - "내부감사 기능"
      format: mcq
      question_summary_ko: "객관식 100문항, 120분."
      duration_min: 120
      passing_rule_ko: "척도 점수 600점. 결과는 3주 안에 나온다."
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: unknown
      next_dates_ko: "수시 접수다. 다음 고정 회차는 없다."
      fee:
        amount: 415
        currency: USD
        krw_approx: 555000
        fx_date: 2026-11-10
  exemptions_ko:
    - "현직 Internal Audit Practitioner는 Part 1이 면제된다."
    - "인정 CPA·CA와 CISA는 3과목 대신 Challenge Exam 1과목을 볼 수 있다. 그 경로는 이 단계 목록에 넣지 않았다."
  total:
    hours_min: unknown
    hours_typical: unknown
    hours_max: unknown
    hours_basis: unknown
    hours_basis_note_ko: "IIA 권장 학습시간을 연 페이지에서 찾지 못했다. Gleim CIA Exam Guide(2024 edition, 2025년 3월 디지털 수정)는 2025년 시험 변경 전에 합격하라는 표제와 함께 Part 1 65–75시간, Part 2 75–85시간, Part 3 115–125시간을 적지만, 그 수치는 변경 전 시험이라 이 기록의 2025 영어 실러버스 시간에 넣지 않았다."
    min_calendar_months: unknown
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "비회원 지원비 240달러, 약 321000원. 회원 지원비 120달러, 약 161000원. 단계 수수료는 비회원 시험 수수료다."
    - "회원 Part 1은 310달러(약 415000원), Part 2와 Part 3는 각 280달러(약 375000원)다."
    - "Challenge Exam 비회원 지원 380달러(약 508000원), 회원 150달러(약 201000원). 비회원 시험 1245달러(약 1665000원), 회원 845달러(약 1130000원)."
    - "시험 등록 연장 100달러(약 134000원). Pearson VUE 일정 변경 또는 취소 75달러(약 100000원). 프로그램 12개월 연장 275달러(약 368000원)."
    - "비회원 연간 갱신 120달러(약 161000원), 회원 30달러(약 40000원). 수수료는 환불·양도가 되지 않는다."
    - "2027-01-04 가격 변경의 새 금액은 연결된 페이지를 열지 못했다."

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: na
  hours_score: unknown
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: true
    non_written_assessment: true
  structure_score: 4
  level: unknown
  rationale_ko: |
    합격률 페이지는 열었을 때 자격 안내 허브로 연결되어 수치를 확인하지 못했다. 학습시간도 없어 합격률 점수와 시간 점수는 없다.
    구조는 3과목, 3단계, 자격 전 실무경험으로 4점이다. 전 과목이 객관식이라 서술·계산 가점은 없다. 난이도 수준은 계산하지 않았다.

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.theiia.org/en/certifications/cia/"
    accessed: 2026-11-11
    type: official
    covers: [eligibility, award, structure, fee]
  - url: "https://www.theiia.org/en/certifications/new-to-certification/Pricing/"
    accessed: 2026-11-11
    type: official
    covers: [fee]
  - url: "https://www.theiia.org/en/certifications/"
    accessed: 2026-11-11
    type: official
    covers: [structure, eligibility, award]
  - url: "https://www.mt.co.kr/en/economy/2026/11/10/2026111016284356804"
    accessed: 2026-11-11
    type: other
    covers: [fee]
  - url: "https://www.gleim.com/wp-content/uploads/2025/03/2024Edition_CIA_Exam_Guide_2025Update_Online_final_secured.pdf"
    accessed: "2026-11-11"
    type: provider
    covers: [hours]
confidence:
  eligibility: high
  award: medium
  structure: high
  hours: low
  pass_rate: low
  fee: high
as_of: 2026-11-11
unknown_reasons:
  - "pass_rates: https://www.theiia.org/en/certifications/new-to-certification/certification-program-pass-rates/ 는 열었을 때 합격률 표가 아니라 자격 허브로 나왔다. 검색에 보이던 Part 1 44%, Part 2 48%, Part 3 56%, Challenge 47%는 넣지 않았다."
  - "hours, hours_basis, and difficulty.level: no official study hours were found for the 2025 syllabus. Gleim's 65-75, 75-85, and 115-125 hours describe the pre-2025 exam and were not summed."
  - "min_calendar_months: 수시 응시라 창 간격이 없고, 경력은 시험 전에도 채울 수 있어 첫 응시부터의 최소 개월을 정하지 않았다."
  - "척도 점수의 250–750 범위는 시험 개발 PDF를 열지 않았다."
  - "계속교육 시간 수와 2027-01-04 이후 수수료는 확인하지 못했다."
  - "test_countries의 KR, GB, CN은 한국어·영어 시행과 간체 중국어의 중국 본토 제한에서 온 것이며, 센터가 있는 전체 국가는 아니다."
notes_ko: |
  달러 원화는 2026-11-10 서울 종가 1달러=1337.5원이다.
  Challenge Exam과 10년 경력 경로는 같은 CIA 자격의 다른 입구다. 단계 구조가 3과목과 달라 이 기록의 stages에는 넣지 않았다.
  온라인 감독 시험의 폐지 여부는 연 CIA 본문에서 확인하지 못했다.
```

## gl_cima

```yaml
# ---------- A. Identity ----------
id: gl_cima
name_ko: "CIMA CGMA 전문자격"
name_orig: "CIMA CGMA Professional Qualification"
tier: 1
region: GLOBAL
exam_type: certificate
domain: [accounting_tax]
issuer: "Chartered Institute of Management Accountants (CIMA), within the Association of International Certified Professional Accountants"
official_url: "https://www.aicpa-cima.com/resources/landing/professional-qualification"
status: active
status_note: "The qualification is offered. Exam blueprints are published annually. Tiered GBP exam prices on the fees page rise on 2027-01-01. That is a price change, not a withdrawal of the qualification. A separate Americas route on the becoming-a-CGMA page includes the Finance Leadership Program, and that route was not used as this record's stages."
summary_ko: |
  CIMA의 CGMA 전문자격은 운영, 관리, 전략의 세 수준으로 되어 있고, 각 수준은 객관식 시험 3과목과 그 뒤를 잇는 케이스 스터디 1과목이다. 자격과 회원 자격을 받으면 CGMA 명칭을 쓴다.
  선행 자격인 Certificate in Business Accounting은 객관식 4과목이며, 면제 없이 처음부터 시작할 때의 단계로 이 기록에 넣었다. 어떤 학력이 이 수료를 건너뛰게 하는지는 열린 페이지에 없었다.
usage_ko: |
  회원은 관리회계와 재무 분야의 국제 전문 자격을 보유하고 CGMA를 사용할 수 있다. 특정 국가의 법정 감사 면허로 쓴다는 문장은 확인하지 못했다.
  실무경험 3년은 공부 전, 도중, 또는 이후에도 채울 수 있으나 회원 신청 전에는 검증되어야 한다.

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  nationality_note_ko: "국적 제한은 확인되지 않았다. 응시에는 유효한 학생 연회비가 필요하다."
  paths:
    - label_ko: "학생 등록 후 응시"
      age_min: null
      age_max: null
      education_accepted: unknown
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "You will need an active student subscription to be able to sit your exams. The opened pages did not state a minimum academic qualification."
  extra_checks_ko:
    - "첫 해 연회비는 등록비에 포함된다. 그 다음 해부터 학생 연회비는 1월 1일에 내야 시험을 보고 실무경험을 제출할 수 있다."
    - "Certificate in Business Accounting은 과목 4개다. 전문자격으로 바로 들어가는 학력·면제 기준 페이지는 열지 못했다."
    - "케이스 스터디는 그 수준의 객관식 3과목을 모두 합격하거나 면제받은 뒤에 본다."
    - "시험은 Pearson VUE 센터 또는 온라인으로 본다고 적혀 있다. 국가 목록 전체는 추출하지 못했다."
    - "신분증 2개와 이름의 일치 규칙은 검색 화면에만 보이고, 이번에 연 HTML에서는 확인하지 못해 요건으로 넣지 않았다."
  exam_languages: [en]
  english_level_needed: advanced
  english_level_reason: "The opened exam pages describe three-hour human-marked case studies in English and do not list a Korean administration."
  test_countries: [GB, US]
  retake_limit_ko: "운영 또는 관리 케이스 스터디에 떨어지면 다음 두 창 중 하나에 다시 접수해야 한다고 전문자격 페이지가 적는다. 객관식의 횟수 제한은 확인하지 못했다."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 3
  work_fields_accepted: [accounting_tax, corporate_finance]
  other_requirements_ko:
    - "CGMA가 되려면 검증된 관련 실무경험 최소 3년이 필요하다. 경험은 공부 전, 도중, 이후가 모두 가능하다."
    - "회원 신청의 경험은 재무 역할 3년이다. 열린 예시는 관리회계, 성과관리, 재무 비즈니스 파트너링, 감사와 인증, 회계, 비즈니스 인텔리전스와 데이터 분석, 전문 서비스와 컨설팅이다."
    - "템플릿 분야는 회계·세무와 기업 재무만 골랐다. 감사, 컨설팅, 데이터 분석은 그 두 값으로 다 덮이지 않으므로 위 문장을 함께 봐야 한다."
    - "실무경험 신청 수수료는 199파운드다. 면제 수수료는 없다고 수수료 페이지가 적는다."
  time_limit_ko: "전략 케이스 스터디 합격 후 회원 신청 기한은 연 페이지에서 확인하지 못했다."
  validity_ko: "회원 유지와 계속교육의 시간 수는 이번에 연 페이지에서 확인하지 못했다. 전략 케이스 스터디를 합격한 학생의 연회비는 335파운드로 별도 칸이 있다."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "Certificate in Business Accounting"
      subjects_ko:
        - "BA1"
        - "BA2"
        - "BA3"
        - "BA4"
      format: unknown
      question_summary_ko: "네 과목 모두 120분이다. BA1, BA2, BA3는 객관식형 60문항, BA4는 85문항이다. 컴퓨터가 채점하고 가채점은 시험 직후, 48시간 안에 확정된다. 수치 입력과 끌어다 놓기는 전문자격 객관식 설명에만 적혀 있어 Certificate의 format은 unknown으로 두었다. 연중이다."
      duration_min: 480
      passing_rule_ko: "합격 점수는 열린 페이지에 없었다. 480분은 네 번의 120분을 더한 값이며 한 번에 보는 시험이 아니다."
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: unknown
      next_dates_ko: "객관식은 연중이다. 다음 특정 날짜는 시간표 페이지를 열지 못했다."
      fee:
        amount: 492
        currency: GBP
        krw_approx: 876000
        fx_date: 2026-11-11
    - name_ko: "Operational Level"
      subjects_ko:
        - "운영 수준 객관식 3과목"
        - "운영 수준 케이스 스터디"
      format: mixed
      question_summary_ko: "객관식은 과목당 90분이며 단답 선택, 수치 입력, 끌어다 놓기 등이 섞인다. 케이스 스터디는 3시간이고 사람이 채점한다. 결과는 창이 닫힌 뒤 6–8주다. 450분은 90분 세 번과 180분 한 번의 합이다."
      duration_min: 450
      passing_rule_ko: "합격 점수는 열린 페이지에 없었다. 객관식 3과목을 합격하거나 면제받아야 케이스 스터디를 볼 수 있다."
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 550
      hours_typical: 550
      hours_max: 550
      sessions_per_year: 4
      next_dates_ko: "객관식은 연중, 케이스 스터디는 연 4회다. 다음 창의 달력 날짜는 확인하지 못했다."
      fee:
        amount: 717
        currency: GBP
        krw_approx: 1277000
        fx_date: 2026-11-11
    - name_ko: "Management Level"
      subjects_ko:
        - "관리 수준 객관식 3과목"
        - "관리 수준 케이스 스터디"
      format: mixed
      question_summary_ko: "구성은 운영 수준과 같다. 객관식 3과목 각 90분, 케이스 스터디 3시간이다. 450분은 네 번의 합이다."
      duration_min: 450
      passing_rule_ko: "합격 점수는 열린 페이지에 없었다. 객관식 3과목 합격 또는 면제 후 케이스 스터디를 본다."
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 550
      hours_typical: 550
      hours_max: 550
      sessions_per_year: 4
      next_dates_ko: "객관식은 연중, 케이스 스터디는 연 4회다. 다음 창의 달력 날짜는 확인하지 못했다."
      fee:
        amount: 809
        currency: GBP
        krw_approx: 1441000
        fx_date: 2026-11-11
    - name_ko: "Strategic Level"
      subjects_ko:
        - "전략 수준 객관식 3과목"
        - "전략 수준 케이스 스터디"
      format: mixed
      question_summary_ko: "구성은 운영 수준과 같다. 객관식 3과목 각 90분, 케이스 스터디 3시간이다. 450분은 네 번의 합이다."
      duration_min: 450
      passing_rule_ko: "합격 점수는 열린 페이지에 없었다. 객관식 3과목 합격 또는 면제 후 케이스 스터디를 본다."
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 550
      hours_typical: 550
      hours_max: 550
      sessions_per_year: 4
      next_dates_ko: "객관식은 연중, 케이스 스터디는 연 4회다. 다음 창의 달력 날짜는 확인하지 못했다."
      fee:
        amount: 1144
        currency: GBP
        krw_approx: 2037000
        fx_date: 2026-11-11
  exemptions_ko:
    - "관련 학위나 경력으로 일부 시험을 면제받을 수 있다. 수수료 페이지는 면제 수수료가 없다고 적는다. 개인별 면제 결과는 계산기 페이지를 열지 못했다."
  total:
    hours_min: unknown
    hours_typical: unknown
    hours_max: unknown
    hours_basis: official
    hours_basis_note_ko: "전문자격 페이지는 한 수준을 550시간으로 계획하라고 적는다. 내역은 객관식 과목당 150시간 세 과목과 케이스 스터디 100시간이다. 범위가 아니라 단일 수치라 세 수준의 최소·대표·상한을 모두 550으로 두었다. Certificate 수준의 시간은 그 문장에 없어 전체 합계는 unknown이다. Certificate 페이지의 6 months to complete는 달력 기간이라 시간으로 바꾸지 않았다. 연 BPP Certificate 페이지도 학습시간 숫자를 주지 않아 합계를 만들지 않았고 hours_basis를 provider로 바꾸지 않았다. 수준당 12개월, 주 10–15시간은 권장이지 최소 기간이 아니다."
    min_calendar_months: unknown
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "등록비와 재등록비는 각 99파운드, 약 176000원. 첫 해 학생 연회비는 등록비에 포함되거나 무료 칸으로 적혀 있다."
    - "학생 연회비 150파운드, 약 267000원. 휴학에 해당하는 affiliate는 99파운드다."
    - "전략 케이스 스터디를 합격한 학생 연회비 335파운드, 약 597000원."
    - "실무경험 신청 199파운드, 약 354000원."
    - "단계 수수료는 2026-01-01부터의 Tier 1 합계다. Certificate는 객관식 123파운드 네 번, 운영은 152파운드 세 번과 케이스 261파운드, 관리는 180파운드 세 번과 269파운드, 전략은 254파운드 세 번과 382파운드다."
    - "Tier 2와 Tier 3는 더 낮다. 국가가 어느 티어인지는 목록 페이지를 열지 못했다. 한국이 Tier 1이라는 뜻은 아니다."
    - "2027-01-01 Tier 1 가격은 Certificate 객관식 128, 운영 객관식 158, 운영 케이스 271, 관리 객관식 187, 관리 케이스 280, 전략 객관식 264, 전략 케이스 397파운드다."

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: na
  hours_score: unknown
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: true
    non_written_assessment: true
  structure_score: 5
  level: unknown
  rationale_ko: |
    공식 합격률이 없어 합격률 점수는 뺐다. 전문자격 세 수준은 각 550시간이나 Certificate 시간이 없어 전체 대표 시간을 정하지 못했고 시간 점수도 없다.
    구조는 다과목, 사람이 채점하는 케이스 스터디, 4단계, 회원 전 실무경험으로 5점이다. 시간 점수가 없어 난이도 수준은 계산하지 않았다.

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.aicpa-cima.com/resources/landing/professional-qualification"
    accessed: 2026-11-11
    type: official
    covers: [structure, hours]
  - url: "https://www.aicpa-cima.com/resources/landing/exams"
    accessed: 2026-11-11
    type: official
    covers: [structure]
  - url: "https://www.aicpa-cima.com/resources/landing/fees"
    accessed: 2026-11-11
    type: official
    covers: [fee]
  - url: "https://www.aicpa-cima.com/resources/landing/certificate-in-business-accounting"
    accessed: 2026-11-11
    type: official
    covers: [eligibility, fee]
  - url: "https://www.aicpa-cima.com/resources/landing/practical-experience-requirements"
    accessed: 2026-11-11
    type: official
    covers: [award]
  - url: "https://www.aicpa-cima.com/resources/landing/becoming-a-cgma"
    accessed: 2026-11-11
    type: official
    covers: [award]
  - url: "https://wise.com/us/currency-converter/gbp-to-krw-rate/history"
    accessed: 2026-11-11
    type: other
    covers: [fee]
  - url: "https://www.bpp.com/accountancy-and-tax/cima/certificate-business-accounting"
    accessed: "2026-11-11"
    type: provider
    covers: [hours]
confidence:
  eligibility: low
  award: medium
  structure: high
  hours: medium
  pass_rate: low
  fee: medium
as_of: 2026-11-11
unknown_reasons:
  - "education_accepted: 최소 학력을 정한 문장을 연 페이지에서 찾지 못했다. 제한 없음으로 추정하지 않았다."
  - "pass_rates: 공식 합격률 표를 열지 못했다. 검색에 보인 수치도 쓰지 않았다."
  - "passing_rule_ko: 합격 점수 문장이 시험 안내 HTML에 없었다."
  - "Certificate hours and structure.total.hours: the 550-hour sentence covers one professional level, not the Certificate. The Certificate page's six months and the opened BPP page give no study-hour total, so total hours and the difficulty level stay unknown."
  - "min_calendar_months: 수준당 12개월은 권장이다. 케이스 창의 실제 간격과, 이미 갖춘 3년 경력과의 결합 최소기간은 계산하지 않았다."
  - "수수료 화면은 브라우저 변환에서 비어 원본 HTML의 표 데이터로 확인했다. 국가별 티어 목록은 그 표에 없었다."
notes_ko: |
  약 16개 평가를 모두 단계로 두면 기록이 길어, 기관이 정한 네 수준으로 묶었다. 한 수준의 시간과 수수료는 그 수준 안 개별 시험의 합이다.
  파운드는 2026-11-11 와이즈 머리글 1781원이다. 단계 합계의 1000원 반올림은 1780.62원을 써도 바뀌지 않는다.
  미주 경로의 FLP, Career Accelerator, 도제 과정은 같은 명칭으로 가지만 이 기록의 시험 단계가 아니다.
```

## us_cma

```yaml
# ---------- A. Identity ----------
id: us_cma
name_ko: "미국 공인관리회계사(CMA)"
name_orig: "Certified Management Accountant (CMA)"
tier: 1
region: US
exam_type: certificate
domain: [accounting_tax]
issuer: "Institute of Management Accountants (IMA)"
official_url: "https://help.imanet.org/s/article/What-do-you-need-to-qualify-for-the-CMA-certification"
status: active
status_note: "IMA 도움말 페이지는 2026-11-11에 본문이 열리지 않았다. 시험이 계속 시행된다는 점, 2026년 서술형을 케이스형 문항으로 바꾼 점, 수수료와 창은 베커 CMA 페이지에 적힌 IMA 안내를 따랐다. 발행 기관 페이지가 아니라 신뢰도는 낮다."
summary_ko: |
  CMA는 IMA의 관리회계 자격으로 Part 1과 Part 2 두 시험을 모두 합격해야 한다. 2026년 구성은 객관식 100문항과 케이스형 문항 2개이며, 각 과목 360점(500점 만점)이 합격선이다.
  같은 베커 페이지가 응시 요건을 서로 다르게 적어, 회원만으로 응시 가능한지 아니면 학사와 2년 경력이 응시 전 요건인지는 확정하지 않았다.
usage_ko: |
  자격을 받으면 관리회계와 재무관리 전문성을 보여주는 민간 자격으로 쓸 수 있다. 미국 CPA처럼 주가 주는 회계사 면허는 아니다.
  유지 조건과 계속교육 시간은 열린 IMA 페이지가 없어 적지 않았다.

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  nationality_note_ko: "국적 또는 거주 제한은 열린 페이지에서 확인하지 못했다."
  paths:
    - label_ko: "베커가 먼저 적은 경로: IMA 회원"
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "The Becker page first states that only active IMA membership is required to sit the exam."
    - label_ko: "베커가 뒤에 적은 경로: 학위 또는 인정 자격과 2년"
      age_min: null
      age_max: null
      education_accepted: [bachelor, master, doctor]
      work_years_min: 2
      work_fields_accepted: [accounting_tax, corporate_finance]
      source_text: "A later section of the same Becker page says a bachelor's degree or higher, or a related professional certification, and two consecutive years in management accounting or financial management are required before sitting."
  extra_checks_ko:
    - "두 경로는 한 제공자 페이지 안의 충돌이다. 어느 한쪽을 공식 응시 기준으로 고르지 않았다."
    - "인턴 경력은 뒤 문단에서 2년에 포함되지 않는다고 적혀 있다."
    - "학사 대신 인정되는 전문 자격의 목록은 열린 페이지에 없었다."
    - "2026년 창은 1월 1일–2월 28일(등록 마감 2월 15일), 5월 1일–6월 30일(6월 15일), 9월 1일–10월 31일(10월 15일)이다. 같은 창에서 같은 과목을 다시 볼 수 없다."
  exam_languages: [en]
  english_level_needed: advanced
  english_level_reason: "The opened provider page describes an English exam with case-based items, numerical entry, and drag-and-drop, and no Korean administration was stated."
  test_countries: [US]
  retake_limit_ko: "같은 응시 창 안에서는 같은 과목을 다시 볼 수 없다. 그 밖의 횟수 제한은 확인하지 못했다."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 2
  work_fields_accepted: [accounting_tax, corporate_finance]
  other_requirements_ko:
    - "두 과목을 모두 합격해야 한다."
    - "베커는 관리회계 또는 재무관리 실무 2년을 언급한다. 이 2년이 응시 전 요건인지 자격 부여 요건인지는 같은 페이지에서 충돌한다."
    - "학위 또는 IMA가 인정하는 전문 자격이 자격 부여에 필요한지는 IMA 원문을 열지 못했다."
    - "윤리 서약, 회원 유지, 계속교육 시간은 열린 IMA 페이지가 없어 적지 않았다."
  time_limit_ko: "베커는 입학금 납부 후 3년 안에 두 과목을 합격하지 않으면 입학금을 다시 내야 한다고 적는다. IMA 원문으로 확인하지 못했다."
  validity_ko: "자격의 유효 기간과 갱신 규칙은 열린 IMA 페이지가 없어 확인하지 못했다."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "Part 1 재무 계획, 성과, 분석"
      subjects_ko:
        - "계획과 예산(20%)"
        - "성과 관리(20%)"
        - "외부 보고(15%)"
        - "원가 관리(15%)"
        - "내부 통제(15%)"
        - "기술과 분석(15%)"
      format: mixed
      question_summary_ko: "객관식 100문항과 케이스형 문항 2개. 케이스형은 수치 입력과 끌어다 놓기를 쓴다. 배점은 객관식 75%, 나머지 25%다. IMA 중국 공식 FAQ는 시험 총시간을 4시간으로 적고, 그중 사례 문항 구간은 1시간, 객관식은 3시간이라고 한다. 240분은 그 4시간을 분으로 바꾼 값이다."
      duration_min: 240
      passing_rule_ko: "0부터 500점 척도에서 360점."
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 150
      hours_typical: 160
      hours_max: 170
      sessions_per_year: 3
      next_dates_ko: "2026년 세 창은 2026-11-11 현재 모두 끝났다. 2027년 첫 창의 날짜는 열린 페이지에 없었다."
      fee:
        amount: 545
        currency: USD
        krw_approx: 729000
        fx_date: 2026-11-10
    - name_ko: "Part 2 전략적 재무관리"
      subjects_ko:
        - "의사결정 분석(25%)"
        - "재무제표 분석(20%)"
        - "기업 재무(20%)"
        - "윤리(15%)"
        - "위험 관리(10%)"
        - "투자 의사결정(10%)"
      format: mixed
      question_summary_ko: "객관식 100문항과 케이스형 문항 2개. 배점은 객관식 75%, 나머지 25%다. IMA 중국 공식 FAQ는 시험 총시간을 4시간으로 적고, 그중 사례 문항 구간은 1시간, 객관식은 3시간이라고 한다. 240분은 그 4시간을 분으로 바꾼 값이다."
      duration_min: 240
      passing_rule_ko: "0부터 500점 척도에서 360점."
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 150
      hours_typical: 160
      hours_max: 170
      sessions_per_year: 3
      next_dates_ko: "2026년 세 창은 2026-11-11 현재 모두 끝났다. 2027년 첫 창의 날짜는 열린 페이지에 없었다."
      fee:
        amount: 545
        currency: USD
        krw_approx: 729000
        fx_date: 2026-11-10
  total:
    hours_min: 300
    hours_typical: 320
    hours_max: 340
    hours_basis: provider
    hours_basis_note_ko: "베커는 IMA가 과목당 150–170시간을 권한다고 적었다. IMA 원문 페이지는 열리지 않아 근거는 제공자다. 대표값 160은 그 범위의 중앙값이다."
    min_calendar_months: unknown
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "베커가 적은 전문가 회원비 295달러, 약 395000원. 학생 49달러(약 66000원), 학술 160달러(약 214000원)."
    - "전문가 입학금 300달러, 약 401000원. 학생·학술 입학금 225달러, 약 301000원."
    - "학생·학술 응시료는 과목당 407달러, 약 544000원으로 적혀 있다. 단계 수수료는 전문가 요금 545달러다."
    - "위 금액은 IMA 상점 화면이 아니라 베커 페이지의 수치다."

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
  rationale_ko: |
    최근 3회 이상의 공식 합격률이 없어 합격률 점수는 뺐다. 베커가 인용한 2020년 약 45%는 최신 3~5회가 아니므로 쓰지 않았다.
    제공자 기준 대표 학습시간 320시간은 3점이고, 여러 주제와 계산형 문항, 자격 전 경력 요건을 반영한 구조는 4점이다. 평균 3.5를 반올림하면 4점이다.

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.becker.com/cma-review/cma-exam"
    accessed: 2026-11-11
    type: provider
    covers: [eligibility, award, structure, hours, fee]
  - url: "https://help.imanet.org/s/article/What-do-you-need-to-qualify-for-the-CMA-certification"
    accessed: 2026-11-11
    type: official
    covers: [eligibility]
  - url: "https://www.mt.co.kr/en/economy/2026/11/10/2026111016284356804"
    accessed: 2026-11-11
    type: other
    covers: [fee]
  - url: "https://www.imachina.org.cn/"
    accessed: "2026-11-11"
    type: official
    covers: [structure]
confidence:
  eligibility: low
  award: low
  structure: medium
  hours: low
  pass_rate: low
  fee: low
as_of: 2026-11-11
unknown_reasons:
  - "IMA 자격 요건 도움말은 CSS 오류만 반환해 본문을 읽지 못했다. 응시 요건은 베커 페이지의 두 문단이 충돌한다."
  - "duration_min: the opened IMA China FAQ states a 4-hour exam total, converted exactly to 240 minutes. The English IMA help article on the case-based change did not render. The FAQ states hours, not the word minutes."
  - "pass_rates: 베커는 2020년 약 45%만 인용했다. 최근 3~5회 공식 통계가 아니다."
  - "min_calendar_months: 2027년 다음 창의 시작일이 열린 페이지에 없고, 2년 경력이 응시 전인지 자격 전인지가 충돌한다."
  - "시험 장소 국가 목록과 영어 이외 언어는 확인하지 못했다. test_countries는 미국 자격이라는 기록 구분만 반영했다."
  - "validity_ko: 갱신과 계속교육의 공식 문장을 열지 못했다."
notes_ko: |
  수수료 원화는 2026-11-10 서울 종가 1달러=1337.5원으로 1000원 단위 반올림했다.
  객관식 50%를 넘어야 두 번째 섹션으로 간다는 규칙은 IMA 원문을 열지 못해 넣지 않았다.
```

## us_cpa

```yaml
# ---------- A. Identity ----------
id: us_cpa
name_ko: "미국 공인회계사(CPA)"
name_orig: "Uniform CPA Examination and California CPA license"
tier: 1
region: US
exam_type: license
domain: [accounting_tax]
issuer: "American Institute of CPAs (AICPA) and National Association of State Boards of Accountancy (NASBA) for the exam; California Board of Accountancy (CBA) for California eligibility and the license"
official_url: "https://www.dca.ca.gov/cba/outreach/faculty-resource/examination-and-licensure-requirements.shtml"
status: reform_announced
status_note: "California rules in force on 2026-11-11 are the main values. From 2027-01-01, CBA adds 3 semester units of ethics to sit, and a new license pathway uses the same accounting concentration as the exam plus 2 years of experience. CBA says the concentration regulations are not yet final. Legacy license education remains available for applications through 2028-12-31. The opened AICPA pass-rate page of 2026-10-22 still describes three Core sections plus one Discipline, so CPA Evolution is the live exam model."
summary_ko: |
  미국 CPA 시험은 AUD, FAR, REG 핵심 3과목과 BAR, ISC, TCP 중 선택한 전공 1과목으로 이루어진다. 이 기록의 응시·면허 수치는 인구가 가장 많은 주인 캘리포니아 회계위원회(CBA) 기준이다.
  2026-11-11에 적용되는 응시 학력은 학사 이상과 회계 24학점, 경영 24학점이다. 면허는 이와 별도로 총 150학점과 감독하 일반회계 경력 12개월이 필요하다. 2027-01-01부터 응시·면허 학점과 경력 요건이 바뀐다.
usage_ko: |
  캘리포니아 CPA 면허를 받으면 그 주에서 공인회계사로 활동할 수 있다. 증언(attest) 권한은 면허와 별도이며, 같은 12개월 경력 안에 증언 업무 500시간이 더 필요하다.
  다른 주는 응시 학점과 경력 기간이 다를 수 있다. 이 기록은 그 차이를 주별로 조사하지 않았다.

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  nationality_note_ko: "연 페이지에서 시민권이나 거주 요건은 확인되지 않았다. 면허 발급 전 사회보장번호 또는 ITIN이 필요하지만, 이것은 국적 제한으로 적지 않았다."
  paths:
    - label_ko: "학사 이상과 회계·경영 학점"
      age_min: null
      age_max: null
      education_accepted: [bachelor, master, doctor]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "A bachelor's degree or higher and 24 semester units in accounting and 24 semester units in business-related subjects are required to qualify for the examination."
    - label_ko: "학위와 학점을 180일 안에 마치는 재학생"
      age_min: null
      age_max: null
      education_accepted: [college_enrolled, college_final_year]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "Early entry is available to an applicant who is currently enrolled and will complete the degree and the 24 accounting and 24 business semester units within 180 days of application."
  extra_checks_ko:
    - "주 규칙은 캘리포니아만 본문으로 삼았다. 다른 주의 응시 학점과 경력은 이 기록에 넣지 않았다."
    - "2026-11-11 응시 기준은 학사 이상, 회계 24학기 units, 경영 24학기 units다. 2027-01-01부터 윤리 3학기 units가 응시 요건에 추가된다."
    - "조기 응시는 신청일부터 180일 안에 학위와 24/24 학점을 마치고, 240일 안에 성적증명서를 내야 한다."
    - "복수학위 경로는 석사 수여 시 학사가 함께 수여되거나 150 units를 이미 갖춘 경우다. 학사 요건 자체를 면제하지는 않는다."
    - "미국 내 Prometric과 지정 해외 센터에서 응시할 수 있다. 캘리포니아 지원자가 캘리포니아에서 시험 볼 의무는 없다. 온라인 응시는 확인되지 않았다."
    - "첫 CBA 응시 신청 수수료는 100달러, 재신청은 50달러다. NASBA 과목 수수료와는 별도다."
  exam_languages: [en]
  english_level_needed: advanced
  english_level_reason: "The exam is English-only and half or more of the score, except a 60/40 split on ISC, comes from task-based simulations rather than short items."
  test_countries: [US]
  retake_limit_ko: "응시 횟수 제한은 확인되지 않았다. 같은 과목은 성적 발표 후에만 다시 볼 수 있다. NASBA 과목 수수료를 내고 받은 NTS는 9개월이며, 그 안에 응시하지 않으면 수수료가 소멸한다."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 1
  work_fields_accepted: [accounting_tax, corporate_finance]
  other_requirements_ko:
    - "2026-11-11 면허 학력은 총 150학기 units이며, 그 안에 회계 24, 경영 24, 회계 연구 20, 윤리 연구 10 units가 있다. 회계 윤리 3학기 units는 원칙적으로 상급 과정이어야 하나 커뮤니티칼리지 이수도 인정되는 예외가 있다."
    - "경력은 일반회계 최소 12개월이다. 공식 범위는 회계, 증언, 컴필레이션, 경영 자문, 재무 자문, 세무, 컨설팅이다. 템플릿 분야는 회계·세무와 기업 재무로만 대응했다."
    - "경력은 현재 유효하고 제한이 없는 CPA의 감독을 받아야 한다. 비상장 업무라면 미국 CPA여야 한다. 파트타임은 170시간이 1개월이다. 인턴, 계약, 자원봉사도 될 수 있고, 시험 전의 경력도 인정되며 경력 만료는 확인되지 않았다."
    - "증언 권한은 선택이다. 같은 12개월 안에 증언 업무 500시간이 추가로 필요하다."
    - "지문(DOJ/FBI)이 필요하다. 캘리포니아 밖 거주자의 하드카피 지문 수수료는 49달러다."
    - "면허 발급 전 사회보장번호 또는 ITIN이 필요하다."
    - "2024-07-01 이후 면허를 위한 별도 윤리 시험은 요구되지 않는다."
    - "2027-01-01 신규 경로는 학사(전공 무관)와 회계 24, 경영 24, 윤리 3 units, 경력 2년이다. 지정 분야 석사는 경력 1년, CBA가 인정하는 수료는 6개월을 대체할 수 있으며 둘을 함께 쓰지는 못한다. 이 규정은 CBA가 아직 최종이 아니라고 밝혔다."
  time_limit_ko: "합격 학점의 유지 한도는 첫 합격 성적 발표일부터 30개월이며, 마지막 과목을 그 안에 응시해야 한다. 이것은 최단 기간이 아니라 학점 소멸 한도다."
  validity_ko: |
    캘리포니아 면허는 갱신형이다. 초기 면허 신청 수수료는 250달러, 초기 면허 수수료는 400달러다.
    갱신 주기와 계속교육 시간은 이번에 연 페이지에서 수치로 확인하지 못했다. 2024-07-01 이후에는 면허용 윤리 시험이 없다.

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "AUD (감사와 인증)"
      subjects_ko:
        - "감사와 인증(AUD)"
      format: mixed
      question_summary_ko: "베커가 2026-05-28에 적은 구성은 객관식 78문항과 과제형 시뮬레이션 7개다. AICPA는 배점을 객관식 50%, 시뮬레이션 50%로 밝혔다. 2025 청사진 PDF는 열지 않아 문항 수의 공식 대조는 하지 못했다."
      duration_min: 240
      passing_rule_ko: "0부터 99까지의 척도 점수 75점. 정답 비율이 아니고 곡선을 적용하지 않는다."
      pass_rates:
        - period: 2025-Q3
          rate_pct: 50.03
          examinees: unknown
        - period: 2025-Q4
          rate_pct: 48.78
          examinees: unknown
        - period: 2026-Q1
          rate_pct: 47.80
          examinees: unknown
        - period: 2026-Q2
          rate_pct: 49.38
          examinees: unknown
        - period: 2026-Q3
          rate_pct: 52.23
          examinees: unknown
      pass_rate_avg_pct: 49.64
      hours_min: 110
      hours_typical: 125
      hours_max: 140
      sessions_per_year: unknown
      next_dates_ko: "2026-11-11 기준 핵심 과목은 연중 응시다. 다음 고정 회차 날짜는 없다."
      fee:
        amount: 268.59
        currency: USD
        krw_approx: 359000
        fx_date: 2026-11-10
    - name_ko: "FAR (재무회계와 보고)"
      subjects_ko:
        - "재무회계와 보고(FAR)"
      format: mixed
      question_summary_ko: "베커가 2026-05-28에 적은 구성은 객관식 50문항과 과제형 시뮬레이션 7개다. AICPA 배점은 객관식 50%, 시뮬레이션 50%다."
      duration_min: 240
      passing_rule_ko: "0부터 99까지의 척도 점수 75점. 정답 비율이 아니고 곡선을 적용하지 않는다."
      pass_rates:
        - period: 2025-Q3
          rate_pct: 43.07
          examinees: unknown
        - period: 2025-Q4
          rate_pct: 40.20
          examinees: unknown
        - period: 2026-Q1
          rate_pct: 43.46
          examinees: unknown
        - period: 2026-Q2
          rate_pct: 42.47
          examinees: unknown
        - period: 2026-Q3
          rate_pct: 44.49
          examinees: unknown
      pass_rate_avg_pct: 42.74
      hours_min: 120
      hours_typical: 135
      hours_max: 150
      sessions_per_year: unknown
      next_dates_ko: "2026-11-11 기준 핵심 과목은 연중 응시다. 다음 고정 회차 날짜는 없다."
      fee:
        amount: 268.59
        currency: USD
        krw_approx: 359000
        fx_date: 2026-11-10
    - name_ko: "REG (규제)"
      subjects_ko:
        - "규제(REG)"
      format: mixed
      question_summary_ko: "베커가 2026-05-28에 적은 구성은 객관식 72문항과 과제형 시뮬레이션 8개다. AICPA 배점은 객관식 50%, 시뮬레이션 50%다."
      duration_min: 240
      passing_rule_ko: "0부터 99까지의 척도 점수 75점. 정답 비율이 아니고 곡선을 적용하지 않는다."
      pass_rates:
        - period: 2025-Q3
          rate_pct: 66.05
          examinees: unknown
        - period: 2025-Q4
          rate_pct: 60.73
          examinees: unknown
        - period: 2026-Q1
          rate_pct: 66.65
          examinees: unknown
        - period: 2026-Q2
          rate_pct: 66.87
          examinees: unknown
        - period: 2026-Q3
          rate_pct: 65.37
          examinees: unknown
      pass_rate_avg_pct: 65.13
      hours_min: 80
      hours_typical: 95
      hours_max: 110
      sessions_per_year: unknown
      next_dates_ko: "2026-11-11 기준 핵심 과목은 연중 응시다. 다음 고정 회차 날짜는 없다."
      fee:
        amount: 268.59
        currency: USD
        krw_approx: 359000
        fx_date: 2026-11-10
    - name_ko: "전공 1과목(BAR, ISC, TCP 중 1)"
      subjects_ko:
        - "비즈니스 분석와 보고(BAR)"
        - "정보 시스템과 통제(ISC)"
        - "세무 준수와 계획(TCP)"
      format: mixed
      question_summary_ko: "지원자는 세 전공 중 하나만 본다. 베커 2026-05-28 기준 BAR는 객관식 50과 시뮬레이션 8, ISC는 82와 6, TCP는 68과 6이다. AICPA는 ISC만 객관식 60%, 시뮬레이션 40%이고 나머지 전공은 50대 50이다. 세 전공의 합격률은 다르고 응시 인원이 없어 하나의 합격률로 합치지 않았다."
      duration_min: 240
      passing_rule_ko: "선택한 전공 하나의 척도 점수 75점. 세 전공을 모두 합격할 필요는 없다."
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 60
      hours_typical: 95
      hours_max: 150
      sessions_per_year: unknown
      next_dates_ko: "핵심 과목은 연중 응시로 확인했다. 전공 과목만 분기 첫 달에 본다는 일정은 해당 AICPA 페이지를 열지 못해 적지 않았다."
      fee:
        amount: 268.59
        currency: USD
        krw_approx: 359000
        fx_date: 2026-11-10
  exemptions_ko:
    - "다른 자격에 따른 과목 면제는 이번에 연 페이지에서 확인하지 못했다."
  total:
    hours_min: 370
    hours_typical: 450
    hours_max: 550
    hours_basis: provider
    hours_basis_note_ko: "베커가 과목별 범위를 AUD 110–140, FAR 120–150, REG 80–110, BAR 120–150, ISC 60–90, TCP 60–90시간으로 적었다. 과목 대표값은 범위의 중앙값이다. 전공은 하나만 보므로 세 전공 중앙값 135, 75, 75의 단순 평균 95를 썼고 응시 인원 가중은 하지 않았다. 합계는 370, 450, 550이다. 같은 글의 전체 권장 400–600시간과는 하한이 달라, 단계 합계 규칙을 위해 과목 범위를 합산한 값을 총량으로 썼다."
    min_calendar_months: unknown
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "CBA 첫 응시 신청 100달러, 약 134000원(2026-11-10, 1달러=1337.5원)."
    - "CBA 재신청 50달러, 약 67000원."
    - "캘리포니아 면허 신청 250달러, 약 334000원. 초기 면허 400달러, 약 535000원."
    - "캘리포니아 밖 거주자의 하드카피 지문 49달러, 약 66000원."
    - "네 과목 NASBA 수수료 합계는 1074.36달러다. 과목별 금액은 각 단계에 적었다. 결제 쿠폰은 90일이다."

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: na
  hours_score: 4
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: true
    non_written_assessment: true
  structure_score: 5
  level: 5
  rationale_ko: |
    합격률 점수는 뺐다. 핵심 3과의 최근 5분기 평균은 냈지만, 필수인 전공 1과는 세 과목의 합격률이 다르고 인원이 공개되지 않아 하나의 평균을 만들지 않았다.
    학습시간 대표값 450시간은 4점, 4과목·시뮬레이션·4단계·면허 전 실무경력은 구조 5점이다. 둘의 평균 4.5를 반올림하면 5점이다. TCP나 ISC만 고르면 학습시간 중앙값이 더 낮아 이 점수는 그 경로를 무겁게 본다.

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.aicpa-cima.com/resources/article/learn-more-about-cpa-exam-scoring-and-pass-rates"
    accessed: 2026-11-11
    type: official
    covers: [structure, pass_rate]
  - url: "https://www.dca.ca.gov/cba/outreach/faculty-resource/examination-and-licensure-requirements.shtml"
    accessed: 2026-11-11
    type: regulator
    covers: [eligibility, award]
  - url: "https://www.dca.ca.gov/cba/applicants/exam-faqs.shtml"
    accessed: 2026-11-11
    type: regulator
    covers: [eligibility, structure, fee]
  - url: "https://www.dca.ca.gov/cba/applicants/initial-license-faqs.shtml"
    accessed: 2026-11-11
    type: regulator
    covers: [award, fee]
  - url: "https://www.dca.ca.gov/cba/applicants/experience-requirements.shtml"
    accessed: 2026-11-11
    type: regulator
    covers: [award]
  - url: "https://nasba.org/candidate-guide/"
    accessed: 2026-11-11
    type: official
    covers: [structure]
  - url: "https://www.becker.com/blog/cpa/how-long-does-it-take-to-study-for-the-cpa-exam"
    accessed: 2026-11-11
    type: provider
    covers: [hours, structure]
  - url: "https://www.mt.co.kr/en/economy/2026/11/10/2026111016284356804"
    accessed: 2026-11-11
    type: other
    covers: [fee]
confidence:
  eligibility: high
  award: high
  structure: medium
  hours: medium
  pass_rate: high
  fee: high
as_of: 2026-11-11
unknown_reasons:
  - "structure.stages[전공].pass_rates: 2025-Q3부터 2026-Q3까지 BAR 39.46, 39.71, 41.30, 45.62, 44.35(평균 42.09), ISC 66.91, 66.75, 66.79, 67.98, 70.22(평균 67.73), TCP 76.68, 76.72, 79.28, 79.75, 80.08(평균 78.50)이다. 필수 과목은 하나이고 인원이 없어 단계 평균을 만들지 않았다."
  - "structure.total.pass_rate_avg_pct: 전공 단계 평균이 없어 4단계 평균을 계산하지 않았다."
  - "structure.total.min_calendar_months: 30개월은 합격 학점의 상한이다. 과목 사이 최소 간격을 정한 페이지는 열지 못했다."
  - "sessions_per_year: 연중 응시라 연간 고정 횟수가 없다. 전공만 분기 창이라는 주장은 해당 페이지를 열지 못했다."
  - "시험 시간: NASBA 수험 안내(표지 2026-11-02)와 베커는 4과목 모두 4시간이다. 2026-10-08자 CBA FAQ는 REG와 전공을 3시간으로 적는다. 더 나중이고 시험 운영 주체인 NASBA를 따랐다."
  - "계속교육 시간과 갱신 주기의 공식 수치는 연 페이지에 없었다."
notes_ko: |
  환율은 2026-11-10 서울 외환시장 주간 종가 1달러=1337.5원(머니투데이)이다. 원화는 1000원 단위 반올림이다.
  합격률의 응시 인원은 AICPA 표에 없다. 2026년 누적 합격률(AUD 50.03, FAR 43.54, REG 66.32, BAR 43.88, ISC 68.56, TCP 79.75)은 분기 평균과 따로 두었고 최근 5분기 계산에는 넣지 않았다.
  베커의 시뮬레이션 문항 수는 열지 않은 2025 청사진과 다를 수 있어 공식 문항 수로 단정하지 않았다.
```

## us_series_63

```yaml
# ---------- A. Identity ----------
id: us_series_63
name_ko: "통일 증권법 대리인 시험(Series 63)"
name_orig: "Series 63 – Uniform Securities Agent State Law Exam"
tier: 1
region: US
exam_type: license
domain: [securities_investment]
issuer: "North American Securities Administrators Association (NASAA); administered by FINRA"
official_url: "https://www.finra.org/registration-exams-ce/qualification-exams/series63"
status: active
summary_ko: |
  Series 63은 NASAA가 만들고 FINRA가 시행하는 주 증권법 시험이다. 정식 명칭은 Uniform Securities Agent State Law Exam이고, FINRA 페이지는 Uniform Securities State Law Examination이라고도 부른다.
  채점 60문항 중 43문항 이상을 맞혀야 합격한다. FINRA 대표자 시험과 달리 NASAA 시험은 접수 페이지에서 별도 접수가 열린다.
usage_ko: |
  이 시험은 주 증권 대리인 등록에 쓰이는 법규 시험이다. 합격만으로 증권을 팔 수 있는 FINRA 대표자 등록이 생기지는 않으며, 일반 증권을 취급하려면 Series 7 같은 대표자 시험과 회사·주 등록이 따로 필요하다.
  시험을 채택한 주에서는 중개인 대리인 시험유효기간 연장 프로그램(EVEP)으로 연간 계속교육을 하면 Series 63 효력을 종료 후 최대 5년까지 유지할 수 있다. 채택 주 목록과 기본 실효 기간은 NASAA 페이지가 차단되어 확인하지 못했다.

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  nationality_note_ko: "연 FINRA 페이지에는 국적·시민권 요건이 없다."
  paths:
    - label_ko: "NASAA 시험으로 직접 접수할 수 있는 경로"
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "FINRA’s enrollment page gives a direct NASAA enrollment link for the Series 63 and says a person associated with a broker-dealer or investment adviser should consult the firm because the firm may have to file Form U4."
  extra_checks_ko:
    - "이미 브로커딜러나 투자자문사에 소속이면 회사가 Form U4로 시험을 신청해야 할 수 있다."
    - "NASAA FAQ의 ‘스폰서 불필요’ 문장은 nasaa.org가 지역 차단되어 원문을 열지 못했다. 스폰서 없음은 FINRA 접수 화면의 직접 접수 링크로만 확인했다."
    - "나이, 학력, 경력, SIE 병행 요건은 Series 63 FINRA 페이지에 없다."
    - "합격 후 어느 주에서 대리인으로 등록되는지는 주마다 다르다."
  exam_languages: [en]
  english_level_needed: working
  english_level_reason: "It is a short English-only multiple-choice law exam, not an essay or long case exam."
  test_countries: [US]
  retake_limit_ko: "2026-11-11 기준 1·2회 불합격 후 30일, 2년 안의 3회째는 180일이다. 2027-01-04 이후 연 창부터 1·2회는 그대로 30일이고 3회째 이후는 60일이다. 그 전에 연 창은 옛 규칙을 따른다."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko:
    - "주 대리인으로 활동하려면 해당 주의 등록이 필요하다. 시험 합격이 등록 자체는 아니다."
    - "EVEP와 계속교육은 모델 규칙을 채택한 주에만 적용된다."
  time_limit_ko: "기본 실효 기간은 이번에 연 FINRA 페이지에 없다."
  validity_ko: |
    FINRA Series 63 페이지는 채택 주에서 EVEP와 연간 계속교육으로 시험 효력을 최대 5년까지 유지할 수 있다고 적는다.
    등록이 끝난 뒤 시험을 다시 봐야 하는 기본 기간은 확인하지 못했다. FINRA 대표자 시험의 2년 규칙은 Series 63에 그대로 적용된다고 단정하지 않는다.

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "Series 63"
      subjects_ko:
        - "주 증권법(세부 영역 명칭은 NASAA 개요 미확인)"
      format: mcq
      question_summary_ko: "채점 60문항에 채점되지 않는 문항 5개가 있다. 제한 시간은 75분이다. 합격은 채점 문항 60개 중 43개 이상 정답이다."
      duration_min: 75
      passing_rule_ko: "채점 60문항 중 43문항 이상 정답."
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 30
      hours_typical: 35
      hours_max: 40
      sessions_per_year: unknown
      next_dates_ko: "2026년 기준 고정 회차가 없는 예약제다. 온라인은 시험 편의가 필요한 응시자만 가능하다. 다음 고정 시험일은 없다."
      fee:
        amount: 147
        currency: USD
        krw_approx: 196000
        fx_date: "2026-11-11"
  total:
    hours_min: 30
    hours_typical: 35
    hours_max: 40
    hours_basis: provider
    hours_basis_note_ko: "FINRA와 이번에 열리지 않은 NASAA 페이지에서는 학습 시간을 확인하지 못했다. Knopman Marks는 2026-11-02 글에서 Series 63을 30–40시간 공부하라고 했다. 전형값 35는 그 구간의 중간값이다."
    min_calendar_months: 1
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "주 대리인 등록 수수료는 주마다 다르며 금액은 확인하지 못했다."

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: na
  hours_score: 1
  structure_points:
    subjects_3_or_more: false
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 1
  level: 1
  rationale_ko: |
    합격률이 없어 학습 1점과 구조 1점만 평균해 1로 했다. 시험은 한 단계의 짧은 객관식이다.
    NASAA 개요의 영역이 3개 이상인지는 확인하지 못해 과목 수 가점을 주지 않았다.

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.finra.org/registration-exams-ce/qualification-exams/series63"
    accessed: "2026-11-11"
    type: official
    covers: [eligibility, award, structure]
  - url: "https://www.finra.org/registration-exams-ce/qualification-exams"
    accessed: "2026-11-11"
    type: official
    covers: [structure, fee]
  - url: "https://www.finra.org/registration-exams-ce/qualification-exams/enroll"
    accessed: "2026-11-11"
    type: official
    covers: [eligibility]
  - url: "https://knopman.com/blog/2026/11/02/securities-exam-differences"
    accessed: "2026-11-11"
    type: provider
    covers: [hours]
  - url: "https://www.citibank.co.kr/FxdExrtFxrt0100.act?JEX_LANG=EN"
    accessed: "2026-11-11"
    type: other
    covers: [fee]
confidence:
  eligibility: medium
  award: medium
  structure: high
  hours: medium
  pass_rate: high
  fee: high
as_of: "2026-11-11"
unknown_reasons:
  - "NASAA 시험 FAQ와 콘텐츠 개요: nasaa.org가 지역 차단(Sucuri GEO02)되어 열리지 않았다. 영역 이름, 스폰서 문장의 원문, 기본 실효 기간, 공식 합격률을 거기서 확인하지 못했다."
  - "pass_rates: FINRA Series 63 페이지와 자격시험 목록에 합격률이 없다."
  - "sessions_per_year: 예약제라 연간 고정 횟수가 없다."
  - "age_min, education, nationality: 연 페이지에 해당 제한이 적혀 있지 않다."
notes_ko: |
  응시료 147달러는 2026-11-11에 연 FINRA 자격시험 목록의 NASAA 칸이다. NASAA가 따로 올린 최신 수수료 원문은 열지 못했다.
  스폰서 없이 접수 창을 열 수 있는 쪽으로 적었으나, 소속 회사는 Form U4를 내야 할 수 있다. 최단 기간은 수시 시험이라 더 짧을 수 있으나 통월 1개월로 적었다.
  Series 7이나 Series 65의 단계가 아니다.
```

## us_series_65

```yaml
# ---------- A. Identity ----------
id: us_series_65
name_ko: "통일 투자자문사법 시험(Series 65)"
name_orig: "Series 65 – Uniform Investment Adviser Law Exam"
tier: 1
region: US
exam_type: license
domain: [securities_investment, financial_planning]
issuer: "North American Securities Administrators Association (NASAA); administered by FINRA"
official_url: "https://www.finra.org/registration-exams-ce/qualification-exams/series65"
status: active
summary_ko: |
  Series 65는 NASAA의 투자자문법 시험이고 FINRA가 시행한다. FINRA 페이지의 시험 이름은 NASAA Investment Advisers Law Examination이다.
  채점 130문항 중 92문항 이상을 맞혀야 하며 시험 시간은 180분이다. SIE나 회원사 스폰서를 응시 조건으로 적지 않고, FINRA 접수 페이지에 NASAA 직접 접수가 있다.
usage_ko: |
  합격은 투자자문 대표자(IAR)로 주 등록을 할 때 쓰인다. 합격 자체가 등록이나 자문 영업 허가는 아니며, 주 등록이 필요하다.
  모델 규칙을 채택한 주의 IAR은 계속교육 대상이다. IAR용 EVEP를 채택한 주에서는 연간 계속교육으로 Series 65 효력을 최대 5년까지 유지할 수 있다. 채택 주, 교육 시간, 전문자격으로 시험을 갈음하는 주는 확인하지 못했다.

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  nationality_note_ko: "연 FINRA 페이지에는 국적 제한이 없다."
  paths:
    - label_ko: "NASAA 시험으로 직접 접수할 수 있는 경로"
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "FINRA’s enrollment page gives a direct NASAA enrollment link for the Series 65 and says someone associated with a broker-dealer or investment adviser should consult the firm because the firm may have to file Form U4."
  extra_checks_ko:
    - "소속 회사는 Form U4로 시험을 신청해야 할 수 있다. 소속이 없을 때의 스폰서 면제는 NASAA FAQ 원문을 열지 못했고, FINRA의 NASAA 직접 접수 링크로 판단했다."
    - "Series 65 FINRA 페이지는 SIE, 나이, 학력, 경력 연수를 응시 조건으로 적지 않는다."
    - "일부 주가 CFA, CFP 등 전문자격으로 Series 65를 갈음하는지는 이번 조사에서 확인하지 못했다."
    - "온라인 응시는 시험 편의가 필요한 사람만 가능하다."
  exam_languages: [en]
  english_level_needed: advanced
  english_level_reason: "It is an English-only three-hour exam, and Knopman Marks says the course teaches calculations across NASAA’s four content areas."
  test_countries: [US]
  retake_limit_ko: "2026-11-11 기준 1·2회 불합격 후 30일, 2년 안의 3회째는 180일이다. 2027-01-04 이후 새로 연 창은 1·2회 30일, 3회째 이후 60일이다."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko:
    - "IAR로 일하려면 해당 주 등록이 필요하다."
    - "채택 주의 IAR 계속교육 모델 규칙이 적용될 수 있다. 요구 시간은 NASAA 페이지를 열지 못해 확인하지 못했다."
  time_limit_ko: "기본 실효 기간은 연 FINRA 페이지에 없다."
  validity_ko: |
    IAR EVEP를 채택한 주에서는 연간 계속교육으로 Series 65 효력을 최대 5년까지 유지할 수 있다.
    채택하지 않은 주의 기본 유효 기간은 확인하지 못했다. FINRA 규제 요소 교육을 상품·실무 계속교육 요건에 넣을 수 있다고 FINRA는 안내한다.

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "Series 65"
      subjects_ko:
        - "NASAA 내용 영역 4개(공식 영역명은 nasaa.org 차단으로 미확인)"
      format: mcq
      question_summary_ko: "채점 130문항에 채점되지 않는 문항 10개가 있다. 제한 시간은 180분이다. 합격은 채점 130문항 중 92문항 이상 정답이며, 백분율 커트라인이 아니라고 NASAA가 설명한다는 2차 인용은 원문 미확인이다. FINRA 페이지는 92/130만 적는다."
      duration_min: 180
      passing_rule_ko: "채점 130문항 중 92문항 이상 정답."
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 80
      hours_typical: 85
      hours_max: 90
      sessions_per_year: unknown
      next_dates_ko: "2026년 기준 시험장 예약제다. 온라인은 시험 편의 응시자만 가능하다. 고정된 다음 시험일은 없다."
      fee:
        amount: 187
        currency: USD
        krw_approx: 250000
        fx_date: "2026-11-11"
  total:
    hours_min: 80
    hours_typical: 85
    hours_max: 90
    hours_basis: provider
    hours_basis_note_ko: "STC 시험 안내는 준비 시간을 80–90시간으로 적는다. Knopman Marks 과정 페이지의 권장 학습 시간은 80시간이고, Series 7이나 금융 배경이 있으면 더 짧을 수 있다고만 했다. 전형값 85는 STC 구간의 중간값이다. 더 낮다는 수치는 공개되지 않아 최솟값을 80으로 두었다."
    min_calendar_months: 1
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "주 IAR 등록 수수료와 채택 주의 계속교육 비용은 확인하지 못했다."

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
  rationale_ko: |
    합격률이 없어 전형 85시간의 2점과 구조 2점을 평균해 2로 했다.
    영역이 4개라는 말은 Knopman Marks에 있고 NASAA 개요 원문은 열지 못했다. 답안은 객관식이라 주관식 가점은 주지 않았다.

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.finra.org/registration-exams-ce/qualification-exams/series65"
    accessed: "2026-11-11"
    type: official
    covers: [eligibility, award, structure]
  - url: "https://www.finra.org/registration-exams-ce/qualification-exams"
    accessed: "2026-11-11"
    type: official
    covers: [structure, fee]
  - url: "https://www.finra.org/registration-exams-ce/qualification-exams/enroll"
    accessed: "2026-11-11"
    type: official
    covers: [eligibility]
  - url: "https://www.stcusa.com/securities/licensing/us/series-65/"
    accessed: "2026-11-11"
    type: provider
    covers: [hours, structure]
  - url: "https://knopman.com/courses/series-65"
    accessed: "2026-11-11"
    type: provider
    covers: [hours, structure]
  - url: "https://knopman.com/blog/2026/11/09/series-65-study-guide"
    accessed: "2026-11-11"
    type: provider
    covers: [hours, structure]
  - url: "https://www.citibank.co.kr/FxdExrtFxrt0100.act?JEX_LANG=EN"
    accessed: "2026-11-11"
    type: other
    covers: [fee]
confidence:
  eligibility: medium
  award: medium
  structure: medium
  hours: medium
  pass_rate: high
  fee: high
as_of: "2026-11-11"
unknown_reasons:
  - "NASAA 개요·FAQ: nasaa.org 지역 차단으로 영역 공식 명칭, 스폰서 원문, IAR 계속교육 시간, 전문자격 갈음, 합격률을 확인하지 못했다."
  - "pass_rates: FINRA 페이지에 없다."
  - "sessions_per_year: 예약제라 연간 고정 횟수가 없다."
  - "기본 유효 기간: EVEP의 최대 5년 외의 주별 실효 기간은 미확인이다."
notes_ko: |
  응시료 187달러는 FINRA 자격시험 목록 기준이다. 합격 기준 92/130도 FINRA 페이지에 있다.
  회사 스폰서 없이 접수 경로가 열려 있으나 소속자는 Form U4를 쓸 수 있다. SIE나 Series 7의 상위 단계가 아니다. 최단 기간은 통월 1개월로 적었고, 좌석이 있으면 더 빠를 수 있다.
  오래된 Kaplan 안내의 94/130 합격 기준은 현재 FINRA 페이지와 달라 쓰지 않았다.
```

## us_series_7

```yaml
# ---------- A. Identity ----------
id: us_series_7
name_ko: "일반증권 대표자 자격시험(Series 7)"
name_orig: "Series 7 – General Securities Representative Exam (GS)"
tier: 1
region: US
exam_type: license
domain: [securities_investment]
issuer: "Financial Industry Regulatory Authority (FINRA)"
official_url: "https://www.finra.org/registration-exams-ce/qualification-exams/series7"
status: active
summary_ko: |
  Series 7은 일반증권 대표자(GS)의 입문 역량을 보는 FINRA 자격시험이다. 회사 증권, 지방채, 투자신탁, 변액계약, 직접참여프로그램, 옵션, 정부증권을 포함한 증권의 권유·매매가 대상이다.
  FINRA 회원사 또는 해당 SRO 회원사의 소속과 스폰서가 있어야 응시할 수 있고, SIE는 함께 요구되는 기초 시험이다. SIE와 Series 7을 모두 합격해야 GS 등록 자격을 얻는다.
usage_ko: |
  합격자는 회사채·주식의 공모와 사모, 신주인수권, 워런트, 뮤추얼펀드, MMF, UIT, ETF, REIT, 정부증권, 환매조건부 매매, 직접참여프로그램, 벤처캐피털, 헤지펀드, 지방채의 고객 대상 매매를 할 자격 범위에 들어간다.
  2011-11-07 이후에 GS가 된 사람은 지방채를 고객에게 사고파는 범위만 되고, 인수 구조화 등 그 밖의 지방채 업무는 Series 52가 필요하다. 합격만으로 등록이 끝나지 않으며, 대부분의 주에서 고객에게 증권을 팔려면 주 대리인 등록(보통 Series 63)이 따로 필요하다.

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  nationality_note_ko: "응시 페이지는 시민권 요건을 두지 않고, 회원사 소속과 스폰서를 요구한다. 취업 허가는 회사가 판단할 사항이다."
  paths:
    - label_ko: "FINRA 회원사 또는 해당 SRO 회원사의 소속·스폰서"
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "Candidates must be associated with and sponsored by a FINRA member firm or other applicable self-regulatory organization (SRO) member firm to be eligible to take FINRA representative-level qualification exams."
  extra_checks_ko:
    - "SIE는 필수 병행 시험이다. 순서는 관계없고 둘 다 합격해야 GS가 된다. 같은 날 둘 다 볼 수 있으나 좌석이 따로 있어야 한다."
    - "FINRA 자격시험 접수는 주 규제기관 또는 승인된 규제기관의 스폰서가 있어야 하고, 보통 회사가 Form U4로 연다."
    - "나이, 학력, 경력 연수, 국적 요건은 Series 7 페이지에 없다."
    - "지문·배경 조회는 등록 절차의 일부일 수 있으나 이번에 연 시험 페이지에서 응시 조건으로 확인하지 못했다."
  exam_languages: [en]
  english_level_needed: advanced
  english_level_reason: "The exam is English-only for 225 minutes, and the outline expects calculation knowledge such as spreads and pricing inside four-choice items."
  test_countries: [US]
  retake_limit_ko: "2026-11-11 기준 FINRA 자격시험은 1·2회 불합격 후 30일, 3회째와 그 이후는 180일이다. 2027-01-19부터 1·2회 후 15일, 2년 안의 3회째 이후는 60일이다."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko:
    - "SIE를 합격하거나 그에 해당하는 학점·면제를 받아야 한다."
    - "스폰서 회사를 통해 GS 등록이 승인되어야 그 자격으로 업무를 할 수 있다."
    - "등록 후에는 매년 12월 31일까지 규제 요소 계속교육을 마쳐야 하고, 회사 요소 계속교육은 회사가 정한다."
  time_limit_ko: "합격일부터 2년 안에 해당 등록 승인을 받아야 시험 효력이 유지된다."
  validity_ko: |
    Series 7 또는 Series 7 토핑오프는 합격 후 2년 안에 등록에 쓰여야 한다. GS로 등록된 동안에는 만료일이 없고, Form U5로 끝나면 종료일부터 2년이다.
    유지자격프로그램(MQP)에 들어가면 종료일부터 최대 5년까지 늘릴 수 있다. 규제 요소를 그해 12월 31일까지 마치지 않으면 CE 비활성이 되고, 그 상태가 2년 계속되면 등록이 종료되어 시험으로 다시 자격 요건을 채워야 한다.

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "Series 7"
      subjects_ko:
        - "고객 유치(기능 1, 9문항, 7%)"
        - "계좌 개설과 고객 평가(기능 2, 11문항, 9%)"
        - "투자 정보 제공, 권유, 자산 이전과 기록(기능 3, 91문항, 73%)"
        - "주문 확인과 체결·확인(기능 4, 14문항, 11%)"
      format: mcq
      question_summary_ko: "채점 125문항, 각 문항은 4지선다. 2025년 10월 콘텐츠 개요 기준으로 채점되지 않는 사전검사 문항 5개가 더해져 한 회는 130문항이다. 시험 시간은 225분이다. 계산이 필요한 지식은 있으나 답은 선택형이다."
      duration_min: 225
      passing_rule_ko: "콘텐츠 개요는 문항 세트 차이를 동등화한 공통 합격 기준만 밝히고 커트라인 숫자는 적지 않는다. Kaplan Financial Education 시험 안내 페이지는 합격 점수를 72라고 적는다. 공식 커트라인 숫자는 미확인이다."
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 80
      hours_typical: 100
      hours_max: 150
      sessions_per_year: unknown
      next_dates_ko: "2026년 기준 고정 회차가 없는 예약제다. 스폰서 접수 다음 날 일정 창이 열린다. 창의 일수와 다음 고정 시험일은 확인하지 못했다."
      fee:
        amount: 395
        currency: USD
        krw_approx: 527000
        fx_date: "2026-11-11"
  total:
    hours_min: 80
    hours_typical: 100
    hours_max: 150
    hours_basis: provider
    hours_basis_note_ko: "FINRA는 학습 시간을 발표하지 않는다. Kaplan은 금융 배경이 있으면 80–100시간, 없으면 약 150시간이라고 했다. 최솟값 80, 전형값 100, 최댓값 150으로 적었다. Knopman Marks는 대부분 75–100시간이라고 해 하한이 조금 다르다. SIE 학습 시간은 이 기록에 더하지 않았다."
    min_calendar_months: 1
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "2026년 Form U4 최초·이전 접수료는 125달러(약 167,000원)다. 시험료와 별도이고 수수료표상 등록 접수 비용이다."
    - "등록 후 규제 요소 계속교육은 완료 시 회사 계정에 25달러(약 33,000원)가 청구된다. 보유 등록 수와 관계없이 같은 금액이다."
    - "회사 요소 계속교육 비용은 FINRA가 정하지 않는다."

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
  rationale_ko: |
    합격률이 없어 합격률 점수를 빼고, 전형 100시간의 2점과 직무 기능 4개의 구조 2점을 평균해 2로 했다.
    계산 지식은 개요에 있으나 답안 형식은 4지선다라 주관식·서술형 가점은 주지 않았다. SIE는 별도 기록이다.

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.finra.org/registration-exams-ce/qualification-exams/series7"
    accessed: "2026-11-11"
    type: official
    covers: [eligibility, award, structure]
  - url: "https://www.finra.org/sites/default/files/2025-10/Series_7_Content_Outline.pdf"
    accessed: "2026-11-11"
    type: official
    covers: [structure]
  - url: "https://www.finra.org/registration-exams-ce/qualification-exams"
    accessed: "2026-11-11"
    type: official
    covers: [structure, fee]
  - url: "https://www.finra.org/rules-guidance/rule-filings/sr-finra-2024-019/fee-adjustment-schedule"
    accessed: "2026-11-11"
    type: official
    covers: [fee]
  - url: "https://www.finra.org/registration-exams-ce/qualification-exams/sie-and-exam-restructuring-faq"
    accessed: "2026-11-11"
    type: official
    covers: [eligibility, award]
  - url: "https://www.finra.org/registration-exams-ce/qualification-exams/exam-credit-validity"
    accessed: "2026-11-11"
    type: official
    covers: [award]
  - url: "https://www.finra.org/registration-exams-ce/continuing-education"
    accessed: "2026-11-11"
    type: official
    covers: [award]
  - url: "https://www.finra.org/registration-exams-ce/continuing-education/ce-online/information-participants"
    accessed: "2026-11-11"
    type: official
    covers: [award, fee]
  - url: "https://www.finra.org/rules-guidance/notices/26-18"
    accessed: "2026-11-11"
    type: regulator
    covers: [eligibility]
  - url: "https://www.kaplanfinancial.com/resources/getting-started/7-strategies-for-passing-the-series-7-finra-exam"
    accessed: "2026-11-11"
    type: provider
    covers: [hours, pass_rate]
  - url: "https://www.kaplanfinancial.com/securities/sie-series-7/exam-details"
    accessed: "2026-11-11"
    type: provider
    covers: [structure]
  - url: "https://www.citibank.co.kr/FxdExrtFxrt0100.act?JEX_LANG=EN"
    accessed: "2026-11-11"
    type: other
    covers: [fee]
confidence:
  eligibility: high
  award: high
  structure: medium
  hours: medium
  pass_rate: high
  fee: high
as_of: "2026-11-11"
unknown_reasons:
  - "공식 합격 커트라인 숫자: 2025년 10월 개요는 동등화만 설명하고 72 같은 숫자를 적지 않는다. Kaplan의 72는 참고로만 적었다."
  - "pass_rates, pass_rate_avg_pct: FINRA가 회차별 합격률을 공개하지 않는다. Kaplan은 자사 수강생 설문 85%를 말하지만 공식 합격률이 아니라 쓰지 않았다."
  - "sessions_per_year와 접수 창 일수: 고정 연간 회차와 창 길이를 연 페이지에서 확인하지 못했다."
  - "age_min: Series 7 페이지에 나이 하한이 없다."
notes_ko: |
  2026년 응시료는 자격시험 목록과 수수료 조정표 모두 395달러다. 2025년은 300달러였다. 규칙 본문에 남은 더 낮은 금액은 쓰지 않았다.
  스폰서 없이 응시할 수 없다. 캘린더상 창이 다음 날 열리므로 1개월보다 빠를 수 있지만 최단 기간은 통월 1개월로 적었다. SIE 합격에 필요한 시간은 이 기록 밖에 있다.
```

## us_sie

```yaml
# ---------- A. Identity ----------
id: us_sie
name_ko: "증권업 필수시험(SIE)"
name_orig: "Securities Industry Essentials (SIE) Exam"
tier: 1
region: US
exam_type: license
domain: [securities_investment]
issuer: "Financial Industry Regulatory Authority (FINRA)"
official_url: "https://www.finra.org/registration-exams-ce/qualification-exams/securities-industry-essentials-exam"
status: active
summary_ko: |
  SIE는 증권업에 들어가기 전에 보는 FINRA 기초 자격시험이다. 자본시장, 상품과 위험, 매매·고객계좌·금지행위, 규제 체계를 객관식으로 묻는다.
  합격만으로 증권 업무를 할 수 없고, 회원사에 소속된 뒤 대표자 수준 자격시험까지 합격해야 등록된다. 회사 스폰서 없이 만 18세 이상이면 응시할 수 있다.
usage_ko: |
  합격자는 FINRA 등록 카테고리를 받지 않으며 BrokerCheck에도 나오지 않는다. 결과는 증권업 기초 지식을 보여주는 용도이고, 일반증권 대표자 등으로 등록하려면 SIE와 해당 자격시험을 모두 합격한 뒤 회원사 등록이 승인되어야 한다.
  등록 없이 합격만 한 경우 합격일부터 4년, 대표자 등록 후 종료되면 종료일부터 4년 동안 유효하다.

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  nationality_note_ko: "미국 시민권은 요구되지 않는다."
  paths:
    - label_ko: "만 18세 이상이면 회사 소속 없이 응시"
      age_min: 18
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "You must be 18 years or older to take the SIE, you do not have to be a U.S. citizen, and you do not have to have any association with a broker-dealer."
  extra_checks_ko:
    - "접수 시 사회보장번호가 없으면 어머니 결혼 전 성을 내야 하며, 이후 Form U4의 인적 사항과 같아야 결과가 CRD로 넘어간다."
    - "학력, 경력, 국적, 취업 허가 요건은 응시 페이지에 없다."
  exam_languages: [en]
  english_level_needed: working
  english_level_reason: "The exam is English-only introductory multiple choice with technical terms but no essays or long cases."
  test_countries: [US]
  retake_limit_ko: "2026-11-11 기준 1·2회 불합격 후 30일, 3회째와 그 다음 불합격 후 180일을 기다려야 한다. 2027-01-19부터는 1·2회 후 15일, 2년 안의 3회째 이후는 60일로 짧아진다."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko:
    - "증권 업무를 하려면 SIE와 별도로 업무에 맞는 대표자 수준 자격시험에 합격하고 회원사와 연관되어 등록이 승인되어야 한다."
    - "SIE만 합격하면 등록 카테고리가 생기지 않는다."
  time_limit_ko: "등록 승인으로 효력을 유지하려면 합격일부터 4년 안에 해당 대표자·책임자 등록을 받아야 한다."
  validity_ko: |
    합격 또는 학점·면제 후 등록에 쓸 수 있는 기간은 4년이다. 등록이 유지되는 동안에는 만료일이 없고, Form U5로 등록이 끝나면 종료일부터 4년이다.
    배정된 계속교육을 마치지 않으면 등록이 CE 비활성으로 바뀌고 유효 기간 계산이 시작된다. 유지자격프로그램(MQP)으로 Series 7 자격을 유지하는 경우에는 SIE 학점이 붙는 사례가 있다.

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "SIE"
      subjects_ko:
        - "자본시장 지식(16%, 12문항)"
        - "상품과 위험의 이해(44%, 33문항)"
        - "매매, 고객계좌 및 금지행위의 이해(31%, 23문항)"
        - "규제 체계 개관(9%, 7문항)"
      format: mcq
      question_summary_ko: "채점 75문항, 모두 4지선다. 2025년 10월 콘텐츠 개요 기준으로 채점되지 않는 사전검사 문항 5개가 더해져 한 회는 80문항이다. 시험 시간은 105분이며, 자격시험 안내의 예약 시간에는 튜토리얼과 설문 30분이 따로 포함된다."
      duration_min: 105
      passing_rule_ko: "0부터 100까지의 동등화 점수 70점. 문항 세트 난이도 차이를 통계적으로 조정하므로 맞은 개수의 고정 비율이 아니다."
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 30
      hours_typical: 75
      hours_max: 80
      sessions_per_year: unknown
      next_dates_ko: "2026년에도 고정 회차가 없고 온라인과 대면으로 수시 응시한다. 접수 다음 날 일정 창이 열린다. 창의 정확한 일수는 이번에 연 페이지에서 확인하지 못했다."
      fee:
        amount: 100
        currency: USD
        krw_approx: 133000
        fx_date: "2026-11-11"
  total:
    hours_min: 30
    hours_typical: 75
    hours_max: 80
    hours_basis: provider
    hours_basis_note_ko: "FINRA는 학습 시간을 발표하지 않는다. STC는 대부분 70–80시간, 금융·경영 학위가 있으면 30–40시간, 업계가 처음이면 60–80시간 이상이라고 했다. 최솟값은 30, 최댓값은 대부분의 상한인 80, 전형값은 70–80의 중간인 75로 적었다. 80시간은 상한이 아니다."
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
  rationale_ko: |
    합격률이 공개되지 않아 합격률 점수는 빼고, 전형 학습 75시간의 2점과 구조 2점을 평균해 2로 했다.
    과목은 4개이지만 한 단계의 객관식이고 구두·실기·필수 훈련은 없다.

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.finra.org/registration-exams-ce/qualification-exams/sie-and-exam-restructuring-faq"
    accessed: "2026-11-11"
    type: official
    covers: [eligibility, award, structure, fee]
  - url: "https://www.finra.org/sites/default/files/2025-10/SIE_Content_Outline.pdf"
    accessed: "2026-11-11"
    type: official
    covers: [structure]
  - url: "https://www.finra.org/registration-exams-ce/qualification-exams"
    accessed: "2026-11-11"
    type: official
    covers: [structure, fee]
  - url: "https://www.finra.org/rules-guidance/rule-filings/sr-finra-2024-019/fee-adjustment-schedule"
    accessed: "2026-11-11"
    type: official
    covers: [fee]
  - url: "https://www.finra.org/registration-exams-ce/qualification-exams/exam-credit-validity"
    accessed: "2026-11-11"
    type: official
    covers: [award]
  - url: "https://www.finra.org/rules-guidance/notices/26-18"
    accessed: "2026-11-11"
    type: regulator
    covers: [eligibility]
  - url: "https://www.finra.org/registration-exams-ce/qualification-exams/enroll"
    accessed: "2026-11-11"
    type: official
    covers: [eligibility, structure]
  - url: "https://www.stcusa.com/resource-center/career/common-mistakes-sie-exam/"
    accessed: "2026-11-11"
    type: provider
    covers: [hours]
  - url: "https://www.citibank.co.kr/FxdExrtFxrt0100.act?JEX_LANG=EN"
    accessed: "2026-11-11"
    type: other
    covers: [fee]
confidence:
  eligibility: high
  award: high
  structure: high
  hours: medium
  pass_rate: high
  fee: high
as_of: "2026-11-11"
unknown_reasons:
  - "pass_rates, pass_rate_avg_pct: 연 FINRA 페이지는 회차별 합격률을 내지 않는다. 준비기관 설문 수치는 쓰지 않았다."
  - "sessions_per_year: 고정 회차 수가 없고 예약제라 연간 횟수로 확인되지 않는다."
  - "접수 창의 일수: 접수 다음 날 창이 열린다는 점은 확인했으나 120일 등 길이는 이번에 연 페이지에 없었다."
notes_ko: |
  2026년 응시료는 100달러다. 수수료 조정표의 2025년 금액은 80달러이고, 검색에 남은 일부 FINRA 화면과 규칙 본문 Section 4는 더 옛 금액이라 쓰지 않았다.
  시험은 미국이 중심이고 온라인 응시가 가능하다고 적혀 있으나 국가 목록은 확인하지 못했다. 캘린더상 접수 다음 날부터 자리를 잡을 수 있어 1개월보다 짧을 수 있지만, 최단 기간은 통월 1개월로 적었다.
  이 시험은 그 자체로 판매·자문 권한을 주지 않는 규제 관문 시험이라 면허형으로 분류했다.
```
