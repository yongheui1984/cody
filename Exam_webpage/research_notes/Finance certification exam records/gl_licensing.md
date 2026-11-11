# US and UK securities licensing exams

Research date: 2026-11-11. Five separate records. Series 7, 63 and 65 are not stages of one exam. The Investment Management Certificate is still offered under that name, but the body that awards it is CFA UK, not CISI.

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

## English batch log

### Sponsorship

- SIE: no firm sponsorship and no U.S. citizenship. Minimum age 18. An identifier (Social Security number, or mother’s maiden name if none) is required at enrollment. — [FINRA SIE FAQ](https://www.finra.org/registration-exams-ce/qualification-exams/sie-and-exam-restructuring-faq)
- Series 7: sponsorship is required. The candidate must be associated with a FINRA member or other applicable SRO member. FINRA qualification-exam enrollment is opened by a sponsoring regulator or approved authority, usually through Form U4. The SIE is a corequisite, in either order. — [Series 7](https://www.finra.org/registration-exams-ce/qualification-exams/series7); [SIE FAQ](https://www.finra.org/registration-exams-ce/qualification-exams/sie-and-exam-restructuring-faq); [Enroll](https://www.finra.org/registration-exams-ce/qualification-exams/enroll)
- Series 63 and Series 65: FINRA’s enroll page offers a direct NASAA enrollment link, separate from sponsored FINRA exams. A person already associated with a broker-dealer or adviser must check with the firm, which may have to file Form U4. These exams can be sat without firm sponsorship in that sense. The NASAA sentence “No” on sponsorship was not opened because nasaa.org returned a country block (Sucuri GEO02). Confidence on sponsorship is medium for that reason. Neither FINRA page states an SIE prerequisite. — [Enroll](https://www.finra.org/registration-exams-ce/qualification-exams/enroll); [Series 63](https://www.finra.org/registration-exams-ce/qualification-exams/series63); [Series 65](https://www.finra.org/registration-exams-ce/qualification-exams/series65)
- IMC: no prior qualification, and no sponsorship, age, nationality or work rule on the specification. — [IMC specification](https://www.cfauk.org/learn/qualifications/investment-management-certificate/imc-qualification-specification)

### Pass-rate publication

- FINRA does not publish session or annual pass rates for the SIE, Series 7, Series 63 or Series 65 on the pages opened. Kaplan states that FINRA does not release Series 7 pass rates and then cites its own student survey (85%). That survey was not used. An STC article figure of about 74% for the SIE was also rejected as unofficial.
- CFA UK publishes only a standing band, “between 65% and 80%,” for each IMC unit. That is not a rate for the latest three to five sittings, so `pass_rate_avg_pct` is unknown and no average was computed.

### Unknowns

- Official numeric passing score for the Series 7. The October 2025 outline describes equating and does not print a cut score. Kaplan’s exam-details page says 72. The record does not treat 72 as the official cut.
- NASAA outline section names, the default post-termination validity of the Series 63 and 65, state registration fees, IAR CE hours, and which states waive the Series 65 for a designation. nasaa.org did not open.
- Length of the FINRA enrollment window. The enroll page says the window opens the day after enrollment. A 120-day figure appeared in a search snippet of a CRD FAQ that was not opened, so it is not in the records.
- Annual sitting counts. All five exams are appointment-based. IMC is every working day at Pearson and every day on OnVUE.
- IMC retake cap, exemption list, overseas test-center country codes, and postage on the official training manuals.
- IMC award expiry and mandatory CPD: not stated on the pages opened.

### Conflicts and naming

- SIE fee: the live qualification-exam table and the 2026 column of the fee-adjustment schedule, and the SIE FAQ, all say USD 100. Cached or older pages still show USD 80 (the 2025 fee) or the older rule-text amount. The record uses USD 100.
- Series 7 fee: the same live table and the 2026 fee schedule say USD 395, against USD 300 in 2025. Older rule text was ignored.
- Series 7 passing score: official outline versus Kaplan’s 72. Unresolved. Structure confidence is medium.
- Series 7 study hours: Kaplan says 80–100 with a finance background and about 150 without. Knopman Marks says most candidates need 75–100. The record follows Kaplan and notes Knopman.
- Series 65 older Kaplan material that said 94 of 130 conflicts with the current FINRA rule of 92 of 130. The old figure was not used. Current study-hour sources are STC (80–90) and Knopman (80).
- NASAA retake change (4 January 2027) is not the same date as the FINRA retake change (19 January 2027). On the research date the old waits still apply: 30 days after the first and second failure and 180 days after the third and later failures.
- The IMC is still offered under that name by CFA UK, including syllabus version 23 through 30 November 2026 and version 24 from 1 December 2026. It is not a CISI qualification. CISI’s separate Certificate in Investment Management remains a different credential and was not substituted.
- A shop search snippet showed IMC unit fees of GBP 350 and GBP 375. The shop page was not opened. The opened IMC overview states GBP 365 and GBP 390, which are the figures used.
- Region for the IMC is GB, not GLOBAL. Sittings exist outside the UK, but the credential is UK-specific: FCA appropriate qualification for managing investments, plus UK tax in the syllabus.
- FX: Citibank Korea official basic rate displayed on 2026-11-11 at 03:11:02 was USD/KRW 1,334.60 and GBP/KRW 1,780.36. KRW figures are rounded to the nearest 1,000. That screen is not necessarily the Seoul 09:00 fixing. No other FX source was used for the records.
- `min_calendar_months` is 1 for every record. The calendars are on-demand, so a first sitting can be sooner than a month after enrollment, and the two IMC units can be sat on different days. Whole months were preferred, as requested.
