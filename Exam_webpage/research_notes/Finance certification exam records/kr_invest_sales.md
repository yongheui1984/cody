## kr_fund_solicitor

```yaml
# ---------- A. Identity ----------
id: kr_fund_solicitor
name_ko: 펀드투자권유대행인
name_orig: 펀드투자권유대행인
tier: 1
region: KR
exam_type: license
domain: [securities_investment]
issuer: Korea Financial Investment Association (KOFIA)
official_url: https://license.kofia.or.kr/examInfo/examInfo.do
status: active
summary_ko: 펀드투자권유대행인은 집합투자증권(파생상품등은 제외)의 매매를 권유하거나, 투자자문·투자일임·신탁 계약(파생상품등에 투자하는 특정금전신탁 등은 제외)의 체결을 권유하는 자격이다. 한국금융투자협회 필수자격시험으로, 2026년에도 같은 이름으로 시행 중이다. 합격만으로 업무를 할 수는 없고, 등록교육 등을 이수한 뒤 금융투자회사의 위탁계약과 협회 등록이 필요하다.
usage_ko: 금융투자회사와 투자권유 위탁계약을 맺고 협회에 등록한 뒤, 펀드(파생상품등 제외) 매매 권유와 일정 범위의 투자자문·투자일임·신탁 계약 체결 권유를 할 수 있다. 집합투자증권의 매매 체결과 투자자문 업무는 할 수 없으며, 그 업무는 펀드투자권유자문인력 등록이 필요하다. 투자자문·일임 계약 권유는 투자자문·투자일임 등록교육이, 신탁계약 권유는 신탁 등록교육이 추가로 필요하다.

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  nationality_note_ko: 국적 제한 규정은 확인되지 않았다. 투자권유대행인 등록 시 신분증은 주민등록증, 운전면허증, 여권, 외국인등록증이다.
  paths:
    - label_ko: 응시 제한 사유가 없는 사람
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "The exam center bars only people who already passed the same exam, people under a qualification sanction, and people banned for cheating; it states no age, education, or career minimum."
  extra_checks_ko:
    - 동일 시험에 이미 합격한 사람은 재응시할 수 없다.
    - 자격제재 또는 부정행위로 응시가 제한된 사람은 응시할 수 없고, 합격해도 무효가 될 수 있다. 부정행위 제재는 5년 범위에서 응시를 제한할 수 있다.
    - 종전 증권펀드투자상담사(간접투자증권판매인력) 등에 해당하는 사람은 제1과목(투자 권유)과 제2과목(펀드 투자)을 면제받을 수 있다. 면제는 의무가 아니며, 전과목 응시를 선택하면 비면제자와 같은 합격기준을 적용한다. 제24회 공고의 3과목만 응시 구분은 81~100번 20문항이다.
    - 종전 부동산펀드투자상담사 시험 합격자는 규정에서 전과목 면제 대상이다. 시험센터 화면은 그 자격요건을 모두 갖춘 사람의 응시를 불가라고 안내한다.
  exam_languages: [ko]
  english_level_needed: basic
  english_level_reason: The paper and rules are Korean, but product and market terms include English abbreviations such as MMF.
  test_countries: [KR]
  retake_limit_ko: 합격 후 동일 시험 재응시는 불가하다. 불합격 횟수 제한은 확인되지 않았다. 부정행위가 확정되면 5년 범위에서 필수·자율 자격시험 응시가 제한될 수 있다.

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko:
    - 펀드투자권유대행인 시험 또는 펀드투자권유자문인력 적격성 인증시험에 합격할 것.
    - 펀드투자권유대행인 등록교육 또는 펀드투자권유자문인력 투자자 보호 교육을 이수할 것.
    - 금융투자회사가 임직원이 아닌 개인과 투자권유 위탁계약을 맺고 협회에 등록을 신청할 것. 등록증은 협회가 발급한다.
    - 투자자문·투자일임 계약 체결을 권유하려면 별표 8-1의 투자자문·투자일임 등록교육, 신탁계약 체결을 권유하려면 신탁 등록교육이 추가로 필요하다.
  time_limit_ko: 합격 자체에 유효기간은 없다. 다만 자격요건을 처음 갖춘 날, 같은 종류 등록의 말소일, 또는 보수교육·전문성 강화 교육 이수일부터 5년이 모두 지난 경우에는 등록이 거부될 수 있어, 그 전에 전문성 강화 교육이 필요하다.
  validity_ko: 합격자 명부는 영구 기록이다. 등록된 투자권유대행인은 매년 1회 이상 협회 보수교육을 이수해야 하며, 등록된 해는 면제된다. 미이수 시 다음 해 1월 1일부터 이수 시까지 등록 효력이 정지될 수 있다. 위탁계약 종료·해지 또는 금융위원회의 등록취소가 있으면 협회 등록이 말소된다.

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: 펀드투자권유대행인 시험
      subjects_ko:
        - 제1과목 투자 권유(법규, 직무윤리·투자자분쟁예방, 펀드영업실무, 투자권유)
        - 제2과목 펀드 투자(펀드 구성·이해, 펀드평가, 투자관리)
        - 제3과목 부동산펀드(부동산펀드 관련 법규, 부동산펀드 영업실무)
      format: mcq
      question_summary_ko: 선택형 100문항, 1교시 120분(10:00~12:00). 제1과목 50문항(과락 20), 제2과목 30문항(과락 12), 제3과목 20문항(과락 8). 실시공고는 계산기 지참을 요구한다. 부분 응시 시 제3과목만은 25분·20문항이다.
      duration_min: 120
      passing_rule_ko: 응시 과목별 정답 비율 40% 이상이고 전체 정답 비율 60%(60문항) 이상. 과목별 부분합격은 다음 회차로 이월되지 않는다.
      pass_rates:
        - period: unknown
          rate_pct: unknown
          examinees: unknown
      pass_rate_avg_pct: unknown
      hours_min: 40
      hours_typical: 80
      hours_max: 130
      sessions_per_year: 2
      next_dates_ko: 2026년은 2회다. 제23회는 2026-05-31 시험, 접수 2026-04-27~04-30(추가접수 마감 2026-05-04 18:00), 합격발표 2026-06-11, 서울·대전·부산·광주·제주. 제24회는 2026-11-29 시험, 접수 2026-11-02~11-06(추가접수 마감 2026-11-09 18:00), 합격발표 2026-12-10, 서울·대전·부산·대구·광주. 2026-11-11 기준 제24회 접수 상태는 종료로 표시된다. 2027년 일정은 규정상 2026-12-31까지 공고 대상이며 아직 게시되지 않았다.
      fee:
        amount: 50000
        currency: KRW
        krw_approx: 50000
        fx_date: 2026-11-11
  exemptions_ko: 종전 증권펀드 판매·상담 자격에 해당하는 사람은 제1·제2과목을 면제하고 제3과목만 응시할 수 있다. 제24회 공고의 그 응시료는 20,000원(25분)이다. 종전 부동산펀드투자상담사 시험 합격자는 전과목 면제이며, 시험센터는 응시 불가로 안내한다.
  total:
    hours_min: 40
    hours_typical: 80
    hours_max: 130
    hours_basis: researcher_estimate
    hours_basis_note_ko: 협회는 학습시간을 공표하지 않았고, 확인한 수험기관 페이지도 강의 길이만 있을 뿐 총 학습시간을 권장하지 않아 추정했다. 한국어 선택형 100문항·120분·계산기 지참, 합격선 60%와 과목 40%를 기준으로, 기본서 1회와 문제 2회를 처음 보는 수험생 기준으로 하한 40시간, 보통 80시간, 상한 130시간으로 잡았다.
    min_calendar_months: 1
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - 제3과목만 응시 20,000원(제24회 실시공고, 부가세 포함 여부는 공고에 별도 표기 없음).
    - 등록교육·보수교육·전문성 강화 교육 수강료는 금융투자교육원 과정별로 받으나, 2026-11-11에 이 자격의 금액을 확인하지 못했다.
    - 협회는 투자권유대행인 등록 신청에 대해 별도 응시수수료와 같은 등록수수료 금액을 영업규정 본문에 두지 않는다.

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: na
  hours_score: 2
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 3
  level: 3
  rationale_ko: 합격률은 협회가 공개하지 않아 합격률 점수는 빼고, 학습시간 2점과 구조 3점을 평균해 반올림하면 3이다. 한 번에 보는 선택형 3과목이지만 계산기 지참이 의무이고 과목 과락이 있어 입문 시험보다는 높다.

# ---------- G. Sources and confidence ----------
sources:
  - url: https://license.kofia.or.kr/examInfo/examInfo.do
    accessed: 2026-11-11
    type: official
    covers: [eligibility, structure, fee]
  - url: https://license.kofia.or.kr/examExecNtce/popup/LICExamExecNtcePop.do
    accessed: 2026-11-11
    type: official
    covers: [structure, fee]
  - url: https://law.kofia.or.kr/service/law/lawFullScreenContent.do?seq=138&historySeq=1701
    accessed: 2026-11-11
    type: official
    covers: [eligibility, award, structure]
  - url: https://law.kofia.or.kr/service/law/lawFullScreenContent.do?seq=136&historySeq=1757
    accessed: 2026-11-11
    type: official
    covers: [award, eligibility]
confidence:
  eligibility: high
  award: high
  structure: high
  hours: low
  pass_rate: low
  fee: high
as_of: 2026-11-11
unknown_reasons:
  - pass_rates, pass_rate_avg_pct: 자격시험센터 시험개요, 실시공고, 전문인력 규정에서 회차별 합격률과 응시인원을 찾지 못했다. 수험기관 수치를 쓰지 않았다.
  - education and registration fee amounts: 교육 이수 의무는 규정에 있으나 2026년 수강료 금액은 확인하지 못했다.
notes_ko: 영문 정식 표기는 시험센터의 Fund investment Solicitor이다. 시험 형식은 규정에서 선택형 또는 서술형인데, 채점은 문항 정답 비율이고 공고 시간도 120분이라 시행 형식은 선택형으로 보았다. 계산기 지참은 제24회 실시공고의 고정 문구에 있다. 2024년 보도는 2026년부터 대행인 시험을 연 3회로 늘릴 계획이라고 했으나, 2026년 확정 일정과 시험센터 데이터는 연 2회다. exam_type을 license로 둔 이유는 이 시험이 투자권유대행인 등록을 위한 필수자격시험이기 때문이다.
```

## kr_securities_solicitor

```yaml
# ---------- A. Identity ----------
id: kr_securities_solicitor
name_ko: 증권투자권유대행인
name_orig: 증권투자권유대행인
tier: 1
region: KR
exam_type: license
domain: [securities_investment]
issuer: Korea Financial Investment Association (KOFIA)
official_url: https://license.kofia.or.kr/examInfo/examInfo.do
status: active
summary_ko: 증권투자권유대행인은 증권(집합투자증권과 파생상품등 제외)과 단기금융집합투자기구 집합투자증권을 일정 방법으로 매매 권유하거나, 투자자문·투자일임·신탁 계약의 체결을 권유하는 자격이다. 2026년에도 같은 이름으로 연 2회 시행된다. 매매 체결과 투자자문 업무는 할 수 없고, 그 업무에는 증권투자권유자문인력 시험이 필요하다.
usage_ko: 한 금융투자회사와 투자권유 위탁계약을 체결하고 협회에 등록한 뒤, 주식·채권 등 증권(집합투자증권·파생결합증권 제외)과 MMF를 자동 매수하는 CMA 방식의 단기금융집합투자기구 집합투자증권에 대한 매매 권유를 할 수 있다. 투자자문·일임 또는 신탁 계약 체결 권유는 각각 추가 등록교육이 있어야 한다. 주문 체결과 투자자문은 할 수 없다.

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  nationality_note_ko: 국적 제한은 확인되지 않았다. 등록 서류의 신분증은 주민등록증, 운전면허증, 여권, 외국인등록증이다.
  paths:
    - label_ko: 응시 제한 사유가 없는 사람
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [any]
      source_text: "The exam center lists no age, schooling, or career requirement and bars only prior passers of the same exam, sanctioned persons, and persons banned for cheating."
  extra_checks_ko:
    - 동일 시험 합격 후 재응시, 자격제재에 따른 응시 제한, 부정행위에 따른 응시 제한에 해당하면 응시할 수 없다.
    - 시험센터의 증권투자권유대행인 화면은 과목 면제 대상을 두지 않는다. 제24회 실시공고의 응시료도 전과목 50,000원만 있다.
  exam_languages: [ko]
  english_level_needed: basic
  english_level_reason: The exam is Korean, but market terms such as CMA and MMF appear in the official scope description.
  test_countries: [KR]
  retake_limit_ko: 합격 후 동일 시험 재응시 불가. 부정행위 확정 시 5년 범위에서 응시 제한 가능. 불합격 횟수 제한은 확인되지 않았다.

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: [any]
  other_requirements_ko:
    - 증권투자권유대행인 시험, 증권투자권유자문인력 적격성 인증시험, 또는 투자자산운용사 시험 중 하나에 합격할 것.
    - 증권투자권유대행인 등록교육 또는 증권투자권유자문인력 투자자 보호 교육을 이수할 것.
    - 금융투자회사가 임직원이 아닌 개인에 대한 위탁계약으로 협회에 등록할 것.
    - 투자자문·투자일임 계약 권유는 투자자문·투자일임 등록교육, 신탁계약 권유는 신탁 등록교육이 추가로 필요하다.
  time_limit_ko: 합격의 유효기간은 없다. 자격요건을 처음 갖춘 날, 같은 종류 등록의 말소일, 또는 보수교육·전문성 강화 교육 이수일부터 5년이 모두 지나면 등록이 거부될 수 있다.
  validity_ko: 합격 기록은 영구다. 등록 중에는 매년 1회 이상 보수교육이 필요하고 등록 연도는 면제된다. 미이수 시 다음 해 1월 1일부터 이수 시까지 등록 효력이 정지될 수 있다. 위탁계약이 끝나거나 금융위원회가 등록을 취소하면 협회 등록이 말소된다.

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: 증권투자권유대행인 시험
      subjects_ko:
        - 제1과목 증권분석 및 증권시장(경기분석, 기본적 분석, 기술적 분석, 유가증권시장, 코스닥시장, 채권시장, 기타 증권시장)
        - 제2과목 금융상품 및 윤리(금융상품분석·투자전략, 투자권유 및 고객관리, 직무윤리·투자자분쟁예방)
        - 제3과목 법규 및 규정(자본시장 관련 법규, 금융소비자 보호에 관한 법률 포함)
      format: mcq
      question_summary_ko: 선택형 100문항, 120분(10:00~12:00). 제1과목 30문항(과락 12), 제2과목 50문항(과락 20), 제3과목 20문항(과락 8). 실시공고는 계산기 지참을 요구한다.
      duration_min: 120
      passing_rule_ko: 응시 과목별 정답 비율 40% 이상이고 전체 정답 비율 60%(60문항) 이상.
      pass_rates:
        - period: unknown
          rate_pct: unknown
          examinees: unknown
      pass_rate_avg_pct: unknown
      hours_min: 40
      hours_typical: 80
      hours_max: 130
      sessions_per_year: 2
      next_dates_ko: 2026년은 2회다. 제23회는 2026-04-19 시험, 접수 2026-03-23~03-27(추가접수 마감 2026-03-30 18:00), 합격발표 2026-04-30, 서울·부산·대구·광주·제주. 제24회는 2026-10-18 시험, 접수 2026-09-14~09-18(추가접수 마감 2026-09-21 18:00), 합격발표 2026-10-29, 서울·대전·부산·광주. 2026-11-11 기준 두 회차 모두 종료되었다. 2027년 일정은 아직 공고되지 않았다.
      fee:
        amount: 50000
        currency: KRW
        krw_approx: 50000
        fx_date: 2026-11-11
  exemptions_ko: 이 시험의 과목 면제는 시험센터 개요와 제24회 응시료 표에서 확인되지 않았다.
  total:
    hours_min: 40
    hours_typical: 80
    hours_max: 130
    hours_basis: researcher_estimate
    hours_basis_note_ko: 협회 권장 학습시간과 수험기관의 총 학습시간 권장치를 확인하지 못했다. 펀드투자권유대행인과 같이 선택형 100문항, 120분, 합격선 60%·과락 40%, 계산기 지참을 기준으로 하한 40시간, 보통 80시간, 상한 130시간으로 추정했다.
    min_calendar_months: 1
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - 제24회 공고의 응시료는 전과목 50,000원뿐이다.
    - 등록교육·보수교육·추가 등록교육의 2026년 수강료는 확인하지 못했다.

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: na
  hours_score: 2
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 3
  level: 3
  rationale_ko: 합격률이 없어 학습시간 2점과 구조 3점의 평균을 반올림해 3으로 했다. 단일 선택형 시험이지만 과목이 3개이고 계산기 지참과 과목 과락이 있다.
  # level = round_half_up(mean(2, 3)) = 3

# ---------- G. Sources and confidence ----------
sources:
  - url: https://license.kofia.or.kr/examInfo/examInfo.do
    accessed: 2026-11-11
    type: official
    covers: [eligibility, structure, fee]
  - url: https://license.kofia.or.kr/examExecNtce/popup/LICExamExecNtcePop.do
    accessed: 2026-11-11
    type: official
    covers: [structure, fee]
  - url: https://law.kofia.or.kr/service/law/lawFullScreenContent.do?seq=138&historySeq=1701
    accessed: 2026-11-11
    type: official
    covers: [eligibility, award, structure]
  - url: https://law.kofia.or.kr/service/law/lawFullScreenContent.do?seq=136&historySeq=1757
    accessed: 2026-11-11
    type: official
    covers: [award]
confidence:
  eligibility: high
  award: high
  structure: high
  hours: low
  pass_rate: low
  fee: high
as_of: 2026-11-11
unknown_reasons:
  - pass_rates, pass_rate_avg_pct: 공식 합격률을 찾지 못했다.
  - education fee amounts: 2026년 교육 수강료를 확인하지 못했다.
notes_ko: 영문 정식 표기는 Securities Investment Solicitor이다. 증권투자권유대행인 자격은 이 시험 외에 증권투자권유자문인력 시험 또는 투자자산운용사 시험 합격으로도 시험 요건을 충족할 수 있다. exam_type은 등록에 필요한 필수자격시험이므로 license다. 2024년에 발표된 2026년 연 3회 확대 계획은 확정된 2026년 일정에서 반영되지 않았다.
```

## kr_fund_advisor

```yaml
# ---------- A. Identity ----------
id: kr_fund_advisor
name_ko: 펀드투자권유자문인력
name_orig: 펀드투자권유자문인력
tier: 1
region: KR
exam_type: license
domain: [securities_investment]
issuer: Korea Financial Investment Association (KOFIA)
official_url: https://license.kofia.or.kr/examInfo/examInfo.do
status: active
summary_ko: 펀드투자권유자문인력은 투자자를 상대로 집합투자기구의 집합투자증권에 대해 투자권유 또는 투자자문 업무를 하는 금융투자전문인력이다. 적격성 인증시험이며, 시험 전에 해당 투자자 보호 교육을 이수해야 응시할 수 있다. 2026년에도 같은 이름으로 연 3회 시행된다.
usage_ko: 금융투자회사 임직원으로 협회에 등록하면 펀드에 대한 투자권유와 투자자문 업무를 할 수 있다. 고난도금융투자상품에 해당하는 펀드를 권유하려면 파생상품투자권유자문인력 등록요건도 함께 갖춰야 한다. 전문투자자만 상대하는 업무는 금융투자회사 또는 해외 금융투자회사 경력 1년으로 별도 등록할 수 있는 예외가 있다. 매매 권유만 하는 투자권유대행인보다 업무 범위가 넓다.

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  nationality_note_ko: 국적 조항은 없다. 응시 제한은 투자자 보호 교육의 수강 대상인지와 이수 여부다.
  paths:
    - label_ko: 검사대상기관·한국은행·법정 유관기관·근로복지공단의 임직원
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [banking_finance, securities_asset_mgmt, insurance]
      source_text: "Investor-protection education, and therefore the exam, is open to employees of FSC inspection-target institutions, the Bank of Korea, the institutions in Enforcement Decree Article 10(3) items 1 to 13, and the Korea Workers' Compensation and Welfare Service, including people who retired after at least one year there."
    - label_ko: 국가공무원 또는 지방공무원
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [non_finance]
      source_text: "National or local public officials may take the investor-protection course, including officials who retired after at least one year of service."
    - label_ko: 투자권유대행인 경력 1년 이상
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 1
      work_fields_accepted: [securities_asset_mgmt]
      source_text: "A person who has solicited investments as an investment solicitor for at least one year may take the investor-protection course."
    - label_ko: 보험모집 경력 1년 이상
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 1
      work_fields_accepted: [insurance]
      source_text: "An insurance solicitor, agent, or broker who has solicited insurance for at least one year may take the investor-protection course."
  extra_checks_ko:
    - 위 경력은 교육 수강 대상일 뿐이고, 접수 시 해당 펀드 투자자 보호 교육을 수료하지 않으면 응시할 수 없다. 교육 수강 대상이 아닌 일반인도 응시할 수 없다.
    - 퇴직자에게 요구되는 1년은 현직 임직원·현직 공무원에게는 요구되지 않는다. 화면의 경력 0년 경로는 현직을 가리킨다.
    - 그 밖에 자율규제위원장이 정하는 자도 교육 대상이 될 수 있다. 이 추가 지정 명단은 규정 본문에 없다.
    - 동일 시험 합격자, 자격제재 대상, 부정행위 응시제한 대상은 응시할 수 없다.
    - 종전 증권펀드 판매·상담 자격은 제1과목, 종전 파생상품펀드투자상담사 자격은 제1·제2과목, 종전 부동산펀드투자상담사 자격은 제1·제3과목을 면제할 수 있다. 증권·파생상품·부동산 펀드투자상담사 자격을 모두 갖춘 사람은 시험센터가 응시 불가로 안내한다.
    - 두 과목만 응시하는 경우 과목별 부분합격은 인정되지 않는다.
  exam_languages: [ko]
  english_level_needed: basic
  english_level_reason: The paper is Korean. English abbreviations appear in related product rules, but the questions themselves are not an English exam.
  test_countries: [KR]
  retake_limit_ko: 합격 후 동일 시험 재응시 불가. 부정행위 시 5년 범위 응시 제한 가능. 불합격 횟수 제한은 확인되지 않았다.

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: [securities_asset_mgmt, banking_finance]
  other_requirements_ko:
    - 펀드투자권유자문인력 투자자 보호 교육을 이수하고 적격성 인증시험에 합격할 것. 교육은 응시 전 요건이다.
    - 금융투자회사 또는 신용평가회사의 임직원으로 회사가 협회에 등록을 신청할 것. 임직원이 아니면 등록이 거부될 수 있다.
    - 전문투자자만 상대하는 펀드 투자권유는 시험·교육 대신 금융투자회사 또는 해외 금융투자회사 근무 1년으로 등록할 수 있는 예외가 있다. 그 경우 업무는 전문투자자로 한정된다.
    - 특별자산집합투자기구 집합투자증권을 판매하려면 해당 특별자산별 교육을 최소 2시간 이수해야 한다.
  time_limit_ko: 합격 기록의 소멸 기간은 없다. 등록요건을 처음 갖춘 날, 해당 업무 종사 최종일, 같은 종류 등록의 말소일, 또는 전문성 강화 교육 이수일부터 5년이 모두 지난 사람은 다시 등록하려면 전문성 강화 교육 대상이다. 펀드투자권유대행인과 펀드투자권유자문인력은 같은 종류로 본다.
  validity_ko: 등록된 금융투자전문인력은 매년 1회 이상 보수교육을 이수해야 하며, 등록된 해는 면제된다. 보수교육 미이수 시 등록 효력이 정지될 수 있다. 합격자 명부는 영구 보존이다.

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: 펀드투자권유자문인력 적격성 인증시험
      subjects_ko:
        - 제1과목 펀드일반(법규, 직무윤리·투자자분쟁예방, 펀드영업실무, 펀드 구성·이해, 펀드 운용, 펀드 평가)
        - 제2과목 파생상품펀드(파생상품펀드 법규, 파생상품펀드 영업, 파생상품펀드 투자·리스크관리)
        - 제3과목 부동산펀드(부동산펀드 법규, 부동산펀드 영업실무)
      format: mcq
      question_summary_ko: 선택형 100문항, 전과목 120분(10:00~12:00). 제1과목 60문항(과락 30), 제2과목 25문항(과락 13), 제3과목 15문항(과락 8). 과락 문항 수는 50%를 올림한 값이다. 실시공고는 계산기 지참을 요구한다. 면제 응시는 2·3과목 50분 40문항, 2과목만 30분 25문항, 3과목만 20분 15문항이다.
      duration_min: 120
      passing_rule_ko: 응시 과목별 정답 비율 50% 이상이고 전체 정답 비율 70%(70문항) 이상. 과락 기준은 시험센터가 과목별로 정수 문항으로 둔다.
      pass_rates:
        - period: unknown
          rate_pct: unknown
          examinees: unknown
      pass_rate_avg_pct: unknown
      hours_min: 50
      hours_typical: 100
      hours_max: 160
      sessions_per_year: 3
      next_dates_ko: 2026년은 3회다. 제33회 2026-03-08, 접수 2026-02-02~02-06(추가 2026-02-09), 발표 2026-03-19, 서울·대전·부산·대구·광주. 제34회 2026-05-31, 접수 2026-04-27~04-30(추가 2026-05-04), 발표 2026-06-11, 서울·대전·부산·광주·제주. 제35회 2026-11-29, 접수 2026-11-02~11-06(추가 2026-11-09), 발표 2026-12-10, 서울·대전·부산·대구·광주. 2026-11-11 기준 제35회 접수는 종료로 표시된다.
      fee:
        amount: 50000
        currency: KRW
        krw_approx: 50000
        fx_date: 2026-11-11
  exemptions_ko: 제34회 공고 기준 부분 응시료는 2·3과목 30,000원, 2과목만 20,000원, 3과목만 20,000원이다. 전과목은 50,000원이다.
  total:
    hours_min: 50
    hours_typical: 100
    hours_max: 160
    hours_basis: researcher_estimate
    hours_basis_note_ko: 협회 권장 시간과 수험기관의 총 학습시간 권장치를 확인하지 못했다. 대행인 시험보다 합격선이 70%·과락 50%로 높고 파생상품펀드가 포함되므로, 기본서와 문제 반복을 기준으로 하한 50시간, 보통 100시간, 상한 160시간으로 추정했다. 응시 전 투자자 보호 교육 시간은 이 학습시간에 넣지 않았다.
    min_calendar_months: 1
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - 부분 응시 수수료는 제34회 공고 기준 30,000원 또는 20,000원.
    - 투자자 보호 교육, 등록 후 보수교육, 필요 시 전문성 강화 교육과 특별자산펀드 교육의 2026년 수강료는 확인하지 못했다.
    - 금융투자전문인력 등록수수료는 회사가 낼 수 있으나 금액은 자율규제위원장이 정하고 규정 본문에 숫자가 없다.

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: na
  hours_score: 2
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 3
  level: 3
  rationale_ko: 합격률을 제외하면 학습시간 2점과 구조 3점의 평균을 반올림해 3이다. 합격선이 70%이고 과목이 셋이지만 한 번의 선택형 시험이라 최상급으로 보지는 않았다.
  # non_written_assessment is false because the investor-protection course is a sitting prerequisite, not an exam stage.

# ---------- G. Sources and confidence ----------
sources:
  - url: https://license.kofia.or.kr/examInfo/examInfo.do
    accessed: 2026-11-11
    type: official
    covers: [eligibility, structure]
  - url: https://license.kofia.or.kr/examExecNtce/popup/LICExamExecNtcePop.do
    accessed: 2026-11-11
    type: official
    covers: [structure, fee]
  - url: https://license.kofia.or.kr/main/main.do
    accessed: 2026-11-11
    type: official
    covers: [eligibility]
  - url: https://law.kofia.or.kr/service/law/lawFullScreenContent.do?seq=138&historySeq=1701
    accessed: 2026-11-11
    type: official
    covers: [eligibility, award, structure]
confidence:
  eligibility: high
  award: high
  structure: high
  hours: low
  pass_rate: low
  fee: high
as_of: 2026-11-11
unknown_reasons:
  - pass_rates, pass_rate_avg_pct: 공식 합격률이 없다.
  - education fee amounts: 투자자 보호 교육 등의 2026년 수강료를 확인하지 못했다.
  - registration fee amount: 제3-7조는 수수료를 둘 수 있다고만 정한다.
notes_ko: 영문 정식 표기는 Certified Fund Investment Advisor이다. 2014년 9월 18일 개정으로 종전 펀드투자상담사 체계가 이 이름으로 바뀌었고, 종전 시험 합격과 등록은 경과 규정으로 인정된다. 일반인은 응시할 수 없다. 교육 시간·수강료의 세부 숫자는 자율규제위원장이 정하며 규정 본문에는 없다. exam_type은 펀드 투자권유·자문 등록에 필요한 필수자격시험이므로 license다. 투자자 보호 교육은 시험 단계가 아니라 응시 요건이라 구조 점수의 비필기 평가에는 넣지 않았다.
```

## kr_securities_advisor

```yaml
# ---------- A. Identity ----------
id: kr_securities_advisor
name_ko: 증권투자권유자문인력
name_orig: 증권투자권유자문인력
tier: 1
region: KR
exam_type: license
domain: [securities_investment]
issuer: Korea Financial Investment Association (KOFIA)
official_url: https://license.kofia.or.kr/examInfo/examInfo.do
status: active
summary_ko: 증권투자권유자문인력은 집합투자증권과 파생상품등에 속하는 파생결합증권을 제외한 증권에 대해 투자권유 또는 투자자문 업무를 하거나, 일정 방법으로 단기금융집합투자기구 집합투자증권의 투자권유를 하는 전문인력이다. 응시 전에 증권 투자자 보호 교육을 이수해야 한다. 2026년에도 같은 이름으로 연 3회 시행되었다.
usage_ko: 금융투자회사 임직원으로 등록하면 주식·채권 등 증권의 투자권유와 투자자문, 그리고 MMF 자동매수형 CMA에 해당하는 단기금융집합투자기구 집합투자증권의 투자권유를 할 수 있다. 집합투자증권 일반과 파생상품등 업무는 각각 펀드·파생상품 투자권유자문인력의 범위다. 전문투자자만 상대하는 증권 투자권유는 금융투자회사 경력 1년으로, 겸영금융투자회사의 채무증권 투자권유는 별도 등록교육으로 한정 등록할 수 있는 예외가 있다.

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: 검사대상기관·한국은행·법정 유관기관·근로복지공단의 임직원
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [banking_finance, securities_asset_mgmt, insurance]
      source_text: "Article 5-2 opens investor-protection education to employees of FSC inspection-target institutions, the Bank of Korea, Enforcement Decree Article 10(3) items 1 to 13 institutions, and the Korea Workers' Compensation and Welfare Service, including retirees with at least one year there."
    - label_ko: 국가공무원 또는 지방공무원
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [non_finance]
      source_text: "National or local public officials, including those who retired after at least one year, may take the investor-protection course."
    - label_ko: 투자권유대행인 경력 1년 이상
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 1
      work_fields_accepted: [securities_asset_mgmt]
      source_text: "An investment solicitor with at least one year of solicitation work may take the course."
    - label_ko: 보험모집 경력 1년 이상
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 1
      work_fields_accepted: [insurance]
      source_text: "An insurance solicitor, agent, or broker with at least one year of insurance solicitation may take the course."
  extra_checks_ko:
    - 증권투자권유자문인력 투자자 보호 교육을 수료하지 않거나 수강 대상이 아니면 응시할 수 없다. 접수 때 이수 여부를 확인한다.
    - 현직이 아닌 퇴직 임직원·퇴직 공무원은 1년 이상 재직 경력이 필요하다.
    - 자율규제위원장이 따로 정하는 자도 대상이 될 수 있으나 명단은 규정에 없다.
    - 동일 시험 합격자, 자격제재 대상, 부정행위 응시제한 대상은 응시할 수 없다.
    - 증권·파생상품 투자권유자문인력 시험센터 화면은 과목 면제란을 표시하지 않는다. 제35회 응시료도 전과목만 있다.
  exam_languages: [ko]
  english_level_needed: basic
  english_level_reason: The exam is Korean. The official job description uses English abbreviations such as MMF and CMA.
  test_countries: [KR]
  retake_limit_ko: 합격 후 동일 시험 재응시 불가. 부정행위 시 5년 범위 응시 제한 가능.

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: [securities_asset_mgmt, banking_finance]
  other_requirements_ko:
    - 증권 투자자 보호 교육 이수와 적격성 인증시험 합격.
    - 소속 금융투자회사 또는 신용평가회사가 협회에 임직원 등록을 신청할 것.
    - 전문투자자만 상대하는 증권 투자권유는 금융투자회사 또는 해외 금융투자회사 1년 경력으로 한정 등록할 수 있다.
    - 겸영금융투자회사의 채무증권 투자권유만 하는 경우는 채무증권 투자권유 등록교육으로 한정 등록할 수 있다.
  time_limit_ko: 합격 기록은 소멸하지 않는다. 등록요건을 처음 갖춘 날, 업무 종사 최종일, 등록 말소일 또는 전문성 강화 교육 이수일부터 5년이 모두 지나면 전문성 강화 교육 대상이다. 증권투자권유대행인과 증권투자권유자문인력은 같은 종류로 본다.
  validity_ko: 등록 후 매년 1회 이상 보수교육이 필요하고 등록 연도는 면제된다. 미이수 시 등록 효력이 정지될 수 있다.

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: 증권투자권유자문인력 적격성 인증시험
      subjects_ko:
        - 제1과목 증권분석 및 증권시장(경기분석, 기본적 분석, 기술적 분석, 유가증권시장, 코스닥시장, 채권시장, 기타 증권시장)
        - 제2과목 금융상품 및 직무윤리(금융상품분석·투자전략, 투자권유 및 고객관리, 직무윤리·투자자분쟁예방)
        - 제3과목 법규 및 세제(자본시장 관련 법규, 한국금융투자협회규정, 회사법, 증권세제)
      format: mcq
      question_summary_ko: 선택형 100문항, 120분(10:00~12:00). 제1과목 35문항(과락 18), 제2과목 30문항(과락 15), 제3과목 35문항(과락 18). 35문항 과락 18은 50%의 올림이다. 실시공고는 계산기 지참을 요구한다.
      duration_min: 120
      passing_rule_ko: 응시 과목별 정답 비율 50% 이상이고 전체 정답 비율 70%(70문항) 이상.
      pass_rates:
        - period: unknown
          rate_pct: unknown
          examinees: unknown
      pass_rate_avg_pct: unknown
      hours_min: 60
      hours_typical: 110
      hours_max: 170
      sessions_per_year: 3
      next_dates_ko: 2026년은 3회다. 제33회 2026-02-08, 접수 2026-01-12~01-16(추가 2026-01-19), 발표 2026-02-19, 서울·대전·부산·광주. 제34회 2026-04-19, 접수 2026-03-23~03-27(추가 2026-03-30), 발표 2026-04-30, 서울·부산·대구·광주·제주. 제35회 2026-10-18, 접수 2026-09-14~09-18(추가 2026-09-21), 발표 2026-10-29, 서울·대전·부산·광주. 2026-11-11 기준 세 회차 모두 종료되었다.
      fee:
        amount: 50000
        currency: KRW
        krw_approx: 50000
        fx_date: 2026-11-11
  exemptions_ko: 이 시험의 과목 면제는 시험센터 개요에서 확인되지 않았다. 제35회 응시료는 전과목 50,000원만 게시되었다.
  total:
    hours_min: 60
    hours_typical: 110
    hours_max: 170
    hours_basis: researcher_estimate
    hours_basis_note_ko: 공식 학습시간 권장이 없다. 선택형 100문항, 합격선 70%·과락 50%, 증권분석과 법규·세제가 포함되고 계산기 지참이 의무인 점을 반영해 하한 60시간, 보통 110시간, 상한 170시간으로 추정했다. 사전 투자자 보호 교육 시간은 제외했다.
    min_calendar_months: 1
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - 확인한 제35회 응시료는 전과목 50,000원뿐이다.
    - 투자자 보호 교육과 보수교육의 2026년 수강료, 등록수수료 금액은 확인하지 못했다.

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: na
  hours_score: 2
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 3
  level: 3
  rationale_ko: 합격률 없이 학습시간 2점과 구조 3점을 평균해 반올림하면 3이다. 분석·법규·세제의 3과목을 한 번에 보고 과락이 50%라 대행인 시험보다 합격선은 높지만 단계는 하나다.

# ---------- G. Sources and confidence ----------
sources:
  - url: https://license.kofia.or.kr/examInfo/examInfo.do
    accessed: 2026-11-11
    type: official
    covers: [eligibility, structure]
  - url: https://license.kofia.or.kr/examExecNtce/popup/LICExamExecNtcePop.do
    accessed: 2026-11-11
    type: official
    covers: [structure, fee]
  - url: https://law.kofia.or.kr/service/law/lawFullScreenContent.do?seq=138&historySeq=1701
    accessed: 2026-11-11
    type: official
    covers: [eligibility, award, structure]
confidence:
  eligibility: high
  award: high
  structure: high
  hours: low
  pass_rate: low
  fee: high
as_of: 2026-11-11
unknown_reasons:
  - pass_rates, pass_rate_avg_pct: 공식 합격률이 없다.
  - education fee amounts and registration fee amount: 규정은 교육과 등록수수료 부과 권한만 정한다.
notes_ko: 영문 정식 표기는 Certified Securities Investment Advisor이다. 종전 증권투자상담사에서 2014년 개편된 이름이며 현재 이름으로 시행 중이다. 일반인은 응시할 수 없다. 시행 규정은 선택형 또는 서술형을 허용하지만 채점 기준은 정답 문항 수다. exam_type은 증권 투자권유·자문 인력 등록의 필수자격시험이므로 license다.
```

## kr_derivatives_advisor

```yaml
# ---------- A. Identity ----------
id: kr_derivatives_advisor
name_ko: 파생상품투자권유자문인력
name_orig: 파생상품투자권유자문인력
tier: 1
region: KR
exam_type: license
domain: [securities_investment]
issuer: Korea Financial Investment Association (KOFIA)
official_url: https://license.kofia.or.kr/examInfo/examInfo.do
status: active
summary_ko: 파생상품투자권유자문인력은 파생상품, 파생결합증권, 파생결합사채와 고난도금융투자상품에 대한 투자권유·투자자문, 그리고 파생상품등이 포함된 특정금전신탁·고난도 일임·고난도 금전신탁·투자일임형 ISA의 체결 권유를 하는 전문인력이다. 응시 전에 파생상품 투자자 보호 교육을 이수해야 한다. 2026년에도 같은 이름으로 연 3회 시행된다.
usage_ko: 금융투자회사 임직원으로 등록하면 파생상품과 파생결합증권, 파생결합사채, 고난도금융투자상품의 투자권유 또는 투자자문을 할 수 있다. 고난도 펀드를 권유하려면 펀드투자권유자문인력 등록요건도 필요하다. 전문투자자만 상대하는 업무는 금융투자회사 또는 해외 금융투자회사 경력 1년으로 한정 등록할 수 있다. 파생상품투자권유대행인 구분은 2011년 1월 26일 삭제되어 이 시험이 파생상품 권유의 현재 자격시험이다.

# ---------- B. Eligibility to sit the exam ----------
eligibility:
  nationality_rule: none
  nationality_countries: []
  paths:
    - label_ko: 검사대상기관·한국은행·법정 유관기관·근로복지공단의 임직원
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [banking_finance, securities_asset_mgmt, insurance]
      source_text: "Article 5-2 limits investor-protection education to employees of the listed financial and public institutions, including people who retired after at least one year in those posts."
    - label_ko: 국가공무원 또는 지방공무원
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 0
      work_fields_accepted: [non_finance]
      source_text: "National or local public officials, including retirees with at least one year of service, may take the investor-protection course."
    - label_ko: 투자권유대행인 경력 1년 이상
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 1
      work_fields_accepted: [securities_asset_mgmt]
      source_text: "An investment solicitor with at least one year of solicitation work may take the course."
    - label_ko: 보험모집 경력 1년 이상
      age_min: null
      age_max: null
      education_accepted: [any]
      work_years_min: 1
      work_fields_accepted: [insurance]
      source_text: "An insurance solicitor, agent, or broker with at least one year of insurance solicitation may take the course."
  extra_checks_ko:
    - 파생상품 투자자 보호 교육을 수료하지 않거나 수강 대상이 아니면 응시할 수 없다.
    - 퇴직 임직원과 퇴직 공무원은 1년 이상 재직 후 퇴직한 경우에만 대상이다. 현직 임직원과 현직 공무원은 그 1년 없이 대상에 포함된다.
    - 자율규제위원장 지정자도 대상이 될 수 있으나 명단은 규정에 없다.
    - 동일 시험 합격자, 자격제재 대상, 부정행위 응시제한 대상은 응시할 수 없다.
    - 시험센터는 이 시험의 과목 면제 안내를 표시하지 않는다. 제39회 응시료도 전과목만 있다.
  exam_languages: [ko]
  english_level_needed: basic
  english_level_reason: The paper is Korean, but futures, options, swaps, and ISA terminology include English terms. It is not an English-language exam.
  test_countries: [KR]
  retake_limit_ko: 합격 후 동일 시험 재응시 불가. 부정행위 시 5년 범위 응시 제한 가능.

# ---------- C. Award of the credential after passing ----------
award:
  extra_requirements: true
  work_years_min: 0
  work_fields_accepted: [securities_asset_mgmt, banking_finance]
  other_requirements_ko:
    - 파생상품 투자자 보호 교육 이수와 적격성 인증시험 합격.
    - 소속 금융투자회사 또는 신용평가회사가 임직원으로 협회에 등록할 것.
    - 전문투자자만 상대하는 업무는 금융투자회사 또는 해외 금융투자회사 1년 경력으로 시험 없이 한정 등록할 수 있다.
    - 고난도금융투자상품인 펀드의 투자권유는 펀드투자권유자문인력 등록요건을 함께 갖춰야 한다.
  time_limit_ko: 합격 기록은 소멸하지 않는다. 등록요건을 처음 갖춘 날, 업무 종사 최종일, 등록 말소일 또는 전문성 강화 교육 이수일부터 5년이 모두 지나면 전문성 강화 교육 대상이다.
  validity_ko: 등록된 전문인력은 매년 1회 이상 보수교육을 이수해야 하며 등록 연도는 면제된다. 미이수 시 등록 효력이 정지될 수 있다. 종전 파생상품투자상담사 또는 선물거래상담사 시험 합격·등록은 경과 규정으로 이 자격에 연결된다.

# ---------- D. Exam structure and study load ----------
structure:
  stages:
    - name_ko: 파생상품투자권유자문인력 적격성 인증시험
      subjects_ko:
        - 제1과목 파생상품 I(선물, 옵션)
        - 제2과목 파생상품 II(스왑, 기타 파생상품·파생결합증권)
        - 제3과목 리스크관리 및 직무윤리(리스크관리, 영업실무, 직무윤리·투자자분쟁예방)
        - 제4과목 파생상품법규(자본시장 관련 법규, 한국금융투자협회규정, 한국거래소규정)
      format: mcq
      question_summary_ko: 선택형 100문항, 4과목, 120분(10:00~12:00). 각 과목 25문항이고 과락은 과목당 13문항이다. 세부 문항은 선물 13, 옵션 12, 스왑 8, 기타 파생상품·파생결합증권 17, 리스크관리 8, 영업실무 5, 직무윤리·투자자분쟁예방 12, 자본시장 관련 법규 17, 협회규정 4, 거래소규정 4다. 제39회 실시공고는 계산기 지참을 요구한다.
      duration_min: 120
      passing_rule_ko: 응시 과목별 정답 비율 50% 이상이고 전체 정답 비율 70%(70문항) 이상. 25문항 과목의 정수 과락은 13문항으로, 50%를 올림한 값이다.
      pass_rates:
        - period: unknown
          rate_pct: unknown
          examinees: unknown
      pass_rate_avg_pct: unknown
      hours_min: 80
      hours_typical: 140
      hours_max: 220
      sessions_per_year: 3
      next_dates_ko: 2026년은 3회다. 제37회 2026-03-29, 접수 2026-03-03~03-06(추가 2026-03-09), 발표 2026-04-09. 제38회 2026-06-21, 접수 2026-05-26~05-29(추가 2026-06-01), 발표 2026-07-02. 제39회 2026-12-20, 접수 2026-11-23 10:00~11-27 18:00(추가접수 마감 2026-11-30 18:00), 발표 2026-12-31. 지역은 세 회차 모두 서울·대전·부산·대구·광주. 2026-11-11 기준 제39회 접수는 아직 시작 전이며 시험센터는 D-day로 표시했다.
      fee:
        amount: 50000
        currency: KRW
        krw_approx: 50000
        fx_date: 2026-11-11
  exemptions_ko: 이 시험의 과목 면제는 시험센터 개요와 제39회 응시료 표에서 확인되지 않았다. 이 시험 합격은 재무위험관리사 제2과목 면제 사유가 될 수 있으나 그건 다른 시험의 면제다.
  total:
    hours_min: 80
    hours_typical: 140
    hours_max: 220
    hours_basis: researcher_estimate
    hours_basis_note_ko: 공식 학습시간 권장이 없다. 같은 100문항·70% 합격선인 증권 자문인력보다 과목이 4개이고 선물·옵션·스왑이 포함되며 계산기 지참이 의무라, 하한 80시간, 보통 140시간, 상한 220시간으로 추정했다. 사전 교육 시간은 제외했다.
    min_calendar_months: 1
    pass_rate_avg_pct: unknown

# ---------- E. Other costs ----------
cost:
  other_fees_ko:
    - 제39회 공고의 응시료는 전과목 50,000원뿐이다.
    - 투자자 보호 교육과 보수교육의 2026년 수강료, 등록수수료 금액은 확인하지 못했다.

# ---------- F. Difficulty (Section 4.1) ----------
difficulty:
  pass_rate_score: na
  hours_score: 2
  structure_points:
    subjects_3_or_more: true
    subjective_questions: true
    stages_3_or_more: false
    non_written_assessment: false
  structure_score: 3
  level: 3
  rationale_ko: 합격률을 빼면 학습시간 2점과 구조 3점의 평균을 반올림해 3이다. 과목은 4개이고 계산이 필요하지만 단계가 하나이고 추정 학습시간이 150시간을 넘지 않아 4점까지 올라가지 않는다.
  # hours_typical 140 is inside 61-150, so hours_score stays 2. (2+3)/2 = 2.5 rounds half up to 3.

# ---------- G. Sources and confidence ----------
sources:
  - url: https://license.kofia.or.kr/examInfo/examInfo.do
    accessed: 2026-11-11
    type: official
    covers: [eligibility, structure]
  - url: https://license.kofia.or.kr/examExecNtce/popup/LICExamExecNtcePop.do
    accessed: 2026-11-11
    type: official
    covers: [structure, fee]
  - url: https://law.kofia.or.kr/service/law/lawFullScreenContent.do?seq=138&historySeq=1701
    accessed: 2026-11-11
    type: official
    covers: [eligibility, award, structure]
  - url: https://law.kofia.or.kr/service/law/lawFullScreenContent.do?seq=136&historySeq=1757
    accessed: 2026-11-11
    type: official
    covers: [award]
confidence:
  eligibility: high
  award: high
  structure: high
  hours: low
  pass_rate: low
  fee: high
as_of: 2026-11-11
unknown_reasons:
  - pass_rates, pass_rate_avg_pct: 공식 합격률이 없다.
  - education fee amounts and registration fee amount: 금액이 규정 본문에 없고 2026년 교육원 수강료를 확인하지 못했다.
notes_ko: 영문 정식 표기는 Certified Derivatives Investment Advisor이다. 종전 파생상품투자상담사·선물거래상담사에서 이어진 현재 이름이며 폐지되지 않았다. 파생상품투자권유대행인은 영업규정 제2-17조 제3호가 2011년 1월 26일 삭제되어 별도 자격으로 남아 있지 않다. 제39회 공고의 초기 문구에는 모바일 신분증 불가가 있으나, 2025년 6월 1일 이후 시험을 위한 화면 스크립트는 그 문구를 규정신분증 안내로 바꾸므로 모바일 신분증 허용 여부는 여기서 단정하지 않았다. exam_type은 파생상품 투자권유·자문 등록의 필수자격시험이므로 license다.
```

## Batch log

Research date 2026-11-11. Completed ids, all still offered under the requested names: kr_fund_solicitor (펀드투자권유대행인, official English Fund investment Solicitor), kr_securities_solicitor (증권투자권유대행인, Securities Investment Solicitor), kr_fund_advisor (펀드투자권유자문인력, Certified Fund Investment Advisor), kr_securities_advisor (증권투자권유자문인력, Certified Securities Investment Advisor), kr_derivatives_advisor (파생상품투자권유자문인력, Certified Derivatives Investment Advisor). No id was changed.

Renames, not new records: the 2014-09-18 revision of the KOFIA professional-staff rule replaced the old 투자상담사 labels with the current 투자권유자문인력 labels. Prior passes and registrations remain recognized by transitional clauses. 파생상품투자권유대행인 was deleted as a category on 2011-01-26 in the business-conduct rule, Article 2-17 item 3. It was out of scope and was not given a record.

Unknowns: official pass rates and examinee counts for all five; 2026 won amounts for investor-protection, registration, continuing, and strengthened-expertise courses; the company registration fee, which the rule allows the SRO chair to set but does not number; the 2027 calendar, which must be announced by 2026-12-31 and was not posted yet. Study hours are researcher estimates because KOFIA publishes none and the provider pages checked did not state a total study-hour recommendation.

Article 5-2 of the professional-staff rule (historySeq 1701, re-opened 2026-11-11) confirms the same sitting gate for all three advisor exams: current employees and current civil servants are eligible without a one-year tenure, and the one-year rule applies to retirees from those posts, to investment solicitors, and to insurance solicitors, agents, and brokers.

Conflicts: a November 2024 KOFIA comment said solicitor exams would rise from two to three sittings in 2026, but the November 2025 confirmed calendar and the live exam-center schedule both show two sittings each. The exam-center script still describes fund-solicitor exemptions with older subject nicknames, while the current item map and the 24th-session fee table treat subjects 1 and 2 as the exempt block and subject 3 (items 81-100) as the partial paper. The derivatives announcement template still contains a "mobile ID not allowed" sentence, but the script used for exams on or after 2025-06-01 replaces that notice. Prep-site pass rates, including a Wowpass table for the fund solicitor, were not used. Fee figures are the full-paper 50,000 KRW amounts on the official sitting announcements, not prep-site copies.
