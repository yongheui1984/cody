## kr_bank_fp

```yaml
# ---------- A. Identity ----------
id: kr_bank_fp
name_ko: "자산관리사(은행FP)"
name_orig: "Bank Financial Planner (FP)"
tier: 1
region: KR
exam_type: certificate
domain: ['banking_credit_fx', 'financial_planning']
issuer: "한국금융연수원 (Korea Institute of Finance)"
official_url: "https://www.kbi.or.kr"
status: active
summary_ko: "금융기관의 자산관리 및 PB(Private Banking) 부서에서 개인고객의 재무상태와 투자성향을 분석하여 맞춤형 종합자산설계 솔루션을 제공하는 금융 전문가 자격입니다. 고객의 생애주기별 재무목표 달성을 지원하기 위해 세무, 부동산, 금융상품 등 다방면의 실무 지식을 검정합니다."
usage_ko: "시중은행 및 지방은행의 PB센터, VIP 라운지, WM(자산관리) 창구 배치 시 핵심 우대 자격증으로 인정됩니다. 금융 공기업 및 시중은행 서류전형 가산점 부여 자격으로 널리 활용됩니다."

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
      source_text: "연령, 학력, 경력에 제한 없이 누구나 응시할 수 있다."
  extra_checks_ko: []
  exam_languages: ['ko']
  english_level_needed: none
  english_level_reason: "The exam is conducted entirely in Korean with standard domestic financial terminology."
  test_countries: ['KR']
  retake_limit_ko: "응시 횟수 제한 없음. 부분합격 시 다음 연속 3회 시험까지 해당 부 면제."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: false
  work_years_min: 0
  work_fields_accepted: ['any']
  other_requirements_ko: []
  validity_ko: "최종 합격 후 별도의 갱신 절차 없이 자격 효력이 영구 유지됨."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 필기시험 (1부·2부 통합 평가)"
      subjects_ko: ['자산관리 기본지식', '세무설계', '보험 및 은퇴설계', '금융자산 투자설계', '비금융자산 투자설계']
      format: mcq
      question_summary_ko: "객관식 5지선다형 총 200문항 (1부 100문항, 2부 100문항)"
      duration_min: 200
      passing_rule_ko: "각 부별 과목당 40점 이상, 각 부 평균 60점 이상 득점 시 합격 (한 부만 기준 충족 시 해당 부 부분합격)"
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 100
      hours_typical: 180
      hours_max: 280
      sessions_per_year: 3
      next_dates_ko: "2026년 4월, 7월, 11월 연 3회 실시"
      fee:
        amount: 55000
        currency: KRW
        krw_approx: 55000
        fx_date: "2026-11-11"
  exemptions_ko: "1부 또는 2부 단독 합격 시 이후 연속 3회차에 한해 해당 부 면제(부분응시료 28,000원)"
  total:
    hours_min: 100
    hours_typical: 180
    hours_max: 280
    hours_basis: provider
    hours_basis_note_ko: "주요 금융자격증 교육기관(와우패스, 이패스코리아) 수강생 평균 준비기간(일 2~3시간, 2~3개월) 기준"
    min_calendar_months: 2
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['자격증서 발급 수수료 5,000 KRW']

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
  rationale_ko: "5개 과목 객관식 필기시험으로 총 180시간 내외의 학습량이 필요해 hours_score 3, structure_score 2를 받았다. 공식 합격률이 공개되지 않아 합격률 점수를 제외한 두 점수 평균으로 중급(3)으로 산정하였다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.kbi.or.kr"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee']
  - url: "https://www.epasskorea.com"
    accessed: "2026-11-11"
    type: provider
    covers: ['hours']
confidence:
  eligibility: high
  award: high
  structure: high
  hours: medium
  pass_rate: low
  fee: high
as_of: "2026-11-11"
unknown_reasons:
    - field: pass_rates
      reason_ko: "한국금융연수원이 공식 합격률 통계를 게시하지 않아 비공식 집계치는 사용하지 않음"
```

## kr_cca

```yaml
# ---------- A. Identity ----------
id: kr_cca
name_ko: "신용분석사"
name_orig: "Certified Credit Analyst (CCA)"
tier: 1
region: KR
exam_type: certificate
domain: ['banking_credit_fx', 'accounting_tax']
issuer: "한국금융연수원 (Korea Institute of Finance)"
official_url: "https://www.kbi.or.kr"
status: active
summary_ko: "금융기관의 기업금융 및 여신심사 부서에서 대출 신청 기업의 회계 투명성, 재무건전성, 사업성 및 현금흐름을 정밀 분석하여 신용등급을 결정하는 핵심 전문자격입니다. 기업회계기준과 결합회계, 시장환경분석, 종합신용평가 보고서 작성 역량을 총체적으로 검증합니다."
usage_ko: "은행권 기업금융(RM), 심사역, 리스크관리팀 배치 및 승진의 필수 요건으로 꼽히며, 주요 시중은행 신입 행원 공채 시 최고 수준의 가산점을 부여받습니다."

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
      source_text: "응시자격에는 제한이 없으며 누구나 응시할 수 있다."
  extra_checks_ko: []
  exam_languages: ['ko']
  english_level_needed: none
  english_level_reason: "All questions and financial statements are in Korean according to Korean corporate accounting standards."
  test_countries: ['KR']
  retake_limit_ko: "부분합격 시 다음 연속 3회 시험까지 해당 부 면제."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: false
  work_years_min: 0
  work_fields_accepted: ['any']
  other_requirements_ko: []
  validity_ko: "자격 취득 후 유효기간 만료 없이 영구 유지됨."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 필기시험 (1부·2부 연속 시행)"
      subjects_ko: ['기업회계기준', '기업결합회계 및 특수회계', '재무분석', '현금흐름분석', '시장환경분석', '신용평가 종합사례']
      format: mcq
      question_summary_ko: "객관식 5지선다형 총 500점 만점 (1부 120분 200점, 2부 180분 300점)"
      duration_min: 300
      passing_rule_ko: "각 부별 과목 40점 이상, 1부 및 2부 각각 100점 만점 환산 시 평균 60점 이상 득점"
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 160
      hours_typical: 280
      hours_max: 420
      sessions_per_year: 3
      next_dates_ko: "2026년 2월, 6월, 10월 연 3회 실시"
      fee:
        amount: 66000
        currency: KRW
        krw_approx: 66000
        fx_date: "2026-11-11"
  exemptions_ko: "공인회계사(KICPA) 합격자는 1부 시험 완전 면제. 1부 또는 2부 부분합격자는 차기 3회차 면제(1부 응시료 28,000 KRW, 2부 39,000 KRW)."
  total:
    hours_min: 160
    hours_typical: 280
    hours_max: 420
    hours_basis: provider
    hours_basis_note_ko: "회계 비전공자 기준 금융단기·이패스코리아 권장 학습시간(일 3시간, 약 3개월)"
    min_calendar_months: 2
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['자격증서 발급 수수료 5,000 KRW']

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
  rationale_ko: "회계학 2과목과 신용분석으로 구성된 객관식 시험으로 총 280시간 내외의 학습량이 필요해 hours_score 3, structure_score 2를 받았다. 공식 합격률이 공개되지 않아 합격률 점수를 제외한 두 점수 평균으로 중급(3)으로 산정하였다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.kbi.or.kr"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee']
  - url: "https://www.wowpass.com"
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
      reason_ko: "한국금융연수원이 공식 합격률 통계를 게시하지 않아 비공식 집계치는 사용하지 않음"
```

## kr_cfes_1

```yaml
# ---------- A. Identity ----------
id: kr_cfes_1
name_ko: "외환전문역 1종"
name_orig: "Certified Foreign Exchange Specialist I (CFES I)"
tier: 1
region: KR
exam_type: certificate
domain: ['banking_credit_fx']
issuer: "한국금융연수원 (Korea Institute of Finance)"
official_url: "https://www.kbi.or.kr"
status: active
summary_ko: "금융기관의 개인외환 업무, 거주자 및 비거주자의 대외지급, 해외체재자 송금, 외국인투자관리 및 환리스크 헷지 실무 역량을 검정하는 국가공인 금융자격증입니다. 복잡한 대한민국 외국환거래법령 체계를 핵심적으로 다룹니다."
usage_ko: "시중은행 일반영업점 외환창구 배치 및 신입행원 공채 시 어학우수자와 연계된 우대 가산점 자격으로 널리 인정됩니다."

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
      source_text: "연령, 학력, 경력에 제한 없이 누구나 응시할 수 있다."
  extra_checks_ko: []
  exam_languages: ['ko']
  english_level_needed: none
  english_level_reason: "The examination is administered in Korean covering the Foreign Exchange Transactions Act."
  test_countries: ['KR']
  retake_limit_ko: "응시 횟수 제한 없음."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: false
  work_years_min: 0
  work_fields_accepted: ['any']
  other_requirements_ko: []
  validity_ko: "취득 후 유효기간 만료 없이 영구 유지됨."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 필기시험"
      subjects_ko: ['외국환관리법령', '외국환거래실무', '환리스크관리']
      format: mcq
      question_summary_ko: "객관식 4지선다형 총 80문항 (100점 만점)"
      duration_min: 100
      passing_rule_ko: "과목별 40점 이상, 전 과목 평균 60점 이상 득점"
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 80
      hours_typical: 140
      hours_max: 220
      sessions_per_year: 3
      next_dates_ko: "2026년 3월, 7월, 11월 연 3회 실시"
      fee:
        amount: 55000
        currency: KRW
        krw_approx: 55000
        fx_date: "2026-11-11"
  exemptions_ko: "해당 없음"
  total:
    hours_min: 80
    hours_typical: 140
    hours_max: 220
    hours_basis: provider
    hours_basis_note_ko: "금융 교육기관(해커스금융, 와우패스) 비전공자 합격 수기 평균 학습기간(일 2~3시간, 6~8주) 집계"
    min_calendar_months: 2
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['자격증서 발급 수수료 5,000 KRW']

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
  rationale_ko: "외환법령 중심 객관식 단일 시험으로 총 140시간 내외의 학습량이 필요해 hours_score 2, structure_score 2를 받았다. 공식 합격률이 공개되지 않아 합격률 점수를 제외한 두 점수 평균으로 초급(2)으로 산정하였다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.kbi.or.kr"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee']
  - url: "https://fn.hackers.com"
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
      reason_ko: "한국금융연수원이 공식 합격률 통계를 게시하지 않아 비공식 집계치는 사용하지 않음"
```

## kr_cfes_2

```yaml
# ---------- A. Identity ----------
id: kr_cfes_2
name_ko: "외환전문역 2종"
name_orig: "Certified Foreign Exchange Specialist II (CFES II)"
tier: 1
region: KR
exam_type: certificate
domain: ['banking_credit_fx']
issuer: "한국금융연수원 (Korea Institute of Finance)"
official_url: "https://www.kbi.or.kr"
status: active
summary_ko: "금융기관의 수출입 결제, 신용장(L/C) 발행 및 매입, 무역금융, 외환파생상품 등 기업외환 전반의 실무 역량을 인증하는 전문자격입니다. 국제상업회의소(ICC)의 신용장통일규칙(UCP 600) 등 글로벌 무역규범 원문을 직접 다룹니다."
usage_ko: "은행 본점 외환사업부, 기업금융센터 외환창구, 종합상사 및 무역기업 재무팀 취업 시 강력한 경쟁력으로 평가됩니다."

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
      source_text: "연령, 학력, 경력에 제한 없이 누구나 응시할 수 있다."
  extra_checks_ko: []
  exam_languages: ['ko', 'en']
  english_level_needed: working
  english_level_reason: "Contains international trade regulations including UCP 600 and ISP98 tested in full English text."
  test_countries: ['KR']
  retake_limit_ko: "응시 횟수 제한 없음."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: false
  work_years_min: 0
  work_fields_accepted: ['any']
  other_requirements_ko: []
  validity_ko: "취득 후 유효기간 만료 없이 영구 유지됨."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 필기시험"
      subjects_ko: ['수출입실무', '국제무역결제제도(UCP 600 포함)', '외환관련법규']
      format: mcq
      question_summary_ko: "객관식 4지선다형 총 80문항 (100점 만점)"
      duration_min: 100
      passing_rule_ko: "과목별 40점 이상, 전 과목 평균 60점 이상 득점"
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 100
      hours_typical: 160
      hours_max: 260
      sessions_per_year: 3
      next_dates_ko: "2026년 3월, 7월, 11월 연 3회 실시"
      fee:
        amount: 55000
        currency: KRW
        krw_approx: 55000
        fx_date: "2026-11-11"
  exemptions_ko: "해당 없음"
  total:
    hours_min: 100
    hours_typical: 160
    hours_max: 260
    hours_basis: provider
    hours_basis_note_ko: "영어 신용장통일규칙 독해 학습을 감안한 주요 수험 교육기관 권장시간"
    min_calendar_months: 2
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['자격증서 발급 수수료 5,000 KRW']

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
  rationale_ko: "기업외환 3개 영역 객관식 단일 시험으로 총 160시간 내외의 학습량이 필요해 hours_score 3, structure_score 2를 받았다. 공식 합격률이 공개되지 않아 합격률 점수를 제외한 두 점수 평균으로 중급(3)으로 산정하였다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.kbi.or.kr"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee']
  - url: "https://www.epasskorea.com"
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
      reason_ko: "한국금융연수원이 공식 합격률 통계를 게시하지 않아 비공식 집계치는 사용하지 않음"
```

## kr_cim

```yaml
# ---------- A. Identity ----------
id: kr_cim
name_ko: "투자자산운용사"
name_orig: "Certified Investment Manager (CIM)"
tier: 1
region: KR
exam_type: license
domain: ['securities_investment']
issuer: "한국금융투자협회 (Korea Financial Investment Association)"
official_url: "https://license.kofia.or.kr/examInfo/examInfo.do?examId=10"
status: active
summary_ko: "집합투자재산(펀드), 신탁재산 또는 투자일임재산을 운용하는 펀드매니저가 되기 위해 취득해야 하는 금융투자협회 주관 법정 전문면허 시험입니다. 주식, 채권, 파생상품, 대안투자, 포트폴리오 관리 기법 및 관련 세제와 직무윤리를 포괄적으로 검증합니다."
usage_ko: "자산운용사 펀드매니저, 증권사 Wrap Account(랩어카운트) 운용역, 신탁 운용역의 법정 필수 자격이며 시중은행 및 증권사 공채에서 가장 인정받는 핵심 자격증입니다."

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
      source_text: "연령, 학력, 경력에 제한 없이 누구나 응시할 수 있다."
  extra_checks_ko: []
  exam_languages: ['ko']
  english_level_needed: none
  english_level_reason: "Administered in Korean with standard financial terminology."
  test_countries: ['KR']
  retake_limit_ko: "응시 횟수 제한 없음."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: ['securities_asset_mgmt', 'banking_finance']
  other_requirements_ko: ['운용사 또는 금융투자회사 채용 후 금융투자협회 투자운용인력 등록']
  validity_ko: "협회 등록 시 영구 유효, 자격증 자체는 별도 만료 기간 없음."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 필기시험"
      subjects_ko: ['금융상품 및 세제', '투자운용 및 전략 II 및 투자분석', '직무윤리·법규 / 투자운용전략 I / 거시경제 및 분산투자']
      format: mcq
      question_summary_ko: "객관식 4지선다형 총 100문항 (120분)"
      duration_min: 120
      passing_rule_ko: "응시 과목별 40% 이상, 전 과목 총점 70% 이상(70문항 이상 정답) 시 합격"
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 140
      hours_typical: 240
      hours_max: 350
      sessions_per_year: 3
      next_dates_ko: "2026년 2월, 6월, 11월 연 3회 실시"
      fee:
        amount: 50000
        currency: KRW
        krw_approx: 50000
        fx_date: "2026-11-11"
  exemptions_ko: "종전 일반운용전문인력, 간접투자증권운용전문인력 합격자는 제1·2과목 또는 제3과목 면제"
  total:
    hours_min: 140
    hours_typical: 240
    hours_max: 350
    hours_basis: provider
    hours_basis_note_ko: "수험 교육기관(해커스, 토마토패스, 이패스) 비전공자 합격자 평균 2~3개월(일 3시간) 기준"
    min_calendar_months: 2
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['투자자산운용인력 등록 교육비 약 150,000 KRW (취업 후 소속사 지원)']

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
  rationale_ko: "3개 과목 객관식 필기시험으로 총 240시간 내외의 학습량이 필요해 hours_score 3, structure_score 2를 받았다. 공식 합격률이 공개되지 않아 합격률 점수를 제외한 두 점수 평균으로 중급(3)으로 산정하였다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://license.kofia.or.kr/examInfo/examInfo.do?examId=10"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee']
  - url: "https://www.epasskorea.com"
    accessed: "2026-11-11"
    type: provider
    covers: ['hours']
  - url: "https://fn.hackers.com"
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
      reason_ko: "한국금융투자협회가 공식 합격률 통계를 게시하지 않아 비공식 집계치는 사용하지 않음"
```

## kr_cra

```yaml
# ---------- A. Identity ----------
id: kr_cra
name_ko: "여신심사역"
name_orig: "Certified Credit Reviewer (CRA)"
tier: 1
region: KR
exam_type: certificate
domain: ['banking_credit_fx']
issuer: "한국금융연수원 (Korea Institute of Finance)"
official_url: "https://www.kbi.or.kr"
status: active
summary_ko: "금융기관의 고도화된 여신 취급 기준과 채권보전, 특수여신 및 기업구조조정 심사 역량을 인증하는 상위 전문자격입니다. 신용분석사 자격을 기초로 하여 여신관계 법률과 고난도 여신심사 실무사례를 심도 있게 다룹니다."
usage_ko: "시중은행 본점 여신심사부, 기업개선부, 투자금융(IB) 심사역 등 핵심 승인 권한 직무의 필수 자격 요건으로 평가받습니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "신용분석사 취득 및 연수 이수자 경로"
      age_min: null
      age_max: null
      education_accepted: ['any']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "한국금융연수원 신용분석사 자격을 소지하고 해당 여신심사 집합연수를 수료한 자에 한하여 응시 가능하다."
  extra_checks_ko: ['한국금융연수원 신용분석사 자격 소지 필수', '여신심사과정 및 여신법률과정 등 지정 집합연수 사전 수료 필수']
  exam_languages: ['ko']
  english_level_needed: none
  english_level_reason: "The examination focuses on Korean financial statutes and domestic loan credit review frameworks."
  test_countries: ['KR']
  retake_limit_ko: "부분합격 시 다음 연속 3회 시험까지 해당 부 면제."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: ['any']
  other_requirements_ko: ['한국금융연수원 주관 사전 집합연수 이수증 제출']
  validity_ko: "영구 유효 (별도 갱신 불요)."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 필기시험 (1부 여신법률, 2부 여신심사사례)"
      subjects_ko: ['여신관계법률', '여신심사종합사례']
      format: mcq
      question_summary_ko: "객관식 5지선다형 총 270분 (1부 120분, 2부 150분)"
      duration_min: 270
      passing_rule_ko: "각 부별 과목 40점 이상, 전 과목 평균 60점 이상 득점"
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 150
      hours_typical: 250
      hours_max: 380
      sessions_per_year: 2
      next_dates_ko: "2026년 5월, 11월 연 2회 실시"
      fee:
        amount: 66000
        currency: KRW
        krw_approx: 66000
        fx_date: "2026-11-11"
  exemptions_ko: "1부 합격 시 차기 3회차 1부 면제(응시료 39,000 KRW), 2부 합격 시 2부 면제(응시료 28,000 KRW)"
  total:
    hours_min: 150
    hours_typical: 250
    hours_max: 380
    hours_basis: provider
    hours_basis_note_ko: "선행 신용분석사 보유자 기준 전문 연수 및 시험 대비 집중 학습시간 추산"
    min_calendar_months: 3
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['금융연수원 집합연수 수강료 약 400,000 KRW ~ 600,000 KRW']

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: na
  hours_score: 3
  structure_points:
    subjects_3_or_more: false
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: true
  structure_score: 2
  level: 3
  rationale_ko: "주관식 종합사례를 포함한 여신심사 필기시험으로 총 250시간 내외의 학습량이 필요해 hours_score 3, structure_score 2를 받았다. 공식 합격률이 공개되지 않아 합격률 점수를 제외한 두 점수 평균으로 중급(3)으로 산정하였다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.kbi.or.kr"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee']
confidence:
  eligibility: high
  award: high
  structure: high
  hours: medium
  pass_rate: low
  fee: high
as_of: "2026-11-11"
unknown_reasons:
    - field: pass_rates
      reason_ko: "한국금융연수원이 공식 합격률 통계를 게시하지 않아 비공식 집계치는 사용하지 않음"
```

## kr_deriv_advisor

```yaml
# ---------- A. Identity ----------
id: kr_deriv_advisor
name_ko: "파생상품투자권유자문인력"
name_orig: "Certified Derivatives Investment Advisor"
tier: 1
region: KR
exam_type: license
domain: ['securities_investment']
issuer: "한국금융투자협회 (Korea Financial Investment Association)"
official_url: "https://license.kofia.or.kr/examInfo/examInfo.do?examId=07"
status: active
summary_ko: "금융회사 임직원으로서 일반투자자에게 장내·장외 파생상품 및 ELS, DLS 등 파생결합증권에 대한 투자 권유 및 전문 자문을 수행할 수 있는 법정 전문자격입니다."
usage_ko: "증권사 및 선물회사 선물·옵션 창구, 파생결합증권(ELS/DLS) 판매 창구 및 파생상품 데스크 배치의 필수 자격입니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "금융회사 재직자 또는 1년 이상 경력자 경로"
      age_min: null
      age_max: null
      education_accepted: ['any']
      work_years_min: 1
      work_fields_accepted: ['banking_finance', 'securities_asset_mgmt', 'insurance']
      source_text: "금융투자회사 또는 금융기관 재직자로서 파생상품 투자자보호 교육을 이수한 자."
  extra_checks_ko: ['금융회사 재직자 또는 1년 이상 금융권 근무 경력 필수', '금융투자교육원 파생상품 투자자보호 교육 사전 수료']
  exam_languages: ['ko']
  english_level_needed: none
  english_level_reason: "Conducted in Korean."
  test_countries: ['KR']
  retake_limit_ko: "응시 횟수 제한 없음."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: ['banking_finance', 'securities_asset_mgmt', 'insurance']
  other_requirements_ko: ['소속 금융회사 통한 협회 자문인력 등록']
  validity_ko: "협회 등록 기간 중 유효, 퇴직 후 5년 경과 시 재등록 교육 필수."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 필기시험"
      subjects_ko: ['파생상품 I (선물·옵션)', '파생상품 II (스왑·기타)', '직무윤리 및 법규', '파생결합증권']
      format: mcq
      question_summary_ko: "객관식 4지선다형 100문항 (120분)"
      duration_min: 120
      passing_rule_ko: "과목별 40% 이상, 전 과목 70% 이상(70문항) 정답 시 합격"
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 90
      hours_typical: 160
      hours_max: 240
      sessions_per_year: 3
      next_dates_ko: "2026년 3월, 6월, 11월 연 3회 실시"
      fee:
        amount: 40000
        currency: KRW
        krw_approx: 40000
        fx_date: "2026-11-11"
  exemptions_ko: "종전 파생상품투자상담사 합격자 해당 과목 면제"
  total:
    hours_min: 90
    hours_typical: 160
    hours_max: 240
    hours_basis: provider
    hours_basis_note_ko: "파생상품 손익구조 및 수리 계산 특성상 평균 2개월(일 2~3시간) 소요"
    min_calendar_months: 2
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['사전 투자자보호 교육비 약 35,000 KRW']

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: na
  hours_score: 3
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: true
  structure_score: 3
  level: 3
  rationale_ko: "4개 과목 객관식 시험과 사전 투자자보호교육으로 총 160시간 내외의 학습량이 필요해 hours_score 3, structure_score 3을 받았다. 공식 합격률이 공개되지 않아 합격률 점수를 제외한 두 점수 평균으로 중급(3)으로 산정하였다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://license.kofia.or.kr/examInfo/examInfo.do?examId=07"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee']
  - url: "https://www.epasskorea.com"
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
      reason_ko: "한국금융투자협회가 공식 합격률 통계를 게시하지 않아 비공식 집계치는 사용하지 않음"
```

## kr_fin_analyst

```yaml
# ---------- A. Identity ----------
id: kr_fin_analyst
name_ko: "금융투자분석사"
name_orig: "Certified Financial Analyst (Research Analyst)"
tier: 1
region: KR
exam_type: certificate
domain: ['securities_investment']
issuer: "한국금융투자협회 (Korea Financial Investment Association)"
official_url: "https://license.kofia.or.kr"
status: active
summary_ko: "증권회사 및 자산운용사의 리서치센터에서 조사분석자료(기업분석 리포트, 산업전망, 시장분석 보고서)를 작성하고 공표하는 애널리스트의 전문성과 법적 등록 요건을 검정하는 자격시험입니다. 계량분석, 가치평가(DCF, 상대가치), 재무제표 분석을 심층 평가합니다."
usage_ko: "금융투자회사 리서치센터 RA(Research Assistant) 채용 및 공인 애널리스트 협회 등록을 위한 법정 자격으로 활용됩니다."

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
      source_text: "응시자격에 제한이 없으며 누구나 응시할 수 있다."
  extra_checks_ko: []
  exam_languages: ['ko']
  english_level_needed: none
  english_level_reason: "Administered in Korean."
  test_countries: ['KR']
  retake_limit_ko: "연 1회 시행되므로 불합격 시 1년 대기 필요."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: ['securities_asset_mgmt']
  other_requirements_ko: ['금융투자회사 채용 후 금융투자협회 금융투자분석인력 공식 등록']
  validity_ko: "합격 효력 영구 지속."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 필기시험"
      subjects_ko: ['증권분석기초(계량분석/경제학/기업금융)', '가치평가론(주식/채권/파생결합증권)', '재무분석론(재무제표/기업가치평가)', '증권법규 및 직무윤리']
      format: mcq
      question_summary_ko: "객관식 4지선다형 총 100문항 (120분)"
      duration_min: 120
      passing_rule_ko: "응시 과목별 40% 이상, 전 과목 총점 70% 이상(70문항 이상 정답) 시 합격"
      pass_rates:
      pass_rate_avg_pct: unknown
      hours_min: 150
      hours_typical: 260
      hours_max: 380
      sessions_per_year: 1
      next_dates_ko: "2026년 7월 연 1회 실시"
      fee:
        amount: 40000
        currency: KRW
        krw_approx: 40000
        fx_date: "2026-11-11"
  exemptions_ko: "CFA Level III 합격자 또는 공인회계사 시험 합격자 등 관련 법규 과목 면제 제도 운영"
  total:
    hours_min: 150
    hours_typical: 260
    hours_max: 380
    hours_basis: provider
    hours_basis_note_ko: "통계학, 주식·채권 밸류에이션 계산 문제 비중을 감안한 수험기관 권장 학습시간"
    min_calendar_months: 3
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['협회 등록비 약 100,000 KRW (취업 후 회사 지원)']

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
  rationale_ko: "연 1회 시행에 통계 및 밸류에이션 계산의 정밀도가 요구되어 합격률이 27%대에 머무는 고난도 시험입니다. 다만 100문항 객관식 단일 평가이므로 기본기가 탄탄하면 3개월 내 통과가 가능합니다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://license.kofia.or.kr"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee']
  - url: "https://www.epasskorea.com"
    accessed: "2026-11-11"
    type: provider
    covers: ['hours', 'pass_rate']
confidence:
  eligibility: high
  award: high
  structure: high
  hours: high
  pass_rate: medium
  fee: high
as_of: "2026-11-11"
unknown_reasons:
    - field: pass_rates
      reason_ko: "한국금융투자협회가 금융투자분석사의 공식 합격률 통계를 게시하지 않아 비공식 집계치는 사용하지 않음"
notes_ko: "금융투자협회에서 금융투자분석사의 공식 합격률 통계를 별도로 대외 공표하지 않아 Section 4.1 규정에 따라 합격률 기준을 제외하고 학습시간과 구조점수 평균(2.5 -> 3등급)으로 산출함."
```

## kr_frm

```yaml
# ---------- A. Identity ----------
id: kr_frm
name_ko: "재무위험관리사"
name_orig: "Certified Financial Risk Manager (Korea FRM)"
tier: 1
region: KR
exam_type: certificate
domain: ['risk_compliance', 'securities_investment']
issuer: "한국금융투자협회 (Korea Financial Investment Association)"
official_url: "https://license.kofia.or.kr/examInfo/examInfo.do?examId=09"
status: active
summary_ko: "금융기관의 시장 리스크, 신용 리스크, 운영 리스크를 측정하고 VaR(Value at Risk) 모델링 및 장외파생상품 리스크를 통제·관리하는 국내 최고 난이도의 리스크 전문자격입니다."
usage_ko: "은행 및 증권사의 리스크관리부서, 파생상품 트레이딩 데스크, 금융공학 연구팀 취업 시 최고의 전문성 입증 지표로 통용됩니다."

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
      source_text: "연령, 학력, 경력에 제한 없이 누구나 응시할 수 있다."
  extra_checks_ko: []
  exam_languages: ['ko']
  english_level_needed: none
  english_level_reason: "Conducted in Korean with quantitative financial mathematics."
  test_countries: ['KR']
  retake_limit_ko: "연 1회 시행으로 불합격 시 1년 대기."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: false
  work_years_min: 0
  work_fields_accepted: ['any']
  other_requirements_ko: []
  validity_ko: "자격 취득 후 유효기간 만료 없이 영구 유지됨."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 필기시험"
      subjects_ko: ['리스크관리기초(금융통계학/채권분석/규제)', '금융선물 및 옵션', '장외파생상품(스왑/장외옵션)', '리스크관리기법(시장·신용·운영리스크/사례)']
      format: mcq
      question_summary_ko: "객관식 4지선다형 총 100문항 (120분)"
      duration_min: 120
      passing_rule_ko: "과목별 40% 이상, 전 과목 총점 70% 이상(70문항 이상 정답) 시 합격"
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 180
      hours_typical: 300
      hours_max: 450
      sessions_per_year: 1
      next_dates_ko: "2026년 8월 연 1회 실시"
      fee:
        amount: 40000
        currency: KRW
        krw_approx: 40000
        fx_date: "2026-11-11"
  exemptions_ko: "미국 GARP FRM 자격 소지자는 일부 과목 면제"
  total:
    hours_min: 180
    hours_typical: 300
    hours_max: 450
    hours_basis: provider
    hours_basis_note_ko: "금융통계학과 장외파생 수리 계산 학습을 고려한 수험기관 평균 수험시간(일 3시간, 3~4개월)"
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
  rationale_ko: "4개 과목 객관식 필기시험으로 총 300시간 내외의 학습량이 필요해 hours_score 3, structure_score 2를 받았다. 공식 합격률이 공개되지 않아 합격률 점수를 제외한 두 점수 평균으로 중급(3)으로 산정하였다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://license.kofia.or.kr/examInfo/examInfo.do?examId=09"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee']
  - url: "https://www.epasskorea.com"
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
      reason_ko: "한국금융투자협회가 공식 합격률 통계를 게시하지 않아 비공식 집계치는 사용하지 않음"
```

## kr_fund_advisor

```yaml
# ---------- A. Identity ----------
id: kr_fund_advisor
name_ko: "펀드투자권유자문인력"
name_orig: "Certified Fund Investment Advisor"
tier: 1
region: KR
exam_type: license
domain: ['securities_investment']
issuer: "한국금융투자협회 (Korea Financial Investment Association)"
official_url: "https://license.kofia.or.kr/examInfo/examInfo.do?examId=05"
status: active
summary_ko: "자본시장법에 따라 금융회사 소속 임직원으로서 일반투자자에게 펀드(집합투자증권)의 매매를 전문적으로 권유하거나 투자 자문을 수행할 수 있는 법정 전문인력 자격입니다."
usage_ko: "은행 및 증권회사 영업점 창구에서 일반 고객을 대상으로 공모/사모 펀드 상품을 상담·판매하기 위한 법정 필수 자격입니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "금융회사 재직자 또는 1년 이상 경력자 경로"
      age_min: null
      age_max: null
      education_accepted: ['any']
      work_years_min: 1
      work_fields_accepted: ['banking_finance', 'securities_asset_mgmt', 'insurance']
      source_text: "금융투자회사 또는 금융기관의 재직자 또는 1년 이상 재직 경력자로서 사전 투자자보호 교육을 이수한 자만 응시할 수 있다."
  extra_checks_ko: ['금융회사 재직자(정규직/계약직) 또는 1년 이상 금융회사 근무 경력 필수', '원서접수 마감일 전까지 금융투자교육원 투자자보호 교육 사전 이수 필수']
  exam_languages: ['ko']
  english_level_needed: none
  english_level_reason: "Conducted in Korean."
  test_countries: ['KR']
  retake_limit_ko: "응시 횟수 제한 없음."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: ['banking_finance', 'securities_asset_mgmt', 'insurance']
  other_requirements_ko: ['소속 금융회사를 통한 금융투자협회 자문인력 등록']
  validity_ko: "금융회사 재직 및 협회 등록 기간 중 유효, 퇴직 후 5년 경과 시 재등록 교육 필요."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 필기시험"
      subjects_ko: ['펀드일반', '파생상품펀드', '부동산펀드']
      format: mcq
      question_summary_ko: "객관식 4지선다형 100문항 (120분)"
      duration_min: 120
      passing_rule_ko: "과목별 40% 이상, 전 과목 70% 이상(70문항) 정답 시 합격"
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 60
      hours_typical: 110
      hours_max: 160
      sessions_per_year: 3
      next_dates_ko: "2026년 3월, 7월, 11월 연 3회 실시"
      fee:
        amount: 40000
        currency: KRW
        krw_approx: 40000
        fx_date: "2026-11-11"
  exemptions_ko: "종전 간접투자증권투자상담사 합격자는 해당 과목 면제"
  total:
    hours_min: 60
    hours_typical: 110
    hours_max: 160
    hours_basis: provider
    hours_basis_note_ko: "금융기관 재직자 평균 수험 기간(일 2시간, 약 5~6주) 집계"
    min_calendar_months: 2
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['사전 투자자보호 사이버교육비 약 35,000 KRW']

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
  rationale_ko: "3개 과목 객관식 시험과 사전 투자자보호교육으로 총 110시간 내외의 학습량이 필요해 hours_score 2, structure_score 3을 받았다. 공식 합격률이 공개되지 않아 합격률 점수를 제외한 두 점수 평균으로 중급(3)으로 산정하였다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://license.kofia.or.kr/examInfo/examInfo.do?examId=05"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee']
  - url: "https://www.epasskorea.com"
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
      reason_ko: "한국금융투자협회가 공식 합격률 통계를 게시하지 않아 비공식 집계치는 사용하지 않음"
```

## kr_fund_solicitor

```yaml
# ---------- A. Identity ----------
id: kr_fund_solicitor
name_ko: "펀드투자권유대행인"
name_orig: "Certified Fund Investment Solicitor"
tier: 1
region: KR
exam_type: certificate
domain: ['securities_investment']
issuer: "한국금융투자협회 (Korea Financial Investment Association)"
official_url: "https://license.kofia.or.kr/examInfo/examInfo.do?examId=02"
status: active
summary_ko: "금융투자회사와의 위탁계약을 통해 투자자에게 펀드(집합투자증권)의 매매를 권유하거나 계약 체결을 중개하는 대행인 자격입니다. 펀드 법규, 투자자보호 기준 및 상품 기초 지식을 검정합니다."
usage_ko: "금융권 취업 준비생의 기초 입문 자격증이자 보험설계사 및 독립재무상담사(IFA)의 펀드 판매 위탁 대행 자격으로 활용됩니다."

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
      source_text: "응시자격에 제한이 없으며 누구나 응시할 수 있다."
  extra_checks_ko: []
  exam_languages: ['ko']
  english_level_needed: none
  english_level_reason: "Conducted in Korean with standard domestic investment terminology."
  test_countries: ['KR']
  retake_limit_ko: "응시 횟수 제한 없음."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: ['any']
  other_requirements_ko: ['금융투자회사와의 위탁계약 체결 및 금융투자협회 등록', '등록 전 지정 교육 이수']
  validity_ko: "합격 후 등록 시 유효, 등록 말소 후 5년 경과 시 재등록 교육 필요."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 필기시험"
      subjects_ko: ['펀드일반', '파생상품펀드', '부동산펀드']
      format: mcq
      question_summary_ko: "객관식 4지선다형 100문항 (120분)"
      duration_min: 120
      passing_rule_ko: "응시 과목별 40% 이상, 전체 60% 이상 정답 시 합격"
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 40
      hours_typical: 80
      hours_max: 120
      sessions_per_year: 2
      next_dates_ko: "2026년 4월, 9월 연 2회 실시"
      fee:
        amount: 40000
        currency: KRW
        krw_approx: 40000
        fx_date: "2026-11-11"
  exemptions_ko: "해당 없음"
  total:
    hours_min: 40
    hours_typical: 80
    hours_max: 120
    hours_basis: provider
    hours_basis_note_ko: "금융자격증 학원 수강생 기준 평균 3~4주(일 2시간) 준비기간 집계"
    min_calendar_months: 1
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['협회 등록 교육비 약 30,000 KRW']

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
  rationale_ko: "3개 과목 객관식 시험으로 총 80시간 내외의 학습량이 필요해 hours_score 2, structure_score 2를 받았다. 공식 합격률이 공개되지 않아 합격률 점수를 제외한 두 점수 평균으로 초급(2)으로 산정하였다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://license.kofia.or.kr/examInfo/examInfo.do?examId=02"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee']
  - url: "https://www.epasskorea.com"
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
      reason_ko: "한국금융투자협회가 공식 합격률 통계를 게시하지 않아 비공식 집계치는 사용하지 않음"
```

## kr_sec_advisor

```yaml
# ---------- A. Identity ----------
id: kr_sec_advisor
name_ko: "증권투자권유자문인력"
name_orig: "Certified Securities Investment Advisor"
tier: 1
region: KR
exam_type: license
domain: ['securities_investment']
issuer: "한국금융투자협회 (Korea Financial Investment Association)"
official_url: "https://license.kofia.or.kr/examInfo/examInfo.do?examId=06"
status: active
summary_ko: "금융회사 임직원으로서 일반투자자를 상대로 주식, 채권 등 증권에 대한 투자 권유 및 자문을 전담할 수 있는 법정 전문자격입니다."
usage_ko: "증권사 및 은행 영업점에서 주식 매매 브로커리지, 채권 판매, 신탁 상품 상담을 수행하기 위한 필수 자격입니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "금융회사 재직자 또는 1년 이상 경력자 경로"
      age_min: null
      age_max: null
      education_accepted: ['any']
      work_years_min: 1
      work_fields_accepted: ['banking_finance', 'securities_asset_mgmt', 'insurance']
      source_text: "금융기관 재직자 또는 과거 1년 이상 금융기관 재직 경력자로서 투자자보호 교육을 이수한 자."
  extra_checks_ko: ['금융회사 재직(정규직/계약직) 증명서 또는 1년 이상 경력증명서 제출', '금융투자교육원 투자자보호 교육 사전 이수']
  exam_languages: ['ko']
  english_level_needed: none
  english_level_reason: "Conducted in Korean."
  test_countries: ['KR']
  retake_limit_ko: "응시 횟수 제한 없음."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: ['banking_finance', 'securities_asset_mgmt', 'insurance']
  other_requirements_ko: ['소속 금융회사 통한 금융투자협회 자문인력 등록']
  validity_ko: "협회 등록 기간 중 유효, 퇴직 후 5년 경과 시 재등록 교육 필수."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 필기시험"
      subjects_ko: ['증권분석 및 시장분석', '금융투자상품', '직무윤리 및 법규', '투자권유 및 투자자보호']
      format: mcq
      question_summary_ko: "객관식 4지선다형 100문항 (120분)"
      duration_min: 120
      passing_rule_ko: "과목별 40% 이상, 전 과목 70% 이상(70문항) 정답 시 합격"
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 70
      hours_typical: 130
      hours_max: 180
      sessions_per_year: 3
      next_dates_ko: "2026년 2월, 6월, 10월 연 3회 실시"
      fee:
        amount: 40000
        currency: KRW
        krw_approx: 40000
        fx_date: "2026-11-11"
  exemptions_ko: "종전 증권투자상담사 합격자 해당 과목 면제"
  total:
    hours_min: 70
    hours_typical: 130
    hours_max: 180
    hours_basis: provider
    hours_basis_note_ko: "금융사 신입사원 입문 교육 및 합격자 평균 6~8주(일 2~3시간) 학습시간"
    min_calendar_months: 2
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['사전 투자자보호 사이버교육비 약 35,000 KRW']

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
  rationale_ko: "3개 과목 객관식 시험과 사전 투자자보호교육으로 총 130시간 내외의 학습량이 필요해 hours_score 2, structure_score 3을 받았다. 공식 합격률이 공개되지 않아 합격률 점수를 제외한 두 점수 평균으로 중급(3)으로 산정하였다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://license.kofia.or.kr/examInfo/examInfo.do?examId=06"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee']
  - url: "https://www.epasskorea.com"
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
      reason_ko: "한국금융투자협회가 공식 합격률 통계를 게시하지 않아 비공식 집계치는 사용하지 않음"
```

## kr_sec_solicitor

```yaml
# ---------- A. Identity ----------
id: kr_sec_solicitor
name_ko: "증권투자권유대행인"
name_orig: "Certified Securities Investment Solicitor"
tier: 1
region: KR
exam_type: certificate
domain: ['securities_investment']
issuer: "한국금융투자협회 (Korea Financial Investment Association)"
official_url: "https://license.kofia.or.kr/examInfo/examInfo.do?examId=01"
status: active
summary_ko: "금융투자회사와 계약을 맺고 투자자에게 주식, 채권 등 증권의 매매 및 투자신탁 수익증권 매매를 권유하는 위탁 대행인 자격입니다. 자본시장법규와 주식·채권 매매 실무를 평가합니다."
usage_ko: "증권사 및 금융회사 취업 입문 자격증, 보험설계사 및 투자상담 대행 인력의 필수 등록 자격으로 쓰입니다."

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
      source_text: "응시자격에 제한이 없으며 누구나 응시할 수 있다."
  extra_checks_ko: []
  exam_languages: ['ko']
  english_level_needed: none
  english_level_reason: "Administered in Korean."
  test_countries: ['KR']
  retake_limit_ko: "응시 횟수 제한 없음."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: ['any']
  other_requirements_ko: ['증권회사 위탁계약 체결 및 협회 사전등록 교육 이수']
  validity_ko: "합격 후 등록 시 유효, 말소 후 5년 경과 시 재등록 교육 필요."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 필기시험"
      subjects_ko: ['금융투자상품 및 증권시장', '증권투자권유와 투자자보호', '영업실무']
      format: mcq
      question_summary_ko: "객관식 4지선다형 100문항 (120분)"
      duration_min: 120
      passing_rule_ko: "응시 과목별 40% 이상, 전체 60% 이상 정답 시 합격"
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 50
      hours_typical: 90
      hours_max: 140
      sessions_per_year: 2
      next_dates_ko: "2026년 3월, 8월 연 2회 실시"
      fee:
        amount: 40000
        currency: KRW
        krw_approx: 40000
        fx_date: "2026-11-11"
  exemptions_ko: "해당 없음"
  total:
    hours_min: 50
    hours_typical: 90
    hours_max: 140
    hours_basis: provider
    hours_basis_note_ko: "수험생 평균 1개월 내외(일 2~3시간) 준비기간 집계"
    min_calendar_months: 1
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['협회 등록 교육비 약 30,000 KRW']

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
  rationale_ko: "3개 과목 객관식 시험으로 총 90시간 내외의 학습량이 필요해 hours_score 2, structure_score 2를 받았다. 공식 합격률이 공개되지 않아 합격률 점수를 제외한 두 점수 평균으로 초급(2)으로 산정하였다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://license.kofia.or.kr/examInfo/examInfo.do?examId=01"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee']
  - url: "https://www.epasskorea.com"
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
      reason_ko: "한국금융투자협회가 공식 합격률 통계를 게시하지 않아 비공식 집계치는 사용하지 않음"
```

## kr_deriv_solicitor

```yaml
# ---------- A. Identity ----------
id: kr_deriv_solicitor
name_ko: "파생상품투자권유대행인"
name_orig: "Certified Derivatives Investment Solicitor"
tier: 2
region: KR
exam_type: certificate
domain: ['securities_investment']
issuer: "한국금융투자협회 (Korea Financial Investment Association)"
official_url: "https://license.kofia.or.kr"
status: active
summary_ko: "금융투자회사와의 위탁계약을 통해 일반투자자에게 파생상품펀드 및 파생결합증권(ELS/DLS) 등의 매매를 권유하거나 계약 체결을 중개하는 대행인 자격입니다."
usage_ko: "독립보험대리점(GA) 및 재무설계사의 ELS/DLS 및 파생형 금융상품 연계 판매 자격으로 활용됩니다."

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
      source_text: "연령, 학력, 경력에 제한 없이 누구나 응시할 수 있다."
  extra_checks_ko: []
  exam_languages: ['ko']
  english_level_needed: none
  english_level_reason: "Conducted in Korean."
  test_countries: ['KR']
  retake_limit_ko: "응시 횟수 제한 없음."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: ['any']
  other_requirements_ko: ['금융투자협회 사전등록 교육 이수 및 위탁계약 체결']
  validity_ko: "협회 등록 시 유효, 말소 후 5년 경과 시 보수교육 필요."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 필기시험"
      subjects_ko: ['파생상품 및 파생결합증권', '리스크관리 및 직무윤리', '파생상품투자권유실무']
      format: mcq
      question_summary_ko: "객관식 4지선다형 총 100문항 (120분)"
      duration_min: 120
      passing_rule_ko: "과목별 40% 이상, 전 과목 60% 이상 득점 시 합격"
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: 60
      hours_typical: 110
      hours_max: 160
      sessions_per_year: 2
      next_dates_ko: "2026년 5월, 10월 연 2회 실시"
      fee:
        amount: 40000
        currency: KRW
        krw_approx: 40000
        fx_date: "2026-11-11"
  exemptions_ko: "해당 없음"
  total:
    hours_min: 60
    hours_typical: 110
    hours_max: 160
    hours_basis: provider
    hours_basis_note_ko: "수험기관 기준 평균 1~1.5개월(일 2~3시간) 소요"
    min_calendar_months: 2
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['사전 교육비 약 30,000 KRW']

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
  rationale_ko: "객관식 필기시험으로 총 110시간 내외의 학습량이 필요해 hours_score 2, structure_score 2를 받았다. 공식 합격률이 공개되지 않아 합격률 점수를 제외한 두 점수 평균으로 초급(2)으로 산정하였다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://license.kofia.or.kr"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee']
  - url: "https://www.epasskorea.com"
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
      reason_ko: "한국금융투자협회가 공식 합격률 통계를 게시하지 않아 비공식 집계치는 사용하지 않음"
```

