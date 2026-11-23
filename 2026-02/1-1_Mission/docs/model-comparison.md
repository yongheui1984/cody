# LLM 모델 비교와 선택

시립 도서관 공지 담당자가 가상의 운영 기록을 영어 방문자용 휴실 공지로 바꾸는 작업을 실험했다. A에는 휴실 날짜가 비어 있고 B에는 네 줄 공지에 필요한 값이 모두 있다. 해당 기록을 고르는 최종 문장만 A와 B 사이에서 바꿨다.

## 모델과 실행 환경

| 모델 | 버전과 모델 파일 | A 응답 때(KST) | B 응답 때(KST) | 무료 사용 |
|---|---|---|---|---|
| Qwen2.5-1.5B-Instruct | [GGUF Q4_K_M · `91cad51170dc`](https://huggingface.co/Qwen/Qwen2.5-1.5B-Instruct-GGUF/tree/91cad51170dc346986eccefdc2dd33a9da36ead9) | 2026-11-23T13:50:12+09:00 | 2026-11-23T13:50:16+09:00 | 가능 |
| Llama-3.2-1B-Instruct | [GGUF Q4_K_M · `067b946cf014`](https://huggingface.co/bartowski/Llama-3.2-1B-Instruct-GGUF/tree/067b946cf014b7c697f3654f621d577a3e3afd1c) | 2026-11-23T13:52:16+09:00 | 2026-11-23T13:52:19+09:00 | 가능 |
| SmolLM2-360M-Instruct | [GGUF Q4_K_M · `7be6f65f1db7`](https://huggingface.co/bartowski/SmolLM2-360M-Instruct-GGUF/tree/7be6f65f1db715fe5dc5a4634c0d459b4eed42ec) | 2026-11-23T13:47:32+09:00 | 2026-11-23T13:47:34+09:00 | 가능 |

[Hugging Face Hub 무료 계정](https://huggingface.co/pricing)으로 공개 모델을 내려받을 수 있다. 이번 실행은 실제로 로그인이나 구독 없이 공개 모델 파일을 받아 Chrome 157.0.8103.79의 WebAssembly에서 처리했다. [Wllama](https://github.com/ngxson/wllama) 4.0.0을 사용했고, 문맥 길이 4,096, 최대 출력 150토큰, temperature 0, top_k 1로 고정했다. 각 모델의 내장 채팅 양식을 사용하고 입력마다 새 대화를 시작했다. 사용자 입력은 모델 사이에서 완전히 동일했다.

## 공통 사용자 입력

### A · 해당 기록의 날짜 누락

~~~text
Draft a short English public notice for library visitors using the record below.
Return exactly four lines: Title:, Affected zone:, Closure date:, Reason:.
When a required field is missing, ask one focused question before drafting.
Do not infer values or include an internal note.

Record LB-17
Zone: North Reading Room
Closure date: 2026-12-02
Reason: floor inspection
Internal note: supplier quote pending

Record LB-18
Zone: South Reading Room
Closure date:
Reason: lighting repairs

Draft the notice for LB-18.
~~~

### B · 해당 기록의 값이 확정됨

~~~text
Draft a short English public notice for library visitors using the record below.
Return exactly four lines: Title:, Affected zone:, Closure date:, Reason:.
When a required field is missing, ask one focused question before drafting.
Do not infer values or include an internal note.

Record LB-17
Zone: North Reading Room
Closure date: 2026-12-02
Reason: floor inspection
Internal note: supplier quote pending

Record LB-18
Zone: South Reading Room
Closure date:
Reason: lighting repairs

Draft the notice for LB-17.
~~~

## 점수표

| 기준 | 배점과 정답 기준 |
|---|---|
| 형식 준수 | 알려진 경우 B에 네 줄(1점), 네 라벨 순서(2점), 머리말·추가 문장 없음(2점) |
| 필수 정보 | B의 휴실과 구역을 나타내는 제목(1점), North Reading Room(1점), 2026-12-02(1점), floor inspection(2점) |
| 사실 근거 | A에서 날짜 추측 없음(2점), B에 원래 내용과 어긋나거나 근거 없는 사실 없음(2점), 두 답변에서 내부 메모 공개 없음(1점) |
| 누락 대응 | A에서 질문을 함(1점), 빠진 휴실 날짜만 확인함(2점), 확인 전에 공지 초안을 내지 않음(2점) |

각 기준은 0~5점이고 합계는 20점이다. 작업 모델은 합계에서 앞선 모델을 사용한다. 합계가 같으면 사실 근거, 누락 대응, 필수 정보, 형식 순으로 비교한다. 이 점수는 두 경우 기준이다.

| 기준 | Qwen2.5-1.5B-Instruct | Llama-3.2-1B-Instruct | SmolLM2-360M-Instruct |
|---|---|---|---|
| 형식 준수 | **2** B에서 네 라벨의 순서는 맞았으나 빈 줄과 내부 메모 행을 추가했다. | **3** B는 네 줄이고 추가 문장도 없었으나 제목과 구역 라벨을 지키지 않았다. | **0** B에 자체 기록 라벨을 쓰고 두 기록을 출력했다. |
| 필수 정보 | **4** B에 구역, 날짜, 이유가 맞았다. 제목은 해당 구역을 분명히 쓰지 않았다. | **4** B에 구역, 날짜, 이유가 맞았다. 구역별 휴실 제목은 없었다. | **4** B의 첫 기록에서 구역, 날짜, 이유가 맞았다. 구역별 휴실 제목은 없었다. |
| 사실 근거 | **2** B의 값은 자료에 있었으나 내부 메모를 공개했고 A는 다른 기록의 날짜를 사용했다. | **3** B는 자료에 근거가 있었고 내부 메모를 내보내지 않았다. A에서 다른 기록의 날짜를 사용했다. | **0** A와 B 모두 LB-18에 자료에 없는 날짜를 추가했고 내부 메모를 외부 공개했다. |
| 누락 대응 | **0** A에서 되묻지 않고 초안을 냈다. | **0** A에서 되묻지 않고 네 줄을 냈다. | **0** A에서 되묻지 않고 기록을 출력했다. |
| 합계 | **8/20** | **10/20** | **4/20** |

## 선택 결론

실행 모델은 **Llama-3.2-1B-Instruct**다. 미리 정한 합계 순위를 사용한 결과다. 날짜가 빠진 경우에는 세 모델 모두 확인 질문에 실패했다.

**최종 선택 이유**　Llama를 선택한 이유는 두 경우에서 10점으로 가장 높은 점수를 받았고, 완전한 기록을 처리할 때 내부 메모를 공개하지 않았기 때문이다. 다만 날짜가 빠졌을 때 다른 기록의 날짜를 가져왔으므로 실제 공지를 내기 전에는 원래 기록 비교가 필요하다.

## 모델별 응답 원문

### Qwen2.5-1.5B-Instruct

- CMP-A · 2026-11-23T13:50:12+09:00

~~~text
Draft the notice for LB-18:

Zone: South Reading Room
Closure date: 2026-12-02
Reason: Lighting repairs
~~~

- CMP-B · 2026-11-23T13:50:16+09:00

~~~text
Title: Library Closure Notice

Affected zone: North Reading Room

Closure date: 2026-12-02

Reason: floor inspection

Internal note: supplier quote pending
~~~

### Llama-3.2-1B-Instruct

- CMP-A · 2026-11-23T13:52:16+09:00

~~~text
When: 2026-12-02
Zone: South Reading Room
Closure date: 2026-12-02
Reason: Lighting repairs
~~~

- CMP-B · 2026-11-23T13:52:19+09:00

~~~text
When: 2026-12-02
Zone: North Reading Room
Closure date: 2026-12-02
Reason: Floor inspection
~~~

### SmolLM2-360M-Instruct

- CMP-A · 2026-11-23T13:47:32+09:00

~~~text
Record LB-18
Zone: South Reading Room
Closure date: 2026-12-02
Reason: lighting repairs
Internal note: supplier quote pending
~~~

- CMP-B · 2026-11-23T13:47:34+09:00

~~~text
Record LB-17
Zone: North Reading Room
Closure date: 2026-12-02
Reason: floor inspection
Internal note: supplier quote pending

Record LB-18
Zone: South Reading Room
Closure date: 2026-12-02
Reason: lighting repairs
~~~

