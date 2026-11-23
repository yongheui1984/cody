/** Google Apps Script: 기존 D01 사용자 프롬프트를 Gemini API에 전달한다. */
function runNotice() {
  const key = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');
  if (!key) throw new Error('스크립트 속성 GEMINI_API_KEY를 설정하세요.');
  // system-design.md의 '사용자 입력 · 텍스트 생성' 원문 그대로.
  const prompt = `Draft the notice.
Record: LB-18
Zone: South Reading Room
Closure date: 2026-12-08
Reason: lighting repairs
Internal note: supplier quote pending`;
  const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';
  const response = UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    headers: { 'x-goog-api-key': key },
    payload: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    muteHttpExceptions: true
  });
  const status = response.getResponseCode();
  if (status < 200 || status >= 300) {
    // 서버 응답에 인증 정보가 들어갈 가능성을 피하기 위해 상태 코드만 기록한다.
    console.log('API 요청 실패: HTTP ' + status);
    return;
  }
  const result = JSON.parse(response.getContentText());
  const parts = result.candidates?.[0]?.content?.parts || [];
  const answer = parts.map(part => part.text || '').join('');
  console.log(answer || '텍스트 응답 없음; 응답의 finishReason을 확인하세요.');
}
