// result.js

// DOM 요소 참조
const $result = document.getElementById("result");
const $restartButton = document.getElementById("restart-button");

// 로컬스토리지에서 결과 가져오기
const mbtiResult = localStorage.getItem("mbti_result");

if (mbtiResult) {
  // 결과가 있으면 MBTI 결과 표시
  $result.textContent = `${mbtiResult}입니다!`;
} else {
  // 결과가 없으면 안내 문구 표시 및 버튼 텍스트 변경
  $result.textContent = "아직 테스트를 진행하지 않았습니다!";
  $restartButton.textContent = "테스트 하러 가기";
}
