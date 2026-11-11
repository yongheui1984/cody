# Study-hour and difficulty gaps for international exams

Access date for every page below: 2026-11-11. This is a field patch only. It does not rewrite full records. Fees are unchanged. Records that already have official or recorded hours, and were not in scope to recompute, are untouched: `gl_cfa`, `gl_frm`, `gl_caia`, `us_cpa`.

Hours score uses `hours_typical`: ≤60 = 1, 61–150 = 2, 151–400 = 3, 401–1000 = 4, over 1000 = 5. Level is the average of `pass_rate_score` (only if not `na`), `hours_score`, and `structure_score`, rounded half up. If hours stay unknown, level stays unknown. A level computed from structure alone is invalid.

## What study hours and difficulty replace the invalid US CFP and CAMS figures?

### Takeaway
US CFP (`gl_cfp`) takes Dalton’s stated 225–250 hour band, so the difficulty level is 3 from pass rate, hours, and structure together. CAMS (`gl_cams`) still has no usable study-hour figure, so its published level 1 is replaced with unknown.

### Cited Findings
- CFP Board’s candidate page says almost 80% of exam passers spent 11 hours or more studying every week. It does not state a total study-hour recommendation. — [CFP Board, 5 Habits of Successful Candidates](https://www.cfp.net/candidate-tools-and-resources/5-habits-of-successful-candidates)
- Dalton Education, 30 October 2026, says most candidates need about 225–250 hours to be exam ready, that the number may be higher or lower, and that this total includes live review classes rather than sitting on top of them. — [Dalton Education, How Soon Should You Begin Studying for the CFP Exam?](https://dalton-education.com/article/how-soon-should-you-begin-studying-for-the-cfp-exam)
- The English ACAMS opinion URL returned only a bot check, so a personal “over 50 hours” anecdote was not read and is not used. No opened ACAMS page, and no opened BPP, Kaplan, Becker, Gleim, Dalton, or Wiley page, states a CAMS program study-hour total. — [ACAMS opinion URL, blocked](https://www.acams.org/en/opinion/balancing-your-career-and-education)

### Inferences
- `gl_cfp` has one stage, so stage hours and total hours are the same. Map Dalton’s stated range. The typical value is the unrounded midpoint, (225+250)/2 = 237.5. Do not multiply CFP Board’s weekly survey by an assumed number of weeks.
- `hours_score` for 237.5 is 3. `pass_rate_score` stays 2. `structure_score` stays 3. Average (2+3+3)/3 = 2.666…, which rounds half up to level 3. The old level 3, from pass rate 2 and structure 3 only, is withdrawn even though the integer happens to match.

Patch `gl_cfp` only as follows:

```yaml
structure.stages[0].hours_min: 225
structure.stages[0].hours_typical: 237.5
structure.stages[0].hours_max: 250
structure.total.hours_min: 225
structure.total.hours_typical: 237.5
structure.total.hours_max: 250
structure.total.hours_basis: provider
structure.total.hours_basis_note_ko: "CFP Board의 성공 응시자 습관 페이지는 합격자의 거의 80%가 매주 11시간 이상 공부했다고만 하고, 시험 준비 총시간은 권하지 않는다. 주당 시간에 기간을 곱하면 총시간이 되므로 그 환산은 하지 않았다. 응시 전 교육과정 시간은 시험 학습시간과 별도다. Dalton Education의 2026-10-30 글은 대부분의 응시자에게 약 225–250시간이 필요하다고 적고, 그 총량에 라이브 복습 수업이 포함된다고 하므로 수업 시간을 다시 더하지 않았다. 대표값 237.5는 그 범위의 중앙값이다. 같은 글은 개인에 따라 더 많거나 적을 수 있다고 하므로 225와 250은 확정된 하한·상한이 아니다."
difficulty.hours_score: 3
difficulty.level: 3
difficulty.rationale_ko: "최근 5회 전체 합격률 평균 65.2%는 2점이다. Dalton이 적은 대표 학습시간 237.5시간은 151–400시간 구간이라 3점이고, 구조는 3점이다. 세 점수의 평균 2.666…을 반올림하면 3이다. 시간을 빼 둔 이전 수준 3은 무효이며, 이번 3은 세 점수를 모두 넣은 결과다."
confidence.hours: medium
```

Add source:

```yaml
- url: "https://dalton-education.com/article/how-soon-should-you-begin-studying-for-the-cfp-exam"
  accessed: "2026-11-11"
  type: provider
  covers: [hours]
- url: "https://www.cfp.net/candidate-tools-and-resources/5-habits-of-successful-candidates"
  accessed: "2026-11-11"
  type: official
  covers: [hours]
```

Remove the unknown reason that says CFP Board study hours were not found and hours_score was dropped. Replace it with: the Board page has no total, and the hours used are Dalton’s.

Patch `gl_cams` only as follows. Hour fields stay `unknown`. `hours_basis` stays `unknown`. `hours_score` stays `na`. `pass_rate_score` stays `na`. `structure_score` stays 1.

```yaml
difficulty.level: unknown
difficulty.rationale_ko: "공식 합격률이 없다. 연 ACAMS 페이지와 허용된 제공자 페이지에서 프로그램 권장 학습시간을 확인하지 못해 시간 점수는 없다. 구조는 1점이다. 시간 점수가 없으면 난이도 수준은 계산하지 않는다. 구조만으로 두었던 이전 수준 1은 무효다."
```

Replace the unknown reason that level was computed from structure alone with: level is unknown because hours are unknown.

### Gaps
- CAMS study hours remain unknown. The English ACAMS opinion page did not render, and no allowed provider page stating program hours was opened.
- CFP Board still publishes no total-hour recommendation. Dalton’s 225–250 is a provider planning band, not an official minimum or maximum.

## What hours complete CIMA Certificate, ACCA, ACA, and CIA, and what difficulty follows?

### Takeaway
Certificate-level study hours were not on the opened AICPA-CIMA or BPP pages, so CIMA’s total hours and level stay unknown. ACCA, ACA, and CIA also stay unknown. A Gleim CIA hour chart was opened and rejected because it tells candidates to pass before the 2025 exam change.

### Cited Findings
- The AICPA-CIMA professional qualification page says a self-study candidate can complete each level with 550 hours: three objective tests at 150 hours each (450) plus 100 hours for the case study. It also recommends 10–15 hours a week to finish a level in 12 months. That breakdown is three objective tests plus a case study, which is a professional level, not the four-subject Certificate. — [AICPA & CIMA, CGMA Professional Qualification](https://www.aicpa-cima.com/resources/landing/professional-qualification)
- The Certificate in Business Accounting page lists four subjects, four objective tests, and “6 months to complete.” It states exam length (2 hours each) but no study-hour figure. Six months is calendar time and was not converted into hours. — [AICPA & CIMA, Certificate in Business Accounting](https://www.aicpa-cima.com/resources/landing/certificate-in-business-accounting)
- The opened BPP Certificate page asks “How long does a CIMA Certificate in Business Accounting take?” and does not answer with a study-hour number. Course prices on that page were not copied into fee fields. — [BPP, CIMA Certificate in Business Accounting](https://www.bpp.com/accountancy-and-tax/cima/certificate-business-accounting)
- The opened ACCA study-habits page recommends about 8 hours of sleep and breaks after 30–45 minutes of concentration. It does not recommend study hours per paper or for the qualification. No opened BPP, Kaplan, Becker, or Gleim page stated ACCA hours per paper or for the whole program. — [ACCA, Establishing good study habits](https://www.accaglobal.com/uk/en/student/exam-entry-and-administration/prepare-for-exams/good-study-habits.html)
- The opened Gleim CIA exam guide, first printed December 2023 and updated digitally March 2025, is headed “Pass before the exam changes in 2025!” It names Part 1 “Essentials of Internal Auditing” and estimates Part 1 at 65–75 hours, Part 2 at 75–85 hours, and Part 3 at 115–125 hours, with a minimum of 10 hours a week. Those figures are for the pre-2025 exam. The `gl_cia` record’s English exam is the 2025 syllabus, so the chart is not written into the hour fields. No opened IIA page states recommended study hours. — [Gleim, CIA Exam Guide (2024 edition, March 2025 digital update)](https://www.gleim.com/wp-content/uploads/2025/03/2024Edition_CIA_Exam_Guide_2025Update_Online_final_secured.pdf)
- No opened ICAEW page states ACA study hours. No opened BPP, Kaplan, Becker, or Gleim page stated ACA study hours per paper or for the whole program. Exam-length minutes on provider syllabus pages are not study hours and were not used.

### Inferences
- `gl_cima`: do not change the three professional stages, which stay at 550/550/550 with `hours_basis: official`. Certificate stage hours stay `unknown`. Total hours stay `unknown`. `hours_score` stays `unknown`. `pass_rate_score` stays `na`. `structure_score` stays 5. `level` stays `unknown`. The existing total note already says the 550-hour sentence does not cover the Certificate. Add that the Certificate page’s “6 months” is not a study-hour figure, and that the opened BPP Certificate page also gave no hours, so the total was not summed and `hours_basis` was not switched to `provider`.
- `gl_acca`, `gb_aca`, and `gl_cia`: leave `hours_min`, `hours_typical`, `hours_max`, and `hours_basis` as they are (`unknown`). Leave `hours_score` as `unknown` and `level` as `unknown`. `pass_rate_score` stays `na`. Structure scores stay 4, 4, and 4.
- Do not add the Gleim 65–75 / 75–85 / 115–125 figures to `gl_cia`. Summing them would describe the pre-2025 exam, not this record.

Add sources only:

```yaml
# gl_cima
- url: "https://www.bpp.com/accountancy-and-tax/cima/certificate-business-accounting"
  accessed: "2026-11-11"
  type: provider
  covers: [hours]
# gl_acca
- url: "https://www.accaglobal.com/uk/en/student/exam-entry-and-administration/prepare-for-exams/good-study-habits.html"
  accessed: "2026-11-11"
  type: official
  covers: [hours]
# gl_cia
- url: "https://www.gleim.com/wp-content/uploads/2025/03/2024Edition_CIA_Exam_Guide_2025Update_Online_final_secured.pdf"
  accessed: "2026-11-11"
  type: provider
  covers: [hours]
```

The professional qualification and Certificate URLs are already on `gl_cima`. Re-opening them did not change the 550-hour professional figures.

### Gaps
- CIMA Certificate study hours: the body gives a six-month calendar line and the professional 550-hour plan, not Certificate study hours. The allowed provider page that was opened (BPP) also gives none. Total hours and level therefore stay unknown. A non-allowed provider’s per-module range was seen only in search snippets and was not used.
- ACCA and ACA study hours: no opened body or allowed-provider page stated hours per paper or for the whole program. Levels stay unknown.
- CIA study hours for the 2025 English syllabus: the only opened provider hour chart is explicitly pre-change. Level stays unknown.
- `gl_cfa`, `gl_frm`, `gl_caia`, and `us_cpa` were not recomputed.

## Does an opened IMA page state the US CMA exam length?

### Takeaway
Yes. IMA’s China site states that the CMA exam total is 4 hours, so each part’s `duration_min` becomes 240. Study hours, fees, and the difficulty level are not changed.

### Cited Findings
- On the IMA China homepage FAQ, the answer to how long the case-based section takes says the CMA exam total is now set at 4 hours, of which the case-based section is 1 hour, consistent with the current structure of 3 hours for the multiple-choice section, with unused multiple-choice time added to the case-based section. The same FAQ says a candidate meets two case-based questions in the second section of the exam, formerly the essay section. The page states hours, not the word “minutes.” 4 hours converts exactly to 240 minutes. — [IMA China (Institute of Management Accountants, Shanghai Representative Office)](https://www.imachina.org.cn/)
- The English IMA help article on the essay-to-case change returned only a CSS error, so it is not the source of the duration. — [IMA Help, case-based transition article](https://help.imanet.org/s/article/IMA-is-transitioning-from-essay-questions-to-case-based-questions-on-the-CMA-exam-What-do-I-need-to-know-about-this-change)
- The 2019 IMA “four-hour test” newsletter URL redirected and then returned not found, so it is not cited as a source. — [imaglobal.org, missing newsletter](https://www.imaglobal.org/newsletters/cma-connection/2019/october/theres-still-time-to-take-the-current-cma-exam)

### Inferences
- Both `us_cma` stages already describe the same shape: 100 multiple-choice questions and two case-based items. The opened FAQ describes one sitting of that shape, not a single 4-hour total covering both parts. Set both stages’ `duration_min` to 240.
- Do not change `hours_*`, `hours_basis`, `hours_score`, `pass_rate_score`, `structure_score`, `level`, or any fee.

```yaml
structure.stages[0].duration_min: 240
structure.stages[1].duration_min: 240
```

In each stage’s `question_summary_ko`, replace the sentence that says the exam time was not on the opened page with: "IMA 중국 공식 FAQ는 시험 총시간을 4시간으로 적고, 그중 사례 문항 구간은 1시간, 객관식은 3시간이라고 한다. 240분은 그 4시간을 분으로 바꾼 값이다."

Replace the unknown reason that Becker had no exam time and the familiar 4 hours were therefore omitted. The new reason is that duration now comes from the opened IMA China FAQ, while the English IMA help article still did not render.

Add source:

```yaml
- url: "https://www.imachina.org.cn/"
  accessed: "2026-11-11"
  type: official
  covers: [structure]
```

### Gaps
- The opened IMA page does not use the word “minutes.” `duration_min` is only the exact conversion of the stated 4 hours.
- The English help article that would restate the same rule did not render. Pass rates, the conflicting sit rules, renewal, and study hours on `us_cma` were left as they were.
