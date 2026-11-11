# Korea insurance licenses

Research date: 2026-11-11. Seven Tier 1 records. Official names still in use: 생명보험설계사 (exam name 생명보험시험), 손해보험설계사 (exam name 손해보험자격시험), 제3보험설계사 (생명보험협회 제3보험시험 and 손해보험협회 제3보험자격시험), 재물손해사정사, 차량손해사정사, 신체손해사정사, and 보험계리사.

## Batch log

Completed ids: kr_life_planner, kr_nonlife_planner, kr_third_sector_planner, kr_claims_adjuster_property, kr_claims_adjuster_vehicle, kr_claims_adjuster_bodily, kr_actuary.

Adjuster split: 보험업법 시행규칙 제52조 defines four kinds of 손해사정사, and 제53조·별표 2 give 재물, 차량, and 신체 different subjects. They are separate licenses, so each has its own record. 종합손해사정사 is not a fourth exam. 제53조⑨ says a person who has passed all three and finished 제54조 실무수습 may apply to register as 종합. The old 제1종–제4종 names appear only as a transitional map for pre-1995 passes and old career files in the 2026 plan. No comprehensive-adjuster exam record was written.

Exclusions: 변액보험판매관리사 and 보험중개사 are Tier 2 and were not researched. 보험대리점 자격시험 is run by 보험연수원 (in.or.kr), not by the planner exams above. 간단보험설계사 is a narrower registration; 보험업감독규정 제4-3조 exempts it from the association exam and from the one-year exam-education pairing. 보험계약관리역 was not in scope.

Unknowns: planner and professional pass-rate series (no official rate table was opened; associations’ opened pages do not publish rates); study hours (no body recommendation and no named-provider hour page was opened, so hours were not estimated); actuary and adjuster question counts; KNIA session length in minutes; a single annual sitting count for the monthly planner exams; the next numbered life-planner sitting after 2026-11-11 (the schedule list was not opened); whether one life-association application fee covers both 생명보험 and 제3보험; KNIA nationality rule (the 2026 guideline has no foreigner article); 보험업법 제84조 disqualification list (cited by the life guideline, the Act text itself was not opened).

Conflicts: the life overview scores 30 items per exam, while the life 시행세칙 extracts 40 items from the bank (20 common + 10 life + 10 third) when both exams are seated. The KNIA pass page cites “지침 제15조” for 60 points and prints a 33-item scheme; in the guideline revised 2026-01-01, 제15조 is certificate issuance, 제14조 points the pass line to 감독규정 제4-3조② (60/100), and 제11조 only says “25문항 이상.” 제10조 sets time at “at least one minute per item,” not a fixed 60 minutes, so the life association’s 50 minutes was not copied onto KNIA. 시행령 별표 4 (revised 2026-04-21) floors new education at 20 hours including at least 5 external hours and leaves the exact time to an FSC notice; 보험업감독규정 제4-5조②, in the consolidation effective 2026-05-06, sets 20 hours for insurer and agency solicitors and at least 8 external hours. The notice figure is the one recorded. Older two-year English validity, TEPS 625, and a Financial Supervisory Service career exemption for actuaries are not in the current rule. An English Herald Business page (AI-assisted translation of a 2026-09-18 article) reports 49th second-stage passer counts and rates. Those figures were not entered as pass_rates because the Korean FSS release was not opened and one secondary year is not an official 3-to-5-year series. The same page’s 41.2 percent actuary figure is not stored: the article gives 104 final passers and does not show the denominator.

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
official_url: https://exam.insure.or.kr/lp/schd/overview
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
    hours_basis_note_ko: 협회나 이름을 댄 수험기관의 권장 학습시간을 열지 못했다. 등록교육 20시간은 합격에 필요한 공부 시간이 아니라 등록 교육시간이라 여기 넣지 않았다.
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
  level: 2
  rationale_ko: 합격률과 학습시간을 확인할 수 없어 그 두 점수는 빼고 구조만 평균했다. 한 장의 객관식에 공통1·공통2·생명보험 세 범위가 있어 구조 점수는 2이고, 등급은 2다. 20시간 등록교육은 시험 단계가 아니라 등록 요건이라 비필기 평가로 세지 않았다.
# ---------- G. Sources and confidence ----------
sources:
  - url: https://exam.insure.or.kr/lp/schd/overview
    accessed: 2026-11-11
    type: official
    covers: [eligibility, structure, fee]
  - url: https://exam.insure.or.kr/lp/schd/legal
    accessed: 2026-11-11
    type: official
    covers: [eligibility, award, structure, fee]
  - url: https://www.law.go.kr/LSW/admRulLsInfoR.do?admRulSeq=2100000279112
    accessed: 2026-11-11
    type: regulator
    covers: [award, structure]
  - url: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=290427&chrClsCd=010202&efYd=20261002
    accessed: 2026-11-11
    type: regulator
    covers: [award, eligibility]
  - url: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=269221&chrClsCd=010202&efYd=20250218
    accessed: 2026-11-11
    type: regulator
    covers: [fee]
confidence:
  eligibility: high
  award: high
  structure: high
  hours: low
  pass_rate: low
  fee: high
as_of: 2026-11-11
unknown_reasons:
  - "pass_rates: 생명보험협회 개요·지침과 감독규정에 최근 합격률이 없고, 공식 통계표는 열지 못했다."
  - "hours_min, hours_typical, hours_max, hours_basis: 협회 권장 시간과 수험기관 권장 시간을 열지 못했다."
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
official_url: https://misi.knia.or.kr/m/task03/work01.knia
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
    hours_basis_note_ko: 손해보험협회나 수험기관의 권장 학습시간을 열지 못했다. 등록교육 20시간은 학습시간 필드에 넣지 않았다.
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
  level: 2
  rationale_ko: 합격률과 학습시간이 없어 구조 점수만 썼다. 출제 범위가 네 가지인 객관식 한 시험이라 구조 점수는 2이고 등급은 2다. 등록교육은 비필기 시험 단계로 세지 않았다.
# ---------- G. Sources and confidence ----------
sources:
  - url: https://misi.knia.or.kr/m/task03/work01.knia
    accessed: 2026-11-11
    type: official
    covers: [eligibility, structure]
  - url: https://misi.knia.or.kr/m/task03/work04_02.knia
    accessed: 2026-11-11
    type: official
    covers: [structure, award]
  - url: https://misi.knia.or.kr/file/downloadFile?FDSEQ=100009&IDX=13671
    accessed: 2026-11-11
    type: official
    covers: [eligibility, award, structure, fee]
  - url: https://misi.knia.or.kr/m/task03/exam_schedule_list.knia
    accessed: 2026-11-11
    type: official
    covers: [structure]
  - url: https://www.law.go.kr/LSW/admRulLsInfoR.do?admRulSeq=2100000279112
    accessed: 2026-11-11
    type: regulator
    covers: [award, structure]
  - url: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=290427&chrClsCd=010202&efYd=20261002
    accessed: 2026-11-11
    type: regulator
    covers: [award]
  - url: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=269221&chrClsCd=010202&efYd=20250218
    accessed: 2026-11-11
    type: regulator
    covers: [fee]
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
  - "pass_rates: 협회 페이지와 지침에 합격률 통계가 없다."
  - "hours_min, hours_typical, hours_max, hours_basis: 공식·수험기관 권장 학습시간을 열지 못했다."
  - "sessions_per_year: 매월 다수의 지역 차수가 있으나 연간 합계 숫자는 없다."
notes_ko: 협회 소개 페이지의 절차는 연수교육 다음 접수 순이지만, 감독규정은 교육과 시험의 선후를 가리지 않고 1년 안에 둘 다 마치면 된다. 웹 페이지의 제15조 인용은 2026년 지침 조문 번호와 어긋나고, 60점 기준 자체는 감독규정과 같다. 33문항 배점은 웹 페이지에만 있고 지침 본문은 25문항 이상이다.
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
official_url: https://exam.insure.or.kr/lp/schd/overview
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
    hours_basis_note_ko: 두 협회의 권장 학습시간과 수험기관 시간표를 열지 못했다. 20시간 등록교육은 학습시간에 넣지 않았다.
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
  level: 2
  rationale_ko: 합격률과 학습시간이 없어 구조만 반영했다. 어느 협회 시험이든 출제 범위가 셋 이상인 객관식 한 단계라 구조 점수는 2이고 등급은 2다. 두 협회의 문항 수 차이는 난도 가산이 아니다.
# ---------- G. Sources and confidence ----------
sources:
  - url: https://exam.insure.or.kr/lp/schd/overview
    accessed: 2026-11-11
    type: official
    covers: [eligibility, structure, fee]
  - url: https://exam.insure.or.kr/lp/schd/legal
    accessed: 2026-11-11
    type: official
    covers: [eligibility, award, structure, fee]
  - url: https://misi.knia.or.kr/m/task03/work04_02.knia
    accessed: 2026-11-11
    type: official
    covers: [structure]
  - url: https://misi.knia.or.kr/file/downloadFile?FDSEQ=100009&IDX=13671
    accessed: 2026-11-11
    type: official
    covers: [eligibility, structure, fee]
  - url: https://www.law.go.kr/LSW/admRulLsInfoR.do?admRulSeq=2100000279112
    accessed: 2026-11-11
    type: regulator
    covers: [eligibility, award, structure]
  - url: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=290427&chrClsCd=010202&efYd=20261002
    accessed: 2026-11-11
    type: regulator
    covers: [award]
  - url: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=269221&chrClsCd=010202&efYd=20250218
    accessed: 2026-11-11
    type: regulator
    covers: [fee]
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
  - "pass_rates: 두 협회 페이지에 제3보험 합격률이 없다."
  - "hours_min, hours_typical, hours_max, hours_basis: 권장 학습시간을 열지 못했다."
  - "sessions_per_year: 매월 실시이나 연간 차수 합계는 없다."
notes_ko: 한 자격에 두 시험 형식이 있어 단계를 둘로 나누지 않았다. 단계는 연속 관문이 아니라 양자택일이다. 손해보험협회 웹의 33문항과 지침의 25문항 이상 하한이 같이 있다.
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
official_url: https://certi.kidi.or.kr:10443/exam/exam-guide/notice/view/3027
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
      next_dates_ko: 2026년 제49회 1차는 2026-04-12 일요일이었고 접수는 2026-02-24 09:30부터 2026-02-27 18:00였다. 장소 공고 예정일은 2026-03-27, 합격 공고 예정일은 2026-05-29였다. 1교시 10:00–11:20에 보험업법과 보험계약법, 2교시 11:50–12:30에 손해사정이론. 장소는 서울. 기준일에 이미 시행되었다. 제50회 일정은 공고 전이다.
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
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: 1
      next_dates_ko: 2026년 2차는 2026-07-26 일요일이었고 접수는 2026-06-09 09:30부터 2026-06-12 18:00, 경력면제 사전등록은 2026-04-27 09:30부터 2026-05-22 18:00였다. 회계원리 10:00–11:30, 해상 11:50–13:20, 책임·화재·기술 14:20–15:50. 합격 공고 예정일은 2026-09-18, 장소 공고 예정일은 2026-07-10이었다. 제50회는 미공고다.
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
    hours_basis_note_ko: 금융감독원·보험개발원 권장 학습시간과 이름을 댄 수험기관의 시간 권고 페이지를 열지 못했다.
    min_calendar_months: 4
    pass_rate_avg_pct: unknown
# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "등록수수료 10000원(시행규칙 제56조)."
    - "기초생활 수급·차상위, 장애인연금 수급, 한부모가족 지원대상은 수수료 감면 대상이 될 수 있다. 감면액은 계획에 금액이 없다."
    - "접수 마감부터 시험 15일 전까지 취소하면 전액, 14일 전부터 전날까지는 50퍼센트를 시험 후 15일 안에 환불한다. 시행규칙 제49조 제3항의 불가피한 결시도 시험 후 15일 안에 신청하면 전액 환불이다."
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
  level: 3
  rationale_ko: 공식 합격률 시계열과 학습시간이 없어 그 점수는 뺐다. 과목이 3개 이상이고 2차가 약술·주관식이라 구조 점수는 3이고 등급은 3이다. 6개월 실무수습은 등록 요건이라 시험 구조의 비필기 평가로 세지 않았다.
# ---------- G. Sources and confidence ----------
sources:
  - url: https://certi.kidi.or.kr:10443/exam/exam-guide/notice/view/3027
    accessed: 2026-11-11
    type: official
    covers: [eligibility, structure, fee]
  - url: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=269221&chrClsCd=010202&efYd=20250218
    accessed: 2026-11-11
    type: regulator
    covers: [eligibility, award, structure, fee]
  - url: https://www.law.go.kr/LSW/flDownload.do?flSeq=149132625
    accessed: 2026-11-11
    type: regulator
    covers: [structure]
  - url: https://www.law.go.kr/LSW/flDownload.do?flSeq=149132619
    accessed: 2026-11-11
    type: regulator
    covers: [eligibility]
confidence:
  eligibility: high
  award: high
  structure: high
  hours: low
  pass_rate: low
  fee: high
as_of: 2026-11-11
unknown_reasons:
  - "pass_rates: 2026년 계획과 시행규칙은 합격 기준만 두고 응시자·합격률 표를 싣지 않는다. 금감원 결과 통계 원문은 열지 못했다."
  - "question counts: 2026년 시행계획에 문항 수가 없다."
  - "hours_min, hours_typical, hours_max, hours_basis: 공식·수험기관 권장 시간을 열지 못했다."
notes_ko: 1차 영어를 뺀 시험 시간은 120분이다. 시행규칙은 1차에 기입형 병행을 허용하지만 2026년 계획은 4지선다만 실시했다. 접수·문의는 보험개발원 약관업무팀, 서울 영등포구 여의대로 108 파크원 타워2 31층, exam@kidi.or.kr, 02-368-4060이다. 같은 해 1차 4월과 2차 7월을 잇는 최단 일정은 4개월이고, 등록용 실무수습 6개월은 그 뒤에 붙는다.
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
official_url: https://certi.kidi.or.kr:10443/exam/exam-guide/notice/view/3027
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
      next_dates_ko: 2026년 1차는 2026-04-12, 접수 2026-02-24 09:30–2026-02-27 18:00, 합격 공고 예정 2026-05-29. 1교시 10:00–11:20 보험업법·보험계약법, 2교시 11:50–12:30 손해사정이론. 서울. 제50회는 미공고다.
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
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: 1
      next_dates_ko: 2026년 2차는 2026-07-26, 접수 2026-06-09 09:30–2026-06-12 18:00, 경력면제 사전등록 2026-04-27–2026-05-22. 1교시 10:00–11:30 자동차보험 대물, 2교시 11:50–13:20 구조·정비. 합격 공고 예정 2026-09-18. 제50회는 미공고다.
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
    hours_basis_note_ko: 시험 기관과 수험기관의 권장 학습시간을 열지 못했다.
    min_calendar_months: 4
    pass_rate_avg_pct: unknown
# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "등록수수료 10000원."
    - "수수료 감면 대상과 취소 환불(15일 전까지 전액, 14일 전부터 전날까지 50퍼센트)은 재물 시험과 같은 2026년 계획이다."
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
  level: 3
  rationale_ko: 합격률과 학습시간이 없어 구조만 반영했다. 1차 3과목과 2차 약술이 있어 구조 점수는 3이고 등급은 3이다. 실무수습은 등록 요건으로 두었다.
# ---------- G. Sources and confidence ----------
sources:
  - url: https://certi.kidi.or.kr:10443/exam/exam-guide/notice/view/3027
    accessed: 2026-11-11
    type: official
    covers: [eligibility, structure, fee]
  - url: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=269221&chrClsCd=010202&efYd=20250218
    accessed: 2026-11-11
    type: regulator
    covers: [eligibility, award, structure, fee]
  - url: https://www.law.go.kr/LSW/flDownload.do?flSeq=149132625
    accessed: 2026-11-11
    type: regulator
    covers: [structure]
confidence:
  eligibility: high
  award: high
  structure: high
  hours: low
  pass_rate: low
  fee: high
as_of: 2026-11-11
unknown_reasons:
  - "pass_rates: 공식 응시·합격 통계표를 열지 못했다."
  - "question counts: 2026년 시행계획에 없다."
  - "hours_min, hours_typical, hours_max, hours_basis: 권장 학습시간을 열지 못했다."
notes_ko: 2차 과목은 두 개뿐이나 1차 세 과목을 합치면 시험 전체 과목은 셋 이상이다. 운영 창구는 보험개발원 약관업무팀, 02-368-4060, exam@kidi.or.kr이다. 최단 일정은 2026년처럼 4월 1차 다음 7월 2차의 4개월이고 수습 6개월은 등록 단계다.
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
official_url: https://certi.kidi.or.kr:10443/exam/exam-guide/notice/view/3027
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
      next_dates_ko: 2026년 1차는 2026-04-12, 접수 2026-02-24 09:30–2026-02-27 18:00, 합격 공고 예정 2026-05-29. 1교시 10:00–11:20, 2교시 11:50–12:30. 서울. 제50회는 미공고다.
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
      pass_rates: unknown
      pass_rate_avg_pct: unknown
      hours_min: unknown
      hours_typical: unknown
      hours_max: unknown
      sessions_per_year: 1
      next_dates_ko: 2026년 2차는 2026-07-26, 접수 2026-06-09 09:30–2026-06-12 18:00. 의학 10:00–11:30, 책임·근재 11:50–13:20, 제3보험 14:20–15:50, 자동차 대인 16:10–17:40. 합격 공고 예정 2026-09-18. 제50회는 미공고다.
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
    hours_basis_note_ko: 시험 기관과 수험기관의 권장 학습시간을 열지 못했다.
    min_calendar_months: 4
    pass_rate_avg_pct: unknown
# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - "등록수수료 10000원."
    - "수수료 감면과 취소 환불 비율은 2026년 공통 계획과 같다."
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
  level: 3
  rationale_ko: 합격률과 학습시간이 없어 구조만 반영했다. 2차만 네 과목의 약술·주관식이라 구조 점수는 3이고 등급은 3이다. 실무수습은 등록 요건으로 두었다.
# ---------- G. Sources and confidence ----------
sources:
  - url: https://certi.kidi.or.kr:10443/exam/exam-guide/notice/view/3027
    accessed: 2026-11-11
    type: official
    covers: [eligibility, structure, fee]
  - url: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=269221&chrClsCd=010202&efYd=20250218
    accessed: 2026-11-11
    type: regulator
    covers: [eligibility, award, structure, fee]
  - url: https://www.law.go.kr/LSW/flDownload.do?flSeq=149132625
    accessed: 2026-11-11
    type: regulator
    covers: [structure]
confidence:
  eligibility: high
  award: high
  structure: high
  hours: low
  pass_rate: low
  fee: high
as_of: 2026-11-11
unknown_reasons:
  - "pass_rates: 공식 응시·합격 통계표를 열지 못했다."
  - "question counts: 2026년 시행계획에 없다."
  - "hours_min, hours_typical, hours_max, hours_basis: 권장 학습시간을 열지 못했다."
notes_ko: 신체는 1차 면제 경력과 실무수습 장소에 생명보험회사·생명보험협회가 포함되는 점이 재물·차량과 다르다. 운영 창구는 보험개발원 약관업무팀이다. 최단 시험 일정은 4개월이고 수습 6개월은 그 다음이다.
```

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
official_url: https://certi.kidi.or.kr:10443/exam/exam-guide/notice/view/3027
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
      next_dates_ko: 2026년 제49회 1차는 2026-04-12, 접수 2026-02-24 09:30–2026-02-27 18:00, 합격 공고 예정 2026-05-29. 1교시 10:00–11:20에 보험계약법·보험업법·근로자퇴직급여보장법과 경제학원론, 2교시 11:50–13:50에 보험수학과 회계원리. 서울. 제50회는 미공고다.
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
      next_dates_ko: 2026년 2차는 2026-07-25에 계리리스크관리 10:00–12:00, 보험수리학 13:00–15:00, 연금수리학 15:30–17:30, 2026-07-26에 계리모형론 10:00–12:00, 재무관리 및 금융공학 13:00–15:00이었다. 접수는 2026-06-09 09:30–2026-06-12 18:00, 경력면제 사전등록은 2026-04-27–2026-05-22, 합격 공고 예정은 2026-09-18. 제50회는 미공고다.
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
    hours_basis_note_ko: 금융감독원·보험개발원과 수험기관의 권장 학습시간 페이지를 열지 못했다. 과목별 5년 부분합격을 감안한 다년 수험 기간은 확인된 시간 숫자가 아니라 여기 적지 않았다.
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
  level: 3
  rationale_ko: 최종 합격률의 공식 시계열과 학습시간이 없어 두 점수를 뺐다. 다섯 과목의 2차 약술·계산이 있어 구조 점수는 3이고 등급은 3이다. 6개월 실무수습은 등록 요건이라 비필기 시험 점수로 세지 않았다.
# ---------- G. Sources and confidence ----------
sources:
  - url: https://certi.kidi.or.kr:10443/exam/exam-guide/notice/view/3027
    accessed: 2026-11-11
    type: official
    covers: [eligibility, structure, fee]
  - url: https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=269221&chrClsCd=010202&efYd=20250218
    accessed: 2026-11-11
    type: regulator
    covers: [eligibility, award, structure, fee]
  - url: https://www.law.go.kr/LSW/flDownload.do?flSeq=149132613
    accessed: 2026-11-11
    type: regulator
    covers: [structure]
  - url: https://www.law.go.kr/LSW/flDownload.do?flSeq=149132619
    accessed: 2026-11-11
    type: regulator
    covers: [eligibility]
confidence:
  eligibility: high
  award: high
  structure: high
  hours: low
  pass_rate: low
  fee: high
as_of: 2026-11-11
unknown_reasons:
  - "pass_rates: 1차·2차의 공식 응시자와 합격률 표를 열지 못했다. 2차 과목 응시 단위 비율을 최종 합격률로 환산하지 않았다."
  - "question counts: 2026년 시행계획에 없다."
  - "hours_min, hours_typical, hours_max, hours_basis: 권장 학습시간을 열지 못했다."
notes_ko: 2차 합격은 다섯 과목 모두 기준을 넘겨야 하며, 한 해의 과목 합격률은 그 최종 합격률이 아니다. 최소 150명에 못 미쳐 40점대로 넣은 과목 합격은 다음 해로 넘어가지 않고, 60점 이상만 5년간 유지된다. 같은 해 1차와 2차를 잇는 최단 기간은 2026년 4월 12일부터 7월 26일까지라 4개월로 적었다. 등록 전 실무수습 6개월은 시험 일정에 더하지 않았다. 문의는 보험개발원 약관업무팀 02-368-4060, exam@kidi.or.kr이다.
```
