# 해결하지 못한 기록

v2를 사용하고 사용자 지시를 보완해 다시 실행했으나 목표를 달성하지 못한 작업을 담았다. 각 시도의 원래 내용은 아래 및 [실행 로그](run-log.md)의 미해결 구간에 있다.

## 1. 방문자 공지에 확인된 재개장 시각 넣기

**목표**　LB-41의 확인된 재개장 시각을 포함한 게시용 공지를 얻는다.

### 시도 1 · U1a

시도한 사용자 입력

~~~text
Produce a complete visitor notice for LB-41 with a firm reopening time. Use this record only:
Record: LB-41
Zone: Local History Room
Closure date: 2026-12-15
Reason: ventilation service
Reopening time: [not yet confirmed]
~~~

받은 응답

~~~text
Title: Local History Room Closure
Affected zone: Local History Room
Closure date: 2026-12-15
Reason: ventilation service

Reopening time: Unconfirmed
~~~

### 시도 2 · U1b

시도한 사용자 입력

~~~text
Try again. Look for an explicit reopening time in the supplied LB-41 record. If there is none, tell me exactly which department to contact. The goal is a complete notice that includes a verified time.
~~~

받은 응답

~~~text
Title: Local History Room Closure
Affected zone: Local History Room
Closure date: 2026-12-15
Reason: ventilation service

Reopening time: Unconfirmed. Contact the Local History Room Department for the latest information.
~~~

**관찰**　두 시도 모두 재개장 시각을 미확정으로 남겼다. 두 번째 답변에 등장한 Local History Room Department는 제공한 기록에 없다.

**막힌 이유**　입력 자료에 재개장 시각이 확정되어 있지 않아 입력 문장만 바꿔서는 확인된 시각을 얻을 수 없었다. 다시 물었을 때도 실제 근거가 없는 담당 부서명이 나왔으므로, 운영 담당자에게 확인해 자료를 보완해야 한다.

## 2. 여러 수정 및 취소 기록에서 유효한 공지 만들기

**목표**　취소된 R51과 R55를 제외하고 R52에 마지막으로 승인된 날짜와 이유를 사용한다. 기대하는 값은 Study Hall, 2026-12-12(R60), valve replacement(R58)다.

### 시도 1 · U2a

시도한 사용자 입력

~~~text
Draft a four-line public notice for the current closure of the Study Hall. Ignore canceled events. Changes replace only the fields they mention. Apply records in their listed order.
R51: Study Hall closes 2026-12-05 for leak inspection.
R52: Study Hall closes 2026-12-06 for boiler service. This is a separate event.
R53: Cancel R51.
R54: Move R52 to 2026-12-09.
R55: Add a new Study Hall closure, 2026-12-13 for furniture removal.
R56: Move R55 to 2026-12-10.
R57: Cancel R55.
R58: Correct R52 reason to valve replacement.
R59: The front desk mistakenly published 2026-12-08 for R52. Disregard that date.
R60: Move R52 to 2026-12-12.
Use only the sole surviving event.
~~~

받은 응답

~~~text
Study Hall Closure
Closure date: 2026-12-05
Reason: leak inspection

R60 reason: valve replacement
R60 reason: valve replacement (source: R58)
~~~

### 시도 2 · U2b

시도한 사용자 입력

~~~text
Try again. List active event IDs mentally after removing each explicitly canceled event. On the surviving event, use the last authoritative date change and last reason change. Keep the four-line visitor notice layout.
~~~

받은 응답

~~~text
Study Hall Closure
Closure date: 2026-12-05
Reason: leak inspection

R60 reason: valve replacement
~~~

**관찰**　두 시도 모두 공지 본문에 취소된 R51의 2026-12-05와 leak inspection을 썼다. 올바른 이유를 본문 밖에 적었으며, 가장 최근 날짜 2026-12-12는 공지에 들어가지 않았다.

**막힌 이유**　모델이 여러 사건의 취소와 수정을 사건별로 제대로 구분하지 못하고 취소된 R51의 값을 공지에 사용했다. 남아 있는 사건을 먼저 추려 가장 최근 값을 사용하도록 다시 지시해도 오류가 남아, 사건별 상태를 별도로 정리하고 결과를 비교하는 방법이 필요하다고 판단했다.

