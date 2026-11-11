# Korea insurance exams: study hours, pass rates, and difficulty

Patch only for `kr_life_planner`, `kr_nonlife_planner`, `kr_third_sector_planner`, `kr_claims_adjuster_property`, `kr_claims_adjuster_vehicle`, `kr_claims_adjuster_bodily`, and `kr_actuary` in `kr_insurance.md`. Reference date and access date: 2026-11-11. Do not copy hagwon pass rates. Do not treat registration-education hours or continuing-education hours as exam study time. Identity, eligibility, fees, and `structure_score` stay as they are.

## What study hours should be recorded?

### Takeaway
All seven records stay `hours_min`, `hours_typical`, and `hours_max` unknown, with `hours_basis: unknown`. No official recommended study-hour figure was opened, and no opened 보험연수원, 인카, 해커스, 에듀윌, or association training page states a preparation-hour number for these exams. The 20H–40H figures on the 보험연수원 new-solicitor registration page are registration education, not exam study time. Because `hours_typical` is unknown, `hours_score` stays `na` and no difficulty level is assigned.

### Cited Findings
- 보험연수원 신규 설계사 등록교육 lists cyber courses whose names carry hour marks: 생명+손해+제3보험 40H, 생명+제3보험 30H, 손해+제3보험 30H, 생명보험 20H, 손해보험 20H, 제3보험 20H, and 외부교육 8H. The page says the audience is a person becoming a solicitor for the first time, or a person who does not meet the recent-experience rule, and that the person must also pass the solicitor exam before registration. — [보험연수원 신규 설계사 등록교육](https://is.in.or.kr/main/sukang/reg/compTrainning.do?lecture_type=1&search_gubun_code=01&search_high_code=04&search_mid_code=01)
- 보험연수원 보험계리사 2차 사이버 목록 (정규이론, 문제풀이) gives a fee and an enrollment window of 3개월 for each 2024–2026 subject course. It does not print a study-hour total. The 3개월 figure is the period the course stays open, not a recommended study load, so it is not converted into hours. — [보험연수원 보험계리사 2차 사이버](https://expert.in.or.kr/expert/sukang/actuary/cyber/second.do)
- The 금융감독원 제45회–제49회 최종 합격자 보도자료 PDFs print examinees, passers, and pass rates. They do not print a recommended study time. — [제49회 보도자료 게시글](https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=229239&menuNo=200218); PDF read for the tables: [제49회 PDF](https://www.fss.or.kr/fss/cmmn/file/fileDown.do?menuNo=200218&atchFileId=8590483df7644650bafd0b1be4ed33a6&fileSn=2), [제48회 게시글](https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=204203&menuNo=200218), [제47회 게시글](https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=187426&menuNo=200218), [제46회 게시글](https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=130549&menuNo=200218), [제45회 게시글](https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=56948&menuNo=200218). The list that links these five notices was opened at [보도자료 검색](https://www.fss.or.kr/fss/bbs/B0000188/list.do?menuNo=200218&searchCnd=1&searchWrd=%EB%B3%B4%ED%97%98%EA%B3%84%EB%A6%AC%EC%82%AC).

### Inferences
- Registration-course hours and a three-month enrollment window are different objects from `hours_typical`. Leaving the hour fields unknown is the reading that matches the pages that were opened.
- Stage-level hour fields stay unknown as well. There is no basis for splitting a total that was never stated.

### Gaps
- No opened page of 보험연수원 시험대비 과정, 인카, 해커스, or 에듀윌 states a preparation-hour number for 생명보험시험, 손해보험자격시험, 제3보험 자격시험, 재물·차량·신체 손해사정사, or 보험계리사. Searches returned other products, registration or sales courses, and pages that were not opened because they were not those providers’ exam-prep hour statements.
- YouTube and blog claims of weeks or hundreds of hours were not used. They are not in the allowed source set.

## What official pass rates should be recorded?

### Takeaway
손해사정사 2차 type rates for 제45회–제49회 (2022–2026) are the final license rates and go on each adjuster’s 2차 stage and on `total.pass_rate_avg_pct`. Unweighted means of the five printed rates: 재물 13.10, 차량 18.82, 신체 14.32. 1차 rates were not in these releases. The three planner exams stay unknown. 보험계리사 stays unknown as a final rate: the PDFs publish final-passer headcounts and subject-sitting rates (중복응시), not a unique-examinee final pass rate.

### Cited Findings
Tables below are the 2차 응시자 / 합격자 / 합격률 columns. 응시자 is the sitter count on that table, not a separate applicant count. Use the printed 합격률. Passers are shown so the row can be checked; the YAML field list is `period`, `rate_pct`, `examinees` only.

손해사정사 2차, by type. Each year’s own release is the row. The 2024 차량 conflict is stated after the table.

| 회차 | 시험일 (PDF에 있는 경우) | 재물 응시/합격/합격률 | 차량 응시/합격/합격률 | 신체 응시/합격/합격률 |
| --- | --- | --- | --- | --- |
| 제45회 (2022) | 2022-07-30–07-31 | 309 / 50 / 16.2 | 533 / 110 / 20.6 | 2,150 / 340 / 15.8 |
| 제46회 (2023) | 본문에서 일자가 빠짐 | 343 / 50 / 14.6 | 644 / 110 / 17.1 | 2,192 / 343 / 15.6 |
| 제47회 (2024) | 2024-07-27–07-28 | 403 / 52 / 12.9 | 598 / 110 / 18.4 | 2,269 / 345 / 15.2 |
| 제48회 (2025) | 2025-07-26–07-27 | 446 / 50 / 11.2 | 590 / 111 / 18.8 | 2,621 / 345 / 13.2 |
| 제49회 (2026) | 2026-07-25–07-26 | 567 / 60 / 10.6 | 520 / 100 / 19.2 | 2,886 / 341 / 11.8 |

- 제45회 PDF, 배포 2022-09-29, 게시 등록일 2022-09-30. 손사 합계 500 / 2,992 = 16.7%. 계리 최종 합격 166명. 그중 5과목을 한 번에 합격한 사람은 4명(2.4%). 2차 과목 합계는 927 / 1,830 = 50.7%이고 중복응시다. — [제45회 게시글](https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=56948&menuNo=200218)
- 제46회 PDF, 배포·등록 2023-09-21. 손사 합계 503 / 3,179 = 15.8%. 계리 최종 합격 169명. 2차 과목 합계 812 / 1,622 = 50.1% (중복합격). — [제46회 게시글](https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=130549&menuNo=200218)
- 제47회 PDF, 배포·등록 2024-10-03. 손사 합계 507 / 3,270 = 15.5%. 본문 합격자 내역은 신체 345, 차량 110, 재물 52. 계리 최종 합격 126명. 2차 과목 합계 824 / 1,617 = 51.0% (중복합격). 차량 당해 표는 110 / 598 = 18.4%. — [제47회 게시글](https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=187426&menuNo=200218)
- 제48회 PDF, 자료 일자 2025-09-26, 게시 등록일 2025-09-30. 손사 합계 506 / 3,657 = 13.8% (재물 50, 차량 111, 신체 345). 계리 최종 합격 120명. 2차 과목 합계 1,000 / 1,889 = 52.9% (중복합격). 비교 열은 2024 차량을 111 / 598 = 18.6%로, 손사 합계 합격자를 508명으로 다시 적는다. 개요 각주도 전년 손사를 재물 52, 차량 111, 신체 345로 적는다. — [제48회 게시글](https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=204203&menuNo=200218)
- 제49회 PDF, 배포·등록 2026-09-18. 손사 합계 501 / 3,973 = 12.6% (재물 60, 차량 100, 신체 341). 계리 최종 합격 104명. 2차 과목 합계 962 / 2,334 = 41.2% (중복합격). 2026 과목 행: 계리리스크관리 156/518 = 30.1, 보험수리학 193/526 = 36.7, 연금수리학 239/542 = 44.1, 계리모형론 222/432 = 51.4, 재무관리 및 금융공학 152/316 = 48.1. 게시글 본문은 104명과 501명만 적고 표는 PDF에 있다. — [제49회 게시글](https://www.fss.or.kr/fss/bbs/B0000188/view.do?nttId=229239&menuNo=200218); [제49회 PDF](https://www.fss.or.kr/fss/cmmn/file/fileDown.do?menuNo=200218&atchFileId=8590483df7644650bafd0b1be4ed33a6&fileSn=2)

Printed-rate means, latest five releases, unweighted:

- 재물: (16.2 + 14.6 + 12.9 + 11.2 + 10.6) / 5 = 65.5 / 5 = 13.10.
- 차량: (20.6 + 17.1 + 18.4 + 18.8 + 19.2) / 5 = 94.1 / 5 = 18.82. The 2024 term is the 제47회 당해 표의 18.4.
- 신체: (15.8 + 15.6 + 15.2 + 13.2 + 11.8) / 5 = 71.6 / 5 = 14.32.

손사 3종 합계 합격률 (16.7, 15.8, 15.5, 13.8, 12.6) is a different population. Do not write it onto any of the three type records.

Conflict, kept rather than averaged away: 제47회 차량. The 2024-10-03 table prints 110 passers and 18.4%. The 2025-09-26 comparison column prints 111 passers and 18.6%, and one overview sentence in that later PDF says the prior-year adjuster total was 508 while another sentence in the 2024 PDF says 507. 507/3,270 and 508/3,270 both round to the printed 15.5%. The series uses 110 and 18.4% from the year of the announcement. Substituting 18.6% would make the five-year vehicle mean 18.86, which stays inside 15–29.

보험계리사 최종 합격자 수, with no unique-examinee denominator: 2022 166, 2023 169, 2024 126, 2025 120, 2026 104. The 2022 note that 4 of 166 (2.4%) passed all five subjects in one sitting is a share of final passers, not an examinee pass rate. Subject-sitting rates near 50% are 중복합격 / 중복응시. A person can sit several subjects, and a subject pass can be banked for up to five years. Those rates are not `pass_rate_avg_pct`.

1차 합격률은 이 다섯 최종합격 보도자료에 없다. Planner exams: no association, exam.insure.or.kr, or KOSIS rate table was opened.

### Inferences
- For the three adjuster licenses, the published 2차 합격률 is the final credential rate for that type. 1차 is unknown, so it is not averaged with 2차. `total.pass_rate_avg_pct` equals the 2차 five-year mean.
- Quota language in the 제49회 PDF says that when a 선발예정인원 was announced, adjuster passers are chosen by total score among people who scored at least 40 on every subject, inside that quota, with ties kept. The PDF itself prints 재물 60, 차량 100, 신체 341. It does not print the quota numbers next to those counts. The falling type rates alongside flat or slowly rising passer counts are consistent with a capped cohort, and that is a reading of the rule plus the counts, not a restatement of a quota table in these PDFs.
- Actuary final-passer counts cannot be divided by the subject-sitting totals. That division would not be a pass rate of people.

### Gaps
- 생명보험시험, 손해보험자격시험, 제3보험 자격시험: no official pass-rate table was opened. Hagwon rates and older news percentages were not used.
- 손해사정사 and 보험계리사 1차: these five final-result PDFs do not publish a 1차 examinee count or a 1차 pass rate.
- 보험계리사 최종 합격률: unique 2차 examinees are not published. Subject-level rates and the five-year subject aggregate (50.7, 50.1, 51.0, 52.9, 41.2; unweighted mean 49.18) stay out of `pass_rates`.
- KOSIS and exam.insure.or.kr were not opened onto a planner or adjuster exam-stat table in this pass. The absence is a gap, not a finding that the portals contain no table.
- 제46회 PDF text extraction dropped the 2차 calendar dates. They are not filled from memory.

## What difficulty scores replace the structure-only levels?

### Takeaway
`structure_score` stays 2 for the three planners and 3 for the three adjusters and the actuary. `hours_score` stays `na` on all seven because `hours_typical` is unknown. `pass_rate_score` is 5 for 재물 (mean 13.10), 4 for 차량 (mean 18.82), and 5 for 신체 (mean 14.32). It stays `na` for the three planners and for 보험계리사. The current levels (planners 2, the other four records 3), which used structure alone, are invalid and are cleared. No level is written while hours remain unknown. Do not average the known A and structure scores into a level.

### Cited Findings
Score bands used here: pass-rate average 70+ = 1, 50–69 = 2, 30–49 = 3, 15–29 = 4, under 15 = 5, unknown = `na`. Hours bands are unused because every `hours_typical` is unknown, so every `hours_score` is `na`.

- 재물 13.10 is under 15, so `pass_rate_score` 5. — same 제45–49회 PDFs as the pass-rate section.
- 차량 18.82 is inside 15–29, so `pass_rate_score` 4. The 18.4 vs 18.6 conflict does not change the band.
- 신체 14.32 is under 15, so `pass_rate_score` 5.
- Planners have no official average, so `pass_rate_score` stays `na`.
- 보험계리사 has no final-examinee rate, so `pass_rate_score` stays `na`. The subject-sitting mean 49.18 is not scored.

Field patch to apply. Stage 1 hour and pass-rate fields on the adjuster and actuary records stay `unknown`. Only fields that change are shown. `level: null` means delete the existing level. Do not leave 2 or 3.

```yaml
# kr_life_planner — 생명보험시험 stage and total
# stage pass_rates, pass_rate_avg_pct, hours_*: unchanged unknown
total:
  hours_min: unknown
  hours_typical: unknown
  hours_max: unknown
  hours_basis: unknown
  hours_basis_note_ko: "공식 권장 학습시간은 열지 못했다. 2026-11-11에 연 보험연수원 신규 설계사 등록교육은 생명보험 20H, 생명+제3보험 30H를 포함한 등록교육 시간이다. 등록교육은 시험 학습시간이 아니므로 넣지 않았다. 인카·해커스·에듀윌에서 생명보험시험 준비 시간을 적은 페이지는 열지 못했다."
  pass_rate_avg_pct: unknown
difficulty:
  pass_rate_score: na
  hours_score: na
  structure_score: 2
  level: null
  rationale_ko: "구조만으로 두었던 등급 2는 무효라 지운다. 공식 합격률이 없고 학습시간도 없어 합격률 점수와 시간 점수는 na이다. 시간이 비어 있으면 등급을 매기지 않는다. 구조 점수 2는 유지한다."
confidence:
  hours: low
  pass_rate: low
unknown_reasons:
  - "pass_rates: 생명보험협회·금감원·보험개발원·국가통계포털에서 이 시험의 최근 합격률 표를 열지 못했다."
  - "hours_min, hours_typical, hours_max, hours_basis, hours_score, difficulty.level: 공식·허용 수험기관의 생명보험시험 준비 시간 숫자가 없다. 보험연수원 20H·30H는 등록교육이라 제외했다. 시간이 없어 등급은 비운다."

# kr_nonlife_planner — 손해보험자격시험 stage and total
total:
  hours_min: unknown
  hours_typical: unknown
  hours_max: unknown
  hours_basis: unknown
  hours_basis_note_ko: "공식 권장 학습시간은 열지 못했다. 2026-11-11에 연 보험연수원 신규 설계사 등록교육은 손해보험 20H, 손해+제3보험 30H를 포함한 등록교육 시간이다. 등록교육은 시험 학습시간이 아니므로 넣지 않았다. 인카·해커스·에듀윌에서 손해보험자격시험 준비 시간을 적은 페이지는 열지 못했다."
  pass_rate_avg_pct: unknown
difficulty:
  pass_rate_score: na
  hours_score: na
  structure_score: 2
  level: null
  rationale_ko: "구조만으로 두었던 등급 2는 무효라 지운다. 공식 합격률이 없고 학습시간도 없어 두 점수는 na이다. 시간이 비어 있으면 등급을 매기지 않는다. 구조 점수 2는 유지한다."
confidence:
  hours: low
  pass_rate: low
unknown_reasons:
  - "pass_rates: 손해보험협회·금감원·보험개발원·국가통계포털에서 이 시험의 최근 합격률 표를 열지 못했다."
  - "hours_min, hours_typical, hours_max, hours_basis, hours_score, difficulty.level: 공식·허용 수험기관의 손해보험자격시험 준비 시간 숫자가 없다. 보험연수원 20H·30H는 등록교육이라 제외했다. 시간이 없어 등급은 비운다."

# kr_third_sector_planner — 제3보험 자격시험 stage and total
total:
  hours_min: unknown
  hours_typical: unknown
  hours_max: unknown
  hours_basis: unknown
  hours_basis_note_ko: "공식 권장 학습시간은 열지 못했다. 2026-11-11에 연 보험연수원 신규 설계사 등록교육은 제3보험 20H와 생명 또는 손해와 묶은 30H·40H를 등록교육으로 적는다. 등록교육은 시험 학습시간이 아니므로 넣지 않았다. 인카·해커스·에듀윌에서 제3보험 자격시험 준비 시간을 적은 페이지는 열지 못했다."
  pass_rate_avg_pct: unknown
difficulty:
  pass_rate_score: na
  hours_score: na
  structure_score: 2
  level: null
  rationale_ko: "구조만으로 두었던 등급 2는 무효라 지운다. 공식 합격률이 없고 학습시간도 없어 두 점수는 na이다. 시간이 비어 있으면 등급을 매기지 않는다. 구조 점수 2는 유지한다."
confidence:
  hours: low
  pass_rate: low
unknown_reasons:
  - "pass_rates: 생명·손해보험협회와 금감원·보험개발원·국가통계포털에서 제3보험 자격시험 합격률 표를 열지 못했다."
  - "hours_min, hours_typical, hours_max, hours_basis, hours_score, difficulty.level: 공식·허용 수험기관의 제3보험 자격시험 준비 시간 숫자가 없다. 보험연수원 20H·30H·40H는 등록교육이라 제외했다. 시간이 없어 등급은 비운다."

# kr_claims_adjuster_property
# 1차 pass_rates and all stage hours: unchanged unknown
# 2차 시험:
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
total:
  hours_min: unknown
  hours_typical: unknown
  hours_max: unknown
  hours_basis: unknown
  hours_basis_note_ko: "금융감독원 제45–49회 합격 보도자료에는 권장 학습시간이 없다. 보험연수원 보험계리사 2차 사이버 목록은 교육기간 3개월만 있고 학습 시간 수가 없으며, 그 3개월은 수강 가능 기간이라 시간으로 바꾸지 않았다. 재물손해사정사에 대해 인카·해커스·에듀윌이 준비 시간을 적은 페이지는 열지 못했다. 등록교육·보수교육 시간은 시험 학습시간이 아니다."
  pass_rate_avg_pct: 13.10
difficulty:
  pass_rate_score: 5
  hours_score: na
  structure_score: 3
  level: null
  rationale_ko: "2차 최종 합격률 5개년 산술평균 13.10은 15 미만이라 합격률 점수는 5이다. 응시자는 2차 응시자이고 1차 합격률은 이 보도자료에 없어 평균에 넣지 않았다. 학습시간이 없어 시간 점수는 na이고, 구조만으로 두었던 등급 3은 무효라 지운다. 시간이 비어 있으면 합격률 점수와 구조 점수 3을 평균해 등급을 만들지 않는다."
confidence:
  hours: low
  pass_rate: high
unknown_reasons:
  - "1차 pass_rates: 제45–49회 최종합격 보도자료는 2차만 집계한다."
  - "hours_min, hours_typical, hours_max, hours_basis, hours_score, difficulty.level: 재물손해사정사 준비 시간 숫자가 없다. 시간이 없어 등급은 비운다."

# kr_claims_adjuster_vehicle
# 2차 시험. 2024 is the 제47회 own table (110명, 18.4%), not the later 18.6% restatement.
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
total:
  hours_min: unknown
  hours_typical: unknown
  hours_max: unknown
  hours_basis: unknown
  hours_basis_note_ko: "금융감독원 제45–49회 합격 보도자료에는 권장 학습시간이 없다. 허용 수험기관 페이지에서 차량손해사정사 준비 시간 숫자를 열지 못했다. 등록교육·보수교육 시간은 시험 학습시간이 아니다."
  pass_rate_avg_pct: 18.82
difficulty:
  pass_rate_score: 4
  hours_score: na
  structure_score: 3
  level: null
  rationale_ko: "2차 최종 합격률 5개년 산술평균 18.82는 15–29라 합격률 점수는 4이다. 2024년은 당해 보도자료의 18.4를 썼다. 이듬해 비교 열의 18.6을 써도 평균은 18.86으로 같은 구간이다. 학습시간이 없어 시간 점수는 na이고, 구조만으로 두었던 등급 3은 무효라 지운다. 시간이 비어 있으면 등급을 매기지 않는다."
confidence:
  hours: low
  pass_rate: high
unknown_reasons:
  - "1차 pass_rates: 제45–49회 최종합격 보도자료는 2차만 집계한다."
  - "hours_min, hours_typical, hours_max, hours_basis, hours_score, difficulty.level: 차량손해사정사 준비 시간 숫자가 없다. 시간이 없어 등급은 비운다."
  - "2024 차량 합격자 수: 제47회 당해 표는 110명·18.4%이고, 제48회 비교 열은 111명·18.6%이다. 시계열은 당해 표를 따른다."

# kr_claims_adjuster_bodily
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
total:
  hours_min: unknown
  hours_typical: unknown
  hours_max: unknown
  hours_basis: unknown
  hours_basis_note_ko: "금융감독원 제45–49회 합격 보도자료에는 권장 학습시간이 없다. 허용 수험기관 페이지에서 신체손해사정사 준비 시간 숫자를 열지 못했다. 등록교육·보수교육 시간은 시험 학습시간이 아니다."
  pass_rate_avg_pct: 14.32
difficulty:
  pass_rate_score: 5
  hours_score: na
  structure_score: 3
  level: null
  rationale_ko: "2차 최종 합격률 5개년 산술평균 14.32는 15 미만이라 합격률 점수는 5이다. 학습시간이 없어 시간 점수는 na이고, 구조만으로 두었던 등급 3은 무효라 지운다. 시간이 비어 있으면 합격률 점수와 구조 점수 3을 평균해 등급을 만들지 않는다."
confidence:
  hours: low
  pass_rate: high
unknown_reasons:
  - "1차 pass_rates: 제45–49회 최종합격 보도자료는 2차만 집계한다."
  - "hours_min, hours_typical, hours_max, hours_basis, hours_score, difficulty.level: 신체손해사정사 준비 시간 숫자가 없다. 시간이 없어 등급은 비운다."

# kr_actuary
# Do not set pass_rates from subject-sitting rates or from final-passer headcounts.
# 1차 and 2차 pass_rates, pass_rate_avg_pct: unchanged unknown
total:
  hours_min: unknown
  hours_typical: unknown
  hours_max: unknown
  hours_basis: unknown
  hours_basis_note_ko: "금융감독원 제45–49회 합격 보도자료에는 권장 학습시간이 없다. 2026-11-11에 연 보험연수원 보험계리사 2차 사이버 목록은 과목 과정마다 교육기간 3개월만 적고 학습 시간 수는 없다. 3개월은 수강 가능 기간이라 시간으로 바꾸지 않았다. 인카·해커스·에듀윌에서 보험계리사 준비 시간을 적은 페이지는 열지 못했다."
  pass_rate_avg_pct: unknown
difficulty:
  pass_rate_score: na
  hours_score: na
  structure_score: 3
  level: null
  rationale_ko: "구조만으로 두었던 등급 3은 무효라 지운다. 최종 합격자 수(2022–2026: 166, 169, 126, 120, 104)에는 고유 응시자 분모가 없다. 2차 과목 중복응시 합격률은 최종 합격률이 아니므로 합격률 점수를 매기지 않는다. 학습시간이 없어 시간 점수는 na이고 등급은 비운다. 구조 점수 3은 유지한다."
confidence:
  hours: low
  pass_rate: low
unknown_reasons:
  - "pass_rates: 제45–49회 보도자료는 계리사 최종 합격자 수와 2차 과목 중복응시 합격률만 싣는다. 고유 2차 응시자가 없어 최종 합격률을 만들지 않았다. 1차 합격률도 이 자료에 없다."
  - "hours_min, hours_typical, hours_max, hours_basis, hours_score, difficulty.level: 보험계리사 준비 시간 숫자가 없다. 보험연수원 교육기간 3개월은 학습시간이 아니다. 시간이 없어 등급은 비운다."
```

`total.pass_rate_avg_pct` on the three adjuster records is the unweighted mean of that type’s five printed 2차 rates. It is not an average of 1차 and 2차, and it is not the combined 손사 rate.

### Inferences
- A pass-rate score can be stored while the level stays empty. The level rule withholds the level whenever hours are unknown, including when A and structure are both available. For 재물 that blocked average would have been (5+3)/2 = 4, for 차량 (4+3)/2 = 3.5 rounded half up to 4, and for 신체 (5+3)/2 = 4. Those figures are not the level.
- High confidence on the three adjuster 2차 series follows from reading the official PDFs. Low confidence on hours, planner rates, and the actuary final rate follows from the pages not stating those numbers.

### Gaps
- No level can be added later from structure alone. A level needs an opened `hours_typical`, and for the planners and the actuary it also needs an official final pass-rate average before `pass_rate_score` can move off `na`.
- 제47회 차량 110명 대 111명은 두 금감원 PDF가 서로 다르다. 시계열은 당해 18.4%를 쓰되, 합격자 인원 110을 확정 사실로 한 줄에만 두지 말고 이 충돌을 레코드 메모에 남긴다.
