# Korea professional financial-investment exams (KOFIA)

Research date: 2026-11-11. All three names are still in use. None was renamed or merged into another current exam. 투자자산운용사 is the 2010 successor of 일임투자자산운용사 and 집합투자자산운용사. 금융투자분석사 remains the Capital Markets Act research-analyst exam (it is not the old narrative 증권분석사, which the association rule deleted as a separate autonomous exam). 재무위험관리사 is the Korea Financial Investment Association autonomous exam, not the GARP FRM.

The current association rule text used below is 「금융투자전문인력과 자격시험에 관한 규정」, historySeq 1701, amendments through 2025-03-13. A later 2025–2026 amending history number was not found. Subject counts and the 40 percent / 70 percent pass line are the figures reproduced by 2026 prep pages from the rule’s 별표 3-4, 3-5, 3-8 and 별표 5. The 별표 HWP files themselves were not downloaded, so structure confidence is medium.

## kr_investment_manager

```yaml
# ---------- A. Identity ----------
id: kr_investment_manager
name_ko: 투자자산운용사
name_orig: Certified Investment Manager
tier: 1
region: KR
exam_type: license
domain: [securities_investment]
issuer: 한국금융투자협회 (Korea Financial Investment Association)
official_url: https://license.kofia.or.kr/examInfo/examInfo.do
status: active
summary_ko: 한국금융투자협회가 시행하는 필수자격시험이다. 집합투자재산, 신탁재산 또는 투자일임재산을 운용하는 투자자산운용사로 등록하기 위한 대표 경로이며, 2010년 일임투자자산운용사와 집합투자자산운용사를 통합한 이름 그대로 2026년에도 연 4회 시행된다.
usage_ko: 합격 후 소속 금융투자회사가 등록하면 금융투자상품 투자운용업무를 할 수 있다. 자산운용사·투자자문사·신탁 운용 인력의 법정 등록 요건으로 쓰이며, 부동산·사회기반시설·해외자원·일반 사모 운용은 시험 합격 외에 별도 경력·교육 요건이 있다. 시험 합격만으로 등록되거나 업무를 할 수는 없다.

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: 응시자격 제한 없음
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "KOFIA’s 2026 schedule announcement says that, unlike the investment-solicitation advisor exams, the other exams including 투자자산운용사 may be taken by anyone interested in financial investment, and the rule sets no age, education, experience or nationality condition to sit."
  extra_checks_ko:
    - "같은 시험에 이미 합격한 사람은 재응시할 수 없다."
    - "자격 제재로 응시가 제한된 사람, 부정행위로 응시가 제한된 사람은 응시할 수 없다."
    - "투자자 보호 교육은 투자권유자문인력 시험에만 필요하고, 이 시험의 응시 요건이 아니다."
  exam_languages: [ko]
  english_level_needed: basic
  english_level_reason: The paper and the KOFIA textbooks are in Korean, but questions use English market terms such as fund, WRAP and risk labels.
  test_countries: [KR]
  retake_limit_ko: 불합격 횟수 제한은 규정에 없다. 합격 후에는 같은 시험에 다시 응시할 수 없다.

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko:
    - "금융투자상품 투자운용업무로 등록하려면 투자자산운용사 등록교육을 이수해야 한다. 금융투자회사에서 1년 이상 근무한 사람은 이 등록교육을 면제한다."
    - "등록은 소속 금융투자회사가 신청하며, 그 회사의 임직원이 아니면 등록할 수 없다."
    - "등록된 금융투자전문인력은 매년 1회 이상 보수교육을 이수해야 하고, 등록된 해는 면제된다."
  time_limit_ko: 합격 후 등록 기한은 없다. 2016-10-24 부칙으로 종전 5년 합격 효력 상실 제도가 폐지되고, 이미 상실된 합격 효력도 회복되었다.
  validity_ko: 합격 효력은 기간 없이 유지되며 합격자 명부는 영구 보존된다. 업무를 하려면 재직 중 등록 상태를 유지해야 하고, 등록 이후에는 매년 보수교육이 필요하다.

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: 단일 시험
      subjects_ko:
        - "제1과목 금융상품 및 세제 (20문항, 과락 8문항): 세제관련 법규·세무전략 7, 금융상품 8, 부동산관련 상품 5"
        - "제2과목 투자운용 및 전략Ⅱ·투자분석 (30문항, 과락 12문항): 대안투자운용·투자전략 5, 해외증권투자운용·투자전략 5, 투자분석기법 12, 리스크관리 8"
        - "제3과목 직무윤리 및 법규·투자운용 및 전략Ⅰ·거시경제 (50문항, 과락 20문항): 직무윤리 5, 자본시장법 7, 금융위원회 규정 4, 협회 규정 3, 주식 6, 채권 6, 파생상품 6, 투자운용결과분석 4, 거시경제 4, 분산투자기법 5"
      format: mcq
      question_summary_ko: 객관식 4지선다 100문항, 120분. 계산 문항이 포함된다.
      duration_min: 120
      passing_rule_ko: 응시 과목마다 정답 비율 40% 이상이고, 응시 과목 전체 정답 비율 70% 이상. 면제자는 면제 과목을 빼고 같은 기준을 적용한다. 수치 기준은 별표 5이며 별표 원문은 확인하지 못했다.
      pass_rates:
        - period: 2021
          rate_pct: 37.53
          examinees: 23753
        - period: 2022
          rate_pct: 36.44
          examinees: 21580
        - period: 2023
          rate_pct: 37.69
          examinees: 22091
        - period: 2024
          rate_pct: 39.46
          examinees: 24979
        - period: 2025
          rate_pct: 36.38
          examinees: 32297
      pass_rate_avg_pct: 37.5
      hours_min: 95
      hours_typical: 145
      hours_max: 188
      sessions_per_year: 4
      next_dates_ko: "2026년 4회. 제44회 2026-01-18(접수 2025-12-22~12-26, 발표 2026-01-29), 제45회 2026-05-10(접수 2026-04-13~04-17, 발표 2026-05-21), 제46회 2026-08-23(접수 2026-07-27~07-31, 발표 2026-09-03), 제47회 2026-11-08(접수 2026-10-12~10-16, 발표 2026-11-19). 기준일에는 제47회가 이미 시행되었고 2027년 일정은 아직 공고 전이다. 장소는 서울·부산·광주·대구·대전."
      fee:
        amount: unknown
        currency: KRW
        krw_approx: unknown
        fx_date: 2026-11-11
  exemptions_ko: "종전 자산설계전문인력 시험 또는 일임투자자산운용사 시험 합격자는 제1·3과목 면제. 종전 투자자문전문인력 등록자, 증권분석사 시험 합격자, 집합투자자산운용사 시험 합격자는 제2·3과목 면제. 일임투자자산운용사와 집합투자자산운용사 요건을 모두 갖추면 통합 자격으로 보아 별도 응시가 필요 없다."
  total:
    hours_min: 95
    hours_typical: 145
    hours_max: 188
    hours_basis: provider
    hours_basis_note_ko: "협회 권장 학습시간은 없다. 이패스코리아 2026년 정규이론 95시간, 이론·문제풀이 종합반 145시간, Master반 188시간을 각각 하한·보통·상한으로 썼다. 강의 시간이지 수험생 설문 평균이 아니며, 강의 밖 자습은 더해지지 않았다."
    min_calendar_months: 1
    pass_rate_avg_pct: 37.5

# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "금융투자회사가 등록을 신청할 때 협회가 등록수수료를 받을 수 있으나, 금액은 자율규제위원장이 정하고 규정에 액수가 없다."
    - "투자자산운용사 등록교육 수강료는 금융투자교육원 과정 안내에 따르며 이 조사에서 금액을 확인하지 못했다."
    - "과목 면제자 응시료는 전과목 응시료와 다르다고 수험 사이트가 적지만, 공식 금액은 확인하지 못했다."

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 3
  hours_score: 2
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 3
  level: 3
  rationale_ko: "최근 5년 연간 합격률 평균 37.5%로 합격률 점수는 3이고, 수험기관 종합 강의 145시간으로 학습시간 점수는 2다. 과목이 3개이고 객관식 안에 계산 문항이 있어 구조 점수는 3이며, 평균 2.67을 반올림하면 3이다."

# ---------- G. Sources and confidence ----------
sources:
  - url: https://law.kofia.or.kr/service/law/lawFullScreenContent.do?seq=138&historySeq=1701
    accessed: 2026-11-11
    type: official
    covers: [eligibility, award, structure]
  - url: https://www.pqi.or.kr/inf/qul/infQulBasDetail.do?qulId=9124
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: https://license.kofia.or.kr/main/main.do
    accessed: 2026-11-11
    type: official
    covers: [structure]
  - url: https://www.epasskorea.com/public_html/Examinfo/info_fp.asp?cate_idx=10020501&type=C&link_idx=62
    accessed: 2026-11-11
    type: provider
    covers: [structure, hours]
  - url: https://epasskorea.com/Lecture/Lecture.asp?cate_idx=10020501&type=C&link_idx=5931
    accessed: 2026-11-11
    type: provider
    covers: [hours]
  - url: https://www.etoday.co.kr/news/view/2529354
    accessed: 2026-11-11
    type: other
    covers: [eligibility, structure]
confidence:
  eligibility: high
  award: high
  structure: medium
  hours: medium
  pass_rate: high
  fee: low
as_of: 2026-11-11
unknown_reasons:
  - "fee.amount: 응시료는 규정 제4-5조에 따라 전문인력위원회 사항이고 액수가 규정에 없다. 자격시험센터 접수 화면은 스크립트라 금액을 열지 못했고, 수험 사이트는 40,000원과 50,000원이 엇갈린다."
notes_ko: "2025년은 연 4회, 2024년 이하는 연 3회다. 합격률은 회차가 아니라 민간자격정보서비스에 협회가 입력한 연간 응시자 기준이다. 경력만으로 투자자산운용사에 등록하는 경로(운용 경력 2년, 기관전용 사모 운용 3년 등)는 이 시험의 응시 경로가 아니므로 paths에 넣지 않았다. 2027년 일정은 규정상 2026년 12월 말까지 공고된다."
```

## kr_research_analyst

```yaml
# ---------- A. Identity ----------
id: kr_research_analyst
name_ko: 금융투자분석사
name_orig: Certified Research Analyst
tier: 1
region: KR
exam_type: license
domain: [securities_investment]
issuer: 한국금융투자협회 (Korea Financial Investment Association)
official_url: https://license.kofia.or.kr/examInfo/examInfo.do
status: active
summary_ko: 한국금융투자협회의 필수자격시험이다. 투자매매업 또는 투자중개업 인가를 받은 금융투자회사에서 조사분석자료를 작성하거나 심사·승인하는 금융투자분석사로 등록하는 대표 경로이며, 2026년에도 같은 이름으로 연 1회 시행된다.
usage_ko: 증권사 조사분석 업무(애널리스트)를 하려면 이 시험 합격 또는 규정상의 다른 등록 요건이 필요하다. 합격만으로 등록되지는 않고 소속 금융투자회사의 등록 신청이 필요하다. 공인회계사, 일정 평가·분석 경력, 협회가 인정한 교육과정 등은 시험 없이 등록할 수 있는 별도 경로다.

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: 응시자격 제한 없음
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "The association rule lists 금융투자분석사 as a required exam and does not set an age, degree, experience or nationality condition; the 2026 KOFIA announcement says exams other than the solicitation-advisor exams are open to anyone interested in financial investment."
  extra_checks_ko:
    - "같은 시험에 이미 합격한 사람은 재응시할 수 없다."
    - "자격 제재 또는 부정행위로 응시가 제한된 사람은 응시할 수 없다."
    - "투자자 보호 교육 이수는 이 시험의 응시 요건이 아니다."
  exam_languages: [ko]
  english_level_needed: basic
  english_level_reason: The exam and textbooks are in Korean, but valuation and statistics items use English terms such as portfolio, duration and derivative names.
  test_countries: [KR]
  retake_limit_ko: 불합격 횟수 제한은 규정에 없다. 합격 후에는 같은 시험에 다시 응시할 수 없다.

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko:
    - "조사분석 업무를 하려면 소속 금융투자회사가 금융투자분석사로 등록해야 하며, 임직원이 아니면 등록할 수 없다."
    - "시험 합격 경로에는 등록 전 10시간 준법·윤리교육이 요구되지 않는다. 그 교육은 경력 등록 경로(규정 제2-7조 제3호부터 제8호)에만 적용된다."
    - "소속 금융투자회사는 금융투자분석사에게 연간 2시간 이상 자체 윤리교육을 해야 한다. 협회 윤리교육, 금융투자분석사 보수교육, 또는 등록용 준법·윤리교육을 그 해에 이수하면 갈음된다."
    - "등록된 금융투자전문인력은 매년 1회 이상 보수교육을 이수해야 하고, 등록된 해는 면제된다."
  time_limit_ko: 합격 후 등록 기한은 없다. 2016-10-24 부칙으로 종전 5년 합격 효력 상실 제도가 폐지되었다.
  validity_ko: 합격 효력은 기간 없이 유지된다. 등록 이후 업무를 계속하려면 재직 등록과 매년 보수교육, 소속 회사의 연 2시간 윤리교육이 따른다.

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: 단일 시험
      subjects_ko:
        - "제1과목 증권분석기초 (25문항, 과락 10문항): 계량분석 5, 증권경제 10, 기업금융과 포트폴리오 관리 10"
        - "제2과목 가치평가론 (35문항, 과락 14문항): 주식 평가·분석 10, 채권 평가·분석 10, 파생결합증권 평가·분석 5, 파생상품 평가·분석 10"
        - "제3과목 재무분석론 (20문항, 과락 8문항): 재무제표론 10, 기업가치평가·분석 10"
        - "제4과목 증권법규 및 직무윤리 (20문항, 과락 8문항): 자본시장법 5, 회사법 5, 금융위원회 규정 5, 직무윤리 5"
      format: mcq
      question_summary_ko: 객관식 4지선다 100문항, 120분. 가치평가·재무 계산 문항이 포함된다.
      duration_min: 120
      passing_rule_ko: 응시 과목마다 정답 비율 40% 이상이고, 응시 과목 전체 정답 비율 70% 이상. 제4과목 면제자는 나머지 과목에 같은 기준을 적용한다. 수치 기준은 별표 5이며 별표 원문은 확인하지 못했다.
      pass_rates:
        - period: 2021
          rate_pct: 33.72
          examinees: 1026
        - period: 2022
          rate_pct: 31.42
          examinees: 1063
        - period: 2023
          rate_pct: 30.19
          examinees: 1232
        - period: 2024
          rate_pct: 27.51
          examinees: 1425
        - period: 2025
          rate_pct: 38.64
          examinees: 1602
      pass_rate_avg_pct: 32.3
      hours_min: 120
      hours_typical: 180
      hours_max: 280
      sessions_per_year: 1
      next_dates_ko: "2026년 제24회는 2026-07-12, 10:00~12:00, 서울·부산·광주, 접수 2026-06-15~06-19, 합격 발표 2026-07-23. 협회 보도는 연 1회만 확인하고 일자·장소는 수험 사이트 일정표다. 기준일 현재 2026년 시험은 끝났고 2027년 일정은 아직 공고 전이다."
      fee:
        amount: unknown
        currency: KRW
        krw_approx: unknown
        fx_date: 2026-11-11
  exemptions_ko: "2009-02-04 이후 증권투자상담사 시험 합격자 또는 증권투자권유자문인력 적격성 인증시험 합격자는 제4과목(증권법규 및 직무윤리)을 면제할 수 있다."
  total:
    hours_min: 120
    hours_typical: 180
    hours_max: 280
    hours_basis: researcher_estimate
    hours_basis_note_ko: "협회 권장 시간과 단독 과정 시간이 확인되지 않았다. 이패스 2025 투자자산운용사+금융투자분석사 패키지 345시간에서 투자자산운용사 종합·마스터 145~188시간을 뺀 나머지와, 4과목·계산 비중이 더 큰 점을 반영해 120·180·280시간으로 잡았다."
    min_calendar_months: 1
    pass_rate_avg_pct: 32.3

# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "등록수수료는 자율규제위원장이 정하며 규정에 액수가 없다."
    - "제4과목 면제 응시료는 수험 사이트가 전과목과 다르다고 적지만 공식 금액은 확인하지 못했다."

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 3
  hours_score: 3
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 3
  level: 3
  rationale_ko: "최근 5년 합격률 평균 32.3%와 추정 학습시간 180시간이 모두 3점이다. 4과목에 계산 문항이 있어 구조도 3점이고, 세 점수의 평균은 3이다."

# ---------- G. Sources and confidence ----------
sources:
  - url: https://law.kofia.or.kr/service/law/lawFullScreenContent.do?seq=138&historySeq=1701
    accessed: 2026-11-11
    type: official
    covers: [eligibility, award, structure]
  - url: https://www.pqi.or.kr/inf/qul/infQulBasDetail.do?qulId=9126
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: https://www.epasskorea.com/public_html/Examinfo/info_cra.asp?cate_idx=11530204&type=C&link_idx=598
    accessed: 2026-11-11
    type: provider
    covers: [structure]
  - url: https://epasskorea.com/Lecture/Lecture.asp?cate_idx=10020501&type=C&link_idx=5931
    accessed: 2026-11-11
    type: provider
    covers: [hours]
  - url: https://www.etoday.co.kr/news/view/2529354
    accessed: 2026-11-11
    type: other
    covers: [eligibility, structure]
confidence:
  eligibility: high
  award: high
  structure: medium
  hours: low
  pass_rate: high
  fee: low
as_of: 2026-11-11
unknown_reasons:
  - "fee.amount: 공식 접수 화면의 응시료를 열지 못했다. 와우패스 수험정보 페이지의 30,000원과 응시자격(투자자보호교육 이수 금융회사 직원)은 현행 규정과 충돌하므로 쓰지 않았다."
  - "structure.hours and the exact 2026 sitting clock time: no standalone official hour recommendation; the July 2026 date is from a prep calendar, not the KOFIA press text."
notes_ko: "합격률은 연 1회라 연간 수치와 회차 수치가 같다. 2021~2025 평균 32.296%를 32.3으로 적었다. 시험 없는 등록 경로에는 조사분석 보조 1년, 외부감사 대상 회사의 연구·산업분석 3년, 증권 분석·평가 3년, 집합투자기구 평가 경력 2년, 금융투자상품 평가·분석 3년, 인정 연구기관 3년, 공인회계사, 협회가 인정한 금융투자교육원 과정이 있다. 제3호부터 제8호로 처음 등록할 때만 최근 1년 내 소속 회사 준법·윤리교육 10시간이 필요하다. 연 1회이므로 시험일을 놓치면 다음 응시까지 약 12개월이 더 필요하지만, min_calendar_months는 첫 응시부터 합격까지라 1이다."
```

## kr_financial_risk_manager

```yaml
# ---------- A. Identity ----------
id: kr_financial_risk_manager
name_ko: 재무위험관리사
name_orig: Certified Financial Risk Manager
tier: 1
region: KR
exam_type: certificate
domain: [risk_compliance, securities_investment]
issuer: 한국금융투자협회 (Korea Financial Investment Association)
official_url: https://license.kofia.or.kr/examInfo/examInfo.do
status: active
summary_ko: 한국금융투자협회가 자율자격시험으로 시행하는 재무위험관리사 시험이다. GARP FRM이 아니며, 2026년에도 같은 이름으로 연 1회 시행된다. 금융투자회사 위험관리 조직의 측정·평가·통제 업무에 필요한 지식을 묻는다.
usage_ko: 합격은 협회 등록 민간자격이다. 장외파생 투자매매업 또는 인수업 인가를 받은 금융투자회사의 위험관리전문인력 등록 요건은 그 위험관리 조직에서 일하는 것이지, 이 시험 합격이 아니다. 합격은 위험관리 직무 전문성의 신호로 쓰인다.

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: 응시자격 제한 없음
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "Article 4-1 of the KOFIA rule makes this an autonomous exam, and the 2026 announcement says exams other than the solicitation-advisor exams, including this one, may be taken by anyone interested in financial investment."
  extra_checks_ko:
    - "같은 시험에 이미 합격한 사람은 재응시할 수 없다."
    - "자격 제재 또는 부정행위로 응시가 제한된 사람은 응시할 수 없다."
  exam_languages: [ko]
  english_level_needed: basic
  english_level_reason: The paper is in Korean, but items use English risk terms such as VaR, swap, option and the Greeks.
  test_countries: [KR]
  retake_limit_ko: 불합격 횟수 제한은 규정에 없다. 합격 후에는 같은 시험에 다시 응시할 수 없다.

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: false
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko: []
  time_limit_ko: 합격 후 추가 경력·교육 기한은 없다. 2016-10-24 부칙으로 종전 5년 합격 효력 상실 제도가 폐지되었다.
  validity_ko: 합격 효력은 기간 없이 유지된다. 이 합격이 위험관리전문인력 등록을 만들지는 않는다. 위험관리전문인력으로 등록된 뒤에만 금융투자전문인력 보수교육(매년 1회, 등록 연도 면제)이 적용된다.

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: 단일 시험
      subjects_ko:
        - "제1과목 리스크관리기초 (30문항, 과락 12문항): 금융통계학 9, 채권분석 6, 규제 및 컴플라이언스 15"
        - "제2과목 금융선물 및 옵션 (20문항, 과락 8문항): 주가지수·개별주식 선물·옵션 7, 금리 선물·옵션 7, 통화 선물·옵션 6"
        - "제3과목 장외파생상품 (15문항, 과락 6문항): 스왑 8, 장외옵션 7"
        - "제4과목 리스크관리기법 (35문항, 과락 14문항): 시장리스크관리 15, 신용리스크관리 12, 기타리스크관리 5, 리스크관리 사례분석 3"
      format: mcq
      question_summary_ko: 객관식 4지선다 100문항, 120분. VaR·옵션·스왑 계산 문항이 포함된다.
      duration_min: 120
      passing_rule_ko: 응시 과목마다 정답 비율 40% 이상이고, 응시 과목 전체 정답 비율 70% 이상. 제2과목 면제자는 나머지 과목에 같은 기준을 적용한다. 수치 기준은 별표 5이며 별표 원문은 확인하지 못했다.
      pass_rates:
        - period: 2021
          rate_pct: 38.86
          examinees: 664
        - period: 2022
          rate_pct: 39.71
          examinees: 617
        - period: 2023
          rate_pct: 28.67
          examinees: 750
        - period: 2024
          rate_pct: 34.67
          examinees: 825
        - period: 2025
          rate_pct: 35.04
          examinees: 722
      pass_rate_avg_pct: 35.39
      hours_min: 120
      hours_typical: 166
      hours_max: 250
      sessions_per_year: 1
      next_dates_ko: "2026년 제18회는 2026-09-13, 10:00~12:00, 서울·부산·광주, 접수 2026-08-18~08-21, 합격 발표 2026-09-24. 해커스 금융 일정표와 이패스 일정표가 같다. 기준일 현재 2026년 시험은 끝났고 2027년 일정은 아직 공고 전이다."
      fee:
        amount: unknown
        currency: KRW
        krw_approx: unknown
        fx_date: 2026-11-11
  exemptions_ko: "종전 선물거래상담사 시험, 파생상품투자상담사 시험 또는 파생상품투자권유자문인력 적격성 인증시험 합격자(같은 계열 경력으로 등록한 사실이 있는 사람을 포함)는 제2과목 금융선물 및 옵션을 면제할 수 있다."
  total:
    hours_min: 120
    hours_typical: 166
    hours_max: 250
    hours_basis: researcher_estimate
    hours_basis_note_ko: "협회 권장 학습시간은 없다. 보통값은 이패스코리아 2026 재무위험관리사 Master반 강의 166시간이다. 하한 120시간과 상한 250시간은 그 강의를 기준으로 한 추정이며, 제2과목 면제자용 134시간 과정은 전과목 경로가 아니라 쓰지 않았다."
    min_calendar_months: 1
    pass_rate_avg_pct: 35.39

# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "자율자격 합격 자체에는 등록비·연회비가 규정되어 있지 않다."
    - "제2과목 면제 응시료의 공식 금액은 확인하지 못했다."

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 3
  hours_score: 3
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 3
  level: 3
  rationale_ko: "최근 5년 합격률 평균 35.39%와 학습시간 166시간이 모두 3점 구간이다. 4과목이고 파생·VaR 계산이 있어 구조도 3점이며, 평균은 3이다."

# ---------- G. Sources and confidence ----------
sources:
  - url: https://law.kofia.or.kr/service/law/lawFullScreenContent.do?seq=138&historySeq=1701
    accessed: 2026-11-11
    type: official
    covers: [eligibility, award, structure]
  - url: https://www.pqi.or.kr/inf/qul/infQulBasDetail.do?qulId=9127
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: https://www.epasskorea.com/public_html/Examinfo/info_cfrm.asp?cate_idx=10020701&link_idx=607
    accessed: 2026-11-11
    type: provider
    covers: [structure]
  - url: https://m.epasskorea.com/lecture/lecture_view_bundle.asp?Cate_IDX=100207&Lec_cm_LecType=&Lec_IDX=160558
    accessed: 2026-11-11
    type: provider
    covers: [hours]
  - url: https://fn.hackers.com/calendar?year=2026&type=year&grouping=
    accessed: 2026-11-11
    type: provider
    covers: [structure]
  - url: https://www.etoday.co.kr/news/view/2529354
    accessed: 2026-11-11
    type: other
    covers: [eligibility, structure]
confidence:
  eligibility: high
  award: high
  structure: medium
  hours: low
  pass_rate: high
  fee: low
as_of: 2026-11-11
unknown_reasons:
  - "fee.amount: 자격시험센터 응시료 화면을 열지 못했고 규정에는 금액이 없다. 2023년 인상(전과목 50,000원)을 알린 수험 사이트 공지는 2026-11-11 공식 금액으로 확인하지 않아 쓰지 않았다."
notes_ko: "영문명 Certified Financial Risk Manager는 협회 규정의 위험관리전문인력 영문과 같다. GARP FRM과 시험, 응시 자격, 경력 요건이 다르다. 위험관리전문인력 등록 문언은 위험관리 조직 종사자이며 시험 합격을 요건으로 두지 않는다. 합격률은 협회가 민간자격정보서비스에 입력한 연간 수치다. 연 1회이므로 일정을 놓치면 다음 응시까지 최대 약 12개월이 필요하지만, min_calendar_months는 첫 응시일부터라 1이다."
```

## Batch log

Completed (as_of 2026-11-11):
- kr_investment_manager, 투자자산운용사, active, still the post-2010 name.
- kr_research_analyst, 금융투자분석사, active, not renamed.
- kr_financial_risk_manager, 재무위험관리사 (KOFIA), active, not the GARP FRM and not renamed.

Excluded: none. The legacy names 일임투자자산운용사, 집합투자자산운용사 and 증권분석사 are prior credentials used only as exemption or registration history, not current exams.

Unknown:
- Sitting fees and partial-subject fees for all three. The rule delegates the fee to the professional-personnel committee. The license site fee table did not render. Prep pages disagree (40,000 won on an older 투자자산운용사 page, 50,000 won in a 2022 notice of the 2023 increase and in a 2026 Wowpass grid, 30,000 won on a stale Wowpass 금융투자분석사 page that also wrongly requires investor-protection education).
- Official 별표 3-4, 3-5, 3-8 and 별표 5 files were not opened. Question counts and the 40/70 rule are taken from 2026 prep reproductions that match the rule’s subject-exemption numbering.
- 2026 clock times and cities for 금융투자분석사 and 재무위험관리사, and the July/September dates, are prep calendars. KOFIA’s own 2025-11-25 announcement confirms only the annual counts (4, 1 and 1). The 제47회 투자자산운용사 date 2026-11-08 is on the KOFIA license homepage.
- 2027 sittings are not published. The rule requires the next year’s plan by the end of December.
- No official study-hour recommendation. 투자자산운용사 hours are epass 2026 lecture lengths. The other two use a researcher estimate anchored to epass lecture hours.
- Registration-education tuition and the firm registration fee amounts are not in the rule.

Conflicts:
- Wowpass 투자자산운용사 page still says 150 minutes and a 60 percent average. 2026 epass and the long-standing 별표 reproduction say 120 minutes and 70 percent with a 40 percent subject floor. The 70/40 line was used, at medium confidence.
- Wowpass 금융투자분석사 page says the fee is 30,000 won and that only firm staff who finished investor-protection education may sit. The rule and the 2026 KOFIA announcement contradict the eligibility line, so that page was not used for fee or eligibility.
- Pass rates are annual totals entered by KOFIA on the government private-qualification portal (pqi.or.kr), not session-level rates on license.kofia.or.kr. Session rates are unpublished. 2025 투자자산운용사 36.38 percent covers four sittings; 2021–2024 cover three.

Difficulty, half-up: all three are level 3. Pass-rate score 3 for each (37.5, 32.3, 35.39). Hours scores 2, 3 and 3 from 145, 180 and 166 hours. Structure score 3 for each (3 or more subjects, and calculation items inside the multiple-choice paper; one stage; no oral or practical exam). Registration education for 투자자산운용사 is an award condition, not an exam stage, so it is not a non-written assessment point.
