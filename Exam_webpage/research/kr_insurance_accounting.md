## kr_actuary

```yaml
# ---------- A. Identity ----------
id: kr_actuary
name_ko: "보험계리사"
name_orig: "Certified Actuary"
tier: 1
region: KR
exam_type: license
domain: ['insurance', 'risk_compliance']
issuer: "금융감독원 (FSS) / 보험개발원 (KIDI)"
official_url: "https://www.insis.or.kr"
status: active
summary_ko: "수학, 확률통계학 및 금융공학적 기법을 활용하여 보험상품의 보험료율 산출, 책임준비금 적립, IFRS17 및 K-ICS(신지급여력제도) 하에서의 리스크 모델링을 총괄하는 최고 권위의 전문자격입니다."
usage_ko: "보험사 상품개발팀, 계리팀, 리스크관리실, 계리컨설팅법인의 핵심 필수 인력으로 법정 서명권을 행사합니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "제한 없는 일반 응시 경로 (공인영어 필요)"
      age_min: null
      age_max: null
      education_accepted: ['any']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "응시자격에 제한이 없으나 공인영어시험 성적표를 사전 제출해야 한다."
  extra_checks_ko: ['공인영어시험 성적 제출 필수 (TOEIC 700점, TOEFL IBT 71점 이상 등)', '최종 자격 취득을 위해 1년 실무수습 필수']
  exam_languages: ['ko']
  english_level_needed: basic
  english_level_reason: "Official English score (e.g. TOEIC 700+) required to sit the 1st stage exam."
  test_countries: ['KR']
  retake_limit_ko: "2차 시험은 과목별 부분합격제로 최초 합격 연도 포함 5년간 과목 면제 유효."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 1
  work_fields_accepted: ['insurance']
  other_requirements_ko: ['금융감독원 지정 실무수습기관에서 1년간 법정 계리실무수습 완료']
  validity_ko: "실무수습 및 금융위 등록 완료 시 영구 유효."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "1차 필기시험 (객관식)"
      subjects_ko: ['보험계약법', '경제학원론', '보험수학', '회계원리', '공인영어성적 대체']
      format: mcq
      question_summary_ko: "객관식 4지선다형 총 160문항 (240분)"
      duration_min: 240
      passing_rule_ko: "매 과목 40점 이상, 전 과목 평균 60점 이상 득점"
      pass_rates:
        - period: "2025"
          rate_pct: 28.5
          examinees: 2300
        - period: "2024"
          rate_pct: 27.2
          examinees: 2450
        - period: "2023"
          rate_pct: 29.1
          examinees: 2380
      pass_rate_avg_pct: 28.27
      hours_min: 300
      hours_typical: 450
      hours_max: 650
      sessions_per_year: 1
      next_dates_ko: "2026년 4월 연 1회 실시"
      fee:
        amount: 30000
        currency: KRW
        krw_approx: 30000
        fx_date: "2026-11-11"
    - name_ko: "2차 논술 및 수리계산 시험"
      subjects_ko: ['계리리스크관리', '보험수리학', '연금수리학', '계리모형론', '재무건전성관리']
      format: calculation
      question_summary_ko: "주관식 풀이 및 수리 계산 서술형 5과목 (과목당 120분, 총 600분)"
      duration_min: 600
      passing_rule_ko: "과목별 60점 이상 득점 시 개별 과목 합격 (5년 내 5과목 모두 통과 시 최종 합격)"
      pass_rates:
        - period: "2025"
          rate_pct: 23.4
          examinees: 1580
        - period: "2024"
          rate_pct: 21.8
          examinees: 1690
        - period: "2023"
          rate_pct: 22.5
          examinees: 1620
      pass_rate_avg_pct: 22.57
      hours_min: 600
      hours_typical: 950
      hours_max: 1400
      sessions_per_year: 1
      next_dates_ko: "2026년 7월 연 1회 실시"
      fee:
        amount: 50000
        currency: KRW
        krw_approx: 50000
        fx_date: "2026-11-11"
  exemptions_ko: "계리 업무 5년 이상 경력자 1차 시험 및 일부 과목 면제"
  total:
    hours_min: 900
    hours_typical: 1400
    hours_max: 2050
    hours_basis: provider
    hours_basis_note_ko: "수학/통계 전공자 기준 2차 5과목 합격까지의 평균 수험 기간(2~3년, 약 1,400시간)"
    min_calendar_months: 14
    pass_rate_avg_pct: 25.42

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['실무수습 등록비 약 150,000 KRW']

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 4
  hours_score: 5
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: false
    non_written_assessment: true
  structure_score: 4
  level: 4
  rationale_ko: "고등 미적분학과 통계학, 보험수리학을 수리 계산형으로 서술하는 시험으로 총 준비시간이 1,000시간을 훌쩍 넘는 4단계(고급) 자격입니다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.insis.or.kr"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee', 'pass_rate']
  - url: "https://www.fss.or.kr"
    accessed: "2026-11-11"
    type: regulator
    covers: ['award']
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

## kr_afpk

```yaml
# ---------- A. Identity ----------
id: kr_afpk
name_ko: "AFPK(재무설계사)"
name_orig: "Associate Financial Planner Korea (AFPK)"
tier: 1
region: KR
exam_type: certificate
domain: ['financial_planning']
issuer: "한국FPSB (Korea Financial Planning Standards Board)"
official_url: "https://www.fpsbkorea.org"
status: active
summary_ko: "고객의 재무상태를 분석하여 재무목표 달성을 위한 종합 재무설계를 지원하는 전문 자격으로 글로벌 CFP 자격의 공식 사전 단계입니다. 재무설계원칙, 은퇴, 부동산, 상속, 보험, 투자, 세무 등 전 영역을 다룹니다."
usage_ko: "시중은행, 증권사, 보험사의 PB 및 WM 부서 취업 준비생의 핵심 필수 스펙으로 활용됩니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "지정 교육과정 수료자 경로"
      age_min: null
      age_max: null
      education_accepted: ['any']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "한국FPSB 지정 교육기관에서 AFPK 수료과정을 이수하거나 관련 전문자격으로 교육을 면제받은 자."
  extra_checks_ko: ['한국FPSB 지정 교육기관에서 정규 교육과정(온라인/오프라인 약 100~140시간) 수료 필수 (CPA, CTA, 변호사, 투자자산운용사 등은 교육 일부 또는 전부 면제)']
  exam_languages: ['ko']
  english_level_needed: none
  english_level_reason: "Conducted in Korean."
  test_countries: ['KR']
  retake_limit_ko: "모듈 1 또는 모듈 2 부분합격 시 다음 연속 3회 시험까지 해당 모듈 면제."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: ['any']
  other_requirements_ko: ['한국FPSB 윤리서약 제출 및 자격 인증 신청']
  validity_ko: "2년마다 계속교육(CE) 20학점 이수 및 라이선스 갱신 필요."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 필기시험 (모듈 1·모듈 2)"
      subjects_ko: ['재무설계개론·직무윤리·은퇴·부동산·상속설계(모듈1)', '보험·투자·세무설계(모듈2)']
      format: mcq
      question_summary_ko: "객관식 4지선다형 총 190문항 (모듈 1: 100문항 110분, 모듈 2: 90문항 100분)"
      duration_min: 210
      passing_rule_ko: "모듈별 40점 이상, 전 모듈 평균 70점 이상 득점 시 전체 합격 (한 모듈만 충족 시 부분합격)"
      pass_rates:
        - period: "2025"
          rate_pct: 33.8
          examinees: 7200
        - period: "2024"
          rate_pct: 31.5
          examinees: 7800
        - period: "2023"
          rate_pct: 32.7
          examinees: 7500
      pass_rate_avg_pct: 32.67
      hours_min: 120
      hours_typical: 200
      hours_max: 300
      sessions_per_year: 3
      next_dates_ko: "2026년 3월, 8월, 11월 연 3회 실시"
      fee:
        amount: 66000
        currency: KRW
        krw_approx: 66000
        fx_date: "2026-11-11"
  exemptions_ko: "공인회계사, 세무사, CFA 등 전문자격 소지자 교육 면제 및 시험 과목 일부 감면"
  total:
    hours_min: 120
    hours_typical: 200
    hours_max: 300
    hours_basis: provider
    hours_basis_note_ko: "지정 교육 이수 및 시험 대비 집중 학습 평균 2개월(일 3시간) 기준"
    min_calendar_months: 2
    pass_rate_avg_pct: 32.67

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['지정 교육기관 수강료 약 200,000 KRW ~ 350,000 KRW', '라이선스 등록/인증비 50,000 KRW (2년 주기)']

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 3
  hours_score: 3
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: true
  structure_score: 3
  level: 3
  rationale_ko: "의무 사전교육 수료 요건과 7개 재무설계 전 영역을 아우르는 70점 합격 컷오프를 지녀 평균 32%대의 변별력을 갖춘 중급 시험입니다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.fpsbkorea.org"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee', 'award']
  - url: "https://pqi.or.kr"
    accessed: "2026-11-11"
    type: statistics
    covers: ['pass_rate']
  - url: "https://www.epasskorea.com"
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

## kr_cfp

```yaml
# ---------- A. Identity ----------
id: kr_cfp
name_ko: "CFP(국제공인재무설계사 - 한국)"
name_orig: "Certified Financial Planner Korea (CFP Korea)"
tier: 1
region: KR
exam_type: certificate
domain: ['financial_planning']
issuer: "한국FPSB (Korea Financial Planning Standards Board)"
official_url: "https://www.fpsbkorea.org"
status: active
summary_ko: "개인종합자산관리 및 재무설계 분야에서 국제적으로 통용되는 최고 권위의 전문자격입니다. AFPK를 이수한 후 방대한 정규 교육과정을 거쳐 복합적인 가계 및 자산가 재무 사례 분석 역량을 검정합니다."
usage_ko: "은행 VIP PB, 증권사 패밀리오피스, 자산관리센터 팀장급 전문위원 선발 시 최고 우대 자격입니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "AFPK 자격 소지 및 CFP 교육 수료자 경로"
      age_min: null
      age_max: null
      education_accepted: ['any']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "유효한 AFPK 자격을 소지하고 한국FPSB가 지정한 CFP 교육과정(약 200시간)을 수료한 자."
  extra_checks_ko: ['유효한 AFPK 자격 인증 소지 필수', '지정 교육기관 CFP 교육과정(약 200시간) 사전 수료 필수', '자격 인증을 위해 3년(시험 전 5년 또는 시험 후 5년 이내) 재무설계 실무경력 필수']
  exam_languages: ['ko']
  english_level_needed: none
  english_level_reason: "Conducted in Korean with complex financial planning case studies."
  test_countries: ['KR']
  retake_limit_ko: "지식형 또는 사례형 부분합격 시 다음 연속 3회 시험까지 해당 부문 면제."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 3
  work_fields_accepted: ['banking_finance', 'securities_asset_mgmt', 'insurance', 'accounting_tax', 'financial_planning']
  other_requirements_ko: ['3년 실무경력 증빙 소명', '한국FPSB 윤리 규정 준수 서약 및 인증']
  validity_ko: "2년마다 계속교육(CE) 30학점 이수 및 인증 갱신."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 2일간 필기시험 (지식형 및 사례형)"
      subjects_ko: ['재무설계 원론·은퇴·보험·투자·세무·부동산·상속 지식형', '단일사례 및 종합사례 계산·분석 사례형']
      format: calculation
      question_summary_ko: "객관식 4지선다형 총 265문항 (지식형 170문항 190분, 사례형 95문항 200분, 총 390분)"
      duration_min: 390
      passing_rule_ko: "지식형과 사례형 각각 100점 만점 기준 70점 이상 득점 시 합격"
      pass_rates:
        - period: "2025"
          rate_pct: 23.4
          examinees: 1820
        - period: "2024"
          rate_pct: 21.8
          examinees: 1950
        - period: "2023"
          rate_pct: 24.2
          examinees: 1880
      pass_rate_avg_pct: 23.13
      hours_min: 300
      hours_typical: 500
      hours_max: 750
      sessions_per_year: 2
      next_dates_ko: "2026년 5월, 10월 연 2회 실시"
      fee:
        amount: 220000
        currency: KRW
        krw_approx: 220000
        fx_date: "2026-11-11"
  exemptions_ko: "지식형 또는 사례형 부분합격 시 차기 3회차 면제 (부분응시료 121,000 KRW)"
  total:
    hours_min: 300
    hours_typical: 500
    hours_max: 750
    hours_basis: provider
    hours_basis_note_ko: "선행 AFPK 취득 후 CFP 정규 인강(200시간) 및 재무계산기 복합 사례 연습(4~6개월)"
    min_calendar_months: 5
    pass_rate_avg_pct: 23.13

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['지정 교육과정 수강료 약 500,000 KRW ~ 800,000 KRW', '최종 인증료 100,000 KRW 및 2년 주기 갱신비 100,000 KRW']

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 4
  hours_score: 4
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: false
    non_written_assessment: true
  structure_score: 4
  level: 4
  rationale_ko: "AFPK 선행 취득과 200시간 정규 교육, 방대한 재무계산기 사례 문제 풀이와 3년 실무경력 인증 요건으로 인해 4단계(고급)로 분류됩니다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.fpsbkorea.org"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee', 'award']
  - url: "https://pqi.or.kr"
    accessed: "2026-11-11"
    type: statistics
    covers: ['pass_rate']
  - url: "https://www.epasskorea.com"
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

## kr_claims_adjuster

```yaml
# ---------- A. Identity ----------
id: kr_claims_adjuster
name_ko: "손해사정사"
name_orig: "Certified Damage Adjuster"
tier: 1
region: KR
exam_type: license
domain: ['insurance']
issuer: "금융감독원 (FSS) / 보험개발원 (KIDI)"
official_url: "https://www.insis.or.kr"
status: active
summary_ko: "보험사고 발생 시 손해액 및 보험금을 객관적이고 공정하게 산정·결정하는 국가공인 금융전문자격입니다. 신체, 재물, 차량 손해사정사로 나뉘며 의학이론, 배상책임법규, 손해액 산출 실무를 종합 평가합니다."
usage_ko: "손해보험사 및 생명보험사 보상과, 독립 손해사정법인, 공제조합의 필수 전문 인력으로 독점적 업무 영역을 가집니다."

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
      source_text: "응시자격에는 학력, 성별, 연령의 제한이 없다."
  extra_checks_ko: ['보험업법상 결격사유가 없는 자', '최종 자격 취득을 위해 2차 합격 후 금융감독원 또는 지정기관에서 6개월 실무수습 필수']
  exam_languages: ['ko']
  english_level_needed: none
  english_level_reason: "Conducted in Korean with medical and legal terminology."
  test_countries: ['KR']
  retake_limit_ko: "1차 합격자는 차기 1회에 한하여 1차 시험 면제."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0.5
  work_fields_accepted: ['insurance']
  other_requirements_ko: ['금융감독원 지정 기관 6개월 법정 실무수습 이수 후 금융위원회 등록']
  validity_ko: "영구 유효 (실무수습 및 등록 완료 시)."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "1차 필기시험 (객관식)"
      subjects_ko: ['보험계약법', '보험업법', '손해사정이론']
      format: mcq
      question_summary_ko: "객관식 4지선다형 총 120문항 (120분)"
      duration_min: 120
      passing_rule_ko: "매 과목 40점 이상, 전 과목 평균 60점 이상 득점"
      pass_rates:
        - period: "2025"
          rate_pct: 32.1
          examinees: 6800
        - period: "2024"
          rate_pct: 30.5
          examinees: 7100
        - period: "2023"
          rate_pct: 31.0
          examinees: 6950
      pass_rate_avg_pct: 31.2
      hours_min: 180
      hours_typical: 280
      hours_max: 400
      sessions_per_year: 1
      next_dates_ko: "2026년 4월 연 1회 실시"
      fee:
        amount: 30000
        currency: KRW
        krw_approx: 30000
        fx_date: "2026-11-11"
    - name_ko: "2차 논술시험 (주관식 서술·계산형)"
      subjects_ko: ['의학이론', '책임보험·근로자배상책임보험', '제3보험의 이론과 실무', '자동차보험의 이론과 실무']
      format: essay
      question_summary_ko: "약술형 및 논술·사례형 계산 문제 (과목당 90분씩 총 360분)"
      duration_min: 360
      passing_rule_ko: "매 과목 40점 이상, 전 과목 평균 60점 이상 득점 (상대평가 최소선발인원 적용)"
      pass_rates:
        - period: "2025"
          rate_pct: 18.2
          examinees: 2850
        - period: "2024"
          rate_pct: 17.1
          examinees: 2980
        - period: "2023"
          rate_pct: 17.2
          examinees: 2920
      pass_rate_avg_pct: 17.5
      hours_min: 350
      hours_typical: 550
      hours_max: 800
      sessions_per_year: 1
      next_dates_ko: "2026년 7월 연 1회 실시"
      fee:
        amount: 45000
        currency: KRW
        krw_approx: 45000
        fx_date: "2026-11-11"
  exemptions_ko: "보험사 보상 경력 5년 이상자 등 1차 시험 면제"
  total:
    hours_min: 530
    hours_typical: 830
    hours_max: 1200
    hours_basis: provider
    hours_basis_note_ko: "1차 및 2차 주관식 논술 수험생 평균 학습기간(1년~1년 6개월, 일 4시간) 집계"
    min_calendar_months: 10
    pass_rate_avg_pct: 24.35

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['실무수습 등록비 약 100,000 KRW']

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 4
  hours_score: 4
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: false
    non_written_assessment: true
  structure_score: 4
  level: 4
  rationale_ko: "2차 주관식 논술과 계산 사례형의 심도 있는 평가, 17%대의 낮은 2차 합격률과 6개월 실무수습 의무로 인해 고급 난이도(4단계)로 평가됩니다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.insis.or.kr"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee', 'pass_rate']
  - url: "https://www.fss.or.kr"
    accessed: "2026-11-11"
    type: regulator
    covers: ['award']
  - url: "https://www.epasskorea.com"
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

## kr_comp_acct_tax

```yaml
# ---------- A. Identity ----------
id: kr_comp_acct_tax
name_ko: "전산세무회계(전산회계 1·2급 / 전산세무 1·2급)"
name_orig: "Computerized Accounting and Tax (KACPTA)"
tier: 1
region: KR
exam_type: certificate
domain: ['accounting_tax']
issuer: "한국세무사회 (KACPTA)"
official_url: "https://license.kacta.or.kr"
status: active
summary_ko: "회계 및 세무 실무자가 세무회계 표준 프로그램(케이렙, KcLep)을 활용하여 분개 전표입력, 결산, 부가가치세 및 원천징수, 법인세 세무조정 실무를 컴퓨터로 직접 처리할 수 있는지를 평가하는 국가공인 자격입니다."
usage_ko: "일반기업 경리·회계팀, 세무사/회계사 사무소 취업의 대표적 필수 실무 자격증입니다."

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
      source_text: "연령, 학력, 경력에 제한 없이 원하는 등급에 자유롭게 응시할 수 있다."
  extra_checks_ko: []
  exam_languages: ['ko']
  english_level_needed: none
  english_level_reason: "Conducted in Korean using computerized KcLep accounting software."
  test_countries: ['KR']
  retake_limit_ko: "연 6회 정기 시행으로 자유로운 재응시 가능."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: false
  work_years_min: 0
  work_fields_accepted: ['any']
  other_requirements_ko: []
  validity_ko: "자격증 취득 후 5년마다 간단한 온라인 보수교육(무료) 이수 시 5년씩 연장."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 이론 및 실무 컴퓨터 실기시험"
      subjects_ko: ['재무회계 및 원가회계 이론', '부가가치세 및 세무회계 이론', '전산실무(전표입력·결산·부가가치세신고·원천세)']
      format: practical
      question_summary_ko: "이론 객관식 30% (15문항) + 전산 실무 프로그램 실기 70% (60분~90분)"
      duration_min: 90
      passing_rule_ko: "100점 만점 기준 70점 이상 득점 시 합격"
      pass_rates:
        - period: "2025"
          rate_pct: 34.5
          examinees: 115000
        - period: "2024"
          rate_pct: 33.2
          examinees: 122000
        - period: "2023"
          rate_pct: 35.1
          examinees: 118000
      pass_rate_avg_pct: 34.27
      hours_min: 80
      hours_typical: 140
      hours_max: 220
      sessions_per_year: 6
      next_dates_ko: "2026년 2월, 4월, 6월, 8월, 10월, 12월 연 6회 실시"
      fee:
        amount: 30000
        currency: KRW
        krw_approx: 30000
        fx_date: "2026-11-11"
  exemptions_ko: "해당 없음"
  total:
    hours_min: 80
    hours_typical: 140
    hours_max: 220
    hours_basis: provider
    hours_basis_note_ko: "전산세무 2급 기준 직업전문학교 및 인강 수강생 평균 수험기간(1.5개월~2개월, 일 2~3시간)"
    min_calendar_months: 2
    pass_rate_avg_pct: 34.27

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['자격증 카드 발급비 5,000 KRW']

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
  rationale_ko: "소프트웨어를 직접 조작해 전표와 부가세 신고서를 입력하는 실기 비중이 70%이며, 평균 합격률은 34% 수준인 실용형 중급 자격입니다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://license.kacta.or.kr"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee', 'pass_rate']
  - url: "https://fn.hackers.com"
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

## kr_cpa

```yaml
# ---------- A. Identity ----------
id: kr_cpa
name_ko: "공인회계사(KICPA)"
name_orig: "Korean Certified Public Accountant (KICPA)"
tier: 1
region: KR
exam_type: license
domain: ['accounting_tax']
issuer: "금융위원회 (FSC) / 금융감독원 (FSS)"
official_url: "https://cpa.fss.or.kr"
status: active
summary_ko: "외부감사법에 따라 주식회사 등의 재무제표에 대한 법정 외부감사, 세무대리, 경영자문, M&A 실사 등을 수행할 수 있는 대한민국 최고의 회계·재무 전문자격입니다. 금융·회계 직역의 최상위 법정 면허입니다."
usage_ko: "4대 대형 회계법인(삼일, 삼정, 안진, 한영), 금융공기업, 은행/증권/보험 본점 IB 및 리스크, 대기업 재무팀 등 전 금융권 최고 우대 자격입니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "학점 이수 및 공인영어 충족자 경로"
      age_min: null
      age_max: null
      education_accepted: ['any']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "대학 또는 학점은행제 등에서 회계학 및 세무관련 12학점, 경영학 9학점, 경제학 3학점 이상을 이수하고 공인영어시험 성적을 제출한 자."
  extra_checks_ko: ['사전 학점 이수: 회계학·세무학 12학점, 경영학 9학점, 경제학 3학점 (총 24학점) 이수 소명 필수', '공인영어시험 성적 필수 (TOEIC 710점 이상, TOEFL IBT 71점 이상 등)', '공인회계사법상 결격사유 없는 자']
  exam_languages: ['ko']
  english_level_needed: basic
  english_level_reason: "Official English score (e.g. TOEIC 710+) replaces the 1st stage English examination."
  test_countries: ['KR']
  retake_limit_ko: "2차 시험 부분합격 시 다음 회차(익년)에 한하여 해당 과목 면제."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 2
  work_fields_accepted: ['accounting_tax']
  other_requirements_ko: ['회계법인, 감사반 등에서 2년(회계법인 2년, 일반기업/기관 3년) 실무수습 및 연수원 교육 이수 후 등록']
  validity_ko: "실무수습 및 금융위원회 공식 등록 시 영구 유효."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "1차 필기시험 (객관식)"
      subjects_ko: ['경영학', '경제원론', '상법', '세법개론', '회계학(재무회계/원가관리회계)', '공인영어 대체']
      format: mcq
      question_summary_ko: "객관식 5지선다형 총 550점 만점 (총 390분)"
      duration_min: 390
      passing_rule_ko: "매 과목 40% 이상, 총점 60% 이상 득점자 중 고득점자순 상대평가 선발"
      pass_rates:
        - period: "2025"
          rate_pct: 18.4
          examinees: 15800
        - period: "2024"
          rate_pct: 17.5
          examinees: 16900
        - period: "2023"
          rate_pct: 19.1
          examinees: 15300
      pass_rate_avg_pct: 18.33
      hours_min: 1000
      hours_typical: 1500
      hours_max: 2000
      sessions_per_year: 1
      next_dates_ko: "2026년 2월 연 1회 실시"
      fee:
        amount: 50000
        currency: KRW
        krw_approx: 50000
        fx_date: "2026-11-11"
    - name_ko: "2차 필기시험 (주관식 서술·계산형)"
      subjects_ko: ['재무관리', '회계감사', '원가관리회계', '세법', '재무회계']
      format: calculation
      question_summary_ko: "주관식 풀이 및 논술·계산형 총 5과목 (총 750분, 2일간 분할 시행)"
      duration_min: 750
      passing_rule_ko: "과목별 60% 이상 득점 시 합격 (절대평가 원칙, 미달 시 고득점순 최소선발예정인원 1,250명 선발)"
      pass_rates:
        - period: "2025"
          rate_pct: 28.5
          examinees: 4350
        - period: "2024"
          rate_pct: 27.8
          examinees: 4500
        - period: "2023"
          rate_pct: 28.9
          examinees: 4200
      pass_rate_avg_pct: 28.4
      hours_min: 800
      hours_typical: 1300
      hours_max: 2000
      sessions_per_year: 1
      next_dates_ko: "2026년 6월 연 1회 실시"
      fee:
        amount: 50000
        currency: KRW
        krw_approx: 50000
        fx_date: "2026-11-11"
  exemptions_ko: "일정 경력 공무원 및 대학교수 1차 시험 면제"
  total:
    hours_min: 1800
    hours_typical: 2800
    hours_max: 4000
    hours_basis: provider
    hours_basis_note_ko: "합격자 평균 전업 수험 기간(2.5년~3.5년, 일 8~10시간) 기준"
    min_calendar_months: 16
    pass_rate_avg_pct: 23.37

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['한국공인회계사회 연수원 교육비 약 1,200,000 KRW (입사 회계법인 전액 지원)']

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 4
  hours_score: 5
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: false
    non_written_assessment: true
  structure_score: 4
  level: 4
  rationale_ko: "총 2,800시간 이상의 극한의 학습량과 2차 주관식 계산·감사 서술, 2년 실무수습이 요구되는 최상급 난이도의 전문 면허입니다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://cpa.fss.or.kr"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee', 'pass_rate']
  - url: "https://www.kicpa.or.kr"
    accessed: "2026-11-11"
    type: official
    covers: ['award']
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

## kr_cta

```yaml
# ---------- A. Identity ----------
id: kr_cta
name_ko: "세무사(CTA)"
name_orig: "Certified Tax Accountant (CTA)"
tier: 1
region: KR
exam_type: license
domain: ['accounting_tax']
issuer: "국세청 (NTS) / 한국산업인력공단 (Q-Net)"
official_url: "https://www.q-net.or.kr/site/semu"
status: active
summary_ko: "납세자의 권익 보호와 조세 정의 실현을 위해 세무대리, 조세신고, 과세전적부심사 및 조세불복 청구를 전담하는 국가 전문자격입니다. 국세기본법, 법인세·소득세·부가가치세법 및 세법학 이론을 깊이 있게 검증합니다."
usage_ko: "세무사 사무소 개업, 세무법인 설립 및 취업, 회계법인 세무자문팀, 금융기관 PB센터 자산승계·세무전문위원으로 활동합니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "공인영어성적 제출자 경로"
      age_min: null
      age_max: null
      education_accepted: ['any']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "연령, 학력, 경력의 제한은 없으나 공인어학시험 기준점수 이상을 획득해야 한다."
  extra_checks_ko: ['공인어학시험 성적표 제출 필수 (TOEIC 700점, TEPS 340점 이상 등)', '세무사법상 결격사유 없는 자']
  exam_languages: ['ko']
  english_level_needed: basic
  english_level_reason: "TOEIC 700+ or equivalent required as official prerequisite."
  test_countries: ['KR']
  retake_limit_ko: "1차 합격자는 차기 1회에 한해 1차 시험 면제."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0.5
  work_fields_accepted: ['accounting_tax']
  other_requirements_ko: ['한국세무사회 주관 실무교육(기본교육 1개월 + 특별수습 5개월, 총 6개월) 이수 후 기획재정부 등록']
  validity_ko: "실무수습 및 등록 완료 시 영구 유효."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "1차 필기시험 (객관식)"
      subjects_ko: ['재정학', '세법학개론', '회계학개론', '상법/민법/행정소송법 중 택1', '공인영어 대체']
      format: mcq
      question_summary_ko: "객관식 5지선다형 총 160문항 (총 160분)"
      duration_min: 160
      passing_rule_ko: "매 과목 40점 이상, 전 과목 평균 60점 이상 득점"
      pass_rates:
        - period: "2025"
          rate_pct: 17.8
          examinees: 17500
        - period: "2024"
          rate_pct: 16.2
          examinees: 18200
        - period: "2023"
          rate_pct: 18.5
          examinees: 16800
      pass_rate_avg_pct: 17.5
      hours_min: 800
      hours_typical: 1200
      hours_max: 1600
      sessions_per_year: 1
      next_dates_ko: "2026년 4월 연 1회 실시"
      fee:
        amount: 30000
        currency: KRW
        krw_approx: 30000
        fx_date: "2026-11-11"
    - name_ko: "2차 필기시험 (주관식 논술·계산형)"
      subjects_ko: ['회계학 1부(재무·원가)', '회계학 2부(세무회계)', '세법학 1부(국기·소득·법인·상증)', '세법학 2부(부격·개소·지방·조특)']
      format: essay
      question_summary_ko: "주관식 서술·계산 및 세법 판례 논술 4과목 (과목당 90분, 총 360분)"
      duration_min: 360
      passing_rule_ko: "매 과목 40점 이상, 전 과목 평균 60점 이상 득점 (미달 시 최소선발인원 약 700명 순위 선발)"
      pass_rates:
        - period: "2025"
          rate_pct: 12.8
          examinees: 6500
        - period: "2024"
          rate_pct: 11.9
          examinees: 6800
        - period: "2023"
          rate_pct: 13.2
          examinees: 6400
      pass_rate_avg_pct: 12.63
      hours_min: 900
      hours_typical: 1400
      hours_max: 2000
      sessions_per_year: 1
      next_dates_ko: "2026년 8월 연 1회 실시"
      fee:
        amount: 0
        currency: KRW
        krw_approx: 0
        fx_date: "2026-11-11"
  exemptions_ko: "국세 경력 공무원 경력 연수에 따라 1차 또는 2차 일부 과목 면제"
  total:
    hours_min: 1700
    hours_typical: 2600
    hours_max: 3600
    hours_basis: provider
    hours_basis_note_ko: "전업 수험생 평균 수험기간(2~3년, 일 8시간) 기준"
    min_calendar_months: 16
    pass_rate_avg_pct: 15.07

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['한국세무사회 수습교육비 약 500,000 KRW']

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 4
  hours_score: 5
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: false
    non_written_assessment: true
  structure_score: 4
  level: 4
  rationale_ko: "방대한 세법전과 조세 판례를 주관식으로 서술해야 하는 고난도 평가로 2차 합격률이 12%대에 불과하며 6개월 실무수습이 필수입니다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.q-net.or.kr/site/semu"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee', 'pass_rate']
  - url: "https://www.kacpta.or.kr"
    accessed: "2026-11-11"
    type: official
    covers: ['award']
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

## kr_fin_acct_mgr

```yaml
# ---------- A. Identity ----------
id: kr_fin_acct_mgr
name_ko: "재경관리사"
name_orig: "Certified Financial & Accounting Manager"
tier: 1
region: KR
exam_type: certificate
domain: ['accounting_tax']
issuer: "삼일회계법인 (Samil PwC)"
official_url: "https://www.samilexam.com"
status: active
summary_ko: "삼일회계법인에서 주관하는 국내 최고 권위의 회계·세무 민간자격(국가공인) 시험으로 재무회계, 세무회계, 원가관리회계 전 영역의 종합 지식을 평가합니다."
usage_ko: "대기업, 공공기관, 중견기업의 재무·회계·기획팀 채용 시 필수 우대 자격이며, 공기업 채용 서류전형 가산점이 널리 인정됩니다."

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
  english_level_reason: "Conducted in Korean with standard K-IFRS accounting terminology."
  test_countries: ['KR']
  retake_limit_ko: "연 8회 시행으로 자유로운 재응시 가능."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: false
  work_years_min: 0
  work_fields_accepted: ['any']
  other_requirements_ko: []
  validity_ko: "최종 합격 시 영구 유효 (별도 갱신 불요)."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 필기시험 (3과목 동시 평가)"
      subjects_ko: ['재무회계(K-IFRS)', '세무회계(법인·소득·부가세)', '원가관리회계']
      format: mcq
      question_summary_ko: "객관식 4지선다형 총 120문항 (과목당 40문항, 150분 동시 진행)"
      duration_min: 150
      passing_rule_ko: "3과목 모두 과목별 100점 만점 기준 70점 이상 득점 시 합격 (한 과목이라도 70점 미만 시 불합격)"
      pass_rates:
        - period: "2025"
          rate_pct: 36.2
          examinees: 38500
        - period: "2024"
          rate_pct: 34.8
          examinees: 41200
        - period: "2023"
          rate_pct: 35.5
          examinees: 39800
      pass_rate_avg_pct: 35.5
      hours_min: 140
      hours_typical: 240
      hours_max: 360
      sessions_per_year: 8
      next_dates_ko: "2026년 1월, 3월, 5월, 6월, 7월, 9월, 11월, 12월 연 8회 실시"
      fee:
        amount: 70000
        currency: KRW
        krw_approx: 70000
        fx_date: "2026-11-11"
  exemptions_ko: "해당 없음 (전 과목 일괄 응시)"
  total:
    hours_min: 140
    hours_typical: 240
    hours_max: 360
    hours_basis: provider
    hours_basis_note_ko: "비전공자 합격자 평균 수험기간(일 3시간, 2~3개월) 기준"
    min_calendar_months: 2
    pass_rate_avg_pct: 35.5

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['자격증서 발급비 5,000 KRW']

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 3
  hours_score: 3
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 2
  level: 3
  rationale_ko: "재무회계, 세무회계, 원가관리회계 3과목 모두 70점을 넘어야 하는 엄격한 절대평가 기준을 가지며, 합격률은 35% 내외인 중급 대표 자격입니다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.samilexam.com"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee']
  - url: "https://pqi.or.kr"
    accessed: "2026-11-11"
    type: statistics
    covers: ['pass_rate']
  - url: "https://fn.hackers.com"
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

## kr_ins_solicitor

```yaml
# ---------- A. Identity ----------
id: kr_ins_solicitor
name_ko: "보험설계사(생명보험·손해보험·제3보험)"
name_orig: "Insurance Solicitor (Life, Non-Life & Third-Sector)"
tier: 1
region: KR
exam_type: license
domain: ['insurance']
issuer: "생명보험협회·손해보험협회·보험연수원"
official_url: "https://www.inice.or.kr"
status: active
summary_ko: "보험업법에 근거하여 보험회사를 위해 보험계약의 체결을 중개하는 법정 자격입니다. 생명보험, 손해보험, 제3보험(상해·질병·간병) 영역으로 구분되며, 보험계약법 및 보험상품 윤리를 다룹니다."
usage_ko: "보험사 전속 설계사, 독립보험대리점(GA), 금융기관 방카슈랑스 창구에서 보험상품 판매를 대리·중개하기 위한 법적 필수 자격입니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "사전 등록교육 이수자 경로"
      age_min: null
      age_max: null
      education_accepted: ['any']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "보험업법 제84조의 규정에 따른 등록결격사유가 없고 지정 연수기관에서 등록 전 교육을 이수한 자는 누구나 응시할 수 있다."
  extra_checks_ko: ['보험업법상 결격사유(파산자, 금치산자, 금융관련 범죄 전력자) 부존재 확인', '보험연수원 등 공인 연수기관 사전등록 교육(약 30시간) 이수 필수']
  exam_languages: ['ko']
  english_level_needed: none
  english_level_reason: "Conducted in Korean."
  test_countries: ['KR']
  retake_limit_ko: "매월 수회 상시 실시되므로 불합격 시 즉시 재응시 가능."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: ['insurance']
  other_requirements_ko: ['금융감독원 또는 보험협회 공식 설계사 등록']
  validity_ko: "등록 유지 시 계속 유효, 2년 이상 영업 중단 시 보수교육 이수 필요."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 자격시험 (종목별 분리 또는 통합 응시)"
      subjects_ko: ['보험이론 및 직무윤리', '보험법규', '생명보험/손해보험/제3보험 상품실무']
      format: mcq
      question_summary_ko: "객관식 4지선다형 총 50문항 (각 종목당 50분)"
      duration_min: 100
      passing_rule_ko: "100점 만점 기준 60점 이상 득점 시 합격"
      pass_rates:
        - period: "2025"
          rate_pct: 72.5
          examinees: 85000
        - period: "2024"
          rate_pct: 71.8
          examinees: 89000
        - period: "2023"
          rate_pct: 73.2
          examinees: 86500
      pass_rate_avg_pct: 72.5
      hours_min: 20
      hours_typical: 45
      hours_max: 70
      sessions_per_year: 36
      next_dates_ko: "연중 매월 2~4회 상시 CBT 시행"
      fee:
        amount: 40000
        currency: KRW
        krw_approx: 40000
        fx_date: "2026-11-11"
  exemptions_ko: "동종업계 경력자 등 일부 과목 면제 제도 운영"
  total:
    hours_min: 20
    hours_typical: 45
    hours_max: 70
    hours_basis: provider
    hours_basis_note_ko: "보험연수원 사이버 교육(30시간) 및 모의고사 풀이 1~2주 학습시간 집계"
    min_calendar_months: 1
    pass_rate_avg_pct: 72.5

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['사전 교육비 20,000 KRW ~ 30,000 KRW (보험사 대납 일반적)']

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 1
  hours_score: 1
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: true
  structure_score: 3
  level: 2
  rationale_ko: "합격률이 72%를 상회하고 준비 기간이 1개월 미만으로 매우 짧으나, 법정 의무 사전연수와 협회 등록 절차를 고려해 2단계(초급)로 분류됩니다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.inice.or.kr"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee']
  - url: "https://www.insure.or.kr"
    accessed: "2026-11-11"
    type: official
    covers: ['award', 'pass_rate']
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

## kr_bank_ncs

```yaml
# ---------- A. Identity ----------
id: kr_bank_ncs
name_ko: "주요 시중은행 신입행원 필기시험(NCS·금융상식)"
name_orig: "Korean Commercial Banks Joint Recruitment Written Exam"
tier: 2
region: KR
exam_type: employment_exam
domain: ['banking_credit_fx', 'financial_planning']
issuer: "KB국민·신한·하나·우리·NH농협은행 등 주요 시중은행"
official_url: "https://www.kbi.or.kr"
status: active
summary_ko: "국내 5대 시중은행 신입 행원 공채 필기시험으로, NCS 직업기초능력평가(의사소통, 수리, 문제해결)와 금융·경제 시사상식 및 디지털 역량을 평가합니다."
usage_ko: "시중은행 일반직 신입 행원 최종 면접 대상자 선발의 핵심 관문입니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "서류전형 통과자 경로"
      age_min: null
      age_max: null
      education_accepted: ['any']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "서류전형 합격자에 한하여 필기시험 응시 자격 부여."
  extra_checks_ko: ['은행별 자기소개서 및 자격증 서류전형 합격 필수']
  exam_languages: ['ko']
  english_level_needed: none
  english_level_reason: "Conducted in Korean."
  test_countries: ['KR']
  retake_limit_ko: "은행별 반기(상·하반기) 공채마다 개별 응시."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: ['any']
  other_requirements_ko: ['필기 합격 후 1차 직무면접 및 2차 임원면접 최종 통과']
  validity_ko: "합격 시 정규직 입행."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 필기시험 (NCS + 금융경제상식 + 디지털)"
      subjects_ko: ['NCS 직업기초능력평가(의사소통/수리/문제해결)', '직무수행능력평가(경제/경영/금융상식)', '디지털 리터러시']
      format: mcq
      question_summary_ko: "객관식 총 80~100문항 (총 90~120분)"
      duration_min: 100
      passing_rule_ko: "고득점순 채용 인원의 3~5배수 선발"
      pass_rates:
        - period: "2025"
          rate_pct: 18.0
          examinees: 25000
        - period: "2024"
          rate_pct: 17.2
          examinees: 27000
        - period: "2023"
          rate_pct: 17.5
          examinees: 26000
      pass_rate_avg_pct: 17.57
      hours_min: 200
      hours_typical: 350
      hours_max: 500
      sessions_per_year: 2
      next_dates_ko: "상반기(4~5월), 하반기(10~11월) 은행별 시행"
      fee:
        amount: 0
        currency: KRW
        krw_approx: 0
        fx_date: "2026-11-11"
  exemptions_ko: "우수 인턴 수료자 또는 특정 자격증(CPA, CFA 등) 소지자 서류 면제"
  total:
    hours_min: 200
    hours_typical: 350
    hours_max: 500
    hours_basis: provider
    hours_basis_note_ko: "NCS 문제풀이 및 테셋(TESAT)/매경TEST 경제상식 학습 평균 3~4개월(일 3시간) 소요"
    min_calendar_months: 3
    pass_rate_avg_pct: 17.57

# ---------- E. Other costs ----------
cost:
  other_fees_ko: []

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 4
  hours_score: 3
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: true
  structure_score: 3
  level: 3
  rationale_ko: "객관식 평가이나 17%대의 치열한 선발 배수와 다단계 심층 면접이 수반되는 3단계(중급) 채용 관문입니다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.kbi.or.kr"
    accessed: "2026-11-11"
    type: official
    covers: ['structure', 'hours']
  - url: "https://www.linkareer.com"
    accessed: "2026-11-11"
    type: statistics
    covers: ['pass_rate', 'eligibility']
confidence:
  eligibility: high
  award: high
  structure: high
  hours: high
  pass_rate: medium
  fee: high
as_of: "2026-11-11"
unknown_reasons: []
```

## kr_bok_g5

```yaml
# ---------- A. Identity ----------
id: kr_bok_g5
name_ko: "한국은행 종합기획직원(G5) 채용 필기시험"
name_orig: "Bank of Korea Junior Economist Examination (G5)"
tier: 2
region: KR
exam_type: employment_exam
domain: ['banking_credit_fx', 'securities_investment']
issuer: "한국은행 (Bank of Korea)"
official_url: "https://www.bok.or.kr"
status: active
summary_ko: "대한민국 중앙은행인 한국은행의 정규직 종합기획직원(G5) 입사를 위한 필기시험입니다. 경제학, 경영학 등 전문 직무과목에 대한 대학원 석사 수준의 고난도 학술시험과 일반논술을 평가합니다."
usage_ko: "한국은행 정규직 입사 및 통화신용정책 수립, 금융안정 조사 연구원 임용."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: citizens_only
  nationality_countries: ['KR']
  paths:
    - label_ko: "대한민국 국적 및 공인영어 충족자 경로"
      age_min: null
      age_max: null
      education_accepted: ['any']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "연령, 학력에 제한 없이 지원 가능하나 대한민국 국적자로서 공인영어시험 기준점수 이상을 획득해야 한다."
  extra_checks_ko: ['대한민국 국적자 (중앙은행 보안 규정)', '공인영어성적 기준 충족 (TOEIC 750점 또는 TEPS 322점 등 이상)']
  exam_languages: ['ko']
  english_level_needed: basic
  english_level_reason: "TOEIC 750+ required for application."
  test_countries: ['KR']
  retake_limit_ko: "연 1회 정기 공채."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: ['any']
  other_requirements_ko: ['서류전형, 1차 필기시험, 2차 면접전형(실무면접, 심층면접, 신체검사) 최종 합격']
  validity_ko: "합격 시 정규직 채용."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 전공 필기시험 (전공학술 및 일반논술)"
      subjects_ko: ['전공학술(경제학: 미시/거시/계량/국제 또는 경영학: 재무관리/회계학)', '일반논술(금융경제 시사 및 사회 이슈)']
      format: essay
      question_summary_ko: "주관식 서술·계산형 전공학술 300점 (150분) + 일반논술 100점 (60분), 총 210분"
      duration_min: 210
      passing_rule_ko: "고득점순 채용예정인원의 약 1.5~2배수 필기 합격자 선발"
      pass_rates:
        - period: "2025"
          rate_pct: 8.5
          examinees: 3200
        - period: "2024"
          rate_pct: 7.9
          examinees: 3450
        - period: "2023"
          rate_pct: 8.2
          examinees: 3300
      pass_rate_avg_pct: 8.2
      hours_min: 1000
      hours_typical: 1800
      hours_max: 2800
      sessions_per_year: 1
      next_dates_ko: "2026년 10월 연 1회 실시"
      fee:
        amount: 0
        currency: KRW
        krw_approx: 0
        fx_date: "2026-11-11"
  exemptions_ko: "해당 없음"
  total:
    hours_min: 1000
    hours_typical: 1800
    hours_max: 2800
    hours_basis: provider
    hours_basis_note_ko: "행정고시 재경직 수준의 경제학/경영학 전업 수험 기간(1.5년~2년, 약 1,800시간) 반영"
    min_calendar_months: 12
    pass_rate_avg_pct: 8.2

# ---------- E. Other costs ----------
cost:
  other_fees_ko: []

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 5
  hours_score: 5
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: false
    non_written_assessment: true
  structure_score: 4
  level: 5
  rationale_ko: "필기시험 합격률이 8%대에 불과하고 행정고시급 학술 논술과 다단계 면접이 수반되는 5단계(최상급) 금융 채용 시험입니다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.bok.or.kr"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee', 'award']
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

## kr_credit_mgr

```yaml
# ---------- A. Identity ----------
id: kr_credit_mgr
name_ko: "신용관리사"
name_orig: "Certified Credit Manager"
tier: 2
region: KR
exam_type: certificate
domain: ['banking_credit_fx']
issuer: "한국신용정보협회"
official_url: "https://www.kcia.or.kr"
status: active
summary_ko: "부실채권의 예방, 채권추심, 사후관리 및 채권보전과 채무자 회생 절차를 합법적으로 관리·회수하는 신용관리 전문자격입니다."
usage_ko: "신용정보회사(NICE, KCB, 고려신용정보 등), 금융기관 여신관리·채권추심팀, 기업 재무팀 채권관리 담당자의 우대 자격입니다."

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
      source_text: "응시자격에는 연령, 학력, 경력의 제한이 없다."
  extra_checks_ko: []
  exam_languages: ['ko']
  english_level_needed: none
  english_level_reason: "Conducted in Korean."
  test_countries: ['KR']
  retake_limit_ko: "연 1회 시행."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: false
  work_years_min: 0
  work_fields_accepted: ['any']
  other_requirements_ko: []
  validity_ko: "취득 후 5년마다 보수교육 이수."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 필기시험"
      subjects_ko: ['채권관리방법론', '강제집행실무', '신용관리실무', '신용관계법규']
      format: mcq
      question_summary_ko: "객관식 5지선다형 총 100문항 (100분)"
      duration_min: 100
      passing_rule_ko: "과목별 40점 이상, 전 과목 평균 60점 이상 득점"
      pass_rates:
        - period: "2025"
          rate_pct: 36.8
          examinees: 3100
        - period: "2024"
          rate_pct: 35.5
          examinees: 3300
        - period: "2023"
          rate_pct: 37.0
          examinees: 3250
      pass_rate_avg_pct: 36.43
      hours_min: 80
      hours_typical: 150
      hours_max: 220
      sessions_per_year: 1
      next_dates_ko: "2026년 8월 연 1회 실시"
      fee:
        amount: 55000
        currency: KRW
        krw_approx: 55000
        fx_date: "2026-11-11"
  exemptions_ko: "해당 없음"
  total:
    hours_min: 80
    hours_typical: 150
    hours_max: 220
    hours_basis: provider
    hours_basis_note_ko: "민사집행법 및 채권회수 실무 평균 2개월(일 2~3시간) 수험"
    min_calendar_months: 2
    pass_rate_avg_pct: 36.43

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['자격증서 발급비 5,000 KRW']

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 3
  hours_score: 2
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 2
  level: 2
  rationale_ko: "민사집행법과 채무자회생법 등 법률 암기량이 있으나 객관식 60점 합격제에 합격률이 36% 수준인 2단계(초급~중급) 자격입니다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.kcia.or.kr"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee', 'award']
  - url: "https://pqi.or.kr"
    accessed: "2026-11-11"
    type: statistics
    covers: ['pass_rate']
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

## kr_customs_broker

```yaml
# ---------- A. Identity ----------
id: kr_customs_broker
name_ko: "관세사"
name_orig: "Licensed Customs Broker"
tier: 2
region: KR
exam_type: license
domain: ['banking_credit_fx', 'accounting_tax']
issuer: "관세청 / 한국산업인력공단 (Q-Net)"
official_url: "https://www.q-net.or.kr/site/customs"
status: active
summary_ko: "수출입 물품의 통관, 품목분류(HS 코드), 관세평가, FTA 원산지 증명, 관세 환급 및 무역 분쟁을 대리하는 국가 8대 전문직 면허입니다."
usage_ko: "관세사 법인 개업, 통관 취업, 대형 물류기업 통관본부, 종합상사 및 회계법인 무역자문팀 핵심 인력으로 활동합니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "공인영어성적 제출자 경로"
      age_min: null
      age_max: null
      education_accepted: ['any']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "학력, 연령, 경력에 제한이 없으나 공인어학시험 기준점수(TOEIC 700점 등) 이상을 제출해야 한다."
  extra_checks_ko: ['공인영어시험 성적표 필수 (TOEIC 700점 이상 등)', '관세사법상 결격사유 없는 자']
  exam_languages: ['ko']
  english_level_needed: basic
  english_level_reason: "TOEIC 700+ required for 1st stage; trade English included."
  test_countries: ['KR']
  retake_limit_ko: "1차 합격자는 차기 1회에 한하여 1차 시험 면제."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0.5
  work_fields_accepted: ['accounting_tax']
  other_requirements_ko: ['한국관세사회 주관 6개월 실무수습 이수 후 관세청 등록']
  validity_ko: "실무수습 및 등록 완료 시 영구 유효."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "1차 필기시험 (객관식)"
      subjects_ko: ['관세법개론', '무역영어', '내국소비세법', '회계학(재무회계/원가관리회계)', '공인영어 대체']
      format: mcq
      question_summary_ko: "객관식 5지선다형 총 160문항 (160분)"
      duration_min: 160
      passing_rule_ko: "매 과목 40점 이상, 전 과목 평균 60점 이상 득점"
      pass_rates:
        - period: "2025"
          rate_pct: 24.5
          examinees: 3800
        - period: "2024"
          rate_pct: 23.8
          examinees: 4100
        - period: "2023"
          rate_pct: 25.0
          examinees: 3950
      pass_rate_avg_pct: 24.43
      hours_min: 600
      hours_typical: 900
      hours_max: 1300
      sessions_per_year: 1
      next_dates_ko: "2026년 3월 연 1회 실시"
      fee:
        amount: 20000
        currency: KRW
        krw_approx: 20000
        fx_date: "2026-11-11"
    - name_ko: "2차 필기시험 (주관식 논술형)"
      subjects_ko: ['관세법(환급특례법 포함)', '관세율표 및 상품학(HS)', '관세평가', '무역실무(대외무역법/외국환거래법)']
      format: essay
      question_summary_ko: "주관식 논술 4과목 (과목당 80분, 총 320분)"
      duration_min: 320
      passing_rule_ko: "매 과목 40점 이상, 전 과목 평균 60점 이상 득점 (미달 시 최소선발인원 약 90명 고득점순 선발)"
      pass_rates:
        - period: "2025"
          rate_pct: 11.8
          examinees: 850
        - period: "2024"
          rate_pct: 10.9
          examinees: 920
        - period: "2023"
          rate_pct: 12.1
          examinees: 880
      pass_rate_avg_pct: 11.6
      hours_min: 800
      hours_typical: 1300
      hours_max: 1900
      sessions_per_year: 1
      next_dates_ko: "2026년 6월 연 1회 실시"
      fee:
        amount: 0
        currency: KRW
        krw_approx: 0
        fx_date: "2026-11-11"
  exemptions_ko: "관세 행정 경력 공무원 1차 또는 2차 일부 과목 면제"
  total:
    hours_min: 1400
    hours_typical: 2200
    hours_max: 3200
    hours_basis: provider
    hours_basis_note_ko: "전업 수험생 평균 수험기간(2~3년, 일 8~10시간) 기준"
    min_calendar_months: 16
    pass_rate_avg_pct: 18.02

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['실무수습비 약 300,000 KRW']

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 4
  hours_score: 5
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: false
    non_written_assessment: true
  structure_score: 4
  level: 4
  rationale_ko: "방대한 HS 품목분류 암기와 관세평가 논술, 연간 단 90명 내외를 선발하는 11%대의 2차 합격률로 4단계(고급) 자격입니다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.q-net.or.kr/site/customs"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee', 'pass_rate']
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

## kr_fss_exam

```yaml
# ---------- A. Identity ----------
id: kr_fss_exam
name_ko: "금융감독원 종합기획직원 채용 필기시험"
name_orig: "Financial Supervisory Service Professional Recruitment Exam"
tier: 2
region: KR
exam_type: employment_exam
domain: ['banking_credit_fx', 'securities_investment', 'insurance', 'accounting_tax']
issuer: "금융감독원 (FSS)"
official_url: "https://www.fss.or.kr"
status: active
summary_ko: "금융기관 감독 및 검사를 총괄하는 최고 금융감독기구인 금융감독원의 정규직 입사를 위한 1차·2차 전문 필기시험입니다. 전공 객관식 및 NCS(1차)와 고난도 전공 주관식 약술·논술(2차)로 진행됩니다."
usage_ko: "금융감독원 정규직 채용 및 금융회사 건전성 감독·검사·소비자보호 조사역 임용."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: citizens_only
  nationality_countries: ['KR']
  paths:
    - label_ko: "대한민국 국적 및 공인영어 충족자 경로"
      age_min: null
      age_max: null
      education_accepted: ['any']
      work_years_min: 0
      work_fields_accepted: ['any']
      source_text: "연령, 학력에 제한 없이 지원 가능하나 대한민국 국적자로서 공인영어시험 기준 이상을 충족해야 한다."
  extra_checks_ko: ['대한민국 국적자 (금융감독기관 공무 수행 요건)', '공인어학성적 기준 충족 (TOEIC 700점 등 이상)']
  exam_languages: ['ko']
  english_level_needed: basic
  english_level_reason: "TOEIC 700+ prerequisite."
  test_countries: ['KR']
  retake_limit_ko: "연 1회 실시."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: ['any']
  other_requirements_ko: ['1차 필기, 2차 필기, 1·2차 심층 면접 통과 후 최종 임용']
  validity_ko: "합격 시 정규직 채용."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "1차 필기시험 (전공 객관식 및 직업기초능력)"
      subjects_ko: ['전공지식 객관식(경영학, 경제학, 법학 등)', 'NCS 직업기초능력평가']
      format: mcq
      question_summary_ko: "전공 객관식 40문항 + NCS 40문항 (총 100분)"
      duration_min: 100
      passing_rule_ko: "고득점자순 선발예정인원의 약 10배수 선발"
      pass_rates:
        - period: "2025"
          rate_pct: 14.5
          examinees: 4500
        - period: "2024"
          rate_pct: 13.8
          examinees: 4800
        - period: "2023"
          rate_pct: 14.2
          examinees: 4650
      pass_rate_avg_pct: 14.17
      hours_min: 400
      hours_typical: 700
      hours_max: 1000
      sessions_per_year: 1
      next_dates_ko: "2026년 9월 연 1회 실시"
      fee:
        amount: 0
        currency: KRW
        krw_approx: 0
        fx_date: "2026-11-11"
    - name_ko: "2차 필기시험 (전공 주관식 논술 및 약술)"
      subjects_ko: ['전공 주관식 약술 및 논술(경영/경제/법학)', '금융시사 일반논술']
      format: essay
      question_summary_ko: "전공 주관식 약술·논술 200점 (180분)"
      duration_min: 180
      passing_rule_ko: "고득점자순 선발예정인원의 약 2배수 선발"
      pass_rates:
        - period: "2025"
          rate_pct: 21.0
          examinees: 650
        - period: "2024"
          rate_pct: 20.2
          examinees: 700
        - period: "2023"
          rate_pct: 20.8
          examinees: 680
      pass_rate_avg_pct: 20.67
      hours_min: 600
      hours_typical: 1000
      hours_max: 1500
      sessions_per_year: 1
      next_dates_ko: "2026년 10월 연 1회 실시"
      fee:
        amount: 0
        currency: KRW
        krw_approx: 0
        fx_date: "2026-11-11"
  exemptions_ko: "해당 없음"
  total:
    hours_min: 1000
    hours_typical: 1700
    hours_max: 2500
    hours_basis: provider
    hours_basis_note_ko: "CPA 1차 합격자 또는 고시 수험생 기준 전공 및 NCS 집중 대비(1년~1.5년, 약 1,700시간)"
    min_calendar_months: 12
    pass_rate_avg_pct: 17.42

# ---------- E. Other costs ----------
cost:
  other_fees_ko: []

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 4
  hours_score: 5
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: false
    non_written_assessment: true
  structure_score: 4
  level: 4
  rationale_ko: "1차 객관식과 2차 심층 전공 논술을 연속 통과해야 하며 금융권 최고 수준의 경쟁률을 보이는 4단계(고급) 채용 시험입니다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.fss.or.kr"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee', 'award']
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

## kr_var_ins

```yaml
# ---------- A. Identity ----------
id: kr_var_ins
name_ko: "변액보험판매관리사"
name_orig: "Variable Life Insurance Sales Manager"
tier: 2
region: KR
exam_type: license
domain: ['insurance', 'securities_investment']
issuer: "생명보험협회 (KLIA)"
official_url: "https://www.insure.or.kr"
status: active
summary_ko: "보험료의 일부를 펀드(주식·채권)에 투자하여 운용 실적에 따라 투자수익을 배분하는 변액보험 상품을 전문적으로 상담·판매할 수 있는 법정 전문자격입니다."
usage_ko: "생명보험사 영업직, 방카슈랑스 창구, GA 소속 설계사의 변액종신/변액연금보험 판매 필수 자격입니다."

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: "생명보험설계사 등록자 경로"
      age_min: null
      age_max: null
      education_accepted: ['any']
      work_years_min: 0
      work_fields_accepted: ['insurance']
      source_text: "생명보험 관계업무에 종사하는 자로서 생명보험설계사 자격을 등록한 자."
  extra_checks_ko: ['생명보험설계사 자격 보유 및 등록 필수']
  exam_languages: ['ko']
  english_level_needed: none
  english_level_reason: "Conducted in Korean."
  test_countries: ['KR']
  retake_limit_ko: "매월 시행되므로 즉시 재응시 가능."

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: ['insurance']
  other_requirements_ko: ['생명보험협회 변액보험 판매자 등록']
  validity_ko: "생명보험설계사 자격 유지 시 영구 유효."

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: "단일 필기시험"
      subjects_ko: ['금융시장 및 금융상품', '변액보험의 운영 및 법규', '변액보험 세무 및 직무윤리']
      format: mcq
      question_summary_ko: "객관식 4지선다형 총 40문항 (60분)"
      duration_min: 60
      passing_rule_ko: "100점 만점 기준 60점 이상 득점 시 합격"
      pass_rates:
        - period: "2025"
          rate_pct: 55.0
          examinees: 32000
        - period: "2024"
          rate_pct: 54.2
          examinees: 34000
        - period: "2023"
          rate_pct: 56.1
          examinees: 33500
      pass_rate_avg_pct: 55.1
      hours_min: 30
      hours_typical: 60
      hours_max: 90
      sessions_per_year: 12
      next_dates_ko: "매월 1회 정기 시행"
      fee:
        amount: 25000
        currency: KRW
        krw_approx: 25000
        fx_date: "2026-11-11"
  exemptions_ko: "해당 없음"
  total:
    hours_min: 30
    hours_typical: 60
    hours_max: 90
    hours_basis: provider
    hours_basis_note_ko: "생명보험설계사 취득 후 추가 2~3주(일 2시간) 학습"
    min_calendar_months: 1
    pass_rate_avg_pct: 55.1

# ---------- E. Other costs ----------
cost:
  other_fees_ko: ['등록비 약 20,000 KRW']

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 2
  hours_score: 1
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: true
  structure_score: 3
  level: 2
  rationale_ko: "선행 생명보험설계사 자격이 필요하지만 40문항으로 문항 수가 적고 합격률이 55% 수준인 2단계(초급) 자격입니다."

# ---------- G. Sources and confidence ----------
sources:
  - url: "https://www.insure.or.kr"
    accessed: "2026-11-11"
    type: official
    covers: ['eligibility', 'structure', 'fee', 'pass_rate', 'award']
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

