// 노래를 추가하려면 아래 SONGS 배열에 항목 하나만 넣으세요. 다른 파일은 수정하지 않습니다.
// 번호는 적지 않아도 목록에 있는 순서대로 자동으로 붙습니다.
// title 은 제목, url 은 노래 링크입니다. duration(길이, 예: "2:43")은 선택입니다.
// credit(만든 이)도 선택입니다. 적지 않으면 모든 곡에 "작사·작곡 정완(글렙)"이 붙습니다. 곡마다 다르면 그 줄에만 credit: "다른 이름" 을 적으세요.
// 이 페이지의 재생기는 url에서 자동으로 만듭니다. 임베드 주소는 적지 않아도 됩니다.
// 전곡 듣기는 duration 만큼 기다린 뒤 다음 곡으로 넘깁니다. 길이가 없으면 그 곡은 자동으로 넘어가지 않습니다.
const DEFAULT_CREDIT = "작사·작곡 정완(글렙)";
const SONGS = [
  { title: "임시 저장", url: "https://suno.com/song/f7bd7ffe-a75e-4143-9ef1-2667781f0653", duration: "2:43" },
  { title: "어린 날에게", url: "https://suno.com/song/c14455e6-4a78-4e2b-a512-9855cbb20228", duration: "2:55" },
  { title: "건너뛰는 노래", url: "https://suno.com/song/fd96afbf-f743-4bfe-b284-5b1250dc2b79", duration: "2:46" },
  { title: "새벽 두 시의 온도", url: "https://suno.com/song/8209a1cf-83aa-4f31-9cba-c5c4ff807c7a", duration: "3:32" },
  { title: "쉬었다고 말했지만", url: "https://suno.com/song/260cc211-0acb-499a-b200-c19bc2d1f2fc", duration: "2:22" },
  { title: "먼 길", url: "https://suno.com/song/fa7c34cf-6fc2-433b-87a7-da5ec83dd912", duration: "3:42" },
];
