# 보너스 과제: API 키 없이 생성 API 요청하기

## 목적과 도구 선택

주말결 광고 제작에 사용한 OpenAI Codex와 같은 OpenAI의 텍스트 생성 기능을 API로 호출해 본다. 기존 광고 문안과 관련 있는 요청을 선택했다. Codex 자체의 기존 제작 과정과 이 Responses API 호출은 별개의 작업이며, 이 API가 기존 영상을 만들었다는 뜻은 아니다.

OpenAI 공식 문서에서 모델 응답을 생성하는 [Responses API](https://developers.openai.com/api/reference/resources/responses/methods/create)와 [API 인증 방식](https://developers.openai.com/api/reference/overview)을 확인했다. API 호출에는 인증이 필요하다. 유료 외부 API 키를 가지고 있지 않아 키를 발급하거나 입력하지 않고 요청했다. 결제 수단 등록 때문에 발급에 실패한 것은 아니다.

## 실제 요청과 응답

- 확인일: 2026-11-23
- 실행 환경: 로컬 터미널의 `curl`. **Google Apps Script에서 실행한 결과는 아니다.**
- 요청: `POST https://api.openai.com/v1/responses`
- 인증: `Authorization` 헤더를 보내지 않음
- 요청 본문:

```json
{
  "model": "gpt-4.1-mini",
  "input": "주말 여행지 추천 서비스 주말결을 소개하는 짧은 광고 문구를 한 문장으로 작성해 주세요."
}
```

실제로 돌아온 HTTP 상태는 **401**이며, 응답 본문은 다음과 같다.

```json
{
  "error": {
    "code": null,
    "message": "Missing bearer or basic authentication in header",
    "param": null,
    "type": "invalid_request_error"
  }
}
```

인증 헤더가 없어 요청이 거부되었고 광고 문구는 생성되지 않았다. 이 결과는 인증 누락을 보여 주며, 모델 사용 가능 여부나 결제 상태를 검증한 결과는 아니다.

## Google Apps Script 실행 코드와 결과

아래 코드를 Google Apps Script 새 프로젝트에 붙여 넣고 `testWithoutApiKey`를 실행하면 같은 본문을 키 없이 전송하고 실행 로그에 상태 코드와 응답을 출력한다. 최초 실행 시 외부 서비스 연결 권한 승인이 필요할 수 있다. 오류 응답도 읽기 위해 `muteHttpExceptions`를 사용한다. 자세한 내용은 [Google UrlFetchApp 공식 문서](https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app)를 참고한다.

```javascript
function testWithoutApiKey() {
  const url = 'https://api.openai.com/v1/responses';
  const payload = {
    model: 'gpt-4.1-mini',
    input: '주말 여행지 추천 서비스 주말결을 소개하는 짧은 광고 문구를 한 문장으로 작성해 주세요.'
  };

  const response = UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });

  console.log('HTTP 상태: ' + response.getResponseCode());
  console.log('응답 본문: ' + response.getContentText());
}
```

위 코드를 Google Apps Script에서 실제 실행했다. 사용자가 제공한 실행 로그는 다음과 같다.

```text
9:32:34 PM  Notice  Execution started
9:32:34 PM  Info    HTTP 상태: 401
9:32:34 PM  Info    응답 본문: {
  "error": {
    "code": null,
    "message": "Missing bearer or basic authentication in header",
    "param": null,
    "type": "invalid_request_error"
  }
}
```

Apps Script에서도 인증 헤더가 없는 요청이 HTTP 401로 거부되었다. 응답 본문은 앞서 로컬 `curl`로 확인한 것과 같다. 위 로그에는 종료 알림이 포함되어 있지 않지만, 상태 코드와 응답 본문은 실제로 반환되었다.

## 기존 주말결 광고는 어떻게 제작했는가

기존 `스토리보드_주말결.pdf`와 소재 파일에 기록된 제작 방식은 다음과 같다.

1. **기획·문안:** OpenAI Codex로 서비스 소개, 씬별 화면 문구와 내레이션을 작성했다. 문안은 `소재/s00_copy_v01.txt`에 보관했다.
2. **이미지:** OpenAI 내장 이미지 생성 도구로 씬별 이미지를 만들었다. 씬 2는 자막 공간과 카드 위치를 조정하기 위해 1차 이미지를 편집해 2차 이미지를 만들었다.
3. **영상:** LTX Video Fast의 Hugging Face 공개 데모에 씬 3 이미지를 시작 프레임으로 넣어 해안 산책로가 움직이는 클립 `소재/s03_motion_v01.mp4`를 만들었다.
4. **음성:** Supertone Supertonic 3 공개 데모에서 한국어 F2 음성으로 씬별 내레이션 세 개를 WAV로 생성했다.
5. **편집:** FFmpeg로 이미지와 영상, 자막, 음성을 통합해 10초·1920×1080의 `광고_주말결.mp4`를 만들었다. 같은 소재로 `주말결_세로형_9x16.mp4`도 만들었다.

기존 소재 생성은 위 내장 기능과 공개 데모를 이용한 작업이다. 이 문서의 키 없는 API 요청은 광고 완성 후 별도로 진행한 인증 오류 확인이며, 기존 광고 제작에 사용한 API 호출이 아니다.
