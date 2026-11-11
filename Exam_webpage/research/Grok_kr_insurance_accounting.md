## kr_actuary

```yaml
# ---------- A. Identity ----------
id: kr_actuary
name_ko: 보험계리사
name_orig: 보험계리사
tier: 1
region: KR
exam_type: license
domain: [insurance]
issuer: 금융감독원
official_url: "https://certi.kidi.or.kr:10443/exam/exam-guide/notice/view/3027"
status: active
summary_ko: 금융감독원장이 공고하고 보험개발원이 운영하는 보험계리사 시험이다. 1차 다섯 과목 중 영어는 다른 시험 성적으로 대체하고, 2차는 논문형 다섯 과목으로 2026년 과목별 최소합격예정인원은 각 150명이다. 1차 합격 해를 포함해 5년 동안 2차에 응시할 수 있다.
usage_ko: 보험계리 업무를 하려는 사람이 보험업법 시행규칙 제46조 이하의 시험과 제50조 실무수습을 거쳐 금융감독원장에게 등록하는 자격이다. 합격만으로 등록되지 않는다. 금융위원회가 인정하는 외국 보험계리사 자격은 1차와 2차를 면제받을 수 있다.
# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: 1차 응시
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "The 2026 plan says the actuary first exam has no limit of education, sex, age, career, or nationality."
    - label_ko: 5년 계리 경력으로 1차를 면제받고 2차만 응시
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 5
      work_fields_accepted: [insurance]
      source_text: "Rule 47(1), as amended on 2025-02-18, exempts the first exam for five years of actuarial work at an insurer, an insurance association, a rate-making body, or an independent actuarial corporation under Act article 128(2)."
  extra_checks_ko:
    - "2차는 1차 합격 해를 포함해 5년 동안 응시할 수 있다. 2026년 계획은 제45회부터 제49회 1차 합격과 1995년 이전 1차 합격을 적는다."
    - "경력 5년은 2026-06-09 현재로 센다."
    - "영어 대체 점수와 기간, 청각장애인 점수와 등록 유지는 재물손해사정사와 같은 별표 1의2다. 2026년 일반 기준은 토플 PBT 530, IBT 71, 토익 700, 텝스 340, 지텔프 레벨2 65, 플렉스 625 이상이다."
    - "국내 정기시험만 인정하고, 성적 자체의 유효기간 안에 사전등록·진위확인이 되어야 한다."
    - "금융감독원 근무 경력만으로 1차를 면제한다는 문구는 현행 제47조에 없다."
    - "개인 접수만 되며 방문 접수는 안 된다."
  exam_languages: [ko]
  english_level_needed: working
  english_level_reason: The written papers are Korean, but first-exam English is waived only with a score at or above TOEIC 700 or TOEFL iBT 71.
  test_countries: [KR]
  retake_limit_ko: 1차 합격 후 그 해를 포함해 5년간 2차에 응시할 수 있다. 2차에서 60점 이상인 과목은 그 해를 포함해 5년간 같은 점수로 인정된다. 제48조의2의 40점 이상 추가 합격은 그 연도에만 인정된다. 부정행위는 5년간 응시 금지다.
# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko:
    - "보험계리 실무수습 6개월이 필요하다. 장소는 금융감독원, 보험회사, 보험협회, 보험요율 산출기관, 금융위원회 지정 기관이다."
    - "인정 외국 보험계리사 자격 또는 그 기관에서 계리 업무 2년 이상은 실무수습을 면제한다."
    - "등록신청서에 실무수습 증명과 이력서를 붙여 금융감독원장에게 제출하고 등록수수료는 1만원이다. 외국 자격자는 수습 증명 대신 그 자격 증명으로 갈음할 수 있다."
  time_limit_ko: 2차 합격 후 실무수습을 마쳐야 하는 기한은 열린 조문에 없다. 1차 합격의 2차 응시 기간은 합격 해를 포함해 5년이다.
  validity_ko: 열린 시행규칙에는 보험계리사 등록의 유효기간이나 보수교육 주기가 없다.
# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: 1차 시험
      subjects_ko:
        - "경제학원론"
        - "보험수학"
        - "영어(다른 시험 성적으로 대체)"
        - "보험계약법(상법 보험편), 보험업법 및 근로자퇴직급여보장법"
        - "회계원리"
      format: mcq
      question_summary_ko: 2026년 계획은 객관식 4지선다 택1이다. 시행규칙은 기입형 병행을 허용하나 그 계획에는 기입형이 없다. 문항 수는 계획에 없다. 보험수학과 회계원리를 포함한 계리 전과목에 저장 기능 없는 단순계산기가 허용된다.
      duration_min: 200
      passing_rule_ko: 영어를 뺀 매 과목 40점 이상, 평균 60점 이상. 한 교시 결시면 1차 전체가 무효다.
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: 1
      next_dates_ko: "2026년 제49회 1차는 2026-04-12, 접수 2026-02-24 09:30–2026-02-27 18:00, 합격 공고 예정 2026-05-29. 1교시 10:00–11:20에 보험계약법·보험업법·근로자퇴직급여보장법과 경제학원론, 2교시 11:50–13:50에 보험수학과 회계원리. 서울. 제50회는 미공고다."
      fee:
        amount: 30000
        currency: KRW
        krw_approx: 30000
        fx_date: 2026-11-11
    - name_ko: 2차 시험
      subjects_ko:
        - "계리리스크관리"
        - "보험수리학"
        - "연금수리학"
        - "계리모형론"
        - "재무관리 및 금융공학"
      format: mixed
      question_summary_ko: 논문형 약술 또는 주관식 풀이. 문항 수는 2026년 계획에 없다. 다섯 과목 모두 단순계산기가 허용되고 공학용·재무용 계산기는 금지된다.
      duration_min: 600
      passing_rule_ko: 매 과목 60점 이상. 60점 이상 과목은 그 해를 포함해 5년간 같은 점수로 인정된다. 2026년 과목별 최소합격예정인원은 다섯 과목 각 150명이다. 60점 이상이 150명에 못 미치면 40점 이상자를 고득점 순으로 그 인원까지 합격시킬 수 있고, 그 합격은 그 연도에만 2차 합격에 쓰인다. 동점자는 모두 포함한다.
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: 1
      next_dates_ko: "2026년 2차는 2026-07-25에 계리리스크관리 10:00–12:00, 보험수리학 13:00–15:00, 연금수리학 15:30–17:30, 2026-07-26에 계리모형론 10:00–12:00, 재무관리 및 금융공학 13:00–15:00이었다. 접수는 2026-06-09 09:30–2026-06-12 18:00, 경력면제 사전등록은 2026-04-27–2026-05-22, 합격 공고 예정은 2026-09-18. 제50회는 미공고다."
      fee:
        amount: 50000
        currency: KRW
        krw_approx: 50000
        fx_date: 2026-11-11
  exemptions_ko: 제47조 제1항의 5년 계리 경력은 1차를 면제한다. 금융위원회가 인정하는 외국 보험계리사 자격은 1차와 2차를 면제한다. 옛 농업협동조합중앙회 공제계리 경력은 계리 경력으로 본다.
  total:
    hours_min: unknown
    hours_typical: unknown
    hours_max: unknown
    hours_basis: unknown
    hours_basis_note_ko: "금융감독원 제45–49회 합격 보도자료에는 권장 학습시간이 없다. 2026-11-11에 연 보험연수원 보험계리사 2차 사이버 목록은 과목 과정마다 교육기간 3개월만 적고 학습 시간 수는 없다. 3개월은 수강 가능 기간이라 시간으로 바꾸지 않았다. 인카·해커스·에듀윌에서 보험계리사 준비 시간을 적은 페이지는 열지 못했다. 과목별 5년 부분합격을 감안한 다년 수험 기간은 확인된 시간 숫자가 아니라 여기 적지 않았다."
    min_calendar_months: 4
    pass_rate_avg_pct: unknown
# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "등록수수료 10000원(시행규칙 제56조)."
    - "기초생활 수급·차상위, 장애인연금, 한부모가족 지원대상은 응시료 감면 대상이 될 수 있다. 감면 후 금액은 2026년 계획에 없다."
    - "취소 환불은 시험 15일 전까지 전액, 14일 전부터 전날까지 50퍼센트이고 시험 후 15일 안에 지급한다. 규칙 제49조 제3항의 불가피한 결시는 전액 환불 대상이다."
# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: na
  hours_score: na
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 3
  level: unknown
  rationale_ko: "구조만으로 두었던 등급 3은 무효라 지운다. 최종 합격자 수(2022–2026: 166, 169, 126, 120, 104)에는 고유 응시자 분모가 없다. 2차 과목 중복응시 합격률은 최종 합격률이 아니므로 합격률 점수를 매기지 않는다. 학습시간이 없어 시간 점수는 na이고 등급은 비운다. 구조 점수 3은 유지한다."
# ---------- G. Sources and confidence ----------
sources:
  - url: "https://certi.kidi.or.kr:10443/exam/exam-guide/notice/view/3027"
    accessed: 2026-11-11
    type: official
    covers: [eligibility, structure, fee]
  - url: "https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=269221&chrClsCd=010202&efYd=20250218"
    accessed: 2026-11-11
    type: regulator
    covers: [eligibility, award, structure, fee]
  - url: "https://www.law.go.kr/LSW/flDownload.do?flSeq=149132613"
    accessed: 2026-11-11
    type: regulator
    covers: [structure]
  - url: "https://www.law.go.kr/LSW/flDownload.do?flSeq=149132619"
    accessed: 2026-11-11
    type: regulator
    covers: [eligibility]
  - url: "https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=229239&menuNo=200218"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://www.fss.or.kr/fss/cmmn/file/fileDown.do?menuNo=200218&atchFileId=8590483df7644650bafd0b1be4ed33a6&fileSn=2"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=204203&menuNo=200218"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=187426&menuNo=200218"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=130549&menuNo=200218"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=56948&menuNo=200218"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://expert.in.or.kr/expert/sukang/actuary/cyber/second.do"
    accessed: 2026-11-11
    type: official
    covers: [hours]
confidence:
  eligibility: high
  award: high
  structure: high
  hours: low
  pass_rate: low
  fee: high
as_of: 2026-11-11
unknown_reasons:
  - "pass_rates: the 45th through 49th releases print final actuary passer counts and second-exam subject-sitting rates with duplicate sittings, not a unique second-exam denominator. No final pass rate was computed, and those releases have no first-exam rate. Final passer counts were 166, 169, 126, 120, and 104 for 2022 through 2026."
  - "question counts: 2026년 시행계획에 없다."
  - "hours_min, hours_typical, hours_max, hours_basis, hours_score, difficulty.level: no preparation-hour figure. The insurance institute three-month enrollment window is not study time, so the level stays unknown."
notes_ko: 2차 합격은 다섯 과목 모두 기준을 넘겨야 하며, 한 해의 과목 합격률은 그 최종 합격률이 아니다. 최소 150명에 못 미쳐 40점대로 넣은 과목 합격은 다음 해로 넘어가지 않고, 60점 이상만 5년간 유지된다. 같은 해 1차와 2차를 잇는 최단 기간은 2026년 4월 12일부터 7월 26일까지라 4개월로 적었다. 등록 전 실무수습 6개월은 시험 일정에 더하지 않았다. 문의는 보험개발원 약관업무팀 02-368-4060, exam@kidi.or.kr이다.
```

## kr_afpk

```yaml
id: kr_afpk
name_ko: AFPK
name_orig: Associate Financial Planner Korea
tier: 1
region: KR
exam_type: certificate
domain: [financial_planning]
issuer: 한국재무설계협회
official_url: "https://www.ifpk.org"
status: active
summary_ko: 한국재무설계협회가 시행하는 재무설계 자격시험이다. 협회는 2026-02-05 공지로 한국FPSB에서 한국재무설계협회로 이름이 바뀌었고, AFPK는 2025년 12월 CFP 운영 이관에 포함되지 않았다. 지정 교육 이수 후 두 모듈을 같은 날 또는 나눠 보며, 2026년 8월 제94회부터 150문항 170분이다.
usage_ko: 재무설계 기초 역량을 인증하는 민간 자격이다. 투자권유나 세무대리 같은 법정 업무 권한은 없다. 합격월부터 3년 안에 인증을 신청해야 하고, 인증 후에는 보수교육으로 갱신한다.

eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: 지정 교육 이수
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "The AFPK study guide says a candidate must complete the AFPK course at a designated education provider, unless a listed credential waives part or all of that course."
    - label_ko: 지정 자격에 따른 교육 면제
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "The study guide says holders of credentials designated by the association may receive a partial or full waiver of the AFPK education requirement."
  extra_checks_ko:
    - "학위 요건은 없다. 지정 교육기관의 AFPK 과정을 수료해야 한다. 집합 80시간과 원격 88시간이라는 숫자는 수험 교육기관 안내이며 2026년 학습가이드 추출문에서는 확인하지 못했다."
    - "교육 면제 자격의 전체 목록은 학습가이드에서 일부만 확인되었다. 은행FP가 모듈 2 교육을 면제한다는 내용은 교육기관 페이지에 있고 협회 원문으로는 재확인하지 못했다."
    - "수료 마감은 원서접수 전 주다. 제95회 수료 마감일은 교육기관 일정표에 2026-10-22로 적혀 있다."
  exam_languages: [ko]
  english_level_needed: basic
  english_level_reason: The exam notices and study guide are in Korean. Items use English names of financial products, but the paper is not an English exam.
  test_countries: [KR]
  retake_limit_ko: 불합격 횟수 제한은 확인되지 않았다. 한 모듈만 합격하면 점수는 넘어가지 않고 합격 사실만 유효기간 안에 인정된다.

award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko:
    - "시험 합격만으로 인증이 끝나지 않는다. 합격월부터 3년 안에 AFPK 인증을 신청해야 하며, 그 안에 신청하지 않으면 합격이 취소된다."
    - "인증 때 윤리 기준 준수 확인이 있다. 별도의 실무 연수 연수는 AFPK 인증 요건으로 확인되지 않았다."
  time_limit_ko: 전체 합격월부터 3년 이내 인증 신청.
  validity_ko: 합격 효력은 합격월부터 3년이다. 인증 후 갱신과 보수교육이 있으나 2026년 보수교육 학점 수는 이번 조사에서 협회 갱신 규정 원문으로 확인하지 못했다.

structure:
  stages:
    - name_ko: AFPK 자격시험 (모듈 1·2)
      subjects_ko:
        - "모듈1 재무설계 개론 12문항 (직업윤리 3문항은 개론에 포함)"
        - "모듈1 은퇴설계 25문항"
        - "모듈1 부동산설계 20문항"
        - "모듈1 상속설계 20문항"
        - "모듈2 위험관리와 보험설계 20문항"
        - "모듈2 투자설계 25문항"
        - "모듈2 세금설계 25문항"
      format: mcq
      question_summary_ko: "2026년 학습가이드 기준 객관식이다. 모듈 1은 80문항 90분(14:00~15:30), 모듈 2는 70문항 80분(16:00~17:20)이다. 휴식 30분은 시험 시간에서 빠진다. 이 문항 수는 2026-08-22 제94회부터 적용된다."
      duration_min: 170
      passing_rule_ko: 전체 응시 시 가중평균 70% 이상이고 모든 과목 40% 이상이면 합격한다. 한 모듈만 평균 70% 이상이고 그 모듈에 40% 미만 과목이 없으면 그 모듈만 부분 합격한다. 모듈별 응시도 같은 70%와 40% 기준이다. 부분 합격 점수는 이월되지 않는다.
      pass_rates:
        - period: "2024-87"
          rate_pct: 32.77
          examinees: 998
        - period: "2024-88"
          rate_pct: 37.44
          examinees: 1461
        - period: "2025-91"
          rate_pct: 34.11
          examinees: 1542
        - period: "2026-93"
          rate_pct: 33.29
          examinees: 1694
      pass_rate_avg_pct: 34.4
      hours_min: 80
      hours_typical: 88
      hours_max: unknown
      sessions_per_year: 3
      next_dates_ko: "제95회는 2026-11-21이며 접수는 2026-10-26부터 2026-11-09, 발표는 2026-12-11이다. 제94회는 2026-08-22에 이미 시행되었다. 제94회 결과 숫자는 확인하지 못했다."
      fee:
        amount: unknown
        currency: KRW
        krw_approx: unknown
        fx_date: 2026-11-11
  exemptions_ko: "지정 자격은 교육의 일부 또는 전부를 면제할 수 있다. 시험 과목 자체의 점수 면제 목록은 확인하지 못했다. 이미 한 모듈에 부분 합격한 사람은 남은 모듈만 응시할 수 있다."
  total:
    hours_min: 80
    hours_typical: 88
    hours_max: unknown
    hours_basis: provider
    hours_basis_note_ko: "협회 2026 학습가이드의 교육시간 표는 이번 조사에서 다시 열리지 않았다. 해커스금융 블로그가 응시 전 교육의 최소시간으로 집합 80시간, 인터넷 88시간을 적는다. 자습시간이 아니고 상한도 아니다. typical은 인터넷 최소시간이다. hours_max는 상한을 확인하지 못해 비운다."
    min_calendar_months: 1
    pass_rate_avg_pct: 34.4

cost:
  other_fees_ko:
    - "인증 신청 수수료와 갱신 비용은 협회 수수료 표에서 재확인하지 못했다."
    - "교육기관이 전재한 응시료는 두 모듈 66,000원, 한 모듈 39,600원이다. 협회 수수료 표로 대조하지 못해 공식 수수료 필드에는 넣지 않았다."

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
  rationale_ko: "합격률 평균 34.4%는 3점이다. 인터넷 교육 최소 88시간은 61시간 이상 150시간 이하라 시간 점수는 2다. 집합 최소 80시간도 같은 구간이다. 기존 구조 점수 2를 유지하면 평균 2.333…을 반올림해 2가 된다. 종전 수준 3은 시간 없이 계산된 값이라 대체한다."

sources:
  - url: "https://www.ifpk.org/?mnu_usn=67&mode=view&page_no=1&data_usn=180033"
    accessed: 2026-11-11
    type: official
    covers: [pass_rate]
  - url: "https://www.fpsbkorea.org/?mnu_usn=67&mode=view&page_no=1&data_usn=176778"
    accessed: 2026-11-11
    type: official
    covers: [pass_rate]
  - url: "https://www.ifpk.org/?mnu_usn=67&mode=view&page_no=1&data_usn=171523"
    accessed: 2026-11-11
    type: official
    covers: [pass_rate]
  - url: "https://www.ifpk.org/?mnu_usn=67&mode=view&page_no=1&data_usn=169609"
    accessed: 2026-11-11
    type: official
    covers: [pass_rate]
  - url: "https://www.fpsbkorea.org/file_upload/cert/jumi/info/AFPK_STUDY_GUIDE_2024.pdf"
    accessed: 2026-11-11
    type: official
    covers: [eligibility, structure, award]
  - url: "https://www.epasskorea.com/global/gbl_upload/download.asp?filepath=B2C%5CBoard&filename=2.AFPK+%ED%95%99%EC%8A%B5%EA%B0%80%EC%9D%B4%EB%93%9C_2026.pdf"
    accessed: 2026-11-11
    type: provider
    covers: [structure]
  - url: "https://korea.fpsb.org/"
    accessed: 2026-11-11
    type: official
    covers: [eligibility]
  - url: "https://www.epasskorea.com/public_html/Examinfo/info_afpk.asp?cate_idx=10031001&link_idx=3507"
    accessed: 2026-11-11
    type: provider
    covers: [fee, structure]
  - url: "https://m.blog.naver.com/fnhelp/223695116520"
    accessed: 2026-11-11
    type: provider
    covers: [hours, eligibility]
confidence:
  eligibility: medium
  award: medium
  structure: medium
  hours: low
  pass_rate: high
  fee: low
as_of: 2026-11-11
unknown_reasons:
  - "Official fee table was not opened. Provider amounts were not copied into the fee field."
  - "94th-session result notice was not found, so the newest reduced-item sitting is missing from the rate list."
  - "92nd and 90th simultaneous rates were not re-opened."
  - "Education-hour total and the full waiver list were not in the study-guide extract."
  - "Renewal credit count was not re-read."
  - "hours_max: the Hackers Finance blog states only the classroom minimum of 80 hours and the internet minimum of 88 hours, not a ceiling. Those figures are education minima, not a self-study survey."
notes_ko: "합격률은 두 모듈을 함께 본 응시자 가운데 동시 합격자 비율이다. 제93회는 564/1,694=33.29%, 제91회는 526/1,542=34.11%, 제88회는 547/1,461=37.44%, 제87회는 327/998=32.77%다. 이월 합격자를 더한 총 합격자 비율과 연간 합산 비율은 정의가 달라 평균에 넣지 않았다. 제94회부터의 150문항은 2026 학습가이드와 2026-02-20 협회 공고의 전재가 일치한다. 교육기관 페이지 일부는 아직 2018년 190문항 시간표를 보여 그 페이지의 문항 수는 쓰지 않았다. 두 모듈을 같은 날 보면 최단 기간은 1개월이다. 교육 수료는 첫 시험 전 요건이다."
```

## kr_cat_1

```yaml
id: kr_cat_1
name_ko: 전산회계 1급
name_orig: Computerized Accounting Level 1
tier: 1
region: KR
exam_type: certificate
domain: [accounting_tax]
issuer: 한국세무사회
official_url: "https://license.kacpta.or.kr"
status: active
summary_ko: 한국세무사회가 주는 국가공인 민간자격이며 등록번호는 2008-0259, 주무부처는 고용노동부다. 1급과 2급은 별도 종목이라 1급만 따로 응시할 수 있다. 이론 30%와 케이렙 실무 70%를 한 번에 보고 70점 이상이면 합격한다.
usage_ko: 기업 회계 실무 능력을 보여주는 공인 민간자격이다. 세무사 자격이나 회계감사 권한은 주지 않는다. 합격 후 경력이나 윤리 서약 없이 자격증을 발급받는다.

eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: 응시 제한 없음
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "The association exam notices state that age, education, and experience are not restricted for computerized accounting and tax qualifications."
  extra_checks_ko:
    - "시험 당일 신분증이 필요하다."
    - "같은 날 다른 급수와 함께 접수할 수 있으나, 1급 합격이 2급 합격의 조건은 아니다."
  exam_languages: [ko]
  english_level_needed: none
  english_level_reason: The theory items and the KcLep practical exam are administered in Korean.
  test_countries: [KR]
  retake_limit_ko: 응시 횟수 제한은 공고에서 확인되지 않았다.

award:
  extra_requirements: false
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko: []
  validity_ko: 자격은 회차 합격으로 발급되며 유효기간이나 보수교육 의무는 확인되지 않았다. 2026-01-06 자격증 발급수수료 조정 공고가 있어 발급 비용은 바뀔 수 있다.

structure:
  stages:
    - name_ko: 전산회계 1급
      subjects_ko:
        - "이론 회계원리 15%"
        - "이론 원가회계 10%"
        - "이론 세무회계 5%"
        - "실무 기초정보 등록·수정 15%"
        - "실무 거래자료 입력 30%"
        - "실무 부가가치세 15%"
        - "실무 입력자료 및 장부 조회 10%"
      format: mixed
      question_summary_ko: 이론 30%는 객관식 4지선다이고 실무 70%는 수험용 프로그램 케이렙을 쓰는 실기이다. 이론 문항 수는 공고에서 확인하지 못했다. 제한시간은 협회 공고 전재 기준으로 60분이다.
      duration_min: 60
      passing_rule_ko: 100점 만점에 70점 이상.
      pass_rates:
        - period: "2026-06-06-126"
          rate_pct: 35.29
          examinees: unknown
        - period: "2026-04-04-125"
          rate_pct: 42.56
          examinees: unknown
        - period: "2026-01-31-124"
          rate_pct: 46.19
          examinees: unknown
        - period: "2025-12-06-123"
          rate_pct: 49.28
          examinees: unknown
        - period: "2025-09-28-122"
          rate_pct: 57.45
          examinees: unknown
      pass_rate_avg_pct: 46.15
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: 6
      next_dates_ko: "2026년 일정으로 보도된 시험일은 01-31, 04-04, 06-06, 08-01, 10-03, 12-05이다. 기준일에 아직 남은 회차는 2026-12-05이다. 합격률 표는 2026-06-06 제126회가 최신 행이었다."
      fee:
        amount: 30000
        currency: KRW
        krw_approx: 30000
        fx_date: 2026-11-11
  exemptions_ko: "다른 자격에 의한 과목 면제는 확인되지 않았다."
  total:
    hours_min: unknown
    hours_typical: unknown
    hours_max: unknown
    hours_basis: unknown
    hours_basis_note_ko: "한국세무사회 권장시간과, 시간 합계가 적힌 에듀윌·해커스 과정 페이지를 이번 조사에서 열지 못했다. 강의 수만 있는 안내는 시간으로 바꾸지 않았다."
    min_calendar_months: 1
    pass_rate_avg_pct: 46.15

cost:
  other_fees_ko:
    - "자격증 발급비는 2023년 공고에서 5,000원이었다. 2026-01-06 발급수수료 조정 공고의 새 금액은 열지 못했다."

difficulty:
  pass_rate_score: 3
  hours_score: na
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: true
  structure_score: 3
  level: unknown
  rationale_ko: "합격률 평균 46.15%는 3점, 구조 점수는 3이다. 총 학습시간이 없어 수준은 발표하지 않는다. 종전 수준 3은 시간 없이 계산된 값이라 대체한다."

sources:
  - url: "https://license.kacpta.or.kr/m/info/info_ratio.aspx"
    accessed: 2026-11-11
    type: official
    covers: [pass_rate]
  - url: "https://www.pqi.or.kr/inf/qul/infQulBasDetail.do?qulId=421"
    accessed: 2026-11-11
    type: statistics
    covers: [eligibility, pass_rate]
  - url: "https://www.lec.co.kr/news/articleView.html?idxno=745292"
    accessed: 2026-11-11
    type: other
    covers: [fee, structure]
  - url: "https://www.seoil.ac.kr/bbs/tax/1132/401086/artclView.do"
    accessed: 2026-11-11
    type: other
    covers: [structure]
  - url: "https://www.issueon.co.kr/news/articleView.html?idxno=10791"
    accessed: 2026-11-11
    type: other
    covers: [structure]
confidence:
  eligibility: high
  award: high
  structure: medium
  hours: low
  pass_rate: high
  fee: medium
as_of: 2026-11-11
unknown_reasons:
  - "difficulty.level: total study hours are unknown, so the old level 3, computed without hours, is withdrawn."
  - "Session examinee counts are not on the association ratio page."
  - "Rates after session 126 were not on the ratio table retrieved on 2026-11-11."
  - "2026 certificate-issuance fee: the 2026-01-06 adjustment notice title was seen, not the new amount."
  - "total.hours_*: no official or surveyed hour figure."
notes_ko: "합격률은 협회 회차별 표의 백분율이다. 민간자격정보서비스의 2025년 연간 성적은 응시 62,053명, 취득 29,823명, 48.06%로 회차 평균과 비슷하지만 평균 계산에는 넣지 않았다. 상공회의소 전산회계운용사와 다른 자격이다."
```

## kr_cat_2

```yaml
id: kr_cat_2
name_ko: 전산회계 2급
name_orig: Computerized Accounting Level 2
tier: 1
region: KR
exam_type: certificate
domain: [accounting_tax]
issuer: 한국세무사회
official_url: "https://license.kacpta.or.kr"
status: active
summary_ko: 한국세무사회 국가공인 민간자격 전산회계의 2급이다. 1급을 거치지 않고 바로 응시한다. 회계원리 이론과 전산 실무를 한 시험에서 보며 70점 이상이면 합격한다.
usage_ko: 회계 보조 실무 능력을 보여주는 공인 민간자격이다. 법정 세무대리권이나 회계감사권은 없다. 합격 후 추가 경력 없이 자격증을 신청한다.

eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: 응시 제한 없음
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "Association notices state no age, education, or experience limit for this qualification."
  extra_checks_ko:
    - "신분증이 필요하다."
    - "1급과 별도 접수이며 하위 급수 합격이 요건이 아니다."
  exam_languages: [ko]
  english_level_needed: none
  english_level_reason: The exam and the KcLep practical are in Korean.
  test_countries: [KR]

award:
  extra_requirements: false
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko: []
  validity_ko: 회차 합격으로 발급된다. 유효기간과 보수교육은 확인되지 않았다.

structure:
  stages:
    - name_ko: 전산회계 2급
      subjects_ko:
        - "이론 회계원리 30%"
        - "실무 기초정보 20%"
        - "실무 거래자료 입력 40%"
        - "실무 조회 10%"
      format: mixed
      question_summary_ko: 이론 30%는 4지선다, 실무 70%는 케이렙 실기다. 이론의 평가 과목은 회계원리 하나다. 제한시간은 공고 전재 기준 60분이다.
      duration_min: 60
      passing_rule_ko: 100점 만점에 70점 이상.
      pass_rates:
        - period: "2026-06-06-126"
          rate_pct: 52.82
          examinees: unknown
        - period: "2026-04-04-125"
          rate_pct: 59.06
          examinees: unknown
        - period: "2026-01-31-124"
          rate_pct: 60.43
          examinees: unknown
        - period: "2025-12-06-123"
          rate_pct: 49.23
          examinees: unknown
        - period: "2025-09-28-122"
          rate_pct: 47.87
          examinees: unknown
      pass_rate_avg_pct: 53.88
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: 6
      next_dates_ko: "2026년 남은 시험일로 보도된 날은 2026-12-05이다. 합격률 표의 최신 행은 2026-06-06 제126회였다."
      fee:
        amount: 30000
        currency: KRW
        krw_approx: 30000
        fx_date: 2026-11-11
  total:
    hours_min: unknown
    hours_typical: unknown
    hours_max: unknown
    hours_basis: unknown
    hours_basis_note_ko: "시간 합계가 적힌 시험 주관 기관 또는 지정 학원 페이지를 열지 못했다."
    min_calendar_months: 1
    pass_rate_avg_pct: 53.88

cost:
  other_fees_ko:
    - "2023년 공고의 자격증 발급비는 5,000원이다. 2026년 조정 후 금액은 확인하지 못했다."

difficulty:
  pass_rate_score: 2
  hours_score: na
  structure_points:
    subjects_3_or_more: false
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: true
  structure_score: 2
  level: unknown
  rationale_ko: "합격률 평균 53.88%는 2점, 구조 점수는 2다. 총 학습시간이 없어 수준은 발표하지 않는다. 종전 수준 2는 대체한다."

sources:
  - url: "https://license.kacpta.or.kr/m/info/info_ratio.aspx"
    accessed: 2026-11-11
    type: official
    covers: [pass_rate]
  - url: "https://www.pqi.or.kr/inf/qul/infQulBasDetail.do?qulId=421"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://www.seoil.ac.kr/bbs/tax/1132/401086/artclView.do"
    accessed: 2026-11-11
    type: other
    covers: [structure]
  - url: "https://www.lec.co.kr/news/articleView.html?idxno=745292"
    accessed: 2026-11-11
    type: other
    covers: [fee, structure]
confidence:
  eligibility: high
  award: high
  structure: medium
  hours: low
  pass_rate: high
  fee: medium
as_of: 2026-11-11
unknown_reasons:
  - "difficulty.level: total study hours are unknown, so the old level 2, computed without hours, is withdrawn."
  - "Session examinees are not published on the ratio page."
  - "Post-126 session rates were absent from the retrieved table."
  - "2026 certificate fee after the January 2026 adjustment is unknown."
  - "total.hours_* unknown."
notes_ko: "2025년 민간자격 연간 성적은 응시 31,310명, 합격률 53.51%다. 난이도 평균에는 회차 백분율만 썼다."
```

## kr_cfp

```yaml
id: kr_cfp
name_ko: CFP
name_orig: CERTIFIED FINANCIAL PLANNER (Korea)
tier: 1
region: KR
exam_type: certificate
domain: [financial_planning]
issuer: FPSB International Korea (Financial Planning Standards Board Ltd.)
official_url: "https://korea.fpsb.org/cfp-certification/"
status: active
summary_ko: 한국 CFP 인증은 2025-12-01부터 FPSB International Korea가 직접 운영한다. 미국 CFP Board 시험이 아니며 지역은 한국이다. 공개된 요건은 지정 교육, FPSB International Korea 시험, 그 기관이 정한 경험, 윤리 서약의 4가지다.
usage_ko: 윤리와 실무 기준을 갖춘 재무설계 전문가 명칭으로 쓰인다. 투자권유나 세무대리의 법정 자격은 아니다. 2026년 시험일과 수수료는 운영 사이트가 공개하지만, 시험 구조, 합격률, 경험 연수는 아직 공개되어 있지 않다.

eligibility:
  nationality_rule: none
  nationality_countries: []
  nationality_note_ko: 국적 제한은 현재 인증 페이지에 없다.
  paths:
    - label_ko: 지정 교육 이수
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "The FPSB International Korea certification page says the candidate must complete the CFP education course at a provider designated by FPSB International Korea and must pass the FPSB International Korea CFP exam."
  extra_checks_ko:
    - "학위 요건은 현재 페이지에 없다."
    - "교육 시간 합계와 AFPK 보유가 아직 필수인지는 인증 페이지에 없다. 홈페이지는 2026년 시험을 2026-11-21로 적는다. 이관 전 규칙을 현재 요건으로 쓰지 않았다."
    - "윤리 결격사유에 해당하지 않아야 한다."
  exam_languages: [ko]
  english_level_needed: unknown
  english_level_reason: The Korea program pages are in Korean, but the current exam language and item style have not been published by FPSB International Korea.
  test_countries: [KR]

award:
  extra_requirements: true
  work_years_min: unknown
  work_fields_accepted: [banking_finance, securities_asset_mgmt, insurance]
  other_requirements_ko:
    - "FPSB International Korea가 정한 실무경험 요건을 충족해야 한다. 연수와 인정 직무는 현재 페이지에 숫자로 나와 있지 않다."
    - "고객 이익 우선과 FPSB International Korea 윤리·업무기준 준수를 서약해야 한다."
    - "자격 결격사유에 해당하지 않아야 한다."
  time_limit_ko: 경험 충족과 인증 신청의 현재 기한은 공개되어 있지 않다.
  validity_ko: "2027년 변경 안내는 자격인증 수수료가 2년간의 인증을 포함한다고 적는다. 2027-01-01부터 윤리 계속교육은 현행 2시간에서 3시간으로 늘고, 재무설계 심리학 계속교육 2시간이 추가된다. 두 영역 모두 최소 1학점은 FPSB International에서 받아야 한다. 인증 페이지는 교육, 경험, 전문성 개발 요건을 유지해야 명칭을 쓸 수 있다고 적는다."

structure:
  stages:
    - name_ko: CFP 시험
      subjects_ko: []
      format: unknown
      question_summary_ko: 현재 운영 기관이 과목, 문항 수, 시험 형을 인증 페이지에 공개하지 않았다.
      duration_min: unknown
      passing_rule_ko: unknown
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: unknown
      next_dates_ko: "홈페이지의 2026년 시험 일정은 2026-11-21 토요일이고, 온라인 등록은 2026-09-15에 시작된다고 적는다. 응시 신청 페이지는 확인 화면만 나와 시험 형과 문항 수를 열지 못했다."
      fee:
        amount: 242000
        currency: KRW
        krw_approx: 242000
        fx_date: 2026-11-11
  total:
    hours_min: unknown
    hours_typical: unknown
    hours_max: unknown
    hours_basis: unknown
    hours_basis_note_ko: "현재 운영 사이트는 교육 이수 시간이나 수험 시간을 숫자로 적지 않는다. 2027년부터 해커스가 승인 교육기관이고 재무설계 심리학 모듈이 추가된다는 문장만 있다. 이관 전 학원 시간은 가져오지 않았다."
    min_calendar_months: unknown
    pass_rate_avg_pct: unknown

cost:
  other_fees_ko:
    - "2026년 자격인증 수수료는 최초 인증, 갱신, 회복 모두 220,000원이며 부가세가 포함되고 2년 인증을 포함한다고 2027년 변경 안내가 적는다."
    - "2027-01-01부터 시험 수수료는 249,500원, 자격인증 수수료는 226,500원이다. 실효 후 회복 수수료는 12개월까지 월 9,438원, 그 이후 5년까지 연 113,250원이며 인증 수수료와 별도이다. 금액은 모두 부가세 포함이다."

difficulty:
  pass_rate_score: na
  hours_score: na
  structure_points:
    subjects_3_or_more: false
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: na
  level: unknown
  rationale_ko: "합격률과 수험 시간이 아직 없어 난이도 수준을 계산하지 않는다. 계속교육 3시간과 2시간은 2027년 갱신 요건이라 수험 시간에 넣지 않았다."

sources:
  - url: "https://korea.fpsb.org/cfp-certification/"
    accessed: 2026-11-11
    type: official
    covers: [eligibility, award]
  - url: "https://korea.fpsb.org/"
    accessed: 2026-11-11
    type: official
    covers: [eligibility, award, structure]
  - url: "https://korea.fpsb.org/2027-changes/"
    accessed: 2026-11-11
    type: official
    covers: [fee, award]
  - url: "https://www.ifpk.org/?mnu_usn=67&mode=view&page_no=1&data_usn=177217"
    accessed: 2026-11-11
    type: official
    covers: [eligibility]
confidence:
  eligibility: medium
  award: low
  structure: low
  hours: low
  pass_rate: low
  fee: medium
as_of: 2026-11-11
unknown_reasons:
  - "Exam format, subjects, duration, passing rule, sessions per year, pass rates, experience years, and education-hour totals remain unpublished. https://korea.fpsb.org/exam_application/ returned only a bot-check loader."
  - "structure_points are false only as placeholders. They were not verified, structure_score stays na, and difficulty.level is unknown because hours and the pass rate are unknown."
  - "min_calendar_months: experience years are unpublished, so a shortest calendar was not invented. The 2026-11-21 date is one sitting, not a full path length."
  - "Pre-transfer pass rates and the old two-day 70% rule are historical and were not entered as current values."
notes_ko: "korea.fpsb.org는 2025-12-01부터 FPSB International Korea가 한국 프로그램을 직접 운영한다고 적고, 2026년 시험을 2026-11-21, 온라인 등록 시작을 2026-09-15로 적는다. 같은 페이지의 한국어 주소는 서울시 종로구 세종대로23길 47, 601호이고 영어 바닥글은 417 Yeongdong-daero, Gangnam District, Seoul이라 두 주소는 맞추지 못했다. 대표자는 Dante De Gori, 연락처는 info@korea.fpsb.org, 02-3498-6121이다. 2026년 시험 수수료 242,000원과 인증 수수료 220,000원은 2027년 변경 안내의 부가세 포함 금액이다. 이관 전 학원 시간, 경력 연수, 합격률은 넣지 않았다. 한국재무설계협회 공지는 AFPK가 이관에 포함되지 않는다고 적는다."
```

## kr_claims_adjuster_bodily

```yaml
# ---------- A. Identity ----------
id: kr_claims_adjuster_bodily
name_ko: 신체손해사정사
name_orig: 신체손해사정사
tier: 1
region: KR
exam_type: license
domain: [insurance]
issuer: 금융감독원
official_url: "https://certi.kidi.or.kr:10443/exam/exam-guide/notice/view/3027"
status: active
summary_ko: 금융감독원장이 공고하고 보험개발원이 운영하는 신체손해사정사 시험이다. 1차에 영어가 없고 2차는 의학, 책임·근재, 제3보험, 자동차 대인 네 과목이다. 2026년 2차 선발예정인원은 340명이다.
usage_ko: 사람의 신체와 관련된 손해액을 사정하는 손해사정사로 등록하는 시험이다. 시행규칙은 시행령 제1조의2 제3항 제6호와 제4항의 신체 손해, 자동차 사고와 그 밖의 보험사고의 신체 손해를 범위로 적는다. 합격 후 해당 분야 실무수습 6개월과 금융감독원 등록이 필요하다. 세 종류를 모두 마치면 종합 등록을 신청할 수 있다.
# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: 1차 응시
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "The 2026 plan says the first adjuster exam has no education, sex, age, career, or nationality limit."
    - label_ko: 5년 경력으로 1차를 면제받고 2차만 응시
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 5
      work_fields_accepted: [insurance]
      source_text: "For bodily injury, rule 53(2) also counts five years at a life insurer or the life association, plus the non-life insurer, non-life association, Korea Fire Insurance Association, and claims-adjusting corporation."
  extra_checks_ko:
    - "2차는 2026년 기준 제48회 또는 제49회 신체 1차, 5년 해당 분야 경력, 또는 접수 초일 전에 다른 종류로 등록된 손해사정사여야 한다."
    - "신체 1차에는 영어 성적이 필요 없다. 신체 자격으로 재물을 보려면 영어 성적이 필요하다."
    - "개인 접수만 되며 방문 접수는 안 된다."
  exam_languages: [ko]
  english_level_needed: none
  english_level_reason: The bodily-injury written exams are Korean and do not use the English score substitute.
  test_countries: [KR]
  retake_limit_ko: 1차 합격 면제는 다음 한 회다. 부정행위는 5년간 응시 금지다.
# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko:
    - "신체 분야 실무수습 6개월이 필요하다. 장소는 금융감독원, 손해보험회사, 손해보험협회에 더해 생명보험회사와 생명보험협회, 그리고 금융위원회 지정 기관이다."
    - "인정 외국 자격 또는 해당 분야 2년 이상은 실무수습을 면제한다."
    - "금융감독원장 등록과 등록수수료 1만원이 필요하다."
  time_limit_ko: 2차 합격 후 수습 착수 기한은 열린 조문에 없다.
  validity_ko: 열린 시행규칙에는 신체손해사정사 등록의 기간 만료나 보수교육 주기가 없다.
# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: 1차 시험
      subjects_ko:
        - "보험업법"
        - "보험계약법(상법 보험편)"
        - "손해사정이론"
      format: mcq
      question_summary_ko: 객관식 4지선다 택1. 문항 수는 2026년 계획에 없다.
      duration_min: 120
      passing_rule_ko: 매 과목 40점 이상, 평균 60점 이상. 한 교시 결시하면 1차 전체가 무효다.
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: 1
      next_dates_ko: "2026년 1차는 2026-04-12, 접수 2026-02-24 09:30–2026-02-27 18:00, 합격 공고 예정 2026-05-29. 1교시 10:00–11:20, 2교시 11:50–12:30. 서울. 제50회는 미공고다."
      fee:
        amount: 30000
        currency: KRW
        krw_approx: 30000
        fx_date: 2026-11-11
    - name_ko: 2차 시험
      subjects_ko:
        - "의학이론"
        - "책임보험·근로자재해보상보험의 이론과 실무"
        - "제3보험의 이론과 실무"
        - "자동차보험의 이론과 실무(대인배상 및 자기신체손해)"
      format: mixed
      question_summary_ko: 논문형 약술 또는 주관식. 문항 수는 계획에 없다. 신체 2차 계산기 허용 문구는 없다.
      duration_min: 360
      passing_rule_ko: 매 과목 40점 이상, 평균 60점 이상. 2026년 선발예정인원 340명이 공고되어 40점 이상자 중 총점 순 선발이 가능하고 동점자는 모두 합격이다.
      pass_rates:
        - period: "2026"
          rate_pct: 11.8
          examinees: 2886
        - period: "2025"
          rate_pct: 13.2
          examinees: 2621
        - period: "2024"
          rate_pct: 15.2
          examinees: 2269
        - period: "2023"
          rate_pct: 15.6
          examinees: 2192
        - period: "2022"
          rate_pct: 15.8
          examinees: 2150
      pass_rate_avg_pct: 14.32
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: 1
      next_dates_ko: "2026년 2차는 2026-07-26, 접수 2026-06-09 09:30–2026-06-12 18:00. 의학 10:00–11:30, 책임·근재 11:50–13:20, 제3보험 14:20–15:50, 자동차 대인 16:10–17:40. 합격 공고 예정 2026-09-18. 제50회는 미공고다."
      fee:
        amount: 50000
        currency: KRW
        krw_approx: 50000
        fx_date: 2026-11-11
  exemptions_ko: 5년 경력의 기관에 생명보험회사와 생명보험협회가 포함된다. 다른 종류 등록 손해사정사는 1차를 면제한다. 인정 외국 자격은 1·2차를 면제한다. 1995년 이전 제1종·제3종 대인 1차와 2003–2013년 제3종 대인·제4종 경력 제출자는 계획의 전환표상 신체 분야다.
  total:
    hours_min: unknown
    hours_typical: unknown
    hours_max: unknown
    hours_basis: unknown
    hours_basis_note_ko: "금융감독원 제45–49회 합격 보도자료에는 권장 학습시간이 없다. 허용 수험기관 페이지에서 신체손해사정사 준비 시간 숫자를 열지 못했다. 등록교육·보수교육 시간은 시험 학습시간이 아니다."
    min_calendar_months: 4
    pass_rate_avg_pct: 14.32
# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "등록수수료 10000원."
    - "수수료 감면과 취소 환불 비율은 2026년 공통 계획과 같다."
# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 5
  hours_score: na
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 3
  level: unknown
  rationale_ko: "2차 최종 합격률 5개년 산술평균 14.32는 15 미만이라 합격률 점수는 5이다. 학습시간이 없어 시간 점수는 na이고, 구조만으로 두었던 등급 3은 무효라 지운다. 시간이 비어 있으면 합격률 점수와 구조 점수 3을 평균해 등급을 만들지 않는다."
# ---------- G. Sources and confidence ----------
sources:
  - url: "https://certi.kidi.or.kr:10443/exam/exam-guide/notice/view/3027"
    accessed: 2026-11-11
    type: official
    covers: [eligibility, structure, fee]
  - url: "https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=269221&chrClsCd=010202&efYd=20250218"
    accessed: 2026-11-11
    type: regulator
    covers: [eligibility, award, structure, fee]
  - url: "https://www.law.go.kr/LSW/flDownload.do?flSeq=149132625"
    accessed: 2026-11-11
    type: regulator
    covers: [structure]
  - url: "https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=229239&menuNo=200218"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://www.fss.or.kr/fss/cmmn/file/fileDown.do?menuNo=200218&atchFileId=8590483df7644650bafd0b1be4ed33a6&fileSn=2"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=204203&menuNo=200218"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=187426&menuNo=200218"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=130549&menuNo=200218"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=56948&menuNo=200218"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
confidence:
  eligibility: high
  award: high
  structure: high
  hours: low
  pass_rate: high
  fee: high
as_of: 2026-11-11
unknown_reasons:
  - "Stage-1 pass_rates: the 45th through 49th final-result releases count only the second exam."
  - "question counts: 2026년 시행계획에 없다."
  - "hours_min, hours_typical, hours_max, hours_basis, hours_score, difficulty.level: no preparation-hour figure for the bodily-injury adjuster, so the level stays unknown."
notes_ko: 신체는 1차 면제 경력과 실무수습 장소에 생명보험회사·생명보험협회가 포함되는 점이 재물·차량과 다르다. 운영 창구는 보험개발원 약관업무팀이다. 최단 시험 일정은 4개월이고 수습 6개월은 그 다음이다.
```

## kr_claims_adjuster_property

```yaml
# ---------- A. Identity ----------
id: kr_claims_adjuster_property
name_ko: 재물손해사정사
name_orig: 재물손해사정사
tier: 1
region: KR
exam_type: license
domain: [insurance]
issuer: 금융감독원
official_url: "https://certi.kidi.or.kr:10443/exam/exam-guide/notice/view/3027"
status: active
summary_ko: 금융감독원장이 공고하고 보험개발원이 접수·운영하는 재물손해사정사 시험이다. 1차와 2차로 나뉘며 2026년 제49회가 시행되었다. 재물 시험만 1차에 영어 성적 대체가 있고, 2차 선발예정인원은 2026년 60명이다.
usage_ko: 시행규칙 제52조 제1호의 재물 손해액 사정을 하는 손해사정사로 등록하는 시험이다. 범위는 시행령 제1조의2 제3항 제1호·제2호 및 제6호부터 제14호까지의 보험계약이다. 합격만으로 등록되지 않고 해당 분야 실무수습 6개월 뒤 금융감독원장에게 등록한다. 재물·차량·신체를 모두 합격하고 실무수습을 마치면 종합손해사정사 등록을 신청할 수 있으며, 종합은 별도 시험이 아니다.
# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: 1차 응시
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "The 2026 plan says the first exam has no limit of education, sex, age, career, or nationality."
    - label_ko: 5년 경력으로 1차를 면제받고 2차만 응시
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 5
      work_fields_accepted: [insurance]
      source_text: "Rule 53(2) exempts the first exam for five or more years of claims work at a non-life insurer, the non-life association, the Korea Fire Insurance Association, or a claims-adjusting corporation."
  extra_checks_ko:
    - "2차는 같은 분야 1차 합격이 직전 회 또는 그 회이거나, 위 5년 경력이거나, 다른 종류 손해사정사로 접수 초일 전에 등록된 사람이어야 한다. 2026년은 제48회 또는 제49회 재물 1차다."
    - "경력은 2026년 2차 접수 초일인 2026-06-09 현재로 센다. 사전등록자는 그 기간 종료일 이전 발급일이다."
    - "영어는 공고일부터 역산해 5년이 되는 날이 속한 해의 1월 1일 이후 국내 정기시험 성적으로 대체한다. 2026년 공고에는 토플 PBT 530, IBT 71, 토익 700, 텝스 340, 지텔프 레벨2 65, 플렉스 625 이상이다."
    - "성적표는 해당 영어시험의 유효기간 안에 사전등록되어 진위가 확인되어야 한다. 2023-02-18 이후 응시로 이미 확인된 성적은 추가 등록이 필요 없다."
    - "청각장애인은 영어 응시 때부터 1·2차 합격까지 청각장애인 등록이 유지되어야 하며 별도 점수표가 있다."
    - "차량 또는 신체 손해사정사가 재물 2차를 보려면 1차는 면제되나 영어 성적을 내야 한다."
    - "원서는 개인 접수만 되고 방문 접수는 안 된다. 인터넷 또는 등기우편이다."
  exam_languages: [ko]
  english_level_needed: working
  english_level_reason: The written papers are Korean, but the first-exam English subject is replaced by a score at or above TOEIC 700 or TOEFL iBT 71.
  test_countries: [KR]
  retake_limit_ko: 1차 합격은 다음 회에만 1차를 면제한다. 시도 횟수 상한은 없다. 부정행위는 그 시험을 무효로 하고 5년간 응시를 막는다.
# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko:
    - "해당 분야 실무수습 6개월이 필요하다. 장소는 금융감독원, 손해보험회사, 손해보험협회, 그 밖에 금융위원회가 지정하는 기관이다."
    - "금융위원회가 인정하는 외국 손해사정사 자격, 또는 그 기관에서 해당 분야 손해사정 업무 2년 이상은 실무수습을 면제한다."
    - "등록은 실무수습 증명과 이력서를 붙여 금융감독원장에게 신청하고 등록수수료는 1만원이다."
  time_limit_ko: 2차 합격 후 실무수습을 시작해야 하는 기한은 열린 조문에 없다.
  validity_ko: 열린 시행규칙에는 재물손해사정사 등록의 유효기간이나 보수교육 주기가 없다.
# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: 1차 시험
      subjects_ko:
        - "보험업법"
        - "보험계약법(상법 보험편)"
        - "손해사정이론"
        - "영어(다른 시험 성적으로 대체)"
      format: mcq
      question_summary_ko: 2026년 계획은 객관식 4지선다 택1이다. 문항 수는 계획에 없다. 영어는 시험장 과목이 아니다.
      duration_min: 120
      passing_rule_ko: 영어를 뺀 매 과목 40점 이상, 평균 60점 이상. 1교시 결시면 1차 전체가 무효다.
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: 1
      next_dates_ko: "2026년 제49회 1차는 2026-04-12 일요일이었고 접수는 2026-02-24 09:30부터 2026-02-27 18:00였다. 장소 공고 예정일은 2026-03-27, 합격 공고 예정일은 2026-05-29였다. 1교시 10:00–11:20에 보험업법과 보험계약법, 2교시 11:50–12:30에 손해사정이론. 장소는 서울. 기준일에 이미 시행되었다. 제50회 일정은 공고 전이다."
      fee:
        amount: 30000
        currency: KRW
        krw_approx: 30000
        fx_date: 2026-11-11
    - name_ko: 2차 시험
      subjects_ko:
        - "책임·화재·기술보험 등의 이론과 실무"
        - "해상보험의 이론과 실무(상법 해상편 포함)"
        - "회계원리"
      format: mixed
      question_summary_ko: 논문형이며 약술 또는 주관식 풀이다. 문항 수는 2026년 계획에 없다. 회계원리만 저장 기능 없는 단순계산기를 허용하고 공학용·재무용 계산기는 금지한다.
      duration_min: 270
      passing_rule_ko: 매 과목 40점 이상, 평균 60점 이상. 2026년은 선발예정인원 60명을 미리 공고했으므로, 매 과목 40점 이상인 사람 중 총점 순으로 60명 안에서 합격시킬 수 있고 동점자는 소수점 둘째 자리까지 보아 모두 합격이다.
      pass_rates:
        - period: "2026"
          rate_pct: 10.6
          examinees: 567
        - period: "2025"
          rate_pct: 11.2
          examinees: 446
        - period: "2024"
          rate_pct: 12.9
          examinees: 403
        - period: "2023"
          rate_pct: 14.6
          examinees: 343
        - period: "2022"
          rate_pct: 16.2
          examinees: 309
      pass_rate_avg_pct: 13.10
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: 1
      next_dates_ko: "2026년 2차는 2026-07-26 일요일이었고 접수는 2026-06-09 09:30부터 2026-06-12 18:00, 경력면제 사전등록은 2026-04-27 09:30부터 2026-05-22 18:00였다. 회계원리 10:00–11:30, 해상 11:50–13:20, 책임·화재·기술 14:20–15:50. 합격 공고 예정일은 2026-09-18, 장소 공고 예정일은 2026-07-10이었다. 제50회는 미공고다."
      fee:
        amount: 50000
        currency: KRW
        krw_approx: 50000
        fx_date: 2026-11-11
  exemptions_ko: 5년 해당 분야 경력 또는 다른 종류로 등록된 손해사정사는 1차를 면제한다. 금융위원회가 인정하는 외국 자격은 1차와 2차를 모두 면제한다. 1995년 이전 제1종·제2종 1차 합격과 2003–2013년 제1종·제2종 경력 제출자는 2026년 계획의 전환표에 따라 재물 2차 응시 분야로 적혀 있다.
  total:
    hours_min: unknown
    hours_typical: unknown
    hours_max: unknown
    hours_basis: unknown
    hours_basis_note_ko: "금융감독원 제45–49회 합격 보도자료에는 권장 학습시간이 없다. 보험연수원 보험계리사 2차 사이버 목록은 교육기간 3개월만 있고 학습 시간 수가 없으며, 그 3개월은 수강 가능 기간이라 시간으로 바꾸지 않았다. 재물손해사정사에 대해 인카·해커스·에듀윌이 준비 시간을 적은 페이지는 열지 못했다. 등록교육·보수교육 시간은 시험 학습시간이 아니다."
    min_calendar_months: 4
    pass_rate_avg_pct: 13.10
# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "등록수수료 10000원(시행규칙 제56조)."
    - "기초생활 수급·차상위, 장애인연금 수급, 한부모가족 지원대상은 수수료 감면 대상이 될 수 있다. 감면액은 계획에 금액이 없다."
    - "접수 마감부터 시험 15일 전까지 취소하면 전액, 14일 전부터 전날까지는 50퍼센트를 시험 후 15일 안에 환불한다. 시행규칙 제49조 제3항의 불가피한 결시도 시험 후 15일 안에 신청하면 전액 환불이다."
# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 5
  hours_score: na
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 3
  level: unknown
  rationale_ko: "2차 최종 합격률 5개년 산술평균 13.10은 15 미만이라 합격률 점수는 5이다. 응시자는 2차 응시자이고 1차 합격률은 이 보도자료에 없어 평균에 넣지 않았다. 학습시간이 없어 시간 점수는 na이고, 구조만으로 두었던 등급 3은 무효라 지운다. 시간이 비어 있으면 합격률 점수와 구조 점수 3을 평균해 등급을 만들지 않는다."
# ---------- G. Sources and confidence ----------
sources:
  - url: "https://certi.kidi.or.kr:10443/exam/exam-guide/notice/view/3027"
    accessed: 2026-11-11
    type: official
    covers: [eligibility, structure, fee]
  - url: "https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=269221&chrClsCd=010202&efYd=20250218"
    accessed: 2026-11-11
    type: regulator
    covers: [eligibility, award, structure, fee]
  - url: "https://www.law.go.kr/LSW/flDownload.do?flSeq=149132625"
    accessed: 2026-11-11
    type: regulator
    covers: [structure]
  - url: "https://www.law.go.kr/LSW/flDownload.do?flSeq=149132619"
    accessed: 2026-11-11
    type: regulator
    covers: [eligibility]
  - url: "https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=229239&menuNo=200218"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://www.fss.or.kr/fss/cmmn/file/fileDown.do?menuNo=200218&atchFileId=8590483df7644650bafd0b1be4ed33a6&fileSn=2"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=204203&menuNo=200218"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=187426&menuNo=200218"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=130549&menuNo=200218"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=56948&menuNo=200218"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
confidence:
  eligibility: high
  award: high
  structure: high
  hours: low
  pass_rate: high
  fee: high
as_of: 2026-11-11
unknown_reasons:
  - "Stage-1 pass_rates: the 45th through 49th final-result releases count only the second exam."
  - "question counts: 2026년 시행계획에 문항 수가 없다."
  - "hours_min, hours_typical, hours_max, hours_basis, hours_score, difficulty.level: no preparation-hour figure for the property adjuster, so the level stays unknown."
notes_ko: "2차 합격률은 금융감독원 제45–49회 최종합격 보도자료의 재물 행이다. 합계 손사 합격률은 이 종목 기록이 아니다. 1차 영어를 뺀 시험 시간은 120분이다. 시행규칙은 1차에 기입형 병행을 허용하지만 2026년 계획은 4지선다만 실시했다. 접수·문의는 보험개발원 약관업무팀, 서울 영등포구 여의대로 108 파크원 타워2 31층, exam@kidi.or.kr, 02-368-4060이다. 같은 해 1차 4월과 2차 7월을 잇는 최단 일정은 4개월이고, 등록용 실무수습 6개월은 그 뒤에 붙는다."
```

## kr_claims_adjuster_vehicle

```yaml
# ---------- A. Identity ----------
id: kr_claims_adjuster_vehicle
name_ko: 차량손해사정사
name_orig: 차량손해사정사
tier: 1
region: KR
exam_type: license
domain: [insurance]
issuer: 금융감독원
official_url: "https://certi.kidi.or.kr:10443/exam/exam-guide/notice/view/3027"
status: active
summary_ko: 금융감독원장이 공고하고 보험개발원이 운영하는 차량손해사정사 시험이다. 1차 과목에 영어가 없고, 2차는 자동차보험 대물·차량손해와 자동차 구조·정비 두 과목이다. 2026년 2차 선발예정인원은 100명이다.
usage_ko: 자동차 사고로 인한 차량과 그 밖의 재산상 손해액을 사정하는 손해사정사로 등록하는 시험이다. 사람의 신체 손해는 신체손해사정사 범위다. 합격 후 해당 분야 실무수습 6개월과 금융감독원 등록이 필요하다. 세 종류를 모두 합격하고 실무수습을 마치면 종합 등록을 신청할 수 있다.
# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: 1차 응시
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "The 2026 plan says the adjuster first exam has no education, sex, age, career, or nationality limit."
    - label_ko: 5년 경력으로 1차를 면제받고 2차만 응시
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 5
      work_fields_accepted: [insurance]
      source_text: "Rule 53(2) exempts the first exam after five years of claims work at a non-life insurer, the non-life association, the Korea Fire Insurance Association, or a claims-adjusting corporation."
  extra_checks_ko:
    - "2차는 2026년 기준 제48회 또는 제49회 차량 1차 합격, 5년 해당 분야 경력, 또는 접수 초일 전에 다른 종류로 등록된 손해사정사여야 한다."
    - "차량 1차에는 영어 성적표가 필요 없다. 차량 자격으로 재물 시험에 가려면 그때 영어 성적이 필요하다."
    - "2003–2013년에 자동차정비기능사 2급 이상과 경력 3년 이상 5년 미만으로 서류를 낸 사람은, 그 특례가 폐지되어 5년에 부족한 경력을 더 내야 서면 접수가 된다."
    - "개인 접수만 되며 방문 접수는 안 된다."
  exam_languages: [ko]
  english_level_needed: none
  english_level_reason: The vehicle written exams are Korean and the English score gate applies only when this license holder sits the property exam.
  test_countries: [KR]
  retake_limit_ko: 1차 합격의 면제는 다음 한 회뿐이다. 부정행위는 5년간 응시 금지다.
# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko:
    - "차량 분야 실무수습 6개월이 필요하다. 장소는 금융감독원, 손해보험회사, 손해보험협회, 금융위원회 지정 기관이다."
    - "인정 외국 자격 또는 해당 분야 2년 이상 근무는 실무수습을 면제한다."
    - "금융감독원장 등록과 등록수수료 1만원이 필요하다."
  time_limit_ko: 2차 합격 후 수습 착수 기한은 열린 조문에 없다.
  validity_ko: 열린 시행규칙에는 차량손해사정사 등록의 기간 만료나 보수교육 주기가 없다.
# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: 1차 시험
      subjects_ko:
        - "보험업법"
        - "보험계약법(상법 보험편)"
        - "손해사정이론"
      format: mcq
      question_summary_ko: 객관식 4지선다 택1. 문항 수는 2026년 계획에 없다.
      duration_min: 120
      passing_rule_ko: 매 과목 40점 이상, 평균 60점 이상. 한 교시라도 결시면 1차 전체가 무효다.
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: 1
      next_dates_ko: "2026년 1차는 2026-04-12, 접수 2026-02-24 09:30–2026-02-27 18:00, 합격 공고 예정 2026-05-29. 1교시 10:00–11:20 보험업법·보험계약법, 2교시 11:50–12:30 손해사정이론. 서울. 제50회는 미공고다."
      fee:
        amount: 30000
        currency: KRW
        krw_approx: 30000
        fx_date: 2026-11-11
    - name_ko: 2차 시험
      subjects_ko:
        - "자동차보험의 이론과 실무(대물배상 및 차량손해)"
        - "자동차 구조 및 정비이론과 실무"
      format: mixed
      question_summary_ko: 논문형 약술 또는 주관식. 문항 수는 계획에 없다. 차량 2차에는 계산기 허용 문구가 없고, 허용은 계리 전과목과 재물 2차 회계원리만 적혀 있다.
      duration_min: 180
      passing_rule_ko: 매 과목 40점 이상, 평균 60점 이상. 2026년 선발예정인원 100명이 공고되어 40점 이상자 중 총점 순으로 선발할 수 있고 동점자는 모두 합격이다.
      pass_rates:
        - period: "2026"
          rate_pct: 19.2
          examinees: 520
        - period: "2025"
          rate_pct: 18.8
          examinees: 590
        - period: "2024"
          rate_pct: 18.4
          examinees: 598
        - period: "2023"
          rate_pct: 17.1
          examinees: 644
        - period: "2022"
          rate_pct: 20.6
          examinees: 533
      pass_rate_avg_pct: 18.82
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: 1
      next_dates_ko: "2026년 2차는 2026-07-26, 접수 2026-06-09 09:30–2026-06-12 18:00, 경력면제 사전등록 2026-04-27–2026-05-22. 1교시 10:00–11:30 자동차보험 대물, 2교시 11:50–13:20 구조·정비. 합격 공고 예정 2026-09-18. 제50회는 미공고다."
      fee:
        amount: 50000
        currency: KRW
        krw_approx: 50000
        fx_date: 2026-11-11
  exemptions_ko: 5년 경력과 다른 종류 등록 손해사정사는 1차를 면제한다. 인정 외국 자격은 1·2차를 면제한다. 1995년 이전 제3종(1991년 이전)과 제3종 대물·차량(1992–1995) 1차 합격, 그리고 2003–2013년 제3종 대물·차량 경력 제출자는 계획의 전환표상 차량 분야다.
  total:
    hours_min: unknown
    hours_typical: unknown
    hours_max: unknown
    hours_basis: unknown
    hours_basis_note_ko: "금융감독원 제45–49회 합격 보도자료에는 권장 학습시간이 없다. 허용 수험기관 페이지에서 차량손해사정사 준비 시간 숫자를 열지 못했다. 등록교육·보수교육 시간은 시험 학습시간이 아니다."
    min_calendar_months: 4
    pass_rate_avg_pct: 18.82
# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "등록수수료 10000원."
    - "수수료 감면 대상과 취소 환불(15일 전까지 전액, 14일 전부터 전날까지 50퍼센트)은 재물 시험과 같은 2026년 계획이다."
# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: 4
  hours_score: na
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 3
  level: unknown
  rationale_ko: "2차 최종 합격률 5개년 산술평균 18.82는 15–29라 합격률 점수는 4이다. 2024년은 당해 보도자료의 18.4를 썼다. 이듬해 비교 열의 18.6을 써도 평균은 18.86으로 같은 구간이다. 학습시간이 없어 시간 점수는 na이고, 구조만으로 두었던 등급 3은 무효라 지운다. 시간이 비어 있으면 등급을 매기지 않는다."
# ---------- G. Sources and confidence ----------
sources:
  - url: "https://certi.kidi.or.kr:10443/exam/exam-guide/notice/view/3027"
    accessed: 2026-11-11
    type: official
    covers: [eligibility, structure, fee]
  - url: "https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=269221&chrClsCd=010202&efYd=20250218"
    accessed: 2026-11-11
    type: regulator
    covers: [eligibility, award, structure, fee]
  - url: "https://www.law.go.kr/LSW/flDownload.do?flSeq=149132625"
    accessed: 2026-11-11
    type: regulator
    covers: [structure]
  - url: "https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=229239&menuNo=200218"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://www.fss.or.kr/fss/cmmn/file/fileDown.do?menuNo=200218&atchFileId=8590483df7644650bafd0b1be4ed33a6&fileSn=2"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=204203&menuNo=200218"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=187426&menuNo=200218"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=130549&menuNo=200218"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=56948&menuNo=200218"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
confidence:
  eligibility: high
  award: high
  structure: high
  hours: low
  pass_rate: high
  fee: high
as_of: 2026-11-11
unknown_reasons:
  - "Stage-1 pass_rates: the 45th through 49th final-result releases count only the second exam."
  - "2024 vehicle passers: the 47th release prints 110 passers and 18.4 percent. The 48th comparison column prints 111 passers and 18.6 percent. The series follows the year of the announcement."
  - "question counts: 2026년 시행계획에 없다."
  - "hours_min, hours_typical, hours_max, hours_basis, hours_score, difficulty.level: no preparation-hour figure for the vehicle adjuster, so the level stays unknown."
notes_ko: "2024년 차량은 제47회 당해 표의 110명·18.4%를 썼다. 제48회 비교 열은 111명·18.6%이고, 그 평균을 써도 18.86으로 같은 합격률 구간이다. 2차 과목은 두 개뿐이나 1차 세 과목을 합치면 시험 전체 과목은 셋 이상이다. 운영 창구는 보험개발원 약관업무팀, 02-368-4060, exam@kidi.or.kr이다. 최단 일정은 2026년처럼 4월 1차 다음 7월 2차의 4개월이고 수습 6개월은 등록 단계다."
```

## kr_cpa

```yaml
id: kr_cpa
name_ko: 공인회계사
name_orig: Korean Institute of Certified Public Accountants (KICPA) examination
tier: 1
region: KR
exam_type: license
domain: [accounting_tax]
issuer: 금융위원회 (administered by 금융감독원)
official_url: "https://cpa.fss.or.kr"
status: active
summary_ko: 금융위원회가 실시하고 금융감독원이 운영하는 국가자격시험이다. 1차 객관식과 2차 주관식으로 나뉘며, 2025년부터 1차 총점은 510점이고 2차 재무회계는 중급과 고급으로 나뉜다. 학력·연령·국적 제한은 없고, 지정 학점과 공인영어 성적이 응시 요건이다.
usage_ko: 시험 합격만으로 공인회계사 명칭을 사용할 수는 없다. 원칙적으로 1년 이상 실무수습을 마친 뒤 금융위원회에 등록해야 하며, 등록 공인회계사는 한국공인회계사회 회원이 된다. 회계감사와 회계 관련 법정 업무의 자격 근거로 쓰인다.

eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: 일반 응시 (학점·영어)
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "The Certified Public Accountant Act has no nationality, degree, or age limit; a candidate must complete the prescribed credits at a higher-education school, a lifelong-education institution, under the Credit Recognition Act, or under the bachelor's-by-examination Act, and must hold a recognized English score."
    - label_ko: 1차 면제, 5급 이상 회계·감사·국세 경력 3년
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 3
      work_fields_accepted: [accounting_tax]
      source_text: "Article 6 of the Act exempts the first exam for a grade-5-or-higher or senior civil servant with at least three years in corporate accounting, audit, or national-tax accounting; the credit rules still apply before the second exam."
    - label_ko: 1차 면제, 대학 조교수 이상 회계 강의 3년
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 3
      work_fields_accepted: [accounting_tax]
      source_text: "Article 6 exempts the first exam for an assistant professor or higher at a university or junior college who has taught accounting for at least three years."
    - label_ko: 1차 면제, 금융회사·상장사 등 재무제표 작성 5년
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 5
      work_fields_accepted: [banking_finance, securities_asset_mgmt, corporate_finance]
      source_text: "Article 6 exempts the first exam for a person at a bank under the Banking Act or a designated body, at the stated rank, whose main work for at least five years was preparing financial statements."
    - label_ko: 1차 면제, 대위 이상 군 재정·감사 5년
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 5
      work_fields_accepted: [accounting_tax]
      source_text: "Article 6 exempts the first exam for a finance-branch officer of captain rank or higher with at least five years of military disbursement or audit work."
    - label_ko: 1차 면제, 금융감독원 대리 이상 5년
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 5
      work_fields_accepted: [accounting_tax, securities_asset_mgmt]
      source_text: "Article 6 exempts the first exam for a Financial Supervisory Service deputy-manager or higher with at least five years in external-audit or listed-company financial-management work."
  extra_checks_ko:
    - "2025-01-01 이후 학점 신청분은 회계·세무 관련 12학점, 경영학 6학점, 경제학 3학점, 정보기술 3학점이다. 2024-12-31까지 종전 요건(회계·세무 12, 경영 9, 경제 3)으로 신청을 마친 사람은 그 요건으로 응시할 수 있다."
    - "학점은 고등교육법상 학교, 평생교육시설, 학점인정법에 따른 인정, 독학학위 중 하나로 인정되어야 한다. 학위 자체는 요구되지 않는다."
    - "1차 영어는 시험에 포함되지 않고 외부 성적으로 대체된다. 일반 기준은 TOEFL PBT 530, iBT 71, TOEIC 700, TEPS 340, G-TELP Level 2 65, FLEX 625, IELTS 4.5이다. 성적은 시험일부터 역산해 5년이 되는 해의 1월 1일 이후 시험이고, 1차 시험일 전에 발표되어 공고된 방법으로 확인되어야 한다."
    - "청각장애 응시자는 듣기 점수를 뺀 별도 기준이 있다. 2025년 시행계획 전재본의 일반 기준은 위와 같고, 청각장애 기준의 시험별 숫자는 그 표에 따로 있다."
    - "공인회계사법상 결격사유에 해당하거나 부정행위로 응시가 제한된 사람은 응시할 수 없다."
    - "경력 면제의 경력 산정 기준일은 2차 원서접수 마감일이고, 면제자도 학점 요건을 갖춰야 2차에 응시한다. 일정 징계는 면제를 막는다."
  exam_languages: [ko]
  english_level_needed: basic
  english_level_reason: The papers are in Korean. English is a separate score gate and is not part of the ranked score.
  test_countries: [KR]
  retake_limit_ko: 불합격 횟수 제한은 확인되지 않았다. 1차 합격은 다음 해 1차만 면제되고, 같은 해 2차에서 과목 배점의 60% 이상을 받은 과목은 다음 해 2차에서만 면제된다.

award:
  extra_requirements: true
  work_years_min: 1
  work_fields_accepted: [accounting_tax]
  other_requirements_ko:
    - "시험 합격 후 회계법인 등 법령이 정한 기관에서 1년 이상 실무수습을 받아야 등록할 수 있다. 1차 시험이 경력으로 면제된 합격자는 이 실무수습이 면제된다."
    - "금융위원회에 등록해야 공인회계사 명칭으로 업무를 할 수 있고, 등록하면 한국공인회계사회 회원이 된다."
    - "등록은 갱신되며, 윤리규정과 연수 의무가 있다. 연수 시간의 현재 숫자는 이 조사에서 조문 원문으로 재확인하지 못했다."
  time_limit_ko: 합격 후 실무수습을 마쳐야 등록할 수 있다. 실무수습을 마치는 법정 기한의 일수는 이 조사에서 재확인하지 못했다.
  validity_ko: 등록 공인회계사 자격은 등록 갱신과 연수 의무를 유지하는 동안 유효하다. 시행령상 등록 갱신 주기는 5년으로 정리되어 있다.

structure:
  stages:
    - name_ko: 1차 시험
      subjects_ko:
        - "경영학"
        - "경제원론"
        - "기업법 (상법 총칙·상행위·회사, 공인회계사법, 주식회사 등의 외부감사에 관한 법률)"
        - "세법개론"
        - "회계학"
      format: mcq
      question_summary_ko: 객관식이다. 영어는 총점에서 빠진다. 2025년부터 만점은 510점이며, 과락 없는 60%는 306점이다. 교시별 문항 수와 분 단위 시간표는 2026년 시행계획 PDF 원문에서 다시 열지 못했다.
      duration_min: 310
      passing_rule_ko: 영어를 뺀 모든 과목이 배점의 40% 이상이고 전 과목 합계가 60% 이상인 사람 가운데 고득점 순으로 공고한 인원까지 합격한다. 동점으로 인원을 넘으면 동점자는 모두 합격한다. 2026년 1차 선발 예정 인원은 2,800명이었고 실제 합격자는 2,816명이었다.
      pass_rates:
        - period: "2024"
          rate_pct: 20.88
          examinees: 14472
        - period: "2025"
          rate_pct: 20.42
          examinees: 14259
        - period: "2026"
          rate_pct: 22.96
          examinees: 12263
      pass_rate_avg_pct: 21.42
      hours_min: 536
      hours_typical: 536
      hours_max: 536
      sessions_per_year: 1
      next_dates_ko: "2026년 1차는 2026-03-02에 시행되었다. 원서접수는 2026-01-08 09:00부터 2026-01-20 18:00까지로 보도되었다. 합격자 발표 예정일은 2026-04-10이었고 실제 발표는 2026-03-31로 앞당겨졌다. 2027년 일정은 2026-11-11 현재 확인되지 않았다."
      fee:
        amount: 50000
        currency: KRW
        krw_approx: 50000
        fx_date: 2026-11-11
    - name_ko: 2차 시험
      subjects_ko:
        - "세법"
        - "재무관리"
        - "회계감사"
        - "원가관리회계"
        - "재무회계 I (중급)"
        - "재무회계 II (고급)"
      format: essay
      question_summary_ko: 주관식이다. 2025년 결과 보도는 재무관리와 재무회계 II를 과목으로 집계했다. 과목별 배점과 문항 수, 과목별 시험 분은 시행령 별표와 2026년 시행계획 원문에서 다시 열지 못했다.
      duration_min: unknown
      passing_rule_ko: 모든 과목이 배점의 60% 이상이면 합격한다. 그 인원이 공고한 최소 인원보다 적으면, 모든 과목 40% 이상인 사람 가운데 총점 순으로 최소 인원까지 채울 수 있고 동점자는 모두 합격한다. 2026년 최소 선발 인원은 1,150명이었고 실제 합격자도 1,150명이었다.
      pass_rates:
        - period: "2022"
          rate_pct: 33.3
          examinees: 3719
        - period: "2023"
          rate_pct: 26.3
          examinees: 4187
        - period: "2024"
          rate_pct: 28.0
          examinees: 4458
        - period: "2025"
          rate_pct: 27.9
          examinees: 4308
        - period: "2026"
          rate_pct: 26.3
          examinees: 4368
      pass_rate_avg_pct: 28.36
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: 1
      next_dates_ko: "2026년 2차는 2026-06-27부터 2026-06-28까지 서울에서 시행되었고, 합격자는 2026-09-04에 발표되었다. 2차 원서 접수자는 4,494명이었다. 2027년 일정은 확인되지 않았다."
      fee:
        amount: 50000
        currency: KRW
        krw_approx: 50000
        fx_date: 2026-11-11
  exemptions_ko: "직전 1차 합격자는 다음 해 1차만 면제된다. 같은 해 2차에서 60% 이상인 과목은 다음 해 2차에서만 면제된다. 원가회계는 원가관리회계로, 통합 재무회계는 재무회계 I·II로 이어진다. 경력 면제 경로는 위의 응시 경로와 같다."
  total:
    hours_min: 828
    hours_typical: 828
    hours_max: 828
    hours_basis: provider
    hours_basis_note_ko: "금융감독원 권장 학습시간은 확인하지 못했다. 828시간은 나무경영아카데미 동차 기본종합반에서 과목마다 교수 한 명을 골랐을 때의 강의시간 합이다. 대체 교수의 시간은 같았다. 회계감사는 그 목록에 없다. 1차 객관식 종합반 536시간은 다른 상품이라 828에 더하지 않았다. 자습·복습 시간은 아니다."
    min_calendar_months: 4
    pass_rate_avg_pct: 24.89

cost:
  other_fees_ko:
    - "결제대행 수수료는 응시료 5만 원과 별도이며 금액은 확인하지 못했다."
    - "국민기초생활보장 수급자·차상위, 장애인연금 수급자, 한부모가족 지원대상자는 수수료 감면 대상이다. 2026년 보도는 응시료의 50%를 시험 후 환급한다고 전했다."
    - "한국공인회계사회 등록·연수 비용과 개업 시 전문인 배상보험 금액은 이 조사에서 현재 고시 원문으로 재확인하지 못했다."

difficulty:
  pass_rate_score: 4
  hours_score: 4
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 3
  level: 4
  rationale_ko: "합격률 평균 24.89%는 4점이다. 동차 기본종합반 강의시간 828시간은 401시간 이상 1,000시간 이하라 시간 점수는 4다. 기존 구조 점수 3을 유지하면 평균 3.666…을 반올림해 4가 된다. 1차 객관식 536시간은 단계 참고값이며 총시간에 합산하지 않았다. 회계감사가 빠져 있어 828은 그 기본반의 과목 합이지 수험 전체의 상한이 아니다."

sources:
  - url: "https://www.nepla.ai/law/%EA%B3%B5%EC%9D%B8%ED%9A%8C%EA%B3%84%EC%82%AC%EB%B2%95"
    accessed: 2026-11-11
    type: regulator
    covers: [eligibility, award]
  - url: "https://www.nepla.ai/law/%EA%B3%B5%EC%9D%B8%ED%9A%8C%EA%B3%84%EC%82%AC%EB%B2%95-%EC%8B%9C%ED%96%89%EB%A0%B9"
    accessed: 2026-11-11
    type: regulator
    covers: [eligibility, structure]
  - url: "https://fsc.go.kr/po010103/85717"
    accessed: 2026-11-11
    type: regulator
    covers: [structure]
  - url: "https://www.joseilbo.com/news/htmls/2025/03/20250321539336.html"
    accessed: 2026-11-11
    type: other
    covers: [pass_rate]
  - url: "https://www.etoday.co.kr/news/view/2343222"
    accessed: 2026-11-11
    type: other
    covers: [pass_rate]
  - url: "https://v.daum.net/v/20260303164800136"
    accessed: 2026-11-11
    type: other
    covers: [pass_rate, structure]
  - url: "https://www.hankyung.com/article/202509030872i"
    accessed: 2026-11-11
    type: other
    covers: [pass_rate, structure]
  - url: "https://www.gosiweek.com/article/1065570702649370"
    accessed: 2026-11-11
    type: other
    covers: [pass_rate]
  - url: "http://www.lec.co.kr/news/articleView.html?idxno=748740"
    accessed: 2026-11-11
    type: other
    covers: [eligibility, fee, structure]
  - url: "https://www.gosiweek.com/article/1065594433377513"
    accessed: 2026-11-11
    type: other
    covers: [fee, structure]
  - url: "https://namucpa.com/lecture/lectureContents.asp?ridx=1&gidx=11&midx=47&lcmLicense_ccd=10601&lcmType_ccd=12801&lcmIDX=808"
    accessed: 2026-11-11
    type: provider
    covers: [hours]
  - url: "https://www.namucpa.com/lecture/lectureContents.asp?ridx=1&gidx=12&midx=74&lcmLicense_ccd=10601&lcmType_ccd=12802&lcmIDX=870"
    accessed: 2026-11-11
    type: provider
    covers: [hours]
confidence:
  eligibility: high
  award: medium
  structure: medium
  hours: medium
  pass_rate: medium
  fee: medium
as_of: 2026-11-11
unknown_reasons:
  - "structure.stages[0].question item counts: 2026 시행계획 별표 원문을 열지 못했다."
  - "structure.stages[1].duration_min and item counts: 2차 과목별 시간과 배점 별표를 이번 조사에서 다시 열지 못했다. 1차 310분은 시간 총량이 유지된다는 감독당국 설명의 전재에 의존한다."
  - "structure.stages[1].hours_*: a second-exam-only lecture total and auditing lecture hours were not opened. The 828-hour total is the simultaneous basic-course subject sum, not the sum of the stage hours."
  - "award CPE hours: 연수 의무의 현재 시간 수를 조문에서 재확인하지 못했다."
  - "KICPA and FSS pass-rate bulletins were not opened as HTML. Counts are from news that attributes them to FSC or FSS."
notes_ko: "1차 합격자 발표 기사는 금융감독원 발표를 인용한다. 2024년은 합격 3,022명, 응시 14,472명으로 20.88%를 계산했다. 2025년은 2,912명, 14,259명으로 20.42%이며 한 기사는 20.4%로 반올림했다. 2026년은 2,816명, 12,263명으로 22.96%다. 2차 2022~2024 인원과 2026년 26.3%는 금융위원회 자료를 인용한 기사, 2025년 응시 4,308명과 합격 1,200명·27.9%는 한국경제의 금융감독원 보도 인용이다. 같은 해 1차와 2차를 모두 치를 수 있어 최단 기간은 3월 1차부터 6월 2차까지 4개월이다. 실무수습 1년은 이 기간에 넣지 않았다. 2025년 과목 개편은 이미 시행 중이며, 2027년 시행계획은 2026년 11월 11일에 확인되지 않았다."
```

## kr_cta

```yaml
id: kr_cta
name_ko: 세무사
name_orig: Certified Tax Accountant examination
tier: 1
region: KR
exam_type: license
domain: [accounting_tax]
issuer: 재정경제부 (administered by 한국산업인력공단 Q-Net)
official_url: "https://www.q-net.or.kr/site/semu"
status: active
summary_ko: 세무사법에 따른 국가자격이며 한국산업인력공단이 큐넷에서 시행한다. 1차는 영어를 뺀 절대평가이고, 2차는 논술형으로 매년 최소 합격 인원을 둔다. 2026년 제63회까지 같은 이름으로 시행되었다.
usage_ko: 합격 후 실무교육을 마치고 한국세무사회에 등록해야 세무사 명칭으로 세무대리 업무를 할 수 있다. 일반 합격자의 실무교육은 6개월, 시험 면제 합격자는 더 짧은 실무교육으로 알려져 있으나 면제자 교육 월수는 이번 조사에서 조문 원문으로 재확인하지 못했다.

eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: 일반 응시
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "The Certified Tax Accountant Act does not require a degree, age, or private-sector experience to sit. A recognized English score replaces the English subject, and statutory disqualifications still apply."
    - label_ko: 1차 면제, 국세 행정 10년
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 10
      work_fields_accepted: [accounting_tax]
      source_text: "Article 5-2 exempts the first exam for a person with at least 10 years of national-tax administration, excluding customs."
    - label_ko: 1차 면제, 지방세 행정 10년이고 그 중 5급 이상 5년
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 10
      work_fields_accepted: [accounting_tax]
      source_text: "Article 5-2 exempts the first exam for at least 10 years of local-tax administration including at least 5 years as grade 5 or higher or in the senior civil service."
    - label_ko: 1차 면제, 지방세 행정 20년
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 20
      work_fields_accepted: [accounting_tax]
      source_text: "Article 5-2 exempts the first exam for at least 20 years of local-tax administration."
    - label_ko: 1차 면제, 대위 이상 군 재정 10년
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 10
      work_fields_accepted: [accounting_tax]
      source_text: "Article 5-2 exempts the first exam for a finance-branch officer who has served at least 10 years of military finance work while already at captain rank or higher."
    - label_ko: 1차 및 2차 세법학 면제, 국세 10년이고 5급 이상 5년
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 10
      work_fields_accepted: [accounting_tax]
      source_text: "Article 5-2 and the enforcement decree exempt the first exam and both second-exam tax-law papers for at least 10 years of national-tax work including at least 5 years as grade 5 or higher or in the senior civil service."
    - label_ko: 1차 및 2차 세법학 면제, 국세 20년
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 20
      work_fields_accepted: [accounting_tax]
      source_text: "The same partial second-exam exemption applies to at least 20 years of national-tax administration."
  extra_checks_ko:
    - "학위나 민간 경력은 일반 응시 요건이 아니다. 학위와 경력을 모두 요구한다고 적은 수험 사이트는 법과 충돌하므로 쓰지 않았다."
    - "1차 영어는 외부 공인 성적으로 대체되고 평균 점수에 들어가지 않는다. 인정 시험과 커트라인 표는 이번 조사에서 2026년 시행공고 원문으로 다시 열지 못했다."
    - "성적 인정 기간은 1차 원서접수 마감일부터 역산해 5년이 되는 해의 1월 1일 이후 시험으로 늘어난 상태다."
    - "세무사법 결격사유가 있다. 파산 선고를 받은 사람의 응시 제한은 복권되면 풀리도록 개정되었다."
    - "경력 면제는 원서접수 마감일 기준으로 산정한다. 파면, 또는 면제 신청 전 2년 안의 강등·정직은 면제를 막는다."
    - "직전 1차 합격자는 다음 회 1차만 면제된다."
  exam_languages: [ko]
  english_level_needed: basic
  english_level_reason: The exam is in Korean. English is an external score requirement and is excluded from the first-exam average.
  test_countries: [KR]
  retake_limit_ko: 불합격 횟수 제한은 확인되지 않았다. 1차 합격의 효력은 다음 1회 시험까지다.

award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko:
    - "세무대리 업무를 하려면 실무교육을 마치고 한국세무사회에 등록해야 한다. 일반 합격자의 실무교육 기간은 6개월로 법령 안내가 일치한다."
    - "등록 후 연수 의무가 있다. 시간 수는 이번 조사에서 시행규칙 원문으로 재확인하지 못했다."
  time_limit_ko: 등록 전에 실무교육을 마쳐야 한다. 합격 후 교육을 마치는 최종 기한은 재확인하지 못했다.
  validity_ko: 등록 세무사로 유지하려면 등록과 연수 의무를 지켜야 한다. 자격 자체의 일회성 만료 기간은 확인되지 않았다.

structure:
  stages:
    - name_ko: 1차 시험
      subjects_ko:
        - "재정학"
        - "세법학개론"
        - "회계학개론"
        - "상법(회사편), 민법(총칙), 행정소송법 중 1과목"
      format: mcq
      question_summary_ko: 객관식이며 영어는 점수에 넣지 않는다. 과목당 문항 수와 교시 시간은 2026년 시행공고 PDF를 열지 못해 확정하지 않았다.
      duration_min: unknown
      passing_rule_ko: 시행령 제8조 제1항. 영어를 뺀 과목마다 100점 만점에 40점 이상이고 전 과목 평균 60점 이상이면 합격한다. 최소 인원 제도는 1차에 없다.
      pass_rates:
        - period: "2022"
          rate_pct: 37.39
          examinees: 12554
        - period: "2023"
          rate_pct: 15.72
          examinees: 13768
        - period: "2024"
          rate_pct: 17.15
          examinees: 18842
        - period: "2025"
          rate_pct: 22.55
          examinees: unknown
        - period: "2026"
          rate_pct: 18.09
          examinees: 16856
      pass_rate_avg_pct: 22.18
      hours_min: 520
      hours_typical: 520
      hours_max: 520
      sessions_per_year: 1
      next_dates_ko: "2026년 제63회 1차는 2026-04-25 전후로 시행되었고 합격자는 2026-05-27에 발표되었다. 2027년 일정은 확인되지 않았다."
      fee:
        amount: 30000
        currency: KRW
        krw_approx: 30000
        fx_date: 2026-11-11
    - name_ko: 2차 시험
      subjects_ko:
        - "세법학 1부"
        - "세법학 2부"
        - "회계학 1부"
        - "회계학 2부"
      format: essay
      question_summary_ko: 논술형 4과목이다. 2026년 공고의 문항 수와 교시 시간은 공고 PDF를 열지 못했다.
      duration_min: unknown
      passing_rule_ko: "시행령 제8조 제2항. 전 과목 응시자는 모든 과목 40점 이상이고 평균 60점 이상이면 합격한다. 그 인원이 최소 합격 인원보다 적으면 모든 과목 40점 이상인 사람 중 평균이 높은 순으로 채우고, 소수점 둘째 자리 동점자는 모두 합격한다. 2차 세법학이 면제된 경력자는 최소 인원 밖에 있으며, 일반 60점 이상이 최소 인원 이상이면 응시 과목 평균 60점, 그렇지 않으면 시행령 계산식의 조정 점수 이상이어야 한다. 2026년 최소 인원은 700명이었다."
      pass_rates:
        - period: "2022"
          rate_pct: 11.56
          examinees: unknown
        - period: "2023"
          rate_pct: 11.36
          examinees: unknown
        - period: "2024"
          rate_pct: 13.15
          examinees: 5437
        - period: "2025"
          rate_pct: 10.48
          examinees: 6943
        - period: "2026"
          rate_pct: 10.92
          examinees: 6606
      pass_rate_avg_pct: 11.49
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: 1
      next_dates_ko: "2026년 2차는 2026-07-18에 시행되었고 합격자는 2026-10-28에 발표되었다. 대상 7,194명 중 응시 6,606명, 합격 722명, 최저 평균 49.75점이었다. 2027년 일정은 확인되지 않았다."
      fee:
        amount: 30000
        currency: KRW
        krw_approx: 30000
        fx_date: 2026-11-11
  exemptions_ko: "직전 1차 합격자는 다음 1차만 면제된다. 국세 경력 요건을 갖추면 1차 전부와 2차 세법학 1부·2부가 면제되고 회계학 1부·2부만 본다. 최소 합격 인원은 2차 전 과목을 본 일반 응시자에게만 배정된다."
  total:
    hours_min: unknown
    hours_typical: unknown
    hours_max: unknown
    hours_basis: unknown
    hours_basis_note_ko: "1차 기본종합반 강의시간만 확인했다. 중급회계 140, 원가관리회계 96, 세법 152, 재정학 76, 선택법 56을 더하면 520시간이고 대체 교수도 같았다. 2차 강의시간 합을 열지 못해 총시간은 비워 둔다. 520을 총시간으로 쓰지 않는다."
    min_calendar_months: 3
    pass_rate_avg_pct: 16.84

cost:
  other_fees_ko:
    - "한국세무사회 등록·입회 비용은 이번 조사에서 현재 공고 금액을 재확인하지 못했다."
    - "실무교육 수강료는 확인하지 못했다."

difficulty:
  pass_rate_score: 4
  hours_score: na
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 3
  level: unknown
  rationale_ko: "합격률 평균 16.84%는 4점이고 구조 점수는 3이다. 2차가 빠져 총 학습시간을 확정하지 못했으므로 시간 점수를 매기지 않고 난이도 수준은 발표하지 않는다. 종전 수준 4는 시간 없이 계산된 값이라 대체한다."

sources:
  - url: "https://www.taxcanvas.kr/core/law/0039402025123035947/history/2026-01-02"
    accessed: 2026-11-11
    type: regulator
    covers: [structure, eligibility]
  - url: "https://www.q-net.or.kr/anc002.do?id=anc00201&gSite=L&gId=22"
    accessed: 2026-11-11
    type: official
    covers: [structure]
  - url: "https://www.gosiweek.com/article/1065576015433992"
    accessed: 2026-11-11
    type: other
    covers: [pass_rate]
  - url: "https://www.gosiweek.com/article/1065594243867826"
    accessed: 2026-11-11
    type: other
    covers: [pass_rate]
  - url: "https://www.sejungilbo.com/news/articleView.html?idxno=43289"
    accessed: 2026-11-11
    type: other
    covers: [pass_rate]
  - url: "https://www.sejungilbo.com/news/articleView.html?idxno=48558"
    accessed: 2026-11-11
    type: other
    covers: [pass_rate]
  - url: "https://www.gosiweek.com/article/179587100260219"
    accessed: 2026-11-11
    type: other
    covers: [pass_rate]
  - url: "https://www.gosiweek.com/article/1065593983871732"
    accessed: 2026-11-11
    type: other
    covers: [pass_rate]
  - url: "https://taxtimes.co.kr/mobile/article.html?no=272379"
    accessed: 2026-11-11
    type: other
    covers: [pass_rate]
  - url: "https://www.breaknews.com/1179086"
    accessed: 2026-11-11
    type: other
    covers: [structure]
  - url: "https://www.gosiweek.com/article/1065585522058281"
    accessed: 2026-11-11
    type: other
    covers: [fee]
  - url: "https://namucpa.com/lecture/lectureContents.asp?ridx=2&gidx=17&midx=1004&lcmLicense_ccd=10602&lcmType_ccd=12801&lcmIDX=869"
    accessed: 2026-11-11
    type: provider
    covers: [hours]
confidence:
  eligibility: high
  award: medium
  structure: medium
  hours: low
  pass_rate: medium
  fee: medium
as_of: 2026-11-11
unknown_reasons:
  - "difficulty.level and total.hours_*: second-exam lecture hours were not opened, so the total stays unknown and the old level 4, computed without hours, is withdrawn. The first-exam 520 hours are not the total."
  - "1차·2차 duration_min and item counts: 2026년 제63회 시행공고 PDF를 열지 못했다."
  - "English cut-score table: 세무사 시행공고의 영어 점수표를 다시 열지 못했다."
  - "2025 first-exam examinees: the article that states 4,220 passers and 22.55% does not print the examinee count in the retrieved text."
  - "2022 and 2023 second-exam examinees: the rate series prints the percentage without the examinee count."
  - "total.hours_*: no official recommendation or named survey."
  - "Award training-month exception and CPE hours: not re-read from the enforcement rule."
  - "Fee: 30,000 won per stage is the amount in the 2024 plan article that cites the rule change. The 2026 enforcement-rule text was not re-opened."
notes_ko: "합격률은 한국산업인력공단 발표를 인용한 기사에서 가져왔고 큐넷 합격자 공고 PDF는 열지 못했다. 2023년 1차 15.72%는 응시 13,768명, 합격 2,164명과 맞다. 한 기사의 15.71%는 반올림 차이로 보지 않고 15.72%를 썼다. 2026년 6월 기사가 전년 2차 합격률을 17.66%, 합격 712명이라고 한 내용은 이후 발표인 응시 6,943명, 합격 728명, 10.48%와 충돌하므로 쓰지 않았다. 2022년 2차 11.56%와 다른 인용의 11.63%는 충돌로 남겼고, 세금신문 계열 기사에 인쇄된 11.56%를 표에 두었다. 2026년은 1차 4월, 2차 7월이라 같은 해에 마치는 최단 기간을 3개월로 보았다. 실무교육 6개월은 포함하지 않았다."
```

## kr_financial_controller

```yaml
id: kr_financial_controller
name_ko: 재경관리사
name_orig: Certified Accounting Manager (CAM)
tier: 1
region: KR
exam_type: certificate
domain: [accounting_tax]
issuer: 삼일회계법인
official_url: "https://www.samilexam.com"
status: active
summary_ko: 삼일회계법인이 발급하는 국가공인 민간자격이다. 민간자격정보서비스 등록번호는 2008-0106이고 주무부처는 금융위원회다. 재무회계, 세무회계, 원가관리회계를 한 시험에서 보며 과목마다 70점 이상이어야 한다.
usage_ko: 기업 재경 실무 지식을 보여주는 공인 민간자격이다. 공인회계사나 세무사처럼 법정 독점 업무를 주지는 않는다. 합격 후 경력, 실무수습, 윤리 서약은 없다.

eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: 응시 제한 없음
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "Samil exam notices reprinted by colleges state that there is no eligibility limit other than a valid photo identification."
  extra_checks_ko:
    - "유효 신분증이 없으면 응시할 수 없다."
    - "회계관리 1급·2급은 다른 자격이므로 이 응시 요건에 포함하지 않았다."
  exam_languages: [ko]
  english_level_needed: none
  english_level_reason: The three papers are Korean multiple-choice exams.
  test_countries: [KR]

award:
  extra_requirements: false
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko: []
  validity_ko: 합격 후 자격증을 발급하면 되며, 유효기간이나 갱신 교육은 확인되지 않았다.

structure:
  stages:
    - name_ko: 재경관리사
      subjects_ko:
        - "재무회계"
        - "세무회계"
        - "원가관리회계"
      format: mcq
      question_summary_ko: "과목마다 4지선다 40문항, 합계 120문항이다. 2025년 시험 안내의 시간은 14:00~16:30, 150분이다."
      duration_min: 150
      passing_rule_ko: 과목마다 100점 만점에 70점 이상. 한 과목이 70점 미만이면 불합격이다.
      pass_rates:
        - period: "2021"
          rate_pct: 32.14
          examinees: 16607
        - period: "2022"
          rate_pct: 23.91
          examinees: 17553
        - period: "2023"
          rate_pct: 26.78
          examinees: 20223
        - period: "2024"
          rate_pct: 25.98
          examinees: 23405
        - period: "2025"
          rate_pct: 24.84
          examinees: 24624
      pass_rate_avg_pct: 26.73
      hours_min: 142
      hours_typical: 142
      hours_max: 142
      sessions_per_year: 8
      next_dates_ko: "2025년에는 8회가 시행되었고 마지막 시험일은 2025-12-20이었다. 민간자격정보서비스에 2026년 검정 일정 이미지가 있으나 이미지 내용을 열지 못해 2026년 잔여 일자는 확인하지 못했다."
      fee:
        amount: 70000
        currency: KRW
        krw_approx: 70000
        fx_date: 2026-11-11
  total:
    hours_min: 142
    hours_typical: 142
    hours_max: 142
    hours_basis: provider
    hours_basis_note_ko: "삼일회계법인 시험 안내의 권장 학습시간은 확인하지 못했다. 142시간은 나무경영아카데미 2025 기본이론 세 과목의 강의시간 표시 합이다. 재무회계 37, 세무회계 70, 원가관리회계 35다. 재무회계 본문은 총 강의시간 37.2시간이라고도 적는다. 세무 회차 합은 4,178분으로 약 69.6시간, 원가 회차 합은 2,064분으로 약 34.4시간이다. 제공시간은 1.5배 수강 허용 시간이라 넣지 않았다. 문제풀이·파이널 강의는 더하지 않았다. 단일 과정이라 최소·전형·최댓값을 같게 두었다."
    min_calendar_months: 1
    pass_rate_avg_pct: 26.73

cost:
  other_fees_ko:
    - "자격증 발급비 5,000원은 2021년 삼일 공고와 2025년 일정 전재에 있다. 2026년 변경 여부는 확인하지 못했다."

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
  rationale_ko: "합격률 평균 26.73%는 4점이다. 기본이론 강의시간 142시간은 61시간 이상 150시간 이하라 시간 점수는 2다. 기존 구조 점수 2를 유지하면 평균 2.666…을 반올림해 3이 된다. 회차 분 합으로 다시 더해도 약 141시간이라 시간 점수 구간은 같다."

sources:
  - url: "https://www.pqi.or.kr/inf/qul/infQulBasDetail.do?qulId=192"
    accessed: 2026-11-11
    type: statistics
    covers: [eligibility, pass_rate]
  - url: "https://www.samilexam.com/usr/noticeview.do?board_no=443"
    accessed: 2026-11-11
    type: official
    covers: [fee]
  - url: "https://www.seoil.ac.kr/bbs/tax/1132/401087/artclView.do"
    accessed: 2026-11-11
    type: other
    covers: [eligibility, fee]
  - url: "https://www.issueon.co.kr/news/articleView.html?idxno=1295"
    accessed: 2026-11-11
    type: other
    covers: [structure, fee]
  - url: "https://www.wowpass.com/TAXACCOUNT/Notice/252474"
    accessed: 2026-11-11
    type: provider
    covers: [structure, fee]
  - url: "https://www.namucpa.com/lecture/lectureONdetail.asp?ridx=5&gidx=288&midx=360&lcsLicense_ccd=10607&lcsSection_ccd=12103&lecSalesStatus_ccd=12201&lcIDX_arr=&lecIDX=31433"
    accessed: 2026-11-11
    type: provider
    covers: [hours]
  - url: "https://www.namucpa.com/lecture/lectureONdetail.asp?ridx=5&gidx=288&midx=358&lcsLicense_ccd=10607&lcsSection_ccd=12103&lecSalesStatus_ccd=12201&lcIDX_arr=&lecIDX=31434"
    accessed: 2026-11-11
    type: provider
    covers: [hours]
  - url: "https://www.namucpa.com/lecture/lectureONdetail.asp?ridx=5&gidx=288&midx=356&lcsSection_ccd=12103&lcsLicense_ccd=10607&lecSalesStatus_ccd=12201&lecIDX=31435"
    accessed: 2026-11-11
    type: provider
    covers: [hours]
confidence:
  eligibility: high
  award: high
  structure: medium
  hours: medium
  pass_rate: high
  fee: medium
as_of: 2026-11-11
unknown_reasons:
  - "2026 session dates: the PQI schedule image was not opened, and the Samil 2026 notice page was not retrieved."
  - "Session-level pass rates are not published. The rates used are annual PQI totals."
  - "Problem-solving and final courses were not added to the 142-hour basic-theory total. The 37.2-hour and session-minute cross-checks stay in the same hours-score band."
notes_ko: "합격률은 취득자 나누기 응시자다. 2025년은 접수 33,037명, 응시 24,624명, 취득 6,117명, 24.84%다. 회차별 합격률은 없다. 회계관리 1급·2급은 범위 밖이다."
```

## kr_life_planner

```yaml
# ---------- A. Identity ----------
id: kr_life_planner
name_ko: 생명보험설계사
name_orig: 생명보험설계사
tier: 1
region: KR
exam_type: license
domain: [insurance]
issuer: 생명보험협회
official_url: "https://exam.insure.or.kr/lp/schd/overview"
status: active
summary_ko: 생명보험협회가 보험업감독규정 제4-3조에 따라 실시하는 생명보험시험이다. 협회 지침은 설계사 등록자격시험을 생명보험시험과 제3보험시험으로 나누며, 성년자는 학력·경력 제한 없이 소속 보험회사를 통해 매월 응시한다. 합격과 등록교육을 1년 안에 짝지어야 생명보험설계사 등록을 신청할 수 있다.
usage_ko: 생명보험 모집을 하는 보험회사·보험대리점·보험중개사 소속 설계사로 등록하는 시험 경로다. 합격의 효력은 그 세 소속에 같이 적용된다. 합격증만으로 모집할 수는 없고, 협회가 등록을 수리해야 한다. 경력 1년과 교육만으로 시험 없이 등록하는 별도 요건은 이 시험의 응시 경로가 아니다.
# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: other
  nationality_countries: []
  nationality_note_ko: 내국인 국적 제한은 없다. 국내 거주 외국인은 출입국관리법상 F-2, F-5, F-6, 재외동포는 F-4만 응시신청이 된다.
  paths:
    - label_ko: 성년자
      age_min: 19
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "The life-association overview says an adult may sit with no limit of sex, education, or career, and the guideline does not add a degree or experience condition."
    - label_ko: 미성년자로서 기혼자이거나 법정대리인이 동의한 사람
      age_min: null
      age_max: 18
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "The same overview says a minor may sit only if married or with the legal representative’s consent."
  extra_checks_ko:
    - "개인 접수는 불가하고, 소속 보험회사를 통해 생명보험협회에 신청해야 한다."
    - "시험신청일 기준 생명보험 또는 제3보험 설계사로 이미 등록된 사람과, 그 시험 합격일부터 12개월이 지나지 않은 사람은 응시할 수 없다."
    - "성년은 시험 페이지가 만 나이를 적지 않아 민법상 만 19세로 적었다."
    - "보험업법 제84조제2항 결격은 등록 거부 사유로 인용되지만, 각 호 본문은 이번 조사에서 열지 않았다."
  exam_languages: [ko]
  english_level_needed: none
  english_level_reason: The opened life-association paper is a Korean multiple-choice test and sets no English-score substitute.
  test_countries: [KR]
  retake_limit_ko: 불합격 횟수 제한은 없다. 합격일부터 12개월이 지나기 전에는 다시 응시할 수 없고, 한 달에 두 번 이상 합격하면 첫 합격만 유효하다.
# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko:
    - "등록의 시험 경로는 시행령 별표 4 교육과 협회 시험 합격이 서로 1년 안에 있어야 한다. 순서는 어느 쪽이 먼저여도 된다."
    - "보험회사·보험대리점 소속 설계사 교육시간은 20시간 이상이고 외부교육 8시간 이상을 포함한다. 보험중개사 소속 설계사는 22시간 이상이다."
    - "등록은 소속 보험회사 등이 협회에 신청한다. 미성년자는 법정대리인 동의서와 인감증명서 또는 본인서명사실확인서가 더 필요하다."
    - "최초 유효 등록일부터 2년마다, 그 날부터 6개월 안에 별표 4 제1호 기준의 보수교육을 받아야 한다."
  time_limit_ko: 연수과정 또는 교육 이수 후 등록신청 유효기간은 1년이다. 시험 합격과 교육 이수도 서로 1년 안에 맞아야 한다.
  validity_ko: 등록 효력은 협회가 등록을 수리한 날 0시부터 말소가 수리된 날 24시까지다. 등록이 유지되는 동안 2년 주기의 교육이 있다. 합격증은 등록 요건이며 그 밖의 제출용으로 쓰라는 규정은 열려 있지 않다.
# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: 생명보험시험
      subjects_ko:
        - "공통1 보험이론 및 윤리"
        - "공통2 보험법규"
        - "생명보험"
      format: mcq
      question_summary_ko: 객관식 30문항이다. 공통 20문항은 각 3점, 생명보험 10문항은 각 4점이다. 시행세칙은 문제은행에서 공통 20, 생명 10, 제3 10을 뽑아 쓰며, 생명만 보면 30문항이다. 컴퓨터용 수성싸인펜을 쓴다. 같은 사이트의 IBT 일정은 문항 수와 시간을 열지 못했다.
      duration_min: 50
      passing_rule_ko: 100점 만점에 60점 이상. 영역별 과락은 없다. 생명보험과 제3보험은 따로 합격 처리한다.
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: unknown
      next_dates_ko: 지침 제7조는 매월 실시하고 날짜·지역·장소는 협회장이 정한다. 열린 개요에는 2026-11-11 이후의 특정 회차 일자가 없고, 일정 목록 페이지는 열지 않았다. 장소는 수도권(서울·인천·제주), 부산, 대전, 광주, 대구, 원주다. 결과는 시험 당일 20시 전후에 소속회사와 exam.insure.or.kr에서 확인한다.
      fee:
        amount: 20000
        currency: KRW
        krw_approx: 20000
        fx_date: 2026-11-11
  exemptions_ko: 시험 면제 과목은 없다. 등록신청일부터 3년 안에 생명보험 관계 업무를 1년 이상 한 사람은 시험 없이 별표 4 교육만으로 등록할 수 있는 별도 요건이 있다. 간단보험설계사는 이 시험을 면제한다.
  total:
    hours_min: unknown
    hours_typical: unknown
    hours_max: unknown
    hours_basis: unknown
    hours_basis_note_ko: "공식 권장 학습시간은 열지 못했다. 2026-11-11에 연 보험연수원 신규 설계사 등록교육은 생명보험 20H, 생명+제3보험 30H를 포함한 등록교육 시간이다. 등록교육은 시험 학습시간이 아니므로 넣지 않았다. 인카·해커스·에듀윌에서 생명보험시험 준비 시간을 적은 페이지는 열지 못했다."
    min_calendar_months: 1
    pass_rate_avg_pct: unknown
# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "보험설계사 등록신청수수료 6000원. 지침 제38조와 보험업법 시행규칙 제28조가 같다."
    - "등록교육 수강료는 교육기관 과정마다 다르며 이번 조사에서 금액을 확인하지 못했다."
# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: na
  hours_score: na
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 2
  level: unknown
  rationale_ko: "구조만으로 두었던 등급 2는 무효라 지운다. 공식 합격률이 없고 학습시간도 없어 합격률 점수와 시간 점수는 na이다. 시간이 비어 있으면 등급을 매기지 않는다. 구조 점수 2는 유지한다."
# ---------- G. Sources and confidence ----------
sources:
  - url: "https://exam.insure.or.kr/lp/schd/overview"
    accessed: 2026-11-11
    type: official
    covers: [eligibility, structure, fee]
  - url: "https://exam.insure.or.kr/lp/schd/legal"
    accessed: 2026-11-11
    type: official
    covers: [eligibility, award, structure, fee]
  - url: "https://www.law.go.kr/LSW/admRulLsInfoR.do?admRulSeq=2100000279112"
    accessed: 2026-11-11
    type: regulator
    covers: [award, structure]
  - url: "https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=290427&chrClsCd=010202&efYd=20261002"
    accessed: 2026-11-11
    type: regulator
    covers: [award, eligibility]
  - url: "https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=269221&chrClsCd=010202&efYd=20250218"
    accessed: 2026-11-11
    type: regulator
    covers: [fee]
  - url: "https://is.in.or.kr/main/sukang/reg/compTrainning.do?lecture_type=1&search_gubun_code=01&search_high_code=04&search_mid_code=01"
    accessed: 2026-11-11
    type: official
    covers: [hours]
confidence:
  eligibility: high
  award: high
  structure: high
  hours: low
  pass_rate: low
  fee: high
as_of: 2026-11-11
unknown_reasons:
  - "pass_rates: no recent pass-rate table was opened at the life-insurance association, the FSS, the Korea Insurance Development Institute, or KOSIS."
  - "hours_min, hours_typical, hours_max, hours_basis, hours_score, difficulty.level: no official or allowed-provider preparation-hour figure. The insurance institute 20H and 30H courses are registration education, not study hours, so the level stays unknown."
  - "sessions_per_year: 매월 실시는 확인했으나 한 해의 차수 합계는 공고된 숫자로 열지 못했다."
notes_ko: 생명과 제3을 한 신청에 같이 보면 시행세칙상 출제 풀은 40문항이다. 수수료는 응시신청 1건당 2만원인데, 두 시험을 한 건으로 보는지 두 건으로 보는지는 열린 조문에 없다. 교차모집 추가교육 5시간은 이 시험의 응시 요건이 아니다. IBT 일정이 사이트에 있으나 그 운영 세칙은 열지 않았다.
```

## kr_nonlife_planner

```yaml
# ---------- A. Identity ----------
id: kr_nonlife_planner
name_ko: 손해보험설계사
name_orig: 손해보험설계사
tier: 1
region: KR
exam_type: license
domain: [insurance]
issuer: 손해보험협회
official_url: "https://misi.knia.or.kr/m/task03/work01.knia"
status: active
summary_ko: 손해보험협회가 실시하는 손해보험자격시험이다. 2026년 1월 1일 개정 모집관리업무지침은 시험을 손해보험자격시험과 제3보험자격시험으로 나누고, 매월 시행하며 회사 또는 대리점을 통해 접수한다. 합격 기준의 법령상 문구는 100점 만점 60점이다.
usage_ko: 손해보험 모집을 하는 소속 설계사로 등록하는 시험 경로다. 합격증은 설계사 등록용이며 다른 기관 제출용으로 쓸 수 없다고 협회 페이지가 적는다. 대리점 자격시험은 보험연수원 시험이라 이 기록에 넣지 않았다. 경력 1년과 교육만으로 시험 없이 등록하는 요건은 별도다.
# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: unknown
  nationality_countries: []
  nationality_note_ko: 2026년 지침과 협회 소개·합격 페이지에서 외국인 응시 제한 조항을 찾지 못했다. 생명보험협회 비자 제한을 여기 옮기지 않았다.
  paths:
    - label_ko: 지침이 나이·학력·경력을 정하지 않은 응시
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "The 2026 non-life solicitation guideline sets no age, education, career, or nationality condition in the exam articles; application is made through the insurer at least three days before the exam."
  extra_checks_ko:
    - "개인이 협회에 직접 접수하지 않고 소속 보험회사 등을 통해 신청한다."
    - "서류 하자, 부정행위 제재 중, 수험표 미소지, 합격일부터 12개월 이내 또는 이미 설계사로 등록된 경우는 응시를 거부할 수 있다."
    - "등록 단계의 미성년자는 법정대리인 동의, 인감증명, 가족관계 서류가 더 필요하다. 이는 응시 연령 제한으로 적힌 조문이 아니다."
    - "같은 날 둘 이상의 회사로 접수하거나, 같은 회사로 같은 날 다른 지역에 응시하면 합격이중자로 0점 처리된다는 안내가 있다."
  exam_languages: [ko]
  english_level_needed: none
  english_level_reason: The opened non-life paper is Korean multiple choice and has no English-score gate.
  test_countries: [KR]
  retake_limit_ko: 불합격 횟수 제한은 지침에 없다. 합격일부터 12개월 이내이거나 이미 등록된 사람은 응시가 거부될 수 있다.
# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko:
    - "손해보험 모집 연수과정은 별표 4 교육과 협회 시험 합격이며, 둘은 서로 1년 안에 마쳐야 한다."
    - "보험회사·보험대리점 소속은 교육 20시간 이상, 외부교육 8시간 이상이다. 보험중개사 소속은 22시간 이상이다."
    - "등록수수료는 시행규칙 제28조의 보험설계사 6000원이다. 지침은 액수를 되풀이하지 않고 그 조문을 인용한다."
    - "등록이 유지되면 최초 등록일부터 2년마다 6개월 안에 보수교육을 받는다."
  time_limit_ko: 연수 또는 교육 이수 후 등록신청 유효기간은 1년이고, 시험과 교육은 서로 1년 안에 짝을 이뤄야 한다.
  validity_ko: 등록이 수리된 동안 모집할 수 있고 2년 주기 교육이 따른다. 합격증은 등록용으로만 안내되어 있다. 합격 효력은 지침상 합격일 다음 날부터 발생한다.
# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: 손해보험자격시험
      subjects_ko:
        - "보험에 관한 기초지식"
        - "모집에 관한 법규 및 실무"
        - "손해보험약관"
        - "일반교양"
      format: mcq
      question_summary_ko: 협회 합격기준 페이지는 손해보험 33문항(1번부터 33번)으로, 18번을 뺀 32문항은 각 3점, 18번은 4점으로 100점을 만든다. 2026년 지침 제11조는 25문항 이상만 정한다. 컴퓨터용 싸인펜이 아니면 0점이다.
      duration_min: unknown
      passing_rule_ko: 감독규정 제4-3조②와 협회 합격기준 페이지는 100점 만점 60점 이상이다. 손해보험과 제3보험은 각각 채점한다. 과목 과락은 없다.
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: unknown
      next_dates_ko: 지침 제7조는 매월 실시하고, 제8조는 분기 시작 10일 전에 일정을 알리며, 결과는 시험 다음 날(휴일이면 그 다음 날) 보험회사에 통보한다. 2026년 7월 이후 시간표 목록에는 2026-11-12, 2026-11-13, 2026-11-16 등 서울·부산·대전·광주 차수가 보였으나 그 페이지에 시계 시각은 없었다. 관리지역은 서울·제주, 원주·강릉·춘천·인천·수원, 광주·전주·순천·목포, 부산·창원·진주·울산, 대전·청주·천안·홍성·충주, 대구·포항·구미다.
      fee:
        amount: 20000
        currency: KRW
        krw_approx: 20000
        fx_date: 2026-11-11
  exemptions_ko: 이 시험의 과목 면제는 없다. 등록신청일부터 3년 안에 손해보험 관계 업무 1년 이상이면 시험 없이 교육만으로 등록할 수 있다. 간단보험설계사는 시험을 면제한다.
  total:
    hours_min: unknown
    hours_typical: unknown
    hours_max: unknown
    hours_basis: unknown
    hours_basis_note_ko: "공식 권장 학습시간은 열지 못했다. 2026-11-11에 연 보험연수원 신규 설계사 등록교육은 손해보험 20H, 손해+제3보험 30H를 포함한 등록교육 시간이다. 등록교육은 시험 학습시간이 아니므로 넣지 않았다. 인카·해커스·에듀윌에서 손해보험자격시험 준비 시간을 적은 페이지는 열지 못했다."
    min_calendar_months: 1
    pass_rate_avg_pct: unknown
# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "보험설계사 등록수수료 6000원(보험업법 시행규칙 제28조). 회사는 신청월 또는 등록월의 다음 달 말까지 낸다."
    - "등록교육 수강료는 확인하지 못했다."
# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: na
  hours_score: na
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 2
  level: unknown
  rationale_ko: "구조만으로 두었던 등급 2는 무효라 지운다. 공식 합격률이 없고 학습시간도 없어 두 점수는 na이다. 시간이 비어 있으면 등급을 매기지 않는다. 구조 점수 2는 유지한다."
# ---------- G. Sources and confidence ----------
sources:
  - url: "https://misi.knia.or.kr/m/task03/work01.knia"
    accessed: 2026-11-11
    type: official
    covers: [eligibility, structure]
  - url: "https://misi.knia.or.kr/m/task03/work04_02.knia"
    accessed: 2026-11-11
    type: official
    covers: [structure, award]
  - url: "https://misi.knia.or.kr/file/downloadFile?FDSEQ=100009&IDX=13671"
    accessed: 2026-11-11
    type: official
    covers: [eligibility, award, structure, fee]
  - url: "https://misi.knia.or.kr/m/task03/exam_schedule_list.knia"
    accessed: 2026-11-11
    type: official
    covers: [structure]
  - url: "https://www.law.go.kr/LSW/admRulLsInfoR.do?admRulSeq=2100000279112"
    accessed: 2026-11-11
    type: regulator
    covers: [award, structure]
  - url: "https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=290427&chrClsCd=010202&efYd=20261002"
    accessed: 2026-11-11
    type: regulator
    covers: [award]
  - url: "https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=269221&chrClsCd=010202&efYd=20250218"
    accessed: 2026-11-11
    type: regulator
    covers: [fee]
  - url: "https://is.in.or.kr/main/sukang/reg/compTrainning.do?lecture_type=1&search_gubun_code=01&search_high_code=04&search_mid_code=01"
    accessed: 2026-11-11
    type: official
    covers: [hours]
confidence:
  eligibility: medium
  award: high
  structure: medium
  hours: low
  pass_rate: low
  fee: high
as_of: 2026-11-11
unknown_reasons:
  - "nationality_rule: 2026년 손해보험 지침에서 외국인 응시 조항을 찾지 못했다."
  - "duration_min: 지침 제10조는 문항당 1분 이상이고 협회장이 정한다고만 되어 분 단위 고시 시간을 확인하지 못했다."
  - "pass_rates: no recent pass-rate table was opened at the non-life association, the FSS, the Korea Insurance Development Institute, or KOSIS."
  - "hours_min, hours_typical, hours_max, hours_basis, hours_score, difficulty.level: no official or allowed-provider preparation-hour figure. The insurance institute 20H and 30H courses are registration education, not study hours, so the level stays unknown."
  - "sessions_per_year: 매월 다수의 지역 차수가 있으나 연간 합계 숫자는 없다."
notes_ko: 협회 소개 페이지의 절차는 연수교육 다음 접수 순이지만, 감독규정은 교육과 시험의 선후를 가리지 않고 1년 안에 둘 다 마치면 된다. 웹 페이지의 제15조 인용은 2026년 지침 조문 번호와 어긋나고, 60점 기준 자체는 감독규정과 같다. 33문항 배점은 웹 페이지에만 있고 지침 본문은 25문항 이상이다.
```

## kr_tat_1

```yaml
id: kr_tat_1
name_ko: 전산세무 1급
name_orig: Computerized Tax Accounting Level 1
tier: 1
region: KR
exam_type: certificate
domain: [accounting_tax]
issuer: 한국세무사회
official_url: "https://license.kacpta.or.kr"
status: active
summary_ko: 한국세무사회 국가공인 민간자격이다. 아이디의 tat는 이 전산세무 자격이며 공인회계사 시험의 TAT가 아니다. 2급과 별도로 응시하고, 이론과 법인세 조정을 포함한 실무를 한 번에 본다.
usage_ko: 세무회계 실무 능력을 보여주는 공인 민간자격이다. 세무사 자격이 아니므로 세무대리 등록은 되지 않는다. 합격 후 경력 요건은 없다.

eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: 응시 제한 없음
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "The association states no age, education, or experience requirement."
  extra_checks_ko:
    - "신분증이 필요하다."
    - "2급 합격은 1급 응시 조건이 아니다."
  exam_languages: [ko]
  english_level_needed: none
  english_level_reason: Theory and the KcLep practical are in Korean.
  test_countries: [KR]

award:
  extra_requirements: false
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko: []
  validity_ko: 합격으로 발급된다. 유효기간과 보수교육은 확인되지 않았다.

structure:
  stages:
    - name_ko: 전산세무 1급
      subjects_ko:
        - "이론 재무회계 10%"
        - "이론 원가회계 10%"
        - "이론 세무회계 10%"
        - "실무 재무회계·원가회계 15%"
        - "실무 부가가치세 15%"
        - "실무 원천제세 10%"
        - "실무 법인세무조정 30%"
      format: mixed
      question_summary_ko: 이론 30%는 4지선다, 실무 70%는 케이렙 실기다. 제한시간은 공고 전재 기준 90분이다.
      duration_min: 90
      passing_rule_ko: 100점 만점에 70점 이상.
      pass_rates:
        - period: "2026-06-06-126"
          rate_pct: 9.17
          examinees: unknown
        - period: "2026-04-04-125"
          rate_pct: 10.82
          examinees: unknown
        - period: "2026-01-31-124"
          rate_pct: 27.19
          examinees: unknown
        - period: "2025-12-06-123"
          rate_pct: 18.37
          examinees: unknown
        - period: "2025-09-28-122"
          rate_pct: 11.53
          examinees: unknown
      pass_rate_avg_pct: 15.42
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: 6
      next_dates_ko: "기준일 이후 2026년 시험일로 보도된 날은 2026-12-05이다. 합격률 표는 제126회가 마지막이었다."
      fee:
        amount: 30000
        currency: KRW
        krw_approx: 30000
        fx_date: 2026-11-11
  total:
    hours_min: unknown
    hours_typical: unknown
    hours_max: unknown
    hours_basis: unknown
    hours_basis_note_ko: "시간 합계가 적힌 시험 주관 기관 또는 지정 학원 페이지를 열지 못했다."
    min_calendar_months: 1
    pass_rate_avg_pct: 15.42

cost:
  other_fees_ko:
    - "2023년 공고의 발급비는 5,000원이다. 2026년 조정액은 확인하지 못했다."

difficulty:
  pass_rate_score: 4
  hours_score: na
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: true
  structure_score: 3
  level: unknown
  rationale_ko: "합격률 평균 15.42%는 4점, 구조 점수는 3이다. 총 학습시간이 없어 수준은 발표하지 않는다. 종전 수준 4는 대체한다."

sources:
  - url: "https://license.kacpta.or.kr/m/info/info_ratio.aspx"
    accessed: 2026-11-11
    type: official
    covers: [pass_rate]
  - url: "https://www.pqi.or.kr/inf/qul/infQulBasDetail.do?qulId=421"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://www.seoil.ac.kr/bbs/tax/1132/401086/artclView.do"
    accessed: 2026-11-11
    type: other
    covers: [structure]
  - url: "https://www.lec.co.kr/news/articleView.html?idxno=745292"
    accessed: 2026-11-11
    type: other
    covers: [fee, structure]
confidence:
  eligibility: high
  award: high
  structure: medium
  hours: low
  pass_rate: high
  fee: medium
as_of: 2026-11-11
unknown_reasons:
  - "difficulty.level: total study hours are unknown, so the old level 4, computed without hours, is withdrawn. The 15.42 percent average is still at least 15, so the pass-rate score stays 4."
  - "Session examinees are unpublished."
  - "Sessions after 126 had no rate on the retrieved table."
  - "2026 certificate fee unknown after the fee-adjustment notice."
  - "total.hours_* unknown."
notes_ko: "2025년 연간 민간자격 성적은 응시 13,710명, 합격률 14.65%다. 난이도는 회차 5개의 평균만 사용했다. 이 자격은 공인회계사 시험의 TAT가 아니다."
```

## kr_tat_2

```yaml
id: kr_tat_2
name_ko: 전산세무 2급
name_orig: Computerized Tax Accounting Level 2
tier: 1
region: KR
exam_type: certificate
domain: [accounting_tax]
issuer: 한국세무사회
official_url: "https://license.kacpta.or.kr"
status: active
summary_ko: 한국세무사회 국가공인 전산세무 2급이다. 1급과 별도 시험이며 법인세무조정 대신 부가가치세와 원천징수 실무 비중이 크다. 70점 이상이면 합격한다.
usage_ko: 세무회계 실무 보조 능력을 보여주는 공인 민간자격이다. 세무사 등록 자격은 아니다. 합격 후 경력 요건은 없다.

eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: 응시 제한 없음
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "The association sets no age, education, or experience requirement."
  extra_checks_ko:
    - "신분증이 필요하다."
  exam_languages: [ko]
  english_level_needed: none
  english_level_reason: The exam is in Korean, including the KcLep practical.
  test_countries: [KR]

award:
  extra_requirements: false
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko: []
  validity_ko: 합격으로 발급된다. 유효기간과 보수교육은 확인되지 않았다.

structure:
  stages:
    - name_ko: 전산세무 2급
      subjects_ko:
        - "이론 재무회계 10%"
        - "이론 원가회계 10%"
        - "이론 세무회계 10%"
        - "실무 재무회계·원가회계 35%"
        - "실무 부가가치세 20%"
        - "실무 원천제세 15%"
      format: mixed
      question_summary_ko: 이론 30%는 4지선다, 실무 70%는 케이렙 실기다. 제한시간은 공고 전재 기준 90분이다.
      duration_min: 90
      passing_rule_ko: 100점 만점에 70점 이상.
      pass_rates:
        - period: "2026-06-06-126"
          rate_pct: 28.44
          examinees: unknown
        - period: "2026-04-04-125"
          rate_pct: 25.21
          examinees: unknown
        - period: "2026-01-31-124"
          rate_pct: 27.65
          examinees: unknown
        - period: "2025-12-06-123"
          rate_pct: 43.99
          examinees: unknown
        - period: "2025-09-28-122"
          rate_pct: 46.38
          examinees: unknown
      pass_rate_avg_pct: 34.33
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: 6
      next_dates_ko: "기준일 이후 보도된 2026년 시험일은 2026-12-05이다."
      fee:
        amount: 30000
        currency: KRW
        krw_approx: 30000
        fx_date: 2026-11-11
  total:
    hours_min: unknown
    hours_typical: unknown
    hours_max: unknown
    hours_basis: unknown
    hours_basis_note_ko: "시간 합계가 적힌 시험 주관 기관 또는 지정 학원 페이지를 열지 못했다."
    min_calendar_months: 1
    pass_rate_avg_pct: 34.33

cost:
  other_fees_ko:
    - "2023년 공고의 발급비는 5,000원이다. 2026년 조정액은 확인하지 못했다."

difficulty:
  pass_rate_score: 3
  hours_score: na
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: true
  structure_score: 3
  level: unknown
  rationale_ko: "합격률 평균 34.33%는 3점, 구조 점수는 3이다. 총 학습시간이 없어 수준은 발표하지 않는다. 종전 수준 3은 대체한다."

sources:
  - url: "https://license.kacpta.or.kr/m/info/info_ratio.aspx"
    accessed: 2026-11-11
    type: official
    covers: [pass_rate]
  - url: "https://www.pqi.or.kr/inf/qul/infQulBasDetail.do?qulId=421"
    accessed: 2026-11-11
    type: statistics
    covers: [pass_rate]
  - url: "https://www.seoil.ac.kr/bbs/tax/1132/401086/artclView.do"
    accessed: 2026-11-11
    type: other
    covers: [structure]
  - url: "https://www.lec.co.kr/news/articleView.html?idxno=745292"
    accessed: 2026-11-11
    type: other
    covers: [fee]
confidence:
  eligibility: high
  award: high
  structure: medium
  hours: low
  pass_rate: high
  fee: medium
as_of: 2026-11-11
unknown_reasons:
  - "difficulty.level: total study hours are unknown, so the old level 3, computed without hours, is withdrawn."
  - "Session examinees unpublished."
  - "No post-126 rates on the retrieved table."
  - "2026 certificate fee unknown."
  - "total.hours_* unknown."
notes_ko: "2025년 연간 성적은 응시 50,602명, 합격률 37.16%다. 난이도에는 회차 평균 34.33%만 썼다."
```

## kr_third_sector_planner

```yaml
# ---------- A. Identity ----------
id: kr_third_sector_planner
name_ko: 제3보험설계사
name_orig: 제3보험설계사
tier: 1
region: KR
exam_type: license
domain: [insurance]
issuer: 생명보험협회 또는 손해보험협회
official_url: "https://exam.insure.or.kr/lp/schd/overview"
status: active
summary_ko: 제3보험설계사는 하나의 등록 종류다. 생명보험협회 제3보험시험 또는 손해보험협회 제3보험자격시험에 합격하고 제3보험 등록교육을 마치면 등록할 수 있다. 두 시험은 합격선은 같으나 문항 수와 시간이 같지 않다.
usage_ko: 제3보험 상품을 모집하는 소속 설계사로 등록하는 시험 경로다. 생명보험협회 시험의 효력은 회사·대리점·중개사 소속 설계사에 같이 적용된다. 손해보험협회는 합격증을 등록용으로만 안내한다. 제3보험대리점은 두 협회 중 어디에나 등록을 신청할 수 있으나, 그 대리점 시험은 보험연수원 시험이라 이 기록과 다르다.
# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: other
  nationality_countries: []
  nationality_note_ko: 생명보험협회 경로의 외국인은 F-2, F-5, F-6, 재외동포는 F-4만 된다. 손해보험협회 2026년 지침에서는 외국인 제한 조항을 찾지 못했다.
  paths:
    - label_ko: 생명보험협회 경로의 성년자
      age_min: 19
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "The life-association overview allows any adult to sit the third-sector paper with no sex, education, or career limit, through an affiliated insurer."
    - label_ko: 생명보험협회 경로의 미성년자
      age_min: null
      age_max: 18
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "On that overview a minor may sit only if married or with legal-representative consent."
    - label_ko: 손해보험협회 제3보험자격시험
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "The non-life guideline applies the non-life exam articles to the third-sector exam and states no age, education, or career minimum for sitting."
  extra_checks_ko:
    - "어느 협회든 소속 보험회사 등을 통해 접수하며 개인 접수는 되지 않는다."
    - "생명보험협회는 제3보험 합격 후 12개월 이내이거나 이미 생명·제3 설계사로 등록된 사람의 응시를 거부한다."
    - "손해보험협회는 합격 후 12개월 이내이거나 이미 설계사로 등록된 경우, 서류 하자, 제재 중, 수험표 미소지를 거부 사유로 둔다."
    - "두 협회의 국적·연령 문구가 같지 않다. 생명보험협회 성년은 페이지에 숫자가 없어 만 19세로 적었다."
  exam_languages: [ko]
  english_level_needed: none
  english_level_reason: Both opened third-sector papers are Korean multiple choice and neither requires an English score.
  test_countries: [KR]
  retake_limit_ko: 협회마다 합격 후 12개월 이내 재응시가 거부될 수 있다. 불합격 횟수 상한은 확인하지 못했다.
# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko:
    - "제3보험 연수과정은 별표 4 교육과 협회 시험이며, 둘은 서로 1년 안에 마쳐야 한다."
    - "보험회사·보험대리점 소속 교육은 20시간 이상, 외부교육 8시간 이상이다. 보험중개사 소속은 22시간 이상이다."
    - "등록수수료는 시행규칙 제28조의 6000원이다."
    - "등록 후 2년마다 6개월 안에 보수교육을 받는다."
  time_limit_ko: 교육 또는 연수 이수 후 등록신청 유효기간은 1년이고, 시험과 교육은 서로 1년을 넘기면 안 된다.
  validity_ko: 등록 수리일부터 말소 수리일까지 모집할 수 있다. 등록 유지 중 2년 주기 교육이 있다.
# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: 제3보험 자격시험
      subjects_ko:
        - "생명보험협회: 공통1 보험이론 및 윤리, 공통2 보험법규, 제3보험"
        - "손해보험협회: 보험 기초지식, 모집 법규 및 실무, 약관, 일반교양"
      format: mcq
      question_summary_ko: 생명보험협회는 제3보험 30문항으로, 공통 20문항 각 3점과 제3보험 10문항 각 4점이다. 손해보험협회 웹 페이지는 제3보험 33문항(18번부터 50번)으로, 18번 4점과 나머지 32문항 각 3점이다. 두 형식을 한 시험의 문항 수로 합치지 않았다. 손해보험 지침 본문은 25문항 이상만 정한다.
      duration_min: unknown
      passing_rule_ko: 두 협회 모두 100점 만점 60점 이상이고 제3보험을 생명 또는 손해보험과 따로 채점한다. 생명보험협회 차수는 50분이다. 손해보험협회는 문항당 1분 이상이며 실제 고시 분을 확인하지 못해 이 단계의 시간 칸은 비웠다.
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: unknown
      next_dates_ko: 두 협회 모두 매월 실시한다. 생명보험협회 개요에는 기준일 이후의 특정 일자가 없고, 손해보험협회 2026년 7월 이후 목록에는 11월 중순 지역 차수가 있으나 시각은 없다. 생명보험협회 결과는 당일 20시 전후, 손해보험협회는 다음 날 보험회사 통보가 원칙이다.
      fee:
        amount: 20000
        currency: KRW
        krw_approx: 20000
        fx_date: 2026-11-11
  exemptions_ko: 제3보험 시험 과목 면제는 없다. 등록신청일부터 3년 안에 제3보험 관계 업무 1년과 교육이 있으면 시험 없는 등록 요건이 있다. 생명보험협회 시행세칙은 손해보험 제3보험 설계사로 이미 등록된 사람을 생명 쪽 전산심사 대상으로 적는다.
  total:
    hours_min: unknown
    hours_typical: unknown
    hours_max: unknown
    hours_basis: unknown
    hours_basis_note_ko: "공식 권장 학습시간은 열지 못했다. 2026-11-11에 연 보험연수원 신규 설계사 등록교육은 제3보험 20H와 생명 또는 손해와 묶은 30H·40H를 등록교육으로 적는다. 등록교육은 시험 학습시간이 아니므로 넣지 않았다. 인카·해커스·에듀윌에서 제3보험 자격시험 준비 시간을 적은 페이지는 열지 못했다."
    min_calendar_months: 1
    pass_rate_avg_pct: unknown
# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "등록신청수수료 6000원(시행규칙 제28조, 생명보험협회 지침 제38조)."
    - "등록교육 수강료는 확인하지 못했다."
    - "생명보험시험에서 제3보험을 같은 신청에 포함하는 경우 2만원이 한 건인지 두 건인지는 확인하지 못했다. 제3보험만 신청하는 수수료는 어느 협회든 20000원이다."
# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: na
  hours_score: na
  structure_points:
    subjects_3_or_more: true
    subjective_questions: false
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 2
  level: unknown
  rationale_ko: "구조만으로 두었던 등급 2는 무효라 지운다. 공식 합격률이 없고 학습시간도 없어 두 점수는 na이다. 시간이 비어 있으면 등급을 매기지 않는다. 구조 점수 2는 유지한다."
# ---------- G. Sources and confidence ----------
sources:
  - url: "https://exam.insure.or.kr/lp/schd/overview"
    accessed: 2026-11-11
    type: official
    covers: [eligibility, structure, fee]
  - url: "https://exam.insure.or.kr/lp/schd/legal"
    accessed: 2026-11-11
    type: official
    covers: [eligibility, award, structure, fee]
  - url: "https://misi.knia.or.kr/m/task03/work04_02.knia"
    accessed: 2026-11-11
    type: official
    covers: [structure]
  - url: "https://misi.knia.or.kr/file/downloadFile?FDSEQ=100009&IDX=13671"
    accessed: 2026-11-11
    type: official
    covers: [eligibility, structure, fee]
  - url: "https://www.law.go.kr/LSW/admRulLsInfoR.do?admRulSeq=2100000279112"
    accessed: 2026-11-11
    type: regulator
    covers: [eligibility, award, structure]
  - url: "https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=290427&chrClsCd=010202&efYd=20261002"
    accessed: 2026-11-11
    type: regulator
    covers: [award]
  - url: "https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=269221&chrClsCd=010202&efYd=20250218"
    accessed: 2026-11-11
    type: regulator
    covers: [fee]
  - url: "https://is.in.or.kr/main/sukang/reg/compTrainning.do?lecture_type=1&search_gubun_code=01&search_high_code=04&search_mid_code=01"
    accessed: 2026-11-11
    type: official
    covers: [hours]
confidence:
  eligibility: medium
  award: high
  structure: medium
  hours: low
  pass_rate: low
  fee: high
as_of: 2026-11-11
unknown_reasons:
  - "duration_min: 생명보험협회는 50분, 손해보험협회는 분 단위 고시가 없어 하나의 숫자로 적지 않았다."
  - "pass_rates: no third-sector exam pass-rate table was opened at either association, the FSS, the Korea Insurance Development Institute, or KOSIS."
  - "hours_min, hours_typical, hours_max, hours_basis, hours_score, difficulty.level: no official or allowed-provider preparation-hour figure. The insurance institute 20H, 30H, and 40H courses are registration education, not study hours, so the level stays unknown."
  - "sessions_per_year: 매월 실시이나 연간 차수 합계는 없다."
notes_ko: 한 자격에 두 시험 형식이 있어 단계를 둘로 나누지 않았다. 단계는 연속 관문이 아니라 양자택일이다. 손해보험협회 웹의 33문항과 지침의 25문항 이상 하한이 같이 있다.
```
