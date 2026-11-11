# Korea accounting hours and difficulty patch

Reference date 2026-11-11. Patch only. Do not replace the passing records in `kr_accounting_fp.md`. Pass-rate averages below are the verified figures already in that file. They were not recomputed. Structure scores were not re-scored. `min_calendar_months` is unchanged: no opened hour page or exam calendar stated a longer minimum than the file.

Rubric used when a total course length is known. Score A from `pass_rate_avg_pct`: 70+ = 1, 50–69 = 2, 30–49 = 3, 15–29 = 4, under 15 = 5. Score B from `total.hours_typical`: ≤60 = 1, 61–150 = 2, 151–400 = 3, 401–1000 = 4, over 1000 = 5. Level is the average of A, B, and the existing structure score, rounded half up. A is dropped only when the pass rate is unknown. B is not dropped once a total hour figure is known. No level is published when the total hour figure stays unknown. That replaces the old levels, which were averaged without hours.

Hour figures are course lengths, not surveyed self-study. Official exam bodies did not publish a recommended self-study total on the pages opened for this patch.

## What course length can be attached to each exam?

### Takeaway

Three records get a provider course length that can be scored: 공인회계사 828 hours on one 동차 기본종합반, 재경관리사 142 hours as the sum of three 2025 basic-theory courses, and AFPK 80 or 88 hours as the two education minima restated by 해커스금융. 세무사 1차 has a 520-hour basic course, but 2차 hours were not opened, so the 세무사 total stays unknown. 전산회계 1·2급 and 전산세무 1·2급 stay unknown. No invented number is used.

### Cited Findings

- 나무경영아카데미 2026년 대비 회계사 동차 기본종합반 prints one lecture length per subject, and the alternate professor for each subject has the same length. One choice is 중급회계 144, 고급회계 60, 원가관리회계 88, 세법 152, 경영학 40, 재무관리 120, 경제학 112, 기업법1 88, 기업법2 24. The sum is 828. 회계감사 is not on that list. The page says the hours can change with the class. — [나무경영아카데미 회계사 기본종합반](https://namucpa.com/lecture/lectureContents.asp?ridx=1&gidx=11&midx=47&lcmLicense_ccd=10601&lcmType_ccd=12801&lcmIDX=808)
- The same academy’s separate 2026 회계사 1차 객관식 종합반 prints 객관식 재무회계 112, 원가관리회계 40, 세법 108, 경영학 28, 재무관리 80, 경제학 80, 기업법I 76, 기업법II 12. Alternates match. The sum is 536. This product is not part of the 828. — [나무경영아카데미 회계사 1차 객관식 종합반](https://www.namucpa.com/lecture/lectureContents.asp?ridx=1&gidx=12&midx=74&lcmLicense_ccd=10601&lcmType_ccd=12802&lcmIDX=870)
- 나무경영아카데미 2026 세무사 강화집중관리 기본종합반 prints 중급회계 140, 원가관리회계 96, 세법 152, 재정학 76, and 56 for each optional law paper (행정소송법, 상법, or 민법). One path is 520. Alternates match. The subject list is the first-exam set. A complete second-exam lecture total was not on this page. — [나무경영아카데미 세무사 기본종합반](https://namucpa.com/lecture/lectureContents.asp?ridx=2&gidx=17&midx=1004&lcmLicense_ccd=10602&lcmType_ccd=12801&lcmIDX=869)
- 나무경영아카데미 still sells 2025 재경관리사 기본이론 as three courses: 재무회계 강의시간 37시간 and 총 강의시간 37.2시간 over 46 sessions, 세무회계 강의시간 70시간 and 제공시간 105시간, 원가관리회계 강의시간 35시간 and 제공시간 53시간. The 70 and 35 headlines are the provider’s rounded labels. The opened session lists sum to 4,178 minutes (69.6시간) for tax and 2,064 minutes (34.4시간) for cost. 제공시간 is a 1.5-times playback allowance, not the lecture length. Problem-solving and final courses were not added. — [재경관리사 재무회계](https://www.namucpa.com/lecture/lectureONdetail.asp?ridx=5&gidx=288&midx=360&lcsLicense_ccd=10607&lcsSection_ccd=12103&lecSalesStatus_ccd=12201&lcIDX_arr=&lecIDX=31433); [재경관리사 세무회계](https://www.namucpa.com/lecture/lectureONdetail.asp?ridx=5&gidx=288&midx=358&lcsLicense_ccd=10607&lcsSection_ccd=12103&lecSalesStatus_ccd=12201&lcIDX_arr=&lecIDX=31434); [재경관리사 원가관리회계](https://www.namucpa.com/lecture/lectureONdetail.asp?ridx=5&gidx=288&midx=356&lcsSection_ccd=12103&lcsLicense_ccd=10607&lecSalesStatus_ccd=12201&lecIDX=31435)
- 해커스금융 블로그 says an AFPK candidate must finish the designated education, that classroom education is at least 80 hours, and that internet education is at least 88 hours. It does not give a maximum or a self-study total. — [해커스금융 AFPK 블로그](https://m.blog.naver.com/fnhelp/223695116520)

### Inferences

- 828 is the 공인회계사 total to score, because that page is one 동차 course covering both exams’ basic lectures. 536 is recorded on the first-exam stage only. Do not add 536 to 828.
- 142 is the 재경관리사 total, using the three printed 강의시간 labels (37+70+35). The session-minute cross-check is about 141 hours and stays in the same score band.
- AFPK `hours_min` 80 is the classroom floor and `hours_typical` 88 is the internet floor. Neither is a surveyed study time, and 88 is not a ceiling.
- 520 is only the 세무사 first-exam basic course. It is not `total.hours_typical`.

### Gaps

- 세무사 2차 lecture hours were not opened, so 세무사 `total.hours_*` stays unknown.
- 전산회계 1급, 전산회계 2급, 전산세무 1급, and 전산세무 2급: no fully opened 에듀윌, 해커스, or 한국세무사회 page stated a course-hour total. Lecture counts and truncated minute tables were not converted into hours.
- 공인회계사 회계감사 lecture hours, and any 2차-only package, were not opened. 828 can sit under 1,000 only for the subjects on that page.
- The 2026 AFPK study-guide PDF and the older IFPK education PDF did not open in this pass, so the 80/88 pair is a provider restatement, not a fresh operator table.

## What difficulty replaces the old levels?

### Takeaway

Publish a new level only for 공인회계사 (4), 재경관리사 (3), and AFPK (2). 세무사, 전산회계 1·2급, 전산세무 1·2급, and CFP do not get a level, because their total hours stay unknown. That withdraws the old levels 4, 3, 2, 4, 3, and the previous CFP `na`.

### Cited Findings

- Verified pass-rate averages used as score A, unchanged: kr_cpa 24.89 → 4, kr_cta 16.84 → 4, kr_cat_1 46.15 → 3, kr_cat_2 53.88 → 2, kr_tat_1 15.42 → 4, kr_tat_2 34.33 → 3, kr_financial_controller 26.73 → 4, kr_afpk 34.4 → 3. kr_cfp has no pass rate, so A is dropped. — existing record `kr_accounting_fp.md`, research date 2026-11-11
- Structure scores kept: kr_cpa 3, kr_cta 3, kr_cat_1 3, kr_cat_2 2, kr_tat_1 3, kr_tat_2 3, kr_financial_controller 2, kr_afpk 2. kr_cfp structure stays `na`. — existing record `kr_accounting_fp.md`

### Inferences

- kr_cpa: A 4, B 4 from 828, structure 3. Average 3.666… rounds half up to 4.
- kr_financial_controller: A 4, B 2 from 142, structure 2. Average 2.666… rounds half up to 3.
- kr_afpk: A 3, B 2 from 88, structure 2. Average 2.333… rounds half up to 2. Using 80 instead of 88 would not change B.
- kr_cta, kr_cat_1, kr_cat_2, kr_tat_1, kr_tat_2: hours unknown, so no level, even though A and structure are known. The first-exam 520 for 세무사 is not used as B.

### Gaps

- No new official pass-rate table was opened. The averages above were not checked against a newer bulletin.

## What does the current CFP operator publish?

### Takeaway

FPSB International Korea now publishes a 2026 exam date, 2026 and 2027 fees, a two-year certification fee, and 2027 education and continuing-education rules. It still does not publish exam format, subjects, duration, the pass rule, pass rates, experience years, or a study-hour or education-hour total. Hours stay unknown and no difficulty level is published. Pre-December 2025 hagwon figures were not copied.

### Cited Findings

- The homepage heading “2026년 CFP 시험 일정” says the exam is on Saturday 21 November and online registration starts on 15 September. Direct operation from 2025-12-01 is repeated. The visible Korean address is 서울시 종로구 세종대로23길 47, 601호. The English footer on the same page says 417 Yeongdong-daero, Gangnam District, Seoul. Phone 02-3498-6121, email info@korea.fpsb.org, representative Dante De Gori, business registration 444-88-03302, hours 07:00–16:00. — [FPSB International Korea](https://korea.fpsb.org/)
- The certification page still lists only the four requirements: designated education, the FPSB International Korea exam, the operator’s experience rule, and an ethics pledge. It gives no hour count, subject list, fee, or pass rate. — [CFP 자격 인증](https://korea.fpsb.org/cfp-certification/)
- The 2027 changes page, effective 2027-01-01, prints fees that include VAT. The 2026 exam fee is 242,000 won. The 2026 certification fee for first certification, renewal, or reinstatement is 220,000 won and covers two years. From 2027 the exam fee is 249,500 won and the certification fee is 226,500 won. Reinstatement from 2027 adds 9,438 won per month through 12 months, then 113,250 won per year up to five years, on top of the certification fee. From 2027 the education program adds a financial-planning psychology module. The approved 2027 education provider named on the page is 해커스, and the psychology module is supplied by FPSB International. Continuing education from 2027 is at least 3 hours in ethics, up from a stated current 2 hours, plus 2 hours in psychology. At least one credit in each of those two areas must come from FPSB International. No education-hour total is printed. — [2027년 CFP 자격인증 제도 변경](https://korea.fpsb.org/2027-changes/)
- `https://korea.fpsb.org/exam_application/` returned only a bot-check loader. Format, item counts, duration, and the pass rule were not on the pages that did open.

### Inferences

- Fill the 2026 exam fee at 242,000 won and the 2026-11-21 date. Treat the 220,000 won certification fee as a two-year certification charge, not as the exam fee.
- Do not put the 3-hour and 2-hour continuing-education figures into `hours_typical`. They are renewal hours from 2027, not preparation time.
- `hours_basis` stays unknown. Level stays unpublished.

### Gaps

- Exam format, subjects, duration, passing rule, sessions per year, pass rates, experience years, and any education-hour total remain unpublished. The application URL did not open. The two addresses on the homepage were not reconciled.

## Patch

Apply only the fields below. Access date for every citation is 2026-11-11. `hours_basis` is `provider` where a course length is used. Stage hours are lecture lengths. Where stage hours and the total come from different products, they are not a sum.

```yaml
kr_cpa:
  structure.stages[0] 1차:
    hours_min: 536
    hours_typical: 536
    hours_max: 536
  structure.stages[1] 2차:
    hours_min: unknown
    hours_typical: unknown
    hours_max: unknown
  total:
    hours_min: 828
    hours_typical: 828
    hours_max: 828
    hours_basis: provider
    hours_basis_note_ko: "금융감독원 권장 학습시간은 확인하지 못했다. 828시간은 나무경영아카데미 동차 기본종합반에서 과목마다 교수 한 명을 골랐을 때의 강의시간 합이다. 대체 교수의 시간은 같았다. 회계감사는 그 목록에 없다. 1차 객관식 종합반 536시간은 다른 상품이라 828에 더하지 않았다. 자습·복습 시간은 아니다."
    min_calendar_months: 4
  difficulty:
    pass_rate_score: 4
    hours_score: 4
    structure_score: 3
    level: 4
    rationale_ko: "합격률 평균 24.89%는 4점이다. 동차 기본종합반 강의시간 828시간은 401시간 이상 1,000시간 이하라 시간 점수는 4다. 기존 구조 점수 3을 유지하면 평균 3.666…을 반올림해 4가 된다. 1차 객관식 536시간은 단계 참고값이며 총시간에 합산하지 않았다. 회계감사가 빠져 있어 828은 그 기본반의 과목 합이지 수험 전체의 상한이 아니다."
  sources_add:
    - url: https://namucpa.com/lecture/lectureContents.asp?ridx=1&gidx=11&midx=47&lcmLicense_ccd=10601&lcmType_ccd=12801&lcmIDX=808
      accessed: 2026-11-11
      type: provider
      covers: [hours]
    - url: https://www.namucpa.com/lecture/lectureContents.asp?ridx=1&gidx=12&midx=74&lcmLicense_ccd=10601&lcmType_ccd=12802&lcmIDX=870
      accessed: 2026-11-11
      type: provider
      covers: [hours]
  confidence.hours: medium

kr_cta:
  structure.stages[0] 1차:
    hours_min: 520
    hours_typical: 520
    hours_max: 520
  structure.stages[1] 2차:
    hours_min: unknown
    hours_typical: unknown
    hours_max: unknown
  total:
    hours_min: unknown
    hours_typical: unknown
    hours_max: unknown
    hours_basis: unknown
    hours_basis_note_ko: "1차 기본종합반 강의시간만 확인했다. 중급회계 140, 원가관리회계 96, 세법 152, 재정학 76, 선택법 56을 더하면 520시간이고 대체 교수도 같았다. 2차 강의시간 합을 열지 못해 총시간은 비워 둔다. 520을 총시간으로 쓰지 않는다."
    min_calendar_months: 3
  difficulty:
    pass_rate_score: 4
    hours_score: na
    structure_score: 3
    level: unpublished
    rationale_ko: "합격률 평균 16.84%는 4점이고 구조 점수는 3이다. 2차가 빠져 총 학습시간을 확정하지 못했으므로 시간 점수를 매기지 않고 난이도 수준은 발표하지 않는다. 종전 수준 4는 시간 없이 계산된 값이라 대체한다."
  sources_add:
    - url: https://namucpa.com/lecture/lectureContents.asp?ridx=2&gidx=17&midx=1004&lcmLicense_ccd=10602&lcmType_ccd=12801&lcmIDX=869
      accessed: 2026-11-11
      type: provider
      covers: [hours]
  confidence.hours: low

kr_cat_1:
  total.hours_min: unknown
  total.hours_typical: unknown
  total.hours_max: unknown
  total.hours_basis: unknown
  total.hours_basis_note_ko: "한국세무사회 권장시간과, 시간 합계가 적힌 에듀윌·해커스 과정 페이지를 이번 조사에서 열지 못했다. 강의 수만 있는 안내는 시간으로 바꾸지 않았다."
  difficulty.hours_score: na
  difficulty.level: unpublished
  difficulty.rationale_ko: "합격률 평균 46.15%는 3점, 구조 점수는 3이다. 총 학습시간이 없어 수준은 발표하지 않는다. 종전 수준 3은 시간 없이 계산된 값이라 대체한다."
  confidence.hours: low

kr_cat_2:
  total.hours_min: unknown
  total.hours_typical: unknown
  total.hours_max: unknown
  total.hours_basis: unknown
  total.hours_basis_note_ko: "시간 합계가 적힌 시험 주관 기관 또는 지정 학원 페이지를 열지 못했다."
  difficulty.hours_score: na
  difficulty.level: unpublished
  difficulty.rationale_ko: "합격률 평균 53.88%는 2점, 구조 점수는 2다. 총 학습시간이 없어 수준은 발표하지 않는다. 종전 수준 2는 대체한다."
  confidence.hours: low

kr_tat_1:
  total.hours_min: unknown
  total.hours_typical: unknown
  total.hours_max: unknown
  total.hours_basis: unknown
  total.hours_basis_note_ko: "시간 합계가 적힌 시험 주관 기관 또는 지정 학원 페이지를 열지 못했다."
  difficulty.hours_score: na
  difficulty.level: unpublished
  difficulty.rationale_ko: "합격률 평균 15.42%는 4점, 구조 점수는 3이다. 총 학습시간이 없어 수준은 발표하지 않는다. 종전 수준 4는 대체한다."
  confidence.hours: low

kr_tat_2:
  total.hours_min: unknown
  total.hours_typical: unknown
  total.hours_max: unknown
  total.hours_basis: unknown
  total.hours_basis_note_ko: "시간 합계가 적힌 시험 주관 기관 또는 지정 학원 페이지를 열지 못했다."
  difficulty.hours_score: na
  difficulty.level: unpublished
  difficulty.rationale_ko: "합격률 평균 34.33%는 3점, 구조 점수는 3이다. 총 학습시간이 없어 수준은 발표하지 않는다. 종전 수준 3은 대체한다."
  confidence.hours: low

kr_financial_controller:
  structure.stages[0]:
    hours_min: 142
    hours_typical: 142
    hours_max: 142
  total:
    hours_min: 142
    hours_typical: 142
    hours_max: 142
    hours_basis: provider
    hours_basis_note_ko: "삼일회계법인 시험 안내의 권장 학습시간은 확인하지 못했다. 142시간은 나무경영아카데미 2025 기본이론 세 과목의 강의시간 표시 합이다. 재무회계 37, 세무회계 70, 원가관리회계 35다. 재무회계 본문은 총 강의시간 37.2시간이라고도 적는다. 세무 회차 합은 4,178분으로 약 69.6시간, 원가 회차 합은 2,064분으로 약 34.4시간이다. 제공시간은 1.5배 수강 허용 시간이라 넣지 않았다. 문제풀이·파이널 강의는 더하지 않았다. 단일 과정이라 최소·전형·최댓값을 같게 두었다."
    min_calendar_months: 1
  difficulty:
    pass_rate_score: 4
    hours_score: 2
    structure_score: 2
    level: 3
    rationale_ko: "합격률 평균 26.73%는 4점이다. 기본이론 강의시간 142시간은 61시간 이상 150시간 이하라 시간 점수는 2다. 기존 구조 점수 2를 유지하면 평균 2.666…을 반올림해 3이 된다. 회차 분 합으로 다시 더해도 약 141시간이라 시간 점수 구간은 같다."
  sources_add:
    - url: https://www.namucpa.com/lecture/lectureONdetail.asp?ridx=5&gidx=288&midx=360&lcsLicense_ccd=10607&lcsSection_ccd=12103&lecSalesStatus_ccd=12201&lcIDX_arr=&lecIDX=31433
      accessed: 2026-11-11
      type: provider
      covers: [hours]
    - url: https://www.namucpa.com/lecture/lectureONdetail.asp?ridx=5&gidx=288&midx=358&lcsLicense_ccd=10607&lcsSection_ccd=12103&lecSalesStatus_ccd=12201&lcIDX_arr=&lecIDX=31434
      accessed: 2026-11-11
      type: provider
      covers: [hours]
    - url: https://www.namucpa.com/lecture/lectureONdetail.asp?ridx=5&gidx=288&midx=356&lcsSection_ccd=12103&lcsLicense_ccd=10607&lecSalesStatus_ccd=12201&lecIDX=31435
      accessed: 2026-11-11
      type: provider
      covers: [hours]
  confidence.hours: medium

kr_afpk:
  structure.stages[0]:
    hours_min: 80
    hours_typical: 88
    hours_max: unknown
  total:
    hours_min: 80
    hours_typical: 88
    hours_max: unknown
    hours_basis: provider
    hours_basis_note_ko: "협회 2026 학습가이드의 교육시간 표는 이번 조사에서 다시 열리지 않았다. 해커스금융 블로그가 응시 전 교육의 최소시간으로 집합 80시간, 인터넷 88시간을 적는다. 자습시간이 아니고 상한도 아니다. typical은 인터넷 최소시간이다. hours_max는 상한을 확인하지 못해 비운다."
    min_calendar_months: 1
  difficulty:
    pass_rate_score: 3
    hours_score: 2
    structure_score: 2
    level: 2
    rationale_ko: "합격률 평균 34.4%는 3점이다. 인터넷 교육 최소 88시간은 61시간 이상 150시간 이하라 시간 점수는 2다. 집합 최소 80시간도 같은 구간이다. 기존 구조 점수 2를 유지하면 평균 2.333…을 반올림해 2가 된다. 종전 수준 3은 시간 없이 계산된 값이라 대체한다."
  sources_add:
    - url: https://m.blog.naver.com/fnhelp/223695116520
      accessed: 2026-11-11
      type: provider
      covers: [hours, eligibility]
  confidence.hours: low

kr_cfp:
  structure.stages[0]:
    hours_min: unknown
    hours_typical: unknown
    hours_max: unknown
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
  cost.other_fees_ko:
    - "2026년 자격인증 수수료는 최초 인증, 갱신, 회복 모두 220,000원이며 부가세가 포함되고 2년 인증을 포함한다고 2027년 변경 안내가 적는다."
    - "2027-01-01부터 시험 수수료는 249,500원, 자격인증 수수료는 226,500원이다. 실효 후 회복 수수료는 12개월까지 월 9,438원, 그 이후 5년까지 연 113,250원이며 인증 수수료와 별도이다. 금액은 모두 부가세 포함이다."
  award.validity_ko: "2027년 변경 안내는 자격인증 수수료가 2년간의 인증을 포함한다고 적는다. 2027-01-01부터 윤리 계속교육은 현행 2시간에서 3시간으로 늘고, 재무설계 심리학 계속교육 2시간이 추가된다. 두 영역 모두 최소 1학점은 FPSB International에서 받아야 한다."
  difficulty:
    pass_rate_score: na
    hours_score: na
    structure_score: na
    level: unpublished
    rationale_ko: "합격률과 수험 시간이 아직 없어 난이도 수준을 계산하지 않는다. 계속교육 3시간과 2시간은 2027년 갱신 요건이라 수험 시간에 넣지 않았다."
  sources_add:
    - url: https://korea.fpsb.org/
      accessed: 2026-11-11
      type: official
      covers: [structure, eligibility]
    - url: https://korea.fpsb.org/cfp-certification/
      accessed: 2026-11-11
      type: official
      covers: [eligibility, award]
    - url: https://korea.fpsb.org/2027-changes/
      accessed: 2026-11-11
      type: official
      covers: [fee, award]
  pages_opened_without_format:
    - url: https://korea.fpsb.org/exam_application/
      accessed: 2026-11-11
      type: official
      note_ko: "본문은 열리지 않고 확인 대기 화면만 나왔다."
  confidence.hours: low
  confidence.fee: medium
```

`min_calendar_months`는 바꾸지 않았다. 회계사 기본반은 시험 전 수강 기간이고, 같은 해 1차와 2차 사이는 기존 4개월이다. 세무사 1차 강의시간도 1차와 2차 사이 3개월을 늘리는 일정은 아니다. 재경관리사 60일 제공기간은 수강 가능 기간이지 응시 전 최소 대기 기간이 아니다. AFPK 80시간은 1개월 안에 들어갈 수 있어 기존 1개월을 늘릴 근거가 되지 않는다. CFP는 경험 연수가 없어 최단 개월을 만들지 않았다.
