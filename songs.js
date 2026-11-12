// 노래를 추가하려면 아래 SONGS 배열에 항목 하나만 넣으세요. 다른 파일은 수정하지 않습니다.
// 번호는 적지 않아도 목록에 있는 순서대로 자동으로 붙습니다.
// title 은 제목, url 은 Suno 링크입니다. duration(길이, 예: "2:43")은 선택입니다.
// audio 는 이 페이지에서 재생할 mp3 경로입니다.
// credit(만든 이)도 선택입니다. 적지 않으면 모든 곡에 "작사·작곡 정완(글렙)"이 붙습니다. 곡마다 다르면 그 줄에만 credit: "다른 이름" 을 적으세요.
// 전곡 듣기는 곡이 끝나면 짧은 쉼 뒤 다음 곡으로 넘깁니다.
const DEFAULT_CREDIT = "작사·작곡 정완(글렙)";
const SONGS = [
  { title: "임시 저장", url: "https://suno.com/song/f7bd7ffe-a75e-4143-9ef1-2667781f0653", audio: "audio/01.mp3", duration: "2:43" },
  { title: "어린 날에게", url: "https://suno.com/song/c14455e6-4a78-4e2b-a512-9855cbb20228", audio: "audio/02.mp3", duration: "2:55" },
  { title: "건너뛰는 노래", url: "https://suno.com/song/fd96afbf-f743-4bfe-b284-5b1250dc2b79", audio: "audio/03.mp3", duration: "2:46" },
  { title: "새벽 두 시의 온도", url: "https://suno.com/song/8209a1cf-83aa-4f31-9cba-c5c4ff807c7a", audio: "audio/04.mp3", duration: "3:32" },
  { title: "쉬었다고 말했지만", url: "https://suno.com/song/260cc211-0acb-499a-b200-c19bc2d1f2fc", audio: "audio/05.mp3", duration: "2:22" },
  { title: "먼 길", url: "https://suno.com/song/fa7c34cf-6fc2-433b-87a7-da5ec83dd912", audio: "audio/06.mp3", duration: "3:42" },
  { title: "러시아에서 들을 노래", url: "https://suno.com/song/45188d67-48fb-4670-b8af-ebe1e3d17fac", audio: "audio/07.mp3", duration: "3:23" },
];
