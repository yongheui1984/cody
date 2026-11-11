# Korea exam gaps: 외환전문역Ⅱ종 and 여신심사역 hours, KOFIA sitting fees

Research date: 2026-11-11. Scope is only study hours and difficulty for kr_fx_specialist_2 and kr_loan_officer, and sitting fees for kr_investment_manager, kr_research_analyst, and kr_financial_risk_manager. Pass rates and structure scores already in the records were kept. Hours at or under 60 score 1, 61–150 score 2, 151–400 score 3, 401–1000 score 4, over 1000 score 5. Pass rate 70 or above scores 1, 50–69 scores 2, 30–49 scores 3, 15–29 scores 4, under 15 scores 5. Available scores are averaged and rounded half up. If study hours stay unknown, difficulty.level stays unknown.

## Study hours and difficulty for 외환전문역Ⅱ종 and 여신심사역

### Takeaway
외환전문역Ⅱ종 has one opened standalone provider course of 62 hours, so hours_score is 2 and difficulty.level becomes 3. 여신심사역 still has no self-study hour figure. The Korea Banking Institute 2026 in-person courses are 128 hours and 140 hours, but those are pre-exam course lengths, so hours_score and difficulty.level stay unknown.

### Cited Findings
- 이패스코리아 과정 「[25~26년까지 환급기회2번] 2025 외환전문역II종 종합과정 (정규이론+문제풀이)」은 Ⅱ종 단독 과정이다. 상세 페이지는 강의수 62교시, 교육시간 62시간, 수강기간 120일, 강사 안준호 외 1명이라고 적는다. Ⅰ종+Ⅱ종 패키지 시간이 아니다. — [이패스코리아 외환전문역Ⅱ종 종합과정](https://m.epasskorea.com/Lecture/lecture_view_bundle.asp?Cate_IDX=100313&Lec_cm_LecType=&Lec_IDX=160205)
- 같은 페이지는 하한·보통·상한을 나누지 않는다. 기존 자산관리사 125시간, 신용분석사 143시간과 같이 확인된 종합과정이 하나뿐이면 세 칸을 같은 값으로 둔다. 62시간은 61–150시간 구간이라 hours_score는 2다.
- 외환전문역Ⅱ종 기존 합격률은 2025년 22.62% 한 해뿐이다. 15–29%라 pass_rate_score는 4를 유지한다. 과목 3개의 객관식 단일 시험이라 structure_score 2도 유지한다. 이 조사에서 구조를 바꿀 근거는 없었다.
- (4 + 2 + 2) / 3 = 2.666…이다. 반올림하면 3이다. 0.5 경계가 아니므로 half-up과 보통 반올림이 같다.
- 재계산 결과, kr_fx_specialist_2:

```yaml
hours_min: 62
hours_typical: 62
hours_max: 62
hours_basis: provider
hours_basis_note_ko: "연수원 권장 학습시간은 이 조사에서 확인하지 못했다. 이패스코리아 2025 외환전문역Ⅱ종 종합과정(정규이론+문제풀이, 25~26년 환급 과정) 상세 페이지가 교육시간 62시간, 강의 62교시라고 적는다. Ⅰ·Ⅱ종 패키지는 쓰지 않았다. 빠른 학습과 오랜 학습을 나눈 수치가 없어 세 칸을 62로 두었다. 강의 밖 자습은 포함되지 않는다."
difficulty:
  pass_rate_score: 4
  hours_score: 2
  structure_score: 2
  level: 3
  rationale_ko: "종별로 나뉜 2025년 합격률 22.62%로 합격률 점수는 4다. 수험기관 Ⅱ종 단독 종합과정 62시간으로 학습시간 점수는 2다. 과목 3개의 객관식 단일 시험이라 구조 점수는 2를 유지한다. 세 점수의 평균 2.67을 반올림하면 3이다."
```

- 여신심사역 시험안내의 응시 전 집합연수 링크는 과정코드 0005 여신심사와 0060 여신법률이다. — [한국금융연수원 여신심사역 시험안내](https://www.kbi.or.kr/platformWeb/Qual.do?cmd=openPage&pageName=qualInfo&p_iQlfn=02)
- 2026년 여신심사 집합연수(과정 0005, 1기와 2기)의 과정 상세 데이터는 교육시간 T_EDU_TIME 128, 교육일수 20일, 교육비 3,643,000원이다. 1기는 2026-03-18부터 2026-04-14까지, 2기는 2026-09-11부터 2026-10-14까지다. 안내는 주간 1개월, 평일 9시–18시다. 과목 강의시간 합은 125시간이고 평가시간 합은 3시간이며, 128시간은 그 합이다. — [2026 여신심사 1기](https://www.kbi.or.kr/platformWeb/TrainList.do?cmd=openPage&pageName=trainCourseCollectDetail&i_tran=025001&i_cour=0005&d_opn_yy=2026&o_sim_num=1); [2026 여신심사 2기](https://www.kbi.or.kr/platformWeb/TrainList.do?cmd=openPage&pageName=trainCourseCollectDetail&i_tran=025001&i_cour=0005&d_opn_yy=2026&o_sim_num=2). 숫자는 그 페이지가 불러오는 [trainCourseDetail](https://www.kbi.or.kr/platformWeb/TrainList.do?cmd=trainCourseDetail) 응답이다.
- 2026년 여신법률 집합연수(과정 0060, 1기와 2기)는 교육시간 140, 교육일수 22일, 교육비 4,180,000원이다. 1기는 2026-04-15부터 2026-05-18까지, 2기는 2026-10-15부터 2026-11-13까지다. 과목 강의시간 합은 135시간이고 평가시간 합은 5시간이다. 수료 문구는 두 과정 모두 총 수업일수 80% 이상 출석, 교과목별 평가 40점 이상, 전체평균 60점 이상이다. — [2026 여신법률 1기](https://www.kbi.or.kr/platformWeb/TrainList.do?cmd=openPage&pageName=trainCourseCollectDetail&i_tran=025001&i_cour=0060&d_opn_yy=2026&o_sim_num=1); [2026 여신법률 2기](https://www.kbi.or.kr/platformWeb/TrainList.do?cmd=openPage&pageName=trainCourseCollectDetail&i_tran=025001&i_cour=0060&d_opn_yy=2026&o_sim_num=2)
- 이 128시간과 140시간은 시험 합격 전 집합연수 교육시간이다. 필기 자습 시간이 아니다. hours_min, hours_typical, hours_max, hours_score에는 넣지 않는다.
- 여신심사역 합격률 평균 51.2%의 pass_rate_score 2와 structure_score 4는 유지한다. 학습시간이 비어 있으므로 level은 unknown이다. 합격률 점수와 구조 점수만으로 평균하지 않았다.
- 여신심사역에 적어 둘 과정 길이. 자습 칸은 비운다.

```yaml
hours_min: unknown
hours_typical: unknown
hours_max: unknown
hours_basis: unknown
hours_basis_note_ko: "필기 자습 시간은 확인하지 못했다. 연수원 2026년 집합연수 여신심사(과정 0005, 1·2기)는 교육시간 128시간, 20일이고, 여신법률(과정 0060, 1·2기)은 교육시간 140시간, 22일이다. 둘 다 응시 전 수료 과정의 교육시간이므로 자습 시간에 넣지 않았다. 교육비는 각각 3,643,000원, 4,180,000원이다."
course_length_ko: "집합연수 교육시간이지 자습 시간이 아니다. 여신심사 128시간(20일, 3,643,000원), 여신법률 140시간(22일, 4,180,000원). 2026년 1기와 2기가 같다."
difficulty:
  pass_rate_score: 2
  hours_score: unknown
  structure_score: 4
  level: unknown
  rationale_ko: "2021-2025년 합격률 평균 51.2%로 합격률 점수는 2다. 과목 4개, 주관식, 응시 전 필수 집합연수라 구조 점수는 4를 유지한다. 집합연수 128시간과 140시간은 교육시간이므로 학습시간 점수에 넣지 않았고, 필기 자습 시간이 없어 난이도는 계산하지 않았다."
```

### Inferences
- Ⅱ종 62시간은 제공자가 교육시간으로 적은 값이므로, Ⅰ종에서 교시만 보고 1교시=1시간으로 추정한 41시간보다 근거가 직접적이다. 그래도 한 개 강의 길이라 수험생 자습 평균은 아니다.
- 여신심사 128시간과 여신법률 140시간을 더하면 268시간이지만, 이것은 응시 자격용 집합연수 두 개의 수업시간 합이다. 난이도 학습시간 점수에 쓰면 안 된다.
- 기존 기록의 「약 364만원」「약 418만원」은 같은 과정의 정확한 교육비 3,643,000원, 4,180,000원과 맞다. 응시료 66,000원과는 다른 항목이다.

### Gaps
- 한국금융연수원 시험안내의 외환전문역Ⅱ종 권장 학습시간은 이번에 열지 못했다. 62시간은 수험기관 강의 시간이다.
- 여신심사역 필기를 위한 수험기관 강의 시간을 적은 페이지는 찾지 못했다. 재무제표 실무 강의처럼 시험이 아닌 과정은 쓰지 않았다.
- 주말 여신심사 과정의 교육시간은 별도 과정 페이지를 열지 못했다. 위에 적은 128시간과 140시간은 시험안내가 연결하는 2026년 주간 집합연수다.
- 집합연수 교육비는 2026년 1·2기 상세 데이터 기준이다. 2027년 과정은 없다.

## Sitting fees for 투자자산운용사, 금융투자분석사, and 재무위험관리사

### Takeaway
2026년 공식 응시료 액수는 확인하지 못했다. 자격시험센터에 열린 응시료 표가 없고, 2025–2026년 공지는 금액을 적지 않으며, 수험 사이트는 투자자산운용사에서 40,000원과 50,000원이 엇갈린다. 세 시험의 fee.amount는 unknown으로 둔다.

### Cited Findings
- 자격시험센터 첫 화면 메뉴는 시험안내, 시험일정, 원서접수, 공지사항으로 이어지고, 응시료 금액 표는 없다. — [금융투자협회 자격시험센터](https://license.kofia.or.kr/main/main.do)
- 공지 목록 252건의 제목 가운데 응시료 금액을 제목에 둔 글은 2021-12-03과 2022-12-01 두 건뿐이다. 2025년과 2026년 제목에는 금액 조정이 없다. — [자격시험센터 공지사항](https://license.kofia.or.kr/notifyYard/notice/getNoticePage.do)
- 2026년 제47회 투자자산운용사 유의사항(2026-09-29)과 제18회 재무위험관리사 유의사항(2026-08-10)은 응시료를 신용카드 또는 계좌이체로 낸다고만 적고, 원 단위 금액은 없다. — [제47회 투자자산운용사 유의사항](https://license.kofia.or.kr/notifyYard/notice/getNoticeDetail.do?statementId=75838); [제18회 재무위험관리사 유의사항](https://license.kofia.or.kr/notifyYard/notice/getNoticeDetail.do?statementId=75327)
- 공식 금액이 적힌 마지막 공지는 2022-12-01 「자격시험 응시료 조정 등 안내」다. 2023년 시험부터 전과목 응시료를 4.5만원에서 5만원으로 올리고, 8종에 투자자산운용사, 금융투자분석사, 재무위험관리사가 포함된다고 적는다. 부가가치세 포함이다. 부분 응시는 투자자산운용사 1과목 17,000원, 2과목 17,000원, 금융투자분석사 1~3과목 34,000원, 재무위험관리사 1·3·4과목 38,000원이다. 적용 시작으로 적은 시험은 2023-01-08 증권투자권유자문인력이다. 이 글은 2025–2026년 공지가 아니라서 2026년 응시료로 쓰지 않는다. — [2022-12-01 응시료 조정 안내](https://license.kofia.or.kr/notifyYard/notice/getNoticeDetail.do?statementId=56490)
- 이패스코리아 투자자산운용사 수험정보(2026년 일정 제목)는 응시료 40,000원, 과목면제자 20,000원이라고 적는다. — [이패스코리아 투자자산운용사 수험정보](https://m.epasskorea.com/Examinfo/ExamInfo.asp?Cate_IDX=100205&link_idx=4414)
- 와우패스 2026년 금융투자협회 시험일정 공지는 투자자산운용사 제44회 행에 50,000원을 적는다. 같은 표의 금융투자분석사와 재무위험관리사 행은 열린 본문에 금액까지 나오지 않았다. 수험 사이트 금액이라 공식 값으로 쓰지 않는다. — [와우패스 2026년 시험일정](https://www.wowpass.com/FINANCE/Notice/264913)
- 세 시험 모두 fee.amount, krw_approx는 unknown이다. 40,000원과 50,000원을 평균하지 않았다.

```yaml
fee:
  amount: unknown
  currency: KRW
  krw_approx: unknown
  fx_date: 2026-11-11
```

### Inferences
- 2022년 공지가 2023년부터 전과목 50,000원이라고 했고, 그 뒤 제목에 재조정이 없으므로 2026년에도 50,000원일 가능성은 있다. 그러나 2026년 페이지가 그 금액을 다시 적지 않았고, 수험 사이트가 40,000원과 50,000원으로 갈리므로 기록에는 넣지 않는다.
- 부분 응시료 17,000원, 34,000원, 38,000원도 같은 2022년 공지의 숫자다. 2026년 공식 금액으로 확정하지 않는다.

### Gaps
- 자격시험센터 접수 화면은 로그인 뒤 결제 단계라 2026-11-11에 금액을 열지 못했다. 시험개요 페이지 요청은 응답이 중간에 끊어져 응시료 표를 확인하지 못했다.
- 2025년 또는 2026년 한국금융투자협회 공지 가운데 세 시험의 원 단위 응시료를 적은 글은 목록 제목과 연 2026년 유의사항에서 찾지 못했다.
- 금융투자분석사와 재무위험관리사의 2026년 수험 사이트 금액은 이번에 대조하지 못했다. 투자자산운용사만 40,000원과 50,000원이 확인되어 엇갈린다.
