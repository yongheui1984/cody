# Korea banking and credit exams (KBI)

Research date: 2026-11-11. Records follow the Section 6 schema. The English batch log is at the end.

## kr_bank_fp

```yaml
# ---------- A. Identity ----------
id: kr_bank_fp
name_ko: 자산관리사(FP)
name_orig: 자산관리사(FP)
tier: 1
region: KR
exam_type: certificate
domain: [financial_planning, banking_credit_fx]
issuer: 한국금융연수원 (Korea Banking Institute)
official_url: https://www.kbi.or.kr/platformWeb/Qual.do?cmd=openPage&pageName=qualInfo&p_iQlfn=04
status: active
summary_ko: 한국금융연수원이 시행하는 국가공인 민간자격이다. 금융위원회 제2025-6호, 등록번호 2008-0441이며, 영어 명칭은 Financial Planner(FP)다. 2026-11-11 기준 제69회 시험이 2026-11-14로 잡혀 있어 같은 이름으로 시행 중이다.
usage_ko: 은행 등 금융기관의 재테크팀이나 PB팀에서 고객의 수입, 지출, 자산, 부채, 가족 상황을 모아 재무목표에 맞춘 자산설계와 상담을 하는 직무를 다룬다. 특정 업무를 독점하는 면허가 아니라 국가공인 민간자격이며, 합격 후 연수원 등록을 거쳐 자격을 취득한다.

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
      source_text: "The KBI exam guide states that eligibility is unrestricted (응시자격 제한없음) and does not set age, education, work experience, work field, or nationality conditions."
  extra_checks_ko: []
  exam_languages: [ko]
  english_level_needed: none
  english_level_reason: The official guide describes a Korean five-choice written paper and does not set an English section.
  test_countries: [KR]
  retake_limit_ko: 불합격 횟수 제한은 시험안내에 없다. 1부 또는 2부만 합격하면 부분합격일 다음부터 연속 3회, 2년 안의 시험에서 그 부를 면제한다. 2009년 제18회부터 적용된다.

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko:
    - "합격 후 한국금융연수원에 등록해야 자격취득 절차가 끝난다. 시험안내는 응시, 합격, 등록, 자격취득 순서로 적는다."
  time_limit_ko: 합격 후 등록 기한은 열린 시험안내에 없다.
  validity_ko: 열린 시험안내에는 유효기간, 정기 갱신, 보수교육 주기가 없다. 자격증 온라인 발급은 무료이고, 방문 발급은 4,000원, 우편 발급은 등기우편료 포함 7,000원이다.

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: 1부·2부 동일일 시험
      subjects_ko:
        - "1부 자산관리 기본지식 40점: 재무설계 프로세스 10, 경제동향분석 및 예측 15, 법률 15"
        - "1부 세무설계 40점: 소득세 4, 금융소득종합과세 8, 양도소득세 8, 상속·증여세 16, 취득세·재산세·종합부동산세 4"
        - "1부 보험 및 은퇴설계 20점: 보험설계 10, 은퇴설계 10"
        - "2부 금융자산 투자설계 70점: 금융상품 16, 주식투자 15, 채권투자 15, 파생금융상품투자 12, 투자설계 프로세스 12"
        - "2부 비금융자산 투자설계 30점: 부동산 상담 사전 준비 9, 시장 및 정책 분석 9, 투자전략 9, 보유자산관리 전략 3"
      format: mcq
      question_summary_ko: 필기 객관식 5지선다. 1부 100분(09:00-10:40), 2부 100분(11:00-12:40), 합계 200점 200분. 괄호 안 숫자는 공식 표의 개별 배점이며 문항 수는 시험안내에 없다. 수험표, 신분증, 필기구, 일반 계산기가 필요하다.
      duration_min: 200
      passing_rule_ko: 과목마다 100점 만점 기준 40점 미만이 없고, 1부 평균과 2부 평균이 각각 60점 이상이어야 한다. 평균은 총득점을 총배점으로 나눈 백분율이다. 한 부만 기준을 넘기면 부분합격이다.
      pass_rates:
        - period: 2025
          rate_pct: 30.34
          examinees: 4147
        - period: 2024
          rate_pct: 26.35
          examinees: 3977
        - period: 2023
          rate_pct: 31.14
          examinees: 4005
        - period: 2022
          rate_pct: 29.03
          examinees: 4358
        - period: 2021
          rate_pct: 28.24
          examinees: 5471
      pass_rate_avg_pct: 29.02
      hours_min: 125
      hours_typical: 125
      hours_max: 125
      sessions_per_year: 3
      next_dates_ko: "2026년 3회. 제67회 시험 2026-04-11(접수 2026-03-03 10:00-03-10 20:00, 추가접수 2026-03-16-03-18, 발표 2026-04-24, 서울·대전·대구·부산·광주·전주·제주). 제68회 시험 2026-07-25(접수 2026-06-16-06-23, 추가접수 2026-06-29-07-01, 발표 2026-08-07). 제69회 시험 2026-11-14(접수 2026-10-06-10-13, 추가접수 2026-10-19-10-21, 발표 2026-11-27). 기준일에는 제69회 접수가 마감되었고 시험은 아직 전이었다. 2027년 일정은 회차 목록에 없다."
      fee:
        amount: 55000
        currency: KRW
        krw_approx: 55000
        fx_date: 2026-11-11
  exemptions_ko: "1부만 또는 2부만 합격한 사람은 부분합격일 직후 연속 3회, 2년 이내 시험에서 합격한 부를 면제한다. 2009년 제18회부터 적용된다. 다른 자격에 따른 과목 면제는 시험안내에 없다."
  total:
    hours_min: 125
    hours_typical: 125
    hours_max: 125
    hours_basis: provider
    hours_basis_note_ko: "연수원 시험안내에는 권장 학습시간이 없다. 이패스코리아 2025 은행FP 1,2부 합격지원반(이론+문풀) 상세 페이지가 교육시간 125시간, 강의 125교시라고 적는다. 빠른 학습과 오랜 학습을 나눈 수치는 그 페이지에 없어 세 칸을 125로 두었다. 강의 밖 자습은 포함되지 않는다. 2026년 과정 목록에는 84교시 합격지원반도 있으나 그 목록은 시간으로 적지 않아 숫자로 쓰지 않았다."
    min_calendar_months: 1
    pass_rate_avg_pct: 29.02

# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "1부만 또는 2부만 응시하는 검정료는 각각 28,000원이다. 두 부의 합은 56,000원으로, 전과목 55,000원보다 1,000원 많다."
    - "자격증 온라인 발급 무료, 방문 발급 4,000원, 우편 발급 7,000원(등기우편료 포함)."
    - "수험 참고도서는 선택이다. 연수원 서점 정가는 자산관리 기본지식과 세무설계, 금융자산 투자설계(Ⅱ) 각 20,000원, 보험 및 은퇴설계, 금융자산 투자설계(Ⅰ), 비금융자산 투자설계 각 19,000원이다."

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 4
  hours_score: 2
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 2
  level: 3
  rationale_ko: "2021-2025년 연간 합격률 평균 29.02%로 합격률 점수는 4이고, 수험기관 종합 강의 125시간으로 학습시간 점수는 2다. 과목이 5개이고 객관식만 있으며 같은 날 1·2부를 보는 한 단계라 구조 점수는 2다. 세 점수의 평균 2.67을 반올림하면 3이다."

# ---------- G. Sources and confidence ----------
sources:
  - url: https://www.kbi.or.kr/platformWeb/Qual.do?cmd=openPage&pageName=qualInfo&p_iQlfn=04
    accessed: 2026-11-11
    type: official
    covers: [eligibility, award, structure, fee]
  - url: https://www.kbi.or.kr/platformWeb/Qual.do?cmd=scheduleView
    accessed: 2026-11-11
    type: official
    covers: [structure, fee]
  - url: https://www.pqi.or.kr/inf/qul/infQulBasDetail.do?qulId=596
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: https://m.epasskorea.com/lecture/lecture_view_bundle.asp?Cate_IDX=100301&Lec_cm_LecType=&Lec_IDX=158164
    accessed: 2026-11-11
    type: provider
    covers: [hours]
confidence:
  eligibility: high
  award: medium
  structure: high
  hours: medium
  pass_rate: high
  fee: high
as_of: 2026-11-11
unknown_reasons:
  - "question count: the official subject table labels the parenthetical figures as individual point weights, not item counts."
  - "official recommended study hours: the KBI guide has no hour figure. Only one provider course stated 125 hours, so min and max were not separately published."
  - "validity, renewal, and continuing education: the opened exam guide has the registration step and certificate fees, and no expiry or education cycle."
  - "2027 sitting: the session dropdown on 2026-11-11 ends at the 69th exam."
notes_ko: "응시 현장에서 은행FP로 불리던 시험의 현재 공식 이름은 자산관리사(FP)다. 폐지되거나 다른 자격으로 합쳐진 기록이 열린 페이지에는 없다. 합격률은 민간자격정보서비스에 발급기관이 입력한 연간 전체 합격률이며, 회차별 합격률은 없다. 접수자는 2025년 5,906명, 2024년 5,740명, 2023년 5,879명, 2022년 6,452명, 2021년 7,646명이고, 위 응시자 수와 다르다. 2020년은 2회 시행, 합격률 33.81%라 최근 5년 평균에서 뺐다."
```

## kr_credit_analyst

```yaml
# ---------- A. Identity ----------
id: kr_credit_analyst
name_ko: 신용분석사
name_orig: 신용분석사
tier: 1
region: KR
exam_type: certificate
domain: [banking_credit_fx]
issuer: 한국금융연수원 (Korea Banking Institute)
official_url: https://www.kbi.or.kr/platformWeb/Qual.do?cmd=openPage&pageName=qualInfo&p_iQlfn=01
status: active
summary_ko: 한국금융연수원이 시행하는 국가공인 민간자격이다. 금융위원회 제2024-1호, 등록번호 2008-0438이며, 영어 명칭은 Certified Credit Analyst(CCA)다. 2026년에는 제64회부터 제66회까지 세 번 시행되었고, 제66회 합격자 발표일은 2026-11-13이다.
usage_ko: 금융기관 여신 부서에서 기업의 회계·비회계 자료를 분석해 신용 상태와 신용등급을 판단하는 직무를 다룬다. 특정 업무의 법정 독점 자격이 아니며, 합격 후 연수원 등록으로 자격을 취득한다. 이 자격을 가진 사람은 여신심사역 응시 요건의 한 축이 된다.

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
      source_text: "The KBI exam guide states that eligibility is unrestricted and does not set age, education, experience, field, or nationality conditions."
  extra_checks_ko: []
  exam_languages: [ko]
  english_level_needed: none
  english_level_reason: The official guide describes a Korean five-choice written paper and does not set an English section.
  test_countries: [KR]
  retake_limit_ko: 불합격 횟수 제한은 시험안내에 없다. 1부 또는 2부만 합격하면 부분합격일 다음부터 연속 3회, 2년 안의 시험에서 그 부를 면제한다. 2009년 10월 제15회부터 적용된다.

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko:
    - "합격 후 한국금융연수원에 등록해야 자격취득 절차가 끝난다."
  time_limit_ko: 합격 후 등록 기한은 열린 시험안내에 없다.
  validity_ko: 열린 시험안내에는 유효기간, 정기 갱신, 보수교육 주기가 없다. 자격증 온라인 발급은 무료, 방문 발급 4,000원, 우편 발급 7,000원이다.

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: 1부·2부 동일일 시험
      subjects_ko:
        - "1부 회계학Ⅰ 100점: 기업회계기준 100"
        - "1부 회계학Ⅱ 100점: 기업결합회계 50, 특수회계 50"
        - "2부 신용분석 200점: 재무분석 70, 현금흐름분석 80, 시장환경분석 50"
        - "2부 종합신용평가 100점: 신용평가 종합사례 100"
      format: mcq
      question_summary_ko: 필기 객관식 5지선다. 1교시 회계학 120분(09:00-11:00), 2교시 신용분석 90분(11:20-12:50), 3교시 종합신용평가 90분(14:00-15:30). 합계 500점, 300분. 괄호 안 숫자는 개별 배점이고 문항 수는 시험안내에 없다. 계산기가 필수다.
      duration_min: 300
      passing_rule_ko: 과목마다 100점 만점 기준 40점 미만이 없고, 1부 평균과 2부 평균이 각각 60점 이상이어야 한다. 평균은 총득점을 총배점으로 나눈 백분율이다. 한 부만 기준을 넘기면 부분합격이다.
      pass_rates:
        - period: 2025
          rate_pct: 29.35
          examinees: 12564
        - period: 2024
          rate_pct: 29.67
          examinees: 11203
        - period: 2023
          rate_pct: 25.03
          examinees: 8965
        - period: 2022
          rate_pct: 26.78
          examinees: 9918
        - period: 2021
          rate_pct: 27.82
          examinees: 10757
      pass_rate_avg_pct: 27.73
      hours_min: 143
      hours_typical: 143
      hours_max: 143
      sessions_per_year: 3
      next_dates_ko: "2026년 3회. 제64회 시험 2026-02-28(접수 2026-01-20 10:00-01-27 20:00, 추가접수 2026-02-02-02-04, 발표 2026-03-13, 서울·대구·부산·광주·제주·대전). 제65회 시험 2026-06-13(접수 2026-05-05-05-12, 추가접수 2026-05-18-05-20, 발표 2026-06-26, 서울·대전·대구·부산·광주·제주). 제66회 시험 2026-10-31(접수 2026-09-22-09-29, 추가접수 2026-10-05-10-07, 발표 2026-11-13). 기준일에는 제66회가 이미 시행되었고 발표 전이며, 다음 회차는 목록에 없다."
      fee:
        amount: 66000
        currency: KRW
        krw_approx: 66000
        fx_date: 2026-11-11
  exemptions_ko: "2002-02-08 이전에 한국금융연수원 신용분석 집합연수를 수료한 사람과 공인회계사(CPA)는 1부 면제. 1부 또는 2부만 합격하면 이후 연속 3회, 2년 안에서 그 부를 면제한다. 2부만 합격한 뒤에 CPA 사유가 생겨도 1부 면제는 인정하지 않는다. 2009년 10월 제15회부터 부분합격 면제가 적용된다."
  total:
    hours_min: 143
    hours_typical: 143
    hours_max: 143
    hours_basis: provider
    hours_basis_note_ko: "연수원 시험안내에는 권장 학습시간이 없다. 이패스코리아 2025년 신용분석사 1,2부 Master반 상세 페이지가 교육시간 143시간, 강의 143교시라고 적는다. 별도 하한·상한이 없어 세 칸을 143으로 두었다. 강의 밖 자습은 포함되지 않는다."
    min_calendar_months: 1
    pass_rate_avg_pct: 27.73

# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "1부만 응시 28,000원, 2부만 응시 39,000원. 합은 67,000원으로 전과목 66,000원보다 1,000원 많다."
    - "자격증 온라인 발급 무료, 방문 발급 4,000원, 우편 발급 7,000원."
    - "참고도서 정가는 일반기업회계기준과 현금흐름분석, 신용분석을 위한 시장환경분석 각 27,000원, 재무분석 28,000원, 일반기업회계기준에 따른 특수회계와 최신기업신용분석 각 24,000원, 연결재무제표의 이해와 활용 18,000원이다. 구매는 선택이다."

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 4
  hours_score: 2
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 2
  level: 3
  rationale_ko: "2021-2025년 연간 합격률 평균 27.73%로 합격률 점수는 4이고, 수험기관 종합 강의 143시간으로 학습시간 점수는 2다. 과목이 4개이고 공식 형식은 객관식 5지선다이며 같은 날 끝나는 한 단계라 구조 점수는 2다. 평균 2.67을 반올림하면 3이다."

# ---------- G. Sources and confidence ----------
sources:
  - url: https://www.kbi.or.kr/platformWeb/Qual.do?cmd=openPage&pageName=qualInfo&p_iQlfn=01
    accessed: 2026-11-11
    type: official
    covers: [eligibility, award, structure, fee]
  - url: https://www.kbi.or.kr/platformWeb/Qual.do?cmd=scheduleView
    accessed: 2026-11-11
    type: official
    covers: [structure, fee]
  - url: https://www.pqi.or.kr/inf/qul/infQulBasDetail.do?qulId=593
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: https://m.epasskorea.com/Lecture/lecture_view_bundle.asp?Cate_IDX=100323&Lec_cm_LecType=&Lec_IDX=160387
    accessed: 2026-11-11
    type: provider
    covers: [hours]
confidence:
  eligibility: high
  award: medium
  structure: high
  hours: medium
  pass_rate: high
  fee: high
as_of: 2026-11-11
unknown_reasons:
  - "question count: the official table gives point weights and minutes, not the number of items."
  - "official recommended study hours: absent from the KBI guide. The 143-hour figure is one provider course, so a separate fast or slow range was not published."
  - "validity, renewal, and continuing education: not stated on the opened exam guide."
  - "next sitting after the 66th exam: not in the session dropdown on 2026-11-11."
notes_ko: "합격률은 발급기관이 민간자격정보서비스에 입력한 연간 수치다. 접수자는 2025년 16,451명, 2024년 15,207명, 2023년 12,371명, 2022년 13,607명, 2021년 14,387명이다. 회계 과목에 계산형 문항이 있다는 수험 후기는 공식 출제 형식 문장으로 확인하지 못해 구조의 주관식·계산 점수에는 넣지 않았다. 2026년 과정 목록의 147교시는 시간으로 표시되지 않아 학습시간에 쓰지 않았다."
```

## kr_fx_specialist_1

```yaml
# ---------- A. Identity ----------
id: kr_fx_specialist_1
name_ko: 외환전문역Ⅰ종
name_orig: 외환전문역Ⅰ종
tier: 1
region: KR
exam_type: certificate
domain: [banking_credit_fx]
issuer: 한국금융연수원 (Korea Banking Institute)
official_url: https://www.kbi.or.kr/platformWeb/Qual.do?cmd=openPage&pageName=qualInfo&p_iQlfn=09
status: active
summary_ko: 한국금융연수원이 시행하는 국가공인 민간자격이다. 기획재정부 제2025-2호, 등록번호 2008-0436을 외환전문역Ⅱ종과 함께 쓰며, 영어 명칭은 Certified Foreign Exchange Specialist Ⅰ(CFESⅠ)다. 자격증은 Ⅱ종과 따로 발급되고 2026년 제57회가 2026-11-21에 예정되어 있다.
usage_ko: 금융기관 외환 업무 가운데 외국환 법규와 외환거래 실무를 다루고, 고객의 외화 자산에 생기는 외환리스크를 줄이는 개인 외환 직무를 대상으로 한다. 법정 독점 업무 자격이 아니며, 합격 후 연수원 등록으로 자격을 취득한다. Ⅰ종만 보거나 같은 날 Ⅱ종과 함께 볼 수 있다.

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
      source_text: "The KBI exam guide states that eligibility is unrestricted and does not set age, education, experience, field, or nationality conditions."
  extra_checks_ko: []
  exam_languages: [ko]
  english_level_needed: none
  english_level_reason: The Type I guide describes a Korean four-choice paper. The all-English subject is on the separate Type II exam.
  test_countries: [KR]
  retake_limit_ko: 불합격 횟수 제한과 부분합격 면제는 시험안내에 없다.

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko:
    - "합격 후 한국금융연수원에 등록해야 자격취득 절차가 끝난다. Ⅰ종과 Ⅱ종은 자격증을 각각 발급한다."
  time_limit_ko: 합격 후 등록 기한은 열린 시험안내에 없다.
  validity_ko: 열린 시험안내에는 유효기간, 정기 갱신, 보수교육 주기가 없다. 자격증 온라인 발급은 무료, 방문 발급 4,000원, 우편 발급 7,000원이다.

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: 단일 시험
      subjects_ko:
        - "외환관리실무 50점"
        - "외국환거래실무 30점"
        - "환리스크관리 20점"
      format: mcq
      question_summary_ko: 필기 객관식 4지선다 120분(10:00-12:00), 합계 100점. 공식 시험안내에는 문항 수가 없다. 수험표, 신분증, 필기구, 일반 계산기가 필요하다.
      duration_min: 120
      passing_rule_ko: 과목마다 100점 만점 기준 40점 이상이고, 전과목 평균 60점 이상이어야 한다. 평균은 총득점을 총배점으로 나눈 백분율이다. 부분합격 제도는 시험안내에 없다.
      pass_rates:
        - period: 2025
          rate_pct: 33.47
          examinees: 8873
      pass_rate_avg_pct: 33.47
      hours_min: 41
      hours_typical: 41
      hours_max: 41
      sessions_per_year: 3
      next_dates_ko: "2026년 3회. 제55회 시험 2026-03-28(접수 2026-02-17 10:00-02-24 20:00, 추가접수 2026-03-02-03-04, 발표 2026-04-10). 제56회 시험 2026-07-11(접수 2026-06-02-06-09, 추가접수 2026-06-15-06-17, 발표 2026-07-24). 제57회 시험 2026-11-21(접수 2026-10-13-10-20, 추가접수 2026-10-26-10-28, 발표 2026-12-04). 장소는 세 회 모두 서울·대전·대구·부산·광주·창원·제주. 기준일에는 제57회 접수가 마감되었고 시험은 아직 전이었다. 2027년 일정은 목록에 없다."
      fee:
        amount: 55000
        currency: KRW
        krw_approx: 55000
        fx_date: 2026-11-11
  exemptions_ko: "시험안내에 다른 자격에 따른 과목 면제는 없다. Ⅱ종은 별도 자격이라 Ⅰ종 합격을 대신하지 않는다."
  total:
    hours_min: 41
    hours_typical: 41
    hours_max: 41
    hours_basis: researcher_estimate
    hours_basis_note_ko: "연수원 권장 학습시간은 없다. 이패스코리아 2026 외환전문역Ⅰ종 종합과정 목록은 강의 41교시라고만 적고 시간 단어는 없다. 같은 회사의 자산관리사 상세 페이지는 125교시와 교육시간 125시간을, 신용분석사 Master반 상세 페이지는 143교시와 143시간을 나란히 적으므로 1교시를 1시간으로 보아 41로 추정했다. 하한과 상한을 나눈 자료는 없어 세 칸이 같다. Ⅰ·Ⅱ종 패키지 103교시는 종별로 나뉘지 않아 쓰지 않았다."
    min_calendar_months: 1
    pass_rate_avg_pct: 33.47

# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "부분 응시료는 없다. 일정 데이터의 2부 응시료는 0원이다."
    - "자격증 온라인 발급 무료, 방문 발급 4,000원, 우편 발급 7,000원."
    - "참고도서 정가는 외환관리실무와 외국환거래실무 각 24,000원, 환리스크관리 25,000원이다. 구매는 선택이다."

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 3
  hours_score: 1
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 2
  level: 2
  rationale_ko: "종별로 나뉜 공식 통계는 2025년 33.47% 한 해뿐이라 합격률 점수는 3이다. 수험기관 종합과정 41교시를 1교시 1시간으로 본 41시간은 학습시간 점수 1이다. 과목 3개의 객관식 단일 시험이라 구조 점수는 2이고, 평균 2를 그대로 난이도 2로 둔다."

# ---------- G. Sources and confidence ----------
sources:
  - url: https://www.kbi.or.kr/platformWeb/Qual.do?cmd=openPage&pageName=qualInfo&p_iQlfn=09
    accessed: 2026-11-11
    type: official
    covers: [eligibility, award, structure, fee]
  - url: https://www.kbi.or.kr/platformWeb/Qual.do?cmd=scheduleView
    accessed: 2026-11-11
    type: official
    covers: [structure, fee]
  - url: https://www.pqi.or.kr/inf/qul/infQulBasDetail.do?qulId=591
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: https://m.epasskorea.com/Lecture/lecture.asp?cate_idx=10031301
    accessed: 2026-11-11
    type: provider
    covers: [hours]
  - url: https://m.epasskorea.com/lecture/lecture_view_bundle.asp?Cate_IDX=100301&Lec_cm_LecType=&Lec_IDX=158164
    accessed: 2026-11-11
    type: provider
    covers: [hours]
confidence:
  eligibility: high
  award: medium
  structure: high
  hours: low
  pass_rate: medium
  fee: high
as_of: 2026-11-11
unknown_reasons:
  - "question count: the official Type I table gives points and 120 minutes only."
  - "pass rates before 2025: PQI lists 2021-2024 as one combined grade for Type I and Type II, so those years were not entered on this record."
  - "validity, renewal, and continuing education: not stated on the opened exam guide."
  - "2027 sitting: not in the session dropdown."
notes_ko: "2025년 Ⅰ종은 접수 12,507명, 응시 8,873명, 취득 2,970명, 3회, 합격률 33.47%다. 2024년 이전 합산 수치는 이 기록에 넣지 않았다. 민간자격정보서비스의 주무부처 표기는 재정경제부이고, 연수원 검정료 표의 공인번호는 기획재정부 제2025-2호다. 공인번호는 연수원 표를 따랐다. 학습시간 41은 교시를 시간으로 옮긴 추정이라 신뢰도를 낮게 두었다."
```

## kr_fx_specialist_2

```yaml
# ---------- A. Identity ----------
id: kr_fx_specialist_2
name_ko: 외환전문역Ⅱ종
name_orig: 외환전문역Ⅱ종
tier: 1
region: KR
exam_type: certificate
domain: [banking_credit_fx]
issuer: 한국금융연수원 (Korea Banking Institute)
official_url: https://www.kbi.or.kr/platformWeb/Qual.do?cmd=openPage&pageName=qualInfo&p_iQlfn=10
status: active
summary_ko: 한국금융연수원이 시행하는 국가공인 민간자격으로, Ⅰ종과 별개다. 기획재정부 제2025-2호, 등록번호 2008-0436을 공유하고 영어 명칭은 Certified Foreign Exchange Specialist Ⅱ(CFESⅡ)다. 2026년 제57회는 2026-11-21 오후에 시행된다.
usage_ko: 수출입 업무와 국제무역 규칙을 이해하고 외환 관련 여신을 다루는 기업 외환 직무를 대상으로 한다. 법정 독점 업무 자격이 아니며, 합격 후 연수원 등록으로 자격을 취득한다. Ⅱ종만 보거나 같은 날 오전에 Ⅰ종과 함께 볼 수 있다.

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
      source_text: "The KBI exam guide states that eligibility is unrestricted and does not set age, education, experience, field, or nationality conditions."
  extra_checks_ko: []
  exam_languages: [ko, en]
  english_level_needed: working
  english_level_reason: The international-trade-rules subject, worth 30 of 100 points, is set entirely in English for both stems and choices, while the other two subjects are Korean.
  test_countries: [KR]
  retake_limit_ko: 불합격 횟수 제한과 부분합격 면제는 시험안내에 없다.

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko:
    - "합격 후 한국금융연수원에 등록해야 자격취득 절차가 끝난다. Ⅰ종과 자격증이 분리된다."
  time_limit_ko: 합격 후 등록 기한은 열린 시험안내에 없다.
  validity_ko: 열린 시험안내에는 유효기간, 정기 갱신, 보수교육 주기가 없다. 자격증 온라인 발급은 무료, 방문 발급 4,000원, 우편 발급 7,000원이다.

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: 단일 시험
      subjects_ko:
        - "수출입실무 50점"
        - "국제무역규칙 30점"
        - "외환관련여신 20점"
      format: mcq
      question_summary_ko: 필기 객관식 4지선다 120분(13:00-15:00), 합계 100점. 국제무역규칙은 지문과 보기가 모두 영어다. 공식 시험안내에는 문항 수가 없다. 수출입실무 참고도서는 이창식의 손에 잡히는 수출입업무다. 계산기가 필수다.
      duration_min: 120
      passing_rule_ko: 과목마다 100점 만점 기준 40점 이상이고, 전과목 평균 60점 이상이어야 한다. 평균은 총득점을 총배점으로 나눈 백분율이다. 부분합격 제도는 시험안내에 없다.
      pass_rates:
        - period: 2025
          rate_pct: 22.62
          examinees: 5331
      pass_rate_avg_pct: 22.62
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: 3
      next_dates_ko: "2026년 3회이며 날짜와 장소는 Ⅰ종과 같다. 제55회 시험 2026-03-28(접수 2026-02-17 10:00-02-24 20:00, 추가접수 2026-03-02-03-04, 발표 2026-04-10). 제56회 시험 2026-07-11(접수 2026-06-02-06-09, 추가접수 2026-06-15-06-17, 발표 2026-07-24). 제57회 시험 2026-11-21 13:00-15:00(접수 2026-10-13-10-20, 추가접수 2026-10-26-10-28, 발표 2026-12-04). 장소는 서울·대전·대구·부산·광주·창원·제주. 2027년 일정은 목록에 없다."
      fee:
        amount: 55000
        currency: KRW
        krw_approx: 55000
        fx_date: 2026-11-11
  exemptions_ko: "시험안내에 과목 면제는 없다. Ⅰ종 합격이 Ⅱ종을 대신하지 않는다."
  total:
    hours_min: unknown
    hours_typical: unknown
    hours_max: unknown
    hours_basis: unknown
    hours_basis_note_ko: "연수원 권장 학습시간은 없다. 이패스코리아 2026년 목록에서 Ⅱ종 단독 과정의 교육시간을 확인하지 못했고, Ⅰ·Ⅱ종 패키지 103교시는 종별로 나눌 수 없다. 2024년 안내서의 73교시는 현재 과정 시수와 맞지 않아 쓰지 않았다."
    min_calendar_months: 1
    pass_rate_avg_pct: 22.62

# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "부분 응시료는 없다. 일정 데이터의 2부 응시료는 0원이다."
    - "자격증 온라인 발급 무료, 방문 발급 4,000원, 우편 발급 7,000원."
    - "참고도서 정가는 수출입업무 28,000원, 외환관련여신과 신용장통일규칙(UCP600)과 국제무역규칙 각 24,000원이다. 구매는 선택이다."

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 4
  hours_score: unknown
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 2
  level: unknown
  rationale_ko: "종별로 나뉜 2025년 합격률 22.62%만 쓸 수 있어 합격률 점수는 4다. 과목 3개의 객관식 단일 시험이라 구조 점수는 2다. 확인된 학습시간이 없어 학습시간 점수와 세 점수의 평균 난이도는 계산하지 않았다."

# ---------- G. Sources and confidence ----------
sources:
  - url: https://www.kbi.or.kr/platformWeb/Qual.do?cmd=openPage&pageName=qualInfo&p_iQlfn=10
    accessed: 2026-11-11
    type: official
    covers: [eligibility, award, structure, fee]
  - url: https://www.kbi.or.kr/platformWeb/Qual.do?cmd=scheduleView
    accessed: 2026-11-11
    type: official
    covers: [structure, fee]
  - url: https://www.pqi.or.kr/inf/qul/infQulBasDetail.do?qulId=591
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: https://m.epasskorea.com/Lecture/lecture.asp?cate_idx=10031301
    accessed: 2026-11-11
    type: provider
    covers: [hours]
confidence:
  eligibility: high
  award: medium
  structure: high
  hours: low
  pass_rate: medium
  fee: high
as_of: 2026-11-11
unknown_reasons:
  - "hours_min, hours_typical, hours_max, hours_basis, hours_score, and difficulty.level: no official hour figure, and no opened provider page states Type II study hours separately from the combined package."
  - "question count: the official table gives points and 120 minutes only."
  - "pass rates before 2025: PQI combines Type I and Type II for 2021-2024."
  - "validity, renewal, and continuing education: not stated on the opened exam guide."
  - "2027 sitting: not in the session dropdown."
notes_ko: "2025년 Ⅱ종은 접수 7,723명, 응시 5,331명, 취득 1,206명, 3회, 합격률 22.62%다. 민간자격정보서비스의 2025년 등급 표기는 외환전문역Ⅱ종이고 괄호 안 공인 표시는 Ⅰ종 행에만 있다. 연수원 페이지는 양쪽을 국가공인자격으로 둔다. 주무부처는 민간자격정보서비스가 재정경제부, 연수원 공인번호 문안이 기획재정부 제2025-2호다."
```

## kr_loan_officer

```yaml
# ---------- A. Identity ----------
id: kr_loan_officer
name_ko: 여신심사역
name_orig: 여신심사역
tier: 1
region: KR
exam_type: certificate
domain: [banking_credit_fx]
issuer: 한국금융연수원 (Korea Banking Institute)
official_url: https://www.kbi.or.kr/platformWeb/Qual.do?cmd=openPage&pageName=qualInfo&p_iQlfn=02
status: active
summary_ko: 한국금융연수원이 시행하는 국가공인 민간자격이다. 금융위원회 제2024-2호, 등록번호 2008-0439이며, 영어 명칭은 Certified Loan Officer(CLO)다. 신용분석사 자격과 여신심사·여신법률 집합연수 수료가 있어야 응시할 수 있고, 2026년에는 5월과 9월 두 번 서울과 부산에서 시행되었다.
usage_ko: 기업의 신용과 사업성을 보고 대출 실행, 금리와 기간, 대손 방지와 법률 검토를 포함한 여신심사 직무를 다룬다. 법정 독점 업무 자격이 아니며, 시험 합격과 등록으로 자격을 취득한다. 응시 전에 이미 신용분석사와 두 집합연수가 필요하다.

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: 신용분석사 보유 후 지정 집합연수 수료
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "KBI limits candidates to holders of its credit-analyst credential, including its own pre-accreditation credential, who have also completed its in-person Loan Review course and Loan Law course."
  extra_checks_ko:
    - "한국금융연수원 신용분석사 자격(자체자격 포함)이 있어야 한다."
    - "한국금융연수원 집합연수 여신심사 과정과 여신법률 과정을 모두 수료해야 한다."
  exam_languages: [ko]
  english_level_needed: none
  english_level_reason: The official guide describes a Korean written paper, with some short written answers, and does not set an English section.
  test_countries: [KR]
  retake_limit_ko: 불합격 횟수 제한은 시험안내에 없다. 1부 또는 2부만 합격하면 부분합격일 다음부터 연속 3회, 2년 안의 시험에서 그 부를 면제한다. 2009년 9월 제10회부터 적용된다.

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko:
    - "합격 후 한국금융연수원에 등록해야 자격취득 절차가 끝난다. 신용분석사와 두 집합연수는 응시 전 요건이라 합격 후 추가 경력은 시험안내에 없다."
  time_limit_ko: 합격 후 등록 기한은 열린 시험안내에 없다.
  validity_ko: 열린 시험안내에는 유효기간, 정기 갱신, 보수교육 주기가 없다. 자격증 온라인 발급은 무료, 방문 발급 4,000원, 우편 발급 7,000원이다.

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: 1부·2부 동일일 시험
      subjects_ko:
        - "1부 여신법률Ⅰ 75점: 여신거래의 성립과 관리 40, 여신채권의 회수 35"
        - "1부 여신법률Ⅱ 75점: 부동산담보 50, 인적담보·기타재산담보 25"
        - "2부 여신관리 100점: 담보평가 50, 여신감리 25, 기업구조조정 25"
        - "2부 심사분석 150점: 여신심사 종합사례 객관식 100, 주관식 50"
      format: mixed
      question_summary_ko: 객관식 5지선다에 주관식 서술형이 일부 있다. 1교시 여신법률 80분(09:00-10:20), 2교시 여신관리 60분(10:40-11:40), 3교시 심사분석 110분(13:00-14:50). 합계 400점, 250분. 괄호 안 숫자는 개별 배점이고 문항 수는 시험안내에 없다. 일반 계산기가 필수다.
      duration_min: 250
      passing_rule_ko: 과목마다 100점 만점 기준 40점 미만이 없고, 1부 평균과 2부 평균이 각각 60점 이상이어야 한다. 평균은 총득점을 총배점으로 나눈 백분율이다. 한 부만 기준을 넘기면 부분합격이다. 심사분석의 일부는 주관식 서술형이다.
      pass_rates:
        - period: 2025
          rate_pct: 43.06
          examinees: 216
        - period: 2024
          rate_pct: 61.58
          examinees: 190
        - period: 2023
          rate_pct: 46.2
          examinees: 184
        - period: 2022
          rate_pct: 47.01
          examinees: 134
        - period: 2021
          rate_pct: 58.13
          examinees: 160
      pass_rate_avg_pct: 51.2
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: 2
      next_dates_ko: "2026년 2회, 장소는 서울·부산. 제43회 시험 2026-05-16(접수 2026-04-07 10:00-04-14 20:00, 추가접수 2026-04-28-04-30, 발표 2026-06-12). 제44회 시험 2026-09-05(접수 2026-07-28-08-04, 추가접수 2026-08-19-08-21, 발표 2026-10-02). 기준일에는 두 회차 모두 발표까지 끝났고 다음 회차는 목록에 없다. 직전 제42회는 2025-09-06이었다."
      fee:
        amount: 66000
        currency: KRW
        krw_approx: 66000
        fx_date: 2026-11-11
  exemptions_ko: "1부 또는 2부만 합격하면 이후 연속 3회, 2년 안에서 그 부를 면제한다. 2009년 9월 제10회부터 적용된다. 신용분석사와 두 집합연수는 면제가 아니라 응시 요건이다."
  total:
    hours_min: unknown
    hours_typical: unknown
    hours_max: unknown
    hours_basis: unknown
    hours_basis_note_ko: "연수원 시험안내에는 필기 준비 시간이 없다. 여신심사역 강의의 교육시간을 적은 수험기관 페이지도 확인하지 못했다. 집합연수 일수 역시 시험안내의 비용 문구 밖에는 확인하지 못했다."
    min_calendar_months: 1
    pass_rate_avg_pct: 51.2

# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "1부만 응시 28,000원, 2부만 응시 39,000원. 합은 67,000원으로 전과목 66,000원보다 1,000원 많다."
    - "응시 전 집합연수 교육비는 여신심사 약 364만원 내외, 여신법률 약 418만원 내외라고 연수원 비용표가 적는다. 정확한 원 단위 수강료와 교육 일수는 그 표에 없다."
    - "자격증 온라인 발급 무료, 방문 발급 4,000원, 우편 발급 7,000원."
    - "참고도서 정가는 담보평가의 이론과 실무 28,000원, 여신실무법률-여신관리 24,000원, 여신거래의 성립과 담보Ⅰ·담보Ⅱ 각 25,000원, 채권회수 23,000원, 여신심사 및 관리 24,000원, 소호여신심사 21,000원이다. 구매는 선택이다."

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 2
  hours_score: unknown
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: false
    non_written_assessment: true
  structure_score: 4
  level: unknown
  rationale_ko: "2021-2025년 연간 합격률 평균 51.2%로 합격률 점수는 2다. 과목 4개, 주관식 서술형, 응시 전 필수 집합연수가 있어 구조 점수는 4다. 필기 학습시간이 확인되지 않아 학습시간 점수와 평균 난이도는 계산하지 않았다."

# ---------- G. Sources and confidence ----------
sources:
  - url: https://www.kbi.or.kr/platformWeb/Qual.do?cmd=openPage&pageName=qualInfo&p_iQlfn=02
    accessed: 2026-11-11
    type: official
    covers: [eligibility, award, structure, fee]
  - url: https://www.kbi.or.kr/platformWeb/Qual.do?cmd=scheduleView
    accessed: 2026-11-11
    type: official
    covers: [structure, fee]
  - url: https://www.pqi.or.kr/inf/qul/infQulBasDetail.do?qulId=594
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
confidence:
  eligibility: high
  award: medium
  structure: high
  hours: low
  pass_rate: high
  fee: medium
as_of: 2026-11-11
unknown_reasons:
  - "hours_min, hours_typical, hours_max, hours_basis, hours_score, and difficulty.level: no official or opened provider study-hour figure for the written exam."
  - "question count: the official table gives point weights, including 50 points of short written answers, not item counts."
  - "exact tuition and length of the Loan Review and Loan Law courses: the fee table says about 3.64 million and about 4.18 million KRW and does not give days or an exact won amount."
  - "validity, renewal, and continuing education: not stated on the opened exam guide."
  - "next sitting after the 44th exam: not in the session dropdown on 2026-11-11."
notes_ko: "최단 일정 1개월은 응시 자격을 갖춘 뒤 한 회차에 1·2부를 함께 합격하는 경우다. 신용분석사 취득과 두 집합연수는 그 이전이다. 합격률 응시 규모는 한 해 134명에서 216명으로 작다. 접수자는 2025년 232명, 2024년 197명, 2023년 199명, 2022년 148명, 2021년 179명이다. 연간 합격률에는 부분합격 경로가 섞여 있는지 서비스가 밝히지 않는다. 필수 집합연수는 채점되는 실기 시험이 아니라 수료 요건이지만, 구조 점수의 필수 연수 항목에 넣었다. 집합연수 교육비는 내외라는 표현이라 응시료와 달리 정확한 금액이 아니다."
```

# Batch log

Research date: 2026-11-11.

Completed:

- kr_bank_fp, 자산관리사(FP). The candidate name 은행FP is the older popular name of this same active qualification, not a discontinued exam. Official page: https://www.kbi.or.kr/platformWeb/Qual.do?cmd=openPage&pageName=qualInfo&p_iQlfn=04
- kr_credit_analyst, 신용분석사. https://www.kbi.or.kr/platformWeb/Qual.do?cmd=openPage&pageName=qualInfo&p_iQlfn=01
- kr_fx_specialist_1, 외환전문역Ⅰ종. https://www.kbi.or.kr/platformWeb/Qual.do?cmd=openPage&pageName=qualInfo&p_iQlfn=09
- kr_fx_specialist_2, 외환전문역Ⅱ종. Separate certificate from Type I. https://www.kbi.or.kr/platformWeb/Qual.do?cmd=openPage&pageName=qualInfo&p_iQlfn=10
- kr_loan_officer, 여신심사역. https://www.kbi.or.kr/platformWeb/Qual.do?cmd=openPage&pageName=qualInfo&p_iQlfn=02

Exclusions and renames:

- 은행FP was not given a second record. KBI’s current official name on the exam guide is 자산관리사(FP), Financial Planner(FP), accreditation 금융위원회 제2025-6호, registration 2008-0441. The id stays kr_bank_fp as assigned.
- 외환전문역 1종 and 2종 were not merged. Both guides say they are separate qualifications with separate certificates and may be sat alone or together.
- No successor was required. Other KBI names seen on the same fee table and left out of scope: 국제금융역, 신용위험분석사(CRA), 은행텔러, 영업점 컴플라이언스 오피서, 프라이빗뱅커(CPB), KBI 금융DT 테스트, TPAC, KBI 금융 AI 리터러시. 외환관리사 was not treated as a successor of 외환전문역.

Fields left unknown:

- Item counts for all five exams. Official tables publish point weights and minutes.
- Validity, renewal, and continuing-education cycles. Every opened guide ends acquisition at registration and does not state an expiry. Provider claims of a three-year cycle were not used.
- Study hours for 외환전문역Ⅱ종 and 여신심사역. Type II has no separated provider hour total. CLO has no opened lecture-hour page.
- Therefore hours_score and difficulty.level are unknown for kr_fx_specialist_2 and kr_loan_officer.
- Type I hours are a researcher estimate of 41, from a 41-lesson 2026 course plus the provider’s own lesson-equals-hour labeling on other course pages. Confidence is low.
- 자산관리사 and 신용분석사 hours are one comprehensive lecture length each (125 and 143), not a surveyed range.
- FX pass rates before 2025. PQI qulId 591 combines both types through 2024. Only 2025 is split: Type I 33.47 percent of 8,873 examinees, Type II 22.62 percent of 5,331.
- Exact won amounts and course lengths for CLO’s mandatory 여신심사 and 여신법률 courses. The KBI cost table says about 3.64 million and about 4.18 million KRW.
- The next sitting after the last posted 2026 session for 신용분석사 (66th, result date 2026-11-13) and 여신심사역 (44th, already resulted 2026-10-02). No 2027 date was posted for any of the five.

Conflicts:

- PQI labels the FX competent ministry 재정경제부. The KBI fee table still prints 기획재정부 제2025-2호. The accreditation line on the KBI page was used, and both wordings are in the notes.
- PQI’s 2025 Type II grade label omits “(공인)” while Type I includes it. KBI lists both as 국가공인자격.
- Full-exam fees are 1,000 KRW below the sum of the part fees for FP (55,000 versus 28,000+28,000), CCA, and CLO (66,000 versus 28,000+39,000). The full fee is the standard fee.
- CLO mandatory courses were counted as the structure point for mandatory training. They are completion requirements before the sitting, not a scored practical stage.
- Calculation items inside CCA and FP multiple-choice papers were not given the subjective-question point, because the official format line says five-choice multiple choice only. CLO’s written short answers were counted because the guide states them.
- Each qualification is one stage. Part 1 and Part 2 are the same day, and only annual whole-credential pass rates are published. Splitting stages would have dropped those rates.
- min_calendar_months is 1 where both parts, or the single paper, can be passed on one sitting. For CLO that month starts only after CCA and the two courses.
